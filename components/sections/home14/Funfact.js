import CounterUp from "@/components/elements/CounterUp"


export default function Funfact() {
    return (
        <>
            <section className="funfact-section-home14">
                <div className="auto-container">
                    <div className="inner-container" style={{ backgroundImage: 'url(assets/images-4/background/funfact-bg.jpg)' }}>
                        <div className="row clearfix">
                            <div className="col-lg-4 col-md-6 col-sm-12 counter-column">
                                <div className="counter-block">
                                    <div className="inner-box">
                                        <div className="icon-box"><i className="customicon-passport" /></div>
                                        <div className="count-outer count-box">
                                            <CounterUp end={2579} />
                                        </div>
                                        <h3>Successful Projects</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 counter-column">
                                <div className="counter-block">
                                    <div className="inner-box">
                                        <div className="icon-box"><i className="customicon-businessman" /></div>
                                        <div className="count-outer count-box">
                                            <CounterUp end={36} />
                                        </div>
                                        <h3>Experienced Staff</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 counter-column">
                                <div className="counter-block">
                                    <div className="inner-box">
                                        <div className="icon-box"><i className="customicon-award" /></div>
                                        <div className="count-outer count-box">
                                            <CounterUp end={148} />
                                        </div>
                                        <h3>Awards &amp; Achivements</h3>
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
