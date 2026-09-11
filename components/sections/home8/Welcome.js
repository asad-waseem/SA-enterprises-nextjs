import Link from "next/link"


export default function Welcome() {
    return (
        <>
            <section className="welcome-section-eight">
                <div className="auto-container">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="welcome-image-box-eight">
                                <div className="thm-shape" style={{ backgroundImage: 'url(assets/images-3/shape/thm-shape-1.png)' }} />
                                <div className="inner">
                                    <img src="/assets/images-3/welcome-image-eight.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="welcome-content-eight">
                                <div className="sec-title style-eight">
                                    <h4>Welcome to Envolve</h4>
                                    <h2>The Best Therapy Combining<br /> Knowledge &amp; Care</h2>
                                </div>
                                <div className="inner">
                                    <h3>Started at BLN, Serve Since 2004 With Passion.</h3>
                                    <p>We denounce with righteous indignation and dislike men who beguiled and demoralized
                                        by the charms of pleasure the moment blindeddesires that they cannot foresee the
                                        pain and trouble. Blindeddesires that they cannot foresee.</p>
                                    <div className="authorized">
                                        <div className="left">
                                            <div className="image">
                                                <img src="/assets/images-3/authorized-h8-1.png" alt="" />
                                            </div>
                                            <div className="social">
                                                <Link href="#"><span className="fab fa-facebook-f" /></Link>
                                            </div>
                                        </div>
                                        <div className="text">
                                            <h3>Primera Z. Caldwell</h3>
                                            <span>Founder</span>
                                        </div>
                                    </div>
                                    <div className="signature">
                                        <img src="/assets/images-3/shape/signature-8.png" alt="" />
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
