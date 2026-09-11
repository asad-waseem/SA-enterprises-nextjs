import Menu from "../Menu"
import MobileMenu from "../MobileMenu"

export default function Header6({ scroll, isMobileMenu, handleMobileMenu, isSidebar, handlePopup, handleSidebar }) {
    return (
        <>
            {/* <header className="main-header header-style-six"> */}
            <header className={`main-header header-style-six ${scroll ? "fixed-header" : ""}`}>
                {/* Header Top */}
                <div className="header-top style-six">
                    <div className="auto-container">
                        <div className="inner">
                            <div className="top-left">
                                <ul className="contact-info">
                                    <li><i className="flaticon-phone" />Free Consultation</li>
                                    <li><a href="tel:+18005554400">+1 800 555 44 00</a></li>
                                </ul>
                            </div>
                            <div className="top-right">
                                <ul className="contact-info-two">
                                    <li><a href="mailto:support@example.com"><i className="flaticon-mail-1" />support@example.com</a></li>
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
                {/* Header Middle */}
                <div className="header-middle">
                    <div className="auto-container">
                        <div className="outer-box">
                            <div className="wrapper-box">
                                <div className="row">
                                    <div className="col-lg-3">
                                        {/*Logo*/}
                                        <div className="logo-box">
                                            <div className="logo"><a href="/"><img src="/assets/images-2/logo-home-6.png" alt="" /></a></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-9">
                                        <div className="row m-0 justify-content-end">
                                            <div className="contact-info">
                                                <div className="icon-box">
                                                    <div className="icon"><span className="flaticon-global-2" /></div>
                                                    <h4>Location</h4>
                                                    <div className="text">96 Queen Park, Los Vegas</div>
                                                </div>
                                                <div className="icon-box">
                                                    <div className="icon"><span className="flaticon-clock-1" /></div>
                                                    <h4>opening Hrs</h4>
                                                    <div className="text">Mon - Sat: 9.30 to 16.00</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Header Upper */}
                <div className="header-upper">
                    <div className="auto-container">
                        <div className="upper-inner">
                            <div className="inner-container">
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
                                        <div className="search-inner">
                                            <form action="/index-6" method="post" className="search-form">
                                                <div className="form-group">
                                                    <input type="search" name="search-field" placeholder="Search" required />
                                                    <button type="submit"><i className="flaticon-search" /></button>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="link-btn"><a href="/faq" className="theme-btn btn-style-four"><i className="flaticon-question" /><span className="btn-title">Faq’s</span></a></div>
                                    </div>
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
                            <div className="inner-container">
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
                                        <div className="search-inner">
                                            <form action="/index-6" method="post" className="search-form">
                                                <div className="form-group">
                                                    <input type="search" name="search-field" placeholder="Search" required />
                                                    <button type="submit"><i className="flaticon-search" /></button>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="link-btn"><a href="/faq" className="theme-btn btn-style-four"><i className="flaticon-question" /><span className="btn-title">Faq’s</span></a></div>
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
