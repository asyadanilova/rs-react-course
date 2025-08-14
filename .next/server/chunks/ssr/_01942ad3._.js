module.exports = {
  '[project]/next-intl.config.ts [app-ssr] (ecmascript)': (
    __turbopack_context__
  ) => {
    'use strict';

    __turbopack_context__.s({
      default: () => __TURBOPACK__default__export__,
    });
    const __TURBOPACK__default__export__ = {
      locales: ['en', 'ru'],
      defaultLocale: 'en',
      localeDetection: true,
    };
  },
  '[project]/app/not-found.tsx [app-ssr] (ecmascript)': (
    __turbopack_context__
  ) => {
    'use strict';

    __turbopack_context__.s({
      default: () => NotFound,
    });
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)'
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ =
      __turbopack_context__.i(
        '[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-ssr] (ecmascript) <locals>'
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$navigation$2f$react$2d$client$2f$createNavigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__createNavigation$3e$__ =
      __turbopack_context__.i(
        '[project]/node_modules/next-intl/dist/esm/development/navigation/react-client/createNavigation.js [app-ssr] (ecmascript) <export default as createNavigation>'
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$intl$2e$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/next-intl.config.ts [app-ssr] (ecmascript)'
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/node_modules/next/image.js [app-ssr] (ecmascript)'
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$routes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/src/utils/routes.ts [app-ssr] (ecmascript)'
      );
    ('use client');
    function NotFound() {
      const t = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__[
        'useTranslations'
      ])();
      const { Link } = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$navigation$2f$react$2d$client$2f$createNavigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__createNavigation$3e$__[
        'createNavigation'
      ])(
        __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$intl$2e$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          'default'
        ]
      );
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        'jsxDEV'
      ])(
        'div',
        {
          className: 'not-found-page',
          children: [
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              'jsxDEV'
            ])(
              'h1',
              {
                children: [
                  '404 - ',
                  t('notFound.title', {
                    defaultValue: 'Page Not Found',
                  }),
                ],
              },
              void 0,
              true,
              {
                fileName: '[project]/app/not-found.tsx',
                lineNumber: 15,
                columnNumber: 7,
              },
              this
            ),
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              'jsxDEV'
            ])(
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                'default'
              ],
              {
                src: '/404-page.png',
                className: 'not-found-image',
                alt: '',
                width: 400,
                height: 300,
              },
              void 0,
              false,
              {
                fileName: '[project]/app/not-found.tsx',
                lineNumber: 16,
                columnNumber: 7,
              },
              this
            ),
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              'jsxDEV'
            ])(
              'p',
              {
                children: t('notFound.description', {
                  defaultValue:
                    "Oops! The page you're looking for does not exist.",
                }),
              },
              void 0,
              false,
              {
                fileName: '[project]/app/not-found.tsx',
                lineNumber: 23,
                columnNumber: 7,
              },
              this
            ),
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              'jsxDEV'
            ])(
              Link,
              {
                href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$routes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                  'AppRoutes'
                ].HOME_ROUTE,
                className: 'home-link',
                children: /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                  'jsxDEV'
                ])(
                  'button',
                  {
                    children: t('notFound.goHome', {
                      defaultValue: 'Go back to Home',
                    }),
                  },
                  void 0,
                  false,
                  {
                    fileName: '[project]/app/not-found.tsx',
                    lineNumber: 29,
                    columnNumber: 9,
                  },
                  this
                ),
              },
              void 0,
              false,
              {
                fileName: '[project]/app/not-found.tsx',
                lineNumber: 28,
                columnNumber: 7,
              },
              this
            ),
          ],
        },
        void 0,
        true,
        {
          fileName: '[project]/app/not-found.tsx',
          lineNumber: 14,
          columnNumber: 5,
        },
        this
      );
    }
  },
};

//# sourceMappingURL=_01942ad3._.js.map
