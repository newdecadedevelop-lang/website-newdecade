
import Link from "next/link"

export default function Company3() {
    return (
        <>

            <div className="company9-section-area section-padding8">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 m-auto">
                            <div className="works9-section-area text-center margin-b60">
                                <span className="font-16 font-ks lineh-16 weight-500 colorhp9 d-inline-block margin-b24 insurance">Why Choose Us</span>
                                <h1 className="font-lora font-44 lineh-54 weight-600 colorh9">Experience the New Decade Difference</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration={1000}>
                            <div className="works9-boxarea margin-b30">
                                <div className="works-author-icon margin-b24">
                                    <img src="/assets/images/icons/exporticon1.svg" alt="" className="ts" />
                                    <h1 className="title-head font-42 weight-600 lineh-40 font-lora color-21">01</h1>
                                </div>
                                <Link href="/about" className="font-lora font-24 lineh-26 ts weight-600 color-h9 d-inline-block margin-b">Bilingual Service</Link>
                                <p className="font-ks font-16 lineh-26 weight-500 colorhp1 ts">We speak English and Spanish to serve you better. Hablamos Español con orgullo.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration={1200}>
                            <div className="works9-boxarea margin-b30">
                                <div className="works-author-icon margin-b24">
                                    <img src="/assets/images/icons/exporticon2.png" alt="" className="ts" />
                                    <h1 className="title-head font-42 weight-600 lineh-40 font-lora color-21">02</h1>
                                </div>
                                <Link href="/services/personal-auto" className="font-lora font-24 lineh-26 ts weight-600 color-h9 d-inline-block margin-b">All Drivers Welcome</Link>
                                <p className="font-ks font-16 lineh-26 weight-500 colorhp1 ts">Coverage for drivers with tickets or accidents. Everyone deserves a second chance.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration={1400}>
                            <div className="works9-boxarea margin-b30">
                                <div className="works-author-icon margin-b24">
                                    <img src="/assets/images/icons/exporticon3.svg" alt="" className="ts" />
                                    <h1 className="title-head font-42 weight-600 lineh-40 font-lora color-21">03</h1>
                                </div>
                                <Link href="/contact" className="font-lora font-24 lineh-26 ts weight-600 color-h9 d-inline-block margin-b">Personal Attention</Link>
                                <p className="font-ks font-16 lineh-26 weight-500 colorhp1 ts">Face-to-face service with a caring agent. We build long-term relationships.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration={1600}>
                            <div className="works9-boxarea margin-b30">
                                <div className="works-author-icon margin-b24">
                                    <img src="/assets/images/icons/exporticon1.svg" alt="" className="ts" />
                                    <h1 className="title-head font-42 weight-600 lineh-40 font-lora color-21">04</h1>
                                </div>
                                <Link href="/servicev2" className="font-lora font-24 lineh-26 ts weight-600 color-h9 d-inline-block margin-b">Best Value</Link>
                                <p className="font-ks font-16 lineh-26 weight-500 colorhp1 ts">Multiple carriers to find you the best rates. Over 20 years of experience.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
