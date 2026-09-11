import Menu from "../Menu"
import MobileMenu from "../MobileMenu"
export default function Header12({ scroll, isMobileMenu, handleMobileMenu, isSidebar, handlePopup, handleSidebar }) {
    return (
        <>
            {/* <header className="main-header header-style-12"> */}
            <header className={`main-header header-style-12 ${scroll ? "fixed-header" : ""}`}>
                {/* header-middle */}
                <div className="header-middle">
                    <div className="auto-container">
                        <div className="inner-container clearfix">
                            <div className="left-column pull-left">
                                <div className="logo-box">
                                    <figure className="logo"><a href="/index-12"><img src="/assets/images-2/logo-home-12.png" alt="" /></a></figure>
                                </div>
                                <div className="language">
                                    <figure className="flag"><img src="/assets/images-2/icons/flag-1.png" alt="" /></figure>
                                    <form action="#" className="language-switcher">
                                        <select className="custom-select">
                                            <option value={1}>English</option>
                                            <option value={1}>French</option>
                                            <option value={1}>Spanish</option>
                                            <option value={1}>Bengli</option>
                                        </select>
                                    </form>
                                </div>
                            </div>
                            <div className="right-column pull-right">
                                <div className="topics-box">
                                    <div className="icon-box"><i className="flaticon-support" /></div>
                                    <a href="/index-12">Fresh Topics</a>
                                    <h5>15,000 online courses</h5>
                                </div>
                                <ul className="social-links clearfix">
                                    <li><a href="/index-12"><i className="fab fa-facebook-f" /></a></li>
                                    <li><a href="/index-12"><i className="fab fa-twitter" /></a></li>
                                    <li><a href="/index-12"><i className="fab fa-youtube" /></a></li>
                                </ul>
                                <div className="btn-box">
                                    <a href="/index-12" className="theme-btn btn-style-four"><span className="btn-title">Free Demo</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Header Upper */}
                <div className="header-upper">
                    <div className="auto-container">
                        <div className="inner-container clearfix">
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
                                <button type="button" className="theme-btn search-toggler" onClick={handlePopup}><span className="flaticon-search" /></button>
                                <div className="shopping-cart"><i className="flaticon-shopping-cart" /><span className="count">2</span></div>
                                <div className="search-box">
                                    <form action="/index-12" method="post" className="search-form">
                                        <div className="form-group">
                                            <input type="search" name="search-field" placeholder="Enter Your Keyword" required />
                                            <button type="submit"><i className="flaticon-search" /></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*End Header Upper*/}
                {/* Sticky Header  */}
                <div className={`sticky-header ${scroll ? "animated slideInDown" : ""}`}>
                    <div className="auto-container">
                        <div className="inner-container clearfix">
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
                                <button type="button" className="theme-btn search-toggler" onClick={handlePopup}><span className="flaticon-search" /></button>
                                <div className="shopping-cart"><i className="flaticon-shopping-cart" /><span className="count">2</span></div>
                                <div className="search-box">
                                    <form action="/index-12" method="post" className="search-form">
                                        <div className="form-group">
                                            <input type="search" name="search-field" placeholder="Enter Your Keyword" required />
                                            <button type="submit"><i className="flaticon-search" /></button>
                                        </div>
                                    </form>
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
