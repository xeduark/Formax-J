import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'metodologia',
  title: 'Sección Metodología',
  type: 'document',
  fields: [
    defineField({
      name: 'quote',
      title: 'Cita destacada',
      type: 'object',
      fields: [
        { name: 'text', title: 'Texto', type: 'text', rows: 3 },
        { name: 'author', title: 'Autor', type: 'string' },
        { name: 'role', title: 'Cargo', type: 'string' },
      ],
    }),
    defineField({
      name: 'omsBenefits',
      title: 'Beneficios',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'icon', title: 'Icono Font Awesome', type: 'string' },
            { name: 'title', title: 'Título', type: 'string' },
            { name: 'desc', title: 'Descripción', type: 'text', rows: 3 },
          ],
          preview: { select: { title: 'title', subtitle: 'desc' } },
        },
      ],
      description: 'Cinco encajan exactamente en la fila del diseño actual.',
    }),
  ],
  preview: { prepare: () => ({ title: 'Sección Metodología' }) },
});
