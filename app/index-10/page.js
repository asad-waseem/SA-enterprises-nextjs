
import Layout from "@/components/layout/Layout"
import About from "@/components/sections/home10/About"
import Banner from "@/components/sections/home10/Banner"
import Chooseus from "@/components/sections/home10/Chooseus"
import Faq from "@/components/sections/home10/Faq"
import FooterBanner from "@/components/sections/home10/FooterBanner"
import Funfact from "@/components/sections/home10/Funfact"
import News from "@/components/sections/home10/News"
import Pricing from "@/components/sections/home10/Pricing"
import Service from "@/components/sections/home10/Service"
import Testimonial from "@/components/sections/home10/Testimonial"
import Works from "@/components/sections/home10/Works"
export default function Home() {

    return (
        <>
            <Layout headerStyle={10} footerStyle={10} wrapperCls="home_10">
                    <Banner />
                    <About />
                    <Service />
                    <Chooseus />
                    <Funfact />
                    <Works />
                    <Pricing />
                    <Testimonial />
                    <News />
                    <Faq />
                    <FooterBanner />
            </Layout>
        </>
    )
}