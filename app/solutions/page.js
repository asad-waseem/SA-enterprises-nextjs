'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function SolutionsPage() {
    return (
        <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Procurement Solutions" wrapperCls="home_1">
            <section className="services-section-six">
                <div className="auto-container">
                    <div className="sec-title text-center">
                        <h2>End-to-End Corporate <br /> Procurement &amp; Sourcing Solutions</h2>
                        <div className="text-decoration">
                            <span className="left" />
                            <span className="right" />
                        </div>
                    </div>
                    <div className="row">
                        {/* 1. IT Hardware */}
                        <div className="col-lg-4 service-block-six">
                            <div className="inner-box">
                                <div className="image-box">
                                    <img className="lazy-image" src="/assets/images/resource/image-18.jpg" alt="IT Hardware Procurement" />
                                    <div className="icon-box"><span className="flaticon-up-arrow-1" /></div>
                                </div>
                                <div className="lower-content">
                                    <h4><Link href="/solutions/it-hardware">IT Hardware &amp; Workstations</Link></h4>
                                    <div className="text">Enterprise-grade laptops, desktop fleets, engineering workstations, and business displays tailored to corporate standards.</div>
                                    <div className="link-btn"><Link href="/solutions/it-hardware" className="theme-btn btn-style-one"><span className="btn-title">View Sourcing Scope</span></Link></div>
                                </div>
                            </div>
                        </div>

                        {/* 2. Office Equipment */}
                        <div className="col-lg-4 service-block-six">
                            <div className="inner-box">
                                <div className="image-box">
                                    <img className="lazy-image" src="/assets/images/resource/image-19.jpg" alt="Office Equipment Procurement" />
                                    <div className="icon-box"><span className="flaticon-up-arrow-1" /></div>
                                </div>
                                <div className="lower-content">
                                    <h4><Link href="/solutions/office-equipment">Office Equipment &amp; Print</Link></h4>
                                    <div className="text">High-throughput multifunction laser printers, high-speed document scanners, and heavy-duty office machinery.</div>
                                    <div className="link-btn"><Link href="/solutions/office-equipment" className="theme-btn btn-style-one"><span className="btn-title">View Sourcing Scope</span></Link></div>
                                </div>
                            </div>
                        </div>

                        {/* 3. Networking */}
                        <div className="col-lg-4 service-block-six">
                            <div className="inner-box">
                                <div className="image-box">
                                    <img className="lazy-image" src="/assets/images/resource/image-20.jpg" alt="Networking Equipment" />
                                    <div className="icon-box"><span className="flaticon-up-arrow-1" /></div>
                                </div>
                                <div className="lower-content">
                                    <h4><Link href="/solutions/networking">Networking Infrastructure</Link></h4>
                                    <div className="text">Managed PoE Gigabit switches, commercial routers, enterprise Wi-Fi 6 APs, server racks, and structured cabling.</div>
                                    <div className="link-btn"><Link href="/solutions/networking" className="theme-btn btn-style-one"><span className="btn-title">View Sourcing Scope</span></Link></div>
                                </div>
                            </div>
                        </div>

                        {/* 4. Printing & Consumables */}
                        <div className="col-lg-4 service-block-six">
                            <div className="inner-box">
                                <div className="image-box">
                                    <img className="lazy-image" src="/assets/images/resource/image-21.jpg" alt="Printing and Consumables" />
                                    <div className="icon-box"><span className="flaticon-up-arrow-1" /></div>
                                </div>
                                <div className="lower-content">
                                    <h4><Link href="/solutions/printing-consumables">Printing &amp; Consumables</Link></h4>
                                    <div className="text">Original OEM toner cartridges, drum units, and ink supplies available through flexible scheduled supply agreements.</div>
                                    <div className="link-btn"><Link href="/solutions/printing-consumables" className="theme-btn btn-style-one"><span className="btn-title">View Sourcing Scope</span></Link></div>
                                </div>
                            </div>
                        </div>

                        {/* 5. Accessories & Essentials */}
                        <div className="col-lg-4 service-block-six">
                            <div className="inner-box">
                                <div className="image-box">
                                    <img className="lazy-image" src="/assets/images/resource/image-22.jpg" alt="Accessories and Essentials" />
                                    <div className="icon-box"><span className="flaticon-up-arrow-1" /></div>
                                </div>
                                <div className="lower-content">
                                    <h4><Link href="/solutions/accessories">Accessories &amp; Essentials</Link></h4>
                                    <div className="text">Thunderbolt docking stations, ergonomic keyboards, mice, line-interactive UPS units, and conference peripherals.</div>
                                    <div className="link-btn"><Link href="/solutions/accessories" className="theme-btn btn-style-one"><span className="btn-title">View Sourcing Scope</span></Link></div>
                                </div>
                            </div>
                        </div>

                        {/* 6. Custom Demand & Sourcing */}
                        <div className="col-lg-4 service-block-six">
                            <div className="inner-box">
                                <div className="image-box">
                                    <img className="lazy-image" src="/assets/images/resource/image-23.jpg" alt="Custom Demand & Sourcing" />
                                    <div className="icon-box"><span className="flaticon-up-arrow-1" /></div>
                                </div>
                                <div className="lower-content">
                                    <h4><Link href="/solutions/custom-procurement">Custom Demand &amp; Sourcing</Link></h4>
                                    <div className="text">Tailored procurement for unique enterprise demands, specialized hardware specs, rare components, and full BOM fulfillment.</div>
                                    <div className="link-btn"><Link href="/solutions/custom-procurement" className="theme-btn btn-style-one"><span className="btn-title">View Sourcing Scope</span></Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}
