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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _contact_contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact/contact */ \"(app-pages-browser)/./app/(site)/contact/contact.tsx\");\n/* harmony import */ var _portabletext_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @portabletext/react */ \"(app-pages-browser)/./node_modules/@portabletext/react/dist/index.js\");\n/* harmony import */ var _sanity_sanity_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/sanity/sanity-utils */ \"(app-pages-browser)/./sanity/sanity-utils.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Home() {\n    var _projects_currentIndex, _projects_currentIndex1, _projects_currentIndex2, _projects_currentIndex3, _projects_currentIndex4, _projects_currentIndex5;\n    _s();\n    const [projects, setProjects] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [currentIndex, setCurrentIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchProjects = async ()=>{\n            const projectData = await (0,_sanity_sanity_utils__WEBPACK_IMPORTED_MODULE_5__.getProjects)();\n            setProjects(projectData);\n        };\n        fetchProjects();\n    }, []);\n    const goToNextProject = ()=>{\n        setCurrentIndex((prevIndex)=>(prevIndex + 1) % projects.length);\n    };\n    const goToPrevProject = ()=>{\n        setCurrentIndex((prevIndex)=>prevIndex === 0 ? projects.length - 1 : prevIndex - 1);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-gray-100 min-h-screen p-8\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-7xl font-extrabold\",\n                children: [\n                    \"Hello I'm\",\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"bg-gradient-to-r from-blue-400 via-purple-500 to-purple-600 bg-clip-text text-transparent\",\n                        children: \"Amir\"\n                    }, void 0, false, {\n                        fileName: \"/Users/Amir/untitled folder/NextJS-Portfolio/app/(site)/page.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, this),\n                    \"!\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        className: \"-mt-8 w-36 h-36 float-right rounded-full\",\n                        src: \"../images/IMG_0909.JPG\",\n                        alt: \"Medium avatar\"\n                    }, void 0, false, {\n                        fileName: \"/Users/Amir/untitled folder/NextJS-Portfolio/app/(site)/page.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/Amir/untitled folder/NextJS-Portfolio/app/(site)/page.tsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"mt-3 text-xl text-gray-600\",\n                children: \"Accomplished and dynamic professional with a proven track record of innovative web development, strategic business operations, and advanced problem-solving. Expert in translating complex business requirements into technical solutions, delivering high-quality projects that enhance organizational performance. Renowned for driving operational excellence, leveraging extensive experience in API integration, and cultivating user-centric experiences that propel leading organizations to the forefront of their industries. A collaborative leader and mentor committed to fostering team growth and championing agile methodologies to accelerate project delivery and achieve exceptional results.\"\n            }, void 0, false, {\n                fileName: \"/Users/Amir/untitled folder/NextJS-Portfolio/app/(site)/page.tsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                id: \"projects\",\n                className: \"mt-24 font-bold text-gray-700 text-3xl\",\n                children: \"My Projects\"\n            }, void 0, false, {\n                fileName: \"/Users/Amir/untitled folder/NextJS-Portfolio/app/(site)/page.tsx\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-5 relative\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative flex items-center justify-between\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"cursor-pointer text-xl font-bold\",\n                            onClick: goToPrevProject,\n                            children: \"<\"\n                        }, void 0, false, {\n                            fileName: \"/Users/Amir/untitled folder/NextJS-Portfolio/app/(site)/page.tsx\",\n                            lineNumber: 75,\n                            columnNumber: 5\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex-grow\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                href: \"\".concat((_projects_currentIndex = projects[currentIndex]) === null || _projects_currentIndex === void 0 ? void 0 : _projects_currentIndex.url),\n                                target: \"_blank\",\n                                rel: \"noopener noreferrer\",\n                                children: [\n                                    ((_projects_currentIndex1 = projects[currentIndex]) === null || _projects_currentIndex1 === void 0 ? void 0 : _projects_currentIndex1.image) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                        src: (_projects_currentIndex2 = projects[currentIndex]) === null || _projects_currentIndex2 === void 0 ? void 0 : _projects_currentIndex2.image,\n                                        alt: (_projects_currentIndex3 = projects[currentIndex]) === null || _projects_currentIndex3 === void 0 ? void 0 : _projects_currentIndex3.name,\n                                        width: 750,\n                                        height: 300,\n                                        className: \"object-cover rounded-lg border border-gray-500\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/Amir/untitled folder/NextJS-Portfolio/app/(site)/page.tsx\",\n                                        lineNumber: 85,\n                                        columnNumber: 11\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex items-center justify-center mt-2 font-extrabold bg-gradient-to-r from-blue-400 via-purple-500 to-purple-600 bg-clip-text text-transparent\",\n                                        children: (_projects_currentIndex4 = projects[currentIndex]) === null || _projects_currentIndex4 === void 0 ? void 0 : _projects_currentIndex4.name\n                                    }, void 0, false, {\n                                        fileName: \"/Users/Amir/untitled folder/NextJS-Portfolio/app/(site)/page.tsx\",\n                                        lineNumber: 94,\n                                        columnNumber: 9\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"text-lg text-gray-700 mt-5\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_portabletext_react__WEBPACK_IMPORTED_MODULE_6__.PortableText, {\n                                            value: (_projects_currentIndex5 = projects[currentIndex]) === null || _projects_currentIndex5 === void 0 ? void 0 : _projects_currentIndex5.content\n                                        }, void 0, false, {\n                                            fileName: \"/Users/Amir/untitled folder/NextJS-Portfolio/app/(site)/page.tsx\",\n                                            lineNumber: 98,\n                                            columnNumber: 11\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/Amir/untitled folder/NextJS-Portfolio/app/(site)/page.tsx\",\n                                        lineNumber: 97,\n                                        columnNumber: 9\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/Amir/untitled folder/NextJS-Portfolio/app/(site)/page.tsx\",\n                                lineNumber: 79,\n                                columnNumber: 7\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/Amir/untitled folder/NextJS-Portfolio/app/(site)/page.tsx\",\n                            lineNumber: 78,\n                            columnNumber: 5\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"cursor-pointer text-xl font-bold\",\n                            onClick: goToNextProject,\n                            children: \">\"\n                        }, void 0, false, {\n                            fileName: \"/Users/Amir/untitled folder/NextJS-Portfolio/app/(site)/page.tsx\",\n                            lineNumber: 102,\n                            columnNumber: 5\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/Amir/untitled folder/NextJS-Portfolio/app/(site)/page.tsx\",\n                    lineNumber: 74,\n                    columnNumber: 3\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/Amir/untitled folder/NextJS-Portfolio/app/(site)/page.tsx\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contact_contact__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/Amir/untitled folder/NextJS-Portfolio/app/(site)/page.tsx\",\n                lineNumber: 107,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/Amir/untitled folder/NextJS-Portfolio/app/(site)/page.tsx\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"nJ6lXbSnJFzp4Ul+Xo1OvAgUXVk=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8oc2l0ZSkvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFFNEM7QUFDYjtBQUNGO0FBQ2U7QUFDTztBQUNDO0FBVXJDLFNBQVNPO1FBOERQQyx3QkFJUkEseUJBRVFBLHlCQUNBQSx5QkFRTkEseUJBR29CQTs7SUEvRTdCLE1BQU0sQ0FBQ0EsVUFBVUMsWUFBWSxHQUFHUiwrQ0FBUUEsQ0FBWSxFQUFFO0lBQ3RELE1BQU0sQ0FBQ1MsY0FBY0MsZ0JBQWdCLEdBQUdWLCtDQUFRQSxDQUFDO0lBRWpERCxnREFBU0EsQ0FBQztRQUNSLE1BQU1ZLGdCQUFnQjtZQUNwQixNQUFNQyxjQUFjLE1BQU1QLGlFQUFXQTtZQUNyQ0csWUFBWUk7UUFDZDtRQUVBRDtJQUNGLEdBQUcsRUFBRTtJQUVMLE1BQU1FLGtCQUFrQjtRQUN0QkgsZ0JBQWdCLENBQUNJLFlBQWMsQ0FBQ0EsWUFBWSxLQUFLUCxTQUFTUSxNQUFNO0lBQ2xFO0lBRUEsTUFBTUMsa0JBQWtCO1FBQ3RCTixnQkFBZ0IsQ0FBQ0ksWUFDZkEsY0FBYyxJQUFJUCxTQUFTUSxNQUFNLEdBQUcsSUFBSUQsWUFBWTtJQUV4RDtJQUVBLHFCQUNFLDhEQUFDRztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQUdELFdBQVU7O29CQUEwQjtvQkFDdkI7a0NBQ2YsOERBQUNFO3dCQUFLRixXQUFVO2tDQUE0Rjs7Ozs7O29CQUVyRztrQ0FFUCw4REFBQ0c7d0JBQ0NILFdBQVU7d0JBQ1ZJLEtBQUk7d0JBQ0pDLEtBQUk7Ozs7Ozs7Ozs7OzswQkFJUiw4REFBQ0M7Z0JBQUVOLFdBQVU7MEJBQTZCOzs7Ozs7MEJBYTFDLDhEQUFDTztnQkFBR0MsSUFBRztnQkFBV1IsV0FBVTswQkFBeUM7Ozs7OzswQkFJckUsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNuQiw0RUFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDRDs0QkFBSUMsV0FBVTs0QkFBbUNTLFNBQVNYO3NDQUFpQjs7Ozs7O3NDQUc1RSw4REFBQ0M7NEJBQUlDLFdBQVU7c0NBQ2IsNEVBQUNoQixpREFBSUE7Z0NBQ0gwQixNQUFNLEdBQStCLFFBQTVCckIseUJBQUFBLFFBQVEsQ0FBQ0UsYUFBYSxjQUF0QkYsNkNBQUFBLHVCQUF3QnNCLEdBQUc7Z0NBQ3BDQyxRQUFPO2dDQUNQQyxLQUFJOztvQ0FFSHhCLEVBQUFBLDBCQUFBQSxRQUFRLENBQUNFLGFBQWEsY0FBdEJGLDhDQUFBQSx3QkFBd0J5QixLQUFLLG1CQUM1Qiw4REFBQy9CLGtEQUFLQTt3Q0FDSnFCLEdBQUcsR0FBRWYsMEJBQUFBLFFBQVEsQ0FBQ0UsYUFBYSxjQUF0QkYsOENBQUFBLHdCQUF3QnlCLEtBQUs7d0NBQ2xDVCxHQUFHLEdBQUVoQiwwQkFBQUEsUUFBUSxDQUFDRSxhQUFhLGNBQXRCRiw4Q0FBQUEsd0JBQXdCMEIsSUFBSTt3Q0FDakNDLE9BQU87d0NBQ1BDLFFBQVE7d0NBQ1JqQixXQUFVOzs7Ozs7a0RBSWQsOERBQUNEO3dDQUFJQyxXQUFVO21EQUNaWCwwQkFBQUEsUUFBUSxDQUFDRSxhQUFhLGNBQXRCRiw4Q0FBQUEsd0JBQXdCMEIsSUFBSTs7Ozs7O2tEQUUvQiw4REFBQ2hCO3dDQUFJQyxXQUFVO2tEQUNiLDRFQUFDZCw2REFBWUE7NENBQUNnQyxLQUFLLEdBQUU3QiwwQkFBQUEsUUFBUSxDQUFDRSxhQUFhLGNBQXRCRiw4Q0FBQUEsd0JBQXdCOEIsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQ0FJMUQsOERBQUNwQjs0QkFBSUMsV0FBVTs0QkFBbUNTLFNBQVNkO3NDQUFpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSzFFLDhEQUFDVix3REFBV0E7Ozs7Ozs7Ozs7O0FBR2xCO0dBNUZ3Qkc7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwLyhzaXRlKS9wYWdlLnRzeD8wODFjIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBDb250YWN0Rm9ybSBmcm9tIFwiLi9jb250YWN0L2NvbnRhY3RcIjtcbmltcG9ydCB7IFBvcnRhYmxlVGV4dCB9IGZyb20gXCJAcG9ydGFibGV0ZXh0L3JlYWN0XCI7XG5pbXBvcnQgeyBnZXRQcm9qZWN0cyB9IGZyb20gXCJAL3Nhbml0eS9zYW5pdHktdXRpbHNcIjtcblxuaW50ZXJmYWNlIFByb2plY3Qge1xuICBfaWQ6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICB1cmw6IHN0cmluZztcbiAgaW1hZ2U6IHN0cmluZztcbiAgY29udGVudDogYW55O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbcHJvamVjdHMsIHNldFByb2plY3RzXSA9IHVzZVN0YXRlPFByb2plY3RbXT4oW10pO1xuICBjb25zdCBbY3VycmVudEluZGV4LCBzZXRDdXJyZW50SW5kZXhdID0gdXNlU3RhdGUoMCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaFByb2plY3RzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgcHJvamVjdERhdGEgPSBhd2FpdCBnZXRQcm9qZWN0cygpO1xuICAgICAgc2V0UHJvamVjdHMocHJvamVjdERhdGEpO1xuICAgIH07XG5cbiAgICBmZXRjaFByb2plY3RzKCk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBnb1RvTmV4dFByb2plY3QgPSAoKSA9PiB7XG4gICAgc2V0Q3VycmVudEluZGV4KChwcmV2SW5kZXgpID0+IChwcmV2SW5kZXggKyAxKSAlIHByb2plY3RzLmxlbmd0aCk7XG4gIH07XG5cbiAgY29uc3QgZ29Ub1ByZXZQcm9qZWN0ID0gKCkgPT4ge1xuICAgIHNldEN1cnJlbnRJbmRleCgocHJldkluZGV4KSA9PlxuICAgICAgcHJldkluZGV4ID09PSAwID8gcHJvamVjdHMubGVuZ3RoIC0gMSA6IHByZXZJbmRleCAtIDFcbiAgICApO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmF5LTEwMCBtaW4taC1zY3JlZW4gcC04XCI+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC03eGwgZm9udC1leHRyYWJvbGRcIj5cbiAgICAgICAgSGVsbG8gSSZhcG9zO217XCIgXCJ9XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJnLWdyYWRpZW50LXRvLXIgZnJvbS1ibHVlLTQwMCB2aWEtcHVycGxlLTUwMCB0by1wdXJwbGUtNjAwIGJnLWNsaXAtdGV4dCB0ZXh0LXRyYW5zcGFyZW50XCI+XG4gICAgICAgICAgQW1pclxuICAgICAgICA8L3NwYW4+XG4gICAgICAgICFcbiAgICAgICAgPGltZ1xuICAgICAgICAgIGNsYXNzTmFtZT1cIi1tdC04IHctMzYgaC0zNiBmbG9hdC1yaWdodCByb3VuZGVkLWZ1bGxcIlxuICAgICAgICAgIHNyYz1cIi4uL2ltYWdlcy9JTUdfMDkwOS5KUEdcIlxuICAgICAgICAgIGFsdD1cIk1lZGl1bSBhdmF0YXJcIlxuICAgICAgICAvPlxuICAgICAgPC9oMT5cblxuICAgICAgPHAgY2xhc3NOYW1lPVwibXQtMyB0ZXh0LXhsIHRleHQtZ3JheS02MDBcIj5cbiAgICAgICAgQWNjb21wbGlzaGVkIGFuZCBkeW5hbWljIHByb2Zlc3Npb25hbCB3aXRoIGEgcHJvdmVuIHRyYWNrIHJlY29yZCBvZlxuICAgICAgICBpbm5vdmF0aXZlIHdlYiBkZXZlbG9wbWVudCwgc3RyYXRlZ2ljIGJ1c2luZXNzIG9wZXJhdGlvbnMsIGFuZCBhZHZhbmNlZFxuICAgICAgICBwcm9ibGVtLXNvbHZpbmcuIEV4cGVydCBpbiB0cmFuc2xhdGluZyBjb21wbGV4IGJ1c2luZXNzIHJlcXVpcmVtZW50c1xuICAgICAgICBpbnRvIHRlY2huaWNhbCBzb2x1dGlvbnMsIGRlbGl2ZXJpbmcgaGlnaC1xdWFsaXR5IHByb2plY3RzIHRoYXQgZW5oYW5jZVxuICAgICAgICBvcmdhbml6YXRpb25hbCBwZXJmb3JtYW5jZS4gUmVub3duZWQgZm9yIGRyaXZpbmcgb3BlcmF0aW9uYWwgZXhjZWxsZW5jZSxcbiAgICAgICAgbGV2ZXJhZ2luZyBleHRlbnNpdmUgZXhwZXJpZW5jZSBpbiBBUEkgaW50ZWdyYXRpb24sIGFuZCBjdWx0aXZhdGluZ1xuICAgICAgICB1c2VyLWNlbnRyaWMgZXhwZXJpZW5jZXMgdGhhdCBwcm9wZWwgbGVhZGluZyBvcmdhbml6YXRpb25zIHRvIHRoZVxuICAgICAgICBmb3JlZnJvbnQgb2YgdGhlaXIgaW5kdXN0cmllcy4gQSBjb2xsYWJvcmF0aXZlIGxlYWRlciBhbmQgbWVudG9yXG4gICAgICAgIGNvbW1pdHRlZCB0byBmb3N0ZXJpbmcgdGVhbSBncm93dGggYW5kIGNoYW1waW9uaW5nIGFnaWxlIG1ldGhvZG9sb2dpZXNcbiAgICAgICAgdG8gYWNjZWxlcmF0ZSBwcm9qZWN0IGRlbGl2ZXJ5IGFuZCBhY2hpZXZlIGV4Y2VwdGlvbmFsIHJlc3VsdHMuXG4gICAgICA8L3A+XG5cbiAgICAgIDxoMiBpZD1cInByb2plY3RzXCIgY2xhc3NOYW1lPVwibXQtMjQgZm9udC1ib2xkIHRleHQtZ3JheS03MDAgdGV4dC0zeGxcIj5cbiAgICAgICAgTXkgUHJvamVjdHNcbiAgICAgIDwvaDI+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNSByZWxhdGl2ZVwiPlxuICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgdGV4dC14bCBmb250LWJvbGRcIiBvbkNsaWNrPXtnb1RvUHJldlByb2plY3R9PlxuICAgICAgJmx0O1xuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1ncm93XCI+XG4gICAgICA8TGlua1xuICAgICAgICBocmVmPXtgJHtwcm9qZWN0c1tjdXJyZW50SW5kZXhdPy51cmx9YH1cbiAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICA+XG4gICAgICAgIHtwcm9qZWN0c1tjdXJyZW50SW5kZXhdPy5pbWFnZSAmJiAoXG4gICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICBzcmM9e3Byb2plY3RzW2N1cnJlbnRJbmRleF0/LmltYWdlfVxuICAgICAgICAgICAgYWx0PXtwcm9qZWN0c1tjdXJyZW50SW5kZXhdPy5uYW1lfVxuICAgICAgICAgICAgd2lkdGg9ezc1MH1cbiAgICAgICAgICAgIGhlaWdodD17MzAwfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwib2JqZWN0LWNvdmVyIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1ncmF5LTUwMFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG10LTIgZm9udC1leHRyYWJvbGQgYmctZ3JhZGllbnQtdG8tciBmcm9tLWJsdWUtNDAwIHZpYS1wdXJwbGUtNTAwIHRvLXB1cnBsZS02MDAgYmctY2xpcC10ZXh0IHRleHQtdHJhbnNwYXJlbnRcIj5cbiAgICAgICAgICB7cHJvamVjdHNbY3VycmVudEluZGV4XT8ubmFtZX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1sZyB0ZXh0LWdyYXktNzAwIG10LTVcIj5cbiAgICAgICAgICA8UG9ydGFibGVUZXh0IHZhbHVlPXtwcm9qZWN0c1tjdXJyZW50SW5kZXhdPy5jb250ZW50fSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTGluaz5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyIHRleHQteGwgZm9udC1ib2xkXCIgb25DbGljaz17Z29Ub05leHRQcm9qZWN0fT5cbiAgICAgICZndDtcbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cbiAgICAgIDxDb250YWN0Rm9ybSAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSW1hZ2UiLCJMaW5rIiwiQ29udGFjdEZvcm0iLCJQb3J0YWJsZVRleHQiLCJnZXRQcm9qZWN0cyIsIkhvbWUiLCJwcm9qZWN0cyIsInNldFByb2plY3RzIiwiY3VycmVudEluZGV4Iiwic2V0Q3VycmVudEluZGV4IiwiZmV0Y2hQcm9qZWN0cyIsInByb2plY3REYXRhIiwiZ29Ub05leHRQcm9qZWN0IiwicHJldkluZGV4IiwibGVuZ3RoIiwiZ29Ub1ByZXZQcm9qZWN0IiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJzcGFuIiwiaW1nIiwic3JjIiwiYWx0IiwicCIsImgyIiwiaWQiLCJvbkNsaWNrIiwiaHJlZiIsInVybCIsInRhcmdldCIsInJlbCIsImltYWdlIiwibmFtZSIsIndpZHRoIiwiaGVpZ2h0IiwidmFsdWUiLCJjb250ZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(site)/page.tsx\n"));

/***/ })

});