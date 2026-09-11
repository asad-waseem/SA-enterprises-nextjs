import Link from "next/link"


export default function Blog() {
    return (
        <>
            <section className="blog-section-eight">
                <div className="auto-container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="news-section-eight_title">
                                <div className="sec-title style-eight">
                                    <h4>News &amp; Updates</h4>
                                    <h2>Latest From Our News Room</h2>
                                </div>
                                <div className="btn-box">
                                    <Link href="#" className="theme-btn btn-style-eight"><span className="btn-title">More
                                        News</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {/*Start Single blog Style1*/}
                        <div className="col-xl-4 col-lg-4">
                            <div className="news-block-eight wow fadeInUp" data-wow-duration="1500ms">
                                <div className="img-holder">
                                    <div className="inner">
                                        <img src="/assets/images-3/blog/blog-v8-1.jpg" alt="" />
                                        <div className="overlay-icon">
                                            <Link href="#"><span className="icon-plus" /></Link>
                                        </div>
                                    </div>
                                    <div className="categories-box bgclr1">
                                        <p>Business</p>
                                    </div>
                                </div>
                                <div className="text-holder">
                                    <ul className="meta-info">
                                        <li>14 February, 2021</li>
                                        <li><Link href="#">By Raana irave</Link></li>
                                    </ul>
                                    <h3 className="blog-title">
                                        <Link href="/blog-single">How to Manage Business’s Online Reputation</Link>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        {/*End Single blog Style1*/}
                        {/*Start Single blog Style1*/}
                        <div className="col-xl-4 col-lg-4">
                            <div className="news-block-eight wow fadeInUp" data-wow-duration="1500ms">
                                <div className="img-holder">
                                    <div className="inner">
                                        <img src="/assets/images-3/blog/blog-v8-2.jpg" alt="" />
                                        <div className="overlay-icon">
                                            <Link href="#"><span className="icon-plus" /></Link>
                                        </div>
                                    </div>
                                    <div className="categories-box bgclr1">
                                        <p>Projects</p>
                                    </div>
                                </div>
                                <div className="text-holder">
                                    <ul className="meta-info">
                                        <li>14 February, 2021</li>
                                        <li><Link href="#">By Brendan Duke</Link></li>
                                    </ul>
                                    <h3 className="blog-title">
                                        <Link href="/blog-single">A Child Custody Agreement can be Customized</Link>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        {/*End Single blog Style1*/}
                        {/*Start Single blog Style1*/}
                        <div className="col-xl-4 col-lg-4">
                            <div className="news-block-eight wow fadeInUp" data-wow-duration="1500ms">
                                <div className="img-holder">
                                    <div className="inner">
                                        <img src="/assets/images-3/blog/blog-v8-3.jpg" alt="" />
                                        <div className="overlay-icon">
                                            <Link href="#"><span className="icon-plus" /></Link>
                                        </div>
                                    </div>
                                    <div className="categories-box bgclr1">
                                        <p>Marketing</p>
                                    </div>
                                </div>
                                <div className="text-holder">
                                    <ul className="meta-info">
                                        <li>14 February, 2021</li>
                                        <li><Link href="#">By Raana irave</Link></li>
                                    </ul>
                                    <h3 className="blog-title">
                                        <Link href="/blog-single">Our Law Firm Recognized By US Government</Link>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        {/*End Single blog Style1*/}
                    </div>
                </div>
            </section>
        </>
    )
}
