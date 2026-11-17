# Galarza Lab v3.4 — Release verification

## Completed in this environment
- 21 project entries preserved; `node tests/smoke.test.cjs` passes.
- `node --check v3.js` and `node --check app.js` pass.
- 313 relative HTML asset and internal-link references checked; no missing targets.
- Original `Todos_Volvemos_Seguros_Workshop.pptx` included (6,089,592 bytes) with 2 download links on the facilitation page.
- Distinct Facilitation illustration and authentic 3D printing photographs included.
- Original gearbox photograph rotated to a 1600 × 777 landscape file with no AI alterations.
- 21 entries, 129 files, archive integrity passes.

## Not completed
Automated browser navigation/screenshots could not run: Chromium navigation in this execution environment returns `ERR_BLOCKED_BY_ADMINISTRATOR` for both local HTTP and file URLs. Therefore final responsive visual appearance, user interaction and external application availability are **not independently browser verified**.

## Mandatory production review
1. Extract ZIP into an empty folder; ensure `index.html`, `v3.css`, `v3.js`, `assets/`, `projects/` exist at its root.
2. Run `Start_Galarza_Lab.bat`, or run `python -m http.server 8000` from that root.
3. Open `http://localhost:8000/` in a browser and check mobile size; verify no directory listing.
4. Visit `/projects/facilitation/` and `/projects/3d-printing/` and check layout, images and original PowerPoint download.
5. Test the catalogue search and category filters, Calgary Fuel sections and all public external app URLs.
6. Upload the **contents** of the extracted folder to the GitHub repository root (not a nested enclosing folder); confirm Cloudflare Pages build and custom domain.
7. Confirm `https://lab.galarza.ca/` and hard-refresh browser cache.

## Caution
The user's existing Calgary Fuel dataset downloads are preserved. Attribution and educational use do not by themselves establish permission to redistribute third-party datasets. Existing external apps and hosted authentication policies are outside this package's control.
