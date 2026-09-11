'use client'
import ProjectSlider2 from "@/components/slider/ProjectSlider2"
import Link from "next/link"
import { useState } from "react"

export default function Projects() {
    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    return (
        <>
            <section className="projects-section">
                <div className="title">PROJECTS</div>
                <div className="auto-container">
                    <div className="row">
                        <div className="col-xl-4 left-column">
                            <div className="nav-tabs-wrapper">
                                <ul className="nav nav-tabs tab-btn-style-one" role="tablist">
                                    <li className="nav-item wow fadeInUp" onClick={() => handleOnClick(1)}>
                                        <a className={activeIndex == 1 ? "nav-link active" : "nav-link"}>All Topics
                                        </a>
                                    </li>
                                    <li className="nav-item wow fadeInUp"  onClick={() => handleOnClick(2)} data-wow-delay=".6s">
                                        <a className={activeIndex == 2 ? "nav-link active" : "nav-link"}>Business
                                        </a>
                                    </li>
                                    <li className="nav-item wow fadeInUp"  onClick={() => handleOnClick(3)} data-wow-delay=".8s">
                                        <a className={activeIndex == 3 ? "nav-link active" : "nav-link"}>Coaching
                                        </a>
                                    </li>
                                    <li className="nav-item wow fadeInUp"  onClick={() => handleOnClick(4)} data-wow-delay=".8s">
                                        <a className={activeIndex == 4 ? "nav-link active" : "nav-link"}>Financial
                                        </a>
                                    </li>
                                    <li className="nav-item wow fadeInUp"  onClick={() => handleOnClick(5)} data-wow-delay=".8s">
                                        <a className={activeIndex == 5 ? "nav-link active" : "nav-link"}>Marketing
                                        </a>
                                    </li>
                                    <li className="nav-item wow fadeInUp"  onClick={() => handleOnClick(6)} data-wow-delay=".8s">
                                        <a className={activeIndex == 6 ? "nav-link active" : "nav-link"}>Technical
                                        </a>
                                    </li>
                                </ul>
                                <div className="link-btn"><Link href="#" className="theme-btn">All Projects</Link></div>
                            </div>
                        </div>
                        <div className="col-xl-8 right-column">
                            {/* Tab panes */}
                            <div className="tab-content">
                                <div  className={activeIndex == 1 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                                    {/*Theme Carousel*/}
                                    <ProjectSlider2 />
                                </div>
                                <div  className={activeIndex == 2 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                                    {/*Theme Carousel*/}
                                    <ProjectSlider2 />
                                </div>
                                <div  className={activeIndex == 3 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                                    {/*Theme Carousel*/}
                                    <ProjectSlider2 />
                                </div>
                                <div  className={activeIndex == 4 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                                    {/*Theme Carousel*/}
                                    <ProjectSlider2 />
                                </div>
                                <div  className={activeIndex == 5 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                                    {/*Theme Carousel*/}
                                    <ProjectSlider2 />
                                </div>
                                <div  className={activeIndex == 6 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                                    {/*Theme Carousel*/}
                                    <ProjectSlider2 />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
