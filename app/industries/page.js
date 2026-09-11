'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"

const INDUSTRIES = [
    {
        title: "Corporate Offices & Headquarters",
        desc: "Fleet standardization across executive laptops, dual-monitor desktop setups, docking stations, and commercial conference room displays.",
        image: "/assets/images/resource/image-1.jpg"
    },
    {
        title: "Technology & Software Companies",
        desc: "High-spec developer workstations, high-throughput managed network switches, dual 4K monitors, and ergonomic workstation peripherals.",
        image: "/assets/images/resource/image-2.jpg"
    },
    {
        title: "Growing SMEs & Startups",
        desc: "Agile hardware sourcing with transparent volume tiers, prompt quotation turnaround, and predictable delivery for expanding teams.",
        image: "/assets/images/resource/image-3.jpg"
    },
    {
        title: "Educational & Training Institutions",
        desc: "Lab desktop fleets, high-durability classroom monitors, robust student workstations, and high-speed document scanners.",
        image: "/assets/images/resource/image-34.jpg"
    },
    {
        title: "Healthcare, Legal & Professional Services",
        desc: "Secure TPM-compliant computing hardware, high-volume laser printers, duplex document digitization scanners, and imaging supplies.",
        image: "/assets/images/resource/image-35.jpg"
    },
    {
        title: "Commercial & Retail Operations",
        desc: "Point-of-sale receipt printers, label makers, barcode scanners, uninterruptible power supplies (UPS), and structured network cables.",
        image: "/assets/images/resource/image-36.jpg"
    }
]

export default function IndustriesPage() {
    return (
        <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Industries Served" wrapperCls="home_1">
            <section className="features-section sp-two" style={{ marginTop: 0 }}>
                <div className="auto-container">
                    <div className="sec-title text-center">
                        <h2>Sourcing Solutions Tailored to <br /> Your Industry Demands</h2>
                        <div className="text-decoration">
                            <span className="left" />
                            <span className="right" />
                        </div>
                        <div className="text mt-3">
                            From software houses to educational institutions and corporate headquarters, <br />SA Enterprises fulfills volume procurement with authentic manufacturer warranties.
                        </div>
                    </div>

                    <div className="row">
                        {INDUSTRIES.map((ind, index) => (
                            <div key={index} className="col-lg-4 col-md-6 feature-block-one mb-4">
                                <div className="inner-box h-100">
                                    <div className="image">
                                        <img className="lazy-image" src={ind.image} alt={ind.title} />
                                    </div>
                                    <div className="content">
                                        <h4>{ind.title}</h4>
                                    </div>
                                    <div className="overlay">
                                        <div className="content">
                                            <h4>{ind.title}</h4>
                                        </div>
                                        <div className="text" style={{ backgroundImage: `url(${ind.image})` }}>
                                            <p>{ind.desc}</p>
                                            <div className="link-btn"><Link href="/contact"><i className="flaticon-right-arrow" /></Link></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="bottom-content text-center mt-5 p-4 bg-light border rounded">
                        <h3>Discuss Your Industry Procurement Requirements</h3>
                        <p className="text-muted">Contact our corporate sourcing desk to request custom volume pricing and scheduled delivery options.</p>
                        <div className="link-btn mt-3"><Link href="/contact" className="theme-btn btn-style-one"><span className="btn-title">Request an Itemized Quote</span></Link></div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}
