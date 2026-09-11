import Link from "next/link"


export default function Team() {
    return (
        <>
            <section className="team-home-11">
                <div className="auto-container">
                    <div className="sec-title">
                        <h4>Meet Our Team</h4>
                        <h2>Our team that can help you</h2>
                        <Link href="/team-1" className="link-btn">All Members</Link>
                    </div>
                    <div className="row clearfix">
                        <div className="col-lg-3 col-md-6">
                            <div className="single-item">
                                <figure className="image-box"><img src="/assets/images-2/team/team-1.png" alt="" /></figure>
                                <div className="lower-content">
                                    <h3><Link href="/team-details">David Luponis</Link></h3>
                                    <span className="designation">CEO - Founder</span>
                                    <ul className="social-links clearfix">
                                        <li><Link href="/index-11"><i className="fab fa-facebook-f" /></Link></li>
                                        <li><Link href="/index-11"><i className="fab fa-twitter" /></Link></li>
                                        <li><Link href="/index-11"><i className="fab fa-linkedin-in" /></Link></li>
                                        <li><Link href="/index-11"><i className="fab fa-youtube" /></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single-item">
                                <figure className="image-box"><img src="/assets/images-2/team/team-2.png" alt="" /></figure>
                                <div className="lower-content">
                                    <h3><Link href="/team-details">Peshotan Mehta</Link></h3>
                                    <span className="designation">Manager</span>
                                    <ul className="social-links clearfix">
                                        <li><Link href="/index-11"><i className="fab fa-facebook-f" /></Link></li>
                                        <li><Link href="/index-11"><i className="fab fa-twitter" /></Link></li>
                                        <li><Link href="/index-11"><i className="fab fa-linkedin-in" /></Link></li>
                                        <li><Link href="/index-11"><i className="fab fa-youtube" /></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single-item">
                                <figure className="image-box"><img src="/assets/images-2/team/team-3.png" alt="" /></figure>
                                <div className="lower-content">
                                    <h3><Link href="/team-details">Philp Jones</Link></h3>
                                    <span className="designation">Migration Agent</span>
                                    <ul className="social-links clearfix">
                                        <li><Link href="/index-11"><i className="fab fa-facebook-f" /></Link></li>
                                        <li><Link href="/index-11"><i className="fab fa-twitter" /></Link></li>
                                        <li><Link href="/index-11"><i className="fab fa-linkedin-in" /></Link></li>
                                        <li><Link href="/index-11"><i className="fab fa-youtube" /></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single-item">
                                <figure className="image-box"><img src="/assets/images-2/team/team-4.png" alt="" /></figure>
                                <div className="lower-content">
                                    <h3><Link href="/team-details">Peter Fransisco</Link></h3>
                                    <span className="designation">Visa Director</span>
                                    <ul className="social-links clearfix">
                                        <li><Link href="/index-11"><i className="fab fa-facebook-f" /></Link></li>
                                        <li><Link href="/index-11"><i className="fab fa-twitter" /></Link></li>
                                        <li><Link href="/index-11"><i className="fab fa-linkedin-in" /></Link></li>
                                        <li><Link href="/index-11"><i className="fab fa-youtube" /></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
