-- ==============================================================================
-- SA ENTERPRISES - SUPABASE POSTGRESQL SCHEMA & SECURITY RULES
-- ==============================================================================

-- 1. Enable UUID Extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 2. Categories Table
CREATE TABLE IF NOT EXISTS public.categories (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    description TEXT,
    image_url TEXT,
    sort_order INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. Products Table (B2B Catalogue - No Public Retail Pricing)
CREATE TABLE IF NOT EXISTS public.products (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    short_description TEXT,
    description TEXT,
    category_id UUID REFERENCES public.categories(id) ON DELETE SET NULL,
    brand TEXT,
    model TEXT,
    specifications JSONB DEFAULT '[]'::jsonb,
    featured_image TEXT,
    gallery_images JSONB DEFAULT '[]'::jsonb,
    is_featured BOOLEAN DEFAULT FALSE,
    is_active BOOLEAN DEFAULT TRUE,
    sort_order INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 4. Quote Requests Table (Lead Storage)
CREATE TABLE IF NOT EXISTS public.quote_requests (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    full_name TEXT NOT NULL,
    company_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    product_id UUID REFERENCES public.products(id) ON DELETE SET NULL,
    product_name TEXT,
    category TEXT,
    quantity INTEGER DEFAULT 1,
    preferred_brand TEXT,
    model TEXT,
    requirement_details TEXT,
    required_timeline TEXT,
    source TEXT DEFAULT 'website',
    status TEXT DEFAULT 'New' CHECK (status IN ('New', 'Contacted', 'Quoted', 'Won', 'Closed')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 5. Row Level Security (RLS) Configuration
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.quote_requests ENABLE ROW LEVEL SECURITY;

-- 5.1 Categories Policies
CREATE POLICY "Public users can view active categories"
ON public.categories FOR SELECT
USING (is_active = true);

CREATE POLICY "Admins have full access to categories"
ON public.categories FOR ALL
USING (auth.role() = 'authenticated');

-- 5.2 Products Policies
CREATE POLICY "Public users can view active products"
ON public.products FOR SELECT
USING (is_active = true);

CREATE POLICY "Admins have full access to products"
ON public.products FOR ALL
USING (auth.role() = 'authenticated');

-- 5.3 Quote Requests Policies
CREATE POLICY "Public users can submit quote requests"
ON public.quote_requests FOR INSERT
WITH CHECK (true);

CREATE POLICY "Admins can view and manage quote requests"
ON public.quote_requests FOR ALL
USING (auth.role() = 'authenticated');

-- 6. Storage Bucket Setup
INSERT INTO storage.buckets (id, name, public) 
VALUES ('product-images', 'product-images', true)
ON CONFLICT (id) DO NOTHING;

CREATE POLICY "Public Access to Product Images"
ON storage.objects FOR SELECT
USING (bucket_id = 'product-images');

CREATE POLICY "Admin Upload to Product Images"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'product-images' AND auth.role() = 'authenticated');

CREATE POLICY "Admin Delete from Product Images"
ON storage.objects FOR DELETE
USING (bucket_id = 'product-images' AND auth.role() = 'authenticated');

-- 7. Seed Initial Categories
INSERT INTO public.categories (name, slug, description, sort_order) VALUES
('Laptops & Desktops', 'laptops-desktops', 'Enterprise notebooks, workstations, and desktop fleets.', 1),
('Monitors & Displays', 'monitors-displays', 'Commercial IPS displays, 4K monitors, and mounts.', 2),
('Keyboards & Mice', 'keyboards-mice', 'Ergonomic business combos and peripherals.', 3),
('Printers & Scanners', 'printers-scanners', 'Commercial multifunction network printers and duplex scanners.', 4),
('Toner & Cartridges', 'toner-cartridges', 'Genuine OEM laser toner and maintenance kits.', 5),
('Networking Equipment', 'networking-equipment', 'Managed PoE switches, enterprise routers, and APs.', 6),
('Storage & Memory', 'storage-memory', 'Enterprise NVMe SSDs, server RAM, and NAS storage.', 7),
('Cables & Adapters', 'cables-adapters', 'DisplayPort, HDMI, USB-C hubs, and patch cords.', 8),
('Power & UPS Accessories', 'power-ups', 'Online line-interactive UPS battery backups and PDUs.', 9),
('Computer Accessories', 'accessories', 'Thunderbolt docking stations, webcams, and headsets.', 10)
ON CONFLICT (slug) DO NOTHING;
