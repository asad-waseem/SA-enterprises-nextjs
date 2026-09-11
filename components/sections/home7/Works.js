import Link from "next/link"


export default function Works() {
    return (
        <>
            <section className="works-home-7">
                <div className="pattern-layer">
                    <div className="pattern-1" style={{ backgroundImage: 'url(assets/images-2/icons/shape-4.png)' }} />
                    <div className="pattern-2" style={{ backgroundImage: 'url(assets/images-2/icons/shape-5.png)' }} />
                </div>
                <div className="auto-container">
                    <div className="sec-title text-center">
                        <h4>How It’s Work</h4>
                        <h2>Few Easy Steps to Begin</h2>
                        <div className="text-decoration">
                            <span className="left" />
                            <span className="right" />
                        </div>
                    </div>
                    <div className="inner-container text-center">
                        <div className="row clearfix">
                            <div className="col-lg-3 col-md-6 col-sm-12 single-column">
                                <div className="single-item">
                                    <figure className="icon-box"><img src="/assets/images-2/icons/icon-13.png" alt="" /></figure>
                                    <span>Step 01</span>
                                    <h3>Get a Quotes</h3>
                                    <p>Business it will get frequently occurs that some pleasures.</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 single-column">
                                <div className="single-item">
                                    <figure className="icon-box"><img src="/assets/images-2/icons/icon-14.png" alt="" /></figure>
                                    <span>Step 02</span>
                                    <h3>Select a Policy</h3>
                                    <p>Wise man therefore always holds in these matters this principle</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 single-column">
                                <div className="single-item">
                                    <figure className="icon-box"><img src="/assets/images-2/icons/icon-15.png" alt="" /></figure>
                                    <span>Step 03</span>
                                    <h3>Application Process</h3>
                                    <p>Trouble that bound too ensue and equaly blame fail in their duty.</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 single-column">
                                <div className="single-item">
                                    <figure className="icon-box"><img src="/assets/images-2/icons/icon-16.png" alt="" /></figure>
                                    <span>Step 04</span>
                                    <h3>Get Your Policy</h3>
                                    <p>Desire that they cannot foresees the pain off bound to ensue.</p>
                                </div>
                            </div>
                        </div>
                        <div className="more-text">
                            <h3><i className="fas fa-comments-alt" />Interested? Consult with our expert team. <Link href="tel:15417543010">+1-541-754-3010</Link></h3>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
