'use client'
import VideoPopup from "@/components/elements/VideoPopup"
import Link from "next/link"
import ReactCurvedText from 'react-curved-text'


export default function Highlights() {
    return (
        <>
            <section className="highlights-home-6">
                <div className="auto-container">
                    <div className="inner-container">
                        <div className="row clearfix">
                            <div className="col-lg-6 big-column">
                                <div className="inner-box clearfix">
                                    <div className="single-item">
                                        <div className="icon-box"><i className="flaticon-bank" /></div>
                                        <h3>#1 Law Firm <br />in Western Country</h3>
                                        <div className="link"><Link href="/index-6">Read More<i className="fas fa-caret-right" /></Link></div>
                                    </div>
                                    <div className="single-item">
                                        <div className="icon-box"><i className="flaticon-null-1" /></div>
                                        <h3>We Make <br />You Our Top Priority</h3>
                                        <div className="link"><Link href="/index-6">Read More<i className="fas fa-caret-right" /></Link></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 big-column">
                                <div className="video-column" style={{ backgroundImage: 'url(assets/images-2/resource/video-1.jpg)' }}>
                                    <div className="curve-text">
                                        <div className="icon-box"><i className="flaticon-null-1" /></div>
                                        <ReactCurvedText width='160'
                                            height='160'
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
                                    <div className="video-btn"><VideoPopup />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
