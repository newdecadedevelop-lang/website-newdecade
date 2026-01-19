"use client"

import { useState } from "react"
import CounterUp from "@/components/elements/CounterUp";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import InsuranceQuoteModal from "@/components/modals/InsuranceQuoteModal"

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
                                        <img src="/assets/images/newdecade/newdecade_20.jpg" alt="" />
                                        <img src="/assets/images/elementor/elementor17.png" alt="" className="elementor-9 keyframe3" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="about3-textarea1">
                                        <span className="about3span font-ks lineh-16 font-16 weight-600 color-29 d-inline-block margin-b24">About New Decade</span>
                                        <h1 className="font-lora font-48 lineh-56 weight-600 color-29 margin-b20">A Legacy Built on Trust and Dedication</h1>
                                        <p className="font-ks font-16 lineh-26 weight-500 color-30 ">Founded in 2005, New Decade began as a one-person operation fueled by determination and a commitment to excellence. Today, we're a trusted name throughout the Greater Los Angeles area, serving thousands of families and businesses.</p>
                                        <div className="counter3-area3">
                                            <div className="row">
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="counter3-boxarea4 text-center margin-b20 margin-t32">
                                                        <div className="counter4-boxarea4">
                                                            <h1 className="font-lora font-40 lineh-40 color-29 margin-b weight-600">
                                                                <CounterUp count={150} />K+
                                                            </h1>
                                                            <p className="font-ks font-16 lineh-16 weight-500 color-30">Served Clients</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="counter3-boxarea4 text-center margin-b20 margin-t32">
                                                        <div className="counter4-boxarea4">
                                                            <h1 className="font-lora font-40 lineh-40 color-29 margin-b weight-600">
                                                                <CounterUp count={20} />+
                                                            </h1>
                                                            <p className="font-ks font-16 lineh-16 weight-500 color-30">Years Experience</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="counter3-boxarea4 text-center">
                                                        <div className="counter4-boxarea4">
                                                            <h1 className="font-lora font-40 lineh-40 color-29 margin-b weight-600">
                                                                <CounterUp count={50} />+
                                                            </h1>
                                                            <p className="font-ks font-16 lineh-16 weight-500 color-30">Industries Covered</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="counter3-boxarea4 text-center">
                                                        <div className="counter4-boxarea4">
                                                            <h1 className="font-lora font-40 lineh-40 color-29 margin-b weight-600">
                                                                <CounterUp count={10} />+
                                                            </h1>
                                                            <p className="font-ks font-16 lineh-16 weight-500 color-30">Carrier Partners</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <Link href="/about" className="theme6-btn6 font-ks lineh-16 weight-700 color font-16 margin-t32">
                                            About Us{" "}
                                            <span>
                                                <i className="fa-solid fa-arrow-right" />
                                            </span>
                                        </Link>
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
                                        <h1 className="font-lora font-48 lineh-56 weight-600 color-29 margin-b20">What Sets Us Apart - The New Decade Difference</h1>
                                        <p className="font-ks font-16 weight-500 lineh-26 margin-b20 color-30">Over two decades of proven experience in California's competitive insurance market, navigating complex situations and finding solutions that work.</p>
                                        <p className="font-ks font-16 weight-500 lineh-26 color-30">Unlike large corporate agencies, our leadership remains personally connected to our operations, ensuring consistency, accountability, and the highest level of service for every client.</p>
                                        <Link href="/contact" className="theme6-btn6 font-ks lineh-16 weight-700 color font-16 margin-t32">
                                            Learn More
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
                                            <Link href="/service-details" className="color-29">
                                                <h1 className="font-lora font-24 lineh-24 weight-600 color-29 margin-b14 ts">20+ Years Experience</h1>
                                            </Link>
                                            <p className="font-ks lineh-26 weight-500 color-30 font-16 ts">Over two decades of proven experience in California's competitive insurance market, navigating complex situations and finding solutions that work.</p>
                                        </div>
                                    </div>
                                    <div className="lawprovide-boaxrea margin-b30">
                                        <div className="guidiance-boxarea">
                                            <img src="/assets/images/icons/consulting1.svg" alt="" className="ts" />
                                        </div>
                                        <div className="lax-conultingprovide">
                                            <Link href="/service-details#commercial" className="color-29">
                                                <h1 className="font-lora font-24 lineh-24 weight-600 color-29 margin-b14 ts">Commercial Insurance</h1>
                                            </Link>
                                            <p className="font-ks lineh-26 weight-500 color-30 font-16 ts">Comprehensive coverage for businesses of all sizes, including restaurants, bars, retail shops, offices, and many more. Tailored solutions to protect your business assets and operations.</p>
                                        </div>
                                    </div>
                                    <div className="lawprovide-boaxrea">
                                        <div className="guidiance-boxarea">
                                            <img src="/assets/images/icons/support1.svg" alt="" className="ts" />
                                        </div>
                                        <div className="lax-conultingprovide">
                                            <Link href="/service-details#personal-auto" className="color-29">
                                                <h1 className="font-lora font-24 lineh-24 weight-600 color-29 margin-b14 ts">All Drivers Welcome</h1>
                                            </Link>
                                            <p className="font-ks lineh-26 weight-500 color-30 font-16 ts">We specialize in helping drivers with all types of records, including those with tickets, accidents, or SR-22 requirements.</p>
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
                                        <img src="/assets/images/newdecade/newdecade_8.jpg" alt="" className="missionimg2" />
                                        <img src="/assets/images/elementor/elementor17.png" alt="" className="elementor-9 keyframe3" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="missiontextarea">
                                        <h1 className="font-lora font-48 lineh-56 weight-600 color-29 margin-b20">Our Mission</h1>
                                        <p className="font-ks font-16 lineh-26 weight-500 color-30 margin-b">To provide honest, personalized insurance services that protect families and businesses in our community. We always act in our clients' best interests, offering transparent guidance and building relationships that last for generations.</p>
                                        <p className="font-ks font-16 lineh-26 weight-500 color-30 margin-b">We are dedicated to achieving favorable results for our clients through integrity, commitment to service, and community support.</p>
                                        <ul>
                                            <li className="font-ks font-16 lineh-16 weight-600 color-17 margin-b20">
                                                <span>
                                                    <img src="/assets/images/icons/check1.png" alt="" />
                                                </span>
                                                Integrity First
                                            </li>
                                            <li className="font-ks font-16 lineh-16 weight-600 color-17 margin-b20">
                                                <span>
                                                    <img src="/assets/images/icons/check1.png" alt="" />
                                                </span>
                                                Commitment to Service
                                            </li>
                                            <li className="font-ks font-16 lineh-16 weight-600 color-17 margin-b20">
                                                <span>
                                                    <img src="/assets/images/icons/check1.png" alt="" />
                                                </span>
                                                Long-term Relationships
                                            </li>
                                            <li className="font-ks font-16 lineh-16 weight-600 color-17">
                                                <span>
                                                    <img src="/assets/images/icons/check1.png" alt="" />
                                                </span>
                                                Service Excellence
                                            </li>
                                        </ul>
                                        <Link href="/servicev1" className="theme6-btn6 font-ks lineh-16 weight-700 color font-16 margin-t32">
                                            Learn More{" "}
                                            <span>
                                                <i className="fa-solid fa-arrow-right" />
                                            </span>
                                        </Link>
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
                                        <h1 className="font-48 lineh-56 font-lora weight-600 color-29 margin-b20">Our Vision</h1>
                                        <p className="font-16 lineh-26 weight-500 color-30 margin-b24">To be the insurance partner you can count on—today, tomorrow, and for decades to come. We're expanding our services while preserving the personal touch that defines us, growing our reach across California while maintaining our community roots.</p>
                                        <div className="border7 margin-b20" />
                                        <div className="nav-section-area">
                                            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                                <li className="nav-item" role="presentation">
                                                    <button className="nav-link active nav-btn1" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">
                                                        Service Expansion
                                                    </button>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <button className="nav-link nav-btn1" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">
                                                        Growth Strategy
                                                    </button>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <button className="nav-link nav-btn1" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">
                                                        Client Focus
                                                    </button>
                                                </li>
                                            </ul>
                                            <div className="tab-content" id="pills-tabContent">
                                                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex={0}>
                                                    <p className="font-ks font-16 weight-500 lineh-26 margin-b20 color-30">
                                                        <span className="weight-700 color-29">Expand Service Offerings:</span> We are continuously adding new insurance products and services to meet the evolving needs of our clients, from traditional coverage to innovative protection solutions.
                                                    </p>
                                                    <p className="font-ks font-16 weight-500 lineh-26 color-30">
                                                        <span className="weight-700 color-29">Digital Innovation:</span> Embracing technology to provide faster quotes, easier policy management, and 24/7 service while maintaining the personal touch that sets us apart.
                                                    </p>
                                                </div>
                                                <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex={0}>
                                                    <p className="font-ks font-16 weight-500 lineh-26 margin-b20 color-30">
                                                        <span className="weight-700 color-29">Grow Statewide:</span> Expanding our presence across California, bringing our trusted service to more communities while maintaining the quality and personal attention that defines New Decade.
                                                    </p>
                                                    <p className="font-ks font-16 weight-500 lineh-26 color-30">
                                                        <span className="weight-700 color-29">Community Connection:</span> Building strong relationships in each new market we serve, becoming a trusted local partner while leveraging our growing expertise and resources.
                                                    </p>
                                                </div>
                                                <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabIndex={0}>
                                                    <p className="font-ks font-16 weight-500 lineh-26 margin-b20 color-30">
                                                        <span className="weight-700 color-29">Keep Personal Touch:</span> No matter how much we grow, we'll never lose sight of what makes us special—knowing our clients by name and treating each person like family.
                                                    </p>
                                                    <p className="font-ks font-16 weight-500 lineh-26 color-30">
                                                        <span className="weight-700 color-29">Client Retention Focus:</span> Building relationships that last for generations through consistent service, fair pricing, and always putting our clients' needs first.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <Link href="/servicev1" className="theme6-btn6 font-ks lineh-16 weight-700 color font-16 margin-t32">
                                            Get Started Now
                                            <span>
                                                <i className="fa-solid fa-arrow-right" />
                                            </span>
                                        </Link>
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
                    {/*===== CTA STARST=======*/}
                    <div className="cta5-section-area section-padding4">
                        <img src="/assets/images/elementor/elementor72.png" alt="" className="elementors72" />
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="cta5-auhtor6-area">
                                        <h1 className="font-lora font-48 lineh-52 color weight-600 margin-b text-capitalize">Get Your Free Insurance Quote Today</h1>
                                        <p className="font-ks font-16 lineh-26 weight-500 color-21">We believe that informed clients make better insurance decisions. Our experienced team is here to help you find the right coverage at the best price.</p>
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
                                            <span>
                                                <i className="fa-solid fa-arrow-right" />
                                            </span>
                                        </button>
                                        <Link href="/contact" className="theme6-btn6 backgrnd6 font-ks lineh-16 weight-700 color-29 font-16">
                                            Contact Us
                                            <span>
                                                <i className="fa-solid fa-arrow-right" />
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img src="/assets/images/elementor/elementor72.png" alt="" className="elementors73" />
                    </div>
                    {/*===== CTA END=======*/}
                </div>
            </Layout>

            <InsuranceQuoteModal
                isOpen={isQuoteModalOpen}
                onClose={() => setIsQuoteModalOpen(false)}
            />
        </>
    );
}
