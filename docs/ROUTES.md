# Route Inventory & Page Mapping

This document provides a comprehensive route inventory of the template. It audits all existing 61 page routes, detailing their layout, key components, and data sources, and provides concrete recommendations for transforming them into the SA Enterprises B2B procurement site.

---

## 1. Primary Page Mapping for SA Enterprises

The core customer journey for SA Enterprises requires a clean navigation map. Below is the mapping of future SA Enterprises routes back to their corresponding base Envolve templates:

| Future Route | Purpose | Base Template Route | Action |
| :--- | :--- | :--- | :--- |
| `/` | Home page | `/` (`app/page.js`) | **REPURPOSE** |
| `/about` | About SA Enterprises | `/about-1` (`app/about-1/page.js`) | **REPURPOSE** |
| `/solutions` | Overview of procurement categories | `/services` (`app/services/page.js`) | **REPURPOSE** |
| `/solutions/it-hardware` | Solution: IT hardware, laptops, network | `/finance-restructuring` (`app/finance-restructuring/page.js`) | **REPURPOSE** |
| `/solutions/office-equip`| Solution: Office equipment, printers, toner | `/audit-assurance` (`app/audit-assurance/page.js`) | **REPURPOSE** |
| `/solutions/custom` | Solution: Custom business procurement | `/strategy-planning` (`app/strategy-planning/page.js`) | **REPURPOSE** |
| `/products` | Product catalog (B2B quote-based catalog) | `/shop` (`app/shop/page.js`) | **REPURPOSE** |
| `/products/[slug]` | Product details & specification sheets | `/product-details` (`app/product-details/page.js`) | **REPURPOSE** |
| `/faq` | Frequently Asked Questions | `/faq` (`app/faq/page.js`) | **REPURPOSE** |
| `/contact` | Contact Us / Quote Request | `/contact-1` (`app/contact-1/page.js`) | **REPURPOSE** |

---

## 2. Complete Route Inventory & Recommendations

All page routes listed below are **Static** in their rendering profile (compiled as static HTML by Next.js because they lack dynamic functions like `getServerSideProps` or dynamic segment queries, but contain client-side script interactivity via `'use client'` inside nested layouts/components). All content is **hardcoded inside the JSX source files** unless otherwise specified.

### Home Page Variants

