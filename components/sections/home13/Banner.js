
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
            <section className="banner-section banner-section-home13">
                <Swiper {...swiperOptions} className="banner-carousel theme_carousel owl-theme">
                    {/* Slide Item */}
                    <SwiperSlide className="slide-item">
                        <div className="image-layer lazy-image" data-bg="/assets/images-4/main-slider/1.jpg" />
                        <div className="auto-container">
                            <div className="row clearfix">
                                <div className="col-lg-6 col-md-12">
                                    <div className="content-box">
                                        <h2>Doing It <br />Right Costs Less <br />Than Doing It <br />Over!..</h2>
                                        <div className="btn-box">
                                            <Link href="/index-12" className="theme-btn btn-style-seven"><span className="btn-title">Read More</span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide-item">
                        <div className="image-layer lazy-image" data-bg="/assets/images-4/main-slider/2.jpg" />
                        <div className="auto-container">
                            <div className="row clearfix">
                                <div className="col-lg-6 col-md-12">
                                    <div className="content-box">
                                        <h2>The Road <br />to the Future… <br />is Under <br />Construction...</h2>
                                        <div className="btn-box">
                                            <Link href="/index-12" className="theme-btn btn-style-seven"><span className="btn-title">Read More</span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide-item">
                        <div className="image-layer lazy-image" data-bg="/assets/images-4/main-slider/3.jpg" />
                        <div className="auto-container">
                            <div className="row clearfix">
                                <div className="col-lg-5 col-md-12">
                                    <div className="content-box">
                                        <h2>Trust is <br />Just One of <br />the Things We <br />Build Well...</h2>
                                        <div className="btn-box">
                                            <Link href="/index-12" className="theme-btn btn-style-seven"><span className="btn-title">Read More</span></Link>
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
