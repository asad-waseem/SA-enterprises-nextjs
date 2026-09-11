
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Testimonials" wrapperCls="home_1">
                <div>
                    <section className="testimonial-section-eight">
                        <div className="auto-container">
                            <div className="row">
                                <div className="col-lg-8 testimonial-block-four">
                                    <div className="inner-box">
                                        <div className="row m-0">
                                            <div className="image"><img src="/assets/images/resource/image-20.jpg" alt="" /></div>
                                            <div className="content">
                                                <div className="icon-box">
                                                    <div className="icon"><img src="/assets/images/icons/icon-61.png" alt="" /></div>
                                                    <h4>Best Service Ever, We <br />Highly Recommend!</h4>
                                                </div>
                                                <div className="text">“Envolve’s analysts have done an excellent job presenting the analysis &amp; insights. we are confident that they have helped move our business forward.”</div>
                                                <div className="rating">
                                                    <span className="flaticon-star" />
                                                    <span className="flaticon-star" />
                                                    <span className="flaticon-star" />
                                                    <span className="flaticon-star" />
                                                    <span className="flaticon-star" />
                                                </div>
                                                <div className="author-title">Boris Elbert, <span className="designation">Developer Blue Soft.</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 image-block"><div className="image"><img src="/assets/images/resource/image-21.jpg" alt="" /></div></div>
                                <div className="col-lg-4 image-block"><div className="image"><img src="/assets/images/resource/image-41.jpg" alt="" /></div></div>
                                <div className="col-lg-8 testimonial-block-four">
                                    <div className="inner-box">
                                        <div className="row m-0">
                                            <div className="image"><img src="/assets/images/resource/image-42.jpg" alt="" /></div>
                                            <div className="content">
                                                <div className="icon-box">
                                                    <div className="icon"><img src="/assets/images/icons/icon-61.png" alt="" /></div>
                                                    <h4>Pleasure to work with <br /> your team.</h4>
                                                </div>
                                                <div className="text">“Envolve’s analysts have done an excellent job presenting the analysis &amp; insights. we are confident that they have helped move our business forward.”</div>
                                                <div className="rating">
                                                    <span className="flaticon-star" />
                                                    <span className="flaticon-star" />
                                                    <span className="flaticon-star" />
                                                    <span className="flaticon-star" />
                                                    <span className="flaticon-star" />
                                                </div>
                                                <div className="author-title">Ivor Herbert, <span className="designation">Manager Airlines</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-8 testimonial-block-four">
                                    <div className="inner-box">
                                        <div className="row m-0">
                                            <div className="image"><img src="/assets/images/resource/image-43.jpg" alt="" /></div>
                                            <div className="content">
                                                <div className="icon-box">
                                                    <div className="icon"><img src="/assets/images/icons/icon-61.png" alt="" /></div>
                                                    <h4>Your efforts have been <br /> invaluable.</h4>
                                                </div>
                                                <div className="text">“Just wanted to let you know that your Sr. Analyst did a tremendous job pulling things off over the last few days for the Sr. Management meeting.</div>
                                                <div className="rating">
                                                    <span className="flaticon-star" />
                                                    <span className="flaticon-star" />
                                                    <span className="flaticon-star" />
                                                    <span className="flaticon-star" />
                                                    <span className="flaticon-star" />
                                                </div>
                                                <div className="author-title">Fleix Everard,  <span className="designation">HR, Blue Soft Sol</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 image-block"><div className="image"><img src="/assets/images/resource/image-44.jpg" alt="" /></div></div>
                            </div>
                        </div>
                    </section>
                    {/* Meet Up Section */}
                    <section className="meet-up-section" style={{ backgroundImage: 'url(assets/images/background/bg-10.jpg)' }}>
                        <div className="auto-container">
                            <div className="content-box">
                                <div className="icon"><span className="flaticon-team-1" /></div>
                                <h3>Start Here</h3>
                                <h1>Never Give up</h1>
                                <div className="text">96 Queen Park, Los Vegas 88901, USA</div>
                                <ul>
                                    <li><Link href="tel:+1800555440055"><i className="flaticon-phone" />+1 800 555 44 00 &amp; 55</Link></li>
                                    <li><Link href="mailto:support@Envolve.com"><i className="flaticon-mail-1" />support@Envolve.com</Link></li>
                                </ul>
                                <div className="link-btn"><Link href="#" className="theme-btn btn-style-two"><span className="btn-title">APPOINTMENT <i className="flaticon-right" /></span></Link></div>
                            </div>
                        </div>
                    </section>
                </div>

            </Layout>
        </>
    )
}