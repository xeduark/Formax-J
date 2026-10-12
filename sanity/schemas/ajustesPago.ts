import { defineField, defineType } from 'sanity';

/**
 * Documento único con los datos de recaudo del club.
 * Solo debe existir uno: si hay varios, el sitio usa el primero.
 */
export default defineType({
  name: 'ajustesPago',
  title: 'Ajustes de pago',
  type: 'document',
  fields: [
    defineField({
      name: 'nequi',
      title: 'Celular Nequi',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'bancolombiaCuenta',
      title: 'Cuenta Bancolombia',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'bancolombiaTipo',
      title: 'Tipo de cuenta',
      type: 'string',
      options: { list: ['Ahorros', 'Corriente'] },
      initialValue: 'Ahorros',
    }),
    defineField({
      name: 'titular',
      title: 'Titular de las cuentas',
      type: 'string',
      description: 'Tal y como debe verlo quien hace la transferencia.',
      validation: (r) => r.required(),
    }),
    defineField({ name: 'nit', title: 'NIT o cédula del titular', type: 'string' }),
    defineField({
      name: 'whatsapp',
      title: 'WhatsApp para comprobantes',
      type: 'string',
      description: 'Con indicativo de país y sin signos. Ej: 573122461761',
    }),
    defineField({
      name: 'wompiPublicKey',
      title: 'Llave pública de Wompi',
      type: 'string',
      description: 'Opcional. Solo la PÚBLICA, la que empieza por pub_. La privada nunca va aquí.',
    }),
  ],
  preview: { prepare: () => ({ title: 'Ajustes de pago del club' }) },
});
