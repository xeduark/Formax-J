import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'programa',
  title: 'Programa',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Nombre del programa',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Identificador',
      type: 'slug',
      options: { source: 'title' },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'level',
      title: 'Nivel',
      type: 'string',
      options: {
        list: ['Nivel Iniciación', 'Formación', 'Especialización', 'Alto Rendimiento'],
      },
    }),
    defineField({ name: 'age', title: 'Edades', type: 'string', description: 'Ej: 4 - 8 años' }),
    defineField({ name: 'freq', title: 'Frecuencia', type: 'string', description: 'Ej: 3 veces/semana' }),
    defineField({
      name: 'desc',
      title: 'Objetivo del programa',
      type: 'text',
      rows: 3,
      description: 'Párrafo que aparece bajo el título ¿Qué aprenderás?',
    }),
    defineField({
      name: 'details',
      title: 'Puntos del programa',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Lista con chulo verde. Puede quedar vacía.',
    }),
    defineField({ name: 'price', title: 'Precio mensual', type: 'string', description: 'Ej: $60.000' }),
    defineField({ name: 'methodologyFocus', title: 'Enfoque metodológico', type: 'string' }),
    defineField({
      name: 'icon',
      title: 'Icono (Font Awesome)',
      type: 'string',
      description: 'Ej: fa-child, fa-running, fa-road, fa-bolt',
      initialValue: 'fa-running',
    }),
    defineField({
      name: 'gradient',
      title: 'Degradado de la tarjeta',
      type: 'string',
      options: {
        list: [
          { title: 'Verde', value: 'from-green-400 to-green-600' },
          { title: 'Dorado', value: 'from-yellow-400 to-green-500' },
          { title: 'Azul', value: 'from-blue-400 to-purple-600' },
          { title: 'Rojo', value: 'from-red-400 to-orange-500' },
        ],
      },
      initialValue: 'from-green-400 to-green-600',
    }),
    defineField({ name: 'popular', title: 'Destacado', type: 'boolean', initialValue: false }),
    defineField({
      name: 'wompiLink',
      title: 'Link de pago (Wompi)',
      type: 'url',
      description: 'Opcional. Pégalo desde el panel de Wompi para cobrar este programa en línea.',
    }),
    defineField({ name: 'orden', title: 'Orden', type: 'number', initialValue: 100 }),
  ],
  preview: { select: { title: 'title', subtitle: 'price' } },
});
