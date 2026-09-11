import Link from "next/link"


export default function News() {
    return (
        <>
            <section className="news-section-home15">
                <div className="auto-container">
                    <div className="sec-title-four light text-center">
                        <h2>Latest news &amp; updates</h2>
                    </div>
                    <div className="row clearfix">
                        <div className="col-lg-4 col-md-6 col-sm-12 news-column">
                            <div className="news-block wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="bg-layer" style={{ backgroundImage: 'url(assets/images-4/news/news-4.jpg)' }} />
                                    <div className="upper">
                                        <div className="post-date clearfix">
                                            <h2>14</h2>
                                            <span>February <br />2020</span>
                                        </div>
                                        <figure className="post-thumb"><img src="/assets/images-4/news/post-thumb-1.jpg" alt="" /></figure>
                                    </div>
                                    <div className="category"><Link href="/blog-details">Business</Link></div>
                                    <div className="title">
                                        <div className="line" style={{ backgroundImage: 'url(assets/images-4/shape/shape-2.png)' }} />
                                        <h3><Link href="/blog-details">How to Manage Business’s Online Reputation</Link></h3>
                                    </div>
                                    <div className="lower-box">
                                        <Link href="/blog-details" className="link"><i className="customicon-right-chevron" />Read More</Link>
                                        <Link href="/blog-details" className="comment"><i className="customicon-blogging" />02 Cmts</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 news-column">
                            <div className="news-block wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="bg-layer" style={{ backgroundImage: 'url(assets/images-4/news/news-4.jpg)' }} />
                                    <div className="upper">
                                        <div className="post-date clearfix">
                                            <h2>21</h2>
                                            <span>January <br />2020</span>
                                        </div>
                                        <figure className="post-thumb"><img src="/assets/images-4/news/post-thumb-2.jpg" alt="" /></figure>
                                    </div>
                                    <div className="category"><Link href="/blog-details">Projects</Link></div>
                                    <div className="title">
                                        <div className="line" style={{ backgroundImage: 'url(assets/images-4/shape/shape-2.png)' }} />
                                        <h3><Link href="/blog-details">Is Your Business Ready For Integration?</Link></h3>
                                    </div>
                                    <div className="lower-box">
                                        <Link href="/blog-details" className="link"><i className="customicon-right-chevron" />Read More</Link>
                                        <Link href="/blog-details" className="comment"><i className="customicon-blogging" />05 Cmts</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 news-column">
                            <div className="news-block wow fadeInUp" data-wow-delay="600ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="bg-layer" style={{ backgroundImage: 'url(assets/images-4/news/news-4.jpg)' }} />
                                    <div className="upper">
                                        <div className="post-date clearfix">
                                            <h2>08</h2>
                                            <span>January <br />2020</span>
                                        </div>
                                        <figure className="post-thumb"><img src="/assets/images-4/news/post-thumb-3.jpg" alt="" /></figure>
                                    </div>
                                    <div className="category"><Link href="/blog-details">Marketing</Link></div>
                                    <div className="title">
                                        <div className="line" style={{ backgroundImage: 'url(assets/images-4/shape/shape-2.png)' }} />
                                        <h3><Link href="/blog-details">That Should You Include In Your Marketing Plan</Link></h3>
                                    </div>
                                    <div className="lower-box">
                                        <Link href="/blog-details" className="link"><i className="customicon-right-chevron" />Read More</Link>
                                        <Link href="/blog-details" className="comment"><i className="customicon-blogging" />03 Cmts</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
