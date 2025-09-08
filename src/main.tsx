import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { initPerformanceMonitoring } from './utils/performance';
import { updateMetaTags, addStructuredData } from './utils/seo';

// Initialize SEO meta tags
updateMetaTags();
addStructuredData();

// Initialize performance monitoring
initPerformanceMonitoring();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
