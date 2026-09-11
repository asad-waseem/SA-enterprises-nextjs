'use client'
import { useState } from 'react'

export default function WhyChooseUs() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [category, setCategory] = useState('IT Hardware & Desktops')
    const [submitting, setSubmitting] = useState(false)
    const [submitted, setSubmitted] = useState(false)
    const [submitError, setSubmitError] = useState('')

    const handleQuickQuote = async (e) => {
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
                    'Full Name': name,
                    'Corporate Email': email,
                    'Phone Number': phone,
                    'Procurement Category': category,
                    'Lead Source': 'Homepage Quick Quote Form',
                    _subject: `[Homepage Lead] Sourcing Quote: ${name} (${category})`,
                    _template: 'table',
                    _captcha: 'false'
                })
            })

            if (!response.ok) {
                // Fallback to native form POST
                e.target.submit()
                return
            }

            setSubmitted(true)
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

    return (
        <>
            <section className="why-choose-us-section">
                <div className="pattern" style={{ backgroundImage: 'url(/assets/images/shape/pattern-3.png)' }} />
                <div className="side-image"><img src="/assets/images/resource/image-1.png" alt="Procurement Benefits" /></div>
                <div className="auto-container">
                    <div className="row">
                        <div className="col-lg-6 order-lg-2">
                            <div className="sec-title light">
                                <h2>Why Partner With <br />SA Enterprises</h2>
                                <div className="text-decoration">
                                    <span className="left" />
                                    <span className="right" />
                                </div>
                            </div>
                            <ul className="features-list">
                                <li className="single-feature-item">
                                    <h5>Fast Sourcing Response</h5>
                                    <span className="text">Direct quotation turnaround and inventory verification across authorized distributor channels.</span>
                                </li>
                                <li className="single-feature-item">
                                    <h5>Verified Commercial Hardware</h5>
                                    <span className="text">Genuine OEM products with full manufacturer warranty and strict quality assurance.</span>
                                </li>
                                <li className="single-feature-item">
                                    <h5>Reliable Delivery Logistics</h5>
                                    <span className="text">Doorstep delivery coordination with structured tracking for bulk and recurring orders.</span>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-6">
                            <div className="consult-form">
                                {submitted ? (
                                    <div className="p-4 p-md-5 text-center bg-white rounded shadow" style={{ minHeight: '380px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                        <div className="icon mb-3" style={{ fontSize: "42px", color: "#28a745" }}>✓</div>
                                        <h3 className="text-success mb-2" style={{ color: '#28a745' }}>Quote Request Sent!</h3>
                                        <p className="text-muted mb-4" style={{ fontSize: "15px", lineHeight: "24px" }}>
                                            Thank you, <strong>{name}</strong>. Your sourcing request for <strong>{category}</strong> has been transmitted directly to our procurement desk. We will follow up at <strong>{email}</strong> or <strong>{phone}</strong> shortly.
                                        </p>
                                        <button 
                                            onClick={() => { setSubmitted(false); setName(''); setEmail(''); setPhone(''); }} 
                                            className="theme-btn btn-style-one py-2 px-4"
                                        >
                                            <span className="btn-title">Submit Another Request</span>
                                        </button>
                                    </div>
                                ) : (
                                    <form 
                                        action="https://formsubmit.co/asadwaseem.tech@gmail.com" 
                                        method="POST" 
                                        onSubmit={handleQuickQuote} 
                                        className="contact-form"
                                    >
                                        {/* FormSubmit.co Configuration */}
                                        <input type="hidden" name="_subject" value="[Homepage Lead] Sourcing Quote Request - SA Enterprises" />
                                        <input type="hidden" name="_captcha" value="false" />
                                        <input type="hidden" name="_template" value="table" />

                                        <h2>Request an Itemized <br />Sourcing Quote</h2>

                                        {submitError && (
                                            <div className="alert alert-danger mb-3 p-2 small">
                                                {submitError}
                                            </div>
                                        )}

                                        <div className="row clearfix">
                                            <div className="col-md-6 form-group">
                                                <input 
                                                    type="text" 
                                                    name="name" 
                                                    placeholder="Your Name" 
                                                    required 
                                                    value={name}
                                                    onChange={(e) => setName(e.target.value)}
                                                />
                                            </div>
                                            <div className="col-md-6 form-group">
                                                <input 
                                                    type="email" 
                                                    name="email" 
                                                    placeholder="Corporate Email" 
                                                    required 
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                />
                                            </div>
                                            <div className="col-md-6 form-group">
                                                <input 
                                                    type="tel" 
                                                    name="phone" 
                                                    placeholder="Phone Number" 
                                                    required 
                                                    value={phone}
                                                    onChange={(e) => setPhone(e.target.value)}
                                                />
                                            </div>
                                            <div className="col-md-6 form-group">
                                                <select 
                                                    name="category" 
                                                    className="custom-select" 
                                                    value={category}
                                                    onChange={(e) => setCategory(e.target.value)}
                                                >
                                                    <option value="IT Hardware & Desktops">IT Hardware &amp; Desktops</option>
                                                    <option value="Office Equipment & Printers">Office Equipment &amp; Printers</option>
                                                    <option value="Networking Infrastructure">Networking Infrastructure</option>
                                                    <option value="Toner & Cartridges">Toner &amp; Cartridges</option>
                                                    <option value="Accessories & Peripherals">Accessories &amp; Peripherals</option>
                                                    <option value="Custom Demand (Specialized / Bespoke)">Custom Demand (Specialized / Bespoke)</option>
                                                </select>
                                            </div>
                                            <div className="col-md-12 form-group">
                                                <button className="theme-btn btn-style-two w-100" type="submit" disabled={submitting}>
                                                    <span className="btn-title">{submitting ? 'Sending Request...' : 'Submit Sourcing Request'}</span>
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
        </>
    )
}
