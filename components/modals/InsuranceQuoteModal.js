"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import Select, { components } from "react-select"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { useMetaPixel } from "@/hooks/useMetaPixel"

// US States list
const US_STATES = [
    { value: 'AL', label: 'Alabama' },
    { value: 'AK', label: 'Alaska' },
    { value: 'AZ', label: 'Arizona' },
    { value: 'AR', label: 'Arkansas' },
    { value: 'CA', label: 'California' },
    { value: 'CO', label: 'Colorado' },
    { value: 'CT', label: 'Connecticut' },
    { value: 'DE', label: 'Delaware' },
    { value: 'FL', label: 'Florida' },
    { value: 'GA', label: 'Georgia' },
    { value: 'HI', label: 'Hawaii' },
    { value: 'ID', label: 'Idaho' },
    { value: 'IL', label: 'Illinois' },
    { value: 'IN', label: 'Indiana' },
    { value: 'IA', label: 'Iowa' },
    { value: 'KS', label: 'Kansas' },
    { value: 'KY', label: 'Kentucky' },
    { value: 'LA', label: 'Louisiana' },
    { value: 'ME', label: 'Maine' },
    { value: 'MD', label: 'Maryland' },
    { value: 'MA', label: 'Massachusetts' },
    { value: 'MI', label: 'Michigan' },
    { value: 'MN', label: 'Minnesota' },
    { value: 'MS', label: 'Mississippi' },
    { value: 'MO', label: 'Missouri' },
    { value: 'MT', label: 'Montana' },
    { value: 'NE', label: 'Nebraska' },
    { value: 'NV', label: 'Nevada' },
    { value: 'NH', label: 'New Hampshire' },
    { value: 'NJ', label: 'New Jersey' },
    { value: 'NM', label: 'New Mexico' },
    { value: 'NY', label: 'New York' },
    { value: 'NC', label: 'North Carolina' },
    { value: 'ND', label: 'North Dakota' },
    { value: 'OH', label: 'Ohio' },
    { value: 'OK', label: 'Oklahoma' },
    { value: 'OR', label: 'Oregon' },
    { value: 'PA', label: 'Pennsylvania' },
    { value: 'RI', label: 'Rhode Island' },
    { value: 'SC', label: 'South Carolina' },
    { value: 'SD', label: 'South Dakota' },
    { value: 'TN', label: 'Tennessee' },
    { value: 'TX', label: 'Texas' },
    { value: 'UT', label: 'Utah' },
    { value: 'VT', label: 'Vermont' },
    { value: 'VA', label: 'Virginia' },
    { value: 'WA', label: 'Washington' },
    { value: 'WV', label: 'West Virginia' },
    { value: 'WI', label: 'Wisconsin' },
    { value: 'WY', label: 'Wyoming' }
]

// Validation schema for Step 1 - Basic Info
const step1Schema = yup.object({
    fullName: yup
        .string()
        .required("Please enter your full name")
        .min(2, "Full name must be at least 2 characters")
        .max(100, "Full name is too long")
        .matches(/^[a-zA-Z\s]+$/, "Full name can only contain letters"),

    phone: yup
        .string()
        .required("Please enter your phone number")
        .matches(
            /^[\d\s\-\(\)]+$/,
            "Please enter a valid phone number (example: 123-456-7890)"
        )
        .min(10, "Phone number must be at least 10 digits"),

    agreeToContact: yup
        .boolean()
}).required()

// Validation schema for Step 2 - Personal Details
const step2Schema = yup.object({
    email: yup
        .string()
        .required("Please enter your email address")
        .email("Please enter a valid email address (example: name@email.com)"),

    dateOfBirth: yup
        .date()
        .nullable()
        .transform((value, originalValue) => {
            // Convert empty string to null
            return originalValue === '' ? null : value
        })
        .required("Please enter your date of birth")
        .max(new Date(), "Date of birth cannot be in the future")
        .test('age', 'You must be at least 18 years old', function(value) {
            if (!value) return false
            const cutoff = new Date()
            cutoff.setFullYear(cutoff.getFullYear() - 18)
            return value <= cutoff
        }),

    gender: yup
        .string()
        .nullable(),

    language: yup
        .string()
        .nullable(),

    maritalStatus: yup
        .string()
        .nullable(),

    address: yup
        .string()
        .required("Please enter your street address")
        .min(5, "Address must be at least 5 characters"),

    city: yup
        .string()
        .nullable(),

    state: yup
        .string()
        .nullable(),

    zipCode: yup
        .string()
        .required("Please enter your ZIP code")
        .matches(/^\d{5}(-\d{4})?$/, "Please enter a valid ZIP code (example: 12345 or 12345-6789)")
}).required()

// Validation schema for Step 3 - Vehicle Info
// Note: We validate that at least one vehicle is added in the component logic
const step3Schema = yup.object({
    vehicles: yup
        .array()
        .min(1, "Please add at least one vehicle")
        .required("Please add at least one vehicle")
}).required()

// Validation schema for Step 4 - Coverage
const step4Schema = yup.object({
    coverageType: yup
        .string()
        .required("Please select a coverage option")
}).required()

// Validation schema for Business Step 2 - Business Details
const businessStep2Schema = yup.object({
    email: yup
        .string()
        .required("Please enter your email address")
        .email("Please enter a valid email address (example: name@email.com)"),

    companyName: yup
        .string()
        .required("Please enter your company name")
        .min(2, "Company name must be at least 2 characters"),

    businessAddress: yup
        .string()
        .required("Please enter your business address")
        .min(5, "Address must be at least 5 characters"),

    businessCity: yup
        .string()
        .required("Please enter your business city")
        .min(2, "City name must be at least 2 characters"),

    businessZipCode: yup
        .string()
        .required("Please enter your business ZIP code")
        .matches(/^\d{5}(-\d{4})?$/, "Please enter a valid ZIP code (example: 12345 or 12345-6789)"),

    caNumber: yup
        .string()
        .nullable(),

    dotNumber: yup
        .string()
        .nullable()
}).required()

// Get current schema based on step and insurance type
const getSchemaForStep = (step, insuranceType) => {
    // Business insurance has different flow: Step 1 (Contact), Step 2 (Business), Step 3 (Coverage)
    if (insuranceType === 'commercial') {
        switch(step) {
            case 1: return step1Schema
            case 2: return businessStep2Schema
            case 3: return step4Schema // Coverage
            default: return step1Schema
        }
    }

    // Personal/Motorcycle insurance: Step 1 (Contact), Step 2 (Personal), Step 3 (Vehicle), Step 4 (Coverage)
    switch(step) {
        case 1: return step1Schema
        case 2: return step2Schema
        case 3: return step3Schema
        case 4: return step4Schema
        default: return step1Schema
    }
}

