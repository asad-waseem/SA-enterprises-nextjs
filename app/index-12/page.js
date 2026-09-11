
import Layout from "@/components/layout/Layout"
import About from "@/components/sections/home12/About"
import Banner from "@/components/sections/home12/Banner"
import Category from "@/components/sections/home12/Category"
import Consulting from "@/components/sections/home12/Consulting"
import Funfact from "@/components/sections/home12/Funfact"
import Highlights from "@/components/sections/home12/Highlights"
import Instructor from "@/components/sections/home12/Instructor"
import News from "@/components/sections/home12/News"
import Offered from "@/components/sections/home12/Offered"
import Subscribe from "@/components/sections/home12/Subscribe"
import Team from "@/components/sections/home12/Team"
import Testimonial from "@/components/sections/home12/Testimonial"
export default function Home() {

    return (
        <>
            <Layout headerStyle={12} footerStyle={12} wrapperCls="home_12">
                <Banner />
                <Category />
                <Offered />
                <About />
                <Highlights />
                <Team />
                <Funfact />
                <Testimonial />
                <Instructor />
                <News />
                <Consulting />
                <Subscribe />
            </Layout>
        </>
    )
}