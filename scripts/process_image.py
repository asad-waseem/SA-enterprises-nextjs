import sys
import os
from PIL import Image, ImageOps

def resize_and_crop(source_path, target_path, target_width, target_height, quality=92):
    """
    Resizes and center-crops an image to exact target_width x target_height
    without any distortion or stretching.
    """
    if not os.path.exists(source_path):
        raise FileNotFoundError(f"Source file not found: {source_path}")
        
    with Image.open(source_path) as img:
        # Convert to RGB if saving as JPEG and image has RGBA/P mode
        target_ext = os.path.splitext(target_path)[1].lower()
        if target_ext in ('.jpg', '.jpeg'):
            if img.mode in ('RGBA', 'LA', 'P'):
                bg = Image.new("RGB", img.size, (255, 255, 255))
                if img.mode == 'P':
                    img = img.convert('RGBA')
                bg.paste(img, mask=img.split()[-1] if 'A' in img.mode else None)
                img = bg
            elif img.mode != 'RGB':
                img = img.convert('RGB')
                
        # Smart center-crop to target aspect ratio
        img_cropped = ImageOps.fit(img, (target_width, target_height), method=Image.Resampling.LANCZOS, centering=(0.5, 0.5))
        
        # Ensure target directory exists
        os.makedirs(os.path.dirname(target_path), exist_ok=True)
        
        # Save image
        if target_ext in ('.jpg', '.jpeg'):
            img_cropped.save(target_path, 'JPEG', quality=quality, optimize=True)
        elif target_ext == '.png':
            img_cropped.save(target_path, 'PNG', optimize=True)
        else:
            img_cropped.save(target_path)
            
    # Verify dimensions
    with Image.open(target_path) as check_img:
        if check_img.size != (target_width, target_height):
            raise ValueError(f"Dimension mismatch! Expected {(target_width, target_height)}, got {check_img.size}")
        print(f"SUCCESS: {target_path} saved at exact {check_img.size[0]}x{check_img.size[1]} ({os.path.getsize(target_path)} bytes)")

if __name__ == "__main__":
    if len(sys.argv) < 5:
        print("Usage: python process_image.py <source> <target> <width> <height>")
        sys.exit(1)
    resize_and_crop(sys.argv[1], sys.argv[2], int(sys.argv[3]), int(sys.argv[4]))
