import CounterUp from "@/components/elements/CounterUp"
import Link from "next/link"
export default function Footer6() {
    return (
        <>
            <footer className="footer-style-six">
                <div className="auto-container">
                    <div className="footer-top">
                        <div className="row clearfix">
                            <div className="col-lg-3 col-md-6 footer-column">
                                <div className="footer-widget logo-widget">
                                    <figure className="footer-logo"><Link href="/index-6"><img src="/assets/images-2/footer-logo.png" alt="" /></Link></figure>
                                    <div className="text">
                                        <p>Our goal is to help our companies maintains achieve best  positions their respective industries &amp; our team work occur that works have to be repudiated.</p>
                                    </div>
                                    <div className="download-box">
                                        <Link href="/index-6"><i className="far fa-arrow-to-bottom" /></Link>
                                        <h5>Download Firm <br />Profile</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 footer-column">
                                <div className="footer-widget links-widget">
                                    <div className="widget-title">
                                        <h3>Useful Links</h3>
                                    </div>
                                    <div className="widget-content">
                                        <ul className="links-list clearfix">
                                            <li><Link href="/index-6">About Us</Link></li>
                                            <li><Link href="/index-6">Careers</Link></li>
                                            <li><Link href="/index-6">Meet Team</Link></li>
                                            <li><Link href="/index-6">Features</Link></li>
                                            <li><Link href="/index-6">News</Link></li>
                                            <li><Link href="/index-6">Policies</Link></li>
                                            <li><Link href="/index-6">Projects</Link></li>
                                            <li><Link href="/index-6">FAQ’s</Link></li>
                                            <li><Link href="/index-6">Services</Link></li>
                                            <li><Link href="/index-6">Contact</Link></li>
                                            <li><Link href="/index-6">Testimonials</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 footer-column">
                                <div className="footer-widget counter-widget">
                                    <div className="widget-title">
                                        <h3>Success In Numbers</h3>
                                    </div>
                                    <div className="inner-content">
                                        <div className="single-item">
                                            <div className="icon-box"><i className="fas fa-users" /></div>
                                            <div className="count-outer count-box">
                                                <CounterUp end={4} />
                                                <span>K</span>
                                            </div>
                                            <h6>Trusted Clients</h6>
                                        </div>
                                        <div className="single-item">
                                            <div className="icon-box"><i className="fas fa-star" /></div>
                                            <div className="count-outer count-box">
                                                <CounterUp end={100} />
                                                <span>%</span>
                                            </div>
                                            <h6>Case Successful rate</h6>
                                        </div>
                                        <div className="single-item">
                                            <div className="icon-box"><i className="fas fa-balance-scale" /></div>
                                            <div className="count-outer count-box">
                                                <CounterUp end={28} />
                                                <span>+</span>
                                            </div>
                                            <h6>Years of Experience</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 footer-column">
                                <div className="footer-widget location-widget">
                                    <div className="widget-title">
                                        <h3>Our Location</h3>
                                    </div>
                                    <div className="map-outer">

                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2643.6895046810805!2d-122.52642526124438!3d38.00014098339506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085976736097a2f%3A0xbe014d20e6e22654!2sSan Rafael%2C California%2C Hoa Kỳ!5e0!3m2!1svi!2s!4v1678975266976!5m2!1svi!2s" height={200} style={{ border: 0, width: "100%" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom clearfix">
                        <div className="copyright pull-left">
                            <p>© {new Date().getFullYear()} <Link href="/index-6">Envolve</Link>, All Rights Reserved.</p>
                        </div>
                        <ul className="footer-nav clearfix pull-right">
                            <li><Link href="/index-6">Privacy Policy</Link></li>
                            <li><Link href="/index-6">Terms &amp; Conditions</Link></li>
                            <li><Link href="/index-6">Site Map</Link></li>
                        </ul>
                    </div>
                </div>
            </footer>

        </>
    )
}
