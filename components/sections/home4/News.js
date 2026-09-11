import Link from "next/link"


export default function News() {
    return (
        <>
            <section className="news-section-five">
                <div className="auto-container">
                    <div className="sec-title light text-center">
                        <h2>Latest news &amp; updates</h2>
                        <span className="text-decoration-two" />
                    </div>
                    <div className="row">
                        <div className="news-block-five col-lg-4">
                            <div className="inner-box" style={{ backgroundImage: 'url(assets/images/resource/news-11.jpg)' }}>
                                <div className="row m-0 justify-content-between">
                                    <div className="date"><strong>14</strong>February <br />2020</div>
                                    <div className="author"><div className="title">Brendan Duke </div><img src="/assets/images/resource/author-thumb-9.jpg" alt="" /></div>
                                </div>
                                <div className="category">Business</div>
                                <h4><Link href="/blog-details">How to Manage Business’s <br />Online Reputation</Link></h4>
                                <div className="row m-0 justify-content-between align-items-center">
                                    <div className="read-more-btn"><Link href="/blog-details">Read More <i className="fa fa-caret-right" /></Link></div>
                                    <div className="comments"><Link href="#"><i className="flaticon-blog" />02 Cmts</Link></div>
                                </div>
                            </div>
                        </div>
                        <div className="news-block-five col-lg-4">
                            <div className="inner-box" style={{ backgroundImage: 'url(assets/images/resource/news-11.jpg)' }}>
                                <div className="row m-0 justify-content-between">
                                    <div className="date"><strong>21</strong>January <br />2020</div>
                                    <div className="author"><div className="title">Raana irave </div><img src="/assets/images/resource/author-thumb-10.jpg" alt="" /></div>
                                </div>
                                <div className="category">Projects</div>
                                <h4><Link href="/blog-details">Is Your Business Ready For <br />Integration?</Link></h4>
                                <div className="row m-0 justify-content-between align-items-center">
                                    <div className="read-more-btn"><Link href="/blog-details">Read More <i className="fa fa-caret-right" /></Link></div>
                                    <div className="comments"><Link href="#"><i className="flaticon-blog" />02 Cmts</Link></div>
                                </div>
                            </div>
                        </div>
                        <div className="news-block-five col-lg-4">
                            <div className="inner-box" style={{ backgroundImage: 'url(assets/images/resource/news-11.jpg)' }}>
                                <div className="row m-0 justify-content-between">
                                    <div className="date"><strong>08</strong>January <br />2020</div>
                                    <div className="author"><div className="title">Raana irave </div><img src="/assets/images/resource/author-thumb-11.jpg" alt="" /></div>
                                </div>
                                <div className="category">Marketing</div>
                                <h4><Link href="/blog-details">That Should You Include In <br />Your Marketing Plan</Link></h4>
                                <div className="row m-0 justify-content-between align-items-center">
                                    <div className="read-more-btn"><Link href="/blog-details">Read More <i className="fa fa-caret-right" /></Link></div>
                                    <div className="comments"><Link href="#"><i className="flaticon-blog" />02 Cmts</Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
