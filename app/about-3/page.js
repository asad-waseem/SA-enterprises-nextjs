
import CounterUp from "@/components/elements/CounterUp"
import Layout from "@/components/layout/Layout"
import TestimonialSlider2 from "@/components/slider/TestimonialSlider2"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="About company" wrapperCls="home_1">
                <div>
                    <section className="about-section-six">
                        <div className="auto-container">
                            <div className="row">
                                <div className="col-lg-6 content-column">
                                    <div className="sec-title">
                                        <h2>Professional and <br /> dedicated consulting services</h2>
                                        <div className="text-decoration">
                                            <span className="left" />
                                            <span className="right" />
                                        </div>
                                        <div className="text">How all this mistaken idea of denouncing pleasure and praising pain was born &amp; we will give you a complete account of the system expound the actual teaching the great explorer. </div>
                                    </div>
                                    <div className="author-box">
                                        <div className="signature"><img src="/assets/images/resource/signature.png" alt="" /></div>
                                        <div className="author-info">
                                            <h4>Franklin Sinatra</h4>
                                            <h5>Manager</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="experience-years-block">
                                        <div className="image">
                                            <img src="/assets/images/resource/image-46.jpg" alt="" />
                                            <h2>14</h2>
                                        </div>
                                        <div className="text">Years <br /> experience</div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="image"><img src="/assets/images/resource/image-45.jpg" alt="" /></div>
                                </div>
                                <div className="col-lg-6">
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
                        </div>
                    </section>
                    {/* Funfacts Section Two */}
                    <section className="funfacts-section-two style-two" style={{ backgroundImage: 'url(assets/images/background/bg-20.jpg)' }}>
                        <div className="auto-container">
                            {/* Fact Counter */}
                            <div className="fact-counter-two">
                                <div className="row">
                                    {/*Column*/}
                                    <div className="column counter-column col-lg-4">
                                        <div className="inner wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                            <div className="icon-box">
                                                <div className="icon"><span className="flaticon-interview" /></div>
                                            </div>
                                            <div className="content">
                                                <div className="counter-title">Projects</div>
                                                <div className="count-outer count-box">
                                                    <CounterUp end={2.5} /><span>K</span>
                                                </div>
                                                <div className="text">Successful Projects</div>
                                                <p>Our Projects</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/*Column*/}
                                    <div className="column counter-column col-lg-4">
                                        <div className="inner wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                            <div className="icon-box">
                                                <div className="icon"><span className="flaticon-boss" /></div>
                                            </div>
                                            <div className="content">
                                                <div className="counter-title">Our Team</div>
                                                <div className="count-outer count-box">
                                                    <CounterUp end={138} /><span>+</span>
                                                </div>
                                                <div className="text">Experienced Staff</div>
                                                <p>Team Members</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/*Column*/}
                                    <div className="column counter-column col-lg-4">
                                        <div className="inner wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                            <div className="icon-box">
                                                <div className="icon"><span className="flaticon-cup" /></div>
                                            </div>
                                            <div className="content">
                                                <div className="counter-title">Happy Clients</div>
                                                <div className="count-outer count-box">
                                                    <CounterUp end={99} /><span>%</span>
                                                </div>
                                                <div className="text">Client Satisfaction</div>
                                                <p>Testimonials</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Services Section five */}
                    <section className="services-section-five style-three">
                        <div className="auto-container">
                            <div className="top-content row m-0 justify-content-between">
                                <div className="sec-title">
                                    <h2>Industries we served</h2>
                                    <div className="text-decoration">
                                        <span className="left" />
                                        <span className="right" />
                                    </div>
                                </div>
                                <div className="text">Which is the same as saying through shrinking from toil and pain <br /> these perfectly simple and easy to distinguish.</div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-md-6 service-block-five">
                                    <div className="inner-box">
                                        <div className="content-box">
                                            <div className="icon"><span className="flaticon-bank" /></div>
                                            <h4>Banking &amp; <br /> capital market</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 service-block-five">
                                    <div className="inner-box">
                                        <div className="content-box">
                                            <div className="icon"><span className="flaticon-insurance" /></div>
                                            <h4>Finance &amp; <br /> insurance market</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 service-block-five">
                                    <div className="inner-box">
                                        <div className="content-box">
                                            <div className="icon"><span className="flaticon-trolley" /></div>
                                            <h4>Logistic &amp; <br />trasportation</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 service-block-five">
                                    <div className="inner-box">
                                        <div className="content-box">
                                            <div className="icon"><span className="flaticon-null-1" /></div>
                                            <h4>Justice &amp; <br /> defence security</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 service-block-five">
                                    <div className="inner-box">
                                        <div className="content-box">
                                            <div className="icon"><span className="flaticon-petroleum" /></div>
                                            <h4>Energy &amp; <br /> resource industry</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 service-block-five">
                                    <div className="inner-box">
                                        <div className="content-box">
                                            <div className="icon"><span className="flaticon-doctor" /></div>
                                            <h4>Life &amp; <br /> health science</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Award Section */}
                    <section className="award-section style-two" style={{ backgroundImage: 'url(assets/images/background/bg-21.jpg)' }}>
                        <div className="auto-container">
                            <div className="row">
                                <div className="col-lg-8">
                                    <div className="sec-title light">
                                        <h2>Our awards and achivements</h2>
                                        <div className="text-decoration">
                                            <span className="left" />
                                            <span className="right" />
                                        </div>
                                        <div className="text">To take a trivial example, which of us ever undertakes laborious physical exercise, except <br />obtain some advantage from it enjoy a pleasure.</div>
                                    </div>
                                    <div className="wrapper-box">
                                        <div className="row">
                                            <div className="col-lg-4 award-block">
                                                <div className="inner-box">
                                                    <div className="image"><img src="/assets/images/resource/award-8.png" alt="" /></div>
                                                    <h4>Best consulting <br /> company</h4>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 award-block">
                                                <div className="inner-box">
                                                    <div className="image"><img src="/assets/images/resource/award-9.png" alt="" /></div>
                                                    <h4>Best outsourcing <br /> advisors</h4>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 award-block">
                                                <div className="inner-box">
                                                    <div className="image"><img src="/assets/images/resource/award-10.png" alt="" /></div>
                                                    <h4>Customer choice for <br /> support</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bottom-text">We have won 27 more awards in our career. <Link href="#">View All Awards <i className="flaticon-right" /></Link></div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Testimonail Section Two */}
                    <section className="testimonial-section-two">
                        <div className="auto-container">
                            <div className="sec-title text-center">
                                <h2>Words from our customers</h2>
                                <div className="text-decoration">
                                    <span className="left" />
                                    <span className="right" />
                                </div>
                            </div>
                            {/*Theme Carousel*/}
                            <TestimonialSlider2 />
                        </div>
                    </section>
                    {/* Client Logo */}
                    <section className="client-section-two style-three">
                        <div className="auto-container">
                            <div className="top-content row m-0 align-items-center justify-content-between">
                                <div className="sec-title">
                                    <h2>We Proud to Work</h2>
                                    <div className="text-decoration">
                                        <span className="left" />
                                        <span className="right" />
                                    </div>
                                </div>
                                <div className="text">Which is the same as saying through shrinking from toil and pain. These cases are <br />perfectly simple and easy to distinguish.</div>
                            </div>
                            <div className="wrapper-box">
                                <div className="outer-box">
                                    <div className="row m-0">
                                        <div className="column col-lg-3 col-md-6">
                                            <div className="image"><img src="/assets/images/resource/client-7.png" alt="" /></div>
                                        </div>
                                        <div className="column col-lg-3 col-md-6">
                                            <div className="image"><img src="/assets/images/resource/client-8.png" alt="" /></div>
                                        </div>
                                        <div className="column col-lg-3 col-md-6">
                                            <div className="image"><img src="/assets/images/resource/client-9.png" alt="" /></div>
                                        </div>
                                        <div className="column col-lg-3 col-md-6">
                                            <div className="image"><img src="/assets/images/resource/client-10.png" alt="" /></div>
                                        </div>
                                        <div className="column col-lg-3 col-md-6">
                                            <div className="image"><img src="/assets/images/resource/client-11.png" alt="" /></div>
                                        </div>
                                        <div className="column col-lg-3 col-md-6">
                                            <div className="image"><img src="/assets/images/resource/client-12.png" alt="" /></div>
                                        </div>
                                        <div className="column col-lg-3 col-md-6">
                                            <div className="image"><img src="/assets/images/resource/client-13.png" alt="" /></div>
                                        </div>
                                        <div className="column col-lg-3 col-md-6">
                                            <div className="image"><img src="/assets/images/resource/client-14.png" alt="" /></div>
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