import CounterUp from "@/components/elements/CounterUp"
import Link from "next/link"


export default function About() {
    return (
        <>
            <section className="about-section-home13">
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                            <div className="content-box">
                                <div className="sec-title-two">
                                    <h6>Envolve Construction</h6>
                                    <h2>In Our Work We <br />Have Pride, Quality is What We Provide.</h2>
                                </div>
                                <div className="text">
                                    <h3>When it comes to your house, don’t mess with the rest, trust the best.</h3>
                                    <p>Denounce with righteous indignation and dislike men who  beguiled zemoralized by the charms of pleasure the moment blinded desires that they cannot foresee the pain this and trouble.</p>
                                </div>
                                <div className="inner-box">
                                    <div className="row clearfix">
                                        <div className="col-lg-6 col-md-12 col-sm-12 single-column">
                                            <div className="single-item">
                                                <div className="icon-box"><i className="customicon-engineer" /></div>
                                                <h3>Professional Team</h3>
                                                <p>On the other hand we denonce righteous indignation.</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-sm-12 single-column">
                                            <div className="single-item">
                                                <div className="icon-box"><i className="customicon-crane" /></div>
                                                <h3>Quality Service</h3>
                                                <p>Procure him some pleasure to take a trivial example.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="btn-box">
                                    <Link href="/about" className="theme-btn btn-style-seven"><span className="btn-title">Read More</span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                            <div className="image-box">
                                <figure className="image"><img src="/assets/images-4/resource/about-1.jpg" alt="" /></figure>
                                <div className="funfact-inner text-center clearfix">
                                    <div className="counter-column">
                                        <div className="inner-box">
                                            <div className="count-outer count-box">
                                                <CounterUp end={5} />
                                            </div>
                                            <h3>Successful Projects</h3>
                                        </div>
                                    </div>
                                    <div className="counter-column">
                                        <div className="inner-box">
                                            <div className="count-outer count-box">
                                                <CounterUp end={128} />
                                            </div>
                                            <h3>Experienced Staff</h3>
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
