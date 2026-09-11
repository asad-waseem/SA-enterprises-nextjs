import Link from "next/link"

export default function Footer1() {
    return (
        <>
            <footer className="main-footer sp-two">
                <div className="auto-container">
                    {/*Widgets Section*/}
                    <div className="widgets-section">
                        <div className="row clearfix">
                            {/*Column 1: Logo & Procurement CTA*/}
                            <div className="column col-lg-5">
                                <div className="row">
                                    <div className="col-md-7">
                                        <div className="footer-widget logo-widget">
                                            <div className="widget-content">
                                                <div className="footer-logo">
                                                    <Link href="/"><img className="lazy-image" src="/assets/images/logo-2.png" alt="SA Enterprises" /></Link>
                                                </div>
                                                <h3>Where Business <br />Needs Come First.</h3>
                                                <div className="link-btn"><Link href="/contact" className="theme-btn"><i className="flaticon-right" />Request a Quote</Link></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-5">
                                        <div className="footer-widget links-widget">
                                            <h3 className="widget-title">Company</h3>
                                            <div className="widget-content">
                                                <ul>
                                                    <li><Link href="/">Home</Link></li>
                                                    <li><Link href="/about">About Us</Link></li>
                                                    <li><Link href="/solutions">Solutions</Link></li>
                                                    <li><Link href="/products">Products</Link></li>
                                                    <li><Link href="/industries">Industries</Link></li>
                                                    <li><Link href="/contact">Contact</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*Column 2: Sourcing Categories & Support*/}
                            <div className="column col-lg-4">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="footer-widget links-widget">
                                            <h3 className="widget-title">Solutions</h3>
                                            <div className="widget-content">
                                                <ul>
                                                    <li><Link href="/solutions/it-hardware">IT Hardware</Link></li>
                                                    <li><Link href="/solutions/office-equipment">Office Equipment</Link></li>
                                                    <li><Link href="/solutions/networking">Networking</Link></li>
                                                    <li><Link href="/solutions/printing-consumables">Toner &amp; Ink</Link></li>
                                                    <li><Link href="/solutions/accessories">Accessories</Link></li>
                                                    <li><Link href="/solutions/custom-procurement">Custom Demand &amp; Sourcing</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="footer-widget links-widget">
                                            <h3 className="widget-title">Support</h3>
                                            <div className="widget-content">
                                                <ul>
                                                    <li><Link href="/faq">FAQ’s</Link></li>
                                                    <li><Link href="/contact#quote">Submit RFQ</Link></li>
                                                    <li><Link href="/contact">Direct Contact</Link></li>
                                                    <li><Link href="https://wa.me/923000000000" target="_blank" rel="noopener noreferrer">WhatsApp Desk</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*Column 3: Sourcing Hardware Gallery*/}
                            <div className="column col-lg-3">
                                <h3 className="widget-title">Hardware Gallery</h3>
                                <div className="footer-widget instagram-widget">
                                    <div className="inner-box">
                                        <div className="wrapper-box">
                                            <div className="image">
                                                <img className="lazy-image" src="/assets/images/gallery/gallery-6.jpg" alt="Hardware" />
                                                <div className="overlay-link"><Link href="/products" className="lightbox-image"><span className="fa fa-plus" /></Link></div>
                                            </div>
                                            <div className="image">
                                                <img className="lazy-image" src="/assets/images/gallery/gallery-7.jpg" alt="Hardware" />
                                                <div className="overlay-link"><Link href="/products" className="lightbox-image"><span className="fa fa-plus" /></Link></div>
                                            </div>
                                            <div className="image">
                                                <img className="lazy-image" src="/assets/images/gallery/gallery-8.jpg" alt="Hardware" />
                                                <div className="overlay-link"><Link href="/products" className="lightbox-image"><span className="fa fa-plus" /></Link></div>
                                            </div>
                                            <div className="image">
                                                <img className="lazy-image" src="/assets/images/gallery/gallery-9.jpg" alt="Hardware" />
                                                <div className="overlay-link"><Link href="/products" className="lightbox-image"><span className="fa fa-plus" /></Link></div>
                                            </div>
                                            <div className="image">
                                                <img className="lazy-image" src="/assets/images/gallery/gallery-10.jpg" alt="Hardware" />
                                                <div className="overlay-link"><Link href="/products" className="lightbox-image"><span className="fa fa-plus" /></Link></div>
                                            </div>
                                            <div className="image">
                                                <img className="lazy-image" src="/assets/images/gallery/gallery-11.jpg" alt="Hardware" />
                                                <div className="overlay-link"><Link href="/products" className="lightbox-image"><span className="fa fa-plus" /></Link></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Footer Bottom */}
                <div className="auto-container">
                    <div className="footer-bottom">
                        <div className="row m-0 justify-content-between">
                            <ul className="menu">
                                <li><Link href="/contact">Terms &amp; Quotations</Link></li>
                                <li><Link href="/faq">Procurement FAQ</Link></li>
                            </ul>
                            <div className="scroll-to-top-two scroll-to-target" data-target="html"><i className="flaticon-backward" />Get back to top</div>
                        </div>
                        <div className="copyright">© {new Date().getFullYear()} <Link href="/">SA Enterprises</Link>, All Rights Reserved. Where Business Needs Come First.</div>
                    </div>
                </div>
            </footer>
        </>
    )
}
