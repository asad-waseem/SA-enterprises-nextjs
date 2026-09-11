'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
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
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Get in touch" wrapperCls="home_1">
                <div>
                    <section className="contact-details-section-two">
                        <div className="auto-container">
                            <div className="sec-title text-center">
                                <h2>We’d love to help you</h2>
                                <div className="text">Please feel free to get in touch using the form below. We'd love to hear your <br /> thoughts &amp; answer any questions you may have!</div>
                                <div className="text-decoration">
                                    <span className="left" />
                                    <span className="right" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 contact-info-block-two">
                                    <div className="inner-box">
                                        <div className="icon"><img src="/assets/images/icons/icon-50.png" alt="" /></div>
                                        <h4>Houston</h4>
                                        <ul>
                                            <li>3333 Raleigh St, Houston, <br /> TX 77021, USA.</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-4 contact-info-block-two">
                                    <div className="inner-box">
                                        <div className="icon"><img src="/assets/images/icons/icon-51.png" alt="" /></div>
                                        <h4>Call us on</h4>
                                        <ul>
                                            <li><Link href="tel:+18005554400">+1 800 555 44 00 (Toll free)</Link></li>
                                            <li><Link href="tel:+321556667890">+321 55 666 7890</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-4 contact-info-block-two">
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
                            <div className="bottom-text">Chat with a live expert to answer your questions,  <Link href="#">Live Chat <i className="flaticon-right" /></Link></div>
                        </div>
                    </section>
                    {/* Contact Section Style Five */}
                    <section className="contact-section style-five">
                        <div className="auto-container">
                            <div className="row m-0">
                                <div className="col-lg-6 left-column" style={{ backgroundImage: 'url(assets/images/background/bg-22.jpg)' }}>
                                    <div className="inner-container">
                                        <div className="wrapper-box">
                                            <div className="sec-title light">
                                                <h2>New case? <br /> Send message us</h2>
                                                <div className="text-decoration">
                                                    <span className="left" />
                                                    <span className="right" />
                                                </div>
                                                <div className="text">Just send us your questions or concerns to <br /> starting a new project.</div>
                                            </div>
                                            <div className="author-box">
                                                <div className="image"><img src="/assets/images/resource/author-thumb-12.jpg" alt="" /></div>
                                                <h4>Have a Question?</h4>
                                                <div className="phone-numer">+888 445 55 678 &amp; 89</div>
                                            </div>
                                            <ul className="list">
                                                <li>Monday - Friday:</li>
                                                <li>9.00 - 6.00</li>
                                                <li>Sunday &amp; Public Holidays (Closed)</li>
                                            </ul>
                                            <Link href="#" className="read-more-link">Request a Call Back <i className="flaticon-right" /></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 right-column" style={{ backgroundImage: 'url(assets/images/background/bg-23.jpg)' }}>
                                    <div className="inner-container">
                                        <div className="contact-form-box">
                                            <form method="post" action="sendemail.php" className="contact-form">
                                                <div className="row">
                                                    <div className="col-md-6 form-group">
                                                        <input type="text" name="firstname" placeholder="First Name" required />
                                                    </div>
                                                    <div className="col-md-6 form-group">
                                                        <input type="text" name="lastname" placeholder="Last Name" required />
                                                    </div>
                                                    <div className="col-md-6 form-group">
                                                        <input type="email" name="email" placeholder="Email Address" required />
                                                    </div>
                                                    <div className="col-md-6 form-group">
                                                        <input type="text" name="phone" placeholder="Phone" required />
                                                    </div>
                                                    <div className="col-md-12 form-group">
                                                        <select className="custom-select" name="subject">
                                                            <option value="*">Discusss about</option>
                                                            <option value=".category-1">Business Aproach</option>
                                                            <option value=".category-2">Trades &amp; Stock Market</option>
                                                            <option value=".category-3">Strategy &amp; Planning</option>
                                                            <option value=".category-4">Software &amp; Research</option>
                                                            <option value=".category-5">Support &amp; Maintenance</option>
                                                        </select>
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
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Faq Section Four */}
                    <section className="faq-section-four">
                        <div className="auto-container">
                            <div className="sec-title text-center">
                                <h2>Find answers in our <br /> list of frequently asked questions </h2>
                                <div className="text-decoration">
                                    <span className="left" />
                                    <span className="right" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-8 offset-lg-2">
                                    <ul className="accordion-box style-two mb-30">
                                        {/*Accordion Block*/}
                                        <li className="accordion block">
                                            <div className={isActive.key == 1 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(1)}><div className="icon-outer"><span className="icon icon_plus flaticon-right" /> <span className="icon icon_minus flaticon-right" /></div>01.   What does you do?</div>
                                            <div className={isActive.key == 1 ? "acc-content current" : "acc-content"}>
                                                <div className="content">
                                                    <div className="text">Same as saying through shrinking from toil and pain these actual teachings of the great explorer of the truth, the master builder of human happiness.
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        {/*Accordion Block*/}
                                        <li className="accordion block">
                                            <div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(2)}><div className="icon-outer"><span className="icon icon_plus flaticon-right" /> <span className="icon icon_minus flaticon-right" /></div>02.  What industries covered?</div>
                                            <div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
                                                <div className="content">
                                                    <div className="text">Same as saying through shrinking from toil and pain these actual teachings of the great explorer of the truth, the master builder of human happiness.
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        {/*Accordion Block*/}
                                        <li className="accordion block">
                                            <div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(3)}><div className="icon-outer"><span className="icon icon_plus flaticon-right" /> <span className="icon icon_minus flaticon-right" /></div>03.  How do you price?</div>
                                            <div className={isActive.key == 3 ? "acc-content current" : "acc-content"}>
                                                <div className="content">
                                                    <div className="text">Same as saying through shrinking from toil and pain these actual teachings of the great explorer of the truth, the master builder of human happiness.
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
                </div>

            </Layout>
        </>
    )
}