import Link from "next/link"


export default function Services() {
    return (
        <>
            <section className="services-section" style={{ backgroundImage: 'url(assets/images/background/bg-4.jpg)' }}>
                <div className="auto-container">
                    <div className="row m-0 align-items-center justify-content-between">
                        <div className="sec-title style-two">
                            <h4><span className="flaticon-endless" />What We Do</h4>
                            <h2>Consulting Services</h2>
                        </div>
                        <div className="link-btn mb-50"><Link href="#" className="theme-btn btn-style-five"><span className="btn-title">All Services</span></Link></div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 service-block-one">
                            <div className="inner-box">
                                <div className="icon"><div className="icon-inner"><span className="flaticon-up" /></div></div>
                                <h4>Finance and <br />Restructuring</h4>
                                <div className="text">From banking &amp; insurances to wealth management and securitie distribution.</div>
                                <Link href="#" className="read-more-link"><i className="flaticon-right-arrow" />Read More</Link>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 service-block-one">
                            <div className="inner-box">
                                <div className="icon"><div className="icon-inner"><span className="flaticon-chart" /></div></div>
                                <h4>Audit <br />and Assurance</h4>
                                <div className="text">Rejects pleasures secure other greater occur endures for financial centers. </div>
                                <Link href="#" className="read-more-link"><i className="flaticon-right-arrow" />Read More</Link>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 service-block-one">
                            <div className="inner-box">
                                <div className="icon"><div className="icon-inner"><span className="flaticon-system" /></div></div>
                                <h4>Strategy <br />and Planning</h4>
                                <div className="text">Rejects pleasures secure other greater occur endures for financial centers. </div>
                                <Link href="#" className="read-more-link"><i className="flaticon-right-arrow" />Read More</Link>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 service-block-one">
                            <div className="inner-box">
                                <div className="icon"><div className="icon-inner"><span className="flaticon-business-and-finance" /></div></div>
                                <h4>Trades <br />and Stock Market</h4>
                                <div className="text">Equal blame belongs too those who fail in their duty of the industries.</div>
                                <Link href="#" className="read-more-link"><i className="flaticon-right-arrow" />Read More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
