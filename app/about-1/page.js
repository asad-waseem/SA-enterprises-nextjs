'use client'
import CounterUp from "@/components/elements/CounterUp"
import Layout from "@/components/layout/Layout"
import AwardSlider1 from '@/components/slider/AwardSlider1'
import Link from "next/link"
import { useState } from 'react'
import ReactCurvedText from 'react-curved-text'
import ModalVideo from 'react-modal-video'
export default function Home() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="About company" wrapperCls="home_1">
                <section className="about-section-seven">
                    <div className="auto-container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="image-block">
                                    <div className="image-box"><img className="lazy-image owl-lazy" src="/assets/images/resource/image-48.jpg" alt="" /></div>
                                    <div className="video-box">
                                        <a onClick={() => setOpen(true)} className="overlay-link lightbox-image video-fancybox ripple"><span className="play-icon flaticon-play" />
                                            <ReactCurvedText width='180'
                                                height='180'
                                                cx='90'
                                                cy='90'
                                                rx='60'
                                                ry='60'
                                                startOffset='0'
                                                reversed={true}
                                                text='World’s #1 Consultancy . Works where it matters'
                                                textProps={{ "style": { "fontSize": "18" } }}
                                                textPathProps={{ "fill": "#ffffff" }}
                                                tspanProps={null}
                                                ellipseProps={null}
                                                svgProps={null}
                                            />
                                        </a>
                                    </div>
                                    <div className="shape-one"><img src="/assets/images/shape/shape-19.png" alt="" /></div>
                                    <div className="shape-two"><img src="/assets/images/shape/shape-20.png" alt="" /></div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="sec-title">
                                    <h2>Creating a Business with <br /> Authentic Integrity</h2>
                                    <div className="text-decoration">
                                        <span className="left" />
                                        <span className="right" />
                                    </div>
                                </div>
                                <div className="text-block">
                                    <div className="text">Our power of choices is untrammelled and when nothing prevents to do what we like best principle of selection.</div>
                                    <h4>Client Focused</h4>
                                    <div className="text">Every pleasures is to welcomed pain avoided owing to the duty the obligations of business it will frequently occur that pleasures have be repudiated and annoyances accepted.</div>
                                </div>
                                <div className="author-box">
                                    <div className="author-info">
                                        <img src="/assets/images/resource/author-thumb-4.jpg" alt="" />
                                        <h4>Franklin Sinatra</h4>
                                        <h5>Manager</h5>
                                    </div>
                                    <div className="signature"><img src="/assets/images/resource/signature.png" alt="" /></div>
                                </div>
                                <div className="bottom-content">
                                    <h5>Do you need further assistance?</h5>
                                    <form action="#">
                                        <div className="form-group">
                                            <input type="email" placeholder="Enter your email..." />
                                            <button className="theme-btn btn-style-one"><span className="btn-title">START HERE</span></button>
                                        </div>
                                    </form>
                                    <div className="phone-number">or make a call to <Link href="#">+888 445 55 678</Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Timeline Section */}
                <section className="timeline-section">
                    <div className="sec-bg" style={{ backgroundImage: 'url(assets/images/background/bg-28.jpg)' }} />
                    <div className="auto-container">
                        <div className="sec-title text-center light">
                            <h2>It's an overview of our company <br /> in past 14 years</h2>
                            <div className="text-decoration">
                                <span className="left" />
                                <span className="right" />
                            </div>
                        </div>
                        <div className="wrapper-box">
                            <ul className="timeline-block">
                                <li>
                                    <div className="shape"><img src="/assets/images/shape/shape-21.png" alt="" /></div>
                                    <div className="date">Aug 14, 2016</div>
                                    <h4>Started in Houston</h4>
                                    <div className="text"> Blinded by desire thety cannot forese belongs to which through shrinking. </div>
                                    <div className="link"><Link href="#" className="theme-btn"><i className="flaticon-right" /></Link></div>
                                </li>
                                <li>
                                    <div className="shape"><img src="/assets/images/shape/shape-21.png" alt="" /></div>
                                    <div className="date">Jan 01, 2017</div>
                                    <h4>Our First Big Project</h4>
                                    <div className="text"> To take a trivial example, which of  undertakes physical exercise some advantage.</div>
                                    <div className="link"><Link href="#" className="theme-btn"><i className="flaticon-right" /></Link></div>
                                </li>
                                <li>
                                    <div className="shape"><img src="/assets/images/shape/shape-21.png" alt="" /></div>
                                    <div className="date">Mar 06, 2017</div>
                                    <h4>International Branch</h4>
                                    <div className="text">Right to find fault with a man who chooses to enjoy a pleasure that has no annoying.</div>
                                    <div className="link"><Link href="#" className="theme-btn"><i className="flaticon-right" /></Link></div>
                                </li>
                                <li>
                                    <div className="shape"><img src="/assets/images/shape/shape-21.png" alt="" /></div>
                                    <div className="date">Nov 25, 2017</div>
                                    <h4>Company of the Year</h4>
                                    <div className="text">Denouncing pleasure and praising pain was born &amp; we will give you a completed.</div>
                                    <div className="link"><Link href="#" className="theme-btn"><i className="flaticon-right" /></Link></div>
                                </li>
                                <li>
                                    <div className="shape"><img src="/assets/images/shape/shape-21.png" alt="" /></div>
                                    <div className="date">Feb 21, 2018</div>
                                    <h4>100 Project Milestone</h4>
                                    <div className="text">To take a trivial example, which of  undertakes physical exercise some advantage.</div>
                                    <div className="link"><Link href="#" className="theme-btn"><i className="flaticon-right" /></Link></div>
                                </li>
                                <li>
                                    <div className="shape"><img src="/assets/images/shape/shape-21.png" alt="" /></div>
                                    <div className="date">May 02, 2018</div>
                                    <h4>Best Employee Award</h4>
                                    <div className="text">Right to find fault with a man who chooses enjoy too pleasure that has no annoying.</div>
                                    <div className="link"><Link href="#" className="theme-btn"><i className="flaticon-right" /></Link></div>
                                </li>
                                <li>
                                    <div className="shape"><img src="/assets/images/shape/shape-21.png" alt="" /></div>
                                    <div className="link"><Link href="#" className="read-more-btn">Click to Read More<i className="flaticon-right" /></Link></div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                {/* Experience Section Two */}
                <section className="experience-section-two" style={{ backgroundImage: 'url(assets/images/background/bg-29.jpg)' }}>
                    <div className="auto-container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="wrapper-box">
                                    <h2>Our Experience</h2>
                                    <div className="column counter-column">
                                        <div className="inner wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                            <div className="content">
                                                <div className="counter-title">Projects</div>
                                                <div className="count-outer count-box">
                                                    <CounterUp end={2.5} /><span>K</span>
                                                </div>
                                                <div className="text">Successful Projects</div>
                                                <Link href="#"><i className="flaticon-right" />Our Projects</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="column counter-column">
                                        <div className="inner wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                            <div className="content">
                                                <div className="counter-title">Happy Clients</div>
                                                <div className="count-outer count-box">
                                                    <CounterUp end={99} /><span>%</span>
                                                </div>
                                                <div className="text">Client Satisfaction</div>
                                                <Link href="#"><i className="flaticon-right" />Testimonials</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="sec-title light">
                                    <h2>Financially smart. <br /> Our service from the heart</h2>
                                    <div className="text-decoration">
                                        <span className="left" />
                                        <span className="right" />
                                    </div>
                                </div>
                                {/*Progress Levels*/}
                                <div className="progress-levels">
                                    {/*Skill Box*/}
                                    <div className="progress-box wow fadeIn" data-wow-delay="100ms" data-wow-duration="1500ms">
                                        <h5>Finance</h5>
                                        <div className="inner">
                                            <div className="bar">
                                                <div className="bar-innner"><div className="bar-fill" style={{ width: '62%' }}><div className="percent" /></div></div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*Skill Box*/}
                                    <div className="progress-box wow fadeIn" data-wow-delay="100ms" data-wow-duration="1500ms">
                                        <h5>Business</h5>
                                        <div className="inner">
                                            <div className="bar">
                                                <div className="bar-innner"><div className="bar-fill" style={{ width: '89%' }}><div className="percent" /></div></div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*Skill Box*/}
                                    <div className="progress-box wow fadeIn" data-wow-delay="100ms" data-wow-duration="1500ms">
                                        <h5>Investment</h5>
                                        <div className="inner">
                                            <div className="bar">
                                                <div className="bar-innner"><div className="bar-fill" style={{ width: '75%' }}><div className="percent" /></div></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Testimonial Section Six  */}
                <section className="testimonial-section-six">
                    <div className="auto-container">
                        <div className="sec-title style-four text-center">
                            <h2>Our projects make uniqueness <br /> from others</h2>
                            <span className="text-decoration-three" />
                        </div>
                        <div className="wrapper-box">
                            <div className="pointer-block">
                                <div className="content">
                                    <div className="logo"><img src="/assets/images/resource/client-22.png" alt="" /></div>
                                    <div className="text">“I love Envolve; everyone has been great to work with and you’re all great partner for company, we thank you.”</div>
                                    <h4>Boris Elbert, <span>Managing Director</span></h4>
                                </div>
                                <div className="point"><span /></div>
                            </div>
                            <div className="pointer-block">
                                <div className="content">
                                    <div className="logo"><img src="/assets/images/resource/client-22.png" alt="" /></div>
                                    <div className="text">“I love Envolve; everyone has been great to work with and you’re all great partner for company, we thank you.”</div>
                                    <h4>Boris Elbert, <span>Managing Director</span></h4>
                                </div>
                                <div className="point" />
                            </div>
                            <div className="pointer-block">
                                <div className="content">
                                    <div className="logo"><img src="/assets/images/resource/client-22.png" alt="" /></div>
                                    <div className="text">“I love Envolve; everyone has been great to work with and you’re all great partner for company, we thank you.”</div>
                                    <h4>Boris Elbert, <span>Managing Director</span></h4>
                                </div>
                                <div className="point" />
                            </div>
                            <div className="pointer-block">
                                <div className="content">
                                    <div className="logo"><img src="/assets/images/resource/client-22.png" alt="" /></div>
                                    <div className="text">“I love Envolve; everyone has been great to work with and you’re all great partner for company, we thank you.”</div>
                                    <h4>Boris Elbert, <span>Managing Director</span></h4>
                                </div>
                                <div className="point" />
                            </div>
                            <div className="pointer-block">
                                <div className="content">
                                    <div className="logo"><img src="/assets/images/resource/client-22.png" alt="" /></div>
                                    <div className="text">“I love Envolve; everyone has been great to work with and you’re all great partner for company, we thank you.”</div>
                                    <h4>Boris Elbert, <span>Managing Director</span></h4>
                                </div>
                                <div className="point" />
                            </div>
                            <div className="pointer-block">
                                <div className="content">
                                    <div className="logo"><img src="/assets/images/resource/client-22.png" alt="" /></div>
                                    <div className="text">“I love Envolve; everyone has been great to work with and you’re all great partner for company, we thank you.”</div>
                                    <h4>Boris Elbert, <span>Managing Director</span></h4>
                                </div>
                                <div className="point" />
                            </div>
                            <div className="pointer-block">
                                <div className="content">
                                    <div className="logo"><img src="/assets/images/resource/client-22.png" alt="" /></div>
                                    <div className="text">“I love Envolve; everyone has been great to work with and you’re all great partner for company, we thank you.”</div>
                                    <h4>Boris Elbert, <span>Managing Director</span></h4>
                                </div>
                                <div className="point" />
                            </div>
                            <div className="pointer-block">
                                <div className="content">
                                    <div className="logo"><img src="/assets/images/resource/client-22.png" alt="" /></div>
                                    <div className="text">“I love Envolve; everyone has been great to work with and you’re all great partner for company, we thank you.”</div>
                                    <h4>Boris Elbert, <span>Managing Director</span></h4>
                                </div>
                                <div className="point" />
                            </div>
                            <div className="pointer-block">
                                <div className="content">
                                    <div className="logo"><img src="/assets/images/resource/client-22.png" alt="" /></div>
                                    <div className="text">“I love Envolve; everyone has been great to work with and you’re all great partner for company, we thank you.”</div>
                                    <h4>Boris Elbert, <span>Managing Director</span></h4>
                                </div>
                                <div className="point" />
                            </div>
                            <img src="/assets/images/resource/testimonial-bg.png" alt="" />
                        </div>
                    </div>
                </section>
                {/* Team Section Six */}
                <section className="team-section-six">
                    <div className="auto-container">
                        <div className="sec-top row m-0 justify-content-md-between">
                            <div className="sec-title light">
                                <h2>Our experienced team</h2>
                                <div className="text-decoration">
                                    <span className="left" />
                                    <span className="right" />
                                </div>
                            </div>
                            <div className="text">To provide business planning and marketing services our being <br /> able to do what we like best.</div>
                        </div>
                        <div className="row">
                            <div className="team-block-three col-lg-3 col-md-6">
                                <div className="inner-box">
                                    <div className="image"><img src="/assets/images/resource/team-1.jpg" alt="" /></div>
                                    <div className="content">
                                        <div className="author-title">
                                            <h4>Adam Clinton</h4>
                                            <div className="designation">Ceo &amp; Founder</div>
                                        </div>
                                        <ul className="social-links">
                                            <li><Link href="#"><span className="fab fa-facebook-f" /></Link></li>
                                            <li><Link href="#"><span className="fab fa-twitter" /></Link></li>
                                            <li><Link href="#"><span className="fab fa-google-plus-g" /></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="team-block-three col-lg-3 col-md-6">
                                <div className="inner-box">
                                    <div className="image"><img src="/assets/images/resource/team-2.jpg" alt="" /></div>
                                    <div className="content">
                                        <div className="author-title">
                                            <h4>Homer Donnie</h4>
                                            <div className="designation">Managing Director</div>
                                        </div>
                                        <ul className="social-links">
                                            <li><Link href="#"><span className="fab fa-facebook-f" /></Link></li>
                                            <li><Link href="#"><span className="fab fa-twitter" /></Link></li>
                                            <li><Link href="#"><span className="fab fa-google-plus-g" /></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="team-block-three col-lg-3 col-md-6">
                                <div className="inner-box">
                                    <div className="image"><img src="/assets/images/resource/team-3.jpg" alt="" /></div>
                                    <div className="content">
                                        <div className="author-title">
                                            <h4>Jerome Hobert</h4>
                                            <div className="designation">donnie@Envolve.com</div>
                                        </div>
                                        <ul className="social-links">
                                            <li><Link href="#"><span className="fab fa-facebook-f" /></Link></li>
                                            <li><Link href="#"><span className="fab fa-twitter" /></Link></li>
                                            <li><Link href="#"><span className="fab fa-google-plus-g" /></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="team-block-three col-lg-3 col-md-6">
                                <div className="inner-box">
                                    <div className="image"><img src="/assets/images/resource/team-4.jpg" alt="" /></div>
                                    <div className="content">
                                        <div className="author-title">
                                            <h4>Leonard Melvin</h4>
                                            <div className="designation">Marketing Officer</div>
                                        </div>
                                        <ul className="social-links">
                                            <li><Link href="#"><span className="fab fa-facebook-f" /></Link></li>
                                            <li><Link href="#"><span className="fab fa-twitter" /></Link></li>
                                            <li><Link href="#"><span className="fab fa-google-plus-g" /></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="team-block-three col-lg-3 col-md-6">
                                <div className="inner-box">
                                    <div className="image"><img src="/assets/images/resource/team-5.jpg" alt="" /></div>
                                    <div className="content">
                                        <div className="author-title">
                                            <h4>Jerome Hobert</h4>
                                            <div className="designation">donnie@Envolve.com</div>
                                        </div>
                                        <ul className="social-links">
                                            <li><Link href="#"><span className="fab fa-facebook-f" /></Link></li>
                                            <li><Link href="#"><span className="fab fa-twitter" /></Link></li>
                                            <li><Link href="#"><span className="fab fa-google-plus-g" /></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="team-block-three col-lg-3 col-md-6">
                                <div className="inner-box">
                                    <div className="image"><img src="/assets/images/resource/team-6.jpg" alt="" /></div>
                                    <div className="content">
                                        <div className="author-title">
                                            <h4>Leonard Melvin</h4>
                                            <div className="designation">Marketing Officer</div>
                                        </div>
                                        <ul className="social-links">
                                            <li><Link href="#"><span className="fab fa-facebook-f" /></Link></li>
                                            <li><Link href="#"><span className="fab fa-twitter" /></Link></li>
                                            <li><Link href="#"><span className="fab fa-google-plus-g" /></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="team-block-three col-lg-3 col-md-6">
                                <div className="inner-box">
                                    <div className="image"><img src="/assets/images/resource/team-7.jpg" alt="" /></div>
                                    <div className="content">
                                        <div className="author-title">
                                            <h4>Adam Clinton</h4>
                                            <div className="designation">Ceo &amp; Founder</div>
                                        </div>
                                        <ul className="social-links">
                                            <li><Link href="#"><span className="fab fa-facebook-f" /></Link></li>
                                            <li><Link href="#"><span className="fab fa-twitter" /></Link></li>
                                            <li><Link href="#"><span className="fab fa-google-plus-g" /></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="team-block-three col-lg-3 col-md-6">
                                <div className="inner-box">
                                    <div className="image"><img src="/assets/images/resource/team-8.jpg" alt="" /></div>
                                    <div className="content">
                                        <div className="author-title">
                                            <h4>Homer Donnie</h4>
                                            <div className="designation">Managing Director</div>
                                        </div>
                                        <ul className="social-links">
                                            <li><Link href="#"><span className="fab fa-facebook-f" /></Link></li>
                                            <li><Link href="#"><span className="fab fa-twitter" /></Link></li>
                                            <li><Link href="#"><span className="fab fa-google-plus-g" /></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Award Section Three */}
                <section className="award-section-three">
                    <div className="auto-container">
                        <div className="sec-title text-center">
                            <h2>Our awards and achivements</h2>
                            <div className="text-decoration">
                                <span className="left" />
                                <span className="right" />
                            </div>
                        </div>
                        <div className="row">
                            <AwardSlider1 />
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


                <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="vfhzo499OeA" onClose={() => setOpen(false)} />
            </Layout>
        </>
    )
}


