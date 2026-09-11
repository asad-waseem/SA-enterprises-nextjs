
import VideoPopup from "@/components/elements/VideoPopup"
import Layout from "@/components/layout/Layout"
import TestimonialSlider16 from "@/components/slider/TestimonialSlider16"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="About company" wrapperCls="home_1">
                <div>
                    {/* About Section */}
                    <section className="about-section">
                        <div className="auto-container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="image-block">
                                        <div className="image-one wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms"><div className="image-box"><img className="lazy-image owl-lazy" src="/assets/images/resource/image-5.jpg" alt="" /></div></div>
                                        <div className="image-two wow fadeInLeft" data-wow-delay="300ms" data-wow-duration="1500ms"><div className="image-box"><img className="lazy-image owl-lazy" src="/assets/images/resource/image-4.jpg" alt="" /></div></div>
                                        <div className="logo"><img src="/assets/images/icons/icon-12.png" alt="" /></div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="sec-title">
                                        <h2>Professional and <br /> dedicated consulting services</h2>
                                        <div className="text-decoration">
                                            <span className="left" />
                                            <span className="right" />
                                        </div>
                                        <div className="text">Every pleasures is to welcomed pain avoided owing to the duty the obligations of business it will frequently occur that pleasures have to be repudiated annoyances accepted.</div>
                                    </div>
                                    <div className="text-block">
                                        <h5>Industries Covered</h5>
                                        <h4>Focusing on what we do best</h4>
                                    </div>
                                    <div className="text-block">
                                        <h5>our expertise</h5>
                                        <h4>High level of knowledge </h4>
                                    </div>
                                    <div className="author-box">
                                        <div className="signature"><img src="/assets/images/resource/signature.png" alt="" /></div>
                                        <div className="author-info">
                                            <h4>Franklin Sinatra</h4>
                                            <h5>Manager</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Features Section Six */}
                    <section className="features-section-six">
                        <div className="auto-container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="content">
                                        <div className="sec-title">
                                            <h2>Reason for choosing our <br /> consultancy</h2>
                                            <div className="text-decoration">
                                                <span className="left" />
                                                <span className="right" />
                                            </div>
                                        </div>
                                        <div className="whay-choose-block">
                                            <div className="inner-box">
                                                <div className="icon"><span className="flaticon-bot" /></div>
                                                <h4>Tailored advice and <br /> support</h4>
                                                <div className="text">Business it will frequently occur that pleasures have to repudiated accepted.</div>
                                            </div>
                                        </div>
                                        <div className="whay-choose-block">
                                            <div className="inner-box">
                                                <div className="icon"><span className="flaticon-diamond" /></div>
                                                <h4>Flexibility to serve you <br /> better service</h4>
                                                <div className="text">Complete accounts of the systems and expound <br /> teachings of the great explorers.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="video-box">
                                        <div className="image"><img src="/assets/images/resource/image-49.jpg" alt="" /></div>
                                        <VideoPopup />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Why Choose Us Section Three */}
                    <section className="why-choose-us-section-three">
                        <div className="auto-container">
                            <div className="sec-title text-center">
                                <h2>Our approach to working with our clients <br /> provides significant benefits</h2>
                                <div className="text-decoration">
                                    <span className="left" />
                                    <span className="right" />
                                </div>
                            </div>
                            <div className="wrapper-box">
                                <div className="outer-box">
                                    <div className="row m-0">
                                        <div className="col-lg-4 col-md-6 whay-choose-block">
                                            <div className="inner-box">
                                                <div className="icon"><span className="flaticon-rocket-2" /></div>
                                                <h4>Quick Response</h4>
                                                <div className="text">Businesswill frequently <br /> occur all pleasures have <br /> to accepted.</div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 whay-choose-block">
                                            <div className="inner-box">
                                                <div className="icon"><span className="flaticon-target-1" /></div>
                                                <h4>Experience Team</h4>
                                                <div className="text">Complete accounts of <br /> the system expounds in <br /> teachings great.</div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 whay-choose-block">
                                            <div className="inner-box">
                                                <div className="icon"><span className="flaticon-world-1" /></div>
                                                <h4>Flexible Payment</h4>
                                                <div className="text">To take a trivial example, <br /> which of us ever under- <br /> takes laborious.</div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 whay-choose-block">
                                            <div className="inner-box">
                                                <div className="icon"><span className="flaticon-advice" /></div>
                                                <h4>Tailored advice</h4>
                                                <div className="text">Complete accounts of <br /> the system expounds in <br /> teachings great.</div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 whay-choose-block">
                                            <div className="inner-box">
                                                <div className="icon"><span className="flaticon-medal" /></div>
                                                <h4>Quality Service</h4>
                                                <div className="text">To take a trivial example, <br /> which of us ever under- <br /> takes laborious.</div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 whay-choose-block">
                                            <div className="inner-box">
                                                <div className="icon"><span className="flaticon-agreement" /></div>
                                                <h4>24/7 Support</h4>
                                                <div className="text">Businesswill frequently <br /> occur all pleasures have <br /> to accepted.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Testimonial Section Eleven */}
                    <section className="testimonial-section-eleven">
                        <div className="auto-container">
                            <div className="sec-title light text-center">
                                <h2>Team behind our success</h2>
                                <div className="text-decoration">
                                    <span className="left" />
                                    <span className="right" />
                                </div>
                            </div>
                            <div className="wrapper-box">
                                <div className="client-block">
                                    <div className="content">
                                        <h4>Genentech</h4>
                                        <h5>Nigeria</h5>
                                    </div>
                                    <div className="thumb"><img src="/assets/images/resource/author-thumb-22.jpg" alt="" /></div>
                                </div>
                                <div className="client-block">
                                    <div className="content">
                                        <h4>Adam Clinton</h4>
                                        <h5>Nigeria</h5>
                                    </div>
                                    <div className="thumb"><img src="/assets/images/resource/author-thumb-23.jpg" alt="" /></div>
                                </div>
                                <div className="client-block">
                                    <div className="content">
                                        <h4>Homer Donnie</h4>
                                        <h5>Nigeria</h5>
                                    </div>
                                    <div className="thumb"><img src="/assets/images/resource/author-thumb-24.jpg" alt="" /></div>
                                </div>
                                <div className="client-block">
                                    <div className="content">
                                        <h4>Genentech</h4>
                                        <h5>Nigeria</h5>
                                    </div>
                                    <div className="thumb"><img src="/assets/images/resource/author-thumb-25.jpg" alt="" /></div>
                                </div>
                                <div className="client-block">
                                    <div className="content">
                                        <h4>Jerome Hobert</h4>
                                        <h5>Nigeria</h5>
                                    </div>
                                    <div className="thumb"><img src="/assets/images/resource/author-thumb-26.jpg" alt="" /></div>
                                </div>
                                <div className="client-block">
                                    <div className="content">
                                        <h4>Leonard Melvin</h4>
                                        <h5>Nigeria</h5>
                                    </div>
                                    <div className="thumb"><img src="/assets/images/resource/author-thumb-27.jpg" alt="" /></div>
                                </div>
                                <div className="client-block">
                                    <div className="content">
                                        <h4>Genentech</h4>
                                        <h5>Nigeria</h5>
                                    </div>
                                    <div className="thumb"><img src="/assets/images/resource/author-thumb-28.jpg" alt="" /></div>
                                </div>
                                <img src="/assets/images/resource/map-three.png" alt="" />
                            </div>
                            <div className="testimonial-outer">
                                {/*Testimonial Carousel*/}
                                <TestimonialSlider16 />
                            </div>
                        </div>
                    </section>
                    <section className="team-section-seven">
                        <div className="auto-container">
                            <div className="top-content row m-0 justify-content-between">
                                <div className="sec-title">
                                    <h2>Team behind our success</h2>
                                    <div className="text-decoration">
                                        <span className="left" />
                                        <span className="right" />
                                    </div>
                                </div>
                                <div className="link-btn mb-30 mt-4"><Link href="#" className="theem-btn btn-style-one text-white"><span className="btn-title">ALL MEMBERS</span></Link></div>
                            </div>
                            <div className="row">
                                <div className="team-block-four col-lg-4 col-md-6">
                                    <div className="inner-box">
                                        <div className="image">
                                            <img src="/assets/images/resource/team-9.jpg" alt="" />
                                            <div className="social-links-wrapper">
                                                <div className="icon"><span className="flaticon-share-1" /></div>
                                                <ul className="social-links">
                                                    <li><Link href="#"><span className="fab fa-facebook-f" /></Link></li>
                                                    <li><Link href="#"><span className="fab fa-twitter" /></Link></li>
                                                    <li><Link href="#"><span className="fab fa-google-plus-g" /></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="lower-content">
                                            <div className="author-title">
                                                <h4>Adam Clinton</h4>
                                                <div className="designation">Ceo &amp; Founder</div>
                                            </div>
                                            <div className="text">Same as saying through shrinking toil and cases are perfectly simple except.</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="team-block-four col-lg-4 col-md-6">
                                    <div className="inner-box">
                                        <div className="image">
                                            <img src="/assets/images/resource/team-10.jpg" alt="" />
                                            <div className="social-links-wrapper">
                                                <div className="icon"><span className="flaticon-share-1" /></div>
                                                <ul className="social-links">
                                                    <li><Link href="#"><span className="fab fa-facebook-f" /></Link></li>
                                                    <li><Link href="#"><span className="fab fa-twitter" /></Link></li>
                                                    <li><Link href="#"><span className="fab fa-google-plus-g" /></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="lower-content">
                                            <div className="author-title">
                                                <h4>Homer Donnie</h4>
                                                <div className="designation">Managing Director</div>
                                            </div>
                                            <div className="text">Undertakes laborious physically exercise except to obtain advantage.</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="team-block-four col-lg-4 col-md-6">
                                    <div className="inner-box">
                                        <div className="image">
                                            <img src="/assets/images/resource/team-11.jpg" alt="" />
                                            <div className="social-links-wrapper">
                                                <div className="icon"><span className="flaticon-share-1" /></div>
                                                <ul className="social-links">
                                                    <li><Link href="#"><span className="fab fa-facebook-f" /></Link></li>
                                                    <li><Link href="#"><span className="fab fa-twitter" /></Link></li>
                                                    <li><Link href="#"><span className="fab fa-google-plus-g" /></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="lower-content">
                                            <div className="author-title">
                                                <h4>Jerome Hobert</h4>
                                                <div className="designation">Chief Executive</div>
                                            </div>
                                            <div className="text">How to pursue pleasure rationaly counter that are extremely desires.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Feature Section Two */}
                    <section className="feature-section-two">
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