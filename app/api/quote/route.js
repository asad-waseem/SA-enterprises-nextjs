import { NextResponse } from 'next/server'
import { supabaseAdmin, isSupabaseAdminConfigured } from '@/lib/supabase-admin'

export async function POST(request) {
    try {
        const body = await request.json()
        const {
            full_name,
            company_name,
            email,
            phone,
            category,
            product_name,
            quantity = 1,
            preferred_brand,
            model,
            requirement_details,
            required_timeline,
            source = 'website'
        } = body

        if (!full_name || !email || !phone) {
            return NextResponse.json(
                { error: 'Please provide your full name, corporate email, and contact phone number.' },
                { status: 400 }
            )
        }

        let dbRecordId = null

        // 1. Save to Supabase quote_requests table if configured
        if (isSupabaseAdminConfigured && supabaseAdmin) {
            try {
                const { data, error: dbError } = await supabaseAdmin
                    .from('quote_requests')
                    .insert([
                        {
                            full_name,
                            company_name: company_name || 'N/A',
                            email,
                            phone,
                            category: category || 'General Sourcing',
                            product_name: product_name || null,
                            quantity: parseInt(quantity) || 1,
                            preferred_brand: preferred_brand || null,
                            model: model || null,
                            requirement_details: requirement_details || null,
                            required_timeline: required_timeline || null,
                            source,
                            status: 'New'
                        }
                    ])
                    .select()

                if (dbError) {
                    console.warn("Supabase quote insert error:", dbError)
                } else if (data && data[0]) {
                    dbRecordId = data[0].id
                }
            } catch (err) {
                console.warn("Supabase database saving failed:", err)
            }
        }

        // 2. Dispatch Email Notification via FormSubmit.co to asadwaseem.tech@gmail.com
        try {
            await fetch('https://formsubmit.co/ajax/asadwaseem.tech@gmail.com', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    'Full Name': full_name,
                    'Company': company_name || 'N/A',
                    'Email': email,
                    'Phone': phone,
                    'Category': category || 'General Sourcing',
                    'Product / Item': product_name || 'N/A',
                    'Quantity': quantity,
                    'Preferred Brand / Model': preferred_brand || model || 'N/A',
                    'Timeline': required_timeline || 'Standard',
                    'Requirement Details': requirement_details || 'N/A',
                    _subject: `[New Lead] Sourcing Quote: ${company_name || full_name} - ${product_name || category || 'Equipment'}`,
                    _template: 'table',
                    _captcha: 'false'
                })
            })
        } catch (formSubmitErr) {
            console.warn("FormSubmit dispatch warning:", formSubmitErr)
        }

        // 3. Dispatch Email Notification if Resend API Key is provided
        const resendKey = process.env.RESEND_API_KEY
        const recipientEmail = process.env.QUOTE_NOTIFICATION_EMAIL || 'asadwaseem.tech@gmail.com'

        if (resendKey) {
            try {
                const emailHtml = `
                    <h2>New Sourcing Quote Request - SA Enterprises</h2>
                    <p><strong>Full Name:</strong> ${full_name}</p>
                    <p><strong>Company:</strong> ${company_name || 'N/A'}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Phone:</strong> ${phone}</p>
                    <p><strong>Product / Category:</strong> ${product_name || category || 'N/A'}</p>
                    <p><strong>Quantity:</strong> ${quantity}</p>
                    <p><strong>Preferred Brand/Model:</strong> ${preferred_brand || model || 'N/A'}</p>
                    <p><strong>Timeline:</strong> ${required_timeline || 'Standard'}</p>
                    <p><strong>Requirement Details:</strong></p>
                    <p style="background:#f4f4f4;padding:12px;border-left:4px solid #ff5e14;">${requirement_details || 'No additional notes provided.'}</p>
                `

                await fetch('https://api.resend.com/emails', {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${resendKey}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        from: 'SA Enterprises Sourcing <onboarding@resend.dev>',
                        to: [recipientEmail],
                        subject: `[New Lead] Sourcing Quote: ${company_name || full_name} - ${product_name || category || 'Equipment'}`,
                        html: emailHtml
                    })
                })
            } catch (mailErr) {
                console.warn("Email dispatch notification failed:", mailErr)
            }
        }

        return NextResponse.json({
            success: true,
            id: dbRecordId,
            message: 'Your quote request has been received. A procurement specialist will review your specifications and contact you with an itemized quotation.'
        })

    } catch (err) {
        console.error("Quote submission error:", err)
        return NextResponse.json(
            { error: 'An unexpected error occurred while processing your request. Please try again or email us directly.' },
            { status: 500 }
        )
    }
}
