# SA Enterprises — STRICT Implementation Plan (NO UI REDESIGN)

## CRITICAL INSTRUCTION

This project is based on the existing Envolve Next.js template.

**DO NOT REDESIGN THE UI.**

The existing Envolve UI, layout, theme, colors, spacing, typography, component structure, animations, responsive behavior, card styles, buttons, sections, header styles, footer styles, hover effects and visual system must remain exactly as they already exist unless a change is technically required for functionality.

### Absolutely DO NOT:

- change any existing theme color
- change orange/coral colors to navy/gold
- create a new design system
- add `sa-overrides.css`
- restyle buttons
- redesign cards
- redesign sections
- change typography
- change spacing
- change border radius
- change shadows
- change animation style
- change hover effects
- change hero structure
- change header layout
- change footer layout
- rebuild components
- create a new frontend design language
- introduce Tailwind
- introduce a new component library
- replace Bootstrap
- make the site look different from the original Envolve template

**The goal is NOT a redesign.**

The goal is:

> Keep the same Envolve UI and make the project functionally and content-wise ready for SA Enterprises.

---

# 1. What IS Allowed

Allowed changes are limited to:

- route/page setup
- page renaming/migration
- replacing Envolve text with SA Enterprises content
- replacing irrelevant images while keeping the same image slot, dimensions and aspect ratio
- replacing logo/favicon with SA Enterprises assets while preserving their rendered dimensions
- changing menu labels and links
- changing CTA text and routes
- replacing consulting/service content with procurement content
- converting Shop to a quote-based Products catalogue while keeping the existing visual structure
- converting Product Details to a quote-based detail page while keeping the existing visual structure
- wiring forms
- Supabase database
- Supabase auth
- Supabase storage
- admin functionality
- quote submission
- email notification
- WhatsApp handoff
- SEO metadata
- sitemap/robots
- bug fixes
- broken route fixes
- build fixes
- accessibility fixes only when they do not visually redesign the interface
- responsive fixes only when an actual layout bug exists

If a requested functionality can be implemented without changing visual UI, it MUST be implemented without changing visual UI.

---

# 2. Existing UI Is the Source of Truth

Before editing any page:

1. inspect the current page
2. inspect its JSX
3. inspect its classes
4. inspect its component imports
5. inspect its existing responsive behavior

Then preserve that markup/class structure as much as possible.

Do not replace existing JSX with a newly designed section.

Prefer:

**change text + image + link + data**

instead of:

**replace component**

---

# 3. Existing Components Must Be Reused

Use the existing components already present in the project.

Examples:

- `Layout.js`
- `Header1.js`
- `Footer1.js`
- `Menu.js`
- `MobileMenu.js`
- existing `Banner.js`
- existing `Features.js`
- existing `About.js`
- existing `WhyChooseUs.js`
- existing `Process.js`
- existing `Cta.js`
- existing FAQ accordion
- existing service grids
- existing service-detail pages
- existing Shop page layout
- existing Product Details layout
- existing `QuantityInput`
- existing Swiper
- existing `DataBg`
- existing WOW.js animation classes

### Do not recreate an existing component.

Modify the content inside the existing component.

If new functionality is needed inside an existing component, add the minimum logic required while preserving its rendered structure.

---

# 4. First Task — Restore Original UI If It Was Changed

If previous implementation work changed the UI/theme:

1. compare current code against the original Envolve template / git baseline
2. identify UI-only changes
3. revert:
   - color overrides
   - custom theme files
   - redesigned classes
   - altered spacing
   - altered typography
   - changed visual component structures
4. preserve valid functional work that does not affect appearance

Specifically remove/revert any previously added:

- SA navy/gold theme overrides
- `sa-overrides.css`
- new card designs
- new hero layouts
- new button styles
- new section styling

After restoration, visually compare the active pages with the original template.

**The UI should again look like Envolve.**

Only the business content/routes/data should change afterward.

---

# 5. Business

Company:

**SA Enterprises**

Tagline:

**Where Business Needs Come First.**

Industry:

**B2B Procurement & Business Solutions**

Business flow:

