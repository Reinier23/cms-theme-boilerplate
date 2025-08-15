# The Spicy Spoon – HubSpot CMS Theme

The Spicy Spoon is a fast, accessible, and marketer-friendly HubSpot CMS theme tailored for spicy-food content. It includes drag‑and‑drop modules, a recipe listing with progressive filtering, and a rich recipe detail experience with JSON‑LD.

## Upload / Installation

Using HubSpot CLI:

```bash
hs upload /workspace/the-spicy-spoon the-spicy-spoon --overwrite
```

Or via Design Manager:
- Create a new folder named `the-spicy-spoon` in Design Manager.
- Upload the theme folder contents into it.

## Creating Pages
- Create a new page and select a template under `the-spicy-spoon/templates`.
  - `home.html` for homepage
  - `recipes-listing.html` for a filterable listing page
  - `recipe-detail.html` for individual recipes (Blog Post template)
  - `collections.html` for curated collections
  - `search.html` for search results
- Drag modules from “Spicy Spoon – Core” onto your page to compose content.

## Global Theme Settings
- In the page editor, open **Theme settings** to configure brand colors, typography, spacing, container widths, card radius, pepper icon style, and motion preferences.
- These settings map to CSS custom properties and are reflected across components.

## Notes
- Images are lazy‑loaded and use on‑error fallbacks to SVG placeholders.
- Filters work without JavaScript via URL query params; JavaScript enhances with instant filtering.
- No external build tools or CDNs are required. Assets are included locally.