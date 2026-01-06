
import Layout from "@/components/layout/Layout"
import About9 from "@/components/sections/About9"
import Blog9 from "@/components/sections/Blog9"
import Company3 from "@/components/sections/Company3"
import Conatact2 from "@/components/sections/Conatact2"
import Cta9 from "@/components/sections/Cta9"
import Pricing5 from "@/components/sections/Pricing5"
import Service11 from "@/components/sections/Service11"
import Service12 from "@/components/sections/Service12"
import Testimonial9 from "@/components/sections/Testimonial9"
import Welcome9 from "@/components/sections/Welcome9"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={21} footerStyle={9}>
                <Welcome9 />
                <About9 />
                <Service11 />
                <Company3 />
                <Service12 />
                <Pricing5 />
                <Testimonial9 />
                <Blog9 />
                <Conatact2 />
                <Cta9 />
            </Layout>
        </>
    )
}