import Link from "next/link"
import { useState } from "react"
import InsuranceQuoteModal from "@/components/modals/InsuranceQuoteModal"

export default function MobileMenu({ isMobileMenu, handleMobileMenu }) {
    const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)

    return (
        <>
            <div className="mobile-header mobile-header-4 d-block d-lg-none homepagesmall">
                <div className="container-fluid">
                    <div className="col-12">
                        <div className="mobile-header-elements">
                            <div className="mobile-logo">
                                <Link href="/"><img src="/assets/images/logo/NDLOGO_WHITE.svg" alt="New Decade Insurance" style={{ width: '300px', height: 'auto' }} /></Link>
                            </div>
                            <div className="mobile-nav-icon dots-menu" onClick={handleMobileMenu}>
                                <i className="fa-solid fa-bars" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`mobile-sidebar ${isMobileMenu ? "mobile-menu-active" : ""}`}>
                <div className="logoicons-area">
                    <div className="logos">
                        <img src="/assets/images/logo/NDLOGO_WHITE.svg" alt="New Decade Insurance" style={{ width: '300px', height: 'auto' }} />
                    </div>
                    <div className="menu-close" onClick={handleMobileMenu}>
                        <i className="fa-solid fa-xmark" />
                    </div>
                </div>
                <div className="mobile-nav">
                    <ul className="mobile-nav-list">
                        <li>
                            <Link href="/" className="font-ks font-18 weight-600 color">Home</Link>
                        </li>
                        <li>
                            <Link href="/about" className="font-ks font-18 weight-600 color">About Us</Link>
                        </li>
                        <li>
                            <Link href="/services" className="font-ks font-18 weight-600 color">Our Services</Link>
                        </li>
                        <li>
                            <Link href="/faqs" className="font-ks font-18 weight-600 color">FAQs</Link>
                        </li>
                        <li>
                            <Link href="/contact" className="font-ks font-18 weight-600 color">Contact</Link>
                        </li>
                    </ul>
                    <div className="allmobilesection">
                        <button
                            onClick={() => setIsQuoteModalOpen(true)}
                            className="font-ks font-18 lineh-18 weight-700 color mobilemenubtn"
                            style={{
                                background: 'transparent',
                                border: 'none',
                                cursor: 'pointer',
                                width: '100%',
                                textAlign: 'left'
                            }}
                        >
                            Get Free Quote
                        </button>
                        <div className="single-footer single-footer-menu single-footer4">
                            <h3 className="font-ks font-24 lineh-24 weight-600 color margin-b margin-t24">Contact Info</h3>
                            <div className="footer4-contact-info">
                                <div className="contact-info-single">
                                    <div className="contact-info-icon">
                                        <img src="/assets/images/icons/phone5.svg" alt="" />
                                    </div>
                                    <div className="contact-info-text">
                                        <Link href="/tel:888-585-9910" className="font-ks font-16 lineh-26 weight-500 color-21">888-585-9910</Link>
                                    </div>
                                </div>
                                <div className="contact-info-single">
                                    <div className="contact-info-icon">
                                        <img src="/assets/images/icons/email4.svg" alt="" />
                                    </div>
                                    <div className="contact-info-text">
                                        <Link href="/mailto:info@newdecadeinsurance.com" className="font-ks font-16 lineh-26 weight-500 color-21">info@newdecadeinsurance.com</Link>
                                    </div>
                                </div>
                                <div className="single-footer single-footer-menu single-footer4">
                                    <h3 className="font-ks font-24 lineh-24 weight-600 color margin-b margin-t24">Our Location</h3>
                                    <div className="contact-info-single">
                                        <div className="contact-info-icon">
                                            <img src="/assets/images/icons/location2.png" alt="" />
                                        </div>
                                        <div className="contact-info-text">
                                            <Link href="#" className="font-ks font-16 lineh-26 weight-500 color-21">2215 S. Vermont Ave Unit 103<br />Los Angeles, CA 90007</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="single-footer single-footer-menu single-footer4">
                                    <h3 className="font-ks font-24 lineh-24 weight-600 color margin-b margin-t24">Social Links</h3>
                                    <div className="social social4-menu social4">
                                        <ul>
                                            <li>
                                                <Link data-bs-toggle="tooltip" title="Linked in" href="#"><svg className="svg-inline--fa fa-facebook" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg>
                                                    <path fill="currentColor" d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.8 90.69 226.4 209.3 245V327.7h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.3 482.4 504 379.8 504 256z">
                                                    </path>
                                                </svg>{/* <i class="fa-brands fa-facebook"></i> Font Awesome fontawesome.com */}</Link>
                                            </li>
                                            <li>
                                                <Link data-bs-toggle="tooltip" title="Facebook" href="#"><svg className="svg-inline--fa fa-linkedin-in" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin-in" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg>
                                                    <path fill="currentColor" d="M100.3 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.6 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.3 61.9 111.3 142.3V448z">
                                                    </path>
                                                </svg>{/* <i class="fa-brands fa-linkedin-in"></i> Font Awesome fontawesome.com */}</Link>
                                            </li>
                                            <li>
                                                <Link data-bs-toggle="tooltip" title="Instagram" href="#"><svg className="svg-inline--fa fa-youtube" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="youtube" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg>
                                                    <path fill="currentColor" d="M549.7 124.1c-6.281-23.65-24.79-42.28-48.28-48.6C458.8 64 288 64 288 64S117.2 64 74.63 75.49c-23.5 6.322-42 24.95-48.28 48.6-11.41 42.87-11.41 132.3-11.41 132.3s0 89.44 11.41 132.3c6.281 23.65 24.79 41.5 48.28 47.82C117.2 448 288 448 288 448s170.8 0 213.4-11.49c23.5-6.321 42-24.17 48.28-47.82 11.41-42.87 11.41-132.3 11.41-132.3s0-89.44-11.41-132.3zm-317.5 213.5V175.2l142.7 81.21-142.7 81.2z">
                                                    </path>
                                                </svg>{/* <i class="fa-brands fa-youtube"></i> Font Awesome fontawesome.com */}</Link>
                                            </li>
                                            <li>
                                                <Link data-bs-toggle="tooltip" title="TikTok" href="#"><svg className="svg-inline--fa fa-twitter" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg>
                                                    <path fill="currentColor" d="M459.4 151.7c.325 4.548 .325 9.097 .325 13.65 0 138.7-105.6 298.6-298.6 298.6-59.45 0-114.7-17.22-161.1-47.11 8.447 .974 16.57 1.299 25.34 1.299 49.06 0 94.21-16.57 130.3-44.83-46.13-.975-84.79-31.19-98.11-72.77 6.498 .974 12.99 1.624 19.82 1.624 9.421 0 18.84-1.3 27.61-3.573-48.08-9.747-84.14-51.98-84.14-102.1v-1.299c13.97 7.797 30.21 12.67 47.43 13.32-28.26-18.84-46.78-51.01-46.78-87.39 0-19.49 5.197-37.36 14.29-52.95 51.65 63.67 129.3 105.3 216.4 109.8-1.624-7.797-2.599-15.92-2.599-24.04 0-57.83 46.78-104.9 104.9-104.9 30.21 0 57.5 12.67 76.67 33.14 23.72-4.548 46.46-13.32 66.6-25.34-7.798 24.37-24.37 44.83-46.13 57.83 21.12-2.273 41.58-8.122 60.43-16.24-14.29 20.79-32.16 39.31-52.63 54.25z">
                                                    </path>
                                                </svg>{/* <i class="fa-brands fa-x-twitter"></i>

                      Font Awesome fontawesome.com */}</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <InsuranceQuoteModal
                isOpen={isQuoteModalOpen}
                onClose={() => setIsQuoteModalOpen(false)}
            />
        </>
    )
}
