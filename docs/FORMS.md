# Form Systems & Quote Form Integration

This document inventories the form interfaces scattered across the template routes, details their validation and backend integration (which are currently dead frontend-only mocks), and outlines a technical plan to integrate the B2B "Request a Quote" form.

---

## 1. Existing Form Audit

The template contains forms in several routes and components:

| Form Location | Form Type | Fields | Submit Target (`action` / `method`) |
| :--- | :--- | :--- | :--- |
| `app/contact-1/page.js` | Contact | First Name, Email, Phone, Subject dropdown, Message | `assets/inc/sendmail.php` (POST) |
| `app/contact-2/page.js` | Contact | First Name, Email, Phone, Subject, Message | `sendemail.php` (POST) |
| `app/contact-3/page.js` | Contact | First Name, Email, Phone, Subject, Message | `sendemail.php` (POST) |
| `app/contact-4/page.js` | Contact | First Name, Email, Phone, Subject, Message | `sendemail.php` (POST) |
| `app/account/page.js` | Login / Register | Login: Username/Email, Password. Register: Email, Password | `account` (POST) |
| `app/checkout/page.js` | Order Billing | First Name, Last Name, Company, Email, Phone, Country, Address, City, State, Zip, Order Notes | `#` (static submit) |
| `app/product-details/page.js` | Comment Review | Review Text, Name, Email, Star rating | `#` (static submit) |
| `components/layout/footer/Footer15.js` | Newsletter | Email Address | `contact` (POST) |
| `components/layout/footer/Footer10.js` | Contact widget | First Name, Email, Phone, Subject, Message | `sendemail.php` (POST) |

---

## 2. Validation & Backend Functionality

*   **Validation**: The codebase does not use any form validation libraries (such as Formik, React Hook Form, Zod, or Yup). Form validation is handled exclusively using standard browser HTML5 validation attributes (`required`, `type="email"`).
*   **Mail Backend**: Forms are **unconnected frontend mockups**. Submitting a form tries to POST to `sendemail.php` or `assets/inc/sendmail.php` (which do not exist in this Next.js project), resulting in a `404 Not Found` server error.

---

## 3. Integration Plan: Request a Quote Form

For SA Enterprises, the primary lead generation mechanism is the **Request a Quote** form. To replace the mock contact forms with a working lead pipeline, the following implementation steps are recommended:

### Step 1: Design B2B Sourcing Fields
The quote form on `/contact` (repurposed from `contact-1`) must capture business-specific requirements:
1.  **Full Name** (string, `required`)
2.  **Corporate Email** (email, `required`)
3.  **Phone Number** (string, `required`)
4.  **Company Name** (string, `required`)
5.  **Product Category Dropdown** (`required` - IT Hardware, Office Equipment, Accessories, Consumables, Custom Request)
6.  **Estimated Volume / Quantity** (integer)
7.  **Sourcing Requirements Description** (textarea, details on specs, delivery timeline, or brand preferences)

### Step 2: Bind Form States in Client Components
To submit form values in React, convert the contact form block into a Client Component (or write inline client-side handlers):
```javascript
'use client'
import { useState } from 'react'

export default function QuoteForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        category: '',
        quantity: '',
        details: ''
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        // Submit handler to API route
        const response = await fetch('/api/quote', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        })
        if (response.ok) {
            alert('Your request has been received. Our procurement team will contact you shortly.')
        }
    }
}
```

### Step 3: Implement Next.js API Routes (Backend)
Define a secure Next.js API Route handler at `app/api/quote/route.js` (using App Router Route Handlers) to catch submissions and forward them to SA Enterprises' quotation inbox:
```javascript
import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request) {
    const data = await request.json()
    
    // Set up a transporter using a corporate SMTP server or third-party service
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASSWORD
        }
    })

    const mailOptions = {
        from: process.env.SMTP_USER,
        to: 'quotes@saenterprises.com',
        subject: `New Sourcing Quote Request: ${data.company} - ${data.category}`,
        text: `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nCompany: ${data.company}\nCategory: ${data.category}\nQuantity: ${data.quantity}\nRequirements: ${data.details}`
    }

    try {
        await transporter.sendMail(mailOptions)
        return NextResponse.json({ success: true })
    } catch (error) {
        return NextResponse.json({ error: 'Mail dispatch failed' }, { status: 500 })
    }
}
```
*Note: A third-party SaaS form service (like Formspree, Web3Forms, or EmailJS) can be integrated as an alternative if SA Enterprises wants to avoid managing a mail server script.*
