// MineVista service worker — app shell + libraries cached for offline use
const CACHE='minevista-2026-09-29.31';
const SHELL=['./','index.html','manifest.json','icon-180.png','icon-192.png','icon-512.png','icon-512-maskable.png','favicon.ico','favicon.svg','favicon-16.png','favicon-32.png','https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js','https://cdn.jsdelivr.net/npm/geotiff@2.1.3/dist-browser/geotiff.js'];
// CDN files come back opaque (no-cors, status 0): Cache.add rejects them, so fetch + put. A failed file must not abort the install.
const keep=res=>res&&(res.ok||res.type==='opaque');
// pinned heavy libraries (solid booleans, decimation): fetched on first use, kept in a version-independent cache so app updates do not re-download them
const LIBC='minevista-libs-1', LAZY=['https://cdn.jsdelivr.net/npm/manifold-3d@3.5.4/','https://cdn.jsdelivr.net/npm/meshoptimizer@1.3.0/'];
self.addEventListener('install',e=>{ e.waitUntil(caches.open(CACHE).then(c=>Promise.allSettled(SHELL.map(u=>{ const x=u.startsWith('http'); return fetch(new Request(u,x?{mode:'no-cors'}:{cache:'reload'})).then(res=>keep(res)?c.put(u,res):null); }))).then(()=>self.skipWaiting())); });
self.addEventListener('activate',e=>{ e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE&&k!==LIBC).map(k=>caches.delete(k)))).then(()=>self.clients.claim())); });
// Navigations and index.html: NETWORK FIRST (fresh copy updates the cache; after 3 s or offline the cached shell answers), so a new release
// is visible on the first open; everything else cache first (versioned libraries, icons). A redirected navigation response is re-wrapped.
const NAV_WAIT=3000;
function shellFromCache(){ return caches.match('index.html').then(h=>h||caches.match('./')); }
function netFirst(req){ return new Promise(resolve=>{ let done=false; const fin=r=>{ if(!done&&r){ done=true; resolve(r); } };
  const t=setTimeout(()=>{ shellFromCache().then(h=>{ if(h) fin(h); }); },NAV_WAIT);
  fetch(req.url,{cache:'no-cache',credentials:'same-origin'}).then(res=>{ clearTimeout(t); if(res&&res.ok){ const c1=res.clone(); caches.open(CACHE).then(c=>c.put('index.html',c1)).catch(()=>{}); fin(res.redirected?new Response(res.body,{status:res.status,statusText:res.statusText,headers:res.headers}):res); } else shellFromCache().then(h=>fin(h||res)); })
    .catch(()=>{ clearTimeout(t); shellFromCache().then(h=>fin(h||Response.error())); }); }); }
function isShell(req){ if(req.mode==='navigate') return true; try{ const u=new URL(req.url), base=new URL('./',self.location.href); return u.origin===base.origin&&(u.pathname===base.pathname||u.pathname===base.pathname+'index.html'); }catch(_){ return false; } }
self.addEventListener('fetch',e=>{ if(e.request.method!=='GET') return; if(isShell(e.request)){ e.respondWith(netFirst(e.request)); return; }
  e.respondWith(caches.match(e.request,{ignoreSearch:true}).then(hit=>hit||fetch(e.request).then(res=>{ try{ const u=new URL(e.request.url); const lazy=LAZY.some(pf=>e.request.url.startsWith(pf)); if(keep(res)&&(lazy||u.origin===location.origin||SHELL.includes(e.request.url))){ const copy=res.clone(); caches.open(lazy?LIBC:CACHE).then(c=>c.put(e.request,copy)); } }catch(_){} return res; }).catch(()=>shellFromCache()))); });
