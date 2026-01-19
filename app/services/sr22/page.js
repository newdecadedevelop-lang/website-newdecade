'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import ViewMoreServices from "@/components/sections/services/ViewMoreServices"
import FAQ from "@/components/sections/services/FAQ"

const faqs = [
    {
        question: "What is SR-22 insurance?",
        answer: "SR-22 is not actually insurance—it's a certificate of financial responsibility that proves you carry auto insurance. California DMV requires it after certain violations like DUI, driving without insurance, or multiple tickets."
    },
    {
        question: "How long do I need to maintain SR-22?",
        answer: "Typically, California requires you to maintain SR-22 for 3 years. Your insurance company must file the SR-22 with the DMV and keep it active for the entire period. Any lapse could restart the clock."
    },
    {
        question: "How much does SR-22 insurance cost?",
        answer: "The SR-22 filing itself is usually a small fee (around $25). However, SR-22 is required because of high-risk violations, so your insurance premium may be higher. We work with multiple carriers to find you the best rates available."
    },
    {
        question: "Can I get SR-22 insurance with a DUI?",
        answer: "Yes! We specialize in SR-22 insurance for drivers with DUI convictions. We understand your situation and work with carriers who provide coverage for high-risk drivers at competitive rates."
    },
    {
        question: "What happens if my SR-22 lapses?",
        answer: "If your insurance lapses, your insurance company is required to notify the DMV, which will suspend your license. That's why it's crucial to maintain continuous coverage. We'll help ensure your SR-22 stays active."
    },
    {
        question: "How quickly can you file my SR-22?",
        answer: "We can often file your SR-22 with the DMV the same day! Once your policy is active, we'll submit the SR-22 electronically to the California DMV immediately."
    },
    {
        question: "Do I need an SR-22 if I don't own a car?",
        answer: "Yes, you still need SR-22 even without a vehicle. We offer non-owner SR-22 policies that provide the required proof of financial responsibility without insuring a specific vehicle."
    },
    {
        question: "Will New Decade help me through the SR-22 process?",
        answer: "Absolutely! We'll guide you through every step—from getting your initial policy to filing your SR-22, and maintaining it for the required period. We're here to help you get back on the road legally."
    }
]

