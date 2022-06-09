"use strict";
self["webpackHotUpdatereact_easy_ssr"]("bundle",{

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var react_helmet_async__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet-async */ "./node_modules/react-helmet-async/lib/index.module.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @loadable/component */ "./node_modules/@loadable/component/dist/loadable.esm.js");
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-jss */ "./node_modules/react-jss/dist/react-jss.esm.js");
/* harmony import */ var global_window__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! global/window */ "./node_modules/global/window.js");
/* harmony import */ var global_window__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(global_window__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var jss_plugin_vendor_prefixer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! jss-plugin-vendor-prefixer */ "./node_modules/jss-plugin-vendor-prefixer/dist/jss-plugin-vendor-prefixer.esm.js");
/* harmony import */ var _store_initStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./store/initStore */ "./src/store/initStore.ts");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./App */ "./src/App.tsx");
/* harmony import */ var _store_sagas__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./store/sagas */ "./src/store/sagas/index.ts");
/* module decorator */ module = __webpack_require__.hmd(module);
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _s = __webpack_require__.$Refresh$.signature();

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};













var preloadedState = (global_window__WEBPACK_IMPORTED_MODULE_5___default().__PRELOADED_STATE__);
var container = document.querySelector('#root');
var history = (0,_store_initStore__WEBPACK_IMPORTED_MODULE_6__.createHistory)();
var store = (0,_store_initStore__WEBPACK_IMPORTED_MODULE_6__["default"])(preloadedState, history);
store.runSaga(_store_sagas__WEBPACK_IMPORTED_MODULE_8__["default"]);
react_jss__WEBPACK_IMPORTED_MODULE_9__.jss.use((0,jss_plugin_vendor_prefixer__WEBPACK_IMPORTED_MODULE_10__["default"])());

var Main = function Main() {
  _s();

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (typeof (global_window__WEBPACK_IMPORTED_MODULE_5___default()) !== 'undefined') {
      var jssStyles = document.querySelector('#jss-server-side');

      if (jssStyles) {
        jssStyles.parentNode.removeChild(jssStyles);
      }

      var fontAwesomeCssStyles = document.querySelector('#fontawesome-server-side');

      if (fontAwesomeCssStyles) {
        fontAwesomeCssStyles.parentNode.removeChild(fontAwesomeCssStyles);
      }
    }
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__.Provider, {
    store: store
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_helmet_async__WEBPACK_IMPORTED_MODULE_2__.HelmetProvider, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_jss__WEBPACK_IMPORTED_MODULE_9__.JssProvider, {
    jss: react_jss__WEBPACK_IMPORTED_MODULE_9__.jss,
    classNamePrefix: "app-"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_App__WEBPACK_IMPORTED_MODULE_7__["default"], null)))));
};

_s(Main, "OD7bBpZva5O2jO+Puf00hKivP7c=");

__signature__(Main, "useEffect{}");

_c = Main;

var clientApp = function clientApp() {
  var hostname = (global_window__WEBPACK_IMPORTED_MODULE_5___default().location.hostname);
  var children = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Main, null);

  if (true) {
    (0,_loadable_component__WEBPACK_IMPORTED_MODULE_4__.loadableReady)(function () {
      if (typeof (global_window__WEBPACK_IMPORTED_MODULE_5___default()) === 'undefined') {
        react_dom_client__WEBPACK_IMPORTED_MODULE_1__.hydrateRoot(container, children);
        return;
      }

      var root = react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot(container);
      root.render(children);
    });
  } else {}
};

clientApp();
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(preloadedState, "preloadedState", "D:\\Git\\react-easy-ssr-master\\src\\index.tsx");
  reactHotLoader.register(container, "container", "D:\\Git\\react-easy-ssr-master\\src\\index.tsx");
  reactHotLoader.register(history, "history", "D:\\Git\\react-easy-ssr-master\\src\\index.tsx");
  reactHotLoader.register(store, "store", "D:\\Git\\react-easy-ssr-master\\src\\index.tsx");
  reactHotLoader.register(Main, "Main", "D:\\Git\\react-easy-ssr-master\\src\\index.tsx");
  reactHotLoader.register(clientApp, "clientApp", "D:\\Git\\react-easy-ssr-master\\src\\index.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

var _c;

__webpack_require__.$Refresh$.register(_c, "Main");

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("fcba2d5c24b4c4e624f8")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=bundle.1d7cb8934c741253e82b.hot-update.js.map