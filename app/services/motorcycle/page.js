'use client'
import { useState } from "react"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import ViewMoreServices from "@/components/sections/services/ViewMoreServices"
import FAQ from "@/components/sections/services/FAQ"
import InsuranceQuoteModal from "@/components/modals/InsuranceQuoteModal"

const faqs = [
    {
        question: "What does motorcycle insurance cover?",
        answer: "Motorcycle insurance can cover damage to your bike, injuries to you or others, theft, and liability. We offer comprehensive, collision, liability, and uninsured motorist coverage tailored for California riders."
    },
    {
        question: "Is motorcycle insurance required in California?",
        answer: "Yes, California law requires all motorcycle riders to carry liability insurance. This covers injuries and property damage you might cause to others in an accident."
    },
    {
        question: "How much does motorcycle insurance cost?",
        answer: "The cost varies based on factors like your riding experience, bike type, coverage level, and driving record. Contact us for a personalized quote—we work with multiple carriers to find you the best rates."
    },
    {
        question: "Do you insure custom or modified bikes?",
        answer: "Yes! We offer coverage for custom and modified motorcycles. Let us know about any modifications, and we'll help you get the right coverage to protect your investment."
    }
]

export default function MotorcycleInsurance() {
    const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Motorcycle Insurance">
                <div>
                    <div className="serviceleft-section-area section-padding5">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-1" />
                                <div className="col-lg-10">
                                    <div className="serviceauthior-area p-0">
                                        <img src="/assets/images/newdecade/newdecade_29.jpg" alt="Motorcycle Insurance" />
                                        <h1 className="font-lora font-40 lineh-50 weight-600 color-29 margin-b20 margin-t28">
                                            Motorcycle Insurance
                                        </h1>
                                        <p className="font-ks font-16 lineh-26 weight-500 color-30 margin-b20">
                                            New Decade provides comprehensive motorcycle insurance for California riders. Whether you ride a cruiser, sport bike, touring bike, or custom motorcycle, we have coverage options to protect you and your bike on the road.
                                        </p>
                                        <p className="font-ks font-16 lineh-26 weight-500 color-30">
                                            Our experienced team understands the unique needs of motorcycle riders. We work with top carriers to find you competitive rates and comprehensive coverage that fits your riding style and budget.
                                        </p>
                                        <div className="border30" />

                                        <h1 className="font-lora font-40 lineh-50 weight-600 color-29 margin-b20">
                                            Protect Your Ride
                                        </h1>
                                        <p className="font-ks font-16 lineh-26 weight-500 color-30">
                                            California's beautiful weather and scenic roads make it perfect for motorcycle riding. Make sure you're protected with the right insurance coverage for your two-wheeled adventures.
                                        </p>

                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="approach-area margin-t32">
                                                    <div className="approach-img">
                                                        <img src="/assets/images/icons/stragig1.svg" alt="" className="approahimages ts" />
                                                    </div>
                                                    <div className="approach-text">
                                                        <Link href="#" className="font-lora font-20 weight-600 color-29 margin-b ts d-inline-block">
                                                            Custom & Modified Bikes
                                                        </Link>
                                                        <p className="fontks font-16 lineh-26 weight-500 color-30 ts">
                                                            We provide coverage for custom and modified motorcycles, protecting your unique investment.
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
                                                            All Riders Welcome
                                                        </Link>
                                                        <p className="fontks font-16 lineh-26 weight-500 color-30 ts">
                                                            From new riders to experienced motorcyclists, we have coverage options for everyone.
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
                                            We offer comprehensive motorcycle insurance options to keep you protected on California roads. From basic liability to full coverage, we'll help you build the right policy.
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
                                                        Custom Parts & Equipment
                                                    </p>
                                                </div>
                                                <div className="checkservice-area">
                                                    <p className="font-ks font-16 lineh-16 weight-600 color-29">
                                                        <span><img src="/assets/images/icons/check1.png" alt="" /></span>
                                                        Medical Payments
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <p className="font-ks font-16 lineh-26 weight-500 color-30">
                                            Ride with confidence knowing you have the protection you need. Get your free motorcycle insurance quote today!
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <ViewMoreServices currentService="/services/motorcycle" />
                    <FAQ faqs={faqs} />

                    <div className="cta5-section-area section-padding4">
                        <img src="/assets/images/elementor/elementor72.png" alt="" className="elementors72" />
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="cta5-auhtor6-area">
                                        <h1 className="font-lora font-48 lineh-52 color weight-600 margin-b text-capitalize">
                                            Get Your Free Motorcycle Insurance Quote
                                        </h1>
                                        <p className="font-ks font-16 lineh-26 weight-500 color-21">
                                            Protect your ride with quality insurance at competitive rates. Call 1-800-250-5540 today!
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
