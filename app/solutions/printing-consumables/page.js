'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function PrintingConsumablesSolutionPage() {
    return (
        <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Printing & Consumables Sourcing" wrapperCls="home_1">
            <section className="services-details">
                <div className="auto-container">
                    <div className="row">
                        <div className="col-lg-8 content-side">
                            <div className="image-box mb-4">
                                <img src="/assets/images/resource/image-37.jpg" alt="Printing Consumables Procurement" className="w-100 rounded" />
                            </div>
                            <h2>OEM Toner, Ink Tanks &amp; Maintenance Supplies</h2>
                            <div className="text mb-4">
                                <p>Ensure consistent, crisp print output and protect internal printer mechanisms with genuine manufacturer consumables. SA Enterprises provides direct procurement of original factory-sealed toner cartridges, imaging drums, waste toner boxes, and commercial print media.</p>
                                <p>We offer flexible supply agreements—from one-time bulk replenishment to scheduled monthly or quarterly dispatch programs—so your office never experiences unexpected print downtime.</p>
                            </div>
                            
                            <h3>Consumables We Supply</h3>
                            <ul className="list-unstyled mb-4">
                                <li className="mb-2"><i className="fa fa-check text-warning mr-2" /> <strong>Original OEM Laser Toner:</strong> High-yield Black and CMYK toner cartridges for leading office printer brands.</li>
                                <li className="mb-2"><i className="fa fa-check text-warning mr-2" /> <strong>Imaging Drums &amp; Transfer Belts:</strong> Certified replacement units that maintain factory page yields.</li>
                                <li className="mb-2"><i className="fa fa-check text-warning mr-2" /> <strong>High-Capacity Ink Bottles &amp; Tanks:</strong> Genuine refill tanks for commercial continuous ink tank systems.</li>
                                <li className="mb-2"><i className="fa fa-check text-warning mr-2" /> <strong>Specialized Media &amp; Paper:</strong> High-whiteness 80gsm copy paper, glossy brochure stocks, and barcode thermal labels.</li>
                            </ul>

                            <div className="p-4 bg-light border rounded mb-4">
                                <h4>Set Up a Scheduled Consumable Program</h4>
                                <p className="mb-3">Share your active printer model numbers to receive customized consumable rate cards.</p>
                                <Link href="/contact?category=Consumables#quote" className="theme-btn btn-style-one"><span className="btn-title">Request Consumables Quote</span></Link>
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
                                        <li className="active"><Link href="/solutions/printing-consumables">Printing &amp; Consumables</Link></li>
                                        <li><Link href="/solutions/accessories">Accessories &amp; Essentials</Link></li>
                                        <li><Link href="/solutions/custom-procurement">Custom Demand &amp; Sourcing</Link></li>
                                    </ul>
                                </div>

                                <div className="widget widget_contact text-center p-4 bg-light border rounded">
                                    <h4>Genuine OEM Guarantee</h4>
                                    <p className="text-muted small">All consumables are 100% genuine factory sealed.</p>
                                    <Link href="/contact" className="theme-btn btn-style-two py-2 px-4"><span className="btn-title">Inquire Now</span></Link>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </Layout>
    )
}
