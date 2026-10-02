# MineVista — Mine Planning & Design

MineVista is a browser-based 3D mine planning and design application for open-pit operations. It runs entirely on the user's device (installable as a PWA, works offline) — files are read locally and never uploaded.

## Capabilities

- **Data** — DXF, .dm / .dmx (strings, points, drillholes, block models, wireframes), CSV/TXT coordinates, GeoTIFF orthophotos and elevation models (also multi-gigabyte BigTIFF drone surfaces at native resolution), LAS point clouds, georeferenced images.
- **Digitizing & strings** — polylines, closed strings, arcs, rectangles, ramps; offset, expand/shrink, project at slope angle, clip, split, join, smooth, condition, drape to surface; undo/redo for every action.
- **Wireframes & surfaces** — string linking, DTM creation from points/strings/breaklines, solid booleans (union, difference, intersection), plane and DTM splits, sections, verify and repair, volumes, isosurfaces and grade shells.
- **Analysis** — cut/fill between surfaces by boundary and bench, stockpile volumes, contours, slope maps, profiles and cross-sections, select/code blocks and points by solid.
- **Drill & blast** — pattern design by polygon or free-face offset (square/staggered), production, buffer, trim and presplit holes; collar RL from topography and toe RL from the target floor; stemming by hole length or powder-factor–driven design with flyrock limits; initiation and tie-up, isochrones and movement direction, MIC (8 ms) with scatter simulation and delay suggestions, flyrock clearance zones, vibration and airblast at receivers with site-law calibration, fragmentation estimate, clash checks.
- **Reports & exports** — professional PDF report set (drill plan, charge diagrams, loading sheet, tie-up plan, MIC, safety zones, vibration, material order, design vs as-drilled), XLSX workbook, CSV templates (import/export), stake-out list, IREDES drill plan, DXF R12, LandXML, KML, PNG.
- **Field** — GPS points and traces, site calibration.
- **Interface** — English and Turkish, context help on every command (F1), light and dark themes, desktop and mobile layouts.

## Release 2026-09-29.31

- **Result window** — every calculation opens its result in its own movable, resizable window; the side panel keeps only the inputs. Blast analyses (MIC, delay suggestion, flyrock, vibration, fragmentation, clashes, site law) open there too.
- **End-of-period reconciliation** — start and end surveys against the plan (solids, a planned surface or strings with a floor level), with an optional block model: mined, planned, planned and mined, mined not planned, planned not mined, with solids, outlines, volumes, tonnes and grades, and spatial compliance in percent.
- **Blast management** — blast codes, status workflow, drill sheets, as-drilled deviation, stake-out and geology CSV in the field layout, blast solids and grades per blast and dig slice.
- **Block models** — a clearer panel organised by task, select all / pick on the map in evaluation, two-model comparison, assign value, box plot, legend wizard and reconciliation.
- **Editing** — move, delete and insert point and other pick-based edits repeat until Esc with a live preview; attribute editing with a quick key; template labels show the attribute values entered in the app.
- **Remaining volume and solids** — remaining volume between two surfaces with block-model grades per class and bench; total cut and total fill rows; solid check and repair; cleaning and verification run in the background on large surfaces; output simplification where the reported volume is the exported solid's volume.
- **Known limitations** — in exported exact cut / fill solids some vertices on zero-thickness edges can leave the source surfaces (volumes are exact); with a boundary and a bench report, some bench solids of the remaining volume can have open edges (the whole remaining solid is closed). Fixes follow in the next release.
- **Also** — terrain tools (sinks, pond fill, line of sight, breaklines), fragmentation engine 1.1, faster sections on large surfaces, orthophoto under the plan PDF, more robust PDF files and file names.

## Release 2026-09-29.30

