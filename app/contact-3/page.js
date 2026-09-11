'use client'
import { useState } from 'react'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
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
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Get in touch" wrapperCls="home_1">
                <div>
                    <section className="contact-details-section-three">
                        <div className="auto-container">
                            <div className="row sec-top">
                                <div className="col-lg-5">
                                    <div className="sec-title">
                                        <h2>We’d love to help you</h2>
                                        <div className="text-decoration">
                                            <span className="left" />
                                            <span className="right" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="text mb-30">Don’t hesitate to contact us, We’d love to help you. Our customer <br /> support team will work 24/7.</div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="outer-box">
                                        <div className="contact-info-block-three">
                                            <div className="inner-box">
                                                <div className="icon"><img src="/assets/images/icons/icon-50.png" alt="" /></div>
                                                <h4>Houston</h4>
                                                <ul>
                                                    <li>3333 Raleigh St, Houston, <br /> TX 77021, USA.</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="contact-info-block-three">
                                            <div className="inner-box">
                                                <div className="icon"><img src="/assets/images/icons/icon-51.png" alt="" /></div>
                                                <h4>Call us on</h4>
                                                <ul>
                                                    <li><Link href="tel:+18005554400">+1 800 555 44 00 (Toll free)</Link></li>
                                                    <li><Link href="tel:+321556667890">+321 55 666 7890</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="contact-info-block-three">
                                            <div className="inner-box">
                                                <div className="icon"><img src="/assets/images/icons/icon-52.png" alt="" /></div>
                                                <h4>Mail at</h4>
                                                <ul>
                                                    <li><Link href="mailto:supportteam@Envolve.com">supportteam@Envolve.com</Link></li>
                                                    <li><Link href="mailto:career@Envolve.com">career@Envolve.com</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-8">
                                    <div className="wrapper-box ml-lg-5">
                                        <div className="pointer-block">
                                            <div className="content">
                                                <div className="text">3333 Raleigh St, Houston, <br />TX 77021, USA.</div>
                                            </div>
                                            <div className="point"><span /></div>
                                        </div>
                                        <div className="pointer-block">
                                            <div className="content">
                                                <div className="text">3333 Raleigh St, Houston, <br />TX 77021, USA.</div>
                                            </div>
                                            <div className="point"><span /></div>
                                        </div>
                                        <div className="pointer-block">
                                            <div className="content">
                                                <div className="text">3333 Raleigh St, Houston, <br />TX 77021, USA.</div>
                                            </div>
                                            <div className="point"><span /></div>
                                        </div>
                                        <div className="pointer-block">
                                            <div className="content">
                                                <div className="text">3333 Raleigh St, Houston, <br />TX 77021, USA.</div>
                                            </div>
                                            <div className="point"><span /></div>
                                        </div>
                                        <img src="/assets/images/resource/map-two.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Faq Section Five */}
                    <section className="faq-section-five">
                        <div className="pattern" style={{ backgroundImage: 'url(assets/images/shape/pattern-13.png)' }} />
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
                </div>

            </Layout>
        </>
    )
}