import Link from "next/link"
export default function Footer15() {
    return (
        <>
            <footer className="footer-style-15">
                <div className="footer-top">
                    <div className="auto-container">
                        <div className="row clearfix">
                            <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                                <div className="footer-widget about-widget">
                                    <div className="widget-title">
                                        <h3>About Us</h3>
                                    </div>
                                    <div className="widget-content">
                                        <p>Our goal is to help our companies maintains achieve best positions team work occur works.</p>
                                        <div className="inner">
                                            <h5>Free Consultation</h5>
                                            <div className="email">
                                                <i className="customicon-chatting" />
                                                <p><Link href="mailto:support@envolve.com">support@envolve.com</Link><br />Mon-Satday: 9am to 6.pm</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                                <div className="footer-widget links-widget">
                                    <div className="widget-title">
                                        <h3>Usefull Links</h3>
                                    </div>
                                    <div className="widget-content">
                                        <ul className="link-list clearfix">
                                            <li><Link href="/index-15">About Us</Link></li>
                                            <li><Link href="/index-15">Careers</Link></li>
                                            <li><Link href="/index-15">Meet Team</Link></li>
                                            <li><Link href="/index-15">Features</Link></li>
                                            <li><Link href="/index-15">News</Link></li>
                                            <li><Link href="/index-15">Policies</Link></li>
                                            <li><Link href="/index-15">Projects</Link></li>
                                            <li><Link href="/index-15">FAQ’s</Link></li>
                                            <li><Link href="/index-15">Services</Link></li>
                                            <li><Link href="/index-15">Contact</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                                <div className="footer-widget gallery-widget">
                                    <div className="widget-title">
                                        <h3>Our Projects</h3>
                                    </div>
                                    <div className="widget-content">
                                        <ul className="image-list clearfix">
                                            <li>
                                                <figure className="image"><Link href="/portfolio-details"><img src="/assets/images-4/resource/footer-1.jpg" alt="" /></Link></figure>
                                            </li>
                                            <li>
                                                <figure className="image"><Link href="/portfolio-details"><img src="/assets/images-4/resource/footer-2.jpg" alt="" /></Link></figure>
                                            </li>
                                            <li>
                                                <figure className="image"><Link href="/portfolio-details"><img src="/assets/images-4/resource/footer-3.jpg" alt="" /></Link></figure>
                                            </li>
                                            <li>
                                                <figure className="image"><Link href="/portfolio-details"><img src="/assets/images-4/resource/footer-4.jpg" alt="" /></Link></figure>
                                            </li>
                                            <li>
                                                <figure className="image"><Link href="/portfolio-details"><img src="/assets/images-4/resource/footer-5.jpg" alt="" /></Link></figure>
                                            </li>
                                            <li>
                                                <figure className="image"><Link href="/portfolio-details"><img src="/assets/images-4/resource/footer-6.jpg" alt="" /></Link></figure>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                                <div className="footer-widget post-widget">
                                    <div className="widget-title">
                                        <h3>Popular Post</h3>
                                    </div>
                                    <div className="post-inner">
                                        <div className="post">
                                            <span className="post-date">14 Mar, 2021</span>
                                            <h5><Link href="/blog-details">Expansion of Interview Waiver Eligibility</Link></h5>
                                        </div>
                                        <div className="post">
                                            <span className="post-date">10 Feb, 2021</span>
                                            <h5><Link href="/blog-details">Immigrant Visa Processing Update 2021</Link></h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-subscribe">
                    <div className="auto-container">
                        <div className="subscribe-inner">
                            <div className="icon-box"><i className="customicon-subscribe-rss-button" /></div>
                            <form action="contact" method="post">
                                <div className="form-group clearfix">
                                    <div className="field-box">
                                        <i className="far fa-user" />
                                        <input type="text" name="name" placeholder="Your Full Name" required />
                                    </div>
                                    <div className="field-box">
                                        <i className="far fa-envelope" />
                                        <input type="email" name="email" placeholder="Enter Email Address" required />
                                    </div>
                                    <div className="message-btn">
                                        <button type="submit">Subscribe Us</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="auto-container clearfix">
                        <div className="copyright"><p>Copyrights © {new Date().getFullYear()} <Link href="/index-15">Envolve</Link>, All Rights Reserved.</p></div>
                        <ul className="footer-nav clearfix">
                            <li><Link href="/index-15">Privacy Policy</Link></li>
                            <li><Link href="/index-15">Site Map</Link></li>
                            <li><Link href="/index-15">Refund Policy</Link></li>
                        </ul>
                    </div>
                </div>
            </footer>

        </>
    )
}
