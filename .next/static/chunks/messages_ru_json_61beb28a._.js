(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([
  typeof document === 'object' ? document.currentScript : undefined,
  {
    '[project]/messages/ru.json (json)': (__turbopack_context__) => {
      __turbopack_context__.v(
        JSON.parse('{"home":"Главная","about":"Обо мне","search":"Поиск"}')
      );
    },
  },
]);
