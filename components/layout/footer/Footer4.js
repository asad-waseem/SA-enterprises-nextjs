import Link from "next/link"

export default function Footer4() {
    return (
        <>
            <footer className="main-footer style-four">
                <div className="pattern" style={{ backgroundImage: 'url(assets/images/shape/pattern-14.png)' }} />
                <div className="auto-container">
                    {/*Widgets Section*/}
                    <div className="widgets-section">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="footer-widget about-widget-two">
                                    <div className="footer-logo">
                                        <Link href="/"><img className="lazy-image" src="/assets/images/logo-v4-2.png" alt="" /></Link>
                                    </div>
                                    <div className="widget-content">
                                        <div className="text">To take a trivial example, which <br /> undertake laborious some physical <br /> exercise program work.</div>
                                        <ul className="social-links clearfix">
                                            <li><Link href="#"><span className="fab fa-facebook-f" /></Link></li>
                                            <li><Link href="#"><span className="fab fa-twitter" /></Link></li>
                                            <li><Link href="#"><span className="fab fa-google-plus-g" /></Link></li>
                                            <li><Link href="#"><span className="fab fa-skype" /></Link></li>
                                        </ul>
                                        <div className="copyright-text">© {new Date().getFullYear()} Envolve consultancy.</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="footer-widget links-widget-two">
                                    <h3 className="widget-title">Useful Links</h3>
                                    <div className="widget-content">
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <ul>
                                                    <li><Link href="/about-1">About Us</Link></li>
                                                    <li><Link href="/contact-1">Contact</Link></li>
                                                    <li><Link href="/faq">FAQ’s</Link></li>
                                                    <li><Link href="/team-1">Meet Team</Link></li>
                                                    <li><Link href="/blog-1">News</Link></li>
                                                    <li><Link href="/portfolio-1">Projects</Link></li>
                                                    <li><Link href="/service">Services</Link></li>
                                                </ul>
                                            </div>
                                            <div className="col-sm-6">
                                                <ul>
                                                    <li><Link href="/career">Careers</Link></li>
                                                    <li><Link href="#">Features</Link></li>
                                                    <li><Link href="#">Feedback</Link></li>
                                                    <li><Link href="/pricing-1">Pricing</Link></li>
                                                    <li><Link href="#">Locations</Link></li>
                                                    <li><Link href="#">Policies</Link></li>
                                                    <li><Link href="#">Industries</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="footer-widget post-widget">
                                    <h3 className="widget-title">Recent Post</h3>
                                    <div className="widget-content">
                                        <div className="post">
                                            <div className="image"><Link href="/blog-details"><img src="/assets/images/resource/news-12.jpg" alt="" /></Link></div>
                                            <div className="date">14 February, {new Date().getFullYear()}</div>
                                            <h4><Link href="/blog-details">Is Your Business Ready For <br />Integration? </Link></h4>
                                        </div>
                                        <div className="post">
                                            <div className="image"><Link href="/blog-details"><img src="/assets/images/resource/news-13.jpg" alt="" /></Link></div>
                                            <div className="date">21 January, {new Date().getFullYear()}</div>
                                            <h4><Link href="/blog-details">That Should You Include In <br /> Your Marketing Plan </Link></h4>
                                        </div>
                                        <Link href="#" className="read-more-post">Read More from Blog <i className="flaticon-right" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Footer Bottom */}
                <div className="footer-bottom-two">
                    <div className="auto-container">
                        <div className="row m-0 justify-content-between">
                            <ul className="menu">
                                <li><Link href="#">Privacy Policy </Link></li>
                                <li><Link href="#">Terms &amp; Conditions</Link></li>
                                <li><Link href="#">Site Map.</Link></li>
                            </ul>
                            <div className="scroll-to-top-two scroll-to-target" data-target="html"><i className="flaticon-backward" />Get back to home</div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}
