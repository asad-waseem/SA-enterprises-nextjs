import Link from "next/link"


export default function News() {
    return (
        <>
            <section className="news-home-12">
                <div className="auto-container">
                    <div className="sec-title">
                        <h4>News &amp; Updates</h4>
                        <h2>Latest From Our News Room</h2>
                        <Link href="/blog-4" className="theme-btn btn-style-five"><span className="btn-title">Read More</span></Link>
                    </div>
                    <div className="row clearfix">
                        <div className="col-lg-4 col-md-6 news-block-two">
                            <div className="inner-box">
                                <div className="image">
                                    <Link href="/blog-details"><img className="lazy-image owl-lazy" src="/assets/images-2/news/news-4.jpg" alt="" /></Link>
                                </div>
                                <div className="lower-content">
                                    <div className="category">Business</div>
                                    <ul className="post-meta">
                                        <li><Link href="#">14 February, 2020</Link></li>
                                        <li>/</li>
                                        <li>By Raana irave </li>
                                    </ul>
                                    <h4><Link href="/blog-details">How to Manage Business’s Online Reputation</Link></h4>
                                    <Link href="/blog-details" className="read-more-link">Read More<i className="flaticon-right" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 news-block-two">
                            <div className="inner-box">
                                <div className="image">
                                    <Link href="/blog-details"><img className="lazy-image owl-lazy" src="/assets/images-2/news/news-5.jpg" alt="" /></Link>
                                </div>
                                <div className="lower-content">
                                    <div className="category">Projects</div>
                                    <ul className="post-meta">
                                        <li><Link href="#">21 January, 2020 </Link></li>
                                        <li>/</li>
                                        <li>By Brendan Duke</li>
                                    </ul>
                                    <h4><Link href="/blog-details">A Child Custody Agreement can be Customized</Link></h4>
                                    <Link href="/blog-details" className="read-more-link">Read More<i className="flaticon-right" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 news-block-two">
                            <div className="inner-box">
                                <div className="image">
                                    <Link href="/blog-details"><img className="lazy-image owl-lazy" src="/assets/images-2/news/news-6.jpg" alt="" /></Link>
                                </div>
                                <div className="lower-content">
                                    <div className="category">Marketing</div>
                                    <ul className="post-meta">
                                        <li><Link href="#">04 January, 2020 </Link></li>
                                        <li>/</li>
                                        <li>By Garrett Ford</li>
                                    </ul>
                                    <h4><Link href="/blog-details">Our Law Firm Recognized By US Government</Link></h4>
                                    <Link href="/blog-details" className="read-more-link">Read More<i className="flaticon-right" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
