"use client"

import { useState } from "react"
import Link from "next/link"
import InsuranceQuoteModal from "@/components/modals/InsuranceQuoteModal"


export default function Header1({ scroll, isMobileMenu, handleMobileMenu }) {
    const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)

    return (
        <>
            <header className="header about-bg d-none d-lg-block">
                <div className={`header-area header header-sticky ${scroll ? "sticky" : ""}`} id="header">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="header-elements">
                                    <div className="site-logo">
                                        <Link href="/"><img src="/assets/images/logo/NDLOGO_WHITE.svg" alt="" style={{ maxWidth: '300px' }} /></Link>
                                    </div>
                                    <div className="main-menu-ex homepage4 main-menu-ex7">
                                        <ul>
                                            <li><Link href="/" className="font-ks font-16 weight-500 color">Home</Link></li>
                                            <li><Link href="/about" className="font-ks font-16 weight-500 color">About Us</Link></li>
                                            <li><Link href="/services" className="font-ks font-16 weight-500 color">Our Services</Link></li>
                                            <li><Link href="/faqs" className="font-ks font-16 weight-500 color">FAQs</Link></li>
                                            <li><Link href="/contact" className="font-ks font-16 weight-500 color">Contact</Link></li>
                                        </ul>
                                    </div>
                                    <div className="contact-3 d-lg-block d-none">
                                        <div className="shecdule-btn1">
                                            <button
                                                onClick={() => setIsQuoteModalOpen(true)}
                                                className="font-16 font-ks weight-700 color lineh-16 consulting9"
                                                style={{ background: '#414141', border: 'none', cursor: 'pointer' }}
                                            >
                                                Get Free Quote<span><i className="fa-solid fa-arrow-right" /></span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <InsuranceQuoteModal
                isOpen={isQuoteModalOpen}
                onClose={() => setIsQuoteModalOpen(false)}
            />
        </>
    )
}
