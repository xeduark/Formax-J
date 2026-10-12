import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'contacto',
  title: 'Datos de contacto',
  type: 'document',
  fields: [
    defineField({
      name: 'address',
      title: 'Dirección',
      type: 'text',
      rows: 3,
      description: 'Admite la etiqueta br para saltos de línea.',
    }),
    defineField({ name: 'phone', title: 'Teléfono', type: 'string' }),
    defineField({ name: 'email', title: 'Correo', type: 'string' }),
    defineField({
      name: 'hours',
      title: 'Horario de atención',
      type: 'text',
      rows: 2,
      description: 'Admite la etiqueta br para saltos de línea.',
    }),
    defineField({
      name: 'social',
      title: 'Iconos de redes',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Clases de Font Awesome. Ej: fa-instagram, fa-facebook-f, fa-youtube, fa-tiktok',
    }),
    defineField({
      name: 'programs',
      title: 'Opciones del desplegable Programa de interés',
      type: 'array',
      of: [{ type: 'string' }],
    }),
  ],
  preview: { prepare: () => ({ title: 'Datos de contacto' }) },
});
