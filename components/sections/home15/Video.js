'use client'
import Link from "next/link"
import { useState } from 'react'
import ReactCurvedText from 'react-curved-text'
import ModalVideo from 'react-modal-video'

export default function Video() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <section className="video-section-home15 text-center">
                <div className="bg-layer" style={{ backgroundImage: 'url(assets/images-4/background/video-bg-3.jpg)' }} />
                <div className="auto-container">
                    <div className="inner-box" style={{ backgroundImage: 'url(assets/images-4/background/video-bg-4.jpg)' }}>
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
                                        text='Envolve Digital Agency service since 1985'
                                        textProps={{ "style": { "fontSize": "18" } }}
                                        textPathProps={{ "fill": "#ffffff" }}
                                        tspanProps={null}
                                        ellipseProps={null}
                                        svgProps={null}
                                    />
                            </a>
                        </div>
                        <h2>We work with you to make the most <br />of your online presence</h2>
                        <Link href="/index-15" className="theme-btn btn-style-ten"><span className="btn-title">Let’s Start</span></Link>
                    </div>
                </div>
            </section>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="vfhzo499OeA" onClose={() => setOpen(false)} />
        </>
    )
}
