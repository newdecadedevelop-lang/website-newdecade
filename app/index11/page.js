
import Layout from "@/components/layout/Layout"
import Link from "next/link"

import About11 from "@/components/sections/About11"
import Blog11 from "@/components/sections/Blog11"
import Contact9 from "@/components/sections/Contact9"
import Countries1 from "@/components/sections/Countries1"
import Cta11 from "@/components/sections/Cta11"
import Post1 from "@/components/sections/Post1"
import Service15 from "@/components/sections/Service15"
import Service16 from "@/components/sections/Service16"
import Team3 from "@/components/sections/Team3"
import Testimonial11 from "@/components/sections/Testimonial11"
import Welcome11 from "@/components/sections/Welcome11"
import Work1 from "@/components/sections/Work1"
export default function Home() {

    return (
        <>
            <Layout headerStyle={11} footerStyle={11}>
                <Welcome11 />
                <About11 />
                <Service15 />
                <Service16 />
                <Countries1 />
                <Work1 />
                <Team3 />
                <Testimonial11 />
                <Blog11 />
                <Contact9 />
                <Post1 />
                <Cta11 />
            </Layout>
        </>
    )
}