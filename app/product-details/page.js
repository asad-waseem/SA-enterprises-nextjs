'use client'
import QuantityInput from "@/components/elements/QuantityInput"
import Layout from "@/components/layout/Layout"
import TestimonialSlider4 from "@/components/slider/TestimonialSlider4"
import Link from "next/link"
import { useState } from "react"
import 'swiper/css/thumbs'
import { Autoplay, Navigation, Thumbs } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
export default function Home() {

    const [activeIndex, setActiveIndex] = useState(2)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    const [thumbsSwiper, setThumbsSwiper] = useState(null)
    const swiperOptions1 = {
        modules: [Autoplay, Navigation, Thumbs],
        onSwiper: setThumbsSwiper,
        // freeMode: true,
        // preloadImages: false,
        loop: true,
        slidesPerView: 3,
        speed: 1400,
        spaceBetween: 0,
        direction: "vertical",
        breakpoints: {
            300: {
                slidesPerView: 3,
            },
        }
    }

    const swiperOptions2 = {
        loop: true,
        speed: 1400,
        spaceBetween: 0,
        effect: "fade",
    }
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Product Details" wrapperCls="home_1">
                <div>
                    <section className="single-shop-area">
                        <div className="auto-container">
                            <div className="row">
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                    <div className="shop-content">
                                        {/*Start single shop content*/}
                                        <div className="single-shop-content">
                                            <div className="row">
                                                <div className="col-lg-6 pr-lg-5">
                                                    <div className="products-carousel">
                                                        <div className="product-thumbs-wrapper">
                                                            {/* Swiper */}
                                                            <div className="swiper-container product-thumbs">
                                                                <Swiper {...swiperOptions1} className="swiper-wrapper">
                                                                    <SwiperSlide>
                                                                        <div className="author-thumb"><img src="/assets/images/shop/product-1.jpg" alt="" /></div>
                                                                    </SwiperSlide>
                                                                    <SwiperSlide>
                                                                        <div className="author-thumb"><img src="/assets/images/shop/product-2.jpg" alt="" /></div>
                                                                    </SwiperSlide>
                                                                    <SwiperSlide>
                                                                        <div className="author-thumb"><img src="/assets/images/shop/product-3.jpg" alt="" /></div>
                                                                    </SwiperSlide>
                                                                </Swiper>
                                                            </div>
                                                        </div>
                                                        <div className="single-product-view">
                                                            <div className="swiper-container product-content wow fadeInUp" data-wow-delay="300ms">
                                                                <Swiper {...swiperOptions2} className="swiper-wrapper">
                                                                    <SwiperSlide>
                                                                        <div className="image"><img src="/assets/images/shop/product-1.jpg" alt="" /></div>
                                                                    </SwiperSlide>
                                                                    <SwiperSlide>
                                                                        <div className="image"><img src="/assets/images/shop/product-2.jpg" alt="" /></div>
                                                                    </SwiperSlide>
                                                                    <SwiperSlide>
                                                                        <div className="image"><img src="/assets/images/shop/product-3.jpg" alt="" /></div>
                                                                    </SwiperSlide>
                                                                </Swiper>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="content-box">
                                                        <h2>Girl of Ink &amp; Stars</h2>
                                                        <div className="review-box">
                                                            <ul>
                                                                <li><i className="fas fa-star" /></li>
                                                                <li><i className="fas fa-star" /></li>
                                                                <li><i className="fas fa-star" /></li>
                                                                <li><i className="fas fa-star" /></li>
                                                                <li><i className="far fa-star" /></li>
                                                            </ul>
                                                            <span>[3 Customer Reviews]</span>
                                                        </div>
                                                        <span className="price">$19.00</span>
                                                        <div className="text">
                                                            <p>Who chooses to enjoy a pleasure that has no one  take a trivial example which of us undertakes laborious physical exercise.</p>
                                                        </div>
                                                        <div className="cart-wrapper">
                                                            <div className="qity">
                                                                <QuantityInput />
                                                            </div>
                                                            <div className="cart-btn">
                                                                <Link href="/shopping-cart" className="theme-btn btn-style-one"><span className="btn-title">Add to Cart</span></Link>
                                                            </div>
                                                        </div>
                                                        <div className="category">
                                                            <h5>Category:</h5>
                                                            <ul>
                                                                <li>Business</li>
                                                                <li>Banking</li>
                                                                <li>Awareness</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/*End single shop content*/}
                                        {/*Start product tab box*/}
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="product-tab-box tabs-box">
                                                    <ul className="tab-btns tab-buttons clearfix">
                                                        <li onClick={() => handleOnClick(1)} className={activeIndex === 1 ? "tab-btn active-btn" : "tab-btn"}><span>Descriprion</span></li>
                                                        <li onClick={() => handleOnClick(2)} className={activeIndex === 2 ? "tab-btn active-btn" : "tab-btn"}><span>Reviews (2)</span></li>
                                                    </ul>
                                                    <div className="tabs-content">
                                                        <div id="desc" className={activeIndex === 1 ? "tab active-tab" : "tab"}>
                                                            <div className="product-details-content">
                                                                <div className="desc-content-box">
                                                                    <p>Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences.</p>
                                                                    <p>Must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and of the great explorer of the truth, the master-builder of human happiness.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className={activeIndex === 2 ? "tab active-tab" : "tab"} id="review">
                                                            <div className="review-box-holder">
                                                                <TestimonialSlider4 />
                                                            </div>

                                                            <div className="review-form">
                                                                <div className="shop-page-title">
                                                                    <div className="title-two">Add Your Comments</div>
                                                                    <p>Your email address will not be published. Required fields are marked <b>*</b></p>
                                                                </div>
                                                                <form id="review-form" action="#">
                                                                    <div className="row">
                                                                        <div className="col-md-12">
                                                                            <div className="add-rating-box">
                                                                                <div className="add-rating-title">
                                                                                    <h4>Your Rating</h4>
                                                                                </div>
                                                                                <div className="review-box">
                                                                                    <ul>
                                                                                        <li><i className="far fa-star" /></li>
                                                                                        <li><i className="far fa-star" /></li>
                                                                                        <li><i className="far fa-star" /></li>
                                                                                        <li><i className="far fa-star" /></li>
                                                                                        <li><i className="far fa-star" /></li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="row">
                                                                        <div className="col-md-12">
                                                                            <div className="input-box">
                                                                                <p>Your Review<span>*</span></p>
                                                                                <textarea name="review" required />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="row">
                                                                        <div className="col-md-6">
                                                                            <div className="input-box">
                                                                                <p>Name<span>*</span></p>
                                                                                <input type="text" name="fname" required />
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-6">
                                                                            <div className="input-box">
                                                                                <p>Email<span>*</span></p>
                                                                                <input type="email" name="email" required />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="row">
                                                                        <div className="col-md-12">
                                                                            <button className="theme-btn btn-style-one" type="submit"><span className="btn-title">Submit</span></button>
                                                                        </div>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/*End product tab box*/}
                                        {/*Start related product box*/}
                                        <div className="related-product">
                                            <div className="shop-page-title text-center">
                                                <div className="title">Raleted Products</div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-4 product-block">
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
                                                <div className="col-lg-4 product-block">
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
                                                <div className="col-lg-4 product-block">
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
                                            </div>
                                        </div>
                                        {/*End related product box*/}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
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