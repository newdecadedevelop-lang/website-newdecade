"use client"

import { useState } from "react"
import Link from "next/link"
import InsuranceQuoteModal from "@/components/modals/InsuranceQuoteModal"

export default function Header9({ scroll, isMobileMenu, handleMobileMenu }) {
    const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)

    return (
        <>
            <header className="header about-bg d-none d-lg-block">
                <div className={`header-area header ${scroll ? "sticky" : ""}`} id="header">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="header-elements">
                                    <div className="site-logo">
                                        <Link href="/"><img src="/assets/images/logo/NDLOGO.svg" alt="" style={{ maxWidth: '300px' }} /></Link>
                                    </div>
                                    <div className="main-menu-ex homepage5 homepage9">
                                        <ul>
                                            <li><Link href="/" className="font-ks font-16 weight-500 color-1">Home</Link></li>
                                            <li><Link href="/about" className="font-ks font-16 weight-500 color-1">About Us</Link>
                                            </li>
                                            <li><Link href="/services" className="font-ks font-16 weight-500 color-1">Our Services</Link>
                                            </li>
                                            <li><Link href="/faqs" className="font-ks font-16 weight-500 color-1">FAQs</Link></li>
                                            <li><Link href="/contact" className="font-ks font-16 weight-500 color-1">Contact</Link></li>
                                        </ul>
                                    </div>
                                    <div className="contact-3 d-lg-block d-none">
                                        <div className="all-3-btn theme-btn">
                                            <button
                                                onClick={() => setIsQuoteModalOpen(true)}
                                                className="font-16 font-ks weight-700 color lineh-16 consulting9"
                                                style={{ background: '#003385', border: 'none', cursor: 'pointer' }}
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
