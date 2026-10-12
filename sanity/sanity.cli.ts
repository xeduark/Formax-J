import { defineCliConfig } from 'sanity/cli';

export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_STUDIO_PROJECT_ID || 'p5bihq2n',
    dataset: process.env.SANITY_STUDIO_DATASET || 'production',
  },
  deployment: {
    appId: 's2x2u1io3ecc3qlhq3c7yxyi',
  },
  // El Studio se publica en https://formax.sanity.studio con `npx sanity deploy`.
  studioHost: 'formax',
});
