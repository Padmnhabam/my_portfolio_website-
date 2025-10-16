import { useEffect } from 'react';
import ApiService from '../services/api';

export const useVisitorTracking = () => {
  useEffect(() => {
    const trackVisitor = async () => {
      try {
        await ApiService.trackVisitor({
          page: window.location.pathname,
          referrer: document.referrer || 'direct'
        });
      } catch (error) {
        // Silently fail - don't disrupt user experience
        console.log('Visitor tracking failed:', error.message);
      }
    };

    // Track initial page load
    trackVisitor();

    // Track page changes (for SPA)
    const handlePopState = () => {
      trackVisitor();
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);
};