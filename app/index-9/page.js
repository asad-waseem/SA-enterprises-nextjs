
import Layout from "@/components/layout/Layout"
import Banner from "@/components/sections/home9/Banner"
import Blog from "@/components/sections/home9/Blog"
import Brand from "@/components/sections/home9/Brand"
import CallBackForm from "@/components/sections/home9/CallBackForm"
import Choose from "@/components/sections/home9/Choose"
import Gallery from "@/components/sections/home9/Gallery"
import Service from "@/components/sections/home9/Service"
import ServiceTen from "@/components/sections/home9/ServiceTen"
import Testimonial from "@/components/sections/home9/Testimonial"
import VideoGallery from "@/components/sections/home9/VideoGallery"
import Welcome from "@/components/sections/home9/Welcome"
import WorkingProcess from "@/components/sections/home9/WorkingProcess"
export default function Home() {

    return (
        <>
            <Layout headerStyle={9} footerStyle={9} wrapperCls="home_9">
                <Banner />
                <ServiceTen />
                <Service />
                <Welcome />
                <Gallery />
                <WorkingProcess />
                <VideoGallery />
                <Choose />
                <Testimonial />
                <Brand />
                <Blog />
                <CallBackForm />
            </Layout>
        </>
    )
}