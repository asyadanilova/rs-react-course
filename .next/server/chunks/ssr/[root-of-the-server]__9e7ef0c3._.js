module.exports = {
  '[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)':
    (__turbopack_context__) => {
      var { m: module, e: exports } = __turbopack_context__;
      {
        const mod = __turbopack_context__.x(
          'next/dist/server/app-render/action-async-storage.external.js',
          () =>
            require('next/dist/server/app-render/action-async-storage.external.js')
        );

        module.exports = mod;
      }
    },
  '[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)':
    (__turbopack_context__) => {
      var { m: module, e: exports } = __turbopack_context__;
      {
        const mod = __turbopack_context__.x(
          'next/dist/server/app-render/work-unit-async-storage.external.js',
          () =>
            require('next/dist/server/app-render/work-unit-async-storage.external.js')
        );

        module.exports = mod;
      }
    },
  '[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)':
    (__turbopack_context__) => {
      var { m: module, e: exports } = __turbopack_context__;
      {
        const mod = __turbopack_context__.x(
          'next/dist/server/app-render/work-async-storage.external.js',
          () =>
            require('next/dist/server/app-render/work-async-storage.external.js')
        );

        module.exports = mod;
      }
    },
  '[project]/src/store/searchSlice.tsx [app-ssr] (ecmascript)': (
    __turbopack_context__
  ) => {
    'use strict';

    __turbopack_context__.s({
      default: () => __TURBOPACK__default__export__,
      setCurrentPage: () => setCurrentPage,
      setSearchTerm: () => setSearchTerm,
      setUniversities: () => setUniversities,
    });
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ =
      __turbopack_context__.i(
        '[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>'
      );
    const initialState = {
      searchTerm: '',
      universities: [],
      currentPage: 1,
    };
    const searchSlice = (0,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__[
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
  '[project]/src/components/SearchContainer/SearchContainer.tsx [app-ssr] (ecmascript)':
    (__turbopack_context__) => {
      'use strict';

      __turbopack_context__.s({
        SearchContainer: () => SearchContainer,
      });
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_context__.i(
          '[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)'
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_context__.i(
          '[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)'
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_context__.i(
          '[project]/node_modules/react-redux/dist/react-redux.mjs [app-ssr] (ecmascript)'
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$searchSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_context__.i(
          '[project]/src/store/searchSlice.tsx [app-ssr] (ecmascript)'
        );
      ('use client');
      const SearchContainer = () => {
        const dispatch = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          'useDispatch'
        ])();
        const searchTerm = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          'useSelector'
        ])((state) => state.search.searchTerm);
        const [inputTerm, setInputTerm] = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          'useState'
        ])(searchTerm);
        const handleInputChange = (event) => {
          setInputTerm(event.target.value);
        };
        const handleSearch = () => {
          const normalizedTerm = inputTerm.toLowerCase().trim();
          localStorage.setItem('searchTerm', normalizedTerm);
          dispatch(
            (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$searchSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              'setSearchTerm'
            ])(normalizedTerm)
          );
          window.dispatchEvent(new Event('searchTermUpdated'));
        };
        return /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          'jsxDEV'
        ])(
          'div',
          {
            className: 'search',
            children: [
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                'jsxDEV'
              ])(
                'div',
                {
                  className: 'search__input',
                  children: /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                    'jsxDEV'
                  ])(
                    'input',
                    {
                      type: 'text',
                      value: inputTerm,
                      onChange: handleInputChange,
                      placeholder: 'Enter your request...',
                      className: 'search-input',
                    },
                    void 0,
                    false,
                    {
                      fileName:
                        '[project]/src/components/SearchContainer/SearchContainer.tsx',
                      lineNumber: 28,
                      columnNumber: 9,
                    },
                    ('TURBOPACK compile-time value', void 0)
                  ),
                },
                void 0,
                false,
                {
                  fileName:
                    '[project]/src/components/SearchContainer/SearchContainer.tsx',
                  lineNumber: 27,
                  columnNumber: 7,
                },
                ('TURBOPACK compile-time value', void 0)
              ),
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                'jsxDEV'
              ])(
                'div',
                {
                  className: 'search__button',
                  children: /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                    'jsxDEV'
                  ])(
                    'button',
                    {
                      className: 'button',
                      onClick: handleSearch,
                      children: [
                        'Search ',
                        /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                          'jsxDEV'
                        ])(
                          'i',
                          {
                            className: 'bi bi-search',
                          },
                          void 0,
                          false,
                          {
                            fileName:
                              '[project]/src/components/SearchContainer/SearchContainer.tsx',
                            lineNumber: 38,
                            columnNumber: 18,
                          },
                          ('TURBOPACK compile-time value', void 0)
                        ),
                      ],
                    },
                    void 0,
                    true,
                    {
                      fileName:
                        '[project]/src/components/SearchContainer/SearchContainer.tsx',
                      lineNumber: 37,
                      columnNumber: 9,
                    },
                    ('TURBOPACK compile-time value', void 0)
                  ),
                },
                void 0,
                false,
                {
                  fileName:
                    '[project]/src/components/SearchContainer/SearchContainer.tsx',
                  lineNumber: 36,
                  columnNumber: 7,
                },
                ('TURBOPACK compile-time value', void 0)
              ),
            ],
          },
          void 0,
          true,
          {
            fileName:
              '[project]/src/components/SearchContainer/SearchContainer.tsx',
            lineNumber: 26,
            columnNumber: 5,
          },
          ('TURBOPACK compile-time value', void 0)
        );
      };
    },
  '[project]/src/services/university.tsx [app-ssr] (ecmascript)': (
    __turbopack_context__
  ) => {
    'use strict';

    __turbopack_context__.s({
      universityApi: () => universityApi,
      useGetUniversitiesQuery: () => useGetUniversitiesQuery,
      useSearchUniversitiesQuery: () => useSearchUniversitiesQuery,
    });
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ =
      __turbopack_context__.i(
        '[project]/node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.modern.mjs [app-ssr] (ecmascript) <locals>'
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/node_modules/@reduxjs/toolkit/dist/query/rtk-query.modern.mjs [app-ssr] (ecmascript)'
      );
    const universityApi = (0,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__[
      'createApi'
    ])({
      reducerPath: 'universityApi',
      baseQuery: (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
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
  '[project]/src/store/selectedItemsSlice.ts [app-ssr] (ecmascript)': (
    __turbopack_context__
  ) => {
    'use strict';

    __turbopack_context__.s({
      default: () => __TURBOPACK__default__export__,
      selectItem: () => selectItem,
      unselectAll: () => unselectAll,
      unselectItem: () => unselectItem,
    });
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ =
      __turbopack_context__.i(
        '[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>'
      );
    const initialState = {
      items: [],
    };
    const selectedItemsSlice = (0,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__[
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
  '[project]/src/components/DetailsPage/DetailsPage.tsx [app-ssr] (ecmascript)':
    (__turbopack_context__) => {
      'use strict';

      __turbopack_context__.s({
        default: () => __TURBOPACK__default__export__,
      });
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_context__.i(
          '[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)'
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_context__.i(
          '[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)'
        );
      const DetailsPage = ({ universities, id, handleCloseDetailsPage }) => {
        if (!universities || universities.length === 0 || !id) {
          return /*#__PURE__*/ (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            'jsxDEV'
          ])(
            'p',
            {
              children: 'No university data available',
            },
            void 0,
            false,
            {
              fileName: '[project]/src/components/DetailsPage/DetailsPage.tsx',
              lineNumber: 23,
              columnNumber: 12,
            },
            ('TURBOPACK compile-time value', void 0)
          );
        }
        const selectedUniversity = universities.find((u) =>
          u.domains.includes(id)
        );
        if (!selectedUniversity) {
          (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            'notFound'
          ])();
        }
        return /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          'jsxDEV'
        ])(
          'div',
          {
            className: 'details-container',
            children: [
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                'jsxDEV'
              ])(
                'button',
                {
                  onClick: handleCloseDetailsPage,
                  className: 'close-details',
                  children: 'Close',
                },
                void 0,
                false,
                {
                  fileName:
                    '[project]/src/components/DetailsPage/DetailsPage.tsx',
                  lineNumber: 36,
                  columnNumber: 7,
                },
                ('TURBOPACK compile-time value', void 0)
              ),
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                'jsxDEV'
              ])(
                'h2',
                {
                  children: selectedUniversity.name,
                },
                void 0,
                false,
                {
                  fileName:
                    '[project]/src/components/DetailsPage/DetailsPage.tsx',
                  lineNumber: 39,
                  columnNumber: 7,
                },
                ('TURBOPACK compile-time value', void 0)
              ),
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                'jsxDEV'
              ])(
                'p',
                {
                  children: [
                    /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                      'jsxDEV'
                    ])(
                      'strong',
                      {
                        children: 'Country:',
                      },
                      void 0,
                      false,
                      {
                        fileName:
                          '[project]/src/components/DetailsPage/DetailsPage.tsx',
                        lineNumber: 41,
                        columnNumber: 9,
                      },
                      ('TURBOPACK compile-time value', void 0)
                    ),
                    ' ',
                    selectedUniversity.country,
                  ],
                },
                void 0,
                true,
                {
                  fileName:
                    '[project]/src/components/DetailsPage/DetailsPage.tsx',
                  lineNumber: 40,
                  columnNumber: 7,
                },
                ('TURBOPACK compile-time value', void 0)
              ),
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                'jsxDEV'
              ])(
                'p',
                {
                  children: [
                    /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                      'jsxDEV'
                    ])(
                      'strong',
                      {
                        children: 'Domains:',
                      },
                      void 0,
                      false,
                      {
                        fileName:
                          '[project]/src/components/DetailsPage/DetailsPage.tsx',
                        lineNumber: 44,
                        columnNumber: 9,
                      },
                      ('TURBOPACK compile-time value', void 0)
                    ),
                    ' ',
                    selectedUniversity.domains.join(', '),
                  ],
                },
                void 0,
                true,
                {
                  fileName:
                    '[project]/src/components/DetailsPage/DetailsPage.tsx',
                  lineNumber: 43,
                  columnNumber: 7,
                },
                ('TURBOPACK compile-time value', void 0)
              ),
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                'jsxDEV'
              ])(
                'p',
                {
                  children: [
                    /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                      'jsxDEV'
                    ])(
                      'strong',
                      {
                        children: 'Web Site:',
                      },
                      void 0,
                      false,
                      {
                        fileName:
                          '[project]/src/components/DetailsPage/DetailsPage.tsx',
                        lineNumber: 47,
                        columnNumber: 9,
                      },
                      ('TURBOPACK compile-time value', void 0)
                    ),
                    ' ',
                    /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                      'jsxDEV'
                    ])(
                      'a',
                      {
                        href: selectedUniversity.web_pages[0],
                        target: '_blank',
                        rel: 'noreferrer',
                        children: selectedUniversity.web_pages[0],
                      },
                      void 0,
                      false,
                      {
                        fileName:
                          '[project]/src/components/DetailsPage/DetailsPage.tsx',
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
                  fileName:
                    '[project]/src/components/DetailsPage/DetailsPage.tsx',
                  lineNumber: 46,
                  columnNumber: 7,
                },
                ('TURBOPACK compile-time value', void 0)
              ),
            ],
          },
          void 0,
          true,
          {
            fileName: '[project]/src/components/DetailsPage/DetailsPage.tsx',
            lineNumber: 35,
            columnNumber: 5,
          },
          ('TURBOPACK compile-time value', void 0)
        );
      };
      const __TURBOPACK__default__export__ = DetailsPage;
    },
  '[project]/src/utils/consts.tsx [app-ssr] (ecmascript)': (
    __turbopack_context__
  ) => {
    'use strict';

    __turbopack_context__.s({
      ITEM_PER_PAGE: () => ITEM_PER_PAGE,
      ThemeContext: () => ThemeContext,
    });
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)'
      );
    const ITEM_PER_PAGE = 15;
    const ThemeContext = /*#__PURE__*/ (0,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
      'createContext'
    ])({
      theme: 'light',
      toggleTheme: () => {},
    });
  },
  '[project]/src/components/ResultsContainer/ResultsContainer.tsx [app-ssr] (ecmascript)':
    (__turbopack_context__) => {
      'use strict';

      __turbopack_context__.s({
        default: () => __TURBOPACK__default__export__,
      });
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_context__.i(
          '[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)'
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_context__.i(
          '[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)'
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_context__.i(
          '[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)'
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_context__.i(
          '[project]/node_modules/react-redux/dist/react-redux.mjs [app-ssr] (ecmascript)'
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$university$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_context__.i(
          '[project]/src/services/university.tsx [app-ssr] (ecmascript)'
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$selectedItemsSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_context__.i(
          '[project]/src/store/selectedItemsSlice.ts [app-ssr] (ecmascript)'
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DetailsPage$2f$DetailsPage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_context__.i(
          '[project]/src/components/DetailsPage/DetailsPage.tsx [app-ssr] (ecmascript)'
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$searchSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_context__.i(
          '[project]/src/store/searchSlice.tsx [app-ssr] (ecmascript)'
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$consts$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_context__.i(
          '[project]/src/utils/consts.tsx [app-ssr] (ecmascript)'
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_context__.i(
          '[project]/node_modules/next/image.js [app-ssr] (ecmascript)'
        );
      const ResultsContainer = ({ currentPage, showDetails }) => {
        const searchTerm = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          'useSelector'
        ])((state) => state.search.searchTerm);
        const router = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          'useRouter'
        ])();
        const dispatch = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          'useDispatch'
        ])();
        const params = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          'useParams'
        ])();
        const id =
          params && typeof params.id === 'string' ? params.id : undefined;
        const selectedItems = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          'useSelector'
        ])((state) => state.selectedItems.items);
        const [searchKey, setSearchKey] = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          'useState'
        ])(0);
        const searchUniversitiesResult = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$university$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          'useSearchUniversitiesQuery'
        ])(
          {
            country: searchTerm,
            searchKey,
          },
          {
            refetchOnMountOrArgChange: true,
            skip: !searchTerm,
          }
        );
        const getUniversitiesResult = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$university$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          'useGetUniversitiesQuery'
        ])(undefined, {
          refetchOnMountOrArgChange: true,
          skip: !!searchTerm,
        });
        const universities =
          searchTerm && searchUniversitiesResult.data
            ? searchUniversitiesResult.data
            : getUniversitiesResult.data || [];
        const isLoading = searchTerm
          ? searchUniversitiesResult.isLoading
          : getUniversitiesResult.isLoading;
        const error = searchTerm
          ? searchUniversitiesResult.error
          : getUniversitiesResult.error;
        const refetch = searchTerm
          ? searchUniversitiesResult.refetch
          : getUniversitiesResult.refetch;
        const downloadLinkRef = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          'useRef'
        ])(null);
        const [customIsLoading, setCustomIsLoading] = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          'useState'
        ])(false);
        (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          'useEffect'
        ])(() => {
          const handler = () => {
            const term = localStorage.getItem('searchTerm') || '';
            (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$searchSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              'setSearchTerm'
            ])(term);
            setSearchKey((k) => k + 1);
          };
          window.addEventListener('searchTermUpdated', handler);
          return () => window.removeEventListener('searchTermUpdated', handler);
        }, []);
        const downloadCSV = (items) => {
          const csv = items
            .map((item) => `${item.name},${item.country},${item.web_pages[0]}`)
            .join('\n');
          const blob = new Blob([csv], {
            type: 'text/csv',
          });
          const url = URL.createObjectURL(blob);
          if (downloadLinkRef.current) {
            downloadLinkRef.current.href = url;
            downloadLinkRef.current.download = `${items.length}_items.csv`;
            downloadLinkRef.current.click();
            setTimeout(() => URL.revokeObjectURL(url), 100);
          }
        };
        const handleSelectUniversity = (university) => {
          router.push(`/${currentPage}/${university.domains[0]}`);
        };
        const handleCloseDetailsPage = () => {
          router.push(`/${currentPage}`);
        };
        const paginatedUniversities = universities.slice(
          (currentPage - 1) *
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$consts$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              'ITEM_PER_PAGE'
            ],
          currentPage *
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$consts$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              'ITEM_PER_PAGE'
            ]
        );
        const handleNextPage = () => {
          if (
            currentPage <
            Math.ceil(
              universities.length /
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$consts$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                  'ITEM_PER_PAGE'
                ]
            )
          ) {
            router.push(`/${currentPage + 1}`);
          }
        };
        const handlePreviousPage = () => {
          if (currentPage > 1) {
            router.push(`/${currentPage - 1}`);
          }
        };
        const handleRefresh = () => {
          setCustomIsLoading(true);
          setTimeout(() => setCustomIsLoading(false), 1000);
          refetch();
        };
        const renderUniversitiesList = () => {
          if (
            !Array.isArray(paginatedUniversities) ||
            paginatedUniversities.length === 0
          ) {
            return /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              'jsxDEV'
            ])(
              'div',
              {
                className: 'error-container',
                children: [
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                    'jsxDEV'
                  ])(
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                      'default'
                    ],
                    {
                      src: '/no-data.png',
                      alt: 'No data',
                    },
                    void 0,
                    false,
                    {
                      fileName:
                        '[project]/src/components/ResultsContainer/ResultsContainer.tsx',
                      lineNumber: 126,
                      columnNumber: 11,
                    },
                    ('TURBOPACK compile-time value', void 0)
                  ),
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                    'jsxDEV'
                  ])(
                    'p',
                    {
                      className: 'error-message',
                      children: 'No universities available to display.',
                    },
                    void 0,
                    false,
                    {
                      fileName:
                        '[project]/src/components/ResultsContainer/ResultsContainer.tsx',
                      lineNumber: 127,
                      columnNumber: 11,
                    },
                    ('TURBOPACK compile-time value', void 0)
                  ),
                ],
              },
              void 0,
              true,
              {
                fileName:
                  '[project]/src/components/ResultsContainer/ResultsContainer.tsx',
                lineNumber: 125,
                columnNumber: 9,
              },
              ('TURBOPACK compile-time value', void 0)
            );
          }
          return paginatedUniversities.map((university) => {
            const isSelected = selectedItems.some(
              (item) => item.domains[0] === university.domains[0]
            );
            return /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              'jsxDEV'
            ])(
              'div',
              {
                className: 'university-card',
                style: {
                  cursor: 'pointer',
                },
                onClick: (e) => {
                  if (e.target.closest('.select-checkbox')) return;
                  handleSelectUniversity(university);
                },
                children: [
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                    'jsxDEV'
                  ])(
                    'input',
                    {
                      type: 'checkbox',
                      className: 'select-checkbox',
                      checked: isSelected,
                      onClick: (e) => e.stopPropagation(),
                      onChange: (e) => {
                        if (e.target.checked)
                          dispatch(
                            (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$selectedItemsSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                              'selectItem'
                            ])(university)
                          );
                        else
                          dispatch(
                            (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$selectedItemsSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                              'unselectItem'
                            ])(university.domains[0])
                          );
                      },
                    },
                    void 0,
                    false,
                    {
                      fileName:
                        '[project]/src/components/ResultsContainer/ResultsContainer.tsx',
                      lineNumber: 146,
                      columnNumber: 11,
                    },
                    ('TURBOPACK compile-time value', void 0)
                  ),
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                    'jsxDEV'
                  ])(
                    'h3',
                    {
                      children: university.name,
                    },
                    void 0,
                    false,
                    {
                      fileName:
                        '[project]/src/components/ResultsContainer/ResultsContainer.tsx',
                      lineNumber: 156,
                      columnNumber: 11,
                    },
                    ('TURBOPACK compile-time value', void 0)
                  ),
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                    'jsxDEV'
                  ])(
                    'p',
                    {
                      children: [
                        /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                          'jsxDEV'
                        ])(
                          'strong',
                          {
                            children: 'Country:',
                          },
                          void 0,
                          false,
                          {
                            fileName:
                              '[project]/src/components/ResultsContainer/ResultsContainer.tsx',
                            lineNumber: 158,
                            columnNumber: 13,
                          },
                          ('TURBOPACK compile-time value', void 0)
                        ),
                        ' ',
                        university.country,
                      ],
                    },
                    void 0,
                    true,
                    {
                      fileName:
                        '[project]/src/components/ResultsContainer/ResultsContainer.tsx',
                      lineNumber: 157,
                      columnNumber: 11,
                    },
                    ('TURBOPACK compile-time value', void 0)
                  ),
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                    'jsxDEV'
                  ])(
                    'p',
                    {
                      children: [
                        /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                          'jsxDEV'
                        ])(
                          'strong',
                          {
                            children: 'Web Site:',
                          },
                          void 0,
                          false,
                          {
                            fileName:
                              '[project]/src/components/ResultsContainer/ResultsContainer.tsx',
                            lineNumber: 161,
                            columnNumber: 13,
                          },
                          ('TURBOPACK compile-time value', void 0)
                        ),
                        ' ',
                        /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                          'jsxDEV'
                        ])(
                          'a',
                          {
                            href: university.web_pages[0],
                            target: '_blank',
                            rel: 'noreferrer',
                            children: university.web_pages[0] || 'No Web Site',
                          },
                          void 0,
                          false,
                          {
                            fileName:
                              '[project]/src/components/ResultsContainer/ResultsContainer.tsx',
                            lineNumber: 162,
                            columnNumber: 13,
                          },
                          ('TURBOPACK compile-time value', void 0)
                        ),
                      ],
                    },
                    void 0,
                    true,
                    {
                      fileName:
                        '[project]/src/components/ResultsContainer/ResultsContainer.tsx',
                      lineNumber: 160,
                      columnNumber: 11,
                    },
                    ('TURBOPACK compile-time value', void 0)
                  ),
                ],
              },
              university.domains[0],
              true,
              {
                fileName:
                  '[project]/src/components/ResultsContainer/ResultsContainer.tsx',
                lineNumber: 137,
                columnNumber: 9,
              },
              ('TURBOPACK compile-time value', void 0)
            );
          });
        };
        if (isLoading || customIsLoading) {
          return /*#__PURE__*/ (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            'jsxDEV'
          ])(
            'div',
            {
              className: 'loader-container',
              children: /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                'jsxDEV'
              ])(
                'p',
                {
                  className: 'loader-message',
                  children: 'Loading universities, please wait...',
                },
                void 0,
                false,
                {
                  fileName:
                    '[project]/src/components/ResultsContainer/ResultsContainer.tsx',
                  lineNumber: 174,
                  columnNumber: 9,
                },
                ('TURBOPACK compile-time value', void 0)
              ),
            },
            void 0,
            false,
            {
              fileName:
                '[project]/src/components/ResultsContainer/ResultsContainer.tsx',
              lineNumber: 173,
              columnNumber: 7,
            },
            ('TURBOPACK compile-time value', void 0)
          );
        }
        return /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          'jsxDEV'
        ])(
          'div',
          {
            className: 'results-container',
            children: [
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                'jsxDEV'
              ])(
                'button',
                {
                  className: 'refresh-button',
                  onClick: handleRefresh,
                  style: {
                    marginLeft: '1rem',
                  },
                  children: /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                    'jsxDEV'
                  ])(
                    'i',
                    {
                      className: 'bi bi-arrow-clockwise',
                    },
                    void 0,
                    false,
                    {
                      fileName:
                        '[project]/src/components/ResultsContainer/ResultsContainer.tsx',
                      lineNumber: 186,
                      columnNumber: 9,
                    },
                    ('TURBOPACK compile-time value', void 0)
                  ),
                },
                void 0,
                false,
                {
                  fileName:
                    '[project]/src/components/ResultsContainer/ResultsContainer.tsx',
                  lineNumber: 181,
                  columnNumber: 7,
                },
                ('TURBOPACK compile-time value', void 0)
              ),
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                'jsxDEV'
              ])(
                'div',
                {
                  className: 'before-pagination',
                  children: [
                    /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                      'jsxDEV'
                    ])(
                      'div',
                      {
                        className: 'master-container',
                        children: error
                          ? /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                              'jsxDEV'
                            ])(
                              'p',
                              {
                                className: 'error-message',
                                children: String(error),
                              },
                              void 0,
                              false,
                              {
                                fileName:
                                  '[project]/src/components/ResultsContainer/ResultsContainer.tsx',
                                lineNumber: 191,
                                columnNumber: 13,
                              },
                              ('TURBOPACK compile-time value', void 0)
                            )
                          : renderUniversitiesList(),
                      },
                      void 0,
                      false,
                      {
                        fileName:
                          '[project]/src/components/ResultsContainer/ResultsContainer.tsx',
                        lineNumber: 189,
                        columnNumber: 9,
                      },
                      ('TURBOPACK compile-time value', void 0)
                    ),
                    id &&
                      showDetails &&
                      universities.length > 0 &&
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                        'jsxDEV'
                      ])(
                        'div',
                        {
                          className: 'details-panel',
                          children: /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                            'jsxDEV'
                          ])(
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DetailsPage$2f$DetailsPage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                              'default'
                            ],
                            {
                              universities: universities,
                              id: id,
                              handleCloseDetailsPage: handleCloseDetailsPage,
                            },
                            void 0,
                            false,
                            {
                              fileName:
                                '[project]/src/components/ResultsContainer/ResultsContainer.tsx',
                              lineNumber: 198,
                              columnNumber: 13,
                            },
                            ('TURBOPACK compile-time value', void 0)
                          ),
                        },
                        void 0,
                        false,
                        {
                          fileName:
                            '[project]/src/components/ResultsContainer/ResultsContainer.tsx',
                          lineNumber: 197,
                          columnNumber: 11,
                        },
                        ('TURBOPACK compile-time value', void 0)
                      ),
                  ],
                },
                void 0,
                true,
                {
                  fileName:
                    '[project]/src/components/ResultsContainer/ResultsContainer.tsx',
                  lineNumber: 188,
                  columnNumber: 7,
                },
                ('TURBOPACK compile-time value', void 0)
              ),
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                'jsxDEV'
              ])(
                'div',
                {
                  className: 'pagination-container',
                  children: [
                    /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                      'jsxDEV'
                    ])(
                      'button',
                      {
                        className: 'previous-button',
                        onClick: handlePreviousPage,
                        disabled: currentPage === 1,
                        children: 'Previous',
                      },
                      void 0,
                      false,
                      {
                        fileName:
                          '[project]/src/components/ResultsContainer/ResultsContainer.tsx',
                        lineNumber: 207,
                        columnNumber: 9,
                      },
                      ('TURBOPACK compile-time value', void 0)
                    ),
                    /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                      'jsxDEV'
                    ])(
                      'span',
                      {
                        className: 'pagination-info',
                        children: [
                          'Page ',
                          currentPage || 0,
                          ' of',
                          ' ',
                          Math.ceil(
                            universities.length /
                              __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$consts$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                'ITEM_PER_PAGE'
                              ]
                          ),
                        ],
                      },
                      void 0,
                      true,
                      {
                        fileName:
                          '[project]/src/components/ResultsContainer/ResultsContainer.tsx',
                        lineNumber: 214,
                        columnNumber: 9,
                      },
                      ('TURBOPACK compile-time value', void 0)
                    ),
                    /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                      'jsxDEV'
                    ])(
                      'button',
                      {
                        className: 'next-button',
                        onClick: handleNextPage,
                        disabled:
                          currentPage >=
                          Math.ceil(
                            universities.length /
                              __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$consts$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                'ITEM_PER_PAGE'
                              ]
                          ),
                        children: 'Next',
                      },
                      void 0,
                      false,
                      {
                        fileName:
                          '[project]/src/components/ResultsContainer/ResultsContainer.tsx',
                        lineNumber: 218,
                        columnNumber: 9,
                      },
                      ('TURBOPACK compile-time value', void 0)
                    ),
                  ],
                },
                void 0,
                true,
                {
                  fileName:
                    '[project]/src/components/ResultsContainer/ResultsContainer.tsx',
                  lineNumber: 206,
                  columnNumber: 7,
                },
                ('TURBOPACK compile-time value', void 0)
              ),
              selectedItems.length > 0 &&
                /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                  'jsxDEV'
                ])(
                  'div',
                  {
                    className: 'flyout',
                    children: [
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                        'jsxDEV'
                      ])(
                        'span',
                        {
                          children: [
                            selectedItems.length,
                            ' items are selected',
                          ],
                        },
                        void 0,
                        true,
                        {
                          fileName:
                            '[project]/src/components/ResultsContainer/ResultsContainer.tsx',
                          lineNumber: 230,
                          columnNumber: 11,
                        },
                        ('TURBOPACK compile-time value', void 0)
                      ),
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                        'jsxDEV'
                      ])(
                        'button',
                        {
                          onClick: () =>
                            dispatch(
                              (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$selectedItemsSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                'unselectAll'
                              ])()
                            ),
                          children: 'Unselect all',
                        },
                        void 0,
                        false,
                        {
                          fileName:
                            '[project]/src/components/ResultsContainer/ResultsContainer.tsx',
                          lineNumber: 231,
                          columnNumber: 11,
                        },
                        ('TURBOPACK compile-time value', void 0)
                      ),
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                        'jsxDEV'
                      ])(
                        'button',
                        {
                          onClick: () => downloadCSV(selectedItems),
                          children: 'Download',
                        },
                        void 0,
                        false,
                        {
                          fileName:
                            '[project]/src/components/ResultsContainer/ResultsContainer.tsx',
                          lineNumber: 232,
                          columnNumber: 11,
                        },
                        ('TURBOPACK compile-time value', void 0)
                      ),
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                        'jsxDEV'
                      ])(
                        'a',
                        {
                          ref: downloadLinkRef,
                          style: {
                            display: 'none',
                          },
                          children: 'Download',
                        },
                        void 0,
                        false,
                        {
                          fileName:
                            '[project]/src/components/ResultsContainer/ResultsContainer.tsx',
                          lineNumber: 233,
                          columnNumber: 11,
                        },
                        ('TURBOPACK compile-time value', void 0)
                      ),
                    ],
                  },
                  void 0,
                  true,
                  {
                    fileName:
                      '[project]/src/components/ResultsContainer/ResultsContainer.tsx',
                    lineNumber: 229,
                    columnNumber: 9,
                  },
                  ('TURBOPACK compile-time value', void 0)
                ),
            ],
          },
          void 0,
          true,
          {
            fileName:
              '[project]/src/components/ResultsContainer/ResultsContainer.tsx',
            lineNumber: 180,
            columnNumber: 5,
          },
          ('TURBOPACK compile-time value', void 0)
        );
      };
      const __TURBOPACK__default__export__ = ResultsContainer;
    },
  '[project]/src/components/MainContainer/MainContainer.tsx [app-ssr] (ecmascript)':
    (__turbopack_context__) => {
      'use strict';

      __turbopack_context__.s({
        default: () => __TURBOPACK__default__export__,
      });
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_context__.i(
          '[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)'
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_context__.i(
          '[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)'
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_context__.i(
          '[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)'
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_context__.i(
          '[project]/node_modules/react-redux/dist/react-redux.mjs [app-ssr] (ecmascript)'
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$searchSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_context__.i(
          '[project]/src/store/searchSlice.tsx [app-ssr] (ecmascript)'
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SearchContainer$2f$SearchContainer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_context__.i(
          '[project]/src/components/SearchContainer/SearchContainer.tsx [app-ssr] (ecmascript)'
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ResultsContainer$2f$ResultsContainer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_context__.i(
          '[project]/src/components/ResultsContainer/ResultsContainer.tsx [app-ssr] (ecmascript)'
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_context__.i(
          '[project]/node_modules/next/image.js [app-ssr] (ecmascript)'
        );
      ('use client');
      const MainContainer = () => {
        const params = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          'useParams'
        ])();
        const currentPage = parseInt(params?.page || '1', 10);
        const showDetails = !!params?.id;
        const dispatch = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          'useDispatch'
        ])();
        const searchTerm = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          'useSelector'
        ])((state) => state.search.searchTerm);
        (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          'useEffect'
        ])(() => {
          if (!searchTerm) {
            const term = localStorage.getItem('searchTerm') || '';
            dispatch(
              (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$searchSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                'setSearchTerm'
              ])(term)
            );
          }
        }, [dispatch, searchTerm]);
        if (isNaN(currentPage) || currentPage < 1) {
          return (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            'notFound'
          ])();
        }
        return /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          'jsxDEV'
        ])(
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            'Fragment'
          ],
          {
            children: [
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                'jsxDEV'
              ])(
                'div',
                {
                  className: 'main-container',
                  children: [
                    /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                      'jsxDEV'
                    ])(
                      'p',
                      {
                        className: 'app-description',
                        children: [
                          'Discover universities around the world! ',
                          /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                            'jsxDEV'
                          ])(
                            'br',
                            {},
                            void 0,
                            false,
                            {
                              fileName:
                                '[project]/src/components/MainContainer/MainContainer.tsx',
                              lineNumber: 35,
                              columnNumber: 51,
                            },
                            ('TURBOPACK compile-time value', void 0)
                          ),
                          'Enter the ',
                          /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                            'jsxDEV'
                          ])(
                            'strong',
                            {
                              children: 'full',
                            },
                            void 0,
                            false,
                            {
                              fileName:
                                '[project]/src/components/MainContainer/MainContainer.tsx',
                              lineNumber: 36,
                              columnNumber: 21,
                            },
                            ('TURBOPACK compile-time value', void 0)
                          ),
                          ' name of a country and browse institutions easily.',
                        ],
                      },
                      void 0,
                      true,
                      {
                        fileName:
                          '[project]/src/components/MainContainer/MainContainer.tsx',
                        lineNumber: 34,
                        columnNumber: 9,
                      },
                      ('TURBOPACK compile-time value', void 0)
                    ),
                    /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                      'jsxDEV'
                    ])(
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                        'default'
                      ],
                      {
                        src: '/graduation.png',
                        alt: 'graduation',
                        width: 700,
                        height: 250,
                      },
                      void 0,
                      false,
                      {
                        fileName:
                          '[project]/src/components/MainContainer/MainContainer.tsx',
                        lineNumber: 39,
                        columnNumber: 9,
                      },
                      ('TURBOPACK compile-time value', void 0)
                    ),
                  ],
                },
                void 0,
                true,
                {
                  fileName:
                    '[project]/src/components/MainContainer/MainContainer.tsx',
                  lineNumber: 33,
                  columnNumber: 7,
                },
                ('TURBOPACK compile-time value', void 0)
              ),
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                'jsxDEV'
              ])(
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SearchContainer$2f$SearchContainer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                  'SearchContainer'
                ],
                {},
                void 0,
                false,
                {
                  fileName:
                    '[project]/src/components/MainContainer/MainContainer.tsx',
                  lineNumber: 46,
                  columnNumber: 7,
                },
                ('TURBOPACK compile-time value', void 0)
              ),
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                'jsxDEV'
              ])(
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ResultsContainer$2f$ResultsContainer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                  'default'
                ],
                {
                  currentPage: currentPage,
                  showDetails: showDetails,
                },
                void 0,
                false,
                {
                  fileName:
                    '[project]/src/components/MainContainer/MainContainer.tsx',
                  lineNumber: 47,
                  columnNumber: 7,
                },
                ('TURBOPACK compile-time value', void 0)
              ),
            ],
          },
          void 0,
          true
        );
      };
      const __TURBOPACK__default__export__ = MainContainer;
    },
  '[project]/app/[page]/page.tsx [app-ssr] (ecmascript)': (
    __turbopack_context__
  ) => {
    'use strict';

    __turbopack_context__.s({
      default: () => __TURBOPACK__default__export__,
    });
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)'
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainContainer$2f$MainContainer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/src/components/MainContainer/MainContainer.tsx [app-ssr] (ecmascript)'
      );
    ('use client');
    const PaginatedResultsPage = () => {
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        'jsxDEV'
      ])(
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainContainer$2f$MainContainer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          'default'
        ],
        {},
        void 0,
        false,
        {
          fileName: '[project]/app/[page]/page.tsx',
          lineNumber: 6,
          columnNumber: 10,
        },
        ('TURBOPACK compile-time value', void 0)
      );
    };
    const __TURBOPACK__default__export__ = PaginatedResultsPage;
  },
};

//# sourceMappingURL=%5Broot-of-the-server%5D__9e7ef0c3._.js.map
