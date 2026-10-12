// src/data/legal.ts
//
// ⚠️ PLANTILLA. Redactada sobre la Ley 1581 de 2012 y el Decreto 1377 de 2013,
// pero NO sustituye la revisión de un abogado. Antes de publicar hay que
// confirmar los campos marcados como PENDIENTE y validar el documento con
// asesoría jurídica, sobre todo por el tratamiento de datos de menores.

export interface LegalSection {
  id: string;
  title: string;
  /** HTML simple: p, ul, li, strong, a. */
  body: string;
}

export interface LegalDocument {
  title: string;
  subtitle: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
}

/** Datos del responsable. Un solo sitio donde corregirlos. */
export const responsable = {
  nombre: 'Club Deportivo de Patinaje FORMAX-J',
  razonSocial: 'PENDIENTE — razón social inscrita en cámara de comercio',
  nit: 'PENDIENTE — NIT',
  direccion: 'Coliseo El Hatillo, Unidad Deportiva, Barbosa, Antioquia, Colombia',
  email: 'formaxxj@gmail.com',
  telefono: '+57 312 246 1761',
};

const FOOT = `<p class="text-sm"><strong>Responsable del tratamiento:</strong> ${responsable.nombre}
 (${responsable.razonSocial}), NIT ${responsable.nit}. Domicilio: ${responsable.direccion}.
 Correo: <a href="mailto:${responsable.email}">${responsable.email}</a>. Teléfono: ${responsable.telefono}.</p>`;

