// src/data/schedule.ts
import type { ScheduleData } from '../types';

export const scheduleData: ScheduleData & {
  registration: { price: string; includes: string[] };
  monthlyPlans: { name: string; price: string; days: string; times: string[] }[];
} = {
  headers: ['Horario', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
  rows: [
    {
      time: 'Mañana',
      icon: 'fa-sun',
      color: 'text-green-600 dark:text-green-400',
      data: [
        '—',
        'Avanzada<br><span class="text-xs text-gray-400">7:00 AM</span><br>Básica<br><span class="text-xs text-gray-400">9:00 AM</span>',
        '—',
        'Avanzada<br><span class="text-xs text-gray-400">7:00 AM</span><br>Básica<br><span class="text-xs text-gray-400">9:00 AM</span>',
        '—',
        'Avanzada<br><span class="text-xs text-gray-400">7:00 AM</span>'
      ]
    },
    {
      time: 'Tarde',
      icon: 'fa-cloud-sun',
      color: 'text-yellow-600 dark:text-yellow-400',
      data: [
        '—',
        'Básica<br><span class="text-xs text-gray-400">3:30 PM</span>',
        '—',
        'Básica<br><span class="text-xs text-gray-400">3:30 PM</span>',
        '—',
        'Maratón & Ruta<br><span class="text-xs text-gray-400">Entrenamiento en calle</span>'
      ]
    }
  ],
  // ✅ Datos estructurados para la nueva UI
  registration: {
    price: '$40.000',
    includes: [
      'Carné de afiliación oficial',
      'Camiseta técnica FORMAX-J',
      'Acceso a entrenamientos grupales',
      'Seguro deportivo básico'
    ]
  },
  monthlyPlans: [
    { name: '🟢 Escuela Básica', price: '$60.000/mes', days: 'Mar-Jue', times: ['9:00 AM', '3:30 PM'] },
    { name: '🔵 Escuela Avanzada', price: '$70.000/mes', days: 'Mar-Jue-Sáb', times: ['7:00 AM', '3:30 PM'] }
  ]
};