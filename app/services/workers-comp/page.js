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
        question: "Is Workers' Compensation insurance required in all four states you serve?",
        answer: "Yes! California, Texas, Florida, and Arizona all require virtually all employers to carry Workers' Compensation insurance. Requirements vary slightly by state, and we understand the compliance requirements for each. We ensure your coverage meets all state-specific regulations."
    },
    {
        question: "Can you help with multi-state Workers' Comp compliance?",
        answer: "Absolutely! We specialize in multi-state operations across CA, TX, FL, and AZ. We understand each state's requirements and provide seamless coverage for businesses with employees in multiple states. Fast COI turnaround for all locations."
    },
    {
        question: "What does Workers' Compensation insurance cover?",
        answer: "Workers' Comp covers medical expenses, rehabilitation costs, lost wages, and disability benefits for employees who get injured or become ill due to their job. It also provides death benefits to dependents if a work-related incident results in an employee's death."
    },
    {
        question: "How much does Workers' Compensation insurance cost?",
        answer: "Costs vary based on your industry, payroll size, claims history, state location, and the types of work your employees perform. With 20+ years of experience and relationships with multiple carriers, we find competitive rates for multi-state operations. Contact us for a customized quote."
    },
    {
        question: "Do you offer fast Certificate of Insurance (COI) turnaround?",
        answer: "Yes! We provide fast COI turnaround for all states. Our tech-forward digital policy management system streamlines the process, ensuring you get the documentation you need quickly for contracts, clients, and compliance requirements."
    },
    {
        question: "Can you help with pay-as-you-go Workers' Comp?",
        answer: "Yes! We offer pay-as-you-go Workers' Comp programs that can help manage cash flow. Instead of large upfront premiums, you pay based on actual payroll, making budgeting easier for growing businesses across all four states."
    },
    {
        question: "What industries do you specialize in for Workers' Comp?",
        answer: "We serve 50+ industries including construction, restaurants, retail, logistics, warehousing, manufacturing, and professional services. With 20+ years of experience, we understand the unique risks and classification codes for each industry across all states."
    },
    {
        question: "How quickly can I get multi-state Workers' Compensation coverage?",
        answer: "With our tech-forward approach, we can often provide coverage quickly. Our digital systems and multiple carrier relationships allow for fast quotes and policy issuance across CA, TX, FL, and AZ."
    }
]

export default function WorkersCompensation() {
    const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Workers' Compensation Insurance">
                <div>
                    <div className="serviceleft-section-area section-padding5">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-1" />
                                <div className="col-lg-10">
                                    <div className="serviceauthior-area p-0">
                                        <img src="/assets/images/newdecade/newdecade_45.jpg" alt="Workers' Compensation Insurance" />
                                        <h1 className="font-lora font-40 lineh-50 weight-600 color-29 margin-b20 margin-t28">
                                            Multi-State Workers' Compensation Insurance
                                        </h1>
                                        <p className="font-ks font-16 lineh-26 weight-500 color-30 margin-b20">
                                            Protect your employees and your business with comprehensive Workers' Compensation insurance from New Decade. Licensed across California, Texas, Florida, and Arizona, we provide coverage that meets all state requirements while protecting your business from costly claims and penalties. Fast COI turnaround and digital policy management.
                                        </p>
                                        <p className="font-ks font-16 lineh-26 weight-500 color-30">
                                            With 20+ years of experience serving 50+ industries, Workers' Compensation is essential protection for multi-state employers. Our tech-forward approach streamlines compliance across all four states. We work with top-rated carriers to find you competitive rates and comprehensive coverage tailored to your industry.
                                        </p>
                                        <div className="border30" />

                                        <h1 className="font-lora font-40 lineh-50 weight-600 color-29 margin-b20">
                                            Multi-State Compliance & Employee Protection
                                        </h1>
                                        <p className="font-ks font-16 lineh-26 weight-500 color-30">
                                            Workers' Compensation protects both employers and employees across CA, TX, FL, and AZ. When an employee is injured on the job, Workers' Comp provides medical care and wage replacement while protecting your business from lawsuits. We ensure seamless compliance for multi-state operations.
                                        </p>

                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="approach-area margin-t32">
                                                    <div className="approach-img">
                                                        <img src="/assets/images/icons/stragig1.svg" alt="" className="approahimages ts" />
                                                    </div>
                                                    <div className="approach-text">
                                                        <Link href="#" className="font-lora font-20 weight-600 color-29 margin-b ts d-inline-block">
                                                            Multi-State Compliance
                                                        </Link>
                                                        <p className="fontks font-16 lineh-26 weight-500 color-30 ts">
                                                            We ensure your Workers' Comp meets all requirements across CA, TX, FL, and AZ. Fast COI turnaround and expert compliance guidance for multi-state operations.
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
                                                            50+ Industries Served
                                                        </Link>
                                                        <p className="fontks font-16 lineh-26 weight-500 color-30 ts">
                                                            20+ years of expertise serving construction, logistics, retail, restaurants, and professional services. Tech-forward digital management and 100% client advocacy.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="border30" />

                                        <h1 className="font-lora font-40 lineh-50 weight-600 color-29 margin-b20 margin-t28">
                                            What Workers' Compensation Covers
                                        </h1>
                                        <p className="font-ks font-16 lineh-26 weight-500 color-30 margin-b20">
                                            Comprehensive Workers' Compensation insurance provides essential protection for work-related injuries and illnesses. Here's what your policy covers:
                                        </p>

                                        <div className="row">
                                            <div className="col-lg-4">
                                                <div className="checkservice-area">
                                                    <p className="font-ks font-16 lineh-16 weight-600 color-29">
                                                        <span><img src="/assets/images/icons/check1.png" alt="" /></span>
                                                        Medical Expenses
                                                    </p>
                                                </div>
                                                <div className="checkservice-area">
                                                    <p className="font-ks font-16 lineh-16 weight-600 color-29">
                                                        <span><img src="/assets/images/icons/check1.png" alt="" /></span>
                                                        Lost Wages
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="checkservice-area">
                                                    <p className="font-ks font-16 lineh-16 weight-600 color-29">
                                                        <span><img src="/assets/images/icons/check1.png" alt="" /></span>
                                                        Disability Benefits
                                                    </p>
                                                </div>
                                                <div className="checkservice-area">
                                                    <p className="font-ks font-16 lineh-16 weight-600 color-29">
                                                        <span><img src="/assets/images/icons/check1.png" alt="" /></span>
                                                        Rehabilitation Services
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="checkservice-area">
                                                    <p className="font-ks font-16 lineh-16 weight-600 color-29">
                                                        <span><img src="/assets/images/icons/check1.png" alt="" /></span>
                                                        Death Benefits
                                                    </p>
                                                </div>
                                                <div className="checkservice-area">
                                                    <p className="font-ks font-16 lineh-16 weight-600 color-29">
                                                        <span><img src="/assets/images/icons/check1.png" alt="" /></span>
                                                        Legal Protection
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <p className="font-ks font-16 lineh-26 weight-500 color-30">
                                            Don't risk penalties or leave your employees unprotected. Contact New Decade today for a free Workers' Compensation quote customized to your business needs.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*<ViewMoreServices currentService="/services/workers-comp" />*/}
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
