import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'patrocinador',
  title: 'Patrocinador',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Nombre', type: 'string', validation: (r) => r.required() }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      description: 'Preferible PNG o SVG con fondo transparente.',
    }),
    defineField({
      name: 'tier',
      title: 'Nivel',
      type: 'string',
      options: {
        list: [
          { title: 'Principal', value: 'principal' },
          { title: 'Secundario', value: 'secundario' },
        ],
      },
      initialValue: 'secundario',
    }),
    defineField({ name: 'url', title: 'Sitio web', type: 'url' }),
    defineField({ name: 'orden', title: 'Orden', type: 'number', initialValue: 100 }),
  ],
  preview: { select: { title: 'name', subtitle: 'tier', media: 'logo' } },
});
