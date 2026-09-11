import CounterUp from "@/components/elements/CounterUp"


export default function Funfact() {
    return (
        <>
            <section className="funfact-home-10 text-center" style={{ backgroundImage: 'url(assets/images-2/background/funfact-bg.jpg)' }}>
                <div className="border-shape">
                    <div className="shape shape-1" />
                    <div className="shape shape-2" />
                    <div className="shape shape-3" />
                    <div className="shape shape-4" />
                </div>
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-item wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                                <div className="icon-box"><i className="fas fa-boxes" /></div>
                                <div className="count-outer count-box">
                                    <CounterUp end={5} /><span>K</span>
                                </div>
                                <h3>Successfully Completed Projects</h3>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-item wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
                                <div className="icon-box"><i className="fas fa-hotel" /></div>
                                <div className="count-outer count-box">
                                    <CounterUp end={129} /><span>+</span>
                                </div>
                                <h3>Service Branches Around The Country</h3>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-item wow fadeInUp" data-wow-delay="600ms" data-wow-duration="1500ms">
                                <div className="icon-box"><i className="fas fa-people-carry" /></div>
                                <div className="count-outer count-box">
                                    <CounterUp end={2} /><span>K</span>
                                </div>
                                <h3>Trained &amp; Professional Man Power</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
