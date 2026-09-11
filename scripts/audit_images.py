import os
import re
from PIL import Image

files_to_check = [
    'app/page.js',
    'components/sections/home1/Banner.js',
    'components/sections/home1/Features.js',
    'components/sections/home1/About.js',
    'components/sections/home1/WhyChooseUs.js',
    'components/sections/home1/Process.js',
    'components/sections/home1/Cta.js',
    'app/about/page.js',
    'app/solutions/page.js',
    'app/solutions/it-hardware/page.js',
    'app/solutions/office-equipment/page.js',
    'app/solutions/networking/page.js',
    'app/solutions/printing-consumables/page.js',
    'app/solutions/accessories/page.js',
    'app/solutions/custom-procurement/page.js',
    'app/products/page.js',
    'app/products/[slug]/page.js',
    'data/products.js',
    'app/industries/page.js',
    'app/faq/page.js',
    'app/contact/page.js',
    'components/layout/header/Header1.js',
    'components/layout/footer/Footer1.js',
    'components/layout/Breadcrumb.js',
    'components/layout/Sidebar.js',
]

img_pattern = re.compile(r'(?:src=["\']|data-bg=["\']|url\(["\']?)(/assets/[^"\'\)]+)')

all_images = {}

for fpath in files_to_check:
    if not os.path.exists(fpath):
        continue
    with open(fpath, 'r', encoding='utf-8') as f:
        content = f.read()
    matches = img_pattern.findall(content)
    for m in matches:
        all_images.setdefault(m, []).append(fpath)

print(f"Total unique image paths found: {len(all_images)}")
results = []
for img_path, refs in sorted(all_images.items()):
    local_path = os.path.join('public', img_path.lstrip('/'))
    exists = os.path.exists(local_path)
    dims = "NOT FOUND"
    filesize = 0
    if exists:
        try:
            filesize = os.path.getsize(local_path)
            with Image.open(local_path) as im:
                dims = f"{im.width}x{im.height}"
        except Exception as e:
            dims = f"ERR: {e}"
    results.append((img_path, dims, filesize, refs))
    print(f"{img_path} | {dims} | {filesize} bytes | Refs: {', '.join(refs)}")
