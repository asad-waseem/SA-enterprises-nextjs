import Link from "next/link"

export default function Cta() {
    return (
        <>
            <section className="cta-section pb-0">
                <div className="auto-container">
                    <div className="row">
                        <div className="col-lg-5 image-column">
                            <div className="image">
                                <img src="/assets/images/resource/image-2.png" alt="Sourcing Solutions" />
                            </div>
                        </div>
                        <div className="col-lg-7 content-column">
                            <div className="sec-title text-center">
                                <h2>Where Business Needs Come First</h2>
                                <div className="text">Reach out to our procurement team to discuss enterprise volume sourcing, <br />delivery schedules, and customized equipment specifications.</div>
                                <div className="text-decoration">
                                    <span className="left" />
                                    <span className="right" />
                                </div>
                            </div>
                            <div className="bottom-content text-center py-4">
                                <div className="link-btn">
                                    <Link href="/contact" className="theme-btn btn-style-two mr-3"><span className="btn-title">Request a Quote</span></Link>
                                    <Link href="/products" className="theme-btn btn-style-one text-white"><span className="btn-title">View Catalogue</span></Link>
                                </div>
                                <div className="hint mt-3">Direct corporate quotation • Genuine manufacturer warranty</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