- **Exact cut / fill volume** — triangle-against-triangle between two surveys, the default for triangle surfaces: no grid spacing, the same result as the exact solid; bench rows and lossless solids per bench carry the table volume, and the exported .dmx solids re-open with the same volume. Runs in the background with Cancel.
- **Section system** — define sections (plan, north–south, east–west, free, by points or from the view), step with PgUp / PgDn, clip in front / behind / outside, live section lines, lock the view, digitize on the section plane, section table with next / previous and series, bench clipping.
- **Terrain analysis** — stage–area–volume tables with volume-to-level lookup, watersheds and streams, water-drop paths, rainfall–runoff to a sump, viewsheds, slope / aspect / curvature maps, at the native resolution of large elevation models.
- **Fragmentation** — photo analysis with scale objects, automatic particle delineation, editable particle outlines, size distribution (D10–D90, Rosin–Rammler, Swebrec), reports, and a page in the blast report.
- **Block models** — block properties on double-click, grade–tonnage curve, bench report, depletion applied to the model and saved as .dmx, statistics, coding by solid, column calculator; undo no longer closes an open block model.

## Release 2026-09-29.29

- **Selection** — a click only selects (the open panel takes the selection as its input); double-click, double tap, long press or right-click ▸ Properties opens the properties; Esc ends the tool, a second Esc clears the selection. Every string is listed in the layer tree (virtual list, search, two-way selection, move by drag).
- **.dmx export** for surfaces and solids (triangle + point file pair), strings, points and block models; files opened from .dmx are written back with their own field table; closed solids use the orientation the target program expects, so solids open with positive volume (checked: 37,302.34 m³ on a client solid). Full cut / fill solids can be exported to .dmx with the table volume.
- **Streamed LAS point clouds** — 6.5 GB (249 million points) shows a preview after 1.7 s and is indexed in about 45 s; reopening from the local cache takes under a second; colour by RGB, elevation, intensity or class; cursor elevation, clip by boundary, DTM from the point cloud.
- **Blast design** — crest string as the free face with a front-row check, row azimuth drawn on the map, initiation hole picked on the map, manual tie-up (connectors and delays hole to hole, downhole delays, checks for unconnected holes, loops and double parents); firing times, isochrones and MIC update at once.
- **Orthophoto base maps** under the blast safety-zone map and the cut / fill map, and **Map PNG** at 300 dpi with legend, scale, north arrow and grid.
- **Extend window** (distance, to a string, to a surface, to an elevation, add segment) and **dynamic contours** drawn on the fly with index contours and labels.
- **Legend manager** — system, user and project legends; import of common legend and template files, own .mvlg / .mvtpl formats, class editor, wizard with histogram; legends and templates applied to strings, points, drillholes and wireframes.
- **Block models** of any size streamed from disk: legend classes with live tonnage and grade, filter builder, level / bench slices, sections, clip by solid or surface, evaluation by solid or closed string, grade–tonnage.
- **Ribbon** — one Digitize tab with split buttons, one Solid boolean window (union, differences, intersection, split by surface or plane, surface–solid), no overflow at 1024 px.
- **Fixes** — undo after a repeated cut / fill brings the previous result back; the stockpile base triangulated from the boundary is a constrained Delaunay triangulation and no longer blocks the page on long boundaries.

## Release 2026-09-29.28

