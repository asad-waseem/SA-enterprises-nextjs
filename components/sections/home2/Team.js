import TeamSlider2 from "@/components/slider/TeamSlider2"


export default function Team() {
    return (
        <>
            <section className="team-section">
                <div className="auto-container">
                    <div className="sec-title style-two px-15">
                        <h4><span className="flaticon-endless" />Meet Our Team</h4>
                        <h2>Have Years of Real World <br />Experience </h2>
                    </div>
                    {/*Theme Carousel*/}
                    <TeamSlider2 />
                </div>
            </section>
        </>
    )
}
