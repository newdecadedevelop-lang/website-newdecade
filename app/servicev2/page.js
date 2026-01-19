import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function Home() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Our Insurance Services">
                <div>
                    <div className="servicev1-section-area section-padding5">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7 m-auto">
                                    <div className="servicev1-textarea margin-b60 text-center">
                                        <h1 className="font-48 font-lora weight-600 color-29 lineh-56">
                                            Comprehensive Insurance Solutions for California
                                        </h1>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                {/* Personal Auto Insurance */}
                                <div className="col-lg-6 col-md-6">
                                    <div className="service3-boxarea margin-b30 bgservice2">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="service3-text2">
                                                    <Link href="/services/personal-auto">
                                                        <h1 className="font-lora font-22 lineh-24 color-29 weight-600 margin-b">
                                                            Personal Auto Insurance
                                                        </h1>
                                                    </Link>
                                                    <p className="font-ks font-16 lineh-26 weight-500 color-30">
                                                        Full coverage and liability options for all drivers. We welcome everyone, including those with tickets or accidents.
                                                    </p>
                                                    <Link href="/services/personal-auto" className="font-ks font-16 lineh-16 color-29 weight-700 margin-t d-inline-block laearnmore2">
                                                        Learn More <span><i className="fa-solid fa-arrow-right" /></span>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="service3-imag1">
                                                    <img src="/assets/images/sectionimg/servicev1img1.png" alt="Personal Auto Insurance" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Motorcycle Insurance */}
                                <div className="col-lg-6 col-md-6">
                                    <div className="service3-boxarea margin-b30 bgservice2">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="service3-text2">
                                                    <Link href="/services/motorcycle">
                                                        <h1 className="font-lora font-22 lineh-24 color-29 weight-600 margin-b">
                                                            Motorcycle Insurance
                                                        </h1>
                                                    </Link>
                                                    <p className="font-ks font-16 lineh-26 weight-500 color-30">
                                                        Comprehensive coverage for your two-wheeled adventures. Protect your bike and yourself on California roads.
                                                    </p>
                                                    <Link href="/services/motorcycle" className="font-ks font-16 lineh-16 color-29 weight-700 margin-t d-inline-block laearnmore2">
                                                        Learn More <span><i className="fa-solid fa-arrow-right" /></span>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="service3-imag1">
                                                    <img src="/assets/images/sectionimg/servicev1img2.png" alt="Motorcycle Insurance" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Commercial Insurance */}
                                <div className="col-lg-6 col-md-6">
                                    <div className="service3-boxarea margin-b30 bgservice2">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="service3-text2">
                                                    <Link href="/services/commercial">
                                                        <h1 className="font-lora font-22 lineh-24 color-29 weight-600 margin-b">
                                                            Commercial Insurance
                                                        </h1>
                                                    </Link>
                                                    <p className="font-ks font-16 lineh-26 weight-500 color-30">
                                                        Protection for restaurants, bars, retail shops, offices, and other businesses throughout California.
                                                    </p>
                                                    <Link href="/services/commercial" className="font-ks font-16 lineh-16 color-29 weight-700 margin-t d-inline-block laearnmore2">
                                                        Learn More <span><i className="fa-solid fa-arrow-right" /></span>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="service3-imag1">
                                                    <img src="/assets/images/sectionimg/servicev1img3.png" alt="Commercial Insurance" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* SR-22 & High Risk */}
                                <div className="col-lg-6 col-md-6">
                                    <div className="service3-boxarea margin-b30 bgservice2">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="service3-text2">
                                                    <Link href="/services/sr22">
                                                        <h1 className="font-lora font-22 lineh-24 color-29 weight-600 margin-b">
                                                            SR-22 & High Risk
                                                        </h1>
                                                    </Link>
                                                    <p className="font-ks font-16 lineh-26 weight-500 color-30">
                                                        Specialized coverage for drivers who need SR-22 filing. We help you get back on the road legally.
                                                    </p>
                                                    <Link href="/services/sr22" className="font-ks font-16 lineh-16 color-29 weight-700 margin-t d-inline-block laearnmore2">
                                                        Learn More <span><i className="fa-solid fa-arrow-right" /></span>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="service3-imag1">
                                                    <img src="/assets/images/sectionimg/servicev1img4.png" alt="SR-22 Insurance" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Workers' Compensation */}
                                <div className="col-lg-6 col-md-6">
                                    <div className="service3-boxarea margin-b30 bgservice2">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="service3-text2">
                                                    <Link href="/services/workers-comp">
                                                        <h1 className="font-lora font-22 lineh-24 color-29 weight-600 margin-b">
                                                            Workers' Compensation
                                                        </h1>
                                                    </Link>
                                                    <p className="font-ks font-16 lineh-26 weight-500 color-30">
                                                        Essential protection for your employees and business. Comprehensive coverage to meet California requirements.
                                                    </p>
                                                    <Link href="/services/workers-comp" className="font-ks font-16 lineh-16 color-29 weight-700 margin-t d-inline-block laearnmore2">
                                                        Learn More <span><i className="fa-solid fa-arrow-right" /></span>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="service3-imag1">
                                                    <img src="/assets/images/sectionimg/servicev1img5.png" alt="Workers' Compensation" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* General Liability */}
                                <div className="col-lg-6 col-md-6">
                                    <div className="service3-boxarea margin-b30 bgservice2">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="service3-text2">
                                                    <Link href="/services/general-liability">
                                                        <h1 className="font-lora font-22 lineh-24 color-29 weight-600 margin-b">
                                                            General Liability
                                                        </h1>
                                                    </Link>
                                                    <p className="font-ks font-16 lineh-26 weight-500 color-30">
                                                        Protect your business from claims and lawsuits. Coverage for bodily injury, property damage, and more.
                                                    </p>
                                                    <Link href="/services/general-liability" className="font-ks font-16 lineh-16 color-29 weight-700 margin-t d-inline-block laearnmore2">
                                                        Learn More <span><i className="fa-solid fa-arrow-right" /></span>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="service3-imag1">
                                                    <img src="/assets/images/sectionimg/servicev1img6.png" alt="General Liability" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Business Owners Policy (BOP) */}
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
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*===== SERVCEV2 END=======*/}

                    {/*===== CTA STARST=======*/}
                    <div className="cta5-section-area section-padding4">
                        <img src="/assets/images/elementor/elementor72.png" alt="" className="elementors72" />
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="cta5-auhtor6-area">
                                        <h1 className="font-lora font-48 lineh-52 color weight-600 margin-b text-capitalize">
                                            Get Your Free Insurance Quote Today
                                        </h1>
                                        <p className="font-ks font-16 lineh-26 weight-500 color-21">
                                            We believe that informed clients make better insurance decisions. Our experienced team is here to help you find the right coverage at the best price.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-2" />
                                <div className="col-lg-4">
                                    <div className="cta5-btn5-sexction">
                                        <Link href="/" className="theme6-btn6 bakgrnd5 font-ks lineh-16 weight-700 color font-16">
                                            Get Free Quote
                                            <span><i className="fa-solid fa-arrow-right" /></span>
                                        </Link>
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
                    {/*===== CTA END=======*/}
                </div>
            </Layout>
        </>
    )
}
