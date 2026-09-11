import Link from "next/link"


export default function Features() {
    return (
        <>
            <section className="features-section-five">
                <div className="auto-container">
                    <div className="sec-title style-four text-center">
                        <h2>The best choice for all your <br /> business needs</h2>
                        <span className="text-decoration-two" />
                    </div>
                    <div className="row">
                        <div className="feature-block-five col-lg-3 col-md-6">
                            <div className="outer-box">
                                <div className="inner-box">
                                    <div className="icon"><img src="/assets/images/icons/icon-19.png" alt="" /></div>
                                    <h4>Quick Response</h4>
                                    <div className="text">Power of choices nothing <br /> like best principle.</div>
                                    <Link href="#" className="read-more-link"><i className="flaticon-right-arrow" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="feature-block-five col-lg-3 col-md-6">
                            <div className="outer-box">
                                <div className="inner-box">
                                    <div className="icon"><img src="/assets/images/icons/icon-20.png" alt="" /></div>
                                    <h4>Experience Team</h4>
                                    <div className="text">Rejects pleasures secure <br /> great occur endures. </div>
                                    <Link href="#" className="read-more-link"><i className="flaticon-right-arrow" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="feature-block-five col-lg-3 col-md-6">
                            <div className="outer-box">
                                <div className="inner-box">
                                    <div className="icon"><img src="/assets/images/icons/icon-21.png" alt="" /></div>
                                    <h4>Flexible Payment</h4>
                                    <div className="text">Cases are perfect sample <br /> easy to distinguish.</div>
                                    <Link href="#" className="read-more-link"><i className="flaticon-right-arrow" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="feature-block-five col-lg-3 col-md-6">
                            <div className="outer-box">
                                <div className="inner-box">
                                    <div className="icon"><img src="/assets/images/icons/icon-22.png" alt="" /></div>
                                    <h4>Tailored Support</h4>
                                    <div className="text">Equaly blame belongs that <br /> who fail in their duty.</div>
                                    <Link href="#" className="read-more-link"><i className="flaticon-right-arrow" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="link-btn"><Link href="#" className="theme-btn btn-style-one"><span className="btn-title">Know More <i className="fa fa-caret-right" /></span></Link></div>
                </div>
            </section>
        </>
    )
}
