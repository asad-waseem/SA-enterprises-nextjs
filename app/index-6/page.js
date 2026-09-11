
import Layout from "@/components/layout/Layout"
import About from "@/components/sections/home6/About"
import Banner from "@/components/sections/home6/Banner"
import Chooseus from "@/components/sections/home6/Chooseus"
import Client from "@/components/sections/home6/Client"
import Contact from "@/components/sections/home6/Contact"
import Cta from "@/components/sections/home6/Cta"
import Feature from "@/components/sections/home6/Feature"
import Highlights from "@/components/sections/home6/Highlights"
import News from "@/components/sections/home6/News"
import Project from "@/components/sections/home6/Project"
import Service from "@/components/sections/home6/Service"
import Team from "@/components/sections/home6/Team"
import Testimonial from "@/components/sections/home6/Testimonial"
export default function Home() {

    return (
        <>
            <Layout headerStyle={6} footerStyle={6} wrapperCls="home_6">
                <Banner />
                <Highlights />
                <Feature />
                <About />
                <Service />
                <Chooseus />
                <Project />
                <Team />
                <Testimonial />
                <News />
                <Cta />
                <Contact />
                <Client />
            </Layout>
        </>
    )
}