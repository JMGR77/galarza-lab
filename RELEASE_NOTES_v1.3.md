# Galarza Lab v1.3 — ChatGPT flagship

## New
- Dedicated primary ChatGPT forecasting app at `/projects/calgary-fuel/chatgpt/` (self-contained HTML).
- Main forecasting study emphasizes ChatGPT as the primary case; five other platform solutions remain in supporting reference sections.
- Original actual-vs-predicted and historical charts, public-safe summary CSV and worksheet.
- More vivid cyan/teal accents and primary-app call-to-action.
- Pipeline Safety link retained as `https://pipeline-safety-intelligence.jmgr77.chatgpt.site/`.

## Critical public release gate
The supplied publication package explicitly states that historic source-data redistribution rights are UNVERIFIED. The ChatGPT application embeds observations; **do not publish this ZIP on a public site until data rights are confirmed or the app has been rebuilt with authorized data**. The `references/data/original_source_unverified_licence.xls` file and model binaries were deliberately omitted.

## Technical qualifications
- Reported ChatGPT validation: 303 chronological observations; linear regression MAE 3.3196 ¢/L, RMSE 4.8043 ¢/L; baseline MAE 3.6531 ¢/L.
- The application estimates the next weekday; holidays and data nonreporting days may not align with it. Not a continuously refreshed price feed.
- Prediction bands based on historical validation RMSE are not calibrated, guaranteed 95% coverage.
- Other AI platforms' scores are NOT directly comparable without standard dataset, horizon, splits, and scoring.

## Deploy after clearance
Upload *contents* of this directory to GitHub repository `JMGR77/galarza-lab` root; Cloudflare Pages output directory `.`. Existing main portfolio remains separate.
