import Link from "next/link"


export default function News() {
    return (
        <>
            <section className="news-home-7">
                <div className="auto-container">
                    <div className="sec-title text-center">
                        <h4>Blog Post</h4>
                        <h2>Latest News &amp; Updates</h2>
                        <div className="text-decoration">
                            <span className="left" />
                            <span className="right" />
                        </div>
                    </div>
                    <div className="row clearfix">
                        <div className="col-lg-4 col-md-6">
                            <div className="news-block-one style-two">
                                <div className="inner-box">
                                    <div className="row m-0 justify-content-between">
                                        <div className="date"><strong>14</strong>February <br />2020</div>
                                        <div className="author">
                                            <div className="title">Brendan Duke </div><img src="/assets/images/resource/author-thumb-1.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div className="category">Business</div>
                                    <h4><Link href="/blog-details">How to Manage Business’s <br /> Online Reputation</Link></h4>
                                    <div className="read-more-btn"><Link href="/blog-details"><i className="flaticon-right" />Read More</Link></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="news-block-one style-two">
                                <div className="inner-box">
                                    <div className="row m-0 justify-content-between">
                                        <div className="date"><strong>21</strong>January <br />2020</div>
                                        <div className="author">
                                            <div className="title">Raana irave </div><img src="/assets/images/resource/author-thumb-2.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div className="category">Projects</div>
                                    <h4><Link href="/blog-details">Is Your Business Ready For <br /> Integration?</Link></h4>
                                    <div className="read-more-btn"><Link href="/blog-details"><i className="flaticon-right" />Read More</Link></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="news-block-one style-two">
                                <div className="inner-box">
                                    <div className="row m-0 justify-content-between">
                                        <div className="date"><strong>08</strong>January <br />2020</div>
                                        <div className="author">
                                            <div className="title">Raana irave </div><img src="/assets/images/resource/author-thumb-3.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div className="category">Marketing</div>
                                    <h4><Link href="/blog-details">That Should You Include In <br />Your Marketing Plan</Link>
                                    </h4>
                                    <div className="read-more-btn"><Link href="/blog-details"><i className="flaticon-right" />Read More</Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
