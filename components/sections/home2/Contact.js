import Link from "next/link"


export default function Contact() {
    return (
        <>
            <section className="contact-section">
                <div className="pattern" style={{ backgroundImage: 'url(assets/images/shape/pattern-7.png)' }} />
                <div className="auto-container">
                    <div className="top-content">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="wrapper-box">
                                    <div className="sec-title style-two">
                                        <h4><span className="flaticon-endless" />Contact Us</h4>
                                        <h2>Start a New Case? Contact <br /> Our Experts</h2>
                                        <div className="text">Just send us your questions or concerns by starting a new case &amp; <br /> we will give you the help you need. Start Here...</div>
                                    </div>
                                    <div className="author-box">
                                        <div className="image"><img src="/assets/images/resource/author-thumb-8.jpg" alt="" /></div>
                                        <h4>Have a Question?</h4>
                                        <div className="phone-numer">+888 445 55 678 &amp; 89</div>
                                    </div>
                                    <ul className="list">
                                        <li>Monday - Friday:</li>
                                        <li>9.00 - 6.00</li>
                                        <li>Sunday &amp; Public Holidays (Closed)</li>
                                    </ul>
                                    <Link href="#" className="read-more-link">Request a Call Back</Link>
                                </div>
                            </div>
                            <div className="col-lg-6">
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
                                            <button className="theme-btn btn-style-four" type="submit" name="submit-form"><span className="btn-title">Send Message</span></button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    {/* Subscribe Newsletter */}
                    <div className="subscribe-newsletter">
                        <div className="sec-title style-two light text-center">
                            <h4><span className="flaticon-endless" />Subscribe Us</h4>
                            <h2>Newsletter Subscription</h2>
                            <div className="text">Subscribe us and get news, offers and all updates in Envolve to  your inbox directly</div>
                        </div>
                        <form action="#">
                            <div className="form-group">
                                <i className="flaticon-mail" />
                                <input type="text" placeholder="Enter your email address..." />
                                <button type="submit" className="btn-style-four"><span className="btn-title">Subscribe Us</span></button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}
