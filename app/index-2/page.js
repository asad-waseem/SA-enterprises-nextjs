
import Layout from "@/components/layout/Layout"
import About from "@/components/sections/home2/About"
import Banner from "@/components/sections/home2/Banner"
import Client from "@/components/sections/home2/Client"
import Contact from "@/components/sections/home2/Contact"
import Cta from "@/components/sections/home2/Cta"
import Features from "@/components/sections/home2/Features"
import Funfacts from "@/components/sections/home2/Funfacts"
import News from "@/components/sections/home2/News"
import Process from "@/components/sections/home2/Process"
import Projects from "@/components/sections/home2/Projects"
import Services from "@/components/sections/home2/Services"
import Team from "@/components/sections/home2/Team"
import Testimonial from "@/components/sections/home2/Testimonial"
export default function Home() {

    return (
        <>
            <Layout headerStyle={2} footerStyle={2} wrapperCls="home_2">
                <Banner />
                <Features />
                <About />
                <Projects />
                <Services />
                <Process />
                <Cta />
                <Team />
                <Testimonial />
                <Client />
                <Funfacts />
                <News />
                <Contact />
            </Layout>
        </>
    )
}