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
  '[project]/app/[locale]/[page]/layout.tsx [app-rsc] (ecmascript)': (
    __turbopack_context__
  ) => {
    'use strict';

    __turbopack_context__.s({
      default: () => ResultsLayout,
    });
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)'
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$store$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/src/store/store.ts [app-rsc] (ecmascript)'
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$rsc$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/node_modules/react-redux/dist/rsc.mjs [app-rsc] (ecmascript)'
      );
    function ResultsLayout({ children, params }) {
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
        'jsxDEV'
      ])(
        'html',
        {
          lang: params.locale,
          children: /*#__PURE__*/ (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
            'jsxDEV'
          ])(
            'body',
            {
              children: /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'jsxDEV'
              ])(
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$rsc$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                  'Provider'
                ],
                {
                  store:
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$store$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                      'store'
                    ],
                  children: /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                    'jsxDEV'
                  ])(
                    'main',
                    {
                      children: children,
                    },
                    void 0,
                    false,
                    {
                      fileName: '[project]/app/[locale]/[page]/layout.tsx',
                      lineNumber: 16,
                      columnNumber: 11,
                    },
                    this
                  ),
                },
                void 0,
                false,
                {
                  fileName: '[project]/app/[locale]/[page]/layout.tsx',
                  lineNumber: 15,
                  columnNumber: 9,
                },
                this
              ),
            },
            void 0,
            false,
            {
              fileName: '[project]/app/[locale]/[page]/layout.tsx',
              lineNumber: 14,
              columnNumber: 7,
            },
            this
          ),
        },
        void 0,
        false,
        {
          fileName: '[project]/app/[locale]/[page]/layout.tsx',
          lineNumber: 13,
          columnNumber: 5,
        },
        this
      );
    }
  },
};

//# sourceMappingURL=_5019f0e5._.js.map
