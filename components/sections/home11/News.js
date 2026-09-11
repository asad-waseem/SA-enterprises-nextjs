import Link from "next/link"


export default function News() {
    return (
        <>
            <section className="news-home-11">
                <div className="auto-container">
                    <div className="sec-title text-center">
                        <h4>News &amp; Updates</h4>
                        <h2>Latest from our blog post</h2>
                    </div>
                    <div className="row clearfix">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-item">
                                <figure className="image-box">
                                    <img src="/assets/images-2/news/news-7.jpg" alt="" />
                                    <Link href="/blog-details" className="link"><i className="far fa-search-plus" /></Link>
                                    <Link href="/blog-details" className="category">Business</Link>
                                </figure>
                                <div className="lower-content">
                                    <ul className="post-info clearfix">
                                        <li><span>14 February, 2021</span></li>
                                        <li>By <Link href="/blog-details">Raana irave</Link></li>
                                    </ul>
                                    <h3><Link href="/blog-details">How Evolve Can Trasform Your Servicing Experience</Link></h3>
                                    <div className="link"><Link href="/blog-details"><i className="flaticon-right" />Read More</Link></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-item">
                                <figure className="image-box">
                                    <img src="/assets/images-2/news/news-8.jpg" alt="" />
                                    <Link href="/blog-details" className="link"><i className="far fa-search-plus" /></Link>
                                    <Link href="/blog-details" className="category">Projects</Link>
                                </figure>
                                <div className="lower-content">
                                    <ul className="post-info clearfix">
                                        <li><span>10 February, 2021</span></li>
                                        <li>By <Link href="/blog-details">Brendan Duke</Link></li>
                                    </ul>
                                    <h3><Link href="/blog-details">How to Extract the Most Life Out of Car Battery?</Link></h3>
                                    <div className="link"><Link href="/blog-details"><i className="flaticon-right" />Read More</Link></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-item">
                                <figure className="image-box">
                                    <img src="/assets/images-2/news/news-9.jpg" alt="" />
                                    <Link href="/blog-details" className="link"><i className="far fa-search-plus" /></Link>
                                    <Link href="/blog-details" className="category">Marketing</Link>
                                </figure>
                                <div className="lower-content">
                                    <ul className="post-info clearfix">
                                        <li><span>14 February, 2020</span></li>
                                        <li>By <Link href="/blog-details">Raana irave</Link></li>
                                    </ul>
                                    <h3><Link href="/blog-details">What is the Right Time to Get Your Car Oil Replaced?</Link></h3>
                                    <div className="link"><Link href="/blog-details"><i className="flaticon-right" />Read More</Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
