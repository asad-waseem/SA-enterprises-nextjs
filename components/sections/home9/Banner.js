
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
            <section className="banner-section style-nine">
                <Swiper {...swiperOptions} className="banner-carousel theme_carousel owl-theme">
                    {/* Slide Item */}
                    <SwiperSlide className="slide-item">
                        <div className="image-layer lazy-image" data-bg="/assets/images-3/main-slider/slide-v9-1.jpg">
                        </div>
                        <div className="auto-container">
                            <div className="content-box">
                                <div>
                                    <h3>Quality With New Standards</h3>
                                    <h2>Right Choice<br /> of Your Car Service</h2>
                                    <div className="text">
                                        These cases are perfectly simple and easy to distinguish. In a free hour<br /> when
                                        our power of choice is prevents.
                                    </div>
                                    <div className="btn-box">
                                        <Link href="#" className="theme-btn btn-style-nine"><span className="btn-title">Get a
                                            Quote</span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* Slide Item */}
                    <SwiperSlide className="slide-item">
                        <div className="image-layer lazy-image" data-bg="/assets/images-3/main-slider/slide-v9-2.jpg">
                        </div>
                        <div className="auto-container">
                            <div className="content-box justify-content-end">
                                <div>
                                    <h3>Repairing Car satisfactorily</h3>
                                    <h2>get your best<br /> Performance back</h2>
                                    <div className="text">
                                        Power of choice is untrammelled and when nothing prevents our<br /> being able to do
                                        what we like best every.
                                    </div>
                                    <div className="btn-box">
                                        <Link href="#" className="theme-btn btn-style-nine"><span className="btn-title">Read
                                            More</span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* Slide Item */}
                    <SwiperSlide className="slide-item">
                        <div className="image-layer lazy-image" data-bg="/assets/images-3/main-slider/slide-v9-3.jpg">
                        </div>
                        <div className="auto-container">
                            <div className="content-box">
                                <div>
                                    <h3>Servicing for all Models</h3>
                                    <h2>Get an Instant<br /> power for YOur Car</h2>
                                    <div className="text">
                                        These cases are perfectly simple and easy to distinguish. In a free hour<br /> when
                                        our power of choice is prevents.
                                    </div>
                                    <div className="btn-box">
                                        <Link href="#" className="theme-btn btn-style-nine"><span className="btn-title">Read
                                            More</span></Link>
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
