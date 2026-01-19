'use client'
import { useState } from "react"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import ViewMoreServices from "@/components/sections/services/ViewMoreServices"
import FAQ from "@/components/sections/services/FAQ"
import InsuranceQuoteModal from "@/components/modals/InsuranceQuoteModal"

const faqs = [
    {
        question: "Is Workers' Compensation insurance required in California?",
        answer: "Yes! California law requires virtually all employers to carry Workers' Compensation insurance, even if you only have one employee. This includes full-time, part-time, and even some independent contractors in certain situations."
    },
    {
        question: "What does Workers' Compensation insurance cover?",
        answer: "Workers' Comp covers medical expenses, rehabilitation costs, lost wages, and disability benefits for employees who get injured or become ill due to their job. It also provides death benefits to dependents if a work-related incident results in an employee's death."
    },
    {
        question: "How much does Workers' Compensation insurance cost?",
        answer: "Costs vary based on your industry, payroll size, claims history, and the types of work your employees perform. Higher-risk industries typically have higher premiums. Contact us for a customized quote based on your specific business needs."
    },
    {
        question: "What happens if I don't have Workers' Compensation insurance?",
        answer: "Operating without required Workers' Comp insurance in California is illegal and can result in serious penalties, including fines up to $100,000, criminal charges, and stop-work orders from the state. You could also be personally liable for any employee injuries."
    },
    {
        question: "Do I need Workers' Comp if I'm a sole proprietor with no employees?",
        answer: "If you truly have no employees, Workers' Comp is generally not required. However, once you hire your first employee—even part-time—you must carry coverage. Some sole proprietors choose to purchase it for themselves for added protection."
    },
    {
        question: "Can I get Workers' Comp for seasonal or temporary employees?",
        answer: "Yes, Workers' Compensation coverage is required for all employees, including seasonal, temporary, and part-time workers. We can help you structure a policy that accommodates fluctuating employee counts throughout the year."
    },
    {
        question: "How quickly can I get Workers' Compensation coverage?",
        answer: "In many cases, we can provide coverage quickly—often within 24-48 hours. However, the exact timeframe depends on the complexity of your business and the information required by the insurance carrier."
    },
    {
        question: "What information do I need to get a Workers' Comp quote?",
        answer: "We'll need basic information about your business including: number of employees, estimated annual payroll, job classifications, business operations, and your claims history (if applicable). We'll guide you through the entire process."
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
                                        <img src="/assets/images/newdecade/newdecade_18.jpg" alt="Workers' Compensation Insurance" />
                                        <h1 className="font-lora font-40 lineh-50 weight-600 color-29 margin-b20 margin-t28">
                                            Workers' Compensation Insurance
                                        </h1>
                                        <p className="font-ks font-16 lineh-26 weight-500 color-30 margin-b20">
                                            Protect your employees and your business with comprehensive Workers' Compensation insurance from New Decade. As a licensed California insurance broker, we provide coverage that meets state requirements while protecting your business from costly claims and penalties.
                                        </p>
                                        <p className="font-ks font-16 lineh-26 weight-500 color-30">
                                            Workers' Compensation insurance is not just a legal requirement in California—it's essential protection for both your employees and your business. We work with top-rated carriers to find you competitive rates and comprehensive coverage tailored to your industry.
                                        </p>
                                        <div className="border30" />

                                        <h1 className="font-lora font-40 lineh-50 weight-600 color-29 margin-b20">
                                            Essential Protection for California Employers
                                        </h1>
                                        <p className="font-ks font-16 lineh-26 weight-500 color-30">
                                            California's Workers' Compensation system protects both employers and employees. When an employee is injured on the job, Workers' Comp provides medical care and wage replacement while protecting your business from lawsuits.
                                        </p>

                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="approach-area margin-t32">
                                                    <div className="approach-img">
                                                        <img src="/assets/images/icons/stragig1.svg" alt="" className="approahimages ts" />
                                                    </div>
                                                    <div className="approach-text">
                                                        <Link href="#" className="font-lora font-20 weight-600 color-29 margin-b ts d-inline-block">
                                                            State Compliance
                                                        </Link>
                                                        <p className="fontks font-16 lineh-26 weight-500 color-30 ts">
                                                            We ensure your Workers' Comp policy meets all California state requirements, keeping you compliant and protected.
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
                                                            Industry Expertise
                                                        </Link>
                                                        <p className="fontks font-16 lineh-26 weight-500 color-30 ts">
                                                            We understand the unique risks of different industries and provide tailored coverage for your specific business operations.
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

                    <ViewMoreServices currentService="/services/workers-comp" />
                    <FAQ faqs={faqs} />

                    <div className="cta5-section-area section-padding4">
                        <img src="/assets/images/elementor/elementor72.png" alt="" className="elementors72" />
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="cta5-auhtor6-area">
                                        <h1 className="font-lora font-48 lineh-52 color weight-600 margin-b text-capitalize">
                                            Get Workers' Comp Coverage Today
                                        </h1>
                                        <p className="font-ks font-16 lineh-26 weight-500 color-21">
                                            Protect your employees and comply with California law. Call 1-800-250-5540 for a free quote.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-2" />
                                <div className="col-lg-4">
                                    <div className="cta5-btn5-sexction">
                                        <button
                                            onClick={() => setIsQuoteModalOpen(true)}
                                            className="font-ks font-16 lineh-16 weight-700 color margin-t32 contcat5"
                                            style={{ cursor: 'pointer' }}
                                        >
                                            Get Free Quote
                                            <span><i className="fa-solid fa-arrow-right" /></span>
                                        </button>
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

            <InsuranceQuoteModal
                isOpen={isQuoteModalOpen}
                onClose={() => setIsQuoteModalOpen(false)}
            />
        </>
    )
}
