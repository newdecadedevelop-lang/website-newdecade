"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import InsuranceQuoteModal from "@/components/modals/InsuranceQuoteModal"

const insuranceOptions = [
    {
        id: 'commercial',
        title: 'Commercial Insurance',
        icon: '/assets/images/business-blue-003385.png',
        description: 'Coverage for your business'
    },
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
    }
]

const sliderContent = [
    {
        id: 1,
        subtitle: "Commercial Modern",
        title: "Powering Multi-State Business Growth",
        description: "As commercial specialists, we understand the complexities of scaling your business across state lines. Our comprehensive fleet and business coverage keeps your operations moving forward.",
        bgImage: "/assets/images/newdecade/newdecade_36.jpg"
    },
    {
        id: 2,
        subtitle: "Your Business Partner",
        title: "Insurance That Understands Your Industry",
        description: "From restaurants to retail, construction to consulting - we partner with business owners who demand more from their insurance. Let us protect what you've built.",
        bgImage: "/assets/images/newdecade/newdecade_37.jpg"
    },
    {
        id: 3,
        subtitle: "Tech-Forward Solutions",
        title: "Future-Focused Coverage for Modern Business",
        description: "Leverage cutting-edge technology and streamlined processes to protect your business. Get instant quotes, manage policies online, and access 24/7 support.",
        bgImage: "/assets/images/newdecade/newdecade_38.jpg"
    },
    {
        id: 4,
        subtitle: "Welcome to New Decade Insurance",
        title: "For Today, Tomorrow, And Decades To Come",
        description: "Your Full-Service Personal, Commercial & Business Insurance Specialists. 20+ years of experience serving California drivers and businesses. We've got you covered - all drivers welcome!",
        bgImage: "/assets/images/newdecade/newdecade_39.jpg"
    }
]

export default function Welcome9() {
    const [selectedInsurance, setSelectedInsurance] = useState('commercial')
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [currentSlide, setCurrentSlide] = useState(0)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        // Check if mobile/tablet
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 991)
        }

        checkMobile()
        window.addEventListener('resize', checkMobile)

        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    useEffect(() => {
        // Auto-advance slider every 5 seconds (only on desktop)
        if (!isMobile) {
            const timer = setInterval(() => {
                setCurrentSlide((prev) => (prev + 1) % sliderContent.length)
            }, 5000)

            return () => clearInterval(timer)
        }
    }, [isMobile])

    const handleGetQuote = () => {
        setIsModalOpen(true)
    }

    const handleCloseModal = () => {
        setIsModalOpen(false)
    }

    const goToSlide = (index) => {
        setCurrentSlide(index)
    }

    return (
        <>
            <div className="welcome9-section-area">
                {/* Slider for Desktop/Large Tablets */}
                {!isMobile && (
                    <div className="welcome9-slider">
                        {sliderContent.map((slide, index) => (
                            <div
                                key={slide.id}
                                className={`slider-item ${index === currentSlide ? 'active' : ''}`}
                                style={{
                                    backgroundImage: `url(${slide.bgImage})`,
                                }}
                            >
                                <div className="slider-overlay"></div>
                            </div>
                        ))}
                    </div>
                )}

                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7">
                            {/* Insurance Selection Form - Always Visible */}
                            <div className="insurance-selection-overlay" data-aos="zoom-out" data-aos-duration={1400}>
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

                        <div className="col-lg-5" data-aos="fade-left" data-aos-duration={1000}>
                            <div className="header9-textarea">
                                {!isMobile ? (
                                    // Desktop: Show slider content
                                    <>
                                        <span className="font-16 font-ks lineh-16 weight-500 colorhp9 d-inline-block margin-b24 insurance">
                                            {sliderContent[currentSlide].subtitle}
                                        </span>
                                        <h1 className="font-lora font-48 lineh-54 weight-600 colorh9 margin-b24">
                                            {sliderContent[currentSlide].title}
                                        </h1>
                                        <p className="font-16 font-ks weight-500 color-p2 lineh-26">
                                            {sliderContent[currentSlide].description}
                                        </p>
                                    </>
                                ) : (
                                    // Mobile: Show default content
                                    <>
                                        <span className="font-16 font-ks lineh-16 weight-500 colorhp9 d-inline-block margin-b24 insurance">
                                            Welcome to New Decade Insurance
                                        </span>
                                        <h1 className="font-lora font-48 lineh-54 weight-600 colorh9 margin-b24">
                                            For Today, Tomorrow, And Decades To Come
                                        </h1>
                                        <p className="font-16 font-ks weight-500 color-p2 lineh-26">
                                            Your Full-Service Personal, Commercial & Business Insurance Specialists. <br />
                                            20+ years of experience serving California drivers and businesses. <br />
                                            We've got you covered - all drivers welcome!
                                        </p>
                                    </>
                                )}
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

                {/* Slider Navigation Dots - Desktop Only */}
                {!isMobile && (
                    <div className="slider-navigation">
                        {sliderContent.map((_, index) => (
                            <button
                                key={index}
                                className={`slider-dot ${index === currentSlide ? 'active' : ''}`}
                                onClick={() => goToSlide(index)}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                )}

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
