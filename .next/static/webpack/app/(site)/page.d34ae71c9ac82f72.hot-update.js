"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(site)/page",{

/***/ "(app-pages-browser)/./app/(site)/page.tsx":
/*!*****************************!*\
  !*** ./app/(site)/page.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _sanity_sanity_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/sanity/sanity-utils */ \"(app-pages-browser)/./sanity/sanity-utils.ts\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _contact_contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact/contact */ \"(app-pages-browser)/./app/(site)/contact/contact.tsx\");\n/* harmony import */ var _portabletext_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @portabletext/react */ \"(app-pages-browser)/./node_modules/@portabletext/react/dist/index.js\");\n\n\n\n\n\n\nasync function Home() {\n    const projects = await (0,_sanity_sanity_utils__WEBPACK_IMPORTED_MODULE_1__.getProjects)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-gray-100 min-h-screen p-8\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-7xl font-extrabold\",\n                children: [\n                    \"Hello I'm\",\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"bg-gradient-to-r from-blue-400 via-purple-500 to-purple-600 bg-clip-text text-transparent\",\n                        children: \"Amir\"\n                    }, void 0, false, {\n                        fileName: \"/Users/Amir/untitled folder/NextJS-Portfolio/app/(site)/page.tsx\",\n                        lineNumber: 14,\n                        columnNumber: 9\n                    }, this),\n                    \"!\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        className: \"-mt-8 w-36 h-36 float-right rounded-full\",\n                        src: \"../images/IMG_0909.JPG\",\n                        alt: \"Medium avatar\"\n                    }, void 0, false, {\n                        fileName: \"/Users/Amir/untitled folder/NextJS-Portfolio/app/(site)/page.tsx\",\n                        lineNumber: 18,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/Amir/untitled folder/NextJS-Portfolio/app/(site)/page.tsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"mt-3 text-xl text-gray-600\",\n                children: \"Accomplished and dynamic professional with a proven track record of innovative web development, strategic business operations, and advanced problem-solving. Expert in translating complex business requirements into technical solutions, delivering high-quality projects that enhance organizational performance. Renowned for driving operational excellence, leveraging extensive experience in API integration, and cultivating user-centric experiences that propel leading organizations to the forefront of their industries. A collaborative leader and mentor committed to fostering team growth and championing agile methodologies to accelerate project delivery and achieve exceptional results.\"\n            }, void 0, false, {\n                fileName: \"/Users/Amir/untitled folder/NextJS-Portfolio/app/(site)/page.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                id: \"projects\",\n                className: \"mt-24 font-bold text-gray-700 text-3xl\",\n                children: \" My Projects\"\n            }, void 0, false, {\n                fileName: \"/Users/Amir/untitled folder/NextJS-Portfolio/app/(site)/page.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8\",\n                children: projects.map((project)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        href: \"\".concat(project.url),\n                        target: \"_blank\",\n                        rel: \"noopener noreferrer\",\n                        className: \"border-2 border-gray-500 rounded-lg p-1 hover:scale-105 hover:border-blue-500 transition\",\n                        children: [\n                            project.image && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                src: project.image,\n                                alt: project.name,\n                                width: 750,\n                                height: 300,\n                                className: \"object-cover rounded-lg border border-gray-500\"\n                            }, void 0, false, {\n                                fileName: \"/Users/Amir/untitled folder/NextJS-Portfolio/app/(site)/page.tsx\",\n                                lineNumber: 41,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center justify-center mt-2 font-extrabold bg-gradient-to-r from-blue-400 via-purple-500 to-purple-600 bg-clip-text text-transparent\",\n                                children: project.name\n                            }, void 0, false, {\n                                fileName: \"/Users/Amir/untitled folder/NextJS-Portfolio/app/(site)/page.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-lg text-gray-700 mt-5\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_portabletext_react__WEBPACK_IMPORTED_MODULE_5__.PortableText, {\n                                    value: project.content\n                                }, void 0, false, {\n                                    fileName: \"/Users/Amir/untitled folder/NextJS-Portfolio/app/(site)/page.tsx\",\n                                    lineNumber: 54,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/Amir/untitled folder/NextJS-Portfolio/app/(site)/page.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, project._id, true, {\n                        fileName: \"/Users/Amir/untitled folder/NextJS-Portfolio/app/(site)/page.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/Amir/untitled folder/NextJS-Portfolio/app/(site)/page.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contact_contact__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/Amir/untitled folder/NextJS-Portfolio/app/(site)/page.tsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/Amir/untitled folder/NextJS-Portfolio/app/(site)/page.tsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, this);\n}\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8oc2l0ZSkvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBb0Q7QUFDckI7QUFDRjtBQUNlO0FBQ087QUFFcEMsZUFBZUs7SUFDNUIsTUFBTUMsV0FBVyxNQUFNTixpRUFBV0E7SUFFbEMscUJBQ0UsOERBQUNPO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFBR0QsV0FBVTs7b0JBQTBCO29CQUN2QjtrQ0FDZiw4REFBQ0U7d0JBQUtGLFdBQVU7a0NBQTRGOzs7Ozs7b0JBRXJHO2tDQUVQLDhEQUFDRzt3QkFDQ0gsV0FBVTt3QkFDVkksS0FBSTt3QkFDSkMsS0FBSTs7Ozs7Ozs7Ozs7OzBCQUlSLDhEQUFDQztnQkFBRU4sV0FBVTswQkFBNkI7Ozs7OzswQkFJMUMsOERBQUNPO2dCQUFHQyxJQUFHO2dCQUFXUixXQUFVOzBCQUF5Qzs7Ozs7OzBCQUVyRSw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ1pGLFNBQVNXLEdBQUcsQ0FBQyxDQUFDQyx3QkFDYiw4REFBQ2hCLGlEQUFJQTt3QkFDSGlCLE1BQU0sR0FBZSxPQUFaRCxRQUFRRSxHQUFHO3dCQUVwQkMsUUFBTzt3QkFDUEMsS0FBSTt3QkFDSmQsV0FBVTs7NEJBRVRVLFFBQVFLLEtBQUssa0JBQ1osOERBQUN0QixrREFBS0E7Z0NBQ0pXLEtBQUtNLFFBQVFLLEtBQUs7Z0NBQ2xCVixLQUFLSyxRQUFRTSxJQUFJO2dDQUNqQkMsT0FBTztnQ0FDUEMsUUFBUTtnQ0FDUmxCLFdBQVU7Ozs7OzswQ0FJZCw4REFBQ0Q7Z0NBQUlDLFdBQVU7MENBQ1pVLFFBQVFNLElBQUk7Ozs7OzswQ0FFZiw4REFBQ2pCO2dDQUFJQyxXQUFVOzBDQUNiLDRFQUFDSiw2REFBWUE7b0NBQUN1QixPQUFPVCxRQUFRVSxPQUFPOzs7Ozs7Ozs7Ozs7dUJBbkJqQ1YsUUFBUVcsR0FBRzs7Ozs7Ozs7OzswQkF3QnRCLDhEQUFDMUIsd0RBQVdBOzs7Ozs7Ozs7OztBQUdsQjtLQXZEOEJFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC8oc2l0ZSkvcGFnZS50c3g/MDgxYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRQcm9qZWN0cyB9IGZyb20gXCJAL3Nhbml0eS9zYW5pdHktdXRpbHNcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IENvbnRhY3RGb3JtIGZyb20gXCIuL2NvbnRhY3QvY29udGFjdFwiO1xuaW1wb3J0IHsgUG9ydGFibGVUZXh0IH0gZnJvbSBcIkBwb3J0YWJsZXRleHQvcmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgcHJvamVjdHMgPSBhd2FpdCBnZXRQcm9qZWN0cygpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmF5LTEwMCBtaW4taC1zY3JlZW4gcC04XCI+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC03eGwgZm9udC1leHRyYWJvbGRcIj5cbiAgICAgICAgSGVsbG8gSSZhcG9zO217XCIgXCJ9XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJnLWdyYWRpZW50LXRvLXIgZnJvbS1ibHVlLTQwMCB2aWEtcHVycGxlLTUwMCB0by1wdXJwbGUtNjAwIGJnLWNsaXAtdGV4dCB0ZXh0LXRyYW5zcGFyZW50XCI+XG4gICAgICAgICAgQW1pclxuICAgICAgICA8L3NwYW4+XG4gICAgICAgICFcbiAgICAgICAgPGltZ1xuICAgICAgICAgIGNsYXNzTmFtZT1cIi1tdC04IHctMzYgaC0zNiBmbG9hdC1yaWdodCByb3VuZGVkLWZ1bGxcIlxuICAgICAgICAgIHNyYz1cIi4uL2ltYWdlcy9JTUdfMDkwOS5KUEdcIlxuICAgICAgICAgIGFsdD1cIk1lZGl1bSBhdmF0YXJcIlxuICAgICAgICAvPlxuICAgICAgPC9oMT5cblxuICAgICAgPHAgY2xhc3NOYW1lPVwibXQtMyB0ZXh0LXhsIHRleHQtZ3JheS02MDBcIj5cbiAgICAgICAgQWNjb21wbGlzaGVkIGFuZCBkeW5hbWljIHByb2Zlc3Npb25hbCB3aXRoIGEgcHJvdmVuIHRyYWNrIHJlY29yZCBvZiBpbm5vdmF0aXZlIHdlYiBkZXZlbG9wbWVudCwgc3RyYXRlZ2ljIGJ1c2luZXNzIG9wZXJhdGlvbnMsIGFuZCBhZHZhbmNlZCBwcm9ibGVtLXNvbHZpbmcuIEV4cGVydCBpbiB0cmFuc2xhdGluZyBjb21wbGV4IGJ1c2luZXNzIHJlcXVpcmVtZW50cyBpbnRvIHRlY2huaWNhbCBzb2x1dGlvbnMsIGRlbGl2ZXJpbmcgaGlnaC1xdWFsaXR5IHByb2plY3RzIHRoYXQgZW5oYW5jZSBvcmdhbml6YXRpb25hbCBwZXJmb3JtYW5jZS4gUmVub3duZWQgZm9yIGRyaXZpbmcgb3BlcmF0aW9uYWwgZXhjZWxsZW5jZSwgbGV2ZXJhZ2luZyBleHRlbnNpdmUgZXhwZXJpZW5jZSBpbiBBUEkgaW50ZWdyYXRpb24sIGFuZCBjdWx0aXZhdGluZyB1c2VyLWNlbnRyaWMgZXhwZXJpZW5jZXMgdGhhdCBwcm9wZWwgbGVhZGluZyBvcmdhbml6YXRpb25zIHRvIHRoZSBmb3JlZnJvbnQgb2YgdGhlaXIgaW5kdXN0cmllcy4gQSBjb2xsYWJvcmF0aXZlIGxlYWRlciBhbmQgbWVudG9yIGNvbW1pdHRlZCB0byBmb3N0ZXJpbmcgdGVhbSBncm93dGggYW5kIGNoYW1waW9uaW5nIGFnaWxlIG1ldGhvZG9sb2dpZXMgdG8gYWNjZWxlcmF0ZSBwcm9qZWN0IGRlbGl2ZXJ5IGFuZCBhY2hpZXZlIGV4Y2VwdGlvbmFsIHJlc3VsdHMuXG4gICAgICA8L3A+XG5cbiAgICAgIDxoMiBpZD1cInByb2plY3RzXCIgY2xhc3NOYW1lPVwibXQtMjQgZm9udC1ib2xkIHRleHQtZ3JheS03MDAgdGV4dC0zeGxcIj4gTXkgUHJvamVjdHM8L2gyPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTUgZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtMyBnYXAtOFwiPlxuICAgICAgICB7cHJvamVjdHMubWFwKChwcm9qZWN0KSA9PiAoXG4gICAgICAgICAgPExpbmtcbiAgICAgICAgICAgIGhyZWY9e2Ake3Byb2plY3QudXJsfWB9XG4gICAgICAgICAgICBrZXk9e3Byb2plY3QuX2lkfVxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCIgXG4gICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlci0yIGJvcmRlci1ncmF5LTUwMCByb3VuZGVkLWxnIHAtMSBob3ZlcjpzY2FsZS0xMDUgaG92ZXI6Ym9yZGVyLWJsdWUtNTAwIHRyYW5zaXRpb25cIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtwcm9qZWN0LmltYWdlICYmIChcbiAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgc3JjPXtwcm9qZWN0LmltYWdlfVxuICAgICAgICAgICAgICAgIGFsdD17cHJvamVjdC5uYW1lfVxuICAgICAgICAgICAgICAgIHdpZHRoPXs3NTB9XG4gICAgICAgICAgICAgICAgaGVpZ2h0PXszMDB9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib2JqZWN0LWNvdmVyIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1ncmF5LTUwMFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG10LTIgZm9udC1leHRyYWJvbGQgYmctZ3JhZGllbnQtdG8tciBmcm9tLWJsdWUtNDAwIHZpYS1wdXJwbGUtNTAwIHRvLXB1cnBsZS02MDAgYmctY2xpcC10ZXh0IHRleHQtdHJhbnNwYXJlbnRcIj5cbiAgICAgICAgICAgICAge3Byb2plY3QubmFtZX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWxnIHRleHQtZ3JheS03MDAgbXQtNVwiPlxuICAgICAgICAgICAgICA8UG9ydGFibGVUZXh0IHZhbHVlPXtwcm9qZWN0LmNvbnRlbnR9Lz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxDb250YWN0Rm9ybS8+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiZ2V0UHJvamVjdHMiLCJJbWFnZSIsIkxpbmsiLCJDb250YWN0Rm9ybSIsIlBvcnRhYmxlVGV4dCIsIkhvbWUiLCJwcm9qZWN0cyIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwic3BhbiIsImltZyIsInNyYyIsImFsdCIsInAiLCJoMiIsImlkIiwibWFwIiwicHJvamVjdCIsImhyZWYiLCJ1cmwiLCJ0YXJnZXQiLCJyZWwiLCJpbWFnZSIsIm5hbWUiLCJ3aWR0aCIsImhlaWdodCIsInZhbHVlIiwiY29udGVudCIsIl9pZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(site)/page.tsx\n"));

/***/ })

});