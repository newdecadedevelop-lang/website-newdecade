"use client"

import { useState } from "react"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import InsuranceQuoteModal from "@/components/modals/InsuranceQuoteModal"
import Cta9 from "@/components/sections/Cta9";

export default function Home() {
    const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Our Insurance Services">
                <div>
                    <div className="servicev1-section-area section-padding5">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-9 m-auto">
                                    <div className="servicev1-textarea margin-b60 text-center">
                                        <h1 className="font-48 font-lora weight-600 color-29 lineh-56 margin-b20">
                                            Multi-State Insurance Excellence: Protecting What Matters Most
                                        </h1>
                                        <p className="font-ks font-16 lineh-26 weight-500 color-30">
                                            At New Decade, we don't just provide policies; we provide comprehensive protection for businesses and individuals across California, Texas, Florida, and Arizona. With 20+ years of experience and a tech-forward approach, we deliver commercial-focused coverage designed for your success.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                {/* Commercial Auto / Fleet Coverage */}
                                <div className="col-lg-6 col-md-6" style={{ marginBottom: '50px' }}>
                                    <div className="service3-boxarea bgservice2" style={{ height: '100%', minHeight: '380px' }}>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="service3-text2">
                                                    <Link href="/services/commercial">
                                                        <h1 className="font-lora font-22 lineh-24 color-29 weight-600 margin-b">
                                                            Commercial Auto / Fleet Coverage
                                                        </h1>
                                                    </Link>
                                                    <p className="font-ks font-16 lineh-26 weight-600 color-29 margin-b12">Our #1 Specialty: Multi-State Fleet Protection</p>
                                                    <p className="font-ks font-16 lineh-26 weight-500 color-30">
                                                        From single commercial vehicles to multi-state fleet operations across CA, TX, FL, and AZ. Comprehensive coverage for delivery services, logistics companies, and business transportation. 20+ years protecting commercial drivers.
                                                    </p>
                                                    <Link href="/services/commercial" className="font-ks font-16 lineh-16 color-29 weight-700 margin-t d-inline-block laearnmore2">
                                                        Learn More <span><i className="fa-solid fa-arrow-right" /></span>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="col-lg-6" style={{ marginTop: '30px' }}>
                                                <div className="service3-imag1">
                                                    <img src="/assets/images/newdecade/newdecade_44.jpg" alt="Commercial Fleet Coverage" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* General Liability */}
                                <div className="col-lg-6 col-md-6" style={{ marginBottom: '50px' }}>
                                    <div className="service3-boxarea bgservice2" style={{ height: '100%', minHeight: '380px' }}>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="service3-text2">
                                                    <Link href="/services/general-liability">
                                                        <h1 className="font-lora font-22 lineh-24 color-29 weight-600 margin-b">
                                                            General Liability Insurance
                                                        </h1>
                                                    </Link>
                                                    <p className="font-ks font-16 lineh-26 weight-600 color-29 margin-b12">Essential Business Protection Across All States</p>
                                                    <p className="font-ks font-16 lineh-26 weight-500 color-30">
                                                        Protect your business against claims of bodily injury, property damage, and liability exposures across CA, TX, FL, and AZ. Fast COI turnaround, 100% client advocacy, and comprehensive coverage for 50+ industries.
                                                    </p>
                                                    <Link href="/services/general-liability" className="font-ks font-16 lineh-16 color-29 weight-700 margin-t d-inline-block laearnmore2">
                                                        Learn More <span><i className="fa-solid fa-arrow-right" /></span>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="col-lg-6" style={{ marginTop: '30px' }}>
                                                <div className="service3-imag1">
                                                    <img src="/assets/images/newdecade/newdecade_48.jpg" alt="General Liability Insurance" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Workers' Compensation */}
                                <div className="col-lg-6 col-md-6" style={{ marginBottom: '50px' }}>
                                    <div className="service3-boxarea bgservice2" style={{ height: '100%', minHeight: '380px' }}>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="service3-text2">
                                                    <Link href="/services/workers-comp">
                                                        <h1 className="font-lora font-22 lineh-24 color-29 weight-600 margin-b">
                                                            Workers' Compensation
                                                        </h1>
                                                    </Link>
                                                    <p className="font-ks font-16 lineh-26 weight-600 color-29 margin-b12">Multi-State Workers' Comp Experts</p>
                                                    <p className="font-ks font-16 lineh-26 weight-500 color-30">
                                                        Stay compliant across CA, TX, FL, and AZ while protecting your team. Fast COI turnaround, digital policy management, and expert guidance for multi-state operations. Tech-forward approach streamlines compliance requirements.
                                                    </p>
                                                    <Link href="/services/workers-comp" className="font-ks font-16 lineh-16 color-29 weight-700 margin-t d-inline-block laearnmore2">
                                                        Learn More <span><i className="fa-solid fa-arrow-right" /></span>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="col-lg-6" style={{ marginTop: '30px' }}>
                                                <div className="service3-imag1" >
                                                    <img src="/assets/images/newdecade/newdecade_45.jpg" alt="Workers' Compensation"  />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Cargo Insurance */}
                                <div className="col-lg-6 col-md-6" style={{ marginBottom: '50px' }}>
                                    <div className="service3-boxarea bgservice2" style={{ height: '100%', minHeight: '380px' }}>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="service3-text2">
                                                    <Link href="/services/commercial">
                                                        <h1 className="font-lora font-22 lineh-24 color-29 weight-600 margin-b">
                                                            Cargo Insurance
                                                        </h1>
                                                    </Link>
                                                    <p className="font-ks font-16 lineh-26 weight-600 color-29 margin-b12">Protect Your Freight & Logistics Operations</p>
                                                    <p className="font-ks font-16 lineh-26 weight-500 color-30">
                                                        Comprehensive cargo protection for goods in transit across CA, TX, FL, and AZ. Coverage for trucking companies, freight forwarders, and logistics operations. Specialized expertise in commercial transportation insurance.
                                                    </p>
                                                    <Link href="/services/commercial" className="font-ks font-16 lineh-16 color-29 weight-700 margin-t d-inline-block laearnmore2">
                                                        Learn More <span><i className="fa-solid fa-arrow-right" /></span>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="col-lg-6" style={{ marginTop: '30px' }}>
                                                <div className="service3-imag1" >
                                                    <img src="/assets/images/newdecade/newdecade_46.jpg" alt="Cargo Insurance"  />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Personal Auto Insurance */}
                                <div className="col-lg-6 col-md-6" style={{ marginBottom: '50px' }}>
                                    <div className="service3-boxarea bgservice2" style={{ height: '100%', minHeight: '380px' }}>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="service3-text2">
                                                    <Link href="/services/personal-auto">
                                                        <h1 className="font-lora font-22 lineh-24 color-29 weight-600 margin-b">
                                                            Personal Auto Insurance
                                                        </h1>
                                                    </Link>
                                                    <p className="font-ks font-16 lineh-26 weight-600 color-29 margin-b12">Comprehensive Coverage for Personal Vehicles</p>
                                                    <p className="font-ks font-16 lineh-26 weight-500 color-30">
                                                        From single vehicles to multi-car households across CA, TX, FL, and AZ. Competitive rates for all drivers. While our specialty is commercial insurance, we provide expert personal auto coverage with the same dedication and service.
                                                    </p>
                                                    <Link href="/services/personal-auto" className="font-ks font-16 lineh-16 color-29 weight-700 margin-t d-inline-block laearnmore2">
                                                        Learn More <span><i className="fa-solid fa-arrow-right" /></span>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="col-lg-6" style={{ marginTop: '30px' }}>
                                                <div className="service3-imag1" >
                                                    <img src="/assets/images/newdecade/newdecade_15.jpg" alt="Personal Auto Insurance"  />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Motorcycle Insurance */}
                                <div className="col-lg-6 col-md-6" style={{ marginBottom: '50px' }}>
                                    <div className="service3-boxarea bgservice2" style={{ height: '100%', minHeight: '380px' }}>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="service3-text2">
                                                    <Link href="/services/motorcycle">
                                                        <h1 className="font-lora font-22 lineh-24 color-29 weight-600 margin-b">
                                                            Motorcycle Insurance
                                                        </h1>
                                                    </Link>
                                                    <p className="font-ks font-16 lineh-26 weight-600 color-29 margin-b12">Multi-State Two-Wheeler Protection</p>
                                                    <p className="font-ks font-16 lineh-26 weight-500 color-30">
                                                        Whether riding the Pacific Coast Highway or exploring Texas, Florida, or Arizona roads, protect your motorcycle and gear with comprehensive coverage across all four states we serve. Expert protection for enthusiasts.
                                                    </p>
                                                    <Link href="/services/motorcycle" className="font-ks font-16 lineh-16 color-29 weight-700 margin-t d-inline-block laearnmore2">
                                                        Learn More <span><i className="fa-solid fa-arrow-right" /></span>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="col-lg-6" style={{ marginTop: '30px' }}>
                                                <div className="service3-imag1" >
                                                    <img src="/assets/images/newdecade/newdecade_29.jpg" alt="Motorcycle Insurance"  />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Business Owners Policy (BOP) 
                                <div className="col-lg-6 col-md-6">
                                    <div className="service3-boxarea margin-b30 bgservice2">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="service3-text2">
                                                    <Link href="/services/bop">
                                                        <h1 className="font-lora font-22 lineh-24 color-29 weight-600 margin-b">
                                                            Business Owners Policy
                                                        </h1>
                                                    </Link>
                                                    <p className="font-ks font-16 lineh-26 weight-500 color-30">
                                                        Combined coverage for small to medium businesses. Save money by bundling multiple protections.
                                                    </p>
                                                    <Link href="/services/bop" className="font-ks font-16 lineh-16 color-29 weight-700 margin-t d-inline-block laearnmore2">
                                                        Learn More <span><i className="fa-solid fa-arrow-right" /></span>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="service3-imag1">
                                                    <img src="/assets/images/sectionimg/servicev1img7.png" alt="Business Owners Policy" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>*/}
                            </div>
                        </div>
                    </div>
                    {/*===== SERVCEV2 END=======*/}

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
