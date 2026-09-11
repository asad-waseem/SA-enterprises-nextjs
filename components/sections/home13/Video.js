import VideoPopup from "@/components/elements/VideoPopup"
import VideoSlider13 from "@/components/slider/VideoSlider13"
import Link from "next/link"


export default function Video() {
    return (
        <>
            <section className="video-section-home13 text-center" style={{ backgroundImage: 'url(assets/images-4/background/video-bg.jpg)' }}>
                <div className="auto-container">
                    <div className="inner-box">
                        <VideoPopup style={3}/>
                        <div className="sec-title-two text-center">
                            <h6>Interesting Numbers</h6>
                        </div>
                        <VideoSlider13/>
                    </div>
                </div>
            </section>
        </>
    )
}
