import os
import urllib.request
from PIL import Image, ImageOps

# Dictionary of all images to download, crop, and save at exact dimensions
IMAGE_TASKS = [
    # 1. Products Catalogue Items (Exact 179x270 px)
    {
        "target": "public/assets/images/shop/product-1.jpg",
        "w": 179, "h": 270,
        "url": "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=1000&q=85", # Executive laptop
        "desc": "Enterprise Business Laptop"
    },
    {
        "target": "public/assets/images/shop/product-2.jpg",
        "w": 179, "h": 270,
        "url": "https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=1000&q=85", # Desktop workstation
        "desc": "Commercial Desktop Workstation"
    },
    {
        "target": "public/assets/images/shop/product-3.jpg",
        "w": 179, "h": 270,
        "url": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=1000&q=85", # IPS Monitor
        "desc": "27-inch QHD Monitor"
    },
    {
        "target": "public/assets/images/shop/product-4.jpg",
        "w": 179, "h": 270,
        "url": "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=1000&q=85", # LaserJet Printer
        "desc": "Multifunction LaserJet Printer"
    },
    {
        "target": "public/assets/images/shop/product-5.jpg",
        "w": 179, "h": 270,
        "url": "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1000&q=85", # Network Switch
        "desc": "24-Port Managed PoE Switch"
    },
    {
        "target": "public/assets/images/shop/product-6.jpg",
        "w": 179, "h": 270,
        "url": "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1000&q=85", # Workgroup Scanner
        "desc": "Document Scanner"
    },
    {
        "target": "public/assets/images/shop/product-7.jpg",
        "w": 179, "h": 270,
        "url": "https://images.unsplash.com/photo-1544652478-6653e09f18a2?w=1000&q=85", # Docking Station
        "desc": "Thunderbolt Docking Station"
    },
    {
        "target": "public/assets/images/shop/product-8.jpg",
        "w": 179, "h": 270,
        "url": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=1000&q=85", # Toner Cartridges
        "desc": "OEM Toner Cartridge Pack"
    },
    
    # 2. Home 1 Features (Exact 330x188 px)
    {
        "target": "public/assets/images/resource/image-1.jpg",
        "w": 330, "h": 188,
        "url": "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1000&q=85", # IT Hardware Fleets
        "desc": "IT Hardware Fleets"
    },
    {
        "target": "public/assets/images/resource/image-2.jpg",
        "w": 330, "h": 188,
        "url": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1000&q=85", # Network Infrastructure
        "desc": "Network Infrastructure"
    },
    {
        "target": "public/assets/images/resource/image-3.jpg",
        "w": 330, "h": 188,
        "url": "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1000&q=85", # Office Print Solutions
        "desc": "Office Print Solutions"
    },
    
    # 3. Home 1 About (Exact 420x360 & 400x360 px)
    {
        "target": "public/assets/images/resource/image-5.jpg",
        "w": 420, "h": 360,
        "url": "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1000&q=85", # Corporate Tech Team
        "desc": "Corporate IT Specialists"
    },
    {
        "target": "public/assets/images/resource/image-4.jpg",
        "w": 400, "h": 360,
        "url": "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1000&q=85", # Business Consultation
        "desc": "Procurement Consultation"
    },
    
    # 4. About Page Showcase (Exact 510x651 px)
    {
        "target": "public/assets/images/resource/image-48.jpg",
        "w": 510, "h": 651,
        "url": "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1000&q=85", # Executive Headquarters Team
        "desc": "Corporate Operations Team"
    },
    
    # 5. Why Choose Us & CTA Graphics (Exact 826x811 & 581x895 px)
    {
        "target": "public/assets/images/resource/image-1.png",
        "w": 826, "h": 811,
        "url": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200&q=85", # Procurement Manager
        "desc": "Procurement Operations Manager"
    },
    {
        "target": "public/assets/images/resource/image-2.png",
        "w": 581, "h": 895,
        "url": "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=1000&q=85", # Corporate Executive
        "desc": "Corporate Sourcing Consultant"
    },
    
    # 6. Solutions Hub (6 Cards)
    {
        "target": "public/assets/images/resource/image-18.jpg",
        "w": 270, "h": 120,
        "url": "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=1000&q=85", # IT Hardware
        "desc": "Solutions IT Hardware"
    },
    {
        "target": "public/assets/images/resource/image-19.jpg",
        "w": 270, "h": 120,
        "url": "https://images.unsplash.com/photo-1589330694653-dad6bc0140ad?w=1000&q=85", # Office Equipment
        "desc": "Solutions Office Equipment"
    },
    {
        "target": "public/assets/images/resource/image-20.jpg",
        "w": 370, "h": 383,
        "url": "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1000&q=85", # Networking
        "desc": "Solutions Networking"
    },
    {
        "target": "public/assets/images/resource/image-21.jpg",
        "w": 370, "h": 383,
        "url": "https://images.unsplash.com/photo-1562564055-71e051d33c19?w=1000&q=85", # Consumables
        "desc": "Solutions Consumables"
    },
    {
        "target": "public/assets/images/resource/image-22.jpg",
        "w": 330, "h": 300,
        "url": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=1000&q=85", # Accessories
        "desc": "Solutions Accessories"
    },
    {
        "target": "public/assets/images/resource/image-23.jpg",
        "w": 330, "h": 300,
        "url": "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1000&q=85", # Custom Procurement
        "desc": "Solutions Custom Procurement"
    },
    
    # 7. Solutions Detailed Pages (Exact 370x270 px)
    {
        "target": "public/assets/images/resource/image-34.jpg",
        "w": 370, "h": 270,
        "url": "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=1000&q=85", # IT Hardware Detail
        "desc": "IT Hardware Detail View"
    },
    {
        "target": "public/assets/images/resource/image-35.jpg",
        "w": 370, "h": 270,
        "url": "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=1000&q=85", # Office Equipment Detail
        "desc": "Office Equipment Detail View"
    },
    {
        "target": "public/assets/images/resource/image-36.jpg",
        "w": 370, "h": 270,
        "url": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1000&q=85", # Networking Detail
        "desc": "Networking Detail View"
    },
    {
        "target": "public/assets/images/resource/image-37.jpg",
        "w": 370, "h": 270,
        "url": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=1000&q=85", # Consumables Detail
        "desc": "Consumables Detail View"
    },
    {
        "target": "public/assets/images/resource/image-38.jpg",
        "w": 370, "h": 270,
        "url": "https://images.unsplash.com/photo-1544652478-6653e09f18a2?w=1000&q=85", # Accessories Detail
        "desc": "Accessories Detail View"
    },
    {
        "target": "public/assets/images/resource/image-39.jpg",
        "w": 370, "h": 270,
        "url": "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1000&q=85", # Custom Procurement Detail
        "desc": "Custom Sourcing Detail View"
    },
    
    # 8. Products Sidebar Promo Banner (Exact 340x413 px)
    {
        "target": "public/assets/images/background/bg-25.jpg",
        "w": 340, "h": 413,
        "url": "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1000&q=85", # Tech blue background
        "desc": "RFQ Sidebar Banner"
    },
    
    # 9. Footer Gallery (Exact 84x72 px)
    {
        "target": "public/assets/images/gallery/gallery-6.jpg",
        "w": 84, "h": 72,
        "url": "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&q=85",
        "desc": "Gallery Laptop"
    },
    {
        "target": "public/assets/images/gallery/gallery-7.jpg",
        "w": 84, "h": 72,
        "url": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&q=85",
        "desc": "Gallery Network Switch"
    },
    {
        "target": "public/assets/images/gallery/gallery-8.jpg",
        "w": 84, "h": 72,
        "url": "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=500&q=85",
        "desc": "Gallery Printer"
    },
    {
        "target": "public/assets/images/gallery/gallery-9.jpg",
        "w": 84, "h": 72,
        "url": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&q=85",
        "desc": "Gallery Monitor"
    },
    {
        "target": "public/assets/images/gallery/gallery-10.jpg",
        "w": 84, "h": 72,
        "url": "https://images.unsplash.com/photo-1544652478-6653e09f18a2?w=500&q=85",
        "desc": "Gallery Dock"
    },
    {
        "target": "public/assets/images/gallery/gallery-11.jpg",
        "w": 84, "h": 72,
        "url": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500&q=85",
        "desc": "Gallery Toner"
    },
    
    # 10. Sidebar News (Exact 770x400 px)
    {
        "target": "public/assets/images/resource/news-1.jpg",
        "w": 770, "h": 400,
        "url": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=85",
        "desc": "Corporate IT Strategy"
    },
    {
        "target": "public/assets/images/resource/news-2.jpg",
        "w": 770, "h": 400,
        "url": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=85",
        "desc": "Supply Chain Technology"
    },
]

