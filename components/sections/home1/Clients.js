import ClientSlider1 from "@/components/slider/ClientSlider1"
import Link from "next/link"


export default function Clients() {
    return (
        <>
            <section className="clients-section">
                <div className="pattern" style={{ backgroundImage: 'url(assets/images/shape/pattern-1.png)' }} />
                <div className="auto-container">
                    <div className="row">
                        <div className="col-lg-9">
                            {/*Sponsors Carousel*/}
                            <ClientSlider1 />
                        </div>
                        <div className="col-lg-3">
                            <div className="link-btn text-right">
                                <Link href="#" className="theme-btn btn-style-one text-white"><span className="btn-title">Join With Us</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
