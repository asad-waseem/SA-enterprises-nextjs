import Link from "next/link"


export default function Chooseus() {
    return (
        <>
            <section className="chooseus-home-7">
                <div className="bg-layer" style={{ backgroundImage: 'url(assets/images-2/background/chooseus-3.jpg)' }} />
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="col-lg-8 col-md-12 content-column">
                            <div className="content-box">
                                <div className="sec-title">
                                    <h4>Why Choose Us</h4>
                                    <h2>Reasons to Choose Envolve</h2>
                                    <div className="text-decoration">
                                        <span className="left" />
                                        <span className="right" />
                                    </div>
                                </div>
                                <div className="inner-box">
                                    <div className="row clearfix">
                                        <div className="col-lg-6 col-md-6 single-column">
                                            <div className="single-item">
                                                <figure className="icon-box"><img src="/assets/images-2/icons/icon-9.png" alt="" />
                                                </figure>
                                                <h3>100 % Trustable</h3>
                                                <p>Indignation dislike beguiled demoralized by the charms of pleasure
                                                    blinded.</p>
                                                <Link href="/index-7"><i className="flaticon-right" />Read More</Link>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 single-column">
                                            <div className="single-item">
                                                <figure className="icon-box"><img src="/assets/images-2/icons/icon-10.png" alt="" /></figure>
                                                <h3>Easy Cancellation</h3>
                                                <p>The claims of duty char the obligations of business will frequently
                                                    occur.</p>
                                                <Link href="/index-7"><i className="flaticon-right" />Read More</Link>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 single-column">
                                            <div className="single-item">
                                                <figure className="icon-box"><img src="/assets/images-2/icons/icon-11.png" alt="" /></figure>
                                                <h3>Easy Application</h3>
                                                <p>The claims of duty char the obligations of business will frequently
                                                    occur.</p>
                                                <Link href="/index-7"><i className="flaticon-right" />Read More</Link>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 single-column">
                                            <div className="single-item">
                                                <figure className="icon-box"><img src="/assets/images-2/icons/icon-12.png" alt="" /></figure>
                                                <h3>Save Your Money</h3>
                                                <p>Indignation dislike beguiled demoralized by the charms of pleasure
                                                    blinded.</p>
                                                <Link href="/index-7"><i className="flaticon-right" />Read More</Link>
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
