import { NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(request) {
    try {
        // Initialize Resend client at runtime to avoid build-time errors
        const resend = new Resend(process.env.RESEND_API_KEY)

        const body = await request.json()
        const { formData, currentStep, isComplete } = body

        // Validate that at least step 1 is completed
        if (!formData.firstName || !formData.email || !formData.phone) {
            return NextResponse.json({
                success: false,
                message: 'Contact information is required'
            }, { status: 400 })
        }

        // Build email content based on completed steps
        let emailContent = buildEmailContent(formData, currentStep, isComplete)

        // Send email to company
        await resend.emails.send({
            from: process.env.EMAIL_FROM || 'noreplay@allcentury.com',
            to: process.env.QUOTE_RECIPIENT_EMAIL || 'allcenturysite@gmail.com',
            subject: isComplete
                ? `New Complete Insurance Quote - ${formData.firstName} ${formData.lastName}`
                : `Incomplete Insurance Quote (Step ${currentStep}) - ${formData.firstName} ${formData.lastName}`,
            html: emailContent.companyEmail
        })

        // Send confirmation email to customer (only if complete)
        if (isComplete) {
            await resend.emails.send({
                from: process.env.EMAIL_FROM || 'noreplay@allcentury.com',
                to: formData.email,
                subject: 'Thank you for your insurance quote request - All Century Insurance',
                html: emailContent.customerEmail
            })
        }

        return NextResponse.json({
            success: true,
            message: 'Emails sent successfully'
        })

    } catch (error) {
        console.error('Error sending email:', error)
        return NextResponse.json({
            success: false,
            message: 'Failed to send email',
            error: error.message
        }, { status: 500 })
    }
}

function buildEmailContent(formData, currentStep, isComplete) {
    const completionStatus = isComplete
        ? '<span style="color: #28a745; font-weight: bold;">✓ COMPLETE</span>'
        : `<span style="color: #ffc107; font-weight: bold;">⚠ INCOMPLETE (Stopped at Step ${currentStep})</span>`

    // Company email HTML
    const companyEmail = `
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: #333; color: white; padding: 20px; text-align: center; }
                .logo { max-width: 200px; height: auto; margin-bottom: 15px; }
                .content { background: #f9f9f9; padding: 30px; border: 1px solid #ddd; }
                .section { background: white; padding: 20px; margin-bottom: 20px; border-radius: 8px; border-left: 4px solid #dc3545; }
                .section h3 { margin-top: 0; color: #dc3545; }
                .field { margin-bottom: 12px; }
                .field label { font-weight: bold; color: #555; display: inline-block; min-width: 150px; }
                .field value { color: #333; }
                .status-badge { display: inline-block; padding: 8px 16px; border-radius: 4px; font-size: 14px; margin-bottom: 20px; }
                .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <img
                    src="https://allcentury.com/assets/images/all_century_white_600.png"
                    alt="All Century Insurance"
                    class="logo"
                    />
                    <h1 style="margin: 0;">New Insurance Quote Request</h1>
                </div>
                <div class="content">
                    <div style="text-align: center; margin-bottom: 20px;">
                        <p style="margin: 0; font-size: 16px;">Form Status: ${completionStatus}</p>
                    </div>

                    ${buildStep1HTML(formData)}
                    ${formData.insuranceType === 'commercial'
                        ? // Commercial Insurance Flow: Step 2 = Business, Step 3 = Coverage
                          `${currentStep >= 2 ? buildBusinessStep2HTML(formData) : '<p style="color: #999; font-style: italic;">Business details not completed</p>'}
                           ${currentStep >= 3 ? buildStep4HTML(formData) : '<p style="color: #999; font-style: italic;">Coverage selection not completed</p>'}`
                        : // Auto/Motorcycle Flow: Step 2 = Personal, Step 3 = Vehicle, Step 4 = Coverage
                          `${currentStep >= 2 ? buildStep2HTML(formData) : '<p style="color: #999; font-style: italic;">Personal details not completed</p>'}
                           ${currentStep >= 3 ? buildStep3HTML(formData) : '<p style="color: #999; font-style: italic;">Vehicle information not completed</p>'}
                           ${currentStep >= 4 ? buildStep4HTML(formData) : '<p style="color: #999; font-style: italic;">Coverage selection not completed</p>'}`
                    }

                    <div class="section" style="background: #fff3cd; border-left-color: #ffc107;">
                        <h3 style="color: #856404;">⚠️ Action Required</h3>
                        <p style="margin: 0;">
                            ${isComplete
                                ? 'This is a complete quote request. Please contact the customer as soon as possible.'
                                : 'This customer started but did not complete the quote form. Follow up to help them complete their quote.'}
                        </p>
                    </div>
                </div>
                <div class="footer">
                    <p>This email was automatically generated from your website's quote form.</p>
                    <p><strong>All Century Insurance</strong> | <a href="tel:18002505540">1-800-250-5540</a></p>
                </div>
            </div>
        </body>
        </html>
    `

    // Customer confirmation email
    const customerEmail = `
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: #333; color: white; padding: 30px; text-align: center; }
                .logo { max-width: 200px; height: auto; margin-bottom: 15px; }
                .content { background: white; padding: 30px; border: 1px solid #ddd; }
                .highlight-box { background: #f0f7ff; padding: 20px; border-radius: 8px; border-left: 4px solid #dc3545; margin: 20px 0; }
                .cta-button { display: inline-block; background: #dc3545; color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: bold; margin: 20px 0; }
                .footer { text-align: center; padding: 20px; color: #333; font-size: 12px; background: #f9f9f9; }
                .contact-info { background: #f9f9f9; padding: 15px; border-radius: 8px; margin: 15px 0; }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <img
                    src="https://allcentury.com/assets/images/all_century_white_600.png"
                    alt="All Century Insurance"
                    class="logo"
                    />
                    <h1 style="margin: 0; font-size: 28px;">Thank You, ${formData.firstName}!</h1>
                    <p style="margin: 10px 0 0 0; font-size: 16px;">Your insurance quote request has been received</p>
                </div>
                <div class="content">
                    <p style="font-size: 16px;">Dear ${formData.firstName} ${formData.lastName},</p>

                    <p>Thank you for requesting an insurance quote from <strong>All Century Insurance</strong>. We've received your information and one of our experienced agents will contact you shortly.</p>

                    <div class="highlight-box">
                        <p style="margin: 0; font-size: 14px;">
                            <strong>📋 What happens next?</strong><br><br>
                            • Our team will review your information<br>
                            • An agent will contact you within <strong>24 hours</strong><br>
                            • We'll discuss your coverage options and provide a personalized quote<br>
                            • You'll get answers to all your insurance questions
                        </p>
                    </div>

                    <div class="contact-info">
                        <p style="margin: 0; font-size: 14px;"><strong>Need immediate assistance?</strong></p>
                        <p style="margin: 5px 0;">
                            📞 Call us toll-free: <a href="tel:18002505540" style="color: #dc3545; text-decoration: none; font-weight: bold;">1-800-250-5540</a><br>
                            📧 Email: <a href="mailto:info@allcentury.com" style="color: #dc3545; text-decoration: none;">info@allcentury.com</a><br>
                            🌐 Website: <a href="https://allcentury.com" style="color: #dc3545; text-decoration: none;">allcentury.com</a>
                        </p>
                    </div>

                    <p style="font-size: 14px; color: #666; margin-top: 30px;">
                        <strong>Your Quote Reference:</strong><br>
                        Insurance Type: ${getInsuranceTypeLabel(formData.insuranceType)}<br>
                        Submitted: ${new Date().toLocaleString('en-US', {
                            dateStyle: 'full',
                            timeStyle: 'short'
                        })}
                    </p>

                    <p style="font-size: 14px; color: #666; margin-top: 20px;">
                        We're here to help you find the right coverage at the best price. Thank you for choosing All Century Insurance!
                    </p>

                    <p style="margin-top: 30px;">
                        Best regards,<br>
                        <strong>All Century Insurance Team</strong><br>
                        <em>Serving California since 2005 | Hablamos Español</em>
                    </p>
                </div>
                <div class="footer">
                    <p><strong>All Century Insurance</strong></p>
                    <p>Toll Free: 1-800-250-5540 | License #0F79375</p>
                    <p style="font-size: 11px; color: #999; margin-top: 15px;">
                        This email was sent to ${formData.email}. If you did not request this quote, please contact us immediately.
                    </p>
                </div>
            </div>
        </body>
        </html>
    `

    return { companyEmail, customerEmail }
}

function buildStep1HTML(formData) {
    return `
        <div class="section">
            <h3>📞 Contact Information</h3>
            <div class="field"><label>Name:</label> <span class="value">${formData.firstName} ${formData.lastName}</span></div>
            <div class="field"><label>Email:</label> <span class="value"><a href="mailto:${formData.email}">${formData.email}</a></span></div>
            <div class="field"><label>Phone:</label> <span class="value"><a href="tel:${formData.phone}">${formData.phone}</a></span></div>
            <div class="field"><label>Insurance Type:</label> <span class="value">${getInsuranceTypeLabel(formData.insuranceType)}</span></div>
            <div class="field"><label>Agreed to Contact:</label> <span class="value">${formData.agreeToContact ? 'Yes ✓' : 'No'}</span></div>
        </div>
    `
}

function buildStep2HTML(formData) {
    return `
        <div class="section">
            <h3>👤 Personal Details</h3>
            <div class="field"><label>Date of Birth:</label> <span class="value">${formData.dateOfBirth ? new Date(formData.dateOfBirth).toLocaleDateString() : 'N/A'}</span></div>
            <div class="field"><label>Gender:</label> <span class="value">${capitalize(formData.gender)}</span></div>
            <div class="field"><label>Language:</label> <span class="value">${capitalize(formData.language)}</span></div>
            <div class="field"><label>Marital Status:</label> <span class="value">${capitalize(formData.maritalStatus)}</span></div>
            <div class="field"><label>Address:</label> <span class="value">${formData.address}</span></div>
            <div class="field"><label>City:</label> <span class="value">${formData.city}</span></div>
            <div class="field"><label>State:</label> <span class="value">${formData.state}</span></div>
            <div class="field"><label>ZIP Code:</label> <span class="value">${formData.zipCode}</span></div>
        </div>
    `
}

function buildBusinessStep2HTML(formData) {
    return `
        <div class="section">
            <h3>🏢 Business Details</h3>
            <div class="field"><label>Company Name:</label> <span class="value">${formData.companyName || 'N/A'}</span></div>
            <div class="field"><label>Business Address:</label> <span class="value">${formData.businessAddress || 'N/A'}</span></div>
            <div class="field"><label>City:</label> <span class="value">${formData.businessCity || 'N/A'}</span></div>
            <div class="field"><label>ZIP Code:</label> <span class="value">${formData.businessZipCode || 'N/A'}</span></div>
            <div class="field"><label>CA Number:</label> <span class="value">${formData.caNumber || 'Not provided'}</span></div>
            <div class="field"><label>DOT Number:</label> <span class="value">${formData.dotNumber || 'Not provided'}</span></div>
        </div>
    `
}

function buildStep3HTML(formData) {
    // Check if we have the new vehicles array format
    if (formData.vehicles && formData.vehicles.length > 0) {
        const vehiclesHTML = formData.vehicles.map((vehicle, index) => `
            <div class="field" style="background: #f0f7ff; padding: 12px; border-radius: 6px; margin-bottom: 10px;">
                <label style="color: #dc3545; font-weight: bold;">Vehicle ${index + 1}:</label>
                <span class="value">${vehicle.vehicleYear} ${vehicle.vehicleMake} ${vehicle.vehicleModel}</span>
            </div>
        `).join('')

        return `
            <div class="section">
                <h3>🚗 Vehicle Information (${formData.vehicles.length} vehicle${formData.vehicles.length > 1 ? 's' : ''})</h3>
                ${vehiclesHTML}
            </div>
        `
    }

    // Fallback for old format (single vehicle)
    if (formData.vehicleMake && formData.vehicleModel && formData.vehicleYear) {
        return `
            <div class="section">
                <h3>🚗 Vehicle Information</h3>
                <div class="field"><label>Vehicle:</label> <span class="value">${formData.vehicleYear} ${formData.vehicleMake} ${formData.vehicleModel}</span></div>
                <div class="field"><label>Year:</label> <span class="value">${formData.vehicleYear}</span></div>
                <div class="field"><label>Make:</label> <span class="value">${formData.vehicleMake}</span></div>
                <div class="field"><label>Model:</label> <span class="value">${formData.vehicleModel}</span></div>
            </div>
        `
    }

    return '<p style="color: #999; font-style: italic;">No vehicle information provided</p>'
}

function buildStep4HTML(formData) {
    return `
        <div class="section">
            <h3>🛡️ Coverage Selection</h3>
            <div class="field"><label>Selected Coverage:</label> <span class="value">${getCoverageTypeLabel(formData.coverageType)}</span></div>
        </div>
    `
}

function getInsuranceTypeLabel(type) {
    const types = {
        'auto': 'Auto Insurance',
        'motorcycle': 'Motorcycle Insurance',
        'commercial': 'Commercial Insurance'
    }
    return types[type] || type
}

function getCoverageTypeLabel(type) {
    const types = {
        // Auto/Motorcycle Coverage Types
        'liability': 'Liability Coverage (Basic)',
        'collision': 'Collision Coverage (Most Popular)',
        'comprehensive': 'Comprehensive Coverage (Full Protection)',
        // Commercial Coverage Types
        'general_liability': 'General Liability (Essential)',
        'bop': "Business Owner's Policy - BOP (Most Popular)",
        'workers_comp': "Workers' Compensation (Employee Protection)"
    }
    return types[type] || type
}

function capitalize(str) {
    if (!str) return 'N/A'
    return str.charAt(0).toUpperCase() + str.slice(1)
}
