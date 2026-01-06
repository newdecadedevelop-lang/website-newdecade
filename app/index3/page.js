
import Layout from "@/components/layout/Layout"
import About3 from "@/components/sections/About3"
import Blog3 from "@/components/sections/Blog3"
import Conatact1 from "@/components/sections/Conatact1"
import Counter2 from "@/components/sections/Counter2"
import Pricing2 from "@/components/sections/Pricing2"
import Service3 from "@/components/sections/Service3"
import Service4 from "@/components/sections/Service4"
import Testimonial3 from "@/components/sections/Testimonial3"
import Welcome3 from "@/components/sections/Welcome3"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={3} footerStyle={3}>
                <Welcome3 />
                <About3 />
                <Service3 />
                <Counter2 />
                <Service4 />
                <Pricing2 />
                <Testimonial3 />
                <Blog3 />
                <Conatact1 />
            </Layout>
        </>
    )
}