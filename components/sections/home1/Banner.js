'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
}

export default function Banner() {
    return (
        <>
            <section className="banner-section style-one">
                <Swiper {...swiperOptions} className="banner-carousel theme_carousel owl-theme">
                    <SwiperSlide className="slide-item">
                        <div className="image-layer lazy-image" data-bg="/assets/images/main-slider/1.jpg" />
                        <div className="auto-container">
                            <div className="content-box justify-content-end">
                                <div>
                                    <h3>SA Enterprises</h3>
                                    <h2>Where Business <br /> Needs Come First.</h2>
                                    <div className="text">Reliable B2B procurement and corporate sourcing solutions for modern organizations.</div>
                                    <div className="btn-box">
                                        <Link href="/products" className="theme-btn btn-style-one"><span className="btn-title">Browse Catalogue</span></Link>
                                        <Link href="/contact" className="theme-btn btn-style-two"><span className="btn-title">Request a Quote</span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide-item">
                        <div className="image-layer lazy-image" data-bg="/assets/images/main-slider/2.jpg" />
                        <div className="auto-container">
                            <div className="content-box justify-content-end">
                                <div>
                                    <h3>Procurement Simplified</h3>
                                    <h2>Hardware, Equipment <br /> &amp; Supplies Sourcing</h2>
                                    <div className="text">From enterprise IT fleets to office infrastructure, we source and deliver verified equipment.</div>
                                    <div className="btn-box">
                                        <Link href="/solutions" className="theme-btn btn-style-one"><span className="btn-title">Our Solutions</span></Link>
                                        <Link href="/contact" className="theme-btn btn-style-two"><span className="btn-title">Submit RFQ</span></Link>
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
