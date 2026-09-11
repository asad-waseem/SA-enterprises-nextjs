

export default function CallBackForm() {
    return (
        <>
            <section className="call-back-form-section-nine">
                <div className="auto-container">
                    <div className="call-back-form-nine">
                        <div className="row">
                            <div className="col-xl-4">
                                <div className="call-back-form_title">
                                    <div className="sec-title style-nine">
                                        <h4>Get Instant Quote</h4>
                                        <h2>Best Car Services<br /> Await For You</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-8">
                                <div className="call-back-form_box">
                                    <form method="post" action="sendemail.php" className="contact-form-h8">
                                        <div className="row clearfix">
                                            <div className="col-xl-4 form-group">
                                                <input type="text" name="username" placeholder="Name" required />
                                            </div>
                                            <div className="col-xl-4 form-group">
                                                <input type="text" name="phone" placeholder="Phone" required />
                                            </div>
                                            <div className="col-xl-4 form-group">
                                                <select className="custom-select" name="subject">
                                                    <option value="*">Audit &amp; Asurance</option>
                                                    <option value=".category-1">Business Aproach</option>
                                                    <option value=".category-2">Trades &amp; Stock Market</option>
                                                    <option value=".category-3">Strategy &amp; Planning</option>
                                                    <option value=".category-4">Software &amp; Research</option>
                                                    <option value=".category-5">Support &amp; Maintenance</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-xl-4 form-group">
                                                <select className="custom-select" name="subject">
                                                    <option value="*">Audit &amp; Asurance</option>
                                                    <option value=".category-1">Business Aproach</option>
                                                    <option value=".category-2">Trades &amp; Stock Market</option>
                                                    <option value=".category-3">Strategy &amp; Planning</option>
                                                    <option value=".category-4">Software &amp; Research</option>
                                                    <option value=".category-5">Support &amp; Maintenance</option>
                                                </select>
                                            </div>
                                            <div className="col-xl-4 form-group">
                                                <select className="custom-select" name="subject">
                                                    <option value="*">Audit &amp; Asurance</option>
                                                    <option value=".category-1">Business Aproach</option>
                                                    <option value=".category-2">Trades &amp; Stock Market</option>
                                                    <option value=".category-3">Strategy &amp; Planning</option>
                                                    <option value=".category-4">Software &amp; Research</option>
                                                    <option value=".category-5">Support &amp; Maintenance</option>
                                                </select>
                                            </div>
                                            <div className="col-xl-4 form-group">
                                                <button className="theme-btn btn-style-nine" type="submit" name="submit-form">
                                                    <span className="btn-title">Check Now</span>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
