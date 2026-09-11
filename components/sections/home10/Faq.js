
'use client'
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
            <section className="faq-home-10">
                <div className="auto-container">
                    <div className="sec-title text-center">
                        <h4>NGet Answers</h4>
                        <h2>Frequently asked questions</h2>
                    </div>
                    <div className="row clearfix">
                        <div className="col-lg-6 col-md-12">
                            <ul className="accordion-box style-two">
                                {/*Accordion Block*/}
                                <li className="accordion block">
                                    <div className={isActive.key == 1 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(1)}>
                                        <div className="icon-outer"><span className="icon icon_plus flaticon-right" /> <span className="icon icon_minus flaticon-right" /></div>01. What does you do?
                                    </div>
                                    <div className={isActive.key == 1 ? "acc-content current" : "acc-content"}>
                                        <div className="content">
                                            <div className="text">Same as saying through shrinking from toil and pain these
                                                cases are perfectly simple and easy to distinguish.
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                {/*Accordion Block*/}
                                <li className="accordion block">
                                    <div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(2)}>
                                        <div className="icon-outer"><span className="icon icon_plus flaticon-right" /> <span className="icon icon_minus flaticon-right" /></div>02. What industries
                                        covered?
                                    </div>
                                    <div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
                                        <div className="content">
                                            <div className="text">Same as saying through shrinking from toil and pain these
                                                cases are perfectly simple and easy to distinguish.
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                {/*Accordion Block*/}
                                <li className="accordion block">
                                    <div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(3)}>
                                        <div className="icon-outer"><span className="icon icon_plus flaticon-right" /> <span className="icon icon_minus flaticon-right" /></div>03. How do you price?
                                    </div>
                                    <div className={isActive.key == 3 ? "acc-content current" : "acc-content"}>
                                        <div className="content">
                                            <div className="text">Same as saying through shrinking from toil and pain these
                                                cases are perfectly simple and easy to distinguish.
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                {/* End Block */}
                            </ul>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="form-inner">
                                <form method="post" action="sendemail.php" className="contact-form">
                                    <div className="row">
                                        <div className="col-md-6 form-group">
                                            <input type="text" name="name" placeholder="Your name" required />
                                        </div>
                                        <div className="col-md-6 form-group">
                                            <input type="email" name="email" placeholder="Email address*" required />
                                        </div>
                                        <div className="col-md-12 form-group">
                                            <textarea name="message" placeholder="Enter your question ..." />
                                        </div>
                                        <div className="col-md-12 form-group">
                                            <button type="submit" name="submit-form">Send Now</button>
                                            <div className="text"><span>*</span>Send your questions to us our team <br />will
                                                reply you asap.</div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
