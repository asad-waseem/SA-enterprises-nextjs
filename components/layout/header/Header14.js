import Menu from "../Menu"
import MobileMenu from "../MobileMenu"
export default function Header14({ scroll, isMobileMenu, handleMobileMenu, isSidebar, handlePopup, handleSidebar }) {
    return (
        <>
            {/* <header className="main-header header-style-14"> */}
            <header className={`main-header header-style-14 ${scroll ? "fixed-header" : ""}`}>
                {/* header-top-13 */}
                <div className="header-top-14">
                    <div className="auto-container">
                        <div className="top-inner">
                            <div className="top-left">
                                <ul className="info-box">
                                    <li><a href="/index-14">Faq’s</a></li>
                                    <li><a href="/index-14">News</a></li>
                                    <li><a href="/index-14">Career</a></li>
                                </ul>
                            </div>
                            <div className="text">
                                <p><i className="customicon-phone-call" /> Let the building speak : <a href="tel:5556260234">555 626-0234</a> [9am to 6pm]</p>
                            </div>
                            <div className="top-right clearfix">
                                <ul className="language clearfix">
                                    <li><a href="/index-14" className="current">en</a></li>
                                    <li><a href="/index-14">rus</a></li>
                                </ul>
                                <div className="search-btn">
                                    <button type="button" className="search-toggler" onClick={handlePopup}><i className="customicon-magnifying-glass" /></button>
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
                                <figure className="logo"><a href="/index-13"><img src="/assets/images-4/logo-2.png" alt="" /></a></figure>
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
                                <ul className="social-links clearfix">
                                    <li><a href="/index-14"><i className="fab fa-facebook-f" /></a></li>
                                    <li><a href="/index-14"><i className="fab fa-twitter" /></a></li>
                                    <li><a href="/index-14"><i className="fab fa-youtube" /></a></li>
                                </ul>
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
                                <figure className="logo"><a href="/index-13"><img src="/assets/images-4/logo-2.png" alt="" /></a></figure>
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
                                <ul className="social-links clearfix">
                                    <li><a href="/index-14"><i className="fab fa-facebook-f" /></a></li>
                                    <li><a href="/index-14"><i className="fab fa-twitter" /></a></li>
                                    <li><a href="/index-14"><i className="fab fa-youtube" /></a></li>
                                </ul>
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
