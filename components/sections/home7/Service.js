import Link from "next/link"


export default function Service() {
    return (
        <>
            <section className="service-home-7">
                <div className="auto-container">
                    <div className="sec-title text-center">
                        <h4>Our Services</h4>
                        <h2>Trust Us for the Rest of Your Life</h2>
                        <div className="text-decoration">
                            <span className="left" />
                            <span className="right" />
                        </div>
                    </div>
                    <div className="row clearfix">
                        <div className="col-lg-4 col-md-6 single-column">
                            <div className="single-item">
                                <div className="inner-box">
                                    <figure className="image-box"><img src="/assets/images-2/service/service-9.jpg" alt="" />
                                    </figure>
                                    <div className="lower-content">
                                        <div className="text">
                                            <h3><Link href="/audit-assurance">Individual &amp; Family</Link></h3>
                                            <p>Actual teaching great explorers truth the master builder ...</p>
                                        </div>
                                        <div className="othre-box">
                                            <figure className="icon-box"><img src="/assets/images-2/icons/icon-6.png" alt="" />
                                            </figure>
                                            <div className="link"><Link href="/audit-assurance"><i className="flaticon-right" /></Link></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 single-column">
                            <div className="single-item">
                                <div className="inner-box">
                                    <figure className="image-box"><img src="/assets/images-2/service/service-10.jpg" alt="" />
                                    </figure>
                                    <div className="lower-content">
                                        <div className="text">
                                            <h3><Link href="/audit-assurance">Business Related</Link></h3>
                                            <p>Trouble that are bound to ensue and equal blame belongs ...</p>
                                        </div>
                                        <div className="othre-box">
                                            <figure className="icon-box"><img src="/assets/images-2/icons/icon-7.png" alt="" />
                                            </figure>
                                            <div className="link"><Link href="/audit-assurance"><i className="flaticon-right" /></Link></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 single-column">
                            <div className="single-item">
                                <div className="inner-box">
                                    <figure className="image-box"><img src="/assets/images-2/service/service-11.jpg" alt="" />
                                    </figure>
                                    <div className="lower-content">
                                        <div className="text">
                                            <h3><Link href="/audit-assurance">Medicare Advantage</Link></h3>
                                            <p>Our power off choice is nothing prevents our being able ...</p>
                                        </div>
                                        <div className="othre-box">
                                            <figure className="icon-box"><img src="/assets/images-2/icons/icon-8.png" alt="" />
                                            </figure>
                                            <div className="link"><Link href="/audit-assurance"><i className="flaticon-right" /></Link></div>
                                        </div>
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
