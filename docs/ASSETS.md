# Asset Audit & Replacement Guide

This document lists the static image and font assets utilized in the template, explains how they are referenced in the JSX code, and identifies the assets that must be replaced for the SA Enterprises B2B portal.

---

## 1. Asset Storage & Structure

Static assets live inside the `/public/assets/` directory:

```
public/assets/
├── fonts/        # Icon font files (EOT, SVG, TTF, WOFF, WOFF2)
├── images/       # Core website assets and homepages 1–5 images
│   ├── background/  # General layout backgrounds
│   ├── icons/       # Custom category icons (PNG/SVG)
│   ├── main-slider/ # Home hero slider background images
│   ├── resource/    # Staff photos, signatures, testimonial avatars
│   ├── shape/       # Background patterns and border shapes (SVG/PNG)
│   └── shop/        # E-commerce product thumbnails and preview images
├── images-2/     # Asset pack for homepage variants 6–7, 10–12
├── images-3/     # Asset pack for homepage variants 8–9
└── images-4/     # Asset pack for homepage variants 13–15
```

---

## 2. Asset Reference Mechanics

Assets are loaded relative to the `/public` directory using absolute URL paths:

*   **HTML Images**: Referenced using static source strings on HTML tags:
    ```html
    <img src="/assets/images/logo.png" alt="Logo" />
    ```
*   **Dynamic CSS Backgrounds**: Background images are defined in the JSX markup using the custom `data-bg` attribute:
    ```html
    <div className="image-layer" data-bg="/assets/images/main-slider/1.jpg" />
    ```
    During client-side render, the `<DataBg />` component searches for these tags and applies standard style attributes: `style={{ backgroundImage: 'url("/assets/images/main-slider/1.jpg")' }}`.

---

## 3. Required Brand Replacements for SA Enterprises

The following template assets **must** be replaced during the redesign phase to align with SA Enterprises' business profile:

### Logos & Branding
*   **Active Files**:
    *   `/public/assets/images/logo.png` (Main header logo)
    *   `/public/assets/images/logo-2.png` (Secondary header logo)
    *   `/public/assets/images-2/footer-logo.png` / `/public/assets/images-2/footer-logo-2.png` (Footer logos)
    *   `/public/assets/images/logo-v2.png` to `logo-v5.png` (Variant header logos)
*   **Replacement Plan**: Design gold and navy versions of the SA Enterprises logo and save them over the active logo names (keeping pixel dimensions identical to prevent header wrapping layout bugs).

### Favicons
*   **Active Files**:
    *   `/public/favicon.ico`
    *   `/public/assets/images/favicon.png` / `favicon-v2.png` to `favicon-v5.png`
*   **Replacement Plan**: Save the SA Enterprises icon swatch as a `.ico` file and replace all instances in the root.

### Hero Banner Backgrounds
*   **Active Files**:
    *   `/public/assets/images/main-slider/1.jpg` (Home 1 Slider 1)
    *   `/public/assets/images/main-slider/2.jpg` (Home 1 Slider 2)
*   **Replacement Plan**: Replace these consulting-themed banners (which show corporate offices and stock charts) with high-resolution imagery showcasing logistics, business technology, or corporate procurement environments.

### Product Catalog Mockups
*   **Active Files**:
    *   `/public/assets/images/shop/product-1.jpg` through `product-8.jpg` (Product listing grid images)
    *   `/public/assets/images/shop/product-thumb-1.jpg` through `product-thumb-3.jpg` (Popular products widget)
*   **Replacement Plan**: The template's product images are **mock book cover graphics** (e.g. *Hemlock Grove*, *Cleaver Lands*). Replace these with catalog images of actual procurement stock: laptops, keyboards, routers, office printers, and toner boxes.

### Executive Signatures
*   **Active File**: `/public/assets/images/resource/signature.png` (Franklin Sinatra manager signature on the about section)
*   **Replacement Plan**: **Remove** or replace with SA Enterprises management signature mockup.
