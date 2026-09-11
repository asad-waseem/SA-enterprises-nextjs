import VideoPopup from "@/components/elements/VideoPopup"
import Link from "next/link"


export default function About() {
    return (
        <>
            <section className="about-home-11">
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="col-lg-6">
                            <div className="image-box">
                                <figure className="vector-icon"><img src="/assets/images-2/icons/vector-1.png" alt="" /></figure>
                                <figure className="image image-1"><img src="/assets/images-2/resource/about-5.jpg" alt="" /></figure>
                                <figure className="image image-2"><img src="/assets/images-2/resource/about-6.jpg" alt="" /></figure>
                                <div className="video-btn" style={{ backgroundImage: 'url(assets/images-2/resource/video-3.jpg)' }}>
                                    <VideoPopup />
                                    <h6>Video Presentation</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="content-box">
                                <div className="sec-title">
                                    <h4>About Envolve</h4>
                                    <h2>Overseas education, immigration &amp; business visa consultancy</h2>
                                </div>
                                <div className="text">
                                    We denounce with righteous indignation and dislike men who  beguiled and demoralized by the charms of pleasure the moment blindeddesires cannot foresee the asssitance for 2579 visa.
                                </div>
                                <div className="progress-levels">
                                    {/*Skill Box*/}
                                    <div className="progress-box wow fadeIn" data-wow-delay="100ms" data-wow-duration="1500ms">
                                        <h5>Assistance for Education</h5>
                                        <div className="inner">
                                            <div className="bar">
                                                <div className="bar-innner"><div className="bar-fill" style={{ width: '72%' }} /></div>
                                                <div className="percent">72%</div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*Skill Box*/}
                                    <div className="progress-box wow fadeIn" data-wow-delay="100ms" data-wow-duration="1500ms">
                                        <h5>Assistance for Business</h5>
                                        <div className="inner">
                                            <div className="bar">
                                                <div className="bar-innner"><div className="bar-fill" style={{ width: '86%' }} /></div>
                                                <div className="percent">86%</div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*Skill Box*/}
                                    <div className="progress-box wow fadeIn" data-wow-delay="100ms" data-wow-duration="1500ms">
                                        <h5>Assistance for Immigration</h5>
                                        <div className="inner">
                                            <div className="bar">
                                                <div className="bar-innner"><div className="bar-fill" style={{ width: '65%' }} /></div>
                                                <div className="percent">65%</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="btn-box">
                                    <Link href="/index-11">Read More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
