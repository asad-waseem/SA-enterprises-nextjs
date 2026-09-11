'use client'
import { useState, useEffect, Suspense } from 'react'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useSearchParams } from "next/navigation"

function ContactQuoteForm() {
    const searchParams = useSearchParams()

    const [formData, setFormData] = useState({
        full_name: '',
        company_name: '',
        email: '',
        phone: '',
        category: 'IT Hardware',
        product_name: '',
        quantity: 1,
        preferred_brand: '',
        model: '',
        requirement_details: '',
        required_timeline: 'Standard (1-2 Weeks)'
    })

    const [submitting, setSubmitting] = useState(false)
    const [submitSuccess, setSubmitSuccess] = useState(false)
    const [submitError, setSubmitError] = useState('')

    useEffect(() => {
        const productParam = searchParams.get('product')
        const qtyParam = searchParams.get('qty')
        const rawCat = searchParams.get('category')
        const catParam = (rawCat === 'Custom Sourcing' || rawCat === 'Custom Demand' || rawCat === 'Custom Demand & Sourcing') ? 'Custom Demand & Sourcing' : rawCat
        const nameParam = searchParams.get('name')
        const emailParam = searchParams.get('email')
        const phoneParam = searchParams.get('phone')

        if (productParam || qtyParam || catParam || nameParam || emailParam || phoneParam) {
            setFormData(prev => ({
                ...prev,
                full_name: nameParam || prev.full_name,
                email: emailParam || prev.email,
                phone: phoneParam || prev.phone,
                product_name: productParam || prev.product_name,
                quantity: qtyParam ? parseInt(qtyParam) || 1 : prev.quantity,
                category: catParam || prev.category
            }))
        }
    }, [searchParams])

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setSubmitting(true)
        setSubmitError('')

        try {
            const response = await fetch('https://formsubmit.co/ajax/asadwaseem.tech@gmail.com', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    'Full Name': formData.full_name,
                    'Company': formData.company_name,
                    'Email': formData.email,
                    'Phone': formData.phone,
                    'Procurement Category': formData.category,
                    'Quantity': formData.quantity,
                    'Product / Item Name': formData.product_name || 'General Inquiry',
                    'Preferred Brand': formData.preferred_brand || 'Open to recommendations',
                    'Required Timeline': formData.required_timeline,
                    'Requirement Details': formData.requirement_details || 'N/A',
                    _subject: `[Lead] SA Enterprises Quote: ${formData.company_name || formData.full_name} (${formData.category})`,
                    _template: 'table',
                    _captcha: 'false'
                })
            })

            if (!response.ok) {
                // Fallback to native form POST
                e.target.submit()
                return
            }

            setSubmitSuccess(true)
        } catch (err) {
            console.warn('AJAX submit fallback to native form:', err)
            try {
                e.target.submit()
            } catch (submitErr) {
                setSubmitError('Failed to submit. Please contact us directly at asadwaseem.tech@gmail.com')
            }
        } finally {
            setSubmitting(false)
        }
    }

    const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER
    const whatsappMessage = encodeURIComponent(
        `Hello SA Enterprises, I would like to request a quote for ${formData.quantity} unit(s) of ${formData.product_name || formData.category}. Company: ${formData.company_name || 'N/A'}.`
    )

    return (
        <section className="contact-section" id="quote">
            <div className="auto-container">
                {/* Contact Cards */}
                <div className="row mb-5">
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="inner-box p-4 bg-light text-center border rounded h-100">
                            <div className="icon mb-3" style={{ fontSize: "28px" }}><i className="flaticon-email" /></div>
                            <h4>Procurement Desk</h4>
                            <p className="text-muted">Send bills of materials and technical specs</p>
                            <span className="font-weight-bold">Direct Online Submission</span>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="inner-box p-4 bg-light text-center border rounded h-100">
                            <div className="icon mb-3" style={{ fontSize: "28px" }}><i className="flaticon-phone" /></div>
                            <h4>Direct Support</h4>
                            <p className="text-muted">Fast quotation &amp; inventory checks</p>
                            <span className="font-weight-bold">24-48 Hr Quote Turnaround</span>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="inner-box p-4 bg-light text-center border rounded h-100">
                            <div className="icon mb-3" style={{ fontSize: "28px" }}><i className="flaticon-clock" /></div>
                            <h4>Business Hours</h4>
                            <p className="text-muted">Sourcing &amp; logistics fulfillment</p>
                            <span className="font-weight-bold">Mon - Fri: 9:00 AM - 6:00 PM</span>
                        </div>
                    </div>
                </div>

                {/* Quote Form Container */}
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="p-4 p-md-5 bg-white border rounded shadow-sm">
                            <div className="sec-title text-center mb-4">
                                <h2>Request an Itemized Sourcing Quote</h2>
                                <div className="text-decoration">
                                    <span className="left" />
                                    <span className="right" />
                                </div>
                                <div className="text mt-3">
                                    Fill in your requirements below. Our sourcing specialists will verify inventory and return an itemized quotation.
                                </div>
                            </div>

                            {submitSuccess ? (
                                <div className="p-5 text-center bg-light border rounded">
                                    <div className="icon mb-3" style={{ fontSize: "36px", color: "#28a745" }}>✓</div>
                                    <h3 className="text-success mb-2">Quote Request Received!</h3>
                                    <p className="text-muted mb-4">
                                        Thank you for contacting SA Enterprises. Your procurement request has been logged. Our sourcing team is reviewing your specifications and will follow up shortly.
                                    </p>
                                    {whatsappNumber && (
                                        <div className="mb-3">
                                            <a 
                                                href={`https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${whatsappMessage}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn btn-success px-4 py-2"
                                            >
                                                <i className="fab fa-whatsapp mr-2" /> Continue on WhatsApp
                                            </a>
                                        </div>
                                    )}
                                    <button 
                                        onClick={() => setSubmitSuccess(false)} 
                                        className="btn btn-link text-secondary"
                                    >
                                        Submit Another Requirement
                                    </button>
                                </div>
                            ) : (
                                <form 
                                    action="https://formsubmit.co/asadwaseem.tech@gmail.com" 
                                    method="POST" 
                                    onSubmit={handleSubmit} 
                                    className="contact-form"
                                >
                                    {/* FormSubmit.co Configuration */}
                                    <input type="hidden" name="_subject" value="New B2B Sourcing Quote Request - SA Enterprises" />
                                    <input type="hidden" name="_captcha" value="false" />
                                    <input type="hidden" name="_template" value="table" />

                                    {submitError && (
                                        <div className="alert alert-danger mb-4" role="alert">
                                            {submitError}
                                        </div>
                                    )}

                                    <div className="row clearfix">
                                        <div className="col-md-6 form-group">
                                            <label className="font-weight-bold">Full Name *</label>
                                            <input 
                                                type="text" 
                                                name="full_name" 
                                                required 
                                                placeholder="e.g. John Doe"
                                                value={formData.full_name}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="col-md-6 form-group">
                                            <label className="font-weight-bold">Company / Organization *</label>
                                            <input 
                                                type="text" 
                                                name="company_name" 
                                                required 
                                                placeholder="e.g. Acme Corp Ltd."
                                                value={formData.company_name}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="col-md-6 form-group">
                                            <label className="font-weight-bold">Corporate Email *</label>
                                            <input 
                                                type="email" 
                                                name="email" 
                                                required 
                                                placeholder="e.g. name@company.com"
                                                value={formData.email}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="col-md-6 form-group">
                                            <label className="font-weight-bold">Phone Number *</label>
                                            <input 
                                                type="tel" 
                                                name="phone" 
                                                required 
                                                placeholder="e.g. +1 (555) 019-2834"
                                                value={formData.phone}
                                                onChange={handleChange}
                                            />
                                        </div>

                                        <div className="col-md-6 form-group">
                                            <label className="font-weight-bold">Procurement Category</label>
                                            <select 
                                                name="category" 
                                                className="custom-select w-100"
                                                value={formData.category}
                                                onChange={handleChange}
                                                style={{ height: "50px" }}
                                            >
                                                <option value="IT Hardware">IT Hardware (Laptops, Desktops, Workstations)</option>
                                                <option value="Office Equipment">Office Equipment (Printers, Scanners, Shredders)</option>
                                                <option value="Networking">Networking &amp; Infrastructure</option>
                                                <option value="Consumables">Printing &amp; Consumables (Toner, Cartridges)</option>
                                                <option value="Accessories">Accessories, Docks &amp; Peripherals</option>
                                                <option value="Custom Demand & Sourcing">Custom Demand (Specialized / Non-Catalog Sourcing)</option>
                                            </select>
                                        </div>
                                        <div className="col-md-6 form-group">
                                            <label className="font-weight-bold">Target Quantity (Units) *</label>
                                            <input 
                                                type="number" 
                                                name="quantity" 
                                                min="1" 
                                                required 
                                                value={formData.quantity}
                                                onChange={handleChange}
                                            />
                                        </div>

                                        <div className="col-md-6 form-group">
                                            <label className="font-weight-bold">Product / Item Name (Optional)</label>
                                            <input 
                                                type="text" 
                                                name="product_name" 
                                                placeholder="e.g. 14-inch Core i7 Enterprise Laptop"
                                                value={formData.product_name}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="col-md-6 form-group">
                                            <label className="font-weight-bold">Preferred Brand / Model</label>
                                            <input 
                                                type="text" 
                                                name="preferred_brand" 
                                                placeholder="e.g. Dell / HP / Lenovo or Open to Recommendations"
                                                value={formData.preferred_brand}
                                                onChange={handleChange}
                                            />
                                        </div>

                                        <div className="col-md-12 form-group">
                                            <label className="font-weight-bold">Delivery Timeline Requirement</label>
                                            <select 
                                                name="required_timeline" 
                                                className="custom-select w-100"
                                                value={formData.required_timeline}
                                                onChange={handleChange}
                                                style={{ height: "50px" }}
                                            >
                                                <option value="Urgent (1-3 Business Days)">Urgent (1-3 Business Days)</option>
                                                <option value="Standard (1-2 Weeks)">Standard (1-2 Weeks)</option>
                                                <option value="Planned Rollout (1 Month+)">Planned Rollout (1 Month+)</option>
                                                <option value="Recurring Monthly Supply">Recurring Monthly Supply Program</option>
                                            </select>
                                        </div>

                                        <div className="col-md-12 form-group">
                                            <label className="font-weight-bold">Detailed Specifications or Notes</label>
                                            <textarea 
                                                name="requirement_details" 
                                                rows="4" 
                                                placeholder="Describe required CPU/RAM specs, delivery location, or paste your Bill of Materials (BOM) checklist..."
                                                value={formData.requirement_details}
                                                onChange={handleChange}
                                            />
                                        </div>

                                        <div className="col-md-12 form-group text-center mt-3">
                                            <button 
                                                type="submit" 
                                                disabled={submitting}
                                                className="theme-btn btn-style-one"
                                            >
                                                <span className="btn-title">{submitting ? 'Transmitting Request...' : 'Submit Quote Request'}</span>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default function ContactPage() {
    return (
        <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Contact & Sourcing Desk" wrapperCls="home_1">
            <Suspense fallback={<div className="text-center py-5">Loading sourcing form...</div>}>
                <ContactQuoteForm />
            </Suspense>
        </Layout>
    )
}