def download_and_crop(task):
    target = task["target"]
    target_w = task["w"]
    target_h = task["h"]
    url = task["url"]
    desc = task["desc"]
    
    temp_file = "temp_download.jpg"
    headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}
    
    print(f"Downloading for {desc} -> {target} ({target_w}x{target_h})...")
    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req, timeout=20) as resp:
            data = resp.read()
        with open(temp_file, "wb") as f:
            f.write(data)
            
        with Image.open(temp_file) as img:
            target_ext = os.path.splitext(target)[1].lower()
            if target_ext in ('.jpg', '.jpeg'):
                if img.mode in ('RGBA', 'LA', 'P'):
                    bg = Image.new("RGB", img.size, (255, 255, 255))
                    if img.mode == 'P':
                        img = img.convert('RGBA')
                    bg.paste(img, mask=img.split()[-1] if 'A' in img.mode else None)
                    img = bg
                elif img.mode != 'RGB':
                    img = img.convert('RGB')
            elif target_ext == '.png':
                if img.mode != 'RGBA':
                    img = img.convert('RGBA')
                    
            # Smart center-crop to target dimensions
            cropped = ImageOps.fit(img, (target_w, target_h), method=Image.Resampling.LANCZOS, centering=(0.5, 0.5))
            os.makedirs(os.path.dirname(target), exist_ok=True)
            
            if target_ext in ('.jpg', '.jpeg'):
                cropped.save(target, 'JPEG', quality=92, optimize=True)
            elif target_ext == '.png':
                cropped.save(target, 'PNG', optimize=True)
                
        # Validate final dimensions
        with Image.open(target) as check_img:
            if check_img.size != (target_w, target_h):
                print(f"ERROR: Dimension mismatch for {target}: expected {(target_w, target_h)}, got {check_img.size}")
                return False
            print(f"SUCCESS: {target} -> {check_img.size[0]}x{check_img.size[1]} ({os.path.getsize(target)} bytes)")
            return True
            
    except Exception as e:
        print(f"FAILED {target}: {e}")
        return False
    finally:
        if os.path.exists(temp_file):
            os.remove(temp_file)

if __name__ == "__main__":
    print(f"Starting download and processing of {len(IMAGE_TASKS)} images...")
    successful = 0
    for task in IMAGE_TASKS:
        ok = download_and_crop(task)
        if ok:
            successful += 1
    print(f"\nCompleted: {successful}/{len(IMAGE_TASKS)} images processed successfully.")
