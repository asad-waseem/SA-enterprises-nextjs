import ServiceSlider6 from "@/components/slider/ServiceSlider6"


export default function Service() {
    return (
        <>
            <section className="service-home-6" style={{ backgroundImage: 'url(assets/images-2/background/service-bg.jpg)' }}>
                <div className="auto-container">
                    <div className="sec-title style-four text-center light">
                        <h2>Professional and <br />Dedicated Law Firm Services</h2>
                        <span className="text-decoration-four" />
                    </div>
                    {/*Service Carousel*/}
                    <ServiceSlider6 />
                </div>
            </section>
        </>
    )
}
