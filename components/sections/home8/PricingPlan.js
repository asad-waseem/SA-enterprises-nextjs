import Link from "next/link"


export default function PricingPlan() {
    return (
        <>
            <section className="pricing-plan-section-eight">
                <div className="pattern-bg" style={{ backgroundImage: 'url(assets/images-3/pattern/pattern-bg-1.jpg)' }} />
                <div className="auto-container">
                    <div className="sec-title style-eight clr2  text-center">
                        <h4>Pricing &amp; Plan</h4>
                        <h2>Recommended by Experts and We<br /> Recommended for You</h2>
                    </div>
                    <div className="row">
                        {/*Start Pricing Plan Block Eight*/}
                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 text-center">
                            <div className="pricing-plan-block-eight">
                                <div className="table-header" style={{ backgroundImage: 'url(assets/images-3/pricing-plan-block-eight-1.jpg)' }}>
                                    <div className="top">
                                        <h3>Individual</h3>
                                        <span>*Avg. cost of Individual Therophy</span>
                                    </div>
                                    <div className="package">
                                        <h2><span>$</span>29.00<b>/ Mo</b></h2>
                                    </div>
                                </div>
                                <div className="table-button">
                                    <Link href="#" className="theme-btn btn-style-eight"><span className="btn-title">Get Started
                                        Now</span></Link>
                                </div>
                                <div className="price-list">
                                    <ul>
                                        <li>Installation</li>
                                        <li>Repair &amp; Replacement</li>
                                        <li>Monitoring</li>
                                        <li>Panel Maintenance</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/*End Pricing Plan Block Eight*/}
                        {/*Start Pricing Plan Block Eight*/}
                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 text-center">
                            <div className="pricing-plan-block-eight">
                                <div className="table-header" style={{ backgroundImage: 'url(assets/images-3/pricing-plan-block-eight-2.jpg)' }}>
                                    <div className="top">
                                        <h3>Couple / Family</h3>
                                        <span>*Avg. cost of Family Therophy</span>
                                    </div>
                                    <div className="package">
                                        <h2><span>$</span>49.00<b>/ Mo</b></h2>
                                    </div>
                                </div>
                                <div className="table-button">
                                    <Link href="#" className="theme-btn btn-style-eight"><span className="btn-title">Get Started
                                        Now</span></Link>
                                </div>
                                <div className="price-list">
                                    <ul>
                                        <li>Installation</li>
                                        <li>Repair &amp; Replacement</li>
                                        <li>Monitoring</li>
                                        <li>Panel Maintenance</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/*End Pricing Plan Block Eight*/}
                        {/*Start Pricing Plan Block Eight*/}
                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 text-center">
                            <div className="pricing-plan-block-eight">
                                <div className="table-header" style={{ backgroundImage: 'url(assets/images-3/pricing-plan-block-eight-3.jpg)' }}>
                                    <div className="top">
                                        <h3>Business</h3>
                                        <span>*Avg. cost of Businessl Therophy</span>
                                    </div>
                                    <div className="package">
                                        <h2><span>$</span>79.00<b>/ Yr</b></h2>
                                    </div>
                                </div>
                                <div className="table-button">
                                    <Link href="#" className="theme-btn btn-style-eight"><span className="btn-title">Get Started
                                        Now</span></Link>
                                </div>
                                <div className="price-list">
                                    <ul>
                                        <li>Installation</li>
                                        <li>Repair &amp; Replacement</li>
                                        <li>Monitoring</li>
                                        <li>Panel Maintenance</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/*End Pricing Plan Block Eight*/}
                    </div>
                </div>
            </section>
        </>
    )
}
