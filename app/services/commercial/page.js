'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import ViewMoreServices from "@/components/sections/services/ViewMoreServices"
import FAQ from "@/components/sections/services/FAQ"

const faqs = [
    {
        question: "What businesses do you insure?",
        answer: "We insure a wide variety of businesses including restaurants, bars, retail shops, offices, warehouses, contractors, and more. As a licensed Fire & Casualty Insurance Broker, we provide customized commercial insurance solutions for California businesses."
    },
    {
        question: "What is included in a Business Owners Policy (BOP)?",
        answer: "A BOP typically combines general liability, property insurance, and business interruption coverage in one package. It's a cost-effective solution for small to medium-sized businesses looking to protect their operations comprehensively."
    },
    {
        question: "Do I need Workers' Compensation insurance?",
        answer: "In California, most businesses with employees are required to carry Workers' Compensation insurance. It protects both your employees and your business in case of work-related injuries or illnesses."
    },
    {
        question: "How much does commercial insurance cost?",
        answer: "Costs vary based on your industry, business size, location, coverage needs, and risk factors. Contact us for a personalized quote—we work with multiple carriers to find competitive rates for your business."
    },
    {
        question: "Can you help with insurance for restaurants and bars?",
        answer: "Absolutely! We specialize in insurance for restaurants, bars, and food service businesses. We understand the unique risks you face and can provide comprehensive coverage including liquor liability, property, general liability, and more."
    },
    {
        question: "What is General Liability insurance?",
        answer: "General Liability insurance protects your business from claims of bodily injury, property damage, and personal injury. It's essential coverage for most businesses and is often required by landlords and contracts."
    },
    {
        question: "Do you offer same-day coverage?",
        answer: "In many cases, yes! We understand that businesses sometimes need coverage quickly. Contact us and we'll do our best to get you covered the same day."
    },
    {
        question: "Can I add multiple locations to my policy?",
        answer: "Yes, we can insure businesses with multiple locations. We'll help you structure your coverage to protect all your business locations efficiently and cost-effectively."
    }
]

export default function CommercialInsurance() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Commercial Insurance">
                <div>
                    <div className="serviceleft-section-area section-padding5">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-1" />
                                <div className="col-lg-10">
                                    <div className="serviceauthior-area p-0">
                                        <img src="/assets/images/newdecade/newdecade_19.jpg" alt="Commercial Insurance" />
                                        <h1 className="font-lora font-40 lineh-50 weight-600 color-29 margin-b20 margin-t28">
                                            Commercial Insurance Solutions
                                        </h1>
                                        <p className="font-ks font-16 lineh-26 weight-500 color-30 margin-b20">
                                            As a licensed Fire & Casualty Insurance Broker, New Decade provides comprehensive commercial insurance solutions for businesses throughout California. From restaurants and bars to retail shops and offices, we protect businesses of all sizes and industries.
                                        </p>
                                        <p className="font-ks font-16 lineh-26 weight-500 color-30">
                                            With over 20 years of experience, we understand the unique challenges California businesses face. We work with top-rated carriers to deliver customized coverage that protects your business operations, assets, and employees.
                                        </p>
                                        <div className="border30" />

                                        <h1 className="font-lora font-40 lineh-50 weight-600 color-29 margin-b20">
                                            Protecting California Businesses
                                        </h1>
                                        <p className="font-ks font-16 lineh-26 weight-500 color-30">
                                            Running a business comes with risks. Our commercial insurance solutions help you manage those risks and protect what you've built. We offer flexible coverage options tailored to your specific industry and business needs.
                                        </p>

                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="approach-area margin-t32">
                                                    <div className="approach-img">
                                                        <img src="/assets/images/icons/stragig1.svg" alt="" className="approahimages ts" />
                                                    </div>
                                                    <div className="approach-text">
                                                        <Link href="#" className="font-lora font-20 weight-600 color-29 margin-b ts d-inline-block">
                                                            Industry Expertise
                                                        </Link>
                                                        <p className="fontks font-16 lineh-26 weight-500 color-30 ts">
                                                            We specialize in restaurants, bars, retail, contractors, and more. We understand your industry's unique insurance needs.
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
                                                            Customized Solutions
                                                        </Link>
                                                        <p className="fontks font-16 lineh-26 weight-500 color-30 ts">
                                                            Every business is different. We create tailored insurance packages that fit your specific needs and budget.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="border30" />

                                        <h1 className="font-lora font-40 lineh-50 weight-600 color-29 margin-b20 margin-t28">
                                            Commercial Coverage Options
                                        </h1>
                                        <p className="font-ks font-16 lineh-26 weight-500 color-30 margin-b20">
                                            Protect your business with comprehensive coverage. We offer a full range of commercial insurance products to meet the needs of California businesses.
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
                                                        Property Insurance
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="checkservice-area">
                                                    <p className="font-ks font-16 lineh-16 weight-600 color-29">
                                                        <span><img src="/assets/images/icons/check1.png" alt="" /></span>
                                                        Workers' Compensation
                                                    </p>
                                                </div>
                                                <div className="checkservice-area">
                                                    <p className="font-ks font-16 lineh-16 weight-600 color-29">
                                                        <span><img src="/assets/images/icons/check1.png" alt="" /></span>
                                                        Business Owners Policy (BOP)
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="checkservice-area">
                                                    <p className="font-ks font-16 lineh-16 weight-600 color-29">
                                                        <span><img src="/assets/images/icons/check1.png" alt="" /></span>
                                                        Liquor Liability
                                                    </p>
                                                </div>
                                                <div className="checkservice-area">
                                                    <p className="font-ks font-16 lineh-16 weight-600 color-29">
                                                        <span><img src="/assets/images/icons/check1.png" alt="" /></span>
                                                        Commercial Auto
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <p className="font-ks font-16 lineh-26 weight-500 color-30">
                                            Protect your business investment with comprehensive commercial insurance. Contact us today for a free quote customized to your business needs.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <ViewMoreServices currentService="/services/commercial" />
                    <FAQ faqs={faqs} />

                    <div className="cta5-section-area section-padding4">
                        <img src="/assets/images/newdecade/newdecade_19.jpg" alt="" className="elementors72" />
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="cta5-auhtor6-area">
                                        <h1 className="font-lora font-48 lineh-52 color weight-600 margin-b text-capitalize">
                                            Get Your Free Commercial Insurance Quote
                                        </h1>
                                        <p className="font-ks font-16 lineh-26 weight-500 color-21">
                                            Protect your business with customized coverage. Call 1-800-250-5540 for expert guidance.
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
