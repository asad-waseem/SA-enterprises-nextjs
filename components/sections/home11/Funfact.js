import CounterUp from "@/components/elements/CounterUp"


export default function Funfact() {
    return (
        <>
            <section className="funfact-home-11">
                <div className="auto-container">
                    <div className="inner-container">
                        <div className="row clearfix">
                            <div className="col-lg-4 col-md-6 single-column">
                                <div className="single-item wow slideInUp" data-wow-delay="00ms" data-wow-duration="1200ms">
                                    <div className="icon-box"><i className="flaticon-interview" /></div>
                                    <div className="count-outer count-box">
                                        <CounterUp end={2579} />
                                    </div>
                                    <h3>Successful Projects</h3>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 single-column">
                                <div className="single-item wow slideInUp" data-wow-delay="300ms" data-wow-duration="1200ms">
                                    <div className="icon-box"><i className="flaticon-boss" /></div>
                                    <div className="count-outer count-box">
                                        <CounterUp end={36} />
                                    </div>
                                    <h3>Experienced Staff</h3>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 single-column">
                                <div className="single-item wow slideInUp" data-wow-delay="600ms" data-wow-duration="1200ms">
                                    <div className="icon-box"><i className="flaticon-cup" /></div>
                                    <div className="count-outer count-box">
                                        <CounterUp end={148} />
                                    </div>
                                    <h3>Awards Win</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
