// src/data/programs.ts
import type { Program } from '../types';

export const programsData: Program[] = [
  {
    id: 'iniciacion',
    title: 'Escuela Básica',
    age: 'Principiantes',
    freq: '2 veces/semana (Mar-Jue)',
    desc: 'Primer contacto con el patinaje de velocidad. Aprende equilibrio, frenado y técnica básica en pista.',
    price: '$60.000',
    icon: 'fa-child',
    gradient: 'from-green-400 to-green-600',
    popular: true
  },
  {
    id: 'avanzada',
    title: 'Escuela Avanzada',
    age: 'Intermedios y avanzados',
    freq: '3 veces/semana (Mar-Jue-Sáb)',
    desc: 'Entrenamiento en pista y calle. Técnica de viraje, salida sprint y preparación física integral.',
    price: '$70.000',
    icon: 'fa-running',
    gradient: 'from-blue-400 to-blue-600',
    popular: false
  },
  {
    id: 'maraton',
    title: 'Maratón & Ruta',
    age: '12+ años',
    freq: 'Sábados en calle',
    desc: 'Especialización en pruebas de larga distancia. Resistencia, pacing, nutrición y estrategia de carrera.',
    price: '$85.000',
    icon: 'fa-route',
    gradient: 'from-yellow-400 to-green-500',
    popular: false
  },
  {
    id: 'sprint',
    title: 'Sprint & Pista',
    age: '10+ años',
    freq: '4 veces/semana',
    desc: 'Velocidad máxima en pista ovalada. Salidas explosivas, técnica de curva y sprints de 300m a 1500m.',
    price: '$100.000',
    icon: 'fa-bolt',
    gradient: 'from-red-400 to-orange-500',
    popular: false
  },
  {
    id: 'elite',
    title: 'Élite',
    age: '14+ años',
    freq: '6 veces/semana',
    desc: 'Alto rendimiento. Entrenamiento individualizado, preparación física avanzada y campeonatos internacionales.',
    price: '$180.000',
    icon: 'fa-crown',
    gradient: 'from-indigo-400 to-blue-600',
    popular: false
  },
  {
    id: 'adultos',
    title: 'Adultos & Fitness',
    age: '18+ años',
    freq: '2-3 veces/semana',
    desc: 'Patinaje para adultos que buscan fitness, diversión o competición. Desde principiantes hasta nivel avanzado.',
    price: '$65.000',
    icon: 'fa-user-friends',
    gradient: 'from-orange-400 to-red-500',
    popular: false
  }
];