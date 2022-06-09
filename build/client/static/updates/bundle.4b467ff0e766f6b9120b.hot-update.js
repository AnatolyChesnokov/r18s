"use strict";
self["webpackHotUpdatereact_easy_ssr"]("bundle",{

/***/ "./src/components/Header.tsx":
/*!***********************************!*\
  !*** ./src/components/Header.tsx ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Drawer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Drawer */ "./src/components/Drawer.tsx");
/* harmony import */ var _assets_jss_components_headerStyle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/jss/components/headerStyle */ "./src/assets/jss/components/headerStyle.ts");
/* harmony import */ var _assets_images_61155_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/images/61155.svg */ "./src/assets/images/61155.svg");
/* module decorator */ module = __webpack_require__.hmd(module);
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _s2 = __webpack_require__.$Refresh$.signature();

var _excluded = ["children"];

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};










var Header = function Header(_ref) {
  _s2();

  var children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded);

  var classes = (0,_assets_jss_components_headerStyle__WEBPACK_IMPORTED_MODULE_5__["default"])(props);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      mobileOpen = _useState2[0],
      setMobileOpen = _useState2[1];

  var oldMobileOpen = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);

  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function (state) {
    return state.router.location;
  }),
      pathname = _useSelector.pathname;

  var oldPage = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(pathname);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (pathname !== oldPage.current) {
      oldPage.current = pathname;
      setMobileOpen(false);
    }
  }, [pathname, props]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (oldMobileOpen.current !== mobileOpen && mobileOpen) {
      document.body.style.overflow = 'hidden hidden';

      try {
        window.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      } catch (error) {
        // for older browser
        window.scrollTo(0, 0);
      }
    }

    if (oldMobileOpen.current !== mobileOpen && !mobileOpen) {
      document.body.style.removeProperty('overflow');
    }

    oldMobileOpen.current = mobileOpen;
  }, [mobileOpen]);

  var headerLinks = function headerLinks() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("nav", {
      className: classes.menuItems
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(classes.closeMenuMobile)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      type: "button",
      "aria-label": "close drawer",
      onKeyDown: function onKeyDown(e) {
        if (e.key === 'Escape') {
          setMobileOpen(false);
        }
      },
      onClick: function onClick() {
        setMobileOpen(false);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
      src: _assets_images_61155_svg__WEBPACK_IMPORTED_MODULE_6__["default"],
      alt: "Close"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Link, {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(classes.navLink),
      to: "/"
    }, "Home"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Link, {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(classes.navLink),
      to: "/movies"
    }, "Movies"));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(classes.appBar)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(classes.toolBar)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Link, {
    to: "/",
    className: classes.logoLink
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
    icon: ['fab', 'github']
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "react-easy-ssr"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: classes.hiddenSmDown
  }, headerLinks()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: classes.hiddenMdUp
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "button",
    "aria-label": "open drawer",
    onClick: function onClick() {
      return setMobileOpen(true);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
    icon: "bars"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: classes.hiddenMdUp
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Drawer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    open: mobileOpen,
    onClose: function onClose() {
      return setMobileOpen(false);
    },
    id: "drawer"
  }, headerLinks())));
};

_s2(Header, "UJpnF9qfKGFMKwChHjD8ghZJR+A=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector];
});

__signature__(Header, "useState{[mobileOpen, setMobileOpen](false)}\nuseRef{oldMobileOpen}\nuseSelector{{ pathname }}\nuseRef{oldPage}\nuseEffect{}\nuseEffect{}", function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector];
});

_c = Header;
var _default = Header;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Header, "Header", "D:\\Git\\react-easy-ssr-master\\src\\components\\Header.tsx");
  reactHotLoader.register(_default, "default", "D:\\Git\\react-easy-ssr-master\\src\\components\\Header.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

var _c;

__webpack_require__.$Refresh$.register(_c, "Header");

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

/***/ }),

/***/ "./src/pages/routes.tsx":
/*!******************************!*\
  !*** ./src/pages/routes.tsx ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @loadable/component */ "./node_modules/@loadable/component/dist/loadable.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Exception_Loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Exception/Loading */ "./src/pages/Exception/Loading.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};



 // https://github.com/gregberge/loadable-components/issues/669#issuecomment-741539840

var loadable = function loadable(importer) {
  var withoutForwardRef = typeof window !== 'undefined' ? function (C) {
    return function (props) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(C, props);
    };
  } : function (C) {
    return C;
  };
  return withoutForwardRef((0,_loadable_component__WEBPACK_IMPORTED_MODULE_0__["default"])(importer, {
    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Exception_Loading__WEBPACK_IMPORTED_MODULE_2__["default"], null)
  }));
}; // const Forbidden = loadable(() => import(/* webpackChunkName: "Forbidden" */ './Exception/403'));


var NoMatch = loadable({
  resolved: {},
  chunkName: function chunkName() {
    return "NoMatch";
  },
  isReady: function isReady(props) {
    var key = this.resolve(props);

    if (this.resolved[key] !== true) {
      return false;
    }

    if (true) {
      return !!__webpack_require__.m[key];
    }

    return false;
  },
  importAsync: function importAsync() {
    return __webpack_require__.e(/*! import() | NoMatch */ "NoMatch").then(__webpack_require__.bind(__webpack_require__, /*! ./Exception/404 */ "./src/pages/Exception/404.tsx"));
  },
  requireAsync: function requireAsync(props) {
    var _this = this;

    var key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then(function (resolved) {
      _this.resolved[key] = true;
      return resolved;
    });
  },
  requireSync: function requireSync(props) {
    var id = this.resolve(props);

    if (true) {
      return __webpack_require__(id);
    }

    return eval('module.require')(id);
  },
  resolve: function resolve() {
    if (true) {
      return /*require.resolve*/(/*! ./Exception/404 */ "./src/pages/Exception/404.tsx");
    }

    return eval('require.resolve')("./Exception/404");
  }
}); // const ServerDown = loadable(() => import(/* webpackChunkName: "ServerDown" */ './Exception/500'));

