module.exports = {
  '[project]/rs-react-course/messages/en.json (json, async loader)': (
    __turbopack_context__
  ) => {
    __turbopack_context__.v((parentImport) => {
      return Promise.all(
        [
          'server/chunks/ssr/rs-react-course_messages_en_json_1156fbec._.js',
        ].map((chunk) => __turbopack_context__.l(chunk))
      ).then(() => {
        return parentImport(
          '[project]/rs-react-course/messages/en.json (json)'
        );
      });
    });
  },
};
