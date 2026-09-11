import Link from "next/link"


export default function Blog() {
    return (
        <>
            <section className="blog-section-nine">
                <div className="auto-container">
                    <div className="sec-title style-nine text-center">
                        <h4>News &amp; Tips</h4>
                        <h2>Latest From Our News Room</h2>
                    </div>
                    <div className="row">
                        {/*Start Single blog Style1*/}
                        <div className="col-xl-4 col-lg-4">
                            <div className="news-block-eight news-block-nine wow fadeInUp" data-wow-duration="1500ms">
                                <div className="img-holder">
                                    <div className="inner">
                                        <img src="/assets/images-3/blog/blog-v9-1.jpg" alt="" />
                                        <div className="overlay-icon">
                                            <Link href="#"><span className="icon-plus" /></Link>
                                        </div>
                                    </div>
                                    <div className="categories-box bgclr9">
                                        <p>Business</p>
                                    </div>
                                </div>
                                <div className="text-holder">
                                    <ul className="meta-info">
                                        <li>14 February, 2021</li>
                                        <li><Link href="#">By Raana irave</Link></li>
                                    </ul>
                                    <h3 className="blog-title">
                                        <Link href="/blog-single">How Evolve Can Trasform Your Servicing Experience</Link>
                                    </h3>
                                    <div className="readmore">
                                        <Link href="#"><span className="icon-right-arrow-3" /> Read More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*End Single blog Style1*/}
                        {/*Start Single blog Style1*/}
                        <div className="col-xl-4 col-lg-4">
                            <div className="news-block-eight news-block-nine wow fadeInUp" data-wow-duration="1500ms">
                                <div className="img-holder">
                                    <div className="inner">
                                        <img src="/assets/images-3/blog/blog-v9-2.jpg" alt="" />
                                        <div className="overlay-icon">
                                            <Link href="#"><span className="icon-plus" /></Link>
                                        </div>
                                    </div>
                                    <div className="categories-box bgclr9">
                                        <p>Projects</p>
                                    </div>
                                </div>
                                <div className="text-holder">
                                    <ul className="meta-info">
                                        <li>10 February, 2021</li>
                                        <li><Link href="#">By Brendan Duke</Link></li>
                                    </ul>
                                    <h3 className="blog-title">
                                        <Link href="/blog-single">How to Extract the Most Life Out of Car Battery?</Link>
                                    </h3>
                                    <div className="readmore">
                                        <Link href="#"><span className="icon-right-arrow-3" /> Read More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*End Single blog Style1*/}
                        {/*Start Single blog Style1*/}
                        <div className="col-xl-4 col-lg-4">
                            <div className="news-block-eight news-block-nine wow fadeInUp" data-wow-duration="1500ms">
                                <div className="img-holder">
                                    <div className="inner">
                                        <img src="/assets/images-3/blog/blog-v9-3.jpg" alt="" />
                                        <div className="overlay-icon">
                                            <Link href="#"><span className="icon-plus" /></Link>
                                        </div>
                                    </div>
                                    <div className="categories-box bgclr9">
                                        <p>Marketing</p>
                                    </div>
                                </div>
                                <div className="text-holder">
                                    <ul className="meta-info">
                                        <li>14 February, 2021</li>
                                        <li><Link href="#">By Raana irave</Link></li>
                                    </ul>
                                    <h3 className="blog-title">
                                        <Link href="/blog-single">What is the Right Time to Get Your Car Oil Replaced?</Link>
                                    </h3>
                                    <div className="readmore">
                                        <Link href="#"><span className="icon-right-arrow-3" /> Read More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*End Single blog Style1*/}
                    </div>
                </div>
            </section>
        </>
    )
}
