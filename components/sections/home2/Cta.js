import Link from "next/link"


export default function Cta() {
    return (
        <>
            <section className="cta-section-two" style={{ backgroundImage: 'url(assets/images/background/bg-5.jpg)' }}>
                <div className="auto-container">
                    <div className="row align-items-center">
                        <div className="col-lg-7">
                            <h2><span className="flaticon-team" />Sharing Expertise. Building <br />Relationships.</h2>
                        </div>
                        <div className="col-lg-5">
                            <div className="wrapper-box">
                                <div className="contact-info">
                                    <div className="icon"><span className="flaticon-call-1" /></div>
                                    <h4>(555) 890 1234 </h4>
                                    <div className="text">supportyou@Envolve.com</div>
                                </div>
                                <Link href="#" className="theme-btn btn-style-four"><span className="btn-title">Let’s Start</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
