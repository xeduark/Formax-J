/**
 * Genera un NDJSON con el contenido actual del sitio para cargarlo en Sanity.
 *
 *   node scripts/seed-sanity.mjs            -> escribe scripts/seed.ndjson
 *   cd sanity && npx sanity dataset import ../scripts/seed.ndjson production
 *
 * Las imágenes remotas se declaran con _sanityAsset: el importador las descarga
 * y las sube como assets del proyecto, así el CMS queda autocontenido.
 */
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const load = (f) => import(`file://${resolve(root, 'src/data', f)}`);

const { heroData } = await load('hero.ts');
const { aboutData } = await load('about.ts');
const { methodologyData } = await load('methodology.ts');
const { contactData } = await load('contact.ts');
const { registrationData } = await load('registration.ts');
const { siteConfig } = await load('site.ts');
const { programsData } = await load('programs.ts');
const { scheduleData } = await load('schedule.ts');
const { galleryData } = await load('gallery.ts');
const { testimonialsData } = await load('testimonials.ts');
const { mainSponsor, secondarySponsors, sponsorProducts } = await load('sponsors.ts');

let n = 0;
/** Sanity exige _key único en cada elemento de un array de objetos. */
const keyed = (arr = []) => arr.map((item) => ({ _key: `k${++n}`, ...item }));
/**
 * Referencia a una imagen remota que el importador subirá.
 * Varias URLs de Cloudinary de los datos originales devuelven 404 (logos de
 * patrocinadores que nunca existieron). Si no responden, se omite el campo:
 * el documento entra igual y el cliente sube la imagen desde el Studio.
 */
const vivas = new Set();
const asset = (url) => (url && vivas.has(url) ? { _sanityAsset: `image@${url}` } : undefined);

async function comprobar(urls) {
  const muertas = [];
  await Promise.all(
    [...new Set(urls.filter(Boolean))].map(async (u) => {
      try {
        const r = await fetch(u, { method: 'HEAD' });
        if (r.ok) vivas.add(u);
        else muertas.push(`${r.status} ${u}`);
      } catch {
        muertas.push(`ERR ${u}`);
      }
    })
  );
  return muertas;
}
const slug = (s) =>
  s
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

const muertas = await comprobar([
  heroData.image,
  ...(aboutData.images || []),
  ...galleryData.map((g) => g.url),
  mainSponsor.logo,
  ...secondarySponsors.map((s) => s.logo),
  ...sponsorProducts.map((p) => p.image),
]);

const docs = [];

// ----------------------------------------------------------- documentos únicos
docs.push({
  _id: 'hero',
  _type: 'hero',
  badge: heroData.badge,
  title: heroData.title,
  gradientText: heroData.gradientText,
  textAdd: heroData.textAdd,
  brand: heroData.brand,
  subtitle: heroData.subtitle,
  ctaPrimary: heroData.ctaPrimary,
  ctaSecondary: heroData.ctaSecondary,
  stats: keyed(heroData.stats),
  badges: keyed(heroData.badges),
  image: asset(heroData.image),
});

docs.push({
  _id: 'nosotros',
  _type: 'nosotros',
  badge: aboutData.badge,
  title: aboutData.title,
  description: aboutData.description,
  images: (aboutData.images || []).map((url, i) => ({ _key: `img${i}`, ...asset(url) })),
  features: keyed(aboutData.features),
});

docs.push({
  _id: 'metodologia',
  _type: 'metodologia',
  quote: methodologyData.quote,
  omsBenefits: keyed(methodologyData.omsBenefits),
});

docs.push({
  _id: 'contacto',
  _type: 'contacto',
  address: contactData.address,
  phone: contactData.phone,
  email: contactData.email,
  hours: contactData.hours,
  social: contactData.social,
  programs: contactData.programs,
});

docs.push({
  _id: 'inscripcion',
  _type: 'inscripcion',
  title: registrationData.title,
  subtitle: registrationData.subtitle,
  clubName: registrationData.clubName,
  price: registrationData.price,
  pricePeriod: registrationData.pricePeriod,
  // El número que había en el código es un placeholder; usamos el real del club.
  whatsappContact: '573122461761',
  includes: registrationData.includes,
  requirements: registrationData.requirements,
  faq: keyed(registrationData.faq),
});

