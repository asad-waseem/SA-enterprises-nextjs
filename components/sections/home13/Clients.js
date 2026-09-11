import Link from "next/link"


export default function Clients() {
    return (
        <>
            <section className="clients-section-home13 text-center">
                <div className="auto-container">
                    <div className="sec-title-two text-center">
                        <h6>Clients &amp; Partners</h6>
                        <h2>Dedicated &amp; Trusted Partners</h2>
                    </div>
                    <div className="clients-inner">
                        <ul className="logo-list clearfix">
                            <li>
                                <figure className="clients-logo"><Link href="/index-13"><img src="/assets/images-4/clients/clients-1.png" alt="" /></Link></figure>
                            </li>
                            <li>
                                <figure className="clients-logo"><Link href="/index-13"><img src="/assets/images-4/clients/clients-2.png" alt="" /></Link></figure>
                            </li>
                            <li>
                                <figure className="clients-logo"><Link href="/index-13"><img src="/assets/images-4/clients/clients-3.png" alt="" /></Link></figure>
                            </li>
                            <li>
                                <figure className="clients-logo"><Link href="/index-13"><img src="/assets/images-4/clients/clients-4.png" alt="" /></Link></figure>
                            </li>
                            <li>
                                <figure className="clients-logo"><Link href="/index-13"><img src="/assets/images-4/clients/clients-5.png" alt="" /></Link></figure>
                            </li>
                            <li>
                                <figure className="clients-logo"><Link href="/index-13"><img src="/assets/images-4/clients/clients-6.png" alt="" /></Link></figure>
                            </li>
                            <li>
                                <figure className="clients-logo"><Link href="/index-13"><img src="/assets/images-4/clients/clients-7.png" alt="" /></Link></figure>
                            </li>
                            <li>
                                <figure className="clients-logo"><Link href="/index-13"><img src="/assets/images-4/clients/clients-8.png" alt="" /></Link></figure>
                            </li>
                        </ul>
                    </div>
                    <div className="more-links">
                        <h6><Link href="/index-13"><i className="far fa-long-arrow-right" />View All 200+ Clients</Link></h6>
                    </div>
                </div>
            </section>
        </>
    )
}
