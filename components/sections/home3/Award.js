import Link from "next/link"


export default function Award() {
    return (
        <>
            <section className="award-section" style={{ backgroundImage: 'url(assets/images/background/bg-9.jpg)' }}>
                <div className="auto-container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-4">
                            <div className="sec-title light style-three">
                                <h5>Achivements</h5>
                                <h2>Our awards and achivements</h2>
                                <div className="text">To take a trivial example, which of us ever undertakes laborious physical exercise, except <br />obtain some advantage from it enjoy a pleasure.</div>
                            </div>
                            <div className="wrapper-box">
                                <div className="row">
                                    <div className="col-lg-4 award-block">
                                        <div className="inner-box">
                                            <div className="image"><img src="/assets/images/resource/award-1.png" alt="" /></div>
                                            <h4>Best consulting <br /> company</h4>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 award-block">
                                        <div className="inner-box">
                                            <div className="image"><img src="/assets/images/resource/award-2.png" alt="" /></div>
                                            <h4>Best outsourcing <br /> advisors</h4>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 award-block">
                                        <div className="inner-box">
                                            <div className="image"><img src="/assets/images/resource/award-3.png" alt="" /></div>
                                            <h4>Customer choice for <br /> support</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bottom-text">We have won 27 more awards in our career. <Link href="#">View All Awards <i className="flaticon-right" /></Link></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
