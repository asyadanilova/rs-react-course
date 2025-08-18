module.exports = {
  '[project]/src/store/selectedItemsSlice.ts [app-rsc] (ecmascript)': (
    __turbopack_context__
  ) => {
    'use strict';

    __turbopack_context__.s({
      default: () => __TURBOPACK__default__export__,
      selectItem: () => selectItem,
      unselectAll: () => unselectAll,
      unselectItem: () => unselectItem,
    });
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ =
      __turbopack_context__.i(
        '[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-rsc] (ecmascript) <locals>'
      );
    const initialState = {
      items: [],
    };
    const selectedItemsSlice = (0,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__[
      'createSlice'
    ])({
      name: 'selectedItems',
      initialState,
      reducers: {
        selectItem(state, action) {
          state.items.push(action.payload);
        },
        unselectItem(state, action) {
          state.items = state.items.filter(
            (item) => item.domains[0] !== action.payload
          );
        },
        unselectAll(state) {
          state.items = [];
        },
      },
    });
    const { selectItem, unselectItem, unselectAll } =
      selectedItemsSlice.actions;
    const __TURBOPACK__default__export__ = selectedItemsSlice.reducer;
  },
  '[project]/src/store/searchSlice.tsx [app-rsc] (ecmascript)': (
    __turbopack_context__
  ) => {
    'use strict';

    __turbopack_context__.s({
      default: () => __TURBOPACK__default__export__,
      setCurrentPage: () => setCurrentPage,
      setSearchTerm: () => setSearchTerm,
      setUniversities: () => setUniversities,
    });
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ =
      __turbopack_context__.i(
        '[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-rsc] (ecmascript) <locals>'
      );
    const initialState = {
      searchTerm: '',
      universities: [],
      currentPage: 1,
    };
    const searchSlice = (0,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__[
      'createSlice'
    ])({
      name: 'search',
      initialState,
      reducers: {
        setSearchTerm(state, action) {
          state.searchTerm = action.payload;
        },
        setUniversities(state, action) {
          state.universities = action.payload;
        },
        setCurrentPage(state, action) {
          state.currentPage = action.payload;
        },
      },
    });
    const { setSearchTerm, setUniversities, setCurrentPage } =
      searchSlice.actions;
    const __TURBOPACK__default__export__ = searchSlice.reducer;
  },
  '[project]/src/services/university.tsx [app-rsc] (ecmascript)': (
    __turbopack_context__
  ) => {
    'use strict';

    __turbopack_context__.s({
      universityApi: () => universityApi,
      useGetUniversitiesQuery: () => useGetUniversitiesQuery,
      useSearchUniversitiesQuery: () => useSearchUniversitiesQuery,
    });
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ =
      __turbopack_context__.i(
        '[project]/node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.modern.mjs [app-rsc] (ecmascript) <locals>'
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/node_modules/@reduxjs/toolkit/dist/query/rtk-query.modern.mjs [app-rsc] (ecmascript)'
      );
    const universityApi = (0,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__[
      'createApi'
    ])({
      reducerPath: 'universityApi',
      baseQuery: (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
        'fetchBaseQuery'
      ])({
        baseUrl: '/api',
      }),
      endpoints: (builder) => ({
        searchUniversities: builder.query({
          query: ({ country }) => `/search?&country=${country}`,
        }),
        getUniversities: builder.query({
          query: () => `/search?&limit=15`,
        }),
      }),
    });
    const { useSearchUniversitiesQuery, useGetUniversitiesQuery } =
      universityApi;
  },
  '[project]/src/store/store.ts [app-rsc] (ecmascript)': (
    __turbopack_context__
  ) => {
    'use strict';

    __turbopack_context__.s({
      store: () => store,
    });
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ =
      __turbopack_context__.i(
        '[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-rsc] (ecmascript) <locals>'
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$selectedItemsSlice$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/src/store/selectedItemsSlice.ts [app-rsc] (ecmascript)'
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$searchSlice$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/src/store/searchSlice.tsx [app-rsc] (ecmascript)'
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/node_modules/@reduxjs/toolkit/dist/query/rtk-query.modern.mjs [app-rsc] (ecmascript)'
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$university$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/src/services/university.tsx [app-rsc] (ecmascript)'
      );
    const store = (0,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__[
      'configureStore'
    ])({
      reducer: {
        selectedItems:
          __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$selectedItemsSlice$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
            'default'
          ],
        search:
          __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$searchSlice$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
            'default'
          ],
        [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$university$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          'universityApi'
        ].reducerPath]:
          __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$university$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
            'universityApi'
          ].reducer,
      },
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
          __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$university$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
            'universityApi'
          ].middleware
        ),
    });
    (0,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
      'setupListeners'
    ])(store.dispatch);
  },
  '[project]/src/context/ThemeContext.tsx [app-rsc] (client reference proxy) <module evaluation>':
    (__turbopack_context__) => {
      'use strict';

      __turbopack_context__.s({
        ThemeProvider: () => ThemeProvider,
      });
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
        __turbopack_context__.i(
          '[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)'
        );
      const ThemeProvider = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
        'registerClientReference'
      ])(
        function () {
          throw new Error(
            "Attempted to call ThemeProvider() from the server but ThemeProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component."
          );
        },
        '[project]/src/context/ThemeContext.tsx <module evaluation>',
        'ThemeProvider'
      );
    },
  '[project]/src/context/ThemeContext.tsx [app-rsc] (client reference proxy)': (
    __turbopack_context__
  ) => {
    'use strict';

    __turbopack_context__.s({
      ThemeProvider: () => ThemeProvider,
    });
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)'
      );
    const ThemeProvider = (0,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
      'registerClientReference'
    ])(
      function () {
        throw new Error(
          "Attempted to call ThemeProvider() from the server but ThemeProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component."
        );
      },
      '[project]/src/context/ThemeContext.tsx',
      'ThemeProvider'
    );
  },
  '[project]/src/context/ThemeContext.tsx [app-rsc] (ecmascript)': (
    __turbopack_context__
  ) => {
    'use strict';

    var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ =
      __turbopack_context__.i(
        '[project]/src/context/ThemeContext.tsx [app-rsc] (client reference proxy) <module evaluation>'
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ =
      __turbopack_context__.i(
        '[project]/src/context/ThemeContext.tsx [app-rsc] (client reference proxy)'
      );
    __turbopack_context__.n(
      __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__
    );
  },
  '[project]/messages/en.json (json)': (__turbopack_context__) => {
    __turbopack_context__.v(
      JSON.parse(
        '{"notFound":{"title":"Page Not Found","description":"Oops! The page you\'re looking for does not exist.","goHome":"Go back to Home"},"header":{"home":"Home","about":"About","appName":"GlobalCampus"},"footer":{"team":"Developed with ❤️ by","poweredBy":"Powered by Open APIs. Data may not be accurate for all universities.","copyright":"All rights reserved."},"search":{"placeholder":"Search...","button":"Search"},"results":{"next":"Next","previous":"Previous","downloadCsv":"Download CSV","noData":"No data available","unselectAll":"Unselect all","page":"Page","noWebSite":"No Web Site","of":"of","selectedItems":"Selected Items"},"detailsPage":{"close":"Close","country":"Country","domains":"Domains","webSite":"Web Site"},"mainPage":{"description":"Discover universities around the world! Enter the full name of a country and browse through the list of universities. Get detailed information about each university, including programs offered, admission requirements, and more."},"about":{"name":"Asya Danilova","role":"Frontend Developer","bio":"Passionate about building user-friendly web applications.","contributions":["Developed the user interface for the university search feature.","Implemented responsive design for mobile and tablet devices.","Collaborated with backend developers to integrate APIs."],"contributionHeader":"Contributions:"}}'
      )
    );
  },
  '[project]/messages/ru.json (json)': (__turbopack_context__) => {
    __turbopack_context__.v(
      JSON.parse(
        '{"notFound":{"title":"Страница не найдена","description":"Упс! Страница, которую вы ищете, не существует.","goHome":"Вернуться на главную"},"header":{"home":"Главная","about":"О нас","appName":"GlobalCampus"},"footer":{"team":"Разработано с ❤️ командой","poweredBy":"Работает на открытых API. Данные могут быть неточными для всех университетов.","copyright":"Все права защищены."},"search":{"placeholder":"Поиск...","button":"Найти"},"results":{"next":"Следующая","previous":"Предыдущая","downloadCsv":"Скачать CSV","noData":"Данные отсутствуют","unselectAll":"Снять выбор со всех","page":"Страница","of":"из","noResults":"Нет результатов","selectedItems":"Выбранный(ые) элементы"},"detailsPage":{"close":"Закрыть","country":"Страна","domains":"Домены","webSite":"Веб-сайт"},"mainPage":{"description":"Откройте для себя университеты со всего мира! Введите полное название страны и изучите список университетов. Получайте подробную информацию о каждом университете, включая предлагаемые программы, требования к поступлению и многое другое."},"about":{"name":"Ася Данилова","role":"Frontend Developer","bio":"Страстно увлечена созданием удобных веб-приложений.","contributions":["Разработала пользовательский интерфейс для функции поиска университетов.","Реализовала адаптивный дизайн для мобильных и планшетных устройств.","Сотрудничала с бэкенд-разработчиками для интеграции API."],"contributionHeader":"Вклад:"}}'
      )
    );
  },
  '[project]/app/[locale]/layout.tsx [app-rsc] (ecmascript)': (
    __turbopack_context__
  ) => {
    var { m: module, e: exports } = __turbopack_context__;
    {
      const e = new Error(
        "Could not parse module '[project]/app/[locale]/layout.tsx'\n\nUnterminated regexp literal"
      );
      e.code = 'MODULE_UNPARSABLE';
      throw e;
    }
  },
};

//# sourceMappingURL=_944550d6._.js.map
