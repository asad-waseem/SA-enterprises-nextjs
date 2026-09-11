import Menu from "../Menu"
import MobileMenu from "../MobileMenu"
export default function Header15({ scroll, isMobileMenu, handleMobileMenu, isSidebar, handlePopup, handleSidebar }) {
    return (
        <>
            {/* <header className="main-header header-style-15"> */}
            <header className={`main-header header-style-15 ${scroll ? "fixed-header" : ""}`}>
                <div className="header-inner">
                    {/* Header Upper */}
                    <div className="outer-box">
                        <div className="header-upper">
                            <div className="logo-box">
                                <figure className="logo"><a href="/index-13"><img src="/assets/images-4/logo-3.png" alt="" /></a></figure>
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
                                <div className="search-btn">
                                    <button type="button" className="search-toggler" onClick={handlePopup}><i className="customicon-magnifying-glass" /></button>
                                </div>
                            </div>
                            <div className="nav-right clearfix">
                                <ul className="social-links clearfix">
                                    <li><a href="/index-14"><i className="fab fa-facebook-f" /></a></li>
                                    <li><a href="/index-14"><i className="fab fa-twitter" /></a></li>
                                    <li><a href="/index-14"><i className="fab fa-youtube" /></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="header-lower clearfix">
                            <div className="left-column">
                                <ul className="info clearfix">
                                    <li><i className="customicon-globe" />96 Queen Park, Los Vegas, USA</li>
                                    <li><i className="customicon-phone-call" /><a href="tel:18005554400">+1 800 555 44 00</a></li>
                                </ul>
                            </div>
                            <div className="right-column">
                                <div className="info clearfix">
                                    <li><i className="far fa-suitcase" /><a href="/index-15">Careers</a></li>
                                    <li><i className="fal fa-envelope" /><a href="mailto:info@example.com">Email Us</a></li>
                                    <li><i className="fal fa-long-arrow-right" /><a href="/index-15"><span>Get a Quote</span></a></li>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*End Header Upper*/}
                </div>
                {/* Sticky Header  */}
                <div className={`sticky-header ${scroll ? "animated slideInDown" : ""}`}>
                    <div className="auto-container">
                        <div className="header-upper">
                            <div className="logo-box">
                                <figure className="logo"><a href="/index-13"><img src="/assets/images-4/logo-3.png" alt="" /></a></figure>
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
