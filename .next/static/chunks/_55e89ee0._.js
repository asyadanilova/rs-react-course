(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([
  typeof document === 'object' ? document.currentScript : undefined,
  {
    '[project]/src/components/SearchContainer/SearchContainer.tsx [app-client] (ecmascript)':
      (__turbopack_context__) => {
        'use strict';

        var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
        {
          __turbopack_context__.s({
            SearchContainer: () => SearchContainer,
          });
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              '[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)'
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              '[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)'
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              '[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)'
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$searchSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              '[project]/src/store/searchSlice.tsx [app-client] (ecmascript)'
            );
          var _s = __turbopack_context__.k.signature();
          ('use client');
          const SearchContainer = () => {
            _s();
            const dispatch = (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'useDispatch'
            ])();
            const searchTerm = (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'useSelector'
            ])(
              {
                'SearchContainer.useSelector[searchTerm]': (state) =>
                  state.search.searchTerm,
              }['SearchContainer.useSelector[searchTerm]']
            );
            const [inputTerm, setInputTerm] = (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
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
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$searchSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  'setSearchTerm'
                ])(normalizedTerm)
              );
              window.dispatchEvent(new Event('searchTermUpdated'));
            };
            return /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'jsxDEV'
            ])(
              'div',
              {
                className: 'search',
                children: [
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    'jsxDEV'
                  ])(
                    'div',
                    {
                      className: 'search__input',
                      children: /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
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
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    'jsxDEV'
                  ])(
                    'div',
                    {
                      className: 'search__button',
                      children: /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        'jsxDEV'
                      ])(
                        'button',
                        {
                          className: 'button',
                          onClick: handleSearch,
                          children: [
                            'Search ',
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
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
          _s(
            SearchContainer,
            'cupBg3KmldDZYBFcqHDZXOjmoQg=',
            false,
            function () {
              return [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  'useDispatch'
                ],
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  'useSelector'
                ],
              ];
            }
          );
          _c = SearchContainer;
          var _c;
          __turbopack_context__.k.register(_c, 'SearchContainer');
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
    '[project]/src/components/ResultsContainer/ResultsContainer.tsx [app-client] (ecmascript)':
      (__turbopack_context__) => {
        'use strict';

        var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
        {
          __turbopack_context__.s({
            default: () => __TURBOPACK__default__export__,
          });
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              '[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)'
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              '[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)'
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              '[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)'
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$university$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              '[project]/src/services/university.tsx [app-client] (ecmascript)'
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$selectedItemsSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              '[project]/src/store/selectedItemsSlice.ts [app-client] (ecmascript)'
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$searchSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              '[project]/src/store/searchSlice.tsx [app-client] (ecmascript)'
            );
          var _s = __turbopack_context__.k.signature();
          const ITEM_PER_PAGE = 10;
          const ResultsContainer = () => {
            _s();
            const dispatch = (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'useDispatch'
            ])();
            const { searchTerm, currentPage } = (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'useSelector'
            ])(
              {
                'ResultsContainer.useSelector': (state) => state.search,
              }['ResultsContainer.useSelector']
            );
            const {
              data: universities = [],
              refetch,
              isLoading,
            } = (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$university$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'useSearchUniversitiesQuery'
            ])({
              country: searchTerm,
              searchKey: currentPage,
            });
            const downloadLinkRef = (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'useRef'
            ])(null);
            const [customIsLoading, setCustomIsLoading] = (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'useState'
            ])(false);
            (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'useEffect'
            ])(
              {
                'ResultsContainer.useEffect': () => {
                  if (universities) {
                    dispatch(
                      (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$searchSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        'setUniversities'
                      ])(universities)
                    );
                  }
                },
              }['ResultsContainer.useEffect'],
              [universities, dispatch]
            );
            const downloadCSV = (items) => {
              const csv = items
                .map((item) =>
                  ''
                    .concat(item.name, ',')
                    .concat(item.country, ',')
                    .concat(item.web_pages[0])
                )
                .join('\n');
              const blob = new Blob([csv], {
                type: 'text/csv',
              });
              const url = URL.createObjectURL(blob);
              if (downloadLinkRef.current) {
                downloadLinkRef.current.href = url;
                downloadLinkRef.current.download = ''.concat(
                  items.length,
                  '_items.csv'
                );
                downloadLinkRef.current.click();
                setTimeout(() => URL.revokeObjectURL(url), 100);
              }
            };
            const handleSelectUniversity = (university) => {
              dispatch({
                type: 'search/setSelectedUniversity',
                payload: university,
              });
            };
            const handleCloseDetailsPage = () => {
              dispatch({
                type: 'search/setCurrentPage',
                payload: currentPage,
              });
            };
            const handleNextPage = () => {
              dispatch({
                type: 'search/setCurrentPage',
                payload: currentPage + 1,
              });
            };
            const handlePreviousPage = () => {
              if (currentPage > 1) {
                dispatch({
                  type: 'search/setCurrentPage',
                  payload: currentPage - 1,
                });
              }
            };
            const handleRefresh = () => {
              setCustomIsLoading(true);
              setTimeout(() => setCustomIsLoading(false), 1000);
              refetch();
            };
            if (isLoading || customIsLoading) {
              return /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'jsxDEV'
              ])(
                'div',
                {
                  className: 'loader-container',
                  children: /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
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
                      lineNumber: 81,
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
                  lineNumber: 80,
                  columnNumber: 7,
                },
                ('TURBOPACK compile-time value', void 0)
              );
            }
            const isSelected =
              __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$selectedItemsSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'selectItem'
              ].some((item) => item.domains[0] === universities[0].domains[0]);
            return /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'jsxDEV'
            ])(
              'div',
              {
                className: 'results-container',
                children: [
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    'jsxDEV'
                  ])(
                    'button',
                    {
                      className: 'refresh-page',
                      onClick: handleRefresh,
                      children: /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
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
                          lineNumber: 93,
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
                      lineNumber: 92,
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
                      className: 'university-list',
                      children: universities.map((university) =>
                        /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
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
                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
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
                                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$selectedItemsSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                          'selectItem'
                                        ])(university)
                                      );
                                    else
                                      dispatch(
                                        (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$selectedItemsSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
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
                                  lineNumber: 106,
                                  columnNumber: 13,
                                },
                                ('TURBOPACK compile-time value', void 0)
                              ),
                              /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
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
                                  lineNumber: 116,
                                  columnNumber: 13,
                                },
                                ('TURBOPACK compile-time value', void 0)
                              ),
                              /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                'jsxDEV'
                              ])(
                                'p',
                                {
                                  children: [
                                    /*#__PURE__*/ (0,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
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
                                        lineNumber: 118,
                                        columnNumber: 15,
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
                                  lineNumber: 117,
                                  columnNumber: 13,
                                },
                                ('TURBOPACK compile-time value', void 0)
                              ),
                              /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                'jsxDEV'
                              ])(
                                'p',
                                {
                                  children: [
                                    /*#__PURE__*/ (0,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
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
                                        lineNumber: 121,
                                        columnNumber: 15,
                                      },
                                      ('TURBOPACK compile-time value', void 0)
                                    ),
                                    ' ',
                                    /*#__PURE__*/ (0,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                      'jsxDEV'
                                    ])(
                                      'a',
                                      {
                                        href: university.web_pages[0],
                                        target: '_blank',
                                        rel: 'noreferrer',
                                        children:
                                          university.web_pages[0] ||
                                          'No Web Site',
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName:
                                          '[project]/src/components/ResultsContainer/ResultsContainer.tsx',
                                        lineNumber: 122,
                                        columnNumber: 15,
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
                                  lineNumber: 120,
                                  columnNumber: 13,
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
                            lineNumber: 97,
                            columnNumber: 11,
                          },
                          ('TURBOPACK compile-time value', void 0)
                        )
                      ),
                    },
                    void 0,
                    false,
                    {
                      fileName:
                        '[project]/src/components/ResultsContainer/ResultsContainer.tsx',
                      lineNumber: 95,
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
                      className: 'pagination-controls',
                      children: [
                        /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                          'jsxDEV'
                        ])(
                          'button',
                          {
                            onClick: handlePreviousPage,
                            disabled: currentPage === 1,
                            children: 'Previous',
                          },
                          void 0,
                          false,
                          {
                            fileName:
                              '[project]/src/components/ResultsContainer/ResultsContainer.tsx',
                            lineNumber: 134,
                            columnNumber: 9,
                          },
                          ('TURBOPACK compile-time value', void 0)
                        ),
                        /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                          'jsxDEV'
                        ])(
                          'button',
                          {
                            onClick: handleNextPage,
                            children: 'Next',
                          },
                          void 0,
                          false,
                          {
                            fileName:
                              '[project]/src/components/ResultsContainer/ResultsContainer.tsx',
                            lineNumber: 137,
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
                      lineNumber: 133,
                      columnNumber: 7,
                    },
                    ('TURBOPACK compile-time value', void 0)
                  ),
                  selectedItems.length > 0 &&
                    /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                      'jsxDEV'
                    ])(
                      'div',
                      {
                        className: 'flyout',
                        children: [
                          /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
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
                              lineNumber: 141,
                              columnNumber: 11,
                            },
                            ('TURBOPACK compile-time value', void 0)
                          ),
                          /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                            'jsxDEV'
                          ])(
                            'button',
                            {
                              onClick: () =>
                                dispatch(
                                  (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$selectedItemsSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
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
                              lineNumber: 142,
                              columnNumber: 11,
                            },
                            ('TURBOPACK compile-time value', void 0)
                          ),
                          /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
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
                              lineNumber: 143,
                              columnNumber: 11,
                            },
                            ('TURBOPACK compile-time value', void 0)
                          ),
                          /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
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
                              lineNumber: 144,
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
                        lineNumber: 140,
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
                lineNumber: 91,
                columnNumber: 5,
              },
              ('TURBOPACK compile-time value', void 0)
            );
          };
          _s(
            ResultsContainer,
            '2dS1hckzhurBdLGmj1Dli5MaqfE=',
            false,
            function () {
              return [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  'useDispatch'
                ],
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  'useSelector'
                ],
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$university$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  'useSearchUniversitiesQuery'
                ],
              ];
            }
          );
          _c = ResultsContainer;
          const __TURBOPACK__default__export__ = ResultsContainer;
          var _c;
          __turbopack_context__.k.register(_c, 'ResultsContainer');
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
    '[project]/src/components/MainContainer/MainContainer.tsx [app-client] (ecmascript)':
      (__turbopack_context__) => {
        'use strict';

        var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
        {
          __turbopack_context__.s({
            default: () => __TURBOPACK__default__export__,
          });
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              '[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)'
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              '[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)'
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              '[project]/node_modules/next/navigation.js [app-client] (ecmascript)'
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SearchContainer$2f$SearchContainer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              '[project]/src/components/SearchContainer/SearchContainer.tsx [app-client] (ecmascript)'
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ResultsContainer$2f$ResultsContainer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              '[project]/src/components/ResultsContainer/ResultsContainer.tsx [app-client] (ecmascript)'
            );
          var _s = __turbopack_context__.k.signature();
          ('use client');
          const MainContainer = () => {
            _s();
            const params = (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'useParams'
            ])();
            const currentPage = parseInt(
              (params === null || params === void 0 ? void 0 : params.page) ||
                '1',
              10
            );
            const showDetails = !!(params === null || params === void 0
              ? void 0
              : params.id);
            const [searchTerm, setSearchTerm] = (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'useState'
            ])('');
            (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'useEffect'
            ])(
              {
                'MainContainer.useEffect': () => {
                  const term = localStorage.getItem('searchTerm') || '';
                  setSearchTerm(term);
                },
              }['MainContainer.useEffect'],
              []
            );
            return /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'jsxDEV'
            ])(
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'Fragment'
              ],
              {
                children: [
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    'jsxDEV'
                  ])(
                    'div',
                    {
                      className: 'main-container',
                      children: [
                        /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                          'jsxDEV'
                        ])(
                          'p',
                          {
                            className: 'app-description',
                            children: [
                              'Discover universities around the world! ',
                              /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                'jsxDEV'
                              ])(
                                'br',
                                {},
                                void 0,
                                false,
                                {
                                  fileName:
                                    '[project]/src/components/MainContainer/MainContainer.tsx',
                                  lineNumber: 24,
                                  columnNumber: 51,
                                },
                                ('TURBOPACK compile-time value', void 0)
                              ),
                              'Enter the ',
                              /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
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
                                  lineNumber: 25,
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
                            lineNumber: 23,
                            columnNumber: 9,
                          },
                          ('TURBOPACK compile-time value', void 0)
                        ),
                        /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                          'jsxDEV'
                        ])(
                          'img',
                          {
                            src: '/graduation.png',
                            alt: 'graduation',
                          },
                          void 0,
                          false,
                          {
                            fileName:
                              '[project]/src/components/MainContainer/MainContainer.tsx',
                            lineNumber: 28,
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
                      lineNumber: 22,
                      columnNumber: 7,
                    },
                    ('TURBOPACK compile-time value', void 0)
                  ),
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    'jsxDEV'
                  ])(
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SearchContainer$2f$SearchContainer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                      'SearchContainer'
                    ],
                    {},
                    void 0,
                    false,
                    {
                      fileName:
                        '[project]/src/components/MainContainer/MainContainer.tsx',
                      lineNumber: 30,
                      columnNumber: 7,
                    },
                    ('TURBOPACK compile-time value', void 0)
                  ),
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    'jsxDEV'
                  ])(
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ResultsContainer$2f$ResultsContainer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                      'default'
                    ],
                    {
                      currentPage: currentPage,
                      searchTerm: searchTerm || '',
                      showDetails: showDetails,
                    },
                    void 0,
                    false,
                    {
                      fileName:
                        '[project]/src/components/MainContainer/MainContainer.tsx',
                      lineNumber: 31,
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
          _s(MainContainer, 'yg010FQAuP2g7jp3uU10BcpXloQ=', false, function () {
            return [
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'useParams'
              ],
            ];
          });
          _c = MainContainer;
          const __TURBOPACK__default__export__ = MainContainer;
          var _c;
          __turbopack_context__.k.register(_c, 'MainContainer');
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
    '[project]/app/page.tsx [app-client] (ecmascript)': (
      __turbopack_context__
    ) => {
      'use strict';

      var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
      {
        __turbopack_context__.s({
          default: () => HomePage,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            '[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)'
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainContainer$2f$MainContainer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            '[project]/src/components/MainContainer/MainContainer.tsx [app-client] (ecmascript)'
          );
        ('use client');
        function HomePage() {
          return /*#__PURE__*/ (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            'jsxDEV'
          ])(
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainContainer$2f$MainContainer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'default'
            ],
            {},
            void 0,
            false,
            {
              fileName: '[project]/app/page.tsx',
              lineNumber: 6,
              columnNumber: 10,
            },
            this
          );
        }
        _c = HomePage;
        var _c;
        __turbopack_context__.k.register(_c, 'HomePage');
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
    '[project]/node_modules/next/navigation.js [app-client] (ecmascript)': (
      __turbopack_context__
    ) => {
      var { m: module, e: exports } = __turbopack_context__;
      {
        module.exports = __turbopack_context__.r(
          '[project]/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)'
        );
      }
    },
  },
]);

//# sourceMappingURL=_55e89ee0._.js.map
