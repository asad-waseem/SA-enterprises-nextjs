import CounterUp from "@/components/elements/CounterUp"


export default function Funfacts() {
    return (
        <>
            <section className="funfacts-section-eight" style={{ backgroundImage: 'url(assets/images-3/funfacts-section-eight-bg.jpg)' }}>
                <div className="auto-container">
                    {/* Fact Counter */}
                    <ul className="fact-counter-eight">
                        {/*Column*/}
                        <li className="counter-column">
                            <div className="inner wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                <div className="content">
                                    <div className="icon-box">
                                        <span className="icon-meeting clr8" />
                                    </div>
                                    <div className="count-outer count-box">
                                        <CounterUp end={2579} />
                                        <div className="counter-title">Successful Projects</div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="counter-column">
                            <div className="inner wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                <div className="content">
                                    <div className="icon-box">
                                        <span className="icon-businessman clr8" />
                                    </div>
                                    <div className="count-outer count-box">
                                        <CounterUp end={36} />
                                        <div className="counter-title">Experienced Staff</div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="counter-column">
                            <div className="inner wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                <div className="content">
                                    <div className="icon-box">
                                        <span className="icon-trophy clr8" />
                                    </div>
                                    <div className="count-outer count-box">
                                        <CounterUp end={148} />
                                        <div className="counter-title">Awards &amp; Achivements</div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}
