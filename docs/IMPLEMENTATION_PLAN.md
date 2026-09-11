# Implementation & Transformation Plan

This document maps out a phased implementation plan to safely transform the Envolve template into the SA Enterprises B2B procurement website. It prioritizes reusing established template structures while systematically swapping out the identity and functionality.

---

## Phase 1: Foundation & Brand Constants
Set up the core brand variables to allow centralized contact info across the site.
*   **Actions**:
    *   Create [NEW] `config/brand.js` defining `BRAND_CONFIG` (corporate name, address, email, phone numbers, working hours).
    *   Verify absolute path mappings (`@/config/brand`) work correctly in Next.js runtime.
*   **Risks**: Extremely low.

---

## Phase 2: Branding & Design Tokens
Apply the SA Enterprises premium navy and gold visual identity.
*   **Actions**:
    *   Create [NEW] `/public/assets/css/sa-overrides.css` containing override rules for primary accent colors (`#fd4a36` -> Gold `#C9A24B`, main backgrounds -> Navy `#0A1A33`).
    *   Import `sa-overrides.css` as the last style file in [app/layout.js](file:///c:/Users/Eldo/Downloads/Projects/SA%20Enterprises/envolve/app/layout.js).
    *   Replace header logo assets `/public/assets/images/logo.png` and `logo-2.png` with SA Enterprises logos.
    *   Replace all favicons in `/public/` and `/public/assets/images/` with the new brand icon.
*   **Risks**: Low. CSS formatting must use `!important` flags in overrides to guarantee they replace values inside the heavy `style.css` file.

---

## Phase 3: Global Navigation Map
Update the desktop header and mobile menus to route to the correct pages.
*   **Actions**:
    *   Modify [components/layout/Menu.js](file:///c:/Users/Eldo/Downloads/Projects/SA%20Enterprises/envolve/components/layout/Menu.js) links to display the new header map: *Home*, *About*, *Solutions*, *Products*, *Industries*, *FAQ*, *Contact*.
    *   Modify [components/layout/MobileMenu.js](file:///c:/Users/Eldo/Downloads/Projects/SA%20Enterprises/envolve/components/layout/MobileMenu.js) links synchronously with desktop menu.
    *   Update location/email labels inside [components/layout/header/Header1.js](file:///c:/Users/Eldo/Downloads/Projects/SA%20Enterprises/envolve/components/layout/header/Header1.js) to import from `config/brand.js`.
*   **Risks**: High synchronization check. Any changes to the menu links must be manually copied to the mobile menu component.

---

## Phase 4: Homepage Repurposing
Refactor the primary page template blocks.
*   **Actions**:
    *   Modify [app/page.js](file:///c:/Users/Eldo/Downloads/Projects/SA%20Enterprises/envolve/app/page.js) layout component wrapper.
    *   Edit sections inside `/components/sections/home1/`:
        *   `Banner.js`: Replace slide background images (`main-slider/1.jpg`, `2.jpg`...) and rewrite headings to display corporate B2B copywriting.
        *   `Features.js`: List SA Enterprises procurement solutions (IT Hardware, Office Gear, Consumables).
        *   `About.js`: Update overview text. Remove Franklin Sinatra manager biography and signature image.
        *   `WhyChooseUs.js`: Set up key B2B metrics (MOQ speed, sourcing reach).
        *   `Process.js`: Describe procurement workflow phases (Submit Sourcing Requirement -> Get Quotation -> Coordinate Delivery).
        *   `Cta.js`: Target quote page.
    *   Disable/comment out unused sections in `/app/page.js` render method: `Cases` (portfolio), `Pricing`, `News` (blog), `Map`, `Feature`.
*   **Risks**: Medium. WOW.js animation delay styles must be kept intact during JSX markup adjustments.

---

## Phase 5: Solutions Overview & Solution Details
Build out the core procurement services catalog.
*   **Actions**:
    *   Repurpose [app/services/page.js](file:///c:/Users/Eldo/Downloads/Projects/SA%20Enterprises/envolve/app/services/page.js) into `app/solutions/page.js`.
    *   Map the 6 grid blocks to SA Enterprises categories:
        1.  *IT Hardware & Systems*
        2.  *Enterprise Laptops & Desktops*
        3.  *Networking & Infrastructure Equipment*
        4.  *Office Printers & Equipment*
        5.  *Toner & Cartridge Consumables*
        6.  *Business Technology Accessories*
    *   Repurpose detail pages:
        *   `/finance-restructuring` -> `/app/solutions/it-hardware/page.js`
        *   `/audit-assurance` -> `/app/solutions/office-equipment/page.js`
        *   `/trades-stock-markets` -> `/app/solutions/consumables/page.js`
        *   `/strategy-planning` -> `/app/solutions/custom-sourcing/page.js`
*   **Risks**: Low. Keep structural styles and change text titles and images only.

---

## Phase 6: Product Catalog & Product Details
Transform the mock e-commerce pages into a B2B sourcing layout.
*   **Actions**:
    *   Create [NEW] `/data/products.js` to store a list of product item objects.
    *   Repurpose `/app/shop/page.js` to `/app/products/page.js`.
        *   Remove retail prices, ratings, shopping carts, and price sliders.
        *   Render product list cards by looping over `/data/products.js`.
        *   Replace card "ADD TO CART" links with a primary button linking to `/products/[slug]`.
    *   Repurpose `/app/product-details/page.js` into `/app/products/[slug]/page.js` (or a static details page).
        *   Replace Swiper book cover images with IT hardware photos.
        *   Remove price fields, wishlist actions, and user reviews tabs.
        *   Connect the quantity selector to the "Request a Quote" button so clicking redirects to `/contact?item=ProductName&qty=Quantity`.
*   **Risks**: High styling validation. Ensure spacing and margins remain correct once prices and cart icons are removed.

---

## Phase 7: Contact Us & Quote Request Integration
Connect contact forms to a functional mailer or lead handler.
*   **Actions**:
    *   Repurpose [app/contact-1/page.js](file:///c:/Users/Eldo/Downloads/Projects/SA%20Enterprises/envolve/app/contact-1/page.js) to `/app/contact/page.js`.
    *   Update contact details blocks with values from `config/brand.js`.
    *   Modify the form action: convert form container into a client-side component using state values.
    *   Add script parsing for URL parameters to pre-fill the "Subject" dropdown or "Message" field with products passed from detail routes (e.g. `item=Enterprise Laptop`, `qty=10`).
    *   Integrate a nodemailer script at [NEW] `/app/api/quote/route.js` or connect to an external mailing form endpoint.
*   **Risks**: SMTP connection security. Environment variables (`SMTP_HOST`, `SMTP_PASSWORD`) must be stored securely.

---

## Phase 8: Core Layout Cleanup
Update footer layouts and build metadata files.
*   **Actions**:
    *   Update copyright text, description paragraph, and contact icons inside [components/layout/footer/Footer1.js](file:///c:/Users/Eldo/Downloads/Projects/SA%20Enterprises/envolve/components/layout/footer/Footer1.js).
    *   Inject SEO metadata configs inside [app/layout.js](file:///c:/Users/Eldo/Downloads/Projects/SA%20Enterprises/envolve/app/layout.js).
    *   Create [NEW] `/app/robots.js` and `/app/sitemap.js` configuration pages.
*   **Risks**: Low.

---

## Phase 9: Directory Cleanups & Build Validation
Remove template bloat to optimize speed.
*   **Actions**:
    *   **Hide/Delete Unused Route Directories**: Remove route folders for alternative homepages (`index-2` through `index-15`), other about layouts, blogs, portfolios, accounts, careers, checklists, and team layouts.
    *   Delete unused image packs `/public/assets/images-2`, `images-3`, `images-4` if their nested homepage files are not used, keeping only the assets used in active routes to minimize compilation overhead.
    *   Run `npm run build` locally to verify zero build errors, static HTML generation correctness, and clean layout files.
*   **Risks**: Build compilation check. Make sure no active component refers to deleted files.
