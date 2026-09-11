
'use client'
import Link from "next/link"
import { useState } from "react"
import ModalVideo from 'react-modal-video'
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
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <section className="banner-section style-12">
                <Swiper {...swiperOptions} className="banner-carousel theme_carousel owl-theme">
                    {/* Slide Item */}
                    <SwiperSlide className="slide-item">
                        <div className="image-layer lazy-image" data-bg="/assets/images-2/main-slider/10.jpg" />
                        <div className="auto-container">
                            <div className="row clearfix">
                                <div className="col-lg-7 col-md-12">
                                    <div className="content-box">
                                        <div className="video-btn">
                                            <a onClick={() => setOpen(true)} className="overlay-link lightbox-image video-fancybox ripple"><span className="play-icon flaticon-play" /></a><h6>Latest Program Video</h6>
                                        </div>
                                        <h2>Enjoy the <br />benefit of our courses</h2>
                                        <p>These cases are perfectly simple and easy to distinguish. In a free hour <br />when our power of choice is  prevents.</p>
                                        <div className="btn-box">
                                            <Link href="/index-12" className="theme-btn btn-style-four"><span className="btn-title">Read More</span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide-item">
                        <div className="image-layer lazy-image" data-bg="/assets/images-2/main-slider/11.jpg" />
                        <div className="auto-container">
                            <div className="row clearfix">
                                <div className="col-lg-6 col-md-12 offset-lg-6">
                                    <div className="content-box">
                                        <div className="video-btn">
                                            <a onClick={() => setOpen(true)} className="overlay-link lightbox-image video-fancybox ripple"><span className="play-icon flaticon-play" /></a><h6>Latest Program Video</h6>
                                        </div>
                                        <h2>Our experts <br />teaching great skills</h2>
                                        <p>These cases are perfectly simple and easy to distinguish. In a free hour <br />when our power of choice is  prevents.</p>
                                        <div className="btn-box">
                                            <Link href="/index-12" className="theme-btn btn-style-four"><span className="btn-title">Read More</span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide-item">
                        <div className="image-layer lazy-image" data-bg="/assets/images-2/main-slider/12.jpg" />
                        <div className="auto-container">
                            <div className="row clearfix">
                                <div className="col-lg-7 col-md-12">
                                    <div className="content-box">
                                        <div className="video-btn">
                                            <a onClick={() => setOpen(true)} className="overlay-link lightbox-image video-fancybox ripple"><span className="play-icon flaticon-play" /></a><h6>Latest Program Video</h6>
                                        </div>
                                        <h2>The online course <br />makes ideas come true</h2>
                                        <p>These cases are perfectly simple and easy to distinguish. In a free hour <br />when our power of choice is  prevents.</p>
                                        <div className="btn-box">
                                            <Link href="/index-12" className="theme-btn btn-style-four"><span className="btn-title">Read More</span></Link>
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

            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="vfhzo499OeA" onClose={() => setOpen(false)} />
        </>
    )
}
