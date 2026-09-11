
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
            <section className="banner-section banner-section-home15 text-center">
                <Swiper {...swiperOptions} className="banner-carousel theme_carousel owl-theme">
                    {/* Slide Item */}
                    <SwiperSlide className="slide-item">
                        <div className="image-layer lazy-image" data-bg="/assets/images-4/main-slider/7.jpg" />
                        <div className="auto-container">
                            <div className="content-box">
                                <h2>We deliver</h2>
                                <h3>the digital results you desire</h3>
                                <p>These cases are perfectly simple and easy to distinguish. In a free hour when our <br />power choice is  prevents praising will give you.</p>
                                <div className="btn-box">
                                    <Link href="/index-12" className="theme-btn btn-style-ten"><span className="btn-title">Read More</span></Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide-item">
                        <div className="image-layer lazy-image" data-bg="/assets/images-4/main-slider/8.jpg" />
                        <div className="auto-container">
                            <div className="content-box">
                                <h2>Creative</h2>
                                <h3>solutions to digital challenges</h3>
                                <p>These cases are perfectly simple and easy to distinguish. In a free hour when our <br />power choice is  prevents praising will give you.</p>
                                <div className="btn-box">
                                    <Link href="/index-12" className="theme-btn btn-style-ten"><span className="btn-title">Read More</span></Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide-item">
                        <div className="image-layer lazy-image" data-bg="/assets/images-4/main-slider/9.jpg" />
                        <div className="auto-container">
                            <div className="content-box">
                                <h2>Our approach</h2>
                                <h3>is rooted in digital marketing</h3>
                                <p>These cases are perfectly simple and easy to distinguish. In a free hour when our <br />power choice is  prevents praising will give you.</p>
                                <div className="btn-box">
                                    <Link href="/index-12" className="theme-btn btn-style-ten"><span className="btn-title">Read More</span></Link>
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
