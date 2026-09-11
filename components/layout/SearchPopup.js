import Link from "next/link"

export default function SearchPopup({ isPopup, handlePopup }) {
    return (
        <>
            <div id="search-popup" className={`search-popup ${isPopup ? "popup-visible" : ""}`}>
                <div className="close-search theme-btn" onClick={handlePopup}><span className="flaticon-remove" /></div>
                <div className="popup-inner">
                    <div className="overlay-layer" />
                    <div className="search-form">
                        <form method="post" action="">
                            <div className="form-group">
                                <fieldset>
                                    <input type="search" className="form-control" name="search-input" placeholder="Search Here" required />
                                    <input type="submit" className="theme-btn" />
                                </fieldset>
                            </div>
                        </form>
                        <br />
                        <h3>Recent Search Keywords</h3>
                        <ul className="recent-searches">
                            <li><Link href="#">Finance</Link></li>
                            <li><Link href="#">Idea</Link></li>
                            <li><Link href="#">Service</Link></li>
                            <li><Link href="#">Growth</Link></li>
                            <li><Link href="#">Plan</Link></li>
                        </ul>
                    </div>
                </div>
            </div>

        </>
    )
}
