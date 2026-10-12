// src/data/payments.ts
//
// Datos de recaudo del club. Son el respaldo local: si en Sanity existe el
// documento "ajustesPago", sus valores mandan sobre estos.
//
// ⚠️ REEMPLAZAR los marcados como PENDIENTE antes de publicar.

export interface PaymentConfig {
  /** Número de celular asociado a Nequi. */
  nequi: string;
  /** Número de cuenta Bancolombia. */
  bancolombiaCuenta: string;
  /** "Ahorros" o "Corriente". */
  bancolombiaTipo: string;
  /** Titular de ambas cuentas, tal y como debe verlo quien transfiere. */
  titular: string;
  /** NIT o cédula del titular. */
  nit: string;
  /** WhatsApp al que llegan los comprobantes (con indicativo país). */
  whatsapp: string;
  /**
   * Llave pública de Wompi. Solo habilita el botón de pasarela; la llave
   * pública es segura en el navegador, la privada NUNCA va en el front.
   */
  wompiPublicKey: string;
}

export const paymentConfig: PaymentConfig = {
  nequi: 'PENDIENTE',
  bancolombiaCuenta: 'PENDIENTE',
  bancolombiaTipo: 'Ahorros',
  titular: 'PENDIENTE — razón social del club',
  nit: 'PENDIENTE',
  whatsapp: '573122461761',
  wompiPublicKey: '',
};

/** Pesos colombianos sin decimales. */
export const cop = (value: number) =>
  new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    maximumFractionDigits: 0,
  }).format(value);

/** ¿Hay datos reales cargados, o seguimos con los marcadores? */
export const isPaymentConfigured = (c: PaymentConfig) =>
  !c.nequi.includes('PENDIENTE') && !c.bancolombiaCuenta.includes('PENDIENTE');