- **Solids between surfaces** — new engine for solids between two DTMs and between a DTM and a plane: runs in a background worker with progress and Cancel, one layer per side, every region checked closed, one undo step. On two client surveys (6.4 M and 9.8 M triangles) fill / cut 31,125 / 812,860 m³ in 1.5–13 s with 0.6–0.9 GB peak memory (before: the tab ran out of memory).
- **Cut / fill** — the volume table, bench rows and solids come from the same grid; thin regions below a minimum thickness (0.10 m) are reported on their own row and stay in the volume. **Bench-by-bench solids** («Cut 315–310», «Fill 315–310») with fixed colours. **Export solids (DXF, full)** rebuilds the solids without simplification so that the exported volume equals the table.
- **One result panel** for every volume, area and solid result: operation-specific key figures, a compact Method block, details and checks; screen, Copy, CSV and PDF from the same model. Cut and fill are always reported separately.
- **Volume…** from a closed string (right click, selection panel, command line): between two surfaces, above / below a fixed elevation, or from a base triangulated from the boundary (stockpile / pit). Stockpile volume on large triangle surfaces no longer freezes (background worker, progress, Cancel).
- **Drape to surface / Set Z** act on the whole selection in place (strings, points, text), keeping layer, colour, line type and attributes; text in 3D lies in its own plane at its elevation.
- **Coordinate system** — EPSG code or WGS84 UTM zone with hemisphere, saved with the project; KML asks for it when undefined.
- **Contours** from exact triangle–plane intersections (background, Cancel).
- **Drill & blast form** — open drawings in the polygon list with live refresh and pick on map, «Ore 2.8×3.2» preset, crest and toe string rows (draw / pick; DXF layers), bench height asked only for full-bench presplit.
- **.dmx reader** — implicit fields, empty tables, long header descriptions and a size check before decoding (very large block models are refused with the real numbers instead of freezing the tab).
- **Cut / fill map** — a «no change» band (|Δz| < 0.10 m) and simplified boundaries only around regions of at least 25 m² (no more black speckles); standard 64-colour table for layer colours; distinct default colours per surface.
- **Profile** in a bottom dock tab with axes, chainage, legend below the chart, cursor read-out mirrored on the map and vertical exaggeration 1× / 2× / 5× / 10×; side panels can be resized by dragging.
- **Technical labels** for digitizing options (vertex and line snapping, stream digitizing, topological vertex insertion, polar input, topological move, trim crossovers); **Copy error report** (local clipboard only).

## Release 2026-09-29.27

- **Large elevation models** — elevation GeoTIFFs (also BigTIFF, many gigabytes, tiled or striped, LZW / DEFLATE, with or without overviews) open without the file being read whole: a 9 GB, 3 cm drone surface opens in about 1.5 s and shows its first image in about 2 s. The layer mesh (snapping, older tools, project files) is built from an overview; the display streams level-of-detail tiles while you pan and zoom in plan and 3D, down to the native 3 cm grid, with seamless joins between levels. Colour by layer, elevation or slope, orthophoto draping and elevation slices work on the tiles too.
- **Native-resolution analysis** — cut / fill between two elevation models (grid or exact TIN method), stockpile volume with a choice of base (triangulated from the boundary, best-fit plane, lowest boundary elevation, fixed elevation), drawing volume and volume at an elevation, profiles and the cursor elevation are computed on the full-resolution data. On the analytic test pair the cut / fill result is 18,287.7 / 11,056.5 m³ against the exact 18,288.0 / 11,056.5 m³. The results always report cut and fill separately and print the method, grid spacing and coverage.
- **Progress and Cancel** — long calculations run in a background worker where the platform allows it (otherwise in short slices on the main thread), with a progress chip and a Cancel button; a 200 × 200 m volume on the 9 GB surface (41.6 million grid squares) takes about 3 s.
- **New commands** — Terrain ▸ Surface ▸ Combine surfaces (difference, minimum, maximum, mean, first valid with feathering) creates a new elevation-model layer; Export ▸ CAD / GIS ▸ Export elevation grid writes a float32 GeoTIFF (tiled, DEFLATE or LZW, overviews, nodata, EPSG) or an ASCII grid, for the whole surface, the visible area or a boundary box, at native or overview resolution.
- Files larger than the local library limit are not copied into the browser store; select such a file again when you reopen the project.
- **Review fixes (real client data)** — the cut / fill calculation with solids on two large topography surveys no longer runs out of memory: a pre-check estimates the memory, solids are built on the grid (16 s, volumes unchanged); both cut / fill entries open one dialog with one result, report and CSV; a warning with one-click A ↔ B when the dates in the names are in reverse order; the automatic grid spacing follows the native triangle / cell size of the surfaces and is printed with the result.
- **Triangle / point file pairs (.dm / .dmx)** — pairs are matched only by the same base name (extension and tr / pt suffix removed); every pair is checked against the point numbers and refused with the reason when they do not match (before, files could pair by selection order and give a wrong surface).
- **Layers and files** — deleting a layer, undo / redo and Close all keep the list of open files right: a deleted pair opens again without a message; a file that is already open is loaded again as a copy «name (2)», «(3)» … (the note offers to reload the existing layer instead); undo of a deleted large layer reads it again from its source file.
- **Clip by string** works on .dm / .dmx surfaces; the selected closed string is the default boundary in every boundary field and the selected surface the default surface.
- **Clear messages** — no raw program error text is shown: the message says what failed and what to do, the technical detail is folded under Details in the Output panel, and a partial result is undone.
- **Memory, updates, drawing** — adaptive base grid and compact cut / fill map, memory released when layers or projects are closed; a new release is used at the first reopen (network first; with unsaved work a lasting "Update ready — Reload" note); drawn lines are solid (not broken by the terrain), End link closes the solid in one press, mouse layout options named by what they do, progress while large files open, and a large elevation model not kept in the file library can be linked again by selecting its file. Side panels no longer close by themselves while they work or right after a click inside them (surface wizard Next, blast report); in the Analysis and Terrain windows the default A is the selected surface, otherwise the first surface (never a string layer); a file above 2 GB says what to do.

