import Link from "next/link"
export default function Footer12() {
    return (
        <>
            <footer className="footer-style-12">
                <div className="footer-top">
                    <div className="auto-container">
                        <div className="row clearfix">
                            <div className="col-lg-6 col-md-6 footer-column">
                                <div className="footer-widget logo-widget">
                                    <figure className="footer-logo"><Link href="/index-10"><img src="/assets/images-2/footer-logo-4.png" alt="" /></Link></figure>
                                    <div className="text">
                                        <h3>Get Free Assessment Today</h3>
                                        <p>On the other hand, we denounce with righteous indignation &amp; dislike men who are so beguiled and demoralized.</p>
                                    </div>
                                    <div className="inner-box clearfix">
                                        <div className="single-item">
                                            <div className="icon-box"><i className="flaticon-call" /></div>
                                            <h5>Phone Num</h5>
                                            <p><Link href="tel:1800555440012">+1800 555 44 00 &amp; 12</Link></p>
                                        </div>
                                        <div className="single-item">
                                            <div className="icon-box"><i className="flaticon-mail" /></div>
                                            <h5>Mail us</h5>
                                            <p><Link href="mailto:info@example.com">info@example.com</Link></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6">
                                <div className="footer-widget link-widget">
                                    <div className="widget-title">
                                        <h3>Information</h3>
                                    </div>
                                    <div className="widget-content">
                                        <ul className="link-list clearfix">
                                            <li><Link href="/index-12">About Us</Link></li>
                                            <li><Link href="/index-12">Meet Team</Link></li>
                                            <li><Link href="/index-12">News</Link></li>
                                            <li><Link href="/index-12">Projects</Link></li>
                                            <li><Link href="/index-12">Services</Link></li>
                                            <li><Link href="/index-12">Testimonials</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6">
                                <div className="footer-widget link-widget">
                                    <div className="widget-title">
                                        <h3>Community</h3>
                                    </div>
                                    <div className="widget-content">
                                        <ul className="link-list clearfix">
                                            <li><Link href="/index-12">Learners</Link></li>
                                            <li><Link href="/index-12">Partners</Link></li>
                                            <li><Link href="/index-12">Center</Link></li>
                                            <li><Link href="/index-12">Center</Link></li>
                                            <li><Link href="/index-12">Beta Testers</Link></li>
                                            <li><Link href="/index-12">Translators</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6">
                                <div className="footer-widget link-widget">
                                    <div className="widget-title">
                                        <h3>Support</h3>
                                    </div>
                                    <div className="widget-content">
                                        <ul className="link-list clearfix">
                                            <li><Link href="/index-12">Careers</Link></li>
                                            <li><Link href="/index-12">Features</Link></li>
                                            <li><Link href="/index-12">Policies</Link></li>
                                            <li><Link href="/index-12">FAQ’s</Link></li>
                                            <li><Link href="/index-12">Sitemap</Link></li>
                                            <li><Link href="/index-12">Contact</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="auto-container">
                        <div className="bottom-inner clearfix">
                            <div className="copyright pull-left">
                                <p>Copyrights © {new Date().getFullYear()} <Link href="/index-10">Envolve</Link>, All Rights Reserved.</p>
                            </div>
                            <ul className="footer-nav clearfix pull-right">
                                <li><Link href="/index-10">Privacy Policy</Link></li>
                                <li><Link href="/index-10">Terms &amp; Conditions</Link></li>
                                <li><Link href="/index-10">Site Map</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}