Business requirement  
→ browse/contact  
→ request quotation  
→ SA Enterprises sources options  
→ quotation  
→ client confirmation  
→ procurement  
→ delivery coordination

This is not retail ecommerce.

---

# 6. Final Navigation

Use the existing Envolve header/menu visual design.

Change only menu labels/routes:

**Home | About | Solutions | Products | Industries | FAQ | Contact**

Primary CTA if the existing header has a suitable CTA position:

**Request a Quote**

Route:

`/contact#quote`

Do not redesign the header to add a new CTA area if the existing header does not support one cleanly.

---

# 7. Final Public Routes

Use:

- `/`
- `/about`
- `/solutions`
- `/solutions/it-hardware`
- `/solutions/office-equipment`
- `/solutions/networking`
- `/solutions/printing-consumables`
- `/solutions/accessories`
- `/solutions/custom-procurement`
- `/products`
- `/products/[slug]`
- `/industries`
- `/faq`
- `/contact`

Keep existing `not-found.js`.

Future only:

- Case Studies
- Blog

Do not expose dummy Case Studies or Blog content.

---

# 8. Route Mapping

Use the existing audited pages as bases:

- `/` → existing homepage
- `/about-1` → `/about`
- `/services` → `/solutions`
- existing service detail pages → nested solution routes
- `/shop` → `/products`
- `/product-details` → `/products/[slug]`
- useful `/about-3` sections → `/industries`
- `/faq` → `/faq`
- `/contact-1` → `/contact`

Do not invent new public page layouts when an existing Envolve layout already exists.

---

# 9. Homepage

Keep the existing homepage UI and section components.

Change only content/images/links.

Use existing sections that fit.

Remove/hide irrelevant sections only when necessary, such as:

- Pricing
- fake Blog/News
- fake Portfolio
- fake Testimonials
- fake Client logos
- fake statistics

When removing an irrelevant section, do not redesign the surrounding sections to fill space.

Let the existing page flow remain natural.

### Suggested content mapping

Existing Banner:
- SA Enterprises procurement hero content

Existing Features:
- procurement/product categories

Existing About:
- SA Enterprises intro

Existing WhyChooseUs:
- procurement benefits

Existing Process:
- requirement → sourcing → quotation → delivery

Existing CTA:
- Request a Quote

---

# 10. About

Use `/about-1`.

Do not redesign it.

Replace the existing copy with SA Enterprises content.

Where a template block requires fake numbers, fake testimonials or fake partner logos:

- hide that block, or
- adapt the same component using truthful non-numeric content if possible

Do not fabricate proof.

---

# 11. Solutions

Use the existing `/services` page layout exactly.

Change service cards to:

1. IT Hardware
2. Office Equipment
3. Networking
4. Printing & Consumables
5. Accessories & Essentials
6. Custom Procurement

Use existing service-detail page layouts for detail routes.

Do not redesign service cards.

Do not create new service card components.

---

# 12. Products

Use the existing `/shop` page UI.

The visual structure should remain the same wherever possible.

Convert retail behavior into B2B catalogue behavior.

Remove functional/visible ecommerce concepts:

- public price
- Add to Cart
- wishlist
- checkout
- rating/reviews
- price filter

Keep the existing:

- grid
- cards
- images
- spacing
- search/filter layout where useful
- sidebar structure where useful

Replace retail action with:

**View Details**

and/or

**Request a Quote**

Do not redesign product cards.

---

# 13. Product Details

Use the existing `/product-details` UI.

Keep:

- gallery
- Swiper
- layout
- tabs if useful
- quantity selector
- same card/panel styling

Remove only:

- retail price
- rating
- review section if irrelevant
- wishlist
- Add to Cart

Replace the purchase CTA with:

**Request a Quote**

Flow:

`/products/[slug]`
→ quantity
→ Request a Quote
→ `/contact?product=<slug>&qty=<qty>`

---

# 14. Industries

Build `/industries` by reusing existing Envolve sections/components, preferably from `/about-3` or another audited page.

Do not create a new visual layout.

Content can cover:

