'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function AboutPage() {
    return (
        <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="About SA Enterprises" wrapperCls="home_1">
            {/* About Section */}
            <section className="about-section-seven">
                <div className="auto-container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="image-block">
                                <div className="image-box">
                                    <img className="lazy-image" src="/assets/images/resource/image-48.jpg" alt="About SA Enterprises" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="sec-title">
                                <h2>Where Business Needs <br /> Come First</h2>
                                <div className="text-decoration">
                                    <span className="left" />
                                    <span className="right" />
                                </div>
                            </div>
                            <div className="text-block">
                                <div className="text mb-3">
                                    SA Enterprises is a specialized B2B procurement and corporate sourcing partner. We streamline organizational acquisition across IT hardware fleets, commercial office equipment, network infrastructure, and workplace supplies.
                                </div>
                                <h4 className="mb-2">Client-Centric Procurement</h4>
                                <div className="text mb-4">
                                    We prioritize verified stock availability, clear quotation timelines, and dedicated logistics coordination. Whether fulfilling a single departmental order or recurring supply contracts, we deliver reliable solutions tailored to your operational requirements.
                                </div>
                            </div>
                            <div className="bottom-content pt-3">
                                <h5 className="mb-3">Need procurement assistance or a custom quotation?</h5>
                                <div className="link-btn d-flex flex-wrap align-items-center gap-3" style={{ position: 'relative', zIndex: 2 }}>
                                    <Link href="/contact" className="theme-btn btn-style-one mr-3 mb-2" style={{ position: 'relative' }}>
                                        <span className="btn-title">Request a Quote</span>
                                    </Link>
                                    <Link href="/solutions" className="theme-btn btn-style-two mb-2" style={{ position: 'relative' }}>
                                        <span className="btn-title">Our Solutions</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sourcing Principles Section */}
            <section className="features-section-two bg-light py-5">
                <div className="auto-container">
                    <div className="sec-title text-center">
                        <h2>Our Procurement Principles</h2>
                        <div className="text-decoration">
                            <span className="left" />
                            <span className="right" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 feature-block-two mb-4">
                            <div className="inner-box p-4 bg-white h-100 border rounded">
                                <h4>Verified Quality</h4>
                                <p>We source genuine, brand-new enterprise hardware with authentic manufacturer warranties.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 feature-block-two mb-4">
                            <div className="inner-box p-4 bg-white h-100 border rounded">
                                <h4>Transparent Turnaround</h4>
                                <p>Direct itemized quotes with honest lead times and transparent shipping milestones.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 feature-block-two mb-4">
                            <div className="inner-box p-4 bg-white h-100 border rounded">
                                <h4>End-to-End Fulfillment</h4>
                                <p>From specification consultation to final delivery coordination and post-delivery support.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}
