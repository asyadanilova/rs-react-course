(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([
  typeof document === 'object' ? document.currentScript : undefined,
  {
    '[project]/src/store/selectedItemsSlice.ts [app-client] (ecmascript)': (
      __turbopack_context__
    ) => {
      'use strict';

      var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
      {
        __turbopack_context__.s({
          default: () => __TURBOPACK__default__export__,
          selectItem: () => selectItem,
          unselectAll: () => unselectAll,
          unselectItem: () => unselectItem,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ =
          __turbopack_context__.i(
            '[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>'
          );
        const initialState = {
          items: [],
        };
        const selectedItemsSlice = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__[
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
        if (
          typeof globalThis.$RefreshHelpers$ === 'object' &&
          globalThis.$RefreshHelpers !== null
        ) {
          __turbopack_context__.k.registerExports(
            module,
            globalThis.$RefreshHelpers$
          );
        }
      }
    },
    '[project]/src/store/searchSlice.tsx [app-client] (ecmascript)': (
      __turbopack_context__
    ) => {
      'use strict';

      var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
      {
        __turbopack_context__.s({
          default: () => __TURBOPACK__default__export__,
          setCurrentPage: () => setCurrentPage,
          setSearchTerm: () => setSearchTerm,
          setUniversities: () => setUniversities,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ =
          __turbopack_context__.i(
            '[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>'
          );
        const initialState = {
          searchTerm: '',
          universities: [],
          currentPage: 1,
        };
        const searchSlice = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__[
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
        if (
          typeof globalThis.$RefreshHelpers$ === 'object' &&
          globalThis.$RefreshHelpers !== null
        ) {
          __turbopack_context__.k.registerExports(
            module,
            globalThis.$RefreshHelpers$
          );
        }
      }
    },
    '[project]/src/services/university.tsx [app-client] (ecmascript)': (
      __turbopack_context__
    ) => {
      'use strict';

      var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
      {
        __turbopack_context__.s({
          universityApi: () => universityApi,
          useGetUniversitiesQuery: () => useGetUniversitiesQuery,
          useSearchUniversitiesQuery: () => useSearchUniversitiesQuery,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ =
          __turbopack_context__.i(
            '[project]/node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.modern.mjs [app-client] (ecmascript) <locals>'
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            '[project]/node_modules/@reduxjs/toolkit/dist/query/rtk-query.modern.mjs [app-client] (ecmascript)'
          );
        const universityApi = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__[
          'createApi'
        ])({
          reducerPath: 'universityApi',
          baseQuery: (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            'fetchBaseQuery'
          ])({
            baseUrl: '/api',
          }),
          endpoints: (builder) => ({
            searchUniversities: builder.query({
              query: (param) => {
                let { country } = param;
                return '/search?&country='.concat(country);
              },
            }),
            getUniversities: builder.query({
              query: () => '/search?&limit=15',
            }),
          }),
        });
        const { useSearchUniversitiesQuery, useGetUniversitiesQuery } =
          universityApi;
        if (
          typeof globalThis.$RefreshHelpers$ === 'object' &&
          globalThis.$RefreshHelpers !== null
        ) {
          __turbopack_context__.k.registerExports(
            module,
            globalThis.$RefreshHelpers$
          );
        }
      }
    },
    '[project]/src/store/store.ts [app-client] (ecmascript)': (
      __turbopack_context__
    ) => {
      'use strict';

      var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
      {
        __turbopack_context__.s({
          store: () => store,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ =
          __turbopack_context__.i(
            '[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>'
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$selectedItemsSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            '[project]/src/store/selectedItemsSlice.ts [app-client] (ecmascript)'
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$searchSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            '[project]/src/store/searchSlice.tsx [app-client] (ecmascript)'
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            '[project]/node_modules/@reduxjs/toolkit/dist/query/rtk-query.modern.mjs [app-client] (ecmascript)'
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$university$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            '[project]/src/services/university.tsx [app-client] (ecmascript)'
          );
        const store = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__[
          'configureStore'
        ])({
          reducer: {
            selectedItems:
              __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$selectedItemsSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'default'
              ],
            search:
              __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$searchSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'default'
              ],
            [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$university$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'universityApi'
            ].reducerPath]:
              __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$university$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'universityApi'
              ].reducer,
          },
          middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(
              __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$university$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'universityApi'
              ].middleware
            ),
        });
        (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          'setupListeners'
        ])(store.dispatch);
        if (
          typeof globalThis.$RefreshHelpers$ === 'object' &&
          globalThis.$RefreshHelpers !== null
        ) {
          __turbopack_context__.k.registerExports(
            module,
            globalThis.$RefreshHelpers$
          );
        }
      }
    },
    '[project]/messages/en.json (json)': (__turbopack_context__) => {
      __turbopack_context__.v(
        JSON.parse(
          '{"notFound":{"title":"Page Not Found","description":"Oops! The page you\'re looking for does not exist.","goHome":"Go back to Home"},"header":{"home":"Home","about":"About","appName":"GlobalCampus"},"footer":{"team":"Developed with ❤️ by","poweredBy":"Powered by Open APIs. Data may not be accurate for all universities.","copyright":"All rights reserved."},"search":{"placeholder":"Search...","button":"Search"},"results":{"next":"Next","previous":"Previous","downloadCsv":"Download CSV","noData":"No data available","unselectAll":"Unselect all","page":"Page","noWebSite":"No Web Site","of":"of"},"detailsPage":{"close":"Close","country":"Country","domains":"Domains","webSite":"Web Site"},"mainPage":{"description":"Discover universities around the world! Enter the full name of a country and browse through the list of universities. Get detailed information about each university, including programs offered, admission requirements, and more."}}'
        )
      );
    },
    '[project]/messages/ru.json (json)': (__turbopack_context__) => {
      __turbopack_context__.v(
        JSON.parse(
          '{"notFound":{"title":"Страница не найдена","description":"Упс! Страница, которую вы ищете, не существует.","goHome":"Вернуться на главную"},"header":{"home":"Главная","about":"О нас","appName":"GlobalCampus"},"footer":{"team":"Разработано с ❤️ командой","poweredBy":"Работает на открытых API. Данные могут быть неточными для всех университетов.","copyright":"Все права защищены."},"search":{"placeholder":"Поиск...","button":"Найти"},"results":{"next":"Следующая","previous":"Предыдущая","downloadCsv":"Скачать CSV","noData":"Данные отсутствуют","unselectAll":"Снять выбор со всех","page":"Страница","of":"из","noResults":"Нет результатов"},"detailsPage":{"close":"Закрыть","country":"Страна","domains":"Домены","webSite":"Веб-сайт"},"mainPage":{"description":"Откройте для себя университеты со всего мира! Введите полное название страны и изучите список университетов. Получайте подробную информацию о каждом университете, включая предлагаемые программы, требования к поступлению и многое другое."}}'
        )
      );
    },
    '[project]/src/utils/consts.tsx [app-client] (ecmascript)': (
      __turbopack_context__
    ) => {
      'use strict';

      var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
      {
        __turbopack_context__.s({
          ITEM_PER_PAGE: () => ITEM_PER_PAGE,
          MESSAGES: () => MESSAGES,
          SUPPORTED_LOCALES: () => SUPPORTED_LOCALES,
          ThemeContext: () => ThemeContext,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            '[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)'
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$messages$2f$en$2e$json__$28$json$29$__ =
          __turbopack_context__.i('[project]/messages/en.json (json)');
        var __TURBOPACK__imported__module__$5b$project$5d2f$messages$2f$ru$2e$json__$28$json$29$__ =
          __turbopack_context__.i('[project]/messages/ru.json (json)');
        const ITEM_PER_PAGE = 15;
        const MESSAGES = {
          en: __TURBOPACK__imported__module__$5b$project$5d2f$messages$2f$en$2e$json__$28$json$29$__[
            'default'
          ],
          ru: __TURBOPACK__imported__module__$5b$project$5d2f$messages$2f$ru$2e$json__$28$json$29$__[
            'default'
          ],
        };
        const SUPPORTED_LOCALES = ['en', 'ru'];
        const ThemeContext = /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          'createContext'
        ])({
          theme: 'light',
          toggleTheme: () => {},
        });
        if (
          typeof globalThis.$RefreshHelpers$ === 'object' &&
          globalThis.$RefreshHelpers !== null
        ) {
          __turbopack_context__.k.registerExports(
            module,
            globalThis.$RefreshHelpers$
          );
        }
      }
    },
    '[project]/src/context/ThemeContext.tsx [app-client] (ecmascript)': (
      __turbopack_context__
    ) => {
      'use strict';

      var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
      {
        __turbopack_context__.s({
          ThemeProvider: () => ThemeProvider,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            '[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)'
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$consts$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            '[project]/src/utils/consts.tsx [app-client] (ecmascript)'
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            '[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)'
          );
        var _s = __turbopack_context__.k.signature();
        ('use client');
        const ThemeProvider = (param) => {
          let { children } = param;
          _s();
          const [theme, setTheme] = (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            'useState'
          ])('light');
          (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            'useEffect'
          ])(
            {
              'ThemeProvider.useEffect': () => {
                document.body.setAttribute('data-theme', theme);
              },
            }['ThemeProvider.useEffect'],
            [theme]
          );
          const toggleTheme = () =>
            setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
          return /*#__PURE__*/ (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            'jsxDEV'
          ])(
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$consts$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'ThemeContext'
            ].Provider,
            {
              value: {
                theme,
                toggleTheme,
              },
              children: children,
            },
            void 0,
            false,
            {
              fileName: '[project]/src/context/ThemeContext.tsx',
              lineNumber: 19,
              columnNumber: 5,
            },
            ('TURBOPACK compile-time value', void 0)
          );
        };
        _s(ThemeProvider, 'Z8UCD9KudyQA62DCQ9e5cf9+m5k=');
        _c = ThemeProvider;
        var _c;
        __turbopack_context__.k.register(_c, 'ThemeProvider');
        if (
          typeof globalThis.$RefreshHelpers$ === 'object' &&
          globalThis.$RefreshHelpers !== null
        ) {
          __turbopack_context__.k.registerExports(
            module,
            globalThis.$RefreshHelpers$
          );
        }
      }
    },
    '[project]/src/components/Footer/Footer.tsx [app-client] (ecmascript)': (
      __turbopack_context__
    ) => {
      'use strict';

      var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
      {
        __turbopack_context__.s({
          Footer: () => Footer,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            '[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)'
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ =
          __turbopack_context__.i(
            '[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript) <locals>'
          );
        var _s = __turbopack_context__.k.signature();
        ('use client');
        const Footer = () => {
          _s();
          const t = (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__[
            'useTranslations'
          ])();
          return /*#__PURE__*/ (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            'jsxDEV'
          ])(
            'footer',
            {
              className: 'footer',
              children: [
                /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  'jsxDEV'
                ])(
                  'p',
                  {
                    className: 'team-text',
                    children: [
                      t('footer.team'),
                      ':',
                      ' ',
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        'jsxDEV'
                      ])(
                        'a',
                        {
                          href: 'https://github.com/AsyaDanilova',
                          target: '_blank',
                          rel: 'noopener noreferrer',
                          children: [
                            'Asya ',
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              'jsxDEV'
                            ])(
                              'i',
                              {
                                className: 'bi bi-github',
                              },
                              void 0,
                              false,
                              {
                                fileName:
                                  '[project]/src/components/Footer/Footer.tsx',
                                lineNumber: 17,
                                columnNumber: 16,
                              },
                              ('TURBOPACK compile-time value', void 0)
                            ),
                          ],
                        },
                        void 0,
                        true,
                        {
                          fileName:
                            '[project]/src/components/Footer/Footer.tsx',
                          lineNumber: 12,
                          columnNumber: 9,
                        },
                        ('TURBOPACK compile-time value', void 0)
                      ),
                    ],
                  },
                  void 0,
                  true,
                  {
                    fileName: '[project]/src/components/Footer/Footer.tsx',
                    lineNumber: 10,
                    columnNumber: 7,
                  },
                  ('TURBOPACK compile-time value', void 0)
                ),
                /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  'jsxDEV'
                ])(
                  'p',
                  {
                    'data-testid': 'year-test',
                    children: [
                      '© 2025 My University Search. ',
                      t('footer.copyright'),
                    ],
                  },
                  void 0,
                  true,
                  {
                    fileName: '[project]/src/components/Footer/Footer.tsx',
                    lineNumber: 20,
                    columnNumber: 7,
                  },
                  ('TURBOPACK compile-time value', void 0)
                ),
                /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  'jsxDEV'
                ])(
                  'small',
                  {
                    children: t('footer.poweredBy'),
                  },
                  void 0,
                  false,
                  {
                    fileName: '[project]/src/components/Footer/Footer.tsx',
                    lineNumber: 23,
                    columnNumber: 7,
                  },
                  ('TURBOPACK compile-time value', void 0)
                ),
              ],
            },
            void 0,
            true,
            {
              fileName: '[project]/src/components/Footer/Footer.tsx',
              lineNumber: 9,
              columnNumber: 5,
            },
            ('TURBOPACK compile-time value', void 0)
          );
        };
        _s(Footer, 'h6+q2O3NJKPY5uL0BIJGLIanww8=', false, function () {
          return [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__[
              'useTranslations'
            ],
          ];
        });
        _c = Footer;
        var _c;
        __turbopack_context__.k.register(_c, 'Footer');
        if (
          typeof globalThis.$RefreshHelpers$ === 'object' &&
          globalThis.$RefreshHelpers !== null
        ) {
          __turbopack_context__.k.registerExports(
            module,
            globalThis.$RefreshHelpers$
          );
        }
      }
    },
    '[project]/src/utils/routes.ts [app-client] (ecmascript)': (
      __turbopack_context__
    ) => {
      'use strict';

      var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
      {
        __turbopack_context__.s({
          AppRoutes: () => AppRoutes,
        });
        var AppRoutes = /*#__PURE__*/ (function (AppRoutes) {
          AppRoutes['HOME_ROUTE'] = '/';
          AppRoutes['ABOUT_ROUTE'] = '/about';
          AppRoutes['ERROR_ROUTE'] = '/404';
          AppRoutes['LOGIN_ROUTE'] = '/login';
          AppRoutes['REGISTRATION_ROUTE'] = '/register';
          return AppRoutes;
        })({});
        if (
          typeof globalThis.$RefreshHelpers$ === 'object' &&
          globalThis.$RefreshHelpers !== null
        ) {
          __turbopack_context__.k.registerExports(
            module,
            globalThis.$RefreshHelpers$
          );
        }
      }
    },
    '[project]/src/hooks/useTheme.tsx [app-client] (ecmascript)': (
      __turbopack_context__
    ) => {
      'use strict';

      var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
      {
        __turbopack_context__.s({
          useTheme: () => useTheme,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            '[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)'
          );
        var _s = __turbopack_context__.k.signature();
        function useTheme() {
          _s();
          const [theme, setTheme] = (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            'useState'
          ])('light');
          (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            'useEffect'
          ])(
            {
              'useTheme.useEffect': () => {
                const stored = localStorage.getItem('theme');
                if (stored === 'dark') setTheme('dark');
              },
            }['useTheme.useEffect'],
            []
          );
          (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            'useEffect'
          ])(
            {
              'useTheme.useEffect': () => {
                document.body.dataset.theme = theme;
              },
            }['useTheme.useEffect'],
            [theme]
          );
          const toggleTheme = () => {
            setTheme((prev) => {
              const next = prev === 'light' ? 'dark' : 'light';
              localStorage.setItem('theme', next);
              return next;
            });
          };
          return {
            theme,
            toggleTheme,
          };
        }
        _s(useTheme, 'l0NnHMBAjTNA2m05PT0LPL3eOKc=');
        if (
          typeof globalThis.$RefreshHelpers$ === 'object' &&
          globalThis.$RefreshHelpers !== null
        ) {
          __turbopack_context__.k.registerExports(
            module,
            globalThis.$RefreshHelpers$
          );
        }
      }
    },
    '[project]/next-intl.config.ts [app-client] (ecmascript)': (
      __turbopack_context__
    ) => {
      'use strict';

      var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
      {
        __turbopack_context__.s({
          default: () => __TURBOPACK__default__export__,
        });
        const __TURBOPACK__default__export__ = {
          locales: ['en', 'ru'],
          defaultLocale: 'en',
          localeDetection: true,
        };
        if (
          typeof globalThis.$RefreshHelpers$ === 'object' &&
          globalThis.$RefreshHelpers !== null
        ) {
          __turbopack_context__.k.registerExports(
            module,
            globalThis.$RefreshHelpers$
          );
        }
      }
    },
    '[project]/src/components/LanguageSwitcher/LanguageSwitcher.tsx [app-client] (ecmascript)':
      (__turbopack_context__) => {
        'use strict';

        var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
        {
          __turbopack_context__.s({
            default: () => LanguageSwitcher,
          });
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              '[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)'
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              '[project]/node_modules/use-intl/dist/esm/development/react.js [app-client] (ecmascript)'
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              '[project]/node_modules/next/navigation.js [app-client] (ecmascript)'
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$intl$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              '[project]/next-intl.config.ts [app-client] (ecmascript)'
            );
          var _s = __turbopack_context__.k.signature();
          ('use client');
          function LanguageSwitcher() {
            _s();
            const router = (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'useRouter'
            ])();
            const pathname = (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'usePathname'
            ])();
            const locale = (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'useLocale'
            ])();
            const handleChange = (e) => {
              const newLocale = e.target.value;
              const segments = (
                pathname !== null && pathname !== void 0 ? pathname : ''
              ).split('/');
              if (
                __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$intl$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  'default'
                ].locales.includes(segments[1])
              ) {
                segments[1] = newLocale;
              } else {
                segments.splice(1, 0, newLocale);
              }
              const newPath = segments.join('/') || '/';
              router.replace(newPath);
            };
            return /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'jsxDEV'
            ])(
              'select',
              {
                className: 'language-switcher',
                onChange: handleChange,
                value: locale,
                children:
                  __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$intl$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    'default'
                  ].locales.map((l) =>
                    /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                      'jsxDEV'
                    ])(
                      'option',
                      {
                        value: l,
                        children: l,
                      },
                      l,
                      false,
                      {
                        fileName:
                          '[project]/src/components/LanguageSwitcher/LanguageSwitcher.tsx',
                        lineNumber: 32,
                        columnNumber: 9,
                      },
                      this
                    )
                  ),
              },
              void 0,
              false,
              {
                fileName:
                  '[project]/src/components/LanguageSwitcher/LanguageSwitcher.tsx',
                lineNumber: 26,
                columnNumber: 5,
              },
              this
            );
          }
          _s(
            LanguageSwitcher,
            'HbZyCmtioPgKbitnOrzxTCYDzdg=',
            false,
            function () {
              return [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  'useRouter'
                ],
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  'usePathname'
                ],
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  'useLocale'
                ],
              ];
            }
          );
          _c = LanguageSwitcher;
          var _c;
          __turbopack_context__.k.register(_c, 'LanguageSwitcher');
          if (
            typeof globalThis.$RefreshHelpers$ === 'object' &&
            globalThis.$RefreshHelpers !== null
          ) {
            __turbopack_context__.k.registerExports(
              module,
              globalThis.$RefreshHelpers$
            );
          }
        }
      },
    '[project]/src/components/Header/Header.tsx [app-client] (ecmascript)': (
      __turbopack_context__
    ) => {
      'use strict';

      var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
      {
        __turbopack_context__.s({
          Header: () => Header,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            '[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)'
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            '[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)'
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            '[project]/src/utils/routes.ts [app-client] (ecmascript)'
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useTheme$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            '[project]/src/hooks/useTheme.tsx [app-client] (ecmascript)'
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$bs$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            '[project]/node_modules/react-icons/bs/index.mjs [app-client] (ecmascript)'
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            '[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)'
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            '[project]/node_modules/next/image.js [app-client] (ecmascript)'
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LanguageSwitcher$2f$LanguageSwitcher$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            '[project]/src/components/LanguageSwitcher/LanguageSwitcher.tsx [app-client] (ecmascript)'
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ =
          __turbopack_context__.i(
            '[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript) <locals>'
          );
        var _s = __turbopack_context__.k.signature();
        ('use client');
        const Header = () => {
          _s();
          const t = (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__[
            'useTranslations'
          ])();
          const navButtons = () =>
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'jsxDEV'
            ])(
              'ul',
              {
                className: 'nav_button',
                children: [
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    'jsxDEV'
                  ])(
                    'li',
                    {
                      children: /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        'jsxDEV'
                      ])(
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                          'default'
                        ],
                        {
                          href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                            'AppRoutes'
                          ].HOME_ROUTE,
                          className: 'nav-link',
                          children: [
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              'jsxDEV'
                            ])(
                              'i',
                              {
                                className: 'bi bi-house',
                              },
                              void 0,
                              false,
                              {
                                fileName:
                                  '[project]/src/components/Header/Header.tsx',
                                lineNumber: 19,
                                columnNumber: 11,
                              },
                              ('TURBOPACK compile-time value', void 0)
                            ),
                            ' ',
                            t('header.home'),
                          ],
                        },
                        void 0,
                        true,
                        {
                          fileName:
                            '[project]/src/components/Header/Header.tsx',
                          lineNumber: 18,
                          columnNumber: 9,
                        },
                        ('TURBOPACK compile-time value', void 0)
                      ),
                    },
                    void 0,
                    false,
                    {
                      fileName: '[project]/src/components/Header/Header.tsx',
                      lineNumber: 17,
                      columnNumber: 7,
                    },
                    ('TURBOPACK compile-time value', void 0)
                  ),
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    'jsxDEV'
                  ])(
                    'li',
                    {
                      children: /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        'jsxDEV'
                      ])(
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                          'default'
                        ],
                        {
                          href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                            'AppRoutes'
                          ].ABOUT_ROUTE,
                          className: 'nav-link',
                          children: [
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              'jsxDEV'
                            ])(
                              'i',
                              {
                                className: 'bi bi-info-circle',
                              },
                              void 0,
                              false,
                              {
                                fileName:
                                  '[project]/src/components/Header/Header.tsx',
                                lineNumber: 24,
                                columnNumber: 11,
                              },
                              ('TURBOPACK compile-time value', void 0)
                            ),
                            ' ',
                            t('header.about'),
                          ],
                        },
                        void 0,
                        true,
                        {
                          fileName:
                            '[project]/src/components/Header/Header.tsx',
                          lineNumber: 23,
                          columnNumber: 9,
                        },
                        ('TURBOPACK compile-time value', void 0)
                      ),
                    },
                    void 0,
                    false,
                    {
                      fileName: '[project]/src/components/Header/Header.tsx',
                      lineNumber: 22,
                      columnNumber: 7,
                    },
                    ('TURBOPACK compile-time value', void 0)
                  ),
                ],
              },
              void 0,
              true,
              {
                fileName: '[project]/src/components/Header/Header.tsx',
                lineNumber: 16,
                columnNumber: 5,
              },
              ('TURBOPACK compile-time value', void 0)
            );
          const { theme, toggleTheme } = (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useTheme$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            'useTheme'
          ])();
          const [mounted, setMounted] = (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            'useState'
          ])(false);
          (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            'useEffect'
          ])(
            {
              'Header.useEffect': () => {
                setMounted(true);
              },
            }['Header.useEffect'],
            []
          );
          if (!mounted) return null;
          return /*#__PURE__*/ (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            'jsxDEV'
          ])(
            'header',
            {
              className: 'header',
              children: [
                /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  'jsxDEV'
                ])(
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    'default'
                  ],
                  {
                    href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                      'AppRoutes'
                    ].HOME_ROUTE,
                    className: 'header__logo-link',
                    children: [
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        'jsxDEV'
                      ])(
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                          'default'
                        ],
                        {
                          src: '/graduation-cap.png',
                          alt: 'Site Icon',
                          className: 'header__logo-icon',
                          width: 32,
                          height: 32,
                        },
                        void 0,
                        false,
                        {
                          fileName:
                            '[project]/src/components/Header/Header.tsx',
                          lineNumber: 41,
                          columnNumber: 9,
                        },
                        ('TURBOPACK compile-time value', void 0)
                      ),
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        'jsxDEV'
                      ])(
                        'span',
                        {
                          className: 'header__app-name',
                          children: t('header.appName'),
                        },
                        void 0,
                        false,
                        {
                          fileName:
                            '[project]/src/components/Header/Header.tsx',
                          lineNumber: 48,
                          columnNumber: 9,
                        },
                        ('TURBOPACK compile-time value', void 0)
                      ),
                    ],
                  },
                  void 0,
                  true,
                  {
                    fileName: '[project]/src/components/Header/Header.tsx',
                    lineNumber: 40,
                    columnNumber: 7,
                  },
                  ('TURBOPACK compile-time value', void 0)
                ),
                /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  'jsxDEV'
                ])(
                  'div',
                  {
                    style: {
                      display: 'flex',
                      alignItems: 'center',
                    },
                    children: [
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        'jsxDEV'
                      ])(
                        'nav',
                        {
                          children: navButtons(),
                        },
                        void 0,
                        false,
                        {
                          fileName:
                            '[project]/src/components/Header/Header.tsx',
                          lineNumber: 51,
                          columnNumber: 9,
                        },
                        ('TURBOPACK compile-time value', void 0)
                      ),
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        'jsxDEV'
                      ])(
                        'div',
                        {
                          className: 'toggle-theme',
                          onClick: toggleTheme,
                          'aria-label': 'Toggle theme',
                          children:
                            theme === 'light'
                              ? /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                  'jsxDEV'
                                ])(
                                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$bs$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                    'BsSunFill'
                                  ],
                                  {},
                                  void 0,
                                  false,
                                  {
                                    fileName:
                                      '[project]/src/components/Header/Header.tsx',
                                    lineNumber: 57,
                                    columnNumber: 32,
                                  },
                                  ('TURBOPACK compile-time value', void 0)
                                )
                              : /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                  'jsxDEV'
                                ])(
                                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$bs$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                    'BsMoonFill'
                                  ],
                                  {},
                                  void 0,
                                  false,
                                  {
                                    fileName:
                                      '[project]/src/components/Header/Header.tsx',
                                    lineNumber: 57,
                                    columnNumber: 48,
                                  },
                                  ('TURBOPACK compile-time value', void 0)
                                ),
                        },
                        void 0,
                        false,
                        {
                          fileName:
                            '[project]/src/components/Header/Header.tsx',
                          lineNumber: 52,
                          columnNumber: 9,
                        },
                        ('TURBOPACK compile-time value', void 0)
                      ),
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        'jsxDEV'
                      ])(
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LanguageSwitcher$2f$LanguageSwitcher$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                          'default'
                        ],
                        {},
                        void 0,
                        false,
                        {
                          fileName:
                            '[project]/src/components/Header/Header.tsx',
                          lineNumber: 59,
                          columnNumber: 9,
                        },
                        ('TURBOPACK compile-time value', void 0)
                      ),
                    ],
                  },
                  void 0,
                  true,
                  {
                    fileName: '[project]/src/components/Header/Header.tsx',
                    lineNumber: 50,
                    columnNumber: 7,
                  },
                  ('TURBOPACK compile-time value', void 0)
                ),
              ],
            },
            void 0,
            true,
            {
              fileName: '[project]/src/components/Header/Header.tsx',
              lineNumber: 39,
              columnNumber: 5,
            },
            ('TURBOPACK compile-time value', void 0)
          );
        };
        _s(Header, 'SEulgPANZXQ2R5DkDuxYFaZWJlg=', false, function () {
          return [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__[
              'useTranslations'
            ],
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useTheme$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'useTheme'
            ],
          ];
        });
        _c = Header;
        var _c;
        __turbopack_context__.k.register(_c, 'Header');
        if (
          typeof globalThis.$RefreshHelpers$ === 'object' &&
          globalThis.$RefreshHelpers !== null
        ) {
          __turbopack_context__.k.registerExports(
            module,
            globalThis.$RefreshHelpers$
          );
        }
      }
    },
    '[project]/app/layout.tsx [app-client] (ecmascript)': (
      __turbopack_context__
    ) => {
      'use strict';

      var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
      {
        __turbopack_context__.s({
          default: () => RootLayout,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            '[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)'
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            '[project]/src/store/store.ts [app-client] (ecmascript)'
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            '[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)'
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            '[project]/src/context/ThemeContext.tsx [app-client] (ecmascript)'
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$shared$2f$NextIntlClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__NextIntlClientProvider$3e$__ =
          __turbopack_context__.i(
            '[project]/node_modules/next-intl/dist/esm/development/shared/NextIntlClientProvider.js [app-client] (ecmascript) <export default as NextIntlClientProvider>'
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            '[project]/src/components/Footer/Footer.tsx [app-client] (ecmascript)'
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            '[project]/src/components/Header/Header.tsx [app-client] (ecmascript)'
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$consts$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            '[project]/src/utils/consts.tsx [app-client] (ecmascript)'
          );
        ('use client');
        function RootLayout(param) {
          let { children, params } = param;
          const locale =
            (params === null || params === void 0 ? void 0 : params.locale) &&
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$consts$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'SUPPORTED_LOCALES'
            ].includes(params.locale)
              ? params.locale
              : 'en';
          const messages =
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$consts$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'MESSAGES'
            ][locale];
          return /*#__PURE__*/ (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            'jsxDEV'
          ])(
            'html',
            {
              lang: locale,
              children: /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'jsxDEV'
              ])(
                'body',
                {
                  children: /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    'jsxDEV'
                  ])(
                    'div',
                    {
                      className: 'root',
                      children: /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        'jsxDEV'
                      ])(
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                          'Provider'
                        ],
                        {
                          store:
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              'store'
                            ],
                          children: /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                            'jsxDEV'
                          ])(
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              'ThemeProvider'
                            ],
                            {
                              children: /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                'jsxDEV'
                              ])(
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$shared$2f$NextIntlClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__NextIntlClientProvider$3e$__[
                                  'NextIntlClientProvider'
                                ],
                                {
                                  locale: locale,
                                  messages: messages,
                                  children: [
                                    /*#__PURE__*/ (0,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                      'jsxDEV'
                                    ])(
                                      __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                        'Header'
                                      ],
                                      {},
                                      void 0,
                                      false,
                                      {
                                        fileName: '[project]/app/layout.tsx',
                                        lineNumber: 33,
                                        columnNumber: 17,
                                      },
                                      this
                                    ),
                                    children,
                                    /*#__PURE__*/ (0,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                      'jsxDEV'
                                    ])(
                                      __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                        'Footer'
                                      ],
                                      {},
                                      void 0,
                                      false,
                                      {
                                        fileName: '[project]/app/layout.tsx',
                                        lineNumber: 35,
                                        columnNumber: 17,
                                      },
                                      this
                                    ),
                                  ],
                                },
                                void 0,
                                true,
                                {
                                  fileName: '[project]/app/layout.tsx',
                                  lineNumber: 32,
                                  columnNumber: 15,
                                },
                                this
                              ),
                            },
                            void 0,
                            false,
                            {
                              fileName: '[project]/app/layout.tsx',
                              lineNumber: 31,
                              columnNumber: 13,
                            },
                            this
                          ),
                        },
                        void 0,
                        false,
                        {
                          fileName: '[project]/app/layout.tsx',
                          lineNumber: 30,
                          columnNumber: 11,
                        },
                        this
                      ),
                    },
                    void 0,
                    false,
                    {
                      fileName: '[project]/app/layout.tsx',
                      lineNumber: 29,
                      columnNumber: 9,
                    },
                    this
                  ),
                },
                void 0,
                false,
                {
                  fileName: '[project]/app/layout.tsx',
                  lineNumber: 28,
                  columnNumber: 7,
                },
                this
              ),
            },
            void 0,
            false,
            {
              fileName: '[project]/app/layout.tsx',
              lineNumber: 27,
              columnNumber: 5,
            },
            this
          );
        }
        _c = RootLayout;
        var _c;
        __turbopack_context__.k.register(_c, 'RootLayout');
        if (
          typeof globalThis.$RefreshHelpers$ === 'object' &&
          globalThis.$RefreshHelpers !== null
        ) {
          __turbopack_context__.k.registerExports(
            module,
            globalThis.$RefreshHelpers$
          );
        }
      }
    },
  },
]);

//# sourceMappingURL=_e083e0ba._.js.map
