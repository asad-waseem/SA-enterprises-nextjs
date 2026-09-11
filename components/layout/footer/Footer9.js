import Link from "next/link"
export default function Footer9() {
    return (
        <>
            <footer className="footer-section-nine">
                <div className="footer-nine">
                    <div className="auto-container">
                        <div className="row text-right-rtl">
                            {/*Start single footer widget*/}
                            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 wow animated fadeInUp" data-wow-delay="0.1s">
                                <div className="single-footer-widget-nine marbtm">
                                    <div className="our-company-info">
                                        <div className="footer-logo">
                                            <Link href="/"><img src="/assets/images-3/footer-logo-9.png" alt="Awesome Footer Logo" title="Logo" /></Link>
                                        </div>
                                        <div className="text-box">
                                            <p>Right to find fault with a man who chooses too enjoy a pleasures that annoying consequences.</p>
                                        </div>
                                        <div className="copyright-text">
                                            <p>Copyrights © {new Date().getFullYear()} <br />Envolve, All Rights Reserved.</p>
                                        </div>
                                        <ul className="footer-social-links-nine clearfix">
                                            <li><Link href="#" className="clr-fb"><span className="fab fa-facebook-f" /></Link></li>
                                            <li><Link href="#" className="clr-tw"><span className="fab fa-twitter" /></Link></li>
                                            <li><Link href="#" className="clr-google"><span className="fab fa-google-plus-g" /></Link></li>
                                            <li><Link href="#" className="clr-skype"><span className="fab fa-skype" /></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/*End single footer widget*/}
                            {/*Start single footer widget*/}
                            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 wow animated fadeInUp" data-wow-delay="0.3s">
                                <div className="single-footer-widget-nine margintop_minus marbtm">
                                    <div className="title">
                                        <h3>Our Services</h3>
                                    </div>
                                    <ul className="footer-widget-links2 left">
                                        <li><Link href="#">About Company</Link></li>
                                        <li><Link href="#">Achivements</Link></li>
                                        <li><Link href="#">Meet Experts</Link></li>
                                        <li><Link href="#">Our Case Studies</Link></li>
                                        <li><Link href="#">Get a Quote</Link></li>
                                        <li><Link href="#">Testimonials</Link></li>
                                        <li><Link href="#">FAQ’s</Link></li>
                                    </ul>
                                </div>
                            </div>
                            {/*End single footer widget*/}
                            {/*Start single footer widget*/}
                            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 wow animated fadeInUp" data-wow-delay="0.3s">
                                <div className="single-footer-widget-nine margintop_minus">
                                    <div className="title">
                                        <h3>Opening Hours</h3>
                                    </div>
                                    <div className="footer-widget-opening-hour-box">
                                        <ul className="clearfix">
                                            <li><i className="icon-clock-1" /><span className="left">Monday</span>: <span className="right">9.00 to 19.30</span></li>
                                            <li><i className="icon-clock-1" /><span className="left">Monday</span>: <span className="right">9.00 to 19.30</span></li>
                                            <li><i className="icon-clock-1" /><span className="left">Monday</span>: <span className="right">9.00 to 19.30</span></li>
                                            <li><i className="icon-clock-1" /><span className="left">Monday</span>: <span className="right">9.00 to 19.30</span></li>
                                            <li><i className="icon-clock-1" /><span className="left">Monday</span>: <span className="right">9.00 to 19.30</span></li>
                                            <li><i className="icon-clock-1" /><span className="left">Monday</span>: <span className="right">9.00 to 19.30</span></li>
                                            <li><i className="icon-clock-1" /><span className="left">Monday</span>: <span className="right">9.00 to 19.30</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/*End single footer widget*/}
                            {/*Start single footer widget*/}
                            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 wow animated fadeInUp" data-wow-delay="0.7s">
                                <div className="single-footer-widget-nine margintop_minus pdtop">
                                    <div className="title">
                                        <h3>Popular Post</h3>
                                    </div>
                                    <div className="subscribe-box-nine">
                                        <p>Get in your inbox the latest News<br />and Offers from Envolve</p>
                                        <form className="subscribe-form" action="#">
                                            <div className="input-box">
                                                <input type="email" name="form_email" placeholder="Your email ..." />
                                                <div className="icon">
                                                    <span className="icon-envelope" />
                                                </div>
                                            </div>
                                            <div className="button-box">
                                                <button className="theme-btn btn-style-nine" type="submit" name="submit-form">
                                                    <span className="btn-title">Subscribe Us</span>
                                                </button>
                                            </div>
                                            <span className="subscribe-message">* We won’t send you spam.</span>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            {/*End single footer widget*/}
                        </div>
                    </div>
                </div>
                <div className="footer-bottom-nine">
                    <div className="container">
                        <div className="outer-box">
                            <div className="footer-menu-style1">
                                <ul>
                                    <li><Link href="#">Privacy Policy</Link></li>
                                    <li><Link href="#">Terms &amp; Conditions</Link></li>
                                    <li><Link href="#">Site Map</Link></li>
                                    <li><Link href="#">Refund Policy</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}
