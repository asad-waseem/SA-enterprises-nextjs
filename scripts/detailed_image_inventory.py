import os
import re
from PIL import Image

page_components = {
    "Home (/)": [
        "components/sections/home1/Banner.js",
        "components/sections/home1/Features.js",
        "components/sections/home1/About.js",
        "components/sections/home1/WhyChooseUs.js",
        "components/sections/home1/Process.js",
        "components/sections/home1/Cta.js"
    ],
    "About (/about)": [
        "app/about/page.js"
    ],
    "Solutions Hub (/solutions)": [
        "app/solutions/page.js"
    ],
    "IT Hardware (/solutions/it-hardware)": [
        "app/solutions/it-hardware/page.js"
    ],
    "Office Equipment (/solutions/office-equipment)": [
        "app/solutions/office-equipment/page.js"
    ],
    "Networking (/solutions/networking)": [
        "app/solutions/networking/page.js"
    ],
    "Printing & Consumables (/solutions/printing-consumables)": [
        "app/solutions/printing-consumables/page.js"
    ],
    "Accessories (/solutions/accessories)": [
        "app/solutions/accessories/page.js"
    ],
    "Custom Procurement (/solutions/custom-procurement)": [
        "app/solutions/custom-procurement/page.js"
    ],
    "Products Catalogue (/products)": [
        "app/products/page.js",
        "data/products.js"
    ],
    "Product Details (/products/[slug])": [
        "app/products/[slug]/page.js",
        "data/products.js"
    ],
    "Industries (/industries)": [
        "app/industries/page.js"
    ],
    "FAQ (/faq)": [
        "app/faq/page.js"
    ],
    "Contact (/contact)": [
        "app/contact/page.js"
    ],
    "Global Shell (Header, Footer, Breadcrumb, Sidebar)": [
        "components/layout/header/Header1.js",
        "components/layout/footer/Footer1.js",
        "components/layout/Breadcrumb.js",
        "components/layout/Sidebar.js"
    ]
}

img_pattern = re.compile(r'(?:src=["\']|data-bg=["\']|url\(["\']?)(/assets/[^"\'\)]+)')

print("=" * 80)
print("IMAGE INVENTORY BY PAGE")
print("=" * 80)

total_items = 0
inventory = {}

for page, comp_list in page_components.items():
    print(f"\n--- {page} ---")
    page_images = set()
    for comp in comp_list:
        if not os.path.exists(comp):
            continue
        with open(comp, 'r', encoding='utf-8') as f:
            content = f.read()
        matches = img_pattern.findall(content)
        for m in matches:
            page_images.add((m, comp))
            
    for img_rel, comp in sorted(page_images):
        local_path = os.path.join("public", img_rel.lstrip("/"))
        exists = os.path.exists(local_path)
        dims = "NOT FOUND"
        filesize = 0
        is_placeholder = False
        if exists:
            filesize = os.path.getsize(local_path)
            try:
                with Image.open(local_path) as im:
                    dims = f"{im.width}x{im.height}"
                    # Detect placeholder: gray palette, low filesize, or known placeholder names
                    if filesize < 5000 and not img_rel.endswith('.png') and 'pattern' not in img_rel:
                        is_placeholder = True
                    elif 'shop/product' in img_rel and filesize < 3000:
                        is_placeholder = True
                    elif 'gallery' in img_rel and filesize < 1000:
                        is_placeholder = True
            except Exception as e:
                dims = f"ERR: {e}"
        
        status = "[PLACEHOLDER]" if is_placeholder else ("[REAL IMAGE]" if filesize > 10000 else "[ICON/GRAPHIC]")
        print(f"{status:15} {img_rel:45} ({dims:10}, {filesize:6}B) | Used in: {comp}")
        inventory[img_rel] = {
            "page": page,
            "comp": comp,
            "dims": dims,
            "size": filesize,
            "is_placeholder": is_placeholder
        }
        total_items += 1

print(f"\nTotal page image references analyzed: {total_items}")
print(f"Total unique images: {len(inventory)}")
placeholders = [k for k, v in inventory.items() if v["is_placeholder"]]
print(f"\nTotal placeholders identified: {len(placeholders)}")
for p in sorted(placeholders):
    print(f" - {p:45} : Exact Dimensions: {inventory[p]['dims']:10} | Page: {inventory[p]['page']}")
