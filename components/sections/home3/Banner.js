
'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
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
}


export default function Banner() {
    return (
        <>
            <section className="banner-section style-three">
                <Swiper {...swiperOptions} className="banner-carousel theme_carousel owl-theme">
                    {/* Slide Item */}
                    <SwiperSlide className="slide-item">
                        <div className="image-layer lazy-image" data-bg="/assets/images/main-slider/7.jpg" />
                        <div className="auto-container">
                            <div className="content-box">
                                <div>
                                    <h2>Envolve <span>&amp;</span> Co</h2>
                                    <h3>A Global Leader in Consulting  Business Firm</h3>
                                    <div className="text">Every pleasures is to welcomed pain avoided owing <br />Duty the obligations of our business.</div>
                                    <div className="btn-box">
                                        <Link href="#" className="theme-btn btn-style-one"><span className="btn-title">More About Envolve <i className="flaticon-right" /></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* Slide Item */}
                    <SwiperSlide className="slide-item">
                        <div className="image-layer lazy-image" data-bg="/assets/images/main-slider/8.jpg" />
                        <div className="auto-container">
                            <div className="content-box justify-content-end">
                                <div>
                                    <h2>We Create</h2>
                                    <h3>Value and Build Brand Confidence.</h3>
                                    <div className="text">Every pleasures is to welcomed pain avoided owing <br /> Duty the obligations of our business.</div>
                                    <div className="btn-box">
                                        <Link href="#" className="theme-btn btn-style-one"><span className="btn-title">More About Envolve  <i className="flaticon-right" /></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* Slide Item */}
                    <SwiperSlide className="slide-item">
                        <div className="image-layer lazy-image" data-bg="/assets/images/main-slider/9.jpg" />
                        <div className="auto-container">
                            <div className="content-box">
                                <div>
                                    <h2>Advanced</h2>
                                    <h3>and Easy to Implement Planning System</h3>
                                    <div className="text">Every pleasures is to welcomed pain avoided owing <br /> Duty the obligations of our business.</div>
                                    <div className="btn-box">
                                        <Link href="#" className="theme-btn btn-style-one"><span className="btn-title">More About Envolve <i className="flaticon-right" /></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <div className="owl-nav">
                        <button type="button" className="owl-prev h1p">
                            <span>‹</span>
                        </button>
                        <button type="button" className="owl-next h1n">
                            <span>›</span>
                        </button>
                    </div>
                </Swiper>
            </section>
        </>
    )
}
