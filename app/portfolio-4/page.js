
import dynamic from 'next/dynamic'
const PortfolioFilter4 = dynamic(() => import('@/components/elements/PortfolioFilter4'), {
    ssr: false,
})
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Portfolio Classic" wrapperCls="home_1">
                <section className="portfolio-section-two">
                    <div className="auto-container">
                        <PortfolioFilter4/>
                    </div>
                </section>

            </Layout>
        </>
    )
}