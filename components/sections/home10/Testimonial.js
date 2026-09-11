import TestimonialSlider10 from "@/components/slider/TestimonialSlider10"


export default function Testimonial() {
    return (
        <>
            <section className="testimonial-home-10" style={{ backgroundImage: 'url(assets/images-2/background/testimonial-bg-3.jpg)' }}>
                <div className="auto-container">
                    <div className="sec-title text-center light">
                        <h4>Testimonials</h4>
                        <h2>Words From Our Customers</h2>
                    </div>
                    <TestimonialSlider10 />
                </div>
            </section>
        </>
    )
}
