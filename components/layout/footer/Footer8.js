import Link from "next/link"
export default function Footer8() {
    return (
        <>
            <footer className="footer-section-eight">
                <div className="footer-eight">
                    <div className="pattern-bg" style={{ backgroundImage: 'url(assets/images-3/pattern/pattern-bg-1.jpg)' }} />
                    <div className="auto-container">
                        <div className="row text-right-rtl">
                            {/*Start single footer widget*/}
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 wow animated fadeInUp" data-wow-delay="0.1s">
                                <div className="single-footer-widget marbtm">
                                    <div className="our-company-info">
                                        <div className="footer-logo">
                                            <Link href="/"><img src="/assets/images-3/footer-logo-8.png" alt="Awesome Footer Logo" title="Logo" /></Link>
                                        </div>
                                        <div className="text-box">
                                            <h3>About Us</h3>
                                            <p>Right to find fault with a man who chooses too enjoy a pleasures that annoying consequences.</p>
                                        </div>
                                        <div className="phone-number">
                                            <p>Call for free consultation!</p>
                                            <h3><Link href="tel:+18005554400">(+81) 324 56 789</Link></h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*End single footer widget*/}
                            {/*Start single footer widget*/}
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 wow animated fadeInUp" data-wow-delay="0.3s">
                                <div className="single-footer-widget">
                                    <div className="title">
                                        <h3>Usefull Link</h3>
                                    </div>
                                    <div className="footer-widget-link-box">
                                        <ul className="footer-widget-links1 left">
                                            <li><Link href="#">About Company</Link></li>
                                            <li><Link href="#">Achivements</Link></li>
                                            <li><Link href="#">Meet Experts</Link></li>
                                            <li><Link href="#">Our Case Studies</Link></li>
                                            <li><Link href="#">Get a Quote</Link></li>
                                            <li><Link href="#">Testimonials</Link></li>
                                            <li><Link href="#">FAQ’s</Link></li>
                                            <li><Link href="#">Why Choose Us</Link></li>
                                        </ul>
                                        <ul className="footer-widget-links1 right">
                                            <li><Link href="#">Our Services</Link></li>
                                            <li><Link href="#">Latest News</Link></li>
                                            <li><Link href="#">Pricing &amp; Plan</Link></li>
                                            <li><Link href="#">How It’s Work</Link></li>
                                            <li><Link href="#">Portfolio</Link></li>
                                            <li><Link href="#">Privacy Policy</Link></li>
                                            <li><Link href="#">Contact Us</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/*End single footer widget*/}
                            {/*Start single footer widget*/}
                            <div className="col-xl-4 col-lg-12 col-md-12 col-sm-12 wow animated fadeInUp" data-wow-delay="0.7s">
                                <div className="single-footer-widget pdtop">
                                    <div className="title">
                                        <h3>Popular Post</h3>
                                    </div>
                                    <ul className="widget-popular-post">
                                        <li>
                                            <div className="img-box">
                                                <img src="/assets/images-3/widget-popular-post-1.jpg" alt="" />
                                            </div>
                                            <div className="title-box">
                                                <span>14 February, {new Date().getFullYear()}</span>
                                                <h3><Link href="#">Is Your Business Ready For<br /> Integration?</Link></h3>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="img-box">
                                                <img src="/assets/images-3/widget-popular-post-2.jpg" alt="" />
                                            </div>
                                            <div className="title-box">
                                                <span>21 January, {new Date().getFullYear()}</span>
                                                <h3><Link href="#">That Should You Include In<br /> Your Marketing Plan</Link></h3>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="img-box">
                                                <img src="/assets/images-3/widget-popular-post-3.jpg" alt="" />
                                            </div>
                                            <div className="title-box">
                                                <span>21 January, {new Date().getFullYear()}</span>
                                                <h3><Link href="#">That Should You Include In<br /> Your Marketing Plan</Link></h3>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/*End single footer widget*/}
                        </div>
                    </div>
                </div>
                <div className="footer-bottom-eight">
                    <div className="container">
                        <div className="outer-box">
                            <div className="copyright-text">
                                <p>Copyrights © {new Date().getFullYear()} <Link href="#">Envolve </Link>, All Rights Reserved.</p>
                            </div>
                            <div className="footer-menu-style1">
                                <ul>
                                    <li><Link href="#">Privacy Policy</Link></li>
                                    <li><Link href="#">Terms &amp; Conditions</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}
