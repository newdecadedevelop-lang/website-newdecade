"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import InsuranceQuoteModal from "@/components/modals/InsuranceQuoteModal"

const insuranceOptions = [
    {
        id: 'auto',
        title: 'Auto Insurance',
        icon: '/assets/images/car-blue-003385.png',
        description: 'Protect your vehicle'
    },
    {
        id: 'motorcycle',
        title: 'Motorcycle Insurance',
        icon: '/assets/images/motorcycle-blue-003385.png',
        description: 'Coverage for your two-wheeler'
    },
    {
        id: 'commercial',
        title: 'Commercial Insurance',
        icon: '/assets/images/business-blue-003385.png',
        description: 'Coverage for your business'
    }
]

export default function Welcome9() {
    const [selectedInsurance, setSelectedInsurance] = useState('auto')
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleGetQuote = () => {
        setIsModalOpen(true)
    }

    const handleCloseModal = () => {
        setIsModalOpen(false)
    }

    return (
        <>

            <div className="welcome9-section-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7">
                            <div className="welconme8-imga" data-aos="zoom-out" data-aos-duration={1400}>
                                <img src="/assets/images/sectionimg/welcome8.png" alt="" className="welcome9" />

                                {/* Insurance Selection Form */}
                                <div className="insurance-selection-overlay">
                                    <div className="insurance-form-box">
                                        <h3 className="insurance-form-title">Get Your Insurance Quote</h3>
                                        <p className="insurance-form-subtitle">Choose your coverage type</p>

                                        <div className="insurance-radio-options">
                                            {insuranceOptions.map((option) => (
                                                <label
                                                    key={option.id}
                                                    className={`insurance-radio-option ${selectedInsurance === option.id ? 'active' : ''}`}
                                                >
                                                    <div className="radio-option-content">
                                                        <div className="option-icon-small">
                                                            <Image
                                                                src={option.icon}
                                                                alt={option.title}
                                                                width={40}
                                                                height={40}
                                                                style={{ objectFit: 'contain' }}
                                                            />
                                                        </div>
                                                        <div className="option-text">
                                                            <h4>{option.title}</h4>
                                                            <p>{option.description}</p>
                                                        </div>
                                                    </div>
                                                    <div className="radio-input">
                                                        <input
                                                            type="radio"
                                                            name="insurance"
                                                            value={option.id}
                                                            checked={selectedInsurance === option.id}
                                                            onChange={() => setSelectedInsurance(option.id)}
                                                        />
                                                        <span className="radio-checkmark"></span>
                                                    </div>
                                                </label>
                                            ))}
                                        </div>

                                        <button
                                            className="insurance-quote-btn-welcome"
                                            onClick={handleGetQuote}
                                        >
                                            Get Free Quote
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div className="col-lg-5" data-aos="fade-left" data-aos-duration={1000}>
                            <div className="header9-textarea">
                                <span className="font-16 font-ks lineh-16 weight-500 colorhp9 d-inline-block margin-b24 insurance">Welcome to New Decade Insurance</span>
                                <h1 className="font-lora font-48 lineh-54 weight-600 colorh9 margin-b24" data-aos="fade-left" data-aos-duration={1200}>For Today, Tomorrow, And Decades To Come</h1>
                                <p className="font-16 font-ks weight-500 color-p2 lineh-26">Your Full-Service Personal, Commercial & Business Insurance Specialists. <br />20+ years of experience serving California drivers and businesses. <br />We've got you covered - all drivers welcome!</p>
                                <button
                                    onClick={handleGetQuote}
                                    className="font-ks font-16 lineh-16 weight-700 color margin-t32 contcat5"
                                    style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                                >
                                    Get Free Quote <span><i className="fa-solid fa-arrow-right" /></span>
                                </button>
                            </div>
                        </div>



                    </div>
                </div>
                <img src="/assets/images/elementor/elementor20.png" alt="" className="elementors18s" />
                <img src="/assets/images/elementor/elementor24.png" alt="" className="elementors19" />
            </div>

            {/* Insurance Quote Modal */}
            <InsuranceQuoteModal
                key={selectedInsurance}
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                selectedInsurance={selectedInsurance}
            />
        </>
    )
}
