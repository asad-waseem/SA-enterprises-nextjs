
export default function Subscribe() {
    return (
        <>
            <div className="subscribe-newsletter-two" style={{ backgroundImage: 'url(assets/images/background/bg-11.png)' }}>
                <div className="auto-container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-4">
                            <div className="row">
                                <div className="col-md-6">
                                    <h2>Don’t miss anything <br /> keep update.</h2>
                                </div>
                                <div className="col-md-6">
                                    <form action="#">
                                        <div className="form-group">
                                            <i className="flaticon-mail" />
                                            <input type="text" placeholder="Enter your email..." />
                                            <button type="submit" className="theme-btn"><span className="flaticon-right" /></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
