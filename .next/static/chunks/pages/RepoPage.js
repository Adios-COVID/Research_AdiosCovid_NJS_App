/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/RepoPage"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fjangwonyun%2FDesktop%2FResearch_AdiosCovid_NJS_App%2Fpages%2FRepoPage.js&page=%2FRepoPage!":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fjangwonyun%2FDesktop%2FResearch_AdiosCovid_NJS_App%2Fpages%2FRepoPage.js&page=%2FRepoPage! ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\n    (window.__NEXT_P = window.__NEXT_P || []).push([\n      \"/RepoPage\",\n      function () {\n        return __webpack_require__(/*! ./pages/RepoPage.js */ \"./pages/RepoPage.js\");\n      }\n    ]);\n    if(true) {\n      module.hot.dispose(function () {\n        window.__NEXT_P.push([\"/RepoPage\"])\n      });\n    }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanM/YWJzb2x1dGVQYWdlUGF0aD0lMkZVc2VycyUyRmphbmd3b255dW4lMkZEZXNrdG9wJTJGUmVzZWFyY2hfQWRpb3NDb3ZpZF9OSlNfQXBwJTJGcGFnZXMlMkZSZXBvUGFnZS5qcyZwYWdlPSUyRlJlcG9QYWdlIS5qcyIsIm1hcHBpbmdzIjoiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQkFBTyxDQUFDLGdEQUFxQjtBQUM1QztBQUNBO0FBQ0EsT0FBTyxJQUFVO0FBQ2pCLE1BQU0sVUFBVTtBQUNoQjtBQUNBLE9BQU87QUFDUDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8/NGRhYiJdLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAod2luZG93Ll9fTkVYVF9QID0gd2luZG93Ll9fTkVYVF9QIHx8IFtdKS5wdXNoKFtcbiAgICAgIFwiL1JlcG9QYWdlXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiByZXF1aXJlKFwiLi9wYWdlcy9SZXBvUGFnZS5qc1wiKTtcbiAgICAgIH1cbiAgICBdKTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKCkge1xuICAgICAgICB3aW5kb3cuX19ORVhUX1AucHVzaChbXCIvUmVwb1BhZ2VcIl0pXG4gICAgICB9KTtcbiAgICB9XG4gICJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fjangwonyun%2FDesktop%2FResearch_AdiosCovid_NJS_App%2Fpages%2FRepoPage.js&page=%2FRepoPage!\n"));

/***/ }),

