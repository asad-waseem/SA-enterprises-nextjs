import TestimonialSlider3 from "@/components/slider/TestimonialSlider3"


export default function Testimonial() {
    return (
        <>
            <section className="testimonial-section-four">
                <div className="auto-container">
                    <div className="sec-title style-three">
                        <h5>Testimonials</h5>
                        <h2>Words from our customers</h2>
                    </div>
                    <div className="wrapper-box">
                        {/*Theme Carousel*/}
                        <TestimonialSlider3 />
                    </div>
                </div>
            </section>
        </>
    )
}
