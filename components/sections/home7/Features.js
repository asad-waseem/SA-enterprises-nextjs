import Link from "next/link"


export default function Features() {
    return (
        <>
            <section className="features-section-five">
                <div className="auto-container">
                    <div className="row">
                        <div className="feature-block-five col-lg-3 col-md-6">
                            <div className="outer-box">
                                <div className="inner-box">
                                    <div className="bg-shape" style={{ backgroundImage: 'url(assets/images-2/icons/shape-3.png)' }}>
                                    </div>
                                    <div className="icon"><img src="/assets/images-2/icons/icon-2.png" alt="" /></div>
                                    <h4>Quick Response</h4>
                                    <div className="text">Power of choices nothing <br /> like best principle.</div>
                                    <Link href="#" className="read-more-link"><i className="flaticon-right-arrow" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="feature-block-five col-lg-3 col-md-6">
                            <div className="outer-box">
                                <div className="inner-box">
                                    <div className="bg-shape" style={{ backgroundImage: 'url(assets/images-2/icons/shape-2.png)' }}>
                                    </div>
                                    <div className="icon"><img src="/assets/images-2/icons/icon-3.png" alt="" /></div>
                                    <h4>Experience Team</h4>
                                    <div className="text">Rejects pleasures secure <br /> great occur endures. </div>
                                    <Link href="#" className="read-more-link"><i className="flaticon-right-arrow" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="feature-block-five col-lg-3 col-md-6">
                            <div className="outer-box">
                                <div className="inner-box">
                                    <div className="bg-shape" style={{ backgroundImage: 'url(assets/images-2/icons/shape-3.png)' }}>
                                    </div>
                                    <div className="icon"><img src="/assets/images-2/icons/icon-4.png" alt="" /></div>
                                    <h4>Flexible Payment</h4>
                                    <div className="text">Cases are perfect sample <br /> easy to distinguish.</div>
                                    <Link href="#" className="read-more-link"><i className="flaticon-right-arrow" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="feature-block-five col-lg-3 col-md-6">
                            <div className="outer-box">
                                <div className="inner-box">
                                    <div className="bg-shape" style={{ backgroundImage: 'url(assets/images-2/icons/shape-2.png)' }}>
                                    </div>
                                    <div className="icon"><img src="/assets/images-2/icons/icon-5.png" alt="" /></div>
                                    <h4>Tailored Support</h4>
                                    <div className="text">Equaly blame belongs that <br /> who fail in their duty.</div>
                                    <Link href="#" className="read-more-link"><i className="flaticon-right-arrow" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
