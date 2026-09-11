
import Layout from "@/components/layout/Layout"

import Awards from "@/components/sections/home8/Awards"
import Banner from "@/components/sections/home8/Banner"
import Blog from "@/components/sections/home8/Blog"
import Choose from "@/components/sections/home8/Choose"
import ContactFormFaq from "@/components/sections/home8/ContactFormFaq"
import ContactInfo from "@/components/sections/home8/ContactInfo"
import Funfacts from "@/components/sections/home8/Funfacts"
import PricingPlan from "@/components/sections/home8/PricingPlan"
import Service from "@/components/sections/home8/Service"
import Team from "@/components/sections/home8/Team"
import Testimonial from "@/components/sections/home8/Testimonial"
import Welcome from "@/components/sections/home8/Welcome"
import WorkingProcess from "@/components/sections/home8/WorkingProcess"
export default function Home() {

    return (
        <>
            <Layout headerStyle={8} footerStyle={8} wrapperCls="home_8">
                <Banner />
                <ContactInfo />
                <Welcome />
                <Service />
                <Choose />
                <WorkingProcess />
                <Team />
                <PricingPlan />
                <Testimonial />
                <Blog />
                <Awards />
                <ContactFormFaq />
                <Funfacts />
            </Layout>
        </>
    )
}