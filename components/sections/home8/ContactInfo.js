import Link from "next/link"


export default function ContactInfo() {
    return (
        <>
            <section className="contact-info-section-eight">
                <div className="auto-container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="contact-info-eight">
                                <ul>
                                    <li>
                                        <div className="inner">
                                            <div className="icon">
                                                <span className="icon-location clr8" />
                                            </div>
                                            <div className="title">
                                                <h3>Location</h3>
                                                <p>246 Old York Rd, NY 08505</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="inner">
                                            <div className="icon">
                                                <span className="icon-email clr8" />
                                            </div>
                                            <div className="title">
                                                <h3>Mail us</h3>
                                                <p><Link href="mailto:support@envolvepsyco.com">support@envolvepsyco.com</Link>
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="inner">
                                            <div className="icon">
                                                <span className="icon-clock-1 clr8" />
                                            </div>
                                            <div className="title">
                                                <h3>Office hrs</h3>
                                                <p>9.00am to 7.00pm (Mon_Sat)</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
