import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'productoPatrocinador',
  title: 'Producto recomendado',
  type: 'document',
  description: 'Artículos del patrocinador que el club recomienda a sus deportistas.',
  fields: [
    defineField({ name: 'name', title: 'Nombre', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'description', title: 'Descripción corta', type: 'string' }),
    defineField({
      name: 'price',
      title: 'Precio',
      type: 'string',
      description: 'Escríbelo con el signo. Ej: $289.000',
    }),
    defineField({ name: 'image', title: 'Foto del producto', type: 'image', options: { hotspot: true } }),
    defineField({
      name: 'icon',
      title: 'Icono Font Awesome',
      type: 'string',
      description: 'Se usa si no hay foto. Ej: fa-shoe-prints, fa-circle, fa-helmet-safety',
    }),
    defineField({
      name: 'color',
      title: 'Color del distintivo',
      type: 'string',
      options: { list: ['orange', 'blue', 'green', 'purple', 'red', 'yellow'] },
      initialValue: 'green',
    }),
    defineField({
      name: 'url',
      title: 'Enlace a la tienda',
      type: 'url',
      description: 'Opcional. Lleva al producto en la web del patrocinador.',
    }),
    defineField({ name: 'orden', title: 'Orden', type: 'number', initialValue: 100 }),
  ],
  preview: { select: { title: 'name', subtitle: 'price', media: 'image' } },
});
