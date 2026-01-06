
import Layout from "@/components/layout/Layout"
import Link from "next/link"

import About2 from "@/components/sections/About2"
import Blog2 from "@/components/sections/Blog2"
import Casestudy1 from "@/components/sections/Casestudy1"
import Client2 from "@/components/sections/Client2"
import Company1 from "@/components/sections/Company1"
import Contact2 from "@/components/sections/Contact2"
import Counter1 from "@/components/sections/Counter1"
import Cta3 from "@/components/sections/Cta3"
import Pricing1 from "@/components/sections/Pricing1"
import Service2 from "@/components/sections/Service2"
import Testimonial2 from "@/components/sections/Testimonial2"
import Welcome2 from "@/components/sections/Welcome2"
export default function Home() {

    return (
        <>
            <Layout headerStyle={2} footerStyle={2}>
                <Welcome2 />
                <About2 />
                <Service2 />
                <Company1 />
                <Counter1 />
                <Client2 />
                <Casestudy1 />
                <Pricing1 />
                <Testimonial2 />
                <Blog2 />
                <Contact2 />
                <Cta3 />
            </Layout>
        </>
    )
}