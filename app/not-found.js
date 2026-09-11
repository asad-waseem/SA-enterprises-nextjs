import Link from "next/link"

export default function Error404() {
    return (
        <>
            <div className="page-wrapper">
                <div className="error-section">
                    <div className="auto-container">
                        <div className="text-center">
                            <div className="image"><img src="/assets/images/resource/404.png" alt="" /></div>
                            <div className="content">
                                <h1>Page is not found</h1>
                                <div className="text">We're not being able to find the page you're looking for</div>
                                <div className="link-btn"><Link href="/" className="theme-btn btn-style-one"><span className="btn-title">BACK TO HOME</span></Link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
