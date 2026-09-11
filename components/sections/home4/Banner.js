
'use client'
import Link from "next/link"
import { useState } from 'react'
import ModalVideo from 'react-modal-video'
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
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <section className="banner-section style-four">
                <Swiper {...swiperOptions} className="banner-carousel theme_carousel owl-theme">
                    {/* Slide Item */}
                    <SwiperSlide className="slide-item">
                        <div className="image-layer lazy-image" data-bg="/assets/images/main-slider/10.jpg" />
                        <div className="auto-container">
                            <div className="content-box">
                                <div>
                                    <h2>Your Partners <br /> in Good Profit.</h2>
                                    <div className="text"><a onClick={() => setOpen(true)} className="video-btn overlay-link lightbox-image video-fancybox ripple"><span className="fas fa-play" /></a>Every pleasures is to welcomed pain avoided owing <br />duty the obligations of our business.</div>
                                    <div className="btn-box">
                                        <Link href="#" className="theme-btn btn-style-one"><span className="btn-title">More About Envolve <i className="fa fa-caret-right" /></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* Slide Item */}
                    <SwiperSlide className="slide-item">
                        <div className="image-layer lazy-image" data-bg="/assets/images/main-slider/11.jpg" />
                        <div className="auto-container">
                            <div className="content-box justify-content-end">
                                <div>
                                    <h2><span>100<sub>%</sub></span> Guarantee  <br />on Your Money </h2>
                                    <div className="text"><a onClick={() => setOpen(true)} className="video-btn overlay-link lightbox-image video-fancybox ripple"><span className="fas fa-play" /></a>Every pleasures is to welcomed pain avoided owing <br />duty the obligations of our business.</div>
                                    <div className="btn-box">
                                        <Link href="#" className="theme-btn btn-style-one"><span className="btn-title">More About Envolve <i className="fa fa-caret-right" /></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* Slide Item */}
                    <SwiperSlide className="slide-item">
                        <div className="image-layer lazy-image" data-bg="/assets/images/main-slider/12.jpg" />
                        <div className="auto-container">
                            <div className="content-box">
                                <div>
                                    <h2>Your Partners <br /> in Good Profit.</h2>
                                    <div className="text"><a onClick={() => setOpen(true)} className="video-btn overlay-link lightbox-image video-fancybox ripple"><span className="fas fa-play" /></a>Every pleasures is to welcomed pain avoided owing <br />duty the obligations of our business.</div>
                                    <div className="btn-box">
                                        <Link href="#" className="theme-btn btn-style-one"><span className="btn-title">More About Envolve <i className="fa fa-caret-right" /></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <div className="swiper-pagination relative" />
                </Swiper>
            </section>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="vfhzo499OeA" onClose={() => setOpen(false)} />
        </>
    )
}
