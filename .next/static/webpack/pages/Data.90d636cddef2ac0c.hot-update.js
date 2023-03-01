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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js */ \"./node_modules/chart.js/dist/chart.js\");\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-chartjs-2 */ \"./node_modules/react-chartjs-2/dist/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nchart_js__WEBPACK_IMPORTED_MODULE_2__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_2__.ArcElement, chart_js__WEBPACK_IMPORTED_MODULE_2__.Tooltip, chart_js__WEBPACK_IMPORTED_MODULE_2__.Legend);\nfunction IncomeVisualization() {\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    // Add state for handling errors\n    const [errorMessage, setErrorMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        async function fetchData() {\n            try {\n                const response = await fetch(\"https://rprwae53w2.execute-api.us-west-2.amazonaws.com/v-1/latino-income\");\n                const json = await response.json();\n                setData(json.data);\n            } catch (error) {\n                setErrorMessage(\"Error fetching data\");\n            }\n        }\n        fetchData();\n    }, []);\n    var countyData = {\n        \"county\": \"\",\n        \"income_less_10000\": [],\n        \"income_10000_to_14999\": [],\n        \"income_15000_to_19999\": [],\n        \"income_20000_to_24999\": [],\n        \"income_25000_to_29999\": [],\n        \"income_30000_to_34999\": [],\n        \"income_35000_to_39999\": [],\n        \"income_40000_to_44999\": [],\n        \"income_45000_to_49999\": [],\n        \"income_50000_to_54999\": [],\n        \"income_55000_to_59999\": [],\n        \"income_60000_to_74999\": [],\n        \"income_75000_to_99999\": [],\n        \"income_100000_to_124999\": [],\n        \"income_125000_to_149999\": [],\n        \"income_150000_to_199999\": [],\n        \"income_200000_or_more\": []\n    };\n    var County = [];\n    var income_less_10000 = [];\n    var income_10000_to_14999 = [];\n    var income_15000_to_19999 = [];\n    var income_20000_to_24999 = [];\n    var income_25000_to_29999 = [];\n    var income_30000_to_34999 = [];\n    var income_35000_to_39999 = [];\n    var income_40000_to_44999 = [];\n    var income_45000_to_49999 = [];\n    var income_50000_to_54999 = [];\n    var income_55000_to_59999 = [];\n    var income_60000_to_74999 = [];\n    var income_75000_to_99999 = [];\n    var income_100000_to_124999 = [];\n    var income_125000_to_149999 = [];\n    var income_150000_to_199999 = [];\n    var income_200000_or_more = [];\n    for(let i = 0; i < data.length; i++){\n        countyData[\"county\"] = data[i].County;\n        countyData[\"income_less_10000\"].push(data[i].Income_less_10000);\n        countyData[\"income_10000_to_14999\"].push(data[i].Income_10000_to_14999);\n        countyData[\"income_15000_to_19999\"].push(data[i].Income_15000_to_19999);\n        countyData[\"income_20000_to_24999\"].push(data[i].Income_20000_to_24999);\n        countyData[\"income_25000_to_29999\"].push(data[i].Income_25000_to_29999);\n        countyData[\"income_30000_to_34999\"].push(data[i].Income_30000_to_34999);\n        countyData[\"income_35000_to_39999\"].push(data[i].Income_35000_to_39999);\n        countyData[\"income_40000_to_44999\"].push(data[i].Income_40000_to_44999);\n        countyData[\"income_45000_to_49999\"].push(data[i].Income_45000_to_49999);\n        countyData[\"income_50000_to_54999\"].push(data[i].Income_50000_to_54999);\n        countyData[\"income_55000_to_59999\"].push(data[i].Income_55000_to_59999);\n        countyData[\"income_60000_to_74999\"].push(data[i].Income_60000_to_74999);\n        countyData[\"income_75000_to_99999\"].push(data[i].Income_75000_to_99999);\n        countyData[\"income_100000_to_124999\"].push(data[i].Income_100000_to_124999);\n        countyData[\"income_125000_to_149999\"].push(data[i].Income_125000_to_149999);\n        countyData[\"income_150000_to_199999\"].push(data[i].Income_150000_to_199999);\n        countyData[\"income_200000_or_more\"].push(data[i].Income_200000_or_more);\n    }\n    console.log(countyData);\n    /*\n  var county = ['Adams', 'Asotin', 'Benton', 'Chelan', 'Clallam', 'Clark', 'Columbia', 'Cowlitz', 'Douglas', 'Ferry',\n                'Franklin', 'Garfield', 'Grant', 'Grays Harbor', 'Island', 'Jefferson', 'King', 'Kitsap', 'Kittitas', 'Klickitat', 'Lewis',\n                'Lincoln', 'Mason', 'Okanogan', 'Pacific', 'Pend Oreille', 'Pierce', 'San Juan', 'Skagit', 'Skamania', 'Snohomish', 'Spokane','Stevens',\n                'Thurston', 'Wahkiakum', 'Walla Walla', 'Whatcom', 'Whitman', 'Yakima', 'Unassigned', 'Western Washington', 'Unassigned Region', 'Better Health Together', 'Elevate Health',\n                'Greater Columbia', 'Healthier Here', 'North Sound', 'Olympic Community of Health', 'Southwest Washington',\n                'Cascade Pacific Action Alliance', 'North Central','Unassigned ACH'\n                ]*/ // Conditionally render an error message if an error occurs\n    if (errorMessage) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: errorMessage\n        }, void 0, false, {\n            fileName: \"/Users/jangwonyun/Desktop/Research_AdiosCovid_NJS_App/components/Income_viz.js\",\n            lineNumber: 80,\n            columnNumber: 12\n        }, this);\n    }\n    console.log(County);\n    const [initialData, setInitialData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        county: \"Adams\",\n        income_less_10000: [\n            166\n        ],\n        income_10000_to_14999: [\n            256\n        ]\n    });\n    const handleBarGraph = (event)=>{\n        countyData.forEach((each)=>{\n            if (each.County === event.currentTarget.id) {\n                setInitialData({\n                    county: each.County,\n                    income_less_10000: each.Income_less_10000,\n                    income_10000_to_14999: each.Income_10000_to_14999\n                });\n            }\n        });\n    };\n    const income_viz = {\n        labels: initialData.county.split(\",\"),\n        datasets: [\n            {\n                label: \"Income Less than 10,000\",\n                data: initialData.income_less_10000,\n                backgroundColor: [\n                    \"rgba(255, 99, 132, 0.2)\"\n                ],\n                borderColor: [\n                    \"rgba(255, 99, 132, 1)\"\n                ],\n                borderWidth: 1\n            },\n            {\n                label: \"Income Between 10,000-14,999\",\n                data: initialData.income_10000_to_14999,\n                backgroundColor: [\n                    \"rgba(54, 162, 235, 0.2)\"\n                ],\n                borderColor: [\n                    \"rgba(54, 162, 235, 1)\"\n                ],\n                borderWidth: 1\n            }\n        ]\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: \"Income of Latino Population\"\n            }, void 0, false, {\n                fileName: \"/Users/jangwonyun/Desktop/Research_AdiosCovid_NJS_App/components/Income_viz.js\",\n                lineNumber: 140,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"btn btn m-1 btn-primary\",\n                id: \"Adams\",\n                onClick: handleBarGraph,\n                children: \"Adams\"\n            }, void 0, false, {\n                fileName: \"/Users/jangwonyun/Desktop/Research_AdiosCovid_NJS_App/components/Income_viz.js\",\n                lineNumber: 141,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"btn btn m-1 btn-primary\",\n                id: \"Asotin\",\n                onClick: handleBarGraph,\n                children: \"Asotin\"\n            }, void 0, false, {\n                fileName: \"/Users/jangwonyun/Desktop/Research_AdiosCovid_NJS_App/components/Income_viz.js\",\n                lineNumber: 142,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"btn btn m-1 btn-primary\",\n                id: \"Benton\",\n                onClick: handleBarGraph,\n                children: \"Benton\"\n            }, void 0, false, {\n                fileName: \"/Users/jangwonyun/Desktop/Research_AdiosCovid_NJS_App/components/Income_viz.js\",\n                lineNumber: 143,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__.Doughnut, {\n                data: income_viz\n            }, void 0, false, {\n                fileName: \"/Users/jangwonyun/Desktop/Research_AdiosCovid_NJS_App/components/Income_viz.js\",\n                lineNumber: 146,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jangwonyun/Desktop/Research_AdiosCovid_NJS_App/components/Income_viz.js\",\n        lineNumber: 139,\n        columnNumber: 5\n    }, this);\n}\n_s(IncomeVisualization, \"IZMlxB7v8O99upVUeGJodzTAxMA=\");\n_c = IncomeVisualization;\n/*<Dropdown>\n            <Dropdown.Button flat>County</Dropdown.Button>\n            <Dropdown.Menu aria-label=\"Static Actions\">\n                <Dropdown.Item key=\"Adams\" onClick={handleBarGraph}>Adams</Dropdown.Item>\n                <Dropdown.Item key=\"Asotin\" onClick={handleBarGraph}>Asotin</Dropdown.Item>\n                <Dropdown.Item key=\"Benton\" onClick={handleBarGraph}>Benton</Dropdown.Item>\n            </Dropdown.Menu>\n        </Dropdown> */ /* harmony default export */ __webpack_exports__[\"default\"] = (IncomeVisualization);\nvar _c;\n$RefreshReg$(_c, \"IncomeVisualization\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Z0I7Ozs7OzswQkFDakYsOERBQUNlO2dCQUFPQyxXQUFVO2dCQUEwQlgsSUFBRztnQkFBU1ksU0FBU2pCOzBCQUFnQjs7Ozs7OzBCQUdqRiw4REFBQ3pELHFEQUFRQTtnQkFBQ0csTUFBTTREOzs7Ozs7Ozs7Ozs7QUFHeEI7R0E3SVM3RDtLQUFBQTtBQThJVDs7Ozs7OztvQkFPb0IsR0FDcEIsK0RBQWVBLG1CQUFtQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0luY29tZV92aXouanM/MmIxNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZWFjdCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENoYXJ0IGFzIENoYXJ0SlMsIEFyY0VsZW1lbnQsIFRvb2x0aXAsIExlZ2VuZCB9IGZyb20gJ2NoYXJ0LmpzJztcbmltcG9ydCB7IERyb3Bkb3duIH0gZnJvbSBcIkBuZXh0dWktb3JnL3JlYWN0XCI7XG5pbXBvcnQgeyBEb3VnaG51dCB9IGZyb20gJ3JlYWN0LWNoYXJ0anMtMic7XG5cbkNoYXJ0SlMucmVnaXN0ZXIoQXJjRWxlbWVudCwgVG9vbHRpcCwgTGVnZW5kKTtcblxuZnVuY3Rpb24gSW5jb21lVmlzdWFsaXphdGlvbigpIHtcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoW10pO1xuXG4gIC8vIEFkZCBzdGF0ZSBmb3IgaGFuZGxpbmcgZXJyb3JzXG4gIGNvbnN0IFtlcnJvck1lc3NhZ2UsIHNldEVycm9yTWVzc2FnZV0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhc3luYyBmdW5jdGlvbiBmZXRjaERhdGEoKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL3JwcndhZTUzdzIuZXhlY3V0ZS1hcGkudXMtd2VzdC0yLmFtYXpvbmF3cy5jb20vdi0xL2xhdGluby1pbmNvbWUnKTtcbiAgICAgICAgY29uc3QganNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgc2V0RGF0YShqc29uLmRhdGEpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgc2V0RXJyb3JNZXNzYWdlKCdFcnJvciBmZXRjaGluZyBkYXRhJyk7XG4gICAgICB9XG4gICAgfVxuICAgIGZldGNoRGF0YSgpO1xuICB9LCBbXSk7XG4gIHZhciBjb3VudHlEYXRhID0ge1wiY291bnR5XCI6XCJcIiwgXCJpbmNvbWVfbGVzc18xMDAwMFwiOltdLCBcImluY29tZV8xMDAwMF90b18xNDk5OVwiOltdLCBcImluY29tZV8xNTAwMF90b18xOTk5OVwiOltdLCBcImluY29tZV8yMDAwMF90b18yNDk5OVwiOltdLCBcImluY29tZV8yNTAwMF90b18yOTk5OVwiOltdLFxuICAgICAgICAgICAgICAgICAgICBcImluY29tZV8zMDAwMF90b18zNDk5OVwiOltdLCBcImluY29tZV8zNTAwMF90b18zOTk5OVwiOltdLCBcImluY29tZV80MDAwMF90b180NDk5OVwiOltdLCBcImluY29tZV80NTAwMF90b180OTk5OVwiOltdLCBcImluY29tZV81MDAwMF90b181NDk5OVwiOltdLFxuICAgICAgICAgICAgICAgIFwiaW5jb21lXzU1MDAwX3RvXzU5OTk5XCI6IFtdLCBcImluY29tZV82MDAwMF90b183NDk5OVwiOltdLCBcImluY29tZV83NTAwMF90b185OTk5OVwiOltdLCBcImluY29tZV8xMDAwMDBfdG9fMTI0OTk5XCI6W10sIFwiaW5jb21lXzEyNTAwMF90b18xNDk5OTlcIjpbXSxcbiAgICAgICAgICAgIFwiaW5jb21lXzE1MDAwMF90b18xOTk5OTlcIjpbXSwgXCJpbmNvbWVfMjAwMDAwX29yX21vcmVcIjpbXX07XG4gIHZhciBDb3VudHkgPSBbXTtcbiAgdmFyIGluY29tZV9sZXNzXzEwMDAwID0gW107XG4gIHZhciBpbmNvbWVfMTAwMDBfdG9fMTQ5OTkgPSBbXTtcbiAgdmFyIGluY29tZV8xNTAwMF90b18xOTk5OSA9IFtdO1xuICB2YXIgaW5jb21lXzIwMDAwX3RvXzI0OTk5ID0gW107XG4gIHZhciBpbmNvbWVfMjUwMDBfdG9fMjk5OTkgPSBbXTtcbiAgdmFyIGluY29tZV8zMDAwMF90b18zNDk5OSA9IFtdO1xuICB2YXIgaW5jb21lXzM1MDAwX3RvXzM5OTk5ID0gW107XG4gIHZhciBpbmNvbWVfNDAwMDBfdG9fNDQ5OTkgPSBbXTtcbiAgdmFyIGluY29tZV80NTAwMF90b180OTk5OSA9IFtdO1xuICB2YXIgaW5jb21lXzUwMDAwX3RvXzU0OTk5ID0gW107XG4gIHZhciBpbmNvbWVfNTUwMDBfdG9fNTk5OTkgPSBbXTtcbiAgdmFyIGluY29tZV82MDAwMF90b183NDk5OSA9IFtdO1xuICB2YXIgaW5jb21lXzc1MDAwX3RvXzk5OTk5ID0gW107XG4gIHZhciBpbmNvbWVfMTAwMDAwX3RvXzEyNDk5OSA9IFtdO1xuICB2YXIgaW5jb21lXzEyNTAwMF90b18xNDk5OTkgPSBbXTtcbiAgdmFyIGluY29tZV8xNTAwMDBfdG9fMTk5OTk5ID0gW107XG4gIHZhciBpbmNvbWVfMjAwMDAwX29yX21vcmUgPSBbXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICBjb3VudHlEYXRhW1wiY291bnR5XCJdID0gZGF0YVtpXS5Db3VudHk7XG4gICAgY291bnR5RGF0YVtcImluY29tZV9sZXNzXzEwMDAwXCJdLnB1c2goZGF0YVtpXS5JbmNvbWVfbGVzc18xMDAwMCk7XG4gICAgY291bnR5RGF0YVtcImluY29tZV8xMDAwMF90b18xNDk5OVwiXS5wdXNoKGRhdGFbaV0uSW5jb21lXzEwMDAwX3RvXzE0OTk5KTtcbiAgICBjb3VudHlEYXRhW1wiaW5jb21lXzE1MDAwX3RvXzE5OTk5XCJdLnB1c2goZGF0YVtpXS5JbmNvbWVfMTUwMDBfdG9fMTk5OTkpO1xuICAgIGNvdW50eURhdGFbXCJpbmNvbWVfMjAwMDBfdG9fMjQ5OTlcIl0ucHVzaChkYXRhW2ldLkluY29tZV8yMDAwMF90b18yNDk5OSk7XG4gICAgY291bnR5RGF0YVtcImluY29tZV8yNTAwMF90b18yOTk5OVwiXS5wdXNoKGRhdGFbaV0uSW5jb21lXzI1MDAwX3RvXzI5OTk5KTtcbiAgICBjb3VudHlEYXRhW1wiaW5jb21lXzMwMDAwX3RvXzM0OTk5XCJdLnB1c2goZGF0YVtpXS5JbmNvbWVfMzAwMDBfdG9fMzQ5OTkpO1xuICAgIGNvdW50eURhdGFbXCJpbmNvbWVfMzUwMDBfdG9fMzk5OTlcIl0ucHVzaChkYXRhW2ldLkluY29tZV8zNTAwMF90b18zOTk5OSk7XG4gICAgY291bnR5RGF0YVtcImluY29tZV80MDAwMF90b180NDk5OVwiXS5wdXNoKGRhdGFbaV0uSW5jb21lXzQwMDAwX3RvXzQ0OTk5KTtcbiAgICBjb3VudHlEYXRhW1wiaW5jb21lXzQ1MDAwX3RvXzQ5OTk5XCJdLnB1c2goZGF0YVtpXS5JbmNvbWVfNDUwMDBfdG9fNDk5OTkpO1xuICAgIGNvdW50eURhdGFbXCJpbmNvbWVfNTAwMDBfdG9fNTQ5OTlcIl0ucHVzaChkYXRhW2ldLkluY29tZV81MDAwMF90b181NDk5OSk7XG4gICAgY291bnR5RGF0YVtcImluY29tZV81NTAwMF90b181OTk5OVwiXS5wdXNoKGRhdGFbaV0uSW5jb21lXzU1MDAwX3RvXzU5OTk5KTtcbiAgICBjb3VudHlEYXRhW1wiaW5jb21lXzYwMDAwX3RvXzc0OTk5XCJdLnB1c2goZGF0YVtpXS5JbmNvbWVfNjAwMDBfdG9fNzQ5OTkpO1xuICAgIGNvdW50eURhdGFbXCJpbmNvbWVfNzUwMDBfdG9fOTk5OTlcIl0ucHVzaChkYXRhW2ldLkluY29tZV83NTAwMF90b185OTk5OSk7XG4gICAgY291bnR5RGF0YVtcImluY29tZV8xMDAwMDBfdG9fMTI0OTk5XCJdLnB1c2goZGF0YVtpXS5JbmNvbWVfMTAwMDAwX3RvXzEyNDk5OSk7XG4gICAgY291bnR5RGF0YVtcImluY29tZV8xMjUwMDBfdG9fMTQ5OTk5XCJdLnB1c2goZGF0YVtpXS5JbmNvbWVfMTI1MDAwX3RvXzE0OTk5OSk7XG4gICAgY291bnR5RGF0YVtcImluY29tZV8xNTAwMDBfdG9fMTk5OTk5XCJdLnB1c2goZGF0YVtpXS5JbmNvbWVfMTUwMDAwX3RvXzE5OTk5OSk7XG4gICAgY291bnR5RGF0YVtcImluY29tZV8yMDAwMDBfb3JfbW9yZVwiXS5wdXNoKGRhdGFbaV0uSW5jb21lXzIwMDAwMF9vcl9tb3JlKTtcbiAgfVxuICBjb25zb2xlLmxvZyhjb3VudHlEYXRhKTtcbiAgLypcbiAgdmFyIGNvdW50eSA9IFsnQWRhbXMnLCAnQXNvdGluJywgJ0JlbnRvbicsICdDaGVsYW4nLCAnQ2xhbGxhbScsICdDbGFyaycsICdDb2x1bWJpYScsICdDb3dsaXR6JywgJ0RvdWdsYXMnLCAnRmVycnknLFxuICAgICAgICAgICAgICAgICdGcmFua2xpbicsICdHYXJmaWVsZCcsICdHcmFudCcsICdHcmF5cyBIYXJib3InLCAnSXNsYW5kJywgJ0plZmZlcnNvbicsICdLaW5nJywgJ0tpdHNhcCcsICdLaXR0aXRhcycsICdLbGlja2l0YXQnLCAnTGV3aXMnLFxuICAgICAgICAgICAgICAgICdMaW5jb2xuJywgJ01hc29uJywgJ09rYW5vZ2FuJywgJ1BhY2lmaWMnLCAnUGVuZCBPcmVpbGxlJywgJ1BpZXJjZScsICdTYW4gSnVhbicsICdTa2FnaXQnLCAnU2thbWFuaWEnLCAnU25vaG9taXNoJywgJ1Nwb2thbmUnLCdTdGV2ZW5zJyxcbiAgICAgICAgICAgICAgICAnVGh1cnN0b24nLCAnV2Foa2lha3VtJywgJ1dhbGxhIFdhbGxhJywgJ1doYXRjb20nLCAnV2hpdG1hbicsICdZYWtpbWEnLCAnVW5hc3NpZ25lZCcsICdXZXN0ZXJuIFdhc2hpbmd0b24nLCAnVW5hc3NpZ25lZCBSZWdpb24nLCAnQmV0dGVyIEhlYWx0aCBUb2dldGhlcicsICdFbGV2YXRlIEhlYWx0aCcsXG4gICAgICAgICAgICAgICAgJ0dyZWF0ZXIgQ29sdW1iaWEnLCAnSGVhbHRoaWVyIEhlcmUnLCAnTm9ydGggU291bmQnLCAnT2x5bXBpYyBDb21tdW5pdHkgb2YgSGVhbHRoJywgJ1NvdXRod2VzdCBXYXNoaW5ndG9uJyxcbiAgICAgICAgICAgICAgICAnQ2FzY2FkZSBQYWNpZmljIEFjdGlvbiBBbGxpYW5jZScsICdOb3J0aCBDZW50cmFsJywnVW5hc3NpZ25lZCBBQ0gnXG4gICAgICAgICAgICAgICAgXSovXG4gIC8vIENvbmRpdGlvbmFsbHkgcmVuZGVyIGFuIGVycm9yIG1lc3NhZ2UgaWYgYW4gZXJyb3Igb2NjdXJzXG4gIGlmIChlcnJvck1lc3NhZ2UpIHtcbiAgICByZXR1cm4gPGRpdj57ZXJyb3JNZXNzYWdlfTwvZGl2PjtcbiAgfVxuICBjb25zb2xlLmxvZyhDb3VudHkpO1xuICAgIGNvbnN0IFtpbml0aWFsRGF0YSwgc2V0SW5pdGlhbERhdGFdID0gdXNlU3RhdGUoe2NvdW50eTpcIkFkYW1zXCIsIGluY29tZV9sZXNzXzEwMDAwOlsxNjZdLCBpbmNvbWVfMTAwMDBfdG9fMTQ5OTk6WzI1Nl19KTtcbiAgICBcbiAgY29uc3QgaGFuZGxlQmFyR3JhcGggPSAoZXZlbnQpID0+IHtcbiAgICAgIGNvdW50eURhdGEuZm9yRWFjaChlYWNoPT57XG4gICAgICAgICAgaWYoZWFjaC5Db3VudHkgPT09IGV2ZW50LmN1cnJlbnRUYXJnZXQuaWQpe1xuICAgICAgICAgICAgICBzZXRJbml0aWFsRGF0YSh7Y291bnR5OiBlYWNoLkNvdW50eSwgaW5jb21lX2xlc3NfMTAwMDA6ZWFjaC5JbmNvbWVfbGVzc18xMDAwMCwgaW5jb21lXzEwMDAwX3RvXzE0OTk5OmVhY2guSW5jb21lXzEwMDAwX3RvXzE0OTk5fSlcbiAgICAgICAgICB9XG4gICAgICB9KVxuICB9XG4gIGNvbnN0IGluY29tZV92aXogPSB7XG4gICAgbGFiZWxzOiBpbml0aWFsRGF0YS5jb3VudHkuc3BsaXQoJywnKSxcbiAgICBkYXRhc2V0czogW1xuICAgICAgICB7XG4gICAgICAgIGxhYmVsOiAnSW5jb21lIExlc3MgdGhhbiAxMCwwMDAnLFxuICAgICAgICBkYXRhOiBpbml0aWFsRGF0YS5pbmNvbWVfbGVzc18xMDAwMCxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBbXG4gICAgICAgICAgJ3JnYmEoMjU1LCA5OSwgMTMyLCAwLjIpJ1xuICAgICAgICAgIC8qJ3JnYmEoNTQsIDE2MiwgMjM1LCAwLjIpJyxcbiAgICAgICAgICAncmdiYSgyNTUsIDIwNiwgODYsIDAuMiknLFxuICAgICAgICAgICdyZ2JhKDc1LCAxOTIsIDE5MiwgMC4yKScsXG4gICAgICAgICAgJ3JnYmEoMTUzLCAxMDIsIDI1NSwgMC4yKScsXG4gICAgICAgICAgJ3JnYmEoMjU1LCAxNTksIDY0LCAwLjIpJywqL1xuICAgICAgICBdLFxuICAgICAgICBib3JkZXJDb2xvcjogW1xuICAgICAgICAgICdyZ2JhKDI1NSwgOTksIDEzMiwgMSknXG4gICAgICAgICAgLyoncmdiYSg1NCwgMTYyLCAyMzUsIDEpJyxcbiAgICAgICAgICAncmdiYSgyNTUsIDIwNiwgODYsIDEpJyxcbiAgICAgICAgICAncmdiYSg3NSwgMTkyLCAxOTIsIDEpJyxcbiAgICAgICAgICAncmdiYSgxNTMsIDEwMiwgMjU1LCAxKScsXG4gICAgICAgICAgJ3JnYmEoMjU1LCAxNTksIDY0LCAxKScsKi9cbiAgICAgICAgXSxcbiAgICAgICAgYm9yZGVyV2lkdGg6IDEsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiAnSW5jb21lIEJldHdlZW4gMTAsMDAwLTE0LDk5OScsXG4gICAgICAgICAgICBkYXRhOiBpbml0aWFsRGF0YS5pbmNvbWVfMTAwMDBfdG9fMTQ5OTksXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFtcbiAgICAgICAgICAgICAgJ3JnYmEoNTQsIDE2MiwgMjM1LCAwLjIpJ1xuICAgICAgICAgICAgICAvKidyZ2JhKDI1NSwgMjA2LCA4NiwgMC4yKScsXG4gICAgICAgICAgICAgICdyZ2JhKDc1LCAxOTIsIDE5MiwgMC4yKScsXG4gICAgICAgICAgICAgICdyZ2JhKDE1MywgMTAyLCAyNTUsIDAuMiknLFxuICAgICAgICAgICAgICAncmdiYSgyNTUsIDE1OSwgNjQsIDAuMiknLCovXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6IFtcbiAgICAgICAgICAgICAgJ3JnYmEoNTQsIDE2MiwgMjM1LCAxKSdcbiAgICAgICAgICAgICAgLyoncmdiYSgyNTUsIDIwNiwgODYsIDEpJyxcbiAgICAgICAgICAgICAgJ3JnYmEoNzUsIDE5MiwgMTkyLCAxKScsXG4gICAgICAgICAgICAgICdyZ2JhKDE1MywgMTAyLCAyNTUsIDEpJyxcbiAgICAgICAgICAgICAgJ3JnYmEoMjU1LCAxNTksIDY0LCAxKScsKi9cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBib3JkZXJXaWR0aDogMSxcbiAgICAgICAgfVxuICAgIF0sXG4gIH07XG4gIHJldHVybiAoXG4gICAgXG4gICAgPGRpdj5cbiAgICAgICAgPGgzPkluY29tZSBvZiBMYXRpbm8gUG9wdWxhdGlvbjwvaDM+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0biBtLTEgYnRuLXByaW1hcnlcIiBpZD0nQWRhbXMnIG9uQ2xpY2s9e2hhbmRsZUJhckdyYXBofT5BZGFtczwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4gbS0xIGJ0bi1wcmltYXJ5XCIgaWQ9J0Fzb3Rpbicgb25DbGljaz17aGFuZGxlQmFyR3JhcGh9PkFzb3RpbjwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4gbS0xIGJ0bi1wcmltYXJ5XCIgaWQ9J0JlbnRvbicgb25DbGljaz17aGFuZGxlQmFyR3JhcGh9PkJlbnRvbjwvYnV0dG9uPlxuICAgICAgICBcblxuICAgICAgICA8RG91Z2hudXQgZGF0YT17aW5jb21lX3Zpen0vPlxuICAgIDwvZGl2PlxuICApO1xufVxuLyo8RHJvcGRvd24+XG4gICAgICAgICAgICA8RHJvcGRvd24uQnV0dG9uIGZsYXQ+Q291bnR5PC9Ecm9wZG93bi5CdXR0b24+XG4gICAgICAgICAgICA8RHJvcGRvd24uTWVudSBhcmlhLWxhYmVsPVwiU3RhdGljIEFjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICA8RHJvcGRvd24uSXRlbSBrZXk9XCJBZGFtc1wiIG9uQ2xpY2s9e2hhbmRsZUJhckdyYXBofT5BZGFtczwvRHJvcGRvd24uSXRlbT5cbiAgICAgICAgICAgICAgICA8RHJvcGRvd24uSXRlbSBrZXk9XCJBc290aW5cIiBvbkNsaWNrPXtoYW5kbGVCYXJHcmFwaH0+QXNvdGluPC9Ecm9wZG93bi5JdGVtPlxuICAgICAgICAgICAgICAgIDxEcm9wZG93bi5JdGVtIGtleT1cIkJlbnRvblwiIG9uQ2xpY2s9e2hhbmRsZUJhckdyYXBofT5CZW50b248L0Ryb3Bkb3duLkl0ZW0+XG4gICAgICAgICAgICA8L0Ryb3Bkb3duLk1lbnU+XG4gICAgICAgIDwvRHJvcGRvd24+ICovXG5leHBvcnQgZGVmYXVsdCBJbmNvbWVWaXN1YWxpemF0aW9uOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQ2hhcnQiLCJDaGFydEpTIiwiQXJjRWxlbWVudCIsIlRvb2x0aXAiLCJMZWdlbmQiLCJEcm9wZG93biIsIkRvdWdobnV0IiwicmVnaXN0ZXIiLCJJbmNvbWVWaXN1YWxpemF0aW9uIiwiZGF0YSIsInNldERhdGEiLCJlcnJvck1lc3NhZ2UiLCJzZXRFcnJvck1lc3NhZ2UiLCJmZXRjaERhdGEiLCJyZXNwb25zZSIsImZldGNoIiwianNvbiIsImVycm9yIiwiY291bnR5RGF0YSIsIkNvdW50eSIsImluY29tZV9sZXNzXzEwMDAwIiwiaW5jb21lXzEwMDAwX3RvXzE0OTk5IiwiaW5jb21lXzE1MDAwX3RvXzE5OTk5IiwiaW5jb21lXzIwMDAwX3RvXzI0OTk5IiwiaW5jb21lXzI1MDAwX3RvXzI5OTk5IiwiaW5jb21lXzMwMDAwX3RvXzM0OTk5IiwiaW5jb21lXzM1MDAwX3RvXzM5OTk5IiwiaW5jb21lXzQwMDAwX3RvXzQ0OTk5IiwiaW5jb21lXzQ1MDAwX3RvXzQ5OTk5IiwiaW5jb21lXzUwMDAwX3RvXzU0OTk5IiwiaW5jb21lXzU1MDAwX3RvXzU5OTk5IiwiaW5jb21lXzYwMDAwX3RvXzc0OTk5IiwiaW5jb21lXzc1MDAwX3RvXzk5OTk5IiwiaW5jb21lXzEwMDAwMF90b18xMjQ5OTkiLCJpbmNvbWVfMTI1MDAwX3RvXzE0OTk5OSIsImluY29tZV8xNTAwMDBfdG9fMTk5OTk5IiwiaW5jb21lXzIwMDAwMF9vcl9tb3JlIiwiaSIsImxlbmd0aCIsInB1c2giLCJJbmNvbWVfbGVzc18xMDAwMCIsIkluY29tZV8xMDAwMF90b18xNDk5OSIsIkluY29tZV8xNTAwMF90b18xOTk5OSIsIkluY29tZV8yMDAwMF90b18yNDk5OSIsIkluY29tZV8yNTAwMF90b18yOTk5OSIsIkluY29tZV8zMDAwMF90b18zNDk5OSIsIkluY29tZV8zNTAwMF90b18zOTk5OSIsIkluY29tZV80MDAwMF90b180NDk5OSIsIkluY29tZV80NTAwMF90b180OTk5OSIsIkluY29tZV81MDAwMF90b181NDk5OSIsIkluY29tZV81NTAwMF90b181OTk5OSIsIkluY29tZV82MDAwMF90b183NDk5OSIsIkluY29tZV83NTAwMF90b185OTk5OSIsIkluY29tZV8xMDAwMDBfdG9fMTI0OTk5IiwiSW5jb21lXzEyNTAwMF90b18xNDk5OTkiLCJJbmNvbWVfMTUwMDAwX3RvXzE5OTk5OSIsIkluY29tZV8yMDAwMDBfb3JfbW9yZSIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJpbml0aWFsRGF0YSIsInNldEluaXRpYWxEYXRhIiwiY291bnR5IiwiaGFuZGxlQmFyR3JhcGgiLCJldmVudCIsImZvckVhY2giLCJlYWNoIiwiY3VycmVudFRhcmdldCIsImlkIiwiaW5jb21lX3ZpeiIsImxhYmVscyIsInNwbGl0IiwiZGF0YXNldHMiLCJsYWJlbCIsImJhY2tncm91bmRDb2xvciIsImJvcmRlckNvbG9yIiwiYm9yZGVyV2lkdGgiLCJoMyIsImJ1dHRvbiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Income_viz.js\n"));

/***/ })

});