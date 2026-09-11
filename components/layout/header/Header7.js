import Menu from "../Menu"
import MobileMenu from "../MobileMenu"
export default function Header7({ scroll, isMobileMenu, handleMobileMenu, isSidebar, handlePopup, handleSidebar }) {
    return (
        <>
            {/* <header className="main-header header-style-seven"> */}
            <header className={`main-header header-style-seven ${scroll ? "fixed-header" : ""}`}>
                {/* Header Top */}
                <div className="header-top">
                    <div className="auto-container">
                        <div className="inner">
                            <div className="top-left">
                                <ul className="contact-info">
                                    <li><i className="fas fa-map-marker-alt" />96 Queen Park, Los Vegas, USA</li>
                                    <li><a href="mailto:support@example.com"><i className="fas fa-envelope" />support@example.com</a></li>
                                </ul>
                                <ul className="social-links clearfix">
                                    <li><a href="#"><span className="fab fa-facebook-f" /></a></li>
                                    <li><a href="#"><span className="fab fa-twitter" /></a></li>
                                    <li><a href="#"><span className="fab fa-google-plus-g" /></a></li>
                                    <li><a href="#"><span className="fab fa-skype" /></a></li>
                                </ul>
                            </div>
                            <div className="top-right">
                                <div className="text"><i className="flaticon-trending" />Job Opportunities 2020: Team Leader, Marketing Head &amp; Sales Executive. <span className="flaticon-right" /></div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Header Upper */}
                <div className="header-upper">
                    <div className="auto-container">
                        <div className="inner-container clearfix">
                            {/*Logo*/}
                            <div className="logo-box clearfix">
                                <div className="logo"><a href="/"><img src="/assets/images-2/logo-home-7.png" alt="" /></a></div>
                                <div className="login-box"><a href="/index-7"><i className="far fa-user" />Login</a></div>
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
                                <div className="navbar-right-info">
                                    <button type="button" className="theme-btn search-toggler" onClick={handlePopup}><span className="flaticon-search" /></button>
                                    <div className="link-btn"><a href="tel:18005554400" className="theme-btn btn-style-four"><i className="flaticon-call" /><span className="btn-title">+1 800 555 44 00</span></a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*End Header Upper*/}
                {/* Sticky Header  */}
                <div className={`sticky-header ${scroll ? "animated slideInDown" : ""}`}>
                    <div className="header-upper">
                        <div className="auto-container">
                            <div className="inner-container clearfix">
                                {/*Logo*/}
                                <div className="logo-box clearfix">
                                    <div className="logo"><a href="/"><img src="/assets/images-2/logo-home-7.png" alt="" /></a></div>
                                    <div className="login-box"><a href="/index-7"><i className="far fa-user" />Login</a></div>
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
                                    <div className="navbar-right-info">
                                        <button type="button" className="theme-btn search-toggler" onClick={handlePopup}><span className="flaticon-search" /></button>
                                        <div className="link-btn"><a href="tel:18005554400" className="theme-btn btn-style-four"><i className="flaticon-call" /><span className="btn-title">+1 800 555 44 00</span></a></div>
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
