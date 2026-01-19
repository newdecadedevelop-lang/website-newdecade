'use client'
import { useState } from 'react'

export default function FAQ({ faqs }) {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    })

    const handleClick = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }

    // Split FAQs into two columns
    const midPoint = Math.ceil(faqs.length / 2)
    const leftColumnFaqs = faqs.slice(0, midPoint)
    const rightColumnFaqs = faqs.slice(midPoint)

    return (
        <div className="faq-section-area section-padding5 otherbg">
            <img src="/assets/images/elementor/elementor23.png" alt="" className="elementor24" />
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 m-auto">
                        <div className="faq-textarea margin-b60">
                            <h1 className="font-lora font-48 lineh-52 color-29 weight-600 margin-b">
                                Frequently Asked Questions
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="accordian-area accourbutton">
                            <div className="accordion accordian4" id="accordionExample">
                                <div className="row">
                                    {/* Left Column */}
                                    <div className="col-lg-6">
                                        {leftColumnFaqs.map((faq, index) => (
                                            <div key={index} className={`accordion-item borderlefts ${index === leftColumnFaqs.length - 1 ? 'm-0' : ''}`}>
                                                <h2 className="accordion-header" onClick={() => handleClick(index + 1)}>
                                                    <button
                                                        className={isActive.key == index + 1 ? "accordion-button" : "accordion-button collapsed"}
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target={`#collapse${index + 1}`}
                                                        aria-expanded={isActive.key == index + 1}
                                                        aria-controls={`collapse${index + 1}`}
                                                    >
                                                        {faq.question}
                                                    </button>
                                                </h2>
                                                <div
                                                    id={`collapse${index + 1}`}
                                                    className={isActive.key == index + 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}
                                                    data-bs-parent="#accordionExample"
                                                >
                                                    <div className="accordion-body">
                                                        <p className="font-ks font-16 lineh-26 weight-500 color-30">
                                                            {faq.answer}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Right Column */}
                                    <div className="col-lg-6">
                                        {rightColumnFaqs.map((faq, index) => {
                                            const key = midPoint + index + 1
                                            return (
                                                <div key={key} className={`accordion-item borderlefts ${index === rightColumnFaqs.length - 1 ? 'm-0' : ''}`}>
                                                    <h2 className="accordion-header" onClick={() => handleClick(key)}>
                                                        <button
                                                            className={isActive.key == key ? "accordion-button" : "accordion-button collapsed"}
                                                            type="button"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target={`#collapse${key}`}
                                                            aria-expanded={isActive.key == key}
                                                            aria-controls={`collapse${key}`}
                                                        >
                                                            {faq.question}
                                                        </button>
                                                    </h2>
                                                    <div
                                                        id={`collapse${key}`}
                                                        className={isActive.key == key ? "accordion-collapse collapse show" : "accordion-collapse collapse"}
                                                        data-bs-parent="#accordionExample"
                                                    >
                                                        <div className="accordion-body">
                                                            <p className="font-ks font-16 lineh-26 weight-500 color-30">
                                                                {faq.answer}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img src="/assets/images/elementor/elementor23.png" alt="" className="elementor25" />
        </div>
    )
}
