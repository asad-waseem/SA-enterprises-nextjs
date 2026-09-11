import TestimonialSlider9 from "@/components/slider/TestimonialSlider9"
import Link from "next/link"


export default function Testimonial() {
    return (
        <>
            <section className="testimonial-section-nine">
                <div className="layer-outer" style={{ backgroundImage: 'url(assets/images-3/testimonial-section-nine-bg.jpg)' }}>
                </div>
                <div className="auto-container">
                    <div className="row">
                        <div className="col-xl-4">
                            <div className="testimonial-nine_title">
                                <div className="sec-title style-nine">
                                    <h4>Testimonials</h4>
                                    <h2>Our Customers<br /> Praise us for Our<br /> Great Results</h2>
                                </div>
                                <div className="inner-content">
                                    <p>Have to be repudiated annoyances accepted the wise man therefore.</p>
                                    <div className="btn-box">
                                        <Link href="#" className="theme-btn btn-style-nine"><span className="btn-title">All
                                            Works</span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-8">
                            <div className="testimonial-nine-carousel">
                            <TestimonialSlider9 />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
