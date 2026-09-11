'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 6,
    spaceBetween: 30,
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
            slidesPerView: 3,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 6,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 6,
            spaceBetween: 30,
        },
    }
}


export default function Clients() {
    return (
        <>
            <section className="clients-home-7">
                <div className="outer-container">
                    <Swiper {...swiperOptions} className="theme_carousel owl-theme">
                        <SwiperSlide><figure className="clients-logo-box">
                            <Link href="/"><img src="/assets/images-2/clients/clients-logo-1.png" alt="" /></Link>
                            <span className="logo-title"><Link href="/">Visit Website</Link></span>
                        </figure>
                        </SwiperSlide>
                        <SwiperSlide><figure className="clients-logo-box">
                            <Link href="/"><img src="/assets/images-2/clients/clients-logo-2.png" alt="" /></Link>
                            <span className="logo-title"><Link href="/">Visit Website</Link></span>
                        </figure>
                        </SwiperSlide>
                        <SwiperSlide><figure className="clients-logo-box">
                            <Link href="/"><img src="/assets/images-2/clients/clients-logo-3.png" alt="" /></Link>
                            <span className="logo-title"><Link href="/">Visit Website</Link></span>
                        </figure>
                        </SwiperSlide>
                        <SwiperSlide><figure className="clients-logo-box">
                            <Link href="/"><img src="/assets/images-2/clients/clients-logo-4.png" alt="" /></Link>
                            <span className="logo-title"><Link href="/">Visit Website</Link></span>
                        </figure>
                        </SwiperSlide>
                        <SwiperSlide><figure className="clients-logo-box">
                            <Link href="/"><img src="/assets/images-2/clients/clients-logo-5.png" alt="" /></Link>
                            <span className="logo-title"><Link href="/">Visit Website</Link></span>
                        </figure>
                        </SwiperSlide>
                        <SwiperSlide><figure className="clients-logo-box">
                            <Link href="/"><img src="/assets/images-2/clients/clients-logo-6.png" alt="" /></Link>
                            <span className="logo-title"><Link href="/">Visit Website</Link></span>
                        </figure>
                        </SwiperSlide>
                        <SwiperSlide><figure className="clients-logo-box">
                            <Link href="/"><img src="/assets/images-2/clients/clients-logo-1.png" alt="" /></Link>
                            <span className="logo-title"><Link href="/">Visit Website</Link></span>
                        </figure>
                        </SwiperSlide>
                        <SwiperSlide><figure className="clients-logo-box">
                            <Link href="/"><img src="/assets/images-2/clients/clients-logo-2.png" alt="" /></Link>
                            <span className="logo-title"><Link href="/">Visit Website</Link></span>
                        </figure>
                        </SwiperSlide>
                        <SwiperSlide><figure className="clients-logo-box">
                            <Link href="/"><img src="/assets/images-2/clients/clients-logo-3.png" alt="" /></Link>
                            <span className="logo-title"><Link href="/">Visit Website</Link></span>
                        </figure>
                        </SwiperSlide>
                        <SwiperSlide><figure className="clients-logo-box">
                            <Link href="/"><img src="/assets/images-2/clients/clients-logo-4.png" alt="" /></Link>
                            <span className="logo-title"><Link href="/">Visit Website</Link></span>
                        </figure>
                        </SwiperSlide>
                        <SwiperSlide><figure className="clients-logo-box">
                            <Link href="/"><img src="/assets/images-2/clients/clients-logo-5.png" alt="" /></Link>
                            <span className="logo-title"><Link href="/">Visit Website</Link></span>
                        </figure>
                        </SwiperSlide>
                        <SwiperSlide><figure className="clients-logo-box">
                            <Link href="/"><img src="/assets/images-2/clients/clients-logo-6.png" alt="" /></Link>
                            <span className="logo-title"><Link href="/">Visit Website</Link></span>
                        </figure>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
        </>
    )
}
