
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Get in touch" wrapperCls="home_1">
                <div>
                    <section className="heighlight-section">
                        <div className="auto-container">
                            <div className="row">
                                <div className="col-lg-4 heighlight-block">
                                    <div className="inner-box">
                                        <div className="icon"><img src="/assets/images/icons/icon-53.png" alt="" /></div>
                                        <h4>Chat with a live</h4>
                                        <div className="text">Let’s chat with our live experts to get <br /> aanswer your questions.</div>
                                        <div className="link-btn"><Link href="#" className="theme-btn btn-style-two"><span className="btn-title">LIVE CHAT</span></Link></div>
                                    </div>
                                </div>
                                <div className="col-lg-4 heighlight-block">
                                    <div className="inner-box">
                                        <div className="icon"><img src="/assets/images/icons/icon-54.png" alt="" /></div>
                                        <h4>Become a partner</h4>
                                        <div className="text">Become a business partner with us and <br /> get an opportunity to grow.</div>
                                        <div className="link-btn"><Link href="#" className="theme-btn btn-style-two"><span className="btn-title">JOIN WITH US</span></Link></div>
                                    </div>
                                </div>
                                <div className="col-lg-4 heighlight-block">
                                    <div className="inner-box">
                                        <div className="icon"><img src="/assets/images/icons/icon-40.png" alt="" /></div>
                                        <h4>Customer FAQ’s</h4>
                                        <div className="text">You can find the answers in our list of <br /> frequently asked questions. </div>
                                        <div className="link-btn"><Link href="#" className="theme-btn btn-style-two"><span className="btn-title">LIVE CHAT</span></Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Contact Form Section Two */}
                    <section className="contact-form-section-two">
                        <div className="auto-container">
                            <div className="sec-title text-center">
                                <h2>Send your message to us</h2>
                                <div className="text-decoration">
                                    <span className="left" />
                                    <span className="right" />
                                </div>
                            </div>
                            <form method="post" action="sendemail.php" className="contact-form">
                                <div className="row">
                                    <div className="col-lg-4 col-md-6 form-group">
                                        <input type="text" name="firstname" placeholder="First Name" required />
                                    </div>
                                    <div className="col-lg-4 col-md-6 form-group">
                                        <input type="text" name="lastname" placeholder="Last Name" required />
                                    </div>
                                    <div className="col-lg-4 col-md-6 form-group">
                                        <input type="email" name="email" placeholder="Email Address" required />
                                    </div>
                                    <div className="col-lg-4 col-md-6 form-group">
                                        <input type="text" name="phone" placeholder="Phone" required />
                                    </div>
                                    <div className="col-lg-4 col-md-6 form-group">
                                        <input type="text" name="website" placeholder="Website" required />
                                    </div>
                                    <div className="col-lg-4 col-md-6 form-group">
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
                                        <div className="text-center">
                                            <button className="theme-btn btn-style-one" type="submit" name="submit-form"><span className="btn-title">SEND MESSAGE</span></button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </section>
                    {/* Contact Details Section Four */}
                    <section className="contact-details-section-four pt-0">
                        <div className="auto-container">
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