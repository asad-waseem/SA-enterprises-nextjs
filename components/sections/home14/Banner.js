
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
            <section className="banner-section banner-section-home14">
                <Swiper {...swiperOptions} className="banner-carousel theme_carousel owl-theme">
                    {/* Slide Item */}
                    <SwiperSlide className="slide-item">
                        <div className="image-layer lazy-image" data-bg="/assets/images-4/main-slider/4.jpg" />
                        <div className="auto-container">
                            <div className="row clearfix">
                                <div className="col-lg-6 col-md-12">
                                    <div className="content-inner">
                                        <h6>Welcome to Envolve</h6>
                                        <h2>Architects that Design for the Future...</h2>
                                        <p>It is a long established fact that a readers will distracted content of a page when looking at its layout.</p>
                                        <div className="btn-box">
                                            <Link href="/index-12" className="theme-btn btn-style-nine"><span className="btn-title">Read More</span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide-item">
                        <div className="image-layer lazy-image" data-bg="/assets/images-4/main-slider/5.jpg" />
                        <div className="auto-container">
                            <div className="row clearfix">
                                <div className="col-lg-6 col-md-12">
                                    <div className="content-inner">
                                        <h6>Crafting with care</h6>
                                        <h2>Deliver <br />High-Quality <br />Projects</h2>
                                        <p>It is a long established fact that a readers will distracted content of a page when looking at its layout.</p>
                                        <div className="btn-box">
                                            <Link href="/index-12" className="theme-btn btn-style-nine"><span className="btn-title">Read More</span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide-item">
                        <div className="image-layer lazy-image" data-bg="/assets/images-4/main-slider/6.jpg" />
                        <div className="auto-container">
                            <div className="row clearfix">
                                <div className="col-lg-6 col-md-12">
                                    <div className="content-inner">
                                        <h6>The art of building</h6>
                                        <h2>Modern Architect With Iinnovation</h2>
                                        <p>It is a long established fact that a readers will distracted content of a page when looking at its layout.</p>
                                        <div className="btn-box">
                                            <Link href="/index-12" className="theme-btn btn-style-nine"><span className="btn-title">Read More</span></Link>
                                        </div>
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