## Release 2026-09-29.26

- **New brand** — the new MineVista logo everywhere: header mark and wordmark for dark and light themes, splash screen, start screen, About box, favicon, home-screen and app icons, and the logo in the PDF report headers.
- **Splash screen** — a quiet open-pit image with the logo, the line "Plan deeper · Design smarter", a gold loader and the version; on phones the logo sits on top and the image below. The chosen theme applies before the splash is drawn.
- **Start screen** — an icon rail (Home, Layers, Analysis, Terrain, Field, Reports, Settings, Profile), quick actions (Open file, New project, Field survey, Blast design, My files, Help), recent projects as cards with thumbnail, type, date, favourite and remove (the files stay in the library), notifications and a 30-day activity strip. Everything shown comes from real records on the device: release notes of this version, an update ready to load, the backup made by Close all, and exports whose blast design changed after the export. With no records, the activity strip is not shown.
- **Profile** — no password, stored on the device only: name, job title, organisation, default Checked by and Approved by, language, decimals and theme. It fills Prepared by, Checked and Approved in the report title blocks; plan, image and cut / fill PDFs now show Checked and Approved too.
- **Fix** — panels opened from the start screen on a desktop (My files, Profile, About, project and display settings) now open above it.
- **Review fixes** — on the start screen, messages no longer cover any panel: they sit in the free image area on the right, or in a band of their own (bottom on desktop, top on phones) while the panels shrink and scroll. Recent projects without a preview (or with a blank one) show a file-type symbol with the extension instead of an empty square, also in My files; Enter on the favourite or remove button of a card no longer opens the project, and favourites come first. The About box names no browser ("iPhone / iPad: Share ▸ Add to Home Screen", other devices: the browser menu) and is fully translated; messages name no third-party program. The activity strip shows only counters above zero. Saving the profile never overwrites a name typed in a report: it fills only empty fields or fields that came from the profile and says which ones were kept. The profile shows the language in use. A visible keyboard focus ring on the start screen, and a sharp logo on high-density phone screens.

## Release 2026-09-29.25

