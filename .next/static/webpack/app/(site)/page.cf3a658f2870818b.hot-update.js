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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _contact_contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact/contact */ \"(app-pages-browser)/./app/(site)/contact/contact.tsx\");\n/* harmony import */ var _portabletext_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @portabletext/react */ \"(app-pages-browser)/./node_modules/@portabletext/react/dist/index.js\");\n/* harmony import */ var _sanity_sanity_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/sanity/sanity-utils */ \"(app-pages-browser)/./sanity/sanity-utils.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Home() {\n    var _projects_currentIndex, _projects_currentIndex1, _projects_currentIndex2, _projects_currentIndex3, _projects_currentIndex4, _projects_currentIndex5;\n    _s();\n    const [projects, setProjects] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [currentIndex, setCurrentIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchProjects = async ()=>{\n            const projectData = await (0,_sanity_sanity_utils__WEBPACK_IMPORTED_MODULE_5__.getProjects)();\n            setProjects(projectData);\n        };\n        fetchProjects();\n    }, []);\n    const goToNextProject = ()=>{\n        setCurrentIndex((prevIndex)=>(prevIndex + 1) % projects.length);\n    };\n    const goToPrevProject = ()=>{\n        setCurrentIndex((prevIndex)=>prevIndex === 0 ? projects.length - 1 : prevIndex - 1);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-gray-100 min-h-screen p-8\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-7xl font-extrabold\",\n                children: [\n                    \"Hello I'm\",\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"bg-gradient-to-r from-blue-400 via-purple-500 to-purple-600 bg-clip-text text-transparent\",\n                        children: \"Amir\"\n                    }, void 0, false, {\n                        fileName: \"/Users/Amir/untitled folder/NextJS-Portfolio/app/(site)/page.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, this),\n                    \"!\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        className: \"-mt-8 w-36 h-36 float-right rounded-full\",\n                        src: \"../images/IMG_0909.JPG\",\n                        alt: \"Medium avatar\"\n                    }, void 0, false, {\n                        fileName: \"/Users/Amir/untitled folder/NextJS-Portfolio/app/(site)/page.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/Amir/untitled folder/NextJS-Portfolio/app/(site)/page.tsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"mt-3 text-xl text-gray-600\",\n                children: \"Accomplished and dynamic professional with a proven track record of innovative web development, strategic business operations, and advanced problem-solving. Expert in translating complex business requirements into technical solutions, delivering high-quality projects that enhance organizational performance. Renowned for driving operational excellence, leveraging extensive experience in API integration, and cultivating user-centric experiences that propel leading organizations to the forefront of their industries. A collaborative leader and mentor committed to fostering team growth and championing agile methodologies to accelerate project delivery and achieve exceptional results.\"\n            }, void 0, false, {\n                fileName: \"/Users/Amir/untitled folder/NextJS-Portfolio/app/(site)/page.tsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                id: \"projects\",\n                className: \"mt-24 font-bold text-gray-700 text-3xl\",\n                children: \"My Projects\"\n            }, void 0, false, {\n                fileName: \"/Users/Amir/untitled folder/NextJS-Portfolio/app/(site)/page.tsx\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-5 relative\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative flex items-center justify-between\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"cursor-pointer text-xl font-bold\",\n                            onClick: goToPrevProject,\n                            children: [\n                                \" \",\n                                \" \",\n                                \"<\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/Amir/untitled folder/NextJS-Portfolio/app/(site)/page.tsx\",\n                            lineNumber: 75,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex-grow\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                href: \"\".concat((_projects_currentIndex = projects[currentIndex]) === null || _projects_currentIndex === void 0 ? void 0 : _projects_currentIndex.url),\n                                target: \"_blank\",\n                                rel: \"noopener noreferrer\",\n                                children: [\n                                    ((_projects_currentIndex1 = projects[currentIndex]) === null || _projects_currentIndex1 === void 0 ? void 0 : _projects_currentIndex1.image) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                        src: (_projects_currentIndex2 = projects[currentIndex]) === null || _projects_currentIndex2 === void 0 ? void 0 : _projects_currentIndex2.image,\n                                        alt: (_projects_currentIndex3 = projects[currentIndex]) === null || _projects_currentIndex3 === void 0 ? void 0 : _projects_currentIndex3.name,\n                                        width: 750,\n                                        height: 300,\n                                        className: \"object-cover rounded-lg border border-gray-500\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/Amir/untitled folder/NextJS-Portfolio/app/(site)/page.tsx\",\n                                        lineNumber: 88,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex items-center justify-center mt-2 font-extrabold bg-gradient-to-r from-blue-400 via-purple-500 to-purple-600 bg-clip-text text-transparent\",\n                                        children: (_projects_currentIndex4 = projects[currentIndex]) === null || _projects_currentIndex4 === void 0 ? void 0 : _projects_currentIndex4.name\n                                    }, void 0, false, {\n                                        fileName: \"/Users/Amir/untitled folder/NextJS-Portfolio/app/(site)/page.tsx\",\n                                        lineNumber: 97,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"text-lg text-gray-700 mt-5\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_portabletext_react__WEBPACK_IMPORTED_MODULE_6__.PortableText, {\n                                            value: (_projects_currentIndex5 = projects[currentIndex]) === null || _projects_currentIndex5 === void 0 ? void 0 : _projects_currentIndex5.content\n                                        }, void 0, false, {\n                                            fileName: \"/Users/Amir/untitled folder/NextJS-Portfolio/app/(site)/page.tsx\",\n                                            lineNumber: 101,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/Amir/untitled folder/NextJS-Portfolio/app/(site)/page.tsx\",\n                                        lineNumber: 100,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/Amir/untitled folder/NextJS-Portfolio/app/(site)/page.tsx\",\n                                lineNumber: 82,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/Amir/untitled folder/NextJS-Portfolio/app/(site)/page.tsx\",\n                            lineNumber: 81,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"cursor-pointer text-xl font-bold\",\n                            onClick: goToNextProject,\n                            children: \">\"\n                        }, void 0, false, {\n                            fileName: \"/Users/Amir/untitled folder/NextJS-Portfolio/app/(site)/page.tsx\",\n                            lineNumber: 105,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/Amir/untitled folder/NextJS-Portfolio/app/(site)/page.tsx\",\n                    lineNumber: 74,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/Amir/untitled folder/NextJS-Portfolio/app/(site)/page.tsx\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contact_contact__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/Amir/untitled folder/NextJS-Portfolio/app/(site)/page.tsx\",\n                lineNumber: 113,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/Amir/untitled folder/NextJS-Portfolio/app/(site)/page.tsx\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"nJ6lXbSnJFzp4Ul+Xo1OvAgUXVk=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8oc2l0ZSkvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFFNEM7QUFDYjtBQUNGO0FBQ2U7QUFDTztBQUNDO0FBVXJDLFNBQVNPO1FBaUVEQyx3QkFJUkEseUJBRVFBLHlCQUNBQSx5QkFRTkEseUJBR29CQTs7SUFsRm5DLE1BQU0sQ0FBQ0EsVUFBVUMsWUFBWSxHQUFHUiwrQ0FBUUEsQ0FBWSxFQUFFO0lBQ3RELE1BQU0sQ0FBQ1MsY0FBY0MsZ0JBQWdCLEdBQUdWLCtDQUFRQSxDQUFDO0lBRWpERCxnREFBU0EsQ0FBQztRQUNSLE1BQU1ZLGdCQUFnQjtZQUNwQixNQUFNQyxjQUFjLE1BQU1QLGlFQUFXQTtZQUNyQ0csWUFBWUk7UUFDZDtRQUVBRDtJQUNGLEdBQUcsRUFBRTtJQUVMLE1BQU1FLGtCQUFrQjtRQUN0QkgsZ0JBQWdCLENBQUNJLFlBQWMsQ0FBQ0EsWUFBWSxLQUFLUCxTQUFTUSxNQUFNO0lBQ2xFO0lBRUEsTUFBTUMsa0JBQWtCO1FBQ3RCTixnQkFBZ0IsQ0FBQ0ksWUFDZkEsY0FBYyxJQUFJUCxTQUFTUSxNQUFNLEdBQUcsSUFBSUQsWUFBWTtJQUV4RDtJQUVBLHFCQUNFLDhEQUFDRztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQUdELFdBQVU7O29CQUEwQjtvQkFDdkI7a0NBQ2YsOERBQUNFO3dCQUFLRixXQUFVO2tDQUE0Rjs7Ozs7O29CQUVyRztrQ0FFUCw4REFBQ0c7d0JBQ0NILFdBQVU7d0JBQ1ZJLEtBQUk7d0JBQ0pDLEtBQUk7Ozs7Ozs7Ozs7OzswQkFJUiw4REFBQ0M7Z0JBQUVOLFdBQVU7MEJBQTZCOzs7Ozs7MEJBYTFDLDhEQUFDTztnQkFBR0MsSUFBRztnQkFBV1IsV0FBVTswQkFBeUM7Ozs7OzswQkFJckUsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNEOzRCQUNDQyxXQUFVOzRCQUNWUyxTQUFTWDs7Z0NBQ1Y7Z0NBQUU7Z0NBQUk7Ozs7Ozs7c0NBR1AsOERBQUNDOzRCQUFJQyxXQUFVO3NDQUNiLDRFQUFDaEIsaURBQUlBO2dDQUNIMEIsTUFBTSxHQUErQixRQUE1QnJCLHlCQUFBQSxRQUFRLENBQUNFLGFBQWEsY0FBdEJGLDZDQUFBQSx1QkFBd0JzQixHQUFHO2dDQUNwQ0MsUUFBTztnQ0FDUEMsS0FBSTs7b0NBRUh4QixFQUFBQSwwQkFBQUEsUUFBUSxDQUFDRSxhQUFhLGNBQXRCRiw4Q0FBQUEsd0JBQXdCeUIsS0FBSyxtQkFDNUIsOERBQUMvQixrREFBS0E7d0NBQ0pxQixHQUFHLEdBQUVmLDBCQUFBQSxRQUFRLENBQUNFLGFBQWEsY0FBdEJGLDhDQUFBQSx3QkFBd0J5QixLQUFLO3dDQUNsQ1QsR0FBRyxHQUFFaEIsMEJBQUFBLFFBQVEsQ0FBQ0UsYUFBYSxjQUF0QkYsOENBQUFBLHdCQUF3QjBCLElBQUk7d0NBQ2pDQyxPQUFPO3dDQUNQQyxRQUFRO3dDQUNSakIsV0FBVTs7Ozs7O2tEQUlkLDhEQUFDRDt3Q0FBSUMsV0FBVTttREFDWlgsMEJBQUFBLFFBQVEsQ0FBQ0UsYUFBYSxjQUF0QkYsOENBQUFBLHdCQUF3QjBCLElBQUk7Ozs7OztrREFFL0IsOERBQUNoQjt3Q0FBSUMsV0FBVTtrREFDYiw0RUFBQ2QsNkRBQVlBOzRDQUFDZ0MsS0FBSyxHQUFFN0IsMEJBQUFBLFFBQVEsQ0FBQ0UsYUFBYSxjQUF0QkYsOENBQUFBLHdCQUF3QjhCLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBSTFELDhEQUFDcEI7NEJBQ0NDLFdBQVU7NEJBQ1ZTLFNBQVNkO3NDQUNWOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFLTCw4REFBQ1Ysd0RBQVdBOzs7Ozs7Ozs7OztBQUdsQjtHQWxHd0JHO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC8oc2l0ZSkvcGFnZS50c3g/MDgxYyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgQ29udGFjdEZvcm0gZnJvbSBcIi4vY29udGFjdC9jb250YWN0XCI7XG5pbXBvcnQgeyBQb3J0YWJsZVRleHQgfSBmcm9tIFwiQHBvcnRhYmxldGV4dC9yZWFjdFwiO1xuaW1wb3J0IHsgZ2V0UHJvamVjdHMgfSBmcm9tIFwiQC9zYW5pdHkvc2FuaXR5LXV0aWxzXCI7XG5cbmludGVyZmFjZSBQcm9qZWN0IHtcbiAgX2lkOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgdXJsOiBzdHJpbmc7XG4gIGltYWdlOiBzdHJpbmc7XG4gIGNvbnRlbnQ6IGFueTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW3Byb2plY3RzLCBzZXRQcm9qZWN0c10gPSB1c2VTdGF0ZTxQcm9qZWN0W10+KFtdKTtcbiAgY29uc3QgW2N1cnJlbnRJbmRleCwgc2V0Q3VycmVudEluZGV4XSA9IHVzZVN0YXRlKDApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hQcm9qZWN0cyA9IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IHByb2plY3REYXRhID0gYXdhaXQgZ2V0UHJvamVjdHMoKTtcbiAgICAgIHNldFByb2plY3RzKHByb2plY3REYXRhKTtcbiAgICB9O1xuXG4gICAgZmV0Y2hQcm9qZWN0cygpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgZ29Ub05leHRQcm9qZWN0ID0gKCkgPT4ge1xuICAgIHNldEN1cnJlbnRJbmRleCgocHJldkluZGV4KSA9PiAocHJldkluZGV4ICsgMSkgJSBwcm9qZWN0cy5sZW5ndGgpO1xuICB9O1xuXG4gIGNvbnN0IGdvVG9QcmV2UHJvamVjdCA9ICgpID0+IHtcbiAgICBzZXRDdXJyZW50SW5kZXgoKHByZXZJbmRleCkgPT5cbiAgICAgIHByZXZJbmRleCA9PT0gMCA/IHByb2plY3RzLmxlbmd0aCAtIDEgOiBwcmV2SW5kZXggLSAxXG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JheS0xMDAgbWluLWgtc2NyZWVuIHAtOFwiPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtN3hsIGZvbnQtZXh0cmFib2xkXCI+XG4gICAgICAgIEhlbGxvIEkmYXBvcztte1wiIFwifVxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiZy1ncmFkaWVudC10by1yIGZyb20tYmx1ZS00MDAgdmlhLXB1cnBsZS01MDAgdG8tcHVycGxlLTYwMCBiZy1jbGlwLXRleHQgdGV4dC10cmFuc3BhcmVudFwiPlxuICAgICAgICAgIEFtaXJcbiAgICAgICAgPC9zcGFuPlxuICAgICAgICAhXG4gICAgICAgIDxpbWdcbiAgICAgICAgICBjbGFzc05hbWU9XCItbXQtOCB3LTM2IGgtMzYgZmxvYXQtcmlnaHQgcm91bmRlZC1mdWxsXCJcbiAgICAgICAgICBzcmM9XCIuLi9pbWFnZXMvSU1HXzA5MDkuSlBHXCJcbiAgICAgICAgICBhbHQ9XCJNZWRpdW0gYXZhdGFyXCJcbiAgICAgICAgLz5cbiAgICAgIDwvaDE+XG5cbiAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTMgdGV4dC14bCB0ZXh0LWdyYXktNjAwXCI+XG4gICAgICAgIEFjY29tcGxpc2hlZCBhbmQgZHluYW1pYyBwcm9mZXNzaW9uYWwgd2l0aCBhIHByb3ZlbiB0cmFjayByZWNvcmQgb2ZcbiAgICAgICAgaW5ub3ZhdGl2ZSB3ZWIgZGV2ZWxvcG1lbnQsIHN0cmF0ZWdpYyBidXNpbmVzcyBvcGVyYXRpb25zLCBhbmQgYWR2YW5jZWRcbiAgICAgICAgcHJvYmxlbS1zb2x2aW5nLiBFeHBlcnQgaW4gdHJhbnNsYXRpbmcgY29tcGxleCBidXNpbmVzcyByZXF1aXJlbWVudHNcbiAgICAgICAgaW50byB0ZWNobmljYWwgc29sdXRpb25zLCBkZWxpdmVyaW5nIGhpZ2gtcXVhbGl0eSBwcm9qZWN0cyB0aGF0IGVuaGFuY2VcbiAgICAgICAgb3JnYW5pemF0aW9uYWwgcGVyZm9ybWFuY2UuIFJlbm93bmVkIGZvciBkcml2aW5nIG9wZXJhdGlvbmFsIGV4Y2VsbGVuY2UsXG4gICAgICAgIGxldmVyYWdpbmcgZXh0ZW5zaXZlIGV4cGVyaWVuY2UgaW4gQVBJIGludGVncmF0aW9uLCBhbmQgY3VsdGl2YXRpbmdcbiAgICAgICAgdXNlci1jZW50cmljIGV4cGVyaWVuY2VzIHRoYXQgcHJvcGVsIGxlYWRpbmcgb3JnYW5pemF0aW9ucyB0byB0aGVcbiAgICAgICAgZm9yZWZyb250IG9mIHRoZWlyIGluZHVzdHJpZXMuIEEgY29sbGFib3JhdGl2ZSBsZWFkZXIgYW5kIG1lbnRvclxuICAgICAgICBjb21taXR0ZWQgdG8gZm9zdGVyaW5nIHRlYW0gZ3Jvd3RoIGFuZCBjaGFtcGlvbmluZyBhZ2lsZSBtZXRob2RvbG9naWVzXG4gICAgICAgIHRvIGFjY2VsZXJhdGUgcHJvamVjdCBkZWxpdmVyeSBhbmQgYWNoaWV2ZSBleGNlcHRpb25hbCByZXN1bHRzLlxuICAgICAgPC9wPlxuXG4gICAgICA8aDIgaWQ9XCJwcm9qZWN0c1wiIGNsYXNzTmFtZT1cIm10LTI0IGZvbnQtYm9sZCB0ZXh0LWdyYXktNzAwIHRleHQtM3hsXCI+XG4gICAgICAgIE15IFByb2plY3RzXG4gICAgICA8L2gyPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTUgcmVsYXRpdmVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciB0ZXh0LXhsIGZvbnQtYm9sZFwiXG4gICAgICAgICAgICBvbkNsaWNrPXtnb1RvUHJldlByb2plY3R9XG4gICAgICAgICAgPiB7XCIgXCJ9XG4gICAgICAgICAgICAmbHQ7XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWdyb3dcIj5cbiAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgIGhyZWY9e2Ake3Byb2plY3RzW2N1cnJlbnRJbmRleF0/LnVybH1gfVxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3Byb2plY3RzW2N1cnJlbnRJbmRleF0/LmltYWdlICYmIChcbiAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgIHNyYz17cHJvamVjdHNbY3VycmVudEluZGV4XT8uaW1hZ2V9XG4gICAgICAgICAgICAgICAgICBhbHQ9e3Byb2plY3RzW2N1cnJlbnRJbmRleF0/Lm5hbWV9XG4gICAgICAgICAgICAgICAgICB3aWR0aD17NzUwfVxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXszMDB9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvYmplY3QtY292ZXIgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLWdyYXktNTAwXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbXQtMiBmb250LWV4dHJhYm9sZCBiZy1ncmFkaWVudC10by1yIGZyb20tYmx1ZS00MDAgdmlhLXB1cnBsZS01MDAgdG8tcHVycGxlLTYwMCBiZy1jbGlwLXRleHQgdGV4dC10cmFuc3BhcmVudFwiPlxuICAgICAgICAgICAgICAgIHtwcm9qZWN0c1tjdXJyZW50SW5kZXhdPy5uYW1lfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWxnIHRleHQtZ3JheS03MDAgbXQtNVwiPlxuICAgICAgICAgICAgICAgIDxQb3J0YWJsZVRleHQgdmFsdWU9e3Byb2plY3RzW2N1cnJlbnRJbmRleF0/LmNvbnRlbnR9IC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyIHRleHQteGwgZm9udC1ib2xkXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2dvVG9OZXh0UHJvamVjdH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICAmZ3Q7XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8Q29udGFjdEZvcm0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkltYWdlIiwiTGluayIsIkNvbnRhY3RGb3JtIiwiUG9ydGFibGVUZXh0IiwiZ2V0UHJvamVjdHMiLCJIb21lIiwicHJvamVjdHMiLCJzZXRQcm9qZWN0cyIsImN1cnJlbnRJbmRleCIsInNldEN1cnJlbnRJbmRleCIsImZldGNoUHJvamVjdHMiLCJwcm9qZWN0RGF0YSIsImdvVG9OZXh0UHJvamVjdCIsInByZXZJbmRleCIsImxlbmd0aCIsImdvVG9QcmV2UHJvamVjdCIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwic3BhbiIsImltZyIsInNyYyIsImFsdCIsInAiLCJoMiIsImlkIiwib25DbGljayIsImhyZWYiLCJ1cmwiLCJ0YXJnZXQiLCJyZWwiLCJpbWFnZSIsIm5hbWUiLCJ3aWR0aCIsImhlaWdodCIsInZhbHVlIiwiY29udGVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(site)/page.tsx\n"));

/***/ })

});