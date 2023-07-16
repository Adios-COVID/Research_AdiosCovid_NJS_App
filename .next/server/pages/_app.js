(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 7655:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./en/about": [
		9740,
		395
	],
	"./en/about.json": [
		9740,
		395
	],
	"./en/common": [
		464,
		464
	],
	"./en/common.json": [
		464,
		464
	],
	"./en/data": [
		4244,
		244
	],
	"./en/data.json": [
		4244,
		244
	],
	"./en/repo": [
		8495,
		495
	],
	"./en/repo.json": [
		8495,
		495
	],
	"./es/about": [
		5670,
		670
	],
	"./es/about.json": [
		5670,
		670
	],
	"./es/common": [
		357,
		357
	],
	"./es/common.json": [
		357,
		357
	],
	"./es/data": [
		4335,
		335
	],
	"./es/data.json": [
		4335,
		335
	],
	"./es/repo": [
		8270,
		270
	],
	"./es/repo.json": [
		8270,
		270
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
webpackAsyncContext.id = 7655;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 1429:
/***/ ((module) => {

"use strict";

module.exports = {
    locales: [
        "en",
        "es"
    ],
    defaultLocale: "en",
    pages: {
        "/": [
            "common"
        ],
        "/Data": [
            "common"
        ],
        "/about": [
            "common"
        ],
        "/RepoPage": [
            "common"
        ],
        "/SubmitData": [
            "common"
        ],
        "/documentation": [
            "common"
        ]
    }
};


/***/ }),

/***/ 4461:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./i18n.js
var i18n = __webpack_require__(1429);
var i18n_default = /*#__PURE__*/__webpack_require__.n(i18n);
;// CONCATENATED MODULE: external "next-translate/appWithI18n"
const appWithI18n_namespaceObject = require("next-translate/appWithI18n");
var appWithI18n_default = /*#__PURE__*/__webpack_require__.n(appWithI18n_namespaceObject);
// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(6764);
// EXTERNAL MODULE: ./node_modules/bootstrap/dist/css/bootstrap.min.css
var bootstrap_min = __webpack_require__(9090);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./pages/_app.js







function App({ Component , pageProps  }) {
    (0,external_react_.useEffect)(()=>{
        __webpack_require__(399);
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    });
}
/* harmony default export */ const _app = (appWithI18n_default()(App, {
    ...(i18n_default()),
    isLoader: true,
    skipInitialProps: true,
    loadLocaleFrom: (l, n)=>__webpack_require__(7655)(`./${l}/${n}`).then((m)=>m.default)
}));


/***/ }),

/***/ 9090:
/***/ (() => {



/***/ }),

/***/ 6764:
/***/ (() => {



/***/ }),

/***/ 399:
/***/ ((module) => {

"use strict";
module.exports = require("bootstrap/dist/js/bootstrap.bundle.min.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(4461));
module.exports = __webpack_exports__;

})();