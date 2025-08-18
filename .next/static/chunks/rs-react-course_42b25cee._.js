(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([
  typeof document === 'object' ? document.currentScript : undefined,
  {
    '[project]/rs-react-course/src/app/[locale]/[page]/layout.tsx [app-client] (ecmascript)':
      (__turbopack_context__) => {
        'use strict';

        var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
        {
          __turbopack_context__.s({
            default: () => ResultsSectionLayout,
          });
          var __TURBOPACK__imported__module__$5b$project$5d2f$rs$2d$react$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              '[project]/rs-react-course/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)'
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$rs$2d$react$2d$course$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$shared$2f$NextIntlClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__NextIntlClientProvider$3e$__ =
            __turbopack_context__.i(
              '[project]/rs-react-course/node_modules/next-intl/dist/esm/development/shared/NextIntlClientProvider.js [app-client] (ecmascript) <export default as NextIntlClientProvider>'
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$rs$2d$react$2d$course$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              '[project]/rs-react-course/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)'
            );
          (() => {
            const e = new Error(
              "Cannot find module '../../../src/store/store'"
            );
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          })();
          (() => {
            const e = new Error(
              "Cannot find module '../../../src/context/ThemeContext'"
            );
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          })();
          (() => {
            const e = new Error(
              "Cannot find module '../../../messages/en.json'"
            );
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          })();
          (() => {
            const e = new Error(
              "Cannot find module '../../../messages/ru.json'"
            );
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          })();
          (() => {
            const e = new Error("Cannot find module '../../../src/index.scss'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          })();
          ('use client');
          const MESSAGES = {
            en,
            ru,
          };
          const SUPPORTED_LOCALES = ['en', 'ru'];
          function ResultsSectionLayout(param) {
            let { children, params } = param;
            const { locale } = params;
            const safeLocale = SUPPORTED_LOCALES.includes(locale)
              ? locale
              : 'en';
            const messages = MESSAGES[safeLocale];
            return /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$rs$2d$react$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'jsxDEV'
            ])(
              __TURBOPACK__imported__module__$5b$project$5d2f$rs$2d$react$2d$course$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'Provider'
              ],
              {
                store: store,
                children: /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$rs$2d$react$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  'jsxDEV'
                ])(
                  ThemeProvider,
                  {
                    children: /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$rs$2d$react$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                      'jsxDEV'
                    ])(
                      __TURBOPACK__imported__module__$5b$project$5d2f$rs$2d$react$2d$course$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$shared$2f$NextIntlClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__NextIntlClientProvider$3e$__[
                        'NextIntlClientProvider'
                      ],
                      {
                        locale: safeLocale,
                        messages: messages,
                        timeZone: 'Europe/Moscow',
                        children: /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$rs$2d$react$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                          'jsxDEV'
                        ])(
                          'main',
                          {
                            children: children,
                          },
                          void 0,
                          false,
                          {
                            fileName:
                              '[project]/rs-react-course/src/app/[locale]/[page]/layout.tsx',
                            lineNumber: 33,
                            columnNumber: 11,
                          },
                          this
                        ),
                      },
                      void 0,
                      false,
                      {
                        fileName:
                          '[project]/rs-react-course/src/app/[locale]/[page]/layout.tsx',
                        lineNumber: 28,
                        columnNumber: 9,
                      },
                      this
                    ),
                  },
                  void 0,
                  false,
                  {
                    fileName:
                      '[project]/rs-react-course/src/app/[locale]/[page]/layout.tsx',
                    lineNumber: 27,
                    columnNumber: 7,
                  },
                  this
                ),
              },
              void 0,
              false,
              {
                fileName:
                  '[project]/rs-react-course/src/app/[locale]/[page]/layout.tsx',
                lineNumber: 26,
                columnNumber: 5,
              },
              this
            );
          }
          _c = ResultsSectionLayout;
          var _c;
          __turbopack_context__.k.register(_c, 'ResultsSectionLayout');
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
    '[project]/rs-react-course/node_modules/next-intl/dist/esm/development/shared/NextIntlClientProvider.js [app-client] (ecmascript) <export default as NextIntlClientProvider>':
      (__turbopack_context__) => {
        'use strict';

        __turbopack_context__.s({
          NextIntlClientProvider: () =>
            __TURBOPACK__imported__module__$5b$project$5d2f$rs$2d$react$2d$course$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$shared$2f$NextIntlClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'default'
            ],
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$rs$2d$react$2d$course$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$shared$2f$NextIntlClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            '[project]/rs-react-course/node_modules/next-intl/dist/esm/development/shared/NextIntlClientProvider.js [app-client] (ecmascript)'
          );
      },
  },
]);

//# sourceMappingURL=rs-react-course_42b25cee._.js.map
