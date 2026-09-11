import Link from "next/link"

export default function Footer2() {
    return (
        <>
            <footer className="main-footer style-two">
                <div className="pattern" style={{ backgroundImage: 'url(assets/images/shape/pattern-8.png)' }} />
                <div className="auto-container">
                    {/*Widgets Section*/}
                    <div className="widgets-section">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="footer-widget links-widget">
                                    <h3 className="widget-title">Information</h3>
                                    <div className="widget-content">
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <ul>
                                                    <li><Link href="/about-1">About</Link></li>
                                                    <li><Link href="/team-1">Meet Our Team</Link></li>
                                                    <li><Link href="/blog-1">News</Link></li>
                                                    <li><Link href="/portfolio-1">Projects</Link></li>
                                                    <li><Link href="/services">Services</Link></li>
                                                </ul>
                                            </div>
                                            <div className="col-sm-6">
                                                <ul>
                                                    <li><Link href="/career">Careers</Link></li>
                                                    <li><Link href="#">Features</Link></li>
                                                    <li><Link href="#l">Policies</Link></li>
                                                    <li><Link href="/faq">FAQ’s</Link></li>
                                                    <li><Link href="/contact-1">Contact</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="logo"><img src="/assets/images/icons/icon-11.png" alt="" /></div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="footer-widget post-widget">
                                    <h3 className="widget-title">Trending Post</h3>
                                    <div className="widget-content">
                                        <div className="post">
                                            <div className="image"><Link href="/blog-details"><img src="/assets/images/resource/news-9.jpg" alt="" /></Link></div>
                                            <div className="date">14 February, {new Date().getFullYear()}</div>
                                            <h4><Link href="/blog-details">Is Your Business Ready For <br />Integration?</Link></h4>
                                        </div>
                                        <div className="post">
                                            <div className="image"><Link href="/blog-details"><img src="/assets/images/resource/news-10.jpg" alt="" /></Link></div>
                                            <div className="date">21 January, {new Date().getFullYear()}</div>
                                            <h4><Link href="/blog-details">That Should You Include In <br /> Your Marketing Plan </Link></h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="footer-widget contact-widget">
                                    <h3 className="widget-title">Contact Details</h3>
                                    <div className="widget-content">
                                        <div className="text">96 Queen Park, Los Vegas, USA Mon - Sat: 09.00 to 06.00 (Sun:Closed)</div>
                                        <ul className="list">
                                            <li>Call Us :  <Link href="tel:+18005554400">+1 800 555 44 00</Link></li>
                                            <li>Mail us :  <Link href="mailto:supportteam@Envolve.com">Supportteam@Envolve.com</Link></li>
                                        </ul>
                                        <ul className="social-links clearfix">
                                            <li><Link href="#"><span className="fab fa-facebook-f" /></Link></li>
                                            <li><Link href="#"><span className="fab fa-twitter" /></Link></li>
                                            <li><Link href="#"><span className="fab fa-google-plus-g" /></Link></li>
                                            <li><Link href="#"><span className="fab fa-skype" /></Link></li>
                                        </ul>
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
                            <div className="copyright-text">© {new Date().getFullYear()} Envolve, All Rights Reserved.</div>
                            <ul className="menu">
                                <li><Link href="#">Privacy Policy </Link></li>
                                <li><Link href="#">Terms &amp; Conditions</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}