- Corporate Offices
- Software & Technology Companies
- SMEs & Growing Businesses
- Educational Institutions
- Professional Services
- Organizations & NGOs
- Retail & Commercial Businesses

No unsupported experience claims.

---

# 15. FAQ

Use the existing FAQ page and accordion exactly.

Change only the FAQ text/data.

Questions can cover:

- quotation requests
- brand/model requests
- bulk quantities
- pricing
- sourcing timelines
- recurring procurement
- custom requirements

---

# 16. Contact / Quote Form

Use `/contact-1`.

Keep its existing visual layout.

Modify only form fields and backend behavior.

Fields:

- Full Name
- Company Name
- Email
- Phone
- Product / Category
- Quantity
- Preferred Brand / Model
- Requirement Details
- Required Timeline

If product query parameters exist, prefill them.

Do not redesign the form unless a field physically cannot fit.

Use the existing form styles/classes.

---

# 17. Database Requirement

Because the project needs an Admin Panel for adding/editing/deleting products, use a real persistent database.

Use **Supabase**.

Supabase provides:

- PostgreSQL database
- Auth
- Storage

Next.js remains the application/backend layer.

No separate Express application is required.

---

# 18. Supabase Tables

Create:

## categories

- id
- name
- slug
- description
- image_url
- sort_order
- is_active
- created_at
- updated_at

## products

- id
- name
- slug
- short_description
- description
- category_id
- brand
- model
- specifications
- featured_image
- gallery_images
- is_featured
- is_active
- sort_order
- created_at
- updated_at

## quote_requests

- id
- full_name
- company_name
- email
- phone
- product_id
- product_name
- category
- quantity
- preferred_brand
- model
- requirement_details
- required_timeline
- source
- status
- created_at

Generate:

`/supabase/schema.sql`

And:

`/docs/SUPABASE_SETUP.md`

Keep setup simple enough that the owner can paste the SQL into Supabase SQL Editor and run it.

---

# 19. Admin Panel

The public site's UI must remain unchanged.

The admin panel is new functionality, but even the admin panel should use the project's existing Bootstrap/theme classes where practical.

Do not introduce a completely different design framework.

Routes:

- `/admin/login`
- `/admin`
- `/admin/products`
- `/admin/products/new`
- `/admin/products/[id]/edit`
- `/admin/categories`
- `/admin/quotes`

Use Supabase Auth.

Admin can:

- add product
- edit product
- delete product
- publish/unpublish
- feature/unfeature
- manage categories
- upload product images
- view quote requests
- update quote status

Do not expose admin links publicly.

Admin routes must be protected and noindexed.

---

# 20. Image Handling

Images may be replaced when the original template image is irrelevant to SA Enterprises.

However:

**Do not change image layout.**

For every replacement:

1. inspect the existing image dimensions/aspect ratio
2. inspect rendered CSS behavior
3. find a relevant image
4. crop/resize to the SAME practical aspect ratio
5. optimize it
6. insert it into the existing image slot

Preferred sources:

- Unsplash
- Pexels
- Pixabay where suitable
- legitimate manufacturer media where permitted

Do not use random Google Images.

Do not use watermarked images.

Do not alter section dimensions to accommodate a new image.

Make the image fit the existing UI, not the UI fit the image.

---

# 21. Logo

Replace Envolve logo with SA Enterprises logo if the asset is supplied.

Preserve:

- rendered width
- rendered height
- header spacing
- mobile behavior

Do not modify header layout around the logo.

---

# 22. Quote Submission

On form submit:

1. validate
2. save request in Supabase
3. send email notification
4. show success state

Use Resend or configured SMTP/Nodemailer.

The DB record should remain even if email delivery fails.

---

# 23. WhatsApp

Add WhatsApp handoff only when a real number is supplied.

Use a prefilled message.

A standard WhatsApp link opens the message for the user to send.

Do not claim automatic sending.

Do not redesign the page around WhatsApp.

Use an existing button style.

---

# 24. SEO

SEO changes are allowed because they do not redesign the interface.

Implement:

- global metadata
- page metadata
- dynamic product metadata
- canonical
- OpenGraph
- Twitter cards
- robots
- sitemap
- image alt text
- semantic headings where possible

