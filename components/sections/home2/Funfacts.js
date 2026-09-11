import CounterUp from "@/components/elements/CounterUp"


export default function Funfacts() {
    return (
        <>
            <section className="funfacts-section-two" style={{ backgroundImage: 'url(assets/images/background/bg-7.jpg)' }}>
                <div className="auto-container">
                    {/* Fact Counter */}
                    <div className="fact-counter-two">
                        <div className="row">
                            {/*Column*/}
                            <div className="column counter-column col-lg-4">
                                <div className="inner wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                    <div className="icon-box">
                                        <div className="icon"><span className="flaticon-interview" /></div>
                                    </div>
                                    <div className="content">
                                        <div className="counter-title">Projects</div>
                                        <div className="count-outer count-box">
                                            <CounterUp end={3} />
                                        </div>
                                        <div className="text">Successful Projects</div>
                                        <p>Our Projects</p>
                                    </div>
                                </div>
                            </div>
                            {/*Column*/}
                            <div className="column counter-column col-lg-4">
                                <div className="inner wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                    <div className="icon-box">
                                        <div className="icon"><span className="flaticon-boss" /></div>
                                    </div>
                                    <div className="content">
                                        <div className="counter-title">Our Team</div>
                                        <div className="count-outer count-box">
                                            <CounterUp end={138} />
                                        </div>
                                        <div className="text">Experienced Staff</div>
                                        <p>Team Members</p>
                                    </div>
                                </div>
                            </div>
                            {/*Column*/}
                            <div className="column counter-column col-lg-4">
                                <div className="inner wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                    <div className="icon-box">
                                        <div className="icon"><span className="flaticon-cup" /></div>
                                    </div>
                                    <div className="content">
                                        <div className="counter-title">Happy Clients</div>
                                        <div className="count-outer count-box">
                                            <CounterUp end={99} />
                                        </div>
                                        <div className="text">Client Satisfaction</div>
                                        <p>Testimonials</p>
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
