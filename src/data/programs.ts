// src/data/programs.ts
export const programsData = [
  {
    id: 'iniciacion',
    title: 'Escuela Básica',
    level: 'Nivel Iniciación',
    age: '4 - 8 años',
    freq: '2 veces/semana',
    desc: 'Mejorar el desarrollo motor mediante la coordinación, el equilibrio, y la diversión en patines.',
    price: '$60.000',
    icon: 'fa-child',
    gradient: 'from-green-400 to-green-600',
    popular: true,
    methodologyFocus: 'Adaptación y fundamentación',
    details: []
  },
  {
    id: 'competicion',
    title: 'Escuela Avanzada',
    level: 'Nivel Avanzado',
    age: '8 - 18 años',
    freq: '4 veces/semana',
    desc: 'Aprender las habilidades y destrezas básicas de desplazamiento en patines.',
    price: '$70.000',
    icon: 'fa-running',
    gradient: 'from-yellow-400 to-green-500',
    popular: true,
    methodologyFocus: 'Desarrollo y consolidación, aplicación y cierre',
    details: [
      'Potenciar las capacidades perceptivo-motrices en patines (coordinación y estabilidad).'
    ]
  },
  {
    id: 'semillero',
    title: 'Semillero Carreras',
    level: 'Formación',
    age: '12+ años',
    freq: '3 veces/semana',
    desc: 'Perfeccionar la técnica en las diferentes manifestaciones de velocidad en patines.',
    price: '$85.000',
    icon: 'fa-road',
    gradient: 'from-blue-400 to-purple-600',
    popular: false,
    methodologyFocus: 'Adaptación y fundamentación, desarrollo y consolidación',
    details: [
      'Participar en competiciones del calendario de la liga de patinaje de Antioquia y la Federación Colombiana de Patinaje.'
    ]
  }
];
