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
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              '[project]/node_modules/next/navigation.js [app-client] (ecmascript)'
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              '[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)'
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$university$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              '[project]/src/services/university.tsx [app-client] (ecmascript)'
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ErrorBoundary$2f$ErrorBoundary$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              '[project]/src/components/ErrorBoundary/ErrorBoundary.tsx [app-client] (ecmascript)'
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$selectedItemsSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              '[project]/src/store/selectedItemsSlice.ts [app-client] (ecmascript)'
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$QMGIS6GS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              '[project]/node_modules/react-router/dist/development/chunk-QMGIS6GS.mjs [app-client] (ecmascript)'
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$searchSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              '[project]/src/store/searchSlice.tsx [app-client] (ecmascript)'
            );
          var _s = __turbopack_context__.k.signature();
          const ITEM_PER_PAGE = 10;
          const ResultsContainer = (param) => {
            let { currentPage, showDetails } = param;
            _s();
            const searchTerm = (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'useSelector'
            ])(
              {
                'ResultsContainer.useSelector[searchTerm]': (state) =>
                  state.search.searchTerm,
              }['ResultsContainer.useSelector[searchTerm]']
            );
            const router = (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'useRouter'
            ])();
            const dispatch = (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'useDispatch'
            ])();
            const params = (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'useParams'
            ])();
            const id =
              params === null || params === void 0 ? void 0 : params.id;
            currentPage = parseInt(
              (params === null || params === void 0 ? void 0 : params.page) ||
                '1',
              10
            );
            const selectedItems = (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'useSelector'
            ])(
              {
                'ResultsContainer.useSelector[selectedItems]': (state) =>
                  state.selectedItems.items,
              }['ResultsContainer.useSelector[selectedItems]']
            );
            const [searchKey, setSearchKey] = (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'useState'
            ])(0);
            const {
              data: universities = [],
              isLoading,
              error,
              refetch,
            } = (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$university$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'useSearchUniversitiesQuery'
            ])(
              {
                country: searchTerm,
                searchKey,
              },
              {
                refetchOnMountOrArgChange: true,
              }
            );
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
                  const handler = {
                    'ResultsContainer.useEffect.handler': () => {
                      const term = localStorage.getItem('searchTerm') || '';
                      (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$searchSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        'setSearchTerm'
                      ])(term);
                      setSearchKey(
                        {
                          'ResultsContainer.useEffect.handler': (k) => k + 1,
                        }['ResultsContainer.useEffect.handler']
                      );
                    },
                  }['ResultsContainer.useEffect.handler'];
                  window.addEventListener('searchTermUpdated', handler);
                  return {
                    'ResultsContainer.useEffect': () =>
                      window.removeEventListener('searchTermUpdated', handler),
                  }['ResultsContainer.useEffect'];
                },
              }['ResultsContainer.useEffect'],
              []
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
              router.push(
                '/'.concat(currentPage, '/').concat(university.domains[0])
              );
            };
            const handleCloseDetailsPage = () => {
              router.push('/'.concat(currentPage));
            };
            const paginatedUniversities = universities.slice(
              (currentPage - 1) * ITEM_PER_PAGE,
              currentPage * ITEM_PER_PAGE
            );
            const handleNextPage = () => {
              if (
                currentPage < Math.ceil(universities.length / ITEM_PER_PAGE)
              ) {
                router.push('/'.concat(currentPage + 1));
              }
            };
            const handlePreviousPage = () => {
              if (currentPage > 1) {
                router.push('/'.concat(currentPage - 1));
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
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  'jsxDEV'
                ])(
                  'div',
                  {
                    className: 'error-container',
                    children: [
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        'jsxDEV'
                      ])(
                        'img',
                        {
                          src: '/no-data.png',
                          alt: 'No data',
                        },
                        void 0,
                        false,
                        {
                          fileName:
                            '[project]/src/components/ResultsContainer/ResultsContainer.tsx',
                          lineNumber: 110,
                          columnNumber: 11,
                        },
                        ('TURBOPACK compile-time value', void 0)
                      ),
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
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
                          lineNumber: 111,
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
                    lineNumber: 109,
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
                          lineNumber: 130,
                          columnNumber: 11,
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
                          lineNumber: 140,
                          columnNumber: 11,
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
                                lineNumber: 142,
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
                          lineNumber: 141,
                          columnNumber: 11,
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
                                lineNumber: 145,
                                columnNumber: 13,
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
                                  university.web_pages[0] || 'No Web Site',
                              },
                              void 0,
                              false,
                              {
                                fileName:
                                  '[project]/src/components/ResultsContainer/ResultsContainer.tsx',
                                lineNumber: 146,
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
                          lineNumber: 144,
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
                    lineNumber: 121,
                    columnNumber: 9,
                  },
                  ('TURBOPACK compile-time value', void 0)
                );
              });
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
                      lineNumber: 158,
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
                  lineNumber: 157,
                  columnNumber: 7,
                },
                ('TURBOPACK compile-time value', void 0)
              );
            }
            return /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'jsxDEV'
            ])(
              __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ErrorBoundary$2f$ErrorBoundary$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'ErrorBoundary'
              ],
              {
                children: /*#__PURE__*/ (0,
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
                          className: 'refresh-button',
                          onClick: handleRefresh,
                          style: {
                            marginLeft: '1rem',
                          },
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
                              lineNumber: 171,
                              columnNumber: 11,
                            },
                            ('TURBOPACK compile-time value', void 0)
                          ),
                        },
                        void 0,
                        false,
                        {
                          fileName:
                            '[project]/src/components/ResultsContainer/ResultsContainer.tsx',
                          lineNumber: 166,
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
                          className: 'before-pagination',
                          children: [
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              'jsxDEV'
                            ])(
                              'div',
                              {
                                className: 'master-container',
                                children: error
                                  ? /*#__PURE__*/ (0,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
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
                                        lineNumber: 176,
                                        columnNumber: 15,
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
                                lineNumber: 174,
                                columnNumber: 11,
                              },
                              ('TURBOPACK compile-time value', void 0)
                            ),
                            id &&
                              showDetails &&
                              universities.length > 0 &&
                              /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                'jsxDEV'
                              ])(
                                'div',
                                {
                                  className: 'details-panel',
                                  children: /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                    'jsxDEV'
                                  ])(
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$QMGIS6GS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                      'Outlet'
                                    ],
                                    {
                                      context: {
                                        universities,
                                        handleCloseDetailsPage,
                                      },
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName:
                                        '[project]/src/components/ResultsContainer/ResultsContainer.tsx',
                                      lineNumber: 183,
                                      columnNumber: 15,
                                    },
                                    ('TURBOPACK compile-time value', void 0)
                                  ),
                                },
                                void 0,
                                false,
                                {
                                  fileName:
                                    '[project]/src/components/ResultsContainer/ResultsContainer.tsx',
                                  lineNumber: 182,
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
                          lineNumber: 173,
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
                          className: 'pagination-container',
                          children: [
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
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
                                lineNumber: 188,
                                columnNumber: 11,
                              },
                              ('TURBOPACK compile-time value', void 0)
                            ),
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              'jsxDEV'
                            ])(
                              'span',
                              {
                                className: 'pagination-info',
                                children: [
                                  'Page ',
                                  currentPage,
                                  ' of',
                                  ' ',
                                  Math.ceil(
                                    universities.length / ITEM_PER_PAGE
                                  ),
                                ],
                              },
                              void 0,
                              true,
                              {
                                fileName:
                                  '[project]/src/components/ResultsContainer/ResultsContainer.tsx',
                                lineNumber: 195,
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
                                className: 'next-button',
                                onClick: handleNextPage,
                                disabled:
                                  currentPage >=
                                  Math.ceil(
                                    universities.length / ITEM_PER_PAGE
                                  ),
                                children: 'Next',
                              },
                              void 0,
                              false,
                              {
                                fileName:
                                  '[project]/src/components/ResultsContainer/ResultsContainer.tsx',
                                lineNumber: 199,
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
                          lineNumber: 187,
                          columnNumber: 9,
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
                                  lineNumber: 211,
                                  columnNumber: 13,
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
                                  lineNumber: 212,
                                  columnNumber: 13,
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
                                  lineNumber: 215,
                                  columnNumber: 13,
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
                                  lineNumber: 216,
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
                            lineNumber: 210,
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
                    lineNumber: 165,
                    columnNumber: 7,
                  },
                  ('TURBOPACK compile-time value', void 0)
                ),
              },
              void 0,
              false,
              {
                fileName:
                  '[project]/src/components/ResultsContainer/ResultsContainer.tsx',
                lineNumber: 164,
                columnNumber: 5,
              },
              ('TURBOPACK compile-time value', void 0)
            );
          };
          _s(
            ResultsContainer,
            'rfu5UDJC7EgvKHME0lfop0+8J6g=',
            false,
            function () {
              return [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  'useSelector'
                ],
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  'useRouter'
                ],
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  'useDispatch'
                ],
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  'useParams'
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
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              '[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)'
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$searchSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              '[project]/src/store/searchSlice.tsx [app-client] (ecmascript)'
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
            const dispatch = (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'useDispatch'
            ])();
            const searchTerm = (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'useSelector'
            ])(
              {
                'MainContainer.useSelector[searchTerm]': (state) =>
                  state.search.searchTerm,
              }['MainContainer.useSelector[searchTerm]']
            );
            (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'useEffect'
            ])(
              {
                'MainContainer.useEffect': () => {
                  if (!searchTerm) {
                    const term = localStorage.getItem('searchTerm') || '';
                    dispatch(
                      (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$searchSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        'setSearchTerm'
                      ])(term)
                    );
                  }
                },
              }['MainContainer.useEffect'],
              [dispatch, searchTerm]
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
                                  lineNumber: 30,
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
                                  lineNumber: 31,
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
                            lineNumber: 29,
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
                            lineNumber: 34,
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
                      lineNumber: 28,
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
                      lineNumber: 36,
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
                      showDetails: showDetails,
                    },
                    void 0,
                    false,
                    {
                      fileName:
                        '[project]/src/components/MainContainer/MainContainer.tsx',
                      lineNumber: 37,
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
          _s(MainContainer, 'hQ5LWV+1yoyxeBnB1/6f34csPKQ=', false, function () {
            return [
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'useParams'
              ],
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'useDispatch'
              ],
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'useSelector'
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
    '[project]/app/[page]/[id]/page.tsx [app-client] (ecmascript)': (
      __turbopack_context__
    ) => {
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
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainContainer$2f$MainContainer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            '[project]/src/components/MainContainer/MainContainer.tsx [app-client] (ecmascript)'
          );
        ('use client');
        const UniversityDetailsPage = () => {
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
              fileName: '[project]/app/[page]/[id]/page.tsx',
              lineNumber: 6,
              columnNumber: 10,
            },
            ('TURBOPACK compile-time value', void 0)
          );
        };
        _c = UniversityDetailsPage;
        const __TURBOPACK__default__export__ = UniversityDetailsPage;
        var _c;
        __turbopack_context__.k.register(_c, 'UniversityDetailsPage');
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

//# sourceMappingURL=_15bfb315._.js.map
