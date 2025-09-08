import type { NavItem, SEOConfig } from '../types';

// Navigation items
export const NAV_ITEMS: NavItem[] = [
  {
    id: 'home',
    label: 'Ana Sayfa',
    href: '#home',
    icon: 'home',
  },
  {
    id: 'about',
    label: 'Hakkımda',
    href: '#about',
    icon: 'user',
  },
  {
    id: 'skills',
    label: 'Yetenekler',
    href: '#skills',
    icon: 'code',
  },
  {
    id: 'projects',
    label: 'Projeler',
    href: '#projects',
    icon: 'briefcase',
  },
  {
    id: 'experience',
    label: 'Deneyim',
    href: '#experience',
    icon: 'clock',
  },
  {
    id: 'testimonials',
    label: 'Referanslar',
    href: '#testimonials',
    icon: 'message-circle',
  },
  {
    id: 'contact',
    label: 'İletişim',
    href: '#contact',
    icon: 'mail',
  },
];

// SEO Configuration
export const SEO_CONFIG: SEOConfig = {
  title: 'Ömer Ada - Full Stack Developer Portfolio',
  description:
    'Modern web uygulamaları geliştiren deneyimli full stack developer. React, Node.js, TypeScript uzmanı. Profesyonel portfolio websitesi.',
  keywords:
    'web developer, react developer, full stack developer, typescript, node.js, javascript, frontend, backend, portfolio, ömer ada',
  author: 'Ömer Ada',
  url: 'https://omerada.vercel.app',
  image: '/images/og-image.jpg',
};

// Animation durations
export const ANIMATION_DURATION = {
  fast: 200,
  normal: 300,
  slow: 500,
  verySlow: 1000,
} as const;

// Breakpoints (matching Tailwind CSS)
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

// Theme colors
export const COLORS = {
  primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',
  },
  dark: {
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b',
    600: '#475569',
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a',
  },
} as const;

// Social media links
export const SOCIAL_LINKS = {
  github: 'https://github.com/omerada',
  linkedin: 'https://linkedin.com/in/omerada',
  twitter: 'https://twitter.com/omerada',
  email: 'mailto:omer@example.com',
  instagram: 'https://instagram.com/omerada',
} as const;

// Contact information
export const CONTACT_INFO = {
  email: 'omer@example.com',
  phone: '+90 555 123 45 67',
  location: 'İstanbul, Türkiye',
  timezone: 'Europe/Istanbul',
} as const;

// Project categories
export const PROJECT_CATEGORIES = [
  { id: 'all', label: 'Tümü', icon: 'grid' },
  { id: 'web', label: 'Web Uygulamaları', icon: 'globe' },
  { id: 'mobile', label: 'Mobil Uygulamalar', icon: 'smartphone' },
  { id: 'desktop', label: 'Masaüstü Uygulamalar', icon: 'monitor' },
  { id: 'ai', label: 'AI/ML Projeleri', icon: 'brain' },
  { id: 'other', label: 'Diğer', icon: 'more-horizontal' },
] as const;

// Skill categories
export const SKILL_CATEGORIES = [
  { id: 'frontend', label: 'Frontend', icon: 'layout', color: '#3b82f6' },
  { id: 'backend', label: 'Backend', icon: 'server', color: '#10b981' },
  { id: 'mobile', label: 'Mobile', icon: 'smartphone', color: '#f59e0b' },
  { id: 'database', label: 'Database', icon: 'database', color: '#8b5cf6' },
  { id: 'devops', label: 'DevOps', icon: 'cloud', color: '#ef4444' },
  { id: 'tools', label: 'Tools', icon: 'tool', color: '#6b7280' },
  { id: 'design', label: 'Design', icon: 'palette', color: '#ec4899' },
  { id: 'soft-skills', label: 'Soft Skills', icon: 'users', color: '#06b6d4' },
] as const;

// Employment types
export const EMPLOYMENT_TYPES = [
  { id: 'full-time', label: 'Tam Zamanlı', color: '#10b981' },
  { id: 'part-time', label: 'Yarı Zamanlı', color: '#f59e0b' },
  { id: 'contract', label: 'Sözleşmeli', color: '#8b5cf6' },
  { id: 'freelance', label: 'Freelance', color: '#3b82f6' },
  { id: 'internship', label: 'Staj', color: '#ef4444' },
] as const;

// Default pagination
export const PAGINATION = {
  defaultPage: 1,
  defaultLimit: 10,
  maxLimit: 100,
} as const;

// API endpoints (if using external APIs)
export const API_ENDPOINTS = {
  projects: '/api/projects',
  experience: '/api/experience',
  skills: '/api/skills',
  testimonials: '/api/testimonials',
  contact: '/api/contact',
} as const;

// File upload limits
export const FILE_LIMITS = {
  maxSize: 5 * 1024 * 1024, // 5MB
  allowedTypes: ['image/jpeg', 'image/png', 'image/webp', 'application/pdf'],
  maxFiles: 10,
} as const;

// Form validation patterns
export const VALIDATION_PATTERNS = {
  email: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
  phone: /^[\+]?[1-9][\d]{0,15}$/,
  url: /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
  linkedin: /^https:\/\/[a-z]{2,3}\.linkedin\.com\/.*$/,
  github: /^https:\/\/github\.com\/.*$/,
} as const;

// Local storage keys
export const STORAGE_KEYS = {
  theme: 'portfolio-theme',
  language: 'portfolio-language',
  preferences: 'portfolio-preferences',
  visitCount: 'portfolio-visit-count',
} as const;

// Error messages
export const ERROR_MESSAGES = {
  network: 'Ağ bağlantısı hatası. Lütfen tekrar deneyin.',
  validation: 'Lütfen tüm alanları doğru şekilde doldurun.',
  fileSize: 'Dosya boyutu çok büyük. Maksimum 5MB olmalıdır.',
  fileType: 'Desteklenmeyen dosya formatı.',
  generic: 'Bir hata oluştu. Lütfen tekrar deneyin.',
} as const;

// Success messages
export const SUCCESS_MESSAGES = {
  emailSent: 'Mesajınız başarıyla gönderildi!',
  fileSaved: 'Dosya başarıyla kaydedildi.',
  profileUpdated: 'Profil başarıyla güncellendi.',
} as const;

// Feature flags
export const FEATURE_FLAGS = {
  enableBlog: false,
  enableAnalytics: true,
  enablePWA: true,
  enableAnimations: true,
  enableDarkMode: true,
  enableI18n: false,
} as const;
