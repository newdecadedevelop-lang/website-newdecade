'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from "react"
import InsuranceQuoteModal from "@/components/modals/InsuranceQuoteModal"

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
                                            Have questions about our insurance services? We're here to help. Find answers to the most common questions below, or contact us directly for personalized assistance.
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
                                                                We've been serving Southern California since 2005—over 20 years of experience helping drivers find the right coverage. We've grown from a small startup to operating two high-performing offices in the Greater LA area, maintaining our commitment to personalized service.
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
                                                                ¡Sí! We're fully bilingual and offer all our services in both English and Spanish. This is especially important to us as we primarily serve the Hispanic community. Hablamos Español con orgullo.
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
                                                                We are proud to serve all of California! We have two convenient office locations: Los Angeles (2215 S. Vermont Ave) and Panorama City (14417 Roscoe Blvd). As a licensed insurance broker throughout California, we provide coverage and service to clients statewide.
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
                                                                Yes, we're an independent insurance brokerage. This means we work with multiple top-rated insurance carriers to find you the best coverage at the most competitive rates—we're not limited to just one company.
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
                                                                Getting a quote is easy! Call toll-free 1-800-250-5540, or contact our offices: Panorama City (818) 482-2888 or Los Angeles (323) 454-2444. Email info@allcentury.com or visit us. Open Mon-Fri 9am-7pm, Sat 9am-2pm.
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
                                                                Absolutely! This is one of our specialties. We work with drivers of all risk levels—from perfect records to those with tickets, accidents, DUIs, or suspended licenses. We have strong relationships with carriers who specialize in diverse driving histories and can find you affordable coverage when others might turn you away.
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
                                                                We handle SR-22 filings regularly—it's one of our core services. An SR-22 is a certificate of financial responsibility required by the California DMV after certain violations like DUI, driving without insurance, or multiple tickets. We file it directly with the DMV and help you get back on the road legally, often the same day.
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
                                                                We insure California businesses of all types and sizes: bars & restaurants, beauty salons & spas, contractors & construction trades, retail shops, real estate offices, transportation services, professional services, warehouses, home-based businesses, and startups. If your business exists, there's a good chance we cover it. Each industry has unique needs, and we have experience in them all.
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
                                                                Very quickly! We understand that you can't afford to lose a job because of paperwork delays. We can often provide Certificates of Insurance (COI) the same day, sometimes within hours. This quick turnaround is one of the main reasons contractors and small business owners choose us.
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
                                                                It depends on how you use it. If you regularly transport goods, equipment, tools, or clients for business purposes—or if your vehicle has business signage—you likely need commercial auto coverage. Personal auto policies typically exclude business use. This is especially important for contractors, delivery drivers, and rideshare drivers. We can assess your situation and recommend the right coverage.
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
                                                                Yes, if you have employees, California law requires workers' compensation insurance. We can help you stay compliant and protect both your workers and your business.
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
                                                                Contact us immediately at 1-800-250-5540, Panorama City (818) 482-2888, or Los Angeles (323) 454-2444. We work directly with the insurance carriers to help facilitate your claim and ensure it's handled properly.
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


                    {/* Final CTA */}
                    <div className="cta5-section-area section-padding4">
                        <img src="/assets/images/elementor/elementor72.png" alt="" className="elementors72" />
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="cta5-auhtor6-area">
                                        <h1 className="font-lora font-48 lineh-52 color weight-600 margin-b text-capitalize">
                                            Get Your Free Insurance Quote Today
                                        </h1>
                                        <p className="font-ks font-16 lineh-26 weight-500 color-21">
                                            We believe that informed clients make better insurance decisions. Our experienced team is here to help you find the right coverage at the best price.
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
