
import Layout from "@/components/layout/Layout"
import About from "@/components/sections/home7/About"
import Banner from "@/components/sections/home7/Banner"
import Chooseus from "@/components/sections/home7/Chooseus"
import Clients from "@/components/sections/home7/Clients"
import Features from "@/components/sections/home7/Features"
import Funfacts from "@/components/sections/home7/Funfacts"
import News from "@/components/sections/home7/News"
import Service from "@/components/sections/home7/Service"
import Subscribe from "@/components/sections/home7/Subscribe"
import Testimonial from "@/components/sections/home7/Testimonial"
import Works from "@/components/sections/home7/Works"
export default function Home() {

    return (
        <>
            <Layout headerStyle={7} footerStyle={7} wrapperCls="home_7">
                <Banner />
                <Features />
                <Service />
                <About />
                <Chooseus />
                <Clients />
                <Works />
                <Funfacts />
                <Testimonial />
                <News />
                <Subscribe />
            </Layout>
        </>
    )
}