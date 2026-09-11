'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function AccessoriesSolutionPage() {
    return (
        <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Workplace Accessories & Essentials" wrapperCls="home_1">
            <section className="services-details">
                <div className="auto-container">
                    <div className="row">
                        <div className="col-lg-8 content-side">
                            <div className="image-box mb-4">
                                <img src="/assets/images/resource/image-38.jpg" alt="Workplace Accessories Procurement" className="w-100 rounded" />
                            </div>
                            <h2>Docking Stations, Peripherals &amp; Power Protection</h2>
                            <div className="text mb-4">
                                <p>Enhance day-to-day employee ergonomics and equipment reliability with essential workstation accessories. SA Enterprises sources commercial universal docks, noise-canceling headsets, wireless keyboard and mouse combos, and line-interactive uninterruptible power supplies (UPS).</p>
                                <p>We provide bundled workstation kits for new employee onboarding, ensuring fast setup and unified office peripherals across hybrid and in-office workspaces.</p>
                            </div>
                            
                            <h3>Accessories &amp; Peripherals We Source</h3>
                            <ul className="list-unstyled mb-4">
                                <li className="mb-2"><i className="fa fa-check text-warning mr-2" /> <strong>Thunderbolt 4 / USB-C Docking Stations:</strong> Universal single-cable laptop charging (up to 100W PD) and multi-display outputs.</li>
                                <li className="mb-2"><i className="fa fa-check text-warning mr-2" /> <strong>Ergonomic Wireless Combos:</strong> Full-sized spill-resistant keyboards and precision optical mice.</li>
                                <li className="mb-2"><i className="fa fa-check text-warning mr-2" /> <strong>Uninterruptible Power Supplies (UPS):</strong> Line-interactive 650VA to 3000VA battery backup and surge suppression.</li>
                                <li className="mb-2"><i className="fa fa-check text-warning mr-2" /> <strong>Enterprise Webcams &amp; Headsets:</strong> FHD 1080p webcams and ANC headsets certified for Microsoft Teams and Zoom.</li>
                            </ul>

                            <div className="p-4 bg-light border rounded mb-4">
                                <h4>Request Onboarding Accessory Bundles</h4>
                                <p className="mb-3">Ask about pre-packaged employee accessory bundles for rapid team provisioning.</p>
                                <Link href="/contact?category=Accessories#quote" className="theme-btn btn-style-one"><span className="btn-title">Request Accessories Quote</span></Link>
                            </div>
                        </div>

                        <aside className="col-lg-4 sidebar-side">
                            <div className="service-sidebar">
                                <div className="widget widget_categories">
                                    <h4 className="widget-title">All Solutions</h4>
                                    <ul className="categories-list clearfix">
                                        <li><Link href="/solutions/it-hardware">IT Hardware &amp; Fleets</Link></li>
                                        <li><Link href="/solutions/office-equipment">Office Equipment &amp; Print</Link></li>
                                        <li><Link href="/solutions/networking">Networking Infrastructure</Link></li>
                                        <li><Link href="/solutions/printing-consumables">Printing &amp; Consumables</Link></li>
                                        <li className="active"><Link href="/solutions/accessories">Accessories &amp; Essentials</Link></li>
                                        <li><Link href="/solutions/custom-procurement">Custom Demand &amp; Sourcing</Link></li>
                                    </ul>
                                </div>

                                <div className="widget widget_contact text-center p-4 bg-light border rounded">
                                    <h4>Volume Pricing</h4>
                                    <p className="text-muted small">Bulk discounts on workstation accessories.</p>
                                    <Link href="/contact" className="theme-btn btn-style-two py-2 px-4"><span className="btn-title">Contact Desk</span></Link>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </Layout>
    )
}
