import Link from "next/link"


export default function Consultation() {
    return (
        <>
            <section className="consultation-home-11">
                <div className="auto-container">
                    <div className="inner-container">
                        <div className="row clearfix">
                            <div className="col-lg-6">
                                <div className="single-item" style={{ backgroundImage: 'url(assets/images-2/resource/consultation-1.jpg)' }}>
                                    <div className="icon-box"><i className="flaticon-customer-service" /></div>
                                    <h3>Have a Doubt? We Can Help</h3>
                                    <div className="link"><Link href="/index-11"><i className="flaticon-right" />Book for Consultation</Link></div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="single-item" style={{ backgroundImage: 'url(assets/images-2/resource/consultation-2.jpg)' }}>
                                    <div className="icon-box"><i className="flaticon-career" /></div>
                                    <h3>Do You Deserve it? Check Now</h3>
                                    <div className="link"><Link href="/index-11"><i className="flaticon-right" />Check Eligibility</Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
