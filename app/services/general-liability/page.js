'use client'
import { useState } from "react"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import ViewMoreServices from "@/components/sections/services/ViewMoreServices"
import FAQ from "@/components/sections/services/FAQ"
import InsuranceQuoteModal from "@/components/modals/InsuranceQuoteModal"
import Cta9 from "@/components/sections/Cta9";

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
    const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)

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
                                        <img src="/assets/images/newdecade/newdecade_48.jpg" alt="General Liability Insurance" />
                                        <h1 className="font-lora font-40 lineh-50 weight-600 color-29 margin-b20 margin-t28">
                                            Multi-State General Liability Insurance
                                        </h1>
                                        <p className="font-ks font-16 lineh-26 weight-500 color-30 margin-b20">
                                            Protect your business from unexpected claims and lawsuits with General Liability insurance from New Decade. Licensed across California, Texas, Florida, and Arizona, we provide comprehensive coverage that safeguards your commercial operations and gives you peace of mind with 100% commitment to client advocacy.
                                        </p>
                                        <p className="font-ks font-16 lineh-26 weight-500 color-30">
                                            With 20+ years of experience serving 50+ industries, General Liability insurance is essential protection for your business across all four states. Fast COI turnaround, digital policy management, and competitive rates from multiple top-rated carriers.
                                        </p>
                                        <div className="border30" />

                                        <h1 className="font-lora font-40 lineh-50 weight-600 color-29 margin-b20">
                                            Essential Multi-State Business Protection
                                        </h1>
                                        <p className="font-ks font-16 lineh-26 weight-500 color-30">
                                            Commercial operations face risks across all locations. Our General Liability insurance protects your business from financial exposure across CA, TX, FL, and AZ. From slip-and-fall accidents to property damage claims, we provide comprehensive coverage for commercial enterprises.
                                        </p>

                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="approach-area margin-t32">
                                                    <div className="approach-img">
                                                        <img src="/assets/images/icons/stragig1.svg" alt="" className="approahimages ts" />
                                                    </div>
                                                    <div className="approach-text">
                                                        <Link href="#" className="font-lora font-20 weight-600 color-29 margin-b ts d-inline-block">
                                                            Multi-State Coverage
                                                        </Link>
                                                        <p className="fontks font-16 lineh-26 weight-500 color-30 ts">
                                                            Comprehensive protection for bodily injury, property damage, and liability exposures across CA, TX, FL, and AZ. Fast COI turnaround for all locations.
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
                                                            Commercial Focus
                                                        </Link>
                                                        <p className="fontks font-16 lineh-26 weight-500 color-30 ts">
                                                            Specialized expertise serving 50+ industries with 20+ years of experience. Tech-forward digital policy management and 100% client advocacy.
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

                    {/*<ViewMoreServices currentService="/services/general-liability" />*/}
                    <FAQ faqs={faqs} />

                    <Cta9 />
                </div>
            </Layout>

            <InsuranceQuoteModal
                isOpen={isQuoteModalOpen}
                onClose={() => setIsQuoteModalOpen(false)}
            />
        </>
    )
}
