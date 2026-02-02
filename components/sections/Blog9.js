
import Link from "next/link"

export default function Blog9() {
    return (
        <>

            <div className="blog9-section-area section-padding8">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 m-auto">
                            <div className="blog9-header text-center margin-b60">
                                <span className="font-16 font-ks lineh-16 weight-500 colorhp9 d-inline-block margin-b24 insurance">Our Insurance Services</span>
                                <h1 className="font-lora font-44 lineh-54 weight-600 colorh9">Comprehensive Coverage Solutions</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6" data-aos="zoom-out" data-aos-easing="linear" data-aos-duration={1000}>
                            <div className="blog9-boxarea">
                                <div className="blog9-authorarea">
                                    <img src="/assets/images/newdecade/newdecade_44.jpg" alt="" />
                                </div>
                                <div className="blog9auhtor-texrea">
                                    <div className="blog1-text">
                                        <img src="/assets/images/icons/vector1.png" alt="" className="ts" />
                                        <Link href="/services/personal-auto" className="color-h7">
                                            <p className="font-ks font-16 weight-500 color-h7 lineh-26 ts">Personal Insurance</p>
                                        </Link>
                                    </div>
                                    <Link href="/services/personal-auto" className="font-lora font-24 lineh-32 weight-600 color-h9 margin-b d-inline-block link-hover ts">Personal Auto & Fleet Coverage</Link>
                                    <p className="font-16 font-ks lineh-26 weight-500 color-h9 margin-b ts">From single vehicles to multi-state commercial fleets. Comprehensive coverage for personal and business transportation across CA, TX, FL, and AZ.</p>
                                    <Link href="/services/personal-auto" className="font-ks font-16 lineh-16 weight-700 color-h9 ts">Learn More<span className="ml1"><i className="fa-solid fa-arrow-right" /></span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6" data-aos="zoom-out" data-aos-easing="linear" data-aos-duration={1200}>
                            <div className="blog9-boxarea">
                                <div className="blog9-authorarea">
                                    <img src="/assets/images/newdecade/newdecade_45.jpg" alt="" />
                                </div>
                                <div className="blog9auhtor-texrea">
                                    <div className="blog1-text">
                                        <img src="/assets/images/icons/vector1.png" alt="" className="ts" />
                                        <Link href="/services/commercial" className="color-h7">
                                            <p className="font-ks font-16 weight-500 color-h7 lineh-26 ts">Business Insurance</p>
                                        </Link>
                                    </div>
                                    <Link href="/services/commercial" className="font-lora font-24 lineh-32 weight-600 color-h9 margin-b d-inline-block link-hover ts">Commercial Business Insurance</Link>
                                    <p className="font-16 font-ks lineh-26 weight-500 color-h9 margin-b ts">Comprehensive protection for restaurants, retail, logistics, construction, and professional services. Multi-state coverage with expert commercial specialists serving 50+ industries.</p>
                                    <Link href="/services/commercial" className="font-ks font-16 lineh-16 weight-700 color-h9 ts">Learn More<span className="ml1"><i className="fa-solid fa-arrow-right" /></span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6" data-aos="zoom-out" data-aos-easing="linear" data-aos-duration={1400}>
                            <div className="blog9-boxarea">
                                <div className="blog9-authorarea">
                                    <img src="/assets/images/newdecade/newdecade_46.jpg" alt="" />
                                </div>
                                <div className="blog9auhtor-texrea">
                                    <div className="blog1-text">
                                        <img src="/assets/images/icons/vector1.png" alt="" className="ts" />
                                        <Link href="/services/workers-comp" className="color-h7">
                                            <p className="font-ks font-16 weight-500 color-h7 lineh-26 ts">Business Protection</p>
                                        </Link>
                                    </div>
                                    <Link href="/services/workers-comp" className="font-lora font-24 lineh-32 weight-600 color-h9 margin-b d-inline-block link-hover ts">Workers' Comp & General Liability</Link>
                                    <p className="font-16 font-ks lineh-26 weight-500 color-h9 margin-b ts">Essential employee protection and business liability coverage across multiple states. Fast COI turnaround, digital management, and expert compliance guidance with 20+ years of experience.</p>
                                    <Link href="/services/workers-comp" className="font-ks font-16 lineh-16 weight-700 color-h9 ts">Learn More<span className="ml1"><i className="fa-solid fa-arrow-right" /></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
