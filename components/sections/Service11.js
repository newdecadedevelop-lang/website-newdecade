
import Link from "next/link"

export default function Service11() {
    return (
        <>

            <div className="service9-section-area section-padding8">
                <img src="/assets/images/elementor/elementor18.png" alt="" className="elementors59" />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 m-auto">
                            <div className="service9-header margin-b60 text-center">
                                <span className="font-16 font-ks lineh-16 weight-500 colorhp9 d-inline-block margin-b24 insurance">Personal & Commercial Insurance</span>
                                <h1 className="font-lora font-44 lineh-54 weight-600 colorh9">Comprehensive Coverage for Individuals & Businesses</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6" data-aos="fade-right" data-aos-duration={1000}>
                            <div className="service9-boxarea margin-b30">
                                <div className="service9-images">
                                    <img src="/assets/images/newdecade/newdecade_15.jpg" alt="" />
                                </div>
                                <div className="service9icons">
                                    <img src="/assets/images/icons/service9icon4.png" alt="" />
                                </div>
                                <div className="service9-texreas">
                                    <Link href="/services/personal-auto" className="font-lora font-24 weight-600 lineh-26 color-h9 margin-b d-inline-block ts">Personal Auto Insurance</Link>
                                    <p className="font-16 font-ks weight-500 colorhp1 lineh-26 ts">Comprehensive coverage tailored for all drivers, including those with tickets or accidents. SR-22 filing available.</p>
                                    <Link href="/services/personal-auto" className="learnservices margin-t28 d-inline-block font-ks lineh-16 ts weight-700 color-h9">Learn More <span><i className="fa-solid fa-arrow-right ml1" /></span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6" data-aos="fade-right" data-aos-duration={1200}>
                            <div className="service9-boxarea margin-b30">
                                <div className="service9-images">
                                    <img src="/assets/images/newdecade/newdecade_21.jpg" alt="" />
                                </div>
                                <div className="service9icons">
                                    <img src="/assets/images/icons/service9icon5.png" alt="" />
                                </div>
                                <div className="service9-texreas">
                                    <Link href="/services/commercial" className="font-lora font-24 weight-600 lineh-26 color-h9 margin-b d-inline-block ts">Commercial Insurance</Link>
                                    <p className="font-16 font-ks weight-500 colorhp1 lineh-26 ts">Protection for your business, including restaurants, bars, retail shops, offices, and more throughout California.</p>
                                    <Link href="/services/commercial" className="learnservices margin-t28 d-inline-block font-ks lineh-16 ts weight-700 color-h9">Learn More <span><i className="fa-solid fa-arrow-right ml1" /></span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6" data-aos="fade-right" data-aos-duration={1400}>
                            <div className="service9-boxarea margin-b30">
                                <div className="service9-images">
                                    <img src="/assets/images/newdecade/newdecade_3.jpg" alt="" />
                                </div>
                                <div className="service9icons">
                                    <img src="/assets/images/icons/service9icon6.png" alt="" />
                                </div>
                                <div className="service9-texreas">
                                    <Link href="/services/workers-comp" className="font-lora font-24 weight-600 lineh-26 color-h9 margin-b d-inline-block ts">Workers' Compensation</Link>
                                    <p className="font-16 font-ks weight-500 colorhp1 lineh-26 ts">Essential protection for your employees and business liability coverage. Required for California businesses with employees.</p>
                                    <Link href="/services/workers-comp" className="learnservices margin-t28 d-inline-block font-ks lineh-16 ts weight-700 color-h9">Learn More <span><i className="fa-solid fa-arrow-right ml1" /></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img src="/assets/images/elementor/elementor60.png" alt="" className="elementors60" />
            </div>
        </>
    )
}
