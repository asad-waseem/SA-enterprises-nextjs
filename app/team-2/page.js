'use client'
import Layout from "@/components/layout/Layout"
import { useState } from 'react'
export default function Home() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} wrapperCls="home_1">

                <section className="page-title pb-0" style={{ backgroundImage: 'url(assets/images/background/bg-19.jpg)' }}>
                    <div className="auto-container">
                        <div className="content-box">
                            <div className="content-wrapper">
                                <div className="title">
                                    <h1>Team Members</h1>
                                </div>
                                <ul className="bread-crumb clearfix">
                                    <li><a href="index.html">Home</a></li>
                                    <li>Team 02</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="team-section-four">
                        <div className="auto-container">
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
                                                <li><a href="#"><span className="fab fa-facebook-f" /></a></li>
                                                <li><a href="#"><span className="fab fa-twitter" /></a></li>
                                                <li><a href="#"><span className="fab fa-google-plus-g" /></a></li>
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
                                                <li><a href="#"><span className="fab fa-facebook-f" /></a></li>
                                                <li><a href="#"><span className="fab fa-twitter" /></a></li>
                                                <li><a href="#"><span className="fab fa-google-plus-g" /></a></li>
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
                                                <li><a href="#"><span className="fab fa-facebook-f" /></a></li>
                                                <li><a href="#"><span className="fab fa-twitter" /></a></li>
                                                <li><a href="#"><span className="fab fa-google-plus-g" /></a></li>
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
                                                <li><a href="#"><span className="fab fa-facebook-f" /></a></li>
                                                <li><a href="#"><span className="fab fa-twitter" /></a></li>
                                                <li><a href="#"><span className="fab fa-google-plus-g" /></a></li>
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
                                                <li><a href="#"><span className="fab fa-facebook-f" /></a></li>
                                                <li><a href="#"><span className="fab fa-twitter" /></a></li>
                                                <li><a href="#"><span className="fab fa-google-plus-g" /></a></li>
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
                                                <li><a href="#"><span className="fab fa-facebook-f" /></a></li>
                                                <li><a href="#"><span className="fab fa-twitter" /></a></li>
                                                <li><a href="#"><span className="fab fa-google-plus-g" /></a></li>
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
                                                <li><a href="#"><span className="fab fa-facebook-f" /></a></li>
                                                <li><a href="#"><span className="fab fa-twitter" /></a></li>
                                                <li><a href="#"><span className="fab fa-google-plus-g" /></a></li>
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
                                                <li><a href="#"><span className="fab fa-facebook-f" /></a></li>
                                                <li><a href="#"><span className="fab fa-twitter" /></a></li>
                                                <li><a href="#"><span className="fab fa-google-plus-g" /></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="faq-section-three">
                    <div className="auto-container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="contact-form-area">
                                    <div className="top-content">
                                        <h3>Send your message</h3>
                                        <div className="text">Please feel free to get in touch using the form below. We'd love to hear for you.</div>
                                    </div>
                                    <form method="post" action="sendemail.php" className="contact-form">
                                        <div className="row">
                                            <div className="col-md-12 form-group">
                                                <input type="text" name="firstname" placeholder="First Name" required />
                                            </div>
                                            <div className="col-md-12 form-group">
                                                <input type="email" name="email" placeholder="Email Address" required />
                                            </div>
                                            <div className="col-md-12 form-group">
                                                <input type="text" name="phone" placeholder="Phone" required />
                                            </div>
                                            <div className="col-md-12 form-group">
                                                <textarea name="message" placeholder="Message goes here" />
                                            </div>
                                            <div className="col-md-12 form-group">
                                                <button className="theme-btn btn-style-one" type="submit" name="submit-form"><span className="btn-title">Send Message</span></button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="sec-title">
                                    <h2>Find answers in our list <br /> of frequently asked questions </h2>
                                    <div className="text-decoration">
                                        <span className="left" />
                                        <span className="right" />
                                    </div>
                                </div>
                                <ul className="accordion-box style-three mb-30">
                                    {/*Accordion Block*/}
                                    <li className="accordion block">
                                        <div className={isActive.key == 1 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(1)}><div className="icon-outer"><span className="icon icon_plus flaticon-right" /> <span className="icon icon_minus flaticon-right" /></div>01.   What does you do?</div>
                                        <div className={isActive.key == 1 ? "acc-content current" : "acc-content"}>
                                            <div className="content">
                                                <div className="text">Same as saying through shrinking from toil and pain these cases are perfectly simple and easy to distinguish.
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    {/*Accordion Block*/}
                                    <li className="accordion block">
                                        <div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(2)}><div className="icon-outer"><span className="icon icon_plus flaticon-right" /> <span className="icon icon_minus flaticon-right" /></div>02.  What industries covered?</div>
                                        <div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
                                            <div className="content">
                                                <div className="text">Same as saying through shrinking from toil and pain these cases are perfectly simple and easy to distinguish.
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    {/*Accordion Block*/}
                                    <li className="accordion block">
                                        <div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(3)}><div className="icon-outer"><span className="icon icon_plus flaticon-right" /> <span className="icon icon_minus flaticon-right" /></div>03.  How do you price?</div>
                                        <div className={isActive.key == 3 ? "acc-content current" : "acc-content"}>
                                            <div className="content">
                                                <div className="text">Same as saying through shrinking from toil and pain these cases are perfectly simple and easy to distinguish.
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    {/*Accordion Block*/}
                                    <li className="accordion block">
                                        <div className={isActive.key == 4 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(4)}><div className="icon-outer"><span className="icon icon_plus flaticon-right" /> <span className="icon icon_minus flaticon-right" /></div>03.  How do you price?</div>
                                        <div className={isActive.key == 4 ? "acc-content current" : "acc-content"}>
                                            <div className="content">
                                                <div className="text">Same as saying through shrinking from toil and pain these cases are perfectly simple and easy to distinguish.
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    {/* End Block */}
                                </ul>
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


            </Layout>
        </>
    )
}