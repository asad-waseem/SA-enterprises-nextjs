# Supabase Setup Guide for SA Enterprises

This guide explains the straightforward steps required to connect Supabase as the database, authentication, and image storage layer for **SA Enterprises**.

---

## 1. Create a Supabase Project

1. Go to [https://supabase.com](https://supabase.com) and sign in.
2. Click **New Project**.
3. Set:
   - **Name**: `SA Enterprises`
   - **Database Password**: (Generate and save securely)
   - **Region**: Choose the region closest to your target market.
4. Click **Create new project**.

---

## 2. Run Database Schema & Storage Policies

1. In your Supabase project dashboard, navigate to the **SQL Editor** tab on the left sidebar.
2. Click **New Query**.
3. Open [`/supabase/schema.sql`](file:///c:/Users/Eldo/Downloads/Projects/SA%20Enterprises/envolve/supabase/schema.sql) in this repository, copy its entire contents, and paste it into the SQL Editor.
4. Click **Run**.
5. This will automatically create:
   - `categories` table with RLS
   - `products` table with RLS
   - `quote_requests` table with RLS
   - `product-images` storage bucket with public read and admin upload policies
   - 10 seed category records

---

## 3. Create Admin Account

1. In the Supabase dashboard, navigate to **Authentication** -> **Users**.
2. Click **Add User** -> **Create User**.
3. Enter your administrative email and a secure password.

---

## 4. Add Environment Variables

Create a file named `.env.local` in the root of your project:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here

# Email Notification (Resend or SMTP)
RESEND_API_KEY=
QUOTE_NOTIFICATION_EMAIL=quotes@saenterprises.com

# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_WHATSAPP_NUMBER=
```

---

## 5. Fallback Mode

> [!NOTE]
> If Supabase credentials are not provided in `.env.local`, the frontend automatically uses the local fallback data stored in `/data/products.js`. The website will function smoothly with full browsing capabilities until you are ready to connect Supabase.
