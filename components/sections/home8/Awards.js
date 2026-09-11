import AwardSlider8 from "@/components/slider/AwardSlider8"


export default function Awards() {
    return (
        <>
            <section className="awards-section-eight">
                <div className="pattern-bg" style={{ backgroundImage: 'url(assets/images-3/pattern/pattern-bg-1.jpg)' }} />
                <div className="auto-container">
                    <div className="sec-title style-eight clr2  text-center">
                        <h4>Awards &amp; Achivements</h4>
                        <h2>The Finest Institution with the<br /> Finest Rehabilitation</h2>
                    </div>
                    <div className="row">
                        <div className="col-xl-12">
                            <AwardSlider8 />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
