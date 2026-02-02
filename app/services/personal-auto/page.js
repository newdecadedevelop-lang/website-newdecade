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
        question: "Can I get insurance with a bad driving record?",
        answer: "Yes! We welcome all drivers, including those with tickets, accidents, or DUI. We specialize in finding coverage for drivers with challenging driving histories. We work with multiple carriers to find you affordable options, including SR-22 filing if needed."
    },
    {
        question: "What is SR-22 insurance and do you provide it?",
        answer: "SR-22 is a certificate proving you carry auto insurance, often required by state DMVs after certain violations. Yes, we provide SR-22 filing across CA, TX, FL, and AZ and help you get back on the road legally. We'll handle all the paperwork and file it directly with your state's DMV."
    },
    {
        question: "How quickly can I get a quote?",
        answer: "Getting a quote is fast! Contact us toll-free at 1-800-250-5540. We typically provide quotes the same day, and coverage can start immediately."
    },
    {
        question: "Do you offer bilingual service?",
        answer: "Yes! We're proud to offer bilingual service in English and Spanish. Hablamos Español! Our team is here to help you in the language you're most comfortable with."
    },
    {
        question: "What types of auto coverage do you offer?",
        answer: "We offer comprehensive auto insurance including liability, collision, comprehensive, uninsured/underinsured motorist, medical payments, and more. We'll help you understand each coverage type and build a policy that fits your needs and budget."
    },
    {
        question: "Can I add my teen driver to my policy?",
        answer: "Absolutely! We can add teen drivers to your policy and help you find the best rates. We'll also discuss available discounts, such as good student discounts, to help keep your premiums affordable."
    },
    {
        question: "Do you offer payment plans?",
        answer: "Yes, we offer flexible payment plans to fit your budget. You can choose monthly, quarterly, or annual payment options. Contact us to discuss what works best for you."
    },
    {
        question: "What if I need to file a claim?",
        answer: "We're here to help! Contact us immediately if you need to file a claim, and we'll guide you through the process. We work directly with the insurance carriers to ensure your claim is processed quickly and smoothly."
    }
]

export default function PersonalAutoInsurance() {
    const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Personal Auto Insurance">
                <div>
                    {/* Service Details */}
                    <div className="serviceleft-section-area section-padding5">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-1" />
                                <div className="col-lg-10">
                                    <div className="serviceauthior-area p-0">
                                        <img src="/assets/images/newdecade/newdecade_15.jpg" alt="Personal Auto Insurance" />
                                        <h1 className="font-lora font-40 lineh-50 weight-600 color-29 margin-b20 margin-t28">
                                            Personal Auto Insurance
                                        </h1>
                                        <p className="font-ks font-16 lineh-26 weight-500 color-30 margin-b20">
                                            At New Decade, we provide personal auto insurance across California, Texas, Florida, and Arizona. While our primary specialty is commercial insurance, we deliver expert personal auto coverage with the same dedication and competitive rates. Whether you have a perfect driving record or need SR-22 coverage, we work with multiple carriers to find you the best options.
                                        </p>
                                        <p className="font-ks font-16 lineh-26 weight-500 color-30">
                                            Founded in 2005 with 20+ years of experience and 150K+ clients served, we understand that everyone deserves affordable, quality insurance across all four states we serve—no matter their driving history.
                                        </p>
                                        <div className="border30" />

                                        <h1 className="font-lora font-40 lineh-50 weight-600 color-29 margin-b20">
                                            Why Choose New Decade for Auto Insurance?
                                        </h1>
                                        <p className="font-ks font-16 lineh-26 weight-500 color-30">
                                            While our primary focus is commercial insurance, we bring the same dedication and expertise to personal auto coverage. Our experienced team works with multiple carriers across CA, TX, FL, and AZ to compare rates and find you the best coverage at competitive prices.
                                        </p>

                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="approach-area margin-t32">
                                                    <div className="approach-img">
                                                        <img src="/assets/images/icons/stragig1.svg" alt="" className="approahimages ts" />
                                                    </div>
                                                    <div className="approach-text">
                                                        <Link href="#" className="font-lora font-20 weight-600 color-29 margin-b ts d-inline-block">
                                                            All Drivers Welcome
                                                        </Link>
                                                        <p className="fontks font-16 lineh-26 weight-500 color-30 ts">
                                                            We specialize in high-risk drivers, including those with tickets, accidents, DUI, or SR-22 requirements.
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
                                                            Bilingual Service
                                                        </Link>
                                                        <p className="fontks font-16 lineh-26 weight-500 color-30 ts">
                                                            English & Spanish speakers available. Hablamos Español! We're here to help in your preferred language.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="border30" />

                                        <h1 className="font-lora font-40 lineh-50 weight-600 color-29 margin-b20 margin-t28">
                                            Coverage Options
                                        </h1>
                                        <p className="font-ks font-16 lineh-26 weight-500 color-30 margin-b20">
                                            We offer comprehensive auto insurance solutions tailored to your needs. From basic liability to full coverage, we'll help you understand your options and build the right policy for your situation and budget.
                                        </p>

                                        <div className="row">
                                            <div className="col-lg-4">
                                                <div className="checkservice-area">
                                                    <p className="font-ks font-16 lineh-16 weight-600 color-29">
                                                        <span><img src="/assets/images/icons/check1.png" alt="" /></span>
                                                        Liability Coverage
                                                    </p>
                                                </div>
                                                <div className="checkservice-area">
                                                    <p className="font-ks font-16 lineh-16 weight-600 color-29">
                                                        <span><img src="/assets/images/icons/check1.png" alt="" /></span>
                                                        Collision Coverage
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="checkservice-area">
                                                    <p className="font-ks font-16 lineh-16 weight-600 color-29">
                                                        <span><img src="/assets/images/icons/check1.png" alt="" /></span>
                                                        Comprehensive Coverage
                                                    </p>
                                                </div>
                                                <div className="checkservice-area">
                                                    <p className="font-ks font-16 lineh-16 weight-600 color-29">
                                                        <span><img src="/assets/images/icons/check1.png" alt="" /></span>
                                                        Uninsured Motorist
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
                                                        SR-22 Filing
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <p className="font-ks font-16 lineh-26 weight-500 color-30">
                                            Your satisfaction is our priority. With over 20 years of experience serving drivers across California, Texas, Florida, and Arizona, we're here to provide the coverage you need at prices you can afford. Get your free quote today!
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* View More Services */}
                    {/*<ViewMoreServices currentService="/services/personal-auto" />*/}

                    {/* FAQ */}
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
