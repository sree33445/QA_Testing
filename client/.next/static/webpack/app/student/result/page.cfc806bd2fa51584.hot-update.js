"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/student/result/page",{

/***/ "(app-pages-browser)/./app/components/student/Result.jsx":
/*!*******************************************!*\
  !*** ./app/components/student/Result.jsx ***!
  \*******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Award_BarChart2_FileText_TrendingUp_lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=Award,BarChart2,FileText,TrendingUp!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/file-text.js\");\n/* harmony import */ var _barrel_optimize_names_Award_BarChart2_FileText_TrendingUp_lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Award,BarChart2,FileText,TrendingUp!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/award.js\");\n/* harmony import */ var _barrel_optimize_names_Award_BarChart2_FileText_TrendingUp_lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Award,BarChart2,FileText,TrendingUp!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/chart-no-axes-column.js\");\n/* harmony import */ var _barrel_optimize_names_Award_BarChart2_FileText_TrendingUp_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Award,BarChart2,FileText,TrendingUp!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/trending-up.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n// Mock data - in a real application, this would come from an API or backend\nconst mockExamResults = [\n    {\n        id: 1,\n        subject: 'Mathematics',\n        date: '2024-01-15',\n        score: 85,\n        maxScore: 100,\n        grade: 'B+',\n        status: 'Passed'\n    },\n    {\n        id: 2,\n        subject: 'Science',\n        date: '2024-01-22',\n        score: 92,\n        maxScore: 100,\n        grade: 'A',\n        status: 'Passed'\n    },\n    {\n        id: 3,\n        subject: 'Angular',\n        date: '2024-02-05',\n        score: 78,\n        maxScore: 100,\n        grade: 'C+',\n        status: 'Passed'\n    }\n];\nconst ResultCard = (param)=>{\n    let { result } = param;\n    const performanceColor = result.score >= 90 ? 'bg-green-100 border-green-300' : result.score >= 80 ? 'bg-blue-100 border-blue-300' : result.score >= 70 ? 'bg-yellow-100 border-yellow-300' : 'bg-red-100 border-red-300';\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-6 rounded-lg shadow-md border \".concat(performanceColor, \" transition-all duration-300 hover:shadow-lg\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-between items-center mb-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"text-xl font-semibold text-gray-800\",\n                        children: result.subject\n                    }, void 0, false, {\n                        fileName: \"/home/sreeraj-s/QA_Testing/client/app/components/student/Result.jsx\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"px-3 py-1 rounded-full text-sm font-medium \\n          \".concat(result.status === 'Passed' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'),\n                        children: result.status\n                    }, void 0, false, {\n                        fileName: \"/home/sreeraj-s/QA_Testing/client/app/components/student/Result.jsx\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/sreeraj-s/QA_Testing/client/app/components/student/Result.jsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-2 gap-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center space-x-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Award_BarChart2_FileText_TrendingUp_lucide_react__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                className: \"w-5 h-5 text-gray-600\"\n                            }, void 0, false, {\n                                fileName: \"/home/sreeraj-s/QA_Testing/client/app/components/student/Result.jsx\",\n                                lineNumber: 59,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-gray-700\",\n                                children: [\n                                    \"Exam Date: \",\n                                    result.date\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/sreeraj-s/QA_Testing/client/app/components/student/Result.jsx\",\n                                lineNumber: 60,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/sreeraj-s/QA_Testing/client/app/components/student/Result.jsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center space-x-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Award_BarChart2_FileText_TrendingUp_lucide_react__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                className: \"w-5 h-5 text-gray-600\"\n                            }, void 0, false, {\n                                fileName: \"/home/sreeraj-s/QA_Testing/client/app/components/student/Result.jsx\",\n                                lineNumber: 63,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-gray-700\",\n                                children: [\n                                    \"Grade: \",\n                                    result.grade\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/sreeraj-s/QA_Testing/client/app/components/student/Result.jsx\",\n                                lineNumber: 64,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/sreeraj-s/QA_Testing/client/app/components/student/Result.jsx\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center space-x-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Award_BarChart2_FileText_TrendingUp_lucide_react__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                className: \"w-5 h-5 text-gray-600\"\n                            }, void 0, false, {\n                                fileName: \"/home/sreeraj-s/QA_Testing/client/app/components/student/Result.jsx\",\n                                lineNumber: 67,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-gray-700\",\n                                children: [\n                                    \"Score: \",\n                                    result.score,\n                                    \"/\",\n                                    result.maxScore\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/sreeraj-s/QA_Testing/client/app/components/student/Result.jsx\",\n                                lineNumber: 68,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/sreeraj-s/QA_Testing/client/app/components/student/Result.jsx\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center space-x-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Award_BarChart2_FileText_TrendingUp_lucide_react__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                className: \"w-5 h-5 text-gray-600\"\n                            }, void 0, false, {\n                                fileName: \"/home/sreeraj-s/QA_Testing/client/app/components/student/Result.jsx\",\n                                lineNumber: 71,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-gray-700\",\n                                children: [\n                                    \"Percentage: \",\n                                    (result.score / result.maxScore * 100).toFixed(1),\n                                    \"%\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/sreeraj-s/QA_Testing/client/app/components/student/Result.jsx\",\n                                lineNumber: 72,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/sreeraj-s/QA_Testing/client/app/components/student/Result.jsx\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/sreeraj-s/QA_Testing/client/app/components/student/Result.jsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/sreeraj-s/QA_Testing/client/app/components/student/Result.jsx\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, undefined);\n};\n_c = ResultCard;\nconst Results = ()=>{\n    _s();\n    const [results] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(mockExamResults);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen bg-gradient-to-br from-sky-50 to-sky-200 py-12\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container mx-auto px-4 max-w-4xl\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-white shadow-2xl rounded-xl overflow-hidden\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                        className: \"bg-blue-600 text-white py-4 px-6 flex justify-between items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-2xl font-bold\",\n                                children: \"Exam Results\"\n                            }, void 0, false, {\n                                fileName: \"/home/sreeraj-s/QA_Testing/client/app/components/student/Result.jsx\",\n                                lineNumber: 87,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"/student\",\n                                className: \"text-white hover:underline\",\n                                children: \"Back to Dashboard\"\n                            }, void 0, false, {\n                                fileName: \"/home/sreeraj-s/QA_Testing/client/app/components/student/Result.jsx\",\n                                lineNumber: 88,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/sreeraj-s/QA_Testing/client/app/components/student/Result.jsx\",\n                        lineNumber: 86,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"p-6 space-y-6\",\n                        children: results.length === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"text-center py-12 text-gray-500\",\n                            children: \"No exam results available.\"\n                        }, void 0, false, {\n                            fileName: \"/home/sreeraj-s/QA_Testing/client/app/components/student/Result.jsx\",\n                            lineNumber: 93,\n                            columnNumber: 15\n                        }, undefined) : results.map((result)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ResultCard, {\n                                result: result\n                            }, result.id, false, {\n                                fileName: \"/home/sreeraj-s/QA_Testing/client/app/components/student/Result.jsx\",\n                                lineNumber: 98,\n                                columnNumber: 17\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/home/sreeraj-s/QA_Testing/client/app/components/student/Result.jsx\",\n                        lineNumber: 91,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-gray-50 p-4 text-center text-sm text-gray-600\",\n                        children: [\n                            \"Total Exams: \",\n                            results.length,\n                            \" | Average Score: \",\n                            (results.reduce((sum, r)=>sum + r.score, 0) / results.length).toFixed(1)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/sreeraj-s/QA_Testing/client/app/components/student/Result.jsx\",\n                        lineNumber: 103,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/sreeraj-s/QA_Testing/client/app/components/student/Result.jsx\",\n                lineNumber: 85,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/home/sreeraj-s/QA_Testing/client/app/components/student/Result.jsx\",\n            lineNumber: 84,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/sreeraj-s/QA_Testing/client/app/components/student/Result.jsx\",\n        lineNumber: 83,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Results, \"629AtdBA0p5BIJyy3GEXfREzwM4=\");\n_c1 = Results;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Results);\nvar _c, _c1;\n$RefreshReg$(_c, \"ResultCard\");\n$RefreshReg$(_c1, \"Results\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL3N0dWRlbnQvUmVzdWx0LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ3VDO0FBTWxCO0FBRXJCLDRFQUE0RTtBQUM1RSxNQUFNTSxrQkFBa0I7SUFDdEI7UUFDRUMsSUFBSTtRQUNKQyxTQUFTO1FBQ1RDLE1BQU07UUFDTkMsT0FBTztRQUNQQyxVQUFVO1FBQ1ZDLE9BQU87UUFDUEMsUUFBUTtJQUNWO0lBQ0E7UUFDRU4sSUFBSTtRQUNKQyxTQUFTO1FBQ1RDLE1BQU07UUFDTkMsT0FBTztRQUNQQyxVQUFVO1FBQ1ZDLE9BQU87UUFDUEMsUUFBUTtJQUNWO0lBQ0E7UUFDRU4sSUFBSTtRQUNKQyxTQUFTO1FBQ1RDLE1BQU07UUFDTkMsT0FBTztRQUNQQyxVQUFVO1FBQ1ZDLE9BQU87UUFDUEMsUUFBUTtJQUNWO0NBQ0Q7QUFFRCxNQUFNQyxhQUFhO1FBQUMsRUFBRUMsTUFBTSxFQUFFO0lBQzVCLE1BQU1DLG1CQUNKRCxPQUFPTCxLQUFLLElBQUksS0FBSyxrQ0FDckJLLE9BQU9MLEtBQUssSUFBSSxLQUFLLGdDQUNyQkssT0FBT0wsS0FBSyxJQUFJLEtBQUssb0NBQ3JCO0lBRUYscUJBQ0UsOERBQUNPO1FBQUlDLFdBQVcsbUNBQW9ELE9BQWpCRixrQkFBaUI7OzBCQUNsRSw4REFBQ0M7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDQzt3QkFBR0QsV0FBVTtrQ0FBdUNILE9BQU9QLE9BQU87Ozs7OztrQ0FDbkUsOERBQUNZO3dCQUFLRixXQUFXLDBEQUNvRSxPQUFqRkgsT0FBT0YsTUFBTSxLQUFLLFdBQVcsNEJBQTRCO2tDQUMxREUsT0FBT0YsTUFBTTs7Ozs7Ozs7Ozs7OzBCQUdsQiw4REFBQ0k7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDRDt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNkLCtHQUFRQTtnQ0FBQ2MsV0FBVTs7Ozs7OzBDQUNwQiw4REFBQ0U7Z0NBQUtGLFdBQVU7O29DQUFnQjtvQ0FBWUgsT0FBT04sSUFBSTs7Ozs7Ozs7Ozs7OztrQ0FFekQsOERBQUNRO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ2YsK0dBQUtBO2dDQUFDZSxXQUFVOzs7Ozs7MENBQ2pCLDhEQUFDRTtnQ0FBS0YsV0FBVTs7b0NBQWdCO29DQUFRSCxPQUFPSCxLQUFLOzs7Ozs7Ozs7Ozs7O2tDQUV0RCw4REFBQ0s7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDaEIsK0dBQVNBO2dDQUFDZ0IsV0FBVTs7Ozs7OzBDQUNyQiw4REFBQ0U7Z0NBQUtGLFdBQVU7O29DQUFnQjtvQ0FBUUgsT0FBT0wsS0FBSztvQ0FBQztvQ0FBRUssT0FBT0osUUFBUTs7Ozs7Ozs7Ozs7OztrQ0FFeEUsOERBQUNNO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ2IsK0dBQVVBO2dDQUFDYSxXQUFVOzs7Ozs7MENBQ3RCLDhEQUFDRTtnQ0FBS0YsV0FBVTs7b0NBQWdCO29DQUFjLFFBQVFSLEtBQUssR0FBR0ssT0FBT0osUUFBUSxHQUFJLEdBQUUsRUFBR1UsT0FBTyxDQUFDO29DQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzNHO0tBcENNUDtBQXNDTixNQUFNUSxVQUFVOztJQUNkLE1BQU0sQ0FBQ0MsUUFBUSxHQUFHdEIsK0NBQVFBLENBQUNLO0lBRTNCLHFCQUNFLDhEQUFDVztRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtZQUFJQyxXQUFVO3NCQUNiLDRFQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNNO3dCQUFPTixXQUFVOzswQ0FDaEIsOERBQUNPO2dDQUFHUCxXQUFVOzBDQUFxQjs7Ozs7OzBDQUNuQyw4REFBQ1E7Z0NBQUVDLE1BQUs7Z0NBQVdULFdBQVU7MENBQTZCOzs7Ozs7Ozs7Ozs7a0NBRzVELDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FDWkssUUFBUUssTUFBTSxLQUFLLGtCQUNsQiw4REFBQ1g7NEJBQUlDLFdBQVU7c0NBQWtDOzs7Ozt3Q0FJakRLLFFBQVFNLEdBQUcsQ0FBQ2QsQ0FBQUEsdUJBQ1YsOERBQUNEO2dDQUEyQkMsUUFBUUE7K0JBQW5CQSxPQUFPUixFQUFFOzs7Ozs7Ozs7O2tDQUtoQyw4REFBQ1U7d0JBQUlDLFdBQVU7OzRCQUFtRDs0QkFDbERLLFFBQVFLLE1BQU07NEJBQUM7NEJBQzFCTCxDQUFBQSxRQUFRTyxNQUFNLENBQUMsQ0FBQ0MsS0FBS0MsSUFBTUQsTUFBTUMsRUFBRXRCLEtBQUssRUFBRSxLQUFLYSxRQUFRSyxNQUFNLEVBQUVQLE9BQU8sQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPdEY7R0FqQ01DO01BQUFBO0FBbUNOLGlFQUFlQSxPQUFPQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvc3R1ZGVudC9SZXN1bHQuanN4P2RiM2YiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFxuICBCYXJDaGFydDIsIFxuICBBd2FyZCwgXG4gIEZpbGVUZXh0LCBcbiAgVHJlbmRpbmdVcCBcbn0gZnJvbSAnbHVjaWRlLXJlYWN0J1xuXG4vLyBNb2NrIGRhdGEgLSBpbiBhIHJlYWwgYXBwbGljYXRpb24sIHRoaXMgd291bGQgY29tZSBmcm9tIGFuIEFQSSBvciBiYWNrZW5kXG5jb25zdCBtb2NrRXhhbVJlc3VsdHMgPSBbXG4gIHtcbiAgICBpZDogMSxcbiAgICBzdWJqZWN0OiAnTWF0aGVtYXRpY3MnLFxuICAgIGRhdGU6ICcyMDI0LTAxLTE1JyxcbiAgICBzY29yZTogODUsXG4gICAgbWF4U2NvcmU6IDEwMCxcbiAgICBncmFkZTogJ0IrJyxcbiAgICBzdGF0dXM6ICdQYXNzZWQnXG4gIH0sXG4gIHtcbiAgICBpZDogMixcbiAgICBzdWJqZWN0OiAnU2NpZW5jZScsXG4gICAgZGF0ZTogJzIwMjQtMDEtMjInLFxuICAgIHNjb3JlOiA5MixcbiAgICBtYXhTY29yZTogMTAwLFxuICAgIGdyYWRlOiAnQScsXG4gICAgc3RhdHVzOiAnUGFzc2VkJ1xuICB9LFxuICB7XG4gICAgaWQ6IDMsXG4gICAgc3ViamVjdDogJ0FuZ3VsYXInLFxuICAgIGRhdGU6ICcyMDI0LTAyLTA1JyxcbiAgICBzY29yZTogNzgsXG4gICAgbWF4U2NvcmU6IDEwMCxcbiAgICBncmFkZTogJ0MrJyxcbiAgICBzdGF0dXM6ICdQYXNzZWQnXG4gIH1cbl1cblxuY29uc3QgUmVzdWx0Q2FyZCA9ICh7IHJlc3VsdCB9KSA9PiB7XG4gIGNvbnN0IHBlcmZvcm1hbmNlQ29sb3IgPSBcbiAgICByZXN1bHQuc2NvcmUgPj0gOTAgPyAnYmctZ3JlZW4tMTAwIGJvcmRlci1ncmVlbi0zMDAnIDpcbiAgICByZXN1bHQuc2NvcmUgPj0gODAgPyAnYmctYmx1ZS0xMDAgYm9yZGVyLWJsdWUtMzAwJyA6XG4gICAgcmVzdWx0LnNjb3JlID49IDcwID8gJ2JnLXllbGxvdy0xMDAgYm9yZGVyLXllbGxvdy0zMDAnIDpcbiAgICAnYmctcmVkLTEwMCBib3JkZXItcmVkLTMwMCdcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgcC02IHJvdW5kZWQtbGcgc2hhZG93LW1kIGJvcmRlciAke3BlcmZvcm1hbmNlQ29sb3J9IHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCBob3ZlcjpzaGFkb3ctbGdgfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIG1iLTRcIj5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktODAwXCI+e3Jlc3VsdC5zdWJqZWN0fTwvaDM+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YHB4LTMgcHktMSByb3VuZGVkLWZ1bGwgdGV4dC1zbSBmb250LW1lZGl1bSBcbiAgICAgICAgICAke3Jlc3VsdC5zdGF0dXMgPT09ICdQYXNzZWQnID8gJ2JnLWdyZWVuLTUwMCB0ZXh0LXdoaXRlJyA6ICdiZy1yZWQtNTAwIHRleHQtd2hpdGUnfWB9PlxuICAgICAgICAgIHtyZXN1bHQuc3RhdHVzfVxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBnYXAtNFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtMlwiPlxuICAgICAgICAgIDxGaWxlVGV4dCBjbGFzc05hbWU9XCJ3LTUgaC01IHRleHQtZ3JheS02MDBcIiAvPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZ3JheS03MDBcIj5FeGFtIERhdGU6IHtyZXN1bHQuZGF0ZX08L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtMlwiPlxuICAgICAgICAgIDxBd2FyZCBjbGFzc05hbWU9XCJ3LTUgaC01IHRleHQtZ3JheS02MDBcIiAvPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZ3JheS03MDBcIj5HcmFkZToge3Jlc3VsdC5ncmFkZX08L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtMlwiPlxuICAgICAgICAgIDxCYXJDaGFydDIgY2xhc3NOYW1lPVwidy01IGgtNSB0ZXh0LWdyYXktNjAwXCIgLz5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNzAwXCI+U2NvcmU6IHtyZXN1bHQuc2NvcmV9L3tyZXN1bHQubWF4U2NvcmV9PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTJcIj5cbiAgICAgICAgICA8VHJlbmRpbmdVcCBjbGFzc05hbWU9XCJ3LTUgaC01IHRleHQtZ3JheS02MDBcIiAvPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZ3JheS03MDBcIj5QZXJjZW50YWdlOiB7KChyZXN1bHQuc2NvcmUgLyByZXN1bHQubWF4U2NvcmUpICogMTAwKS50b0ZpeGVkKDEpfSU8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuY29uc3QgUmVzdWx0cyA9ICgpID0+IHtcbiAgY29uc3QgW3Jlc3VsdHNdID0gdXNlU3RhdGUobW9ja0V4YW1SZXN1bHRzKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gYmctZ3JhZGllbnQtdG8tYnIgZnJvbS1za3ktNTAgdG8tc2t5LTIwMCBweS0xMlwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC00IG1heC13LTR4bFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHNoYWRvdy0yeGwgcm91bmRlZC14bCBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImJnLWJsdWUtNjAwIHRleHQtd2hpdGUgcHktNCBweC02IGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZFwiPkV4YW0gUmVzdWx0czwvaDE+XG4gICAgICAgICAgICA8YSBocmVmPVwiL3N0dWRlbnRcIiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGhvdmVyOnVuZGVybGluZVwiPkJhY2sgdG8gRGFzaGJvYXJkPC9hPlxuICAgICAgICAgIDwvaGVhZGVyPlxuICAgICAgICAgIFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC02IHNwYWNlLXktNlwiPlxuICAgICAgICAgICAge3Jlc3VsdHMubGVuZ3RoID09PSAwID8gKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHB5LTEyIHRleHQtZ3JheS01MDBcIj5cbiAgICAgICAgICAgICAgICBObyBleGFtIHJlc3VsdHMgYXZhaWxhYmxlLlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIHJlc3VsdHMubWFwKHJlc3VsdCA9PiAoXG4gICAgICAgICAgICAgICAgPFJlc3VsdENhcmQga2V5PXtyZXN1bHQuaWR9IHJlc3VsdD17cmVzdWx0fSAvPlxuICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JheS01MCBwLTQgdGV4dC1jZW50ZXIgdGV4dC1zbSB0ZXh0LWdyYXktNjAwXCI+XG4gICAgICAgICAgICBUb3RhbCBFeGFtczoge3Jlc3VsdHMubGVuZ3RofSB8IEF2ZXJhZ2UgU2NvcmU6IHtcbiAgICAgICAgICAgICAgKHJlc3VsdHMucmVkdWNlKChzdW0sIHIpID0+IHN1bSArIHIuc2NvcmUsIDApIC8gcmVzdWx0cy5sZW5ndGgpLnRvRml4ZWQoMSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZXN1bHRzIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJCYXJDaGFydDIiLCJBd2FyZCIsIkZpbGVUZXh0IiwiVHJlbmRpbmdVcCIsIm1vY2tFeGFtUmVzdWx0cyIsImlkIiwic3ViamVjdCIsImRhdGUiLCJzY29yZSIsIm1heFNjb3JlIiwiZ3JhZGUiLCJzdGF0dXMiLCJSZXN1bHRDYXJkIiwicmVzdWx0IiwicGVyZm9ybWFuY2VDb2xvciIsImRpdiIsImNsYXNzTmFtZSIsImgzIiwic3BhbiIsInRvRml4ZWQiLCJSZXN1bHRzIiwicmVzdWx0cyIsImhlYWRlciIsImgxIiwiYSIsImhyZWYiLCJsZW5ndGgiLCJtYXAiLCJyZWR1Y2UiLCJzdW0iLCJyIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/student/Result.jsx\n"));

/***/ })

});