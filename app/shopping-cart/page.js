
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Shopping Cart" wrapperCls="home_1">
                <div>
                    <section className="cart-section">
                        <div className="auto-container">
                            <div className="cart-outer">
                                <div className="totle-table clearfix">
                                    <div className="item float-left"><p><span>Your Cart:</span> 2 Items</p></div>
                                    <div className="total float-right"><p><span>Total:</span> 159.95 </p></div>
                                </div>
                                <div className="table-outer">
                                    <table className="cart-table">
                                        <thead className="cart-header">
                                            <tr>
                                                <th>Product</th>
                                                <th>Quantity</th>
                                                <th className="price">Price</th>
                                                <th>Total</th>
                                                <th>Remove</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="prod-column">
                                                    <div className="column-box">
                                                        <figure className="prod-thumb"><Link href="#"><img src="/assets/images/shop/product-thumb-1.jpg" alt="" /></Link></figure>
                                                        <h4>Hemlock Grove</h4>
                                                    </div>
                                                </td>
                                                <td className="qty"><input type="number" name="quantity" defaultValue={2} /></td>
                                                <td className="sub-total">$15.00</td>
                                                <td className="total-price">$30.00</td>
                                                <td><Link href="#" className="remove-btn"><span className="far fa-times" /></Link></td>
                                            </tr>
                                            <tr>
                                                <td className="prod-column">
                                                    <div className="column-box">
                                                        <figure className="prod-thumb"><Link href="#"><img src="/assets/images/shop/product-thumb-2.jpg" alt="" /></Link></figure>
                                                        <h4>Cleaver Lands</h4>
                                                    </div>
                                                </td>
                                                <td className="qty"><input type="number" name="quantity" defaultValue={2} /></td>
                                                <td className="sub-total">$24.00</td>
                                                <td className="total-price">$74.00</td>
                                                <td><Link href="#" className="remove-btn"><span className="far fa-times" /></Link></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="row clearfix">
                                    <div className="col-lg-6 col-md-12 col-sm-12 column">
                                        <div className="apply-coupon clearfix">
                                            <div className="form-group clearfix">
                                                <input type="text" name="coupon-code" placeholder="Enter Coupon Code..." />
                                            </div>
                                            <div className="form-group clearfix">
                                                <button type="button">Apply Coupon</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-12 column clearfix">
                                        <div className="btn-box float-right clearfix">
                                            <button type="submit" className="cart-btn">Update Cart</button>
                                            <button type="submit" className="theme-btn btn-style-one"><span className="btn-title">Checkout</span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*End Cart Section*/}
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