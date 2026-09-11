
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
            <section className="banner-section style-ten">
                <Swiper {...swiperOptions} className="banner-carousel theme_carousel owl-theme">
                    {/* Slide Item */}
                    <SwiperSlide className="slide-item">
                        <div className="image-layer lazy-image" data-bg="/assets/images-2/main-slider/7.jpg" />
                        <div className="auto-container">
                            <div className="row clearfix">
                                <div className="col-lg-6 col-md-12">
                                    <div className="banner-content">
                                        <h2>We are packing &amp; moving! around the world &amp; street</h2>
                                        <p>It is a long established fact that a readers will be distracted by content of a
                                            page when looking at its layout.</p>
                                        <Link href="/index-10" className="banner-btn">Read More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide-item">
                        <div className="image-layer lazy-image" data-bg="/assets/images-2/main-slider/8.jpg" />
                        <div className="auto-container">
                            <div className="row clearfix">
                                <div className="col-lg-6 col-md-12 offset-lg-6">
                                    <div className="banner-content">
                                        <h2>The quality <br />shows in every move we make</h2>
                                        <p>Power of choice is untrammelled and when nothing prevents our being able to do
                                            what we like best.</p>
                                        <Link href="/index-10" className="banner-btn">Read More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide-item">
                        <div className="image-layer lazy-image" data-bg="/assets/images-2/main-slider/9.jpg" />
                        <div className="auto-container">
                            <div className="row clearfix">
                                <div className="col-lg-6 col-md-12">
                                    <div className="banner-content">
                                        <h2>The careful movers Doing it right. Costs less in the end</h2>
                                        <p>Power of choice is untrammelled and when nothing prevents our being able to do
                                            what we like best.</p>
                                        <Link href="/index-10" className="banner-btn">Read More</Link>
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
