from PIL import Image, ImageDraw, ImageFont
import os

def create_logo(filename, is_dark_bg=False):
    width, height = 194, 55
    # Create RGBA image with transparent background
    img = Image.new("RGBA", (width, height), (255, 255, 255, 0))
    draw = ImageDraw.Draw(img)
    
    # Colors
    primary_color = (255, 255, 255, 255) if is_dark_bg else (15, 34, 64, 255) # White or Navy
    accent_color = (255, 106, 0, 255) # Envolve Theme Orange / Gold
    sub_color = (180, 190, 205, 255) if is_dark_bg else (100, 110, 125, 255)
    
    # Draw Modern Minimalist Icon on left (Circles & Connected Node)
    # Outer circle
    draw.ellipse([8, 12, 38, 42], outline=primary_color, width=3)
    # Inner accent circle
    draw.ellipse([17, 21, 29, 33], fill=accent_color)
    # Connected node arm
    draw.rectangle([25, 25, 42, 29], fill=accent_color)
    draw.ellipse([38, 23, 46, 31], fill=primary_color)
    
    # Try loading system font, fallback to default
    try:
        font_main = ImageFont.truetype("arialbd.ttf", 20)
        font_sub = ImageFont.truetype("arial.ttf", 9)
    except:
        font_main = ImageFont.load_default()
        font_sub = ImageFont.load_default()
        
    # Text: "SA Enterprises"
    draw.text((54, 11), "SA", font=font_main, fill=accent_color)
    # Measure width of "SA "
    bbox = draw.textbbox((54, 11), "SA ", font=font_main)
    draw.text((bbox[2], 11), "Enterprises", font=font_main, fill=primary_color)
    
    # Tagline
    draw.text((54, 34), "WHERE BUSINESS NEEDS COME FIRST", font=font_sub, fill=sub_color)
    
    img.save(filename, "PNG")
    print(f"Created logo: {filename} ({img.size[0]}x{img.size[1]})")

create_logo("public/assets/images/logo.png", is_dark_bg=False)
create_logo("public/assets/images/logo-2.png", is_dark_bg=True)
