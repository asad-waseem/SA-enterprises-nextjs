import TeamSlider8 from "@/components/slider/TeamSlider8"
import Link from "next/link"


export default function Team() {
    return (
        <>
            <section className="team-section-eight">
                <div className="auto-container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="team-section-eight_title">
                                <div className="sec-title style-eight">
                                    <h4>Team members</h4>
                                    <h2>Care From Quality Experts</h2>
                                </div>
                                <div className="btn-box">
                                    <Link href="#" className="theme-btn btn-style-eight"><span className="btn-title">Read
                                        More</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-12">
                            <TeamSlider8/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
