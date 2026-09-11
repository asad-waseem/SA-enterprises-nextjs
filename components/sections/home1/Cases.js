import Link from "next/link"


export default function Cases() {
    return (
        <>
            <section className="cases-section pb-0">
                <div className="sec-bg" style={{ backgroundImage: 'url(assets/images/background/bg-1.jpg)' }} />
                <div className="auto-container">
                    <div className="sec-title text-center">
                        <h2>Our Projects make Uniqueness <br />from Others</h2>
                        <div className="text-decoration">
                            <span className="left" />
                            <span className="right" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 case-block-one">
                            <div className="inner-box">
                                <div className="image">
                                    <img className="lazy-image owl-lazy" src="/assets/images/gallery/gallery-1.jpg" alt="" />
                                </div>
                                <div className="overlay">
                                    <div className="title"><span className="icon"><img src="/assets/images/icons/icon-8.png" alt="" /></span>Precision</div>
                                    <div className="link-btn"><Link href="#"><i className="flaticon-right-arrow" /></Link></div>
                                    <div className="content">
                                        <h5>Financial</h5>
                                        <h4>Capital Management</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 case-block-one">
                            <div className="inner-box">
                                <div className="image">
                                    <img className="lazy-image owl-lazy" src="/assets/images/gallery/gallery-2.jpg" alt="" />
                                </div>
                                <div className="overlay">
                                    <div className="title"><span className="icon"><img src="/assets/images/icons/icon-8.png" alt="" /></span>Precision</div>
                                    <div className="link-btn"><Link href="#"><i className="flaticon-right-arrow" /></Link></div>
                                    <div className="content">
                                        <h5>Financial</h5>
                                        <h4>Capital Management</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 case-block-one">
                            <div className="inner-box">
                                <div className="image">
                                    <img className="lazy-image owl-lazy" src="/assets/images/gallery/gallery-3.jpg" alt="" />
                                </div>
                                <div className="overlay">
                                    <div className="title"><span className="icon"><img src="/assets/images/icons/icon-8.png" alt="" /></span>Precision</div>
                                    <div className="link-btn"><Link href="#"><i className="flaticon-right-arrow" /></Link></div>
                                    <div className="content">
                                        <h5>Financial</h5>
                                        <h4>Capital Management</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 case-block-one">
                            <div className="inner-box">
                                <div className="image">
                                    <img className="lazy-image owl-lazy" src="/assets/images/gallery/gallery-4.jpg" alt="" />
                                </div>
                                <div className="overlay">
                                    <div className="title"><span className="icon"><img src="/assets/images/icons/icon-8.png" alt="" /></span>Precision</div>
                                    <div className="link-btn"><Link href="#"><i className="flaticon-right-arrow" /></Link></div>
                                    <div className="content">
                                        <h5>Financial</h5>
                                        <h4>Capital Management</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 case-block-one">
                            <div className="inner-box">
                                <div className="image">
                                    <img className="lazy-image owl-lazy" src="/assets/images/gallery/gallery-5.jpg" alt="" />
                                </div>
                                <div className="overlay">
                                    <div className="title"><span className="icon"><img src="/assets/images/icons/icon-8.png" alt="" /></span>Precision</div>
                                    <div className="link-btn"><Link href="#"><i className="flaticon-right-arrow" /></Link></div>
                                    <div className="content">
                                        <h5>Financial</h5>
                                        <h4>Capital Management</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 case-block-one">
                            <div className="inner-box">
                                <div className="read-more-btn">
                                    <Link href="#">Check <br />More Works</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
