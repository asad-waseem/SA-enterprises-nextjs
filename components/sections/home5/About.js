import Link from "next/link"


export default function About() {
    return (
        <>
            <section className="about-section-four">
                <div className="auto-container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="image-block">
                                <div className="image-one wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms"><div className="image-box"><img className="lazy-image owl-lazy" src="/assets/images/resource/image-28.jpg" alt="" /></div></div>
                                <div className="image-two wow fadeInLeft" data-wow-delay="300ms" data-wow-duration="1500ms"><div className="image-box"><img className="lazy-image owl-lazy" src="/assets/images/resource/image-29.jpg" alt="" /></div></div>
                                <div className="logo"><img src="/assets/images/icons/icon-39.png" alt="" /></div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="sec-title style-four">
                                <h2>Leading consulting <br /> agency with global reputation </h2>
                                <span className="text-decoration-three" />
                            </div>
                            <div className="text">
                                <p>Every pleasures is to welcomed pain avoided owing to the duty the obligations of business it will frequently occur that pleasures have to be repudiated annoyances accepted.</p>
                                <p>Welcomed pain avoided owing to the duty the obligations of business will frequently occur that pleasures have to repudiated.</p>
                            </div>
                            <div className="author-box">
                                <div className="signature"><img src="/assets/images/resource/signature.png" alt="" /></div>
                                <div className="author-info">
                                    <h4>Franklin Sinatra</h4>
                                    <h5>Manager</h5>
                                </div>
                            </div>
                            <div className="link-btn"><Link href="#" className="theme-btn btn-style-one"><span className="btn-title">Read More <i className="fa fa-caret-right" /></span></Link></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
