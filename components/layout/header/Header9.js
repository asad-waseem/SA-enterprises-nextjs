import Menu from "../Menu"
import MobileMenu from "../MobileMenu"

export default function Header9({ scroll, isMobileMenu, handleMobileMenu, isSidebar, handlePopup, handleSidebar }) {
    return (
        <>
            {/* <header className="main-header header-style-nine"> */}
            <header className={`main-header header-style-nine ${scroll ? "fixed-header" : ""}`}>
                <div className="header-top header-top-style9">
                    <div className="auto-container">
                        <div className="inner">
                            <div className="top-left">
                                {/*Logo*/}
                                <div className="logo-box">
                                    <div className="logo"><a href="/"><img src="/assets/images-3/logo-9.png" alt="" /></a></div>
                                </div>
                            </div>
                            <div className="top-right">
                                <ul className="contact-info-9">
                                    <li>
                                        <div className="inner-box">
                                            <div className="icon bgclr9">
                                                <span className="icon-planet-earth" />
                                            </div>
                                            <div className="title">
                                                <h3>Head Office</h3>
                                                <p>96 Queen Park, Los Vegas</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="inner-box">
                                            <div className="icon bgclr9">
                                                <span className="icon-on-time" />
                                            </div>
                                            <div className="title">
                                                <h3>opening Hrs</h3>
                                                <p>Mon - Sat: 9.30 to 16.00</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="btn-box">
                                            <a href="#" className="theme-btn btn-style-nine"><span className="btn-title">Get a Quote</span></a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Header Upper */}
                <div className="header-upper header-upper-style9">
                    <div className="auto-container">
                        <div className="inner-container clearfix">
                            {/*Nav Box*/}
                            <div className="nav-outer clearfix">
                                {/*Mobile Navigation Toggler*/}
                                <div className="mobile-nav-toggler" onClick={handleMobileMenu}><img src="/assets/images/icons/icon-bar.png" alt="" /></div>
                                {/* Main Menu */}
                                <nav className="main-menu style9 navbar-expand-md navbar-light">
                                    <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                        <Menu />
                                    </div>
                                </nav>
                                {/* Main Menu End*/}
                            </div>
                            <div className="header-upper-right-style9">
                                <button type="button" className="theme-btn search-toggler" onClick={handlePopup}>
                                    <span className="flaticon-search" />
                                </button>
                                <div className="shopping-cart-outer">
                                    <div className="shopping-cart">
                                        <i className="flaticon-shopping-cart" />
                                        <span className="count">2</span>
                                    </div>
                                </div>
                                <div className="right-box">
                                    <p>for Emergecy</p>
                                    <a href="tel:+18005554400">+ (801) 855 678 90 </a>
                                </div>
                                <div className="phone-icon">
                                    <span className="icon-phone-call-1" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*End Header Upper*/}
                {/* Sticky Header  */}
                <div className={`sticky-header ${scroll ? "animated slideInDown" : ""}`}>
                    <div className="header-upper header-upper-eight">
                        <div className="auto-container">
                            <div className="inner-container clearfix">
                                {/*Logo*/}
                                <div className="logo-box">
                                    <div className="logo"><a href="/"><img src="/assets/images-3/sticky-logo-9.png" alt="" /></a></div>
                                </div>
                                {/*Nav Box*/}
                                <div className="nav-outer clearfix">
                                    {/*Mobile Navigation Toggler*/}
                                    <div className="mobile-nav-toggler" onClick={handleMobileMenu}><img src="/assets/images/icons/icon-bar.png" alt="" /></div>
                                    {/* Main Menu */}
                                    <nav className="main-menu navbar-expand-md navbar-light">
                                        <Menu />
                                    </nav>
                                    {/* Main Menu End*/}
                                    <div className="navbar-right-info">
                                        <button type="button" className="theme-btn search-toggler" onClick={handlePopup}><span className="flaticon-search" /></button>
                                        {/*Sidemenu Navigation Toggler*/}
                                        <div className="sidemenu-nav-toggler" onClick={handleSidebar}>
                                            <img src="/assets/images-3/icon-bar-9.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>{/* End Sticky Menu */}
                {/* Mobile Menu  */}
                <MobileMenu handleMobileMenu={handleMobileMenu} isSidebar={isSidebar} handleSidebar={handleSidebar} />

            </header>

        </>
    )
}
