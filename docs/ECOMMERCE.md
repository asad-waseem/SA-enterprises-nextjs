# E-commerce Architecture & B2B Procurement Catalogue Strategy

This document reviews the template's shopping/e-commerce components and maps the development plan to convert these mock structures into a functional B2B procurement catalog for SA Enterprises.

---

## 1. Existing E-commerce System Audit

The template contains standard pages for online shopping, billing, and order checkout:

1.  **Product List (`app/shop/page.js`)**: Displays an 8-item grid featuring mock products (such as *Hemlock Grove* and *Girl of Ink & Stars*), star ratings, dollar prices (e.g. `$15.00`), a quick view zoom lightbox trigger, a wishlist trigger, and "ADD TO CART" theme buttons. The sidebar has search, product categories, popular product links, and a price range filter.
2.  **Product Details (`app/product-details/page.js`)**: Displays a details sheet with tabbed descriptions and custom comments/reviews forms. The purchase interface includes a quantity spinner and an "Add to Cart" button.
3.  **Shopping Cart (`app/shopping-cart/page.js`)**: Renders a mock table list of cart items. The subtotals, item counts ("2 Items"), and price calculations are static strings (and contain mathematical errors, e.g. listing a total of `$74.00` for two `$24.00` items, and a grand total of `$159.95`).
4.  **Checkout (`app/checkout/page.js`)**: Renders billing detail form fields and payment method selectors (Direct Bank Transfer, Check Payment, PayPal).
5.  **My Account (`app/account/page.js`)**: Displays twin forms for user logins and registrations.

### State & Backend Verification
> [!IMPORTANT]
> **Verified in Source Code**: There is **no state store** (like Redux, Zustand, or React Context), **no local storage tracking**, and **no API routing** for checkout or cart operations in this codebase. 
> Clicking "ADD TO CART" does not save products, and the cart items list is entirely hardcoded in the static JSX. The checkout and account pages are pure visual templates with dead action links.

---

## 2. B2B Procurement Catalogue Mapping for SA Enterprises

SA Enterprises is a B2B solutions provider rather than a transactional B2C store. The customer journey is quote-based. The mock e-commerce elements must be redesigned as follows:

```
[B2B Catalog Page] ──> Click "Request a Quote" ──> Opens Contact Form (pre-filled with SKU/Category)
```

### Required Modifications

*   **Remove Transactional Elements**:
    *   **Hide Prices**: Strip all pricing text (e.g. `$15.00`, `$24.00`, and price ranges) from product cards and details.
    *   **Hide Ratings**: Remove the 5-star rating blocks from cards and reviews sections (B2B procurement catalogues do not require retail user ratings).
    *   **Remove Wishlists & Carts**: Remove the heart/center icons ("Add to Wishlist") and the shopping bag icon.
    *   **Disable Checkout/Account Routes**: Delete or hide `/shopping-cart`, `/checkout`, and `/account` page routes.
*   **Implement Sourcing CTA Triggers**:
    *   **Action Change**: Replace "ADD TO CART" buttons on the product grid and detail pages with a primary CTA button stating: **"Request a Quote"** or **"Add to Quote Request"**.
    *   **Keep Quantity Selector**: Retain the quantity input box (`QuantityInput.js`) on the product details page. This allows B2B buyers to specify the volume they need (e.g., "50 units of Enterprise Laptops").
    *   **Interactive Quote Routing**: Modify the "Request a Quote" button on `/products/[slug]` to redirect the user to `/contact` with URL query parameters:
        ```javascript
        // Example redirect handler
        router.push(`/contact?item=${encodeURIComponent(productName)}&qty=${quantity}`);
        ```
        The contact page form will capture these query variables and pre-populate the subject or message input field.
*   **B2B Sidebar Adjustments**:
    *   *Keep*: Categories list and search box widget.
    *   *Remove*: Price filter slider (`widget_filter-price`) and retail product ratings.
    *   *Add*: Quick contact widget displaying SA Enterprises' toll-free phone number and quotation email address.
