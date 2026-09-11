import Link from "next/link"


export default function Service() {
    return (
        <>
            <section className="service-section-eight">
                <div className="pattern-bg" style={{ backgroundImage: 'url(assets/images-3/pattern/pattern-bg-1.jpg)' }} />
                <div className="auto-container">
                    <div className="sec-title style-eight clr2  text-center">
                        <h4>Our Theraphy</h4>
                        <h2>We'll Match You to a Counselor<br /> that can Help with...</h2>
                    </div>
                    <div className="row">
                        {/*Start Service Block Eight*/}
                        <div className="col-xl-4 col-lg-4 service-block-eight">
                            <div className="inner-box">
                                <div className="img-holder">
                                    <div className="inner">
                                        <img src="/assets/images-3/services/service-v8-1.jpg" alt="" />
                                    </div>
                                    <div className="icon">
                                        <span className="icon-fear" />
                                    </div>
                                    <div className="button">
                                        <Link href="#" className="theme-btn btn-style-eight"><span className="btn-title">Read
                                            More</span></Link>
                                    </div>
                                </div>
                                <div className="text-holder">
                                    <h3><Link href="#">Personal Meeting</Link></h3>
                                    <p>Duty through weakness of will which is saying through shrinking.</p>
                                </div>
                            </div>
                        </div>
                        {/*End Service Block Eight*/}
                        {/*Start Service Block Eight*/}
                        <div className="col-xl-4 col-lg-4 service-block-eight">
                            <div className="inner-box">
                                <div className="img-holder">
                                    <div className="inner">
                                        <img src="/assets/images-3/services/service-v8-2.jpg" alt="" />
                                    </div>
                                    <div className="icon">
                                        <span className="icon-business" />
                                    </div>
                                    <div className="button">
                                        <Link href="#" className="theme-btn btn-style-eight"><span className="btn-title">Read
                                            More</span></Link>
                                    </div>
                                </div>
                                <div className="text-holder">
                                    <h3><Link href="#">Family Counseling</Link></h3>
                                    <p>Obligations of business it will frequently be annoyances accepted.</p>
                                </div>
                            </div>
                        </div>
                        {/*End Service Block Eight*/}
                        {/*Start Service Block Eight*/}
                        <div className="col-xl-4 col-lg-4 service-block-eight">
                            <div className="inner-box">
                                <div className="img-holder">
                                    <div className="inner">
                                        <img src="/assets/images-3/services/service-v8-3.jpg" alt="" />
                                    </div>
                                    <div className="icon">
                                        <span className="icon-rest" />
                                    </div>
                                    <div className="button">
                                        <Link href="#" className="theme-btn btn-style-eight"><span className="btn-title">Read
                                            More</span></Link>
                                    </div>
                                </div>
                                <div className="text-holder">
                                    <h3><Link href="#">Relaxation Theraphy</Link></h3>
                                    <p>Denounce with righteous indignation &amp; demoralized the charms.</p>
                                </div>
                            </div>
                        </div>
                        {/*End Service Block Eight*/}
                    </div>
                </div>
            </section>
        </>
    )
}
