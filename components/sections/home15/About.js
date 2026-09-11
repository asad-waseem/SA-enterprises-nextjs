import CounterUp from "@/components/elements/CounterUp"


export default function About() {
    return (
        <>
            <section className="about-section-home15">
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                            <div className="image-box">
                                <div className="bg-layer" />
                                <figure className="image"><img src="/assets/images-4/resource/about-2.jpg" alt="" /></figure>
                                <div className="text"><h2>25 Years Experienced</h2></div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                            <div className="content-box">
                                <div className="sec-title-four">
                                    <h2>#1 Digital marketing agency for small businesses</h2>
                                </div>
                                <div className="text">
                                    <p>Every pleasures is too welcomed pain avoided owing the duty obligations of business it will frequently occur that pleasures have be repudiated and annoyances accepted  pleasures is to welcomed.</p>
                                </div>
                                <div className="progress-inner">
                                    <h3>We do smart marketing</h3>
                                    <div className="progress-box">
                                        <h5>Finance</h5>
                                        <div className="bar">
                                            <div className="bar-inner count-bar" data-percent="62%" style={{width:"62%"}} />
                                        </div>
                                        <div><CounterUp end={62}/></div>
                                    </div>
                                    <div className="progress-box">
                                        <h5>Business</h5>
                                        <div className="bar">
                                            <div className="bar-inner count-bar" data-percent="89%" style={{width:"89%"}}/>
                                        </div>
                                        <div><CounterUp end={89}/></div>
                                    </div>
                                </div>
                                <div className="author-box clearfix">
                                    <div className="author">
                                        <figure className="author-thumb"><img src="/assets/images-4/resource/author-1.jpg" alt="" /></figure>
                                        <h4>Franklin Sinatra</h4>
                                        <span className="designation">Manager</span>
                                    </div>
                                    <figure className="signature"><img src="/assets/images-4/icons/signature-1.png" alt="" /></figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
