const CHUNK_PUBLIC_PATH = 'server/pages/_document.js';
const runtime = require('../chunks/ssr/[turbopack]_runtime.js');
runtime.loadChunk('server/chunks/ssr/423d0_2c72992c._.js');
runtime.loadChunk('server/chunks/ssr/[root-of-the-server]__c75c51b7._.js');
runtime.getOrInstantiateRuntimeModule(
  '[project]/rs-react-course/node_modules/next/document.js [ssr] (ecmascript)',
  CHUNK_PUBLIC_PATH
);
module.exports = runtime.getOrInstantiateRuntimeModule(
  '[project]/rs-react-course/node_modules/next/document.js [ssr] (ecmascript)',
  CHUNK_PUBLIC_PATH
).exports;
