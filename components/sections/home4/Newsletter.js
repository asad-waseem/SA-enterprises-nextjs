import Link from "next/link"


export default function Newsletter() {
    return (
        <>
            <section className="subscribe-newsletter-three" style={{ backgroundImage: 'url(assets/images/background/bg-14.jpg)' }}>
                <div className="auto-container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="content-box">
                                <div className="image"><img src="/assets/images/resource/image-25.jpg" alt="" /></div>
                                <div className="lower-content">
                                    <h4>Don’t miss anything <br /> keep update.</h4>
                                    <form action="#">
                                        <div className="form-group">
                                            <i className="flaticon-mail" />
                                            <input type="text" placeholder="Enter your email address..." />
                                            <button type="submit" className="theme-btn"><span className="flaticon-right" /></button>
                                        </div>
                                    </form>
                                    <h5>* Email will not be shared</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="content-box">
                                <div className="image"><img src="/assets/images/resource/image-26.jpg" alt="" /></div>
                                <div className="lower-content">
                                    <h4>Explore a new career <br /> &amp; get tips</h4>
                                    <form action="#">
                                        <div className="form-group">
                                            <i className="flaticon-mail" />
                                            <input type="text" placeholder="Upload your resume" />
                                            <button type="submit" className="theme-btn"><span className="flaticon-right" /></button>
                                        </div>
                                    </form>
                                    <h5>* We are hiring now.</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="content-box">
                                <div className="image"><img src="/assets/images/resource/image-25.jpg" alt="" /></div>
                                <div className="lower-content">
                                    <h4>Become a partner <br /> with Envolve</h4>
                                    <form action="#">
                                        <div className="form-group">
                                            <i className="flaticon-mail" />
                                            <input type="text" placeholder="Enter your email address..." />
                                            <button type="submit" className="theme-btn"><span className="flaticon-right" /></button>
                                        </div>
                                    </form>
                                    <h5>* Excellence in skills</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bottom-content">Know more about our pricing and plan. <Link href="#">Discuss with experts <i className="flaticon-right" /></Link></div>
                </div>
            </section>
        </>
    )
}