export const privacyDoc: LegalDocument = {
  title: 'Política de Tratamiento de Datos Personales',
  subtitle: 'Ley 1581 de 2012 y Decreto 1377 de 2013 — República de Colombia',
  updated: '11 de octubre de 2026',
  intro: `En cumplimiento del régimen colombiano de protección de datos personales, el
    ${responsable.nombre} adopta la presente política, que aplica a toda la información personal
    recolectada a través de este sitio web, de los formularios de inscripción, de los canales de
    WhatsApp y de la actividad deportiva del club.`,
  sections: [
    {
      id: 'responsable',
      title: '1. Identificación del responsable',
      body: FOOT + `<p>El club actúa como <strong>responsable del tratamiento</strong> de los datos
        personales de deportistas, acudientes, aspirantes, personal y proveedores.</p>`,
    },
    {
      id: 'datos',
      title: '2. Qué datos recolectamos',
      body: `<ul>
        <li><strong>Identificación:</strong> nombres y apellidos, documento de identidad, fecha de nacimiento.</li>
        <li><strong>Contacto:</strong> teléfono, correo electrónico, dirección, datos del acudiente.</li>
        <li><strong>Deportivos:</strong> categoría, programa, resultados, asistencia, talla de dotación.</li>
        <li><strong>Salud (dato sensible):</strong> certificado de aptitud física, EPS, alergias,
          lesiones y contacto de emergencia.</li>
        <li><strong>Imagen (dato sensible):</strong> fotografías y videos de entrenamientos y competencias.</li>
        <li><strong>Pagos:</strong> referencia de pago, comprobante de transferencia y concepto.
          El club <strong>no</strong> almacena números completos de tarjeta ni claves bancarias.</li>
      </ul>`,
    },
    {
      id: 'finalidades',
      title: '3. Finalidades del tratamiento',
      body: `<ul>
        <li>Gestionar la inscripción, matrícula y permanencia del deportista en el club.</li>
        <li>Planificar entrenamientos, categorías y participación en competencias.</li>
        <li>Inscribir deportistas ante la Liga de Patinaje de Antioquia y la Federación Colombiana de Patinaje.</li>
        <li>Gestionar el cobro de mensualidades, dotación e inscripciones, y su conciliación contable.</li>
        <li>Contactar al acudiente ante una urgencia durante la actividad deportiva.</li>
        <li>Difundir la actividad del club en redes sociales y en este sitio, cuando exista autorización expresa de uso de imagen.</li>
        <li>Cumplir obligaciones legales, contables y tributarias.</li>
      </ul>`,
    },
    {
      id: 'menores',
      title: '4. Datos de niñas, niños y adolescentes',
      body: `<p>La mayor parte de nuestros deportistas son menores de edad. Conforme al artículo 7
        de la Ley 1581 de 2012 y al artículo 12 del Decreto 1377 de 2013:</p>
      <ul>
        <li>El tratamiento de datos de menores es <strong>excepcional</strong> y solo procede cuando
          responde al <strong>interés superior del niño</strong> y respeta sus derechos fundamentales.</li>
        <li>La autorización debe ser otorgada por el <strong>padre, madre o representante legal</strong>,
          nunca por el menor.</li>
        <li>Se escucha la opinión del menor cuando su madurez lo permita.</li>
        <li>La publicación de fotografías o videos en los que aparezca un menor identificable requiere
          <strong>autorización escrita y específica</strong> del acudiente, revocable en cualquier momento.</li>
      </ul>
      <p>Si usted es acudiente y desea revocar una autorización de imagen, escríbanos y retiraremos
        el contenido de nuestros canales propios.</p>`,
    },
    {
      id: 'sensibles',
      title: '5. Datos sensibles',
      body: `<p>Los datos de salud y de imagen son <strong>datos sensibles</strong>. Entregarlos es
        <strong>facultativo</strong>: nadie está obligado a autorizar su tratamiento. Sin embargo,
        el certificado de aptitud física es un requisito de seguridad para la práctica deportiva, y
        sin él el club no puede autorizar el entrenamiento.</p>
      <p>Estos datos se tratan con acceso restringido al personal técnico y administrativo que los necesita.</p>`,
    },
    {
      id: 'derechos',
      title: '6. Derechos del titular',
      body: `<p>Como titular de los datos, o como su representante legal, usted puede:</p>
      <ul>
        <li>Conocer, actualizar y rectificar sus datos personales.</li>
        <li>Solicitar prueba de la autorización otorgada.</li>
        <li>Ser informado sobre el uso que se ha dado a sus datos.</li>
        <li>Presentar quejas ante la <strong>Superintendencia de Industria y Comercio</strong> por
          infracciones a la ley.</li>
        <li>Revocar la autorización y solicitar la supresión de los datos, salvo cuando exista un
          deber legal o contractual de conservarlos.</li>
        <li>Acceder de forma gratuita a sus datos personales.</li>
      </ul>`,
    },
    {
      id: 'procedimiento',
      title: '7. Cómo ejercer sus derechos',
      body: `<p>Envíe su solicitud al correo
        <a href="mailto:${responsable.email}">${responsable.email}</a> o al WhatsApp
        ${responsable.telefono}, indicando nombre, documento, descripción de la solicitud y datos de contacto.</p>
      <ul>
        <li><strong>Consultas:</strong> se responden en un máximo de <strong>diez (10) días hábiles</strong>,
          prorrogables por cinco (5) más.</li>
        <li><strong>Reclamos:</strong> se atienden en un máximo de <strong>quince (15) días hábiles</strong>,
          prorrogables por ocho (8) más. Si el reclamo está incompleto, se solicita la corrección
          dentro de los cinco (5) días siguientes.</li>
      </ul>`,
    },
    {
      id: 'terceros',
      title: '8. Encargados y transferencia internacional',
      body: `<p>Para operar el sitio y la gestión del club usamos proveedores que pueden almacenar
        información en servidores fuera de Colombia, principalmente en Estados Unidos:</p>
      <ul>
        <li><strong>Netlify</strong> — alojamiento del sitio web y registros técnicos de acceso.</li>
        <li><strong>Sanity</strong> — gestor de contenidos donde se administran textos e imágenes del sitio.</li>
        <li><strong>WhatsApp (Meta)</strong> — canal de contacto, inscripciones y envío de comprobantes.</li>
        <li><strong>Cloudinary</strong> — almacenamiento y entrega de imágenes.</li>
        <li><strong>Wompi</strong> — pasarela de pagos, cuando se utilice el pago en línea.</li>
      </ul>
      <p>Al autorizar esta política, usted autoriza la transferencia y transmisión internacional de
        sus datos a estos encargados, con las finalidades aquí descritas.</p>`,
    },
    {
      id: 'seguridad',
      title: '9. Medidas de seguridad',
      body: `<p>El club aplica medidas razonables de seguridad: acceso restringido por usuario y
        contraseña a las herramientas de gestión, conexión cifrada (HTTPS) en el sitio web y
        limitación del acceso a historias médicas al personal autorizado.</p>
      <p>Ninguna medida es infalible. Ante un incidente que comprometa datos personales, el club lo
        reportará a la Superintendencia de Industria y Comercio conforme a la ley.</p>`,
    },
    {
      id: 'vigencia',
      title: '10. Vigencia',
      body: `<p>Esta política rige desde su publicación. Las bases de datos se conservarán mientras
        se mantenga la relación con el deportista y, después, durante los términos legales de
        conservación contable y deportiva.</p>
      <p>Cualquier cambio sustancial será comunicado por los canales habituales del club antes de su
        entrada en vigencia.</p>`,
    },
  ],
};

