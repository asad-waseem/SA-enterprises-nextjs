import Link from "next/link"

export default function Features() {
    return (
        <>
            <section className="features-section">
                <div className="auto-container">
                    <div className="sec-title text-center">
                        <h2>Procurement Categories &amp; <br /> Corporate Sourcing Solutions</h2>
                        <div className="text-decoration">
                            <span className="left" />
                            <span className="right" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 feature-block-one wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="image">
                                    <div className="icon"><span className="flaticon-career" /></div>
                                    <img className="lazy-image owl-lazy" src="/assets/images/resource/image-1.jpg" alt="IT Hardware" />
                                </div>
                                <div className="content">
                                    <h5>Sourcing</h5>
                                    <h4>IT Hardware &amp; Fleets</h4>
                                </div>
                                <div className="overlay">
                                    <div className="content">
                                        <h5>Sourcing</h5>
                                        <h4>IT Hardware &amp; Fleets</h4>
                                    </div>
                                    <div className="text" style={{ backgroundImage: 'url(/assets/images/resource/image-1.jpg)' }}>
                                        <p>Enterprise laptops, desktops, monitors, and workstation deployments.</p>
                                        <div className="link-btn"><Link href="/solutions/it-hardware"><i className="flaticon-right-arrow" /></Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 feature-block-one wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="image">
                                    <div className="icon"><span className="flaticon-question" /></div>
                                    <img className="lazy-image owl-lazy" src="/assets/images/resource/image-2.jpg" alt="Office Technology" />
                                </div>
                                <div className="content">
                                    <h5>Infrastructure</h5>
                                    <h4>Office &amp; Networking</h4>
                                </div>
                                <div className="overlay">
                                    <div className="content">
                                        <h5>Infrastructure</h5>
                                        <h4>Office &amp; Networking</h4>
                                    </div>
                                    <div className="text" style={{ backgroundImage: 'url(/assets/images/resource/image-2.jpg)' }}>
                                        <p>Commercial network switches, routers, multi-function printers, and scanners.</p>
                                        <div className="link-btn"><Link href="/solutions/office-equipment"><i className="flaticon-right-arrow" /></Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 feature-block-one wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="image">
                                    <div className="icon"><span className="flaticon-customer-service" /></div>
                                    <img className="lazy-image owl-lazy" src="/assets/images/resource/image-3.jpg" alt="Consumables & BOM" />
                                </div>
                                <div className="content">
                                    <h5>Supply</h5>
                                    <h4>Toner &amp; Custom Sourcing</h4>
                                </div>
                                <div className="overlay">
                                    <div className="content">
                                        <h5>Supply</h5>
                                        <h4>Toner &amp; Custom Sourcing</h4>
                                    </div>
                                    <div className="text" style={{ backgroundImage: 'url(/assets/images/resource/image-3.jpg)' }}>
                                        <p>OEM toner cartridges, cables, UPS power backups, and specialized bills of materials.</p>
                                        <div className="link-btn"><Link href="/solutions/printing-consumables"><i className="flaticon-right-arrow" /></Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bottom-content text-center">
                        <div className="text">Looking to optimize your organization’s procurement process and hardware fleet?</div>
                        <h3>Request an Itemized Quotation Today</h3>
                        <div className="link-btn"><Link href="/contact" className="theme-btn btn-style-two"><span className="btn-title">Request a Quote</span></Link></div>
                    </div>
                </div>
            </section>
        </>
    )
}
