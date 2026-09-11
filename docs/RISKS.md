# Technical Risks & Mitigation Strategies

This document audits technical risks present in the Envolve template codebase, rates their impact (LOW, MEDIUM, HIGH), and recommends developer mitigations.

---

## 1. High-Impact Risks

### Dead PHP Form Handlers
*   **Risk Description**: All template forms direct their action attributes to legacy PHP scripts (e.g. `action="sendemail.php"` or `assets/inc/sendmail.php`). These scripts do not exist in the Next.js directory. Submitting any form on a standard server deployment will throw a `404 Not Found` error.
*   **Rating**: **HIGH**
*   **Mitigation**: Rewrite form components to use React client events (`onSubmit`) with dynamic state binding (`useState`), and route data to a dedicated Next.js API handler (`/app/api/quote/route.js`) using Node mailer or a third-party form handler.

### Legacy WOW.js Compilation Crashes
*   **Risk Description**: `wowjs` is a legacy library that relies on browser-only scopes (`window` and `document`). If imported statically (`import WOW from 'wowjs'`) inside a page rendered server-side, the Next.js compilation or production build phase will crash.
*   **Rating**: **HIGH**
*   **Mitigation**: Always wrap `wowjs` instantiation inside a React `useEffect` callback hook using dynamic `require()` statements to ensure it runs client-side only:
    ```javascript
    useEffect(() => {
        const WOW = require('wowjs');
        const wow = new WOW.WOW({ live: false });
        wow.init();
    }, []);
    ```

---

## 2. Medium-Impact Risks

### Navigation Path Drift
*   **Risk Description**: The desktop layout menu [Menu.js](file:///c:/Users/Eldo/Downloads/Projects/SA%20Enterprises/envolve/components/layout/Menu.js) and mobile drawer menu [MobileMenu.js](file:///c:/Users/Eldo/Downloads/Projects/SA%20Enterprises/envolve/components/layout/MobileMenu.js) contain duplicated hardcoded link paths. If an engineer edits navigation links in one component but forgets to update the other, it creates broken navigation inconsistencies between desktop and mobile users.
*   **Rating**: **MEDIUM**
*   **Mitigation**: Refactor menus to parse a shared links configuration array inside [NEW] `/config/navigation.js` so path changes cascade to both desktop and mobile menus automatically.

### Next.js Hydration Warning Warnings
*   **Risk Description**: `wowjs` animates elements by updating CSS styling attributes (like setting `visibility: visible` or `animation-name`) on load. If these styles apply before Next.js completes client-side hydration matching, React will output console warnings.
*   **Rating**: **MEDIUM**
*   **Mitigation**: Initialize WOW.js only after page load completes, or disable animated entrance scripts if hydration errors degrade load performance.

---

## 3. Low-Impact Risks

### Dangling Sass compiler Script
*   **Risk Description**: The watch script `"sass": "sass --watch public/assets/scss/main.scss:public/assets/css/main.css"` references a `/public/assets/scss` directory that does not exist in the project, causing the script to crash immediately on launch.
*   **Rating**: **LOW**
*   **Mitigation**: Delete the broken `"sass"` watch task from `package.json` and work with custom overrides CSS stylesheets to customize styles safely.

### Asset Bloat & Storage Overhead
*   **Risk Description**: The template contains 4 distinct image folders (`images` through `images-4`) containing hundreds of MBs of unused high-res image files for different homepage layouts.
*   **Rating**: **LOW**
*   **Mitigation**: After selecting the primary active routes, delete unused assets subdirectories to optimize git clones and minimize repository build bundle sizes.
