import Link from "next/link"


export default function Footer1() {
    return (
        <>
            <div className="footer4-section-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="contcat5-section5-area section-padding15">
                                <div className="row">
                                    <div className="col-lg-3">
                                        <div className="contact5-logo5-text">
                                            <img src="/assets/images/logo/ND_LOGO_WHITE.png" alt="New Decade Insurance" />
                                            <p className="font-ks font-16 weight-500 lineh-26 color32 margin-t margin-b24">Protecting what matters most with comprehensive insurance solutions. From auto and motorcycle to business coverage, we're here to secure your future with competitive rates and exceptional service.</p>
                                            <div className="icon-social-links">
                                                <ul>
                                                    <li><Link href="#"><i className="fa-brands fa-facebook-f" /></Link></li>
                                                    <li><Link href="#" className="ml1"><i className="fa-brands fa-google-plus-g" /></Link>
                                                    </li>
                                                    <li><Link href="#" className="ml1"><i className="fa-brands fa-linkedin-in" /></Link>
                                                    </li>
                                                    <li><Link href="#" className="ml1"><i className="fa-brands fa-youtube" /></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                        <div className="about-5-links">
                                            <h1 className="font-20 font-lora weight-600 lineh-20 color">Quick Links</h1>
                                            <ul>
                                                <li><Link href="/" className="font-ks font-16 lineh-16 weight-500 color32 d-inline-block margin-t32">Home</Link></li>
                                                <li><Link href="/about" className="font-ks font-16 lineh-16 weight-500 color32 margin-t d-inline-block">About Us</Link></li>
                                                <li><Link href="/services" className="font-ks font-16 lineh-16 weight-500 color32 margin-t d-inline-block">Our Services</Link></li>
                                                <li><Link href="/faqs" className="font-ks font-16 lineh-16 weight-500 color32 margin-t d-inline-block">FAQs</Link></li>
                                                <li><Link href="/contact" className="font-ks font-16 lineh-16 weight-500 color32 margin-t d-inline-block">Contact</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="contact-footer heightleft">
                                            <h1 className="font-20 color lineh-20 font-lora margin-b24 weight-600">Contact Us</h1>
                                            <div className="email4">
                                                <img src="/assets/images/icons/email4.svg" alt="" />
                                                <Link href="/mailto:info@newdecadeinsurance.com" className="font-16 lineh-24 color32 weight-400 font-ks">info@newdecadeinsurance.com</Link>
                                            </div>
                                            <span className="location-fooetr ">
                                                <img src="/assets/images/icons/location2.png" alt="" className="heightwidth" />
                                                <Link href="#" className="font-16 font-ks lineh-26 weight-500 color32 margin-t">Houston, Texas <br /> United States</Link>
                                            </span>
                                            <div className="email4 margin-t">
                                                <img src="/assets/images/icons/phone5.svg" alt="" />
                                                <Link href="/tel:+1-800-NEW-DECADE" className="font-16 lineh-24 color32 weight-400 font-ks">+1 (800) NEW-DECADE</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="border10" />
                            <div className="copyright6 text-center">
                                <p className="font-ks lineh-26 weight-500 font-16 color32">Copyright {new Date().getFullYear()} © New Decade Insurance. All rights reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <img src="/assets/images/elementor/elementor72.png" alt="" className="elementors73" />
            </div>

        </>
    )
}
