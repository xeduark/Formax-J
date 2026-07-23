import type { AboutData } from '../types';

export const aboutData: AboutData = {
  badge: 'Sobre Nosotros',
  title: 'Más que un club, <span class="gradient-text">una familia veloz</span>',
  description: 'En FORMAX-J formamos patinadores de velocidad de élite. Nuestra filosofía combina técnica, resistencia y mentalidad ganadora para llevar a cada patinador al siguiente nivel.',
  images: [
    'https://image.qwenlm.ai/public_source/7601c721-671c-41e0-bccd-c0351aa1ba68/61195d2a2-8f0e-4b8d-a833-40d846028b49.png',
    'https://image.qwenlm.ai/public_source/7601c721-671c-41e0-bccd-c0351aa1ba68/1b916ae81-4df4-48db-921b-bec578378fc5.png',
    'https://image.qwenlm.ai/public_source/7601c721-671c-41e0-bccd-c0351aa1ba68/e12e04750-c48f-4a99-a152-408a67b67f15.png',
    'https://res.cloudinary.com/cx3z2ry1/image/upload/v1783628803/hero_n9nnbb.jpg'
  ],
  features: [
    { icon: 'fa-tachometer-alt', title: 'Velocidad Pura', description: 'Especialistas en patinaje de velocidad en línea. Nuestros patinadores alcanzan velocidades increíbles con técnica perfecta y equipamiento de primer nivel.', color: 'green' },
    { icon: 'fa-road', title: 'Entrenamiento en Pista y Ruta', description: 'Combinamos entrenamiento en pista ovalada con sesiones de ruta para desarrollar resistencia, técnica de viraje y velocidad en todos los terrenos.', color: 'yellow' },
    { icon: 'fa-dumbbell', title: 'Preparación Física Integral', description: 'Programa de acondicionamiento físico especializado: fuerza, potencia, flexibilidad y resistencia cardiovascular para el máximo rendimiento.', color: 'blue' },
    { icon: 'fa-brain', title: 'Mentalidad Ganadora', description: 'Trabajamos la psicología deportiva, estrategia de carrera y control del estrés para que cada patinador rinda al máximo en competición.', color: 'purple' }
  ]
};