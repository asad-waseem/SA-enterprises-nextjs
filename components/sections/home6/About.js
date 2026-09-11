import AboutSlider6 from "@/components/slider/AboutSlider6"
import Link from "next/link"


export default function About() {
    return (
        <>
            <section className="about-section-two alternat-2">
                <div className="auto-container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="image-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms"><img className="lazy-image owl-lazy" src="/assets/images-2/resource/about-1.jpg" alt="" /></div>
                        </div>
                        <div className="col-lg-6">
                            <div className="content-box">
                                <div className="sec-title style-four">
                                    <h2>Helping Good People Do Good Things</h2>
                                    <span className="text-decoration-four" />
                                </div>
                                <div className="content-block">
                                    <div className="text">Our power of choices is untrammelled and when nothing prevents <br /> to do what we like best principle of selection.</div>
                                    <h4>Client Focused</h4>
                                    <div className="text light">Every pleasures is to welcomed pain avoided owing to the duty the obligations of business it will frequently occur that pleasures have be repudiated and annoyances accepted.</div>
                                </div>
                                {/*Testimonial Carousel*/}
                                <AboutSlider6/>
                                <Link href="/index-6" className="theme-btn btn-style-four"><span className="btn-title">More Details</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
