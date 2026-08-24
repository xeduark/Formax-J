// src/data/schedule.ts
import type { ScheduleData } from '../types/schedule';

export const scheduleData: ScheduleData = {
  badge: 'Horarios Confirmados',
  subtitle: 'Formación integral: 46-47 semanas de temporada',
  note: 'Los sábados 7:00 AM se alterna entre Pista Girardota y Barbosa. Confirmar ubicación semanal en WhatsApp.',
  footerNote: 'Los horarios de martes a viernes corresponden a <strong>Escuela Básica</strong>. Los sábados son entrenamientos en pista y la sede se confirma semanalmente vía WhatsApp.',
  
  days: [
    {
      dayName: 'Martes',
      subtitle: 'Escuela Básica',
      slots: [
        { time: '9:00 AM', location: 'Barbosa', sessionType: 'escuela_basica', statusText: 'Confirmado' },
        { time: '3:30 PM', location: 'Barbosa', sessionType: 'escuela_basica', statusText: 'Confirmado' },
      ],
    },
    {
      dayName: 'Miércoles',
      subtitle: 'Escuela Básica',
      slots: [
        { time: '8:00 AM', location: 'El Hatillo', sessionType: 'escuela_basica', statusText: 'Confirmado' },
        { time: '3:30 PM', location: 'El Hatillo', sessionType: 'escuela_basica', statusText: 'Confirmado' },
      ],
    },
    {
      dayName: 'Jueves',
      subtitle: 'Escuela Básica',
      slots: [
        { time: '9:00 AM', location: 'Barbosa', sessionType: 'escuela_basica', statusText: 'Confirmado' },
        { time: '3:30 PM', location: 'Barbosa', sessionType: 'escuela_basica', statusText: 'Confirmado' },
      ],
    },
    {
      dayName: 'Viernes',
      subtitle: 'Escuela Básica',
      slots: [
        { time: '8:00 AM', location: 'El Hatillo', sessionType: 'escuela_basica', statusText: 'Confirmado' },
        { time: '3:30 PM', location: 'El Hatillo', sessionType: 'escuela_basica', statusText: 'Confirmado' },
      ],
    },
    {
      dayName: 'Sábado',
      subtitle: 'Entrenamiento en Pista',
      isSpecial: true,
      slots: [
        {
          time: '7:00 AM',
          location: 'Girardota',
          sessionType: 'pista',
          statusText: '⚠️ Confirmar sede semanal',
          notes: 'Varía entre Barbosa y Girardota.',
        },
      ],
    },
  ],
};