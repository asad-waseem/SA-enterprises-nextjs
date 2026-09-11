
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Blog List View" wrapperCls="home_1">
                <div>
                    <section className="sidebar-page-container">
                        <div className="pattern" style={{ backgroundImage: 'url(assets/images/background/bg-24.jpg)' }} />
                        <div className="auto-container">
                            <div className="row">
                                <div className="col-lg-8 offset-lg-2">
                                    {/* News Block */}
                                    <div className="news-block-one style-two">
                                        <div className="row m-0">
                                            <div className="col-md-6 p-0">
                                                <div className="image"><Link href="/blog-details"><img className="lazy-image owl-lazy" src="/assets/images/resource/news-21.jpg" alt="" /></Link></div>
                                            </div>
                                            <div className="col-md-6 p-0">
                                                <div className="inner-box">
                                                    <div className="row m-0 justify-content-between">
                                                        <div className="date"><strong>14</strong>February <br />2020</div>
                                                        <div className="author"><div className="title">Brendan Duke </div><img src="/assets/images/resource/author-thumb-1.jpg" alt="" /></div>
                                                    </div>
                                                    <div className="category">Business</div>
                                                    <h4><Link href="/blog-details">How to Manage Business’s <br /> Online Reputation</Link></h4>
                                                    <div className="read-more-btn"><Link href="/blog-details">Continue reading <i>&gt;&gt;</i></Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* News Block */}
                                    <div className="news-block-one style-two">
                                        <div className="row m-0">
                                            <div className="col-md-6 p-0">
                                                <div className="image"><Link href="/blog-details"><img className="lazy-image owl-lazy" src="/assets/images/resource/news-22.jpg" alt="" /></Link></div>
                                            </div>
                                            <div className="col-md-6 p-0">
                                                <div className="inner-box">
                                                    <div className="row m-0 justify-content-between">
                                                        <div className="date"><strong>21</strong>January <br />2020</div>
                                                        <div className="author"><div className="title">Raana irave </div><img src="/assets/images/resource/author-thumb-2.jpg" alt="" /></div>
                                                    </div>
                                                    <div className="category">Projects</div>
                                                    <h4><Link href="/blog-details">Is Your Business Ready For <br /> Integration?</Link></h4>
                                                    <div className="read-more-btn"><Link href="/blog-details">Continue reading <i>&gt;&gt;</i></Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* News Block */}
                                    <div className="news-block-one style-two">
                                        <div className="row m-0">
                                            <div className="col-md-6 p-0">
                                                <div className="image"><Link href="/blog-details"><img className="lazy-image owl-lazy" src="/assets/images/resource/news-23.jpg" alt="" /></Link></div>
                                            </div>
                                            <div className="col-md-6 p-0">
                                                <div className="inner-box">
                                                    <div className="row m-0 justify-content-between">
                                                        <div className="date"><strong>08</strong>January <br />2020</div>
                                                        <div className="author"><div className="title">Raana irave </div><img src="/assets/images/resource/author-thumb-3.jpg" alt="" /></div>
                                                    </div>
                                                    <div className="category">Marketing</div>
                                                    <h4><Link href="/blog-details">That Should You Include In <br />Your Marketing Plan</Link></h4>
                                                    <div className="read-more-btn"><Link href="/blog-details">Continue reading <i>&gt;&gt;</i></Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* News Block */}
                                    <div className="news-block-one style-two">
                                        <div className="row m-0">
                                            <div className="col-md-6 p-0">
                                                <div className="image"><Link href="/blog-details"><img className="lazy-image owl-lazy" src="/assets/images/resource/news-24.jpg" alt="" /></Link></div>
                                            </div>
                                            <div className="col-md-6 p-0">
                                                <div className="inner-box">
                                                    <div className="row m-0 justify-content-between">
                                                        <div className="date"><strong>14</strong>February <br />2020</div>
                                                        <div className="author"><div className="title">Brendan Duke </div><img src="/assets/images/resource/author-thumb-1.jpg" alt="" /></div>
                                                    </div>
                                                    <div className="category">Business</div>
                                                    <h4><Link href="/blog-details">How to Manage Business’s <br /> Online Reputation</Link></h4>
                                                    <div className="read-more-btn"><Link href="/blog-details">Continue reading <i>&gt;&gt;</i></Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* News Block */}
                                    <div className="news-block-one style-two">
                                        <div className="row m-0">
                                            <div className="col-md-6 p-0">
                                                <div className="image"><Link href="/blog-details"><img className="lazy-image owl-lazy" src="/assets/images/resource/news-25.jpg" alt="" /></Link></div>
                                            </div>
                                            <div className="col-md-6 p-0">
                                                <div className="inner-box">
                                                    <div className="row m-0 justify-content-between">
                                                        <div className="date"><strong>21</strong>January <br />2020</div>
                                                        <div className="author"><div className="title">Raana irave </div><img src="/assets/images/resource/author-thumb-2.jpg" alt="" /></div>
                                                    </div>
                                                    <div className="category">Projects</div>
                                                    <h4><Link href="/blog-details">Is Your Business Ready For <br />Integration?</Link></h4>
                                                    <div className="read-more-btn"><Link href="/blog-details">Continue reading <i>&gt;&gt;</i></Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* News Block */}
                                    <div className="news-block-one style-two">
                                        <div className="row m-0">
                                            <div className="col-md-6 p-0">
                                                <div className="image"><Link href="/blog-details"><img className="lazy-image owl-lazy" src="/assets/images/resource/news-26.jpg" alt="" /></Link></div>
                                            </div>
                                            <div className="col-md-6 p-0">
                                                <div className="inner-box">
                                                    <div className="row m-0 justify-content-between">
                                                        <div className="date"><strong>08</strong>January <br />2020</div>
                                                        <div className="author"><div className="title">Raana irave </div><img src="/assets/images/resource/author-thumb-3.jpg" alt="" /></div>
                                                    </div>
                                                    <div className="category">Marketing</div>
                                                    <h4><Link href="/blog-details">That Should You Include In <br />Your Marketing Plan</Link></h4>
                                                    <div className="read-more-btn"><Link href="/blog-details">Continue reading <i>&gt;&gt;</i></Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pagination-wrapper text-center">
                                <ul className="pagination clearfix">
                                    <li><Link href="#"><i className="fas fa-angle-left" /></Link></li>
                                    <li><Link href="#" className="active">1</Link></li>
                                    <li><Link href="#">2</Link></li>
                                    <li><Link href="#"><i className="fas fa-angle-right" /></Link></li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    {/* sidebar-page-container end */}
                    {/* Feature Section Two */}
                    <section className="feature-section-two mt-0">
                        <div className="auto-container">
                            <div className="row">
                                <div className="col-lg-6 feature-block-two style-two">
                                    <div className="shape-box">
                                        <div className="inner-box">
                                            <div className="icon"><img src="/assets/images/icons/icon-9.png" alt="" /></div>
                                            <h4>Become a Partner of Envolve</h4>
                                            <div className="text">To take a trivial example, which of us undertakes <br />laborious physical exercise.</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 feature-block-two style-two">
                                    <div className="shape-box">
                                        <div className="inner-box">
                                            <div className="icon"><img src="/assets/images/icons/icon-10.png" alt="" /></div>
                                            <h4>Career Opportunities in Envolve</h4>
                                            <div className="text">Who chooses to enjoy a pleasure that has no one <br />annoying consequences.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

            </Layout>
        </>
    )
}