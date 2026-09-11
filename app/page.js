'use client'
import Layout from "@/components/layout/Layout"
import Banner from "@/components/sections/home1/Banner"
import Features from "@/components/sections/home1/Features"
import About from "@/components/sections/home1/About"
import WhyChooseUs from "@/components/sections/home1/WhyChooseUs"
import Process from "@/components/sections/home1/Process"
import Cta from "@/components/sections/home1/Cta"

export default function Home() {
    return (
        <Layout headerStyle={1} footerStyle={1} wrapperCls="home_1">
            <Banner />
            <Features />
            <About />
            <WhyChooseUs />
            <Process />
            <Cta />
        </Layout>
    )
}