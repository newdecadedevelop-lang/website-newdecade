
import Layout from "@/components/layout/Layout"
import About10 from "@/components/sections/About10"
import Blog10 from "@/components/sections/Blog10"
import Client6 from "@/components/sections/Client6"
import Contact8 from "@/components/sections/Contact8"
import Cta10 from "@/components/sections/Cta10"
import Pricing6 from "@/components/sections/Pricing6"
import Service13 from "@/components/sections/Service13"
import Service14 from "@/components/sections/Service14"
import Testimonial10 from "@/components/sections/Testimonial10"
import Welcome10 from "@/components/sections/Welcome10"
export default function Home() {

    return (
        <>
            <Layout headerStyle={10} footerStyle={10}>
                <Welcome10 />
                <About10 />
                <Service13 />
                <Client6 />
                <Service14 />
                <Pricing6 />
                <Testimonial10 />
                <Blog10 />
                <Contact8 />
                <Cta10 />
            </Layout>
        </>
    )
}