*   **Route**: `/` (Business Home)
    *   **Source File**: [app/page.js](file:///c:/Users/Eldo/Downloads/Projects/SA%20Enterprises/envolve/app/page.js)
    *   **Layout**: `<Layout headerStyle={1} footerStyle={1} wrapperCls="home_1">`
    *   **Key Components**: `Banner` (Swiper), `Clients` (Brand Slider), `Features`, `About`, `Funfacts`, `WhyChooseUs`, `Cases`, `Process`, `Testimonial`, `Pricing`, `News`, `Map`, `Cta`.
    *   **Recommendation**: **REPURPOSE** as SA Enterprises homepage. Replace sections:
        *   *Keep*: `Banner` (repurpose text), `Features` (list core product groups), `About` (company overview), `WhyChooseUs` (B2B value props), `Process` (Procurement lifecycle), `Cta` (Request a Quote link).
        *   *Remove*: `Cases` (case studies), `Pricing` (remove SaaS/consulting pricing plans), `News` (blog), `Map` (replace or scope to SA offices).

*   **Routes**: `/index-2` through `/index-15` (Alternative Homepages)
    *   **Source Files**: `app/index-2/page.js` to `app/index-15/page.js`
    *   **Layout**: Scoped wrappers (`home_2` to `home_15`), matching header/footer styles.
    *   **Key Components**: Home-specific banners and section blocks.
    *   **Recommendation**: **REMOVE/HIDE**. These folders can be completely deleted or ignored. They are template variants showing specific layouts (Consulting, Corporate, Law Firm, etc.) that are irrelevant to SA Enterprises' B2B business.

---

### Company & About Pages

*   **Route**: `/about-1` (About Style 1)
    *   **Source File**: [app/about-1/page.js](file:///c:/Users/Eldo/Downloads/Projects/SA%20Enterprises/envolve/app/about-1/page.js)
    *   **Layout**: Style 1 header and footer, `wrapperCls="home_1"`.
    *   **Key Components**: Page header, statistics counter blocks, testimonial sliders, partner brand logos slider.
    *   **Recommendation**: **REPURPOSE** as `/about`. This is the cleanest layout for the main corporate description of SA Enterprises. Move/rename folder to `/app/about/page.js`.

*   **Routes**: `/about-2` and `/about-3` (About Styles 2 and 3)
    *   **Source Files**: `app/about-2/page.js`, `app/about-3/page.js`
    *   **Recommendation**: **REMOVE/HIDE**.

---

### Solutions / Services Pages

*   **Route**: `/services` (All Services catalog)
    *   **Source File**: [app/services/page.js](file:///c:/Users/Eldo/Downloads/Projects/SA%20Enterprises/envolve/app/services/page.js)
    *   **Layout**: Style 1.
    *   **Key Components**: Services grid showing six key services.
    *   **Recommendation**: **REPURPOSE** as `/solutions` to list product procurement solution categories. Move/rename folder to `/app/solutions/page.js`.

*   **Route**: `/finance-restructuring` (Service Detail — Finance)
    *   **Source File**: [app/finance-restructuring/page.js](file:///c:/Users/Eldo/Downloads/Projects/SA%20Enterprises/envolve/app/finance-restructuring/page.js)
    *   **Key Components**: `AuditSlider1` banner, `ServiceSlider1`, `ServiceTabs1`, category sidebar navigation.
    *   **Recommendation**: **REPURPOSE** as `/solutions/it-hardware` (laptops, desktops, networking equipment procurement solution page).

*   **Route**: `/audit-assurance` (Service Detail — Audit)
    *   **Source File**: [app/audit-assurance/page.js](file:///c:/Users/Eldo/Downloads/Projects/SA%20Enterprises/envolve/app/audit-assurance/page.js)
    *   **Recommendation**: **REPURPOSE** as `/solutions/office-equipment` (office printers, toner, business accessories procurement solution page).

*   **Route**: `/trades-stock-markets` (Service Detail — Stock Market)
    *   **Source File**: [app/trades-stock-markets/page.js](file:///c:/Users/Eldo/Downloads/Projects/SA%20Enterprises/envolve/app/trades-stock-markets/page.js)
    *   **Recommendation**: **REPURPOSE** as `/solutions/consumables` (toner cartridges, cables, adapters, office paper).

*   **Route**: `/strategy-planning` (Service Detail — Strategy)
    *   **Source File**: [app/strategy-planning/page.js](file:///c:/Users/Eldo/Downloads/Projects/SA%20Enterprises/envolve/app/strategy-planning/page.js)
    *   **Recommendation**: **REPURPOSE** as `/solutions/custom-procurement` (custom sourcing requests, bulk bidding solution page).

*   **Route**: `/software-research` and `/support-maintenance` (Service Details)
    *   **Source Files**: `app/software-research/page.js`, `app/support-maintenance/page.js`
    *   **Recommendation**: **REMOVE/HIDE** (unless retained for future expansion into software licensing and tech support solutions).

---

### Portfolio / Case Studies

*   **Routes**: `/portfolio-1`, `/portfolio-2`, `/portfolio-3`, `/portfolio-4`, and `/portfolio-details` (Portfolio Grids, Masonry, and Details)
    *   **Source Files**: `app/portfolio-X/page.js`
    *   **Key Components**: `PortfolioFilter` components, isotope grid containers.
    *   **Recommendation**: **REMOVE/HIDE** at launch. SA Enterprises does not have case studies initially. Re-enable and rename to `/case-studies` in the future when real projects exist.

---

### Shop & E-commerce

*   **Route**: `/shop` (Product Listing Grid)
    *   **Source File**: [app/shop/page.js](file:///c:/Users/Eldo/Downloads/Projects/SA%20Enterprises/envolve/app/shop/page.js)
    *   **Key Components**: Sidebar categories, Price Filter slider, 8 product listing blocks.
    *   **Recommendation**: **REPURPOSE** as `/products`. Remove price filters, remove shopping cart "ADD TO CART" buttons, and replace with a direct "Request a Quote" trigger. Move/rename folder to `/app/products/page.js`.

*   **Route**: `/product-details` (Single Product Detail view)
    *   **Source File**: [app/product-details/page.js](file:///c:/Users/Eldo/Downloads/Projects/SA%20Enterprises/envolve/app/product-details/page.js)
    *   **Key Components**: Swiper image gallery with thumbnail swiper navigation, quantity spinner, pricing label, tabbed customer reviews.
    *   **Recommendation**: **REPURPOSE** as `/products/[slug]` (or a static slug variant `/products/details`). Remove price tags, ratings, add to cart button, cart icons, and the review tab. Replace the main cart action with a large "Request a Quote" CTA button leading to a quote request form.

*   **Routes**: `/shopping-cart`, `/checkout`, and `/account` (E-commerce Operations)
    *   **Source Files**: `app/shopping-cart/page.js`, `app/checkout/page.js`, `app/account/page.js`
    *   **Recommendation**: **REMOVE** completely. SA Enterprises coordinates quotes offline/via email, so a cart, checkout process, and client user accounts are not needed.

---

### Teams & Staff

*   **Routes**: `/team-1` through `/team-4`, and `/team-details`
    *   **Source Files**: `app/team-X/page.js`
    *   **Recommendation**: **REMOVE/HIDE**. Corporate team profiles are not required for SA Enterprises' B2B portal launch.

---

### Miscellaneous & Core Utilities

*   **Route**: `/faq` (Frequently Asked Questions)
    *   **Source File**: [app/faq/page.js](file:///c:/Users/Eldo/Downloads/Projects/SA%20Enterprises/envolve/app/faq/page.js)
    *   **Key Components**: Custom accordion components for FAQ items.
    *   **Recommendation**: **KEEP** and repurpose questions around sourcing time, minimum order quantities (MOQ), shipping, and corporate payment methods.

*   **Route**: `/contact-1` (Contact Style 1)
    *   **Source File**: [app/contact-1/page.js](file:///c:/Users/Eldo/Downloads/Projects/SA%20Enterprises/envolve/app/contact-1/page.js)
    *   **Key Components**: Location info blocks, contact form, Google Maps iframe.
    *   **Recommendation**: **REPURPOSE** as `/contact` (Primary contact page for SA Enterprises).

*   **Routes**: `/contact-2`, `/contact-3`, `/contact-4` (Alternative Contacts)
    *   **Source Files**: `app/contact-X/page.js`
    *   **Recommendation**: **REMOVE/HIDE**.

*   **Routes**: `/pricing-1`, `/pricing-2` (SaaS Pricing Plans)
    *   **Source Files**: `app/pricing-X/page.js`
    *   **Recommendation**: **REMOVE/HIDE**.

*   **Routes**: `/blog-1` through `/blog-8`, `/blog-details`, `/blog-details-2` (Blog feeds and entries)
    *   **Source Files**: `app/blog-X/page.js`
    *   **Recommendation**: **REMOVE/HIDE** (no content writing or news feeds are planned at launch).

*   **Route**: `/404` or `/not-found` (Fallback Error page)
    *   **Source File**: [app/not-found.js](file:///c:/Users/Eldo/Downloads/Projects/SA%20Enterprises/envolve/app/not-found.js)
    *   **Layout**: Layout Style 1.
    *   **Recommendation**: **KEEP** as the default fallback 404 page.
