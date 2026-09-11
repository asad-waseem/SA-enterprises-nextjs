import Link from "next/link"


export default function Service() {
    return (
        <>
            <section className="service-home-11">
                <div className="auto-container">
                    <div className="sec-title text-center">
                        <h4>Our Services</h4>
                        <h2>Envolve providing a wide range of <br />services including</h2>
                    </div>
                    <div className="row clearfix">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-item">
                                <figure className="image-box"><img src="/assets/images-2/service/service-12.jpg" alt="" /></figure>
                                <div className="lower-content">
                                    <div className="inner">
                                        <div className="icon-box"><i className="fal fa-user-graduate" /></div>
                                        <h6>Student Visa</h6>
                                        <h3><Link href="/audit-assurance">Academic &amp; <br />Non-Academic Student</Link></h3>
                                        <div className="btn-box"><Link href="/audit-assurance">Read More</Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-item">
                                <figure className="image-box"><img src="/assets/images-2/service/service-13.jpg" alt="" /></figure>
                                <div className="lower-content">
                                    <div className="inner">
                                        <div className="icon-box"><i className="fal fa-business-time" /></div>
                                        <h6>Business Visa</h6>
                                        <h3><Link href="/audit-assurance">Projects &amp; Employment Purpose</Link></h3>
                                        <div className="btn-box"><Link href="/audit-assurance">Read More</Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-item">
                                <figure className="image-box"><img src="/assets/images-2/service/service-14.jpg" alt="" /></figure>
                                <div className="lower-content">
                                    <div className="inner">
                                        <div className="icon-box"><i className="fal fa-users" /></div>
                                        <h6>Immigrant Visa</h6>
                                        <h3><Link href="/audit-assurance">Relative &amp; <br />Family Sponsored</Link></h3>
                                        <div className="btn-box"><Link href="/audit-assurance">Read More</Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
