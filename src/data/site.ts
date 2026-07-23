// src/data/site.ts
import type { SiteConfig } from '../types';

export const siteConfig: SiteConfig = {
  name: 'FORMAX-J',
  tagline: 'Patinaje de Velocidad',
  description: 'Formando campeones de velocidad sobre ruedas con pasión, disciplina y excelencia desde 2010.',
  url: 'https://formax-j.com',
  email: 'info@formax-j.com',
  phone: '+34 912 345 678',
  address: 'Pista de Patinaje Municipal, Calle del Deporte, 25, 28001 Madrid, España',
  social: {
    instagram: 'https://instagram.com/formaxj',
    facebook: 'https://facebook.com/formaxj',
    youtube: 'https://youtube.com/formaxj',
    twitter: 'https://twitter.com/formaxj'
  },
  copyright: `© ${new Date().getFullYear()} Club de Patinaje FORMAX-J. Todos los derechos reservados.`
};