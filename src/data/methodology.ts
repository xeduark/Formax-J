// src/data/methodology.ts
export const methodologyData = {
  quote: {
    text: "La Educación Física es una práctica pedagógica centrada en la conducta motriz, entendiendo el movimiento como una forma de comunicación, aprendizaje y relación con el entorno.",
    author: "Pierre Parlebas",
    role: "Sociólogo e investigador de la Educación Física"
  },
  omsBenefits: [
    { icon: "fa-brain", title: "Desarrollo Cognitivo", desc: "Mejora la concentración, memoria y capacidad de resolución de problemas." },
    { icon: "fa-heart", title: "Salud Mental", desc: "Reduce el estrés, ansiedad y fortalece la autoestima y resiliencia." },
    { icon: "fa-bone", title: "Huesos y Músculos", desc: "Fortalece el sistema osteomuscular y previene lesiones futuras." },
    { icon: "fa-shield-virus", title: "Prevención", desc: "Disminuye riesgo de enfermedades cardiovasculares y metabólicas." },
    { icon: "fa-seedling", title: "Hábitos de Vida", desc: "Inculca disciplina, constancia y amor por la actividad física." }
  ],
  structure: {
    sessionsYear: 140,
    sessionsWeek: 3,
    weeksYear: "46-47",
    mesocycles: [
      { num: 1, name: "Adaptación y fundamentación", focus: "Evaluación inicial, adaptación a cargas, fundamentos técnicos y hábitos de entrenamiento." },
      { num: 2, name: "Desarrollo", focus: "Progresión de capacidades físicas, perfeccionamiento técnico y táctico." },
      { num: 3, name: "Consolidación", focus: "Integración de habilidades en situaciones reales de carrera y mayor exigencia." },
      { num: 4, name: "Aplicación y cierre", focus: "Evaluación final, consolidación del proceso y preparación para el descanso." }
    ]
  },
  levels: [
    { name: "Escuela Básica", locations: "El Hatillo / Barbosa", focus: "Iniciación y fundamentos motrices", color: "green" },
    { name: "Semillero", locations: "El Hatillo / Barbosa", focus: "Desarrollo de habilidades específicas", color: "blue" },
    { name: "Especialización", locations: "El Hatillo", focus: "Técnica avanzada y táctica de competición", color: "yellow" },
    { name: "Avanzada", locations: "El Hatillo / Barbosa", focus: "Alto rendimiento y preparación élite", color: "purple" }
  ]
};