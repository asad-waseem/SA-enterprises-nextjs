import ServiceSlider3 from "@/components/slider/ServiceSlider3"


export default function Services() {
    return (
        <>
            <section className="services-section-two">
                <div className="auto-container">
                    <div className="row m-0 align-items-center justify-content-between top-content">
                        <div className="sec-title style-three">
                            <h5>Industries</h5>
                            <h2>Major industries we served</h2>
                        </div>
                        <div className="text">Which is the same as saying through shrinking from toil and pain <br /> these perfectly simple and easy to distinguish.</div>
                    </div>
                    {/*Theme Carousel*/}
                    <ServiceSlider3 />
                </div>
            </section>
        </>
    )
}