export const termsDoc: LegalDocument = {
  title: 'Aviso Legal y Condiciones de Uso',
  subtitle: 'Condiciones de uso del sitio, inscripciones y pagos',
  updated: '11 de octubre de 2026',
  intro: `Este aviso regula el acceso y uso del sitio web del ${responsable.nombre}, así como las
    condiciones aplicables a las inscripciones, mensualidades y compras de dotación gestionadas a
    través de él.`,
  sections: [
    {
      id: 'titular',
      title: '1. Titularidad del sitio',
      body: FOOT,
    },
    {
      id: 'objeto',
      title: '2. Objeto y aceptación',
      body: `<p>El sitio tiene finalidad informativa y de contacto: presenta los programas, horarios,
        dotación y canales de inscripción del club. Navegar por él implica aceptar estas condiciones.</p>`,
    },
    {
      id: 'inscripciones',
      title: '3. Inscripciones',
      body: `<p>Los formularios del sitio generan una <strong>solicitud</strong>, no una matrícula.
        La inscripción se perfecciona cuando el club confirma el cupo y recibe la documentación:
        documento de identidad, certificado de aptitud física vigente, afiliación a EPS y autorización
        del acudiente cuando el deportista es menor de edad.</p>
      <p>El club se reserva el derecho de no admitir una solicitud cuando no haya cupo en la categoría
        o falte documentación obligatoria de seguridad.</p>`,
    },
    {
      id: 'pagos',
      title: '4. Pagos',
      body: `<p>Los pagos se realizan por transferencia a Nequi o Bancolombia, o por pasarela de pagos
        cuando esté habilitada. Cada pago genera una <strong>referencia única</strong> que debe
        incluirse en la descripción de la transferencia.</p>
      <ul>
        <li>El pago se considera confirmado solo cuando el club valida el comprobante.</li>
        <li>Conserve siempre el soporte de la transferencia.</li>
        <li>El club no solicita claves bancarias, códigos de un solo uso ni datos completos de tarjeta
          por WhatsApp, teléfono ni correo. <strong>Nunca comparta esa información.</strong></li>
      </ul>`,
    },
    {
      id: 'precios',
      title: '5. Precios y vigencia',
      body: `<p>Los precios publicados están en pesos colombianos (COP) e incluyen los impuestos
        aplicables. El club puede actualizarlos; los cambios no afectan periodos ya pagados y se
        comunican con antelación razonable.</p>
      <p>Las mensualidades corresponden al periodo contratado y no son transferibles entre deportistas.</p>`,
    },
    {
      id: 'devoluciones',
      title: '6. Retracto y devoluciones',
      body: `<p>Para compras de dotación realizadas a distancia aplica el <strong>derecho de retracto</strong>
        del artículo 47 de la Ley 1480 de 2011 (Estatuto del Consumidor), dentro de los cinco (5) días
        hábiles siguientes a la entrega.</p>
      <p>Las prendas personalizadas con nombre y dorsal se confeccionan a medida, por lo que no admiten
        retracto una vez iniciada la producción, salvo defecto de fabricación.</p>
      <p>PENDIENTE: confirmar con asesoría jurídica la política de devolución de mensualidades.</p>`,
    },
    {
      id: 'riesgo',
      title: '7. Riesgo deportivo',
      body: `<p>El patinaje de velocidad y el descenso son actividades de riesgo. El uso de casco y
        protecciones es obligatorio en los entrenamientos. El deportista y su acudiente declaran
        conocer y aceptar los riesgos propios de la práctica, sin perjuicio de las obligaciones de
        seguridad y cuidado que asume el club.</p>`,
    },
    {
      id: 'propiedad',
      title: '8. Propiedad intelectual',
      body: `<p>La marca FORMAX-J, su logotipo, los textos, fotografías y el diseño del sitio son
        propiedad del club o se usan con autorización. No se permite su reproducción con fines
        comerciales sin permiso escrito.</p>
      <p>Las marcas de los patrocinadores pertenecen a sus respectivos titulares.</p>`,
    },
    {
      id: 'enlaces',
      title: '9. Enlaces a terceros',
      body: `<p>El sitio enlaza a servicios de terceros (WhatsApp, redes sociales, patrocinadores,
        pasarela de pagos). El club no controla esos sitios ni responde por sus contenidos o políticas.</p>`,
    },
    {
      id: 'ley',
      title: '10. Ley aplicable',
      body: `<p>Estas condiciones se rigen por la legislación colombiana. Cualquier controversia se
        someterá a los jueces de la República de Colombia.</p>`,
    },
  ],
};