export default function SR22Insurance() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="SR-22 & High Risk Insurance">
                <div>
                    <div className="serviceleft-section-area section-padding5">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-1" />
                                <div className="col-lg-10">
                                    <div className="serviceauthior-area p-0">
                                        <img src="/assets/images/newdecade/newdecade_20.jpg" alt="SR-22 Insurance" />
                                        <h1 className="font-lora font-40 lineh-50 weight-600 color-29 margin-b20 margin-t28">
                                            SR-22 & High Risk Insurance
                                        </h1>
                                        <p className="font-ks font-16 lineh-26 weight-500 color-30 margin-b20">
                                            At New Decade, we specialize in SR-22 insurance and high-risk auto coverage. If you've had a DUI, multiple tickets, accidents, or license suspension, we're here to help. We work with carriers who understand that everyone deserves a second chance.
                                        </p>
                                        <p className="font-ks font-16 lineh-26 weight-500 color-30">
                                            With over 20 years of experience helping California drivers, we know how to navigate SR-22 requirements and find affordable coverage for high-risk situations. Let us help you get back on the road legally and affordably.
                                        </p>
                                        <div className="border30" />

                                        <h1 className="font-lora font-40 lineh-50 weight-600 color-29 margin-b20">
                                            We Specialize in SR-22 & High Risk
                                        </h1>
                                        <p className="font-ks font-16 lineh-26 weight-500 color-30">
                                            Getting SR-22 insurance doesn't have to be complicated or expensive. We make the process simple and work hard to find you the best rates available, even with a challenging driving history.
                                        </p>

                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="approach-area margin-t32">
                                                    <div className="approach-img">
                                                        <img src="/assets/images/icons/stragig1.svg" alt="" className="approahimages ts" />
                                                    </div>
                                                    <div className="approach-text">
                                                        <Link href="#" className="font-lora font-20 weight-600 color-29 margin-b ts d-inline-block">
                                                            Same-Day SR-22 Filing
                                                        </Link>
                                                        <p className="fontks font-16 lineh-26 weight-500 color-30 ts">
                                                            We can file your SR-22 with the California DMV the same day, getting you back on the road quickly.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="approach-area margin-t32">
                                                    <div className="approach-img">
                                                        <img src="/assets/images/icons/approach1.svg" alt="" className="approahimages ts" />
                                                    </div>
                                                    <div className="approach-text">
                                                        <Link href="#" className="font-lora font-20 weight-600 color-29 margin-b ts d-inline-block">
                                                            Expert Guidance
                                                        </Link>
                                                        <p className="fontks font-16 lineh-26 weight-500 color-30 ts">
                                                            We'll walk you through the entire SR-22 process and make sure your filing stays active for the required period.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="border30" />

                                        <h1 className="font-lora font-40 lineh-50 weight-600 color-29 margin-b20 margin-t28">
                                            We Cover All High-Risk Situations
                                        </h1>
                                        <p className="font-ks font-16 lineh-26 weight-500 color-30 margin-b20">
                                            No matter your driving history, we can help. We specialize in finding coverage for drivers who other insurance companies may turn away.
                                        </p>

                                        <div className="row">
                                            <div className="col-lg-4">
                                                <div className="checkservice-area">
                                                    <p className="font-ks font-16 lineh-16 weight-600 color-29">
                                                        <span><img src="/assets/images/icons/check1.png" alt="" /></span>
                                                        DUI / DWI
                                                    </p>
                                                </div>
                                                <div className="checkservice-area">
                                                    <p className="font-ks font-16 lineh-16 weight-600 color-29">
                                                        <span><img src="/assets/images/icons/check1.png" alt="" /></span>
                                                        Multiple Tickets
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="checkservice-area">
                                                    <p className="font-ks font-16 lineh-16 weight-600 color-29">
                                                        <span><img src="/assets/images/icons/check1.png" alt="" /></span>
                                                        License Suspension
                                                    </p>
                                                </div>
                                                <div className="checkservice-area">
                                                    <p className="font-ks font-16 lineh-16 weight-600 color-29">
                                                        <span><img src="/assets/images/icons/check1.png" alt="" /></span>
                                                        At-Fault Accidents
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="checkservice-area">
                                                    <p className="font-ks font-16 lineh-16 weight-600 color-29">
                                                        <span><img src="/assets/images/icons/check1.png" alt="" /></span>
                                                        Lapses in Coverage
                                                    </p>
                                                </div>
                                                <div className="checkservice-area">
                                                    <p className="font-ks font-16 lineh-16 weight-600 color-29">
                                                        <span><img src="/assets/images/icons/check1.png" alt="" /></span>
                                                        Non-Owner SR-22
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <p className="font-ks font-16 lineh-26 weight-500 color-30">
                                            Don't let a mistake keep you off the road. Contact New Decade today and let us help you get the SR-22 insurance you need at a price you can afford.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <ViewMoreServices currentService="/services/sr22" />
                    <FAQ faqs={faqs} />

                    <div className="cta5-section-area section-padding4">
                        <img src="/assets/images/elementor/elementor72.png" alt="" className="elementors72" />
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="cta5-auhtor6-area">
                                        <h1 className="font-lora font-48 lineh-52 color weight-600 margin-b text-capitalize">
                                            Need SR-22? We Can Help Today
                                        </h1>
                                        <p className="font-ks font-16 lineh-26 weight-500 color-21">
                                            Get SR-22 filed with DMV the same day. Call 1-800-250-5540 now for immediate assistance.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-2" />
                                <div className="col-lg-4">
                                    <div className="cta5-btn5-sexction">
                                        <Link href="/" className="theme6-btn6 bakgrnd5 font-ks lineh-16 weight-700 color font-16">
                                            Get SR-22 Now
                                            <span><i className="fa-solid fa-arrow-right" /></span>
                                        </Link>
                                        <Link href="/contact" className="theme6-btn6 backgrnd6 font-ks lineh-16 weight-700 color-29 font-16">
                                            Contact Us
                                            <span><i className="fa-solid fa-arrow-right" /></span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img src="/assets/images/elementor/elementor72.png" alt="" className="elementors73" />
                    </div>
                </div>
            </Layout>
        </>
    )
}
