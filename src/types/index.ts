// Base types
export interface BaseEntity {
  id: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  subtitle: string;
  email: string;
  phone: string;
  location: string;
  bio: string;
  avatar: string;
  cvUrl: string;
  socialLinks: SocialLink[];
}

export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: string;
  color: string;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface NavItem {
  id: string;
  label: string;
  href: string;
  icon?: string;
}

export interface SEOConfig {
  title: string;
  description: string;
  keywords: string;
  author: string;
  url: string;
  image: string;
}

export interface ThemeConfig {
  theme: "light" | "dark";
  primaryColor: string;
  accentColor: string;
}

// Re-export specific types
export type { Project } from "./project";
export type { Experience } from "./experience";
export type { Skill } from "./skill";
export type { Testimonial } from "./testimonial";
