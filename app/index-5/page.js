
import Layout from "@/components/layout/Layout"
import About from "@/components/sections/home5/About"
import Award from "@/components/sections/home5/Award"
import Banner from "@/components/sections/home5/Banner"
import Client from "@/components/sections/home5/Client"
import Contact from "@/components/sections/home5/Contact"
import Feature from "@/components/sections/home5/Feature"
import News from "@/components/sections/home5/News"
import Process from "@/components/sections/home5/Process"
import Projects from "@/components/sections/home5/Projects"
import Services from "@/components/sections/home5/Services"
import Testimonial from "@/components/sections/home5/Testimonial"
import WhyChooseUs from "@/components/sections/home5/WhyChooseUs"
export default function Home() {

    return (
        <>
            <Layout headerStyle={5} footerStyle={5} wrapperCls="home_5">
                <Banner />
                <Feature />
                <About />
                <Services />
                <WhyChooseUs />
                <Projects />
                <Services />
                <Testimonial />
                <Process />
                <News />
                <Award />
                <Contact />
                <Client />
            </Layout>
        </>
    )
}