
import Layout from "@/components/layout/Layout"
import About6 from "@/components/sections/About6"
import Blog6 from "@/components/sections/Blog6"
import Client4 from "@/components/sections/Client4"
import Contact5 from "@/components/sections/Contact5"
import Counter4 from "@/components/sections/Counter4"
import Cta6 from "@/components/sections/Cta6"
import Service7 from "@/components/sections/Service7"
import Testimonial6 from "@/components/sections/Testimonial6"
import Welcome6 from "@/components/sections/Welcome6"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={6} footerStyle={6}>
                <Welcome6 />
                <About6 />
                <Counter4 />
                <Service7 />
                <Client4 />
                <Testimonial6 />
                <Blog6 />
                <Contact5 />
                <Cta6 />
            </Layout>
        </>
    )
}