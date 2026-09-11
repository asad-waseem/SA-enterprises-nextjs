
import Layout from "@/components/layout/Layout"

import About from "@/components/sections/home13/About"
import Banner from "@/components/sections/home13/Banner"
import Chooseus from "@/components/sections/home13/Chooseus"
import Clients from "@/components/sections/home13/Clients"
import Faq from "@/components/sections/home13/Faq"
import News from "@/components/sections/home13/News"
import Project from "@/components/sections/home13/Project"
import Service from "@/components/sections/home13/Service"
import Team from "@/components/sections/home13/Team"
import Testimonial from "@/components/sections/home13/Testimonial"
import Video from "@/components/sections/home13/Video"

export default function Home() {

    return (
        <>
            <Layout headerStyle={13} footerStyle={13} wrapperCls="home_13">
                <Banner />
                <About />
                <Service />
                <Chooseus />
                <Project />
                <Video />
                <Team />
                <Testimonial />
                <News />
                <Faq />
                <Clients />
            </Layout>
        </>
    )
}