'use client'
import Link from "next/link"
import { useState } from "react"

export default function MobileMenu({ handleMobileMenu }) {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
                key: "",
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
            <div className="mobile-menu">
                <div className="menu-backdrop" onClick={handleMobileMenu} />
                <div className="close-btn" onClick={handleMobileMenu}><span className="icon flaticon-remove" /></div>
                <nav className="menu-box">
                    <div className="nav-logo"><Link href="/"><img src="/assets/images/logo-2.png" alt="" /></Link></div>
                    <div className="menu-outer">
                        <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                            <ul className="navigation clearfix">
                                <li><Link href="/" onClick={handleMobileMenu}>Home</Link></li>
                                <li><Link href="/about" onClick={handleMobileMenu}>About</Link></li>
                                <li className={isActive.key == 1 ? "dropdown current" : "dropdown"}>
                                    <Link href="/solutions" onClick={handleMobileMenu}>Solutions</Link>
                                    <ul style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}>
                                        <li><Link href="/solutions" onClick={handleMobileMenu}>All Solutions</Link></li>
                                        <li><Link href="/solutions/it-hardware" onClick={handleMobileMenu}>IT Hardware</Link></li>
                                        <li><Link href="/solutions/office-equipment" onClick={handleMobileMenu}>Office Equipment</Link></li>
                                        <li><Link href="/solutions/networking" onClick={handleMobileMenu}>Networking Equipment</Link></li>
                                        <li><Link href="/solutions/printing-consumables" onClick={handleMobileMenu}>Printing &amp; Consumables</Link></li>
                                        <li><Link href="/solutions/accessories" onClick={handleMobileMenu}>Accessories &amp; Essentials</Link></li>
                                        <li><Link href="/solutions/custom-procurement" onClick={handleMobileMenu}>Custom Demand &amp; Sourcing</Link></li>
                                    </ul>
                                    <div className={isActive.key == 1 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(1)}><span className="fa fa-angle-right" /></div>
                                </li>
                                <li><Link href="/products" onClick={handleMobileMenu}>Products</Link></li>
                                <li><Link href="/industries" onClick={handleMobileMenu}>Industries</Link></li>
                                <li><Link href="/faq" onClick={handleMobileMenu}>FAQ</Link></li>
                                <li><Link href="/contact" onClick={handleMobileMenu}>Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                    {/* Social Links */}
                    <div className="social-links">
                        <ul className="clearfix">
                            <li><Link href="/contact"><span className="fab fa-whatsapp" /></Link></li>
                            <li><Link href="/contact"><span className="fab fa-linkedin-in" /></Link></li>
                            <li><Link href="/contact"><span className="fab fa-facebook-f" /></Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    )
}
