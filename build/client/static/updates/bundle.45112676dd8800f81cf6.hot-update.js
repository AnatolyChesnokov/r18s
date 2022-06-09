"use strict";
self["webpackHotUpdatereact_easy_ssr"]("bundle",{

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
    return __webpack_require__.e(/*! import() | Home */ "Home").then(__webpack_require__.bind(__webpack_require__, /*! ./Home/index */ "./src/pages/Home/index.tsx"));
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
/******/ 	__webpack_require__.h = () => ("4b467ff0e766f6b9120b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=bundle.45112676dd8800f81cf6.hot-update.js.map