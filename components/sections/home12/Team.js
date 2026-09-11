import TeamSlider12 from "@/components/slider/TeamSlider12"


export default function Team() {
    return (
        <>
            <section className="team-home-12">
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="col-lg-3">
                            <div className="content-box">
                                <div className="sec-title">
                                    <h4>Meet Our Team</h4>
                                    <h2>Our Top Online Instructors</h2>
                                    <p>We denounce with righteous all indignation and dislike men who are so demoralized.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="inner-content position-relative">
                                <TeamSlider12 />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
