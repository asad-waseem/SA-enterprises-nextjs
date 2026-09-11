import Link from "next/link"


export default function Cases() {
    return (
        <>
            <section className="cases-section-two">
                <div className="pattern" style={{ backgroundImage: 'url(assets/images/shape/pattern-17.png)' }} />
                <div className="auto-container">
                    <div className="sec-title style-three text-center">
                        <h5>Case Studies</h5>
                        <h2>Latest from our projects</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="row">
                                <div className="col-md-6 case-block-two">
                                    <div className="inner-box">
                                        <div className="image"><img className="lazy-image owl-lazy" src="/assets/images/resource/image-12.jpg" alt="" /></div>
                                        <div className="logo"><Link href="#"><img src="/assets/images/resource/client-17.png" alt="" /></Link></div>
                                    </div>
                                </div>
                                <div className="col-md-6 case-block-two">
                                    <div className="inner-box">
                                        <div className="image"><img className="lazy-image owl-lazy" src="/assets/images/resource/image-13.jpg" alt="" /></div>
                                        <div className="logo"><Link href="#"><img src="/assets/images/resource/client-18.png" alt="" /></Link></div>
                                    </div>
                                </div>
                                <div className="col-md-6 case-block-two">
                                    <div className="inner-box">
                                        <div className="image"><img className="lazy-image owl-lazy" src="/assets/images/resource/image-14.jpg" alt="" /></div>
                                        <div className="logo"><Link href="#"><img src="/assets/images/resource/client-19.png" alt="" /></Link></div>
                                    </div>
                                </div>
                                <div className="col-md-6 case-block-two">
                                    <div className="inner-box">
                                        <div className="image"><img className="lazy-image owl-lazy" src="/assets/images/resource/image-15.jpg" alt="" /></div>
                                        <div className="logo"><Link href="#"><img src="/assets/images/resource/client-20.png" alt="" /></Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="case-block-three">
                                <div className="inner-box">
                                    <div className="image"><img className="lazy-image owl-lazy" src="/assets/images/resource/image-16.jpg" alt="" /></div>
                                    <div className="logo"><Link href="#"><img src="/assets/images/resource/client-21.png" alt="" /></Link></div>
                                    <div className="lower-content">
                                        <div className="category">Professional Services</div>
                                        <h4>Capital Management</h4>
                                        <div className="text">Rejects pleasures secure other simple and greater occur endures. </div>
                                        <Link href="#" className="read-more-link">Case Studies <i className="flaticon-right" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bottom-text">We've been working hard to impress you. <Link href="#">More Case Studies <i className="flaticon-right" /></Link></div>
                </div>
            </section>
        </>
    )
}
