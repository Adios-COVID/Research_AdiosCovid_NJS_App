/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./locales lazy recursive ^\\.\\/.*\\/.*$":
/*!*****************************************************!*\
  !*** ./locales/ lazy ^\.\/.*\/.*$ namespace object ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./en/about": [
		"./locales/en/about.json",
		"locales_en_about_json"
	],
	"./en/about.json": [
		"./locales/en/about.json",
		"locales_en_about_json"
	],
	"./en/common": [
		"./locales/en/common.json",
		"locales_en_common_json"
	],
	"./en/common.json": [
		"./locales/en/common.json",
		"locales_en_common_json"
	],
	"./en/data": [
		"./locales/en/data.json",
		"locales_en_data_json"
	],
	"./en/data.json": [
		"./locales/en/data.json",
		"locales_en_data_json"
	],
	"./en/repo": [
		"./locales/en/repo.json",
		"locales_en_repo_json"
	],
	"./en/repo.json": [
		"./locales/en/repo.json",
		"locales_en_repo_json"
	],
	"./es/about": [
		"./locales/es/about.json",
		"locales_es_about_json"
	],
	"./es/about.json": [
		"./locales/es/about.json",
		"locales_es_about_json"
	],
	"./es/common": [
		"./locales/es/common.json",
		"locales_es_common_json"
	],
	"./es/common.json": [
		"./locales/es/common.json",
		"locales_es_common_json"
	],
	"./es/data": [
		"./locales/es/data.json",
		"locales_es_data_json"
	],
	"./es/data.json": [
		"./locales/es/data.json",
		"locales_es_data_json"
	],
	"./es/repo": [
		"./locales/es/repo.json",
		"locales_es_repo_json"
	],
	"./es/repo.json": [
		"./locales/es/repo.json",
		"locales_es_repo_json"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__.t(id, 3 | 16);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "./locales lazy recursive ^\\.\\/.*\\/.*$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./i18n.js":
/*!*****************!*\
  !*** ./i18n.js ***!
  \*****************/
