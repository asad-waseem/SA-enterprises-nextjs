'use client'
import Link from "next/link"
import { useState } from "react"


export default function Service() {
    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    return (
        <>
            <section className="service-section-home14">
                <div className="auto-container">
                    <div className="tabs-box">
                        <div className="line-box">
                            <div className="line line-1" />
                            <div className="line line-2" />
                        </div>
                        <div className="tab-btns tab-buttons">
                            <div className="row clearfix">
                                <div className="col-lg-4 col-md-6 col-sm-12 btn-column">
                                    <div onClick={() => handleOnClick(1)} className={activeIndex === 1 ? "tab-btn active-btn" : "tab-btn"}>
                                        <div className="icon-box"><i className="customicon-blueprint" /></div>
                                        <span>Service 01</span>
                                        <h3>Building Design</h3>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 btn-column">
                                    <div onClick={() => handleOnClick(2)} className={activeIndex === 2 ? "tab-btn active-btn" : "tab-btn"}>
                                        <div className="icon-box"><i className="customicon-sketch" /></div>
                                        <span>Service 02</span>
                                        <h3>Building Analysis</h3>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12 col-sm-12 btn-column">
                                    <div onClick={() => handleOnClick(3)} className={activeIndex === 3 ? "tab-btn active-btn" : "tab-btn"}>
                                        <div className="icon-box"><i className="customicon-checkmark" /></div>
                                        <span>Service 03</span>
                                        <h3>Cost Estimating</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tabs-content" style={{ backgroundImage: 'url(assets/images-4/background/tabs-bg.jpg)' }}>
                            <span className="big-text">Services</span>
                            <div className={activeIndex === 1 ? "tab active-tab" : "tab"}>
                                <div className="content-inner">
                                    <div className="row clearfix">
                                        <div className="col-xl-4 col-lg-12 col-md-12 content-column">
                                            <div className="content-box">
                                                <p>Indignation &amp; dislike men who beguiled demoralized.</p>
                                                <ul className="list clearfix">
                                                    <li>Business Buildings</li>
                                                    <li>Educational Buildings</li>
                                                    <li>Industrial Buildings</li>
                                                    <li>Residential Buildings</li>
                                                    <li>Storage Buildings</li>
                                                </ul>
                                                <h6><Link href="/index-13"><i className="far fa-long-arrow-right" />Read More</Link></h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={activeIndex === 2 ? "tab active-tab" : "tab"}>
                                <div className="content-inner">
                                    <div className="row clearfix">
                                        <div className="col-xl-4 col-lg-12 col-md-12 offset-xl-4 content-column">
                                            <div className="content-box">
                                                <p>Indignation &amp; dislike men who beguiled demoralized.</p>
                                                <ul className="list clearfix">
                                                    <li>Business Buildings</li>
                                                    <li>Educational Buildings</li>
                                                    <li>Industrial Buildings</li>
                                                    <li>Residential Buildings</li>
                                                    <li>Storage Buildings</li>
                                                </ul>
                                                <h6><Link href="/index-13"><i className="far fa-long-arrow-right" />Read More</Link></h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={activeIndex === 3 ? "tab active-tab" : "tab"}>
                                <div className="content-inner">
                                    <div className="row clearfix">
                                        <div className="col-xl-4 col-lg-12 col-md-12 offset-xl-8 content-column">
                                            <div className="content-box">
                                                <p>Indignation &amp; dislike men who beguiled demoralized.</p>
                                                <ul className="list clearfix">
                                                    <li>Business Buildings</li>
                                                    <li>Educational Buildings</li>
                                                    <li>Industrial Buildings</li>
                                                    <li>Residential Buildings</li>
                                                    <li>Storage Buildings</li>
                                                </ul>
                                                <h6><Link href="/index-13"><i className="far fa-long-arrow-right" />Read More</Link></h6>
                                            </div>
                                        </div>
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
