'use client'
import Link from "next/link"
import { useState } from "react"
import InsuranceQuoteModal from "@/components/modals/InsuranceQuoteModal"

export default function Cta9() {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleGetQuote = () => {
        setIsModalOpen(true)
    }

    const handleCloseModal = () => {
        setIsModalOpen(false)
    }

    return (
        <>

            <div className="cta9-section-area section-padding4">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="cta9-header">
                                <h1 className="font-44 lineh-54 font-lora weight-600 color margin-b text-capitalize">Ready to Get Protected? Get Your Free Quote Today!</h1>
                                <p className="font-ks lineh-26 weight-500 color-21 font-16">We believe that informed clients make better insurance decisions. Our experienced team is here to help you find the right coverage at the best price.</p>
                            </div>
                        </div>
                        <div className="col-lg-1" />
                        <div className="col-lg-5">
                            <div className="cta9-btnarea">
                                <button onClick={handleGetQuote} className="font-16 weight-700 font-ks colorhp9 contactcta9" style={{ border: 'none', cursor: 'pointer', background: 'transparent', padding: 0 }}>Get a Free Quote <span className="ml1"><i className="fa-solid fa-arrow-right" /></span></button>
                                <Link href="/contact" className="font-16 weight-700 font-ks color contactcta10">Contact Us <span className="ml1"><i className="fa-solid fa-arrow-right" /></span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <InsuranceQuoteModal isOpen={isModalOpen} onClose={handleCloseModal} />
        </>
    )
}
