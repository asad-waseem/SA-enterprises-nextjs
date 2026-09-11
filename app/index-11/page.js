
import Layout from "@/components/layout/Layout"
import About from "@/components/sections/home11/About"
import Banner from "@/components/sections/home11/Banner"
import Chooseus from "@/components/sections/home11/Chooseus"
import Clients from "@/components/sections/home11/Clients"
import Consultation from "@/components/sections/home11/Consultation"
import Contact from "@/components/sections/home11/Contact"
import Funfact from "@/components/sections/home11/Funfact"
import Immigration from "@/components/sections/home11/Immigration"
import News from "@/components/sections/home11/News"
import Service from "@/components/sections/home11/Service"
import Team from "@/components/sections/home11/Team"
import Testimonial from "@/components/sections/home11/Testimonial"
export default function Home() {

    return (
        <>
            <Layout headerStyle={11} footerStyle={11} wrapperCls="home_11">
                <Banner />
                <Service />
                <About />
                <Immigration />
                <Chooseus />
                <Testimonial />
                <Team />
                <Clients />
                <Funfact />
                <News />
                <Contact />
                <Consultation />
            </Layout>
        </>
    )
}