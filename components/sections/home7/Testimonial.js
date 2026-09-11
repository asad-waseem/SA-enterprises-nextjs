import TestimonialSlider7 from "@/components/slider/TestimonialSlider7"


export default function Testimonial() {
    return (
        <>
            <section className="testimonial-home-7" style={{ backgroundImage: 'url(assets/images-2/background/testimonial-bg-2.jpg)' }}>
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="col-lg-6 col-md-12 inner-column">
                            <div className="form-inner">
                                <div className="consult-form">
                                    <div className="sec-title">
                                        <h4>Make an Appointment</h4>
                                        <h2>Request for Consultation</h2>
                                        <div className="text-decoration">
                                            <span className="left" />
                                            <span className="right" />
                                        </div>
                                    </div>
                                    <form method="post" action="sendemail.php" className="contact-form">
                                        <div className="row clearfix">
                                            <div className="col-md-6 form-group">
                                                <input type="text" name="username" placeholder="Your Name" required />
                                            </div>
                                            <div className="col-md-6 form-group">
                                                <input type="email" name="email" placeholder="Email Address" required />
                                            </div>
                                            <div className="col-md-6 form-group">
                                                <input type="text" name="phone" placeholder="Phone" required />
                                            </div>
                                            <div className="col-md-6 form-group">
                                                <select className="custom-select" name="subject">
                                                    <option value="*">Audit &amp; Asurance</option>
                                                    <option value=".category-1">Business Aproach</option>
                                                    <option value=".category-2">Trades &amp; Stock Market</option>
                                                    <option value=".category-3">Strategy &amp; Planning</option>
                                                    <option value=".category-4">Software &amp; Research</option>
                                                    <option value=".category-5">Support &amp; Maintenance</option>
                                                </select>
                                            </div>
                                            <div className="col-md-6 form-group">
                                                <button className="theme-btn btn-style-four" type="submit" name="submit-form"><span className="btn-title">Send request</span></button>
                                            </div>
                                            <div className="col-md-6 form-group">
                                                <button className="theme-btn btn-style-three" type="submit" name="submit-form"><i className="far fa-calendar-alt" />For flexible
                                                    schedule</button>
                                            </div>
                                        </div>
                                    </form>
                                    <div className="more-text">
                                        <p><span>*</span>Know which types of insurance match your business.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 inner-column">
                            <div className="testimonial-inner">
                                <div className="testimonial-content">
                                    <span className="quote-text">q</span>
                                    <TestimonialSlider7 />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
