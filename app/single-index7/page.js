
import Layout from "@/components/layout/Layout"
import About7 from "@/components/sections/About7"
import Blog7 from "@/components/sections/Blog7"
import Client5 from "@/components/sections/Client5"
import Contact6 from "@/components/sections/Contact6"
import Cta7 from "@/components/sections/Cta7"
import Service8 from "@/components/sections/Service8"
import Team2 from "@/components/sections/Team2"
import Testimonial7 from "@/components/sections/Testimonial7"
import Welcome7 from "@/components/sections/Welcome7"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={19} footerStyle={7}>
                <Welcome7 />
                <About7 />
                <Service8 />
                <Client5 />
                <Team2 />
                <Testimonial7 />
                <Blog7 />
                <Contact6 />
                <Cta7 />
            </Layout>
        </>
    )
}