import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'galeriaItem',
  title: 'Foto de galería',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Título', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'desc', title: 'Descripción', type: 'string' }),
    defineField({
      name: 'imagen',
      title: 'Imagen',
      type: 'image',
      options: { hotspot: true },
      description: 'El recorte se ajusta solo. Usa el punto focal para encuadrar.',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'alt',
      title: 'Texto alternativo',
      type: 'string',
      description: 'Qué se ve en la foto. Lo leen los lectores de pantalla y lo usa Google.',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'category',
      title: 'Categoría',
      type: 'string',
      options: {
        list: [
          { title: 'Competencia', value: 'competition' },
          { title: 'Entrenamiento', value: 'training' },
          { title: 'Eventos', value: 'events' },
        ],
      },
    }),
    defineField({
      name: 'consentimiento',
      title: 'Autorización de uso de imagen firmada',
      type: 'boolean',
      initialValue: false,
      description:
        'Obligatorio si aparecen menores de edad. No publiques la foto sin la autorización del acudiente.',
    }),
    defineField({ name: 'wide', title: 'Ocupa doble ancho', type: 'boolean', initialValue: false }),
    defineField({ name: 'orden', title: 'Orden', type: 'number', initialValue: 100 }),
  ],
  preview: { select: { title: 'title', subtitle: 'desc', media: 'imagen' } },
});
