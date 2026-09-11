'use client'
import Link from "next/link"
import { useState } from "react"


export default function Offered() {
    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    return (
        <>
            <section className="offered-home-12">
                <div className="auto-container">
                    <div className="sec-title text-center">
                        <h4>Courses Offered</h4>
                        <h2>Browse Our Top Courses</h2>
                    </div>
                    <ul className="info-list nav nav-tabs clearfix" role="tablist">
                        <li className="nav-item" onClick={() => handleOnClick(1)}>
                            <a className={activeIndex == 1 ? "nav-link active" : "nav-link"}>all Category</a>
                        </li>
                        <li className="nav-item" onClick={() => handleOnClick(2)}>
                            <a className={activeIndex == 2 ? "nav-link active" : "nav-link"}>Art &amp; Design</a>
                        </li>
                        <li className="nav-item" onClick={() => handleOnClick(3)}>
                            <a className={activeIndex == 3 ? "nav-link active" : "nav-link"}>Business</a>
                        </li>
                        <li className="nav-item" onClick={() => handleOnClick(4)}>
                            <a className={activeIndex == 4 ? "nav-link active" : "nav-link"}>Data Science</a>
                        </li>
                        <li className="nav-item" onClick={() => handleOnClick(5)}>
                            <a className={activeIndex == 5 ? "nav-link active" : "nav-link"}>Math &amp; Logic</a>
                        </li>
                        <li className="nav-item" onClick={() => handleOnClick(6)}>
                            <a className={activeIndex == 6 ? "nav-link active" : "nav-link"}>Photography</a>
                        </li>
                        <li className="nav-item" onClick={() => handleOnClick(7)}>
                            <a className={activeIndex == 7 ? "nav-link active" : "nav-link"}>Technology</a>
                        </li>
                    </ul>
                    <div className="tab-content wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                        <div className={activeIndex == 1 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                            <div className="row clearfix">
                                <div className="col-lg-3 col-md-6">
                                    <div className="single-item">
                                        <div className="inner-box">
                                            <div className="image-box">
                                                <figure className="image"><img src="/assets/images-2/resource/offered-1.jpg" alt="" /><Link href="/assets/images-2/resource/offered-1.jpg" className="lightbox-image" data-fancybox="gallery"><i className="fal fa-plus" /></Link></figure>
                                                <div className="category"><Link href="/index-12">Math &amp; Logic</Link></div>
                                                <div className="price">$40.00</div>
                                            </div>
                                            <div className="lower-content">
                                                <h5><Link href="/index-12">Programming Foundations: Algorithms</Link></h5>
                                                <div className="rating-box clearfix">
                                                    <ul>
                                                        <li><i className="fas fa-star" /></li>
                                                        <li><i className="fas fa-star" /></li>
                                                        <li><i className="fas fa-star" /></li>
                                                        <li><i className="fas fa-star" /></li>
                                                        <li><i className="fas fa-star" /></li>
                                                    </ul>
                                                    <Link href="/index-12">(1,081 Views)</Link>
                                                </div>
                                                <ul className="list-item">
                                                    <li>Sorting Data</li>
                                                    <li>Searching Data</li>
                                                    <li>Looping &amp; Recursion</li>
                                                    <li>Filtering</li>
                                                </ul>
                                                <div className="lower-box clearfix">
                                                    <div className="view-time"><i className="far fa-clock" />1hr 40 mins</div>
                                                    <div className="share-option">
                                                        <i className="share-icon far fa-share-alt" />
                                                        <ul className="share-links clearfix">
                                                            <li><Link href="/index-12"><i className="fab fa-facebook-f" /></Link></li>
                                                            <li><Link href="/index-12"><i className="fab fa-twitter" /></Link></li>
                                                            <li><Link href="/index-12"><i className="fab fa-google-plus-g" /></Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="single-item">
                                        <div className="inner-box">
                                            <div className="image-box">
                                                <figure className="image"><img src="/assets/images-2/resource/offered-2.jpg" alt="" /><Link href="/assets/images-2/resource/offered-2.jpg" className="lightbox-image" data-fancybox="gallery"><i className="fal fa-plus" /></Link></figure>
                                                <div className="category"><Link href="/index-12">Business</Link></div>
                                                <div className="price">$85.00</div>
                                                <div className="offer">25%</div>
                                            </div>
                                            <div className="lower-content">
                                                <h5><Link href="/index-12">Improving Your Conflict Competence</Link></h5>
                                                <div className="rating-box clearfix">
                                                    <ul>
                                                        <li><i className="fas fa-star" /></li>
                                                        <li><i className="fas fa-star" /></li>
                                                        <li><i className="fas fa-star" /></li>
                                                        <li><i className="fas fa-star" /></li>
                                                        <li><i className="fas fa-star" /></li>
                                                    </ul>
                                                    <Link href="/index-12">(2,500 Views)</Link>
                                                </div>
                                                <ul className="list-item">
                                                    <li>Listening With Empathy</li>
                                                    <li>Learn from Customer</li>
                                                    <li>Replacing Words</li>
                                                    <li>Helping the Customer</li>
                                                </ul>
                                                <div className="lower-box clearfix">
                                                    <div className="view-time"><i className="far fa-clock" />2hr 20 mins</div>
                                                    <div className="share-option">
                                                        <i className="share-icon far fa-share-alt" />
                                                        <ul className="share-links clearfix">
                                                            <li><Link href="/index-12"><i className="fab fa-facebook-f" /></Link></li>
                                                            <li><Link href="/index-12"><i className="fab fa-twitter" /></Link></li>
                                                            <li><Link href="/index-12"><i className="fab fa-google-plus-g" /></Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="single-item">
                                        <div className="inner-box">
                                            <div className="image-box">
                                                <figure className="image"><img src="/assets/images-2/resource/offered-3.jpg" alt="" /><Link href="/assets/images-2/resource/offered-3.jpg" className="lightbox-image" data-fancybox="gallery"><i className="fal fa-plus" /></Link></figure>
                                                <div className="category"><Link href="/index-12">Design</Link></div>
                                                <div className="price">$24.00</div>
                                            </div>
                                            <div className="lower-content">
                                                <h5><Link href="/index-12">Illustrator 2021 Essential Training</Link></h5>
                                                <div className="rating-box clearfix">
                                                    <ul>
                                                        <li><i className="fas fa-star" /></li>
                                                        <li><i className="fas fa-star" /></li>
                                                        <li><i className="fas fa-star" /></li>
                                                        <li><i className="fas fa-star" /></li>
                                                        <li><i className="fas fa-star" /></li>
                                                    </ul>
                                                    <Link href="/index-12">(800 Views)</Link>
                                                </div>
                                                <ul className="list-item">
                                                    <li>What is Illustrator?</li>
                                                    <li>Navigating Documents</li>
                                                    <li>Drawing Shapes</li>
                                                    <li>Working With Color</li>
                                                </ul>
                                                <div className="lower-box clearfix">
                                                    <div className="view-time"><i className="far fa-clock" />1hr 10 mins</div>
                                                    <div className="share-option">
                                                        <i className="share-icon far fa-share-alt" />
                                                        <ul className="share-links clearfix">
                                                            <li><Link href="/index-12"><i className="fab fa-facebook-f" /></Link></li>
                                                            <li><Link href="/index-12"><i className="fab fa-twitter" /></Link></li>
                                                            <li><Link href="/index-12"><i className="fab fa-google-plus-g" /></Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="single-item">
                                        <div className="inner-box">
                                            <div className="image-box">
                                                <figure className="image"><img src="/assets/images-2/resource/offered-4.jpg" alt="" /><Link href="/assets/images-2/resource/offered-4.jpg" className="lightbox-image" data-fancybox="gallery"><i className="fal fa-plus" /></Link></figure>
                                                <div className="category"><Link href="/index-12">Photography</Link></div>
                                                <div className="price">$19.00</div>
                                            </div>
                                            <div className="lower-content">
                                                <h5><Link href="/index-12">Photoshop 2021 One-on-One: Fundamentals</Link></h5>
                                                <div className="rating-box clearfix">
                                                    <ul>
                                                        <li><i className="fas fa-star" /></li>
                                                        <li><i className="fas fa-star" /></li>
                                                        <li><i className="fas fa-star" /></li>
                                                        <li><i className="fas fa-star" /></li>
                                                        <li><i className="fas fa-star" /></li>
                                                    </ul>
                                                    <Link href="/index-12">(1,200 Views)</Link>
                                                </div>
                                                <ul className="list-item">
                                                    <li>Opening Images</li>
                                                    <li>Zoom In &amp; Out</li>
                                                    <li>Creating New Layer</li>
                                                    <li>Recoloring Art Work</li>
                                                </ul>
                                                <div className="lower-box clearfix">
                                                    <div className="view-time"><i className="far fa-clock" />40 mins</div>
                                                    <div className="share-option">
                                                        <i className="share-icon far fa-share-alt" />
                                                        <ul className="share-links clearfix">
                                                            <li><Link href="/index-12"><i className="fab fa-facebook-f" /></Link></li>
                                                            <li><Link href="/index-12"><i className="fab fa-twitter" /></Link></li>
                                                            <li><Link href="/index-12"><i className="fab fa-google-plus-g" /></Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={activeIndex == 2 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                            <div className="row clearfix">
                                <div className="col-lg-3 col-md-6">
                                    <div className="single-item">
                                        <div className="inner-box">
                                            <div className="image-box">
                                                <figure className="image"><img src="/assets/images-2/resource/offered-1.jpg" alt="" /><Link href="/assets/images-2/resource/offered-1.jpg" className="lightbox-image" data-fancybox="gallery"><i className="fal fa-plus" /></Link></figure>
                                                <div className="category"><Link href="/index-12">Math &amp; Logic</Link></div>
                                                <div className="price">$40.00</div>
                                            </div>
                                            <div className="lower-content">
                                                <h5><Link href="/index-12">Programming Foundations: Algorithms</Link></h5>
                                                <div className="rating-box clearfix">
                                                    <ul>
                                                        <li><i className="fas fa-star" /></li>
                                                        <li><i className="fas fa-star" /></li>
                                                        <li><i className="fas fa-star" /></li>
                                                        <li><i className="fas fa-star" /></li>
                                                        <li><i className="fas fa-star" /></li>
                                                    </ul>
                                                    <Link href="/index-12">(1,081 Views)</Link>
                                                </div>
                                                <ul className="list-item">
                                                    <li>Sorting Data</li>
                                                    <li>Searching Data</li>
                                                    <li>Looping &amp; Recursion</li>
                                                    <li>Filtering</li>
                                                </ul>
                                                <div className="lower-box clearfix">
                                                    <div className="view-time"><i className="far fa-clock" />1hr 40 mins</div>
                                                    <div className="share-option">
                                                        <i className="share-icon far fa-share-alt" />
                                                        <ul className="share-links clearfix">
                                                            <li><Link href="/index-12"><i className="fab fa-facebook-f" /></Link></li>
                                                            <li><Link href="/index-12"><i className="fab fa-twitter" /></Link></li>
                                                            <li><Link href="/index-12"><i className="fab fa-google-plus-g" /></Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="single-item">
                                        <div className="inner-box">
                                            <div className="image-box">
                                                <figure className="image"><img src="/assets/images-2/resource/offered-2.jpg" alt="" /><Link href="/assets/images-2/resource/offered-2.jpg" className="lightbox-image" data-fancybox="gallery"><i className="fal fa-plus" /></Link></figure>
                                                <div className="category"><Link href="/index-12">Business</Link></div>
                                                <div className="price">$85.00</div>
                                                <div className="offer">25%</div>
                                            </div>
                                            <div className="lower-content">
                                                <h5><Link href="/index-12">Improving Your Conflict Competence</Link></h5>
                                                <div className="rating-box clearfix">
                                                    <ul>
                                                        <li><i className="fas fa-star" /></li>
                                                        <li><i className="fas fa-star" /></li>
                                                        <li><i className="fas fa-star" /></li>
                                                        <li><i className="fas fa-star" /></li>
                                                        <li><i className="fas fa-star" /></li>
                                                    </ul>
                                                    <Link href="/index-12">(2,500 Views)</Link>
                                                </div>
                                                <ul className="list-item">
                                                    <li>Listening With Empathy</li>
                                                    <li>Learn from Customer</li>
                                                    <li>Replacing Words</li>
                                                    <li>Helping the Customer</li>
                                                </ul>
                                                <div className="lower-box clearfix">
                                                    <div className="view-time"><i className="far fa-clock" />2hr 20 mins</div>
                                                    <div className="share-option">
                                                        <i className="share-icon far fa-share-alt" />
                                                        <ul className="share-links clearfix">
                                                            <li><Link href="/index-12"><i className="fab fa-facebook-f" /></Link></li>
                                                            <li><Link href="/index-12"><i className="fab fa-twitter" /></Link></li>
                                                            <li><Link href="/index-12"><i className="fab fa-google-plus-g" /></Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="single-item">
                                        <div className="inner-box">
                                            <div className="image-box">
                                                <figure className="image"><img src="/assets/images-2/resource/offered-3.jpg" alt="" /><Link href="/assets/images-2/resource/offered-3.jpg" className="lightbox-image" data-fancybox="gallery"><i className="fal fa-plus" /></Link></figure>
                                                <div className="category"><Link href="/index-12">Design</Link></div>
                                                <div className="price">$24.00</div>
                                            </div>
                                            <div className="lower-content">
                                                <h5><Link href="/index-12">Illustrator 2021 Essential Training</Link></h5>
                                                <div className="rating-box clearfix">
                                                    <ul>
                                                        <li><i className="fas fa-star" /></li>
                                                        <li><i className="fas fa-star" /></li>
                                                        <li><i className="fas fa-star" /></li>
                                                        <li><i className="fas fa-star" /></li>
                                                        <li><i className="fas fa-star" /></li>
                                                    </ul>
                                                    <Link href="/index-12">(800 Views)</Link>
                                                </div>
                                                <ul className="list-item">
                                                    <li>What is Illustrator?</li>
                                                    <li>Navigating Documents</li>
                                                    <li>Drawing Shapes</li>
                                                    <li>Working With Color</li>
                                                </ul>
                                                <div className="lower-box clearfix">
                                                    <div className="view-time"><i className="far fa-clock" />1hr 10 mins</div>
                                                    <div className="share-option">
                                                        <i className="share-icon far fa-share-alt" />
                                                        <ul className="share-links clearfix">
                                                            <li><Link href="/index-12"><i className="fab fa-facebook-f" /></Link></li>
                                                            <li><Link href="/index-12"><i className="fab fa-twitter" /></Link></li>
                                                            <li><Link href="/index-12"><i className="fab fa-google-plus-g" /></Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="single-item">
                                        <div className="inner-box">
                                            <div className="image-box">
                                                <figure className="image"><img src="/assets/images-2/resource/offered-4.jpg" alt="" /><Link href="/assets/images-2/resource/offered-4.jpg" className="lightbox-image" data-fancybox="gallery"><i className="fal fa-plus" /></Link></figure>
                                                <div className="category"><Link href="/index-12">Photography</Link></div>
                                                <div className="price">$19.00</div>
                                            </div>
                                            <div className="lower-content">
                                                <h5><Link href="/index-12">Photoshop 2021 One-on-One: Fundamentals</Link></h5>
                                                <div className="rating-box clearfix">
                                                    <ul>
                                                        <li><i className="fas fa-star" /></li>
                                                        <li><i className="fas fa-star" /></li>
                                                        <li><i className="fas fa-star" /></li>
                                                        <li><i className="fas fa-star" /></li>
                                                        <li><i className="fas fa-star" /></li>
                                                    </ul>
                                                    <Link href="/index-12">(1,200 Views)</Link>
                                                </div>
                                                <ul className="list-item">
                                                    <li>Opening Images</li>
                                                    <li>Zoom In &amp; Out</li>
                                                    <li>Creating New Layer</li>
                                                    <li>Recoloring Art Work</li>
                                                </ul>
                                                <div className="lower-box clearfix">
                                                    <div className="view-time"><i className="far fa-clock" />40 mins</div>
                                                    <div className="share-option">
                                                        <i className="share-icon far fa-share-alt" />
                                                        <ul className="share-links clearfix">
                                                            <li><Link href="/index-12"><i className="fab fa-facebook-f" /></Link></li>
                                                            <li><Link href="/index-12"><i className="fab fa-twitter" /></Link></li>
                                                            <li><Link href="/index-12"><i className="fab fa-google-plus-g" /></Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={activeIndex == 3 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                            <div className="row clearfix">
                                <div className="col-lg-3 col-md-6">
                                    <div className="single-item">
                                        <div className="inner-box">
                                            <div className="image-box">
                                                <figure className="image"><img src="/assets/images-2/resource/offered-1.jpg" alt="" /><Link href="/assets/images-2/resource/offered-1.jpg" className="lightbox-image" data-fancybox="gallery"><i className="fal fa-plus" /></Link></figure>
                                                <div className="category"><Link href="/index-12">Math &amp; Logic</Link></div>
                                                <div className="price">$40.00</div>
                                            </div>
                                            <div className="lower-content">
                                                <h5><Link href="/index-12">Programming Foundations: Algorithms</Link></h5>
                                                <div className="rating-box clearfix">
                                                    <ul>
                                                        <li><i className="fas fa-star" /></li>
                                                        <li><i className="fas fa-star" /></li>
                                                        <li><i className="fas fa-star" /></li>
                                                        <li><i className="fas fa-star" /></li>
                                                        <li><i className="fas fa-star" /></li>
                                                    </ul>
                                                    <Link href="/index-12">(1,081 Views)</Link>
                                                </div>
                                                <ul className="list-item">
                                                    <li>Sorting Data</li>
                                                    <li>Searching Data</li>
                                                    <li>Looping &amp; Recursion</li>
                                                    <li>Filtering</li>
                                                </ul>
                                                <div className="lower-box clearfix">
                                                    <div className="view-time"><i className="far fa-clock" />1hr 40 mins</div>
                                                    <div className="share-option">
                                                        <i className="share-icon far fa-share-alt" />
                                                        <ul className="share-links clearfix">
                                                            <li><Link href="/index-12"><i className="fab fa-facebook-f" /></Link></li>
                                                            <li><Link href="/index-12"><i className="fab fa-twitter" /></Link></li>
                                                            <li><Link href="/index-12"><i className="fab fa-google-plus-g" /></Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="single-item">
                                        <div className="inner-box">
                                            <div className="image-box">
                                                <figure className="image"><img src="/assets/images-2/resource/offered-2.jpg" alt="" /><Link href="/assets/images-2/resource/offered-2.jpg" className="lightbox-image" data-fancybox="gallery"><i className="fal fa-plus" /></Link></figure>
                                                <div className="category"><Link href="/index-12">Business</Link></div>
                                                <div className="price">$85.00</div>
                                                <div className="offer">25%</div>
                                            </div>
                                            <div className="lower-content">
                                                <h5><Link href="/index-12">Improving Your Conflict Competence</Link></h5>
                                                <div className="rating-box clearfix">
                                                    <ul>
                                                        <li><i className="fas fa-star" /></li>
                                                        <li><i className="fas fa-star" /></li>
                                                        <li><i className="fas fa-star" /></li>
                                                        <li><i className="fas fa-star" /></li>
                                                        <li><i className="fas fa-star" /></li>
                                                    </ul>
                                                    <Link href="/index-12">(2,500 Views)</Link>
                                                </div>
                                                <ul className="list-item">
                                                    <li>Listening With Empathy</li>
                                                    <li>Learn from Customer</li>
                                                    <li>Replacing Words</li>
                                                    <li>Helping the Customer</li>
                                                </ul>
                                                <div className="lower-box clearfix">
                                                    <div className="view-time"><i className="far fa-clock" />2hr 20 mins</div>
                                                    <div className="share-option">
                                                        <i className="share-icon far fa-share-alt" />
                                                        <ul className="share-links clearfix">
                                                            <li><Link href="/index-12"><i className="fab fa-facebook-f" /></Link></li>
                                                            <li><Link href="/index-12"><i className="fab fa-twitter" /></Link></li>
                                                            <li><Link href="/index-12"><i className="fab fa-google-plus-g" /></Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="single-item">
                                        <div className="inner-box">
                                            <div className="image-box">
                                                <figure className="image"><img src="/assets/images-2/resource/offered-3.jpg" alt="" /><Link href="/assets/images-2/resource/offered-3.jpg" className="lightbox-image" data-fancybox="gallery"><i className="fal fa-plus" /></Link></figure>
                                                <div className="category"><Link href="/index-12">Design</Link></div>
                                                <div className="price">$24.00</div>
                                            </div>
                                            <div className="lower-content">
                                                <h5><Link href="/index-12">Illustrator 2021 Essential Training</Link></h5>
                                                <div className="rating-box clearfix">
                                                    <ul>
                                                        <li><i className="fas fa-star" /></li>
                                                        <li><i className="fas fa-star" /></li>
                                                        <li><i className="fas fa-star" /></li>
                                                        <li><i className="fas fa-star" /></li>
                                                        <li><i className="fas fa-star" /></li>
                                                    </ul>
                                                    <Link href="/index-12">(800 Views)</Link>
                                                </div>
                                                <ul className="list-item">
                                                    <li>What is Illustrator?</li>
                                                    <li>Navigating Documents</li>
                                                    <li>Drawing Shapes</li>
                                                    <li>Working With Color</li>
                                                </ul>
                                                <div className="lower-box clearfix">
                                                    <div className="view-time"><i className="far fa-clock" />1hr 10 mins</div>
                                                    <div className="share-option">
                                                        <i className="share-icon far fa-share-alt" />
                                                        <ul className="share-links clearfix">
                                                            <li><Link href="/index-12"><i className="fab fa-facebook-f" /></Link></li>
                                                            <li><Link href="/index-12"><i className="fab fa-twitter" /></Link></li>
                                                            <li><Link href="/index-12"><i className="fab fa-google-plus-g" /></Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="single-item">
                                        <div className="inner-box">
                                            <div className="image-box">
                                                <figure className="image"><img src="/assets/images-2/resource/offered-4.jpg" alt="" /><Link href="/assets/images-2/resource/offered-4.jpg" className="lightbox-image" data-fancybox="gallery"><i className="fal fa-plus" /></Link></figure>
                                                <div className="category"><Link href="/index-12">Photography</Link></div>
                                                <div className="price">$19.00</div>
                                            </div>
                                            <div className="lower-content">
                                                <h5><Link href="/index-12">Photoshop 2021 One-on-One: Fundamentals</Link></h5>
                                                <div className="rating-box clearfix">
                                                    <ul>
                                                        <li><i className="fas fa-star" /></li>
                                                        <li><i className="fas fa-star" /></li>
                                                        <li><i className="fas fa-star" /></li>
                                                        <li><i className="fas fa-star" /></li>
                                                        <li><i className="fas fa-star" /></li>
                                                    </ul>
                                                    <Link href="/index-12">(1,200 Views)</Link>
                                                </div>
                                                <ul className="list-item">
                                                    <li>Opening Images</li>
                                                    <li>Zoom In &amp; Out</li>
                                                    <li>Creating New Layer</li>
                                                    <li>Recoloring Art Work</li>
                                                </ul>
                                                <div className="lower-box clearfix">
                                                    <div className="view-time"><i className="far fa-clock" />40 mins</div>
                                                    <div className="share-option">
                                                        <i className="share-icon far fa-share-alt" />
                                                        <ul className="share-links clearfix">
                                                            <li><Link href="/index-12"><i className="fab fa-facebook-f" /></Link></li>
                                                            <li><Link href="/index-12"><i className="fab fa-twitter" /></Link></li>
                                                            <li><Link href="/index-12"><i className="fab fa-google-plus-g" /></Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={activeIndex == 4 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                            <div className="row clearfix">
                                <div className="col-lg-3 col-md-6">
                                    <div className="single-item">
                                        <div className="inner-box">
                                            <div className="image-box">
                                                <figure className="image"><img src="/assets/images-2/resource/offered-1.jpg" alt="" /><Link href="/assets/images-2/resource/offered-1.jpg" className="lightbox-image" data-fancybox="gallery"><i className="fal fa-plus" /></Link></figure>
                                                <div className="category"><Link href="/index-12">Math &amp; Logic</Link></div>
                                                <div className="price">$40.00</div>
                                            </div>
                                            <div className="lower-content">
                                                <h5><Link href="/index-12">Programming Foundations: Algorithms</Link></h5>
                                                <div className="rating-box clearfix">
                                                    <ul>
                                                        <li><i className="fas fa-star" /></li>
                                                        <li><i className="fas fa-star" /></li>
                                                        <li><i className="fas fa-star" /></li>
                                                        <li><i className="fas fa-star" /></li>
                                                        <li><i className="fas fa-star" /></li>
                                                    </ul>
                                                    <Link href="/index-12">(1,081 Views)</Link>
                                                </div>
                                                <ul className="list-item">
                                                    <li>Sorting Data</li>
                                                    <li>Searching Data</li>
                                                    <li>Looping &amp; Recursion</li>
                                                    <li>Filtering</li>
                                                </ul>
                                                <div className="lower-box clearfix">
                                                    <div className="view-time"><i className="far fa-clock" />1hr 40 mins</div>
                                                    <div className="share-option">
                                                        <i className="share-icon far fa-share-alt" />
                                                        <ul className="share-links clearfix">
                                                            <li><Link href="/index-12"><i className="fab fa-facebook-f" /></Link></li>
                                                            <li><Link href="/index-12"><i className="fab fa-twitter" /></Link></li>
                                                            <li><Link href="/index-12"><i className="fab fa-google-plus-g" /></Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="single-item">
                                        <div className="inner-box">
                                            <div className="image-box">
                                                <figure className="image"><img src="/assets/images-2/resource/offered-2.jpg" alt="" /><Link href="/assets/images-2/resource/offered-2.jpg" className="lightbox-image" data-fancybox="gallery"><i className="fal fa-plus" /></Link></figure>
                                                <div className="category"><Link href="/index-12">Business</Link></div>
                                                <div className="price">$85.00</div>
                                                <div className="offer">25%</div>
                                            </div>
                                            <div className="lower-content">
                                                <h5><Link href="/index-12">Improving Your Conflict Competence</Link></h5>
                                                <div className="rating-box clearfix">
                                                    <ul>
                                                        <li><i className="fas fa-star" /></li>
                                                        <li><i className="fas fa-star" /></li>
                                                        <li><i className="fas fa-star" /></li>
                                                        <li><i className="fas fa-star" /></li>
                                                        <li><i className="fas fa-star" /></li>
                                                    </ul>
                                                    <Link href="/index-12">(2,500 Views)</Link>
                                                </div>
                                                <ul className="list-item">
                                                    <li>Listening With Empathy</li>
                                                    <li>Learn from Customer</li>
                                                    <li>Replacing Words</li>
                                                    <li>Helping the Customer</li>
                                                </ul>
                                                <div className="lower-box clearfix">
                                                    <div className="view-time"><i className="far fa-clock" />2hr 20 mins</div>
                                                    <div className="share-option">
                                                        <i className="share-icon far fa-share-alt" />
                                                        <ul className="share-links clearfix">
                                                            <li><Link href="/index-12"><i className="fab fa-facebook-f" /></Link></li>
                                                            <li><Link href="/index-12"><i className="fab fa-twitter" /></Link></li>
                                                            <li><Link href="/index-12"><i className="fab fa-google-plus-g" /></Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="single-item">
                                        <div className="inner-box">
                                            <div className="image-box">
                                                <figure className="image"><img src="/assets/images-2/resource/offered-3.jpg" alt="" /><Link href="/assets/images-2/resource/offered-3.jpg" className="lightbox-image" data-fancybox="gallery"><i className="fal fa-plus" /></Link></figure>
                                                <div className="category"><Link href="/index-12">Design</Link></div>
                                                <div className="price">$24.00</div>
                                            </div>
                                            <div className="lower-content">
                                                <h5><Link href="/index-12">Illustrator 2021 Essential Training</Link></h5>
                                                <div className="rating-box clearfix">
                                                    <ul>
                                                        <li><i className="fas fa-star" /></li>
                                                        <li><i className="fas fa-star" /></li>
                                                        <li><i className="fas fa-star" /></li>
                                                        <li><i className="fas fa-star" /></li>
                                                        <li><i className="fas fa-star" /></li>
                                                    </ul>
                                                    <Link href="/index-12">(800 Views)</Link>
                                                </div>
                                                <ul className="list-item">
                                                    <li>What is Illustrator?</li>
                                                    <li>Navigating Documents</li>
                                                    <li>Drawing Shapes</li>
                                                    <li>Working With Color</li>
                                                </ul>
                                                <div className="lower-box clearfix">
                                                    <div className="view-time"><i className="far fa-clock" />1hr 10 mins</div>
                                                    <div className="share-option">
                                                        <i className="share-icon far fa-share-alt" />
                                                        <ul className="share-links clearfix">
                                                            <li><Link href="/index-12"><i className="fab fa-facebook-f" /></Link></li>
                                                            <li><Link href="/index-12"><i className="fab fa-twitter" /></Link></li>
                                                            <li><Link href="/index-12"><i className="fab fa-google-plus-g" /></Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="single-item">
                                        <div className="inner-box">
                                            <div className="image-box">
                                                <figure className="image"><img src="/assets/images-2/resource/offered-4.jpg" alt="" /><Link href="/assets/images-2/resource/offered-4.jpg" className="lightbox-image" data-fancybox="gallery"><i className="fal fa-plus" /></Link></figure>
                                                <div className="category"><Link href="/index-12">Photography</Link></div>
                                                <div className="price">$19.00</div>
                                            </div>
                                            <div className="lower-content">
                                                <h5><Link href="/index-12">Photoshop 2021 One-on-One: Fundamentals</Link></h5>
                                                <div className="rating-box clearfix">
                                                    <ul>
                                                        <li><i className="fas fa-star" /></li>
                                                        <li><i className="fas fa-star" /></li>
                                                        <li><i className="fas fa-star" /></li>
                                                        <li><i className="fas fa-star" /></li>
                                                        <li><i className="fas fa-star" /></li>
                                                    </ul>
                                                    <Link href="/index-12">(1,200 Views)</Link>
                                                </div>
                                                <ul className="list-item">
                                                    <li>Opening Images</li>
                                                    <li>Zoom In &amp; Out</li>
                                                    <li>Creating New Layer</li>
                                                    <li>Recoloring Art Work</li>
                                                </ul>
                                                <div className="lower-box clearfix">
                                                    <div className="view-time"><i className="far fa-clock" />40 mins</div>
                                                    <div className="share-option">
                                                        <i className="share-icon far fa-share-alt" />
                                                        <ul className="share-links clearfix">
                                                            <li><Link href="/index-12"><i className="fab fa-facebook-f" /></Link></li>
                                                            <li><Link href="/index-12"><i className="fab fa-twitter" /></Link></li>
                                                            <li><Link href="/index-12"><i className="fab fa-google-plus-g" /></Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={activeIndex == 5 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                            <div className="row clearfix">
                                <div className="col-lg-3 col-md-6">
                                    <div className="single-item">
                                        <div className="inner-box">
                                            <div className="image-box">
                                                <figure className="image"><img src="/assets/images-2/resource/offered-1.jpg" alt="" /><Link href="/assets/images-2/resource/offered-1.jpg" className="lightbox-image" data-fancybox="gallery"><i className="fal fa-plus" /></Link></figure>
                                                <div className="category"><Link href="/index-12">Math &amp; Logic</Link></div>
                                                <div className="price">$40.00</div>
                                            </div>
                                            <div className="lower-content">
                                                <h5><Link href="/index-12">Programming Foundations: Algorithms</Link></h5>
                                                <div className="rating-box clearfix">
                                                    <ul>
                                                        <li><i className="fas fa-star" /></li>
                                                        <li><i className="fas fa-star" /></li>
                                                        <li><i className="fas fa-star" /></li>
                                                        <li><i className="fas fa-star" /></li>
                                                        <li><i className="fas fa-star" /></li>
                                                    </ul>
                                                    <Link href="/index-12">(1,081 Views)</Link>
                                                </div>
                                                <ul className="list-item">
                                                    <li>Sorting Data</li>
                                                    <li>Searching Data</li>
                                                    <li>Looping &amp; Recursion</li>
                                                    <li>Filtering</li>
                                                </ul>
                                                <div className="lower-box clearfix">
                                                    <div className="view-time"><i className="far fa-clock" />1hr 40 mins</div>
                                                    <div className="share-option">
                                                        <i className="share-icon far fa-share-alt" />
                                                        <ul className="share-links clearfix">
                                                            <li><Link href="/index-12"><i className="fab fa-facebook-f" /></Link></li>
                                                            <li><Link href="/index-12"><i className="fab fa-twitter" /></Link></li>
                                                            <li><Link href="/index-12"><i className="fab fa-google-plus-g" /></Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="single-item">
                                        <div className="inner-box">
                                            <div className="image-box">
                                                <figure className="image"><img src="/assets/images-2/resource/offered-2.jpg" alt="" /><Link href="/assets/images-2/resource/offered-2.jpg" className="lightbox-image" data-fancybox="gallery"><i className="fal fa-plus" /></Link></figure>
                                                <div className="category"><Link href="/index-12">Business</Link></div>
                                                <div className="price">$85.00</div>
                                                <div className="offer">25%</div>
                                            </div>
                                            <div className="lower-content">
                                                <h5><Link href="/index-12">Improving Your Conflict Competence</Link></h5>
                                                <div className="rating-box clearfix">
                                                    <ul>
                                                        <li><i className="fas fa-star" /></li>
                                                        <li><i className="fas fa-star" /></li>
                                                        <li><i className="fas fa-star" /></li>
                                                        <li><i className="fas fa-star" /></li>
                                                        <li><i className="fas fa-star" /></li>
                                                    </ul>
                                                    <Link href="/index-12">(2,500 Views)</Link>
                                                </div>
                                                <ul className="list-item">
                                                    <li>Listening With Empathy</li>
                                                    <li>Learn from Customer</li>
                                                    <li>Replacing Words</li>
                                                    <li>Helping the Customer</li>
                                                </ul>
                                                <div className="lower-box clearfix">
                                                    <div className="view-time"><i className="far fa-clock" />2hr 20 mins</div>
                                                    <div className="share-option">
                                                        <i className="share-icon far fa-share-alt" />
                                                        <ul className="share-links clearfix">
                                                            <li><Link href="/index-12"><i className="fab fa-facebook-f" /></Link></li>
                                                            <li><Link href="/index-12"><i className="fab fa-twitter" /></Link></li>
                                                            <li><Link href="/index-12"><i className="fab fa-google-plus-g" /></Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="single-item">
                                        <div className="inner-box">
                                            <div className="image-box">
                                                <figure className="image"><img src="/assets/images-2/resource/offered-3.jpg" alt="" /><Link href="/assets/images-2/resource/offered-3.jpg" className="lightbox-image" data-fancybox="gallery"><i className="fal fa-plus" /></Link></figure>
                                                <div className="category"><Link href="/index-12">Design</Link></div>
                                                <div className="price">$24.00</div>
                                            </div>
                                            <div className="lower-content">
                                                <h5><Link href="/index-12">Illustrator 2021 Essential Training</Link></h5>
                                                <div className="rating-box clearfix">
                                                    <ul>
                                                        <li><i className="fas fa-star" /></li>
                                                        <li><i className="fas fa-star" /></li>
                                                        <li><i className="fas fa-star" /></li>
                                                        <li><i className="fas fa-star" /></li>
                                                        <li><i className="fas fa-star" /></li>
                                                    </ul>
                                                    <Link href="/index-12">(800 Views)</Link>
                                                </div>
                                                <ul className="list-item">
                                                    <li>What is Illustrator?</li>
                                                    <li>Navigating Documents</li>
                                                    <li>Drawing Shapes</li>
                                                    <li>Working With Color</li>
                                                </ul>
                                                <div className="lower-box clearfix">
                                                    <div className="view-time"><i className="far fa-clock" />1hr 10 mins</div>
                                                    <div className="share-option">
                                                        <i className="share-icon far fa-share-alt" />
                                                        <ul className="share-links clearfix">
                                                            <li><Link href="/index-12"><i className="fab fa-facebook-f" /></Link></li>
                                                            <li><Link href="/index-12"><i className="fab fa-twitter" /></Link></li>
                                                            <li><Link href="/index-12"><i className="fab fa-google-plus-g" /></Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="single-item">
                                        <div className="inner-box">
                                            <div className="image-box">
                                                <figure className="image"><img src="/assets/images-2/resource/offered-4.jpg" alt="" /><Link href="/assets/images-2/resource/offered-4.jpg" className="lightbox-image" data-fancybox="gallery"><i className="fal fa-plus" /></Link></figure>
                                                <div className="category"><Link href="/index-12">Photography</Link></div>
                                                <div className="price">$19.00</div>
                                            </div>
                                            <div className="lower-content">
                                                <h5><Link href="/index-12">Photoshop 2021 One-on-One: Fundamentals</Link></h5>
                                                <div className="rating-box clearfix">
                                                    <ul>
                                                        <li><i className="fas fa-star" /></li>
                                                        <li><i className="fas fa-star" /></li>
                                                        <li><i className="fas fa-star" /></li>
                                                        <li><i className="fas fa-star" /></li>
                                                        <li><i className="fas fa-star" /></li>
                                                    </ul>
                                                    <Link href="/index-12">(1,200 Views)</Link>
                                                </div>
                                                <ul className="list-item">
                                                    <li>Opening Images</li>
                                                    <li>Zoom In &amp; Out</li>
                                                    <li>Creating New Layer</li>
                                                    <li>Recoloring Art Work</li>
                                                </ul>
                                                <div className="lower-box clearfix">
                                                    <div className="view-time"><i className="far fa-clock" />40 mins</div>
                                                    <div className="share-option">
                                                        <i className="share-icon far fa-share-alt" />
                                                        <ul className="share-links clearfix">
                                                            <li><Link href="/index-12"><i className="fab fa-facebook-f" /></Link></li>
                                                            <li><Link href="/index-12"><i className="fab fa-twitter" /></Link></li>
                                                            <li><Link href="/index-12"><i className="fab fa-google-plus-g" /></Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={activeIndex == 6 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                            <div className="row clearfix">
                                <div className="col-lg-3 col-md-6">
                                    <div className="single-item">
                                        <div className="inner-box">
                                            <div className="image-box">
                                                <figure className="image"><img src="/assets/images-2/resource/offered-1.jpg" alt="" /><Link href="/assets/images-2/resource/offered-1.jpg" className="lightbox-image" data-fancybox="gallery"><i className="fal fa-plus" /></Link></figure>
                                                <div className="category"><Link href="/index-12">Math &amp; Logic</Link></div>
                                                <div className="price">$40.00</div>
                                            </div>
                                            <div className="lower-content">
                                                <h5><Link href="/index-12">Programming Foundations: Algorithms</Link></h5>
                                                <div className="rating-box clearfix">
                                                    <ul>
                                                        <li><i className="fas fa-star" /></li>
                                                        <li><i className="fas fa-star" /></li>
                                                        <li><i className="fas fa-star" /></li>
                                                        <li><i className="fas fa-star" /></li>
                                                        <li><i className="fas fa-star" /></li>
                                                    </ul>
                                                    <Link href="/index-12">(1,081 Views)</Link>
                                                </div>
                                                <ul className="list-item">
                                                    <li>Sorting Data</li>
                                                    <li>Searching Data</li>
                                                    <li>Looping &amp; Recursion</li>
                                                    <li>Filtering</li>
                                                </ul>
                                                <div className="lower-box clearfix">
                                                    <div className="view-time"><i className="far fa-clock" />1hr 40 mins</div>
                                                    <div className="share-option">
                                                        <i className="share-icon far fa-share-alt" />
                                                        <ul className="share-links clearfix">
                                                            <li><Link href="/index-12"><i className="fab fa-facebook-f" /></Link></li>
                                                            <li><Link href="/index-12"><i className="fab fa-twitter" /></Link></li>
                                                            <li><Link href="/index-12"><i className="fab fa-google-plus-g" /></Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="single-item">
                                        <div className="inner-box">
                                            <div className="image-box">
                                                <figure className="image"><img src="/assets/images-2/resource/offered-2.jpg" alt="" /><Link href="/assets/images-2/resource/offered-2.jpg" className="lightbox-image" data-fancybox="gallery"><i className="fal fa-plus" /></Link></figure>
                                                <div className="category"><Link href="/index-12">Business</Link></div>
                                                <div className="price">$85.00</div>
                                                <div className="offer">25%</div>
                                            </div>
                                            <div className="lower-content">
                                                <h5><Link href="/index-12">Improving Your Conflict Competence</Link></h5>
                                                <div className="rating-box clearfix">
                                                    <ul>
                                                        <li><i className="fas fa-star" /></li>
                                                        <li><i className="fas fa-star" /></li>
                                                        <li><i className="fas fa-star" /></li>
                                                        <li><i className="fas fa-star" /></li>
                                                        <li><i className="fas fa-star" /></li>
                                                    </ul>
                                                    <Link href="/index-12">(2,500 Views)</Link>
                                                </div>
                                                <ul className="list-item">
                                                    <li>Listening With Empathy</li>
                                                    <li>Learn from Customer</li>
                                                    <li>Replacing Words</li>
                                                    <li>Helping the Customer</li>
                                                </ul>
                                                <div className="lower-box clearfix">
                                                    <div className="view-time"><i className="far fa-clock" />2hr 20 mins</div>
                                                    <div className="share-option">
                                                        <i className="share-icon far fa-share-alt" />
                                                        <ul className="share-links clearfix">
                                                            <li><Link href="/index-12"><i className="fab fa-facebook-f" /></Link></li>
                                                            <li><Link href="/index-12"><i className="fab fa-twitter" /></Link></li>
                                                            <li><Link href="/index-12"><i className="fab fa-google-plus-g" /></Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="single-item">
                                        <div className="inner-box">
                                            <div className="image-box">
                                                <figure className="image"><img src="/assets/images-2/resource/offered-3.jpg" alt="" /><Link href="/assets/images-2/resource/offered-3.jpg" className="lightbox-image" data-fancybox="gallery"><i className="fal fa-plus" /></Link></figure>
                                                <div className="category"><Link href="/index-12">Design</Link></div>
                                                <div className="price">$24.00</div>
                                            </div>
                                            <div className="lower-content">
                                                <h5><Link href="/index-12">Illustrator 2021 Essential Training</Link></h5>
                                                <div className="rating-box clearfix">
                                                    <ul>
                                                        <li><i className="fas fa-star" /></li>
                                                        <li><i className="fas fa-star" /></li>
                                                        <li><i className="fas fa-star" /></li>
                                                        <li><i className="fas fa-star" /></li>
                                                        <li><i className="fas fa-star" /></li>
                                                    </ul>
                                                    <Link href="/index-12">(800 Views)</Link>
                                                </div>
                                                <ul className="list-item">
                                                    <li>What is Illustrator?</li>
                                                    <li>Navigating Documents</li>
                                                    <li>Drawing Shapes</li>
                                                    <li>Working With Color</li>
                                                </ul>
                                                <div className="lower-box clearfix">
                                                    <div className="view-time"><i className="far fa-clock" />1hr 10 mins</div>
                                                    <div className="share-option">
                                                        <i className="share-icon far fa-share-alt" />
                                                        <ul className="share-links clearfix">
                                                            <li><Link href="/index-12"><i className="fab fa-facebook-f" /></Link></li>
                                                            <li><Link href="/index-12"><i className="fab fa-twitter" /></Link></li>
                                                            <li><Link href="/index-12"><i className="fab fa-google-plus-g" /></Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="single-item">
                                        <div className="inner-box">
                                            <div className="image-box">
                                                <figure className="image"><img src="/assets/images-2/resource/offered-4.jpg" alt="" /><Link href="/assets/images-2/resource/offered-4.jpg" className="lightbox-image" data-fancybox="gallery"><i className="fal fa-plus" /></Link></figure>
                                                <div className="category"><Link href="/index-12">Photography</Link></div>
                                                <div className="price">$19.00</div>
                                            </div>
                                            <div className="lower-content">
                                                <h5><Link href="/index-12">Photoshop 2021 One-on-One: Fundamentals</Link></h5>
                                                <div className="rating-box clearfix">
                                                    <ul>
                                                        <li><i className="fas fa-star" /></li>
                                                        <li><i className="fas fa-star" /></li>
                                                        <li><i className="fas fa-star" /></li>
                                                        <li><i className="fas fa-star" /></li>
                                                        <li><i className="fas fa-star" /></li>
                                                    </ul>
                                                    <Link href="/index-12">(1,200 Views)</Link>
                                                </div>
                                                <ul className="list-item">
                                                    <li>Opening Images</li>
                                                    <li>Zoom In &amp; Out</li>
                                                    <li>Creating New Layer</li>
                                                    <li>Recoloring Art Work</li>
                                                </ul>
                                                <div className="lower-box clearfix">
                                                    <div className="view-time"><i className="far fa-clock" />40 mins</div>
                                                    <div className="share-option">
                                                        <i className="share-icon far fa-share-alt" />
                                                        <ul className="share-links clearfix">
                                                            <li><Link href="/index-12"><i className="fab fa-facebook-f" /></Link></li>
                                                            <li><Link href="/index-12"><i className="fab fa-twitter" /></Link></li>
                                                            <li><Link href="/index-12"><i className="fab fa-google-plus-g" /></Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={activeIndex == 7 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                            <div className="row clearfix">
                                <div className="col-lg-3 col-md-6">
                                    <div className="single-item">
                                        <div className="inner-box">
                                            <div className="image-box">
                                                <figure className="image"><img src="/assets/images-2/resource/offered-1.jpg" alt="" /><Link href="/assets/images-2/resource/offered-1.jpg" className="lightbox-image" data-fancybox="gallery"><i className="fal fa-plus" /></Link></figure>
                                                <div className="category"><Link href="/index-12">Math &amp; Logic</Link></div>
                                                <div className="price">$40.00</div>
                                            </div>
                                            <div className="lower-content">
                                                <h5><Link href="/index-12">Programming Foundations: Algorithms</Link></h5>
                                                <div className="rating-box clearfix">
                                                    <ul>
                                                        <li><i className="fas fa-star" /></li>
                                                        <li><i className="fas fa-star" /></li>
                                                        <li><i className="fas fa-star" /></li>
                                                        <li><i className="fas fa-star" /></li>
                                                        <li><i className="fas fa-star" /></li>
                                                    </ul>
                                                    <Link href="/index-12">(1,081 Views)</Link>
                                                </div>
                                                <ul className="list-item">
                                                    <li>Sorting Data</li>
                                                    <li>Searching Data</li>
                                                    <li>Looping &amp; Recursion</li>
                                                    <li>Filtering</li>
                                                </ul>
                                                <div className="lower-box clearfix">
                                                    <div className="view-time"><i className="far fa-clock" />1hr 40 mins</div>
                                                    <div className="share-option">
                                                        <i className="share-icon far fa-share-alt" />
                                                        <ul className="share-links clearfix">
                                                            <li><Link href="/index-12"><i className="fab fa-facebook-f" /></Link></li>
                                                            <li><Link href="/index-12"><i className="fab fa-twitter" /></Link></li>
                                                            <li><Link href="/index-12"><i className="fab fa-google-plus-g" /></Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="single-item">
                                        <div className="inner-box">
                                            <div className="image-box">
                                                <figure className="image"><img src="/assets/images-2/resource/offered-2.jpg" alt="" /><Link href="/assets/images-2/resource/offered-2.jpg" className="lightbox-image" data-fancybox="gallery"><i className="fal fa-plus" /></Link></figure>
                                                <div className="category"><Link href="/index-12">Business</Link></div>
                                                <div className="price">$85.00</div>
                                                <div className="offer">25%</div>
                                            </div>
                                            <div className="lower-content">
                                                <h5><Link href="/index-12">Improving Your Conflict Competence</Link></h5>
                                                <div className="rating-box clearfix">
                                                    <ul>
                                                        <li><i className="fas fa-star" /></li>
                                                        <li><i className="fas fa-star" /></li>
                                                        <li><i className="fas fa-star" /></li>
                                                        <li><i className="fas fa-star" /></li>
                                                        <li><i className="fas fa-star" /></li>
                                                    </ul>
                                                    <Link href="/index-12">(2,500 Views)</Link>
                                                </div>
                                                <ul className="list-item">
                                                    <li>Listening With Empathy</li>
                                                    <li>Learn from Customer</li>
                                                    <li>Replacing Words</li>
                                                    <li>Helping the Customer</li>
                                                </ul>
                                                <div className="lower-box clearfix">
                                                    <div className="view-time"><i className="far fa-clock" />2hr 20 mins</div>
                                                    <div className="share-option">
                                                        <i className="share-icon far fa-share-alt" />
                                                        <ul className="share-links clearfix">
                                                            <li><Link href="/index-12"><i className="fab fa-facebook-f" /></Link></li>
                                                            <li><Link href="/index-12"><i className="fab fa-twitter" /></Link></li>
                                                            <li><Link href="/index-12"><i className="fab fa-google-plus-g" /></Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="single-item">
                                        <div className="inner-box">
                                            <div className="image-box">
                                                <figure className="image"><img src="/assets/images-2/resource/offered-3.jpg" alt="" /><Link href="/assets/images-2/resource/offered-3.jpg" className="lightbox-image" data-fancybox="gallery"><i className="fal fa-plus" /></Link></figure>
                                                <div className="category"><Link href="/index-12">Design</Link></div>
                                                <div className="price">$24.00</div>
                                            </div>
                                            <div className="lower-content">
                                                <h5><Link href="/index-12">Illustrator 2021 Essential Training</Link></h5>
                                                <div className="rating-box clearfix">
                                                    <ul>
                                                        <li><i className="fas fa-star" /></li>
                                                        <li><i className="fas fa-star" /></li>
                                                        <li><i className="fas fa-star" /></li>
                                                        <li><i className="fas fa-star" /></li>
                                                        <li><i className="fas fa-star" /></li>
                                                    </ul>
                                                    <Link href="/index-12">(800 Views)</Link>
                                                </div>
                                                <ul className="list-item">
                                                    <li>What is Illustrator?</li>
                                                    <li>Navigating Documents</li>
                                                    <li>Drawing Shapes</li>
                                                    <li>Working With Color</li>
                                                </ul>
                                                <div className="lower-box clearfix">
                                                    <div className="view-time"><i className="far fa-clock" />1hr 10 mins</div>
                                                    <div className="share-option">
                                                        <i className="share-icon far fa-share-alt" />
                                                        <ul className="share-links clearfix">
                                                            <li><Link href="/index-12"><i className="fab fa-facebook-f" /></Link></li>
                                                            <li><Link href="/index-12"><i className="fab fa-twitter" /></Link></li>
                                                            <li><Link href="/index-12"><i className="fab fa-google-plus-g" /></Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="single-item">
                                        <div className="inner-box">
                                            <div className="image-box">
                                                <figure className="image"><img src="/assets/images-2/resource/offered-4.jpg" alt="" /><Link href="/assets/images-2/resource/offered-4.jpg" className="lightbox-image" data-fancybox="gallery"><i className="fal fa-plus" /></Link></figure>
                                                <div className="category"><Link href="/index-12">Photography</Link></div>
                                                <div className="price">$19.00</div>
                                            </div>
                                            <div className="lower-content">
                                                <h5><Link href="/index-12">Photoshop 2021 One-on-One: Fundamentals</Link></h5>
                                                <div className="rating-box clearfix">
                                                    <ul>
                                                        <li><i className="fas fa-star" /></li>
                                                        <li><i className="fas fa-star" /></li>
                                                        <li><i className="fas fa-star" /></li>
                                                        <li><i className="fas fa-star" /></li>
                                                        <li><i className="fas fa-star" /></li>
                                                    </ul>
                                                    <Link href="/index-12">(1,200 Views)</Link>
                                                </div>
                                                <ul className="list-item">
                                                    <li>Opening Images</li>
                                                    <li>Zoom In &amp; Out</li>
                                                    <li>Creating New Layer</li>
                                                    <li>Recoloring Art Work</li>
                                                </ul>
                                                <div className="lower-box clearfix">
                                                    <div className="view-time"><i className="far fa-clock" />40 mins</div>
                                                    <div className="share-option">
                                                        <i className="share-icon far fa-share-alt" />
                                                        <ul className="share-links clearfix">
                                                            <li><Link href="/index-12"><i className="fab fa-facebook-f" /></Link></li>
                                                            <li><Link href="/index-12"><i className="fab fa-twitter" /></Link></li>
                                                            <li><Link href="/index-12"><i className="fab fa-google-plus-g" /></Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="more-btn text-center"><Link href="/home-12" className="theme-btn btn-style-five"><span className="btn-title">More Courses</span></Link></div>
                </div>
            </section>
        </>
    )
}
