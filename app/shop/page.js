
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Products" wrapperCls="home_1">
                <div>
                    <section className="sidebar-page-container">
                        <div className="auto-container">
                            <div className="row clearfix">
                                <div className="col-lg-8 content-side">
                                    <div className="our-shop">
                                        <div className="items-sorting row m-0 justify-content-between">
                                            <div className="text">
                                                <p>Showing all 12 results</p>
                                            </div>
                                            <form action="#">
                                                <div className="form-group">
                                                    <select className="custom-select" name="subject">
                                                        <option value="*">Default Sorting</option>
                                                        <option value=".category-1">By Order</option>
                                                        <option value=".category-2">By Price</option>
                                                        <option value=".category-3">New Product</option>
                                                        <option value=".category-4">Old Product</option>
                                                        <option value=".category-5">Coming Product</option>
                                                    </select>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="row clearfix">
                                            <div className="col-md-6 product-block">
                                                <div className="product-block-one">
                                                    <div className="inner-box">
                                                        <figure className="image-box">
                                                            <img src="/assets/images/shop/product-1.jpg" alt="" />
                                                            <span className="category">New</span>
                                                            <div className="right-option">
                                                                <div className="icon"><span className="flaticon-more" /></div>
                                                                <ul className="content-box">
                                                                    <li><Link href="/assets/images/shop/product-1.jpg" className="lightbox-image" data-fancybox="gallery"><i className="flaticon-zoom-in" /><span>Quick View</span></Link></li>
                                                                    <li><Link href="#"><i className="flaticon-center" /><span>Add to Whishlist</span></Link></li>
                                                                </ul>
                                                            </div>
                                                            <div className="cart-btn"><Link href="#" className="theme-btn btn-style-one">
                                                                <span className="btn-title">ADD TO CART</span>
                                                            </Link></div>
                                                        </figure>
                                                        <div className="lower-content">
                                                            <ul className="rating clearfix">
                                                                <li><i className="fas fa-star" /></li>
                                                                <li><i className="fas fa-star" /></li>
                                                                <li><i className="fas fa-star" /></li>
                                                                <li><i className="fas fa-star" /></li>
                                                                <li><i className="fas fa-star" /></li>
                                                            </ul>
                                                            <p>$15.00</p>
                                                            <h3><Link href="/product-details">Hemlock Grove</Link></h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 product-block">
                                                <div className="product-block-one">
                                                    <div className="inner-box">
                                                        <figure className="image-box">
                                                            <img src="/assets/images/shop/product-2.jpg" alt="" />
                                                            <div className="right-option">
                                                                <div className="icon"><span className="flaticon-more" /></div>
                                                                <ul className="content-box">
                                                                    <li><Link href="/assets/images/shop/product-2.jpg" className="lightbox-image" data-fancybox="gallery"><i className="flaticon-zoom-in" /><span>Quick View</span></Link></li>
                                                                    <li><Link href="#"><i className="flaticon-center" /><span>Add to Whishlist</span></Link></li>
                                                                </ul>
                                                            </div>
                                                            <div className="cart-btn"><Link href="#" className="theme-btn btn-style-one">
                                                                <span className="btn-title">ADD TO CART</span>
                                                            </Link></div>
                                                        </figure>
                                                        <div className="lower-content">
                                                            <ul className="rating clearfix">
                                                                <li><i className="fas fa-star" /></li>
                                                                <li><i className="fas fa-star" /></li>
                                                                <li><i className="fas fa-star" /></li>
                                                                <li><i className="fas fa-star" /></li>
                                                                <li><i className="far fa-star" /></li>
                                                            </ul>
                                                            <p>$18.00</p>
                                                            <h3><Link href="/product-details">Girl of Ink &amp; Stars</Link></h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 product-block">
                                                <div className="product-block-one">
                                                    <div className="inner-box">
                                                        <figure className="image-box">
                                                            <img src="/assets/images/shop/product-3.jpg" alt="" />
                                                            <div className="right-option">
                                                                <div className="icon"><span className="flaticon-more" /></div>
                                                                <ul className="content-box">
                                                                    <li><Link href="/assets/images/shop/product-3.jpg" className="lightbox-image" data-fancybox="gallery"><i className="flaticon-zoom-in" /><span>Quick View</span></Link></li>
                                                                    <li><Link href="#"><i className="flaticon-center" /><span>Add to Whishlist</span></Link></li>
                                                                </ul>
                                                            </div>
                                                            <div className="cart-btn"><Link href="#" className="theme-btn btn-style-one">
                                                                <span className="btn-title">ADD TO CART</span>
                                                            </Link></div>
                                                        </figure>
                                                        <div className="lower-content">
                                                            <ul className="rating clearfix">
                                                                <li><i className="fas fa-star" /></li>
                                                                <li><i className="fas fa-star" /></li>
                                                                <li><i className="fas fa-star" /></li>
                                                                <li><i className="fas fa-star" /></li>
                                                                <li><i className="fas fa-star" /></li>
                                                            </ul>
                                                            <p>$24.00</p>
                                                            <h3><Link href="/product-details">Cleaver Lands</Link></h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 product-block">
                                                <div className="product-block-one">
                                                    <div className="inner-box">
                                                        <figure className="image-box">
                                                            <img src="/assets/images/shop/product-4.jpg" alt="" />
                                                            <span className="offer">25%</span>
                                                            <div className="right-option">
                                                                <div className="icon"><span className="flaticon-more" /></div>
                                                                <ul className="content-box">
                                                                    <li><Link href="/assets/images/shop/product-4.jpg" className="lightbox-image" data-fancybox="gallery"><i className="flaticon-zoom-in" /><span>Quick View</span></Link></li>
                                                                    <li><Link href="#"><i className="flaticon-center" /><span>Add to Whishlist</span></Link></li>
                                                                </ul>
                                                            </div>
                                                            <div className="cart-btn"><Link href="#" className="theme-btn btn-style-one">
                                                                <span className="btn-title">ADD TO CART</span>
                                                            </Link></div>
                                                        </figure>
                                                        <div className="lower-content">
                                                            <ul className="rating clearfix">
                                                                <li><i className="fas fa-star" /></li>
                                                                <li><i className="fas fa-star" /></li>
                                                                <li><i className="fas fa-star" /></li>
                                                                <li><i className="fas fa-star" /></li>
                                                                <li><i className="fas fa-star" /></li>
                                                            </ul>
                                                            <p>$25.00 <del>$34</del></p>
                                                            <h3><Link href="/product-details">Self Confidence</Link></h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 product-block">
                                                <div className="product-block-one">
                                                    <div className="inner-box">
                                                        <figure className="image-box">
                                                            <img src="/assets/images/shop/product-5.jpg" alt="" />
                                                            <div className="right-option">
                                                                <div className="icon"><span className="flaticon-more" /></div>
                                                                <ul className="content-box">
                                                                    <li><Link href="/assets/images/shop/product-5.jpg" className="lightbox-image" data-fancybox="gallery"><i className="flaticon-zoom-in" /><span>Quick View</span></Link></li>
                                                                    <li><Link href="#"><i className="flaticon-center" /><span>Add to Whishlist</span></Link></li>
                                                                </ul>
                                                            </div>
                                                            <div className="cart-btn"><Link href="#" className="theme-btn btn-style-one">
                                                                <span className="btn-title">ADD TO CART</span>
                                                            </Link></div>
                                                        </figure>
                                                        <div className="lower-content">
                                                            <ul className="rating clearfix">
                                                                <li><i className="fas fa-star" /></li>
                                                                <li><i className="fas fa-star" /></li>
                                                                <li><i className="fas fa-star" /></li>
                                                                <li><i className="fas fa-star" /></li>
                                                                <li><i className="far fa-star" /></li>
                                                            </ul>
                                                            <p>$19.00</p>
                                                            <h3><Link href="/product-details">Self Confidence</Link></h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 product-block">
                                                <div className="product-block-one">
                                                    <div className="inner-box">
                                                        <figure className="image-box">
                                                            <img src="/assets/images/shop/product-6.jpg" alt="" />
                                                            <div className="right-option">
                                                                <div className="icon"><span className="flaticon-more" /></div>
                                                                <ul className="content-box">
                                                                    <li><Link href="/assets/images/shop/product-6.jpg" className="lightbox-image" data-fancybox="gallery"><i className="flaticon-zoom-in" /><span>Quick View</span></Link></li>
                                                                    <li><Link href="#"><i className="flaticon-center" /><span>Add to Whishlist</span></Link></li>
                                                                </ul>
                                                            </div>
                                                            <div className="cart-btn"><Link href="#" className="theme-btn btn-style-one">
                                                                <span className="btn-title">ADD TO CART</span>
                                                            </Link></div>
                                                        </figure>
                                                        <div className="lower-content">
                                                            <ul className="rating clearfix">
                                                                <li><i className="fas fa-star" /></li>
                                                                <li><i className="fas fa-star" /></li>
                                                                <li><i className="fas fa-star" /></li>
                                                                <li><i className="fas fa-star" /></li>
                                                                <li><i className="fas fa-star" /></li>
                                                            </ul>
                                                            <p>$15.00</p>
                                                            <h3><Link href="/product-details">World of Abstract</Link></h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 product-block">
                                                <div className="product-block-one">
                                                    <div className="inner-box">
                                                        <figure className="image-box">
                                                            <img src="/assets/images/shop/product-7.jpg" alt="" />
                                                            <span className="trending"><span className="flaticon-fire" /></span>
                                                            <div className="right-option">
                                                                <div className="icon"><span className="flaticon-more" /></div>
                                                                <ul className="content-box">
                                                                    <li><Link href="/assets/images/shop/product-7.jpg" className="lightbox-image" data-fancybox="gallery"><i className="flaticon-zoom-in" /><span>Quick View</span></Link></li>
                                                                    <li><Link href="#"><i className="flaticon-center" /><span>Add to Whishlist</span></Link></li>
                                                                </ul>
                                                            </div>
                                                            <div className="cart-btn"><Link href="#" className="theme-btn btn-style-one">
                                                                <span className="btn-title">ADD TO CART</span>
                                                            </Link></div>
                                                        </figure>
                                                        <div className="lower-content">
                                                            <ul className="rating clearfix">
                                                                <li><i className="fas fa-star" /></li>
                                                                <li><i className="fas fa-star" /></li>
                                                                <li><i className="fas fa-star" /></li>
                                                                <li><i className="fas fa-star" /></li>
                                                                <li><i className="far fa-star" /></li>
                                                            </ul>
                                                            <p>$34.00</p>
                                                            <h3><Link href="/product-details">Self Confidence</Link></h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 product-block">
                                                <div className="product-block-one">
                                                    <div className="inner-box">
                                                        <figure className="image-box">
                                                            <img src="/assets/images/shop/product-8.jpg" alt="" />
                                                            <div className="right-option">
                                                                <div className="icon"><span className="flaticon-more" /></div>
                                                                <ul className="content-box">
                                                                    <li><Link href="/assets/images/shop/product-8.jpg" className="lightbox-image" data-fancybox="gallery"><i className="flaticon-zoom-in" /><span>Quick View</span></Link></li>
                                                                    <li><Link href="#"><i className="flaticon-center" /><span>Add to Whishlist</span></Link></li>
                                                                </ul>
                                                            </div>
                                                            <div className="cart-btn"><Link href="#" className="theme-btn btn-style-one">
                                                                <span className="btn-title">ADD TO CART</span>
                                                            </Link></div>
                                                        </figure>
                                                        <div className="lower-content">
                                                            <ul className="rating clearfix">
                                                                <li><i className="fas fa-star" /></li>
                                                                <li><i className="fas fa-star" /></li>
                                                                <li><i className="fas fa-star" /></li>
                                                                <li><i className="fas fa-star" /></li>
                                                                <li><i className="fas fa-star" /></li>
                                                            </ul>
                                                            <p>$24.00</p>
                                                            <h3><Link href="/product-details">Cleaver Lands</Link></h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="pagination-wrapper text-center">
                                            <ul className="pagination clearfix">
                                                <li><Link href="#"><i className="fas fa-angle-left" /></Link></li>
                                                <li><Link href="#" className="active">1</Link></li>
                                                <li><Link href="#">2</Link></li>
                                                <li><Link href="#"><i className="fas fa-angle-right" /></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <aside className="col-lg-4 sidebar">
                                    <div className="shop-sidebar">
                                        <div className="widget widget_search">
                                            <form action="blog-2" method="post" className="search-form">
                                                <div className="form-group">
                                                    <input type="search" name="search-field" placeholder="Your Keyword ..." required />
                                                    <button type="search"><i className="fas fa-search" /></button>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="widget widget_categories">
                                            <h3 className="widget-title">Categories</h3>
                                            <div className="widget-content">
                                                <ul className="categories-list clearfix">
                                                    <li><Link href="#">Audit &amp; Advisory <span>12</span></Link></li>
                                                    <li><Link href="#">Business Enterprises <span>05</span></Link></li>
                                                    <li><Link href="#">Banking Awareness <span>07</span></Link></li>
                                                    <li><Link href="#">Design &amp; Multimedia <span>14</span></Link></li>
                                                    <li><Link href="#">Self Development <span>15</span></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="widget widget_filter-price">
                                            <h3 className="widget-title">Filter by Price</h3>
                                            <div className="range-slider clearfix">
                                                <div className="price-range-slider" />
                                                <div className="clearfix">
                                                    <div className="float-left">
                                                        <div className="title">Price:</div>
                                                        <div className="input"><input type="text" className="property-amount" name="field-name" readOnly /></div>
                                                    </div>
                                                    <div className="float-right">
                                                        <Link href="#" className="theme-btn">Filter</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="widget widget_popular-products">
                                            <h3 className="widget-title">Popular Products</h3>
                                            <div className="post-inner">
                                                <div className="post">
                                                    <figure className="image-box"><Link href="/product-details"><img src="/assets/images/shop/product-thumb-1.jpg" alt="" /></Link></figure>
                                                    <h5><Link href="/product-details">Hemlock Grove</Link></h5>
                                                    <span className="price">$15.00</span>
                                                    <ul className="rating light clearfix">
                                                        <li><i className="fas fa-star" /></li>
                                                        <li><i className="fas fa-star" /></li>
                                                        <li><i className="fas fa-star" /></li>
                                                        <li><i className="fas fa-star" /></li>
                                                        <li><i className="far fa-star" /></li>
                                                    </ul>
                                                </div>
                                                <div className="post">
                                                    <figure className="image-box"><Link href="/product-details"><img src="/assets/images/shop/product-thumb-2.jpg" alt="" /></Link></figure>
                                                    <h5><Link href="/product-details">Cleaver Lands</Link></h5>
                                                    <span className="price">$24.00</span>
                                                    <ul className="rating clearfix">
                                                        <li><i className="fas fa-star" /></li>
                                                        <li><i className="fas fa-star" /></li>
                                                        <li><i className="fas fa-star" /></li>
                                                        <li><i className="fas fa-star" /></li>
                                                        <li><i className="fas fa-star" /></li>
                                                    </ul>
                                                </div>
                                                <div className="post">
                                                    <figure className="image-box"><Link href="/product-details"><img src="/assets/images/shop/product-thumb-3.jpg" alt="" /></Link></figure>
                                                    <h5><Link href="/product-details">Peter Cawdron</Link></h5>
                                                    <span className="price">$24.00</span>
                                                    <ul className="rating clearfix">
                                                        <li><i className="fas fa-star" /></li>
                                                        <li><i className="fas fa-star" /></li>
                                                        <li><i className="fas fa-star" /></li>
                                                        <li><i className="fas fa-star" /></li>
                                                        <li><i className="fas fa-star" /></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </section>
                    {/* sidebar-page-container end */}
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