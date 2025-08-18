const CHUNK_PUBLIC_PATH = 'server/pages/_app.js';
const runtime = require('../chunks/ssr/[turbopack]_runtime.js');
runtime.loadChunk('server/chunks/ssr/[root-of-the-server]__483f7c8d._.js');
runtime.getOrInstantiateRuntimeModule(
  '[project]/rs-react-course/node_modules/next/app.js [ssr] (ecmascript)',
  CHUNK_PUBLIC_PATH
);
module.exports = runtime.getOrInstantiateRuntimeModule(
  '[project]/rs-react-course/node_modules/next/app.js [ssr] (ecmascript)',
  CHUNK_PUBLIC_PATH
).exports;
