import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'ajustesSitio',
  title: 'Ajustes generales del sitio',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Nombre del club', type: 'string' }),
    defineField({ name: 'tagline', title: 'Lema', type: 'string' }),
    defineField({
      name: 'description',
      title: 'Descripción para buscadores',
      type: 'text',
      rows: 3,
      description: 'Sale en Google y al compartir el enlace. Máximo 160 caracteres.',
      validation: (r) => r.max(160),
    }),
    defineField({ name: 'email', title: 'Correo', type: 'string' }),
    defineField({ name: 'phone', title: 'Teléfono', type: 'string' }),
    defineField({ name: 'address', title: 'Dirección', type: 'string' }),
    defineField({
      name: 'social',
      title: 'Redes sociales',
      type: 'object',
      fields: [
        { name: 'instagram', title: 'Instagram', type: 'url' },
        { name: 'facebook', title: 'Facebook', type: 'url' },
        { name: 'youtube', title: 'YouTube', type: 'url' },
        { name: 'tiktok', title: 'TikTok', type: 'url' },
      ],
    }),
  ],
  preview: { prepare: () => ({ title: 'Ajustes generales del sitio' }) },
});
