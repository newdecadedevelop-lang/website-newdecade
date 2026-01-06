'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from 'react'
export default function Home() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    })

    const handleClick = (key) => {
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

            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Team Details">
                <div>
                    <div className="team-details-sectionarea section-padding5">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="team-detailsimg">
                                        <img src="/assets/images/sectionimg/team-deatilsimg1.png" alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="team-detailsarea">
                                        <span className="font-ks font-16 lineh-16 weight-500 color-26 d-inline-block margin-b12">Subject
                                            Matter Experts</span>
                                        <h1 className="font-lora font-48 lineh-54 weight-600 color-29 margin-b">Johnathan Stehr</h1>
                                        <p className="font-16 lineh-26 weight-500 color-30 font-ks">Business consulting teams are composed
                                            of professionals with specialized knowledge and expertise various aspects business, such as
                                            strategy, finance, marketing, operations, and more. </p>
                                        <div className="team-details-location margin-t32">
                                            <div className="team-detailsemail">
                                                <img src="/assets/images/icons/email3.svg" alt="" />
                                            </div>
                                            <div className="team-deatilstextarea">
                                                <span className="font-ks font-16 lineh-16 weight-500 color-26 d-inline-block margin-b">
                                                    Quick Email
                                                </span>
                                                <Link href="/mailto:Consaltdemo@gmail.com" className="font-20 lineh-26 weight-700 color-29 font-ks d-block">Consaltdemo@gmail.com</Link>
                                            </div>
                                        </div>
                                        <div className="team-details-location margin-t32">
                                            <div className="team-detailsemail">
                                                <img src="/assets/images/icons/phone10.svg" alt="" />
                                            </div>
                                            <div className="team-deatilstextarea">
                                                <span className="font-ks font-16 lineh-16 weight-500 color-26 d-inline-block margin-b">
                                                    Phone Number
                                                </span>
                                                <Link href="/mailto:123-456-7890" className="font-20 lineh-26 weight-700 color-29 font-ks d-block">123-456-7890</Link>
                                            </div>
                                        </div>
                                        <div className="team-details-location margin-t32">
                                            <div className="team-detailsemail">
                                                <img src="/assets/images/icons/location4.svg" alt="" />
                                            </div>
                                            <div className="team-deatilstextarea">
                                                <span className="font-ks font-16 lineh-16 weight-500 color-26 d-inline-block margin-b">
                                                    Office Location
                                                </span>
                                                <Link href="#" className="font-20 lineh-26 weight-700 color-29 font-ks d-block">8708 Forest
                                                    United States</Link>
                                            </div>
                                        </div>
                                        <Link href="/contact1" className="theme6-btn6 font-ks lineh-16 weight-700 color font-16 margin-t32 d-inline-block">Get
                                            In Touch <span><i className="fa-solid fa-arrow-right" /></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*===== TEAM_DETAILS END=======*/}
                    {/*===== SKILLS STRATS=======*/}
                    <div className="skills-section-area section-padding5">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="profesiional-skill">
                                        <h1 className="font-lora font-48 lineh-56 weight-600 color-29 margin-b20">Professional Skills</h1>
                                        <p className="font-ks font-16 lineh-26 weight-500 color-30 margin-b">Discover how Consalt Consulting
                                            Firm's Name] can be your guiding force in navigating the to have challenges of today's
                                            competitive landscape. Explore our range of specialized consulting services designed to
                                            revolutionize the way you do business.</p>
                                        <p className="font-ks font-16 lineh-26 weight-500 color-30">The consulting team will thoroughly
                                            analyze your business, to Consalt including its processes, financials, market position, and
                                            competitive landscape. This analysis helps identify areas for improvement and growth
                                            opportunities o your unique business needs, goals.</p>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="progress-teamdetails">
                                        <div className="progress-resonsive">
                                            <div className="group-progress">
                                                <div className="group-icons">
                                                    <img src="/assets/images/icons/groupexport1.svg" alt="" />
                                                </div>
                                                <div className="bar">
                                                    <div className="info">
                                                        <div className="flexhtml margin-b">
                                                            <span className="font-16 font-ks weight-600 color-h9 lineh-16">Tax
                                                                Consulting</span>
                                                            <p className="font-16 font-ks weight-600 color-h9 lineh-16">95%</p>
                                                        </div>
                                                    </div>
                                                    <div className="progress-bar html"><span /></div>
                                                </div>
                                            </div>
                                            <div className="group-progress">
                                                <div className="group-icons">
                                                    <img src="/assets/images/icons/groupexport1.svg" alt="" />
                                                </div>
                                                <div className="bar margin-t32">
                                                    <div className="info">
                                                        <div className="flexhtml margin-b">
                                                            <span className="font-16 font-ks weight-600 color-h9 lineh-16">Business
                                                                Consulting</span>
                                                            <p className="font-16 font-ks weight-600 color-h9 lineh-16">97%</p>
                                                        </div>
                                                    </div>
                                                    <div className="progress-bar css"><span /></div>
                                                </div>
                                            </div>
                                            <div className="group-progress">
                                                <div className="group-icons">
                                                    <img src="/assets/images/icons/groupexport1.svg" alt="" />
                                                </div>
                                                <div className="bar margin-t32">
                                                    <div className="info">
                                                        <div className="flexhtml margin-b">
                                                            <span className="font-16 font-ks weight-600 color-h9 lineh-16">Finance
                                                                Consulting</span>
                                                            <p className="font-16 font-ks weight-600 color-h9 lineh-16">94%</p>
                                                        </div>
                                                    </div>
                                                    <div className="progress-bar javascript"><span /></div>
                                                </div>
                                            </div>
                                            <div className="group-progress">
                                                <div className="group-icons">
                                                    <img src="/assets/images/icons/groupexport1.svg" alt="" />
                                                </div>
                                                <div className="bar margin-t32">
                                                    <div className="info">
                                                        <div className="flexhtml margin-b">
                                                            <span className="font-16 font-ks weight-600 color-h9 lineh-16">Law
                                                                Consulting</span>
                                                            <p className="font-16 font-ks weight-600 color-h9 lineh-16">94%</p>
                                                        </div>
                                                    </div>
                                                    <div className="progress-bar javascript"><span /></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*===== SKILLS END=======*/}
                    {/*===== TEAM_ACCORDIAN STRATS=======*/}
                    <div className="team-accordian-sectiarea section-padding5">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="team-accordianimg">
                                        <img src="/assets/images/sectionimg/teamaccordianimg.png" alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="deatils-accordian">
                                        <h1 className="font-lora font-48 lineh-56 weight-600 color-29 margin-b20">Education Experience</h1>
                                        <p className="font-ks font-16 lineh-26 weight-500 color-30 margin-b">Crafting a roadmap to your
                                            financial goals. Our comprehensive planning covers investments, savings, debt management
                                            more.</p>
                                        <div className="accordian-area">
                                            <div className="accordion accordian4" id="accordionExample">
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" onClick={() => handleClick(1)}>
                                                        <button className={isActive.key == 1 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                            Foundational Business Education
                                                        </button>
                                                    </h2>
                                                    <div id="collapseOne" className={isActive.key == 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
                                                        <div className="accordion-body">
                                                            <p className="font-ks font-16 lineh-26 weight-500 color-30 ">Pursue a bachelor's
                                                                degree in a related field, such as Business Administration, Management,
                                                                Finance, Economics, or Marketing. This provides fundamental knowledge
                                                                about business principles.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" onClick={() => handleClick(2)}>
                                                        <button className={isActive.key == 2 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                            Specialized Advanced Education
                                                        </button>
                                                    </h2>
                                                    <div id="collapseTwo" className={isActive.key == 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
                                                        <div className="accordion-body">
                                                            <p className="font-ks font-16 lineh-26 weight-500 color-30 ">Pursue a bachelor's
                                                                degree in a related field, such as Business Administration, Management,
                                                                Finance, Economics, or Marketing. This provides fundamental knowledge
                                                                about business principles.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" onClick={() => handleClick(3)}>
                                                        <button className={isActive.key == 3 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                            Industry Certifications
                                                        </button>
                                                    </h2>
                                                    <div id="collapseThree" className={isActive.key == 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
                                                        <div className="accordion-body">
                                                            <p className="font-ks font-16 lineh-26 weight-500 color-30 ">Pursue a bachelor's
                                                                degree in a related field, such as Business Administration, Management,
                                                                Finance, Economics, or Marketing. This provides fundamental knowledge
                                                                about business principles.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" onClick={() => handleClick(4)}>
                                                        <button className={isActive.key == 4 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                            Online Courses and Certificates
                                                        </button>
                                                    </h2>
                                                    <div id="collapseFour" className={isActive.key == 4 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
                                                        <div className="accordion-body">
                                                            <p className="font-ks font-16 lineh-26 weight-500 color-30 ">Pursue a bachelor's
                                                                degree in a related field, such as Business Administration, Management,
                                                                Finance, Economics, or Marketing. This provides fundamental knowledge
                                                                about business principles.</p>
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
                    {/*===== TEAM_ACCORDIAN END=======*/}
                    {/*===== CTA STARST=======*/}
                    <div className="cta5-section-area section-padding4">
                        <img src="/assets/images/elementor/elementor72.png" alt="" className="elementors72" />
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="cta5-auhtor6-area">
                                        <h1 className="font-lora font-48 lineh-52 color weight-600 margin-b text-capitalize">Get expert Law
                                            advice on criminal strategies</h1>
                                        <p className="font-ks font-16 lineh-26 weight-500 color-21">We believe that informed clients make
                                            better Law decisions. As part of our service, we'll provide educational resources and
                                            workshops to help.</p>
                                    </div>
                                </div>
                                <div className="col-lg-2" />
                                <div className="col-lg-4">
                                    <div className="cta5-btn5-sexction">
                                        <Link href="/contact1" className="theme6-btn6 bakgrnd5 font-ks lineh-16 weight-700 color font-16">Get Law Advice
                                            <span><i className="fa-solid fa-arrow-right" /></span></Link>
                                        <Link href="/contact2" className="theme6-btn6 backgrnd6 font-ks lineh-16 weight-700 color-29 font-16">Contact Us
                                            <span><i className="fa-solid fa-arrow-right" /></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img src="/assets/images/elementor/elementor72.png" alt="" className="elementors73" />
                    </div>
                </div>

            </Layout>
        </>
    )
}