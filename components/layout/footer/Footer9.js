import Link from "next/link"

export default function Footer9() {
    return (
        <>
            <div className="footer9-section-area6">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="footer4-all-area footer6 section-padding15">
                                <div className="row">
                                    <div className="col-lg-3">
                                        <div className="footer-3logo">
                                            <img src="/assets/images/logo/NDLOGO.svg" alt="New Decade Insurance" />
                                            <p className="font-nunito font-16 lineh-26 color-nuni margin-t margin-b24">Protecting what matters most with comprehensive insurance solutions. From auto and motorcycle to business coverage, we're here to secure your future with competitive rates and exceptional service.</p>
                                        </div>
                                        <div className="social3-links-area list9area">
                                            <ul>
                                                <li><Link href="#"><i className="fa-brands fa-facebook-f" /></Link></li>
                                                <li><Link href="#" className="ml1"><i className="fa-brands fa-google-plus-g" /></Link></li>
                                                <li><Link href="#" className="ml1"><i className="fa-brands fa-instagram" /></Link></li>
                                                <li><Link href="#" className="ml1"><i className="fa-brands fa-youtube" /></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                        <div className="about-3-links align-items-center">
                                            <h1 className="font-20 lineh-20 font-lora weight-600 color-ni">Quick Links</h1>
                                            <ul>
                                                <li><Link href="/" className="font-nunito font-16 lineh-16 colorhp1 weight-600 margin-t32 d-inline-block">Home</Link></li>
                                                <li><Link href="/about" className="font-nunito font-16 lineh-16 colorhp1 weight-600 margin-t d-inline-block">About Us</Link></li>
                                                <li><Link href="/services" className="font-nunito font-16 lineh-16 colorhp1 weight-600 margin-t d-inline-block">Our Services</Link></li>
                                                <li><Link href="/faqs" className="font-nunito font-16 lineh-16 colorhp1 weight-600 margin-t d-inline-block">FAQs</Link></li>
                                                <li><Link href="/contact" className="font-nunito font-16 lineh-16 colorhp1 weight-600 margin-t d-inline-block">Contact</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                        <div className="contcat4-footer">
                                            <h1 className="font-20 lineh-20 font-lora weight-600 color-ni">Get in touch</h1>
                                            <div className="location-icon4 margin-t32">
                                                <div className="image5">
                                                    <img src="/assets/images/icons/email5.png" alt="" />
                                                </div>
                                                <Link href="/mailto:info@newdecadeinsurance.com" className="font-ks font-16 lineh-24 weight-500 colorhp1">info@newdecadeinsurance.com</Link>
                                            </div>
                                            <div className="location-icon4 margin-t">
                                                <div className="imgge5">
                                                    <img src="/assets/images/icons/location4.svg" alt="" />
                                                </div>
                                                <Link href="#" className="font-ks font-16 lineh-24 weight-500 colorhp1">Houston, Texas <br /> United States</Link>
                                            </div>
                                            <div className="location-icon4 margin-t">
                                                <div className="image5">
                                                    <img src="/assets/images/icons/phone7.svg" alt="" />
                                                </div>
                                                <Link href="/tel:+1-800-NEW-DECADE" className="font-ks font-16 lineh-24 weight-500 colorhp1">+1 (800) NEW-DECADE</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="border7" />
                            <div className="copyright4 text-center">
                                <p className="font-16 font-nunito color-28 weight-500 ">Copyright {new Date().getFullYear()} © New Decade Insurance. All rights reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <img src="/assets/images/elementor/elementor16.png" alt="" className="elementor61" />
                <img src="/assets/images/elementor/elementor18.png" alt="" className="elementors62" />
            </div>

        </>
    )
}
