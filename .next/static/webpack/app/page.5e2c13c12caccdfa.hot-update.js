"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/components/SelectFilterTable.tsx":
/*!**********************************************!*\
  !*** ./app/components/SelectFilterTable.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SelectFilterTable: function() { return /* binding */ SelectFilterTable; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/select/dist/chunk-3RSXBRAN.mjs\");\n\nvar _s = $RefreshSig$();\n\n\nconst SelectFilterTable = (param)=>{\n    let { column, table } = param;\n    _s();\n    const columnFilterValue = column.getFilterValue();\n    const sortedUniqueValues = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>Array.from(column.getFacetedUniqueValues().keys()).sort(), [\n        column.getFacetedUniqueValues()\n    ]);\n    const handleChange = (e)=>{\n        column.setFilterValue(e.target.value);\n    };\n    console.log(column);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Select, {\n            id: column.id,\n            placeholder: column.columnDef.header,\n            value: columnFilterValue !== null && columnFilterValue !== void 0 ? columnFilterValue : \"\",\n            onChange: (e)=>handleChange(e),\n            children: sortedUniqueValues.slice(0, 5000).map((value)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                    value: value,\n                    children: value.toString()\n                }, value, false, {\n                    fileName: \"D:\\\\form-customer-nextjs\\\\app\\\\components\\\\SelectFilterTable.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 21\n                }, undefined))\n        }, void 0, false, {\n            fileName: \"D:\\\\form-customer-nextjs\\\\app\\\\components\\\\SelectFilterTable.tsx\",\n            lineNumber: 26,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false);\n};\n_s(SelectFilterTable, \"kcYTqR1Fo2tfd0BGQmhxvWukT+0=\");\n_c = SelectFilterTable;\nvar _c;\n$RefreshReg$(_c, \"SelectFilterTable\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL1NlbGVjdEZpbHRlclRhYmxlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQzJDO0FBQ0g7QUFPakMsTUFBTUUsb0JBQW9CO1FBQUMsRUFBQ0MsTUFBTSxFQUFFQyxLQUFLLEVBQXlCOztJQUVyRSxNQUFNQyxvQkFBb0JGLE9BQU9HLGNBQWM7SUFDL0MsTUFBTUMscUJBQXFCUCw4Q0FBT0EsQ0FDOUIsSUFDSVEsTUFBTUMsSUFBSSxDQUFDTixPQUFPTyxzQkFBc0IsR0FBR0MsSUFBSSxJQUFJQyxJQUFJLElBQzNEO1FBQUNULE9BQU9PLHNCQUFzQjtLQUFHO0lBR3JDLE1BQU1HLGVBQWUsQ0FBQ0M7UUFDbEJYLE9BQU9ZLGNBQWMsQ0FBQ0QsRUFBRUUsTUFBTSxDQUFDQyxLQUFLO0lBQ3hDO0lBQ0FDLFFBQVFDLEdBQUcsQ0FBQ2hCO0lBRVoscUJBQ0k7a0JBQ0ksNEVBQUNGLG9EQUFNQTtZQUFDbUIsSUFBSWpCLE9BQU9pQixFQUFFO1lBQUVDLGFBQWFsQixPQUFPbUIsU0FBUyxDQUFDQyxNQUFNO1lBQUVOLE9BQVFaLDhCQUFBQSwrQkFBQUEsb0JBQXFCO1lBQ2xGbUIsVUFBVVYsQ0FBQUEsSUFBS0QsYUFBYUM7c0JBQy9CUCxtQkFBbUJrQixLQUFLLENBQUMsR0FBRyxNQUFNQyxHQUFHLENBQUMsQ0FBQ1Qsc0JBQ3BDLDhEQUFDVTtvQkFBT1YsT0FBT0E7OEJBQW9CQSxNQUFNVyxRQUFRO21CQUF0Qlg7Ozs7Ozs7Ozs7O0FBSy9DLEVBQUM7R0F4QllmO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL1NlbGVjdEZpbHRlclRhYmxlLnRzeD85OWM2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29sdW1uLCBUYWJsZX0gZnJvbSBcIkB0YW5zdGFjay90YWJsZS1jb3JlXCI7XHJcbmltcG9ydCB7Q2hhbmdlRXZlbnQsIHVzZU1lbW99IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1NlbGVjdH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuXHJcblxyXG50eXBlIFNlbGVjdEZpbHRlclRhYmxlUHJvcHMgPSB7XHJcbiAgICBjb2x1bW46IENvbHVtbjxhbnksIHVua25vd24+LFxyXG4gICAgdGFibGU6IFRhYmxlPGFueT5cclxufVxyXG5leHBvcnQgY29uc3QgU2VsZWN0RmlsdGVyVGFibGUgPSAoe2NvbHVtbiwgdGFibGV9OiBTZWxlY3RGaWx0ZXJUYWJsZVByb3BzKSA9PiB7XHJcblxyXG4gICAgY29uc3QgY29sdW1uRmlsdGVyVmFsdWUgPSBjb2x1bW4uZ2V0RmlsdGVyVmFsdWUoKTtcclxuICAgIGNvbnN0IHNvcnRlZFVuaXF1ZVZhbHVlcyA9IHVzZU1lbW8oXHJcbiAgICAgICAgKCkgPT5cclxuICAgICAgICAgICAgQXJyYXkuZnJvbShjb2x1bW4uZ2V0RmFjZXRlZFVuaXF1ZVZhbHVlcygpLmtleXMoKSkuc29ydCgpLFxyXG4gICAgICAgIFtjb2x1bW4uZ2V0RmFjZXRlZFVuaXF1ZVZhbHVlcygpXVxyXG4gICAgKVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlOiBDaGFuZ2VFdmVudDxIVE1MU2VsZWN0RWxlbWVudD4pID0+IHtcclxuICAgICAgICBjb2x1bW4uc2V0RmlsdGVyVmFsdWUoZS50YXJnZXQudmFsdWUpXHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhjb2x1bW4pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8U2VsZWN0IGlkPXtjb2x1bW4uaWR9IHBsYWNlaG9sZGVyPXtjb2x1bW4uY29sdW1uRGVmLmhlYWRlcn0gdmFsdWU9eyhjb2x1bW5GaWx0ZXJWYWx1ZSA/PyAnJykgYXMgc3RyaW5nfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IGhhbmRsZUNoYW5nZShlKX0+XHJcbiAgICAgICAgICAgICAgICB7c29ydGVkVW5pcXVlVmFsdWVzLnNsaWNlKDAsIDUwMDApLm1hcCgodmFsdWU6IGFueSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e3ZhbHVlfSBrZXk9e3ZhbHVlfT57dmFsdWUudG9TdHJpbmcoKX08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJ1c2VNZW1vIiwiU2VsZWN0IiwiU2VsZWN0RmlsdGVyVGFibGUiLCJjb2x1bW4iLCJ0YWJsZSIsImNvbHVtbkZpbHRlclZhbHVlIiwiZ2V0RmlsdGVyVmFsdWUiLCJzb3J0ZWRVbmlxdWVWYWx1ZXMiLCJBcnJheSIsImZyb20iLCJnZXRGYWNldGVkVW5pcXVlVmFsdWVzIiwia2V5cyIsInNvcnQiLCJoYW5kbGVDaGFuZ2UiLCJlIiwic2V0RmlsdGVyVmFsdWUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJpZCIsInBsYWNlaG9sZGVyIiwiY29sdW1uRGVmIiwiaGVhZGVyIiwib25DaGFuZ2UiLCJzbGljZSIsIm1hcCIsIm9wdGlvbiIsInRvU3RyaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/SelectFilterTable.tsx\n"));

/***/ })

});