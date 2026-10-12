import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'inscripcion',
  title: 'Página de inscripción',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Titular', type: 'string' }),
    defineField({ name: 'subtitle', title: 'Subtítulo', type: 'text', rows: 2 }),
    defineField({ name: 'clubName', title: 'Nombre del club', type: 'string' }),
    defineField({ name: 'price', title: 'Valor de matrícula', type: 'string', description: 'Ej: $40.000' }),
    defineField({ name: 'pricePeriod', title: 'Aclaración del valor', type: 'string' }),
    defineField({
      name: 'whatsappContact',
      title: 'WhatsApp de inscripciones',
      type: 'string',
      description: 'Con indicativo de país y sin signos. Ej: 573122461761',
    }),
    defineField({ name: 'includes', title: 'Qué incluye', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'requirements', title: 'Requisitos', type: 'array', of: [{ type: 'string' }] }),
    defineField({
      name: 'faq',
      title: 'Preguntas frecuentes',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'question', title: 'Pregunta', type: 'string' },
            { name: 'answer', title: 'Respuesta', type: 'text', rows: 4 },
          ],
          preview: { select: { title: 'question' } },
        },
      ],
    }),
  ],
  preview: { prepare: () => ({ title: 'Página de inscripción' }) },
});
