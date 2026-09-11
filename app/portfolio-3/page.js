
import dynamic from 'next/dynamic'
const PortfolioFilter3 = dynamic(() => import('@/components/elements/PortfolioFilter3'), {
    ssr: false,
})
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Portfolio Classic" wrapperCls="home_1">
                <section className="portfolio-section">
                    <div className="auto-container">
                        {/*Sortable Galery*/}
                        <div className="sortable-masonry">
                            {/*Filter*/}
                            <PortfolioFilter3/>
                            <div className="link-btn text-center mb-30"><Link href="#" className="theme-btn btn-style-one text-white"><span className="btn-title">Load More</span></Link></div>
                        </div>
                    </div>
                </section>

            </Layout>
        </>
    )
}