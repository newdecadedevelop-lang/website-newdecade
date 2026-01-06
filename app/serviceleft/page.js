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

            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Our Services v1">
                <div>
                    <div className="serviceleft-section-area section-padding5">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="serviceour-area">
                                        <h1 className="font-lora font-24 lineh-24 weight-600 color-29 margin-b24">Our Services</h1>
                                        <div className="singlepalnning-area margin-b20">
                                            <Link href="#" className="font-18 font-ks lineh-18 weight-600 color-29 ts">Business Growth Plan</Link>
                                            <span><i className="fa-solid fa-angle-right ts" /></span>
                                        </div>
                                        <div className="singlepalnning-area margin-b20">
                                            <Link href="#" className="font-18 font-ks lineh-18 weight-600 color-29 ts">Financial Planning</Link>
                                            <span><i className="fa-solid fa-angle-right ts" /></span>
                                        </div>
                                        <div className="singlepalnning-area margin-b20">
                                            <Link href="#" className="font-18 font-ks lineh-18 weight-600 color-29 ts">Best Marketing
                                                Analysis</Link>
                                            <span><i className="fa-solid fa-angle-right ts" /></span>
                                        </div>
                                        <div className="singlepalnning-area margin-b20">
                                            <Link href="#" className="font-18 font-ks lineh-18 weight-600 color-29 ts">Tax Managment Plan</Link>
                                            <span><i className="fa-solid fa-angle-right ts" /></span>
                                        </div>
                                        <div className="singlepalnning-area margin-b20">
                                            <Link href="#" className="font-18 font-ks lineh-18 weight-600 color-29 ts">Estate Planning</Link>
                                            <span><i className="fa-solid fa-angle-right ts" /></span>
                                        </div>
                                        <div className="singlepalnning-area margin-b20">
                                            <Link href="#" className="font-18 font-ks lineh-18 weight-600 color-29 ts">Invesment Managment</Link>
                                            <span><i className="fa-solid fa-angle-right ts" /></span>
                                        </div>
                                    </div>
                                    <div className="downloadbrowser">
                                        <h1 className="font-24 lineh-24 weight-600 color-29  font-lora margin-b20">Download Brochure</h1>
                                        <p className="font-ks font-16 lineh-26 weight-500 color-30 margin-b24">Our consultants will analyze
                                            your current processes to lead our consultatns</p>
                                        <div className="doc-btn ts margin-b">
                                            <Link href="#" className="docbtn1 font-ks font-16 weight-700 color ts"><img src="/assets/images/icons/doc2.svg" alt="" />Pdf Download</Link>
                                        </div>
                                        <div className="doc-btn2">
                                            <Link href="#" className="docbtn2 font-ks font-16 weight-700 color-29 ts"><img src="/assets/images/icons/doc1.svg" alt="" className="ts" />Doc Download</Link>
                                        </div>
                                    </div>
                                    <div className="needed-section">
                                        <h1 className="font-lora font-24 lineh-30 weight-600 color-29 margin-b24">If You Need Any Help
                                            Contact With Us</h1>
                                        <Link href="/tel:+917052105786" className="font-16 weight-700 color fon-ks lineh-16"><img src="/assets/images/icons/phone9.svg" alt="" />+91 705 2101 786</Link>
                                    </div>
                                    <div className="quito-contact">
                                        <h1 className="font-24 lineh-24 weight-600 color-29  font-lora margin-b20">Get A Free Quote</h1>
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="quitoinput">
                                                    <input type="text" placeholder="Your Name" />
                                                </div>
                                                <div className="quitoinput">
                                                    <input type="email" placeholder="Email Adderss" />
                                                </div>
                                                <div className="quitoinput">
                                                    <input type="number" placeholder="Phone Number" />
                                                </div>
                                                <div className="quitoinput">
                                                    <textarea cols={30} rows={10} placeholder="Your Message" />
                                                </div>
                                                <button type="submit" className="quitobtn font-ks font-16 lineh-16 weight-700 color ">Submit
                                                    Now <span><i className="fa-solid fa-arrow-right" /></span></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-8">
                                    <div className="serviceauthior-area">
                                        <img src="/assets/images/sectionimg/servicedeailsimg1.png" alt="" />
                                        <h1 className="font-lora font-40 lineh-50 weight-600 color-29 margin-b20 margin-t28">Business Growth
                                            Plan</h1>
                                        <p className="font-ks font-16 lineh-26 weight-500 color-30 margin-b20">We are dedicated to providing
                                            top-notch consulting services that drive growth, innovation, and efficiency in your
                                            business. With a team of seasoned experts in Consalt we bring a wealth of to many dream
                                            knowledge and experience to help you tackle your most pressing challenges.</p>
                                        <p className="font-ks font-16 lineh-26 weight-500 color-30">Our mission is to be more than just
                                            consultants – we aim to be your strategic partners, working collaboratively to transform
                                            your vision into reality. By combining industry insights with tailored solutions, we help
                                            you navigate the complexities of today's business landscape and achieve.</p>
                                        <div className="border30" />
                                        <h1 className="font-lora font-40 lineh-50 weight-600 color-29 margin-b20">Unlock the potential of
                                            your business</h1>
                                        <p className="font-ks font-16 lineh-26 weight-500 color-30">Discover how Consalt Consulting Firm's
                                            Name] can be your guiding force in navigating the to have challenges of today's competitive
                                            landscape. Explore our range of specialized consulting services designed to revolutionize
                                            the way you do business.</p>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="approach-area margin-t32">
                                                    <div className="approach-img">
                                                        <img src="/assets/images/icons/stragig1.svg" alt="" className="approahimages ts" />
                                                    </div>
                                                    <div className="approach-text">
                                                        <Link href="/servicemiddle" className="font-lora font-20 weight-600 color-29  margin-b ts d-inline-block">Strategic
                                                            Planning</Link>
                                                        <p className="fontks font-16 lineh-26 weight-500 color-30 ts">Your success is our
                                                            priority. We work collaboratively, providing ongoing support to ensure.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="approach-area margin-t32">
                                                    <div className="approach-img">
                                                        <img src="/assets/images/icons/approach1.svg" alt="" className="approahimages ts" />
                                                    </div>
                                                    <div className="approach-text">
                                                        <Link href="/servicemiddle" className="font-lora font-20 weight-600 color-29  margin-b ts d-inline-block">Client-Centric
                                                            Approach</Link>
                                                        <p className="fontks font-16 lineh-26 weight-500 color-30 ts">Your success is our
                                                            priority. We work collaboratively, providing ongoing support to ensure.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="border30" />
                                        <h1 className="font-lora font-40 lineh-50 weight-600 color-29 margin-b20 margin-t28">Benefits
                                            Business Growth Plan</h1>
                                        <p className="font-ks font-16 lineh-26 weight-500 color-30 margin-b20">Consultants in this area
                                            focus on financial analysis, budgeting, cost reduction, investment decisions, and capital
                                            allocation. They help businesses make informed financial choices. These consultants focus
                                            on optimizing business processes and operations to improve efficiency.</p>
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <div className="checkservice-area">
                                                    <p className="font-ks font-16 lineh-16 weight-600 color-29"><span><img src="/assets/images/icons/check1.png" alt="" /></span>Management Consulting
                                                    </p>
                                                </div>
                                                <div className="checkservice-area">
                                                    <p className="font-ks font-16 lineh-16 weight-600 color-29"><span><img src="/assets/images/icons/check1.png" alt="" /></span>Financial Consulting
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="checkservice-area">
                                                    <p className="font-ks font-16 lineh-16 weight-600 color-29"><span><img src="/assets/images/icons/check1.png" alt="" /></span>Customize Consulting
                                                    </p>
                                                </div>
                                                <div className="checkservice-area">
                                                    <p className="font-ks font-16 lineh-16 weight-600 color-29"><span><img src="/assets/images/icons/check1.png" alt="" /></span>Clear Scope and
                                                        Goals:</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="checkservice-area">
                                                    <p className="font-ks font-16 lineh-16 weight-600 color-29"><span><img src="/assets/images/icons/check1.png" alt="" /></span>Sustainability
                                                        Consulting</p>
                                                </div>
                                                <div className="checkservice-area">
                                                    <p className="font-ks font-16 lineh-16 weight-600 color-29"><span><img src="/assets/images/icons/check1.png" alt="" /></span>Problem Solving </p>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="font-ks font-16 lineh-26 weight-500 color-30">Your success is our priority. We work
                                            collaboratively, providing ongoing support to ensure your long-term growth With years of
                                            experience in success consulting.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*===== SERVCELEFT END=======*/}
                    {/*===== SERVICE STARTS=======*/}
                    <div className="serviceleftblog-section-area section-padding8">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 m-auto">
                                    <div className="sericeleft text-center margin-b60">
                                        <h1 className="font-lora font-40 lineh-50 weight-600 color-29">View Our More Services</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div className="service3-boxarea margin-b30 bgservice2">
                                        <div className="row">
                                            <div className="col-lg-6 ">
                                                <div className="service3-text2">
                                                    <Link href="/servicemiddle">
                                                        <h1 className="font-lora font-22 lineh-24 color-29 weight-600 margin-b">Financial
                                                            Planning</h1>
                                                    </Link>
                                                    <p className="font-ks font-16 lineh-26 weight-500 color-30">Our team comprises certified
                                                        financial experts with years of experience in diverse areas of finance.</p>
                                                    <Link href="/servicemiddle" className="font-ks font-16 lineh-16 color-29 weight-700 margin-t d-inline-block laearnmore2">Learn
                                                        More <span><i className="fa-solid fa-arrow-right" /></span></Link>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="service3-imag1">
                                                    <img src="/assets/images/sectionimg/servicev1img1.png" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="service3-boxarea margin-b30 bgservice2">
                                        <div className="row">
                                            <div className="col-lg-6 ">
                                                <div className="service3-text2">
                                                    <Link href="/servicemiddle">
                                                        <h1 className="font-lora font-22 lineh-24 color-29 weight-600 margin-b">Business
                                                            Growth Plan</h1>
                                                    </Link>
                                                    <p className="font-ks font-16 lineh-26 weight-500 color-30">Our team comprises certified
                                                        financial experts with years of experience in diverse areas of finance.</p>
                                                    <Link href="/servicemiddle" className="font-ks font-16 lineh-16 color-29 weight-700 margin-t d-inline-block laearnmore2">Learn
                                                        More <span><i className="fa-solid fa-arrow-right" /></span></Link>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="service3-imag1">
                                                    <img src="/assets/images/sectionimg/servicev1img2.png" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="service3-boxarea margin-b30 bgservice2">
                                        <div className="row">
                                            <div className="col-lg-6 ">
                                                <div className="service3-text2">
                                                    <Link href="/servicemiddle">
                                                        <h1 className="font-lora font-22 lineh-24 color-29 weight-600 margin-b">Best
                                                            Marketing Analysis</h1>
                                                    </Link>
                                                    <p className="font-ks font-16 lineh-26 weight-500 color-30">Our team comprises certified
                                                        financial experts with years of experience in diverse areas of finance.</p>
                                                    <Link href="/servicemiddle" className="font-nunito font-16 lineh-16 color-29 weight-700 margin-t d-inline-block laearnmore2">Learn
                                                        More <span><i className="fa-solid fa-arrow-right" /></span></Link>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="service3-imag1">
                                                    <img src="/assets/images/sectionimg/servicev1img3.png" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="service3-boxarea margin-b30 bgservice2">
                                        <div className="row">
                                            <div className="col-lg-6 ">
                                                <div className="service3-text2">
                                                    <Link href="/servicemiddle">
                                                        <h1 className="font-lora font-22 lineh-24 color-29 weight-600 margin-b">Tax
                                                            Managment Plan</h1>
                                                    </Link>
                                                    <p className="font-ks font-16 lineh-26 weight-500 color-30">Our team comprises certified
                                                        financial experts with years of experience in diverse areas of finance.</p>
                                                    <Link href="/servicemiddle" className="font-ks font-16 lineh-16 color-29 weight-700 margin-t d-inline-block laearnmore2">Learn
                                                        More <span><i className="fa-solid fa-arrow-right" /></span></Link>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="service3-imag1">
                                                    <img src="/assets/images/sectionimg/servicev1img4.png" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*===== SERVICE ENDS=======*/}
                    {/*===== FAQ STARTS=======*/}
                    <div className="faq-section-area section-padding5 otherbg">
                        <img src="/assets/images/elementor/elementor23.png" alt="" className="elementor24" />
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7 m-auto">
                                    <div className="faq-textarea margin-b60">
                                        <h1 className="font-lora font-48 lineh-52 color-29 weight-600 margin-b">Frequently Asked Questions
                                        </h1>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="accordian-area accourbutton">
                                        <div className="accordion accordian4" id="accordionExample">
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="accordion-item borderlefts">
                                                        <h2 className="accordion-header" onClick={() => handleClick(1)}>
                                                            <button className={isActive.key == 1 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                                What types of consulting services do you offer?
                                                            </button>
                                                        </h2>
                                                        <div id="collapseOne" className={isActive.key == 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
                                                            <div className="accordion-body">
                                                                <p className="font-ks font-16 lineh-26 weight-500 color-22 ">Our consulting
                                                                    process involves four key steps: Discovery, Strategy,
                                                                    Implementation, and Sustainment. We start by understanding your
                                                                    challenges and goals, then craft a customized strategy.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-item borderlefts">
                                                        <h2 className="accordion-header" onClick={() => handleClick(2)}>
                                                            <button className={isActive.key == 2 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                                How does your consulting process work?
                                                            </button>
                                                        </h2>
                                                        <div id="collapseTwo" className={isActive.key == 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
                                                            <div className="accordion-body">
                                                                <p className="font-ks font-16 lineh-26 weight-500 color-30 ">Our consulting
                                                                    process involves four key steps: Discovery, Strategy,
                                                                    Implementation, and Sustainment. We start by understanding your
                                                                    challenges and goals, then craft a customized strategy.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-item borderlefts">
                                                        <h2 className="accordion-header" onClick={() => handleClick(3)}>
                                                            <button className={isActive.key == 3 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                                What industries do you specialize in?
                                                            </button>
                                                        </h2>
                                                        <div id="collapseThree" className={isActive.key == 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
                                                            <div className="accordion-body">
                                                                <p className="font-ks font-16 lineh-26 weight-500 color-30 ">Our consulting
                                                                    process involves four key steps: Discovery, Strategy,
                                                                    Implementation, and Sustainment. We start by understanding your
                                                                    challenges and goals, then craft a customized strategy.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-item m-0 borderlefts">
                                                        <h2 className="accordion-header" onClick={() => handleClick(4)}>
                                                            <button className={isActive.key == 4 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                                What sets your consulting firm apart from others?
                                                            </button>
                                                        </h2>
                                                        <div id="collapseFour" className={isActive.key == 4 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
                                                            <div className="accordion-body">
                                                                <p className="font-ks font-16 lineh-26 weight-500 color-30 ">Our consulting
                                                                    process involves four key steps: Discovery, Strategy,
                                                                    Implementation, and Sustainment. We start by understanding your
                                                                    challenges and goals, then craft a customized strategy.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="accordian-area accourbutton">
                                                        <div className="accordion accordian4">
                                                            <div className="accordion-item borderlefts">
                                                                <h2 className="accordion-header" onClick={() => handleClick(5)}>
                                                                    <button className={isActive.key == 5 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                                                                        What can I expect during an initial consultation?
                                                                    </button>
                                                                </h2>
                                                                <div id="collapseFive" className={isActive.key == 5 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
                                                                    <div className="accordion-body">
                                                                        <p className="font-ks font-16 lineh-26 weight-500 color-22 ">Yes, we
                                                                            offer expertise in talent acquisition and team building to
                                                                            your strategies. We understand that a strong team is
                                                                            essential for business success and can provide guidance on
                                                                            hiring the right talent </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="accordion-item borderlefts">
                                                                <h2 className="accordion-header" onClick={() => handleClick(6)}>
                                                                    <button className={isActive.key == 6 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                                                        What is the first step in your consulting ?
                                                                    </button>
                                                                </h2>
                                                                <div id="collapseSix" className={isActive.key == 6 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
                                                                    <div className="accordion-body">
                                                                        <p className="font-ks font-16 lineh-26 weight-500 color-30 ">Yes, we
                                                                            offer expertise in talent acquisition and team building to
                                                                            your strategies. We understand that a strong team is
                                                                            essential for business success and can provide guidance on
                                                                            hiring the right talent </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="accordion-item borderlefts">
                                                                <h2 className="accordion-header" onClick={() => handleClick(7)}>
                                                                    <button className={isActive.key == 7 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                                                        Consulting services help with crisis management?
                                                                    </button>
                                                                </h2>
                                                                <div id="collapseSeven" className={isActive.key == 7 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
                                                                    <div className="accordion-body">
                                                                        <p className="font-ks font-16 lineh-26 weight-500 color-30 ">Yes, we
                                                                            offer expertise in talent acquisition and team building to
                                                                            your strategies. We understand that a strong team is
                                                                            essential for business success and can provide guidance on
                                                                            hiring the right talent </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="accordion-item m-0 borderlefts">
                                                                <h2 className="accordion-header" onClick={() => handleClick(8)}>
                                                                    <button className={isActive.key == 8 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                                                        Data and analytics play your consulting approach?
                                                                    </button>
                                                                </h2>
                                                                <div id="collapseEight" className={isActive.key == 8 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
                                                                    <div className="accordion-body">
                                                                        <p className="font-ks font-16 lineh-26 weight-500 color-30 ">Yes, we
                                                                            offer expertise in talent acquisition and team building to
                                                                            your strategies. We understand that a strong team is
                                                                            essential for business success and can provide guidance on
                                                                            hiring the right talent </p>
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
                            </div>
                        </div>
                        <img src="/assets/images/elementor/elementor23.png" alt="" className="elementor25" />
                    </div>
                    {/*===== FAQ END=======*/}
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