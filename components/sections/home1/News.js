'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 3,
    // spaceBetween: 30,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        575: {
            slidesPerView: 2,
            // spaceBetween: 30,
        },
        767: {
            slidesPerView: 2,
            // spaceBetween: 30,
        },
        991: {
            slidesPerView: 2,
            // spaceBetween: 30,
        },
        1199: {
            slidesPerView: 3,
            // spaceBetween: 30,
        },
        1350: {
            slidesPerView: 3,
            // spaceBetween: 30,
        },
    }
}


export default function News() {
    return (
        <>
            <section className="news-section">
                <div className="wrapper-box">
                    <div className="left-column" style={{ backgroundImage: 'url(assets/images/background/bg-3.jpg)' }}>
                        <div className="outer-box">
                            <div className="sec-title light">
                                <h2>Don’t miss anything <br /> keep update</h2>
                                <div className="text-decoration">
                                    <span className="left" />
                                    <span className="right" />
                                </div>
                            </div>
                            <h4>Be the first to receive</h4>
                            <ul>
                                <li><i className="fa fa-star" />Consultants advice &amp; suggestions</li>
                                <li><i className="fa fa-star" />Exclusive offers &amp; discounts</li>
                            </ul>
                            <form action="#">
                                <div className="form-group">
                                    <i className="flaticon-mail" />
                                    <input type="email" placeholder="Enter your email..." />
                                </div>
                                <button type="submit" className="theme-btn btn-style-two"><span className="btn-title">Subscribe Us</span></button>
                            </form>
                        </div>
                    </div>
                    <div className="right-column">
                        <div className="outer-box">
                            <div className="outer-container">
                                <div className="row m-0 justify-content-between align-items-end">
                                    <div className="sec-title">
                                        <h2>Don’t miss anything <br /> keep update</h2>
                                        <div className="text-decoration">
                                            <span className="left" />
                                            <span className="right" />
                                        </div>
                                    </div>
                                    <div className="swiper-nav-button">
                                        {/* Add Arrows */}
                                        <div className="swiper-button-prev h1p"><i className="flaticon-right-arrow" /></div>
                                        <div className="swiper-button-next h1n"><i className="flaticon-right-arrow" /></div>
                                    </div>
                                </div>
                            </div>
                            <div className="news-carousel-wrapper">
                                <Swiper {...swiperOptions} className="swiper-container news-carousel">

                                    <SwiperSlide>
                                        {/* News Block */}
                                        <div className="news-block-one">
                                            <div className="inner-box">
                                                <div className="row m-0 justify-content-between">
                                                    <div className="date"><strong>14</strong>February <br />2020</div>
                                                    <div className="author"><div className="title">Brendan Duke </div><img src="/assets/images/resource/author-thumb-1.jpg" alt="" /></div>
                                                </div>
                                                <div className="category">Business</div>
                                                <h4><Link href="/blog-details">How to Manage Business’s <br />Online Reputation</Link></h4>
                                                <div className="read-more-btn"><Link href="/blog-details">Continue reading <i>&gt;&gt;</i></Link></div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        {/* News Block */}
                                        <div className="news-block-one">
                                            <div className="inner-box">
                                                <div className="row m-0 justify-content-between">
                                                    <div className="date"><strong>21</strong>January <br />2020</div>
                                                    <div className="author"><div className="title">Raana irave </div><img src="/assets/images/resource/author-thumb-2.jpg" alt="" /></div>
                                                </div>
                                                <div className="category">Projects</div>
                                                <h4><Link href="/blog-details">Is Your Business Ready For <br />Integration?</Link></h4>
                                                <div className="read-more-btn"><Link href="/blog-details">Continue reading <i>&gt;&gt;</i></Link></div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        {/* News Block */}
                                        <div className="news-block-one">
                                            <div className="inner-box">
                                                <div className="row m-0 justify-content-between">
                                                    <div className="date"><strong>08</strong>January <br />2020</div>
                                                    <div className="author"><div className="title">Raana irave </div><img src="/assets/images/resource/author-thumb-3.jpg" alt="" /></div>
                                                </div>
                                                <div className="category">Marketing</div>
                                                <h4><Link href="/blog-details">That Should You Include In <br />Your Marketing Plan</Link></h4>
                                                <div className="read-more-btn"><Link href="/blog-details">Continue reading <i>&gt;&gt;</i></Link></div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        {/* News Block */}
                                        <div className="news-block-one">
                                            <div className="inner-box">
                                                <div className="row m-0 justify-content-between">
                                                    <div className="date"><strong>14</strong>February <br />2020</div>
                                                    <div className="author"><div className="title">Brendan Duke </div><img src="/assets/images/resource/author-thumb-1.jpg" alt="" /></div>
                                                </div>
                                                <div className="category">Business</div>
                                                <h4><Link href="/blog-details">How to Manage Business’s <br />Online Reputation</Link></h4>
                                                <div className="read-more-btn"><Link href="/blog-details">Continue reading <i>&gt;&gt;</i></Link></div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        {/* News Block */}
                                        <div className="news-block-one">
                                            <div className="inner-box">
                                                <div className="row m-0 justify-content-between">
                                                    <div className="date"><strong>21</strong>January <br />2020</div>
                                                    <div className="author"><div className="title">Raana irave </div><img src="/assets/images/resource/author-thumb-2.jpg" alt="" /></div>
                                                </div>
                                                <div className="category">Projects</div>
                                                <h4><Link href="/blog-details">Is Your Business Ready For <br />Integration?</Link></h4>
                                                <div className="read-more-btn"><Link href="/blog-details">Continue reading <i>&gt;&gt;</i></Link></div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        {/* News Block */}
                                        <div className="news-block-one">
                                            <div className="inner-box">
                                                <div className="row m-0 justify-content-between">
                                                    <div className="date"><strong>08</strong>January <br />2020</div>
                                                    <div className="author"><div className="title">Raana irave </div><img src="/assets/images/resource/author-thumb-3.jpg" alt="" /></div>
                                                </div>
                                                <div className="category">Marketing</div>
                                                <h4><Link href="/blog-details">That Should You Include In <br />Your Marketing Plan</Link></h4>
                                                <div className="read-more-btn"><Link href="/blog-details">Continue reading <i>&gt;&gt;</i></Link></div>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    <div className="swiper-scrollbar" />
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
