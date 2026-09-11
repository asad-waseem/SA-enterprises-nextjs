'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function NetworkingSolutionPage() {
    return (
        <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Networking Infrastructure Sourcing" wrapperCls="home_1">
            <section className="services-details">
                <div className="auto-container">
                    <div className="row">
                        <div className="col-lg-8 content-side">
                            <div className="image-box mb-4">
                                <img src="/assets/images/resource/image-36.jpg" alt="Networking Infrastructure Procurement" className="w-100 rounded" />
                            </div>
                            <h2>Managed Switches, Routers &amp; Wireless Infrastructure</h2>
                            <div className="text mb-4">
                                <p>Robust connectivity is the backbone of modern enterprise productivity. SA Enterprises sources commercial network hardware including Layer 2/Layer 3 managed PoE switches, high-throughput security routers, Wi-Fi 6/6E access points, and structured server room hardware.</p>
                                <p>Whether you are expanding office square footage, retrofitting a branch location, or upgrading to 10G optical uplinks, we source certified hardware with full manufacturer firmware and warranty support.</p>
                            </div>
                            
                            <h3>Network Hardware We Supply</h3>
                            <ul className="list-unstyled mb-4">
                                <li className="mb-2"><i className="fa fa-check text-warning mr-2" /> <strong>Managed PoE+ Gigabit Switches:</strong> 8, 24, and 48-port configurations with 10G SFP+ optical fiber uplinks.</li>
                                <li className="mb-2"><i className="fa fa-check text-warning mr-2" /> <strong>Enterprise Routers &amp; Firewalls:</strong> High-bandwidth branch gateways with VPN and multi-WAN failover support.</li>
                                <li className="mb-2"><i className="fa fa-check text-warning mr-2" /> <strong>Wi-Fi 6 / 6E Access Points:</strong> High-density ceiling and wall-mount enterprise wireless access points.</li>
                                <li className="mb-2"><i className="fa fa-check text-warning mr-2" /> <strong>Server Racks, Patch Panels &amp; PDUs:</strong> 6U to 42U server cabinets, Cat6A patch cords, and power distribution units.</li>
                            </ul>

                            <div className="p-4 bg-light border rounded mb-4">
                                <h4>Planning a Network Expansion?</h4>
                                <p className="mb-3">Submit your network bill of materials or port requirement list for direct quotation.</p>
                                <Link href="/contact?category=Networking#quote" className="theme-btn btn-style-one"><span className="btn-title">Request Networking Quote</span></Link>
                            </div>
                        </div>

                        <aside className="col-lg-4 sidebar-side">
                            <div className="service-sidebar">
                                <div className="widget widget_categories">
                                    <h4 className="widget-title">All Solutions</h4>
                                    <ul className="categories-list clearfix">
                                        <li><Link href="/solutions/it-hardware">IT Hardware &amp; Fleets</Link></li>
                                        <li><Link href="/solutions/office-equipment">Office Equipment &amp; Print</Link></li>
                                        <li className="active"><Link href="/solutions/networking">Networking Infrastructure</Link></li>
                                        <li><Link href="/solutions/printing-consumables">Printing &amp; Consumables</Link></li>
                                        <li><Link href="/solutions/accessories">Accessories &amp; Essentials</Link></li>
                                        <li><Link href="/solutions/custom-procurement">Custom Demand &amp; Sourcing</Link></li>
                                    </ul>
                                </div>

                                <div className="widget widget_contact text-center p-4 bg-light border rounded">
                                    <h4>Multi-Site Rollout?</h4>
                                    <p className="text-muted small">We coordinate staged delivery across branch offices.</p>
                                    <Link href="/contact" className="theme-btn btn-style-two py-2 px-4"><span className="btn-title">Contact Us</span></Link>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </Layout>
    )
}
