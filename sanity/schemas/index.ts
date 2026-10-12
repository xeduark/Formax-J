// Colecciones (varios documentos)
import programa from './programa';
import diaHorario from './diaHorario';
import galeriaItem from './galeriaItem';
import testimonio from './testimonio';
import patrocinador from './patrocinador';
import productoPatrocinador from './productoPatrocinador';

// Documentos únicos (uno solo de cada)
import hero from './hero';
import nosotros from './nosotros';
import metodologia from './metodologia';
import contacto from './contacto';
import inscripcion from './inscripcion';
import ajustesSitio from './ajustesSitio';
import ajustesPago from './ajustesPago';

/** Tipos que solo deben existir una vez. El Studio los muestra como ficha única. */
export const SINGLETONS = [
  'hero',
  'nosotros',
  'metodologia',
  'contacto',
  'inscripcion',
  'ajustesSitio',
  'ajustesPago',
] as const;

export const schemaTypes = [
  programa,
  diaHorario,
  galeriaItem,
  testimonio,
  patrocinador,
  productoPatrocinador,
  hero,
  nosotros,
  metodologia,
  contacto,
  inscripcion,
  ajustesSitio,
  ajustesPago,
];
