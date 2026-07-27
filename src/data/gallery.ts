import type { GalleryItem } from '../types';

export const galleryData: GalleryItem[] = [
  { url: 'https://res.cloudinary.com/cx3z2ry1/image/upload/v1783628803/hero_n9nnbb.jpg', title: 'Sprint Final', desc: 'Campeonato Nacional 2025', category: 'competition' },
  { url: 'https://res.cloudinary.com/cx3z2ry1/image/upload/v1785184160/profebajando2_ibxtjy.jpg', title: 'Entrenamiento en Pista', desc: 'Preparación para la temporada', category: 'training', wide: true },
  { url: 'https://image.qwenlm.ai/public_source/7601c721-671c-41e0-bccd-c0351aa1ba68/93c45d86f-cb62-4d76-b764-3c3947d17422.png', title: 'Podio Campeonato', desc: 'Oro, Plata y Bronce para FORMAX-J', category: 'competition', wide: true },
  { url: 'https://res.cloudinary.com/cx3z2ry1/image/upload/v1785167033/Logo_FormaxJ_1_rp0h79.png', title: 'Nuestra Identidad', desc: 'Logo oficial FORMAX-J', category: 'events' },
  { type: 'video', title: 'Video Entrenamiento', desc: 'Ver en pantalla completa', category: 'training' },
  { type: 'event', title: 'Gran Premio FORMAX-J', desc: 'Evento anual de velocidad', category: 'events' }
];