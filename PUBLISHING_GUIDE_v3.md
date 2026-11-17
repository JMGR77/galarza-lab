# Galarza Lab v3.0 — publishing guide

## Safe deployment
1. Keep your existing `galarza.ca` professional portfolio unchanged. This is a separate Cloudflare Pages project.
2. Extract the archive into a NEW folder. Open a terminal there, run `python -m http.server 8000`, then visit `http://localhost:8000/`.
3. Review the homepage, Pipeline Safety flagship, SteamWise AI, Fuel Forecasting, project filters and mobile layout.
4. In `JMGR77/galarza-lab`, upload ALL CONTENTS of the extracted folder **at repository root**, not inside another `galarza-lab/` directory. Replace old site files, especially `index.html`, `v3.css`, `v3.js`, `data/projects.json`, `projects/`, `assets/`, and `downloads/`.
5. Commit; verify Cloudflare Pages deploys from the correct branch (usually `main`) with **no build command** and output directory `.`. If GitHub integration is disconnected, reconnect it before expecting automatic deployments.
6. Open the `*.pages.dev` preview first. Check browser console and network responses. After approval, confirm `https://lab.galarza.ca/` with a hard refresh.

## What v3 changes
- New homepage and featured project pages, with one stylesheet `v3.css` and one small optional script `v3.js`.
- Gallery is static in HTML, so it loads even when JSON fetching is blocked. `data/projects.json` is an editable manifest for future content maintenance.
- Preserves all six existing Fuel AI approaches and their original standalone files from v2.3.
- Added truthful project maturity statuses, SteamWise, AQUAGUARD, ReadyStart, Stickman Studio and project assistants.
- Each image in `assets/projects/` is an AI-generated conceptual illustration, **not project photographic evidence**.

## Important checks
- SteamWise web endpoint returned a 503 during drafting; this can change. The Lab case-study page remains available regardless.
- Do not claim the AI Studio reported performance is independently reproduced.
- Retained original source data and downloads per the user's stated preference, with Kalibrate attribution. Educational intent does not itself establish redistribution permission.
- Actual external links depend on the target service's availability and permissions.

## Future publishing: hybrid workflow
- Today: edit `data/projects.json` plus a matching HTML card in `index.html`; commit through GitHub.
- Next phase: generate cards from JSON at build time using a checked script, then add an authenticated admin with Cloudflare Access / Workers / object storage. Never put private upload credentials in the public JavaScript bundle.
