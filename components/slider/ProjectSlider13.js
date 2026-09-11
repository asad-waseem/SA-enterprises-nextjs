'use client'
import Link from "next/link"
import { Autoplay, FreeMode, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation, FreeMode],
    slidesPerView: 2,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,
    freeMode: true,
    centeredSlides: true,

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

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        575: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        767: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
    }
}
export default function ProjectSlider13() {
    return (
        <>
            <Swiper {...swiperOptions} className="theme_carousel owl-theme">
                <SwiperSlide className="slide">
                    <div className="project-block">
                        <div className="inner-box">
                            <figure className="image-box"><img src="/assets/images-4/project/project-1.jpg" alt="" /></figure>
                            <div className="text">
                                <p><i className="fas fa-folder-open" />Construction</p>
                                <h2><Link href="/portfolio-details">Spiral Staircase Building</Link></h2>
                                <div className="btn-box">
                                    <Link href="/portfolio-details">Read More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="project-block">
                        <div className="inner-box">
                            <figure className="image-box"><img src="/assets/images-4/project/project-2.jpg" alt="" /></figure>
                            <div className="text">
                                <p><i className="fas fa-folder-open" />Construction</p>
                                <h2><Link href="/portfolio-details">Spiral Staircase Building</Link></h2>
                                <div className="btn-box">
                                    <Link href="/portfolio-details">Read More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="project-block">
                        <div className="inner-box">
                            <figure className="image-box"><img src="/assets/images-4/project/project-3.jpg" alt="" /></figure>
                            <div className="text">
                                <p><i className="fas fa-folder-open" />Construction</p>
                                <h2><Link href="/portfolio-details">Spiral Staircase Building</Link></h2>
                                <div className="btn-box">
                                    <Link href="/portfolio-details">Read More</Link>
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

        </>
    )
}
