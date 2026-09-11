import Menu from "../Menu"
import MobileMenu from "../MobileMenu"
export default function Header3({ scroll, isMobileMenu, handleMobileMenu, isSidebar, handlePopup, handleSidebar }) {
    return (
        <>
            {/* <header className="main-header header-style-three"> */}
            <header className={`main-header header-style-three ${scroll ? "fixed-header" : ""}`}>
                {/* Header Top */}
                <div className="header-top style-three">
                    <div className="auto-container">
                        <div className="inner">
                            <div className="top-left">
                                <ul className="contact-info">
                                    <li><a href="tel:+18005554400"><i className="flaticon-phone" />+1 800 555 44 00</a></li>
                                    <li><a href="tel:+18005554400"><i className="flaticon-mail-1" />support@Envolve.com</a></li>
                                </ul>
                            </div>
                            <div className="top-right">
                                <div className="language">
                                    <span className="flaticon-global" />
                                    <form action="#" className="language-switcher">
                                        <select className="custom-select">
                                            <option value={1}>English</option>
                                            <option value={1}>French</option>
                                            <option value={1}>Spanish</option>
                                            <option value={1}>Bengli</option>
                                        </select>
                                    </form>
                                </div>
                                <ul className="social-links clearfix">
                                    <li><a href="#"><span className="fab fa-facebook-f" /></a></li>
                                    <li><a href="#"><span className="fab fa-twitter" /></a></li>
                                    <li><a href="#"><span className="fab fa-google-plus-g" /></a></li>
                                    <li><a href="#"><span className="fab fa-skype" /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Header Top Two */}
                <div className="header-top-two">
                    <div className="auto-container">
                        <div className="wrapper-box">
                            <div className="text"><i className="flaticon-trending" />Job Opportunities 2020: Team Leader, Marketing Head &amp; Sales Executive. <span className="flaticon-right" /></div>
                            <button type="button" className="theme-btn search-toggler" onClick={handlePopup}><span className="flaticon-search" /></button>
                        </div>
                    </div>
                </div>
                {/* Header Upper */}
                <div className="header-upper style-three">
                    <div className="auto-container">
                        <div className="inner-container clearfix">
                            {/*Logo*/}
                            <div className="logo-box">
                                <div className="logo"><a href="/"><img src="/assets/images/logo-v3.png" alt="" /></a></div>
                            </div>
                            {/*Nav Box*/}
                            <div className="nav-outer clearfix">
                                {/*Mobile Navigation Toggler*/}
                                <div className="mobile-nav-toggler" onClick={handleMobileMenu}><img src="/assets/images/icons/icon-bar.png" alt="" /></div>
                                {/* Main Menu */}
                                <nav className="main-menu navbar-expand-md navbar-light">
                                    <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                        <Menu />
                                    </div>
                                </nav>
                                {/* Main Menu End*/}
                                <div className="navbar-right-info">
                                    <div className="shopping-cart"><i className="flaticon-shopping-cart" /><span className="count">2</span></div>
                                    <div className="link-btn"><a href="#" className="theme-btn btn-style-one"><span className="btn-title">Get In Touch</span></a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*End Header Upper*/}
                {/* Sticky Header  */}
                <div className={`sticky-header ${scroll ? "animated slideInDown" : ""}`}>
                    {/* Header Upper */}
                    <div className="header-upper style-three">
                        <div className="auto-container">
                            <div className="inner-container clearfix">
                                {/*Logo*/}
                                <div className="logo-box">
                                    <div className="logo"><a href="/"><img src="/assets/images/logo-v3.png" alt="" /></a></div>
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
                                        <div className="shopping-cart"><i className="flaticon-shopping-cart" /><span className="count">2</span></div>
                                        <div className="link-btn"><a href="#" className="theme-btn btn-style-one"><span className="btn-title">Get In Touch</span></a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*End Header Upper*/}
                </div>{/* End Sticky Menu */}
                {/* Mobile Menu  */}
                <MobileMenu handleMobileMenu={handleMobileMenu} isSidebar={isSidebar} handleSidebar={handleSidebar} />

            </header>

        </>
    )
}
