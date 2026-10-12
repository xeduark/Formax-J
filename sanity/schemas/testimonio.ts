import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'testimonio',
  title: 'Testimonio',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Nombre', type: 'string', validation: (r) => r.required() }),
    defineField({
      name: 'role',
      title: 'Relación con el club',
      type: 'string',
      description: 'Ej: Madre de deportista, Patinador categoría menores',
    }),
    defineField({ name: 'quote', title: 'Testimonio', type: 'text', rows: 4, validation: (r) => r.required() }),
    defineField({
      name: 'initials',
      title: 'Iniciales',
      type: 'string',
      description: 'Dos letras para el avatar. Ej: ML',
      validation: (r) => r.max(3),
    }),
    defineField({
      name: 'color',
      title: 'Color del avatar',
      type: 'string',
      options: {
        list: [
          { title: 'Verde', value: 'from-green-400 to-green-600' },
          { title: 'Azul', value: 'from-blue-400 to-blue-600' },
          { title: 'Dorado', value: 'from-yellow-400 to-yellow-600' },
        ],
      },
      initialValue: 'from-green-400 to-green-600',
    }),
    defineField({
      name: 'consentimiento',
      title: 'Autorización de publicación firmada',
      type: 'boolean',
      initialValue: false,
      description: 'Si el testimonio es de un menor, la firma el acudiente.',
    }),
    defineField({ name: 'orden', title: 'Orden', type: 'number', initialValue: 100 }),
  ],
  preview: { select: { title: 'name', subtitle: 'role', media: 'avatar' } },
});
