# Galarza Lab v1.4 — AI Studio integration

- Added `projects/calgary-fuel/ai-studio/`, a source-backed reference page.
- Added AI Studio source at `downloads/calgary-fuel-google-ai-studio-source.zip`.
- Updated all six solution summaries and the comparison table.
- Flagship ChatGPT application and Pipeline Safety link retained.

## Publication checks
- Google AI Studio project is React/Vite source code, not compiled static HTML.
- `npm install --offline` unavailable in the build environment due to uncached dependencies; no local build is claimed.
- Original Google AI Studio app URL appears in supplied README but public access is not verified.
- Google AI Studio reports MAE 1.742 and RMSE 2.884 but no complete out-of-sample predictions/trained model were supplied; these numbers are labelled reported/unverified.
- App's `runGradientBoostingInference` uses heuristic rules rather than an exported trained Gradient Boosting model; some CSV exports are abbreviated.
- Source-data publication and redistribution rights for flagship ChatGPT application remain a release gate.
- Do not publish API secrets; no `.env.local` is included.

Deploy: upload extracted ZIP contents to root of JMGR77/galarza-lab; do not unzip nested under another `galarza-lab` directory. No files from the professional portfolio are changed.
