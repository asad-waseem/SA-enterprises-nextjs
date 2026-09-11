

export default function Contact() {
    return (
        <>
            <section className="contact-home-11">
                <div className="auto-container">
                    <div className="inner-container">
                        <div className="row clearfix">
                            <div className="col-lg-6">
                                <div className="contact-form-box">
                                    <div className="sec-title light">
                                        <h4>Consult With Us</h4>
                                        <h2>Get help from experts</h2>
                                    </div>
                                    <form method="post" action="sendemail.php" className="contact-form">
                                        <div className="row">
                                            <div className="col-md-6 form-group">
                                                <input type="text" name="firstname" placeholder="Name" required />
                                            </div>
                                            <div className="col-md-6 form-group">
                                                <input type="email" name="email" placeholder="Email" required />
                                            </div>
                                            <div className="col-md-6 form-group">
                                                <input type="text" name="phone" placeholder="Phone" required />
                                            </div>
                                            <div className="col-md-6 form-group">
                                                <select className="custom-select" name="subject">
                                                    <option value="*">Visa Type</option>
                                                    <option value=".category-1">Business Aproach</option>
                                                    <option value=".category-2">Trades &amp; Stock Market</option>
                                                    <option value=".category-3">Strategy &amp; Planning</option>
                                                    <option value=".category-4">Software &amp; Research</option>
                                                    <option value=".category-5">Support &amp; Maintenance</option>
                                                </select>
                                            </div>
                                            <div className="col-md-6 form-group">
                                                <select className="custom-select" name="subject">
                                                    <option value="*">City</option>
                                                    <option value=".category-1">Business Aproach</option>
                                                    <option value=".category-2">Trades &amp; Stock Market</option>
                                                    <option value=".category-3">Strategy &amp; Planning</option>
                                                    <option value=".category-4">Software &amp; Research</option>
                                                    <option value=".category-5">Support &amp; Maintenance</option>
                                                </select>
                                            </div>
                                            <div className="col-md-6 form-group">
                                                <select className="custom-select" name="subject">
                                                    <option value="*">Country</option>
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
                            <div className="col-lg-6">
                                <figure className="image-box"><img src="/assets/images-2/resource/contact-1.jpg" alt="" /></figure>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
