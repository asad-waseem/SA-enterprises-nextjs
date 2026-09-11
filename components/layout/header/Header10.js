import Menu from "../Menu"
import MobileMenu from "../MobileMenu"

export default function Header10({ scroll, isMobileMenu, handleMobileMenu, isSidebar, handlePopup, handleSidebar }) {
    return (
        <>
            {/* <header className="main-header header-style-ten"> */}
            <header className={`main-header header-style-ten ${scroll ? "fixed-header" : ""}`}>
                {/* Header Upper */}
                <div className="header-upper">
                    <div className="inner-container">
                        {/*Logo*/}
                        <div className="logo-box clearfix">
                            <div className="logo"><a href="/"><img src="/assets/images-2/logo-home-10.png" alt="" /></a></div>
                            <div className="search-box">
                                <button type="button" className="theme-btn search-toggler" onClick={handlePopup}><span className="flaticon-search" /></button>
                            </div>
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
                        <div className="navbar-right-info">
                            <ul className="social-links clearfix">
                                <li><a href="/index-10"><i className="fab fa-facebook-f" /></a></li>
                                <li><a href="/index-10"><i className="fab fa-twitter" /></a></li>
                                <li><a href="/index-10"><i className="fab fa-youtube" /></a></li>
                            </ul>
                            <div className="btn-box">
                                <a href="/index-10" className="theme-btn btn-style-four"><span className="btn-title">Get a Quote</span></a>
                            </div>
                        </div>
                    </div>
                </div>
                {/*End Header Upper*/}
                {/* header-lower */}
                <div className="header-lower">
                    <div className="header-lower-inner">
                        <ul className="header-info clearfix">
                            <li>
                                <i className="flaticon-earth-globe" />
                                <h5>Location</h5>
                                <p>246 Old York Rd, Newyork 08505</p>
                            </li>
                            <li>
                                <i className="flaticon-mail-1" />
                                <h5>Send Mail</h5>
                                <p><a href="mailto:support@example.com">support@example.com</a></p>
                            </li>
                            <li>
                                <i className="flaticon-clock" />
                                <h5>Office Hrs</h5>
                                <p>09.00am to 07.00pm (Mon_Sat)</p>
                            </li>
                            <li>
                                <i className="flaticon-call" />
                                <h5>Phone Num</h5>
                                <p><a href="tel:180055544008556790">+1800 555 44 00 &amp;  855 67 90 </a></p>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* Sticky Header  */}
                <div className={`sticky-header ${scroll ? "animated slideInDown" : ""}`}>
                    <div className="header-upper">
                        <div className="inner-container">
                            {/*Logo*/}
                            <div className="logo-box clearfix">
                                <div className="logo"><a href="/"><img src="/assets/images-2/logo-home-10.png" alt="" /></a></div>
                                <div className="search-box">
                                    <button type="button" className="theme-btn search-toggler" onClick={handlePopup}><span className="flaticon-search" /></button>
                                </div>
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
                            <div className="navbar-right-info">
                                <ul className="social-links clearfix">
                                    <li><a href="/index-10"><i className="fab fa-facebook-f" /></a></li>
                                    <li><a href="/index-10"><i className="fab fa-twitter" /></a></li>
                                    <li><a href="/index-10"><i className="fab fa-youtube" /></a></li>
                                </ul>
                                <div className="btn-box">
                                    <a href="/index-10" className="theme-btn btn-style-four"><span className="btn-title">Get a Quote</span></a>
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