export default function InsuranceQuoteModal({ isOpen, onClose, selectedInsurance }) {
    const { trackEvent, trackCustomEvent } = useMetaPixel()

    // If selectedInsurance is provided, start at step 1, otherwise start at step 0 to select insurance type
    const [currentStep, setCurrentStep] = useState(selectedInsurance ? 1 : 0)
    const [insuranceType, setInsuranceType] = useState(selectedInsurance || '')
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [formData, setFormData] = useState({
        // Step 1
        fullName: '',
        phone: '',
        agreeToContact: true,
        // Step 2 - Personal
        email: '',
        dateOfBirth: '',
        gender: '',
        language: '',
        maritalStatus: '',
        address: '',
        city: '',
        state: '',
        zipCode: '',
        // Step 2 - Business
        companyName: '',
        businessAddress: '',
        businessCity: '',
        businessZipCode: '',
        caNumber: '',
        dotNumber: '',
        // Step 3 - Vehicle(s)
        vehicles: [], // Array of vehicles
        vehicleMake: '',
        vehicleModel: '',
        vehicleYear: '',
        // Step 4
        coverageType: '',
        // Other
        insuranceType: selectedInsurance || ''
    })

    // State for managing current vehicle being edited
    const [currentVehicle, setCurrentVehicle] = useState({
        vehicleMake: '',
        vehicleModel: '',
        vehicleYear: ''
    })
    const [editingVehicleIndex, setEditingVehicleIndex] = useState(null)

    const [hasContactInfo, setHasContactInfo] = useState(false)
    const [emailSent, setEmailSent] = useState(false)

    // State for address autocomplete
    const [selectedState, setSelectedState] = useState(null)
    const [cityValue, setCityValue] = useState('')
    const [zipValue, setZipValue] = useState('')
    const [isLoadingZip, setIsLoadingZip] = useState(false)
    const [zipError, setZipError] = useState('')

    // State for date of birth picker
    const [dateOfBirth, setDateOfBirth] = useState(null)

    // Refs
    const modalBodyRef = useRef(null)
    const datePickerRef = useRef(null)

    // Scroll to top when step changes
    useEffect(() => {
        if (modalBodyRef.current) {
            modalBodyRef.current.scrollTop = 0
        }
    }, [currentStep])

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        setValue,
        setFocus,
        getValues
    } = useForm({
        resolver: yupResolver(getSchemaForStep(currentStep, insuranceType)),
        shouldFocusError: true
    })

    // Initialize vehicles array when reaching step 3
    useEffect(() => {
        if (currentStep === 3 && insuranceType !== 'commercial') {
            // Ensure vehicles is always an array, not an empty string
            setValue('vehicles', formData.vehicles || [])
        }
    }, [currentStep, insuranceType, formData.vehicles, setValue])

    // Focus on DatePicker when there's an error
    useEffect(() => {
        if (errors.dateOfBirth && datePickerRef.current) {
            // Get the input element from the DatePicker
            const inputElement = datePickerRef.current.input
            if (inputElement) {
                // Scroll the element into view
                inputElement.scrollIntoView({ behavior: 'smooth', block: 'center' })
                // Set focus after a short delay to ensure scroll completes
                setTimeout(() => {
                    datePickerRef.current.setFocus()
                }, 300)
            }
        }
    }, [errors.dateOfBirth])

    // Reset all states when modal closes
    useEffect(() => {
        if (!isOpen) {
            // Reset all states after modal closes
            setCurrentStep(selectedInsurance ? 1 : 0)
            setInsuranceType(selectedInsurance || '')
            setIsSubmitted(false)
            setHasContactInfo(false)
            setEmailSent(false)
            setFormData({
                fullName: '',
                phone: '',
                agreeToContact: true,
                email: '',
                dateOfBirth: '',
                gender: '',
                language: '',
                maritalStatus: '',
                address: '',
                city: '',
                state: '',
                zipCode: '',
                companyName: '',
                businessAddress: '',
                businessCity: '',
                businessZipCode: '',
                caNumber: '',
                dotNumber: '',
                vehicles: [],
                vehicleMake: '',
                vehicleModel: '',
                vehicleYear: '',
                coverageType: '',
                insuranceType: selectedInsurance || ''
            })
            setCurrentVehicle({
                vehicleMake: '',
                vehicleModel: '',
                vehicleYear: ''
            })
            setEditingVehicleIndex(null)
            setSelectedState(null)
            setCityValue('')
            setZipValue('')
            setZipError('')
            setDateOfBirth(null)
            reset()
        }
    }, [isOpen, selectedInsurance, reset])

    // Function to send email
    const sendQuoteEmail = async (data, step, isComplete = false) => {
        // Don't send if already sent or if no contact info
        if (emailSent || !data.fullName || !data.phone) {
            return
        }

            // Track CompleteRegistration event in Meta Pixel (once per session)
            trackEvent('CompleteRegistration', {}, { sessionOnly: true })

        try {
            const response = await fetch('/api/send-quote', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    formData: data,
                    currentStep: step,
                    isComplete: isComplete
                }),
            })

            const result = await response.json()

            if (result.success) {
                setEmailSent(true)
                console.log('Quote email sent successfully')
            } else {
                console.error('Failed to send quote email:', result.message)
            }
        } catch (error) {
            console.error('Error sending quote email:', error)
        }
    }

    // Vehicle management functions
    const handleAddVehicle = () => {
        // Validate current vehicle fields
        if (!currentVehicle.vehicleMake || !currentVehicle.vehicleModel || !currentVehicle.vehicleYear) {
            return
        }

        const year = parseInt(currentVehicle.vehicleYear)
        if (year < 1985 || year > new Date().getFullYear() + 1) {
            return
        }

        if (editingVehicleIndex !== null) {
            // Update existing vehicle
            const updatedVehicles = [...formData.vehicles]
            updatedVehicles[editingVehicleIndex] = currentVehicle
            setFormData({ ...formData, vehicles: updatedVehicles })
            setValue('vehicles', updatedVehicles)
            setEditingVehicleIndex(null)
        } else {
            // Add new vehicle
            const updatedVehicles = [...formData.vehicles, currentVehicle]
            setFormData({ ...formData, vehicles: updatedVehicles })
            setValue('vehicles', updatedVehicles)
        }

        // Reset current vehicle form
        setCurrentVehicle({
            vehicleMake: '',
            vehicleModel: '',
            vehicleYear: ''
        })
    }

    const handleEditVehicle = (index) => {
        setCurrentVehicle(formData.vehicles[index])
        setEditingVehicleIndex(index)
    }

    const handleDeleteVehicle = (index) => {
        const updatedVehicles = formData.vehicles.filter((_, i) => i !== index)
        setFormData({ ...formData, vehicles: updatedVehicles })
        setValue('vehicles', updatedVehicles)

        // If we were editing this vehicle, cancel the edit
        if (editingVehicleIndex === index) {
            setCurrentVehicle({
                vehicleMake: '',
                vehicleModel: '',
                vehicleYear: ''
            })
            setEditingVehicleIndex(null)
        }
    }

    const handleCancelEdit = () => {
        setCurrentVehicle({
            vehicleMake: '',
            vehicleModel: '',
            vehicleYear: ''
        })
        setEditingVehicleIndex(null)
    }

    // Handle Continue button click for Step 3 (vehicles)
    const handleStep3Continue = async (e) => {
        e.preventDefault()

        // Check if there's a vehicle being entered that hasn't been added yet
        const isVehicleFormFilled = currentVehicle.vehicleMake &&
                                   currentVehicle.vehicleModel &&
                                   currentVehicle.vehicleYear

        let vehiclesToValidate = formData.vehicles

        if (isVehicleFormFilled) {
            // Validate year
            const year = parseInt(currentVehicle.vehicleYear)
            const isValidYear = year >= 1985 && year <= new Date().getFullYear() + 1

            if (isValidYear) {
                // Auto-add the vehicle before validating
                if (editingVehicleIndex !== null) {
                    // Update existing vehicle
                    vehiclesToValidate = [...formData.vehicles]
                    vehiclesToValidate[editingVehicleIndex] = currentVehicle
                } else {
                    // Add new vehicle
                    vehiclesToValidate = [...formData.vehicles, currentVehicle]
                }

                // Update both formData and form value synchronously
                setValue('vehicles', vehiclesToValidate, { shouldValidate: false })

                // Clear the current vehicle form
                setCurrentVehicle({
                    vehicleMake: '',
                    vehicleModel: '',
                    vehicleYear: ''
                })
                setEditingVehicleIndex(null)
            }
        }

        // Manually validate the vehicles field
        const isValid = vehiclesToValidate && vehiclesToValidate.length > 0

        if (isValid) {
            // Update formData with the vehicles
            const updatedFormData = { ...formData, vehicles: vehiclesToValidate }
            setFormData(updatedFormData)

            // Proceed to next step
            onSubmit({ vehicles: vehiclesToValidate })
        } else {
            // Trigger validation to show error
            handleSubmit(onSubmit)()
        }
    }

    const onSubmit = (data) => {
        // Save current step data
        const updatedData = { ...formData, ...data }
        setFormData(updatedData)

        // Mark that we have contact info after step 1
        if (currentStep === 1) {
            setHasContactInfo(true)
        }

        // Determine max step based on insurance type
        const maxStep = insuranceType === 'commercial' ? 3 : 4

        if (currentStep < maxStep) {
            // Move to next step
            setCurrentStep(prev => prev + 1)
            // Set values for next form
            Object.keys(data).forEach(key => {
                setValue(key, data[key])
            })
        } else {
            // Final step - submit all data
            const finalData = { ...formData, ...data }
            console.log('Form completed! All data:', finalData)

            // Send complete form email
            sendQuoteEmail(finalData, maxStep, true)

            // Show success modal (don't close the main modal yet)
            setIsSubmitted(true)
        }
    }

    const handleBack = () => {
        if (currentStep > 1) {
            setCurrentStep(prev => prev - 1)
        }
    }

    // Autocomplete from ZIP code
    const handleZipCodeChange = async (e) => {
        const zip = e.target.value
        setZipValue(zip)
        setZipError('')
        setValue('zipCode', zip)

        // Only search when we have 5 digits
        if (zip.length === 5) {
            setIsLoadingZip(true)
            try {
                const response = await fetch(`https://api.zippopotam.us/us/${zip}`)
                if (response.ok) {
                    const data = await response.json()
                    const place = data.places[0]

                    // Set city
                    const city = place['place name']
                    setCityValue(city)
                    setValue('city', city)

                    // Set state
                    const stateAbbr = place['state abbreviation']
                    const stateOption = US_STATES.find(s => s.value === stateAbbr)
                    if (stateOption) {
                        setSelectedState(stateOption)
                        setValue('state', stateAbbr)
                    }
                } else {
                    setZipError('Invalid ZIP code. Please check and try again.')
                }
            } catch (error) {
                console.error('Error fetching ZIP data:', error)
                setZipError('Could not verify ZIP code. Please enter manually.')
            } finally {
                setIsLoadingZip(false)
            }
        }
    }

    // Handle state change
    const handleStateChange = (option) => {
        setSelectedState(option)
        setValue('state', option ? option.value : '')

        // Clear ZIP and city when state changes
        setZipValue('')
        setCityValue('')
        setValue('zipCode', '')
        setValue('city', '')
        setZipError('')
    }

    // Handle city change
    const handleCityChange = (e) => {
        const city = e.target.value
        setCityValue(city)
        setValue('city', city)
    }

    // Handle date of birth change
    const handleDateOfBirthChange = (date) => {
        setDateOfBirth(date)
        setValue('dateOfBirth', date)
    }

    const handleClose = () => {
        // Capture current state BEFORE closing
        const shouldSendEmail = hasContactInfo && !emailSent && currentStep < (insuranceType === 'commercial' ? 3 : 4)

        if (shouldSendEmail) {
            // Capture current form values (even if incomplete)
            const currentFormValues = getValues()
            // Merge with existing formData to include all available information
            const completeData = { ...formData, ...currentFormValues }

            // Send email asynchronously (don't await to avoid blocking modal close)
            sendQuoteEmail(completeData, currentStep, false)
        }

        // Close modal immediately
        onClose()
    }

    if (!isOpen) return null

    return (
        <>
            {/* Main Form Modal - Hide when submitted */}
            {!isSubmitted && (
                <div className="insurance-quote-modal-overlay">
                    <div className="insurance-quote-modal" ref={modalBodyRef}>
                    {/* Header */}
                    <div className="modal-header">
                        <div className="modal-title-section">
                            <h2>Get Your Free Insurance Quote</h2>
                            <p className="modal-subtitle">
                                {insuranceType === 'commercial' && 'Commercial Insurance'}
                                {insuranceType === 'auto' && 'Auto Insurance'}
                                {insuranceType === 'motorcycle' && 'Motorcycle Insurance'}
                                {!insuranceType && currentStep === 0 && 'Select Insurance Type'}
                            </p>
                        </div>
                        <button className="modal-close-btn" onClick={handleClose}>
                            Close
                        </button>
                    </div>


                    {/* Modal Body */}
                    <div className="modal-body">
                        {/* Step 0: Select Insurance Type */}
                        {currentStep === 0 && (
                            <div className="quote-form">
                                <div className="form-section">
                                    <h3 className="section-title">Choose Your Coverage Type</h3>
                                    <p className="coverage-description">Select the type of insurance you need</p>

                                    <div className="insurance-options">
                                        <label
                                            className={`insurance-option ${insuranceType === 'commercial' ? 'active' : ''}`}
                                            onClick={() => setInsuranceType('commercial')}
                                        >
                                            <div className="option-icon">
                                                <Image
                                                    src="/assets/images/business-blue-003385.png"
                                                    alt="Commercial Insurance"
                                                    width={60}
                                                    height={40}
                                                    style={{ objectFit: 'contain' }}
                                                />
                                            </div>
                                            <div className="option-content">
                                                <h4>Commercial Insurance</h4>
                                                <p>Comprehensive coverage for your business vehicles</p>
                                            </div>
                                            <div className="option-radio">
                                                <input
                                                    type="radio"
                                                    name="insuranceType"
                                                    value="commercial"
                                                    checked={insuranceType === 'commercial'}
                                                    onChange={() => setInsuranceType('commercial')}
                                                />
                                                <span className="radio-checkmark"></span>
                                            </div>
                                        </label>

                                        <label
                                            className={`insurance-option ${insuranceType === 'auto' ? 'active' : ''}`}
                                            onClick={() => setInsuranceType('auto')}
                                        >
                                            <div className="option-icon">
                                                <Image
                                                    src="/assets/images/car-blue-003385.png"
                                                    alt="Auto Insurance"
                                                    width={60}
                                                    height={40}
                                                    style={{ objectFit: 'contain' }}
                                                />
                                            </div>
                                            <div className="option-content">
                                                <h4>Auto Insurance</h4>
                                                <p>Protect your vehicle and drive with confidence</p>
                                            </div>
                                            <div className="option-radio">
                                                <input
                                                    type="radio"
                                                    name="insuranceType"
                                                    value="auto"
                                                    checked={insuranceType === 'auto'}
                                                    onChange={() => setInsuranceType('auto')}
                                                />
                                                <span className="radio-checkmark"></span>
                                            </div>
                                        </label>

                                        <label
                                            className={`insurance-option ${insuranceType === 'motorcycle' ? 'active' : ''}`}
                                            onClick={() => setInsuranceType('motorcycle')}
                                        >
                                            <div className="option-icon">
                                                <Image
                                                    src="/assets/images/motorcycle-blue-003385.png"
                                                    alt="Motorcycle Insurance"
                                                    width={60}
                                                    height={40}
                                                    style={{ objectFit: 'contain' }}
                                                />
                                            </div>
                                            <div className="option-content">
                                                <h4>Motorcycle Insurance</h4>
                                                <p>Coverage for your two-wheeled adventures</p>
                                            </div>
                                            <div className="option-radio">
                                                <input
                                                    type="radio"
                                                    name="insuranceType"
                                                    value="motorcycle"
                                                    checked={insuranceType === 'motorcycle'}
                                                    onChange={() => setInsuranceType('motorcycle')}
                                                />
                                                <span className="radio-checkmark"></span>
                                            </div>
                                        </label>
                                    </div>

                                    {!insuranceType && (
                                        <p className="error-message" style={{ marginTop: '10px' }}>
                                            <i className="fas fa-exclamation-circle"></i>
                                            Please select an insurance type to continue
                                        </p>
                                    )}
                                </div>

                                {/* Form Actions */}
                                <div className="modal-actions">
                                    <button
                                        type="button"
                                        className="btn-primary"
                                        onClick={() => {
                                            if (insuranceType) {
                                                // Track custom event in Meta Pixel based on insurance type selected
                                                const eventNames = {
                                                    'auto': 'AutoInsuranceSelected',
                                                    'motorcycle': 'MotorcycleInsuranceSelected',
                                                    'commercial': 'CommercialInsuranceSelected'
                                                }

                                                const eventName = eventNames[insuranceType]
                                                if (eventName) {
                                                    trackCustomEvent(eventName, {
                                                        insurance_type: insuranceType
                                                    }, { sessionOnly: true, debounce: true })
                                                }

                                                setFormData(prev => ({ ...prev, insuranceType }))
                                                setCurrentStep(1)
                                            }
                                        }}
                                        disabled={!insuranceType}
                                        style={{ minWidth: '200px' }}
                                    >
                                        Continue
                                        <i className="fas fa-arrow-right"></i>
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Step 1: Contact Information */}
                        {currentStep === 1 && (
                            <form onSubmit={handleSubmit(onSubmit)} className="quote-form">
                                <div className="form-section">
                                    <h3 className="section-title">Tell Us About Yourself</h3>

                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="fullName">Full Name *</label>
                                            <input
                                                type="text"
                                                id="fullName"
                                                {...register("fullName")}
                                                placeholder="Enter your full name"
                                                className={errors.fullName ? 'input-error' : ''}
                                            />
                                            {errors.fullName && (
                                                <span className="error-message">
                                                    <i className="fas fa-exclamation-circle"></i>
                                                    {errors.fullName.message}
                                                </span>
                                            )}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="phone">Phone Number *</label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                {...register("phone")}
                                                placeholder="(123) 456-7890"
                                                className={errors.phone ? 'input-error' : ''}
                                            />
                                            {errors.phone && (
                                                <span className="error-message">
                                                    <i className="fas fa-exclamation-circle"></i>
                                                    {errors.phone.message}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Form Actions */}
                                <div className="modal-actions">
                                    <button type="submit" className="btn-primary" style={{ minWidth: '200px' }}>
                                        Continue
                                        <i className="fas fa-arrow-right"></i>
                                    </button>
                                </div>

                                {/* Consent Section */}
                                <div className="consent-section" style={{ marginTop: '8px', textAlign: 'center' }}>
                                    <label className="consent-checkbox" style={{ fontSize: '7px', lineHeight: '1.2' }}>
                                        <input
                                            type="checkbox"
                                            {...register("agreeToContact")}
                                            defaultChecked={true}
                                            style={{ transform: 'scale(0.7)' }}
                                        />
                                        <span className="checkmark"></span>
                                        <span className="consent-text" style={{ fontSize: '10px'}}>
                                            By submitting this form, I consent to be contacted by New Decade Insurance via phone, email, or text message regarding my insurance quote. Standard message and data rates may apply.
                                        </span>
                                    </label>
                                    {errors.agreeToContact && (
                                        <span className="error-message consent-error">
                                            <i className="fas fa-exclamation-circle"></i>
                                            {errors.agreeToContact.message}
                                        </span>
                                    )}
                                </div>
                            </form>
                        )}

                        {/* Step 2: Personal Details or Business Details */}
                        {currentStep === 2 && insuranceType === 'commercial' && (
                            <form onSubmit={handleSubmit(onSubmit)} className="quote-form">
                                <div className="form-section">
                                    <h3 className="section-title">Tell Us About Your Business</h3>

                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="email">Email Address *</label>
                                            <input
                                                type="email"
                                                id="email"
                                                {...register("email")}
                                                placeholder="your.email@example.com"
                                                className={errors.email ? 'input-error' : ''}
                                            />
                                            {errors.email && (
                                                <span className="error-message">
                                                    <i className="fas fa-exclamation-circle"></i>
                                                    {errors.email.message}
                                                </span>
                                            )}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="companyName">Company Name *</label>
                                            <input
                                                type="text"
                                                id="companyName"
                                                {...register("companyName")}
                                                placeholder="Enter your company name"
                                                className={errors.companyName ? 'input-error' : ''}
                                            />
                                            {errors.companyName && (
                                                <span className="error-message">
                                                    <i className="fas fa-exclamation-circle"></i>
                                                    {errors.companyName.message}
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    <div className="form-row" style={{gridTemplateColumns: '1fr'}}>
                                        <div className="form-group">
                                            <label htmlFor="businessAddress">Business Address *</label>
                                            <input
                                                type="text"
                                                id="businessAddress"
                                                {...register("businessAddress")}
                                                placeholder="123 Main Street"
                                                className={errors.businessAddress ? 'input-error' : ''}
                                            />
                                            {errors.businessAddress && (
                                                <span className="error-message">
                                                    <i className="fas fa-exclamation-circle"></i>
                                                    {errors.businessAddress.message}
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="businessCity">City *</label>
                                            <input
                                                type="text"
                                                id="businessCity"
                                                {...register("businessCity")}
                                                placeholder="Enter business city"
                                                className={errors.businessCity ? 'input-error' : ''}
                                            />
                                            {errors.businessCity && (
                                                <span className="error-message">
                                                    <i className="fas fa-exclamation-circle"></i>
                                                    {errors.businessCity.message}
                                                </span>
                                            )}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="businessZipCode">ZIP Code *</label>
                                            <input
                                                type="text"
                                                id="businessZipCode"
                                                {...register("businessZipCode")}
                                                placeholder="Enter ZIP code"
                                                maxLength="5"
                                                className={errors.businessZipCode ? 'input-error' : ''}
                                            />
                                            {errors.businessZipCode && (
                                                <span className="error-message">
                                                    <i className="fas fa-exclamation-circle"></i>
                                                    {errors.businessZipCode.message}
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="caNumber">CA Number (Optional)</label>
                                            <input
                                                type="text"
                                                id="caNumber"
                                                {...register("caNumber")}
                                                placeholder="Enter CA number if applicable"
                                            />
                                            <span className="field-helper">
                                                <i className="fas fa-info-circle"></i>
                                                Leave blank if not applicable
                                            </span>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="dotNumber">DOT Number (Optional)</label>
                                            <input
                                                type="text"
                                                id="dotNumber"
                                                {...register("dotNumber")}
                                                placeholder="Enter DOT number if applicable"
                                            />
                                            <span className="field-helper">
                                                <i className="fas fa-info-circle"></i>
                                                Leave blank if not applicable
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Form Actions */}
                                <div className="modal-actions">
                                    <button type="button" className="btn-secondary" onClick={handleBack}>
                                        <i className="fas fa-arrow-left"></i>
                                        Back
                                    </button>
                                    <button type="submit" className="btn-primary">
                                        Continue
                                        <i className="fas fa-arrow-right"></i>
                                    </button>
                                </div>
                            </form>
                        )}

                        {/* Step 2: Personal Details (for Auto/Motorcycle) */}
                        {currentStep === 2 && insuranceType !== 'commercial' && (
                            <form onSubmit={handleSubmit(onSubmit)} className="quote-form">
                                <div className="form-section">
                                    <h3 className="section-title">Tell Us More About You</h3>

                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="email">Email Address *</label>
                                            <input
                                                type="email"
                                                id="email"
                                                {...register("email")}
                                                placeholder="your.email@example.com"
                                                className={errors.email ? 'input-error' : ''}
                                            />
                                            {errors.email && (
                                                <span className="error-message">
                                                    <i className="fas fa-exclamation-circle"></i>
                                                    {errors.email.message}
                                                </span>
                                            )}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="dateOfBirth">Date of Birth *</label>
                                            <DatePicker
                                                ref={datePickerRef}
                                                id="dateOfBirth"
                                                selected={dateOfBirth}
                                                onChange={handleDateOfBirthChange}
                                                dateFormat="MM/dd/yyyy"
                                                showMonthDropdown
                                                showYearDropdown
                                                dropdownMode="select"
                                                scrollableYearDropdown
                                                yearDropdownItemNumber={100}
                                                maxDate={new Date()}
                                                minDate={new Date(1920, 0, 1)}
                                                placeholderText="Select your date of birth"
                                                className={errors.dateOfBirth ? 'input-error' : ''}
                                                autoComplete="off"
                                            />
                                            <input
                                                type="hidden"
                                                {...register("dateOfBirth")}
                                            />
                                            {errors.dateOfBirth && (
                                                <span className="error-message">
                                                    <i className="fas fa-exclamation-circle"></i>
                                                    {errors.dateOfBirth.message}
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="gender">Gender</label>
                                            <select
                                                id="gender"
                                                {...register("gender")}
                                                className={errors.gender ? 'input-error' : ''}
                                            >
                                                <option value="">Select gender</option>
                                                <option value="male">Male</option>
                                                <option value="female">Female</option>
                                            </select>
                                            {errors.gender && (
                                                <span className="error-message">
                                                    <i className="fas fa-exclamation-circle"></i>
                                                    {errors.gender.message}
                                                </span>
                                            )}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="language">Preferred Language</label>
                                            <select
                                                id="language"
                                                {...register("language")}
                                                className={errors.language ? 'input-error' : ''}
                                            >
                                                <option value="">Select language</option>
                                                <option value="english">English</option>
                                                <option value="spanish">Español (Spanish)</option>
                                            </select>
                                            {errors.language && (
                                                <span className="error-message">
                                                    <i className="fas fa-exclamation-circle"></i>
                                                    {errors.language.message}
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="maritalStatus">Marital Status</label>
                                            <select
                                                id="maritalStatus"
                                                {...register("maritalStatus")}
                                                className={errors.maritalStatus ? 'input-error' : ''}
                                            >
                                                <option value="">Select status</option>
                                                <option value="single">Single</option>
                                                <option value="married">Married</option>
                                                <option value="divorced">Divorced</option>
                                            </select>
                                            {errors.maritalStatus && (
                                                <span className="error-message">
                                                    <i className="fas fa-exclamation-circle"></i>
                                                    {errors.maritalStatus.message}
                                                </span>
                                            )}
                                        </div>
                                        <div className="form-group"></div>
                                    </div>

                                    <div className="form-row" style={{gridTemplateColumns: '1fr'}}>
                                        <div className="form-group">
                                            <label htmlFor="address">Street Address *</label>
                                            <input
                                                type="text"
                                                id="address"
                                                {...register("address")}
                                                placeholder="123 Main Street"
                                                className={errors.address ? 'input-error' : ''}
                                            />
                                            {errors.address && (
                                                <span className="error-message">
                                                    <i className="fas fa-exclamation-circle"></i>
                                                    {errors.address.message}
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="zipCode">
                                                ZIP Code *
                                                {isLoadingZip && <span className="loading-text"> (Loading...)</span>}
                                            </label>
                                            <input
                                                type="text"
                                                id="zipCode"
                                                value={zipValue}
                                                onChange={handleZipCodeChange}
                                                placeholder="Enter ZIP code first"
                                                maxLength="5"
                                                className={errors.zipCode || zipError ? 'input-error' : ''}
                                            />
                                            {errors.zipCode && (
                                                <span className="error-message">
                                                    <i className="fas fa-exclamation-circle"></i>
                                                    {errors.zipCode.message}
                                                </span>
                                            )}
                                            {zipError && (
                                                <span className="error-message">
                                                    <i className="fas fa-exclamation-circle"></i>
                                                    {zipError}
                                                </span>
                                            )}
                                            <span className="field-helper">
                                                <i className="fas fa-info-circle"></i>
                                                City and State will auto-fill from ZIP code
                                            </span>
                                        </div>
                                        <div className="form-group"></div>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="city">City</label>
                                            <input
                                                type="text"
                                                id="city"
                                                value={cityValue}
                                                onChange={handleCityChange}
                                                placeholder="Enter your city"
                                                className={errors.city ? 'input-error' : ''}
                                            />
                                            {errors.city && (
                                                <span className="error-message">
                                                    <i className="fas fa-exclamation-circle"></i>
                                                    {errors.city.message}
                                                </span>
                                            )}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="state">State</label>
                                            <Select
                                                id="state"
                                                options={US_STATES}
                                                value={selectedState}
                                                onChange={handleStateChange}
                                                placeholder="Select state..."
                                                isClearable
                                                className={`react-select-container ${errors.state ? 'input-error' : ''}`}
                                                classNamePrefix="react-select"
                                                styles={{
                                                    control: (base, state) => ({
                                                        ...base,
                                                        borderColor: errors.state ? '#dc3545' : (state.isFocused ? 'var(--color-set-one-1)' : '#e0e0e0'),
                                                        borderWidth: '2px',
                                                        boxShadow: state.isFocused ? '0 0 0 3px rgba(0, 102, 204, 0.1)' : 'none',
                                                        '&:hover': {
                                                            borderColor: state.isFocused ? 'var(--color-set-one-1)' : '#e0e0e0'
                                                        },
                                                        minHeight: '47px',
                                                        borderRadius: '8px',
                                                        width: '100%'
                                                    }),
                                                    valueContainer: (base) => ({
                                                        ...base,
                                                        padding: '2px 16px',
                                                        overflow: 'hidden',
                                                        display: 'grid',
                                                        gridTemplateColumns: '0 minmax(0, 1fr)',
                                                        flex: 1
                                                    }),
                                                    input: (base) => ({
                                                        ...base,
                                                        margin: 0,
                                                        padding: 0,
                                                        gridColumn: '2',
                                                        gridRow: '1'
                                                    }),
                                                    singleValue: (base) => ({
                                                        ...base,
                                                        gridColumn: '2',
                                                        gridRow: '1',
                                                        maxWidth: '100%',
                                                        overflow: 'hidden',
                                                        textOverflow: 'ellipsis',
                                                        whiteSpace: 'nowrap'
                                                    }),
                                                    placeholder: (base) => ({
                                                        ...base,
                                                        gridColumn: '2',
                                                        gridRow: '1'
                                                    })
                                                }}
                                            />
                                            <input
                                                type="hidden"
                                                {...register("state")}
                                            />
                                            {errors.state && (
                                                <span className="error-message">
                                                    <i className="fas fa-exclamation-circle"></i>
                                                    {errors.state.message}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Form Actions */}
                                <div className="modal-actions">
                                    <button type="button" className="btn-secondary" onClick={handleBack}>
                                        <i className="fas fa-arrow-left"></i>
                                        Back
                                    </button>
                                    <button type="submit" className="btn-primary">
                                        Continue
                                        <i className="fas fa-arrow-right"></i>
                                    </button>
                                </div>
                            </form>
                        )}

                        {/* Step 3: Vehicle Information (for Auto/Motorcycle only) */}
                        {currentStep === 3 && insuranceType !== 'commercial' && (
                            <form onSubmit={handleStep3Continue} className="quote-form">
                                <div className="form-section">
                                    <h3 className="section-title">Tell Us About Your Vehicle(s)</h3>
                                    <p className="coverage-description">Add all vehicles you want to insure</p>

                                    {/* List of added vehicles */}
                                    {formData.vehicles.length > 0 && (
                                        <div style={{ marginBottom: '25px' }}>
                                            <h4 style={{ fontSize: '16px', marginBottom: '15px', color: '#333' }}>
                                                Added Vehicles ({formData.vehicles.length})
                                            </h4>
                                            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                                {formData.vehicles.map((vehicle, index) => (
                                                    <div
                                                        key={index}
                                                        style={{
                                                            background: '#f9f9f9',
                                                            padding: '15px',
                                                            borderRadius: '8px',
                                                            border: '2px solid #e0e0e0',
                                                            display: 'flex',
                                                            justifyContent: 'space-between',
                                                            alignItems: 'center'
                                                        }}
                                                    >
                                                        <div>
                                                            <strong style={{ fontSize: '16px', color: '#333' }}>
                                                                {vehicle.vehicleYear} {vehicle.vehicleMake} {vehicle.vehicleModel}
                                                            </strong>
                                                        </div>
                                                        <div style={{ display: 'flex', gap: '10px' }}>
                                                            <button
                                                                type="button"
                                                                onClick={() => handleEditVehicle(index)}
                                                                style={{
                                                                    background: '#0066cc',
                                                                    color: 'white',
                                                                    border: 'none',
                                                                    padding: '8px 16px',
                                                                    borderRadius: '6px',
                                                                    cursor: 'pointer',
                                                                    fontSize: '14px'
                                                                }}
                                                            >
                                                                <i className="fas fa-edit"></i> Edit
                                                            </button>
                                                            <button
                                                                type="button"
                                                                onClick={() => handleDeleteVehicle(index)}
                                                                style={{
                                                                    background: '#dc3545',
                                                                    color: 'white',
                                                                    border: 'none',
                                                                    padding: '8px 16px',
                                                                    borderRadius: '6px',
                                                                    cursor: 'pointer',
                                                                    fontSize: '14px'
                                                                }}
                                                            >
                                                                <i className="fas fa-trash"></i> Delete
                                                            </button>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Hidden input for validation */}
                                    <input type="hidden" {...register("vehicles")} />

                                    {/* Vehicle form */}
                                    <div style={{
                                        background: editingVehicleIndex !== null ? '#fff3cd' : '#f0f7ff',
                                        padding: '20px',
                                        borderRadius: '8px',
                                        border: `2px solid ${editingVehicleIndex !== null ? '#ffc107' : '#0066cc'}`,
                                        marginBottom: '20px'
                                    }}>
                                        <h4 style={{ fontSize: '16px', marginBottom: '15px', color: '#333' }}>
                                            {editingVehicleIndex !== null ? '✏️ Edit Vehicle' : 'Add New Vehicle'}
                                        </h4>

                                        <div className="form-row">
                                            <div className="form-group">
                                                <label htmlFor="currentVehicleMake">Vehicle Make *</label>
                                                <input
                                                    type="text"
                                                    id="currentVehicleMake"
                                                    value={currentVehicle.vehicleMake}
                                                    onChange={(e) => setCurrentVehicle({ ...currentVehicle, vehicleMake: e.target.value })}
                                                    placeholder="Toyota, Honda, Ford, etc."
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="currentVehicleModel">Vehicle Model *</label>
                                                <input
                                                    type="text"
                                                    id="currentVehicleModel"
                                                    value={currentVehicle.vehicleModel}
                                                    onChange={(e) => setCurrentVehicle({ ...currentVehicle, vehicleModel: e.target.value })}
                                                    placeholder="Camry, Civic, F-150, etc."
                                                />
                                            </div>
                                        </div>

                                        <div className="form-row">
                                            <div className="form-group">
                                                <label htmlFor="currentVehicleYear">Vehicle Year *</label>
                                                <input
                                                    type="number"
                                                    id="currentVehicleYear"
                                                    value={currentVehicle.vehicleYear}
                                                    onChange={(e) => setCurrentVehicle({ ...currentVehicle, vehicleYear: e.target.value })}
                                                    placeholder="2020"
                                                    min="1985"
                                                    max={new Date().getFullYear() + 1}
                                                />
                                            </div>
                                            <div className="form-group"></div>
                                        </div>

                                        <div style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
                                            <button
                                                type="button"
                                                onClick={handleAddVehicle}
                                                disabled={!currentVehicle.vehicleMake || !currentVehicle.vehicleModel || !currentVehicle.vehicleYear}
                                                style={{
                                                    background: editingVehicleIndex !== null ? '#ffc107' : '#28a745',
                                                    color: 'white',
                                                    border: 'none',
                                                    padding: '12px 24px',
                                                    borderRadius: '6px',
                                                    cursor: !currentVehicle.vehicleMake || !currentVehicle.vehicleModel || !currentVehicle.vehicleYear ? 'not-allowed' : 'pointer',
                                                    fontSize: '16px',
                                                    fontWeight: '600',
                                                    opacity: !currentVehicle.vehicleMake || !currentVehicle.vehicleModel || !currentVehicle.vehicleYear ? 0.5 : 1
                                                }}
                                            >
                                                <i className={`fas fa-${editingVehicleIndex !== null ? 'save' : 'plus-circle'}`}></i>{' '}
                                                {editingVehicleIndex !== null ? 'Update Vehicle' : 'Add Vehicle'}
                                            </button>
                                            {editingVehicleIndex !== null && (
                                                <button
                                                    type="button"
                                                    onClick={handleCancelEdit}
                                                    style={{
                                                        background: '#6c757d',
                                                        color: 'white',
                                                        border: 'none',
                                                        padding: '12px 24px',
                                                        borderRadius: '6px',
                                                        cursor: 'pointer',
                                                        fontSize: '16px',
                                                        fontWeight: '600'
                                                    }}
                                                >
                                                    <i className="fas fa-times"></i> Cancel
                                                </button>
                                            )}
                                        </div>
                                    </div>

                                    {errors.vehicles && (
                                        <span className="error-message" style={{ display: 'block', marginTop: '-10px', marginBottom: '15px' }}>
                                            <i className="fas fa-exclamation-circle"></i>
                                            {errors.vehicles.message}
                                        </span>
                                    )}
                                </div>

                                {/* Form Actions */}
                                <div className="modal-actions">
                                    <button type="button" className="btn-secondary" onClick={handleBack}>
                                        <i className="fas fa-arrow-left"></i>
                                        Back
                                    </button>
                                    <button type="submit" className="btn-primary">
                                        Continue
                                        <i className="fas fa-arrow-right"></i>
                                    </button>
                                </div>
                            </form>
                        )}

                        {/* Step 4 (Auto/Motorcycle) or Step 3 (Commercial): Coverage Selection */}
                        {((currentStep === 4 && insuranceType !== 'commercial') || (currentStep === 3 && insuranceType === 'commercial')) && (
                            <form onSubmit={handleSubmit(onSubmit)} className="quote-form">
                                <div className="form-section">
                                    <h3 className="section-title">Choose Your Coverage</h3>
                                    <p className="coverage-description">Select the coverage level that best fits your needs</p>

                                    {insuranceType === 'commercial' ? (
                                        // Commercial Insurance Coverage Options
                                        <div className="coverage-options">
                                            <label className={`coverage-card ${errors.coverageType ? 'has-error' : ''}`}>
                                                <input
                                                    type="radio"
                                                    {...register("coverageType")}
                                                    value="general_liability"
                                                />
                                                <div className="coverage-card-content">
                                                    <div className="coverage-header">
                                                        <h4>General Liability</h4>
                                                        <span className="coverage-badge">Essential</span>
                                                    </div>
                                                    <p className="coverage-price">Most Common</p>
                                                    <ul className="coverage-features">
                                                        <li><i className="fas fa-check"></i> Covers injury or property damage to others</li>
                                                        <li><i className="fas fa-check"></i> Legal defense included</li>
                                                        <li><i className="fas fa-check"></i> Required for most businesses</li>
                                                    </ul>
                                                </div>
                                            </label>

                                            <label className="coverage-card recommended">
                                                <input
                                                    type="radio"
                                                    {...register("coverageType")}
                                                    value="bop"
                                                />
                                                <div className="coverage-card-content">
                                                    <div className="coverage-header">
                                                        <h4>Business Owner's Policy (BOP)</h4>
                                                        <span className="coverage-badge popular">Most Popular</span>
                                                    </div>
                                                    <p className="coverage-price">Best Value</p>
                                                    <ul className="coverage-features">
                                                        <li><i className="fas fa-check"></i> General Liability + Property</li>
                                                        <li><i className="fas fa-check"></i> Covers equipment & inventory</li>
                                                        <li><i className="fas fa-check"></i> Great for small businesses</li>
                                                    </ul>
                                                </div>
                                            </label>

                                            <label className="coverage-card">
                                                <input
                                                    type="radio"
                                                    {...register("coverageType")}
                                                    value="workers_comp"
                                                />
                                                <div className="coverage-card-content">
                                                    <div className="coverage-header">
                                                        <h4>Workers' Compensation</h4>
                                                        <span className="coverage-badge">Employee Protection</span>
                                                    </div>
                                                    <p className="coverage-price">State Required</p>
                                                    <ul className="coverage-features">
                                                        <li><i className="fas fa-check"></i> Covers employee injuries</li>
                                                        <li><i className="fas fa-check"></i> Medical & wage benefits</li>
                                                        <li><i className="fas fa-check"></i> Protects your business legally</li>
                                                    </ul>
                                                </div>
                                            </label>
                                        </div>
                                    ) : (
                                        // Auto/Motorcycle Insurance Coverage Options
                                        <div className="coverage-options">
                                            <label className={`coverage-card ${errors.coverageType ? 'has-error' : ''}`}>
                                                <input
                                                    type="radio"
                                                    {...register("coverageType")}
                                                    value="liability"
                                                />
                                                <div className="coverage-card-content">
                                                    <div className="coverage-header">
                                                        <h4>Liability Coverage</h4>
                                                        <span className="coverage-badge">Basic</span>
                                                    </div>
                                                    <p className="coverage-price">Most Affordable</p>
                                                    <ul className="coverage-features">
                                                        <li><i className="fas fa-check"></i> Covers damage to others</li>
                                                        <li><i className="fas fa-check"></i> Meets state requirements</li>
                                                        <li><i className="fas fa-check"></i> Legal protection</li>
                                                    </ul>
                                                </div>
                                            </label>

                                            <label className="coverage-card recommended">
                                                <input
                                                    type="radio"
                                                    {...register("coverageType")}
                                                    value="comprehensive"
                                                />
                                                <div className="coverage-card-content">
                                                    <div className="coverage-header">
                                                        <h4>Comprehensive Coverage</h4>
                                                        <span className="coverage-badge popular">Most Popular</span>
                                                    </div>
                                                    <p className="coverage-price">Complete Peace of Mind</p>
                                                    <ul className="coverage-features">
                                                        <li><i className="fas fa-check"></i> Everything in Liability</li>
                                                        <li><i className="fas fa-check"></i> Collision protection</li>
                                                        <li><i className="fas fa-check"></i> Theft & vandalism</li>
                                                        <li><i className="fas fa-check"></i> Weather damage</li>
                                                    </ul>
                                                </div>
                                            </label>
                                        </div>
                                    )}

                                    {errors.coverageType && (
                                        <span className="error-message consent-error">
                                            <i className="fas fa-exclamation-circle"></i>
                                            {errors.coverageType.message}
                                        </span>
                                    )}
                                </div>

                                {/* Form Actions */}
                                <div className="modal-actions">
                                    <button type="button" className="btn-secondary" onClick={handleBack}>
                                        <i className="fas fa-arrow-left"></i>
                                        Back
                                    </button>
                                    <button type="submit" className="btn-primary btn-success">
                                        <i className="fas fa-check"></i>
                                        Get My Quote
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>

                    {/* Footer */}
                    <div className="modal-footer">
                        <div className="footer-info">
                            <i className="fas fa-lock"></i>
                            <span>Your information is secure and confidential</span>
                        </div>
                        <div className="footer-contact">
                            <span>Need help? Call us at <Link href="tel:18002505540">1-800-250-5540</Link></span>
                        </div>
                    </div>
                </div>
                </div>
            )}

            {/* Success Modal */}
            {isSubmitted && (
                <div className="insurance-quote-modal-overlay">
                    <div className="insurance-quote-modal" style={{ maxWidth: '500px' }}>
                        <div className="modal-body" style={{ padding: '50px 30px' }}>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{
                                    width: '80px',
                                    height: '80px',
                                    borderRadius: '50%',
                                    background: '#28a745',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    margin: '0 auto 30px',
                                    fontSize: '40px',
                                    color: '#ffffff'
                                }}>
                                    <i className="fas fa-check"></i>
                                </div>
                                <h2 style={{
                                    fontSize: '32px',
                                    fontWeight: '700',
                                    color: 'var(--heading-color-one)',
                                    marginBottom: '15px'
                                }}>
                                    Thank You!
                                </h2>
                                <p style={{ fontSize: '18px', marginBottom: '20px', lineHeight: '1.6', color: '#666' }}>
                                    Your quote request has been received successfully.
                                </p>
                                <p style={{ fontSize: '16px', color: '#666', marginBottom: '30px', lineHeight: '1.6' }}>
                                    An agent from <strong style={{ color: 'var(--heading-color-one)' }}>New Decade Insurance</strong> will contact you shortly to discuss your coverage options and provide you with a personalized quote.
                                </p>
                                <div style={{
                                    background: '#f0f7ff',
                                    padding: '20px',
                                    borderRadius: '8px',
                                    marginBottom: '30px',
                                    borderLeft: '4px solid var(--color-set-one-1)'
                                }}>
                                    <p style={{ fontSize: '14px', color: '#666', margin: 0, textAlign: 'left' }}>
                                        <i className="fas fa-info-circle" style={{ marginRight: '8px', color: 'var(--color-set-one-1)' }}></i>
                                        We typically respond within <strong>24 hours</strong>. Check your email and phone for our response.
                                    </p>
                                </div>
                                <button
                                    type="button"
                                    className="btn-primary"
                                    onClick={() => {
                                        setIsSubmitted(false)
                                        handleClose()
                                    }}
                                    style={{
                                        minWidth: '200px',
                                        padding: '16px 32px',
                                        fontSize: '16px',
                                        background: '#dc3545',
                                        borderColor: '#dc3545'
                                    }}
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
