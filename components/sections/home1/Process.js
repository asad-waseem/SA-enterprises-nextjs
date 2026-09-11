export default function Process() {
    return (
        <>
            <section className="process-section">
                <div className="pattern" style={{ backgroundImage: 'url(/assets/images/shape/pattern-5.png)' }} />
                <div className="auto-container">
                    <div className="sec-top row m-0 justify-content-md-between">
                        <div className="sec-title">
                            <h2>Our Procurement Workflow</h2>
                            <div className="text-decoration">
                                <span className="left" />
                                <span className="right" />
                            </div>
                        </div>
                        <div className="text">A transparent, reliable B2B sourcing process designed to fulfill <br />organizational equipment requirements on schedule.</div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 process-block-one">
                            <div className="inner-box">
                                <h5><span className="count">01.</span> Requirement Intake</h5>
                                <div className="icon"><img src="/assets/images/icons/icon-4.png" alt="" /></div>
                                <h4>Submit Specifications</h4>
                                <div className="text">Submit your hardware bill of materials or volume equipment list.</div>
                            </div>
                        </div>
                        <div className="col-lg-4 process-block-one">
                            <div className="inner-box">
                                <h5><span className="count">02.</span> Sourcing &amp; Quotation</h5>
                                <div className="icon"><img src="/assets/images/icons/icon-5.png" alt="" /></div>
                                <h4>Itemized Pricing</h4>
                                <div className="text">We verify inventory and provide itemized quotations with clear lead times.</div>
                            </div>
                        </div>
                        <div className="col-lg-4 process-block-one">
                            <div className="inner-box">
                                <h5><span className="count">03.</span> Delivery Coordination</h5>
                                <div className="icon"><img src="/assets/images/icons/icon-6.png" alt="" /></div>
                                <h4>Doorstep Fulfillment</h4>
                                <div className="text">Order confirmation, warranty verification, and seamless logistics dispatch.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
