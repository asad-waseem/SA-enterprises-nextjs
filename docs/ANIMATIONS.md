# Animation Systems & Scroll Effects

This document details the scroll-driven and slider animation engines configured in the template, explains how they are initialized, assesses risks when modifying layout files, and recommends which systems to keep for SA Enterprises.

---

## 1. Animation System Inventory

### scroll-Driven Entries (WOW.js & CSS Animations)
*   **Libraries Used**: `wowjs` (v1.1.3), `animate.css` and `custom-animate.css`.
*   **Purpose**: Triggers animations (fading in, sliding up, sliding left) on HTML elements as they enter the browser viewport.
*   **Initialization**: Initialized inside [components/layout/Layout.js](file:///c:/Users/Eldo/Downloads/Projects/SA%20Enterprises/envolve/components/layout/Layout.js#L57-L62) in a `useEffect` hook on mount:
    ```javascript
    const WOW = require('wowjs')
    window.wow = new WOW.WOW({
        live: false
    })
    window.wow.init()
    ```
*   **Implementation**: Applied by adding the classes `wow` and a target animation class (such as `fadeInUp` or `fadeInLeft`) to layout tags, along with optional data attributes:
    ```html
    <div className="image-one wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
    ```

### Carousel Slide Transitions (Swiper)
*   **Libraries Used**: `swiper` (v10.2.0) React components.
*   **Purpose**: Manages slide transitions, automated loops, and click interactions inside the 48 slider components.
*   **Initialization**: Configured inline in the slider files (e.g. `components/slider/Banner.js` or `components/sections/home1/Banner.js`) by importing modules (`Autoplay`, `Navigation`, `Pagination`) and passing option configs to the `<Swiper>` component.

### Page Preloader
*   **Component**: `Preloader`
    *   **File Location**: [components/elements/Preloader.js](file:///c:/Users/Eldo/Downloads/Projects/SA%20Enterprises/envolve/components/elements/Preloader.js)
    *   **Purpose**: Renders a spinning visual loading cover that fades out once the client page completes mounting.
    *   **Initialization**: Placed inside root headers/footers or conditionally loaded.

### Hover Effects
*   **Libraries Used**: Custom CSS definitions inside `hover.css` and `style.css`.
*   **Purpose**: Handles color shifts, image scaling, overlay sliding, and icon zooming when users hover over cards, navigation tabs, or buttons.

---

## 2. Technical Risks & Issues

1.  **Hydration Match Errors**: `wowjs` manipulates the DOM elements directly by adding inline styles (e.g., `visibility: visible`) during rendering. If these styles trigger before React completes client-side hydration, it can lead to React hydration warning mismatches.
2.  **Server-Side Rendering (SSR) Guard**: `wowjs` imports must be executed on the client side since the library accesses the browser's global `window` and `document` variables. The template handles this by requiring the module dynamically inside a `useEffect` function: `const WOW = require('wowjs')`. If static imports are added in other files without this dynamic guard, compilation/build processes will fail.
3.  **Scroll Container Conflicts**: If container layouts are modified to have CSS `overflow: scroll` or `overflow: hidden` on parent tags, `wowjs` scroll sensors may fail to detect when elements enter the viewport, leaving those elements permanently invisible (`opacity: 0`).

---

## 3. Recommendations for SA Enterprises

*   **WOW.js**: **KEEP**. The scroll-driven fade-ins look highly premium and fit the standard of a modern B2B website. However, delays should be kept minimal (under `300ms`) to avoid blocking users from reading content.
*   **Swiper**: **KEEP**. Essential for the homepage hero banners and brand logo carousels.
*   **Preloader**: **REMOVE/HIDE**. Preloaders delay user interaction and hurt Core Web Vitals (specifically First Contentful Paint). It is recommended to disable the `<Preloader />` to ensure instant page load speeds.
