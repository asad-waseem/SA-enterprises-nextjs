
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
            <section className="banner-section style-seven">
                <div className="pattern-layer" style={{ backgroundImage: 'url(assets/images-2/icons/shape-1.png)' }} />
                <div className="outer-container">
                    <Swiper {...swiperOptions} className="banner-carousel theme_carousel owl-theme">
                        {/* Slide Item */}
                        <SwiperSlide className="slide-item">
                            <div className="image-layer lazy-image" data-bg="/assets/images-2/main-slider/4.jpg" />
                            <div className="auto-container">
                                <div className="content-box">
                                    <h2>Insurance <span>for Everybody</span></h2>
                                    <div className="text">It is a long established fact that a readers will be distracted by
                                        readable <br />content of a page when looking at its layout.</div>
                                    <div className="btn-box">
                                        <Link href="/index-7" className="theme-btn btn-style-four"><span className="btn-title">Read
                                            More</span></Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="slide-item">
                            <div className="image-layer lazy-image" data-bg="/assets/images-2/main-slider/5.jpg" />
                            <div className="auto-container">
                                <div className="content-box">
                                    <h2>Good hands <span>for the good life</span></h2>
                                    <div className="text">Power of choice is untrammelled and when nothing prevents our being
                                        able <br />to do what we like best every pleasure welcomed.</div>
                                    <div className="btn-box">
                                        <Link href="/index-7" className="theme-btn btn-style-four"><span className="btn-title">Read
                                            More</span></Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="slide-item">
                            <div className="image-layer lazy-image" data-bg="/assets/images-2/main-slider/6.jpg" />
                            <div className="auto-container">
                                <div className="content-box">
                                    <h2>Security <span>is Our priority</span></h2>
                                    <div className="text">It is a long established fact that a readers will be distracted by
                                        readable <br />content of a page when looking at its layout.</div>
                                    <div className="btn-box">
                                        <Link href="/index-7" className="theme-btn btn-style-four"><span className="btn-title">Read
                                            More</span></Link>
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
                </div>
            </section>
        </>
    )
}
