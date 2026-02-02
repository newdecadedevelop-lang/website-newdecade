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
        question: "What types of commercial vehicles do you insure?",
        answer: "We insure all types of commercial vehicles across CA, TX, FL, and AZ including delivery vans, box trucks, semi-trucks, service vehicles, company cars, and entire commercial fleets. From single vehicles to multi-state operations, we provide comprehensive coverage."
    },
    {
        question: "Do you cover multi-state fleet operations?",
        answer: "Absolutely! As multi-state specialists, we provide seamless commercial auto coverage across California, Texas, Florida, and Arizona. We understand the complexities of interstate commerce and DOT requirements."
    },
    {
        question: "What's included in commercial auto insurance?",
        answer: "Coverage typically includes liability, physical damage, uninsured/underinsured motorist, medical payments, and cargo protection. We customize packages based on your fleet size, vehicle types, and operational needs across all states we serve."
    },
    {
        question: "How is commercial auto different from personal auto?",
        answer: "Commercial auto provides higher liability limits, covers business use, protects employees driving company vehicles, and includes specialized coverages like cargo insurance and hired/non-owned auto coverage that personal policies don't offer."
    },
    {
        question: "Can you help with DOT requirements and compliance?",
        answer: "Yes! We specialize in helping trucking and logistics companies meet DOT requirements across multiple states. We provide fast COI turnaround and expert guidance on compliance for interstate operations."
    },
    {
        question: "What is the cost for fleet insurance?",
        answer: "Costs vary based on fleet size, vehicle types, driver records, cargo, and operating territories. With 20+ years of experience and multiple carrier relationships, we find competitive rates for multi-state commercial operations. Contact us for a customized quote."
    },
    {
        question: "Do you offer cargo insurance?",
        answer: "Yes! We provide comprehensive cargo insurance for goods in transit across all four states we serve. Essential protection for trucking companies, freight forwarders, and logistics operations."
    },
    {
        question: "Can you insure delivery and logistics companies?",
        answer: "Absolutely! We specialize in delivery services, courier companies, last-mile logistics, and freight operations. We understand the unique risks and provide tailored coverage for your transportation business across CA, TX, FL, and AZ."
    }
]

export default function CommercialInsurance() {
    const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Commercial Auto / Fleet Coverage">
                <div>
                    <div className="serviceleft-section-area section-padding5">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-1" />
                                <div className="col-lg-10">
                                    <div className="serviceauthior-area p-0">
                                        <img src="/assets/images/newdecade/newdecade_44.jpg" alt="Commercial Fleet Coverage" />
                                        <h1 className="font-lora font-40 lineh-50 weight-600 color-29 margin-b20 margin-t28">
                                            Commercial Auto & Fleet Coverage: Our #1 Specialty
                                        </h1>
                                        <p className="font-ks font-16 lineh-26 weight-500 color-30 margin-b20">
                                            New Decade Insurance specializes in commercial auto and fleet coverage across California, Texas, Florida, and Arizona. From single commercial vehicles to multi-state fleet operations, we protect delivery services, logistics companies, trucking operations, and business transportation with 20+ years of expertise.
                                        </p>
                                        <p className="font-ks font-16 lineh-26 weight-500 color-30">
                                            As commercial auto specialists, we understand the unique challenges of managing fleet risk, DOT compliance, and multi-state operations. We work with top-rated carriers to deliver comprehensive coverage that keeps your business moving across all four states we serve.
                                        </p>
                                        <div className="border30" />

                                        <h1 className="font-lora font-40 lineh-50 weight-600 color-29 margin-b20">
                                            Multi-State Fleet Protection You Can Trust
                                        </h1>
                                        <p className="font-ks font-16 lineh-26 weight-500 color-30">
                                            Whether you're managing a small delivery fleet or coordinating interstate trucking operations, our commercial auto insurance provides the protection you need. We offer flexible, scalable coverage options tailored to your fleet size, vehicle types, and operational territories across CA, TX, FL, and AZ.
                                        </p>

                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="approach-area margin-t32">
                                                    <div className="approach-img">
                                                        <img src="/assets/images/icons/stragig1.svg" alt="" className="approahimages ts" />
                                                    </div>
                                                    <div className="approach-text">
                                                        <Link href="#" className="font-lora font-20 weight-600 color-29 margin-b ts d-inline-block">
                                                            Multi-State Expertise
                                                        </Link>
                                                        <p className="fontks font-16 lineh-26 weight-500 color-30 ts">
                                                            Licensed and experienced in CA, TX, FL, and AZ. We understand DOT requirements and interstate commerce regulations across all four states.
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
                                                            Scalable Fleet Solutions
                                                        </Link>
                                                        <p className="fontks font-16 lineh-26 weight-500 color-30 ts">
                                                            From 1 vehicle to 100+ trucks. Our tech-forward approach provides fast COI turnaround and digital policy management for growing fleets.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="border30" />

                                        <h1 className="font-lora font-40 lineh-50 weight-600 color-29 margin-b20 margin-t28">
                                            Commercial Auto Coverage Options
                                        </h1>
                                        <p className="font-ks font-16 lineh-26 weight-500 color-30 margin-b20">
                                            Comprehensive protection for all types of commercial vehicles and fleet operations across CA, TX, FL, and AZ. We offer specialized coverage for delivery, logistics, and transportation businesses.
                                        </p>

                                        <div className="row">
                                            <div className="col-lg-4">
                                                <div className="checkservice-area">
                                                    <p className="font-ks font-16 lineh-16 weight-600 color-29">
                                                        <span><img src="/assets/images/icons/check1.png" alt="" /></span>
                                                        Commercial Auto Liability
                                                    </p>
                                                </div>
                                                <div className="checkservice-area">
                                                    <p className="font-ks font-16 lineh-16 weight-600 color-29">
                                                        <span><img src="/assets/images/icons/check1.png" alt="" /></span>
                                                        Physical Damage Coverage
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="checkservice-area">
                                                    <p className="font-ks font-16 lineh-16 weight-600 color-29">
                                                        <span><img src="/assets/images/icons/check1.png" alt="" /></span>
                                                        Cargo Insurance
                                                    </p>
                                                </div>
                                                <div className="checkservice-area">
                                                    <p className="font-ks font-16 lineh-16 weight-600 color-29">
                                                        <span><img src="/assets/images/icons/check1.png" alt="" /></span>
                                                        Fleet Coverage
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="checkservice-area">
                                                    <p className="font-ks font-16 lineh-16 weight-600 color-29">
                                                        <span><img src="/assets/images/icons/check1.png" alt="" /></span>
                                                        Hired & Non-Owned Auto
                                                    </p>
                                                </div>
                                                <div className="checkservice-area">
                                                    <p className="font-ks font-16 lineh-16 weight-600 color-29">
                                                        <span><img src="/assets/images/icons/check1.png" alt="" /></span>
                                                        Multi-State Operations
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <p className="font-ks font-16 lineh-26 weight-500 color-30">
                                            Protect your fleet and commercial vehicles with comprehensive multi-state coverage. Contact us today for a free quote customized to your transportation business needs across CA, TX, FL, and AZ.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*<ViewMoreServices currentService="/services/commercial" />*/}
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
