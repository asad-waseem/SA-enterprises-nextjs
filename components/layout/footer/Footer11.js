import Link from "next/link"
export default function Footer11() {
    return (
        <>
            <footer className="footer-style-11">
                <div className="auto-container">
                    <div className="footer-top">
                        <div className="row clearfix">
                            <div className="col-lg-3 col-md-6 footer-column">
                                <div className="footer-widget logo-widget">
                                    <figure className="footer-logo"><Link href="/index-11"><img src="/assets/images-2/footer-logo-5.png" alt="" /></Link></figure>
                                    <div className="text">
                                        <p>@ prince edward island invited 150 Candidates on <span>Mar 18, 2021,</span> in its recent Expression of Interest System draw ...</p>
                                    </div>
                                    <div className="twitter-box">
                                        <div className="icon-box"><i className="fab fa-twitter" /></div>
                                        <h5>Mark Richarson</h5>
                                        <Link href="/index-11">@admin</Link>
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
                                            <li><Link href="/index-11">Evaluation</Link></li>
                                            <li><Link href="/index-11">Migrate</Link></li>
                                            <li><Link href="/index-11">Study</Link></li>
                                            <li><Link href="/index-11">Counselling</Link></li>
                                            <li><Link href="/index-11">Online Payment</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 footer-column">
                                <div className="footer-widget link-widget">
                                    <div className="widget-title">
                                        <h3>Useful Links</h3>
                                    </div>
                                    <div className="widget-content">
                                        <ul className="link-list clearfix">
                                            <li><Link href="/index-11">USA Immigration</Link></li>
                                            <li><Link href="/index-11">Australia Immigration</Link></li>
                                            <li><Link href="/index-11">Visit Visa</Link></li>
                                            <li><Link href="/index-11">Dependent Visa</Link></li>
                                            <li><Link href="/index-11">Visa Consultants</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 footer-column">
                                <div className="footer-widget post-widget">
                                    <div className="widget-title">
                                        <h3>Trending Post</h3>
                                    </div>
                                    <div className="post-inner">
                                        <div className="post">
                                            <p>14 Mar, 2021</p>
                                            <h5><Link href="/blog-details">Expansion of Interview Waiver Eligibility</Link></h5>
                                        </div>
                                        <div className="post">
                                            <p>10 Feb, 2021</p>
                                            <h5><Link href="/blog-details">Immigrant Visa Processing Update 2021</Link></h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom clearfix">
                        <div className="copyright pull-left">
                            <p>© {new Date().getFullYear()} <Link href="/index-11">Envolve</Link>, All Rights Reserved.</p>
                        </div>
                        <ul className="footer-nav clearfix pull-right">
                            <li><Link href="/index-11">Privacy Policy</Link></li>
                            <li><Link href="/index-11">Terms &amp; Conditions</Link></li>
                        </ul>
                    </div>
                </div>
            </footer>

        </>
    )
}
