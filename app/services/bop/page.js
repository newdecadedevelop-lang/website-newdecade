'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import ViewMoreServices from "@/components/sections/services/ViewMoreServices"
import FAQ from "@/components/sections/services/FAQ"

const faqs = [
    {
        question: "What is a Business Owners Policy (BOP)?",
        answer: "A BOP is a bundled insurance package that combines General Liability, Property Insurance, and Business Interruption coverage into one convenient policy. It's designed specifically for small to medium-sized businesses and typically costs less than buying each coverage separately."
    },
    {
        question: "What does a BOP cover?",
        answer: "A standard BOP includes General Liability (bodily injury, property damage claims), Property Insurance (building and contents), and Business Interruption coverage (lost income if you can't operate). Many BOPs also include additional coverages like equipment breakdown and crime coverage."
    },
    {
        question: "Is my business eligible for a BOP?",
        answer: "BOPs are designed for small to medium-sized businesses in low to moderate-risk industries. Eligible businesses include retail shops, restaurants, offices, contractors, and many service businesses. We'll help determine if a BOP is right for your business."
    },
    {
        question: "How much does a BOP cost?",
        answer: "BOP costs vary based on your industry, business size, location, and coverage limits. However, because it bundles multiple coverages, a BOP typically costs 20-40% less than purchasing each policy separately. Contact us for a personalized quote."
    },
    {
        question: "What's the difference between a BOP and General Liability?",
        answer: "General Liability is just one component of a BOP. While GL only covers liability claims, a BOP adds property insurance and business interruption coverage, providing more comprehensive protection for your business at a better value."
    },
    {
        question: "Can I customize my BOP coverage?",
        answer: "Yes! While BOPs have standard components, you can typically add endorsements for specific needs like professional liability, cyber liability, hired/non-owned auto, or industry-specific coverages. We'll help you build the right package."
    },
    {
        question: "Does a BOP cover business interruption?",
        answer: "Yes! Business Interruption coverage is a standard part of most BOPs. It helps replace lost income and covers ongoing expenses if your business has to close temporarily due to a covered event like fire or storm damage."
    },
    {
        question: "How quickly can I get a BOP for my business?",
        answer: "In many cases, we can provide BOP coverage within 24-48 hours. The exact timeframe depends on your business type and the information required by the insurance carrier. Contact us to get started."
    }
]

export default function BusinessOwnersPolicy() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Business Owners Policy (BOP)">
                <div>
                    <div className="serviceleft-section-area section-padding5">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-1" />
                                <div className="col-lg-10">
                                    <div className="serviceauthior-area p-0">
                                        <img src="/assets/images/sectionimg/servicedeailsimg1.png" alt="Business Owners Policy" />
                                        <h1 className="font-lora font-40 lineh-50 weight-600 color-29 margin-b20 margin-t28">
                                            Business Owners Policy (BOP)
                                        </h1>
                                        <p className="font-ks font-16 lineh-26 weight-500 color-30 margin-b20">
                                            Simplify your business insurance with a Business Owners Policy (BOP) from New Decade. A BOP bundles essential coverages into one convenient, cost-effective package designed specifically for small to medium-sized businesses.
                                        </p>
                                        <p className="font-ks font-16 lineh-26 weight-500 color-30">
                                            Why buy multiple policies when you can get comprehensive protection in one package? Our BOP policies combine General Liability, Property Insurance, and Business Interruption coverage—often at a lower cost than purchasing each policy separately.
                                        </p>
                                        <div className="border30" />

                                        <h1 className="font-lora font-40 lineh-50 weight-600 color-29 margin-b20">
                                            Comprehensive Protection, Simplified
                                        </h1>
                                        <p className="font-ks font-16 lineh-26 weight-500 color-30">
                                            A Business Owners Policy is designed to make insurance simple and affordable for small business owners. Get the protection you need without the hassle of managing multiple policies and carriers.
                                        </p>

                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="approach-area margin-t32">
                                                    <div className="approach-img">
                                                        <img src="/assets/images/icons/stragig1.svg" alt="" className="approahimages ts" />
                                                    </div>
                                                    <div className="approach-text">
                                                        <Link href="#" className="font-lora font-20 weight-600 color-29 margin-b ts d-inline-block">
                                                            Cost-Effective Coverage
                                                        </Link>
                                                        <p className="fontks font-16 lineh-26 weight-500 color-30 ts">
                                                            Bundling multiple coverages into one BOP typically saves you 20-40% compared to separate policies.
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
                                                            Simplified Management
                                                        </Link>
                                                        <p className="fontks font-16 lineh-26 weight-500 color-30 ts">
                                                            One policy, one renewal date, one payment. Managing your business insurance has never been easier.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="border30" />

                                        <h1 className="font-lora font-40 lineh-50 weight-600 color-29 margin-b20 margin-t28">
                                            What's Included in a BOP?
                                        </h1>
                                        <p className="font-ks font-16 lineh-26 weight-500 color-30 margin-b20">
                                            A Business Owners Policy bundles essential coverages that most small businesses need. Here's what's typically included in your BOP:
                                        </p>

                                        <div className="row">
                                            <div className="col-lg-4">
                                                <div className="checkservice-area">
                                                    <p className="font-ks font-16 lineh-16 weight-600 color-29">
                                                        <span><img src="/assets/images/icons/check1.png" alt="" /></span>
                                                        General Liability
                                                    </p>
                                                </div>
                                                <div className="checkservice-area">
                                                    <p className="font-ks font-16 lineh-16 weight-600 color-29">
                                                        <span><img src="/assets/images/icons/check1.png" alt="" /></span>
                                                        Property Coverage
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="checkservice-area">
                                                    <p className="font-ks font-16 lineh-16 weight-600 color-29">
                                                        <span><img src="/assets/images/icons/check1.png" alt="" /></span>
                                                        Business Interruption
                                                    </p>
                                                </div>
                                                <div className="checkservice-area">
                                                    <p className="font-ks font-16 lineh-16 weight-600 color-29">
                                                        <span><img src="/assets/images/icons/check1.png" alt="" /></span>
                                                        Equipment Breakdown
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="checkservice-area">
                                                    <p className="font-ks font-16 lineh-16 weight-600 color-29">
                                                        <span><img src="/assets/images/icons/check1.png" alt="" /></span>
                                                        Crime Coverage
                                                    </p>
                                                </div>
                                                <div className="checkservice-area">
                                                    <p className="font-ks font-16 lineh-16 weight-600 color-29">
                                                        <span><img src="/assets/images/icons/check1.png" alt="" /></span>
                                                        Additional Endorsements
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <p className="font-ks font-16 lineh-26 weight-500 color-30">
                                            Protect your business with comprehensive, affordable coverage. Contact New Decade today for a free BOP quote customized to your business needs.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <ViewMoreServices currentService="/services/bop" />
                    <FAQ faqs={faqs} />

                    <div className="cta5-section-area section-padding4">
                        <img src="/assets/images/elementor/elementor72.png" alt="" className="elementors72" />
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="cta5-auhtor6-area">
                                        <h1 className="font-lora font-48 lineh-52 color weight-600 margin-b text-capitalize">
                                            Get Your BOP Quote Today
                                        </h1>
                                        <p className="font-ks font-16 lineh-26 weight-500 color-21">
                                            Simplify your business insurance and save money. Call 1-800-250-5540 for expert guidance.
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
