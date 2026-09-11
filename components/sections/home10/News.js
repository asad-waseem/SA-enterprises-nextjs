import NewsSlider10 from "@/components/slider/NewsSlider10"
import Link from "next/link"


export default function News() {
    return (
        <>
            <section className="news-home-10">
                <div className="auto-container">
                    <div className="sec-title">
                        <h4>News &amp; Updates</h4>
                        <h2>Latest From Our Blog Post</h2>
                    </div>
                </div>
                <div className="outer-container">
                   <NewsSlider10/>
                </div>
            </section>
        </>
    )
}
