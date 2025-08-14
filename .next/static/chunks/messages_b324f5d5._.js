(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([
  typeof document === 'object' ? document.currentScript : undefined,
  {
    '[project]/messages/en.json (json, async loader)': (
      __turbopack_context__
    ) => {
      __turbopack_context__.v((parentImport) => {
        return Promise.all(
          [
            'static/chunks/messages_en_json_672c7eaf._.js',
            'static/chunks/messages_en_json_e6b3299e._.js',
          ].map((chunk) => __turbopack_context__.l(chunk))
        ).then(() => {
          return parentImport('[project]/messages/en.json (json)');
        });
      });
    },
    '[project]/messages/ru.json (json, async loader)': (
      __turbopack_context__
    ) => {
      __turbopack_context__.v((parentImport) => {
        return Promise.all(
          [
            'static/chunks/messages_ru_json_61beb28a._.js',
            'static/chunks/messages_ru_json_e6b3299e._.js',
          ].map((chunk) => __turbopack_context__.l(chunk))
        ).then(() => {
          return parentImport('[project]/messages/ru.json (json)');
        });
      });
    },
  },
]);
