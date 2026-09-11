import VideoPopup from "@/components/elements/VideoPopup"
import Link from "next/link"


export default function VideoGallery() {
    return (
        <>
            <section className="video-gallery-section-nine" style={{ backgroundImage: 'url(assets/images-3/video-gallery-section-nine-bg.jpg)' }}>
                <div className="auto-container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="video-gallery-nine_content">
                                <div className="video-holder-box9">
                                    <div className="video-box">
                                        <VideoPopup />
                                    </div>
                                </div>
                                <h2>For Best High Performance of Your Car<br /> Genuine Services Also.</h2>
                                <div className="btn-box">
                                    <Link href="#" className="theme-btn btn-style-nine"><span className="btn-title">Appointment</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
