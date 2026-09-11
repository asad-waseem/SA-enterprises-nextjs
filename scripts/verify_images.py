import os
from PIL import Image

EXPECTED_IMAGES = {
    # Logos
    "public/assets/images/logo.png": (194, 55),
    "public/assets/images/logo-2.png": (194, 55),
    
    # Hero Slider
    "public/assets/images/main-slider/1.jpg": (1920, 960),
    "public/assets/images/main-slider/2.jpg": (1920, 960),
    
    # Home 1 Features
    "public/assets/images/resource/image-1.jpg": (330, 188),
    "public/assets/images/resource/image-2.jpg": (330, 188),
    "public/assets/images/resource/image-3.jpg": (330, 188),
    
    # Home 1 About
    "public/assets/images/resource/image-4.jpg": (400, 360),
    "public/assets/images/resource/image-5.jpg": (420, 360),
    
    # Home 1 Why Choose Us & CTA
    "public/assets/images/resource/image-1.png": (826, 811),
    "public/assets/images/resource/image-2.png": (581, 895),
    
    # About Page
    "public/assets/images/resource/image-48.jpg": (510, 651),
    
    # Breadcrumbs & Banners
    "public/assets/images/background/bg-26.jpg": (1920, 450),
    "public/assets/images/background/bg-25.jpg": (340, 413),
    
    # Solutions Hub (6 Cards)
    "public/assets/images/resource/image-18.jpg": (270, 120),
    "public/assets/images/resource/image-19.jpg": (270, 120),
    "public/assets/images/resource/image-20.jpg": (370, 383),
    "public/assets/images/resource/image-21.jpg": (370, 383),
    "public/assets/images/resource/image-22.jpg": (330, 300),
    "public/assets/images/resource/image-23.jpg": (330, 300),
    
    # Solutions Detailed Pages (6 detail hero images)
    "public/assets/images/resource/image-34.jpg": (370, 270),
    "public/assets/images/resource/image-35.jpg": (370, 270),
    "public/assets/images/resource/image-36.jpg": (370, 270),
    "public/assets/images/resource/image-37.jpg": (370, 270),
    "public/assets/images/resource/image-38.jpg": (370, 270),
    "public/assets/images/resource/image-39.jpg": (370, 270),
    
    # Products Catalogue (8 items)
    "public/assets/images/shop/product-1.jpg": (179, 270),
    "public/assets/images/shop/product-2.jpg": (179, 270),
    "public/assets/images/shop/product-3.jpg": (179, 270),
    "public/assets/images/shop/product-4.jpg": (179, 270),
    "public/assets/images/shop/product-5.jpg": (179, 270),
    "public/assets/images/shop/product-6.jpg": (179, 270),
    "public/assets/images/shop/product-7.jpg": (179, 270),
    "public/assets/images/shop/product-8.jpg": (179, 270),
    
    # Footer Gallery (6 thumbnails)
    "public/assets/images/gallery/gallery-6.jpg": (84, 72),
    "public/assets/images/gallery/gallery-7.jpg": (84, 72),
    "public/assets/images/gallery/gallery-8.jpg": (84, 72),
    "public/assets/images/gallery/gallery-9.jpg": (84, 72),
    "public/assets/images/gallery/gallery-10.jpg": (84, 72),
    "public/assets/images/gallery/gallery-11.jpg": (84, 72),
    
    # Sidebar News
    "public/assets/images/resource/news-1.jpg": (770, 400),
    "public/assets/images/resource/news-2.jpg": (770, 400),
}

def verify_all():
    print("=" * 80)
    print("VERIFYING ALL WEBSITE IMAGES AGAINST EXACT REQUIRED DIMENSIONS")
    print("=" * 80)
    
    all_passed = True
    total = len(EXPECTED_IMAGES)
    passed = 0
    placeholders_remaining = 0
    
    for path, (req_w, req_h) in EXPECTED_IMAGES.items():
        if not os.path.exists(path):
            print(f"[MISSING] {path} does not exist!")
            all_passed = False
            continue
            
        size_bytes = os.path.getsize(path)
        is_placeholder = False
        
        with Image.open(path) as im:
            actual_w, actual_h = im.size
            
            # Check if still a tiny gray placeholder (palette mode with few colors or under 800 bytes)
            if size_bytes < 800:
                is_placeholder = True
                placeholders_remaining += 1
            elif im.mode == 'P' and len(im.getcolors(maxcolors=256) or []) < 15:
                is_placeholder = True
                placeholders_remaining += 1
            elif 'resource/image-1.png' in path and size_bytes < 10000:
                is_placeholder = True
                placeholders_remaining += 1
            elif 'resource/image-2.png' in path and size_bytes < 10000:
                is_placeholder = True
                placeholders_remaining += 1
                
            dim_match = (actual_w == req_w and actual_h == req_h)
            
            status = "OK" if dim_match and not is_placeholder else "FAIL"
            if not dim_match or is_placeholder:
                all_passed = False
            else:
                passed += 1
                
            note = ""
            if not dim_match:
                note += f" [DIM MISMATCH: expected {req_w}x{req_h}, got {actual_w}x{actual_h}]"
            if is_placeholder:
                note += f" [PLACEHOLDER DETECTED ({size_bytes}B)]"
                
            print(f"[{status:4}] {path:45} : {actual_w}x{actual_h} ({size_bytes:6}B){note}")
            
    print("-" * 80)
    print(f"Verification Summary: {passed}/{total} Passed. {placeholders_remaining} Placeholders remaining.")
    if all_passed and placeholders_remaining == 0:
        print("RESULT: ALL 42 IMAGES VERIFIED AT EXACT REQUIRED DIMENSIONS! NO PLACEHOLDERS REMAIN!")
    else:
        print("RESULT: PENDING REPLACEMENTS")
    return all_passed and placeholders_remaining == 0

if __name__ == "__main__":
    verify_all()
