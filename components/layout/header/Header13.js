import Menu from "../Menu"
import MobileMenu from "../MobileMenu"
export default function Header13({ scroll, isMobileMenu, handleMobileMenu, isSidebar, handlePopup, handleSidebar }) {
    return (
        <>
            {/* <header className="main-header header-style-13"> */}
            <header className={`main-header header-style-13 ${scroll ? "fixed-header" : ""}`}>
                {/* header-top-13 */}
                <div className="header-top-13">
                    <div className="auto-container">
                        <div className="top-inner clearfix">
                            <div className="top-left">
                                <div className="info-box">
                                    <div className="icon-box"><i className="customicon-engineering" /></div>
                                    <h6>It’s your dream we are building.<a href="/index-13"><i className="far fa-long-arrow-right" />Read More</a></h6>
                                </div>
                            </div>
                            <div className="top-right clearfix">
                                <ul className="social-links clearfix">
                                    <li><a href="/index-13"><i className="fab fa-facebook-f" /></a></li>
                                    <li><a href="/index-13"><i className="fab fa-twitter" /></a></li>
                                    <li><a href="/index-13"><i className="fab fa-linkedin-in" /></a></li>
                                    <li><a href="/index-13"><i className="fab fa-youtube" /></a></li>
                                    <li><a href="/index-13"><i className="fab fa-skype" /></a></li>
                                </ul>
                                <div className="support-box">
                                    <h6><i className="fas fa-phone-volume" /><a href="tel:18005554400">+1 800 555 44 00</a></h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* header-top-13 end */}
                {/* Header Upper */}
                <div className="header-upper">
                    <div className="auto-container">
                        <div className="outer-box">
                            <div className="logo-box">
                                <figure className="logo"><a href="/index-13"><img src="/assets/images-4/logo.png" alt="" /></a></figure>
                            </div>
                            {/*Nav Box*/}
                            <div className="nav-outer clearfix">
                                {/*Mobile Navigation Toggler*/}
                                <div className="mobile-nav-toggler" onClick={handleMobileMenu}><img src="/assets/images-2/icons/icon-bar-3.png" alt="" /></div>
                                {/* Main Menu */}
                                <nav className="main-menu navbar-expand-md navbar-light">
                                    <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                        <Menu />
                                    </div>
                                </nav>
                                {/* Main Menu End*/}
                            </div>
                            <div className="nav-right clearfix">
                                <div className="search-btn">
                                    <button type="button" className="search-toggler" onClick={handlePopup}><i className="customicon-magnifying-glass" /></button>
                                </div>
                                <div className="btn-box">
                                    <a href="/index-13" className="theme-btn btn-style-seven"><span className="btn-title">Get a Quote</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*End Header Upper*/}
                {/* Sticky Header  */}
                <div className={`sticky-header ${scroll ? "animated slideInDown" : ""}`}>
                    <div className="auto-container">
                        <div className="outer-box">
                            <div className="logo-box">
                                <figure className="logo"><a href="/index-13"><img src="/assets/images-4/logo.png" alt="" /></a></figure>
                            </div>
                            {/*Nav Box*/}
                            <div className="nav-outer clearfix">
                                {/*Mobile Navigation Toggler*/}
                                <div className="mobile-nav-toggler" onClick={handleMobileMenu}><img src="/assets/images-2/icons/icon-bar-3.png" alt="" /></div>
                                {/* Main Menu */}
                                <nav className="main-menu navbar-expand-md navbar-light">
                                    <Menu />
                                </nav>
                                {/* Main Menu End*/}
                            </div>
                            <div className="nav-right clearfix">
                                <div className="search-btn">
                                    <button type="button" className="search-toggler" onClick={handlePopup}><i className="customicon-magnifying-glass" /></button>
                                </div>
                                <div className="btn-box">
                                    <a href="/index-13" className="theme-btn btn-style-seven"><span className="btn-title">Get a Quote</span></a>
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
