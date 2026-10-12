import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'hero',
  title: 'Portada (Hero)',
  type: 'document',
  fields: [
    defineField({ name: 'badge', title: 'Etiqueta superior', type: 'string' }),
    defineField({ name: 'title', title: 'Primera línea', type: 'string', description: 'Ej: FORMACIÓN' }),
    defineField({
      name: 'gradientText',
      title: 'Palabra destacada',
      type: 'string',
      description: 'Sale en degradado verde-dorado. Ej: MÁXIMA',
    }),
    defineField({ name: 'textAdd', title: 'Tercera línea', type: 'string', description: 'Ej: A TRAVÉS DEL DEPORTE' }),
    defineField({ name: 'brand', title: 'Marca', type: 'string', description: 'Ej: FORMAX-J' }),
    defineField({ name: 'subtitle', title: 'Párrafo', type: 'text', rows: 3 }),
    defineField({
      name: 'ctaPrimary',
      title: 'Botón principal',
      type: 'object',
      fields: [
        { name: 'text', title: 'Texto', type: 'string' },
        { name: 'href', title: 'Enlace', type: 'string', description: 'Ej: #programas' },
      ],
    }),
    defineField({
      name: 'ctaSecondary',
      title: 'Botón secundario',
      type: 'object',
      fields: [
        { name: 'text', title: 'Texto', type: 'string' },
        { name: 'href', title: 'Enlace', type: 'string' },
      ],
    }),
    defineField({
      name: 'stats',
      title: 'Cifras',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'value', title: 'Número', type: 'string' },
            { name: 'label', title: 'Etiqueta', type: 'string' },
          ],
          preview: { select: { title: 'value', subtitle: 'label' } },
        },
      ],
    }),
    defineField({ name: 'image', title: 'Imagen', type: 'image', options: { hotspot: true } }),
    defineField({
      name: 'badges',
      title: 'Tarjetas flotantes',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'icon', title: 'Icono Font Awesome', type: 'string', description: 'Ej: fa-bolt' },
            { name: 'text', title: 'Título', type: 'string' },
            { name: 'subtext', title: 'Subtítulo', type: 'string' },
          ],
          preview: { select: { title: 'text', subtitle: 'subtext' } },
        },
      ],
    }),
  ],
  preview: { prepare: () => ({ title: 'Portada del sitio' }) },
});
