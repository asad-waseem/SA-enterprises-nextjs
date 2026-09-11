# Repository Project Tree

This document outlines the directory structure of the Envolve template codebase, providing descriptive comments for each key folder and configuration file.

```
envolve/
├── app/                            # Next.js App Router root folder
│   ├── [route_name]/               # Dynamic routing subdirectories (61 total page routes)
│   │   └── page.js                 # Specific page component for each route
│   ├── layout.js                   # Shell Root Layout (loads Google Fonts and global CSS)
│   ├── loading.js                  # Standard page load transitions cover
│   ├── not-found.js                # Fallback 404 page layout
│   └── page.js                     # Root path router component (Business Homepage)
├── components/                     # Reusable React UI component libraries
│   ├── elements/                   # Core atomic elements (counters, preloaders, scroll widgets)
│   │   ├── BackToTop.js            # Smooth scroll-to-top overlay button
│   │   ├── DataBg.js               # Client component to inject CSS data-bg images
│   │   ├── Preloader.js            # Visual page loading spinner overlay
│   │   └── ServiceTabs1.js         # Interactive process tabs used in service details
│   ├── layout/                     # Structural layout wraps, menus, headers, and footers
│   │   ├── footer/                 # 15 footer style variants (Footer1.js through Footer15.js)
│   │   ├── header/                 # 15 header style variants (Header1.js through Header15.js)
│   │   ├── Layout.js               # Primary client-side page boundary wrap component
│   │   ├── Menu.js                 # Hardcoded desktop navigation link menu
│   │   └── MobileMenu.js           # Hardcoded mobile slide-out navigation menu
│   ├── sections/                   # Home layout grid segments
│   │   └── home[1-15]/             # Section segments grouped by homepage style (About, Features)
│   └── slider/                     # Swiper-based layout carousels (48 distinct slider files)
├── docs/                           # Architectural audit documentation (Analysis phase only)
├── public/                         # Static files served directly by Next.js
│   └── assets/                     # Styles, media, and typography packs
│       ├── css/                    # Globals stylesheets (style.css, color-*.css, bootstrap.css)
│       ├── fonts/                  # Icon typography assets (FlatIcon, FontAwesome, IcoMoon)
│       ├── images/                 # Main graphics pack and home layout resources 1-5
│       ├── images-2/               # Graphics pack for home layouts 6-7, 10-12
│       ├── images-3/               # Graphics pack for home layouts 8-9
│       └── images-4/               # Graphics pack for home layouts 13-15
├── jsconfig.json                   # Imports path mapper config (@/* -> ./*)
├── next.config.js                  # Default Next.js configuration rules
└── package.json                    # Dependency listings, core metadata, and npm scripts
```
