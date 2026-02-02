'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from 'react'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import InsuranceQuoteModal from "@/components/modals/InsuranceQuoteModal"
import Cta9 from "@/components/sections/Cta9"

// Validation schema
const contactSchema = yup.object({
    firstName: yup
        .string()
        .required("Please enter your first name")
        .min(2, "First name must be at least 2 characters")
        .max(50, "First name is too long")
        .matches(/^[a-zA-Z\s]+$/, "First name can only contain letters"),

    lastName: yup
        .string()
        .required("Please enter your last name")
        .min(2, "Last name must be at least 2 characters")
        .max(50, "Last name is too long")
        .matches(/^[a-zA-Z\s]+$/, "Last name can only contain letters"),

    email: yup
        .string()
        .required("Please enter your email address")
        .email("Please enter a valid email address"),

    phone: yup
        .string()
        .required("Please enter your phone number")
        .matches(
            /^[\d\s\-\(\)]+$/,
            "Please enter a valid phone number"
        )
        .min(10, "Phone number must be at least 10 digits"),

    subject: yup
        .string()
        .required("Please select an insurance type"),

    message: yup
        .string()
        .max(1000, "Message is too long")
}).required()

export default function Home() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    })

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState(null)
    const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm({
        resolver: yupResolver(contactSchema)
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

    const onSubmit = async (data) => {
        setIsSubmitting(true)
        setSubmitStatus(null)

        try {
            // Prepare data for API
            const formData = {
                name: `${data.firstName} ${data.lastName}`,
                email: data.email,
                phone: data.phone,
                insuranceType: data.subject,
                message: data.message || ''
            }

            // Get reCAPTCHA token (ready for future implementation)
            // Uncomment when reCAPTCHA is configured
            /*
            if (window.grecaptcha) {
                const token = await window.grecaptcha.execute(
                    process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
                    { action: 'contact_form' }
                )
                formData.recaptchaToken = token
            }
            */

            // Send form data
            const response = await fetch('/api/send-contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })

            const result = await response.json()

            if (result.success) {
                setSubmitStatus({
                    type: 'success',
                    message: 'Thank you! Your message has been sent successfully. We\'ll contact you soon!'
                })
                reset() // Clear the form
            } else {
                setSubmitStatus({
                    type: 'error',
                    message: result.message || 'Something went wrong. Please try again.'
                })
            }
        } catch (error) {
            setSubmitStatus({
                type: 'error',
                message: 'Failed to send message. Please try again or call us directly.'
            })
        } finally {
            setIsSubmitting(false)
        }
    }
    return (
        <>

            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Contact Us">
                <div>
                    <div className="cotactinner-section-area section-padding5">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="contcat5-textarea5">
                                        <span className="about3span font-ks lineh-16 font-16 weight-600 color-29 d-inline-block margin-b24">Contact
                                            Us</span>
                                        <h1 className="font-lora font-48 lineh-56 weight-600 color-29 margin-b20 clienth2">Get Your Free Multi-State Insurance Quote</h1>
                                        <p className="font-ks font-16 weight-500 lineh-26 color-30">With 20+ years of experience serving CA, TX, FL, and AZ, we specialize in commercial insurance with fast COI turnaround and tech-forward digital policy management. Whether you need fleet coverage, general liability, workers' comp, or personal auto, we're here to help across all four states we serve.</p>
                                        <div className="phone7-textarea margin-t32 contactinnerbg">
                                            <div className="phone7-icon">
                                                <img src="/assets/images/icons/phone8.png" alt="" />
                                            </div>
                                            <div className="phone7-text">
                                                <p className="font-16 lineh-16 weight-500 font-ks color-30 margin-b">Give us a Call</p>
                                                <Link href="/tel:888-585-9910" className="font-lora font-24 weight-700 lineh-24 color-29">888-585-9910</Link>
                                            </div>
                                        </div>
                                        <div className="phone7-textarea margin-t contactinnerbg">
                                            <div className="phone7-icon">
                                                <img src="/assets/images/icons/email7.png" alt="" />
                                            </div>
                                            <div className="phone7-text">
                                                <p className="font-16 lineh-16 weight-500 font-ks color-30 margin-b">Send us an Email</p>
                                                <Link href="/mailto:info@newdecadeinsurance.com" className="font-lora font-24 weight-700 lineh-24 color-29">info@newdecadeinsurance.com</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="contact5-main-section">
                                        <div className="contact-main-text">
                                            <h1 className="font-lora font-24 lineh-24 weight-600 color">Send us a Message</h1>
                                            <p className="font-ks font-16 lineh-26 weight-500 color margin-t">Fill out the form below and our expert team will get back to you within 24 business hours with a personalized multi-state insurance quote. We specialize in commercial insurance with fast COI turnaround.</p>
                                        </div>

                                        {/* Status Messages */}
                                        {submitStatus && (
                                            <div style={{
                                                padding: '15px',
                                                marginTop: '20px',
                                                borderRadius: '8px',
                                                backgroundColor: submitStatus.type === 'success' ? '#d4edda' : '#f8d7da',
                                                color: submitStatus.type === 'success' ? '#155724' : '#721c24',
                                                border: `1px solid ${submitStatus.type === 'success' ? '#c3e6cb' : '#f5c6cb'}`
                                            }}>
                                                {submitStatus.message}
                                            </div>
                                        )}

                                        <form onSubmit={handleSubmit(onSubmit)}>
                                            <div className="contac5-input5area">
                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <div className="input-5area margin-t32">
                                                            <input
                                                                type="text"
                                                                placeholder="First Name *"
                                                                {...register("firstName")}
                                                                className={errors.firstName ? 'error' : ''}
                                                            />
                                                            {errors.firstName && (
                                                                <div style={{ color: '#dc3545', fontSize: '13px', marginTop: '5px' }}>
                                                                    {errors.firstName.message}
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="input-5area margin-t32">
                                                            <input
                                                                type="text"
                                                                placeholder="Last Name *"
                                                                {...register("lastName")}
                                                                className={errors.lastName ? 'error' : ''}
                                                            />
                                                            {errors.lastName && (
                                                                <div style={{ color: '#dc3545', fontSize: '13px', marginTop: '5px' }}>
                                                                    {errors.lastName.message}
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="input-5area margin-t">
                                                            <input
                                                                type="email"
                                                                placeholder="Email *"
                                                                {...register("email")}
                                                                className={errors.email ? 'error' : ''}
                                                            />
                                                            {errors.email && (
                                                                <div style={{ color: '#dc3545', fontSize: '13px', marginTop: '5px' }}>
                                                                    {errors.email.message}
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="input-5area margin-t">
                                                            <input
                                                                type="tel"
                                                                placeholder="Phone *"
                                                                {...register("phone")}
                                                                className={errors.phone ? 'error' : ''}
                                                            />
                                                            {errors.phone && (
                                                                <div style={{ color: '#dc3545', fontSize: '13px', marginTop: '5px' }}>
                                                                    {errors.phone.message}
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <div className="input-5area margin-t">
                                                            <select
                                                                {...register("subject")}
                                                                className={errors.subject ? 'error' : ''}
                                                                style={{
                                                                    width: '100%',
                                                                    padding: '15px 20px',
                                                                    border: '1px solid #e0e0e0',
                                                                    borderRadius: '8px',
                                                                    fontSize: '16px',
                                                                    fontFamily: 'inherit'
                                                                }}
                                                            >
                                                                <option value="">Select Insurance Type *</option>
                                                                <option value="Commercial Auto / Fleet">Commercial Auto / Fleet (Our #1 Specialty)</option>
                                                                <option value="General Liability">General Liability</option>
                                                                <option value="Workers Compensation">Workers Compensation</option>
                                                                <option value="Cargo Insurance">Cargo Insurance</option>
                                                                <option value="Personal Auto">Personal Auto</option>
                                                                <option value="Motorcycle Insurance">Motorcycle Insurance</option>
                                                                <option value="Other">Other</option>
                                                            </select>
                                                            {errors.subject && (
                                                                <div style={{ color: '#dc3545', fontSize: '13px', marginTop: '5px' }}>
                                                                    {errors.subject.message}
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <div className="input-5area margin-t">
                                                            <textarea
                                                                cols={30}
                                                                rows={10}
                                                                placeholder="Additional Information (Optional)"
                                                                {...register("message")}
                                                                className={errors.message ? 'error' : ''}
                                                            />
                                                            {errors.message && (
                                                                <div style={{ color: '#dc3545', fontSize: '13px', marginTop: '5px' }}>
                                                                    {errors.message.message}
                                                                </div>
                                                            )}
                                                        </div>
                                                        <div className="contact5-btn5">
                                                            <button
                                                                className="font-ks font-16 lineh-16 weight-700 color margin-t32 contcat5"
                                                                type="submit"
                                                                disabled={isSubmitting}
                                                            >
                                                                {isSubmitting ? 'Sending...' : 'Submit Now'} <span><i className="fa-solid fa-arrow-right" /></span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*===== CONTACT  END=======*/}
                    {/*===== FAQ STARTS=======*/}
                    <div className="faq-section-area section-padding5">
                        <img src="/assets/images/elementor/elementor23.png" alt="" className="elementor24" />
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7 m-auto">
                                    <div className="faq-textarea margin-b60">
                                        <h1 className="font-lora font-48 lineh-52 color-29 weight-600 margin-b">Frequently Asked Questions About Our Insurance Services
                                        </h1>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="accordian-area accourbutton">
                                        <div className="accordion accordian4" id="accordionExample">
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="accordion-item bordernone">
                                                        <h2 className="accordion-header" onClick={() => handleClick(1)}>
                                                            <button className={isActive.key == 1 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                                What types of insurance do you offer?
                                                            </button>
                                                        </h2>
                                                        <div id="collapseOne" className={isActive.key == 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
                                                            <div className="accordion-body">
                                                                <p className="font-ks font-16 lineh-26 weight-500 color-22 ">We specialize in commercial insurance across CA, TX, FL, and AZ, including commercial auto/fleet (our #1 specialty), general liability, workers' compensation, and cargo insurance. We also provide personal auto and motorcycle coverage. With 20+ years serving 50+ industries, each policy is customized with fast COI turnaround and tech-forward digital management.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-item bordernone">
                                                        <h2 className="accordion-header" onClick={() => handleClick(2)}>
                                                            <button className={isActive.key == 2 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                                How quickly can I get a quote?
                                                            </button>
                                                        </h2>
                                                        <div id="collapseTwo" className={isActive.key == 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
                                                            <div className="accordion-body">
                                                                <p className="font-ks font-16 lineh-26 weight-500 color-30 ">With our tech-forward approach, we typically provide quotes within 24 business hours. For commercial clients, we offer same-day COI turnaround. Call us at 888-585-9910 for urgent requests and we'll expedite your quote across CA, TX, FL, or AZ.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-item bordernone">
                                                        <h2 className="accordion-header" onClick={() => handleClick(3)}>
                                                            <button className={isActive.key == 3 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                                Do you offer competitive rates?
                                                            </button>
                                                        </h2>
                                                        <div id="collapseThree" className={isActive.key == 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
                                                            <div className="accordion-body">
                                                                <p className="font-ks font-16 lineh-26 weight-500 color-30 ">Yes! As an independent brokerage with 100% commitment to client advocacy, we work with multiple top-rated carriers across CA, TX, FL, and AZ. We compare policies to ensure you get the best multi-state coverage at competitive rates, especially for commercial operations and fleet insurance.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-item m-0 bordernone">
                                                        <h2 className="accordion-header" onClick={() => handleClick(4)}>
                                                            <button className={isActive.key == 4 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                                What information do I need to get a quote?
                                                            </button>
                                                        </h2>
                                                        <div id="collapseFour" className={isActive.key == 4 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
                                                            <div className="accordion-body">
                                                                <p className="font-ks font-16 lineh-26 weight-500 color-30 ">For an accurate quote, you'll need basic information such as your driver's license, vehicle information (for auto/motorcycle), business details (for commercial insurance), and any relevant driving history. Don't worry—we'll guide you through the process.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="accordian-area accourbutton">
                                                        <div className="accordion accordian4">
                                                            <div className="accordion-item bordernone">
                                                                <h2 className="accordion-header" onClick={() => handleClick(5)}>
                                                                    <button className={isActive.key == 5 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                                                                        Can I make changes to my policy after purchase?
                                                                    </button>
                                                                </h2>
                                                                <div id="collapseFive" className={isActive.key == 5 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
                                                                    <div className="accordion-body">
                                                                        <p className="font-ks font-16 lineh-26 weight-500 color-22 ">Absolutely! Our tech-forward digital policy management system makes it easy to add or remove vehicles, change coverage levels, update driver information, or adjust your multi-state policy as your business grows. Contact us at 888-585-9910 anytime for fast adjustments.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="accordion-item bordernone">
                                                                <h2 className="accordion-header" onClick={() => handleClick(6)}>
                                                                    <button className={isActive.key == 6 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                                                        Do you provide SR-22 filing services?
                                                                    </button>
                                                                </h2>
                                                                <div id="collapseSix" className={isActive.key == 6 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
                                                                    <div className="accordion-body">
                                                                        <p className="font-ks font-16 lineh-26 weight-500 color-30 ">Yes, we provide SR-22 filings across CA, TX, FL, and AZ. While our primary specialty is commercial insurance, we also help drivers with all histories get the coverage they need. We'll file directly with your state DMV and help you meet requirements quickly.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="accordion-item bordernone">
                                                                <h2 className="accordion-header" onClick={() => handleClick(7)}>
                                                                    <button className={isActive.key == 7 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                                                        How do I file a claim?
                                                                    </button>
                                                                </h2>
                                                                <div id="collapseSeven" className={isActive.key == 7 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
                                                                    <div className="accordion-body">
                                                                        <p className="font-ks font-16 lineh-26 weight-500 color-30 ">Filing a claim is simple across all four states we serve. Contact us immediately at 888-585-9910 and we'll guide you through the entire process. With 100% commitment to client advocacy, we work directly with carriers in CA, TX, FL, and AZ to ensure your claim is processed quickly and efficiently.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="accordion-item m-0 bordernone">
                                                                <h2 className="accordion-header" onClick={() => handleClick(8)}>
                                                                    <button className={isActive.key == 8 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                                                        Do you offer business insurance packages?
                                                                    </button>
                                                                </h2>
                                                                <div id="collapseEight" className={isActive.key == 8 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
                                                                    <div className="accordion-body">
                                                                        <p className="font-ks font-16 lineh-26 weight-500 color-30 ">Yes! Commercial insurance is our specialty. We offer comprehensive multi-state packages including commercial auto/fleet (our #1 specialty), general liability, workers' compensation, and cargo insurance. With 20+ years serving 50+ industries across CA, TX, FL, and AZ, we'll create a customized package with fast COI turnaround and digital policy management.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img src="/assets/images/elementor/elementor23.png" alt="" className="elementor25" />
                    </div>
                    {/*===== FAQ END=======*/}
                    {/*===== CTA STARST=======*/}
                    <Cta9 />
                </div>

            </Layout>

            <InsuranceQuoteModal
                isOpen={isQuoteModalOpen}
                onClose={() => setIsQuoteModalOpen(false)}
            />
        </>
    )
}