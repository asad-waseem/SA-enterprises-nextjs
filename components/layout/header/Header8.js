import Menu from "../Menu"
import MobileMenu from "../MobileMenu"

export default function Header8({ scroll, isMobileMenu, handleMobileMenu, isSidebar, handlePopup, handleSidebar }) {
    return (
        <>
            {/* <header className="main-header header-style-eight"> */}
            <header className={`main-header header-style-eight ${scroll ? "fixed-header" : ""}`}>
                {/* Header Upper */}
                <div className="header-upper header-upper-style8">
                    <div className="auto-container">
                        <div className="inner-container clearfix">
                            {/*Logo*/}
                            <div className="logo-box">
                                <div className="logo"><a href="/"><img src="/assets/images-3/logo-8.png" alt="" /></a></div>
                            </div>
                            {/*Nav Box*/}
                            <div className="nav-outer clearfix">
                                {/*Mobile Navigation Toggler*/}
                                <div className="mobile-nav-toggler" onClick={handleMobileMenu}><img src="/assets/images/icons/icon-bar.png" alt="" /></div>
                                {/* Main Menu */}
                                <nav className="main-menu style8 navbar-expand-md navbar-light">
                                    <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                        <Menu />
                                    </div>
                                </nav>
                                {/* Main Menu End*/}
                            </div>
                            <div className="header-upper-right-style8">
                                <ul className="social-links clearfix">
                                    <li><a href="#"><span className="fab fa-facebook-f" /></a></li>
                                    <li><a href="#"><span className="fab fa-twitter" /></a></li>
                                    <li><a href="#"><span className="fab fa-google-plus-g" /></a></li>
                                    <li><a href="#"><span className="fab fa-skype" /></a></li>
                                </ul>
                                <button type="button" className="theme-btn search-toggler" onClick={handlePopup}>
                                    <span className="flaticon-search" />
                                </button>
                                <div className="shopping-cart-outer">
                                    <div className="shopping-cart">
                                        <i className="flaticon-shopping-cart" />
                                        <span className="count">2</span>
                                    </div>
                                </div>
                                {/*Sidemenu Navigation Toggler*/}
                                <div className="sidemenu-nav-toggler" onClick={handleSidebar}><img src="/assets/images-3/icon-bar-8.png" alt="" /></div>
                                <div className="right-button">
                                    <a className="theme-btn btn-style-eight" href="#">
                                        <span className="btn-title">Inquire Now</span>
                                    </a>
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
                                    <div className="logo"><a href="/"><img src="/assets/images-3/sticky-logo-8.png" alt="" /></a></div>
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
                                            <img src="/assets/images-3/icon-bar-8-v2.png" alt="" />
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
