import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'diaHorario',
  title: 'Día de entrenamiento',
  type: 'document',
  fields: [
    defineField({ name: 'dayName', title: 'Día', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'subtitle', title: 'Subtítulo', type: 'string', description: 'Ej: Escuela Básica' }),
    defineField({
      name: 'isSpecial',
      title: 'Destacado (entrenamiento en pista)',
      type: 'boolean',
      initialValue: false,
      description: 'Pinta la tarjeta en dorado, como los sábados en pista.',
    }),
    defineField({
      name: 'slots',
      title: 'Franjas horarias',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'time', title: 'Hora', type: 'string' },
            { name: 'location', title: 'Sede', type: 'string' },
            {
              name: 'sessionType',
              title: 'Tipo de sesión',
              type: 'string',
              options: {
                list: [
                  { title: 'Escuela Básica', value: 'escuela_basica' },
                  { title: 'Pista', value: 'pista' },
                ],
              },
              initialValue: 'escuela_basica',
            },
            {
              name: 'statusText',
              title: 'Estado',
              type: 'string',
              options: { list: ['Confirmado', 'Por confirmar'] },
              initialValue: 'Confirmado',
            },
            { name: 'note', title: 'Nota', type: 'string' },
          ],
          preview: { select: { title: 'time', subtitle: 'location' } },
        },
      ],
    }),
    defineField({ name: 'orden', title: 'Orden', type: 'number', initialValue: 100 }),
  ],
  preview: { select: { title: 'dayName', subtitle: 'subtitle' } },
});
