import Link from "next/link"


export default function Project() {
    return (
        <>
            <section className="project-section-home15">
                <div className="auto-container">
                    <div className="sec-title-four text-center">
                        <h2>Our projects make uniqueness <br />from others</h2>
                    </div>
                    <div className="row clearfix">
                        <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                            <div className="project-block">
                                <div className="inner-box">
                                    <figure className="image-box"><img src="/assets/images-4/project/project-7.jpg" alt="" /></figure>
                                    <div className="text">
                                        <p>Financial</p>
                                        <h3><Link href="/project-details">Capital management</Link></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                            <div className="project-block">
                                <div className="inner-box">
                                    <figure className="image-box"><img src="/assets/images-4/project/project-8.jpg" alt="" /></figure>
                                    <div className="text">
                                        <p>Financial</p>
                                        <h3><Link href="/project-details">Capital management</Link></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                            <div className="project-block">
                                <div className="inner-box">
                                    <figure className="image-box"><img src="/assets/images-4/project/project-9.jpg" alt="" /></figure>
                                    <div className="text">
                                        <p>Financial</p>
                                        <h3><Link href="/project-details">Capital management</Link></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                            <div className="project-block">
                                <div className="inner-box">
                                    <figure className="image-box"><img src="/assets/images-4/project/project-10.jpg" alt="" /></figure>
                                    <div className="text">
                                        <p>Financial</p>
                                        <h3><Link href="/project-details">Capital management</Link></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                            <div className="project-block">
                                <div className="inner-box">
                                    <figure className="image-box"><img src="/assets/images-4/project/project-11.jpg" alt="" /></figure>
                                    <div className="text">
                                        <p>Financial</p>
                                        <h3><Link href="/project-details">Capital management</Link></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                            <div className="project-block">
                                <div className="inner-box">
                                    <figure className="image-box"><img src="/assets/images-4/project/project-12.jpg" alt="" /></figure>
                                    <div className="text">
                                        <p>Financial</p>
                                        <h3><Link href="/project-details">Capital management</Link></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="more-btn text-center">
                        <Link href="/portfolio-1" className="theme-btn btn-style-ten"><span className="btn-title">View All</span></Link>
                    </div>
                </div>
            </section>
        </>
    )
}
