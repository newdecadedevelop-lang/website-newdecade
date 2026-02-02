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
        question: "What does motorcycle insurance cover?",
        answer: "Motorcycle insurance can cover damage to your bike, injuries to you or others, theft, and liability. We offer comprehensive, collision, liability, and uninsured motorist coverage tailored for riders across CA, TX, FL, and AZ."
    },
    {
        question: "Is motorcycle insurance required in CA, TX, FL, and AZ?",
        answer: "Yes, all four states we serve require motorcycle riders to carry liability insurance. This covers injuries and property damage you might cause to others in an accident. Requirements vary slightly by state, and we ensure your coverage meets all state-specific regulations."
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
                                            Multi-State Motorcycle Insurance
                                        </h1>
                                        <p className="font-ks font-16 lineh-26 weight-500 color-30 margin-b20">
                                            New Decade provides comprehensive motorcycle insurance for riders across California, Texas, Florida, and Arizona. While our primary specialty is commercial insurance, we bring the same dedication to protecting motorcycle enthusiasts. Whether you ride a cruiser, sport bike, touring bike, or custom motorcycle, we have coverage options to protect you and your bike on the road.
                                        </p>
                                        <p className="font-ks font-16 lineh-26 weight-500 color-30">
                                            With 20+ years of experience, our team understands the unique needs of motorcycle riders. We work with top carriers across all four states to find you competitive rates and comprehensive coverage that fits your riding style and budget.
                                        </p>
                                        <div className="border30" />

                                        <h1 className="font-lora font-40 lineh-50 weight-600 color-29 margin-b20">
                                            Multi-State Two-Wheeler Protection
                                        </h1>
                                        <p className="font-ks font-16 lineh-26 weight-500 color-30">
                                            Whether riding the Pacific Coast Highway in California, exploring the Hill Country in Texas, cruising through Florida, or touring the desert landscapes of Arizona, make sure you're protected with the right insurance coverage for your two-wheeled adventures across all four states we serve.
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
                                            We offer comprehensive motorcycle insurance options to keep you protected on the roads of CA, TX, FL, and AZ. From basic liability to full coverage, we'll help you build the right policy for your riding needs.
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

                    {/*<ViewMoreServices currentService="/services/motorcycle" />*/}
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
