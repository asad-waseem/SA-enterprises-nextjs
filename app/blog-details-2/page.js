
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} wrapperCls="home_1">
                <section className="sidebar-page-container">
                    <div className="auto-container">
                        <div className="row">
                            <div className="col-lg-12 content-side">
                                <div className="blog-single-post">
                                    <div className="top-content">
                                        <div className="image"><img src="/assets/images/resource/news-42.jpg" alt="" /></div>
                                    </div>
                                    <div className="lower-content">
                                        <div className="category">Business</div>
                                        <ul className="post-meta">
                                            <li><Link href="#">14 February, 2020</Link></li>
                                            <li>/</li>
                                            <li>By Raana irave </li>
                                            <li>/</li>
                                            <li><i className="far fa-comment-alt" />2 Comments</li>
                                        </ul>
                                        <div className="title">
                                            <h1>How to manage business’s online reputation</h1>
                                        </div>
                                        <div className="text">“On the other hand, we denounce with righteous, indignation and dislike men who are so beguiled and demoralized by charms pleasure of the moment, so blinded by desire. that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through power.”</div>
                                        <h3>First, we make it work. Then we make it last.</h3>
                                        <div className="text">
                                            <p>“On the other hand, we denounce with righteous, indignation and dislike men who are so beguiled and demoralized by charms pleasure of the moment, so blinded by desire. that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through power.”</p><p>In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed pain avoided but in certain circum- stances owing to the claims take a trivial example.</p><p>Who are so beguiled and demoralized by <Link href="#">charms pleasure of the moment,</Link> blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue and equal.</p>
                                        </div>
                                        <div className="image"><img src="/assets/images/resource/news-35.jpg" alt="" /></div>
                                        <blockquote>“ Works together with Envolver consulting firms active in USA. <br />Globally we work with more than 150 leading consulting firms and with a select number of partners. ”</blockquote>
                                        <div className="text">
                                            <p>Their through weakness will shrinking duty the obligations of business it will frequently occur that pleasures, have to repudiated annoyances accepted the wise man therefore always holds in these matters this principle selection rejects  greater pleasures.</p>
                                            <p>Find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one avoids pain that produces no resultant teachings of the great explorer of the truth.</p>
                                        </div>
                                        <div className="row py-4">
                                            <div className="col-md-3 col-sm-6 mb-4"><img src="/assets/images/resource/news-36.jpg" alt="" /></div>
                                            <div className="col-md-3 col-sm-6 mb-4"><img src="/assets/images/resource/news-37.jpg" alt="" /></div>
                                            <div className="col-md-3 col-sm-6 mb-4"><img src="/assets/images/resource/news-38.jpg" alt="" /></div>
                                            <div className="col-md-3 col-sm-6 mb-4"><img src="/assets/images/resource/news-39.jpg" alt="" /></div>
                                        </div>
                                        <h3>Leading your business to evolution</h3>
                                        <div className="text">
                                            <p>Who are so beguiled and demoralized by charms pleasure of the moment, blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue and equal.</p>
                                            <p>How all this mistaken idea of denouncing pleasure and praising pain was born and we will give you  complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, but because those who do not know.</p>
                                            <p>Praising pain was born and we will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itselfrationally encounter consequences.</p>
                                        </div>
                                        <ul className="tag">
                                            <li><Link href="#">#Analytics</Link></li>
                                            <li><Link href="#">#Consult</Link></li>
                                            <li><Link href="#">#Data</Link></li>
                                            <li><Link href="#">#Industry</Link></li>
                                        </ul>
                                        <div className="share-icon">
                                            <h5>Share this post with your friends</h5>
                                            <ul className="social-links">
                                                <li><Link href="#" className="facebook"><i className="fab fa-facebook-f" />Facebook</Link></li>
                                                <li><Link href="#" className="twitter"><i className="fab fa-twitter" />Twiter</Link></li>
                                                <li><Link href="#" className="linkedin"><i className="fab fa-linkedin-in" />Linkedin</Link></li>
                                                <li><Link href="#" className="pinterest"><i className="fab fa-pinterest-p" />Pinterest</Link></li>
                                            </ul>
                                        </div>
                                        {/* Post Author */}
                                        <div className="author-box">
                                            <div className="image"><img src="/assets/images/resource/author-thumb-13.jpg" alt="" /></div>
                                            <h4>Paul Anderson</h4>
                                            <h5><Link href="#">Visit: http://my.blog.com</Link></h5>
                                            <div className="text">Denouncing pleasure and praising pain was born and I will give you a work complete all account of the system and expound.</div>
                                            <ul className="social-links clearfix">
                                                <li><Link href="#"><span className="fab fa-facebook-f" /></Link></li>
                                                <li><Link href="#"><span className="fab fa-twitter" /></Link></li>
                                                <li><Link href="#"><span className="fab fa-google-plus-g" /></Link></li>
                                                <li><Link href="#"><span className="fab fa-skype" /></Link></li>
                                            </ul>
                                        </div>
                                        {/* Blog Post Pagination */}
                                        <div className="blog-post-pagination">
                                            <div className="clearfix">
                                                <div className="float-left prev-post">
                                                    <Link href="#"><i className="flaticon-right" /> Prev Post</Link>
                                                    <div className="image-box">
                                                        <img src="/assets/images/resource/news-40.jpg" alt="" />
                                                        <h4>How to Manage Business <br /> Online Reputation</h4>
                                                    </div>
                                                </div>
                                                <div className="float-right next-post">
                                                    <Link href="#">Next Post <i className="flaticon-right" /> </Link>
                                                    <div className="image-box">
                                                        <img src="/assets/images/resource/news-41.jpg" alt="" />
                                                        <h4>Is your Business Ready for <br /> Integration?</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Comments */}
                                        <div className="comments-area">
                                            <h3>Comments</h3>
                                            {/*Comment Box*/}
                                            <div className="comment-box">
                                                <div className="comment">
                                                    <div className="author-thumb"><img src="/assets/images/resource/author-thumb-14.jpg" alt="" /></div>
                                                    <div className="comment-inner">
                                                        <div className="comment-info">Steven Rich, <span className="date">February 28, 2020 [ 11.00am]</span></div>
                                                        <div className="text">On the other hand, we denounce with righteous indignation  dislike men which toil and some great pleasure.</div>
                                                        <Link className="reply-comment-btn" href="#"> Reply</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*Comment Box*/}
                                            <div className="comment-box reply-comment">
                                                <div className="comment">
                                                    <div className="author-thumb"><img src="/assets/images/resource/author-thumb-15.jpg" alt="" /></div>
                                                    <div className="comment-inner">
                                                        <div className="comment-info">William Cobus, <span className="date">February 28, 2020 [11.12am]</span></div>
                                                        <div className="text">Our power of choice is untrammelled and when nothing prevents able to do what we like best is to be welcomed.</div>
                                                        <Link className="reply-comment-btn" href="#"> Reply</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*Comment Box*/}
                                            <div className="comment-box">
                                                <div className="comment">
                                                    <div className="author-thumb"><img src="/assets/images/resource/author-thumb-16.jpg" alt="" /></div>
                                                    <div className="comment-inner">
                                                        <div className="comment-info">Boris Elbert, <span className="date">February 27, 2020 [ 06.00pm]</span></div>
                                                        <div className="text">These cases are perfectly simple and easy to distinguish. In a free hour, of choice is untrammelled and when nothing prevents.</div>
                                                        <Link className="reply-comment-btn" href="#">Reply</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="comment-form">
                                            <h3>Leave a Reply</h3>
                                            <form method="post" action="contact">
                                                <div className="row clearfix">
                                                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                        <input type="text" name="username" placeholder="Your Name" required />
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                        <input type="email" name="email" placeholder="Your Email" required />
                                                    </div>
                                                    <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                                        <textarea name="message" placeholder="Comment" />
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <div className="note"><input type="checkbox" />Save my name &amp; email in this browser for the next time I comment.</div>
                                                    </div>
                                                    <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                                        <button className="theme-btn btn-style-one" type="submit" name="submit-form"><span className="btn-title">Post Comment</span></button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
            </Layout>
        </>
    )
}