var Home = loadable({
  resolved: {},
  chunkName: function chunkName() {
    return "Home";
  },
  isReady: function isReady(props) {
    var key = this.resolve(props);

    if (this.resolved[key] !== true) {
      return false;
    }

    if (true) {
      return !!__webpack_require__.m[key];
    }

    return false;
  },
  importAsync: function importAsync() {
    return Promise.all(/*! import() | Home */[__webpack_require__.e("src_components_Grid_tsx"), __webpack_require__.e("Home")]).then(__webpack_require__.bind(__webpack_require__, /*! ./Home/index */ "./src/pages/Home/index.tsx"));
  },
  requireAsync: function requireAsync(props) {
    var _this = this;

    var key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then(function (resolved) {
      _this.resolved[key] = true;
      return resolved;
    });
  },
  requireSync: function requireSync(props) {
    var id = this.resolve(props);

    if (true) {
      return __webpack_require__(id);
    }

    return eval('module.require')(id);
  },
  resolve: function resolve() {
    if (true) {
      return /*require.resolve*/(/*! ./Home/index */ "./src/pages/Home/index.tsx");
    }

    return eval('require.resolve')("./Home/index");
  }
});
var Movies = loadable({
  resolved: {},
  chunkName: function chunkName() {
    return "Movies";
  },
  isReady: function isReady(props) {
    var key = this.resolve(props);

    if (this.resolved[key] !== true) {
      return false;
    }

    if (true) {
      return !!__webpack_require__.m[key];
    }

    return false;
  },
  importAsync: function importAsync() {
    return Promise.all(/*! import() | Movies */[__webpack_require__.e("src_components_Grid_tsx"), __webpack_require__.e("Movies")]).then(__webpack_require__.bind(__webpack_require__, /*! ./Movies/index */ "./src/pages/Movies/index.tsx"));
  },
  requireAsync: function requireAsync(props) {
    var _this = this;

    var key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then(function (resolved) {
      _this.resolved[key] = true;
      return resolved;
    });
  },
  requireSync: function requireSync(props) {
    var id = this.resolve(props);

    if (true) {
      return __webpack_require__(id);
    }

    return eval('module.require')(id);
  },
  resolve: function resolve() {
    if (true) {
      return /*require.resolve*/(/*! ./Movies/index */ "./src/pages/Movies/index.tsx");
    }

    return eval('require.resolve')("./Movies/index");
  }
});
var AboutUs = loadable({
  resolved: {},
  chunkName: function chunkName() {
    return "AboutUs";
  },
  isReady: function isReady(props) {
    var key = this.resolve(props);

    if (this.resolved[key] !== true) {
      return false;
    }

    if (true) {
      return !!__webpack_require__.m[key];
    }

    return false;
  },
  importAsync: function importAsync() {
    return Promise.all(/*! import() | AboutUs */[__webpack_require__.e("src_components_Grid_tsx"), __webpack_require__.e("AboutUs")]).then(__webpack_require__.bind(__webpack_require__, /*! ./AboutUs */ "./src/pages/AboutUs.tsx"));
  },
  requireAsync: function requireAsync(props) {
    var _this = this;

    var key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then(function (resolved) {
      _this.resolved[key] = true;
      return resolved;
    });
  },
  requireSync: function requireSync(props) {
    var id = this.resolve(props);

    if (true) {
      return __webpack_require__(id);
    }

    return eval('module.require')(id);
  },
  resolve: function resolve() {
    if (true) {
      return /*require.resolve*/(/*! ./AboutUs */ "./src/pages/AboutUs.tsx");
    }

    return eval('require.resolve')("./AboutUs");
  }
});
var indexRoutes = [{
  exact: true,
  path: '/',
  Component: Home
}, {
  path: '/movies',
  Component: Movies
}, {
  path: '/about-us',
  Component: AboutUs
}, {
  path: '*',
  name: 'NoMatch',
  Component: NoMatch
}];
var _default = indexRoutes;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(loadable, "loadable", "D:\\Git\\react-easy-ssr-master\\src\\pages\\routes.tsx");
  reactHotLoader.register(NoMatch, "NoMatch", "D:\\Git\\react-easy-ssr-master\\src\\pages\\routes.tsx");
  reactHotLoader.register(Home, "Home", "D:\\Git\\react-easy-ssr-master\\src\\pages\\routes.tsx");
  reactHotLoader.register(Movies, "Movies", "D:\\Git\\react-easy-ssr-master\\src\\pages\\routes.tsx");
  reactHotLoader.register(AboutUs, "AboutUs", "D:\\Git\\react-easy-ssr-master\\src\\pages\\routes.tsx");
  reactHotLoader.register(indexRoutes, "indexRoutes", "D:\\Git\\react-easy-ssr-master\\src\\pages\\routes.tsx");
  reactHotLoader.register(_default, "default", "D:\\Git\\react-easy-ssr-master\\src\\pages\\routes.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

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
/******/ 	__webpack_require__.h = () => ("29756a2f869f9c598598")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=bundle.4b467ff0e766f6b9120b.hot-update.js.map