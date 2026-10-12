import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes, SINGLETONS } from './schemas';

const singleton = (S: any, type: string, title: string, icon: string) =>
  S.listItem()
    .title(title)
    .id(type)
    .child(S.document().schemaType(type).documentId(type).title(title));

export default defineConfig({
  name: 'formax-j',
  title: 'FORMAX-J — Contenido del sitio',
  projectId: process.env.SANITY_STUDIO_PROJECT_ID || 'p5bihq2n',
  dataset: process.env.SANITY_STUDIO_DATASET || 'production',
  plugins: [
    structureTool({
      // Menú ordenado para el cliente: primero las páginas, luego las listas.
      structure: (S) =>
        S.list()
          .title('Contenido del sitio')
          .items([
            singleton(S, 'hero', 'Portada', ''),
            singleton(S, 'nosotros', 'Nosotros', ''),
            singleton(S, 'metodologia', 'Metodología', ''),
            singleton(S, 'inscripcion', 'Inscripción', ''),
            singleton(S, 'contacto', 'Datos de contacto', ''),
            S.divider(),
            ...S.documentTypeListItems().filter(
              (item: any) => !SINGLETONS.includes(item.getId())
            ),
            S.divider(),
            singleton(S, 'ajustesPago', 'Ajustes de pago', ''),
            singleton(S, 'ajustesSitio', 'Ajustes generales', ''),
          ]),
    }),
  ],
  schema: {
    types: schemaTypes,
    // Los documentos únicos no se pueden duplicar ni crear de nuevo.
    templates: (prev) => prev.filter((t) => !SINGLETONS.includes(t.schemaType as never)),
  },
  document: {
    actions: (prev, { schemaType }) =>
      SINGLETONS.includes(schemaType as never)
        ? prev.filter(({ action }) => action !== 'duplicate' && action !== 'delete')
        : prev,
  },
});
