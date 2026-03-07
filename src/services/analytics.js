/**
 * Analytics Service
 * 
 * Provides a wrapper for Google Analytics (gtag) calls.
 * This ensures that the app doesn't crash if GA is blocked by an ad-blocker.
 */

export const analyticsService = {
    /**
     * Tracks a custom event
     * @param {string} eventName - The name of the event (e.g., 'ai_query')
     * @param {object} params - Event parameters (e.g., { question: '...', category: '...' })
     */
    trackEvent: (eventName, params = {}) => {
        if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
            // Avoid tracking on localhost
            if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
                console.log(`[Analytics Blocked] Localhost detected. Event: ${eventName}`, params);
                return;
            }

            window.gtag('event', eventName, {
                ...params,
                timestamp: new Date().toISOString(),
            });
        }
    },

    /**
     * Tracks a page view (GA4 usually does this automatically, but useful for SPAs)
     * @param {string} pagePath - The path of the page
     */
    trackPageView: (pagePath) => {
        if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
            if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
                return;
            }
            window.gtag('config', 'G-KSJLJVJRLW', {
                page_path: pagePath,
            });
        }
    }
};
