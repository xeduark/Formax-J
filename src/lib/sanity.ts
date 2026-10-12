// src/lib/sanity.ts
//
// Lectura de contenido desde Sanity con respaldo en los datos locales.
// Mientras no exista PUBLIC_SANITY_PROJECT_ID el sitio sigue funcionando
// exactamente igual que antes: nada se rompe por tener el CMS a medias.
import { createClient, type SanityClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID;
const dataset = import.meta.env.PUBLIC_SANITY_DATASET || 'production';

export const sanityEnabled = Boolean(projectId);

export const sanity: SanityClient | null = sanityEnabled
  ? createClient({
      projectId,
      dataset,
      apiVersion: '2024-01-01',
      // El sitio es estático: el contenido se congela en cada build y Netlify
      // reconstruye cuando Sanity dispara el webhook. Sin CDN no ganamos nada.
      useCdn: true,
    })
  : null;

const builder = sanity ? imageUrlBuilder(sanity) : null;

/** URL de una imagen de Sanity con ancho máximo y formato automático. */
export function imageUrl(source: unknown, width = 1200): string {
  if (!builder || !source) return '';
  return builder.image(source as never).width(width).auto('format').url();
}

/**
 * Consulta Sanity y cae a los datos locales si el CMS no está configurado,
 * no responde o devuelve vacío. Nunca tumba el build.
 */
export async function fromSanity<T>(query: string, fallback: T): Promise<T> {
  if (!sanity) return fallback;
  try {
    const data = await sanity.fetch<T>(query);
    if (!data || (Array.isArray(data) && data.length === 0)) return fallback;
    return data;
  } catch (error) {
    console.warn('[sanity] consulta fallida, uso datos locales:', (error as Error).message);
    return fallback;
  }
}

// ---------------------------------------------------------------- consultas
// Los nombres de campo replican la forma que ya consumen los componentes,
// así el fallback y el CMS son intercambiables sin tocar el markup.

export const QUERY_PROGRAMAS = `*[_type == "programa"] | order(orden asc){
  "id": slug.current,
  title, level, age, freq, desc, price, icon, gradient, popular,
  methodologyFocus, details,
  "wompiLink": wompiLink
}`;

export const QUERY_HORARIOS = `*[_type == "diaHorario"] | order(orden asc){
  dayName, subtitle, isSpecial,
  "slots": slots[]{ time, location, sessionType, statusText, note }
}`;

export const QUERY_GALERIA = `*[_type == "galeriaItem"] | order(orden asc){
  title, desc, category, wide, alt,
  "url": imagen.asset->url
}`;

export const QUERY_TESTIMONIOS = `*[_type == "testimonio"] | order(orden asc){
  initials, name, role, quote, color
}`;

export const QUERY_PATROCINADORES = `*[_type == "patrocinador"] | order(orden asc){
  name, tier, url,
  "logo": logo.asset->url
}`;

export const QUERY_PRODUCTOS = `*[_type == "productoPatrocinador"] | order(orden asc){
  "id": _id, name, description, price, icon, color, url,
  "image": image.asset->url
}`;

export const QUERY_PAGOS = `*[_type == "ajustesPago"][0]{
  nequi, bancolombiaCuenta, bancolombiaTipo, titular, nit, whatsapp, wompiPublicKey
}`;

// --------------------------------------------------- documentos únicos
// Las imágenes se resuelven a URL para que el respaldo local (que guarda
// strings) y el CMS sean intercambiables sin tocar los componentes.

export const QUERY_HERO = `*[_type == "hero"][0]{
  badge, title, gradientText, textAdd, brand, subtitle,
  ctaPrimary, ctaSecondary, stats, badges,
  "image": image.asset->url
}`;

export const QUERY_NOSOTROS = `*[_type == "nosotros"][0]{
  badge, title, description, features,
  "images": images[].asset->url
}`;

export const QUERY_METODOLOGIA = `*[_type == "metodologia"][0]{ quote, omsBenefits }`;

export const QUERY_CONTACTO = `*[_type == "contacto"][0]{
  address, phone, email, hours, social, programs
}`;

export const QUERY_INSCRIPCION = `*[_type == "inscripcion"][0]{
  title, subtitle, clubName, price, pricePeriod, whatsappContact,
  includes, requirements, faq
}`;

export const QUERY_AJUSTES = `*[_type == "ajustesSitio"][0]{
  name, tagline, description, email, phone, address, social
}`;
