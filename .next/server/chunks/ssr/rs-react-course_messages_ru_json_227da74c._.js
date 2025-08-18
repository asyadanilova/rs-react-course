module.exports = {
  '[project]/rs-react-course/messages/ru.json (json, async loader)': (
    __turbopack_context__
  ) => {
    __turbopack_context__.v((parentImport) => {
      return Promise.all(
        [
          'server/chunks/ssr/rs-react-course_messages_ru_json_75251f75._.js',
        ].map((chunk) => __turbopack_context__.l(chunk))
      ).then(() => {
        return parentImport(
          '[project]/rs-react-course/messages/ru.json (json)'
        );
      });
    });
  },
};
