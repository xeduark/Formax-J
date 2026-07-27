import type { AboutData } from '../types';

export const aboutData: AboutData = {
  badge: 'Sobre Nosotros',
  title: 'Más que un club, <span class="gradient-text">una familia veloz</span>',
  description: 'En FORMAX-J formamos patinadores de velocidad de élite. Nuestra filosofía combina técnica, resistencia y mentalidad ganadora para llevar a cada patinador al siguiente nivel.',
  images: [
    'https://res.cloudinary.com/cx3z2ry1/image/upload/v1785184161/ni%C3%B1apatines_seylrj.jpg',
    'https://res.cloudinary.com/cx3z2ry1/image/upload/v1785184161/ni%C3%B1apatinesnegros_pp3cia.jpg',
    'https://res.cloudinary.com/cx3z2ry1/image/upload/v1785184160/patinespronegros_ubo62r.jpg',
    'https://res.cloudinary.com/cx3z2ry1/image/upload/v1783628803/hero_n9nnbb.jpg'
  ],
  features: [
    { icon: 'fa-tachometer-alt', title: 'Velocidad Pura', description: 'Especialistas en patinaje de velocidad en línea. Nuestros patinadores alcanzan velocidades increíbles con técnica perfecta y equipamiento de primer nivel.', color: 'green' },
    { icon: 'fa-road', title: 'Entrenamiento en Pista y Ruta', description: 'Combinamos entrenamiento en pista ovalada con sesiones de ruta para desarrollar resistencia, técnica de viraje y velocidad en todos los terrenos.', color: 'yellow' },
    { icon: 'fa-dumbbell', title: 'Preparación Física Integral', description: 'Programa de acondicionamiento físico especializado: fuerza, potencia, flexibilidad y resistencia cardiovascular para el máximo rendimiento.', color: 'blue' },
    { icon: 'fa-brain', title: 'Mentalidad Ganadora', description: 'Trabajamos la psicología deportiva, estrategia de carrera y control del estrés para que cada patinador rinda al máximo en competición.', color: 'purple' }
  ]
};