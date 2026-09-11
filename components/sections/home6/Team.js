import Link from "next/link"


export default function Team() {
    return (
        <>
            <section className="team-home-6">
                <div className="auto-container">
                    <div className="sec-title style-four">
                        <h2>Highly Experienced Legal Team</h2>
                        <span className="text-decoration-four" />
                        <Link href="/team-1" className="theme-btn btn-style-four"><span className="btn-title">All Members</span></Link>
                    </div>
                    <div className="row clearfix">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-item">
                                <div className="inner-box">
                                    <figure className="image-box">
                                        <img src="/assets/images-2/team/team-1.jpg" alt="" />
                                        <div className="icon-box"><Link href="tel:111031248777"><i className="flaticon-phone" /></Link></div>
                                    </figure>
                                    <div className="lower-content">
                                        <div className="inner">
                                            <h3><Link href="/team-details">Justin Homerey</Link></h3>
                                            <span className="designation">Senior Lawyer</span>
                                            <ul className="social-links clearfix">
                                                <li><Link href="/index-6"><i className="fab fa-facebook-f" /></Link></li>
                                                <li><Link href="/index-6"><i className="fab fa-twitter" /></Link></li>
                                                <li><Link href="/index-6"><i className="fab fa-google-plus-g" /></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-item">
                                <div className="inner-box">
                                    <figure className="image-box">
                                        <img src="/assets/images-2/team/team-2.jpg" alt="" />
                                        <div className="icon-box"><Link href="tel:111031248777"><i className="flaticon-phone" /></Link></div>
                                    </figure>
                                    <div className="lower-content">
                                        <div className="inner">
                                            <h3><Link href="/team-details">Sofia Penelope</Link></h3>
                                            <span className="designation">Legal Secretary</span>
                                            <ul className="social-links clearfix">
                                                <li><Link href="/index-6"><i className="fab fa-facebook-f" /></Link></li>
                                                <li><Link href="/index-6"><i className="fab fa-twitter" /></Link></li>
                                                <li><Link href="/index-6"><i className="fab fa-google-plus-g" /></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-item">
                                <div className="inner-box">
                                    <figure className="image-box">
                                        <img src="/assets/images-2/team/team-3.jpg" alt="" />
                                        <div className="icon-box"><Link href="tel:111031248777"><i className="flaticon-phone" /></Link></div>
                                    </figure>
                                    <div className="lower-content">
                                        <div className="inner">
                                            <h3><Link href="/team-details">Martin Christopher</Link></h3>
                                            <span className="designation">Criminal Lawyer</span>
                                            <ul className="social-links clearfix">
                                                <li><Link href="/index-6"><i className="fab fa-facebook-f" /></Link></li>
                                                <li><Link href="/index-6"><i className="fab fa-twitter" /></Link></li>
                                                <li><Link href="/index-6"><i className="fab fa-google-plus-g" /></Link></li>
                                            </ul>
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
