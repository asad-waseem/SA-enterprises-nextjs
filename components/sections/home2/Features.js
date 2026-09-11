import Link from "next/link"


export default function Features() {
    return (
        <>
            <section className="features-section-two">
                <div className="auto-container">
                    <div className="row">
                        <div className="col-lg-6 pr-5">
                            <div className="sec-title style-two">
                                <h4><span className="flaticon-endless" />Envolve Consultancy</h4>
                                <h2>Developing Leaders <br /> and High-Performance <br />Creative Teams.</h2>
                            </div>
                            <div className="content-block">
                                <div className="image"><img src="/assets/images/resource/award.png" alt="" /></div>
                                <div className="text">
                                    <p>When our power off choices &amp; occur nothing to prevents our being able to do what  like  best get every pleasure is welcomed.</p>
                                    <p>Choices &amp; occurs nothing prevents our being to do what  like  best every pleasure.</p>
                                </div>
                                <div className="link-btn"><Link href="#" className="theme-btn btn-style-four"><span className="btn-title">Read More</span></Link></div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="row">
                                <div className="feature-block-three col-md-6">
                                    <div className="inner-box">
                                        <div className="image"><img src="/assets/images/resource/featured-image-1.jpg" alt="" /></div>
                                        <div className="lower-content">
                                            <div className="icon"><span className="flaticon-support" /></div>
                                            <h4>#1 consulting firm <br /> in western</h4>
                                            <Link href="#" className="read-more-link">Read More</Link>
                                        </div>
                                        <div className="overlay">
                                            <div className="top-content" style={{ backgroundImage: 'url(assets/images/resource/image-50.jpg)' }}>
                                                <div className="icon"><span className="flaticon-support" /></div>
                                                <h4>#1 consulting firm <br /> in western</h4>
                                            </div>
                                            <div className="bottom-content">
                                                <div className="text">In a free hour when our <br /> power choices when prove <br /> prevents best perfectly all easy to distinguish. </div>
                                                <Link href="#" className="read-more-link">Read More</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="feature-block-three col-md-6">
                                    <div className="inner-box">
                                        <div className="image"><img src="/assets/images/resource/featured-image-2.jpg" alt="" /></div>
                                        <div className="lower-content">
                                            <div className="icon"><span className="flaticon-career-3" /></div>
                                            <h4>More than 50,000 <br />happy clients </h4>
                                            <Link href="#" className="read-more-link">Read More</Link>
                                        </div>
                                        <div className="overlay">
                                            <div className="top-content" style={{ backgroundImage: 'url(assets/images/resource/image-50.jpg)' }}>
                                                <div className="icon"><span className="flaticon-career-3" /></div>
                                                <h4>More than 50,000 <br />happy clients</h4>
                                            </div>
                                            <div className="bottom-content">
                                                <div className="text">In a free hour when our <br /> power choices when prove <br /> prevents best perfectly all easy to distinguish. </div>
                                                <Link href="#" className="read-more-link">Read More</Link>
                                            </div>
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
