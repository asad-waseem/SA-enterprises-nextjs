import Link from "next/link"


export default function Service() {
    return (
        <>
            <section className="service-section-home15">
                <div className="auto-container">
                    <div className="sec-title-four light text-center">
                        <h2>Grow your brand by zeroing in on <br />your target market</h2>
                    </div>
                    <div className="row clearfix">
                        <div className="col-lg-3 col-md-6 col-sm-12 service-column">
                            <div className="service-block wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="bg-layer" style={{ backgroundImage: 'url(assets/images-4/service/service-4.jpg)' }} />
                                    <div className="shape-box">
                                        <div className="shape shape-1" />
                                        <div className="shape shape-2" />
                                        <div className="shape shape-3" />
                                    </div>
                                    <div className="icon-box"><i className="customicon-mail-advertising" /></div>
                                    <p>Highly Effective</p>
                                    <h3><Link href="/finance-restructuring">Email Marketing</Link></h3>
                                    <div className="link-btn">
                                        <Link href="/finance-restructuring"><i className="customicon-right-chevron" />Read More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 service-column">
                            <div className="service-block wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="bg-layer" style={{ backgroundImage: 'url(assets/images-4/service/service-4.jpg)' }} />
                                    <div className="shape-box">
                                        <div className="shape shape-1" />
                                        <div className="shape shape-2" />
                                        <div className="shape shape-3" />
                                    </div>
                                    <div className="icon-box"><i className="customicon-file" /></div>
                                    <p>Most Valuable</p>
                                    <h3><Link href="/finance-restructuring">Content Marketing</Link></h3>
                                    <div className="link-btn">
                                        <Link href="/finance-restructuring"><i className="customicon-right-chevron" />Read More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 service-column">
                            <div className="service-block wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="bg-layer" style={{ backgroundImage: 'url(assets/images-4/service/service-4.jpg)' }} />
                                    <div className="shape-box">
                                        <div className="shape shape-1" />
                                        <div className="shape shape-2" />
                                        <div className="shape shape-3" />
                                    </div>
                                    <div className="icon-box"><i className="customicon-blueprint" /></div>
                                    <p>Pretty Simple</p>
                                    <h3><Link href="/finance-restructuring">Video Marketing</Link></h3>
                                    <div className="link-btn">
                                        <Link href="/finance-restructuring"><i className="customicon-right-chevron" />Read More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 service-column">
                            <div className="service-block wow fadeInUp" data-wow-delay="600ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="bg-layer" style={{ backgroundImage: 'url(assets/images-4/service/service-4.jpg)' }} />
                                    <div className="shape-box">
                                        <div className="shape shape-1" />
                                        <div className="shape shape-2" />
                                        <div className="shape shape-3" />
                                    </div>
                                    <div className="icon-box"><i className="customicon-sketch" /></div>
                                    <p>Power of</p>
                                    <h3><Link href="/finance-restructuring">Web Design</Link></h3>
                                    <div className="link-btn">
                                        <Link href="/finance-restructuring"><i className="customicon-right-chevron" />Read More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="more-text text-center">
                        <h5>We help take your small business to the next level. Don’t hesitate to <Link href="/contact">contact us.</Link></h5>
                    </div>
                </div>
            </section>
        </>
    )
}
