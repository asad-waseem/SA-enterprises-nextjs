import Link from "next/link"


export default function Process() {
    return (
        <>
            <section className="process-section-three">
                <div className="pattern" style={{ backgroundImage: 'url(assets/images/shape/pattern-12.png)' }} />
                <div className="auto-container">
                    <div className="row m-0 align-items-center justify-content-between">
                        <div className="sec-title">
                            <h2>Way to reach success through our <br /> basic work process</h2>
                            <span className="text-decoration-two" />
                        </div>
                        <div className="consult-btn"><Link href="#"><i className="flaticon-business-and-finance-1" />Start</Link></div>
                    </div>
                    <div className="process-wrapper">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 process-block-three">
                                <div className="inner-box">
                                    <div className="icon"><img src="/assets/images/icons/icon-23.png" alt="" /><span className="step-count">01</span></div>
                                    <h4>Contract</h4>
                                    <p>First step of process</p>
                                    <div className="text">Equal blame belongs those <br />who fail in their duty.</div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 process-block-three">
                                <div className="inner-box">
                                    <div className="icon"><img src="/assets/images/icons/icon-24.png" alt="" /><span className="step-count">02</span></div>
                                    <h4>Discussion</h4>
                                    <p>Our second easy step</p>
                                    <div className="text">Indignation &amp; dislike men who are so beguiled.</div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 process-block-three">
                                <div className="inner-box">
                                    <div className="icon"><img src="/assets/images/icons/icon-25.png" alt="" /><span className="step-count">03</span></div>
                                    <h4>Implement</h4>
                                    <p>Important third step</p>
                                    <div className="text">Have to repudiate accepte wise always holds. </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 process-block-three">
                                <div className="inner-box">
                                    <div className="icon"><img src="/assets/images/icons/icon-26.png" alt="" /><span className="step-count">04</span></div>
                                    <h4>Result</h4>
                                    <p>Solution in final step</p>
                                    <div className="text">Desire, that they cannot foresee the pain and bound.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
