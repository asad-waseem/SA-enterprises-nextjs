import Menu from "../Menu"
import MobileMenu from "../MobileMenu"

export default function Header2({ scroll, isMobileMenu, handleMobileMenu, isSidebar, handlePopup, handleSidebar }) {
    return (
        <>
            {/* <header className="main-header header-style-two"> */}
            <header className={`main-header header-style-two ${scroll ? "fixed-header" : ""}`}>
                {/* Header Top */}
                <div className="header-top style-two">
                    <div className="auto-container">
                        <div className="inner">
                            <div className="top-left">
                                <ul className="contact-info">
                                    <li><i className="flaticon-earth-globe" />96 Queen Park, Los Vegas, USA</li>
                                    <li><a href="tel:+18005554400"><i className="flaticon-phone" />+1 800 555 44 00</a></li>
                                </ul>
                            </div>
                            <div className="top-right">
                                <ul className="contact-info-two">
                                    <li><i className="flaticon-bag" />Careers</li>
                                    <li><a href="tel:+18005554400"><i className="flaticon-mail" />Email Us</a></li>
                                </ul>
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
                {/* Header Upper */}
                <div className="header-upper style-two">
                    <div className="auto-container">
                        <div className="inner-container clearfix">
                            {/*Logo*/}
                            <div className="logo-box">
                                <div className="logo"><a href="/"><img src="/assets/images/logo-v2.png" alt="" /></a></div>
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
                                    <div className="faq-btn"><a href="#"><span className="flaticon-question" />FAQ'S</a></div>
                                    <div className="link-btn"><a href="#" className="theme-btn btn-style-four"><span className="btn-title">Free Consult</span></a></div>
                                    <button type="button" className="theme-btn search-toggler" onClick={handlePopup}><span className="flaticon-search" /></button>
                                    <div className="shopping-cart"><i className="flaticon-shopping-cart" /><span className="count">2</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*End Header Upper*/}
                {/* Sticky Header  */}
                <div className={`sticky-header ${scroll ? "animated slideInDown" : ""}`}>
                    {/* Header Upper */}
                    <div className="header-upper style-two">
                        <div className="auto-container">
                            <div className="inner-container clearfix">
                                {/*Logo*/}
                                <div className="logo-box">
                                    <div className="logo"><a href="/"><img src="/assets/images/logo-v2.png" alt="" /></a></div>
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
                                        <div className="faq-btn"><a href="#"><span className="flaticon-question" />FAQ'S</a></div>
                                        <div className="link-btn"><a href="#" className="theme-btn btn-style-four"><span className="btn-title">Free Consult</span></a></div>
                                        <button type="button" className="theme-btn search-toggler" onClick={handlePopup}><span className="flaticon-search" /></button>
                                        <div className="shopping-cart"><i className="flaticon-shopping-cart" /><span className="count">2</span></div>
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
