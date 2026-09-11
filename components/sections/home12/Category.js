'use client'
import { useState } from 'react'
import ModalVideo from 'react-modal-video'
import Link from "next/link"


export default function Category() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <section className="category-home-12">
                <div className="auto-container">
                    <div className="sec-title light">
                        <h4>Top categories</h4>
                        <h2>Explore Courses By Category</h2>
                        <div className="btn-box"><Link href="/home-12" className="theme-btn btn-style-five"><span className="btn-title">All Categories</span></Link></div>
                    </div>
                    <div className="row clearfix">
                        <div className="col-lg-2 col-md-6">
                            <div className="single-item">
                                <div className="content-box">
                                    <div className="icon-box"><i className="fal fa-palette" /></div>
                                    <h3><Link href="/index-12">Art &amp; Design</Link></h3>
                                    <p>15 Courses</p>
                                </div>
                                <div className="overlay-content" style={{ backgroundImage: 'url(assets/images-2/resource/category-1.jpg)' }}>
                                    <div className="inner">
                                        <div className="text">
                                            <h3><Link href="/index-12">Art &amp; Design</Link></h3>
                                            <p>15 Courses</p>
                                        </div>
                                        <div className="video-btn"><a onClick={() => setOpen(true)} className="overlay-link lightbox-image video-fancybox ripple"><span className="play-icon flaticon-play" /></a><h6>Course Preview</h6></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <div className="single-item">
                                <div className="content-box">
                                    <div className="icon-box"><i className="fal fa-cog" /></div>
                                    <h3><Link href="/index-12">Business</Link></h3>
                                    <p>8 Courses</p>
                                </div>
                                <div className="overlay-content" style={{ backgroundImage: 'url(assets/images-2/resource/category-1.jpg)' }}>
                                    <div className="inner">
                                        <div className="text">
                                            <h3><Link href="/index-12">Business</Link></h3>
                                            <p>8 Courses</p>
                                        </div>
                                        <div className="video-btn"><a onClick={() => setOpen(true)} className="overlay-link lightbox-image video-fancybox ripple"><span className="play-icon flaticon-play" /></a><h6>Course Preview</h6></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <div className="single-item">
                                <div className="content-box">
                                    <div className="icon-box"><i className="fal fa-chart-line-down" /></div>
                                    <h3><Link href="/index-12">Data Science</Link></h3>
                                    <p>12 Courses</p>
                                </div>
                                <div className="overlay-content" style={{ backgroundImage: 'url(assets/images-2/resource/category-1.jpg)' }}>
                                    <div className="inner">
                                        <div className="text">
                                            <h3><Link href="/index-12">Data Science</Link></h3>
                                            <p>12 Courses</p>
                                        </div>
                                        <div className="video-btn"><a onClick={() => setOpen(true)} className="overlay-link lightbox-image video-fancybox ripple"><span className="play-icon flaticon-play" /></a><h6>Course Preview</h6></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <div className="single-item">
                                <div className="content-box">
                                    <div className="icon-box"><i className="fal fa-function" /></div>
                                    <h3><Link href="/index-12">Math &amp; Logic</Link></h3>
                                    <p>6 Courses</p>
                                </div>
                                <div className="overlay-content" style={{ backgroundImage: 'url(assets/images-2/resource/category-1.jpg)' }}>
                                    <div className="inner">
                                        <div className="text">
                                            <h3><Link href="/index-12">Math &amp; Logic</Link></h3>
                                            <p>6 Courses</p>
                                        </div>
                                        <div className="video-btn"><a onClick={() => setOpen(true)} className="overlay-link lightbox-image video-fancybox ripple"><span className="play-icon flaticon-play" /></a><h6>Course Preview</h6></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <div className="single-item">
                                <div className="content-box">
                                    <div className="icon-box"><i className="fal fa-microchip" /></div>
                                    <h3><Link href="/index-12">Technology</Link></h3>
                                    <p>25 Courses</p>
                                </div>
                                <div className="overlay-content" style={{ backgroundImage: 'url(assets/images-2/resource/category-1.jpg)' }}>
                                    <div className="inner">
                                        <div className="text">
                                            <h3><Link href="/index-12">Technology</Link></h3>
                                            <p>25 Courses</p>
                                        </div>
                                        <div className="video-btn"><a onClick={() => setOpen(true)} className="overlay-link lightbox-image video-fancybox ripple"><span className="play-icon flaticon-play" /></a><h6>Course Preview</h6></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <div className="single-item">
                                <div className="content-box">
                                    <div className="icon-box"><i className="fal fa-camera" /></div>
                                    <h3><Link href="/index-12">Photography</Link></h3>
                                    <p>15 Courses</p>
                                </div>
                                <div className="overlay-content" style={{ backgroundImage: 'url(assets/images-2/resource/category-1.jpg)' }}>
                                    <div className="inner">
                                        <div className="text">
                                            <h3><Link href="/index-12">Photography</Link></h3>
                                            <p>15 Courses</p>
                                        </div>
                                        <div className="video-btn"><a onClick={() => setOpen(true)} className="overlay-link lightbox-image video-fancybox ripple"><span className="play-icon flaticon-play" /></a><h6>Course Preview</h6></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="vfhzo499OeA" onClose={() => setOpen(false)} />
        </>
    )
}
