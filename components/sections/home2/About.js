'use client'
import AboutSlider6 from "@/components/slider/AboutSlider6"
import Link from "next/link"
import { useState } from 'react'
import ReactCurvedText from 'react-curved-text'
import ModalVideo from 'react-modal-video'


export default function About() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <section className="about-section-two">
                <div className="auto-container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="image-block">
                                <div className="image-one"><img className="lazy-image owl-lazy" src="/assets/images/resource/image-8.jpg" alt="" /></div>
                                <div className="image-two"><img className="lazy-image owl-lazy" src="/assets/images/resource/image-9.jpg" alt="" /></div>
                                <div className="image-three">
                                    <img className="lazy-image owl-lazy" src="/assets/images/resource/image-10.jpg" alt="" />
                                    <div className="video-box">
                                        <a onClick={() => setOpen(true)} className="overlay-link lightbox-image video-fancybox ripple"><span className="play-icon flaticon-play" />
                                            <ReactCurvedText width='180'
                                                height='180'
                                                cx='90'
                                                cy='90'
                                                rx='60'
                                                ry='60'
                                                startOffset='0'
                                                reversed={true}
                                                text='World’s #1 Consultancy . Works where it matters'
                                                textProps={{ "style": { "fontSize": "18" } }}
                                                textPathProps={{ "fill": "#ffffff" }}
                                                tspanProps={null}
                                                ellipseProps={null}
                                                svgProps={null}
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="sec-title style-two">
                                <h4><span className="flaticon-endless" />About Company</h4>
                                <h2>Creating a Business with <br />Authentic Integrity</h2>
                            </div>
                            <div className="content-block">
                                <div className="text">Our power of choices is untrammelled and when nothing prevents <br /> to do what we like best principle of selection.</div>
                                <h4>Client Focused</h4>
                                <div className="text">Every pleasures is to welcomed pain avoided owing to the duty the obligations of business it will frequently occur that pleasures have be repudiated and annoyances accepted.</div>
                            </div>
                            {/*Testimonial Carousel*/}
                            <AboutSlider6 />
                            <Link href="#" className="read-more-link"><i className="flaticon-right-arrow" />More About Company</Link>
                        </div>
                    </div>
                </div>
            </section>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="vfhzo499OeA" onClose={() => setOpen(false)} />

        </>
    )
}
