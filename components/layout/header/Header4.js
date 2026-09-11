import Menu from "../Menu"
import MobileMenu from "../MobileMenu"
export default function Header4({ scroll, isMobileMenu, handleMobileMenu, isSidebar, handlePopup, handleSidebar }) {
    return (
        <>

            {/* <header className="main-header header-style-four"> */}
            <header className={`main-header header-style-four ${scroll ? "fixed-header" : ""}`}>
                {/* Header Top */}
                <div className="header-top style-four">
                    <div className="auto-container">
                        <div className="inner">
                            <div className="top-left">
                                <ul className="contact-info">
                                    <li><a href="tel:+18005554400"><i className="flaticon-phone" />+1 800 555 44 00</a></li>
                                    <li><a href="tel:+18005554400"><i className="flaticon-mail-1" />support@Envolve.com</a></li>
                                </ul>
                            </div>
                            <div className="top-right">
                                <div className="text"><i className="flaticon-trending" />Job Opportunities 2020: Team Leader, Marketing Head &amp; Sales Executive. <span className="flaticon-right" /></div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Header Middle */}
                <div className="header-middle">
                    <div className="auto-container">
                        <div className="outer-box">
                            <div className="wrapper-box">
                                <div className="row">
                                    <div className="col-lg-3">
                                        {/*Logo*/}
                                        <div className="logo-box">
                                            <div className="logo"><a href="/"><img src="/assets/images/logo-v4.png" alt="" /></a></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-9">
                                        <div className="row m-0 justify-content-end">
                                            <div className="contact-info">
                                                <div className="icon-box">
                                                    <div className="icon"><span className="flaticon-global-2" /></div>
                                                    <h4>Head Office</h4>
                                                    <div className="text">96 Queen Park, Los Vegas</div>
                                                </div>
                                                <div className="icon-box">
                                                    <div className="icon"><span className="flaticon-clock-1" /></div>
                                                    <h4>opening Hrs</h4>
                                                    <div className="text">Mon - Sat: 9.30 to 16.00</div>
                                                </div>
                                            </div>
                                            <div className="link-btn"><a href="#" className="theme-btn btn-style-one"><span className="btn-title">Get A Quote</span></a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Header Upper */}
                <div className="header-upper style-four">
                    <div className="auto-container">
                        <div className="inner-container clearfix">
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
                                    <button type="button" className="theme-btn search-toggler" onClick={handlePopup}><span className="flaticon-search" /></button>
                                    <div className="shopping-cart"><i className="flaticon-shopping-cart" /><span className="count">2</span></div>
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
                </div>
                {/*End Header Upper*/}
                {/* Sticky Header  */}
                <div className={`sticky-header ${scroll ? "animated slideInDown" : ""}`}>
                    {/* Header Upper */}
                    <div className="header-upper style-four">
                        <div className="auto-container">
                            <div className="inner-container clearfix">
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
                                        <div className="shopping-cart"><i className="flaticon-shopping-cart" /><span className="count">2</span></div>
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
                    </div>
                    {/*End Header Upper*/}
                </div>{/* End Sticky Menu */}
                {/* Mobile Menu  */}
                <MobileMenu handleMobileMenu={handleMobileMenu} isSidebar={isSidebar} handleSidebar={handleSidebar} />

            </header>

        </>
    )
}
