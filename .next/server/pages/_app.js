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

eval("module.exports = {\n    locales: [\n        \"en\",\n        \"es\"\n    ],\n    defaultLocale: \"en\",\n    pages: {\n        \"/\": [\n            \"common\"\n        ],\n        \"/Data\": [\n            \"common\"\n        ],\n        \"/about\": [\n            \"common\"\n        ],\n        \"/RepoPage\": [\n            \"common\"\n        ]\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXNlYXJjaF9hZGlvc2NvdmlkX25qc19hcHAvLi9pMThuLmpzPzkzOGIiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSB7XG4gIGxvY2FsZXM6IFtcImVuXCIsIFwiZXNcIl0sIC8vIEFycmF5IHdpdGggdGhlIGxhbmd1YWdlcyB0aGF0IHlvdSB3YW50IHRvIHVzZVxuICBkZWZhdWx0TG9jYWxlOiBcImVuXCIsIC8vIERlZmF1bHQgbGFuZ3VhZ2Ugb2YgeW91ciB3ZWJzaXRlXG4gIHBhZ2VzOiB7XG4gICAgJy8nOiBbXCJjb21tb25cIl0sIC8vIE5hbWVzcGFjZXMgdGhhdCB5b3Ugd2FudCB0byBpbXBvcnQgcGVyIHBhZ2UgKHdlIHN0aWNrIHRvIG9uZSBuYW1lc3BhY2UgZm9yIGFsbCB0aGUgYXBwbGljYXRpb24gaW4gdGhpcyB0dXRvcmlhbClcbiAgICAnL0RhdGEnOiBbXCJjb21tb25cIl0sXG4gICAgJy9hYm91dCc6IFtcImNvbW1vblwiXSxcbiAgICAnL1JlcG9QYWdlJzpbXCJjb21tb25cIl1cbiAgICAvLyAnL1Rlc3QnOiBbJ2NvbW1vbiddXG4gIH0sXG59O1xuXG4gICJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwibG9jYWxlcyIsImRlZmF1bHRMb2NhbGUiLCJwYWdlcyJdLCJtYXBwaW5ncyI6IkFBQUFBLE9BQU9DLE9BQU8sR0FBRztJQUNmQyxTQUFTO1FBQUM7UUFBTTtLQUFLO0lBQ3JCQyxlQUFlO0lBQ2ZDLE9BQU87UUFDTCxLQUFLO1lBQUM7U0FBUztRQUNmLFNBQVM7WUFBQztTQUFTO1FBQ25CLFVBQVU7WUFBQztTQUFTO1FBQ3BCLGFBQVk7WUFBQztTQUFTO0lBRXhCO0FBQ0YiLCJmaWxlIjoiLi9pMThuLmpzLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./i18n.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _next_translate_root_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @next-translate-root/i18n */ \"./i18n.js\");\n/* harmony import */ var _next_translate_root_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_next_translate_root_i18n__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_translate_appWithI18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-translate/appWithI18n */ \"next-translate/appWithI18n\");\n/* harmony import */ var next_translate_appWithI18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_translate_appWithI18n__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nfunction App({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        href: \"https://fonts.googleapis.com/css2?family=Roboto:wght@300;500&display=swap\",\n                        rel: \"stylesheet\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jangwonyun/Desktop/Research_AdiosCovid_NJS_App/pages/_app.js\",\n                        lineNumber: 10,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"stylesheet\",\n                        href: \"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jangwonyun/Desktop/Research_AdiosCovid_NJS_App/pages/_app.js\",\n                        lineNumber: 11,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"stylesheet\",\n                        href: \"https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css\",\n                        integrity: \"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T\",\n                        crossorigin: \"anonymous\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jangwonyun/Desktop/Research_AdiosCovid_NJS_App/pages/_app.js\",\n                        lineNumber: 12,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"script\", {\n                        src: \"https://code.jquery.com/jquery-3.4.1.slim.min.js\",\n                        integrity: \"sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n\",\n                        crossorigin: \"anonymous\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jangwonyun/Desktop/Research_AdiosCovid_NJS_App/pages/_app.js\",\n                        lineNumber: 13,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"script\", {\n                        src: \"https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js\",\n                        integrity: \"sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo\",\n                        crossorigin: \"anonymous\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jangwonyun/Desktop/Research_AdiosCovid_NJS_App/pages/_app.js\",\n                        lineNumber: 14,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"script\", {\n                        src: \"https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/js/bootstrap.min.js\",\n                        integrity: \"sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6\",\n                        crossorigin: \"anonymous\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jangwonyun/Desktop/Research_AdiosCovid_NJS_App/pages/_app.js\",\n                        lineNumber: 15,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jangwonyun/Desktop/Research_AdiosCovid_NJS_App/pages/_app.js\",\n                lineNumber: 9,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/jangwonyun/Desktop/Research_AdiosCovid_NJS_App/pages/_app.js\",\n                lineNumber: 17,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_translate_appWithI18n__WEBPACK_IMPORTED_MODULE_2___default()(App, {\n    ...(_next_translate_root_i18n__WEBPACK_IMPORTED_MODULE_1___default()),\n    isLoader: true,\n    skipInitialProps: true,\n    loadLocaleFrom: (l, n)=>__webpack_require__(\"./locales lazy recursive ^\\\\.\\\\/.*\\\\/.*$\")(`./${l}/${n}`).then((m)=>m.default)\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ3dEO0FBQ0U7QUFDdkI7QUFDVztBQUNqQjtBQUM3QixTQUFTRyxJQUFJLEVBQUVDLFVBQVMsRUFBRUMsVUFBUyxFQUFFLEVBQUU7SUFDbkMscUJBQVE7OzBCQUNSLDhEQUFDSCxrREFBSUE7O2tDQUNILDhEQUFDSTt3QkFBS0MsTUFBSzt3QkFBNEVDLEtBQUk7Ozs7OztrQ0FDM0YsOERBQUNGO3dCQUFLRSxLQUFJO3dCQUFhRCxNQUFLOzs7Ozs7a0NBQzVCLDhEQUFDRDt3QkFBS0UsS0FBSTt3QkFBYUQsTUFBSzt3QkFBMEVFLFdBQVU7d0JBQTBFQyxhQUFZOzs7Ozs7a0NBQ3RNLDhEQUFDQzt3QkFBT0MsS0FBSTt3QkFBbURILFdBQVU7d0JBQTBFQyxhQUFZOzs7Ozs7a0NBQy9KLDhEQUFDQzt3QkFBT0MsS0FBSTt3QkFBdUVILFdBQVU7d0JBQTBFQyxhQUFZOzs7Ozs7a0NBQ25MLDhEQUFDQzt3QkFBT0MsS0FBSTt3QkFBd0VILFdBQVU7d0JBQTBFQyxhQUFZOzs7Ozs7Ozs7Ozs7MEJBRXRMLDhEQUFDTjtnQkFBVyxHQUFHQyxTQUFTOzs7Ozs7OztBQUU1QjtBQUVJLGlFQUFlSixpRUFBYUEsQ0FBQ0UsS0FBSztJQUNoQyxHQUFHSCxrRUFBWTtJQUNmYSxVQUFVLElBQUk7SUFDZEMsa0JBQWtCLElBQUk7SUFDdEJDLGdCQUFnQixDQUFDQyxHQUFHQyxJQUFNLGdFQUFPLEdBQThCLEVBQUVELEVBQUUsQ0FBQyxFQUFFQyxFQUFFLENBQUMsQ0FBQyxDQUFDQyxJQUFJLENBQUNDLENBQUFBLElBQUtBLEVBQUVDLE9BQU87QUFDaEcsRUFBRSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzZWFyY2hfYWRpb3Njb3ZpZF9uanNfYXBwLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCBfX2kxOG5Db25maWcgZnJvbSAnQG5leHQtdHJhbnNsYXRlLXJvb3QvaTE4bidcbiAgICBpbXBvcnQgX19hcHBXaXRoSTE4biBmcm9tICduZXh0LXRyYW5zbGF0ZS9hcHBXaXRoSTE4bidcbiAgICBpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcyc7XG5pbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzcyc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICAgIHJldHVybiAoPD5cbiAgICA8SGVhZD5cbiAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzp3Z2h0QDMwMDs1MDAmZGlzcGxheT1zd2FwXCIgcmVsPVwic3R5bGVzaGVldFwiPjwvbGluaz5cbiAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvZm9udC1hd2Vzb21lLzQuNy4wL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzc1wiPjwvbGluaz5cbiAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9ib290c3RyYXBANC4zLjEvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIiBpbnRlZ3JpdHk9XCJzaGEzODQtZ2dPeVIwaVhDYk1RdjNYaXBtYTM0TUQrZEgvMWZRNzg0L2o2Y1kvaUpUUVVPaGNXcjd4OUp2b1J4VDJNWncxVFwiIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCI+PC9saW5rPlxuICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL2NvZGUuanF1ZXJ5LmNvbS9qcXVlcnktMy40LjEuc2xpbS5taW4uanNcIiBpbnRlZ3JpdHk9XCJzaGEzODQtSjZxYTQ4NDlibEUyK3BvVDRXbnlLaHY1dlpGNVNyUG8waUVqd0J2S1U3aW1HRkFWMHd3ajF5WWZvUlNKb1orblwiIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCI+PC9zY3JpcHQ+XG4gICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vcG9wcGVyLmpzQDEuMTYuMC9kaXN0L3VtZC9wb3BwZXIubWluLmpzXCIgaW50ZWdyaXR5PVwic2hhMzg0LVE2RTlSSHZiSXlaRkpvZnQrMm1KYkhhRVdsZGx2STlJT1l5NW4zelY5enpUdG1JM1Vrc2RRUlZ2b3hNZm9vQW9cIiBjcm9zc29yaWdpbj1cImFub255bW91c1wiPjwvc2NyaXB0PlxuICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2Jvb3RzdHJhcEA0LjQuMS9kaXN0L2pzL2Jvb3RzdHJhcC5taW4uanNcIiBpbnRlZ3JpdHk9XCJzaGEzODQtd2ZTREYyRTUwWTJEMXVVZGowTzN1TUJKbmp1VUQ0SWg3WXdhWWQxaXFma3RqMFVvZDhHQ0V4bDNPZzhpZndCNlwiIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCI+PC9zY3JpcHQ+XG4gICAgPC9IZWFkPlxuICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30vPlxuICAgPC8+KTtcbn1cblxuICAgIGV4cG9ydCBkZWZhdWx0IF9fYXBwV2l0aEkxOG4oQXBwLCB7XG4gICAgICAuLi5fX2kxOG5Db25maWcsXG4gICAgICBpc0xvYWRlcjogdHJ1ZSxcbiAgICAgIHNraXBJbml0aWFsUHJvcHM6IHRydWUsXG4gICAgICBsb2FkTG9jYWxlRnJvbTogKGwsIG4pID0+IGltcG9ydChgQG5leHQtdHJhbnNsYXRlLXJvb3QvbG9jYWxlcy8ke2x9LyR7bn1gKS50aGVuKG0gPT4gbS5kZWZhdWx0KSxcbiAgICB9KTtcbiAgIl0sIm5hbWVzIjpbIl9faTE4bkNvbmZpZyIsIl9fYXBwV2l0aEkxOG4iLCJIZWFkIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwibGluayIsImhyZWYiLCJyZWwiLCJpbnRlZ3JpdHkiLCJjcm9zc29yaWdpbiIsInNjcmlwdCIsInNyYyIsImlzTG9hZGVyIiwic2tpcEluaXRpYWxQcm9wcyIsImxvYWRMb2NhbGVGcm9tIiwibCIsIm4iLCJ0aGVuIiwibSIsImRlZmF1bHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

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