'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import ViewMoreServices from "@/components/sections/services/ViewMoreServices"
import FAQ from "@/components/sections/services/FAQ"

const faqs = [
    {
        question: "What is General Liability insurance?",
        answer: "General Liability insurance protects your business from financial loss due to bodily injury, property damage, medical expenses, libel, slander, and the cost of defending lawsuits. It's essential protection for virtually any business that interacts with customers or the public."
    },
    {
        question: "Why does my business need General Liability insurance?",
        answer: "General Liability protects you from potentially devastating lawsuits and claims. Whether a customer slips and falls at your location, you accidentally damage someone's property, or face a lawsuit over advertising claims, General Liability insurance can cover legal fees, settlements, and medical costs."
    },
    {
        question: "How much General Liability coverage do I need?",
        answer: "Coverage needs vary by industry, business size, and risk exposure. Many businesses carry $1-2 million in coverage. Your landlord, clients, or contracts may require specific coverage amounts. We'll help you determine the right coverage level for your business."
    },
    {
        question: "What does General Liability insurance NOT cover?",
        answer: "General Liability doesn't cover professional errors (you need Professional Liability/E&O for that), employee injuries (that's Workers' Comp), or damage to your own business property (that requires Property insurance). We can help you build a comprehensive insurance package."
    },
    {
        question: "How much does General Liability insurance cost?",
        answer: "Costs vary based on your industry, business size, location, and coverage limits. Many small businesses pay between $400-$1,500 annually for basic coverage. Contact us for a personalized quote based on your specific business needs."
    },
    {
        question: "Is General Liability insurance required by law?",
        answer: "While not legally required in California, General Liability is often required by landlords, clients, and contract agreements. Additionally, it's simply smart business practice to protect yourself from potentially bankrupting lawsuits."
    },
    {
        question: "Can I get same-day General Liability coverage?",
        answer: "In many cases, yes! We understand that businesses sometimes need coverage quickly for new contracts or leases. Contact us and we'll work to get you covered as fast as possible."
    },
    {
        question: "What's the difference between General Liability and Professional Liability?",
        answer: "General Liability covers bodily injury and property damage claims. Professional Liability (E&O) covers claims of negligence, errors, or omissions in the professional services you provide. Many businesses need both types of coverage."
    }
]

export default function GeneralLiability() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="General Liability Insurance">
                <div>
                    <div className="serviceleft-section-area section-padding5">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-1" />
                                <div className="col-lg-10">
                                    <div className="serviceauthior-area p-0">
                                        <img src="/assets/images/newdecade/newdecade_21.jpg" alt="General Liability Insurance" />
                                        <h1 className="font-lora font-40 lineh-50 weight-600 color-29 margin-b20 margin-t28">
                                            General Liability Insurance
                                        </h1>
                                        <p className="font-ks font-16 lineh-26 weight-500 color-30 margin-b20">
                                            Protect your business from unexpected claims and lawsuits with General Liability insurance from New Decade. As a licensed California insurance broker, we provide comprehensive coverage that safeguards your business assets and gives you peace of mind.
                                        </p>
                                        <p className="font-ks font-16 lineh-26 weight-500 color-30">
                                            Whether you're a small startup or an established business, General Liability insurance is essential protection against the everyday risks of doing business. We work with top-rated carriers to find you competitive rates and comprehensive coverage.
                                        </p>
                                        <div className="border30" />

                                        <h1 className="font-lora font-40 lineh-50 weight-600 color-29 margin-b20">
                                            Essential Protection for Every Business
                                        </h1>
                                        <p className="font-ks font-16 lineh-26 weight-500 color-30">
                                            Accidents happen, and when they do, General Liability insurance protects your business from financial ruin. From slip-and-fall accidents to property damage claims, we've got you covered.
                                        </p>

                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="approach-area margin-t32">
                                                    <div className="approach-img">
                                                        <img src="/assets/images/icons/stragig1.svg" alt="" className="approahimages ts" />
                                                    </div>
                                                    <div className="approach-text">
                                                        <Link href="#" className="font-lora font-20 weight-600 color-29 margin-b ts d-inline-block">
                                                            Broad Protection
                                                        </Link>
                                                        <p className="fontks font-16 lineh-26 weight-500 color-30 ts">
                                                            Coverage for bodily injury, property damage, personal injury, and advertising injury claims against your business.
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
                                                            Legal Defense
                                                        </Link>
                                                        <p className="fontks font-16 lineh-26 weight-500 color-30 ts">
                                                            We cover legal defense costs, even if the lawsuit against you is groundless or fraudulent.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="border30" />

                                        <h1 className="font-lora font-40 lineh-50 weight-600 color-29 margin-b20 margin-t28">
                                            What General Liability Covers
                                        </h1>
                                        <p className="font-ks font-16 lineh-26 weight-500 color-30 margin-b20">
                                            Comprehensive General Liability insurance protects your business from a wide range of claims and lawsuits. Here's what your policy covers:
                                        </p>

                                        <div className="row">
                                            <div className="col-lg-4">
                                                <div className="checkservice-area">
                                                    <p className="font-ks font-16 lineh-16 weight-600 color-29">
                                                        <span><img src="/assets/images/icons/check1.png" alt="" /></span>
                                                        Bodily Injury
                                                    </p>
                                                </div>
                                                <div className="checkservice-area">
                                                    <p className="font-ks font-16 lineh-16 weight-600 color-29">
                                                        <span><img src="/assets/images/icons/check1.png" alt="" /></span>
                                                        Property Damage
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="checkservice-area">
                                                    <p className="font-ks font-16 lineh-16 weight-600 color-29">
                                                        <span><img src="/assets/images/icons/check1.png" alt="" /></span>
                                                        Personal Injury
                                                    </p>
                                                </div>
                                                <div className="checkservice-area">
                                                    <p className="font-ks font-16 lineh-16 weight-600 color-29">
                                                        <span><img src="/assets/images/icons/check1.png" alt="" /></span>
                                                        Advertising Injury
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="checkservice-area">
                                                    <p className="font-ks font-16 lineh-16 weight-600 color-29">
                                                        <span><img src="/assets/images/icons/check1.png" alt="" /></span>
                                                        Medical Payments
                                                    </p>
                                                </div>
                                                <div className="checkservice-area">
                                                    <p className="font-ks font-16 lineh-16 weight-600 color-29">
                                                        <span><img src="/assets/images/icons/check1.png" alt="" /></span>
                                                        Legal Defense Costs
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <p className="font-ks font-16 lineh-26 weight-500 color-30">
                                            Don't leave your business exposed to costly claims and lawsuits. Contact New Decade today for a free General Liability insurance quote customized to your business.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <ViewMoreServices currentService="/services/general-liability" />
                    <FAQ faqs={faqs} />

                    <div className="cta5-section-area section-padding4">
                        <img src="/assets/images/elementor/elementor72.png" alt="" className="elementors72" />
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="cta5-auhtor6-area">
                                        <h1 className="font-lora font-48 lineh-52 color weight-600 margin-b text-capitalize">
                                            Protect Your Business Today
                                        </h1>
                                        <p className="font-ks font-16 lineh-26 weight-500 color-21">
                                            Get comprehensive General Liability coverage at competitive rates. Call 1-800-250-5540 now.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-2" />
                                <div className="col-lg-4">
                                    <div className="cta5-btn5-sexction">
                                        <Link href="/" className="theme6-btn6 bakgrnd5 font-ks lineh-16 weight-700 color font-16">
                                            Get Free Quote
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
