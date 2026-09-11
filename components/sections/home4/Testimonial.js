
'use client'
import { useState } from 'react'
import 'swiper/css/free-mode'
import 'swiper/css/thumbs'
import { Autoplay, FreeMode, Navigation, Thumbs } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

export default function Testimonial() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null)
    const swiperOptions1 = {
        modules: [FreeMode, Autoplay, Navigation, Thumbs],
        onSwiper: setThumbsSwiper,
        freeMode: true,
        // preloadImages: false,
        loop: true,
        speed: 2400,
        spaceBetween: 0,
        effect: "slide",
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    }

    const swiperOptions2 = {
        modules: [FreeMode, Autoplay, Navigation, Thumbs],
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        thumbs: { swiper: thumbsSwiper },
        // preloadImages: false,
        loop: true,
        speed: 2400,
        spaceBetween: 0,
        effect: "slide",
        autoplay: {
            delay: 2500,
            disableOnInteraction: false
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    }
    return (
        <>
            <section className="testimonial-section-five">
                <div className="quote"><img src="/assets/images/icons/icon-37.png" alt="" /></div>
                <div className="auto-container">
                    <div className="testimonial-outer">
                        <div className="testimonial-carousel">
                            <div className="row m-0 align-items-end">
                                <div className="col-xl-6 p-0">
                                    <div className="swiper-container testimonial-content wow fadeInUp" data-wow-delay="300ms">
                                        <Swiper {...swiperOptions2}>
                                            <SwiperSlide>
                                                {/* Testimonial Block Five */}
                                                <div className="testimonial-block-five">
                                                    <div className="inner-box">
                                                        <div className="logo"><img src="/assets/images/resource/client-5.png" alt="" /></div>
                                                        <h4>Best service ever we recommend!..</h4>
                                                        <div className="text">Envolve’s analysts have done an excellent job presenting the analysis &amp; insights. We are confident that they have helped move our business.</div>
                                                        <div className="rating">
                                                            <span className="flaticon-star" />
                                                            <span className="flaticon-star" />
                                                            <span className="flaticon-star" />
                                                            <span className="flaticon-star" />
                                                            <span className="flaticon-star" />
                                                        </div>
                                                        <div className="author-title">Boris Elbert, <span className="designation">Developer Blue Soft.</span></div>
                                                        <div className="signature"><img src="/assets/images/resource/signature.png" alt="" /></div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                {/* Testimonial Block Five */}
                                                <div className="testimonial-block-five">
                                                    <div className="inner-box">
                                                        <div className="logo"><img src="/assets/images/resource/client-27.png" alt="" /></div>
                                                        <h4>Amazing Experience!..</h4>
                                                        <div className="text">Envolve’s  taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole.</div>
                                                        <div className="rating">
                                                            <span className="flaticon-star" />
                                                            <span className="flaticon-star" />
                                                            <span className="flaticon-star" />
                                                            <span className="flaticon-star" />
                                                            <span className="flaticon-star" />
                                                        </div>
                                                        <div className="author-title">Franklin Sinatran,
                                                            <span className="designation">Assistant Manager</span></div>
                                                        <div className="signature"><img src="/assets/images/resource/signature.png" alt="" /></div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        </Swiper>
                                        <div className="swiper-nav-button">
                                            {/* Add Arrows */}
                                            <div className="swiper-button-next h1n"><i className="flaticon-right-arrow" /></div>
                                            <div className="swiper-button-prev h1p"><i className="flaticon-right-arrow" /></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 p-0">
                                    {/* Swiper */}
                                    <Swiper {...swiperOptions1} className="swiper-container testimonial-thumbs">
                                        <SwiperSlide>
                                            <div className="author-thumb"><img src="/assets/images/resource/image-3.png" alt="" /></div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="author-thumb"><img src="/assets/images/resource/image-4.png" alt="" /></div>
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
