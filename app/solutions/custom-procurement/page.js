'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function CustomProcurementSolutionPage() {
    return (
        <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Custom Demand & Sourcing" wrapperCls="home_1">
            <section className="services-details">
                <div className="auto-container">
                    <div className="row">
                        <div className="col-lg-8 content-side">
                            <div className="image-box mb-4">
                                <img src="/assets/images/resource/image-39.jpg" alt="Custom Demand and Sourcing" className="w-100 rounded" />
                            </div>
                            <h2>Custom Demand &amp; On-Demand Hardware Sourcing</h2>
                            <div className="text mb-4">
                                <p><strong>Need something different, specialized, or not listed in standard catalogues?</strong> SA Enterprises fulfills unique enterprise demands and bespoke hardware requests. If your business requires specific configurations, hard-to-find models, or specialized IT equipment, we source it directly for you on demand.</p>
                                <p>Simply share your requirements, exact manufacturer part numbers, or your complete Bill of Materials (BOM). Our dedicated procurement desk coordinates directly with certified global distributors and OEM supply partners to source authentic, warranty-backed equipment tailored to your exact operational needs.</p>
                            </div>
                            
                            <h3>Custom Demand Capabilities</h3>
                            <ul className="list-unstyled mb-4">
                                <li className="mb-2"><i className="fa fa-check text-warning mr-2" /> <strong>Bespoke Hardware Configurations:</strong> Custom-tailored laptop, desktop, and server specs (specific CPU, RAM, storage, or GPU).</li>
                                <li className="mb-2"><i className="fa fa-check text-warning mr-2" /> <strong>Non-Catalog &amp; Rare Equipment:</strong> Direct procurement of specialized industrial equipment, legacy modules, and enterprise components.</li>
                                <li className="mb-2"><i className="fa fa-check text-warning mr-2" /> <strong>Multi-Category BOM Consolidation:</strong> Single-source fulfillment for complex office setups and diverse hardware lists.</li>
                                <li className="mb-2"><i className="fa fa-check text-warning mr-2" /> <strong>Discontinued &amp; Specialized Upgrades:</strong> Verified sourcing for discontinued part numbers with authentic manufacturer warranties.</li>
                                <li className="mb-2"><i className="fa fa-check text-warning mr-2" /> <strong>Dedicated Sourcing Specialist:</strong> End-to-end management from distributor allocation to final delivery and inspection.</li>
                            </ul>

                            <div className="p-4 bg-light border rounded mb-4">
                                <h4>Have a Custom Demand or Part List?</h4>
                                <p className="mb-3">Tell us what you need—whether it's a specific brand, model, or custom specification. Our sourcing specialists will locate inventory and quote within 24–48 hours.</p>
                                <Link href="/contact?category=Custom+Demand+%26+Sourcing#quote" className="theme-btn btn-style-one"><span className="btn-title">Submit Custom Demand</span></Link>
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
                                        <li><Link href="/solutions/accessories">Accessories &amp; Essentials</Link></li>
                                        <li className="active"><Link href="/solutions/custom-procurement">Custom Demand &amp; Sourcing</Link></li>
                                    </ul>
                                </div>

                                <div className="widget widget_contact text-center p-4 bg-light border rounded">
                                    <h4>Custom Part Request</h4>
                                    <p className="text-muted small">Need something specific or different? Send exact part numbers or specifications.</p>
                                    <Link href="/contact?category=Custom+Demand+%26+Sourcing#quote" className="theme-btn btn-style-two py-2 px-4"><span className="btn-title">Submit Demand Request</span></Link>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </Layout>
    )
}
