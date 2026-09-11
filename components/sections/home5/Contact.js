import ContactSlider5 from "@/components/slider/ContactSlider5"


export default function Contact() {
    return (
        <>
            <section className="contact-section-two">
                <div className="auto-container">
                    <div className="sec-title style-four text-center">
                        <h2>Get touch with us</h2>
                        <span className="text-decoration-three" />
                        <div className="text">Which is the same as saying through shrinking from toil and pain. These cases are <br /> perfectly simple and easy to distinguish.</div>
                    </div>
                    <div className="row m-0">
                        <div className="col-lg-8 p-0">
                            <div className="contact-form-area">
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
                                            <textarea name="message" placeholder="Message goes here" />
                                        </div>
                                        <div className="col-md-12 form-group">
                                            <button className="theme-btn btn-style-one" type="submit" name="submit-form"><span className="btn-title">SEND MESSAGE <i className="fa fa-caret-right" /></span> </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-4 p-0">
                            <div className="contact-info-wrapper">
                                <ContactSlider5 />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
