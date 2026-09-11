import TestimonialSlider13 from "@/components/slider/TestimonialSlider13"


export default function Testimonial() {
    return (
        <>
            <section className="testimonial-section-home13 text-center" style={{ backgroundImage: 'url(assets/images-4/background/testimonial-bg.jpg)' }}>
                <div className="auto-container">
                    <div className="sec-title-two text-center light">
                        <h6>Testimonials</h6>
                        <h2>Words From Our Customers</h2>
                    </div>
                    <TestimonialSlider13 />
                </div>
            </section>
        </>
    )
}
