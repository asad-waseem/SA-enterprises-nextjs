
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
        nextEl: '.owl-next',
        prevEl: '.owl-prev',
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
            <section className="banner-section style-two">
                <Swiper {...swiperOptions} className="banner-carousel theme_carousel owl-theme">
                    {/* Slide Item */}
                    <SwiperSlide className="slide-item">
                        <div className="image-layer lazy-image" data-bg="/assets/images/main-slider/4.jpg" />
                        <div className="pattern" />
                        <div className="auto-container">
                            <div className="content-box">
                                <div>
                                    <h3>Strategy &amp; Planning</h3>
                                    <h2>The Fastest <br /> Way to Achieve <br /> Success </h2>
                                    <div className="btn-box">
                                        <Link href="#" className="theme-btn btn-style-four"><span className="btn-title">Read More</span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* Slide Item */}
                    <SwiperSlide className="slide-item">
                        <div className="image-layer lazy-image" data-bg="/assets/images/main-slider/5.jpg" />
                        <div className="pattern" />
                        <div className="auto-container">
                            <div className="content-box">
                                <div>
                                    <h3>Support and Maintenance</h3>
                                    <h2>The Fastest <br /> Way to Achieve <br /> Success </h2>
                                    <div className="btn-box">
                                        <Link href="#" className="theme-btn btn-style-four"><span className="btn-title">Read More</span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* Slide Item */}
                    <SwiperSlide className="slide-item">
                        <div className="image-layer lazy-image" data-bg="/assets/images/main-slider/6.jpg" />
                        <div className="pattern" />
                        <div className="auto-container">
                            <div className="content-box">
                                <div>
                                    <h3>Committed to Your Success</h3>
                                    <h2>Unique <br /> solution from <br /> expert team.</h2>
                                    <div className="btn-box">
                                        <Link href="#" className="theme-btn btn-style-four"><span className="btn-title">Read More</span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <div className="owl-nav">
                        <button type="button" className="owl-prev">
                            <span>‹</span>
                        </button>
                        <button type="button" className="owl-next">
                            <span>›</span>
                        </button>
                    </div>
                </Swiper>


            </section>
        </>
    )
}
