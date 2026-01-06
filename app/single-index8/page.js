
import Layout from "@/components/layout/Layout"
import About8 from "@/components/sections/About8"
import Blog8 from "@/components/sections/Blog8"
import Contact7 from "@/components/sections/Contact7"
import Counter5 from "@/components/sections/Counter5"
import Cta8 from "@/components/sections/Cta8"
import Pricing4 from "@/components/sections/Pricing4"
import Service10 from "@/components/sections/Service10"
import Service9 from "@/components/sections/Service9"
import Testimonial8 from "@/components/sections/Testimonial8"
import Welcome8 from "@/components/sections/Welcome8"
import Link from "next/link"

export default function Home() {

    return (
        <>
            <Layout headerStyle={20} footerStyle={8}>
                <Welcome8 />
                <About8 />
                <Service9 />
                <Counter5 />
                <Service10 />
                <Pricing4 />
                <Testimonial8 />
                <Blog8 />
                <Contact7 />
                <Cta8 />
            </Layout>
        </>
    )
}