- **More room for the map** — the full-width drawing and tool panel under the ribbon is gone. Drawing prompts and options (Closed, Undo last point, Finish, Cancel, Drape) are keys in the command line; tool results and extra options sit in a small one-line chip at the bottom left that can be closed. While drawing at 1600 × 900 the free map area is about 150 px taller.
- **Current object bar** — on the right of the command line: data type, generated name, elevation source (surface, fixed RL, snapped, section plane), colour index (64 colours) and line type for new data. With a selection, colour and line type go to the selected strings in one undo step. Line types are drawn in the view (dashed, dotted, dash-dot, long dash, centre).
- **Drawing** — live point count, length and slope length in the status bar; a right-click menu (Finish, Close / Open, Undo last point, Drape, Apply elevation to all, Clear, Cancel, name and elevation source) with shortcuts; on phones a one-row draw bar (Undo point · Closed · Finish · Cancel · ⋯).
- **String properties** — double-click a string to edit its name, attributes, colour, line type, closed / open state and X / Y / Z coordinates; one undo step.
- **Mouse layout** — left click selects; Ctrl + click adds or removes and cycles through stacked candidates; box selection mode (quick key `smx`: left to right = entirely inside, right to left = crossing), swipe selection with the width typed in the command line, append mode. While drawing, left click places a free point and right click snaps to data; right or middle drag pans, the wheel zooms at the cursor. The previous layout can be restored in Display settings; touch input is unchanged.
- **Brand colours** — Midnight, Graphite and Platinum with MineVista Gold for primary actions, the active tab and selected cards; warnings always show an icon and text; the light theme uses dark gold for text and borders. Data colours in the view (selection, cut / fill, legends, blast layers) are unchanged.
- **Fixes** — open surfaces show «–» instead of a volume in the solid volume table; the cut / fill boundary field reads "Boundary"; the road report, string query and polygon tools use the common number format; on phones notifications no longer cover the legend.
- **Review fixes** — app-generated layer names such as "Drawings" follow the interface language in String properties and the layer list; the String properties point table shows X / Y / Z in the data format with three decimals, right aligned, and accepts a point or a comma as the decimal separator without rounding untouched values; line types stay visible on circles, arcs and contours; Esc in a field of the new bars leaves the field instead of cancelling the drawing, and Enter on a list finishes it; the section-plane elevation source says when there is no section and uses the surface rule; the current object bar moves to a second row instead of being cut off on narrower screens and keeps its data type and line type lists; on phones the legend stays above the parameter chip and the pressed draw-bar key is readable in the light theme; F1 opens the help of the element under the pointer; a click selects the nearest object; Apply without changes adds no undo step; the closed-drawing volume shows its surface coverage.

## Release 2026-09-29.24

- **Design system** — IBM Plex typeface embedded for offline use; one set of light and dark colour tokens for the whole interface; text contrast of at least 4.5 : 1, including status tags and hints.
- **Unified number format** — quantities in the interface language (`1 049,0 m` / `1,049.0 m`, true minus sign, thin-space thousands); coordinates in data format (`650930.781`) everywhere: status bar, command line, measurements, output log and exports.
- **Live status bar** — cursor X / Y / elevation with a snap marker, horizontal distance, azimuth and gradient from the last point, active command, snap, view and scale, coordinate system.
- **Command line** — type coordinates while drawing or measuring: `x,y,z`, `x y z` or `x;y;z` (decimal comma accepted), `@dx,dy,dz` relative to the last point, `@distance<azimuth<gradient`; history, quick keys and command names.
- **Result tables** — cut / fill and solid volume shown as a KPI strip, table and checks, with Copy (tab separated, pastes as numbers) and CSV (full precision). Cut and fill are always reported separately; the cut / fill report follows the interface language and uses the same number format as the screen.
- **Output dock** — the Output panel is a resizable bottom dock (drag its top border, double-click to collapse) that never covers the view, the legend or the scale bar; it stays closed at start-up unless pinned.
- **Brand** — new splash screen, start screen and header logo.
- **Terminology** — "Grid spacing" replaces "cell size" in the cut / fill and surface tools.
- **Fixes** — English text in the measurement log, the results list and the coordinate-system window; the result panel no longer overflows with long layer names; the layer name column of the solid volume table gets the free width; a relative coordinate typed after a point without elevation takes the elevation rule of the command.

## Use

Open the app in any up-to-date web browser. On mobile, add it to the home screen to install.

## Author

Levent Nacar — Mine Planning and Drill & Blast Engineer.
