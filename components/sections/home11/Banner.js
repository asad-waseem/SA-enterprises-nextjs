
'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
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
}

export default function Banner() {
    return (
        <>
            <section className="banner-section style-11">
                <Swiper {...swiperOptions} className="banner-carousel theme_carousel owl-theme">
                    {/* Slide Item */}
                    <SwiperSlide className="slide-item">
                        <div className="image-layer lazy-image" data-bg="/assets/images-2/main-slider/13.jpg" />
                        <div className="auto-container">
                            <div className="content-box">
                                <h2>Business <br />Immigration Visas</h2>
                                <h3>Entrepreneur Immigration Program in USA</h3>
                                <div className="btn-box"><Link href="/index-11">Read More</Link></div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide-item">
                        <div className="image-layer lazy-image" data-bg="/assets/images-2/main-slider/14.jpg" />
                        <div className="auto-container">
                            <div className="content-box">
                                <h2>Simple Visa <br />Process for Holiday</h2>
                                <h3>We are experts on tourist visa extension</h3>
                                <div className="btn-box"><Link href="/index-11">Read More</Link></div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide-item">
                        <div className="image-layer lazy-image" data-bg="/assets/images-2/main-slider/15.jpg" />
                        <div className="auto-container">
                            <div className="content-box">
                                <h2>We'll Help You <br />Move to the Canada</h2>
                                <h3>Migrate to canada with best Visa Consultants</h3>
                                <div className="btn-box"><Link href="/index-11">Read More</Link></div>
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
