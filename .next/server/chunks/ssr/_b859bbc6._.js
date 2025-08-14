module.exports = {
  '[project]/src/utils/routes.ts [app-rsc] (ecmascript)': (
    __turbopack_context__
  ) => {
    'use strict';

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
  },
  '[project]/next-intl.config.ts [app-rsc] (ecmascript)': (
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
  '[project]/src/pages/NotFoundPage/NotFoundPage.tsx [app-rsc] (ecmascript)': (
    __turbopack_context__
  ) => {
    'use strict';

    __turbopack_context__.s({
      default: () => __TURBOPACK__default__export__,
    });
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)'
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$routes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/src/utils/routes.ts [app-rsc] (ecmascript)'
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/node_modules/next/image.js [app-rsc] (ecmascript)'
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$navigation$2f$react$2d$server$2f$createNavigation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__createNavigation$3e$__ =
      __turbopack_context__.i(
        '[project]/node_modules/next-intl/dist/esm/development/navigation/react-server/createNavigation.js [app-rsc] (ecmascript) <export default as createNavigation>'
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$server$2f$useTranslations$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__useTranslations$3e$__ =
      __turbopack_context__.i(
        '[project]/node_modules/next-intl/dist/esm/development/react-server/useTranslations.js [app-rsc] (ecmascript) <export default as useTranslations>'
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$intl$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/next-intl.config.ts [app-rsc] (ecmascript)'
      );
    const NotFoundPage = () => {
      const { Link } = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$navigation$2f$react$2d$server$2f$createNavigation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__createNavigation$3e$__[
        'createNavigation'
      ])(
        __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$intl$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          'default'
        ]
      );
      const t = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$server$2f$useTranslations$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__useTranslations$3e$__[
        'useTranslations'
      ])();
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
        'jsxDEV'
      ])(
        'div',
        {
          className: 'not-found-page',
          children: [
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'jsxDEV'
            ])(
              'h1',
              {
                children: '404 - Page Not Found',
              },
              void 0,
              false,
              {
                fileName: '[project]/src/pages/NotFoundPage/NotFoundPage.tsx',
                lineNumber: 14,
                columnNumber: 7,
              },
              ('TURBOPACK compile-time value', void 0)
            ),
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'jsxDEV'
            ])(
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'default'
              ],
              {
                src: '/404-page.png',
                className: 'not-found-image',
                alt: '',
              },
              void 0,
              false,
              {
                fileName: '[project]/src/pages/NotFoundPage/NotFoundPage.tsx',
                lineNumber: 15,
                columnNumber: 7,
              },
              ('TURBOPACK compile-time value', void 0)
            ),
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'jsxDEV'
            ])(
              'p',
              {
                children: "Oops! The page you're looking for does not exist.",
              },
              void 0,
              false,
              {
                fileName: '[project]/src/pages/NotFoundPage/NotFoundPage.tsx',
                lineNumber: 16,
                columnNumber: 7,
              },
              ('TURBOPACK compile-time value', void 0)
            ),
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'jsxDEV'
            ])(
              Link,
              {
                href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$routes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                  'AppRoutes'
                ].HOME_ROUTE,
                className: 'home-link',
                children: /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                  'jsxDEV'
                ])(
                  'button',
                  {
                    children: t('about'),
                  },
                  void 0,
                  false,
                  {
                    fileName:
                      '[project]/src/pages/NotFoundPage/NotFoundPage.tsx',
                    lineNumber: 18,
                    columnNumber: 9,
                  },
                  ('TURBOPACK compile-time value', void 0)
                ),
              },
              void 0,
              false,
              {
                fileName: '[project]/src/pages/NotFoundPage/NotFoundPage.tsx',
                lineNumber: 17,
                columnNumber: 7,
              },
              ('TURBOPACK compile-time value', void 0)
            ),
          ],
        },
        void 0,
        true,
        {
          fileName: '[project]/src/pages/NotFoundPage/NotFoundPage.tsx',
          lineNumber: 13,
          columnNumber: 5,
        },
        ('TURBOPACK compile-time value', void 0)
      );
    };
    const __TURBOPACK__default__export__ = NotFoundPage;
  },
  '[project]/app/not-found.tsx [app-rsc] (ecmascript)': (
    __turbopack_context__
  ) => {
    'use strict';

    __turbopack_context__.s({
      default: () => NotFound,
    });
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)'
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$NotFoundPage$2f$NotFoundPage$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/src/pages/NotFoundPage/NotFoundPage.tsx [app-rsc] (ecmascript)'
      );
    async function NotFound() {
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
        'jsxDEV'
      ])(
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$NotFoundPage$2f$NotFoundPage$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          'default'
        ],
        {},
        void 0,
        false,
        {
          fileName: '[project]/app/not-found.tsx',
          lineNumber: 4,
          columnNumber: 10,
        },
        this
      );
    }
  },
};

//# sourceMappingURL=_b859bbc6._.js.map
