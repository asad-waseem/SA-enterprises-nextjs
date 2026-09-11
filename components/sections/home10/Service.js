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
            <section className="service-home-10" style={{ background: 'url(assets/images-2/background/service-bg-2.jpg)' }}>
                <div className="border-shape">
                    <div className="shape shape-1" />
                    <div className="shape shape-2" />
                    <div className="shape shape-3" />
                    <div className="shape shape-4" />
                </div>
                <div className="srvice-info">
                    <div className="auto-container">
                        <ul className="info-list nav nav-tabs clearfix" role="tablist">
                            <li className="nav-item" onClick={() => handleOnClick(1)}>
                                <a className={activeIndex == 1 ? "nav-link active" : "nav-link"}>
                                    <i className="flaticon-insurance" />
                                    <h6>Service 01</h6>
                                    <h3>Home Relocation</h3>
                                </a>
                            </li>
                            <li className="nav-item" onClick={() => handleOnClick(2)}>
                                <a className={activeIndex == 2 ? "nav-link active" : "nav-link"}>
                                    <i className="flaticon-trolley" />
                                    <h6>Service 02</h6>
                                    <h3>Office Relocation</h3>
                                </a>
                            </li>
                            <li className="nav-item" onClick={() => handleOnClick(3)}>
                                <a className={activeIndex == 3 ? "nav-link active" : "nav-link"}>
                                    <i className="flaticon-doctor" />
                                    <h6>Service 03</h6>
                                    <h3>Packing Supplies</h3>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="content-box">
                    <span className="title-text">Services</span>
                    <div className="auto-container">
                        <div className="tab-content wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                            <div className={activeIndex == 1 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                                <div className="row clearfix">
                                    <div className="col-lg-4 col-md-12">
                                        <div className="inner-box">
                                            <p>Indignation &amp; dislike men who beguiled demoralized.</p>
                                            <ul className="list clearfix">
                                                <li><Link href="/finance-restructuring">Decide to Move</Link></li>
                                                <li><Link href="/finance-restructuring">Plan and Organize</Link></li>
                                                <li><Link href="/finance-restructuring">Preparing for packing</Link></li>
                                                <li><Link href="/finance-restructuring">Online Directories</Link></li>
                                                <li><Link href="/finance-restructuring">Insurance</Link></li>
                                            </ul>
                                            <div className="link"><Link href="/finance-restructuring"><i className="flaticon-right" />Read More</Link></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={activeIndex == 2 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                                <div className="row clearfix">
                                    <div className="col-lg-4 col-md-12 offset-lg-4">
                                        <div className="inner-box">
                                            <p>Indignation &amp; dislike men who beguiled demoralized.</p>
                                            <ul className="list clearfix">
                                                <li><Link href="/finance-restructuring">Decide to Move</Link></li>
                                                <li><Link href="/finance-restructuring">Plan and Organize</Link></li>
                                                <li><Link href="/finance-restructuring">Preparing for packing</Link></li>
                                                <li><Link href="/finance-restructuring">Online Directories</Link></li>
                                                <li><Link href="/finance-restructuring">Insurance</Link></li>
                                            </ul>
                                            <div className="link"><Link href="/finance-restructuring"><i className="flaticon-right" />Read More</Link></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={activeIndex == 3 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                                <div className="row clearfix">
                                    <div className="col-lg-4 col-md-12 offset-lg-8">
                                        <div className="inner-box">
                                            <p>Indignation &amp; dislike men who beguiled demoralized.</p>
                                            <ul className="list clearfix">
                                                <li><Link href="/finance-restructuring">Decide to Move</Link></li>
                                                <li><Link href="/finance-restructuring">Plan and Organize</Link></li>
                                                <li><Link href="/finance-restructuring">Preparing for packing</Link></li>
                                                <li><Link href="/finance-restructuring">Online Directories</Link></li>
                                                <li><Link href="/finance-restructuring">Insurance</Link></li>
                                            </ul>
                                            <div className="link"><Link href="/finance-restructuring"><i className="flaticon-right" />Read More</Link></div>
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
