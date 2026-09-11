
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Member Details" wrapperCls="home_1">
                <section className="team-details-section">
                    <div className="auto-container">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="single-team-member">
                                    <div className="inner-box">
                                        <div className="image">
                                            <img src="/assets/images/resource/team-15.jpg" alt="" />
                                            <div className="social-links-wrapper">
                                                <div className="icon"><span className="flaticon-share-1" /></div>
                                                <ul className="social-links">
                                                    <li><Link href="#"><span className="fab fa-facebook-f" /></Link></li>
                                                    <li><Link href="#"><span className="fab fa-twitter" /></Link></li>
                                                    <li><Link href="#"><span className="fab fa-google-plus-g" /></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="lower-content">
                                            <div className="author-title">
                                                <h4>Adam Clinton</h4>
                                                <div className="designation">Ceo &amp; Founder</div>
                                            </div>
                                            <ul className="info-list">
                                                <li><span>Email:</span> <Link href="mailto:clinton@Envolveteam.com">clinton@Envolveteam.com</Link></li>
                                                <li><span>Phone:</span> <Link href="tel:+321 22 333 4455">+321 22 333 4455</Link></li>
                                                <li><span>Address:</span> 3333 Raleigh St, Houston, USA.</li>
                                                <li><span>Website:</span> www.example.com</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="working-history">
                                    <div className="top-content">
                                        <h2>Innovation, transformation &amp; leadership <br />occur in many ways.</h2>
                                        <div className="text">To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences.</div>
                                    </div>
                                    <div className="wrapper-box">
                                        <ul className="timeline">
                                            <li data-date="2015-Present">
                                                <div className="text">Indignation and dislike men who are beguiled every  from it pleasure bound some advantage.</div>
                                            </li>
                                            <li data-date="2008-2014" className="current">
                                                <div className="text">Obligations of business it will frequently occur that repudiated blinded by desire  procure him some great pleasure. </div>
                                            </li>
                                            <li data-date="2005-2007">
                                                <div className="text">Holds in these matters to this principle selection secure other greater trouble undertakes.</div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="contact-form-area">
                                        <div className="sec-title">
                                            <h2>Make an appointment</h2>
                                            <div className="text-decoration">
                                                <span className="left" />
                                                <span className="right" />
                                            </div>
                                        </div>
                                    </div>
                                    <form method="post" action="sendemail.php" className="contact-form">
                                        <div className="row">
                                            <div className="col-md-6 form-group">
                                                <input type="text" name="firstname" placeholder="First Name" required />
                                            </div>
                                            <div className="col-md-6 form-group">
                                                <input type="text" name="phone" placeholder="Phone" required />
                                            </div>
                                            <div className="col-md-6 form-group">
                                                <input type="text" name="date" placeholder="Date" required />
                                                <i className="far fa-calendar" />
                                            </div>
                                            <div className="col-md-6 form-group">
                                                <input type="text" name="time" placeholder="Time" required />
                                                <i className="far fa-clock" />
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
                                                <button className="theme-btn btn-style-one mb-30" type="submit" name="submit-form"><span className="btn-title">GET APPOINTMENT</span></button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </Layout>
        </>
    )
}