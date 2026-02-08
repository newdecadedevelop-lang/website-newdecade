'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from "react"
import InsuranceQuoteModal from "@/components/modals/InsuranceQuoteModal"
import Cta9 from "@/components/sections/Cta9"

export default function FAQs() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })

    const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Frequently Asked Questions">
                <div>
                    {/* General Questions Section */}
                    <div className="serviceleft-section-area section-padding5">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-5">
                                    <div className="faq-intro">
                                        <h4 className="font-lora font-18 lineh-18 weight-600 color-h1 margin-b20">FAQs</h4>
                                        <h1 className="font-lora font-48 lineh-52 weight-600 color-29 margin-b24">
                                            Frequently Asked Questions
                                        </h1>
                                        <p className="font-ks font-16 lineh-26 weight-500 color-30 margin-b32">
                                            Have questions about our multi-state insurance services? With 20+ years of experience serving California, Texas, Florida, and Arizona, we're here to help. Find answers to the most common questions below, or contact us directly for personalized assistance.
                                        </p>
                                        <div className="theme-btn-area">
                                            <Link href="/contact" className="theme6-btn6 bakgrnd5 font-ks lineh-16 weight-700 color font-16">
                                                Contact Us
                                                <span><i className="fa-solid fa-arrow-right" /></span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="faq-section-wrapper">
                                        <h5 className="font-lora font-24 lineh-30 weight-600 color-29 margin-b24">General Questions</h5>
                                        <div className="accordian-area accourbutton">
                                            <div className="accordion accordian4" id="generalAccordion">
                                                <div className="accordion-item borderlefts">
                                                    <h2 className="accordion-header" onClick={() => handleToggle(1)}>
                                                        <button className={isActive.key == 1 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                                            How long has New Decade Insurance been in business?
                                                        </button>
                                                    </h2>
                                                    <div className={isActive.key == 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                        <div className="accordion-body">
                                                            <p className="font-ks font-16 lineh-26 weight-500 color-30">
                                                                While New Decade Insurance officially launched its multi-state platform in 2025, our foundation is built on over 20 years of industry leadership. Our founding team has been serving the insurance needs of businesses since 2005, bringing two decades of deep-rooted expertise to every policy we write today.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="accordion-item borderlefts">
                                                    <h2 className="accordion-header" onClick={() => handleToggle(2)}>
                                                        <button className={isActive.key == 2 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                                            Do you speak Spanish?
                                                        </button>
                                                    </h2>
                                                    <div className={isActive.key == 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                        <div className="accordion-body">
                                                            <p className="font-ks font-16 lineh-26 weight-500 color-30">
                                                                ¡Sí! We're fully bilingual and offer all our services in both English and Spanish across all four states we serve (CA, TX, FL, AZ). This is especially important to us as we primarily serve the Hispanic community. Hablamos Español con orgullo.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="accordion-item borderlefts">
                                                    <h2 className="accordion-header" onClick={() => handleToggle(3)}>
                                                        <button className={isActive.key == 3 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                                            What areas do you serve?
                                                        </button>
                                                    </h2>
                                                    <div className={isActive.key == 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                        <div className="accordion-body">
                                                            <p className="font-ks font-16 lineh-26 weight-500 color-30">
                                                                We are proud to serve California, Texas, Florida, and Arizona! Our headquarters is in Los Angeles (2215 S. Vermont Ave Unit 103, Los Angeles, CA 90007). As a licensed insurance broker across all four states, we provide comprehensive multi-state coverage with tech-forward digital policy management and fast COI turnaround for commercial clients.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="accordion-item borderlefts">
                                                    <h2 className="accordion-header" onClick={() => handleToggle(4)}>
                                                        <button className={isActive.key == 4 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                                            Are you an independent agency?
                                                        </button>
                                                    </h2>
                                                    <div className={isActive.key == 4 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                        <div className="accordion-body">
                                                            <p className="font-ks font-16 lineh-26 weight-500 color-30">
                                                                Yes, we're an independent insurance brokerage specializing in commercial insurance. This means we work with multiple top-rated insurance carriers across CA, TX, FL, and AZ to find you the best coverage at the most competitive rates—we're not limited to just one company. With 100% commitment to client advocacy, we always put your interests first.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="accordion-item borderlefts m-0">
                                                    <h2 className="accordion-header" onClick={() => handleToggle(5)}>
                                                        <button className={isActive.key == 5 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                                            How do I get a free quote?
                                                        </button>
                                                    </h2>
                                                    <div className={isActive.key == 5 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                        <div className="accordion-body">
                                                            <p className="font-ks font-16 lineh-26 weight-500 color-30">
                                                                Getting a quote is easy! Call us toll-free at 888-585-9910 or email info@newdecadeinsurance.com. Our tech-forward approach provides fast quotes for commercial operations across CA, TX, FL, and AZ. For commercial clients, we offer same-day COI turnaround and digital policy management.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Auto Insurance & Business Insurance Questions */}
                    <div className="serviceleftblog-section-area section-padding5 bg_light_1">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="faq-section-wrapper">
                                        <h4 className="font-lora font-18 lineh-18 weight-600 color-h1 margin-b12">Auto Insurance</h4>
                                        <h2 className="font-lora font-32 lineh-40 weight-600 color-29 margin-b24">Auto Insurance Questions</h2>

                                        <div className="accordian-area accourbutton">
                                            <div className="accordion accordian4" id="autoAccordion">
                                                <div className="accordion-item borderlefts">
                                                    <h2 className="accordion-header" onClick={() => handleToggle(6)}>
                                                        <button className={isActive.key == 6 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                                            Can I get insurance if I have tickets or accidents on my record?
                                                        </button>
                                                    </h2>
                                                    <div className={isActive.key == 6 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                        <div className="accordion-body">
                                                            <p className="font-ks font-16 lineh-26 weight-500 color-30">
                                                                Absolutely! While our primary specialty is commercial insurance, we also provide personal auto coverage across CA, TX, FL, and AZ. We work with drivers of all risk levels—from perfect records to those with tickets, accidents, DUIs, or suspended licenses. We have strong relationships with carriers who specialize in diverse driving histories and can find you affordable coverage when others might turn you away.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="accordion-item borderlefts">
                                                    <h2 className="accordion-header" onClick={() => handleToggle(7)}>
                                                        <button className={isActive.key == 7 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                                            What if I need an SR-22 filing?
                                                        </button>
                                                    </h2>
                                                    <div className={isActive.key == 7 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                        <div className="accordion-body">
                                                            <p className="font-ks font-16 lineh-26 weight-500 color-30">
                                                                We handle SR-22 filings regularly across all states we serve. An SR-22 is a certificate of financial responsibility often required by state DMVs after certain violations like DUI, driving without insurance, or multiple tickets. We file it directly with the DMV in CA, TX, FL, or AZ and help you get back on the road legally, often the same day.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="accordion-item borderlefts">
                                                    <h2 className="accordion-header" onClick={() => handleToggle(8)}>
                                                        <button className={isActive.key == 8 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                                            Do you offer coverage for young or new drivers?
                                                        </button>
                                                    </h2>
                                                    <div className={isActive.key == 8 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                        <div className="accordion-body">
                                                            <p className="font-ks font-16 lineh-26 weight-500 color-30">
                                                                Yes! We understand that insuring young or new drivers can be expensive. We'll work with you to find the most affordable options while ensuring adequate protection.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="accordion-item borderlefts m-0">
                                                    <h2 className="accordion-header" onClick={() => handleToggle(9)}>
                                                        <button className={isActive.key == 9 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                                            Can I insure multiple vehicles?
                                                        </button>
                                                    </h2>
                                                    <div className={isActive.key == 9 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                        <div className="accordion-body">
                                                            <p className="font-ks font-16 lineh-26 weight-500 color-30">
                                                                Yes, and you may qualify for multi-vehicle discounts! We can bundle all your vehicles under one policy for convenience and potential savings.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="faq-section-wrapper">
                                        <h4 className="font-lora font-18 lineh-18 weight-600 color-h1 margin-b12">Business Insurance</h4>
                                        <h2 className="font-lora font-32 lineh-40 weight-600 color-29 margin-b24">Business Insurance Questions</h2>

                                        <div className="accordian-area accourbutton">
                                            <div className="accordion accordian4" id="businessAccordion">
                                                <div className="accordion-item borderlefts">
                                                    <h2 className="accordion-header" onClick={() => handleToggle(10)}>
                                                        <button className={isActive.key == 10 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                                            What types of businesses do you insure?
                                                        </button>
                                                    </h2>
                                                    <div className={isActive.key == 10 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                        <div className="accordion-body">
                                                            <p className="font-ks font-16 lineh-26 weight-500 color-30">
                                                                We specialize in commercial insurance across CA, TX, FL, and AZ, serving 50+ industries including: commercial fleet operations (our #1 specialty), delivery & logistics, trucking companies, construction, contractors, restaurants, retail, warehousing, manufacturing, professional services, and more. With 20+ years of experience and 150K+ clients served, we understand the unique needs of each industry and provide tailored coverage with fast COI turnaround.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="accordion-item borderlefts">
                                                    <h2 className="accordion-header" onClick={() => handleToggle(11)}>
                                                        <button className={isActive.key == 11 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                                            How quickly can I get a Certificate of Insurance (COI)?
                                                        </button>
                                                    </h2>
                                                    <div className={isActive.key == 11 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                        <div className="accordion-body">
                                                            <p className="font-ks font-16 lineh-26 weight-500 color-30">
                                                                Very quickly! Fast COI turnaround is one of our key strengths. We understand that you can't afford to lose a job because of paperwork delays. With our tech-forward digital policy management system, we can often provide Certificates of Insurance (COI) the same day, sometimes within hours, for all four states we serve. This quick turnaround is one of the main reasons contractors, fleet operators, and small business owners choose us.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="accordion-item borderlefts">
                                                    <h2 className="accordion-header" onClick={() => handleToggle(12)}>
                                                        <button className={isActive.key == 12 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                                            Do I need commercial auto insurance for my personal vehicle?
                                                        </button>
                                                    </h2>
                                                    <div className={isActive.key == 12 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                        <div className="accordion-body">
                                                            <p className="font-ks font-16 lineh-26 weight-500 color-30">
                                                                Commercial auto insurance is our #1 specialty! If you regularly transport goods, equipment, tools, or clients for business purposes—or if your vehicle has business signage—you need commercial auto coverage across CA, TX, FL, or AZ. Personal auto policies typically exclude business use. This is especially important for contractors, delivery drivers, fleet operations, and logistics companies. We specialize in multi-state fleet coverage, DOT compliance, and cargo insurance. We can assess your situation and recommend the right coverage with fast COI turnaround.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="accordion-item borderlefts m-0">
                                                    <h2 className="accordion-header" onClick={() => handleToggle(13)}>
                                                        <button className={isActive.key == 13 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                                            Is workers' compensation required in California?
                                                        </button>
                                                    </h2>
                                                    <div className={isActive.key == 13 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                        <div className="accordion-body">
                                                            <p className="font-ks font-16 lineh-26 weight-500 color-30">
                                                                Yes! All four states we serve (CA, TX, FL, AZ) require virtually all employers to carry workers' compensation insurance. We specialize in multi-state Workers' Comp compliance, helping businesses stay compliant across state lines. With our tech-forward approach, we provide fast COI turnaround and expert guidance for multi-state operations, protecting both your workers and your business.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Policy & Claims and Renewal Questions */}
                    <div className="serviceleft-section-area section-padding5">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="faq-section-wrapper">
                                        <h4 className="font-lora font-18 lineh-18 weight-600 color-h1 margin-b12">Policy & Claims</h4>
                                        <h2 className="font-lora font-32 lineh-40 weight-600 color-29 margin-b24">Policy & Claims Questions</h2>

                                        <div className="accordian-area accourbutton">
                                            <div className="accordion accordian4" id="policyAccordion">
                                                <div className="accordion-item borderlefts">
                                                    <h2 className="accordion-header" onClick={() => handleToggle(14)}>
                                                        <button className={isActive.key == 14 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                                            How do I file a claim?
                                                        </button>
                                                    </h2>
                                                    <div className={isActive.key == 14 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                        <div className="accordion-body">
                                                            <p className="font-ks font-16 lineh-26 weight-500 color-30">
                                                                Contact us immediately at 888-585-9910 or email info@newdecadeinsurance.com. We work directly with the insurance carriers across CA, TX, FL, and AZ to help facilitate your claim and ensure it's handled properly. With 100% commitment to client advocacy, we'll guide you through the entire claims process.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="accordion-item borderlefts">
                                                    <h2 className="accordion-header" onClick={() => handleToggle(15)}>
                                                        <button className={isActive.key == 15 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                                            Can I make changes to my policy?
                                                        </button>
                                                    </h2>
                                                    <div className={isActive.key == 15 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                        <div className="accordion-body">
                                                            <p className="font-ks font-16 lineh-26 weight-500 color-30">
                                                                Yes! Life changes, and your insurance should change with it. Contact us anytime you need to add or remove vehicles, update drivers, change addresses, or adjust coverage.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="accordion-item borderlefts">
                                                    <h2 className="accordion-header" onClick={() => handleToggle(16)}>
                                                        <button className={isActive.key == 16 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                                            What payment options do you offer?
                                                        </button>
                                                    </h2>
                                                    <div className={isActive.key == 16 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                        <div className="accordion-body">
                                                            <p className="font-ks font-16 lineh-26 weight-500 color-30">
                                                                We offer flexible payment plans to fit your budget. Options typically include monthly, quarterly, semi-annual, or annual payments. We'll work with you to find a payment schedule that works best.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="accordion-item borderlefts m-0">
                                                    <h2 className="accordion-header" onClick={() => handleToggle(17)}>
                                                        <button className={isActive.key == 17 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                                            Do you offer discounts?
                                                        </button>
                                                    </h2>
                                                    <div className={isActive.key == 17 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                        <div className="accordion-body">
                                                            <p className="font-ks font-16 lineh-26 weight-500 color-30">
                                                                Yes! Available discounts vary by carrier and policy type but may include multi-policy discounts, good driver discounts, safety feature discounts, and more. We'll make sure you receive every discount you qualify for.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="faq-section-wrapper">
                                        <h4 className="font-lora font-18 lineh-18 weight-600 color-h1 margin-b12">Renewal & Cancellation</h4>
                                        <h2 className="font-lora font-32 lineh-40 weight-600 color-29 margin-b24">Renewal Questions</h2>

                                        <div className="accordian-area accourbutton">
                                            <div className="accordion accordian4" id="renewalAccordion">
                                                <div className="accordion-item borderlefts">
                                                    <h2 className="accordion-header" onClick={() => handleToggle(18)}>
                                                        <button className={isActive.key == 18 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                                            Will you remind me when my policy is up for renewal?
                                                        </button>
                                                    </h2>
                                                    <div className={isActive.key == 18 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                        <div className="accordion-body">
                                                            <p className="font-ks font-16 lineh-26 weight-500 color-30">
                                                                Absolutely! We proactively reach out to clients before their renewal dates to review coverage, shop for better rates if available, and ensure continuous protection. This personal outreach is one of the reasons our clients stay with us year after year.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="accordion-item borderlefts">
                                                    <h2 className="accordion-header" onClick={() => handleToggle(19)}>
                                                        <button className={isActive.key == 19 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                                            Can I cancel my policy if I need to?
                                                        </button>
                                                    </h2>
                                                    <div className={isActive.key == 19 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                        <div className="accordion-body">
                                                            <p className="font-ks font-16 lineh-26 weight-500 color-30">
                                                                Yes, policies can typically be cancelled, though timing and refunds vary by carrier and policy type. We recommend speaking with us first—we may be able to adjust your coverage or find a better solution.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="accordion-item borderlefts m-0">
                                                    <h2 className="accordion-header" onClick={() => handleToggle(20)}>
                                                        <button className={isActive.key == 20 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                                            What happens if I miss a payment?
                                                        </button>
                                                    </h2>
                                                    <div className={isActive.key == 20 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                        <div className="accordion-body">
                                                            <p className="font-ks font-16 lineh-26 weight-500 color-30">
                                                                Most carriers provide a grace period, but it's important to contact us immediately if you're having trouble making a payment. We can often work with you and the carrier to prevent a lapse in coverage.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


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
