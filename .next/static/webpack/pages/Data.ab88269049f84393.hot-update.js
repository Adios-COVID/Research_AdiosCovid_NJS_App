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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js */ \"./node_modules/chart.js/dist/chart.js\");\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-chartjs-2 */ \"./node_modules/react-chartjs-2/dist/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nchart_js__WEBPACK_IMPORTED_MODULE_2__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_2__.ArcElement, chart_js__WEBPACK_IMPORTED_MODULE_2__.Tooltip, chart_js__WEBPACK_IMPORTED_MODULE_2__.Legend);\nfunction IncomeVisualization() {\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    // Add state for handling errors\n    const [errorMessage, setErrorMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        async function fetchData() {\n            try {\n                const response = await fetch(\"https://rprwae53w2.execute-api.us-west-2.amazonaws.com/v-1/latino-income\");\n                const json = await response.json();\n                setData(json.data);\n            } catch (error) {\n                setErrorMessage(\"Error fetching data\");\n            }\n        }\n        fetchData();\n    }, []);\n    var countyData = {\n        \"county\": [],\n        \"income_less_10000\": [],\n        \"income_10000_to_14999\": [],\n        \"income_15000_to_19999\": [],\n        \"income_20000_to_24999\": [],\n        \"income_25000_to_29999\": [],\n        \"income_30000_to_34999\": [],\n        \"income_35000_to_39999\": [],\n        \"income_40000_to_44999\": [],\n        \"income_45000_to_49999\": [],\n        \"income_50000_to_54999\": [],\n        \"income_55000_to_59999\": [],\n        \"income_60000_to_74999\": [],\n        \"income_75000_to_99999\": [],\n        \"income_100000_to_124999\": [],\n        \"income_125000_to_149999\": [],\n        \"income_150000_to_199999\": [],\n        \"income_200000_or_more\": []\n    };\n    for(let i = 0; i < data.length; i++){\n        countyData[\"county\"].push(data[i].County);\n        countyData[\"income_less_10000\"].push(data[i].Income_less_10000);\n        countyData[\"income_10000_to_14999\"].push(data[i].Income_10000_to_14999);\n        countyData[\"income_15000_to_19999\"].push(data[i].Income_15000_to_19999);\n        countyData[\"income_20000_to_24999\"].push(data[i].Income_20000_to_24999);\n        countyData[\"income_25000_to_29999\"].push(data[i].Income_25000_to_29999);\n        countyData[\"income_30000_to_34999\"].push(data[i].Income_30000_to_34999);\n        countyData[\"income_35000_to_39999\"].push(data[i].Income_35000_to_39999);\n        countyData[\"income_40000_to_44999\"].push(data[i].Income_40000_to_44999);\n        countyData[\"income_45000_to_49999\"].push(data[i].Income_45000_to_49999);\n        countyData[\"income_50000_to_54999\"].push(data[i].Income_50000_to_54999);\n        countyData[\"income_55000_to_59999\"].push(data[i].Income_55000_to_59999);\n        countyData[\"income_60000_to_74999\"].push(data[i].Income_60000_to_74999);\n        countyData[\"income_75000_to_99999\"].push(data[i].Income_75000_to_99999);\n        countyData[\"income_100000_to_124999\"].push(data[i].Income_100000_to_124999);\n        countyData[\"income_125000_to_149999\"].push(data[i].Income_125000_to_149999);\n        countyData[\"income_150000_to_199999\"].push(data[i].Income_150000_to_199999);\n        countyData[\"income_200000_or_more\"].push(data[i].Income_200000_or_more);\n    }\n    console.log(countyData);\n    /*\n  var county = ['Adams', 'Asotin', 'Benton', 'Chelan', 'Clallam', 'Clark', 'Columbia', 'Cowlitz', 'Douglas', 'Ferry',\n                'Franklin', 'Garfield', 'Grant', 'Grays Harbor', 'Island', 'Jefferson', 'King', 'Kitsap', 'Kittitas', 'Klickitat', 'Lewis',\n                'Lincoln', 'Mason', 'Okanogan', 'Pacific', 'Pend Oreille', 'Pierce', 'San Juan', 'Skagit', 'Skamania', 'Snohomish', 'Spokane','Stevens',\n                'Thurston', 'Wahkiakum', 'Walla Walla', 'Whatcom', 'Whitman', 'Yakima', 'Unassigned', 'Western Washington', 'Unassigned Region', 'Better Health Together', 'Elevate Health',\n                'Greater Columbia', 'Healthier Here', 'North Sound', 'Olympic Community of Health', 'Southwest Washington',\n                'Cascade Pacific Action Alliance', 'North Central','Unassigned ACH'\n                ]*/ // Conditionally render an error message if an error occurs\n    if (errorMessage) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: errorMessage\n        }, void 0, false, {\n            fileName: \"/Users/jangwonyun/Desktop/Research_AdiosCovid_NJS_App/components/Income_viz.js\",\n            lineNumber: 62,\n            columnNumber: 12\n        }, this);\n    }\n    const [initialData, setInitialData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        county: \"Adams\",\n        income_less_10000: [\n            166\n        ],\n        income_10000_to_14999: [\n            256\n        ]\n    });\n    const handleGraph = (event)=>{\n        countryData.forEach((each)=>{\n            if (each.County === event.currentTarget.id) {\n                setInitialData({\n                    county: each.County,\n                    income_less_10000: each.Income_less_10000,\n                    income_10000_to_14999: each.Income_10000_to_14999\n                });\n            }\n        });\n    };\n    const income_viz = {\n        labels: initialData.county.split(\",\"),\n        datasets: [\n            {\n                label: \"Income Less than 10,000\",\n                data: initialData.income_less_10000,\n                backgroundColor: [\n                    \"rgba(255, 99, 132, 0.2)\"\n                ],\n                borderColor: [\n                    \"rgba(255, 99, 132, 1)\"\n                ],\n                borderWidth: 1\n            },\n            {\n                label: \"Income Between 10,000-14,999\",\n                data: initialData.income_10000_to_14999,\n                backgroundColor: [\n                    \"rgba(54, 162, 235, 0.2)\"\n                ],\n                borderColor: [\n                    \"rgba(54, 162, 235, 1)\"\n                ],\n                borderWidth: 1\n            }\n        ]\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: \"Income of Latino Population\"\n            }, void 0, false, {\n                fileName: \"/Users/jangwonyun/Desktop/Research_AdiosCovid_NJS_App/components/Income_viz.js\",\n                lineNumber: 120,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"btn btn m-1 btn-primary\",\n                id: \"Adams\",\n                onClick: handleGraph,\n                children: \"Adams\"\n            }, void 0, false, {\n                fileName: \"/Users/jangwonyun/Desktop/Research_AdiosCovid_NJS_App/components/Income_viz.js\",\n                lineNumber: 121,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"btn btn m-1 btn-primary\",\n                id: \"Asotin\",\n                onClick: handleGraph,\n                children: \"Asotin\"\n            }, void 0, false, {\n                fileName: \"/Users/jangwonyun/Desktop/Research_AdiosCovid_NJS_App/components/Income_viz.js\",\n                lineNumber: 122,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"btn btn m-1 btn-primary\",\n                id: \"Benton\",\n                onClick: handleGraph,\n                children: \"Benton\"\n            }, void 0, false, {\n                fileName: \"/Users/jangwonyun/Desktop/Research_AdiosCovid_NJS_App/components/Income_viz.js\",\n                lineNumber: 123,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__.Doughnut, {\n                data: income_viz\n            }, void 0, false, {\n                fileName: \"/Users/jangwonyun/Desktop/Research_AdiosCovid_NJS_App/components/Income_viz.js\",\n                lineNumber: 126,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jangwonyun/Desktop/Research_AdiosCovid_NJS_App/components/Income_viz.js\",\n        lineNumber: 119,\n        columnNumber: 5\n    }, this);\n}\n_s(IncomeVisualization, \"IZMlxB7v8O99upVUeGJodzTAxMA=\");\n_c = IncomeVisualization;\n/*<Dropdown>\n            <Dropdown.Button flat>County</Dropdown.Button>\n            <Dropdown.Menu aria-label=\"Static Actions\">\n                <Dropdown.Item key=\"Adams\" onClick={handleBarGraph}>Adams</Dropdown.Item>\n                <Dropdown.Item key=\"Asotin\" onClick={handleBarGraph}>Asotin</Dropdown.Item>\n                <Dropdown.Item key=\"Benton\" onClick={handleBarGraph}>Benton</Dropdown.Item>\n            </Dropdown.Menu>\n        </Dropdown> */ /* harmony default export */ __webpack_exports__[\"default\"] = (IncomeVisualization);\nvar _c;\n$RefreshReg$(_c, \"IncomeVisualization\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0luY29tZV92aXouanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQW1EO0FBQ3NCO0FBQzVCO0FBQ0Y7QUFFM0NJLG9EQUFnQixDQUFDQyxnREFBVUEsRUFBRUMsNkNBQU9BLEVBQUVDLDRDQUFNQTtBQUc1QyxTQUFTSSxzQkFBc0I7O0lBQzdCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHWiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ25DLGdDQUFnQztJQUNoQyxNQUFNLENBQUNhLGNBQWNDLGdCQUFnQixHQUFHZCwrQ0FBUUEsQ0FBQztJQUVqREMsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLGVBQWVjLFlBQVk7WUFDekIsSUFBSTtnQkFDRixNQUFNQyxXQUFXLE1BQU1DLE1BQU07Z0JBQzdCLE1BQU1DLE9BQU8sTUFBTUYsU0FBU0UsSUFBSTtnQkFDaENOLFFBQVFNLEtBQUtQLElBQUk7WUFDbkIsRUFBRSxPQUFPUSxPQUFPO2dCQUNkTCxnQkFBZ0I7WUFDbEI7UUFDRjtRQUNBQztJQUNGLEdBQUcsRUFBRTtJQUNMLElBQUlLLGFBQWE7UUFBQyxVQUFTLEVBQUU7UUFBRSxxQkFBb0IsRUFBRTtRQUFFLHlCQUF3QixFQUFFO1FBQUUseUJBQXdCLEVBQUU7UUFBRSx5QkFBd0IsRUFBRTtRQUFFLHlCQUF3QixFQUFFO1FBQ25KLHlCQUF3QixFQUFFO1FBQUUseUJBQXdCLEVBQUU7UUFBRSx5QkFBd0IsRUFBRTtRQUFFLHlCQUF3QixFQUFFO1FBQUUseUJBQXdCLEVBQUU7UUFDOUkseUJBQXlCLEVBQUU7UUFBRSx5QkFBd0IsRUFBRTtRQUFFLHlCQUF3QixFQUFFO1FBQUUsMkJBQTBCLEVBQUU7UUFBRSwyQkFBMEIsRUFBRTtRQUNuSiwyQkFBMEIsRUFBRTtRQUFFLHlCQUF3QixFQUFFO0lBQUE7SUFFbEUsSUFBSyxJQUFJQyxJQUFJLEdBQUdBLElBQUlWLEtBQUtXLE1BQU0sRUFBRUQsSUFBSztRQUNwQ0QsVUFBVSxDQUFDLFNBQVMsQ0FBQ0csSUFBSSxDQUFDWixJQUFJLENBQUNVLEVBQUUsQ0FBQ0csTUFBTTtRQUN4Q0osVUFBVSxDQUFDLG9CQUFvQixDQUFDRyxJQUFJLENBQUNaLElBQUksQ0FBQ1UsRUFBRSxDQUFDSSxpQkFBaUI7UUFDOURMLFVBQVUsQ0FBQyx3QkFBd0IsQ0FBQ0csSUFBSSxDQUFDWixJQUFJLENBQUNVLEVBQUUsQ0FBQ0sscUJBQXFCO1FBQ3RFTixVQUFVLENBQUMsd0JBQXdCLENBQUNHLElBQUksQ0FBQ1osSUFBSSxDQUFDVSxFQUFFLENBQUNNLHFCQUFxQjtRQUN0RVAsVUFBVSxDQUFDLHdCQUF3QixDQUFDRyxJQUFJLENBQUNaLElBQUksQ0FBQ1UsRUFBRSxDQUFDTyxxQkFBcUI7UUFDdEVSLFVBQVUsQ0FBQyx3QkFBd0IsQ0FBQ0csSUFBSSxDQUFDWixJQUFJLENBQUNVLEVBQUUsQ0FBQ1EscUJBQXFCO1FBQ3RFVCxVQUFVLENBQUMsd0JBQXdCLENBQUNHLElBQUksQ0FBQ1osSUFBSSxDQUFDVSxFQUFFLENBQUNTLHFCQUFxQjtRQUN0RVYsVUFBVSxDQUFDLHdCQUF3QixDQUFDRyxJQUFJLENBQUNaLElBQUksQ0FBQ1UsRUFBRSxDQUFDVSxxQkFBcUI7UUFDdEVYLFVBQVUsQ0FBQyx3QkFBd0IsQ0FBQ0csSUFBSSxDQUFDWixJQUFJLENBQUNVLEVBQUUsQ0FBQ1cscUJBQXFCO1FBQ3RFWixVQUFVLENBQUMsd0JBQXdCLENBQUNHLElBQUksQ0FBQ1osSUFBSSxDQUFDVSxFQUFFLENBQUNZLHFCQUFxQjtRQUN0RWIsVUFBVSxDQUFDLHdCQUF3QixDQUFDRyxJQUFJLENBQUNaLElBQUksQ0FBQ1UsRUFBRSxDQUFDYSxxQkFBcUI7UUFDdEVkLFVBQVUsQ0FBQyx3QkFBd0IsQ0FBQ0csSUFBSSxDQUFDWixJQUFJLENBQUNVLEVBQUUsQ0FBQ2MscUJBQXFCO1FBQ3RFZixVQUFVLENBQUMsd0JBQXdCLENBQUNHLElBQUksQ0FBQ1osSUFBSSxDQUFDVSxFQUFFLENBQUNlLHFCQUFxQjtRQUN0RWhCLFVBQVUsQ0FBQyx3QkFBd0IsQ0FBQ0csSUFBSSxDQUFDWixJQUFJLENBQUNVLEVBQUUsQ0FBQ2dCLHFCQUFxQjtRQUN0RWpCLFVBQVUsQ0FBQywwQkFBMEIsQ0FBQ0csSUFBSSxDQUFDWixJQUFJLENBQUNVLEVBQUUsQ0FBQ2lCLHVCQUF1QjtRQUMxRWxCLFVBQVUsQ0FBQywwQkFBMEIsQ0FBQ0csSUFBSSxDQUFDWixJQUFJLENBQUNVLEVBQUUsQ0FBQ2tCLHVCQUF1QjtRQUMxRW5CLFVBQVUsQ0FBQywwQkFBMEIsQ0FBQ0csSUFBSSxDQUFDWixJQUFJLENBQUNVLEVBQUUsQ0FBQ21CLHVCQUF1QjtRQUMxRXBCLFVBQVUsQ0FBQyx3QkFBd0IsQ0FBQ0csSUFBSSxDQUFDWixJQUFJLENBQUNVLEVBQUUsQ0FBQ29CLHFCQUFxQjtJQUN4RTtJQUNBQyxRQUFRQyxHQUFHLENBQUN2QjtJQUNaOzs7Ozs7O2lCQU9lLEdBQ2YsMkRBQTJEO0lBQzNELElBQUlQLGNBQWM7UUFDaEIscUJBQU8sOERBQUMrQjtzQkFBSy9COzs7Ozs7SUFDZixDQUFDO0lBQ0MsTUFBTSxDQUFDZ0MsYUFBYUMsZUFBZSxHQUFHOUMsK0NBQVFBLENBQUM7UUFBQytDLFFBQU87UUFBU0MsbUJBQWtCO1lBQUM7U0FBSTtRQUFFQyx1QkFBc0I7WUFBQztTQUFJO0lBQUE7SUFDdEgsTUFBTUMsY0FBYyxDQUFDQyxRQUFVO1FBQzNCQyxZQUFZQyxPQUFPLENBQUNDLENBQUFBLE9BQU07WUFDdEIsSUFBR0EsS0FBSzlCLE1BQU0sS0FBSzJCLE1BQU1JLGFBQWEsQ0FBQ0MsRUFBRSxFQUFDO2dCQUN0Q1YsZUFBZTtvQkFBQ0MsUUFBUU8sS0FBSzlCLE1BQU07b0JBQUV3QixtQkFBa0JNLEtBQUs3QixpQkFBaUI7b0JBQUV3Qix1QkFBc0JLLEtBQUs1QixxQkFBcUI7Z0JBQUE7WUFDbkksQ0FBQztRQUNMO0lBQ0o7SUFDQSxNQUFNK0IsYUFBYTtRQUNqQkMsUUFBUWIsWUFBWUUsTUFBTSxDQUFDWSxLQUFLLENBQUM7UUFDakNDLFVBQVU7WUFDTjtnQkFDQUMsT0FBTztnQkFDUGxELE1BQU1rQyxZQUFZRyxpQkFBaUI7Z0JBQ25DYyxpQkFBaUI7b0JBQ2Y7aUJBTUQ7Z0JBQ0RDLGFBQWE7b0JBQ1g7aUJBTUQ7Z0JBQ0RDLGFBQWE7WUFDYjtZQUNBO2dCQUNJSCxPQUFPO2dCQUNQbEQsTUFBTWtDLFlBQVlJLHFCQUFxQjtnQkFDdkNhLGlCQUFpQjtvQkFDZjtpQkFLRDtnQkFDREMsYUFBYTtvQkFDWDtpQkFLRDtnQkFDREMsYUFBYTtZQUNqQjtTQUNIO0lBQ0g7SUFDQSxxQkFFRSw4REFBQ3BCOzswQkFDRyw4REFBQ3FCOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNDO2dCQUFPQyxXQUFVO2dCQUEwQlgsSUFBRztnQkFBUVksU0FBU2xCOzBCQUFhOzs7Ozs7MEJBQzdFLDhEQUFDZ0I7Z0JBQU9DLFdBQVU7Z0JBQTBCWCxJQUFHO2dCQUFTWSxTQUFTbEI7MEJBQWE7Ozs7OzswQkFDOUUsOERBQUNnQjtnQkFBT0MsV0FBVTtnQkFBMEJYLElBQUc7Z0JBQVNZLFNBQVNsQjswQkFBYTs7Ozs7OzBCQUc5RSw4REFBQzFDLHFEQUFRQTtnQkFBQ0csTUFBTThDOzs7Ozs7Ozs7Ozs7QUFHeEI7R0F4SFMvQztLQUFBQTtBQXlIVDs7Ozs7OztvQkFPb0IsR0FDcEIsK0RBQWVBLG1CQUFtQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0luY29tZV92aXouanM/MmIxNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZWFjdCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENoYXJ0IGFzIENoYXJ0SlMsIEFyY0VsZW1lbnQsIFRvb2x0aXAsIExlZ2VuZCB9IGZyb20gJ2NoYXJ0LmpzJztcbmltcG9ydCB7IERyb3Bkb3duIH0gZnJvbSBcIkBuZXh0dWktb3JnL3JlYWN0XCI7XG5pbXBvcnQgeyBEb3VnaG51dCB9IGZyb20gJ3JlYWN0LWNoYXJ0anMtMic7XG5cbkNoYXJ0SlMucmVnaXN0ZXIoQXJjRWxlbWVudCwgVG9vbHRpcCwgTGVnZW5kKTtcblxuXG5mdW5jdGlvbiBJbmNvbWVWaXN1YWxpemF0aW9uKCkge1xuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShbXSk7XG4gIC8vIEFkZCBzdGF0ZSBmb3IgaGFuZGxpbmcgZXJyb3JzXG4gIGNvbnN0IFtlcnJvck1lc3NhZ2UsIHNldEVycm9yTWVzc2FnZV0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhc3luYyBmdW5jdGlvbiBmZXRjaERhdGEoKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL3JwcndhZTUzdzIuZXhlY3V0ZS1hcGkudXMtd2VzdC0yLmFtYXpvbmF3cy5jb20vdi0xL2xhdGluby1pbmNvbWUnKTtcbiAgICAgICAgY29uc3QganNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgc2V0RGF0YShqc29uLmRhdGEpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgc2V0RXJyb3JNZXNzYWdlKCdFcnJvciBmZXRjaGluZyBkYXRhJyk7XG4gICAgICB9XG4gICAgfVxuICAgIGZldGNoRGF0YSgpO1xuICB9LCBbXSk7XG4gIHZhciBjb3VudHlEYXRhID0ge1wiY291bnR5XCI6W10sIFwiaW5jb21lX2xlc3NfMTAwMDBcIjpbXSwgXCJpbmNvbWVfMTAwMDBfdG9fMTQ5OTlcIjpbXSwgXCJpbmNvbWVfMTUwMDBfdG9fMTk5OTlcIjpbXSwgXCJpbmNvbWVfMjAwMDBfdG9fMjQ5OTlcIjpbXSwgXCJpbmNvbWVfMjUwMDBfdG9fMjk5OTlcIjpbXSxcbiAgICAgICAgICAgICAgICAgICAgXCJpbmNvbWVfMzAwMDBfdG9fMzQ5OTlcIjpbXSwgXCJpbmNvbWVfMzUwMDBfdG9fMzk5OTlcIjpbXSwgXCJpbmNvbWVfNDAwMDBfdG9fNDQ5OTlcIjpbXSwgXCJpbmNvbWVfNDUwMDBfdG9fNDk5OTlcIjpbXSwgXCJpbmNvbWVfNTAwMDBfdG9fNTQ5OTlcIjpbXSxcbiAgICAgICAgICAgICAgICBcImluY29tZV81NTAwMF90b181OTk5OVwiOiBbXSwgXCJpbmNvbWVfNjAwMDBfdG9fNzQ5OTlcIjpbXSwgXCJpbmNvbWVfNzUwMDBfdG9fOTk5OTlcIjpbXSwgXCJpbmNvbWVfMTAwMDAwX3RvXzEyNDk5OVwiOltdLCBcImluY29tZV8xMjUwMDBfdG9fMTQ5OTk5XCI6W10sXG4gICAgICAgICAgICBcImluY29tZV8xNTAwMDBfdG9fMTk5OTk5XCI6W10sIFwiaW5jb21lXzIwMDAwMF9vcl9tb3JlXCI6W119O1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgIGNvdW50eURhdGFbXCJjb3VudHlcIl0ucHVzaChkYXRhW2ldLkNvdW50eSk7XG4gICAgY291bnR5RGF0YVtcImluY29tZV9sZXNzXzEwMDAwXCJdLnB1c2goZGF0YVtpXS5JbmNvbWVfbGVzc18xMDAwMCk7XG4gICAgY291bnR5RGF0YVtcImluY29tZV8xMDAwMF90b18xNDk5OVwiXS5wdXNoKGRhdGFbaV0uSW5jb21lXzEwMDAwX3RvXzE0OTk5KTtcbiAgICBjb3VudHlEYXRhW1wiaW5jb21lXzE1MDAwX3RvXzE5OTk5XCJdLnB1c2goZGF0YVtpXS5JbmNvbWVfMTUwMDBfdG9fMTk5OTkpO1xuICAgIGNvdW50eURhdGFbXCJpbmNvbWVfMjAwMDBfdG9fMjQ5OTlcIl0ucHVzaChkYXRhW2ldLkluY29tZV8yMDAwMF90b18yNDk5OSk7XG4gICAgY291bnR5RGF0YVtcImluY29tZV8yNTAwMF90b18yOTk5OVwiXS5wdXNoKGRhdGFbaV0uSW5jb21lXzI1MDAwX3RvXzI5OTk5KTtcbiAgICBjb3VudHlEYXRhW1wiaW5jb21lXzMwMDAwX3RvXzM0OTk5XCJdLnB1c2goZGF0YVtpXS5JbmNvbWVfMzAwMDBfdG9fMzQ5OTkpO1xuICAgIGNvdW50eURhdGFbXCJpbmNvbWVfMzUwMDBfdG9fMzk5OTlcIl0ucHVzaChkYXRhW2ldLkluY29tZV8zNTAwMF90b18zOTk5OSk7XG4gICAgY291bnR5RGF0YVtcImluY29tZV80MDAwMF90b180NDk5OVwiXS5wdXNoKGRhdGFbaV0uSW5jb21lXzQwMDAwX3RvXzQ0OTk5KTtcbiAgICBjb3VudHlEYXRhW1wiaW5jb21lXzQ1MDAwX3RvXzQ5OTk5XCJdLnB1c2goZGF0YVtpXS5JbmNvbWVfNDUwMDBfdG9fNDk5OTkpO1xuICAgIGNvdW50eURhdGFbXCJpbmNvbWVfNTAwMDBfdG9fNTQ5OTlcIl0ucHVzaChkYXRhW2ldLkluY29tZV81MDAwMF90b181NDk5OSk7XG4gICAgY291bnR5RGF0YVtcImluY29tZV81NTAwMF90b181OTk5OVwiXS5wdXNoKGRhdGFbaV0uSW5jb21lXzU1MDAwX3RvXzU5OTk5KTtcbiAgICBjb3VudHlEYXRhW1wiaW5jb21lXzYwMDAwX3RvXzc0OTk5XCJdLnB1c2goZGF0YVtpXS5JbmNvbWVfNjAwMDBfdG9fNzQ5OTkpO1xuICAgIGNvdW50eURhdGFbXCJpbmNvbWVfNzUwMDBfdG9fOTk5OTlcIl0ucHVzaChkYXRhW2ldLkluY29tZV83NTAwMF90b185OTk5OSk7XG4gICAgY291bnR5RGF0YVtcImluY29tZV8xMDAwMDBfdG9fMTI0OTk5XCJdLnB1c2goZGF0YVtpXS5JbmNvbWVfMTAwMDAwX3RvXzEyNDk5OSk7XG4gICAgY291bnR5RGF0YVtcImluY29tZV8xMjUwMDBfdG9fMTQ5OTk5XCJdLnB1c2goZGF0YVtpXS5JbmNvbWVfMTI1MDAwX3RvXzE0OTk5OSk7XG4gICAgY291bnR5RGF0YVtcImluY29tZV8xNTAwMDBfdG9fMTk5OTk5XCJdLnB1c2goZGF0YVtpXS5JbmNvbWVfMTUwMDAwX3RvXzE5OTk5OSk7XG4gICAgY291bnR5RGF0YVtcImluY29tZV8yMDAwMDBfb3JfbW9yZVwiXS5wdXNoKGRhdGFbaV0uSW5jb21lXzIwMDAwMF9vcl9tb3JlKTtcbiAgfVxuICBjb25zb2xlLmxvZyhjb3VudHlEYXRhKTtcbiAgLypcbiAgdmFyIGNvdW50eSA9IFsnQWRhbXMnLCAnQXNvdGluJywgJ0JlbnRvbicsICdDaGVsYW4nLCAnQ2xhbGxhbScsICdDbGFyaycsICdDb2x1bWJpYScsICdDb3dsaXR6JywgJ0RvdWdsYXMnLCAnRmVycnknLFxuICAgICAgICAgICAgICAgICdGcmFua2xpbicsICdHYXJmaWVsZCcsICdHcmFudCcsICdHcmF5cyBIYXJib3InLCAnSXNsYW5kJywgJ0plZmZlcnNvbicsICdLaW5nJywgJ0tpdHNhcCcsICdLaXR0aXRhcycsICdLbGlja2l0YXQnLCAnTGV3aXMnLFxuICAgICAgICAgICAgICAgICdMaW5jb2xuJywgJ01hc29uJywgJ09rYW5vZ2FuJywgJ1BhY2lmaWMnLCAnUGVuZCBPcmVpbGxlJywgJ1BpZXJjZScsICdTYW4gSnVhbicsICdTa2FnaXQnLCAnU2thbWFuaWEnLCAnU25vaG9taXNoJywgJ1Nwb2thbmUnLCdTdGV2ZW5zJyxcbiAgICAgICAgICAgICAgICAnVGh1cnN0b24nLCAnV2Foa2lha3VtJywgJ1dhbGxhIFdhbGxhJywgJ1doYXRjb20nLCAnV2hpdG1hbicsICdZYWtpbWEnLCAnVW5hc3NpZ25lZCcsICdXZXN0ZXJuIFdhc2hpbmd0b24nLCAnVW5hc3NpZ25lZCBSZWdpb24nLCAnQmV0dGVyIEhlYWx0aCBUb2dldGhlcicsICdFbGV2YXRlIEhlYWx0aCcsXG4gICAgICAgICAgICAgICAgJ0dyZWF0ZXIgQ29sdW1iaWEnLCAnSGVhbHRoaWVyIEhlcmUnLCAnTm9ydGggU291bmQnLCAnT2x5bXBpYyBDb21tdW5pdHkgb2YgSGVhbHRoJywgJ1NvdXRod2VzdCBXYXNoaW5ndG9uJyxcbiAgICAgICAgICAgICAgICAnQ2FzY2FkZSBQYWNpZmljIEFjdGlvbiBBbGxpYW5jZScsICdOb3J0aCBDZW50cmFsJywnVW5hc3NpZ25lZCBBQ0gnXG4gICAgICAgICAgICAgICAgXSovXG4gIC8vIENvbmRpdGlvbmFsbHkgcmVuZGVyIGFuIGVycm9yIG1lc3NhZ2UgaWYgYW4gZXJyb3Igb2NjdXJzXG4gIGlmIChlcnJvck1lc3NhZ2UpIHtcbiAgICByZXR1cm4gPGRpdj57ZXJyb3JNZXNzYWdlfTwvZGl2PjtcbiAgfVxuICAgIGNvbnN0IFtpbml0aWFsRGF0YSwgc2V0SW5pdGlhbERhdGFdID0gdXNlU3RhdGUoe2NvdW50eTpcIkFkYW1zXCIsIGluY29tZV9sZXNzXzEwMDAwOlsxNjZdLCBpbmNvbWVfMTAwMDBfdG9fMTQ5OTk6WzI1Nl19KTtcbiAgY29uc3QgaGFuZGxlR3JhcGggPSAoZXZlbnQpID0+IHtcbiAgICAgIGNvdW50cnlEYXRhLmZvckVhY2goZWFjaD0+e1xuICAgICAgICAgIGlmKGVhY2guQ291bnR5ID09PSBldmVudC5jdXJyZW50VGFyZ2V0LmlkKXtcbiAgICAgICAgICAgICAgc2V0SW5pdGlhbERhdGEoe2NvdW50eTogZWFjaC5Db3VudHksIGluY29tZV9sZXNzXzEwMDAwOmVhY2guSW5jb21lX2xlc3NfMTAwMDAsIGluY29tZV8xMDAwMF90b18xNDk5OTplYWNoLkluY29tZV8xMDAwMF90b18xNDk5OX0pXG4gICAgICAgICAgfVxuICAgICAgfSlcbiAgfVxuICBjb25zdCBpbmNvbWVfdml6ID0ge1xuICAgIGxhYmVsczogaW5pdGlhbERhdGEuY291bnR5LnNwbGl0KCcsJyksXG4gICAgZGF0YXNldHM6IFtcbiAgICAgICAge1xuICAgICAgICBsYWJlbDogJ0luY29tZSBMZXNzIHRoYW4gMTAsMDAwJyxcbiAgICAgICAgZGF0YTogaW5pdGlhbERhdGEuaW5jb21lX2xlc3NfMTAwMDAsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogW1xuICAgICAgICAgICdyZ2JhKDI1NSwgOTksIDEzMiwgMC4yKSdcbiAgICAgICAgICAvKidyZ2JhKDU0LCAxNjIsIDIzNSwgMC4yKScsXG4gICAgICAgICAgJ3JnYmEoMjU1LCAyMDYsIDg2LCAwLjIpJyxcbiAgICAgICAgICAncmdiYSg3NSwgMTkyLCAxOTIsIDAuMiknLFxuICAgICAgICAgICdyZ2JhKDE1MywgMTAyLCAyNTUsIDAuMiknLFxuICAgICAgICAgICdyZ2JhKDI1NSwgMTU5LCA2NCwgMC4yKScsKi9cbiAgICAgICAgXSxcbiAgICAgICAgYm9yZGVyQ29sb3I6IFtcbiAgICAgICAgICAncmdiYSgyNTUsIDk5LCAxMzIsIDEpJ1xuICAgICAgICAgIC8qJ3JnYmEoNTQsIDE2MiwgMjM1LCAxKScsXG4gICAgICAgICAgJ3JnYmEoMjU1LCAyMDYsIDg2LCAxKScsXG4gICAgICAgICAgJ3JnYmEoNzUsIDE5MiwgMTkyLCAxKScsXG4gICAgICAgICAgJ3JnYmEoMTUzLCAxMDIsIDI1NSwgMSknLFxuICAgICAgICAgICdyZ2JhKDI1NSwgMTU5LCA2NCwgMSknLCovXG4gICAgICAgIF0sXG4gICAgICAgIGJvcmRlcldpZHRoOiAxLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogJ0luY29tZSBCZXR3ZWVuIDEwLDAwMC0xNCw5OTknLFxuICAgICAgICAgICAgZGF0YTogaW5pdGlhbERhdGEuaW5jb21lXzEwMDAwX3RvXzE0OTk5LFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBbXG4gICAgICAgICAgICAgICdyZ2JhKDU0LCAxNjIsIDIzNSwgMC4yKSdcbiAgICAgICAgICAgICAgLyoncmdiYSgyNTUsIDIwNiwgODYsIDAuMiknLFxuICAgICAgICAgICAgICAncmdiYSg3NSwgMTkyLCAxOTIsIDAuMiknLFxuICAgICAgICAgICAgICAncmdiYSgxNTMsIDEwMiwgMjU1LCAwLjIpJyxcbiAgICAgICAgICAgICAgJ3JnYmEoMjU1LCAxNTksIDY0LCAwLjIpJywqL1xuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiBbXG4gICAgICAgICAgICAgICdyZ2JhKDU0LCAxNjIsIDIzNSwgMSknXG4gICAgICAgICAgICAgIC8qJ3JnYmEoMjU1LCAyMDYsIDg2LCAxKScsXG4gICAgICAgICAgICAgICdyZ2JhKDc1LCAxOTIsIDE5MiwgMSknLFxuICAgICAgICAgICAgICAncmdiYSgxNTMsIDEwMiwgMjU1LCAxKScsXG4gICAgICAgICAgICAgICdyZ2JhKDI1NSwgMTU5LCA2NCwgMSknLCovXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDEsXG4gICAgICAgIH1cbiAgICBdLFxuICB9O1xuICByZXR1cm4gKFxuICAgIFxuICAgIDxkaXY+XG4gICAgICAgIDxoMz5JbmNvbWUgb2YgTGF0aW5vIFBvcHVsYXRpb248L2gzPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4gbS0xIGJ0bi1wcmltYXJ5XCIgaWQ9J0FkYW1zJyBvbkNsaWNrPXtoYW5kbGVHcmFwaH0+QWRhbXM8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuIG0tMSBidG4tcHJpbWFyeVwiIGlkPSdBc290aW4nIG9uQ2xpY2s9e2hhbmRsZUdyYXBofT5Bc290aW48L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuIG0tMSBidG4tcHJpbWFyeVwiIGlkPSdCZW50b24nIG9uQ2xpY2s9e2hhbmRsZUdyYXBofT5CZW50b248L2J1dHRvbj5cbiAgICAgICAgXG5cbiAgICAgICAgPERvdWdobnV0IGRhdGE9e2luY29tZV92aXp9Lz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbi8qPERyb3Bkb3duPlxuICAgICAgICAgICAgPERyb3Bkb3duLkJ1dHRvbiBmbGF0PkNvdW50eTwvRHJvcGRvd24uQnV0dG9uPlxuICAgICAgICAgICAgPERyb3Bkb3duLk1lbnUgYXJpYS1sYWJlbD1cIlN0YXRpYyBBY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0ga2V5PVwiQWRhbXNcIiBvbkNsaWNrPXtoYW5kbGVCYXJHcmFwaH0+QWRhbXM8L0Ryb3Bkb3duLkl0ZW0+XG4gICAgICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0ga2V5PVwiQXNvdGluXCIgb25DbGljaz17aGFuZGxlQmFyR3JhcGh9PkFzb3RpbjwvRHJvcGRvd24uSXRlbT5cbiAgICAgICAgICAgICAgICA8RHJvcGRvd24uSXRlbSBrZXk9XCJCZW50b25cIiBvbkNsaWNrPXtoYW5kbGVCYXJHcmFwaH0+QmVudG9uPC9Ecm9wZG93bi5JdGVtPlxuICAgICAgICAgICAgPC9Ecm9wZG93bi5NZW51PlxuICAgICAgICA8L0Ryb3Bkb3duPiAqL1xuZXhwb3J0IGRlZmF1bHQgSW5jb21lVmlzdWFsaXphdGlvbjsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkNoYXJ0IiwiQ2hhcnRKUyIsIkFyY0VsZW1lbnQiLCJUb29sdGlwIiwiTGVnZW5kIiwiRHJvcGRvd24iLCJEb3VnaG51dCIsInJlZ2lzdGVyIiwiSW5jb21lVmlzdWFsaXphdGlvbiIsImRhdGEiLCJzZXREYXRhIiwiZXJyb3JNZXNzYWdlIiwic2V0RXJyb3JNZXNzYWdlIiwiZmV0Y2hEYXRhIiwicmVzcG9uc2UiLCJmZXRjaCIsImpzb24iLCJlcnJvciIsImNvdW50eURhdGEiLCJpIiwibGVuZ3RoIiwicHVzaCIsIkNvdW50eSIsIkluY29tZV9sZXNzXzEwMDAwIiwiSW5jb21lXzEwMDAwX3RvXzE0OTk5IiwiSW5jb21lXzE1MDAwX3RvXzE5OTk5IiwiSW5jb21lXzIwMDAwX3RvXzI0OTk5IiwiSW5jb21lXzI1MDAwX3RvXzI5OTk5IiwiSW5jb21lXzMwMDAwX3RvXzM0OTk5IiwiSW5jb21lXzM1MDAwX3RvXzM5OTk5IiwiSW5jb21lXzQwMDAwX3RvXzQ0OTk5IiwiSW5jb21lXzQ1MDAwX3RvXzQ5OTk5IiwiSW5jb21lXzUwMDAwX3RvXzU0OTk5IiwiSW5jb21lXzU1MDAwX3RvXzU5OTk5IiwiSW5jb21lXzYwMDAwX3RvXzc0OTk5IiwiSW5jb21lXzc1MDAwX3RvXzk5OTk5IiwiSW5jb21lXzEwMDAwMF90b18xMjQ5OTkiLCJJbmNvbWVfMTI1MDAwX3RvXzE0OTk5OSIsIkluY29tZV8xNTAwMDBfdG9fMTk5OTk5IiwiSW5jb21lXzIwMDAwMF9vcl9tb3JlIiwiY29uc29sZSIsImxvZyIsImRpdiIsImluaXRpYWxEYXRhIiwic2V0SW5pdGlhbERhdGEiLCJjb3VudHkiLCJpbmNvbWVfbGVzc18xMDAwMCIsImluY29tZV8xMDAwMF90b18xNDk5OSIsImhhbmRsZUdyYXBoIiwiZXZlbnQiLCJjb3VudHJ5RGF0YSIsImZvckVhY2giLCJlYWNoIiwiY3VycmVudFRhcmdldCIsImlkIiwiaW5jb21lX3ZpeiIsImxhYmVscyIsInNwbGl0IiwiZGF0YXNldHMiLCJsYWJlbCIsImJhY2tncm91bmRDb2xvciIsImJvcmRlckNvbG9yIiwiYm9yZGVyV2lkdGgiLCJoMyIsImJ1dHRvbiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Income_viz.js\n"));

/***/ })

});