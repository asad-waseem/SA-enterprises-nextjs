import Link from "next/link"


export default function Features() {
    return (
        <>
            <section className="features-section-four">
                <div className="auto-container">
                    <div className="wrapper-box">
                        <div className="outer-box">
                            <div className="row m-0">
                                <div className="feature-block-four col-lg-3 col-md-6">
                                    <div className="inner-box">
                                        <div className="icon"><img src="/assets/images/icons/icon-14.png" alt="" /></div>
                                        <h4>#1 consulting firm <br /> in western</h4>
                                        <div className="text">In free hour when power choices when prove prevent easy to distinguish. </div>
                                        <Link href="#" className="read-more-link">Read More <i className="flaticon-right" /></Link>
                                    </div>
                                </div>
                                <div className="feature-block-four col-lg-3 col-md-6">
                                    <div className="inner-box">
                                        <div className="icon"><img src="/assets/images/icons/icon-15.png" alt="" /></div>
                                        <h4>More than 50,000 <br />happy clients</h4>
                                        <div className="text">Obligations of business it will frequently occurs that pleasures accepted. </div>
                                        <Link href="#" className="read-more-link">Read More <i className="flaticon-right" /></Link>
                                    </div>
                                </div>
                                <div className="feature-block-four col-lg-3 col-md-6">
                                    <div className="inner-box">
                                        <div className="icon"><img src="/assets/images/icons/icon-16.png" alt="" /></div>
                                        <h4>Experienced <br />consulting team</h4>
                                        <div className="text">To take a trivial example  which of us every undertakes physical exercise. </div>
                                        <Link href="#" className="read-more-link">Read More <i className="flaticon-right" /></Link>
                                    </div>
                                </div>
                                <div className="feature-block-four col-lg-3 col-md-6">
                                    <div className="inner-box">
                                        <div className="icon"><img src="/assets/images/icons/icon-17.png" alt="" /></div>
                                        <h4>8 countries and <br /> 26 cities</h4>
                                        <div className="text">Explain to you how all this mistaken idea of denouncing praising complete.</div>
                                        <Link href="#" className="read-more-link">Read More <i className="flaticon-right" /></Link>
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
