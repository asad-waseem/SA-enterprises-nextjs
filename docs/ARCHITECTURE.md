# Technical Architecture — Envolve Next.js Template

This document provides a deep architectural breakdown of the Envolve Next.js template codebase. It is written to guide another engineer in safely refactoring, customizing, and scaling the codebase for SA Enterprises.

---

## 1. Framework & Core Technologies

*   **Core Framework**: Next.js v13.4.19 (App Router)
*   **UI Library**: React v18.2.0 & React DOM v18.2.0
*   **Style Preprocessor**: Sass (Sass package v1.66.1 is installed, but the styles are loaded as pre-compiled static CSS).
*   **TypeScript**: Not configured. The project is written in JavaScript (`jsconfig.json` defines absolute path mapping for imports).

---

## 2. Directory Structure & Organization

The project codebase is organized into three primary top-level folders:

```
envolve/
├── app/                  # Next.js App Router pages, root layout, and routing structure
├── components/           # Reusable React components
│   ├── elements/         # Standard UI elements (toggles, popups, scroll-to-top)
│   ├── layout/           # Page layouts, headers (1-15), footers (1-15), mobile menu, and menu definitions
│   ├── sections/         # Segmented section blocks grouped by homepage variant (home1 to home15)
│   └── slider/           # Swiper-based slider carousel components (48 total slider variants)
├── public/               # Static assets folder
│   └── assets/           
│       ├── css/          # Core stylesheet files (bootstrap, responsive, global style, themes)
│       ├── fonts/        # Flaticon, FontAwesome, IcoMoon, and LineAwesome fonts
│       ├── images/       # Shared images and homepage variants 1–5 images
│       ├── images-2/     # Homepage variants 6–7, 10–12 images
│       ├── images-3/     # Homepage variants 8–9 images
│       └── images-4/     # Homepage variants 13–15 images
├── package.json          # Dependency list and npm scripts
├── next.config.js        # Default Next.js configuration
└── jsconfig.json         # Absolute path mapping configuration (@/* -> ./*)
```

---

## 3. Router & Rendering Architecture

The project uses Next.js App Router. Each subdirectory in `app/` representing a route contains a `page.js` file defining the route entry point.

### Hybrid Rendering Architecture
*   **Static Generation**: Root pages (e.g. `app/page.js`, `app/services/page.js`) are React Server Components (RSCs) by default. They contain no `'use client'` directive.
*   **Client Boundaries**: These server-side root pages immediately import and render the `<Layout>` component (`components/layout/Layout.js`). Because `Layout.js` contains the `'use client'` directive at the top, the entire UI tree nested inside `<Layout>` runs under a client-side React execution context.
*   **State & Interactivity**: Client-side rendering is heavily used to handle mobile menu toggles, search modals, active slide indexes, accordions, and custom scroll animations.

---

## 4. Layout Architecture

In a standard Next.js App Router codebase, nested routes use nested `layout.js` files. In this template, the developer bypassed Next.js nested layout mechanics:

1.  **Shell Root Layout (`app/layout.js`)**: It is a plain server component that wraps all pages in `<html>` and `<body>` tags. It imports global fonts via `next/font/google` (`Fira_Sans` and `Barlow`), and imports 15 different color theme CSS files along with standard layout CSS.
2.  **Layout React Component (`components/layout/Layout.js`)**: A client-side React component that acts as the real page shell. Each page wrapper imports `<Layout>` and passes styling properties as props:
    *   `headerStyle` (integer 1-15): Determines which `<HeaderX>` component to render.
    *   `footerStyle` (integer 1-15): Determines which `<FooterX>` component to render.
    *   `wrapperCls` (string, e.g., `"home_1"`): Appends a class to the wrapper `<div className="page-wrapper">` to target color themes scoped in color stylesheets.
    *   `breadcrumbTitle` (string): Triggers the rendering of the breadcrumb banner on secondary pages.

---

## 5. Styling & Visual System

*   **Global CSS Imports**: `app/layout.js` imports global stylesheets directly from `public/assets/css/` (such as `bootstrap.css`, `style.css`, `responsive.css`, `icomoon-3.css`).
*   **Theme Switcher (Color-X CSS)**: 15 separate theme stylesheets (`color.css` to `color-15.css`) are imported globally in the root layout. Styles inside `color-X.css` are scoped strictly under the selector `.home_X` (e.g. `.home_1 .btn-style-one { background-color: #fd4a36; }`). Changing the `wrapperCls` prop on `<Layout>` dynamically applies a page-wide color theme.
*   **Sass Watcher**: The `package.json` contains a sass watch script: `"sass": "sass --watch public/assets/scss/main.scss:public/assets/css/main.css"`. However, there is **no `public/assets/scss` directory** in the project, indicating this script is a dangling template artifact. Custom styles and brand overrides must be applied in custom vanilla CSS styles.

---

## 6. Asset & Image Loading System

*   **Custom Background Injector (`DataBg`)**: The application uses a custom React element `components/elements/DataBg.js` to render background images. The script executes inside a React `useEffect` hook, querying all DOM elements containing a `data-bg` attribute and dynamically setting their CSS `backgroundImage` property to `url(...)` on client mount.
*   **Standard Media**: Images are loaded using standard HTML `<img>` elements referencing relative paths starting with `/assets/images/`. Next.js native `<Image>` optimization components are NOT used.

---

## 7. Important Dependencies

| Dependency | Purpose | Usage / Risk |
| :--- | :--- | :--- |
| `next` (13.4.19) | Framework Core | Handles App Router navigation and configuration. |
| `react` / `react-dom` (18.2.0) | View layer | Drives components, states, and client hooks. |
| `swiper` (10.2.0) | Carousel sliders | Powers home sliders, brand slides, and product galleries. |
| `wowjs` (1.1.3) | Scroll-driven animations | Triggers CSS transition animations on scroll. Client-only library. |
| `isotope-layout` (3.0.6) | Grid filters / sorting | Used for grid animations on portfolio filter screens. |
| `react-modal-video` (2.0.1) | Overlay video popup | Displays YouTube/Vimeo links inside modal dialogs. |
| `react-curved-text` (2.0.2) | Circular text rendering | Renders badge text in circle formats. |
| `sass` (1.66.1) | CSS compiling | Installed, but unused as SCSS source folders are missing. |
