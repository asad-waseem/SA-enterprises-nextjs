import Link from "next/link"


export default function MeetUp() {
    return (
        <>
            <section className="meet-up-section" style={{ backgroundImage: 'url(assets/images/background/bg-10.jpg)' }}>
                <div className="auto-container">
                    <div className="content-box">
                        <div className="icon"><span className="flaticon-team-1" /></div>
                        <h3>Start Here</h3>
                        <h1>Never Give up</h1>
                        <div className="text">96 Queen Park, Los Vegas 88901, USA</div>
                        <ul>
                            <li><Link href="tel:+1800555440055"><i className="flaticon-phone" />+1 800 555 44 00 &amp; 55</Link></li>
                            <li><Link href="mailto:support@Envolve.com"><i className="flaticon-mail-1" />support@Envolve.com</Link></li>
                        </ul>
                        <div className="link-btn"><Link href="#" className="theme-btn btn-style-two"><span className="btn-title">APPOINTMENT <i className="flaticon-right" /></span></Link></div>
                    </div>
                </div>
            </section>
        </>
    )
}
