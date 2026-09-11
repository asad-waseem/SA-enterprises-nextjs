'use client'
import Link from "next/link"
import ReactCurvedText from 'react-curved-text'



export default function About() {
    return (
        <>
            <section className="about-home-7">
                <div className="outer-container">
                    <div className="auto-container">
                        <div className="row clearfix">
                            <div className="col-lg-6 col-md-12 image-column">
                                <div className="image-box">
                                    <figure className="image image-1"><img src="/assets/images-2/resource/about-2.jpg" alt="" />
                                    </figure>
                                    <figure className="image image-2"><img src="/assets/images-2/resource/about-3.jpg" alt="" />
                                    </figure>
                                    <div className="icon-box">
                                        <img src="/assets/images-2/icons/logo.png" alt="" />
                                    </div>


                                    <ReactCurvedText width='180'
                                        height='180'
                                        cx='90'
                                        cy='90'
                                        rx='60'
                                        ry='60'
                                        startOffset='0'
                                        reversed={true}
                                        text='World’s #1 Consultancy . Works where it matters'
                                        textProps={{ "style": { "fontSize": "18" } }}
                                        textPathProps={{ "fill": "#ffffff" }}
                                        tspanProps={null}
                                        ellipseProps={null}
                                        svgProps={null}
                                    />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 content-column">
                                <div className="content-box">
                                    <div className="sec-title light">
                                        <h4>About Company</h4>
                                        <h2>Professional &amp; <br />Trustable Company In <br />Insurance</h2>
                                        <div className="text-decoration">
                                            <span className="left" />
                                            <span className="right" />
                                        </div>
                                    </div>
                                    <div className="text">
                                        <p>Denounce with righteous indignation and dislike men who are so beguiled and
                                            demoralized by the charms off pleasure of the moments so blinded by desire that
                                            they cannot foresee the pain trouble.</p>
                                    </div>
                                    <div className="inner-box">
                                        <figure className="award-box"><img src="/assets/images-2/icons/award-1.png" alt="" />
                                        </figure>
                                        <h2>08+</h2>
                                        <h3>Years of Experience</h3>
                                    </div>
                                    <div className="link"><Link href="/index-7"><i className="flaticon-right" />Know More About
                                        Us</Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
