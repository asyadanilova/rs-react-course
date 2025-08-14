module.exports = {
  '[project]/app/not-found.tsx [app-rsc] (ecmascript)': (
    __turbopack_context__
  ) => {
    var { m: module, e: exports } = __turbopack_context__;
    {
      const e = new Error(
        "Could not parse module '[project]/app/not-found.tsx'\n\nUnterminated regexp literal"
      );
      e.code = 'MODULE_UNPARSABLE';
      throw e;
    }
  },
  '[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)':
    (__turbopack_context__) => {
      'use strict';

      var { m: module, e: exports } = __turbopack_context__;
      {
        module.exports = __turbopack_context__.r(
          '[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-rsc] (ecmascript)'
        ).vendored['react-rsc'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
      }
    },
};

//# sourceMappingURL=_bff8b4fc._.js.map
