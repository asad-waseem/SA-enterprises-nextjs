import Link from "next/link"


export default function Welcome() {
    return (
        <>
            <section className="welcome-section-nine">
                <div className="auto-container">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="welcome-image-box-nine">
                                <div className="row">
                                    <div className="col-xl-6">
                                        <div className="left-box">
                                            <div className="single-image-box">
                                                <img src="/assets/images-3/welcome-image-nine-1.jpg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="right-box">
                                            <ul>
                                                <li className="single-image-box">
                                                    <div className="inner">
                                                        <img src="/assets/images-3/welcome-image-nine-2.jpg" alt="" />
                                                    </div>
                                                </li>
                                                <li className="single-image-box">
                                                    <div className="inner">
                                                        <img src="/assets/images-3/welcome-image-nine-3.jpg" alt="" />
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="welcome-content-nine">
                                <div className="sec-title style-nine">
                                    <h4>Who We Are</h4>
                                    <h2>Hands That<br /> Understand Automobile</h2>
                                </div>
                                <div className="inner">
                                    <div className="top-text">
                                        <p>Envolve provides general automotive services &amp; maintenance since 1950, Located
                                            near Le Pigalle in Paris, France.</p>
                                    </div>
                                    <div className="bottom-text">
                                        <p>We denounce with righteous indignation and dislike men who beguiled and
                                            demoralized by the charms of pleasure the moment blindeddesires that they cannot
                                            foresee the pain this and trouble which is the same as through shrinking from
                                            toil pain.</p>
                                    </div>
                                    <ul>
                                        <li><span className="icon-tick-inside-circle" />Personal and Dependable Service
                                        </li>
                                        <li><span className="icon-tick-inside-circle" />Estimates Within 15-30 Minutes</li>
                                        <li><span className="icon-tick-inside-circle" />Estimates Within 15-30 Minutes</li>
                                    </ul>
                                    <div className="btn-box">
                                        <Link href="#" className="theme-btn btn-style-nine"><span className="btn-title">Read
                                            More</span></Link>
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
