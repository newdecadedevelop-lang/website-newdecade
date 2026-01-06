
import Layout from "@/components/layout/Layout"
import About5 from "@/components/sections/About5"
import Blog5 from "@/components/sections/Blog5"
import Casestudy3 from "@/components/sections/Casestudy3"
import Company2 from "@/components/sections/Company2"
import Contact4 from "@/components/sections/Contact4"
import Cta5 from "@/components/sections/Cta5"
import Pricing3 from "@/components/sections/Pricing3"
import Service6 from "@/components/sections/Service6"
import Testimonial5 from "@/components/sections/Testimonial5"
import Welcome5 from "@/components/sections/Welcome5"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={5} footerStyle={5}>
                <Welcome5 />
                <About5 />
                <Service6 />
                <Company2 />
                <Casestudy3 />
                <Pricing3 />
                <Testimonial5 />
                <Blog5 />
                <Contact4 />
                <Cta5 />
            </Layout>
        </>
    )
}