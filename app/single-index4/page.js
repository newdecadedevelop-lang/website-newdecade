
import Layout from "@/components/layout/Layout"
import About4 from "@/components/sections/About4"
import Blog4 from "@/components/sections/Blog4"
import Casestudy2 from "@/components/sections/Casestudy2"
import Client3 from "@/components/sections/Client3"
import Contact3 from "@/components/sections/Contact3"
import Counter3 from "@/components/sections/Counter3"
import Cta4 from "@/components/sections/Cta4"
import Service5 from "@/components/sections/Service5"
import Testimonial4 from "@/components/sections/Testimonial4"
import Welcome4 from "@/components/sections/Welcome4"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={16} footerStyle={4}>
                <Welcome4 />
                <About4 />
                <Counter3 />
                <Service5 />
                <Client3 />
                <Testimonial4 />
                <Casestudy2 />
                <Blog4 />
                <Contact3 />
                <Cta4 />
            </Layout>
        </>
    )
}