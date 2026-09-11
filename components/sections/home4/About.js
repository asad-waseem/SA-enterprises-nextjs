import Link from "next/link"


export default function About() {
    return (
        <>
            <section className="about-section-five" style={{ backgroundImage: 'url(assets/images/background/bg-13.jpg)' }}>
                <div className="auto-container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-4">
                            <div className="sec-title style-four">
                                <h2>The best choice for all your <br /> business needs</h2>
                                <span className="text-decoration-two" />
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="content-block">
                                        <h4>With 26 Years of Experience</h4>
                                        <div className="text">Every pleasures is to welcomed pain avoided owing to the duty the obligations of business  will frequently occur  pleasures.</div>
                                        <div className="icon-box">
                                            <div className="icon"><img src="/assets/images/icons/icon-34.png" alt="" /></div>
                                            <h5>Our Tareget</h5>
                                            <h3>Focusing on best one</h3>
                                        </div>
                                        <div className="icon-box">
                                            <div className="icon"><img src="/assets/images/icons/icon-35.png" alt="" /></div>
                                            <h5>Our Growth</h5>
                                            <h3>High level of knowledge</h3>
                                        </div>
                                        <div className="link-btn"><Link href="#" className="theme-btn btn-style-one"><span className="btn-title">Know More <i className="fa fa-caret-right" /></span></Link></div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="graph"><img src="/assets/images/resource/graph-2.png" alt="" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
