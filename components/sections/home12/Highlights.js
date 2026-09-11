import Link from "next/link"


export default function Highlights() {
    return (
        <>
            <section className="highlights-home-12">
                <div className="auto-container">
                    <div className="sec-title text-center light">
                        <h4>Highlights</h4>
                        <h2>Achieve Your Goals with Envolv</h2>
                    </div>
                    <div className="row clearfix">
                        <div className="col-lg-3 col-md-6">
                            <div className="single-item wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1200ms">
                                <div className="inner-box">
                                    <div className="icon-box">
                                        <i className="flaticon-permission" />
                                        <div className="shape">
                                            <div className="shape-1" style={{ backgroundImage: 'url(assets/images-2/icons/shape-8.png)' }} />
                                            <div className="shape-2" style={{ backgroundImage: 'url(assets/images-2/icons/shape-9.png)' }} />
                                        </div>
                                    </div>
                                    <h3>Unlimited Access</h3>
                                    <p>From banking &amp; insurances to wealth management and securitie distribution.</p>
                                    <Link href="/index-12"><i className="flaticon-right" />Read more</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single-item wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                <div className="inner-box">
                                    <div className="icon-box">
                                        <i className="flaticon-discussion" />
                                        <div className="shape">
                                            <div className="shape-1" style={{ backgroundImage: 'url(assets/images-2/icons/shape-10.png)' }} />
                                            <div className="shape-2" style={{ backgroundImage: 'url(assets/images-2/icons/shape-11.png)' }} />
                                        </div>
                                    </div>
                                    <h3>Learn Latest Skills</h3>
                                    <p>Beguiled and demoralized by the charms of pleasure of the moment.</p>
                                    <Link href="/index-12"><i className="flaticon-right" />Read more</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single-item wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1200ms">
                                <div className="inner-box">
                                    <div className="icon-box">
                                        <i className="flaticon-rocket-ship" />
                                        <div className="shape">
                                            <div className="shape-1" style={{ backgroundImage: 'url(assets/images-2/icons/shape-12.png)' }} />
                                            <div className="shape-2" style={{ backgroundImage: 'url(assets/images-2/icons/shape-13.png)' }} />
                                        </div>
                                    </div>
                                    <h3>Expert Teachers</h3>
                                    <p>These cases are perfectly simple easy too distinguish in your free hour.</p>
                                    <Link href="/index-12"><i className="flaticon-right" />Read more</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single-item wow fadeInUp" data-wow-delay="600ms" data-wow-duration="1200ms">
                                <div className="inner-box">
                                    <div className="icon-box">
                                        <i className="flaticon-success" />
                                        <div className="shape">
                                            <div className="shape-1" style={{ backgroundImage: 'url(assets/images-2/icons/shape-14.png)' }} />
                                            <div className="shape-2" style={{ backgroundImage: 'url(assets/images-2/icons/shape-15.png)' }} />
                                        </div>
                                    </div>
                                    <h3>High Quality Video</h3>
                                    <p>Like best every pleasure is to be welcomed and every pain avoided.</p>
                                    <Link href="/index-12"><i className="flaticon-right" />Read more</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
