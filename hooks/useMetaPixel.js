import { useEffect } from 'react'

export function useMetaPixel() {
    useEffect(() => {
        // Initialize Meta Pixel if needed
        if (typeof window !== 'undefined' && window.fbq) {
            // Meta Pixel is already loaded
            console.log('Meta Pixel is available')
        }
    }, [])

    const trackEvent = (eventName, data = {}, options = {}) => {
        if (typeof window !== 'undefined' && window.fbq) {
            try {
                // Check if this event should only be tracked once per session
                if (options.sessionOnly) {
                    const sessionKey = `fbq_${eventName}_tracked`
                    if (sessionStorage.getItem(sessionKey)) {
                        return // Already tracked in this session
                    }
                    sessionStorage.setItem(sessionKey, 'true')
                }

                window.fbq('track', eventName, data)
                console.log('Meta Pixel event tracked:', eventName, data)
            } catch (error) {
                console.error('Error tracking Meta Pixel event:', error)
            }
        }
    }

    const trackCustomEvent = (eventName, data = {}, options = {}) => {
        if (typeof window !== 'undefined' && window.fbq) {
            try {
                // Check if this event should only be tracked once per session
                if (options.sessionOnly) {
                    const sessionKey = `fbq_custom_${eventName}_tracked`
                    if (sessionStorage.getItem(sessionKey)) {
                        return // Already tracked in this session
                    }
                    sessionStorage.setItem(sessionKey, 'true')
                }

                window.fbq('trackCustom', eventName, data)
                console.log('Meta Pixel custom event tracked:', eventName, data)
            } catch (error) {
                console.error('Error tracking Meta Pixel custom event:', error)
            }
        }
    }

    return {
        trackEvent,
        trackCustomEvent
    }
}
