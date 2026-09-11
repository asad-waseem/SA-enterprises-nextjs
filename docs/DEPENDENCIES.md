# Package Dependencies Audit

This document audits the packages listed in `package.json`, explaining why each exists, where it is used, its risk profile, and recommendations for package retention or cleanup during the SA Enterprises transformation.

---

## 1. Core Dependencies

### Next.js (v13.4.19)
*   **Why it exists**: Core React framework driving routing, layouts, and compilation.
*   **Where it is used**: Whole repository structure.
*   **Risk Profile**: Low. It is a stable release of Next.js 13.
*   **Recommendation**: **KEEP** as-is. Do not upgrade to Next.js 14 or 15 yet, as major version upgrades could break older client libraries (e.g. `wowjs` or older Swiper packages).

### React / React DOM (v18.2.0)
*   **Why it exists**: Main UI rendering library.
*   **Where it is used**: All page templates and custom components.
*   **Risk Profile**: Low.
*   **Recommendation**: **KEEP**.

---

## 2. Third-Party Libraries

### Swiper (v10.2.0)
*   **Why it exists**: Renders carousel layouts and sliding image galleries.
*   **Where it is used**: Home banners, partner logo loops, product gallery swipers, and news/testimonials carousels.
*   **Risk Profile**: Low. Highly reliable library.
*   **Recommendation**: **KEEP**. Crucial for maintaining layout aesthetics.

### WOW.js (v1.1.3)
*   **Why it exists**: Detects when elements enter the viewport and triggers entry transitions.
*   **Where it is used**: Initialized inside `Layout.js`; active on all elements using the `wow` class name.
*   **Risk Profile**: **MEDIUM**. `wowjs` is a legacy library that directly manipulates the browser DOM, bypassing React's virtual DOM. This causes React hydration mismatch warnings and pollutes the console. It also requires dynamic runtime loading to prevent SSR build compilation crashes.
*   **Recommendation**: **KEEP** for initial launch to prevent visual breakage, but schedule it for replacement in later optimization phases (e.g., refactoring to modern Tailwind classes, CSS Scroll-Driven Animations, or Framer Motion).

### Isotope Layout (v3.0.6)
*   **Why it exists**: Handles animated grid sorting and category filters.
*   **Where it is used**: Portfolio grids and masonry layouts (`PortfolioFilter` elements).
*   **Risk Profile**: Low, but relies on browser global scopes.
*   **Recommendation**: **REMOVE** from `package.json` in later phases. Since Case Studies and Portfolio grids are recommended to be removed/hidden for the SA Enterprises launch, Isotope is no longer needed.

### React Curved Text (v2.0.2)
*   **Why it exists**: Renders circular badge texts.
*   **Where it is used**: Circular badges on About Page variants (e.g., `/about-2`).
*   **Risk Profile**: Low.
*   **Recommendation**: **REMOVE** during cleanup phases, as SA Enterprises will use the standard `/about-1` layout, which does not require circular text badges.

### React Modal Video (v2.0.1)
*   **Why it exists**: Handles lightbox play overlays for videos.
*   **Where it is used**: Play button trigger elements in home banners and widgets.
*   **Risk Profile**: Low.
*   **Recommendation**: **KEEP** if corporate video links are retained, otherwise candidate for removal.

---

## 3. Development Dependencies

### Sass (v1.66.1)
*   **Why it exists**: SCSS watcher script dev dependency.
*   **Where it is used**: Defined in `package.json` scripts: `"sass": "sass --watch public/assets/scss/main.scss:public/assets/css/main.css"`.
*   **Risk Profile**: Low, but **broken**. The codebase has no SCSS directories, making this package redundant.
*   **Recommendation**: **REMOVE** from dependencies.
