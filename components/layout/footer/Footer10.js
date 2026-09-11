import Link from "next/link"
export default function Footer10() {
    return (
        <>
            <footer className="footer-style-ten">
                <div className="footer-top">
                    <div className="auto-container">
                        <div className="row clearfix">
                            <div className="col-lg-3 col-md-6 footer-column">
                                <div className="footer-widget logo-widget">
                                    <figure className="footer-logo"><Link href="/index-10"><img src="/assets/images-2/footer-logo-3.png" alt="" /></Link></figure>
                                    <div className="text">
                                        <p>Indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue blame.</p>
                                    </div>
                                    <div className="download-box">
                                        <Link href="/index-6"><i className="far fa-arrow-to-bottom" /></Link>
                                        <h3>Terms &amp; Condition</h3>
                                        <span>Download pdf</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 footer-column">
                                <div className="footer-widget link-widget">
                                    <div className="widget-title">
                                        <h3>Our Services</h3>
                                    </div>
                                    <div className="widget-content">
                                        <ul className="link-list clearfix">
                                            <li><Link href="/index-10">Domestic Moving</Link></li>
                                            <li><Link href="/index-10">ODC Transportation</Link></li>
                                            <li><Link href="/index-10">Car Carriers</Link></li>
                                            <li><Link href="/index-10">International Moving</Link></li>
                                            <li><Link href="/index-10">Transportation</Link></li>
                                            <li><Link href="/index-10">Record Management</Link></li>
                                            <li><Link href="/index-10">Consignment Tracking</Link></li>
                                            <li><Link href="/index-10">Customer Care</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 footer-column">
                                <div className="footer-widget subscribe-widget">
                                    <div className="widget-title">
                                        <h3>Request for a Quote</h3>
                                    </div>
                                    <div className="form-inner">
                                        <form method="post" action="sendemail.php" className="contact-form">
                                            <div className="row">
                                                <div className="col-md-6 form-group">
                                                    <input type="text" name="firstname" placeholder="Your name" required />
                                                </div>
                                                <div className="col-md-6 form-group">
                                                    <input type="email" name="email" placeholder="Email Address" required />
                                                </div>
                                                <div className="col-md-6 form-group">
                                                    <select className="custom-select" name="subject">
                                                        <option value="*">Discusss about</option>
                                                        <option value=".category-1">Business Aproach</option>
                                                        <option value=".category-2">Trades &amp; Stock Market</option>
                                                        <option value=".category-3">Strategy &amp; Planning</option>
                                                        <option value=".category-4">Software &amp; Research</option>
                                                        <option value=".category-5">Support &amp; Maintenance</option>
                                                    </select>
                                                </div>
                                                <div className="col-md-3 form-group">
                                                    <i className="fas fa-paper-plane" />
                                                    <input type="text" name="form" placeholder="From" required />
                                                </div>
                                                <div className="col-md-3 form-group">
                                                    <i className="fas fa-paper-plane" />
                                                    <input type="text" name="to" placeholder="To" required />
                                                </div>
                                                <div className="col-md-12 form-group">
                                                    <textarea name="message" placeholder="Description ..." defaultValue={""} />
                                                </div>
                                                <div className="col-md-12 message-btn">
                                                    <button className="theme-btn btn-style-four" type="submit" name="submit-form"><span className="btn-title">Get a Quote</span></button>
                                                </div>
                                            </div>
                                        </form>
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
