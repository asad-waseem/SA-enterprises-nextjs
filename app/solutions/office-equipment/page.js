'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function OfficeEquipmentSolutionPage() {
    return (
        <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Office Equipment & Print Solutions" wrapperCls="home_1">
            <section className="services-details">
                <div className="auto-container">
                    <div className="row">
                        <div className="col-lg-8 content-side">
                            <div className="image-box mb-4">
                                <img src="/assets/images/resource/image-35.jpg" alt="Office Equipment Procurement" className="w-100 rounded" />
                            </div>
                            <h2>Commercial Printers, Scanners &amp; Document Solutions</h2>
                            <div className="text mb-4">
                                <p>Modern workspaces demand dependable document workflows. SA Enterprises supplies enterprise multifunction laser printers, high-volume production copiers, and duplex sheet-fed document scanners engineered for intensive daily operation.</p>
                                <p>We evaluate your monthly duty cycles and department printing habits to recommend hardware that reduces cost-per-page while providing PIN-protected print security and cloud scanning integrations.</p>
                            </div>
                            
                            <h3>Equipment Categories We Source</h3>
                            <ul className="list-unstyled mb-4">
                                <li className="mb-2"><i className="fa fa-check text-warning mr-2" /> <strong>Multifunction Laser Printers (A4 / A3):</strong> Network-connected monochrome and color MFPs with automatic duplexing.</li>
                                <li className="mb-2"><i className="fa fa-check text-warning mr-2" /> <strong>Duplex Document Scanners:</strong> High-speed 40–80 ppm sheet-fed scanners with optical character recognition (OCR).</li>
                                <li className="mb-2"><i className="fa fa-check text-warning mr-2" /> <strong>Heavy-Duty Shredders &amp; Binders:</strong> High-security cross-cut paper shredders for confidential corporate compliance.</li>
                                <li className="mb-2"><i className="fa fa-check text-warning mr-2" /> <strong>Conference Projectors &amp; Interactive Screens:</strong> Large-format interactive whiteboards for meeting rooms.</li>
                            </ul>

                            <div className="p-4 bg-light border rounded mb-4">
                                <h4>Need Office Equipment Sourcing?</h4>
                                <p className="mb-3">Request a customized quote including initial toner supply and delivery coordination.</p>
                                <Link href="/contact?category=Office+Equipment#quote" className="theme-btn btn-style-one"><span className="btn-title">Request Equipment Quote</span></Link>
                            </div>
                        </div>

                        <aside className="col-lg-4 sidebar-side">
                            <div className="service-sidebar">
                                <div className="widget widget_categories">
                                    <h4 className="widget-title">All Solutions</h4>
                                    <ul className="categories-list clearfix">
                                        <li><Link href="/solutions/it-hardware">IT Hardware &amp; Fleets</Link></li>
                                        <li className="active"><Link href="/solutions/office-equipment">Office Equipment &amp; Print</Link></li>
                                        <li><Link href="/solutions/networking">Networking Infrastructure</Link></li>
                                        <li><Link href="/solutions/printing-consumables">Printing &amp; Consumables</Link></li>
                                        <li><Link href="/solutions/accessories">Accessories &amp; Essentials</Link></li>
                                        <li><Link href="/solutions/custom-procurement">Custom Demand &amp; Sourcing</Link></li>
                                    </ul>
                                </div>

                                <div className="widget widget_contact text-center p-4 bg-light border rounded">
                                    <h4>Corporate Consumable Supply?</h4>
                                    <p className="text-muted small">Ask about our scheduled monthly toner programs.</p>
                                    <Link href="/solutions/printing-consumables" className="theme-btn btn-style-two py-2 px-4"><span className="btn-title">View Consumables</span></Link>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </Layout>
    )
}
