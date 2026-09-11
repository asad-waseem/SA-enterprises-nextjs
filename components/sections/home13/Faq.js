'use client'
import Link from "next/link"
import { useState } from 'react'
 

export default function Faq() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
            <section className="faq-section-home13">
                <div className="bg-layer" style={{ backgroundImage: 'url(assets/images-4/background/faq-bg.jpg)' }} />
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                            <div className="content-box">
                                <div className="content-inner">
                                    <figure className="icon-box"><img src="/assets/images-4/icons/icon-1.png" alt="" /></figure>
                                    <div className="inner">
                                        <figure className="thumb-box"><img src="/assets/images-4/resource/thumb-1.jpg" alt="" /></figure>
                                        <h6>Start Your Project</h6>
                                        <h2><Link href="tel:8884455567889">+888 445 55 678 &amp; 89</Link></h2>
                                    </div>
                                    <div className="email-box">
                                        <p>Send mail on: <Link href="mailto:support@envolve.com">support@envolve.com</Link></p>
                                    </div>
                                    <ul className="info clearfix">
                                        <li>Monday - Friday:</li>
                                        <li>9.00 - 6.00</li>
                                        <li>Sunday &amp; Public Holidays (Closed)</li>
                                    </ul>
                                    <div className="btn-box">
                                        <Link href="tel:8884455567889">Call Back</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 inner-column">
                            <div className="inner-box">
                                <div className="sec-title-two">
                                    <h6>Faq's</h6>
                                    <h2>How can we help you</h2>
                                </div>
                                <ul className="accordion-box">
                                    {/*Accordion Block*/}
                                    <li className="accordion block active-block">
                                        <div  className={isActive.key == 1 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(1)}><div className="icon-outer"><span className="icon icon_plus flaticon-right" /> <span className="icon icon_minus flaticon-right" /></div>01.   What does you do?</div>
                                        <div className={isActive.key == 1 ? "acc-content current" : "acc-content"}>
                                            <div className="content">
                                                <div className="text">Same as saying through shrinking from toil and pain these cases are perfectly simple and easy to distinguish.
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    {/*Accordion Block*/}
                                    <li className="accordion block">
                                        <div  className={isActive.key == 2 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(2)}><div className="icon-outer"><span className="icon icon_plus flaticon-right" /> <span className="icon icon_minus flaticon-right" /></div>02.  What industries covered?</div>
                                        <div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
                                            <div className="content">
                                                <div className="text">Same as saying through shrinking from toil and pain these cases are perfectly simple and easy to distinguish.
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    {/*Accordion Block*/}
                                    <li className="accordion block">
                                        <div  className={isActive.key == 3 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(3)}><div className="icon-outer"><span className="icon icon_plus flaticon-right" /> <span className="icon icon_minus flaticon-right" /></div>03.  How do you price?</div>
                                        <div className={isActive.key == 3 ? "acc-content current" : "acc-content"}>
                                            <div className="content">
                                                <div className="text">Same as saying through shrinking from toil and pain these cases are perfectly simple and easy to distinguish.
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    {/* End Block */}
                                    {/*Accordion Block*/}
                                    <li className="accordion block">
                                        <div  className={isActive.key == 4 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(4)}><div className="icon-outer"><span className="icon icon_plus flaticon-right" /> <span className="icon icon_minus flaticon-right" /></div>04.  How do you price?</div>
                                        <div className={isActive.key == 4 ? "acc-content current" : "acc-content"}>
                                            <div className="content">
                                                <div className="text">Same as saying through shrinking from toil and pain these cases are perfectly simple and easy to distinguish.
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    {/* End Block */}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
