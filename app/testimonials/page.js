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

            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Testimonial">
                <div>
                    <div className="testimonialinner-section-area section-padding5">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 m-auto">
                                    <h1 className="font-lora font-48 lineh-52 color-29 weight-600 margin-b60 text-center">Testimonials From
                                        Our Valued Clients</h1>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="testimonial-autor-area bginner">
                                        <div className="qutio1 margin-b">
                                            <img src="/assets/images/icons/qutio1.png" alt="" />
                                        </div>
                                        <div className="star-list">
                                            <ul>
                                                <li><span className="color-24"><i className="fa-solid fa-star" /></span></li>
                                                <li><span className="color-24"><i className="fa-solid fa-star" /></span></li>
                                                <li><span className="color-24"><i className="fa-solid fa-star" /></span></li>
                                                <li><span className="color-24"><i className="fa-solid fa-star" /></span></li>
                                                <li><span className="color33"><i className="fa-solid fa-star" /></span></li>
                                            </ul>
                                        </div>
                                        <p className="font-ks font-18 lineh-28 weight-500 color-29 margin-b24 margin-t">“The team at Consalt
                                            Company to be demonstrated an in-depth success understanding of our industry. Their tailored
                                            solutions addressed best.”</p>
                                        <div className="border-4 margin-b24" />
                                        <div className="mans-author">
                                            <div className="mans">
                                                <img src="/assets/images/sectionimg/testomonial1.png" alt="" />
                                            </div>
                                            <div className="names-text">
                                                <h1 className="font-16 font-lora lineh-18 color-29 weight-600 margin-b11">Tina Wilkinson
                                                </h1>
                                                <p className="font-14 weight-500 color-26 font-ks color-30 ">CEO, Wingree Ltd</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="testimonial-autor-area bginner">
                                        <div className="qutio1 margin-b">
                                            <img src="/assets/images/icons/qutio1.png" alt="" />
                                        </div>
                                        <div className="star-list">
                                            <ul>
                                                <li><span className="color-24"><i className="fa-solid fa-star" /></span></li>
                                                <li><span className="color-24"><i className="fa-solid fa-star" /></span></li>
                                                <li><span className="color-24"><i className="fa-solid fa-star" /></span></li>
                                                <li><span className="color-24"><i className="fa-solid fa-star" /></span></li>
                                                <li><span className="color33"><i className="fa-solid fa-star" /></span></li>
                                            </ul>
                                        </div>
                                        <p className="font-ks font-18 lineh-28 weight-500 color-29 margin-b24 margin-t">“From the very first
                                            meeting, it was clear that Consalt Consulting Contact was dedicated to our success. Their
                                            hands-on approach and for best.”</p>
                                        <div className="border-4 margin-b24" />
                                        <div className="mans-author">
                                            <div className="mans">
                                                <img src="/assets/images/sectionimg/testimonial2.png" alt="" />
                                            </div>
                                            <div className="names-text">
                                                <h1 className="font-16 font-lora lineh-18 color-29 weight-600 margin-b11">Leland Osinski
                                                </h1>
                                                <p className="font-14 weight-500 color-26 font-ks color-30 ">Marketing Director</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="testimonial-autor-area bginner">
                                        <div className="qutio1 margin-b">
                                            <img src="/assets/images/icons/qutio1.png" alt="" />
                                        </div>
                                        <div className="star-list">
                                            <ul>
                                                <li><span className="color-24"><i className="fa-solid fa-star" /></span></li>
                                                <li><span className="color-24"><i className="fa-solid fa-star" /></span></li>
                                                <li><span className="color-24"><i className="fa-solid fa-star" /></span></li>
                                                <li><span className="color-24"><i className="fa-solid fa-star" /></span></li>
                                                <li><span className="color33"><i className="fa-solid fa-star" /></span></li>
                                            </ul>
                                        </div>
                                        <p className="font-ks font-18 lineh-28 weight-500 color-29 margin-b24 margin-t">“Choosing Consalt
                                            Consulting to their Company was one of the best to be decisions we made. Their expertise in
                                            is unparalleled, and they delivered."</p>
                                        <div className="border-4 margin-b24" />
                                        <div className="mans-author">
                                            <div className="mans">
                                                <img src="/assets/images/sectionimg/testomonial1.png" alt="" />
                                            </div>
                                            <div className="names-text">
                                                <h1 className="font-16 font-lora lineh-18 color-29 weight-600 margin-b11">Elena Orn</h1>
                                                <p className="font-14 weight-500 color-26 font-ks color-30 ">COO of 123 Enterprises</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="testimonial-autor-area bginner">
                                        <div className="qutio1 margin-b">
                                            <img src="/assets/images/icons/qutio1.png" alt="" />
                                        </div>
                                        <div className="star-list">
                                            <ul>
                                                <li><span className="color-24"><i className="fa-solid fa-star" /></span></li>
                                                <li><span className="color-24"><i className="fa-solid fa-star" /></span></li>
                                                <li><span className="color-24"><i className="fa-solid fa-star" /></span></li>
                                                <li><span className="color-24"><i className="fa-solid fa-star" /></span></li>
                                                <li><span className="color33"><i className="fa-solid fa-star" /></span></li>
                                            </ul>
                                        </div>
                                        <p className="font-ks font-18 lineh-28 weight-500 color-29 margin-b24 margin-t">Choosing Consalt
                                            Consulting to their Company was one of the best to be decisions we made. Their expertise in
                                            is unparalleled, and they delivered,”</p>
                                        <div className="border-4 margin-b24" />
                                        <div className="mans-author">
                                            <div className="mans">
                                                <img src="/assets/images/sectionimg/testiinner1.png" alt="" />
                                            </div>
                                            <div className="names-text">
                                                <h1 className="font-16 font-lora lineh-18 color-29 weight-600 margin-b11">Melinda Bradtke
                                                </h1>
                                                <p className="font-14 weight-500 color-26 font-ks color-30 ">Founder of LMN Startups</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="testimonial-autor-area bginner">
                                        <div className="qutio1 margin-b">
                                            <img src="/assets/images/icons/qutio1.png" alt="" />
                                        </div>
                                        <div className="star-list">
                                            <ul>
                                                <li><span className="color-24"><i className="fa-solid fa-star" /></span></li>
                                                <li><span className="color-24"><i className="fa-solid fa-star" /></span></li>
                                                <li><span className="color-24"><i className="fa-solid fa-star" /></span></li>
                                                <li><span className="color-24"><i className="fa-solid fa-star" /></span></li>
                                                <li><span className="color33"><i className="fa-solid fa-star" /></span></li>
                                            </ul>
                                        </div>
                                        <p className="font-ks font-18 lineh-28 weight-500 color-29 margin-b24 margin-t">“As a small
                                            business, we were facing numerous challenges. Consulting Company Name not only identified
                                            these pain points but also guided us.”</p>
                                        <div className="border-4 margin-b24" />
                                        <div className="mans-author">
                                            <div className="mans">
                                                <img src="/assets/images/sectionimg/testiinner3.png" alt="" />
                                            </div>
                                            <div className="names-text">
                                                <h1 className="font-16 font-lora lineh-18 color-29 weight-600 margin-b11">Valerie Cummings
                                                </h1>
                                                <p className="font-14 weight-500 color-26 font-ks color-30 ">Owner of QRS Solutions</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="testimonial-autor-area bginner">
                                        <div className="qutio1 margin-b">
                                            <img src="/assets/images/icons/qutio1.png" alt="" />
                                        </div>
                                        <div className="star-list">
                                            <ul>
                                                <li><span className="color-24"><i className="fa-solid fa-star" /></span></li>
                                                <li><span className="color-24"><i className="fa-solid fa-star" /></span></li>
                                                <li><span className="color-24"><i className="fa-solid fa-star" /></span></li>
                                                <li><span className="color-24"><i className="fa-solid fa-star" /></span></li>
                                                <li><span className="color33"><i className="fa-solid fa-star" /></span></li>
                                            </ul>
                                        </div>
                                        <p className="font-ks font-18 lineh-28 weight-500 color-29 margin-b24 margin-t">“Ready to take your
                                            business to the next level? Contact us today and best experience the same exceptional  to
                                            results that our clients rave about.”</p>
                                        <div className="border-4 margin-b24" />
                                        <div className="mans-author">
                                            <div className="mans">
                                                <img src="/assets/images/sectionimg/testiinner4.png" alt="" />
                                            </div>
                                            <div className="names-text">
                                                <h1 className="font-16 font-lora lineh-18 color-29 weight-600 margin-b11">Eduardo Hintz</h1>
                                                <p className="font-14 weight-500 color-26 font-ks color-30 ">Pinnacle Tech Group/p&gt;
                                                </p></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="testimonial-autor-area bginner">
                                        <div className="qutio1 margin-b">
                                            <img src="/assets/images/icons/qutio1.png" alt="" />
                                        </div>
                                        <div className="star-list">
                                            <ul>
                                                <li><span className="color-24"><i className="fa-solid fa-star" /></span></li>
                                                <li><span className="color-24"><i className="fa-solid fa-star" /></span></li>
                                                <li><span className="color-24"><i className="fa-solid fa-star" /></span></li>
                                                <li><span className="color-24"><i className="fa-solid fa-star" /></span></li>
                                                <li><span className="color33"><i className="fa-solid fa-star" /></span></li>
                                            </ul>
                                        </div>
                                        <p className="font-ks font-18 lineh-28 weight-500 color-29 margin-b24 margin-t">“Ready to take your
                                            business to the next level? Contact us today and best experience the same exceptional  to
                                            results that our clients rave about.”</p>
                                        <div className="border-4 margin-b24" />
                                        <div className="mans-author">
                                            <div className="mans">
                                                <img src="/assets/images/sectionimg/testiinner5.png" alt="" />
                                            </div>
                                            <div className="names-text">
                                                <h1 className="font-16 font-lora lineh-18 color-29 weight-600 margin-b11">Gilberto Tremblay
                                                </h1>
                                                <p className="font-14 weight-500 color-26 font-ks color-30 ">Founder of Innovate Labs</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="testimonial-autor-area bginner">
                                        <div className="qutio1 margin-b">
                                            <img src="/assets/images/icons/qutio1.png" alt="" />
                                        </div>
                                        <div className="star-list">
                                            <ul>
                                                <li><span className="color-24"><i className="fa-solid fa-star" /></span></li>
                                                <li><span className="color-24"><i className="fa-solid fa-star" /></span></li>
                                                <li><span className="color-24"><i className="fa-solid fa-star" /></span></li>
                                                <li><span className="color-24"><i className="fa-solid fa-star" /></span></li>
                                                <li><span className="color33"><i className="fa-solid fa-star" /></span></li>
                                            </ul>
                                        </div>
                                        <p className="font-ks font-18 lineh-28 weight-500 color-29 margin-b24 margin-t">“If you're looking
                                            for consultants who genuinely care about your success, This Consulting Company Name is the
                                            answer, their dedication, coupled."</p>
                                        <div className="border-4 margin-b24" />
                                        <div className="mans-author">
                                            <div className="mans">
                                                <img src="/assets/images/sectionimg/testiinner6.png" alt="" />
                                            </div>
                                            <div className="names-text">
                                                <h1 className="font-16 font-lora lineh-18 color-29 weight-600 margin-b11">Conrad Lubowitz
                                                </h1>
                                                <p className="font-14 weight-500 color-26 font-ks color-30 ">HR Manager at Visionary</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="testimonial-autor-area bginner">
                                        <div className="qutio1 margin-b">
                                            <img src="/assets/images/icons/qutio1.png" alt="" />
                                        </div>
                                        <div className="star-list">
                                            <ul>
                                                <li><span className="color-24"><i className="fa-solid fa-star" /></span></li>
                                                <li><span className="color-24"><i className="fa-solid fa-star" /></span></li>
                                                <li><span className="color-24"><i className="fa-solid fa-star" /></span></li>
                                                <li><span className="color-24"><i className="fa-solid fa-star" /></span></li>
                                                <li><span className="color33"><i className="fa-solid fa-star" /></span></li>
                                            </ul>
                                        </div>
                                        <p className="font-ks font-18 lineh-28 weight-500 color-29 margin-b24 margin-t">“After partnering
                                            with Your Consalt Consulting Company Name], our company's trajectory shifted upward. Their
                                            strategic advice propelled us .”</p>
                                        <div className="border-4 margin-b24" />
                                        <div className="mans-author">
                                            <div className="mans">
                                                <img src="/assets/images/sectionimg/testiinner7.png" alt="" />
                                            </div>
                                            <div className="names-text">
                                                <h1 className="font-16 font-lora lineh-18 color-29 weight-600 margin-b11">Valerie Homenick
                                                </h1>
                                                <p className="font-14 weight-500 color-26 font-ks color-30 ">Executive Director of Harmony
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12 text-center">
                                    <nav aria-label="Page navigation example">
                                        <ul className="pagination">
                                            <li className="page-item">
                                                <Link className="page-link" href="#" aria-label="Previous">
                                                    <span aria-hidden="true">«</span>
                                                </Link>
                                            </li>
                                            <li className="page-item pagecolor"><Link className="page-link" href="#">1</Link></li>
                                            <li className="page-item"><Link className="page-link" href="#">2</Link></li>
                                            <li className="page-item"><Link className="page-link" href="#">3</Link></li>
                                            <li className="page-item"><Link className="page-link" href="#">...</Link></li>
                                            <li className="page-item"><Link className="page-link" href="#">12</Link></li>
                                            <li className="page-item">
                                                <Link className="page-link" href="#" aria-label="Next">
                                                    <span aria-hidden="true">»</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*===== TESTIMONAIL END=======*/}
                    {/*===== FAQ STARTS=======*/}
                    <div className="faq-section-area section-padding5">
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
                                                    <div className="accordion-item bordernone">
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
                                                    <div className="accordion-item bordernone">
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
                                                    <div className="accordion-item bordernone">
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
                                                    <div className="accordion-item m-0 bordernone">
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
                                                            <div className="accordion-item bordernone">
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
                                                            <div className="accordion-item bordernone">
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
                                                            <div className="accordion-item bordernone">
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
                                                            <div className="accordion-item m-0 bordernone">
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