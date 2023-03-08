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
eval("\nmodule.exports = {\n    locales: [\n        \"en\",\n        \"es\"\n    ],\n    defaultLocale: \"en\",\n    pages: {\n        \"/\": [\n            \"common\"\n        ],\n        \"/Data\": [\n            \"common\"\n        ],\n        \"/about\": [\n            \"common\"\n        ],\n        \"/RepoPage\": [\n            \"common\"\n        ]\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9pMThuLmpzLmpzIiwibWFwcGluZ3MiOiI7QUFBQUEsT0FBT0MsT0FBTyxHQUFHO0lBQ2ZDLFNBQVM7UUFBQztRQUFNO0tBQUs7SUFDckJDLGVBQWU7SUFDZkMsT0FBTztRQUNMLEtBQUs7WUFBQztTQUFTO1FBQ2YsU0FBUztZQUFDO1NBQVM7UUFDbkIsVUFBVTtZQUFDO1NBQVM7UUFDcEIsYUFBWTtZQUFDO1NBQVM7SUFFeEI7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc2VhcmNoX2FkaW9zY292aWRfbmpzX2FwcC8uL2kxOG4uanM/OTM4YiJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgbG9jYWxlczogW1wiZW5cIiwgXCJlc1wiXSwgLy8gQXJyYXkgd2l0aCB0aGUgbGFuZ3VhZ2VzIHRoYXQgeW91IHdhbnQgdG8gdXNlXG4gIGRlZmF1bHRMb2NhbGU6IFwiZW5cIiwgLy8gRGVmYXVsdCBsYW5ndWFnZSBvZiB5b3VyIHdlYnNpdGVcbiAgcGFnZXM6IHtcbiAgICAnLyc6IFtcImNvbW1vblwiXSwgLy8gTmFtZXNwYWNlcyB0aGF0IHlvdSB3YW50IHRvIGltcG9ydCBwZXIgcGFnZSAod2Ugc3RpY2sgdG8gb25lIG5hbWVzcGFjZSBmb3IgYWxsIHRoZSBhcHBsaWNhdGlvbiBpbiB0aGlzIHR1dG9yaWFsKVxuICAgICcvRGF0YSc6IFtcImNvbW1vblwiXSxcbiAgICAnL2Fib3V0JzogW1wiY29tbW9uXCJdLFxuICAgICcvUmVwb1BhZ2UnOltcImNvbW1vblwiXVxuICAgIC8vICcvVGVzdCc6IFsnY29tbW9uJ11cbiAgfSxcbn07XG5cbiAgIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJsb2NhbGVzIiwiZGVmYXVsdExvY2FsZSIsInBhZ2VzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./i18n.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _next_translate_root_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @next-translate-root/i18n */ \"./i18n.js\");\n/* harmony import */ var _next_translate_root_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_next_translate_root_i18n__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_translate_appWithI18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-translate/appWithI18n */ \"next-translate/appWithI18n\");\n/* harmony import */ var next_translate_appWithI18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_translate_appWithI18n__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n// import { useRouter } from \"next/router\";\n// import { useEffect } from 'react';\n// import * as gtag from '../lib/gtag'\nfunction App({ Component , pageProps  }) {\n    // const router = useRouter()\n    // useEffect(() => {\n    //   const handleRouteChange = (url) => {\n    //     gtag.pageview(url)\n    //   }\n    //   router.events.on('routeChangeComplete', handleRouteChange)\n    //   return () => {\n    //     router.events.off('routeChangeComplete', handleRouteChange)\n    //   }\n    // }, [router.events])\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        href: \"https://fonts.googleapis.com/css2?family=Roboto:wght@300;500&display=swap\",\n                        rel: \"stylesheet\"\n                    }, void 0, false, {\n                        fileName: \"/Users/wuming/Desktop/Research_AdiosCovid_NJS_App/pages/_app.js\",\n                        lineNumber: 23,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"stylesheet\",\n                        href: \"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\"\n                    }, void 0, false, {\n                        fileName: \"/Users/wuming/Desktop/Research_AdiosCovid_NJS_App/pages/_app.js\",\n                        lineNumber: 24,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"stylesheet\",\n                        href: \"https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css\",\n                        integrity: \"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T\",\n                        crossorigin: \"anonymous\"\n                    }, void 0, false, {\n                        fileName: \"/Users/wuming/Desktop/Research_AdiosCovid_NJS_App/pages/_app.js\",\n                        lineNumber: 25,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"script\", {\n                        src: \"https://code.jquery.com/jquery-3.4.1.slim.min.js\",\n                        integrity: \"sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n\",\n                        crossorigin: \"anonymous\"\n                    }, void 0, false, {\n                        fileName: \"/Users/wuming/Desktop/Research_AdiosCovid_NJS_App/pages/_app.js\",\n                        lineNumber: 26,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"script\", {\n                        src: \"https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js\",\n                        integrity: \"sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo\",\n                        crossorigin: \"anonymous\"\n                    }, void 0, false, {\n                        fileName: \"/Users/wuming/Desktop/Research_AdiosCovid_NJS_App/pages/_app.js\",\n                        lineNumber: 27,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"script\", {\n                        src: \"https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/js/bootstrap.min.js\",\n                        integrity: \"sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6\",\n                        crossorigin: \"anonymous\"\n                    }, void 0, false, {\n                        fileName: \"/Users/wuming/Desktop/Research_AdiosCovid_NJS_App/pages/_app.js\",\n                        lineNumber: 28,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/wuming/Desktop/Research_AdiosCovid_NJS_App/pages/_app.js\",\n                lineNumber: 22,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/wuming/Desktop/Research_AdiosCovid_NJS_App/pages/_app.js\",\n                lineNumber: 30,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_translate_appWithI18n__WEBPACK_IMPORTED_MODULE_2___default()(App, {\n    ...(_next_translate_root_i18n__WEBPACK_IMPORTED_MODULE_1___default()),\n    isLoader: true,\n    skipInitialProps: true,\n    loadLocaleFrom: (l, n)=>__webpack_require__(\"./locales lazy recursive ^\\\\.\\\\/.*\\\\/.*$\")(`./${l}/${n}`).then((m)=>m.default)\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ3dEO0FBQ0U7QUFDdkI7QUFDVztBQUNqQjtBQUM3QiwyQ0FBMkM7QUFDM0MscUNBQXFDO0FBQ3JDLHNDQUFzQztBQUN0QyxTQUFTRyxJQUFJLEVBQUVDLFVBQVMsRUFBRUMsVUFBUyxFQUFFLEVBQUU7SUFDbkMsNkJBQTZCO0lBQzdCLG9CQUFvQjtJQUNwQix5Q0FBeUM7SUFDekMseUJBQXlCO0lBQ3pCLE1BQU07SUFDTiwrREFBK0Q7SUFDL0QsbUJBQW1CO0lBQ25CLGtFQUFrRTtJQUNsRSxNQUFNO0lBQ04sc0JBQXNCO0lBQ3RCLHFCQUFROzswQkFDUiw4REFBQ0gsa0RBQUlBOztrQ0FDSCw4REFBQ0k7d0JBQUtDLE1BQUs7d0JBQTRFQyxLQUFJOzs7Ozs7a0NBQzNGLDhEQUFDRjt3QkFBS0UsS0FBSTt3QkFBYUQsTUFBSzs7Ozs7O2tDQUM1Qiw4REFBQ0Q7d0JBQUtFLEtBQUk7d0JBQWFELE1BQUs7d0JBQTBFRSxXQUFVO3dCQUEwRUMsYUFBWTs7Ozs7O2tDQUN0TSw4REFBQ0M7d0JBQU9DLEtBQUk7d0JBQW1ESCxXQUFVO3dCQUEwRUMsYUFBWTs7Ozs7O2tDQUMvSiw4REFBQ0M7d0JBQU9DLEtBQUk7d0JBQXVFSCxXQUFVO3dCQUEwRUMsYUFBWTs7Ozs7O2tDQUNuTCw4REFBQ0M7d0JBQU9DLEtBQUk7d0JBQXdFSCxXQUFVO3dCQUEwRUMsYUFBWTs7Ozs7Ozs7Ozs7OzBCQUV0TCw4REFBQ047Z0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7QUFFNUI7QUFFSSxpRUFBZUosaUVBQWFBLENBQUNFLEtBQUs7SUFDaEMsR0FBR0gsa0VBQVk7SUFDZmEsVUFBVSxJQUFJO0lBQ2RDLGtCQUFrQixJQUFJO0lBQ3RCQyxnQkFBZ0IsQ0FBQ0MsR0FBR0MsSUFBTSxnRUFBTyxHQUE4QixFQUFFRCxFQUFFLENBQUMsRUFBRUMsRUFBRSxDQUFDLENBQUMsQ0FBQ0MsSUFBSSxDQUFDQyxDQUFBQSxJQUFLQSxFQUFFQyxPQUFPO0FBQ2hHLEVBQUUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc2VhcmNoX2FkaW9zY292aWRfbmpzX2FwcC8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgX19pMThuQ29uZmlnIGZyb20gJ0BuZXh0LXRyYW5zbGF0ZS1yb290L2kxOG4nXG4gICAgaW1wb3J0IF9fYXBwV2l0aEkxOG4gZnJvbSAnbmV4dC10cmFuc2xhdGUvYXBwV2l0aEkxOG4nXG4gICAgaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnO1xuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbi8vIGltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuLy8gaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuLy8gaW1wb3J0ICogYXMgZ3RhZyBmcm9tICcuLi9saWIvZ3RhZydcbmZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgICAvLyBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICAgIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gICBjb25zdCBoYW5kbGVSb3V0ZUNoYW5nZSA9ICh1cmwpID0+IHtcbiAgICAvLyAgICAgZ3RhZy5wYWdldmlldyh1cmwpXG4gICAgLy8gICB9XG4gICAgLy8gICByb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgaGFuZGxlUm91dGVDaGFuZ2UpXG4gICAgLy8gICByZXR1cm4gKCkgPT4ge1xuICAgIC8vICAgICByb3V0ZXIuZXZlbnRzLm9mZigncm91dGVDaGFuZ2VDb21wbGV0ZScsIGhhbmRsZVJvdXRlQ2hhbmdlKVxuICAgIC8vICAgfVxuICAgIC8vIH0sIFtyb3V0ZXIuZXZlbnRzXSlcbiAgICByZXR1cm4gKDw+XG4gICAgPEhlYWQ+XG4gICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEAzMDA7NTAwJmRpc3BsYXk9c3dhcFwiIHJlbD1cInN0eWxlc2hlZXRcIj48L2xpbms+XG4gICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2ZvbnQtYXdlc29tZS80LjcuMC9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3NcIj48L2xpbms+XG4gICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vYm9vdHN0cmFwQDQuMy4xL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIgaW50ZWdyaXR5PVwic2hhMzg0LWdnT3lSMGlYQ2JNUXYzWGlwbWEzNE1EK2RILzFmUTc4NC9qNmNZL2lKVFFVT2hjV3I3eDlKdm9SeFQyTVp3MVRcIiBjcm9zc29yaWdpbj1cImFub255bW91c1wiPjwvbGluaz5cbiAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9jb2RlLmpxdWVyeS5jb20vanF1ZXJ5LTMuNC4xLnNsaW0ubWluLmpzXCIgaW50ZWdyaXR5PVwic2hhMzg0LUo2cWE0ODQ5YmxFMitwb1Q0V255S2h2NXZaRjVTclBvMGlFandCdktVN2ltR0ZBVjB3d2oxeVlmb1JTSm9aK25cIiBjcm9zc29yaWdpbj1cImFub255bW91c1wiPjwvc2NyaXB0PlxuICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL3BvcHBlci5qc0AxLjE2LjAvZGlzdC91bWQvcG9wcGVyLm1pbi5qc1wiIGludGVncml0eT1cInNoYTM4NC1RNkU5Ukh2Ykl5WkZKb2Z0KzJtSmJIYUVXbGRsdkk5SU9ZeTVuM3pWOXp6VHRtSTNVa3NkUVJWdm94TWZvb0FvXCIgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIj48L3NjcmlwdD5cbiAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9ib290c3RyYXBANC40LjEvZGlzdC9qcy9ib290c3RyYXAubWluLmpzXCIgaW50ZWdyaXR5PVwic2hhMzg0LXdmU0RGMkU1MFkyRDF1VWRqME8zdU1CSm5qdVVENEloN1l3YVlkMWlxZmt0ajBVb2Q4R0NFeGwzT2c4aWZ3QjZcIiBjcm9zc29yaWdpbj1cImFub255bW91c1wiPjwvc2NyaXB0PlxuICAgIDwvSGVhZD5cbiAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9Lz5cbiAgIDwvPik7XG59XG5cbiAgICBleHBvcnQgZGVmYXVsdCBfX2FwcFdpdGhJMThuKEFwcCwge1xuICAgICAgLi4uX19pMThuQ29uZmlnLFxuICAgICAgaXNMb2FkZXI6IHRydWUsXG4gICAgICBza2lwSW5pdGlhbFByb3BzOiB0cnVlLFxuICAgICAgbG9hZExvY2FsZUZyb206IChsLCBuKSA9PiBpbXBvcnQoYEBuZXh0LXRyYW5zbGF0ZS1yb290L2xvY2FsZXMvJHtsfS8ke259YCkudGhlbihtID0+IG0uZGVmYXVsdCksXG4gICAgfSk7XG4gICJdLCJuYW1lcyI6WyJfX2kxOG5Db25maWciLCJfX2FwcFdpdGhJMThuIiwiSGVhZCIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImxpbmsiLCJocmVmIiwicmVsIiwiaW50ZWdyaXR5IiwiY3Jvc3NvcmlnaW4iLCJzY3JpcHQiLCJzcmMiLCJpc0xvYWRlciIsInNraXBJbml0aWFsUHJvcHMiLCJsb2FkTG9jYWxlRnJvbSIsImwiLCJuIiwidGhlbiIsIm0iLCJkZWZhdWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

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