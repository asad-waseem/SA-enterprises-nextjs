import Link from "next/link"


export default function Chooseus() {
    return (
        <>
            <section className="chooseus-home-6">
                <div className="bg-layer">
                    <div className="bg-1" style={{ backgroundImage: 'url(assets/images-2/background/chooseus-1.jpg)' }} />
                    <div className="bg-2" style={{ backgroundImage: 'url(assets/images-2/background/chooseus-2.jpg)' }} />
                </div>
                <div className="auto-container">
                    <div className="row align-items-center clearfix">
                        <div className="col-lg-5 col-md-12">
                            <div className="left-column wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                <div className="author-box">
                                    <figure className="author-thumb"><img src="/assets/images-2/resource/author-1.png" alt="" /></figure>
                                    <h6>Know your Case Worth</h6>
                                    <h3><Link href="tel:8884455567889">+888 445 55 678 &amp; 89</Link></h3>
                                </div>
                                <div className="text">
                                    <p>Send mail on: <Link href="mailto:support@example.com">support@example.com</Link></p>
                                    <p>Monday - Friday:<br />9.00 - 6.00<br />Sunday &amp; Public Holidays (Closed)</p>
                                </div>
                                <div className="support-box"><Link href="/index-6">Get Call Back</Link></div>
                                <figure className="icon-box"><img src="/assets/images-2/icons/icon-1.png" /></figure>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-12">
                            <div className="right-column">
                                <div className="single-item">
                                    <div className="icon-box"><i className="flaticon-up" /></div>
                                    <h3>Client Focused Solutions</h3>
                                    <p>Perfectly simple and easy to distinguish in a free hour when untrammelled and when nothing perfect.</p>
                                </div>
                                <div className="single-item">
                                    <div className="icon-box"><i className="flaticon-chart" /></div>
                                    <h3>Industry Leaders</h3>
                                    <p>Their duty through weakness of will, which is the same as through shrinking from pain cases.</p>
                                </div>
                                <div className="single-item">
                                    <div className="icon-box"><i className="flaticon-business-and-finance" /></div>
                                    <h3>Beyond the Billable Hour</h3>
                                    <p>When our power of choice is untrammelled when nothing our being able to do what we like best.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
