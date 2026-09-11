
import Layout from "@/components/layout/Layout"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Checkout" wrapperCls="home_1">
                <div>
                    <section className="checkout-section">
                        <div className="auto-container">
                            <div className="row clearfix">
                                <div className="col-lg-6 col-md-12 col-sm-12 column">
                                    <div className="contact-information">
                                        <h3>Contact Information</h3>
                                        <div className="contact-inner">
                                            <div className="form-group">
                                                <input type="text" name="phone" placeholder="Phone Number" required />
                                            </div>
                                            <div className="form-group">
                                                <input type="email" name="email" placeholder="Email Address" required />
                                            </div>
                                            <div className="form-group">
                                                <div className="custom-controls-stacked">
                                                    <label className="custom-control material-checkbox">
                                                        <input type="checkbox" className="material-control-input" />
                                                        <span className="material-control-indicator" />
                                                        <span className="description">Get Product Updates &amp; Offers</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="shipping-address">
                                        <h3>Shipping Address</h3>
                                        <div className="shipping-inner">
                                            <div className="row clearfix">
                                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                    <input type="text" name="fname" placeholder="First Name" required />
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                    <input type="text" name="lname" placeholder="Last Name" required />
                                                </div>
                                                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                                    <input type="text" name="address" placeholder="Address" required />
                                                </div>
                                                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                                    <input type="text" name="city" placeholder="City" required />
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                    <div className="select-box">
                                                        <form action="#">
                                                            <div className="form-group">
                                                                <select className="custom-select" name="subject">
                                                                    <option value="*">State</option>
                                                                    <option value=".category-1">USA</option>
                                                                    <option value=".category-2">UK</option>
                                                                    <option value=".category-3">France</option>
                                                                    <option value=".category-4">China</option>
                                                                    <option value=".category-5">Bangladesh</option>
                                                                </select>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                    <input type="password" name="pincode" placeholder="Pincode" required />
                                                </div>
                                                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                                    <div className="custom-controls-stacked">
                                                        <label className="custom-control material-checkbox">
                                                            <input type="checkbox" className="material-control-input" />
                                                            <span className="material-control-indicator" />
                                                            <span className="description">Save for future shopping</span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12 column">
                                    <div className="product-information">
                                        <div className="single-item clearfix">
                                            <figure className="product-image"><img src="/assets/images/shop/product-thumb-1.jpg" alt="" /></figure>
                                            <h5>Hemlock Grove</h5>
                                            <span>$15.00</span>
                                        </div>
                                        <div className="single-item clearfix">
                                            <figure className="product-image"><img src="/assets/images/shop/product-thumb-2.jpg" alt="" /></figure>
                                            <h5>Cleaver Lands</h5>
                                            <span>$24.00</span>
                                        </div>
                                        <div className="sub-total clearfix">
                                            <h5>Sub total</h5>
                                            <i className="line" />
                                            <span>$39.00</span>
                                        </div>
                                        <div className="shipping clearfix">
                                            <h5>Shipping</h5>
                                            <i className="line" />
                                            <span>$30.00</span>
                                        </div>
                                        <div className="total">
                                            <h5>Total</h5>
                                            <span>$69.00</span>
                                        </div>
                                        <div className="btn-box">
                                            <button type="submit" className="theme-btn btn-style-one"><span className="btn-title">Continue to Payment</span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="payment-option">
                                <div className="row clearfix">
                                    <div className="col-lg-6 col-md-12 col-sm-12 column">
                                        <div className="payment-method">
                                            <h3>Choose a Payment Method</h3>
                                            <ul className="clearfix">
                                                <li>
                                                    <div className="form-group">
                                                        <div className="custom-controls-stacked">
                                                            <label className="custom-control material-checkbox">
                                                                <input type="checkbox" className="material-control-input" />
                                                                <span className="material-control-indicator" />
                                                                <span className="description">Direct Bank Trasfer</span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="form-group">
                                                        <div className="custom-controls-stacked">
                                                            <label className="custom-control material-checkbox">
                                                                <input type="checkbox" className="material-control-input" defaultChecked="checked" />
                                                                <span className="material-control-indicator" />
                                                                <span className="description">Credit Card / Debit Card</span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <p>It is a long established fact that a reader will distracted of a page when looking at its layout. </p>
                                                </li>
                                                <li>
                                                    <div className="form-group">
                                                        <div className="custom-controls-stacked">
                                                            <label className="custom-control material-checkbox">
                                                                <input type="checkbox" className="material-control-input" />
                                                                <span className="material-control-indicator" />
                                                                <span className="description">Cheque Payment</span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="form-group">
                                                        <div className="custom-controls-stacked">
                                                            <label className="custom-control material-checkbox">
                                                                <input type="checkbox" className="material-control-input" />
                                                                <span className="material-control-indicator" />
                                                                <span className="description">Paypal</span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-12 column">
                                        <div className="card-details">
                                            <h3>Card Details</h3>
                                            <div className="details-inner">
                                                <div className="row clearfix">
                                                    <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                                        <input type="text" name="card_name" placeholder="Name on the Card" required />
                                                    </div>
                                                    <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                                        <input type="text" name="card_no" placeholder="Card Number" required />
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                        <input type="text" name="date" id="datepicker" placeholder="Expiry Date" required />
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                        <input type="password" name="code" placeholder="Security Code" required />
                                                    </div>
                                                    <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                                        <button type="submit" className="theme-btn btn-style-one"><span className="btn-title">Make Payment</span></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* checkout-section end */}
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