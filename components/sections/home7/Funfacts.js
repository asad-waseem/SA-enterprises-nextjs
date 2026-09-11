import CounterUp from "@/components/elements/CounterUp"


export default function Funfacts() {
    return (
        <>
            <section className="funfacts-section">
                <div className="auto-container">
                    {/* Fact Counter */}
                    <div className="fact-counter">
                        <div className="row">
                            {/*Column*/}
                            <div className="column counter-column col-lg-4">
                                <div className="inner wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                    <div className="content">
                                        <div className="icon-box">
                                            <div className="icon"><img src="/assets/images-2/icons/icon-17.png" alt="" /></div>
                                            <div className="counter-title">Projects <br />with 100% satisfaction</div>
                                        </div>
                                        <div className="count-outer count-box">
                                            <CounterUp end={3} /><span>K</span>
                                        </div>
                                        <div className="text">Power of choices when nothing what we like best principle.</div>
                                    </div>
                                </div>
                            </div>
                            {/*Column*/}
                            <div className="column counter-column col-lg-4">
                                <div className="inner wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                    <div className="content">
                                        <div className="icon-box">
                                            <div className="icon"><img src="/assets/images-2/icons/icon-18.png" alt="" /></div>
                                            <div className="counter-title">Experienced &amp; <br /> Professional team</div>
                                        </div>
                                        <div className="count-outer count-box">
                                            <CounterUp end={138} /><span>+</span>
                                        </div>
                                        <div className="text">Except to obtain some of advantages from it has any right to find.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*Column*/}
                            <div className="column counter-column col-lg-4">
                                <div className="inner wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                    <div className="content">
                                        <div className="icon-box">
                                            <div className="icon"><img src="/assets/images-2/icons/icon-19.png" alt="" /></div>
                                            <div className="counter-title">Revenue of <br />last financial year</div>
                                        </div>
                                        <div className="count-outer count-box">
                                            <CounterUp end={10} /><span>%</span>
                                        </div>
                                        <div className="text">Complete account of the system and <br />expound actual teachings.
                                        </div>
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
