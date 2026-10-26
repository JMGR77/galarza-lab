# Galarza Lab v1.7.1 — Catalogue loading fix

- The homepage now shows its six project cards with direct file:// access, without a local server.
- Normal HTTPS and localhost requests still read `data/projects.json`, with the embedded catalogue as a fallback.
- No project content, image, branding or app links changed.
- When editing catalogue JSON, synchronize the embedded copy within index.html.
