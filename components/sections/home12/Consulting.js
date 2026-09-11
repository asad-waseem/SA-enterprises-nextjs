import Link from "next/link"


export default function Consulting() {
    return (
        <>
            <section className="consulting-home-12 text-center" style={{ backgroundImage: 'url(assets/images-2/background/consulting-bg.jpg)' }}>
                <div className="auto-container">
                    <div className="content-box">
                        <div className="sec-title text-center">
                            <h4>Only the best</h4>
                            <h2>Any Time, Any Where Learing!..</h2>
                            <p>Foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who <br />which is the same as saying through shrinking.</p>
                        </div>
                        <figure className="image-box"><img src="/assets/images-2/resource/mockup-1.png" alt="" /></figure>
                        <div className="btn-box">
                            <Link href="/index-12" className="google-play"><i className="flaticon-playstore" />Google Play</Link>
                            <Link href="/index-12" className="app-store"><i className="flaticon-app" />Apple Store</Link>
                        </div>
                        <ul className="other-links clearfix">
                            <li><Link href="/index-12">Privacy policy</Link>,</li>
                            <li><Link href="/index-12">Terms &amp; conditions</Link></li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}
