import Link from "next/link"


export default function Service() {
    return (
        <>
            <section className="service-section-home13" style={{ backgroundImage: 'url(assets/images-4/background/service-bg.jpg)' }}>
                <div className="auto-container">
                    <div className="sec-title-two text-center light">
                        <h6>Our Services</h6>
                        <h2>We’re The Construction Kings, Building <br />Up Great Things</h2>
                    </div>
                    <div className="row clearfix">
                        <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                            <div className="single-item wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <figure className="image-box"><img src="/assets/images-4/service/service-1.jpg" alt="" /></figure>
                                    <div className="icon-box"><i className="customicon-sketch" /></div>
                                    <div className="text">
                                        <h3><Link href="/service-details">Design &amp; Estimate</Link></h3>
                                        <p>Eco Car Inspection Services</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                            <div className="single-item wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <figure className="image-box"><img src="/assets/images-4/service/service-2.jpg" alt="" /></figure>
                                    <div className="icon-box"><i className="customicon-home" /></div>
                                    <div className="text">
                                        <h3><Link href="/service-details">Construction</Link></h3>
                                        <p>Addition to Expert Diagnostic</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                            <div className="single-item wow fadeInUp" data-wow-delay="600ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <figure className="image-box"><img src="/assets/images-4/service/service-3.jpg" alt="" /></figure>
                                    <div className="icon-box"><i className="customicon-brickwall" /></div>
                                    <div className="text">
                                        <h3><Link href="/service-details">Re Modelling</Link></h3>
                                        <p>Simple Modifications to Your Car</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
