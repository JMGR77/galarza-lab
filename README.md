# Galarza Lab v1.0

Independent, mobile-friendly portfolio/sandbox for technical creations. It does **not** alter the professional portfolio project or its deployment.

## Project files
- `index.html` — site layout and accessible detail dialog
- `styles.css` — responsive design
- `app.js` — project filtering, search, details and safe external links
- `data/projects.json` — editable project catalogue
- `assets/favicon.svg` — brand icon
- `_headers`, `robots.txt`, `sitemap.xml` — Cloudflare security headers and indexing

## Test locally
Run `python -m http.server 8080` from this directory, then visit http://localhost:8080. Do **not** just double-click `index.html` because browsers commonly block local `fetch()` of the JSON catalogue.

## GitHub-first publishing
1. Create a new GitHub repository named `galarza-lab` under your account; keep `juan-galarza-portfolio` unchanged.
2. Upload **the contents** of this folder to the new repository root (or `git init`, `git add .`, `git commit -m "Initial Galarza Lab"`, `git branch -M main`, `git remote add origin ...`, `git push -u origin main`).
3. In Cloudflare: Workers & Pages → Create application → Pages → Connect to Git. Select the **new** repository.
4. Deploy as a static site, production branch `main`, **no build command**; output directory `.` if the dashboard requires one.
5. Verify the `*.pages.dev` URL, including cards, search, modal, mobile display, and outbound game link.
6. In the new Pages project, add Custom domains → `lab.galarza.ca` and follow Cloudflare's suggested DNS settings. Do not change apex `galarza.ca` or `www` DNS records.
7. Optionally add a Lab link in your professional portfolio in a separate, later commit.

Cloudflare documentation: https://developers.cloudflare.com/pages/get-started/git-integration/ and https://developers.cloudflare.com/pages/configuration/custom-domains/

## Add a project
Edit `data/projects.json` and add an entry following the existing format:

```json
{
  "id":"my-new-app",
  "title":"My New App",
  "category":"Data & AI",
  "status":"Live",
  "featured":false,
  "summary":"One-sentence public description.",
  "description":"Evidence-based longer description.",
  "tags":["Demo","Python"],
  "art":"energy",
  "appUrl":"https://example.com/my-live-app",
  "repoUrl":"",
  "reportUrl":"",
  "year":"2026"
}
```

Commit to `main` to trigger automatic deployment. Empty links never render launch/download buttons. Art options: `gravity`, `pipeline`, `fuel`, `energy`, `fleet`, `maker`.

## Uploading actual apps and reports
Use separate repositories and Cloudflare projects for major interactive apps. Set `appUrl` to the verified public application URL. Host downloadable PDF/CSV files only if you have the rights and permission to make them public. For simple public resources, put files in this site's `downloads/` folder and use a **full HTTPS URL** in `reportUrl` after deployment. Do not publicly commit credentials, private datasets, resume contact details, client material or proprietary operational information.

## Planned v2 administrator dashboard
Requires explicit architecture work before enabling: Cloudflare Access or equivalent strong authentication, Workers API, R2 file storage, D1/KV project metadata, authorization checks, file-size/type validation, upload malware protections, content review, rate limits, and audit logs. No admin login or server upload exists in v1. Never attempt to implement admin permissions solely in browser JavaScript.

## Site checklist
- [ ] New GitHub repository created and connected
- [ ] New Cloudflare Pages site working on preview URL
- [ ] Subdomain attached and SSL active
- [ ] Safety game link tested in a real browser
- [ ] Project case study descriptions approved for public visibility
- [ ] Add app links only as each app goes live

## Calgary Fuel Price Forecasting (dedicated study page)
- Link: `/projects/calgary-fuel/` (`projects/calgary-fuel/index.html`).
- Overview and sections: ChatGPT, Google Notebook/Colab, Google AI Studio, Perplexity, Claude, Gemini and comparison.
- Illustrative SVG figures: `assets/fuel/workflow.svg`, `assets/fuel/mae-comparison.svg`. They are explanatory figures, **not screenshots**.
- Approved original screenshots: put images in `assets/fuel/screenshots/`, then replace matching screenshot placeholders in the study HTML with local `<img>` markup and descriptive alt text.
- Only the ChatGPT workflow has documented numerical results. Do not imply unverified platform performance. Compare only on identical dates/inputs.
- Version note: assignment worksheet ends October 20; documented working dataset extends to October 23, 2026. Reconcile the comparison period before publishing cross-platform scores.
