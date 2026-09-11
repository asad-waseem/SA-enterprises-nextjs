import Menu from "../Menu"
import MobileMenu from "../MobileMenu"

export default function Header11({ scroll, isMobileMenu, handleMobileMenu, isSidebar, handlePopup, handleSidebar }) {
    return (
        <>
            {/* <header className="main-header header-style-11"> */}
            <header className={`main-header header-style-11 ${scroll ? "fixed-header" : ""}`}>
                {/* header-top */}
                <div className="header-top">
                    <div className="inner">
                        <div className="left-column">
                            <div className="text">
                                <div className="icon-box"><i className="flaticon-global" /></div>
                                <strong>Updates:</strong> Covid-19 Testing Required for US Entry ...<a href="/index-11"><i className="flaticon-right" />Read More</a>
                            </div>
                        </div>
                        <div className="right-column">
                            <ul className="info clearfix">
                                <li>
                                    <i className="fas fa-map-marker-alt" />
                                    <p>96 Queen Park, Los Vegas, USA</p>
                                </li>
                                <li>
                                    <i className="fas fa-envelope" />
                                    <p><a href="tel:support@example.com">support@example.com</a></p>
                                </li>
                            </ul>
                            <ul className="social-links clearfix">
                                <li><a href="/index-11"><i className="fab fa-facebook-f" /></a></li>
                                <li><a href="/index-11"><i className="fab fa-twitter" /></a></li>
                                <li><a href="/index-11"><i className="fab fa-youtube" /></a></li>
                                <li><a href="/index-11"><i className="fab fa-linkedin-in" /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Header Upper */}
                <div className="header-upper">
                    <div className="inner-container clearfix">
                        <div className="logo-box pull-left">
                            <figure className="logo"><a href="/index-11"><img src="/assets/images-2/logo-home-11.png" alt="" /></a></figure>
                            <div className="select-box">
                                <i className="fas fa-th-large" />
                                <select className="custom-select" name="subject">
                                    <option value="*">Tour &amp; Travel</option>
                                    <option value=".category-1">Business Aproach</option>
                                    <option value=".category-2">Trades &amp; Stock Market</option>
                                    <option value=".category-3">Strategy &amp; Planning</option>
                                    <option value=".category-4">Software &amp; Research</option>
                                    <option value=".category-5">Support &amp; Maintenance</option>
                                </select>
                            </div>
                        </div>
                        {/*Nav Box*/}
                        <div className="nav-outer pull-right clearfix">
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
                                <div className="language">
                                    <div className="icon-box"><i className="fas fa-globe-americas" /></div>
                                    <form action="#" className="language-switcher">
                                        <select className="custom-select">
                                            <option value={1}>English</option>
                                            <option value={1}>French</option>
                                            <option value={1}>Spanish</option>
                                            <option value={1}>Bengli</option>
                                        </select>
                                    </form>
                                </div>
                                <div className="btn-box">
                                    <a href="/index-11" className="theme-btn btn-style-four"><span className="btn-title">Appointment</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*End Header Upper*/}
                {/* Sticky Header  */}
                <div className={`sticky-header ${scroll ? "animated slideInDown" : ""}`}>
                    <div className="inner-container clearfix">
                        <div className="logo-box pull-left">
                            <figure className="logo"><a href="/index-11"><img src="/assets/images-2/logo-home-11.png" alt="" /></a></figure>
                            <div className="select-box">
                                <i className="fas fa-th-large" />
                                <select className="custom-select" name="subject">
                                    <option value="*">Tour &amp; Travel</option>
                                    <option value=".category-1">Business Aproach</option>
                                    <option value=".category-2">Trades &amp; Stock Market</option>
                                    <option value=".category-3">Strategy &amp; Planning</option>
                                    <option value=".category-4">Software &amp; Research</option>
                                    <option value=".category-5">Support &amp; Maintenance</option>
                                </select>
                            </div>
                        </div>
                        {/*Nav Box*/}
                        <div className="nav-outer pull-right clearfix">
                            {/*Mobile Navigation Toggler*/}
                            <div className="mobile-nav-toggler" onClick={handleMobileMenu}><img src="/assets/images/icons/icon-bar.png" alt="" /></div>
                            {/* Main Menu */}
                            <nav className="main-menu navbar-expand-md navbar-light">
                                <Menu />
                            </nav>
                            {/* Main Menu End*/}
                            <div className="navbar-right-info">
                                <button type="button" className="theme-btn search-toggler" onClick={handlePopup}><span className="flaticon-search" /></button>
                                <div className="language">
                                    <div className="icon-box"><i className="fas fa-globe-americas" /></div>
                                    <form action="#" className="language-switcher">
                                        <select className="custom-select">
                                            <option value={1}>English</option>
                                            <option value={1}>French</option>
                                            <option value={1}>Spanish</option>
                                            <option value={1}>Bengli</option>
                                        </select>
                                    </form>
                                </div>
                                <div className="btn-box">
                                    <a href="/index-11" className="theme-btn btn-style-four"><span className="btn-title">Appointment</span></a>
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
