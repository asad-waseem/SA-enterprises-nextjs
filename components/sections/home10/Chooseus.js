import Link from "next/link"


export default function Chooseus() {
    return (
        <>
            <section className="chooseus-home-10">
                <div className="auto-container">
                    <div className="sec-title text-center">
                        <h4>Why Choose Us</h4>
                        <h2>Let us move you with honesty <br />and greatness</h2>
                    </div>
                    <div className="row clearfix">
                        <div className="col-lg-4 col-md-6">
                            <div className="inner-box text-left">
                                <div className="single-item">
                                    <div className="icon-box"><i className="fas fa-box-alt" /></div>
                                    <h3>Fast and Secure</h3>
                                    <p>Business will frequently occur the pleasures have be repudiated all accepted choice.
                                    </p>
                                    <div className="link-box">
                                        <Link href="/index-10" className="link"><i className="far fa-chevron-double-right" /></Link>
                                        <Link href="/index-10" className="theme-btn btn-style-four"><i className="far fa-chevron-double-right" /><span className="btn-title">Read
                                            More</span></Link>
                                    </div>
                                </div>
                                <div className="single-item">
                                    <div className="icon-box"><i className="fas fa-shield-check" /></div>
                                    <h3>Trustworthy</h3>
                                    <p>Righteous indignation and dislike men who are so beguiled and by the pleasure of the
                                        moment.</p>
                                    <div className="link-box">
                                        <Link href="/index-10" className="link"><i className="far fa-chevron-double-right" /></Link>
                                        <Link href="/index-10" className="theme-btn btn-style-four"><i className="far fa-chevron-double-right" /><span className="btn-title">Read
                                            More</span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <figure className="image"><img src="/assets/images-2/resource/chooseus-4.jpg" alt="" /></figure>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <div className="inner-box text-right">
                                <div className="single-item">
                                    <div className="icon-box"><i className="fas fa-sack-dollar" /></div>
                                    <h3>Affordable Prices</h3>
                                    <p>Foresee the pain &amp; trouble that are bounds to ensue and the equal delongs to those
                                        who fail.</p>
                                    <div className="link-box">
                                        <Link href="/index-10" className="link"><i className="far fa-chevron-double-right" /></Link>
                                        <Link href="/index-10" className="theme-btn btn-style-four"><i className="far fa-chevron-double-right" /><span className="btn-title">Read
                                            More</span></Link>
                                    </div>
                                </div>
                                <div className="single-item">
                                    <div className="icon-box"><i className="fas fa-truck" /></div>
                                    <h3>Same Day Delivery</h3>
                                    <p>Choice is untrammelled &amp; when nothing prevents our being able to do what we like best
                                        every.</p>
                                    <div className="link-box">
                                        <Link href="/index-10" className="link"><i className="far fa-chevron-double-right" /></Link>
                                        <Link href="/index-10" className="theme-btn btn-style-four"><i className="far fa-chevron-double-right" /><span className="btn-title">Read
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
