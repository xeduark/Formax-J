export interface NavItem { label: string; href: string; }

export interface Stat { value: string; label: string; suffix?: string; }

export interface HeroData {
  badge: string;
  title: string;
  gradientText: string;
  textAdd: string;
  brand: string;
  subtitle: string;
  ctaPrimary: { text: string; href: string };
  ctaSecondary: { text: string; href: string };
  stats: Stat[];
  image: string;
  badges: { icon: string; text: string; subtext: string }[];
}

export interface Feature { icon: string; title: string; description: string; color: 'green' | 'yellow' | 'blue' | 'purple'; }

export interface AboutData {
  badge: string;
  title: string;
  description: string;
  images: string[];
  features: Feature[];
}

export interface Program {
  id: string;
  title: string;
  age: string;
  freq: string;
  desc: string;
  price: string;
  icon: string;
  gradient: string;
  popular?: boolean;
}

export interface ScheduleRow {
  time: string;
  icon: string;
  color: string;
  data: string[];
}

export interface ScheduleData {
  headers: string[];
  rows: ScheduleRow[];
}

// src/types/index.d.ts

export interface SponsorProduct {
  id: string;
  name: string;
  description: string;
  price: string;
  icon: string;
  color: string;
  image?: string;
}

export interface Sponsor {
  id: string;
  name: string;
  description: string;
  logo: string;
  url: string;
}

export interface SponsorsData {
  main: { name: string; desc: string; url: string; icon: string; gradient: string; };
  products: SponsorProduct[];
  secondary: { name: string; icon: string; color: string; }[];
}

export interface GalleryItem {
  url?: string;
  title: string;
  desc: string;
  category: string;
  wide?: boolean;
  type?: 'image' | 'video' | 'event';
}

export interface Testimonial {
  initials: string;
  name: string;
  role: string;
  quote: string;
  color: string;
}

export interface ContactData {
  address: string;
  phone: string;
  email: string;
  hours: string;
  social: string[];
  programs: string[];
}

export interface FooterLink { label: string; href: string; }