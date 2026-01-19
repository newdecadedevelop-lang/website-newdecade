import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request) {
    try {
        const { name, email, phone, insuranceType, message, recaptchaToken } = await request.json()

        // Validate required fields
        if (!name || !email || !phone || !insuranceType) {
            return Response.json({
                success: false,
                message: 'All required fields must be filled'
            }, { status: 400 })
        }

        // Verify reCAPTCHA token (ready for future implementation)
        // Uncomment when reCAPTCHA is configured
        /*
        if (!recaptchaToken) {
            return Response.json({
                success: false,
                message: 'reCAPTCHA verification failed'
            }, { status: 400 })
        }

        const recaptchaResponse = await fetch(
            'https://www.google.com/recaptcha/api/siteverify',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
            }
        )

        const recaptchaData = await recaptchaResponse.json()

        // Check reCAPTCHA score (v3 returns a score from 0.0 to 1.0)
        // Score of 0.5 or higher is generally considered human
        if (!recaptchaData.success || recaptchaData.score < 0.5) {
            console.error('reCAPTCHA verification failed:', recaptchaData)
            return Response.json({
                success: false,
                message: 'reCAPTCHA verification failed. Please try again.'
            }, { status: 400 })
        }
        */

        // Build email content
        const emailContent = buildEmailContent({ name, email, phone, insuranceType, message })

        // Send email to company
        await resend.emails.send({
            from: process.env.EMAIL_FROM || 'noreplay@allcentury.com',
            to: process.env.QUOTE_RECIPIENT_EMAIL || 'allcenturysite@gmail.com',
            subject: `New Contact Form Submission - ${name}`,
            html: emailContent.companyEmail
        })

        // Send confirmation email to customer
        await resend.emails.send({
            from: process.env.EMAIL_FROM || 'noreplay@allcentury.com',
            to: email,
            subject: 'Thank you for contacting New Decade Insurance',
            html: emailContent.customerEmail
        })

        return Response.json({
            success: true,
            message: 'Message sent successfully'
        })

    } catch (error) {
        console.error('Error sending email:', error)
        return Response.json({
            success: false,
            message: 'Failed to send message',
            error: error.message
        }, { status: 500 })
    }
}

function buildEmailContent({ name, email, phone, insuranceType, message }) {
    // Company email HTML
    const companyEmail = `
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: #2563eb; color: white; padding: 20px; text-align: center; }
                .logo { max-width: 200px; height: auto; margin-bottom: 15px; }
                .content { background: #f9f9f9; padding: 30px; border: 1px solid #ddd; }
                .section { background: white; padding: 20px; margin-bottom: 20px; border-radius: 8px; border-left: 4px solid #2563eb; }
                .section h3 { margin-top: 0; color: #2563eb; }
                .field { margin-bottom: 12px; }
                .field label { font-weight: bold; color: #555; display: inline-block; min-width: 150px; }
                .field value { color: #333; }
                .message-box { background: #f0f7ff; padding: 15px; border-radius: 8px; margin-top: 15px; }
                .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1 style="margin: 0;">New Contact Form Submission</h1>
                </div>
                <div class="content">
                    <div class="section">
                        <h3>Contact Information</h3>
                        <div class="field">
                            <label>Name:</label>
                            <span>${name}</span>
                        </div>
                        <div class="field">
                            <label>Email:</label>
                            <span><a href="mailto:${email}">${email}</a></span>
                        </div>
                        <div class="field">
                            <label>Phone:</label>
                            <span><a href="tel:${phone}">${phone}</a></span>
                        </div>
                        <div class="field">
                            <label>Insurance Type:</label>
                            <span>${insuranceType}</span>
                        </div>
                    </div>

                    ${message ? `
                    <div class="section">
                        <h3>Message</h3>
                        <div class="message-box">
                            <p style="margin: 0; white-space: pre-wrap;">${message}</p>
                        </div>
                    </div>
                    ` : ''}

                    <div class="section" style="background: #fff3cd; border-left-color: #ffc107;">
                        <h3 style="color: #856404;">⚠️ Action Required</h3>
                        <p style="margin: 0;">
                            This customer has submitted a contact form. Please respond as soon as possible.
                        </p>
                    </div>
                </div>
                <div class="footer">
                    <p>This email was automatically generated from your website's contact form.</p>
                    <p><strong>New Decade Insurance</strong> | <a href="tel:+1-800-NEW-DECADE">+1 (800) NEW-DECADE</a></p>
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
                .header { background: #2563eb; color: white; padding: 30px; text-align: center; }
                .logo { max-width: 200px; height: auto; margin-bottom: 15px; }
                .content { background: white; padding: 30px; border: 1px solid #ddd; }
                .highlight-box { background: #f0f7ff; padding: 20px; border-radius: 8px; border-left: 4px solid #2563eb; margin: 20px 0; }
                .contact-info { background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0; }
                .contact-item { margin: 10px 0; }
                .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; background: #f9f9f9; }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1 style="margin: 0; font-size: 28px;">Thank You for Contacting Us!</h1>
                    <p style="margin: 10px 0 0 0; font-size: 16px;">We've received your message</p>
                </div>
                <div class="content">
                    <p style="font-size: 16px;">Dear ${name.split(' ')[0]},</p>

                    <p style="font-size: 16px;">
                        Thank you for reaching out to New Decade Insurance! We've received your inquiry about
                        <strong>${insuranceType}</strong> and our team will get back to you shortly.
                    </p>

                    <div class="highlight-box">
                        <h3 style="margin-top: 0; color: #2563eb;">What Happens Next?</h3>
                        <p style="margin: 0;">
                            One of our insurance specialists will review your request and contact you within
                            <strong>24 business hours</strong> to discuss your insurance needs and provide you with
                            competitive quotes.
                        </p>
                    </div>

                    <div class="contact-info">
                        <h3 style="margin-top: 0; color: #333;">Need Immediate Assistance?</h3>
                        <div class="contact-item">
                            <strong>📞 Phone:</strong> <a href="tel:+1-800-NEW-DECADE">+1 (800) NEW-DECADE</a>
                        </div>
                        <div class="contact-item">
                            <strong>📧 Email:</strong> <a href="mailto:info@newdecadeinsurance.com">info@newdecadeinsurance.com</a>
                        </div>
                        <div class="contact-item">
                            <strong>📍 Location:</strong> Houston, Texas, United States
                        </div>
                    </div>

                    <p style="font-size: 14px; color: #666; margin-top: 30px;">
                        We look forward to helping you find the right insurance coverage at the best price!
                    </p>

                    <p style="font-size: 16px; margin-top: 20px;">
                        Best regards,<br>
                        <strong>New Decade Insurance Team</strong>
                    </p>
                </div>
                <div class="footer">
                    <p><strong>New Decade Insurance</strong></p>
                    <p>Protecting what matters most</p>
                    <p style="margin-top: 10px;">
                        <a href="mailto:info@newdecadeinsurance.com">info@newdecadeinsurance.com</a> |
                        <a href="tel:+1-800-NEW-DECADE">+1 (800) NEW-DECADE</a>
                    </p>
                </div>
            </div>
        </body>
        </html>
    `

    return {
        companyEmail,
        customerEmail
    }
}
