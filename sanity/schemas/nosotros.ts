import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'nosotros',
  title: 'Sección Nosotros',
  type: 'document',
  fields: [
    defineField({ name: 'badge', title: 'Etiqueta', type: 'string' }),
    defineField({
      name: 'title',
      title: 'Titular',
      type: 'string',
      description: 'Admite HTML. Para resaltar una palabra en degradado, envuélvela en una etiqueta span con la clase gradient-text.',
    }),
    defineField({ name: 'description', title: 'Párrafo', type: 'text', rows: 3 }),
    defineField({
      name: 'images',
      title: 'Imágenes del mosaico',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      description: 'Cuatro imágenes funcionan mejor con el diseño actual.',
    }),
    defineField({
      name: 'features',
      title: 'Pilares',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'icon', title: 'Icono Font Awesome', type: 'string' },
            { name: 'title', title: 'Título', type: 'string' },
            { name: 'description', title: 'Descripción', type: 'text', rows: 3 },
            {
              name: 'color',
              title: 'Color',
              type: 'string',
              options: { list: ['green', 'yellow', 'blue', 'purple'] },
            },
          ],
          preview: { select: { title: 'title', subtitle: 'description' } },
        },
      ],
    }),
  ],
  preview: { prepare: () => ({ title: 'Sección Nosotros' }) },
});
