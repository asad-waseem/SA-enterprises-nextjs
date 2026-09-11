import TestimonialSlider2 from "@/components/slider/TestimonialSlider2"


export default function Testimonial() {
    return (
        <>
            <section className="testimonial-section-two">
                <div className="sec-bg" style={{ backgroundImage: 'url(assets/images/background/bg-6.jpg)' }} />
                <div className="auto-container">
                    <div className="sec-title light style-two text-center">
                        <h4><span className="flaticon-endless" />Testimonials</h4>
                        <h2>Words From Our Customers</h2>
                        <div className="text">Which is the same as saying through shrinking from toil and pain. These cases are <br />perfectly simple and easy to distinguish.</div>
                    </div>
                    {/*Theme Carousel*/}
                    <TestimonialSlider2 />
                </div>
            </section>
        </>
    )
}
