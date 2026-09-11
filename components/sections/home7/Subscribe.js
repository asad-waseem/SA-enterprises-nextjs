

export default function Subscribe() {
    return (
        <>
            <section className="subscribe-home-7 text-center">
                <div className="pattern-layer">
                    <div className="pattern-1" style={{ backgroundImage: 'url(assets/images-2/icons/shape-6.png)' }} />
                    <div className="pattern-2" style={{ backgroundImage: 'url(assets/images-2/icons/shape-7.png)' }} />
                </div>
                <div className="auto-container">
                    <div className="inner-box">
                        <figure className="icon-box"><img src="/assets/images-2/icons/icon-20.png" alt="" /></figure>
                        <h2>Subscribe Our Newsletter</h2>
                        <p>Get our essential Insurance Business news service (it's free). We'll keep you up-to-date
                            <br />with the latest breaking news &amp; expert analysis.</p>
                        <form action="index-7" method="post" className="subscribe-form">
                            <div className="form-group">
                                <input type="email" name="email" placeholder="Enter Your Email ..." required />
                                <button type="submit">Subscribe</button>
                            </div>
                        </form>
                        <div className="more-text">* We won’t send you spam, Unsubscribe at any time.</div>
                    </div>
                </div>
            </section>
        </>
    )
}
