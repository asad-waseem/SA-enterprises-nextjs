import Link from "next/link"


export default function DownloadPdf() {
    return (
        <>
            <section className="download-pdf">
                <div className="outer-box">
                    <div className="left-column" style={{ backgroundImage: 'url(assets/images/background/bg-11.jpg)' }}>
                        <div className="inner-box">
                            <div className="icon-box">
                                <div className="icon"><img src="/assets/images/icons/icon-18.png" alt="" /></div>
                                <h5>Software</h5>
                                <h4>Best Document-Sharing Software</h4>
                                <Link href="#"><i className="flaticon-right" />Download (2.5 mb)</Link>
                            </div>
                        </div>
                    </div>
                    <div className="right-column" style={{ backgroundImage: 'url(assets/images/background/bg-12.jpg)' }}>
                        <div className="inner-box">
                            <div className="icon-box">
                                <div className="icon"><img src="/assets/images/icons/icon-18.png" alt="" /></div>
                                <h5>Statement</h5>
                                <h4>Get Your Free Consulting Invoice</h4>
                                <Link href="#"><i className="flaticon-right" />Download (2.5 mb)</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
