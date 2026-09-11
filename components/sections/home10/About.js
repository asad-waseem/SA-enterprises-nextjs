import VideoPopup from "@/components/elements/VideoPopup"


export default function About() {
    return (
        <>
            <section className="about-home-10">
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="col-lg-6 col-md-12">
                            <div className="content-box">
                                <div className="sec-title">
                                    <h4>Who We Are</h4>
                                    <h2>Packing &amp; Moving to better lives since 1985</h2>
                                </div>
                                <div className="text">
                                    <p>Expound the actual teachings of the great explorer of the truth master builder of
                                        human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is
                                        all pleasures.</p>
                                </div>
                                <div className="inner-box">
                                    <div className="single-item">
                                        <div className="icon-box"><i className="flaticon-up" /></div>
                                        <h3>Quality &amp; Innovation</h3>
                                        <p>When our power of choice untrammelled like best.</p>
                                    </div>
                                    <div className="single-item">
                                        <div className="icon-box"><i className="flaticon-system" /></div>
                                        <h3>Stylish &amp; Safety</h3>
                                        <p>Master builder of human happiness every pain avoided.</p>
                                    </div>
                                </div>
                                <div className="lower-box clearfix">
                                    <figure className="signature"><img src="/assets/images-2/icons/signature.png" alt="" />
                                    </figure>
                                    <div className="author-box">
                                        <h3>Fred Dominick</h3>
                                        <span className="designation">Owner</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="video-inner" style={{ backgroundImage: 'url(assets/images-2/resource/video-2.jpg)' }}>
                                <div className="video-btn">
                                    <VideoPopup />
                                </div>
                            </div>
                        </div>
                    </div>
                </div></section>
        </>
    )
}
