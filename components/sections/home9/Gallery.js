import GallerySlider9 from "@/components/slider/GallerySlider9"
import Link from "next/link"


export default function Gallery() {
    return (
        <>
            <section className="gallery-section-nine">
                <div className="gallery-section-nine_bg" style={{ backgroundImage: 'url(assets/images-3/gallery-section-nine-bg.jpg)' }} />
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4">
                            <div className="gallery-nine_title">
                                <div className="sec-title style-nine">
                                    <h4>Work Gallery</h4>
                                    <h2>The Example<br /> Of Our Perfections</h2>
                                </div>
                                <div className="inner-content">
                                    <p>Our power of choice is untrammelled and able to do what we like best, </p>
                                    <div className="btn-box">
                                        <Link href="#" className="theme-btn btn-style-nine"><span className="btn-title">All
                                            Works</span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-8 position-relative">

                            <GallerySlider9 />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
