import VideoPopup from "@/components/elements/VideoPopup"


export default function Chooseus() {
    return (
        <>
            <section className="chooseus-section-home14">
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="col-lg-6 col-md-12 col-sm-12 video-column">
                            <div className="video-inner" style={{ backgroundImage: 'url(assets/images-4/background/video-bg-2.jpg)' }}>
                                <VideoPopup style={4} />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                            <div className="content-box">
                                <div className="sec-title-three">
                                    <h2>Reason For Choosing Us</h2>
                                    <p>Denounce with righteous indignation &amp; dislike men who are so beguiled demoralized by hold the charms.</p>
                                </div>
                                <div className="inner-box">
                                    <div className="single-item">
                                        <div className="icon-box"><i className="customicon-building-1" /></div>
                                        <h3>Unique Designs</h3>
                                        <p>Desires to obtain pain of itself because occur occasionally circumstances.</p>
                                    </div>
                                    <div className="single-item">
                                        <div className="icon-box"><i className="customicon-measure" /></div>
                                        <h3>Value Engineering</h3>
                                        <p>These cases are perfectly simple and easy to distinguish. In a free hour.</p>
                                    </div>
                                    <div className="single-item">
                                        <div className="icon-box"><i className="customicon-trophy-1" /></div>
                                        <h3>Award Winning Team</h3>
                                        <p>Business will frequently occur that pleasures have to be repudiated accepted.</p>
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
