import CounterUp from "@/components/elements/CounterUp"
import VideoPopup from "@/components/elements/VideoPopup"
import Link from "next/link"


export default function About() {
    return (
        <>
            <section className="about-section-three">
                <div className="pattern" style={{ backgroundImage: 'url(assets/images/shape/pattern-10.png)' }} />
                <div className="auto-container">
                    <div className="sec-title style-three text-center">
                        <h5>About Company</h5>
                        <h2>Trusted business consultants</h2>
                        <div className="text">How all this mistaken idea of denouncing pleasure and praising pain was born and we <br />will give you a complete account of the system, and expound the actual teaching the great explorer <br />the truth, the master-builder of human happiness. </div>
                        <Link href="#" className="read-more-link">More About Company<i className="flaticon-right" /></Link>
                    </div>
                    <div className="team-area">
                        <div className="row">
                            <div className="col-lg-4 team-block-two">
                                <div className="inner-box">
                                    <div className="image">
                                        <div className="default-image">
                                            <img className="lazy-image owl-lazy" src="/assets/images/resource/team-5.png" alt="" />
                                        </div>
                                        <div className="hover-image">
                                            <img className="lazy-image owl-lazy" src="/assets/images/resource/team-8.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="content">
                                        <h4>Adam Clinton</h4>
                                        <div className="designation">Managing Director</div>
                                        <VideoPopup style={1} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 team-block-two">
                                <div className="inner-box">
                                    <div className="image">
                                        <div className="default-image">
                                            <img className="lazy-image owl-lazy" src="/assets/images/resource/team-6.png" alt="" />
                                        </div>
                                        <div className="hover-image">
                                            <img className="lazy-image owl-lazy" src="/assets/images/resource/team-9.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="content">
                                        <h4>Homer Donnie</h4>
                                        <div className="designation">Executive Vice President</div>
                                        <VideoPopup style={1} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 team-block-two">
                                <div className="inner-box">
                                    <div className="image">
                                        <div className="default-image">
                                            <img className="lazy-image owl-lazy" src="/assets/images/resource/team-7.png" alt="" />
                                        </div>
                                        <div className="hover-image">
                                            <img className="lazy-image owl-lazy" src="/assets/images/resource/team-10.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="content">
                                        <h4>Jerome Hobert</h4>
                                        <div className="designation">Executive Vice President</div>
                                        <VideoPopup style={1} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="fact-counter-three">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="image">
                                    <img className="lazy-image owl-lazy" src="/assets/images/resource/image-11.jpg" alt="" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="row">
                                    <div className="column counter-column col-md-6">
                                        <div className="inner wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                            <div className="content">
                                                <div className="counter-title">Projects <br />with 100% satisfaction</div>
                                                <div className="count-outer count-box">
                                                    <CounterUp end={3} /><span>K</span>
                                                </div>
                                                <Link href="#" className="read-more-link">View Projects <i className="flaticon-right" /></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="column counter-column col-md-6">
                                        <div className="inner wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                            <div className="content">
                                                <div className="counter-title">Experienced &amp; <br />Professional team</div>
                                                <div className="count-outer count-box">
                                                    <CounterUp end={138} />
                                                </div>
                                                <Link href="#" className="read-more-link">View Projects <i className="flaticon-right" /></Link>
                                            </div>
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
