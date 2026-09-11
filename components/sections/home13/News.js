import NewsSlider13 from "@/components/slider/NewsSlider13"


export default function News() {
    return (
        <>
            <section className="news-section-home13">
                <div className="auto-container">
                    <div className="sec-title-two">
                        <h6>News &amp; Updates</h6>
                        <h2>Latest From Our Blog Post</h2>
                    </div>
                    <div className="position-relative">
                        <NewsSlider13 />
                    </div>
                </div>
            </section>
        </>
    )
}
