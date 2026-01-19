import { useEffect, useState } from 'react'

export function useRecaptcha() {
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        // Check if reCAPTCHA is already loaded
        if (typeof window !== 'undefined' && window.grecaptcha) {
            setIsLoaded(true)
            return
        }

        // Load reCAPTCHA script
        const loadRecaptcha = () => {
            const script = document.createElement('script')
            script.src = `https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`
            script.async = true
            script.defer = true

            script.onload = () => {
                // Wait for grecaptcha to be ready
                const checkRecaptcha = setInterval(() => {
                    if (window.grecaptcha && window.grecaptcha.ready) {
                        window.grecaptcha.ready(() => {
                            setIsLoaded(true)
                            clearInterval(checkRecaptcha)
                        })
                    }
                }, 100)

                // Clear interval after 5 seconds if not loaded
                setTimeout(() => clearInterval(checkRecaptcha), 5000)
            }

            script.onerror = () => {
                console.error('Failed to load reCAPTCHA')
            }

            document.head.appendChild(script)
        }

        // Only load if site key is available
        if (process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY) {
            loadRecaptcha()
        } else {
            console.warn('reCAPTCHA site key not found. Set NEXT_PUBLIC_RECAPTCHA_SITE_KEY in your environment variables.')
        }

        return () => {
            // Cleanup if needed
        }
    }, [])

    return { isLoaded }
}