/***/ ((module) => {

"use strict";
eval("\nmodule.exports = {\n    locales: [\n        \"en\",\n        \"es\"\n    ],\n    defaultLocale: \"en\",\n    pages: {\n        \"/\": [\n            \"common\"\n        ],\n        \"/Data\": [\n            \"common\"\n        ],\n        \"/about\": [\n            \"common\"\n        ],\n        \"/RepoPage\": [\n            \"common\"\n        ],\n        \"/SubmitData\": [\n            \"common\"\n        ],\n        \"/documentation\": [\n            \"common\"\n        ]\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9pMThuLmpzLmpzIiwibWFwcGluZ3MiOiI7QUFBQUEsT0FBT0MsT0FBTyxHQUFHO0lBQ2ZDLFNBQVM7UUFBQztRQUFNO0tBQUs7SUFDckJDLGVBQWU7SUFDZkMsT0FBTztRQUNMLEtBQUs7WUFBQztTQUFTO1FBQ2YsU0FBUztZQUFDO1NBQVM7UUFDbkIsVUFBVTtZQUFDO1NBQVM7UUFDcEIsYUFBWTtZQUFDO1NBQVM7UUFDdEIsZUFBYztZQUFDO1NBQVM7UUFDeEIsa0JBQWlCO1lBQUM7U0FBUztJQUM3QjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzZWFyY2hfYWRpb3Njb3ZpZF9uanNfYXBwLy4vaTE4bi5qcz85MzhiIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0ge1xuICBsb2NhbGVzOiBbXCJlblwiLCBcImVzXCJdLCAvLyBBcnJheSB3aXRoIHRoZSBsYW5ndWFnZXMgdGhhdCB5b3Ugd2FudCB0byB1c2VcbiAgZGVmYXVsdExvY2FsZTogXCJlblwiLCAvLyBEZWZhdWx0IGxhbmd1YWdlIG9mIHlvdXIgd2Vic2l0ZVxuICBwYWdlczoge1xuICAgICcvJzogW1wiY29tbW9uXCJdLCAvLyBOYW1lc3BhY2VzIHRoYXQgeW91IHdhbnQgdG8gaW1wb3J0IHBlciBwYWdlICh3ZSBzdGljayB0byBvbmUgbmFtZXNwYWNlIGZvciBhbGwgdGhlIGFwcGxpY2F0aW9uIGluIHRoaXMgdHV0b3JpYWwpXG4gICAgJy9EYXRhJzogW1wiY29tbW9uXCJdLFxuICAgICcvYWJvdXQnOiBbXCJjb21tb25cIl0sXG4gICAgJy9SZXBvUGFnZSc6W1wiY29tbW9uXCJdLFxuICAgICcvU3VibWl0RGF0YSc6W1wiY29tbW9uXCJdLFxuICAgICcvZG9jdW1lbnRhdGlvbic6Wydjb21tb24nXVxuICB9LFxufTtcblxuICAiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsImxvY2FsZXMiLCJkZWZhdWx0TG9jYWxlIiwicGFnZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./i18n.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _next_translate_root_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @next-translate-root/i18n */ \"./i18n.js\");\n/* harmony import */ var _next_translate_root_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_next_translate_root_i18n__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_translate_appWithI18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-translate/appWithI18n */ \"next-translate/appWithI18n\");\n/* harmony import */ var next_translate_appWithI18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_translate_appWithI18n__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\nfunction App({ Component , pageProps  }) {\n    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{\n        __webpack_require__(/*! bootstrap/dist/js/bootstrap.bundle.min.js */ \"bootstrap/dist/js/bootstrap.bundle.min.js\");\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/frankmartinez/Documents/LastMyle/Code/NextJS/Research_AdiosCovid_NJS_App/pages/_app.js\",\n            lineNumber: 13,\n            columnNumber: 5\n        }, this)\n    }, void 0, false);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_translate_appWithI18n__WEBPACK_IMPORTED_MODULE_2___default()(App, {\n    ...(_next_translate_root_i18n__WEBPACK_IMPORTED_MODULE_1___default()),\n    isLoader: true,\n    skipInitialProps: true,\n    loadLocaleFrom: (l, n)=>__webpack_require__(\"./locales lazy recursive ^\\\\.\\\\/.*\\\\/.*$\")(`./${l}/${n}`).then((m)=>m.default)\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDd0Q7QUFDRTtBQUN2QjtBQUNXO0FBQ2pCO0FBQ0s7QUFDbEMsU0FBU0ksSUFBSSxFQUFFQyxVQUFTLEVBQUVDLFVBQVMsRUFBRSxFQUFFO0lBQ25DSCxnREFBU0EsQ0FBQyxJQUFNO1FBQ1pJLG1CQUFPQSxDQUFDLDRGQUEyQztJQUN2RCxHQUFHLEVBQUU7SUFDTCxxQkFBUTtrQkFDUiw0RUFBQ0Y7WUFBVyxHQUFHQyxTQUFTOzs7Ozs7O0FBRTVCO0FBRUksaUVBQWVMLGlFQUFhQSxDQUFDRyxLQUFLO0lBQ2hDLEdBQUdKLGtFQUFZO0lBQ2ZRLFVBQVUsSUFBSTtJQUNkQyxrQkFBa0IsSUFBSTtJQUN0QkMsZ0JBQWdCLENBQUNDLEdBQUdDLElBQU0sZ0VBQU8sR0FBOEIsRUFBRUQsRUFBRSxDQUFDLEVBQUVDLEVBQUUsQ0FBQyxDQUFDLENBQUNDLElBQUksQ0FBQ0MsQ0FBQUEsSUFBS0EsRUFBRUMsT0FBTztBQUNoRyxFQUFFLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXNlYXJjaF9hZGlvc2NvdmlkX25qc19hcHAvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IF9faTE4bkNvbmZpZyBmcm9tICdAbmV4dC10cmFuc2xhdGUtcm9vdC9pMThuJ1xuICAgIGltcG9ydCBfX2FwcFdpdGhJMThuIGZyb20gJ25leHQtdHJhbnNsYXRlL2FwcFdpdGhJMThuJ1xuICAgIGltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJztcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICByZXF1aXJlKFwiYm9vdHN0cmFwL2Rpc3QvanMvYm9vdHN0cmFwLmJ1bmRsZS5taW4uanNcIik7XG4gICAgfSwgW10pO1xuICAgIHJldHVybiAoPD5cbiAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9Lz5cbiAgIDwvPik7XG59XG5cbiAgICBleHBvcnQgZGVmYXVsdCBfX2FwcFdpdGhJMThuKEFwcCwge1xuICAgICAgLi4uX19pMThuQ29uZmlnLFxuICAgICAgaXNMb2FkZXI6IHRydWUsXG4gICAgICBza2lwSW5pdGlhbFByb3BzOiB0cnVlLFxuICAgICAgbG9hZExvY2FsZUZyb206IChsLCBuKSA9PiBpbXBvcnQoYEBuZXh0LXRyYW5zbGF0ZS1yb290L2xvY2FsZXMvJHtsfS8ke259YCkudGhlbihtID0+IG0uZGVmYXVsdCksXG4gICAgfSk7XG4gICJdLCJuYW1lcyI6WyJfX2kxOG5Db25maWciLCJfX2FwcFdpdGhJMThuIiwiSGVhZCIsInVzZUVmZmVjdCIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInJlcXVpcmUiLCJpc0xvYWRlciIsInNraXBJbml0aWFsUHJvcHMiLCJsb2FkTG9jYWxlRnJvbSIsImwiLCJuIiwidGhlbiIsIm0iLCJkZWZhdWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/***/ (() => {



/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "bootstrap/dist/js/bootstrap.bundle.min.js":
/*!************************************************************!*\
  !*** external "bootstrap/dist/js/bootstrap.bundle.min.js" ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("bootstrap/dist/js/bootstrap.bundle.min.js");

/***/ }),

/***/ "next-translate/appWithI18n":
/*!*********************************************!*\
  !*** external "next-translate/appWithI18n" ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-translate/appWithI18n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();