/***/ "./pages/RepoPage.js":
/*!***************************!*\
  !*** ./pages/RepoPage.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RepoPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction RepoPage() {\n    _s();\n    const [termAgree, setTermAgree] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [disclaimerAgree, setDisclaimerAgree] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const canBeSubmitted = ()=>{\n        const isValid = termAgree && disclaimerAgree; //checkbox for terms & disclaimer\n        if (isValid) {\n            document.getElementById(\"btn1\").removeAttribute(\"disabled\");\n        } else {\n            document.getElementById(\"btn1\").setAttribute(\"disabled\", true);\n        }\n        console.log({\n            termAgree,\n            disclaimerAgree\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>canBeSubmitted());\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        class: \"container\",\n        id: \"repo_container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                class: \"row\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Terms of Usage\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jangwonyun/Desktop/Research_AdiosCovid_NJS_App/pages/RepoPage.js\",\n                        lineNumber: 23,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        class: \"terms\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: \"License: The Long COVID data in this repository is licensed under the MIT License. By using the data, you agree to comply with the terms of this license.\"\n                            }, void 0, false, {\n                                fileName: \"/Users/jangwonyun/Desktop/Research_AdiosCovid_NJS_App/pages/RepoPage.js\",\n                                lineNumber: 25,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: \"Attribution: If you use the Long COVID data in any way, you must attribute the source of the data by citing the repository and its contributors.\"\n                            }, void 0, false, {\n                                fileName: \"/Users/jangwonyun/Desktop/Research_AdiosCovid_NJS_App/pages/RepoPage.js\",\n                                lineNumber: 28,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: \"Data Quality: The Long COVID data in this repository has been contributed by various individuals and organizations, and has been subjected to data cleaning and validation. However, the data may still contain errors and inconsistencies, and it is your responsibility to assess the quality of the data before using it.\"\n                            }, void 0, false, {\n                                fileName: \"/Users/jangwonyun/Desktop/Research_AdiosCovid_NJS_App/pages/RepoPage.js\",\n                                lineNumber: 31,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: \"Compliance: The Long COVID data in this repository is for research and informational purposes only, and should not be used for diagnostic or treatment purposes. Any use of the data for clinical purposes must comply with relevant regulatory requirements, such as HIPAA or GDPR.\"\n                            }, void 0, false, {\n                                fileName: \"/Users/jangwonyun/Desktop/Research_AdiosCovid_NJS_App/pages/RepoPage.js\",\n                                lineNumber: 34,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/jangwonyun/Desktop/Research_AdiosCovid_NJS_App/pages/RepoPage.js\",\n                        lineNumber: 24,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        class: \"form-check\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"checkbox\",\n                                name: \"termAgree\",\n                                id: \"termAgree\",\n                                class: \"agree\",\n                                onClick: (e)=>setTermAgree(e.target.checked)\n                            }, void 0, false, {\n                                fileName: \"/Users/jangwonyun/Desktop/Research_AdiosCovid_NJS_App/pages/RepoPage.js\",\n                                lineNumber: 39,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"agree\",\n                                class: \"agree_check\",\n                                children: \" I agree to the terms of usage.\"\n                            }, void 0, false, {\n                                fileName: \"/Users/jangwonyun/Desktop/Research_AdiosCovid_NJS_App/pages/RepoPage.js\",\n                                lineNumber: 46,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/jangwonyun/Desktop/Research_AdiosCovid_NJS_App/pages/RepoPage.js\",\n                        lineNumber: 38,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jangwonyun/Desktop/Research_AdiosCovid_NJS_App/pages/RepoPage.js\",\n                lineNumber: 22,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                class: \"row\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Disclaimer\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jangwonyun/Desktop/Research_AdiosCovid_NJS_App/pages/RepoPage.js\",\n                        lineNumber: 50,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: 'The Long COVID data in this repository is provided `\"`as is`\"` and without warranty of any kind, express or implied. The repository and its contributors make no representations or warranties regarding the accuracy, completeness, reliability, or suitability of the data for any particular purpose. The repository and its contributors shall not be liable for any damages or injuries arising from the use of the data, or for any direct, indirect, incidental, special, or consequential damages arising from any use of the data or the inability to use the data. By using the Long COVID data in this repository, you assume all risks and responsibility for the use of the data. This disclaimer applies to all uses of the data, whether for research, clinical, or other purposes.'\n                    }, void 0, false, {\n                        fileName: \"/Users/jangwonyun/Desktop/Research_AdiosCovid_NJS_App/pages/RepoPage.js\",\n                        lineNumber: 51,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        class: \"form-check\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"checkbox\",\n                                name: \"disclaimerAgree\",\n                                id: \"disclaimerAgree\",\n                                class: \"agree\",\n                                onClick: (e)=>setDisclaimerAgree(e.target.checked)\n                            }, void 0, false, {\n                                fileName: \"/Users/jangwonyun/Desktop/Research_AdiosCovid_NJS_App/pages/RepoPage.js\",\n                                lineNumber: 53,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"agree\",\n                                class: \"agree_check\",\n                                children: \" I agree to the disclaimer.\"\n                            }, void 0, false, {\n                                fileName: \"/Users/jangwonyun/Desktop/Research_AdiosCovid_NJS_App/pages/RepoPage.js\",\n                                lineNumber: 60,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/jangwonyun/Desktop/Research_AdiosCovid_NJS_App/pages/RepoPage.js\",\n                        lineNumber: 52,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jangwonyun/Desktop/Research_AdiosCovid_NJS_App/pages/RepoPage.js\",\n                lineNumber: 49,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                class: \"row\",\n                id: \"data_repo\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Our Data Repository\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jangwonyun/Desktop/Research_AdiosCovid_NJS_App/pages/RepoPage.js\",\n                        lineNumber: 64,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"The Long COVID data repository is a public, open source data repository that contains anonymized data related to the social and demographic impacts of Long COVID. The repository includes both qualitative and quantitative data, collected through surveys, interviews, and web scraping. The data has been contributed by various individuals and organizations, and has been subjected to data cleaning and validation to ensure accuracy and consistency. The repository is intended to support research and analysis of Long COVID, and to inform public health efforts to address the long-term impacts of COVID-19. To access the data repository, you must agree to the terms of usage and disclaimer.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jangwonyun/Desktop/Research_AdiosCovid_NJS_App/pages/RepoPage.js\",\n                        lineNumber: 65,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"button\",\n                        class: \"col-6 mx-auto btn btn-danger btn-rounded btn-md btn-block\",\n                        id: \"btn1\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"https://github.com/Adios-COVID/research_adioscovid_app.git\",\n                            class: \"text-light\",\n                            children: \"LINK TO OPEN SOURCE REPOSITORY\"\n                        }, void 0, false, {\n                            fileName: \"/Users/jangwonyun/Desktop/Research_AdiosCovid_NJS_App/pages/RepoPage.js\",\n                            lineNumber: 69,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/jangwonyun/Desktop/Research_AdiosCovid_NJS_App/pages/RepoPage.js\",\n                        lineNumber: 66,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jangwonyun/Desktop/Research_AdiosCovid_NJS_App/pages/RepoPage.js\",\n                lineNumber: 63,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jangwonyun/Desktop/Research_AdiosCovid_NJS_App/pages/RepoPage.js\",\n        lineNumber: 21,\n        columnNumber: 9\n    }, this);\n}\n_s(RepoPage, \"Ua0YITjBL5WzfoQyPaasrWMuzXk=\");\n_c = RepoPage;\nvar _c;\n$RefreshReg$(_c, \"RepoPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9SZXBvUGFnZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQW1EO0FBRXBDLFNBQVNHLFdBQVc7O0lBQy9CLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHSiwrQ0FBUUEsQ0FBQyxLQUFLO0lBQ2hELE1BQU0sQ0FBQ0ssaUJBQWlCQyxtQkFBbUIsR0FBR04sK0NBQVFBLENBQUMsS0FBSztJQUU1RCxNQUFNTyxpQkFBaUIsSUFBTTtRQUN6QixNQUFNQyxVQUNKTCxhQUFhRSxpQkFBaUIsaUNBQWlDO1FBRWpFLElBQUlHLFNBQVM7WUFDWEMsU0FBU0MsY0FBYyxDQUFDLFFBQVFDLGVBQWUsQ0FBQztRQUNsRCxPQUFPO1lBQ0xGLFNBQVNDLGNBQWMsQ0FBQyxRQUFRRSxZQUFZLENBQUMsWUFBWSxJQUFJO1FBQy9ELENBQUM7UUFDREMsUUFBUUMsR0FBRyxDQUFDO1lBQUNYO1lBQVdFO1FBQWU7SUFDekM7SUFFQU4sZ0RBQVNBLENBQUMsSUFBTVE7SUFDbEIscUJBQ0ksOERBQUNRO1FBQUlDLE9BQU07UUFBWUMsSUFBRzs7MEJBQ3RCLDhEQUFDRjtnQkFBSUMsT0FBTTs7a0NBQ1AsOERBQUNFO2tDQUFHOzs7Ozs7a0NBQ0osOERBQUNDO3dCQUFHSCxPQUFNOzswQ0FDTiw4REFBQ0k7MENBQUc7Ozs7OzswQ0FHSiw4REFBQ0E7MENBQUc7Ozs7OzswQ0FHSiw4REFBQ0E7MENBQUc7Ozs7OzswQ0FHSiw4REFBQ0E7MENBQUc7Ozs7Ozs7Ozs7OztrQ0FJSiw4REFBQ0w7d0JBQUlDLE9BQU07OzBDQUNQLDhEQUFDSztnQ0FDR0MsTUFBSztnQ0FDTEMsTUFBSztnQ0FDTE4sSUFBRztnQ0FDSEQsT0FBTTtnQ0FDTlEsU0FBUyxDQUFDQyxJQUFNckIsYUFBYXFCLEVBQUVDLE1BQU0sQ0FBQ0MsT0FBTzs7Ozs7OzBDQUVqRCw4REFBQ0M7Z0NBQU1DLFNBQVE7Z0NBQVFiLE9BQU07MENBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFHdkQsOERBQUNEO2dCQUFJQyxPQUFNOztrQ0FDUCw4REFBQ0U7a0NBQUc7Ozs7OztrQ0FDSiw4REFBQ1k7a0NBQUU7Ozs7OztrQ0FDSCw4REFBQ2Y7d0JBQUlDLE9BQU07OzBDQUNQLDhEQUFDSztnQ0FDR0MsTUFBSztnQ0FDTEMsTUFBSztnQ0FDTE4sSUFBRztnQ0FDSEQsT0FBTTtnQ0FDTlEsU0FBUyxDQUFDQyxJQUFNbkIsbUJBQW1CbUIsRUFBRUMsTUFBTSxDQUFDQyxPQUFPOzs7Ozs7MENBRXZELDhEQUFDQztnQ0FBTUMsU0FBUTtnQ0FBUWIsT0FBTTswQ0FBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUduRCw4REFBQ0Q7Z0JBQUlDLE9BQU07Z0JBQU1DLElBQUc7O2tDQUNoQiw4REFBQ0M7a0NBQUc7Ozs7OztrQ0FDSiw4REFBQ1k7a0NBQUU7Ozs7OztrQ0FDSCw4REFBQ0M7d0JBQU9ULE1BQUs7d0JBQ0xOLE9BQU07d0JBQ05DLElBQUc7a0NBQ1AsNEVBQUNlOzRCQUFFQyxNQUFLOzRCQUNMakIsT0FBTTtzQ0FBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPMUMsQ0FBQztHQTFFdUJkO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL1JlcG9QYWdlLmpzPzVmZDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgcmVhY3QgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlcG9QYWdlKCkge1xuICAgIGNvbnN0IFt0ZXJtQWdyZWUsIHNldFRlcm1BZ3JlZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2Rpc2NsYWltZXJBZ3JlZSwgc2V0RGlzY2xhaW1lckFncmVlXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGNvbnN0IGNhbkJlU3VibWl0dGVkID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBpc1ZhbGlkID1cbiAgICAgICAgICB0ZXJtQWdyZWUgJiYgZGlzY2xhaW1lckFncmVlOyAvL2NoZWNrYm94IGZvciB0ZXJtcyAmIGRpc2NsYWltZXJcbiAgICBcbiAgICAgICAgaWYgKGlzVmFsaWQpIHtcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ0bjFcIikucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidG4xXCIpLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKHt0ZXJtQWdyZWUsIGRpc2NsYWltZXJBZ3JlZX0pO1xuICAgICAgfTtcblxuICAgICAgdXNlRWZmZWN0KCgpID0+IGNhbkJlU3VibWl0dGVkKCkpO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIiBpZD1cInJlcG9fY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPGgyPlRlcm1zIG9mIFVzYWdlPC9oMj5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJ0ZXJtc1wiPlxuICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICBMaWNlbnNlOiBUaGUgTG9uZyBDT1ZJRCBkYXRhIGluIHRoaXMgcmVwb3NpdG9yeSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIEJ5IHVzaW5nIHRoZSBkYXRhLCB5b3UgYWdyZWUgdG8gY29tcGx5IHdpdGggdGhlIHRlcm1zIG9mIHRoaXMgbGljZW5zZS4gXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIEF0dHJpYnV0aW9uOiBJZiB5b3UgdXNlIHRoZSBMb25nIENPVklEIGRhdGEgaW4gYW55IHdheSwgeW91IG11c3QgYXR0cmlidXRlIHRoZSBzb3VyY2Ugb2YgdGhlIGRhdGEgYnkgY2l0aW5nIHRoZSByZXBvc2l0b3J5IGFuZCBpdHMgY29udHJpYnV0b3JzLlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICBEYXRhIFF1YWxpdHk6IFRoZSBMb25nIENPVklEIGRhdGEgaW4gdGhpcyByZXBvc2l0b3J5IGhhcyBiZWVuIGNvbnRyaWJ1dGVkIGJ5IHZhcmlvdXMgaW5kaXZpZHVhbHMgYW5kIG9yZ2FuaXphdGlvbnMsIGFuZCBoYXMgYmVlbiBzdWJqZWN0ZWQgdG8gZGF0YSBjbGVhbmluZyBhbmQgdmFsaWRhdGlvbi4gSG93ZXZlciwgdGhlIGRhdGEgbWF5IHN0aWxsIGNvbnRhaW4gZXJyb3JzIGFuZCBpbmNvbnNpc3RlbmNpZXMsIGFuZCBpdCBpcyB5b3VyIHJlc3BvbnNpYmlsaXR5IHRvIGFzc2VzcyB0aGUgcXVhbGl0eSBvZiB0aGUgZGF0YSBiZWZvcmUgdXNpbmcgaXQuXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgQ29tcGxpYW5jZTogVGhlIExvbmcgQ09WSUQgZGF0YSBpbiB0aGlzIHJlcG9zaXRvcnkgaXMgZm9yIHJlc2VhcmNoIGFuZCBpbmZvcm1hdGlvbmFsIHB1cnBvc2VzIG9ubHksIGFuZCBzaG91bGQgbm90IGJlIHVzZWQgZm9yIGRpYWdub3N0aWMgb3IgdHJlYXRtZW50IHB1cnBvc2VzLiBBbnkgdXNlIG9mIHRoZSBkYXRhIGZvciBjbGluaWNhbCBwdXJwb3NlcyBtdXN0IGNvbXBseSB3aXRoIHJlbGV2YW50IHJlZ3VsYXRvcnkgcmVxdWlyZW1lbnRzLCBzdWNoIGFzIEhJUEFBIG9yIEdEUFIuXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tY2hlY2tcIiA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0ZXJtQWdyZWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwidGVybUFncmVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImFncmVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gc2V0VGVybUFncmVlKGUudGFyZ2V0LmNoZWNrZWQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImFncmVlXCIgY2xhc3M9XCJhZ3JlZV9jaGVja1wiPiBJIGFncmVlIHRvIHRoZSB0ZXJtcyBvZiB1c2FnZS48L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICA8aDI+RGlzY2xhaW1lcjwvaDI+XG4gICAgICAgICAgICAgICAgPHA+VGhlIExvbmcgQ09WSUQgZGF0YSBpbiB0aGlzIHJlcG9zaXRvcnkgaXMgcHJvdmlkZWQgYCZxdW90O2BhcyBpc2AmcXVvdDtgIGFuZCB3aXRob3V0IHdhcnJhbnR5IG9mIGFueSBraW5kLCBleHByZXNzIG9yIGltcGxpZWQuIFRoZSByZXBvc2l0b3J5IGFuZCBpdHMgY29udHJpYnV0b3JzIG1ha2Ugbm8gcmVwcmVzZW50YXRpb25zIG9yIHdhcnJhbnRpZXMgcmVnYXJkaW5nIHRoZSBhY2N1cmFjeSwgY29tcGxldGVuZXNzLCByZWxpYWJpbGl0eSwgb3Igc3VpdGFiaWxpdHkgb2YgdGhlIGRhdGEgZm9yIGFueSBwYXJ0aWN1bGFyIHB1cnBvc2UuIFRoZSByZXBvc2l0b3J5IGFuZCBpdHMgY29udHJpYnV0b3JzIHNoYWxsIG5vdCBiZSBsaWFibGUgZm9yIGFueSBkYW1hZ2VzIG9yIGluanVyaWVzIGFyaXNpbmcgZnJvbSB0aGUgdXNlIG9mIHRoZSBkYXRhLCBvciBmb3IgYW55IGRpcmVjdCwgaW5kaXJlY3QsIGluY2lkZW50YWwsIHNwZWNpYWwsIG9yIGNvbnNlcXVlbnRpYWwgZGFtYWdlcyBhcmlzaW5nIGZyb20gYW55IHVzZSBvZiB0aGUgZGF0YSBvciB0aGUgaW5hYmlsaXR5IHRvIHVzZSB0aGUgZGF0YS4gQnkgdXNpbmcgdGhlIExvbmcgQ09WSUQgZGF0YSBpbiB0aGlzIHJlcG9zaXRvcnksIHlvdSBhc3N1bWUgYWxsIHJpc2tzIGFuZCByZXNwb25zaWJpbGl0eSBmb3IgdGhlIHVzZSBvZiB0aGUgZGF0YS4gVGhpcyBkaXNjbGFpbWVyIGFwcGxpZXMgdG8gYWxsIHVzZXMgb2YgdGhlIGRhdGEsIHdoZXRoZXIgZm9yIHJlc2VhcmNoLCBjbGluaWNhbCwgb3Igb3RoZXIgcHVycG9zZXMuPC9wPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWNoZWNrXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJkaXNjbGFpbWVyQWdyZWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJkaXNjbGFpbWVyQWdyZWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJhZ3JlZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gc2V0RGlzY2xhaW1lckFncmVlKGUudGFyZ2V0LmNoZWNrZWQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJhZ3JlZVwiIGNsYXNzPVwiYWdyZWVfY2hlY2tcIj4gSSBhZ3JlZSB0byB0aGUgZGlzY2xhaW1lci48L2xhYmVsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCIgaWQ9XCJkYXRhX3JlcG9cIj5cbiAgICAgICAgICAgICAgICA8aDI+T3VyIERhdGEgUmVwb3NpdG9yeTwvaDI+XG4gICAgICAgICAgICAgICAgPHA+VGhlIExvbmcgQ09WSUQgZGF0YSByZXBvc2l0b3J5IGlzIGEgcHVibGljLCBvcGVuIHNvdXJjZSBkYXRhIHJlcG9zaXRvcnkgdGhhdCBjb250YWlucyBhbm9ueW1pemVkIGRhdGEgcmVsYXRlZCB0byB0aGUgc29jaWFsIGFuZCBkZW1vZ3JhcGhpYyBpbXBhY3RzIG9mIExvbmcgQ09WSUQuIFRoZSByZXBvc2l0b3J5IGluY2x1ZGVzIGJvdGggcXVhbGl0YXRpdmUgYW5kIHF1YW50aXRhdGl2ZSBkYXRhLCBjb2xsZWN0ZWQgdGhyb3VnaCBzdXJ2ZXlzLCBpbnRlcnZpZXdzLCBhbmQgd2ViIHNjcmFwaW5nLiBUaGUgZGF0YSBoYXMgYmVlbiBjb250cmlidXRlZCBieSB2YXJpb3VzIGluZGl2aWR1YWxzIGFuZCBvcmdhbml6YXRpb25zLCBhbmQgaGFzIGJlZW4gc3ViamVjdGVkIHRvIGRhdGEgY2xlYW5pbmcgYW5kIHZhbGlkYXRpb24gdG8gZW5zdXJlIGFjY3VyYWN5IGFuZCBjb25zaXN0ZW5jeS4gVGhlIHJlcG9zaXRvcnkgaXMgaW50ZW5kZWQgdG8gc3VwcG9ydCByZXNlYXJjaCBhbmQgYW5hbHlzaXMgb2YgTG9uZyBDT1ZJRCwgYW5kIHRvIGluZm9ybSBwdWJsaWMgaGVhbHRoIGVmZm9ydHMgdG8gYWRkcmVzcyB0aGUgbG9uZy10ZXJtIGltcGFjdHMgb2YgQ09WSUQtMTkuIFRvIGFjY2VzcyB0aGUgZGF0YSByZXBvc2l0b3J5LCB5b3UgbXVzdCBhZ3JlZSB0byB0aGUgdGVybXMgb2YgdXNhZ2UgYW5kIGRpc2NsYWltZXIuPC9wPlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjb2wtNiBteC1hdXRvIGJ0biBidG4tZGFuZ2VyIGJ0bi1yb3VuZGVkIGJ0bi1tZCBidG4tYmxvY2tcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJidG4xXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vQWRpb3MtQ09WSUQvcmVzZWFyY2hfYWRpb3Njb3ZpZF9hcHAuZ2l0XCIgXG4gICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwidGV4dC1saWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgTElOSyBUTyBPUEVOIFNPVVJDRSBSRVBPU0lUT1JZXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwicmVhY3QiLCJSZXBvUGFnZSIsInRlcm1BZ3JlZSIsInNldFRlcm1BZ3JlZSIsImRpc2NsYWltZXJBZ3JlZSIsInNldERpc2NsYWltZXJBZ3JlZSIsImNhbkJlU3VibWl0dGVkIiwiaXNWYWxpZCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyZW1vdmVBdHRyaWJ1dGUiLCJzZXRBdHRyaWJ1dGUiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3MiLCJpZCIsImgyIiwidWwiLCJsaSIsImlucHV0IiwidHlwZSIsIm5hbWUiLCJvbkNsaWNrIiwiZSIsInRhcmdldCIsImNoZWNrZWQiLCJsYWJlbCIsImh0bWxGb3IiLCJwIiwiYnV0dG9uIiwiYSIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/RepoPage.js\n"));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["pages/_app","main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fjangwonyun%2FDesktop%2FResearch_AdiosCovid_NJS_App%2Fpages%2FRepoPage.js&page=%2FRepoPage!"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);