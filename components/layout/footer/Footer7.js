import Link from "next/link"
export default function Footer7() {
    return (
        <>
            <footer className="footer-style-seven">
                <div className="auto-container">
                    <div className="footer-top">
                        <div className="row clearfix">
                            <div className="col-lg-4 col-md-6 footer-column">
                                <div className="footer-widget contact-widget">
                                    <div className="widget-title">
                                        <h3>Contact Details</h3>
                                    </div>
                                    <div className="widget-content">
                                        <ul className="info clearfix">
                                            <li>
                                                <i className="fas fa-map-marker-alt" />
                                                <p>Boat House, 152/21 City Road, Hx <br />N1 6NG, UK.</p>
                                            </li>
                                            <li>
                                                <i className="fas fa-phone" />
                                                <h5>Phone</h5>
                                                <p><Link href="tel:6132456789790">(+61) 324 56 789 &amp; 790</Link></p>
                                            </li>
                                            <li>
                                                <i className="fas fa-envelope" />
                                                <h5>Email</h5>
                                                <p><Link href="mailto:support@example.com">support@example.com</Link></p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 footer-column">
                                <div className="footer-widget links-widget">
                                    <div className="widget-title">
                                        <h3>Useful Links</h3>
                                    </div>
                                    <div className="widget-content">
                                        <ul className="links-list clearfix">
                                            <li><Link href="/index-7">About Company</Link></li>
                                            <li><Link href="/index-7">Our Services</Link></li>
                                            <li><Link href="/index-7">Meet Experts</Link></li>
                                            <li><Link href="/index-7">Latest News</Link></li>
                                            <li><Link href="/index-7">Our Case Studies</Link></li>
                                            <li><Link href="/index-7">Privacy Policy</Link></li>
                                            <li><Link href="/index-7">Get a Quote</Link></li>
                                            <li><Link href="/index-7">Contact Us</Link></li>
                                            <li><Link href="/index-7">Testimonials</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 footer-column">
                                <div className="footer-widget gallery-widget">
                                    <div className="widget-title">
                                        <h3>Project Gallery</h3>
                                    </div>
                                    <div className="widget-content">
                                        <ul className="image-list clearfix">
                                            <li>
                                                <figure className="image">
                                                    <img src="/assets/images-2/resource/footer-gallery-1.jpg" alt="" />
                                                    {/* <Link href="/assets/images-2/resource/footer-gallery-1.jpg" className="lightbox-image" data-fancybox="gallery"><i className="far fa-search-plus" /></Link> */}
                                                </figure>
                                            </li>
                                            <li>
                                                <figure className="image">
                                                    <img src="/assets/images-2/resource/footer-gallery-2.jpg" alt="" />
                                                    {/* <Link href="/assets/images-2/resource/footer-gallery-2.jpg" className="lightbox-image" data-fancybox="gallery"><i className="far fa-search-plus" /></Link> */}
                                                </figure>
                                            </li>
                                            <li>
                                                <figure className="image">
                                                    <img src="/assets/images-2/resource/footer-gallery-3.jpg" alt="" />
                                                    {/* <Link href="/assets/images-2/resource/footer-gallery-3.jpg" className="lightbox-image" data-fancybox="gallery"><i className="far fa-search-plus" /></Link> */}
                                                </figure>
                                            </li>
                                            <li>
                                                <figure className="image">
                                                    <img src="/assets/images-2/resource/footer-gallery-4.jpg" alt="" />
                                                    {/* <Link href="/assets/images-2/resource/footer-gallery-4.jpg" className="lightbox-image" data-fancybox="gallery"><i className="far fa-search-plus" /></Link> */}
                                                </figure>
                                            </li>
                                            <li>
                                                <figure className="image">
                                                    <img src="/assets/images-2/resource/footer-gallery-5.jpg" alt="" />
                                                    {/* <Link href="/assets/images-2/resource/footer-gallery-5.jpg" className="lightbox-image" data-fancybox="gallery"><i className="far fa-search-plus" /></Link> */}
                                                </figure>
                                            </li>
                                            <li>
                                                <figure className="image">
                                                    <img src="/assets/images-2/resource/footer-gallery-6.jpg" alt="" />
                                                    {/* <Link href="/assets/images-2/resource/footer-gallery-6.jpg" className="lightbox-image" data-fancybox="gallery"><i className="far fa-search-plus" /></Link> */}
                                                </figure>
                                            </li>
                                            <li>
                                                <figure className="image">
                                                    <img src="/assets/images-2/resource/footer-gallery-7.jpg" alt="" />
                                                    {/* <Link href="/assets/images-2/resource/footer-gallery-7.jpg" className="lightbox-image" data-fancybox="gallery"><i className="far fa-search-plus" /></Link> */}
                                                </figure>
                                            </li>
                                            <li>
                                                <figure className="image">
                                                    <img src="/assets/images-2/resource/footer-gallery-8.jpg" alt="" />
                                                    {/* <Link href="/assets/images-2/resource/footer-gallery-8.jpg" className="lightbox-image" data-fancybox="gallery"><i className="far fa-search-plus" /></Link> */}
                                                </figure>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom clearfix">
                        <div className="left-column pull-left clearfix">
                            <figure className="logo"><Link href="/index-7"><img src="/assets/images-2/footer-logo-2.png" alt="" /></Link></figure>
                            <div className="text">Copyrights © {new Date().getFullYear()} <Link href="/index-7">Envolve Insurance Company,</Link> <br />All Rights Reserved.</div>
                        </div>
                        <ul className="social-links clearfix pull-right">
                            <li><Link href="/index-7"><i className="fab fa-facebook-f" /></Link></li>
                            <li><Link href="/index-7"><i className="fab fa-twitter" /></Link></li>
                            <li><Link href="/index-7"><i className="fab fa-google-plus-g" /></Link></li>
                            <li><Link href="/index-7"><i className="fab fa-skype" /></Link></li>
                        </ul>
                    </div>
                </div>
            </footer>

        </>
    )
}
