
import VideoPopup from "@/components/elements/VideoPopup"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Team Members" wrapperCls="home_1">
                <div>
                    <section className="team-section-three">
                        <div className="auto-container">
                            <div className="sec-title text-center">
                                <h2>Broad diversity of professional <br /> backgrounds</h2>
                                <div className="text-decoration">
                                    <span className="left" />
                                    <span className="right" />
                                </div>
                                <div className="text">Which is the same as saying through shrinking from toil and perfectly simple <br /> and easy to distinguish.</div>
                                <Link href="#" className="read-more-link">More About Company<i className="flaticon-right" /></Link>
                            </div>
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
                            <div className="link-btn text-center"><Link href="#" className="theme-btn btn-style-one text-white"><span className="btn-title">ALL MEMBERS</span></Link></div>
                        </div>
                    </section>
                    {/* CTA Section Two */}
                    <section className="cta-section-two style-two" style={{ backgroundImage: 'url(assets/images/background/bg-18.jpg)' }}>
                        <div className="auto-container">
                            <div className="row align-items-center">
                                <div className="col-lg-7">
                                    <h2><span className="flaticon-team" />Sharing Expertise. Building <br />Relationships.</h2>
                                </div>
                                <div className="col-lg-5">
                                    <div className="wrapper-box">
                                        <div className="contact-info">
                                            <div className="icon"><span className="flaticon-call-1" /></div>
                                            <h4>(555) 890 1234 </h4>
                                            <div className="text">supportyou@Envolve.com</div>
                                        </div>
                                        <Link href="#" className="theme-btn btn-style-two"><span className="btn-title">Let’s Start</span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

            </Layout>
        </>
    )
}