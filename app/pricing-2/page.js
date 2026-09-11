
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Affordable Pricing" wrapperCls="home_1">
                <div>
                    <section className="pricing-section-two">
                        <div className="auto-container">
                            <div className="sec-title text-center">
                                <h2>Flexible Plans for <br /> Small to Fast-Growing Company</h2>
                                <div className="text-decoration">
                                    <span className="left" />
                                    <span className="right" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-3 pricing-block-three">
                                    <div className="inner-box">
                                        <div className="icon"><img src="/assets/images/icons/icon-56.png" alt="" /></div>
                                        <h3>Bronze <br /> Package</h3>
                                        <h4>New business company</h4>
                                        <div className="price"><sup>$</sup>149 <span>Only <br />Per Month </span></div>
                                        <div className="text">Outline all of your consulting services.</div>
                                        <div className="link-btn"><Link href="#" className="theme-btn btn-style-two"><span className="btn-title">GET STARTED</span></Link></div>
                                    </div>
                                </div>
                                <div className="col-lg-3 pricing-block-three popular">
                                    <div className="inner-box">
                                        <div className="ribbon">POPULAR</div>
                                        <div className="icon"><img src="/assets/images/icons/icon-57.png" alt="" /></div>
                                        <h3>Silver <br /> Package</h3>
                                        <h4>Small business company</h4>
                                        <div className="price"><sup>$</sup>274 <span>Only <br />Per Month </span></div>
                                        <div className="text">Evaluate your audience &amp; the market place.</div>
                                        <div className="link-btn"><Link href="#" className="theme-btn btn-style-two"><span className="btn-title">GET STARTED</span></Link></div>
                                    </div>
                                </div>
                                <div className="col-lg-3 pricing-block-three">
                                    <div className="inner-box">
                                        <div className="icon"><img src="/assets/images/icons/icon-58.png" alt="" /></div>
                                        <h3>Gold <br /> Package</h3>
                                        <h4>Medium business company</h4>
                                        <div className="price"><sup>$</sup>449 <span>Only <br />Per Month </span></div>
                                        <div className="text">Design your good package landing page.</div>
                                        <div className="link-btn"><Link href="#" className="theme-btn btn-style-two"><span className="btn-title">GET STARTED</span></Link></div>
                                    </div>
                                </div>
                                <div className="col-lg-3 pricing-block-three">
                                    <div className="inner-box">
                                        <div className="icon"><img src="/assets/images/icons/icon-59.png" alt="" /></div>
                                        <h3>Platinum <br /> Package</h3>
                                        <h4>Large business company</h4>
                                        <div className="price"><sup>$</sup>999 <span>Only <br />Per Month </span></div>
                                        <div className="text">Determine the consulting service to package.</div>
                                        <div className="link-btn"><Link href="#" className="theme-btn btn-style-two"><span className="btn-title">GET STARTED</span></Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Feature Section Two */}
                    <section className="feature-section-two style-two">
                        <div className="auto-container">
                            <div className="row">
                                <div className="col-lg-6 feature-block-two style-two">
                                    <div className="shape-box">
                                        <div className="inner-box">
                                            <div className="icon"><img src="/assets/images/icons/icon-9.png" alt="" /></div>
                                            <h4>Become a Partner of Envolve</h4>
                                            <div className="text">To take a trivial example, which of us undertakes <br />laborious physical exercise.</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 feature-block-two style-two">
                                    <div className="shape-box">
                                        <div className="inner-box">
                                            <div className="icon"><img src="/assets/images/icons/icon-10.png" alt="" /></div>
                                            <h4>Career Opportunities in Envolve</h4>
                                            <div className="text">Who chooses to enjoy a pleasure that has no one <br />annoying consequences.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

            </Layout>
        </>
    )
}