Do not alter heading visual classes merely to change semantic tags.

Maintain the same appearance.

Admin routes must be noindex.

---

# 25. Cleanup

Only after migration is stable:

Remove/archive unused routes:

- alternate homepages
- unused about pages
- unused contact pages
- pricing
- testimonials
- team
- career
- shopping cart
- checkout
- account
- unused portfolio variants
- dummy blogs

Before deleting:

- search imports
- verify dependencies
- run development server
- run build

Do not delete shared components merely because one page no longer uses them unless confirmed unused.

---

# 26. Multi-Agent Delegation

If multi-agent/sub-agent execution is available, divide tasks:

### Agent 1 — Architecture
Routes, migration, component integrity.

### Agent 2 — Content
Replace consulting content inside existing UI only.

### Agent 3 — Supabase/Admin
DB, Auth, Storage, CRUD, quotes.

### Agent 4 — Assets
Replace only irrelevant images, preserving slots/aspect ratios.

### Agent 5 — SEO/QA
SEO, accessibility, build, regressions.

Every agent must follow the same rule:

> NO UI REDESIGN. NO COLOR CHANGE. NO COMPONENT REBUILD.

---

# 27. Loop Engineering

For each phase:

**Inspect → Plan → Implement minimal change → Run → Compare UI → Test functionality → Fix → Re-test**

The comparison step is mandatory.

Ask:

**Does this page still visually look like the original Envolve template?**

If NO:

Revert the unnecessary UI changes.

---

# 28. Visual Regression Rule

Before and after every major public page change:

- compare desktop layout
- compare mobile layout
- compare colors
- compare spacing
- compare typography
- compare card styling
- compare buttons
- compare animation behavior

The expected visual difference should primarily be:

- text
- images
- logo
- menu labels
- business data

Not the design itself.

---

# 29. Final QA

Test:

- Home
- About
- Solutions
- nested Solutions
- Products
- Product Details
- Industries
- FAQ
- Contact
- Quote form
- Email
- WhatsApp
- Admin login
- Product create
- Product edit
- Product delete
- Category management
- Quote management

Test responsive widths:

- 1920
- 1440
- 1366
- 1024
- 768
- 430
- 390
- 375
- 320

Run:

`npm run build`

Fix all new critical errors.

---

# 30. Final Search

Search active project for:

- Envolve
- consulting
- finance
- audit
- stock market
- lorem ipsum
- dummy names
- dummy emails
- dummy phone numbers
- ADD TO CART
- checkout
- wishlist
- fake reviews

Replace/remove only active irrelevant content.

Do not search/replace CSS classes or design values indiscriminately.

---

# 31. Definition of Done

Complete only when:

1. Public UI still follows the original Envolve design.
2. No intentional theme/color redesign has been introduced.
3. Existing components were reused.
4. Public routes are correctly configured.
5. Content represents SA Enterprises.
6. Products are a quote-based catalogue.
7. No retail checkout/cart remains.
8. Product data comes from Supabase.
9. Admin product CRUD works.
10. Supabase Storage image uploads work.
11. Quote requests are persisted.
12. Email notification works when configured.
13. WhatsApp handoff works when configured.
14. SEO is configured.
15. No fake business claims remain.
16. No active dummy Envolve content remains.
17. Responsive behavior remains stable.
18. Existing animations remain intact.
19. Build succeeds.

---

# 32. FINAL COMMAND TO THE CODING AGENT

The earlier implementation may have changed the UI.

**First restore the original Envolve visual UI wherever previous changes altered it.**

Then continue implementation under these rules:

### KEEP THE UI.
### KEEP THE COLORS.
### KEEP THE EXISTING COMPONENT DESIGNS.
### KEEP THE TEMPLATE'S VISUAL STRUCTURE.
### CHANGE ONLY CONTENT, ROUTES, DATA, IMAGES WHERE NECESSARY, AND FUNCTIONALITY.

Do not redesign anything unless the user explicitly requests a redesign later.

Do not stop at planning.

Continue phase by phase using multi-agent delegation and loop engineering.

Only stop when a real external credential or business detail is required.
