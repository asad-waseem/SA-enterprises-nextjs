

export default function Contact() {
    return (
        <>
            <section className="contact-home-6" style={{ backgroundImage: 'url(assets/images-2/background/contact-bg.jpg)' }}>
                <div className="auto-container">
                    <div className="sec-title style-four text-center light">
                        <h2>We’d Love to Here For You</h2>
                        <span className="text-decoration-four" />
                    </div>
                    <div className="form-inner">
                        <form action="contact-1" method="post" className="default-form">
                            <div className="row clearfix">
                                <div className="col-lg-6 col-md-6">
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
                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                        <label>Message</label>
                                        <textarea name="message" placeholder="Write someting ..." />
                                    </div>
                                    <div className="form-group message-btn">
                                        <button type="submit">Send Message</button>
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
