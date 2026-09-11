'use client'
import Link from "next/link"
import { useState } from "react"


export default function About() {
    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    return (
        <>
            <section className="about-home-12">
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="col-lg-4">
                            <div className="content-box">
                                <div className="sec-title">
                                    <h4>About Envolve</h4>
                                    <h2>Let’s Grow Your Education Level With Envolve</h2>
                                </div>
                                <div className="text">
                                    <p>As a solution providing company we offer a wide range of consulting, development &amp; quality services with 100% satisfaction.</p>
                                    <ul>
                                        <li>Idea of denouncing pleasure &amp; praising</li>
                                        <li>Ever undertakes laborious physical</li>
                                        <li>Avoids a pain that produces no resultant </li>
                                    </ul>
                                    <Link href="/home-12" className="theme-btn btn-style-five"><span className="btn-title">Read More</span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="inner-box">
                                <ul className="info-list nav nav-tabs clearfix" role="tablist">
                                    <li className="nav-item" onClick={() => handleOnClick(1)}>
                                        <a className={activeIndex == 1 ? "nav-link active" : "nav-link"}><i className="flaticon-tick" />Our Mission</a>
                                    </li>
                                    <li className="nav-item" onClick={() => handleOnClick(2)}>
                                        <a className={activeIndex == 2 ? "nav-link active" : "nav-link"}><i className="flaticon-tick" />Our Vison</a>
                                    </li>
                                    <li className="nav-item" onClick={() => handleOnClick(3)}>
                                        <a className={activeIndex == 3 ? "nav-link active" : "nav-link"}><i className="flaticon-tick" />Core Values</a>
                                    </li>
                                </ul>
                                <div className="tab-content wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                    <div className={activeIndex == 1 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                                        <figure className="image-box"><img src="/assets/images-2/resource/about-4.jpg" alt="" /></figure>
                                    </div>
                                    <div className={activeIndex == 2 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                                        <figure className="image-box"><img src="/assets/images-2/resource/about-4.jpg" alt="" /></figure>
                                    </div>
                                    <div className={activeIndex == 3 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                                        <figure className="image-box"><img src="/assets/images-2/resource/about-4.jpg" alt="" /></figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
