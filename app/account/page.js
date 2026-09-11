
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="My Account" wrapperCls="home_1">
                <div>
                    <section className="myaccount-section">
                        <div className="auto-container">
                            <div className="row clearfix">
                                <div className="col-lg-6 col-md-12 col-sm-12 column">
                                    <div className="login-inner">
                                        <h3>Login</h3>
                                        <form action="account" method="post" className="login-form">
                                            <div className="form-group">
                                                <i className="fas fa-user" />
                                                <input type="text" name="name" placeholder="Your Name*" required />
                                            </div>
                                            <div className="form-group">
                                                <i className="far fa-envelope" />
                                                <input type="email" name="email" placeholder="Emai Address*" required />
                                            </div>
                                            <div className="form-group">
                                                <i className="fas fa-lock-open" />
                                                <input type="password" name="password" placeholder="Enter Password" required />
                                            </div>
                                            <div className="form-group btn-box">
                                                <button type="submit" className="theme-btn btn-style-one"><span className="btn-title">Login</span></button>
                                            </div>
                                            <div className="form-group">
                                                <div className="custom-controls-stacked">
                                                    <label className="custom-control material-checkbox">
                                                        <input type="checkbox" className="material-control-input" />
                                                        <span className="material-control-indicator" />
                                                        <span className="description">Remember Me</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </form>
                                        <ul className="other-option clearfix">
                                            <li><p>Or login with</p></li>
                                            <li><Link href="/account"><i className="fab fa-facebook-f" /></Link></li>
                                            <li><Link href="/account"><i className="fab fa-google-plus-g" /></Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12 column">
                                    <div className="register-inner">
                                        <h3>Register</h3>
                                        <form action="account" method="post" className="register-form">
                                            <div className="form-group">
                                                <i className="fas fa-user" />
                                                <input type="text" name="name" placeholder="Your Name*" required />
                                            </div>
                                            <div className="form-group">
                                                <i className="far fa-envelope" />
                                                <input type="email" name="email" placeholder="Emai Address*" required />
                                            </div>
                                            <div className="form-group">
                                                <i className="fas fa-lock-open" />
                                                <input type="password" name="password" placeholder="Enter Password" required />
                                            </div>
                                            <div className="form-group btn-box">
                                                <button type="submit" className="theme-btn btn-style-one"><span className="btn-title">Register</span></button>
                                            </div>
                                        </form>
                                        <div className="text"><p><span>*</span>You must be a free registered user.</p></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* myaccount-section end */}
                    {/* Feature Section Two */}
                    <section className="feature-section-two mt-0">
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