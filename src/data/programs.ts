// src/data/programs.ts
export const programsData = [
  {
    id: 'iniciacion',
    title: 'Escuela Básica',
    level: 'Nivel Iniciación',
    age: '4 - 8 años',
    freq: '2 veces/semana',
    desc: 'Primer contacto organizado con el patinaje de velocidad. Desarrollo de conductas motrices básicas, equilibrio dinámico y fundamentos técnicos.',
    price: '$60.000',
    icon: 'fa-child',
    gradient: 'from-green-400 to-green-600',
    popular: true,
    methodologyFocus: 'Adaptación y fundamentación',
    details: [
      'Coordinación y equilibrio sobre ruedas',
      'Técnica básica de frenado y giro',
      'Hábitos de entrenamiento y disciplina',
      'Juegos motrices aplicados al patinaje'
    ]
  },
  {
    id: 'competicion',
    title: 'Escuela Avanzada',
    level: 'Nivel Iniciación',
    age: '8 - 18 años',
    freq: '4 veces/semana',
    desc: 'Programa competitivo con entrenamiento en pista y ruta. Perfeccionamiento técnico, táctica de carrera y preparación física específica.',
    price: '$70.000',
    icon: 'fa-running',
    gradient: 'from-yellow-400 to-green-500',
    popular: true,
    methodologyFocus: 'Desarrollo y consolidación, aplicación y cierre',
    details: [
      'Técnica de patinaje en curva y recta',
      'Salidas explosivas y pacing',
      'Preparación física integral',
      'Participación en campeonatos locales/regionales'
    ]
  },
  {
    id: 'semillero',
    title: 'Semillero Carreras',
    level: 'Formación',
    age: '12+ años',
    freq: '3 veces/semana',
    desc: 'Entrenamiento de resistencia y técnica avanzada. Preparación para pruebas de fondo, maratones y competencias de ruta.',
    price: '$85.000',
    icon: 'fa-road',
    gradient: 'from-blue-400 to-purple-600',
    popular: false,
    methodologyFocus: 'Adaptación y fundamentación, desarrollo y consolidación',
    details: [
      'Técnica de resistencia y cadencia',
      'Estrategias de carrera y pacing',
      'Preparación física específica para fondo',
      'Participación en maratones y pruebas de ruta'
    ]
  },
   {
    id: 'semilleroID',
    title: 'Semillero Inline Downhill',
    level: 'Formación',
    age: '12+ años',
    freq: '3 veces/semana',
    desc: 'Entrenamiento de resistencia y técnica avanzada en descenso. Preparación para pruebas de fondo, maratones y competencias de ruta.',
    price: '$90.000',
    icon: 'fa-mountain',
    gradient: 'from-blue-400 to-purple-600',
    popular: false,
    methodologyFocus: 'Aplicación y Cierre, Salud y Bienestar',
    details: [
      'Técnica de descenso y control de velocidad',
      'Estrategias de carrera y pacing',
      'Preparación física específica para descenso',
      'Participación en maratones y pruebas de ruta'
    ]
  },
  {
    id: 'velocidad',
    title: 'Velocidad',
    level: 'Especialización',
    age: '10 - 18 años',
    freq: '4 veces/semana',
    desc: 'Perfeccionar la técnica de salida, recta y curva en las diferentes manifestaciones de velocidad. Preparación para pruebas de sprint y velocidad pura.',
    price: '$100.000',
    icon: 'fa-bolt',
    gradient: 'from-red-400 to-orange-500',
    popular: false,
    methodologyFocus: 'Desarrollo de Potencia',
    details: [
      'Técnica de salida y aceleración',
      'Técnica de curva y recta',
      'Entrenamiento de fuerza y potencia',
      'Participación en campeonatos de velocidad'
    ]
  },
  {
    id: 'fondo',
    title: 'Fondo',
    level: 'Especialización',
    age: '10 - 18 años',
    freq: '4 veces/semana',
    desc: 'Preparación para pruebas de fondo y resistencia. Desarrollo de la capacidad aeróbica, técnica de patinaje eficiente y estrategias de carrera.',
    price: '$100.000',
    icon: 'fa-flag-checkered',
    gradient: 'from-indigo-400 to-blue-600',
    popular: false,
    methodologyFocus: 'Desarrollo de Resistencia',
    details: [
      'Técnica de patinaje eficiente y economía de movimiento',
      'Desarrollo de la capacidad aeróbica y resistencia',
      'Estrategias de carrera y pacing',
      'Participación en pruebas de fondo y maratones'
    ]
  },
  {
    id: 'inlineDownhill',
    title: 'Inline Downhill',
    level: 'Especialización',
    age: '10 - 18 años',
    freq: '4 veces/semana',
    desc: 'Preparación para pruebas de descenso y velocidad en pendientes. Desarrollo de la técnica de control, frenado y seguridad en descensos.',
    price: '$100.000',
    icon: 'fas fa-mountain',
    gradient: 'from-orange-400 to-red-500',
    popular: false,
    methodologyFocus: 'Salud y Bienestar',
    details: [
      'Técnica de descenso y control de velocidad',
      'Técnica de frenado avanzada y seguridad en pendientes',
      'Preparación física específica para descenso y resistencia',
      'Participación en pruebas de descenso y competencias de velocidad en pendientes'
    ]
  },
  {
    id: 'categoriaM',
    title: 'Categoría Menores',
    level: 'Alto Rendimiento',
    age: '+15 años',
    freq: '6 veces/semana',
    desc: 'Participar en competiciones del calendario de la liga de patinaje de antioquia y la federación colombiana de patinaje. Preparación para pruebas de alto rendimiento y competencias nacionales e internacionales.',
    price: '$200.000',
    icon: 'fa-trophy',
    gradient: 'from-yellow-400 to-red-600',
    popular: false,
    methodologyFocus: 'Adaptación y fundamentación',
    details: [
      'Técnica de descenso y control de velocidad',
      'Técnica de frenado avanzada y seguridad en pendientes',
      'Preparación física específica para descenso y resistencia',
      'Participación en pruebas de descenso y competencias de velocidad en pendientes'
    ]
  },
  {
    id: 'categoriaT',
    title: 'Categoría Transición',
    level: 'Alto Rendimiento',
    age: '+15 años',
    freq: '6 veces/semana',
    desc: 'Participar en competiciones del calendario de la liga de patinaje de antioquia y la federación colombiana de patinaje. Preparación para pruebas de alto rendimiento y competencias nacionales e internacionales.',
    price: '$200.000',
    icon: 'fa-trophy',
    gradient: 'from-yellow-400 to-red-600',
    popular: false,
    methodologyFocus: 'Desarrollo',
    details: [
      'Técnica de descenso y control de velocidad',
      'Técnica de frenado avanzada y seguridad en pendientes',
      'Preparación física específica para descenso y resistencia',
      'Participación en pruebas de descenso y competencias de velocidad en pendientes'
    ]
  },
  {
    id: 'categoriaMY',
    title: 'Categoría Mayores',
    level: 'Alto Rendimiento',
    age: '+15 años',
    freq: '6 veces/semana',
    desc: 'Participar en competiciones del calendario de la liga de patinaje de antioquia y la federación colombiana de patinaje. Preparación para pruebas de alto rendimiento y competencias nacionales e internacionales.',
    price: '$200.000',
    icon: 'fa-trophy',
    gradient: 'from-yellow-400 to-red-600',
    popular: false,
      methodologyFocus: 'Consolidación',
      details: [
        'Técnica de descenso y control de velocidad',
        'Técnica de frenado avanzada y seguridad en pendientes',
        'Preparación física específica para descenso y resistencia',
        'Participación en pruebas de descenso y competencias de velocidad en pendientes'
      ]
    },
    {
    id: 'categoriaID',
    title: 'Categoría Inline Downhill',
    level: 'Alto Rendimiento',
    age: '+15 años',
    freq: '6 veces/semana',
    desc: 'Participar en competiciones del calendario nacional e internacional de descenso. Preparación para pruebas de alto rendimiento y competencias nacionales e internacionales.',
    price: '$200.000',
    icon: 'fa-trophy',
    gradient: 'from-yellow-400 to-red-600',
    popular: false,
      methodologyFocus: 'Aplicación y Cierre',
      details: [
        'Técnica de descenso y control de velocidad',
        'Técnica de frenado avanzada y seguridad en pendientes',
        'Preparación física específica para descenso y resistencia',
        'Participación en pruebas de descenso y competencias de velocidad en pendientes'
      ]
    }
];