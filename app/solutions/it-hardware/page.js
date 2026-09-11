'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function ITHardwareSolutionPage() {
    return (
        <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="IT Hardware & Fleet Sourcing" wrapperCls="home_1">
            <section className="services-details">
                <div className="auto-container">
                    <div className="row">
                        <div className="col-lg-8 content-side">
                            <div className="image-box mb-4">
                                <img src="/assets/images/resource/image-34.jpg" alt="IT Hardware Procurement" className="w-100 rounded" />
                            </div>
                            <h2>Enterprise Laptops, Desktops &amp; Compute Fleets</h2>
                            <div className="text mb-4">
                                <p>SA Enterprises equips organizations with reliable, brand-new compute infrastructure tailored to specific department profiles. From executive ultrabooks to high-spec engineering workstations and volume administrative fleets, we ensure standard image compatibility, TPM 2.0 security, and full commercial warranties.</p>
                                <p>We maintain vendor relationships with tier-1 enterprise manufacturers to deliver customized memory allocations, fast NVMe solid-state storage, and pre-installed Windows 11 Pro operating systems.</p>
                            </div>
                            
                            <h3>Hardware Categories We Procure</h3>
                            <ul className="list-unstyled mb-4">
                                <li className="mb-2"><i className="fa fa-check text-warning mr-2" /> <strong>Executive &amp; Commercial Laptops:</strong> Lightweight, durable notebooks with all-day battery life and hardware-level encryption.</li>
                                <li className="mb-2"><i className="fa fa-check text-warning mr-2" /> <strong>Small Form Factor &amp; Tower Desktops:</strong> Reliable office workstations engineered for continuous multitasking.</li>
                                <li className="mb-2"><i className="fa fa-check text-warning mr-2" /> <strong>Engineering &amp; Creative Workstations:</strong> Dedicated GPU configurations for AutoCAD, data science, and rendering.</li>
                                <li className="mb-2"><i className="fa fa-check text-warning mr-2" /> <strong>Commercial Displays:</strong> 24-inch to 32-inch FHD, QHD, and 4K IPS panels with integrated USB-C power delivery hubs.</li>
                            </ul>

                            <div className="p-4 bg-light border rounded mb-4">
                                <h4>Need Custom Fleet Specifications?</h4>
                                <p className="mb-3">Submit your required configuration (CPU, RAM, SSD, Quantity) and receive an itemized quotation with estimated delivery timelines.</p>
                                <Link href="/contact?category=IT+Hardware#quote" className="theme-btn btn-style-one"><span className="btn-title">Request Hardware Quote</span></Link>
                            </div>
                        </div>

                        <aside className="col-lg-4 sidebar-side">
                            <div className="service-sidebar">
                                <div className="widget widget_categories">
                                    <h4 className="widget-title">All Solutions</h4>
                                    <ul className="categories-list clearfix">
                                        <li className="active"><Link href="/solutions/it-hardware">IT Hardware &amp; Fleets</Link></li>
                                        <li><Link href="/solutions/office-equipment">Office Equipment &amp; Print</Link></li>
                                        <li><Link href="/solutions/networking">Networking Infrastructure</Link></li>
                                        <li><Link href="/solutions/printing-consumables">Printing &amp; Consumables</Link></li>
                                        <li><Link href="/solutions/accessories">Accessories &amp; Essentials</Link></li>
                                        <li><Link href="/solutions/custom-procurement">Custom Demand &amp; Sourcing</Link></li>
                                    </ul>
                                </div>

                                <div className="widget widget_contact text-center p-4 bg-light border rounded">
                                    <h4>Have a Sourcing RFQ?</h4>
                                    <p className="text-muted small">Send us your Bill of Materials (BOM) for fast volume quotation.</p>
                                    <Link href="/contact" className="theme-btn btn-style-two py-2 px-4"><span className="btn-title">Contact Sourcing Desk</span></Link>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </Layout>
    )
}
