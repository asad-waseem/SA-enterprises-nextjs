# Design System & Brand Token Integration

This document audits the template visual design system, outlines how design tokens are defined and loaded, and provides a safe implementation guide for applying the new SA Enterprises B2B corporate brand colors and typography.

---

## 1. Current Template Visual System

*   **Grid System**: Built on Bootstrap. The layout wraps structures in `.row` and column layouts (e.g. `.col-lg-8`, `.col-md-6`) utilizing styles loaded from [public/assets/css/bootstrap.css](file:///c:/Users/Eldo/Downloads/Projects/SA%20Enterprises/envolve/public/assets/css/bootstrap.css).
*   **Color Styling Structure**: Color themes are applied globally, scoped by parent wrapper classes.
    *   *Theme 1 (Default)*: Active elements, text highlights, icons, borders, and buttons are colored bright orange/coral `#fd4a36`. Secondary colors utilize orange/red gradients (e.g., `#fd4a36` to `#ff8300`).
*   **Typography**:
    *   *Google Fonts*: Initialized in `app/layout.js`.
        *   `Fira_Sans`: Weights `400` to `900`. Scoped to CSS variable `--fira-sans`.
        *   `Barlow`: Weights `400` to `700`. Scoped to CSS variable `--barlow`.
    *   *Font application*: `--fira-sans` is used for headers (`h1`, `h2`, `h3`, etc.) and titles. `--barlow` is used for body paragraphs and labels.
*   **Breakpoints**: Standard Bootstrap grid breakpoints are managed in [public/assets/css/responsive.css](file:///c:/Users/Eldo/Downloads/Projects/SA%20Enterprises/envolve/public/assets/css/responsive.css):
    *   `min-width: 1200px` (Desktop Large)
    *   `max-width: 1199px` to `991px` (Tablet Landscape)
    *   `max-width: 991px` to `768px` (Tablet Portrait)
    *   `max-width: 767px` (Mobile)
*   **Icon Library**: Loaded via font files inside `public/assets/fonts/` and imported stylesheets:
    *   `fontawesome-all.css` (FontAwesome v5 icons, classes starting with `fa`, `fas`, `far`).
    *   `flaticon.css` (FlatIcons, classes starting with `flaticon-`).
    *   `icomoon-3.css` (IcoMoon custom shapes).
    *   `line-awesome.css` (LineAwesome).

---

## 2. Proposed Brand Tokens: SA Enterprises

The target B2B identity will use a premium, trustworthy corporate palette:

| Token Name | Hex Code | Purpose in UI |
| :--- | :--- | :--- |
| **Deep Navy** | `#0A1A33` | Backgrounds, primary footers, sticky headers, text overlays. |
| **Gold** | `#C9A24B` | Primary actions, CTA borders, highlights, custom bullet icons. |
| **White** | `#FFFFFF` | Form backgrounds, card surfaces, layout panels. |
| **Off White** | `#F7F7F3` | Section backgrounds, alternate tables, sidebar widgets. |
| **Dark Text** | `#111827` | Headings, paragraph text, form labels. |

---

## 3. Brand Colors Replacement Strategy

Since styles are pre-compiled and nested deep inside a 952KB stylesheet (`style.css`), modifying the styles directly is risky. The recommended approach to apply the new design tokens is:

### Option A: High-Priority Override Stylesheet (Recommended)
Create a new stylesheet file [NEW] `/public/assets/css/sa-overrides.css` and import it in `app/layout.js` **after** all other stylesheets:

```diff
  import "public/assets/css/style.css"
  import "public/assets/css/responsive.css"
+ import "public/assets/css/sa-overrides.css"
```

Inside `sa-overrides.css`, override target styles using variables or CSS class selectors:
```css
/* SA Enterprises Global Brand Overrides */

:root {
    --navy-brand: #0A1A33;
    --gold-brand: #C9A24B;
    --off-white: #F7F7F3;
    --dark-text: #111827;
}

/* Override Coral Accent Color globally in theme 1 */
.home_1 .btn-style-one,
.home_1 .scroll-to-top,
.home_1 .main-header .sidemenu-nav-toggler,
.home_1 .news-block-one .category,
.home_1 .product-block-one .inner-box .image-box .category {
    background-color: var(--gold-brand) !important;
}

.home_1 a,
.home_1 h1, .home_1 h2, .home_1 h3, .home_1 h4, .home_1 h5, .home_1 h6 {
    color: var(--navy-brand);
}

.home_1 a:hover {
    color: var(--gold-brand) !important;
}

.home_1 .main-header.header-style-one {
    background-color: var(--navy-brand) !important;
}

.home_1 .main-footer {
    background-color: var(--navy-brand) !important;
    color: #ffffff;
}

.home_1 .btn-style-two {
    border-color: var(--gold-brand) !important;
    background-color: transparent !important;
    color: var(--gold-brand) !important;
}

.home_1 .btn-style-two:hover {
    background-color: var(--gold-brand) !important;
    color: #ffffff !important;
}
```

### Option B: Replace Theme Swatches in `color.css`
Since the default theme utilizes `color.css`, we can safely search-and-replace specific hex strings inside `public/assets/css/color.css` only:
1.  **Replace Main Coral Theme Color**: Search and replace `#fd4a36` with the new Gold brand color `#C9A24B`.
2.  **Replace Linear Gradients**: Change gradient variables (at the bottom of `color.css`) from orange gradients to Gold/Navy gradients.
    *   *Change*: `-webkit-linear-gradient(0deg, rgb(253, 74, 54) 16%, rgb(255, 131, 0) 100%)`
    *   *To*: `-webkit-linear-gradient(0deg, rgb(10, 26, 51) 0%, rgb(201, 162, 75) 100%)`
