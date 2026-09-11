import ServiceSlider9 from "@/components/slider/ServiceSlider9"
import Link from "next/link"


export default function Service() {
    return (
        <>
            <section className="service-section-nine">
                <div className="auto-container">
                    <div className="sec-title style-nine  text-center">
                        <h4>Our Services</h4>
                        <h2>Complete Auto Repair &amp; Maintenance</h2>
                    </div>
                    <div className="row">
                        <div className="col-xl-12">
                            <ServiceSlider9/>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
