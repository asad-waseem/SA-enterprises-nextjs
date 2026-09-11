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
            <section className="faq-section">
                <div className="pattern" style={{ backgroundImage: 'url(assets/images/shape/pattern-13.png)' }} />
                <div className="auto-container">
                    <div className="sec-title text-center">
                        <h2>You can find answers in our <br /> list of frequently asked questions </h2>
                        <span className="text-decoration-two" />
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <ul className="accordion-box mb-30">
                                {/*Accordion Block*/}
                                <li className="accordion block">
                                    <div className={isActive.key == 1 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(1)}><div className="icon-outer"><span className="icon icon_plus flaticon-right" /> <span className="icon icon_minus flaticon-right" /></div>01.   What does you do?</div>
                                    <div className={isActive.key == 1 ? "acc-content current" : "acc-content"}>
                                        <div className="content">
                                            <div className="text">Same as saying through shrinking from toil and pain these cases are perfectly simple and easy to distinguish.
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                {/*Accordion Block*/}
                                <li className="accordion block">
                                    <div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(2)}><div className="icon-outer"><span className="icon icon_plus flaticon-right" /> <span className="icon icon_minus flaticon-right" /></div>02.  What industries covered?</div>
                                    <div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
                                        <div className="content">
                                            <div className="text">Same as saying through shrinking from toil and pain these cases are perfectly simple and easy to distinguish.
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                {/*Accordion Block*/}
                                <li className="accordion block">
                                    <div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(3)}><div className="icon-outer"><span className="icon icon_plus flaticon-right" /> <span className="icon icon_minus flaticon-right" /></div>03.  How do you price?</div>
                                    <div className={isActive.key == 3 ? "acc-content current" : "acc-content"}>
                                        <div className="content">
                                            <div className="text">Same as saying through shrinking from toil and pain these cases are perfectly simple and easy to distinguish.
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                {/* End Block */}
                            </ul>
                        </div>
                        <div className="col-lg-6">
                            <div className="author-info wrapper-box">
                                <div className="author-box">
                                    <div className="image"><img src="/assets/images/resource/author-thumb-8.jpg" alt="" /></div>
                                    <h4>Have a Question?</h4>
                                    <div className="phone-number">+888 445 55 678 &amp; 89</div>
                                </div>
                                <div className="mail"><Link href="mailto:support@Envolve.com">Send mail on: support@Envolve.com</Link></div>
                                <ul className="list">
                                    <li>Monday - Friday:</li>
                                    <li>9.00 - 6.00</li>
                                    <li>Sunday &amp; Public Holidays (Closed)</li>
                                </ul>
                                <Link href="#" className="read-more-link">Request a Call Back <i className="flaticon-right" /></Link>
                                <div className="question-icon"><img src="/assets/images/icons/icon-36.png" alt="" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
