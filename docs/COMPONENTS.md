# Component Inventory & Reusability Audit

This document inventories the primary reusable components in the template, grouped by functional category, and evaluates their reusability and potential modifications for SA Enterprises.

---

## 1. Global Navigation & Layout Components

### Core Layout Wrapper
*   **Component**: `Layout`
    *   **File Location**: [components/layout/Layout.js](file:///c:/Users/Eldo/Downloads/Projects/SA%20Enterprises/envolve/components/layout/Layout.js)
    *   **Purpose**: Real page container; dynamically renders headers, footers, sidebars, search popups, breadcrumbs, and pre-loader.
    *   **Props**: `headerStyle` (integer), `footerStyle` (integer), `headTitle` (string), `breadcrumbTitle` (string), `children` (node), `wrapperCls` (string).
    *   **Dependencies**: `wowjs`, `BackToTop`, `DataBg`, `Breadcrumb`, `SearchPopup`, `Sidebar`.
    *   **Reusability**: **YES**. This component is critical to wrapping the application pages and managing theme selectors.
    *   **Modifications Required**: Lock `headerStyle={1}`, `footerStyle={1}`, and `wrapperCls="home_1"` by default for consistency.

### Desktop Navigation Menu
*   **Component**: `Menu`
    *   **File Location**: [components/layout/Menu.js](file:///c:/Users/Eldo/Downloads/Projects/SA%20Enterprises/envolve/components/layout/Menu.js)
    *   **Purpose**: Renders the desktop navigation bar link items.
    *   **Props**: None.
    *   **Dependencies**: `next/link`.
    *   **Reusability**: **YES**.
    *   **Modifications Required**: Completely rewrite links to map the proposed SA Enterprises menu: Home (`/`), About (`/about`), Solutions (`/solutions`), Products (`/products`), Industries (`/industries`), FAQ (`/faq`), and Contact (`/contact`).

### Mobile Navigation Menu
*   **Component**: `MobileMenu`
    *   **File Location**: [components/layout/MobileMenu.js](file:///c:/Users/Eldo/Downloads/Projects/SA%20Enterprises/envolve/components/layout/MobileMenu.js)
    *   **Purpose**: Renders the mobile slide-out navigation bar.
    *   **Props**: `isSidebar` (boolean), `handleMobileMenu` (function), `handleSidebar` (function).
    *   **Dependencies**: `next/link`, `useState`.
    *   **Reusability**: **YES**.
    *   **Modifications Required**: **HIGH RISK**. This file contains a duplicate hardcoded list of the menu links. It must be updated synchronously with `Menu.js` to avoid broken link paths on mobile screens.

### Sidebar Info Panel
*   **Component**: `Sidebar`
    *   **File Location**: [components/layout/Sidebar.js](file:///c:/Users/Eldo/Downloads/Projects/SA%20Enterprises/envolve/components/layout/Sidebar.js)
    *   **Purpose**: Slide-out informational panel triggered by a hamburger button.
    *   **Props**: `isSidebar` (boolean), `handleSidebar` (function).
    *   **Reusability**: **YES** (optional).
    *   **Modifications Required**: Replace logo image path `/assets/images/logo.png` with SA Enterprises logo and update contact text fields (address, toll-free number).

---

## 2. Page Headers & Footers (Variants 1-15)

### Header Templates
*   **Components**: `Header1` to `Header15`
    *   **File Locations**: `components/layout/header/Header1.js` to `Header15.js`
    *   **Purpose**: Specific visual headers containing top-bar contact text, logos, social media buttons, search forms, and navigation wrappers.
    *   **Reusability**: **YES**. We should standardize on `Header1` as the base desktop header.
    *   **Modifications Required**: Update phone number, physical address, email addresses, and logo asset paths. Remove social media icons if not applicable.

### Footer Templates
*   **Components**: `Footer1` to `Footer15`
    *   **File Locations**: `components/layout/footer/Footer1.js` to `Footer15.js`
    *   **Purpose**: Specific footers containing description lists, newsletter forms, quick links tables, and copyrights.
    *   **Reusability**: **YES**. Standardize on `Footer1`.
    *   **Modifications Required**: Update brand description text, email info, address, phone number, and copyright metadata. Disable the newsletter subscription button action (points to dead PHP links).

---

## 3. Product Catalog & Details Components

### Quantity Selector Input
*   **Component**: `QuantityInput`
    *   **File Location**: [components/elements/QuantityInput.js](file:///c:/Users/Eldo/Downloads/Projects/SA%20Enterprises/envolve/components/elements/QuantityInput.js)
    *   **Purpose**: Input counter spinner (increments/decrements quantity).
    *   **Props**: None.
    *   **Dependencies**: `useState`.
    *   **Reusability**: **YES**. Useful for the "Request a Quote" form quantity specification.
    *   **Modifications Required**: None.

### Service Navigation Tabs
*   **Component**: `ServiceTabs1`
    *   **File Location**: [components/elements/ServiceTabs1.js](file:///c:/Users/Eldo/Downloads/Projects/SA%20Enterprises/envolve/components/elements/ServiceTabs1.js)
    *   **Purpose**: Renders interactive tabs showing detailed work processes.
    *   **Props**: None.
    *   **Dependencies**: `useState`.
    *   **Reusability**: **YES** (Can be used on solution pages to map out hardware request pipelines).
    *   **Modifications Required**: Replace text content and images with SA Enterprises workflow stages (Requirement, Sourcing, Quotation, Delivery).

---

## 4. UI elements & Sliders

### Statistics Counter
*   **Component**: `Counter` / `CounterUp`
    *   **File Location**: `components/elements/Counter.js`, `CounterUp.js`
    *   **Purpose**: Animates numerical counters when they scroll into viewport.
    *   **Props**: `end` (integer), `start` (integer).
    *   **Dependencies**: Custom scrolling triggers.
    *   **Reusability**: **YES**.
    *   **Modifications Required**: Update numbers to reflect SA Enterprises stats (e.g. "Products Sourced", "Happy Clients").

### Video Lightbox Trigger
*   **Component**: `VideoPopup`
    *   **File Location**: [components/elements/VideoPopup.js](file:///c:/Users/Eldo/Downloads/Projects/SA%20Enterprises/envolve/components/elements/VideoPopup.js)
    *   **Purpose**: Opens a video overlay modal when clicking play buttons.
    *   **Props**: None.
    *   **Dependencies**: `react-modal-video`.
    *   **Reusability**: **YES** (Optional).
    *   **Modifications Required**: Link to a real corporate overview video, or hide.

### Background Dynamic Handler
*   **Component**: `DataBg`
    *   **File Location**: [components/elements/DataBg.js](file:///c:/Users/Eldo/Downloads/Projects/SA%20Enterprises/envolve/components/elements/DataBg.js)
    *   **Purpose**: Scans for `data-bg` elements and sets their CSS background image dynamically.
    *   **Props**: None.
    *   **Dependencies**: React `useEffect`.
    *   **Reusability**: **YES**. Crucial for the image rendering architecture of the template.
    *   **Modifications Required**: None.

### Testimonial & Team Sliders
*   **Components**: `TestimonialSlider1` to `TestimonialSlider16`, `TeamSlider2`, etc.
    *   **File Locations**: `components/slider/`
    *   **Purpose**: Swiper carousel sliders.
    *   **Dependencies**: `swiper`.
    *   **Reusability**: **NO** (except Testimonial sliders, if testimonials exist).
    *   **Modifications Required**: Most of these sliders are layout variants and should be hidden/disabled to minimize script load times.

---

## 5. Duplicate Components & Styling Warnings

1.  **Header/Footer Overhead**: The existence of 15 headers and 15 footers represents significant overhead and bundle size pollution. To optimize the codebase post-redesign, unused files in `components/layout/header/` and `components/layout/footer/` should be removed, leaving only the primary active layout.
2.  **Navigation Duplication**: Links in `Menu.js` (desktop header) and `MobileMenu.js` (mobile menu drawer) are isolated hardcoded copies. Another developer modifying navigation must edit **both files** to prevent navigation path drift.
3.  **Inline HTML Styling Classes**: Reusable visual components like Buttons (`.btn-style-one`, `.btn-style-two`) are not modular React components. They are simple HTML `Link` tags styled with CSS classes defined in `style.css`.
