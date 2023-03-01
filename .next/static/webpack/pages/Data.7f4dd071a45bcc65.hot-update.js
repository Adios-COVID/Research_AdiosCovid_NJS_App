"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/Data",{

/***/ "./components/Income_viz.js":
/*!**********************************!*\
  !*** ./components/Income_viz.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js */ \"./node_modules/chart.js/dist/chart.js\");\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextui-org/react */ \"./node_modules/@nextui-org/react/esm/index.js\");\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-chartjs-2 */ \"./node_modules/react-chartjs-2/dist/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nchart_js__WEBPACK_IMPORTED_MODULE_2__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_2__.ArcElement, chart_js__WEBPACK_IMPORTED_MODULE_2__.Tooltip, chart_js__WEBPACK_IMPORTED_MODULE_2__.Legend);\nfunction IncomeVisualization() {\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    // Add state for handling errors\n    const [errorMessage, setErrorMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        async function fetchData() {\n            try {\n                const response = await fetch(\"https://rprwae53w2.execute-api.us-west-2.amazonaws.com/v-1/latino-income\");\n                const json = await response.json();\n                setData(json.data);\n            } catch (error) {\n                setErrorMessage(\"Error fetching data\");\n            }\n        }\n        fetchData();\n    }, []);\n    var county = [];\n    var less_than_10000 = [];\n    var income_10000_to_14999 = [];\n    var income_15000_to_19999 = [];\n    var income_20000_to_24999 = [];\n    var income_25000_to_29999 = [];\n    var income_30000_to_34999 = [];\n    var income_35000_to_39999 = [];\n    var income_40000_to_44999 = [];\n    var income_45000_to_49999 = [];\n    var income_50000_to_54999 = [];\n    var income_55000_to_59999 = [];\n    var income_60000_to_74999 = [];\n    var income_75000_to_99999 = [];\n    var income_100000_to_124999 = [];\n    var income_125000_to_149999 = [];\n    var income_150000_to_199999 = [];\n    var income_200000_or_more = [];\n    for(let i = 0; i < data.length; i++){\n        county[i] = data[i].County;\n        less_than_10000[i] = data[i].less_than_10000;\n        income_10000_to_14999[i] = data[i].income_10000_to_14999;\n    }\n    /*\n  var county = ['Adams', 'Asotin', 'Benton', 'Chelan', 'Clallam', 'Clark', 'Columbia', 'Cowlitz', 'Douglas', 'Ferry',\n                'Franklin', 'Garfield', 'Grant', 'Grays Harbor', 'Island', 'Jefferson', 'King', 'Kitsap', 'Kittitas', 'Klickitat', 'Lewis',\n                'Lincoln', 'Mason', 'Okanogan', 'Pacific', 'Pend Oreille', 'Pierce', 'San Juan', 'Skagit', 'Skamania', 'Snohomish', 'Spokane','Stevens',\n                'Thurston', 'Wahkiakum', 'Walla Walla', 'Whatcom', 'Whitman', 'Yakima', 'Unassigned', 'Western Washington', 'Unassigned Region', 'Better Health Together', 'Elevate Health',\n                'Greater Columbia', 'Healthier Here', 'North Sound', 'Olympic Community of Health', 'Southwest Washington',\n                'Cascade Pacific Action Alliance', 'North Central','Unassigned ACH'\n                ]*/ // Conditionally render an error message if an error occurs\n    if (errorMessage) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: errorMessage\n        }, void 0, false, {\n            fileName: \"/Users/jangwonyun/Desktop/Research_AdiosCovid_NJS_App/components/Income_viz.js\",\n            lineNumber: 61,\n            columnNumber: 12\n        }, this);\n    }\n    const [initialData, setInitialData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        county: county[0],\n        income_less_10000: less_than_10000[0],\n        income_10000_to_14999: income_10000_to_14999[0]\n    });\n    const handleBarGraph = (event)=>{\n        data.forEach((each)=>{\n            if (each.county === event.currentTarget.value) {\n                setInitialData({\n                    county: each.county,\n                    income_less_10000: each.less_10000,\n                    income_10000_to_14999: each.income_10000_to_14999\n                });\n            }\n        });\n    };\n    const income_viz = {\n        labels: initialData.county,\n        datasets: [\n            {\n                label: \"Income Less than 10,000\",\n                data: income_less_10000,\n                backgroundColor: [\n                    \"rgba(255, 99, 132, 0.2)\"\n                ],\n                borderColor: [\n                    \"rgba(255, 99, 132, 1)\"\n                ],\n                borderWidth: 1\n            },\n            {\n                label: \"Income Between 10,000-14,999\",\n                data: income_10000_to_14999,\n                backgroundColor: [\n                    \"rgba(54, 162, 235, 0.2)\"\n                ],\n                borderColor: [\n                    \"rgba(54, 162, 235, 1)\"\n                ],\n                borderWidth: 1\n            }\n        ]\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: \"Income of Latino Population\"\n            }, void 0, false, {\n                fileName: \"/Users/jangwonyun/Desktop/Research_AdiosCovid_NJS_App/components/Income_viz.js\",\n                lineNumber: 121,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__.Dropdown, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__.Dropdown.Button, {\n                        flat: true,\n                        children: \"County\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jangwonyun/Desktop/Research_AdiosCovid_NJS_App/components/Income_viz.js\",\n                        lineNumber: 123,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__.Dropdown.Menu, {\n                        \"aria-label\": \"Static Actions\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__.Dropdown.Item, {\n                                onClick: handleBarGraph,\n                                children: \"New file\"\n                            }, \"Adams\", false, {\n                                fileName: \"/Users/jangwonyun/Desktop/Research_AdiosCovid_NJS_App/components/Income_viz.js\",\n                                lineNumber: 125,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__.Dropdown.Item, {\n                                onClick: handleBarGraph,\n                                children: \"Copy link\"\n                            }, \"Asotin\", false, {\n                                fileName: \"/Users/jangwonyun/Desktop/Research_AdiosCovid_NJS_App/components/Income_viz.js\",\n                                lineNumber: 126,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__.Dropdown.Item, {\n                                onClick: handleBarGraph,\n                                children: \"Edit file\"\n                            }, \"Benton\", false, {\n                                fileName: \"/Users/jangwonyun/Desktop/Research_AdiosCovid_NJS_App/components/Income_viz.js\",\n                                lineNumber: 127,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/jangwonyun/Desktop/Research_AdiosCovid_NJS_App/components/Income_viz.js\",\n                        lineNumber: 124,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jangwonyun/Desktop/Research_AdiosCovid_NJS_App/components/Income_viz.js\",\n                lineNumber: 122,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__.Doughnut, {\n                data: income_viz\n            }, void 0, false, {\n                fileName: \"/Users/jangwonyun/Desktop/Research_AdiosCovid_NJS_App/components/Income_viz.js\",\n                lineNumber: 131,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jangwonyun/Desktop/Research_AdiosCovid_NJS_App/components/Income_viz.js\",\n        lineNumber: 120,\n        columnNumber: 5\n    }, this);\n}\n_s(IncomeVisualization, \"iHcsGeBRU2/zPUZhV/BN03/Vn4Q=\");\n_c = IncomeVisualization;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IncomeVisualization);\nvar _c;\n$RefreshReg$(_c, \"IncomeVisualization\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1lBQ0E7Z0JBQ0lILE9BQU87Z0JBQ1A1QyxNQUFNVztnQkFDTmtDLGlCQUFpQjtvQkFDZjtpQkFLRDtnQkFDREMsYUFBYTtvQkFDWDtpQkFLRDtnQkFDREMsYUFBYTtZQUNqQjtTQUNIO0lBQ0g7SUFDQSxxQkFFRSw4REFBQ2pCOzswQkFDRyw4REFBQ2tCOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNwRCx1REFBUUE7O2tDQUNMLDhEQUFDQSw4REFBZTt3QkFBQ3NELElBQUk7a0NBQUM7Ozs7OztrQ0FDdEIsOERBQUN0RCw0REFBYTt3QkFBQ3dELGNBQVc7OzBDQUN0Qiw4REFBQ3hELDREQUFhO2dDQUFhMEQsU0FBU3BCOzBDQUFnQjsrQkFBakM7Ozs7OzBDQUNuQiw4REFBQ3RDLDREQUFhO2dDQUFjMEQsU0FBU3BCOzBDQUFnQjsrQkFBbEM7Ozs7OzBDQUNuQiw4REFBQ3RDLDREQUFhO2dDQUFjMEQsU0FBU3BCOzBDQUFnQjsrQkFBbEM7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUkzQiw4REFBQ3JDLHFEQUFRQTtnQkFBQ0csTUFBTXlDOzs7Ozs7Ozs7Ozs7QUFHeEI7R0E5SFMxQztLQUFBQTtBQStIVCwrREFBZUEsbUJBQW1CQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSW5jb21lX3Zpei5qcz8yYjE2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlYWN0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ2hhcnQgYXMgQ2hhcnRKUywgQXJjRWxlbWVudCwgVG9vbHRpcCwgTGVnZW5kIH0gZnJvbSAnY2hhcnQuanMnO1xuaW1wb3J0IHsgRHJvcGRvd24gfSBmcm9tIFwiQG5leHR1aS1vcmcvcmVhY3RcIjtcbmltcG9ydCB7IERvdWdobnV0IH0gZnJvbSAncmVhY3QtY2hhcnRqcy0yJztcblxuQ2hhcnRKUy5yZWdpc3RlcihBcmNFbGVtZW50LCBUb29sdGlwLCBMZWdlbmQpO1xuXG5mdW5jdGlvbiBJbmNvbWVWaXN1YWxpemF0aW9uKCkge1xuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgLy8gQWRkIHN0YXRlIGZvciBoYW5kbGluZyBlcnJvcnNcbiAgY29uc3QgW2Vycm9yTWVzc2FnZSwgc2V0RXJyb3JNZXNzYWdlXSA9IHVzZVN0YXRlKCcnKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoRGF0YSgpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vcnByd2FlNTN3Mi5leGVjdXRlLWFwaS51cy13ZXN0LTIuYW1hem9uYXdzLmNvbS92LTEvbGF0aW5vLWluY29tZScpO1xuICAgICAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBzZXREYXRhKGpzb24uZGF0YSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBzZXRFcnJvck1lc3NhZ2UoJ0Vycm9yIGZldGNoaW5nIGRhdGEnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZmV0Y2hEYXRhKCk7XG4gIH0sIFtdKTtcbiAgdmFyIGNvdW50eSA9IFtdO1xuICB2YXIgbGVzc190aGFuXzEwMDAwID0gW107XG4gIHZhciBpbmNvbWVfMTAwMDBfdG9fMTQ5OTkgPSBbXTtcbiAgdmFyIGluY29tZV8xNTAwMF90b18xOTk5OSA9IFtdO1xuICB2YXIgaW5jb21lXzIwMDAwX3RvXzI0OTk5ID0gW107XG4gIHZhciBpbmNvbWVfMjUwMDBfdG9fMjk5OTkgPSBbXTtcbiAgdmFyIGluY29tZV8zMDAwMF90b18zNDk5OSA9IFtdO1xuICB2YXIgaW5jb21lXzM1MDAwX3RvXzM5OTk5ID0gW107XG4gIHZhciBpbmNvbWVfNDAwMDBfdG9fNDQ5OTkgPSBbXTtcbiAgdmFyIGluY29tZV80NTAwMF90b180OTk5OSA9IFtdO1xuICB2YXIgaW5jb21lXzUwMDAwX3RvXzU0OTk5ID0gW107XG4gIHZhciBpbmNvbWVfNTUwMDBfdG9fNTk5OTkgPSBbXTtcbiAgdmFyIGluY29tZV82MDAwMF90b183NDk5OSA9IFtdO1xuICB2YXIgaW5jb21lXzc1MDAwX3RvXzk5OTk5ID0gW107XG4gIHZhciBpbmNvbWVfMTAwMDAwX3RvXzEyNDk5OSA9IFtdO1xuICB2YXIgaW5jb21lXzEyNTAwMF90b18xNDk5OTkgPSBbXTtcbiAgdmFyIGluY29tZV8xNTAwMDBfdG9fMTk5OTk5ID0gW107XG4gIHZhciBpbmNvbWVfMjAwMDAwX29yX21vcmUgPSBbXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICBjb3VudHlbaV0gPSBkYXRhW2ldLkNvdW50eTtcbiAgICBsZXNzX3RoYW5fMTAwMDBbaV0gPSBkYXRhW2ldLmxlc3NfdGhhbl8xMDAwMDtcbiAgICBpbmNvbWVfMTAwMDBfdG9fMTQ5OTlbaV0gPSBkYXRhW2ldLmluY29tZV8xMDAwMF90b18xNDk5OTtcbiAgfVxuXG4gIC8qXG4gIHZhciBjb3VudHkgPSBbJ0FkYW1zJywgJ0Fzb3RpbicsICdCZW50b24nLCAnQ2hlbGFuJywgJ0NsYWxsYW0nLCAnQ2xhcmsnLCAnQ29sdW1iaWEnLCAnQ293bGl0eicsICdEb3VnbGFzJywgJ0ZlcnJ5JyxcbiAgICAgICAgICAgICAgICAnRnJhbmtsaW4nLCAnR2FyZmllbGQnLCAnR3JhbnQnLCAnR3JheXMgSGFyYm9yJywgJ0lzbGFuZCcsICdKZWZmZXJzb24nLCAnS2luZycsICdLaXRzYXAnLCAnS2l0dGl0YXMnLCAnS2xpY2tpdGF0JywgJ0xld2lzJyxcbiAgICAgICAgICAgICAgICAnTGluY29sbicsICdNYXNvbicsICdPa2Fub2dhbicsICdQYWNpZmljJywgJ1BlbmQgT3JlaWxsZScsICdQaWVyY2UnLCAnU2FuIEp1YW4nLCAnU2thZ2l0JywgJ1NrYW1hbmlhJywgJ1Nub2hvbWlzaCcsICdTcG9rYW5lJywnU3RldmVucycsXG4gICAgICAgICAgICAgICAgJ1RodXJzdG9uJywgJ1dhaGtpYWt1bScsICdXYWxsYSBXYWxsYScsICdXaGF0Y29tJywgJ1doaXRtYW4nLCAnWWFraW1hJywgJ1VuYXNzaWduZWQnLCAnV2VzdGVybiBXYXNoaW5ndG9uJywgJ1VuYXNzaWduZWQgUmVnaW9uJywgJ0JldHRlciBIZWFsdGggVG9nZXRoZXInLCAnRWxldmF0ZSBIZWFsdGgnLFxuICAgICAgICAgICAgICAgICdHcmVhdGVyIENvbHVtYmlhJywgJ0hlYWx0aGllciBIZXJlJywgJ05vcnRoIFNvdW5kJywgJ09seW1waWMgQ29tbXVuaXR5IG9mIEhlYWx0aCcsICdTb3V0aHdlc3QgV2FzaGluZ3RvbicsXG4gICAgICAgICAgICAgICAgJ0Nhc2NhZGUgUGFjaWZpYyBBY3Rpb24gQWxsaWFuY2UnLCAnTm9ydGggQ2VudHJhbCcsJ1VuYXNzaWduZWQgQUNIJ1xuICAgICAgICAgICAgICAgIF0qL1xuICAvLyBDb25kaXRpb25hbGx5IHJlbmRlciBhbiBlcnJvciBtZXNzYWdlIGlmIGFuIGVycm9yIG9jY3Vyc1xuICBpZiAoZXJyb3JNZXNzYWdlKSB7XG4gICAgcmV0dXJuIDxkaXY+e2Vycm9yTWVzc2FnZX08L2Rpdj47XG4gIH1cbiAgICBcbiAgICBjb25zdCBbaW5pdGlhbERhdGEsIHNldEluaXRpYWxEYXRhXSA9IHVzZVN0YXRlKHtjb3VudHk6Y291bnR5WzBdLCBpbmNvbWVfbGVzc18xMDAwMDpsZXNzX3RoYW5fMTAwMDBbMF0sIGluY29tZV8xMDAwMF90b18xNDk5OTppbmNvbWVfMTAwMDBfdG9fMTQ5OTlbMF19KTtcblxuICBjb25zdCBoYW5kbGVCYXJHcmFwaCA9IChldmVudCkgPT4ge1xuICAgICAgZGF0YS5mb3JFYWNoKGVhY2g9PntcbiAgICAgICAgICBpZihlYWNoLmNvdW50eSA9PT0gZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZSl7XG4gICAgICAgICAgICAgIHNldEluaXRpYWxEYXRhKHtjb3VudHk6IGVhY2guY291bnR5LCBpbmNvbWVfbGVzc18xMDAwMDplYWNoLmxlc3NfMTAwMDAsIGluY29tZV8xMDAwMF90b18xNDk5OTplYWNoLmluY29tZV8xMDAwMF90b18xNDk5OX0pXG4gICAgICAgICAgfVxuICAgICAgfSlcbiAgfVxuICBjb25zdCBpbmNvbWVfdml6ID0ge1xuICAgIGxhYmVsczogaW5pdGlhbERhdGEuY291bnR5LFxuICAgIGRhdGFzZXRzOiBbXG4gICAgICAgIHtcbiAgICAgICAgbGFiZWw6ICdJbmNvbWUgTGVzcyB0aGFuIDEwLDAwMCcsXG4gICAgICAgIGRhdGE6IGluY29tZV9sZXNzXzEwMDAwLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFtcbiAgICAgICAgICAncmdiYSgyNTUsIDk5LCAxMzIsIDAuMiknXG4gICAgICAgICAgLyoncmdiYSg1NCwgMTYyLCAyMzUsIDAuMiknLFxuICAgICAgICAgICdyZ2JhKDI1NSwgMjA2LCA4NiwgMC4yKScsXG4gICAgICAgICAgJ3JnYmEoNzUsIDE5MiwgMTkyLCAwLjIpJyxcbiAgICAgICAgICAncmdiYSgxNTMsIDEwMiwgMjU1LCAwLjIpJyxcbiAgICAgICAgICAncmdiYSgyNTUsIDE1OSwgNjQsIDAuMiknLCovXG4gICAgICAgIF0sXG4gICAgICAgIGJvcmRlckNvbG9yOiBbXG4gICAgICAgICAgJ3JnYmEoMjU1LCA5OSwgMTMyLCAxKSdcbiAgICAgICAgICAvKidyZ2JhKDU0LCAxNjIsIDIzNSwgMSknLFxuICAgICAgICAgICdyZ2JhKDI1NSwgMjA2LCA4NiwgMSknLFxuICAgICAgICAgICdyZ2JhKDc1LCAxOTIsIDE5MiwgMSknLFxuICAgICAgICAgICdyZ2JhKDE1MywgMTAyLCAyNTUsIDEpJyxcbiAgICAgICAgICAncmdiYSgyNTUsIDE1OSwgNjQsIDEpJywqL1xuICAgICAgICBdLFxuICAgICAgICBib3JkZXJXaWR0aDogMVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogJ0luY29tZSBCZXR3ZWVuIDEwLDAwMC0xNCw5OTknLFxuICAgICAgICAgICAgZGF0YTogaW5jb21lXzEwMDAwX3RvXzE0OTk5LFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBbXG4gICAgICAgICAgICAgICdyZ2JhKDU0LCAxNjIsIDIzNSwgMC4yKSdcbiAgICAgICAgICAgICAgLyoncmdiYSgyNTUsIDIwNiwgODYsIDAuMiknLFxuICAgICAgICAgICAgICAncmdiYSg3NSwgMTkyLCAxOTIsIDAuMiknLFxuICAgICAgICAgICAgICAncmdiYSgxNTMsIDEwMiwgMjU1LCAwLjIpJyxcbiAgICAgICAgICAgICAgJ3JnYmEoMjU1LCAxNTksIDY0LCAwLjIpJywqL1xuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiBbXG4gICAgICAgICAgICAgICdyZ2JhKDU0LCAxNjIsIDIzNSwgMSknXG4gICAgICAgICAgICAgIC8qJ3JnYmEoMjU1LCAyMDYsIDg2LCAxKScsXG4gICAgICAgICAgICAgICdyZ2JhKDc1LCAxOTIsIDE5MiwgMSknLFxuICAgICAgICAgICAgICAncmdiYSgxNTMsIDEwMiwgMjU1LCAxKScsXG4gICAgICAgICAgICAgICdyZ2JhKDI1NSwgMTU5LCA2NCwgMSknLCovXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDFcbiAgICAgICAgfVxuICAgIF0sXG4gIH07XG4gIHJldHVybiAoXG4gICAgXG4gICAgPGRpdj5cbiAgICAgICAgPGgzPkluY29tZSBvZiBMYXRpbm8gUG9wdWxhdGlvbjwvaDM+XG4gICAgICAgIDxEcm9wZG93bj5cbiAgICAgICAgICAgIDxEcm9wZG93bi5CdXR0b24gZmxhdD5Db3VudHk8L0Ryb3Bkb3duLkJ1dHRvbj5cbiAgICAgICAgICAgIDxEcm9wZG93bi5NZW51IGFyaWEtbGFiZWw9XCJTdGF0aWMgQWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgIDxEcm9wZG93bi5JdGVtIGtleT1cIkFkYW1zXCIgb25DbGljaz17aGFuZGxlQmFyR3JhcGh9Pk5ldyBmaWxlPC9Ecm9wZG93bi5JdGVtPlxuICAgICAgICAgICAgICAgIDxEcm9wZG93bi5JdGVtIGtleT1cIkFzb3RpblwiIG9uQ2xpY2s9e2hhbmRsZUJhckdyYXBofT5Db3B5IGxpbms8L0Ryb3Bkb3duLkl0ZW0+XG4gICAgICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0ga2V5PVwiQmVudG9uXCIgb25DbGljaz17aGFuZGxlQmFyR3JhcGh9PkVkaXQgZmlsZTwvRHJvcGRvd24uSXRlbT5cbiAgICAgICAgICAgIDwvRHJvcGRvd24uTWVudT5cbiAgICAgICAgPC9Ecm9wZG93bj5cblxuICAgICAgICA8RG91Z2hudXQgZGF0YT17aW5jb21lX3Zpen0vPlxuICAgIDwvZGl2PlxuICApO1xufVxuZXhwb3J0IGRlZmF1bHQgSW5jb21lVmlzdWFsaXphdGlvbjsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkNoYXJ0IiwiQ2hhcnRKUyIsIkFyY0VsZW1lbnQiLCJUb29sdGlwIiwiTGVnZW5kIiwiRHJvcGRvd24iLCJEb3VnaG51dCIsInJlZ2lzdGVyIiwiSW5jb21lVmlzdWFsaXphdGlvbiIsImRhdGEiLCJzZXREYXRhIiwiZXJyb3JNZXNzYWdlIiwic2V0RXJyb3JNZXNzYWdlIiwiZmV0Y2hEYXRhIiwicmVzcG9uc2UiLCJmZXRjaCIsImpzb24iLCJlcnJvciIsImNvdW50eSIsImxlc3NfdGhhbl8xMDAwMCIsImluY29tZV8xMDAwMF90b18xNDk5OSIsImluY29tZV8xNTAwMF90b18xOTk5OSIsImluY29tZV8yMDAwMF90b18yNDk5OSIsImluY29tZV8yNTAwMF90b18yOTk5OSIsImluY29tZV8zMDAwMF90b18zNDk5OSIsImluY29tZV8zNTAwMF90b18zOTk5OSIsImluY29tZV80MDAwMF90b180NDk5OSIsImluY29tZV80NTAwMF90b180OTk5OSIsImluY29tZV81MDAwMF90b181NDk5OSIsImluY29tZV81NTAwMF90b181OTk5OSIsImluY29tZV82MDAwMF90b183NDk5OSIsImluY29tZV83NTAwMF90b185OTk5OSIsImluY29tZV8xMDAwMDBfdG9fMTI0OTk5IiwiaW5jb21lXzEyNTAwMF90b18xNDk5OTkiLCJpbmNvbWVfMTUwMDAwX3RvXzE5OTk5OSIsImluY29tZV8yMDAwMDBfb3JfbW9yZSIsImkiLCJsZW5ndGgiLCJDb3VudHkiLCJkaXYiLCJpbml0aWFsRGF0YSIsInNldEluaXRpYWxEYXRhIiwiaW5jb21lX2xlc3NfMTAwMDAiLCJoYW5kbGVCYXJHcmFwaCIsImV2ZW50IiwiZm9yRWFjaCIsImVhY2giLCJjdXJyZW50VGFyZ2V0IiwidmFsdWUiLCJsZXNzXzEwMDAwIiwiaW5jb21lX3ZpeiIsImxhYmVscyIsImRhdGFzZXRzIiwibGFiZWwiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJDb2xvciIsImJvcmRlcldpZHRoIiwiaDMiLCJCdXR0b24iLCJmbGF0IiwiTWVudSIsImFyaWEtbGFiZWwiLCJJdGVtIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Income_viz.js\n"));

/***/ })

});