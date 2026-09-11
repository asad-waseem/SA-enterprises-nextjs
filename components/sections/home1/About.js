'use client'
import Link from "next/link"

export default function About() {
    return (
        <>
            <section className="about-section">
                <div className="auto-container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="image-block">
                                <div className="image-one wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                    <div className="image-box"><img className="lazy-image" src="/assets/images/resource/image-5.jpg" alt="SA Enterprises Procurement" /></div>
                                </div>
                                <div className="image-two wow fadeInLeft" data-wow-delay="300ms" data-wow-duration="1500ms">
                                    <div className="image-box"><img className="lazy-image" src="/assets/images/resource/image-4.jpg" alt="Corporate Sourcing" /></div>
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
                                <div className="text">SA Enterprises is a dedicated B2B procurement and corporate sourcing partner. We assist companies, institutions, and businesses in procuring genuine IT hardware, office technology, network equipment, and recurring workplace supplies with transparent lead times.</div>
                            </div>
                            <div className="text-block">
                                <h5>Corporate Sourcing</h5>
                                <h4>Tailored hardware fleets and office infrastructure</h4>
                            </div>
                            <div className="text-block">
                                <h5>Our Commitment</h5>
                                <h4>Verified equipment with dedicated quote turnaround</h4>
                            </div>
                            <div className="author-box">
                                <div className="author-info">
                                    <h4>SA Enterprises</h4>
                                    <h5>Corporate Procurement &amp; Sourcing Desk</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
