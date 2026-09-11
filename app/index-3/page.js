
import Layout from "@/components/layout/Layout"
import About from "@/components/sections/home3/About"
import Award from "@/components/sections/home3/Award"
import Banner from "@/components/sections/home3/Banner"
import Cases from "@/components/sections/home3/Cases"
import Experience from "@/components/sections/home3/Experience"
import Features from "@/components/sections/home3/Features"
import MeetUp from "@/components/sections/home3/MeetUp"
import News from "@/components/sections/home3/News"
import Services from "@/components/sections/home3/Services"
import Subscribe from "@/components/sections/home3/Subscribe"
import Testimonial from "@/components/sections/home3/Testimonial"
export default function Home() {

    return (
        <>
            <Layout headerStyle={3} footerStyle={3} wrapperCls="home_3">
                <Banner />
                <Features />
                <About />
                <Experience />
                <Cases />
                <Services />
                <Testimonial />
                <Award />
                <News />
                <MeetUp />
                <Subscribe />
            </Layout>
        </>
    )
}