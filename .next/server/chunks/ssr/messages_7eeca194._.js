module.exports = {
  '[project]/messages/en.json (json, async loader)': (
    __turbopack_context__
  ) => {
    __turbopack_context__.v((parentImport) => {
      return Promise.all(
        ['server/chunks/ssr/messages_en_json_042442e0._.js'].map((chunk) =>
          __turbopack_context__.l(chunk)
        )
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
        ['server/chunks/ssr/messages_ru_json_c23f7a08._.js'].map((chunk) =>
          __turbopack_context__.l(chunk)
        )
      ).then(() => {
        return parentImport('[project]/messages/ru.json (json)');
      });
    });
  },
};
