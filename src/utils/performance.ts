// Performance monitoring and analytics utilities

// Simple performance tracking
export const measurePerformance = () => {
  if (typeof window !== 'undefined' && window.performance) {
    window.addEventListener('load', () => {
      const navigation = performance.getEntriesByType(
        'navigation'
      )[0] as PerformanceNavigationTiming;

      if (navigation) {
        const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
        console.log('Page Load Time:', loadTime + 'ms');
        trackMetric('Page_Load_Time', loadTime);
      }
    });
  }
};

// Custom metric tracking
export const trackMetric = (metricName: string, value: number) => {
  // Send to Google Analytics
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'web_vital', {
      metric_name: metricName,
      metric_value: value,
    });
  }

  console.log('Metric tracked:', metricName, value);
};

// Page load performance monitoring
export const measurePageLoad = () => {
  if (typeof window !== 'undefined' && window.performance) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        const navigation = performance.getEntriesByType(
          'navigation'
        )[0] as PerformanceNavigationTiming;

        if (navigation) {
          const metrics = {
            dns: navigation.domainLookupEnd - navigation.domainLookupStart,
            tcp: navigation.connectEnd - navigation.connectStart,
            ttfb: navigation.responseStart - navigation.requestStart,
            download: navigation.responseEnd - navigation.responseStart,
            domInteractive: navigation.domInteractive - navigation.fetchStart,
            domComplete: navigation.domComplete - navigation.fetchStart,
            loadComplete: navigation.loadEventEnd - navigation.fetchStart,
          };

          console.log('Page Load Metrics:', metrics);

          // Track critical metrics
          trackMetric('DNS_Lookup', metrics.dns);
          trackMetric('TCP_Connection', metrics.tcp);
          trackMetric('TTFB_Custom', metrics.ttfb);
          trackMetric('DOM_Interactive', metrics.domInteractive);
          trackMetric('Load_Complete', metrics.loadComplete);
        }
      }, 0);
    });
  }
};

// Initialize performance monitoring
export const initPerformanceMonitoring = () => {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      setTimeout(() => {
        measurePerformance();
        measurePageLoad();
      }, 1000);
    });
  } else {
    setTimeout(() => {
      measurePerformance();
      measurePageLoad();
    }, 1000);
  }
};

// Custom event tracking
export const trackEvent = (
  eventName: string,
  properties: Record<string, unknown> = {}
) => {
  // Google Analytics
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, properties);
  }

  console.log('Event tracked:', eventName, properties);
};

// Track page views
export const trackPageView = (page: string) => {
  trackEvent('Page View', { page });
};

// Track user interactions
export const trackInteraction = (element: string, action: string) => {
  trackEvent('User Interaction', { element, action });
};

// Global interface
declare global {
  interface Window {
    gtag?: (
      command: string,
      action: string,
      parameters?: Record<string, unknown>
    ) => void;
  }
}
