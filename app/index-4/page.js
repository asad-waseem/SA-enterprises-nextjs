
import Layout from "@/components/layout/Layout"

import About from "@/components/sections/home4/About"
import Banner from "@/components/sections/home4/Banner"
import DownloadPdf from "@/components/sections/home4/DownloadPdf"
import Faq from "@/components/sections/home4/Faq"
import Features from "@/components/sections/home4/Features"
import News from "@/components/sections/home4/News"
import Newsletter from "@/components/sections/home4/Newsletter"
import Pricing from "@/components/sections/home4/Pricing"
import Process from "@/components/sections/home4/Process"
import Projects from "@/components/sections/home4/Projects"
import Services from "@/components/sections/home4/Services"
import Testimonial from "@/components/sections/home4/Testimonial"
export default function Home() {

    return (
        <>
            <Layout headerStyle={4} footerStyle={4} wrapperCls="home_4">
                <Banner />
                <DownloadPdf />
                <Features />
                <About />
                <Services />
                <Projects />
                <Process />
                <Faq />
                <Testimonial />
                <News />
                <Pricing />
                <Newsletter />
            </Layout>
        </>
    )
}