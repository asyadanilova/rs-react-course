const CHUNK_PUBLIC_PATH = 'server/pages/_error.js';
const runtime = require('../chunks/ssr/[turbopack]_runtime.js');
runtime.loadChunk('server/chunks/ssr/423d0_2c72992c._.js');
runtime.loadChunk('server/chunks/ssr/[root-of-the-server]__c75c51b7._.js');
runtime.loadChunk('server/chunks/ssr/423d0_next_b86cd524._.js');
runtime.loadChunk('server/chunks/ssr/423d0_d2d82357._.js');
runtime.loadChunk(
  'server/chunks/ssr/[externals]_next_dist_shared_lib_no-fallback-error_external_d7a8835d.js'
);
runtime.getOrInstantiateRuntimeModule(
  '[project]/rs-react-course/node_modules/next/dist/esm/build/templates/pages.js { INNER_PAGE => "[project]/rs-react-course/node_modules/next/error.js [ssr] (ecmascript)", INNER_DOCUMENT => "[project]/rs-react-course/node_modules/next/document.js [ssr] (ecmascript)", INNER_APP => "[project]/rs-react-course/node_modules/next/app.js [ssr] (ecmascript)" } [ssr] (ecmascript)',
  CHUNK_PUBLIC_PATH
);
module.exports = runtime.getOrInstantiateRuntimeModule(
  '[project]/rs-react-course/node_modules/next/dist/esm/build/templates/pages.js { INNER_PAGE => "[project]/rs-react-course/node_modules/next/error.js [ssr] (ecmascript)", INNER_DOCUMENT => "[project]/rs-react-course/node_modules/next/document.js [ssr] (ecmascript)", INNER_APP => "[project]/rs-react-course/node_modules/next/app.js [ssr] (ecmascript)" } [ssr] (ecmascript)',
  CHUNK_PUBLIC_PATH
).exports;
