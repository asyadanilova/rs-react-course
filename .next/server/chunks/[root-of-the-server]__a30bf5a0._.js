module.exports = {
  '[project]/.next-internal/server/app/api/generate-csv/route/actions.js [app-rsc] (server actions loader, ecmascript)':
    (__turbopack_context__) => {
      'use strict';

      __turbopack_context__.s({});
    },
  '[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)':
    (__turbopack_context__) => {
      var { m: module, e: exports } = __turbopack_context__;
      {
        const mod = __turbopack_context__.x(
          'next/dist/compiled/next-server/app-route-turbo.runtime.dev.js',
          () =>
            require('next/dist/compiled/next-server/app-route-turbo.runtime.dev.js')
        );

        module.exports = mod;
      }
    },
  '[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)':
    (__turbopack_context__) => {
      var { m: module, e: exports } = __turbopack_context__;
      {
        const mod = __turbopack_context__.x(
          'next/dist/compiled/@opentelemetry/api',
          () => require('next/dist/compiled/@opentelemetry/api')
        );

        module.exports = mod;
      }
    },
  '[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)':
    (__turbopack_context__) => {
      var { m: module, e: exports } = __turbopack_context__;
      {
        const mod = __turbopack_context__.x(
          'next/dist/compiled/next-server/app-page-turbo.runtime.dev.js',
          () =>
            require('next/dist/compiled/next-server/app-page-turbo.runtime.dev.js')
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
  '[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)':
    (__turbopack_context__) => {
      var { m: module, e: exports } = __turbopack_context__;
      {
        const mod = __turbopack_context__.x(
          'next/dist/shared/lib/no-fallback-error.external.js',
          () => require('next/dist/shared/lib/no-fallback-error.external.js')
        );

        module.exports = mod;
      }
    },
  '[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)':
    (__turbopack_context__) => {
      var { m: module, e: exports } = __turbopack_context__;
      {
        const mod = __turbopack_context__.x(
          'next/dist/server/app-render/after-task-async-storage.external.js',
          () =>
            require('next/dist/server/app-render/after-task-async-storage.external.js')
        );

        module.exports = mod;
      }
    },
  '[project]/app/api/generate-csv/route.ts [app-route] (ecmascript)': (
    __turbopack_context__
  ) => {
    'use strict';

    __turbopack_context__.s({
      POST: () => POST,
    });
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/node_modules/next/server.js [app-route] (ecmascript)'
      );
    async function POST(request) {
      try {
        const body = await request.json();
        const items = body.items;
        if (!Array.isArray(items)) {
          return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__[
            'NextResponse'
          ].json(
            {
              error: 'Invalid data format',
            },
            {
              status: 400,
            }
          );
        }
        const csvHeader = 'Name,Country,Website\n';
        const csvBody = items
          .map((item) => `${item.name},${item.country},${item.web_pages[0]}`)
          .join('\n');
        const csvContent = csvHeader + csvBody;
        const fileName = `${items.length}_items.csv`;
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__[
          'NextResponse'
        ](csvContent, {
          headers: {
            'Content-Type': 'text/csv',
            'Content-Disposition': `attachment; filename="${fileName}"`,
          },
        });
      } catch (error) {
        console.error('Error generating CSV:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__[
          'NextResponse'
        ].json(
          {
            error: 'Failed to generate CSV',
          },
          {
            status: 500,
          }
        );
      }
    }
  },
};

//# sourceMappingURL=%5Broot-of-the-server%5D__a30bf5a0._.js.map
