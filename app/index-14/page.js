
import Layout from "@/components/layout/Layout"

import Banner from "@/components/sections/home14/Banner"
import Chooseus from "@/components/sections/home14/Chooseus"
import Clients from "@/components/sections/home14/Clients"
import Cta from "@/components/sections/home14/Cta"
import Feature from "@/components/sections/home14/Feature"
import Funfact from "@/components/sections/home14/Funfact"
import Process from "@/components/sections/home14/Process"
import Project from "@/components/sections/home14/Project"
import Service from "@/components/sections/home14/Service"
import Team from "@/components/sections/home14/Team"
import Testimonial from "@/components/sections/home14/Testimonial"
export default function Home() {

    return (
        <>
            <Layout headerStyle={14} footerStyle={14} wrapperCls="home_14">
                <Banner />
                <Feature />
                <Service />
                <Process />
                <Funfact />
                <Project />
                <Cta />
                <Chooseus />
                <Team />
                <Testimonial />
                <Clients />
            </Layout>
        </>
    )
}