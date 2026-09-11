'use client'
import Link from "next/link"
import { useState } from "react"


export default function Pricing() {
    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    return (
        <>
            <section className="pricing-home-10">
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="col-lg-6">
                            <div className="content-box">
                                <div className="sec-title">
                                    <h4>Pricing &amp; Plan</h4>
                                    <h2>Doing it right <br />Costs less in the end</h2>
                                </div>
                                <div className="text">
                                    <p>Indignation and dislike men who are so beguiled and demoralized by the charms of
                                        pleasure of the moment.</p>
                                </div>
                                <ul className="info-list nav nav-tabs clearfix" role="tablist">
                                    <li className="nav-item" onClick={() => handleOnClick(1)}>
                                        <a className={activeIndex == 1 ? "nav-link active" : "nav-link"}>Home Relocation</a>
                                    </li>
                                    <li className="nav-item" onClick={() => handleOnClick(2)}>
                                        <a className={activeIndex == 2 ? "nav-link active" : "nav-link"}>Office Relocation</a>
                                    </li>
                                </ul>
                                <div className="btn-box"><Link href="/index-10">Get in Touch</Link></div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="tab-content wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                <div className={activeIndex == 1 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                                    <div className="row clearfix">
                                        <div className="col-lg-6 col-md-6">
                                            <div className="paricing-table">
                                                <div className="table-header">
                                                    <div className="icon-box"><i className="fal fa-map-marked-alt" /></div>
                                                    <h3>Local Shifting</h3>
                                                    <p>(Move 60 Km Surrounding)</p>
                                                </div>
                                                <div className="table-footer">
                                                    <h2>05</h2>
                                                    <p>Dollar Per Kilo Meter</p>
                                                    <Link href="/index-10">Get a Quote</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="paricing-table">
                                                <div className="table-header">
                                                    <div className="icon-box"><i className="fal fa-shipping-fast" /></div>
                                                    <h3>Outer Shifting</h3>
                                                    <p>(Shifting More than 60 Km)</p>
                                                </div>
                                                <div className="table-footer">
                                                    <h2>18</h2>
                                                    <p>Dollar Per Kilo Meter</p>
                                                    <Link href="/index-10">Get a Quote</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={activeIndex == 2 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                                    <div className="row clearfix">
                                        <div className="col-lg-6 col-md-6">
                                            <div className="paricing-table">
                                                <div className="table-header">
                                                    <div className="icon-box"><i className="fal fa-map-marked-alt" /></div>
                                                    <h3>Local Shifting</h3>
                                                    <p>(Move 60 Km Surrounding)</p>
                                                </div>
                                                <div className="table-footer">
                                                    <h2>05</h2>
                                                    <p>Dollar Per Kilo Meter</p>
                                                    <Link href="/index-10">Get a Quote</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="paricing-table">
                                                <div className="table-header">
                                                    <div className="icon-box"><i className="fal fa-shipping-fast" /></div>
                                                    <h3>Outer Shifting</h3>
                                                    <p>(Shifting More than 60 Km)</p>
                                                </div>
                                                <div className="table-footer">
                                                    <h2>18</h2>
                                                    <p>Dollar Per Kilo Meter</p>
                                                    <Link href="/index-10">Get a Quote</Link>
                                                </div>
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
