
import Layout from "@/components/layout/Layout"
import About12 from "@/components/sections/About12"
import Blog12 from "@/components/sections/Blog12"
import Contact10 from "@/components/sections/Contact10"
import Countries2 from "@/components/sections/Countries2"
import Cta12 from "@/components/sections/Cta12"
import Post2 from "@/components/sections/Post2"
import Service17 from "@/components/sections/Service17"
import Service18 from "@/components/sections/Service18"
import Team4 from "@/components/sections/Team4"
import Testimonial12 from "@/components/sections/Testimonial12"
import Welcome12 from "@/components/sections/Welcome12"
import Work2 from "@/components/sections/Work2"
export default function Home() {

    return (
        <>

            <Layout headerStyle={12} footerStyle={12}>
                <Welcome12 />
                <About12 />
                <Service17 />
                <Service18 />
                <Countries2 />
                <Work2 />
                <Team4 />
                <Testimonial12 />
                <Blog12 />
                <Contact10 />
                <Post2 />
                <Cta12 />
            </Layout>
        </>
    )
}