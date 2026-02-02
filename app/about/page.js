"use client"

import { useState } from "react"
import CounterUp from "@/components/elements/CounterUp";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import InsuranceQuoteModal from "@/components/modals/InsuranceQuoteModal"
import Cta9 from "@/components/sections/Cta9";

export default function Home() {
    const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="About US">
                <div>
                    {/*===== ABOUT STARTS=======*/}
                    <div className="about3-section-area section-padding5">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="about3-images1">
                                        <img src="/assets/images/newdecade/newdecade_47.jpg" alt="" />
                                        <img src="/assets/images/elementor/elementor17.png" alt="" className="elementor-9 keyframe3" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="about3-textarea1">
                                        <span className="about3span font-ks lineh-16 font-16 weight-600 color-29 d-inline-block margin-b24">About New Decade Insurance</span>
                                        <h1 className="font-lora font-48 lineh-56 weight-600 color-29 margin-b20">Built on 20 Years of Trust and Dedication</h1>
                                        <p className="font-ks font-16 lineh-26 weight-500 color-30 margin-b20">New Decade Insurance represents over two decades of unwavering dedication to the insurance market. Our foundation was established in 2005, and since then, we have grown into a powerhouse brokerage serving California, Texas, Florida, and Arizona.</p>
                                        <p className="font-ks font-16 lineh-26 weight-500 color-30 margin-b20">We combine the deep industry wisdom of a veteran agency with a modern, tech-forward approach to commercial risk management. We don't just understand the insurance market; we've lived it for over 20 years.</p>
                                        <p className="font-ks font-16 lineh-26 weight-500 color-30">Today, New Decade stands as a premier partner for commercial enterprises across multiple states who demand corporate-grade protection with 100% commitment to client advocacy.</p>
                                        <div className="counter3-area3">
                                            <div className="row">
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="counter3-boxarea4 text-center margin-b20 margin-t32">
                                                        <div className="counter4-boxarea4">
                                                            <h1 className="font-lora font-40 lineh-40 color-29 margin-b weight-600">
                                                                <CounterUp count={20} />+
                                                            </h1>
                                                            <p className="font-ks font-16 lineh-16 weight-500 color-30">Proven Industry Experience</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="counter3-boxarea4 text-center margin-b20 margin-t32">
                                                        <div className="counter4-boxarea4">
                                                            <h1 className="font-lora font-40 lineh-40 color-29 margin-b weight-600">
                                                                <CounterUp count={150} />K+
                                                            </h1>
                                                            <p className="font-ks font-16 lineh-16 weight-500 color-30">Clients & Businesses Served</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="counter3-boxarea4 text-center">
                                                        <div className="counter4-boxarea4">
                                                            <h1 className="font-lora font-40 lineh-40 color-29 margin-b weight-600">
                                                                <CounterUp count={4} /> States
                                                            </h1>
                                                            <p className="font-ks font-16 lineh-16 weight-500 color-30">Licensed in CA, TX, FL, AZ</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="counter3-boxarea4 text-center">
                                                        <div className="counter4-boxarea4">
                                                            <h1 className="font-lora font-40 lineh-40 color-29 margin-b weight-600">
                                                                <CounterUp count={100} />%
                                                            </h1>
                                                            <p className="font-ks font-16 lineh-16 weight-500 color-30">Commitment to Client Advocacy</p>
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
                    {/*===== ABOUT END=======*/}
                    {/*===== LAW PROVIDE STARTS =======*/}
                    <div className="lawprovide-section-area section-padding5">
                        <img src="/assets/images/elementor/elementor23.png" alt="" className="elementor24" />
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="lawprovide-textarea">
                                        <h1 className="font-lora font-48 lineh-56 weight-600 color-29 margin-b20">The New Decade Difference</h1>
                                        <p className="font-ks font-20 weight-600 lineh-26 margin-b20 color-29">"Big Brokerage Expertise. Boutique Attention."</p>
                                        <p className="font-ks font-16 weight-500 lineh-26 color-30">Experience the perfect balance of enterprise-level capabilities with personalized service that puts you first.</p>
                                        <Link href="/contact" className="theme6-btn6 font-ks lineh-16 weight-700 color font-16 margin-t32">
                                            Get Started Today
                                            <span>
                                                <i className="fa-solid fa-arrow-right" />
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="lawprovide-boaxrea margin-b30">
                                        <div className="guidiance-boxarea">
                                            <img src="/assets/images/icons/gudeiance1.svg" alt="" className="ts" />
                                        </div>
                                        <div className="lax-conultingprovide">
                                            <h1 className="font-lora font-24 lineh-24 weight-600 color-29 margin-b14 ts">Owner-Driven Accountability</h1>
                                            <p className="font-ks lineh-26 weight-500 color-30 font-16 ts">Unlike massive corporate agencies where you are just a policy number, our leadership remains hands-on. You benefit from 20 years of navigation skills applied directly to your complex situations.</p>
                                        </div>
                                    </div>
                                    <div className="lawprovide-boaxrea margin-b30">
                                        <div className="guidiance-boxarea">
                                            <img src="/assets/images/icons/consulting1.svg" alt="" className="ts" />
                                        </div>
                                        <div className="lax-conultingprovide">
                                            <h1 className="font-lora font-24 lineh-24 weight-600 color-29 margin-b14 ts">The "No-Nonsense" Approach</h1>
                                            <p className="font-ks lineh-26 weight-500 color-30 font-16 ts">We know business owners don't have time for fluff. We provide honest, transparent guidance and fast, accurate quotes.</p>
                                        </div>
                                    </div>
                                    <div className="lawprovide-boaxrea">
                                        <div className="guidiance-boxarea">
                                            <img src="/assets/images/icons/support1.svg" alt="" className="ts" />
                                        </div>
                                        <div className="lax-conultingprovide">
                                            <h1 className="font-lora font-24 lineh-24 weight-600 color-29 margin-b14 ts">Experience Meets Innovation</h1>
                                            <p className="font-ks lineh-26 weight-500 color-30 font-16 ts">We leverage the latest digital tools for seamless policy management, backed by the integrity and stability that have defined our work since 2005.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img src="/assets/images/elementor/elementor23.png" alt="" className="elementor25" />
                    </div>
                    {/*===== LAW PROVIDE END=======*/}
                    {/*===== MISSION STARTS=======*/}
                    <div className="mission-area-starts section-padding5">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="missionimg">
                                        <img src="/assets/images/newdecade/newdecade_48.jpg" alt="" className="missionimg2" />
                                        <img src="/assets/images/elementor/elementor17.png" alt="" className="elementor-9 keyframe3" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="missiontextarea">
                                        <h1 className="font-lora font-48 lineh-56 weight-600 color-29 margin-b20">Our Specialty: Multi-State Commercial Excellence</h1>
                                        <p className="font-ks font-16 lineh-26 weight-500 color-30 margin-b20">In a changing economy, your business needs protection that scales with you. Unlike generalist agencies, New Decade specializes in Commercial Insurance across California, Texas, Florida, and Arizona. We understand that a restaurant, a commercial fleet, a retail operation, and a corporate office all face unique threats across different markets.</p>
                                        <p className="font-ks font-16 lineh-26 weight-600 color-29 margin-b">We don't just sell insurance; we architect comprehensive multi-state protection for your business growth.</p>
                                        <ul>
                                            <li className="font-ks font-16 lineh-16 weight-600 color-17 margin-b20">
                                                <span>
                                                    <img src="/assets/images/icons/check1.png" alt="" />
                                                </span>
                                                General Liability & Commercial Property: Multi-state protection for your physical and financial assets.
                                            </li>
                                            <li className="font-ks font-16 lineh-16 weight-600 color-17 margin-b20">
                                                <span>
                                                    <img src="/assets/images/icons/check1.png" alt="" />
                                                </span>
                                                Fleet & Commercial Auto: Comprehensive coverage from single vehicles to multi-state operations.
                                            </li>
                                            <li className="font-ks font-16 lineh-16 weight-600 color-17 margin-b20">
                                                <span>
                                                    <img src="/assets/images/icons/check1.png" alt="" />
                                                </span>
                                                Workers' Compensation & Cargo Insurance: Complete business protection across all four states.
                                            </li>
                                        </ul>
                                        <p className="font-ks font-14 lineh-24 weight-500 color-30 margin-t20" style={{ fontStyle: 'italic' }}>
                                            Note: While our primary focus is commercial insurance, we continue to offer Personal Auto and Motorcycle coverage for clients who value comprehensive protection.
                                        </p>
                                        <a
                                            href="#"
                                            onClick={(e) => {
                                                e.preventDefault()
                                                setIsQuoteModalOpen(true)
                                            }}
                                            className="theme6-btn6 font-ks lineh-16 weight-700 color font-16 margin-t32"
                                        >
                                            Get Free Quote{" "}
                                            <span>
                                                <i className="fa-solid fa-arrow-right" />
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*===== MISSION END=======*/}
                    {/*===== VISSION STARTS=======*/}
                    <div className="vission-section-area section-padding5">
                        <img src="/assets/images/elementor/elementor23.png" alt="" className="elementor24" />
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="vission-textarea">
                                        <h1 className="font-48 lineh-56 font-lora weight-600 color-29 margin-b20">Our Mission & Vision</h1>
                                        <p className="font-16 lineh-26 weight-600 color-29 margin-b12">Our Mission</p>
                                        <p className="font-16 lineh-26 weight-500 color-30 margin-b20">To empower businesses across California, Texas, Florida, and Arizona to grow without fear. We provide the safety net that allows entrepreneurs to take risks, expand their multi-state operations, and build their own legacies, knowing that New Decade is guarding their blind spots.</p>
                                        <p className="font-16 lineh-26 weight-600 color-29 margin-b12">Our Vision</p>
                                        <p className="font-16 lineh-26 weight-500 color-30 margin-b24">To be the most trusted multi-state partner for Commercial Insurance—setting the standard for the future through integrity, tech-forward solutions, unmatched service, and modernized protection strategies across all markets we serve.</p>
                                        <div className="border7 margin-b20" />
                                        <p className="font-16 lineh-26 weight-600 color-29 margin-b12">Ready for the Next Step?</p>
                                        <p className="font-16 lineh-26 weight-500 color-30 margin-b24">Your business deserves an insurance partner with a 20-year track record and a forward-thinking mindset.</p>
                                        <a
                                            href="#"
                                            onClick={(e) => {
                                                e.preventDefault()
                                                setIsQuoteModalOpen(true)
                                            }}
                                            className="theme6-btn6 font-ks lineh-16 weight-700 color font-16 margin-t32"
                                        >
                                            Get Free Quote
                                            <span>
                                                <i className="fa-solid fa-arrow-right" />
                                            </span>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="vissionimages">
                                        <img src="/assets/images/newdecade/newdecade_12.jpg" alt="" />
                                        <img src="/assets/images/elementor/elementor17.png" alt="" className="elementor-23 keyframe3" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img src="/assets/images/elementor/elementor23.png" alt="" className="elementor25" />
                    </div>
                    {/*===== VISSION END=======*/}
                    <Cta9 />
                </div>
            </Layout>

            <InsuranceQuoteModal
                isOpen={isQuoteModalOpen}
                onClose={() => setIsQuoteModalOpen(false)}
            />
        </>
    );
}
