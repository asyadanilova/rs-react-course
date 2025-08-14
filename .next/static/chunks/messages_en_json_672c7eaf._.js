(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([
  typeof document === 'object' ? document.currentScript : undefined,
  {
    '[project]/messages/en.json (json)': (__turbopack_context__) => {
      __turbopack_context__.v(
        JSON.parse('{"home":"Home","about":"About","search":"Search"}')
      );
    },
  },
]);
