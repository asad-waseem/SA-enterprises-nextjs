import Link from "next/link"


export default function Pricing() {
    return (
        <>
            <section className="pricing-section-home15">
                <div className="auto-container">
                    <div className="sec-title-four">
                        <h2>Flexible Plans for Your Company</h2>
                        <Link href="/index-15" className="theme-btn btn-style-ten"><span className="btn-title">Consult</span></Link>
                    </div>
                    <div className="row clearfix">
                        <div className="col-lg-3 col-md-6 col-sm-12 pricing-column">
                            <div className="pricing-table wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                                <div className="table-header">
                                    <div className="icon-box"><img src="/assets/images-4/icons/pricing-icon-1.png" alt="" /></div>
                                    <h3>Bronze Package</h3>
                                    <span>New business company</span>
                                </div>
                                <div className="table-content">
                                    <div className="price-box clearfix">
                                        <h2><span className="symble">$</span>149</h2>
                                        <span>Only <br />Per Month</span>
                                    </div>
                                    <p>Outline all of your consulting services.</p>
                                    <Link href="/index-15" className="pricing-btn">Get Started</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 pricing-column">
                            <div className="pricing-table active wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                                <div className="tags clearfix">
                                    <div className="shape" />
                                    <h6>Popular</h6>
                                </div>
                                <div className="table-header">
                                    <div className="icon-box"><img src="/assets/images-4/icons/pricing-icon-2.png" alt="" /></div>
                                    <h3>Silver Package</h3>
                                    <span>Small business company</span>
                                </div>
                                <div className="table-content">
                                    <div className="price-box clearfix">
                                        <h2><span className="symble">$</span>274</h2>
                                        <span>Only <br />Per Month</span>
                                    </div>
                                    <p>Evaluate your audience &amp; the market place.</p>
                                    <Link href="/index-15" className="pricing-btn">Get Started</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 pricing-column">
                            <div className="pricing-table wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
                                <div className="table-header">
                                    <div className="icon-box"><img src="/assets/images-4/icons/pricing-icon-3.png" alt="" /></div>
                                    <h3>Gold <br />Package</h3>
                                    <span>Medium business company</span>
                                </div>
                                <div className="table-content">
                                    <div className="price-box clearfix">
                                        <h2><span className="symble">$</span>449</h2>
                                        <span>Only <br />Per Month</span>
                                    </div>
                                    <p>Design your good package landing page.</p>
                                    <Link href="/index-15" className="pricing-btn">Get Started</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 pricing-column">
                            <div className="pricing-table wow fadeInUp" data-wow-delay="600ms" data-wow-duration="1500ms">
                                <div className="table-header">
                                    <div className="icon-box"><img src="/assets/images-4/icons/pricing-icon-4.png" alt="" /></div>
                                    <h3>Platinum Package</h3>
                                    <span>Large business company</span>
                                </div>
                                <div className="table-content">
                                    <div className="price-box clearfix">
                                        <h2><span className="symble">$</span>999</h2>
                                        <span>Only <br />Per Month</span>
                                    </div>
                                    <p>Determine the consulting service to package.</p>
                                    <Link href="/index-15" className="pricing-btn">Get Started</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
