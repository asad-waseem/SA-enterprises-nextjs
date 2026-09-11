'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from 'react'
import { FAQS_DATA } from "@/data/faqs"

export default function FAQPage() {
    const [activeKey, setActiveKey] = useState(0)

    const handleToggle = (key) => {
        if (activeKey === key) {
            setActiveKey(null)
        } else {
            setActiveKey(key)
        }
    }

    const halfLength = Math.ceil(FAQS_DATA.length / 2)
    const firstCol = FAQS_DATA.slice(0, halfLength)
    const secondCol = FAQS_DATA.slice(halfLength)

    return (
        <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Frequently Asked Questions" wrapperCls="home_1">
            <section className="faq-section-two">
                <div className="auto-container">
                    <div className="top-content text-center mb-5">
                        <div className="sec-title text-center">
                            <h2>Frequently Asked Questions</h2>
                            <div className="text-decoration">
                                <span className="left" />
                                <span className="right" />
                            </div>
                        </div>
                        <div className="text" style={{ maxWidth: "600px", margin: "0 auto" }}>
                            Find quick answers on quotation turnaround, bulk orders, product specifications, and delivery coordination.
                        </div>
                    </div>
                    
                    <div className="row">
                        {/* Column 1 */}
                        <div className="col-lg-6">
                            <ul className="accordion-box style-two mb-30">
                                {firstCol.map((faq, index) => (
                                    <li key={index} className="accordion block">
                                        <div 
                                            className={activeKey === index ? "acc-btn active" : "acc-btn"} 
                                            onClick={() => handleToggle(index)}
                                            style={{ cursor: "pointer" }}
                                        >
                                            <div className="icon-outer">
                                                <span className="icon icon_plus flaticon-right" />
                                                <span className="icon icon_minus flaticon-right" />
                                            </div>
                                            {String(index + 1).padStart(2, '0')}. {faq.question}
                                        </div>
                                        <div className={activeKey === index ? "acc-content current" : "acc-content"} style={{ display: activeKey === index ? "block" : "none" }}>
                                            <div className="content">
                                                <div className="text">
                                                    {faq.answer}
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Column 2 */}
                        <div className="col-lg-6">
                            <ul className="accordion-box style-two mb-30">
                                {secondCol.map((faq, idx) => {
                                    const actualIndex = idx + halfLength
                                    return (
                                        <li key={actualIndex} className="accordion block">
                                            <div 
                                                className={activeKey === actualIndex ? "acc-btn active" : "acc-btn"} 
                                                onClick={() => handleToggle(actualIndex)}
                                                style={{ cursor: "pointer" }}
                                            >
                                                <div className="icon-outer">
                                                    <span className="icon icon_plus flaticon-right" />
                                                    <span className="icon icon_minus flaticon-right" />
                                                </div>
                                                {String(actualIndex + 1).padStart(2, '0')}. {faq.question}
                                            </div>
                                            <div className={activeKey === actualIndex ? "acc-content current" : "acc-content"} style={{ display: activeKey === actualIndex ? "block" : "none" }}>
                                                <div className="content">
                                                    <div className="text">
                                                        {faq.answer}
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>

                    <div className="p-4 text-center mt-4 bg-light border rounded">
                        <h3 className="mb-2">Have a Question Not Listed Here?</h3>
                        <p className="text-muted mb-3">Our sourcing specialists are here to answer your technical questions or prepare custom quotes.</p>
                        <Link href="/contact" className="theme-btn btn-style-one"><span className="btn-title">Contact Our Sourcing Desk</span></Link>
                    </div>
                </div>
            </section>
        </Layout>
    )
}