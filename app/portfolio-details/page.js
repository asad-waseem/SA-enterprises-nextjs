
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Portfolio Details" wrapperCls="home_1">
                <section className="project-details">
                    <div className="auto-container">
                        <div className="top-box">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <h2>Project <br /> Information</h2>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="project-info-wrapper">
                                                <div className="project-info">
                                                    <p>Client:</p>
                                                    <h5>Magix box Pvt Ltd</h5>
                                                </div>
                                                <div className="project-info">
                                                    <p>Class:</p>
                                                    <h5>Marketing</h5>
                                                </div>
                                                <div className="project-info">
                                                    <p>Date:</p>
                                                    <h5>February 28, 2020</h5>
                                                </div>
                                                <div className="project-info">
                                                    <p>Website:</p>
                                                    <h5>www.example.com</h5>
                                                </div>
                                                <div className="project-info">
                                                    <p>Share:</p>
                                                    <ul className="social-links clearfix">
                                                        <li><Link href="#"><span className="fab fa-facebook-f" /></Link></li>
                                                        <li><Link href="#"><span className="fab fa-twitter" /></Link></li>
                                                        <li><Link href="#"><span className="fab fa-google-plus-g" /></Link></li>
                                                        <li><Link href="#"><span className="fab fa-skype" /></Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <h4>Project Description</h4>
                                    <div className="text">
                                        <p>To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences.</p>
                                        <p>Ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault one who avoids a pain that produces no resultant pleasure.</p>
                                    </div>
                                    <div className="link-btn"><Link href="#" className="theme-btn btn-style-one"><span className="btn-title">INTERESTED</span></Link></div>
                                </div>
                            </div>
                        </div>
                        <div className="image-box">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="image mb-30"><img src="/assets/images/gallery/gallery-7-1.jpg" alt="" /></div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="image mb-30"><img src="/assets/images/gallery/gallery-7-2.jpg" alt="" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </Layout>
        </>
    )
}