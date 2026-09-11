import VideoPopup from "@/components/elements/VideoPopup"


export default function Choose() {
    return (
        <>
            <section className="choose-section-eight">
                <div className="auto-container">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="video-holder-box8" style={{ backgroundImage: 'url(assets/images-3/video-holder-box8-bg.jpg)' }}>
                                <div className="video-box">
                                    <VideoPopup />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="choose-content-eight">
                                <div className="sec-title style-eight">
                                    <h4>Why Choose Us</h4>
                                    <h2>We Make You The Best You<br /> Ever Can Be.</h2>
                                </div>
                                <div className="inner-content">
                                    <ul>
                                        <li>
                                            <div className="inner">
                                                <div className="icon">
                                                    <div className="icon-bg1" style={{ backgroundImage: 'url(assets/images-3/icon/icon-bg-1.png)' }}>
                                                    </div>
                                                    <div className="icon-bg1-overlay" style={{ backgroundImage: 'url(assets/images-3/icon/icon-bg-1-overlay.png)' }}>
                                                    </div>
                                                    <span className="icon-login clr8" />
                                                </div>
                                                <div className="text">
                                                    <h3>Private &amp; Confidential</h3>
                                                    <p>Desires to obtain pain of itself because occur occasionally
                                                        circumstances.</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="inner">
                                                <div className="icon">
                                                    <div className="icon-bg1" style={{ backgroundImage: 'url(assets/images-3/icon/icon-bg-1.png)' }}>
                                                    </div>
                                                    <div className="icon-bg1-overlay" style={{ backgroundImage: 'url(assets/images-3/icon/icon-bg-1-overlay.png)' }}>
                                                    </div>
                                                    <span className="icon-unknown clr8" />
                                                </div>
                                                <div className="text">
                                                    <h3>Anonymous Discussions</h3>
                                                    <p>These cases are perfectly simple and easy to distinguish. In a free
                                                        hour.</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="inner">
                                                <div className="icon">
                                                    <div className="icon-bg1" style={{ backgroundImage: 'url(assets/images-3/icon/icon-bg-1.png)' }}>
                                                    </div>
                                                    <div className="icon-bg1-overlay" style={{ backgroundImage: 'url(assets/images-3/icon/icon-bg-1-overlay.png)' }}>
                                                    </div>
                                                    <span className="icon-support clr8" />
                                                </div>
                                                <div className="text">
                                                    <h3>24/7 Caring With Experts</h3>
                                                    <p>Business will frequently occur that pleasures have to be repudiated
                                                        accepted.</p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
