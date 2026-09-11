

export default function Contact() {
    return (
        <>
            <section className="contact-section-home15" style={{ backgroundImage: 'url(assets/images-4/background/contact-bg.jpg)' }}>
                <div className="auto-container">
                    <div className="sec-title-four text-center">
                        <h2>We’d Love to Here For You</h2>
                    </div>
                    <div className="form-inner">
                        <form action="contact" method="post">
                            <div className="row clearfix">
                                <div className="col-g-6 col-md-6 col-sm-12 column">
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input type="text" name="name" placeholder="Enter your name" required />
                                    </div>
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input type="email" name="email" placeholder="Enter email address" required />
                                    </div>
                                    <div className="form-group">
                                        <label>Phone</label>
                                        <input type="text" name="phone" placeholder="Phone num" required />
                                    </div>
                                </div>
                                <div className="col-g-6 col-md-6 col-sm-12 column">
                                    <div className="form-group">
                                        <label>Message</label>
                                        <textarea name="message" placeholder="Write someting ..." />
                                    </div>
                                    <div className="form-group">
                                        <button className="theme-btn btn-style-ten"><span className="btn-title">Send Message</span></button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}