docs.push({
  _id: 'ajustesSitio',
  _type: 'ajustesSitio',
  name: siteConfig.name,
  tagline: siteConfig.tagline,
  description: siteConfig.description,
  email: contactData.email,
  phone: contactData.phone,
  // site.ts traía una dirección de Madrid; la real es la de contacto.
  address: contactData.address.replace(/<br\s*\/?>/gi, ', '),
  social: {},
});

docs.push({
  _id: 'ajustesPago',
  _type: 'ajustesPago',
  nequi: 'PENDIENTE',
  bancolombiaCuenta: 'PENDIENTE',
  bancolombiaTipo: 'Ahorros',
  titular: 'PENDIENTE',
  nit: 'PENDIENTE',
  whatsapp: '573122461761',
  wompiPublicKey: '',
});

// ----------------------------------------------------------------- colecciones
programsData.forEach((p, i) => {
  docs.push({
    _id: `programa-${p.id}`,
    _type: 'programa',
    title: p.title,
    slug: { _type: 'slug', current: p.id },
    level: p.level,
    age: p.age,
    freq: p.freq,
    desc: p.desc,
    details: p.details,
    price: p.price,
    methodologyFocus: p.methodologyFocus,
    icon: p.icon,
    gradient: p.gradient,
    popular: !!p.popular,
    orden: (i + 1) * 10,
  });
});

scheduleData.days.forEach((d, i) => {
  docs.push({
    _id: `dia-${slug(d.dayName)}`,
    _type: 'diaHorario',
    dayName: d.dayName,
    subtitle: d.subtitle,
    isSpecial: !!d.isSpecial,
    slots: keyed(
      (d.slots || []).map((s) => ({
        time: s.time,
        location: s.location,
        sessionType: s.sessionType,
        statusText: s.statusText,
        note: s.notes || s.note,
      }))
    ),
    orden: (i + 1) * 10,
  });
});

galleryData
  .filter((g) => g.url)
  .forEach((g, i) => {
    docs.push({
      _id: `galeria-${slug(g.title)}`,
      _type: 'galeriaItem',
      title: g.title,
      desc: g.desc,
      alt: g.desc || g.title,
      category: g.category,
      wide: !!g.wide,
      consentimiento: false,
      imagen: asset(g.url),
      orden: (i + 1) * 10,
    });
  });

testimonialsData.forEach((t, i) => {
  docs.push({
    _id: `testimonio-${slug(t.name)}`,
    _type: 'testimonio',
    name: t.name,
    role: t.role,
    quote: t.quote,
    initials: t.initials,
    color: t.color,
    consentimiento: false,
    orden: (i + 1) * 10,
  });
});

[{ ...mainSponsor, tier: 'principal' }, ...secondarySponsors.map((s) => ({ ...s, tier: 'secundario' }))].forEach(
  (s, i) => {
    docs.push({
      _id: `patrocinador-${s.id}`,
      _type: 'patrocinador',
      name: s.name,
      tier: s.tier,
      // En los datos locales varios url son "#", que no es una URL válida.
      url: s.url && s.url !== '#' ? s.url : undefined,
      logo: asset(s.logo),
      orden: (i + 1) * 10,
    });
  }
);

sponsorProducts.forEach((pr, i) => {
  docs.push({
    _id: `producto-${pr.id}`,
    _type: 'productoPatrocinador',
    name: pr.name,
    description: pr.description,
    // OJO: los precios originales están en euros y las fotos dan 404.
    // Se siembran tal cual para no inventar datos; el cliente los corrige.
    price: pr.price,
    icon: pr.icon,
    color: pr.color,
    image: asset(pr.image),
    orden: (i + 1) * 10,
  });
});

// Sanity rechaza claves con valor undefined.
const clean = (o) => JSON.parse(JSON.stringify(o));
const out = docs.map((d) => JSON.stringify(clean(d))).join('\n');
const dest = resolve(root, 'scripts/seed.ndjson');
writeFileSync(dest, out + '\n', 'utf8');

const byType = docs.reduce((a, d) => ({ ...a, [d._type]: (a[d._type] || 0) + 1 }), {});
console.log(`${docs.length} documentos -> ${dest}`);
console.table(byType);
if (muertas.length) {
  console.log(`
${muertas.length} imágenes omitidas por no responder:`);
  muertas.forEach((m) => console.log('  ' + m));
}
