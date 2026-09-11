import Link from "next/link"

export default function Footer3() {
    return (
        <>
            <footer className="main-footer style-three">
                <div className="pattern" style={{ backgroundImage: 'url(assets/images/shape/pattern-8.png)' }} />
                <div className="auto-container">
                    {/*Widgets Section*/}
                    <div className="widgets-section">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="footer-widget about-widget">
                                    <h3 className="widget-title">About Company</h3>
                                    <div className="widget-content">
                                        <div className="text">To take a trivial example, which undertakes <br /> laborious physical exercise.</div>
                                        <ul className="list">
                                            <li><Link href="#">Niche expertise</Link></li>
                                            <li><Link href="#">Partner-led service</Link></li>
                                            <li><Link href="#">Transparent fees</Link></li>
                                        </ul>
                                        <div className="image"><img src="/assets/images/resource/certificate.png" alt="" /></div>
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
                                <div className="footer-widget twitter-widget">
                                    <h3 className="widget-title">Twitter Feed</h3>
                                    <div className="widget-content">
                                        <div className="image-box">
                                            <img src="/assets/images/resource/twitter-thumb.jpg" alt="" />
                                            <h4>Herbert law specialist</h4>
                                            <div className="user"><Link href="#">@username_5687</Link></div>
                                        </div>
                                        <div className="text"><Link href="#">#Consultancy</Link> UK rank <Link href="#">#Envolve</Link> as the 1st best management consultancy overall certified companies.</div>
                                        <p><Link href="#">onnet.twitter.com/2kbwebdesign</Link></p>
                                        <div className="date"><i className="far fa-clock" />24th Feb, {new Date().getFullYear()}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Footer Bottom */}
                <div className="footer-bottom-three">
                    <div className="auto-container">
                        <div className="row m-0 justify-content-between">
                            <div className="copyright-text"><Link href="#">© {new Date().getFullYear()} Envolve,</Link> All Rights Reserved.</div>
                            <ul className="menu">
                                <li><Link href="#">Privacy Policy </Link></li>
                                <li><Link href="#">Terms &amp; Conditions</Link></li>
                                <li><Link href="#">Site Map</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="bottom-area">
                        <div className="auto-container">
                            <ul className="social-icon row m-0">
                                <li><Link href="#">Facebook</Link></li>
                                <li><Link href="#">Twitter</Link></li>
                                <li><Link href="#">Google +</Link></li>
                                <li><Link href="#">Linkedin</Link></li>
                                <li><Link href="#">Youtube </Link></li>
                                <li><Link href="#">Pinterest</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}
