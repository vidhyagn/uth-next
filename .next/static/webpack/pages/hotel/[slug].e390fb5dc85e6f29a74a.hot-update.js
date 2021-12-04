self["webpackHotUpdate_N_E"]("pages/hotel/[slug]",{

/***/ "./node_modules/next/dist/shared/lib/amp-context.js":
/*!**********************************************************!*\
  !*** ./node_modules/next/dist/shared/lib/amp-context.js ***!
  \**********************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.AmpStateContext = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var AmpStateContext = _react["default"].createContext({});

exports.AmpStateContext = AmpStateContext;

if (true) {
  AmpStateContext.displayName = 'AmpStateContext';
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/shared/lib/amp.js":
/*!**************************************************!*\
  !*** ./node_modules/next/dist/shared/lib/amp.js ***!
  \**************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _s = $RefreshSig$();

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.isInAmpMode = isInAmpMode;
exports.useAmp = useAmp;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _ampContext = __webpack_require__(/*! ./amp-context */ "./node_modules/next/dist/shared/lib/amp-context.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function isInAmpMode() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$ampFirst = _ref.ampFirst,
      ampFirst = _ref$ampFirst === void 0 ? false : _ref$ampFirst,
      _ref$hybrid = _ref.hybrid,
      hybrid = _ref$hybrid === void 0 ? false : _ref$hybrid,
      _ref$hasQuery = _ref.hasQuery,
      hasQuery = _ref$hasQuery === void 0 ? false : _ref$hasQuery;

  return ampFirst || hybrid && hasQuery;
}

function useAmp() {
  _s();

  // Don't assign the context value to a variable to save bytes
  return isInAmpMode(_react["default"].useContext(_ampContext.AmpStateContext));
}

_s(useAmp, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/shared/lib/head-manager-context.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/shared/lib/head-manager-context.js ***!
  \*******************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.HeadManagerContext = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var HeadManagerContext = _react["default"].createContext({});

exports.HeadManagerContext = HeadManagerContext;

if (true) {
  HeadManagerContext.displayName = 'HeadManagerContext';
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/shared/lib/head.js":
/*!***************************************************!*\
  !*** ./node_modules/next/dist/shared/lib/head.js ***!
  \***************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _defineProperty = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/defineProperty.js");

var _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.defaultHead = defaultHead;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _sideEffect = _interopRequireDefault(__webpack_require__(/*! ./side-effect */ "./node_modules/next/dist/shared/lib/side-effect.js"));

var _ampContext = __webpack_require__(/*! ./amp-context */ "./node_modules/next/dist/shared/lib/amp-context.js");

var _headManagerContext = __webpack_require__(/*! ./head-manager-context */ "./node_modules/next/dist/shared/lib/head-manager-context.js");

var _amp = __webpack_require__(/*! ./amp */ "./node_modules/next/dist/shared/lib/amp.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

function defaultHead() {
  var inAmpMode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var head = [/*#__PURE__*/_react["default"].createElement("meta", {
    charSet: "utf-8"
  })];

  if (!inAmpMode) {
    head.push( /*#__PURE__*/_react["default"].createElement("meta", {
      name: "viewport",
      content: "width=device-width"
    }));
  }

  return head;
}

function onlyReactElement(list, child) {
  // React children can be "string" or "number" in this case we ignore them for backwards compat
  if (typeof child === 'string' || typeof child === 'number') {
    return list;
  } // Adds support for React.Fragment


  if (child.type === _react["default"].Fragment) {
    return list.concat(_react["default"].Children.toArray(child.props.children).reduce(function (fragmentList, fragmentChild) {
      if (typeof fragmentChild === 'string' || typeof fragmentChild === 'number') {
        return fragmentList;
      }

      return fragmentList.concat(fragmentChild);
    }, []));
  }

  return list.concat(child);
}

var METATYPES = ['name', 'httpEquiv', 'charSet', 'itemProp'];
/*
 returns a function for filtering head child elements
 which shouldn't be duplicated, like <title/>
 Also adds support for deduplicated `key` properties
*/

function unique() {
  var keys = new Set();
  var tags = new Set();
  var metaTypes = new Set();
  var metaCategories = {};
  return function (h) {
    var isUnique = true;
    var hasKey = false;

    if (h.key && typeof h.key !== 'number' && h.key.indexOf('$') > 0) {
      hasKey = true;
      var key = h.key.slice(h.key.indexOf('$') + 1);

      if (keys.has(key)) {
        isUnique = false;
      } else {
        keys.add(key);
      }
    } // eslint-disable-next-line default-case


    switch (h.type) {
      case 'title':
      case 'base':
        if (tags.has(h.type)) {
          isUnique = false;
        } else {
          tags.add(h.type);
        }

        break;

      case 'meta':
        for (var i = 0, len = METATYPES.length; i < len; i++) {
          var metatype = METATYPES[i];
          if (!h.props.hasOwnProperty(metatype)) continue;

          if (metatype === 'charSet') {
            if (metaTypes.has(metatype)) {
              isUnique = false;
            } else {
              metaTypes.add(metatype);
            }
          } else {
            var category = h.props[metatype];
            var categories = metaCategories[metatype] || new Set();

            if ((metatype !== 'name' || !hasKey) && categories.has(category)) {
              isUnique = false;
            } else {
              categories.add(category);
              metaCategories[metatype] = categories;
            }
          }
        }

        break;
    }

    return isUnique;
  };
}
/**
 *
 * @param headElements List of multiple <Head> instances
 */


function reduceComponents(headElements, props) {
  return headElements.reduce(function (list, headElement) {
    var headElementChildren = _react["default"].Children.toArray(headElement.props.children);

    return list.concat(headElementChildren);
  }, []).reduce(onlyReactElement, []).reverse().concat(defaultHead(props.inAmpMode)).filter(unique()).reverse().map(function (c, i) {
    var key = c.key || i;

    if (false) { var newProps; }

    return /*#__PURE__*/_react["default"].cloneElement(c, {
      key: key
    });
  });
}
/**
 * This component injects elements to `<head>` of your page.
 * To avoid duplicated `tags` in `<head>` you can use the `key` property, which will make sure every tag is only rendered once.
 */


function Head(_ref) {
  _s();

  var children = _ref.children;
  var ampState = (0, _react).useContext(_ampContext.AmpStateContext);
  var headManager = (0, _react).useContext(_headManagerContext.HeadManagerContext);
  return /*#__PURE__*/_react["default"].createElement(_sideEffect["default"], {
    reduceComponentsToState: reduceComponents,
    headManager: headManager,
    inAmpMode: (0, _amp).isInAmpMode(ampState)
  }, children);
}

_s(Head, "sCUayZmr5V93tUjujy03KdMBCec=");

_c = Head;
var _default = Head;
exports.default = _default;

var _c;

$RefreshReg$(_c, "Head");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/shared/lib/side-effect.js":
/*!**********************************************************!*\
  !*** ./node_modules/next/dist/shared/lib/side-effect.js ***!
  \**********************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _toConsumableArray = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/toConsumableArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/toConsumableArray.js");

var _classCallCheck = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/classCallCheck */ "./node_modules/next/node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/createClass */ "./node_modules/next/node_modules/@babel/runtime/helpers/createClass.js");

var _assertThisInitialized = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/assertThisInitialized */ "./node_modules/next/node_modules/@babel/runtime/helpers/assertThisInitialized.js");

var _inherits = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/inherits */ "./node_modules/next/node_modules/@babel/runtime/helpers/inherits.js");

var _possibleConstructorReturn = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/next/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/getPrototypeOf */ "./node_modules/next/node_modules/@babel/runtime/helpers/getPrototypeOf.js");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var isServer = false;

var _class = /*#__PURE__*/function (_react$Component) {
  _inherits(_class, _react$Component);

  var _super = _createSuper(_class);

  function _class(props) {
    var _this;

    _classCallCheck(this, _class);

    _this = _super.call(this, props);

    _this.emitChange = function () {
      if (_this._hasHeadManager) {
        _this.props.headManager.updateHead(_this.props.reduceComponentsToState(_toConsumableArray(_this.props.headManager.mountedInstances), _this.props));
      }
    };

    _this._hasHeadManager = _this.props.headManager && _this.props.headManager.mountedInstances;

    if (isServer && _this._hasHeadManager) {
      _this.props.headManager.mountedInstances.add(_assertThisInitialized(_this));

      _this.emitChange();
    }

    return _this;
  }

  _createClass(_class, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this._hasHeadManager) {
        this.props.headManager.mountedInstances.add(this);
      }

      this.emitChange();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.emitChange();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this._hasHeadManager) {
        this.props.headManager.mountedInstances["delete"](this);
      }

      this.emitChange();
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return _class;
}(_react.Component);

exports.default = _class;

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./pages/hotel/[slug].js":
/*!*******************************!*\
  !*** ./pages/hotel/[slug].js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSP": function() { return /* binding */ __N_SSP; }
/* harmony export */ });
/* harmony import */ var D_demo_uth_next_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var D_demo_uth_next_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var D_demo_uth_next_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var D_demo_uth_next_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var D_demo_uth_next_node_modules_next_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var D_demo_uth_next_node_modules_next_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var D_demo_uth_next_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var D_demo_uth_next_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _views_Footer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../views/Footer */ "./views/Footer.js");
/* harmony import */ var _views_common_hotelSlider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../views/common/hotelSlider */ "./views/common/hotelSlider.js");
/* harmony import */ var _utilities_CustomFunctions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../utilities/CustomFunctions */ "./utilities/CustomFunctions.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_hotel__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../actions/hotel */ "./actions/hotel.js");
/* harmony import */ var date_fns_locale__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! date-fns/locale */ "./node_modules/date-fns/esm/locale/index.js");
/* harmony import */ var react_nice_dates__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-nice-dates */ "./node_modules/react-nice-dates/build/index.esm.js");
/* harmony import */ var react_nice_dates_build_style_css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-nice-dates/build/style.css */ "./node_modules/react-nice-dates/build/style.css");
/* harmony import */ var react_nice_dates_build_style_css__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_nice_dates_build_style_css__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _views_RoomBlock__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../views/RoomBlock */ "./views/RoomBlock.js");
/* harmony import */ var _views_RoomDetail__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../views/RoomDetail */ "./views/RoomDetail.js");
/* harmony import */ var _views_RoomSearchBlock__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../views/RoomSearchBlock */ "./views/RoomSearchBlock.js");
/* harmony import */ var _views_FacilityNewBlock__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../views/FacilityNewBlock */ "./views/FacilityNewBlock.js");
/* harmony import */ var _views_SummaryItem__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../views/SummaryItem */ "./views/SummaryItem.js");
/* harmony import */ var _views_common_AlertModal__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../views/common/AlertModal */ "./views/common/AlertModal.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _views_common_FullWidthModal__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../views/common/FullWidthModal */ "./views/common/FullWidthModal.js");
/* harmony import */ var _views_HotelNavbar__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../views/HotelNavbar */ "./views/HotelNavbar.js");
/* harmony import */ var _views_HotelSpReqList__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../views/HotelSpReqList */ "./views/HotelSpReqList.js");
/* harmony import */ var _views_common_Gallery__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../views/common/Gallery */ "./views/common/Gallery.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../constants */ "./constants/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__);
/* module decorator */ module = __webpack_require__.hmd(module);









var _jsxFileName = "D:\\demo\\uth-next\\pages\\hotel\\[slug].js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,D_demo_uth_next_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,D_demo_uth_next_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,D_demo_uth_next_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,D_demo_uth_next_node_modules_next_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }


























var API = 'https://rzp_test_rnEH5I4NHuaGJx:SPmq6qKQELxxLlYTnP7Y5dyj@api.razorpay.com/v1/payments/'; //This gets called every time the page is called

var HotelDetailSlug = function HotelDetailSlug(_ref) {
  _s();

  var hotelDetail = _ref.hotelDetail,
      galleryImages = _ref.galleryImages,
      bannerImages = _ref.bannerImages,
      hotel_rooms = _ref.hotel_rooms;
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_10__.useRouter)();
  var slug = router.query.slug;
  console.log(hotelDetail);
  console.log(galleryImages);
  console.log(hotel_rooms);
  console.log(bannerImages);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)(HotelDetail, {
    hotelDetail: hotelDetail[0],
    hotel_url: slug,
    bannerImages: bannerImages,
    galleryImages: galleryImages,
    hotel_rooms: hotel_rooms
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 107,
    columnNumber: 10
  }, _this);
};

_s(HotelDetailSlug, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_10__.useRouter];
});

_c = HotelDetailSlug;

var HotelDetail = /*#__PURE__*/function (_Component) {
  (0,D_demo_uth_next_node_modules_next_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.default)(HotelDetail, _Component);

  var _super = _createSuper(HotelDetail);

  function HotelDetail(props) {
    var _this2;

    (0,D_demo_uth_next_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, HotelDetail);

    _this2 = _super.call(this, props);

    (0,D_demo_uth_next_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__.default)((0,D_demo_uth_next_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this2), "scrollToSection", function (section) {
      if (section !== '') {
        var element = document.getElementById(section);

        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest"
          });
        }
      }
    });

    (0,D_demo_uth_next_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__.default)((0,D_demo_uth_next_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this2), "setStartDate", function (date) {
      _this2.setState({
        startDate: date
      });
    });

    (0,D_demo_uth_next_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__.default)((0,D_demo_uth_next_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this2), "setEndDate", function (date) {
      _this2.setState({
        endDate: date
      });
    });

    (0,D_demo_uth_next_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__.default)((0,D_demo_uth_next_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this2), "handleChange", function (e) {
      console.log(e.target.value);

      _this2.setState((0,D_demo_uth_next_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__.default)({}, e.target.name, e.target.value));
    });

    (0,D_demo_uth_next_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__.default)((0,D_demo_uth_next_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this2), "searchRooms", function () {
      var MAX_CAPACITY_GENERAL = _this2.state.MAX_CAPACITY_GENERAL;
      var startDate = _this2.state.startDate;
      var endDate = _this2.state.startDate;
      var rooms = _this2.state.rooms;
      var adults = _this2.state.adults;
      var children = _this2.state.children;
      var invalidFields = [];

      if (startDate === '') {
        invalidFields.push('startDate');
      }

      if (endDate === '') {
        invalidFields.push('endDate');
      }

      if (rooms === '') {
        invalidFields.push('rooms');
      }

      if (adults === '') {
        invalidFields.push('adults');
      }

      var adultCount = parseInt(rooms) * parseInt(MAX_CAPACITY_GENERAL);

      if (parseInt(adults) > adultCount) {
        _this2.setState({
          MAX_CAPACITY_MSG: "Sorry. We are allowing a maximum of " + MAX_CAPACITY_GENERAL + " members in a room"
        });
      }

      if (invalidFields.length === 0) {
        var params = {
          startDate: _this2.state.startDate,
          endDate: _this2.state.endDate,
          rooms: _this2.state.rooms,
          adults: _this2.state.adults,
          children: _this2.state.children
        };

        _this2.setState({
          showError: false,
          initSearch: true,
          searchStep: 1,
          startDate: _this2.state.startDate,
          endDate: _this2.state.endDate,
          rooms: _this2.state.rooms,
          adults: _this2.state.adults,
          children: _this2.state.children,
          invalidFields: invalidFields
        });
      } else {
        _this2.setState({
          showError: true,
          startDate: _this2.state.startDate,
          endDate: _this2.state.endDate,
          rooms: _this2.state.rooms,
          adults: _this2.state.adults,
          children: _this2.state.children,
          invalidFields: invalidFields
        });
      }
    });

    (0,D_demo_uth_next_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__.default)((0,D_demo_uth_next_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this2), "resetSearch", function () {
      _this2.setState({
        showError: false,
        initSearch: false,
        searchStep: 0,
        startDate: _this2.state.today,
        endDate: _this2.state.tomorrow,
        rooms: '',
        adults: '',
        children: '',
        invalidFields: []
      });
    });

    (0,D_demo_uth_next_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__.default)((0,D_demo_uth_next_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this2), "backToDetail", function () {
      _this2.setState({
        initSearch: false
      });
    });

    (0,D_demo_uth_next_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__.default)((0,D_demo_uth_next_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this2), "backToCart", function () {
      _this2.setState({
        searchStep: 1
      });
    });

    (0,D_demo_uth_next_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__.default)((0,D_demo_uth_next_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this2), "selectRoom", function (room, type, e) {
      e.preventDefault();
      e.stopPropagation();
      var selectedRooms = _this2.state.selectedRooms;
      var selectedRoomIds = _this2.state.selectedRoomIds;
      var hotel_rooms = _this2.props.hotel_rooms;

      if (type === 'add' || type === 'choose') {
        console.log(selectedRoomIds);

        if (!selectedRoomIds.includes(room.roomid)) {
          selectedRoomIds.push(room.roomid);
          selectedRooms.push(room);
          console.log(room);
        }
      }

      if (type === 'remove') {
        if (_this2.state.searchStep === 2 && selectedRooms.length === 1) {
          _this2.setState({
            itemRemovalMessage: true
          });
        } else {
          if (selectedRoomIds.includes(room.roomid)) {
            var index = selectedRoomIds.indexOf(room.roomid);
            selectedRoomIds.splice(index, 1);
            selectedRooms.splice(index, 1);
            hotel_rooms = hotel_rooms.map(function (item) {
              if (item.roomid === room.roomid) {
                item.qty = 0;
              }

              return item;
            });
          }
        }
      }

      _this2.setState({
        selectedRoomIds: selectedRoomIds,
        selectedRooms: selectedRooms,
        hotel_rooms: hotel_rooms
      }, function () {
        if (type !== 'remove') {
          type === 'add' || type === 'choose' ? this.addQty(room) : this.subQty(room);
        }
      });
    });

    (0,D_demo_uth_next_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__.default)((0,D_demo_uth_next_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this2), "continueToSummary", function () {
      var adultCount = parseInt(_this2.state.adults);
      console.log(adultCount);
      var personOccupied = 0;
      var selectedRooms = _this2.state.selectedRooms;
      var totalRooms = 0;

      if (selectedRooms.length > 0) {
        for (var i = 0; i < selectedRooms.length; i++) {
          var qty = selectedRooms[i].qty;
          totalRooms += parseInt(qty);
          var occupancy = parseInt(selectedRooms[i].max_capacity_adult);
          var extra_occupancy = selectedRooms[i].extrabed === 'yes' ? 1 : 0;
          var total_occupancy = occupancy + extra_occupancy;
          personOccupied += parseInt(qty) * total_occupancy;
        }
      }

      if (selectedRooms.length === 0) {
        _this2.setState({
          cannotContinue: true,
          cannotContinueMessage: "Please select atleast a room to proceed"
        });
      } else if (adultCount > personOccupied) {
        _this2.setState({
          cannotContinue: true,
          cannotContinueMessage: "Sorry." + adultCount + " persons cannot be occupied in " + totalRooms + " rooms"
        });
      } else {
        if (_this2.state.selectedRooms.length > 0) {
          _this2.setState({
            searchStep: 2
          });
        }
      }
    });

    (0,D_demo_uth_next_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__.default)((0,D_demo_uth_next_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this2), "addQty", function (room) {
      var selectedRooms = _this2.state.selectedRooms;
      var selectedRoomIds = _this2.state.selectedRoomIds;
      var roomId = room.roomid;
      selectedRooms = selectedRooms.map(function (item) {
        if (item.roomid === roomId) {
          if (item.qty) {
            if (item.qty < item.roomcount) {
              item.qty = parseInt(item.qty) + 1;
            }
          } else {
            item.qty = 1;
          }
        }

        return item;
      });

      _this2.setState({
        selectedRooms: selectedRooms,
        selectedRoomIds: selectedRoomIds
      });
    });

    (0,D_demo_uth_next_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__.default)((0,D_demo_uth_next_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this2), "subQty", function (room) {
      console.log(room);
      var selectedRooms = _this2.state.selectedRooms;
      var selectedRoomIds = _this2.state.selectedRoomIds;
      var roomId = room.roomid;

      if (room.qty && room.qty === 1) {
        if (_this2.state.searchStep === 2 && selectedRooms.length === 1) {
          _this2.setState({
            itemRemovalMessage: true
          });
        } else {
          room.qty = 0;
          var index = selectedRoomIds.indexOf(room.roomid);
          selectedRoomIds.splice(index, 1);
          selectedRooms.splice(index, 1);
        }
      } else {
        selectedRooms = selectedRooms.map(function (item) {
          if (item.roomid === roomId) {
            item.qty = item.qty && item.qty > 0 ? parseInt(item.qty) - 1 : 0;
          }

          return item;
        });
      }

      _this2.setState({
        selectedRooms: selectedRooms,
        selectedRoomIds: selectedRoomIds
      });
    });

    (0,D_demo_uth_next_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__.default)((0,D_demo_uth_next_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this2), "changeQty", function (room, e) {
      var qty = e.target.value;
      var selectedRooms = _this2.state.selectedRooms;
      var selectedRoomIds = _this2.state.selectedRoomIds;
      var roomId = room.roomid;
      selectedRooms = selectedRooms.map(function (item) {
        if (item.roomid === roomId) {
          item.qty = item.qty && item.qty > 0 ? parseInt(item.qty) - 1 : 0;
        }

        return item;
      });

      _this2.selectRoom(room);
    });

    (0,D_demo_uth_next_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__.default)((0,D_demo_uth_next_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this2), "saveBooking", function (e, amount, principleAmount, discount, program_description, gst) {
      var firstname = _this2.state.firstname;
      var lastname = _this2.state.lastname;
      var address1 = _this2.state.address1;
      var address2 = _this2.state.address2;
      var city = _this2.state.city;
      var state = _this2.state.state;
      var country = _this2.state.country;
      var pincode = _this2.state.pincode;
      var mobile = _this2.state.mobile;
      var additionalphonenumber = _this2.state.additionalphonenumber;
      var email = _this2.state.email;
      var invalidFields = [];

      if (firstname === '') {
        invalidFields.push('firstname');
      }

      if (lastname === '') {
        invalidFields.push('lastname');
      }

      if (address1 === '') {
        invalidFields.push('address1');
      }

      if (address2 === '') {
        invalidFields.push('address2');
      }

      if (city === '') {
        invalidFields.push('city');
      }

      if (state === '') {
        invalidFields.push('state');
      }

      if (country === '') {
        invalidFields.push('country');
      }

      if (pincode === '') {
        invalidFields.push('pincode');
      }

      if (mobile === '') {
        invalidFields.push('mobile');
      }

      if (additionalphonenumber === '') {
        invalidFields.push('additionalphonenumber');
      }

      if (email === '') {
        invalidFields.push('email');
      }

      if (invalidFields.length === 0) {
        var selectedRooms = _this2.state.selectedRooms;
        var checkindate = moment__WEBPACK_IMPORTED_MODULE_24___default()(_this2.state.startDate).format('yyyy-MM-DD');
        var checkoutdate = moment__WEBPACK_IMPORTED_MODULE_24___default()(_this2.state.endDate).format('yyyy-MM-DD');
        var adults = _this2.state.adults || 0;
        var children = _this2.state.children || 0;
        var start = moment__WEBPACK_IMPORTED_MODULE_24___default()(checkindate, "YYYY-MM-DD");
        var end = moment__WEBPACK_IMPORTED_MODULE_24___default()(checkoutdate, "YYYY-MM-DD");
        var noOfDays = moment__WEBPACK_IMPORTED_MODULE_24___default().duration(end.diff(start)).asDays();
        var noOfrooms = _this2.state.rooms;
        var taxamount = gst;
        console.log(selectedRooms);
        var selectedSpReqs = _this2.state.selectedSpReqs;
        var bookedRooms = [];

        for (var i = 0; i < selectedRooms.length; i++) {
          var room = {
            "roomid": selectedRooms[i].roomid,
            "noofadults": selectedRooms[i].max_capacity_adult,
            "noofchilds": 0,
            "extrabed": selectedRooms[i].extrabedcount,
            "price": selectedRooms[i].room_price,
            "extrabedprice": 0,
            "taxamount": 0,
            "totalprice": parseFloat(selectedRooms[i].room_price) * noOfDays
          };
          bookedRooms.push(room);
        }

        var params = {
          "hotel_id": _this2.state.hotel_id,
          "checkindate": checkindate,
          "checkoutdate": checkoutdate,
          "noofadults": adults,
          "noofchilds": children,
          "noofrooms": noOfrooms,
          "price": principleAmount,
          "taxamount": taxamount,
          "totalprice": amount,
          "firstname": firstname,
          "lastname": lastname,
          "address1": address1,
          "address2": address2,
          "city": city,
          "state": state,
          "country": country,
          "pincode": pincode,
          "mobile": mobile,
          "email": email,
          "idproof": "test.pdf",
          "rooms": bookedRooms,
          "additionalphonenumber": mobile,
          "splrequest": selectedSpReqs.length > 0 ? JSON.stringify(selectedSpReqs) : ""
        };
        console.log(params);

        _this2.props.saveBooking(params);

        _this2.setState({
          invalidFields: [],
          totalAmount: amount,
          principleAmount: principleAmount,
          discount: discount,
          program_description: program_description,
          gst: gst,
          checkindate: checkindate,
          checkoutdate: checkoutdate
        });
      } else {
        _this2.setState({
          showProfileInfoError: true,
          invalidFields: invalidFields,
          totalAmount: amount,
          principleAmount: principleAmount,
          discount: discount,
          program_description: program_description,
          gst: gst
        });
      }
    });

    (0,D_demo_uth_next_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__.default)((0,D_demo_uth_next_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this2), "hideProfileInfoError", function () {
      _this2.setState({
        showProfileInfoError: false
      });
    });

    (0,D_demo_uth_next_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__.default)((0,D_demo_uth_next_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this2), "continueToPayment", function () {
      var that = (0,D_demo_uth_next_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this2);

      var options = {
        // key: 'rzp_live_uNQgz6rOGQ96qE',
        key: 'rzp_test_rnEH5I4NHuaGJx',
        amount: parseFloat(_this2.state.totalAmount) * 100,
        //  = INR 1
        name: 'UTH Booking',
        description: 'Please pay the booking charges here to confirm',
        image: 'https://uthdev.neverbeforeholidays.com/assets/images/uth-logo-black.png',
        // order_id: this.state.orderId,
        handler: function handler(response) {
          console.log(response);
          that.setState({
            PaymentId: response.razorpay_payment_id,
            totalAmount: that.state.totalAmount,
            date: moment__WEBPACK_IMPORTED_MODULE_24___default()(new Date()).format('DD MMM YYYY'),
            email: that.state.email,
            mobile: that.state.mobile
          }); //let PaymentUrl = `http://159.65.153.59/site/#/payment-success/`+this.props.bookingData.bookingId;

          var paymentId = response.razorpay_payment_id;
          var PaymentUrl = "https://uthdev.neverbeforeholidays.com/payment-success?rp_id=" + paymentId + "&ramt=" + that.state.totalAmount + "&mobile=" + that.state.mobile + "&email=" + that.state.email + "&method=Card payment&date=" + moment__WEBPACK_IMPORTED_MODULE_24___default()(that.state.today).format('DD MMM, YYYY');
          var params = {
            "_id": paymentId,
            "reference": 'UTH',
            "discount": that.state.discount,
            "gst": that.state.gst,
            "desc": '',
            "principal": that.state.principleAmount,
            "paymenturl": PaymentUrl,
            "prod": false
          }; //that.props.confirmBooking(params);

          var bookParams = {
            bookingId: that.props.bookingData.bookingId
          };
          that.props.confirmBooking(bookParams);
        },
        prefill: {
          name: 'UTH',
          contact: '',
          email: ''
        },
        notes: {
          address: 'UTH'
        },
        theme: {
          color: '#3fa9f5',
          hide_topbar: false
        }
      }; //console.log(options);

      var rzp1 = new window.Razorpay(options);
      rzp1.on('payment.failed', function (response) {// console.log(response.error.description);
      });
      rzp1.open();
    });

    (0,D_demo_uth_next_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__.default)((0,D_demo_uth_next_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this2), "hideError", function () {
      _this2.setState({
        showError: false
      });
    });

    (0,D_demo_uth_next_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__.default)((0,D_demo_uth_next_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this2), "hideItemRemovalMessage", function () {
      _this2.setState({
        itemRemovalMessage: false
      });
    });

    (0,D_demo_uth_next_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__.default)((0,D_demo_uth_next_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this2), "emptyCart", function () {
      var selectedRooms = _this2.state.selectedRooms;
      selectedRooms = selectedRooms.map(function (item) {
        item.qty = 0;
        return item;
      });

      _this2.setState({
        itemRemovalMessage: false,
        selectedRooms: [],
        selectedRoomIds: [],
        searchStep: 1
      });
    });

    (0,D_demo_uth_next_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__.default)((0,D_demo_uth_next_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this2), "hideCannotContinue", function () {
      _this2.setState({
        cannotContinue: false
      });
    });

    (0,D_demo_uth_next_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__.default)((0,D_demo_uth_next_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this2), "showFullDetail", function (id) {
      var hotel_rooms = _this2.props.hotel_rooms;
      var roomList = hotel_rooms.filter(function (item) {
        return item.roomid === id;
      });

      _this2.setState({
        showDetailStatus: true,
        roomId: id,
        roomDetail: roomList.length > 0 && roomList[0]
      });
    });

    (0,D_demo_uth_next_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__.default)((0,D_demo_uth_next_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this2), "hideFullDetail", function () {
      _this2.setState({
        showDetailStatus: false
      });
    });

    (0,D_demo_uth_next_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__.default)((0,D_demo_uth_next_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this2), "showSpecialRequests", function () {
      _this2.setState({
        showSpReqStat: true
      });
    });

    (0,D_demo_uth_next_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__.default)((0,D_demo_uth_next_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this2), "hideSpecialRequests", function () {
      _this2.setState({
        showSpReqStat: false
      });
    });

    (0,D_demo_uth_next_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__.default)((0,D_demo_uth_next_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this2), "handleSpSelection", function (e, sp) {
      var selectedSpReqIds = (0,D_demo_uth_next_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(_this2.state.selectedSpReqIds);

      var selectedSpReqs = (0,D_demo_uth_next_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(_this2.state.selectedSpReqs);

      if (e.target.checked) {
        selectedSpReqIds.push(sp.sp_id);
        selectedSpReqs.push(sp);
      } else {
        var index = selectedSpReqIds.indexOf(sp.sp_id);
        selectedSpReqIds.splice(index, 1);
        selectedSpReqs.splice(index, 1);
      }

      _this2.setState({
        selectedSpReqs: selectedSpReqs,
        selectedSpReqIds: selectedSpReqIds
      });
    });

    (0,D_demo_uth_next_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__.default)((0,D_demo_uth_next_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this2), "removeSp", function (e, sp_id) {
      var selectedSpReqIds = (0,D_demo_uth_next_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(_this2.state.selectedSpReqIds);

      var selectedSpReqs = (0,D_demo_uth_next_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(_this2.state.selectedSpReqs);

      var index = selectedSpReqIds.indexOf(sp_id);
      selectedSpReqIds.splice(index, 1);
      selectedSpReqs.splice(index, 1);

      _this2.setState({
        selectedSpReqs: selectedSpReqs,
        selectedSpReqIds: selectedSpReqIds
      });
    });

    (0,D_demo_uth_next_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__.default)((0,D_demo_uth_next_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this2), "hidePendingMessage", function () {
      _this2.setState({
        showPendingMessage: false
      });
    });

    (0,D_demo_uth_next_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__.default)((0,D_demo_uth_next_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this2), "toggleContent", function () {
      _this2.setState({
        expandContent: !_this2.state.expandContent
      });
    });

    var today = new Date();
    var tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    _this2.state = {
      today: today,
      tomorrow: tomorrow,
      startDate: today,
      endDate: tomorrow,
      checkindate: today,
      checkoutdate: tomorrow,
      rooms: '',
      adults: '',
      children: '',
      roomTypes: [],
      initSearch: false,
      searchStep: 1,
      selectedRooms: [],
      selectedRoomIds: [],
      hotel_rooms: [],
      invalidFields: [],
      showError: false,
      firstname: '',
      lastname: '',
      address1: '',
      address2: '',
      city: '',
      state: '',
      pincode: '',
      country: '',
      mobile: '',
      additionalphonenumber: '',
      email: '',
      showProfileInfoError: false,
      bookingId: '',
      totalAmount: 0,
      principleAmount: 0,
      discount: 0,
      program_description: '',
      gst: 0,
      MAX_CAPACITY_MSG: '',
      itemRemovalMessage: false,
      bannerImages: [],
      cannotContinueMessage: false,
      galleryImages: [],
      showDetailStatus: false,
      hotelPolicies: [],
      hotelHighlights: [],
      MAX_CAPACITY_GENERAL: 1,
      showSpecialRequests: false,
      spRequests: [],
      selectedSpReqs: [],
      selectedSpReqIds: [],
      showPendingMessage: false,
      expandContent: false
    };
    return _this2;
  }

  (0,D_demo_uth_next_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(HotelDetail, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.async = true;
      document.body.appendChild(script);
      this.setState({
        hotel_url: this.props.hotel_url
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      if (this.props.hotelDetail !== prevProps.hotelDetail) {
        this.setState({
          hotel_id: this.props.hotelDetail.hotel_id,
          hotelDetail: this.props.hotelDetail,
          hotel_rooms: this.props.hotel_rooms,
          galleryImages: this.props.galleryImages,
          MAX_CAPACITY_GENERAL: this.props.hotelDetail.max_occupancy,
          hotelHighlights: this.props.hotelDetail.hotelhighlights,
          hotelPolicies: this.props.hotelDetail.hotelpolicies,
          spRequests: this.props.hotelDetail.specialrequest
        }, function () {});
      } // if(this.props.facilityData.roomTypes !== prevProps.facilityData.roomTypes) {
      //     this.setState({
      //         roomTypes : this.props.facilityData.roomTypes
      //     })
      // }
      // if(this.props.bookingData.bookingId !== prevProps.bookingData.bookingId) {
      //
      //     this.setState({
      //         bookingId : this.props.bookingData.bookingId
      //     }, function (){
      //         this.continueToPayment()
      //     })
      // }
      // if(this.props.bookingData.bookingResult !== prevProps.bookingData.bookingResult) {
      //     let PaymentUrl = `https://uthdev.neverbeforeholidays.com/payment-success?rp_id=`+this.state.PaymentId+`&ramt=`+this.state.totalAmount+`&mobile=`+this.state.mobile+`&email=`+this.state.email+`&method=Card payment&date=`+moment(this.state.today).format('DD MMM, YYYY');
      //     window.location.href = PaymentUrl;
      // }
      // if(this.props.bannerImages !== prevProps.bannerImages) {
      //     this.setState({
      //         bannerImages : this.props.bannerImages
      //     })
      // }

    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      console.log(this.props.hotelDetail); //let hotelDetail = this.props.hotelDetail;

      var hotelDetail = this.props.hotelDetail;
      var bannerImages = this.props.bannerImages || [];
      var galleryImages = this.props.galleryImages || [];
      var startDate = this.state.startDate;
      var endDate = this.state.endDate;
      var hotel_rooms = this.props.hotel_rooms;
      var general_facilities = hotelDetail ? hotelDetail.hotel_facilities : [];
      var hotelfacilities = hotelDetail ? hotelDetail.hotelfacilities : [];
      var roomTypes = this.state.roomTypes || [];
      var selectedRooms = this.state.selectedRooms || [];
      var spRequests = this.state.spRequests || [];
      var selectedSpReqIds = this.state.selectedSpReqIds || [];
      var selectedSpReqs = this.state.selectedSpReqs || [];
      var total_cost = 0;
      var total_gst = 0;

      if (selectedRooms.length > 0) {
        for (var i = 0; i < selectedRooms.length; i++) {
          total_cost += parseFloat(selectedRooms[i].room_price) * parseInt(selectedRooms[i].qty);
        }
      }

      if (selectedSpReqs.length > 0) {
        for (var i = 0; i < selectedSpReqs.length; i++) {
          if (selectedSpReqs[i].category === 'payable') {
            total_cost += parseFloat(selectedSpReqs[i].rate);
          }
        }
      }

      total_gst = total_cost * 10 / 100;
      var grand_total = total_cost + total_gst; //grand_total = grand_total>0? grand_total.toFixed(2):'';

      var razorGrandTotal = grand_total * 100;
      var invalidFields = this.state.invalidFields || [];
      console.log(invalidFields);
      var hotelHighlights = hotelDetail ? hotelDetail.hotelhighlights : [];
      var hotelPolicies = this.state.hotelPolicies || [];
      console.log(selectedSpReqs);
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_9___default()), {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("meta", {
            charSet: "UTF-8"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 829,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("title", {
            children: hotelDetail ? hotelDetail.hotel_name : 'UTH'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 830,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("meta", {
            name: "description",
            content: hotelDetail ? hotelDetail.address + "  " + hotelDetail.phoneno + " " + hotelDetail.mobileno + hotelDetail.hotel_desc : 'UTH Group of Hotels'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 831,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("meta", {
            name: "keywords",
            content: hotelDetail ? (hotelDetail.address, hotelDetail.phoneno, hotelDetail.mobileno, hotelDetail.hotel_desc) : 'best hotels of kochi, best hotels'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 833,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("meta", {
            name: "author",
            content: "UTH Group Of Hotels"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 835,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("meta", {
            name: "viewport",
            content: "width=device-width, initial-scale=1.0"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 836,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("meta", {
            property: "og:type",
            content: "website"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 837,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("meta", {
            property: "og:title",
            content: hotelDetail ? hotelDetail.hotel_name : 'UTH'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 838,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("meta", {
            property: "og:description",
            content: "The tourism is in full swing for the God\u2019s own country and the best hotels in Kochi are also ready to welcome the guests. The Sugar hotel in Kochi is a prestigious one in this list whose location itself is significant.UTH is the leading brand in the hotel business that is running many hotels and resorts all over the country and out of the country too such as Sri Lanka, Dubai and Maldives."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 839,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("meta", {
            property: "og:url",
            content: "%PUBLIC_URL%"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 840,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("meta", {
            property: "og:site_name",
            content: "UTH | Group of Hotels"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 841,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("meta", {
            property: "og:image",
            content: "http://159.65.153.59/site/assets/images/fav/og-image.jpg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 842,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("meta", {
            name: "twitter:card",
            content: "http://159.65.153.59/site/assets/images/fav/og-image.jpg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 843,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("meta", {
            name: "twitter:title",
            content: "UTH | Group of Hotels"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 844,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 828,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("main", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("div", {
            className: "wrapper",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("div", {
              className: "inner-page",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)(_views_HotelNavbar__WEBPACK_IMPORTED_MODULE_26__.default, {
                scrollToSection: this.scrollToSection
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 851,
                columnNumber: 21
              }, this), hotelDetail && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.Fragment, {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("section", {
                  className: "details-bannner",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("div", {
                    className: "carousel-container",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("div", {
                      className: "container",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("div", {
                        className: "carousel-text",
                        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("h5", {
                          children: hotelDetail.hotel_name
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 859,
                          columnNumber: 41
                        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("p", {
                          className: "location",
                          children: hotelDetail.address
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 860,
                          columnNumber: 41
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 858,
                        columnNumber: 37
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 857,
                      columnNumber: 33
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 856,
                    columnNumber: 29
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)(_views_common_hotelSlider__WEBPACK_IMPORTED_MODULE_12__.default, {
                    images: bannerImages
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 865,
                    columnNumber: 29
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 854,
                  columnNumber: 25
                }, this), this.state.searchStep !== 2 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("section", {
                  className: "booking-container sticky",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("div", {
                    className: "container",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("div", {
                      className: "booking-panel",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("div", {
                        className: "booking-panel-left",
                        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("div", {
                          className: "booking-options",
                          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("div", {
                            className: "date-picker-panel",
                            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)(react_nice_dates__WEBPACK_IMPORTED_MODULE_16__.DateRangePicker, {
                              startDate: startDate,
                              endDate: endDate,
                              onStartDateChange: this.setStartDate,
                              onEndDateChange: this.setEndDate,
                              minimumDate: new Date(),
                              minimumLength: 1,
                              format: "dd/MM/yyyy",
                              locale: date_fns_locale__WEBPACK_IMPORTED_MODULE_31__.enGB,
                              children: function children(_ref2) {
                                var startDateInputProps = _ref2.startDateInputProps,
                                    endDateInputProps = _ref2.endDateInputProps,
                                    focus = _ref2.focus;
                                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("div", {
                                  className: "date-range",
                                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("input", _objectSpread(_objectSpread({
                                    className: 'input' + (focus === react_nice_dates__WEBPACK_IMPORTED_MODULE_16__.START_DATE ? ' -focused' : '')
                                  }, startDateInputProps), {}, {
                                    placeholder: "Start date"
                                  }), void 0, false, {
                                    fileName: _jsxFileName,
                                    lineNumber: 888,
                                    columnNumber: 61
                                  }, _this3), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("span", {
                                    className: "date-range_arrow"
                                  }, void 0, false, {
                                    fileName: _jsxFileName,
                                    lineNumber: 893,
                                    columnNumber: 61
                                  }, _this3), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("input", _objectSpread(_objectSpread({
                                    className: 'input' + (focus === react_nice_dates__WEBPACK_IMPORTED_MODULE_16__.END_DATE ? ' -focused' : '')
                                  }, endDateInputProps), {}, {
                                    placeholder: "End date"
                                  }), void 0, false, {
                                    fileName: _jsxFileName,
                                    lineNumber: 894,
                                    columnNumber: 61
                                  }, _this3)]
                                }, void 0, true, {
                                  fileName: _jsxFileName,
                                  lineNumber: 887,
                                  columnNumber: 57
                                }, _this3);
                              }
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 876,
                              columnNumber: 49
                            }, this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 873,
                            columnNumber: 45
                          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("div", {
                            className: "select-panel",
                            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("div", {
                              className: "select-box",
                              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("select", {
                                name: "rooms",
                                value: this.state.rooms,
                                onChange: this.handleChange,
                                className: "".concat(invalidFields.includes('rooms') ? 'error-field' : ''),
                                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("option", {
                                  value: "",
                                  children: "Rooms"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 913,
                                  columnNumber: 57
                                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("option", {
                                  value: "1",
                                  children: "1"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 914,
                                  columnNumber: 57
                                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("option", {
                                  value: "2",
                                  children: "2"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 915,
                                  columnNumber: 57
                                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("option", {
                                  value: "3",
                                  children: "3"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 916,
                                  columnNumber: 57
                                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("option", {
                                  value: "4",
                                  children: "4"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 917,
                                  columnNumber: 57
                                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("option", {
                                  value: "5",
                                  children: "5"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 918,
                                  columnNumber: 57
                                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("option", {
                                  value: "6",
                                  children: "6"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 919,
                                  columnNumber: 57
                                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("option", {
                                  value: "7",
                                  children: "7"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 920,
                                  columnNumber: 57
                                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("option", {
                                  value: "8",
                                  children: "8"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 921,
                                  columnNumber: 57
                                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("option", {
                                  value: "9",
                                  children: "9+"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 922,
                                  columnNumber: 57
                                }, this)]
                              }, void 0, true, {
                                fileName: _jsxFileName,
                                lineNumber: 910,
                                columnNumber: 53
                              }, this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 909,
                              columnNumber: 49
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("div", {
                              className: "select-box",
                              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("select", {
                                name: "adults",
                                value: this.state.adults,
                                onChange: this.handleChange,
                                className: "".concat(invalidFields.includes('adults') ? 'error-field' : ''),
                                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("option", {
                                  value: "",
                                  children: "Adults"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 929,
                                  columnNumber: 57
                                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("option", {
                                  value: "1",
                                  children: "1"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 930,
                                  columnNumber: 57
                                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("option", {
                                  value: "2",
                                  children: "2"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 931,
                                  columnNumber: 57
                                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("option", {
                                  value: "3",
                                  children: "3"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 932,
                                  columnNumber: 57
                                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("option", {
                                  value: "4",
                                  children: "4"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 933,
                                  columnNumber: 57
                                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("option", {
                                  value: "5",
                                  children: "5"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 934,
                                  columnNumber: 57
                                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("option", {
                                  value: "6",
                                  children: "6"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 935,
                                  columnNumber: 57
                                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("option", {
                                  value: "7",
                                  children: "7"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 936,
                                  columnNumber: 57
                                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("option", {
                                  value: "8",
                                  children: "8"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 937,
                                  columnNumber: 57
                                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("option", {
                                  value: "9",
                                  children: "9+"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 938,
                                  columnNumber: 57
                                }, this)]
                              }, void 0, true, {
                                fileName: _jsxFileName,
                                lineNumber: 926,
                                columnNumber: 53
                              }, this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 925,
                              columnNumber: 49
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("div", {
                              className: "select-box",
                              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("select", {
                                name: "children",
                                value: this.state.children,
                                onChange: this.handleChange,
                                className: "".concat(invalidFields.includes('children') ? 'error-field' : ''),
                                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("option", {
                                  value: "",
                                  children: "Children"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 945,
                                  columnNumber: 57
                                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("option", {
                                  value: "0",
                                  children: "0"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 946,
                                  columnNumber: 57
                                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("option", {
                                  value: "1",
                                  children: "1"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 947,
                                  columnNumber: 57
                                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("option", {
                                  value: "2",
                                  children: "2"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 948,
                                  columnNumber: 57
                                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("option", {
                                  value: "3",
                                  children: "3"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 949,
                                  columnNumber: 57
                                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("option", {
                                  value: "4",
                                  children: "4"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 950,
                                  columnNumber: 57
                                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("option", {
                                  value: "5",
                                  children: "5"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 951,
                                  columnNumber: 57
                                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("option", {
                                  value: "6",
                                  children: "6"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 952,
                                  columnNumber: 57
                                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("option", {
                                  value: "7",
                                  children: "7"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 953,
                                  columnNumber: 57
                                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("option", {
                                  value: "8",
                                  children: "8"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 954,
                                  columnNumber: 57
                                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("option", {
                                  value: "9",
                                  children: "9+"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 955,
                                  columnNumber: 57
                                }, this)]
                              }, void 0, true, {
                                fileName: _jsxFileName,
                                lineNumber: 942,
                                columnNumber: 53
                              }, this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 941,
                              columnNumber: 49
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 908,
                            columnNumber: 45
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 872,
                          columnNumber: 41
                        }, this), this.state.MAX_CAPACITY_MSG !== '' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("div", {
                          className: "error-fld",
                          children: this.state.MAX_CAPACITY_MSG
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 963,
                          columnNumber: 41
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 871,
                        columnNumber: 37
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("div", {
                        className: "booking-panel-right",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("div", {
                          className: "booking-button-block",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("button", {
                            className: "general-btn",
                            onClick: function onClick() {
                              return _this3.searchRooms();
                            },
                            children: "Book Now"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 971,
                            columnNumber: 45
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 970,
                          columnNumber: 41
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 968,
                        columnNumber: 37
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 870,
                      columnNumber: 33
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 869,
                    columnNumber: 29
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 868,
                  columnNumber: 25
                }, this), !this.state.initSearch && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("div", {
                  className: "room-section facilities",
                  id: "hotel-overview",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("div", {
                    className: "container",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("div", {
                      className: "section-header",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("h5", {
                        children: "Overview"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 983,
                        columnNumber: 37
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 982,
                      columnNumber: 33
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("div", {
                      className: "section-content",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("ul", {
                        className: "general-info",
                        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("li", {
                          className: "address-sm-ico",
                          children: hotelDetail.address
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 987,
                          columnNumber: 41
                        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("li", {
                          className: "phone-sm-ico",
                          children: [hotelDetail.phoneno, " , ", hotelDetail.mobileno]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 988,
                          columnNumber: 41
                        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("li", {
                          className: "mail-sm-ico",
                          children: hotelDetail.email
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 989,
                          columnNumber: 41
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 986,
                        columnNumber: 37
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("div", {
                        className: "extra-content ".concat(this.state.expandContent ? ' active' : ''),
                        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("div", {
                          className: "overview-description",
                          dangerouslySetInnerHTML: {
                            __html: hotelDetail.hotel_desc
                          }
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 994,
                          columnNumber: 41
                        }, this), hotelHighlights.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.Fragment, {
                          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("div", {
                            className: "sub-header",
                            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("h5", {
                              children: "Highlights"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 999,
                              columnNumber: 49
                            }, this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 998,
                            columnNumber: 45
                          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("ul", {
                            className: "highlight-tab",
                            children: hotelHighlights.map(function (hl) {
                              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("li", {
                                children: hl.highlights
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 1003,
                                columnNumber: 53
                              }, _this3);
                            })
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 1001,
                            columnNumber: 45
                          }, this)]
                        }, void 0, true), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("div", {
                          className: "policy-box",
                          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("div", {
                            "class": "sub-header",
                            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("h5", {
                              children: "Hotel Policies"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1012,
                              columnNumber: 49
                            }, this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 1011,
                            columnNumber: 45
                          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("p", {
                            children: ["Check In Time: ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("span", {
                              className: "font-bold",
                              children: hotelDetail ? hotelDetail.checkin : ''
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1014,
                              columnNumber: 63
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 1014,
                            columnNumber: 45
                          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("p", {
                            children: ["Check Out Time: ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("span", {
                              className: "font-bold",
                              children: hotelDetail ? hotelDetail.checkout : ''
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1015,
                              columnNumber: 64
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 1015,
                            columnNumber: 45
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 1010,
                          columnNumber: 41
                        }, this), hotelPolicies.map(function (hp) {
                          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("div", {
                            className: "policy-box indent",
                            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("div", {
                              className: "sub-header",
                              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("h5", {
                                children: hp.category
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 1021,
                                columnNumber: 53
                              }, _this3)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1020,
                              columnNumber: 49
                            }, _this3), hp.policy.map(function (pol) {
                              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("p", {
                                children: pol.policy
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 1024,
                                columnNumber: 53
                              }, _this3);
                            })]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 1019,
                            columnNumber: 45
                          }, _this3);
                        })]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 992,
                        columnNumber: 37
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("nav", {
                        className: "content-hide",
                        onClick: function onClick() {
                          return _this3.toggleContent();
                        },
                        children: ["Show ", this.state.expandContent ? 'less' : 'more']
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 1031,
                        columnNumber: 37
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 985,
                      columnNumber: 33
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 981,
                    columnNumber: 29
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 980,
                  columnNumber: 25
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("section", {
                  className: "room-section",
                  id: "hotel-rooms",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("div", {
                    className: "container",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("div", {
                      className: "section-header",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("h5", {
                        children: this.state.searchStep === 2 ? 'Booking Details' : 'Rooms'
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 1041,
                        columnNumber: 37
                      }, this), this.state.initSearch && this.state.searchStep === 1 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("button", {
                        className: "text-link back",
                        onClick: function onClick() {
                          return _this3.backToDetail();
                        },
                        children: "Back"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 1046,
                        columnNumber: 37
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 1040,
                      columnNumber: 33
                    }, this), this.state.initSearch && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("div", {
                      className: "available-rooms",
                      children: [this.state.searchStep === 1 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.Fragment, {
                        children: [hotel_rooms.length === 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("div", {
                          className: "no-result",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("div", {
                            "class": "coming-soon-wrapper",
                            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("h1", {
                              children: "No Hotels Found"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1061,
                              columnNumber: 49
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("p", {
                              children: "Search Again for right place."
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1062,
                              columnNumber: 49
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 1060,
                            columnNumber: 45
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 1059,
                          columnNumber: 41
                        }, this), hotel_rooms.map(function (room) {
                          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)(_views_RoomSearchBlock__WEBPACK_IMPORTED_MODULE_20__.default, {
                            item: room,
                            selectRoom: _this3.selectRoom,
                            selectedRooms: _this3.state.selectedRooms,
                            selectedRoomIds: _this3.state.selectedRoomIds,
                            changeQty: _this3.changeQty,
                            showFullDetail: _this3.showFullDetail
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 1067,
                            columnNumber: 45
                          }, _this3);
                        }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("div", {
                          className: "room-book-submit",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("button", {
                            className: "general-btn",
                            onClick: function onClick() {
                              return _this3.continueToSummary();
                            },
                            children: "Continue"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 1076,
                            columnNumber: 45
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 1074,
                          columnNumber: 41
                        }, this)]
                      }, void 0, true), this.state.searchStep === 2 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.Fragment, {
                        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("div", {
                          className: "summary-table",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("table", {
                            className: "table",
                            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("thead", {
                              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("tr", {
                                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("th", {
                                  children: "Rooms"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 1089,
                                  columnNumber: 53
                                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("th", {
                                  children: "Qty"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 1090,
                                  columnNumber: 53
                                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("th", {
                                  children: "Price"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 1091,
                                  columnNumber: 53
                                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("th", {
                                  children: "Total Price"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 1092,
                                  columnNumber: 53
                                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("th", {}, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 1093,
                                  columnNumber: 53
                                }, this)]
                              }, void 0, true, {
                                fileName: _jsxFileName,
                                lineNumber: 1088,
                                columnNumber: 49
                              }, this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1087,
                              columnNumber: 49
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("tbody", {
                              children: [selectedRooms.map(function (room) {
                                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)(_views_SummaryItem__WEBPACK_IMPORTED_MODULE_22__.default, {
                                  item: room,
                                  selectRoom: _this3.selectRoom,
                                  selectedRooms: _this3.state.selectedRooms,
                                  selectedRoomIds: _this3.state.selectedRoomIds,
                                  changeQty: _this3.changeQty
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 1098,
                                  columnNumber: 53
                                }, _this3);
                              }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("tr", {
                                className: "special-service",
                                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("td", {
                                  colspan: "5",
                                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("nav", {
                                    onClick: function onClick() {
                                      return _this3.showSpecialRequests();
                                    },
                                    className: "font-bold",
                                    children: "Add Special Requests +"
                                  }, void 0, false, {
                                    fileName: _jsxFileName,
                                    lineNumber: 1107,
                                    columnNumber: 57
                                  }, this)
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 1106,
                                  columnNumber: 53
                                }, this)
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 1105,
                                columnNumber: 49
                              }, this), selectedSpReqs.length > 0 && selectedSpReqs.filter(function (sp) {
                                return sp.category === 'payable';
                              }).map(function (sp) {
                                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("tr", {
                                  className: "special-service",
                                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("td", {
                                    colSpan: "3",
                                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("span", {
                                      children: sp.title
                                    }, void 0, false, {
                                      fileName: _jsxFileName,
                                      lineNumber: 1115,
                                      columnNumber: 61
                                    }, _this3)
                                  }, void 0, false, {
                                    fileName: _jsxFileName,
                                    lineNumber: 1114,
                                    columnNumber: 57
                                  }, _this3), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("td", {
                                    className: "font-bold",
                                    children: ["\u20B9 ", sp.rate]
                                  }, void 0, true, {
                                    fileName: _jsxFileName,
                                    lineNumber: 1117,
                                    columnNumber: 57
                                  }, _this3), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("td", {
                                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("button", {
                                      className: "delete-item",
                                      onClick: function onClick(e) {
                                        return _this3.removeSp(e, sp.sp_id);
                                      }
                                    }, void 0, false, {
                                      fileName: _jsxFileName,
                                      lineNumber: 1119,
                                      columnNumber: 61
                                    }, _this3)
                                  }, void 0, false, {
                                    fileName: _jsxFileName,
                                    lineNumber: 1118,
                                    columnNumber: 57
                                  }, _this3)]
                                }, void 0, true, {
                                  fileName: _jsxFileName,
                                  lineNumber: 1113,
                                  columnNumber: 53
                                }, _this3);
                              }), selectedSpReqs.length > 0 && selectedSpReqs.filter(function (sp) {
                                return sp.category === 'non payable';
                              }).map(function (sp) {
                                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("tr", {
                                  className: "special-service",
                                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("td", {
                                    colSpan: "3",
                                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("span", {
                                      children: sp.title
                                    }, void 0, false, {
                                      fileName: _jsxFileName,
                                      lineNumber: 1127,
                                      columnNumber: 61
                                    }, _this3)
                                  }, void 0, false, {
                                    fileName: _jsxFileName,
                                    lineNumber: 1126,
                                    columnNumber: 57
                                  }, _this3), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("td", {
                                    className: "font-bold",
                                    children: "\u20B9 0"
                                  }, void 0, false, {
                                    fileName: _jsxFileName,
                                    lineNumber: 1129,
                                    columnNumber: 57
                                  }, _this3), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("td", {
                                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("button", {
                                      className: "delete-item",
                                      onClick: function onClick(e) {
                                        return _this3.removeSp(e, sp.sp_id);
                                      }
                                    }, void 0, false, {
                                      fileName: _jsxFileName,
                                      lineNumber: 1131,
                                      columnNumber: 61
                                    }, _this3)
                                  }, void 0, false, {
                                    fileName: _jsxFileName,
                                    lineNumber: 1130,
                                    columnNumber: 57
                                  }, _this3)]
                                }, void 0, true, {
                                  fileName: _jsxFileName,
                                  lineNumber: 1125,
                                  columnNumber: 53
                                }, _this3);
                              }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("tr", {
                                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("td", {}, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 1137,
                                  columnNumber: 53
                                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("td", {}, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 1140,
                                  columnNumber: 53
                                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("td", {
                                  className: "font-bold",
                                  children: "TOTAL"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 1141,
                                  columnNumber: 53
                                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("td", {
                                  className: "font-bold",
                                  children: ["\u20B9 ", total_cost.toFixed(2)]
                                }, void 0, true, {
                                  fileName: _jsxFileName,
                                  lineNumber: 1142,
                                  columnNumber: 53
                                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("td", {}, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 1143,
                                  columnNumber: 53
                                }, this)]
                              }, void 0, true, {
                                fileName: _jsxFileName,
                                lineNumber: 1136,
                                columnNumber: 49
                              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("tr", {
                                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("td", {}, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 1146,
                                  columnNumber: 53
                                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("td", {}, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 1149,
                                  columnNumber: 53
                                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("td", {
                                  className: "font-bold",
                                  children: "GST 10.00%"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 1150,
                                  columnNumber: 53
                                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("td", {
                                  className: "font-bold",
                                  children: ["\u20B9 ", total_gst.toFixed(2)]
                                }, void 0, true, {
                                  fileName: _jsxFileName,
                                  lineNumber: 1151,
                                  columnNumber: 53
                                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("td", {}, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 1152,
                                  columnNumber: 53
                                }, this)]
                              }, void 0, true, {
                                fileName: _jsxFileName,
                                lineNumber: 1145,
                                columnNumber: 49
                              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("tr", {
                                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("td", {}, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 1156,
                                  columnNumber: 53
                                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("td", {}, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 1159,
                                  columnNumber: 53
                                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("td", {
                                  className: "font-bold",
                                  children: "GRAND TOTAL"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 1160,
                                  columnNumber: 53
                                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("td", {
                                  className: "font-bold",
                                  children: ["\u20B9 ", grand_total.toFixed(2)]
                                }, void 0, true, {
                                  fileName: _jsxFileName,
                                  lineNumber: 1161,
                                  columnNumber: 53
                                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("td", {}, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 1162,
                                  columnNumber: 53
                                }, this)]
                              }, void 0, true, {
                                fileName: _jsxFileName,
                                lineNumber: 1155,
                                columnNumber: 49
                              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("tr", {
                                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("td", {
                                  colSpan: "5",
                                  children: ["Check-in & Check-out: ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("span", {
                                    className: "font-bold",
                                    children: [moment__WEBPACK_IMPORTED_MODULE_24___default()(this.state.checkindate).format('DD MMM YYYY'), " - ", moment__WEBPACK_IMPORTED_MODULE_24___default()(this.state.checkoutdate).format('DD MMM YYYY')]
                                  }, void 0, true, {
                                    fileName: _jsxFileName,
                                    lineNumber: 1165,
                                    columnNumber: 91
                                  }, this)]
                                }, void 0, true, {
                                  fileName: _jsxFileName,
                                  lineNumber: 1165,
                                  columnNumber: 53
                                }, this)
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 1164,
                                columnNumber: 49
                              }, this)]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 1096,
                              columnNumber: 49
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 1086,
                            columnNumber: 45
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 1085,
                          columnNumber: 41
                        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("div", {
                          "class": "section-header",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("h5", {
                            children: "Personal Details"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 1174,
                            columnNumber: 45
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 1173,
                          columnNumber: 41
                        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("form", {
                          className: "form-container",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("div", {
                            className: "row",
                            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("div", {
                              className: "col-md-6",
                              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("div", {
                                className: "input-box",
                                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("label", {
                                  children: "First Name"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 1181,
                                  columnNumber: 57
                                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("input", {
                                  type: "text",
                                  name: "firstname",
                                  onChange: this.handleChange,
                                  value: this.state.firstname,
                                  className: "input-field ".concat(invalidFields.includes('firstname') ? 'error-field' : '')
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 1182,
                                  columnNumber: 57
                                }, this)]
                              }, void 0, true, {
                                fileName: _jsxFileName,
                                lineNumber: 1180,
                                columnNumber: 53
                              }, this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1179,
                              columnNumber: 49
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("div", {
                              className: "col-md-6",
                              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("div", {
                                className: "input-box",
                                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("label", {
                                  children: "Last Name"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 1189,
                                  columnNumber: 57
                                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("input", {
                                  type: "text",
                                  name: "lastname",
                                  onChange: this.handleChange,
                                  value: this.state.lastname,
                                  className: "input-field ".concat(invalidFields.includes('lastname') ? 'error-field' : '')
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 1190,
                                  columnNumber: 57
                                }, this)]
                              }, void 0, true, {
                                fileName: _jsxFileName,
                                lineNumber: 1188,
                                columnNumber: 53
                              }, this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1187,
                              columnNumber: 49
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("div", {
                              className: "col-md-6",
                              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("div", {
                                className: "input-box",
                                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("label", {
                                  children: "Address 1"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 1197,
                                  columnNumber: 57
                                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("input", {
                                  type: "text",
                                  name: "address1",
                                  onChange: this.handleChange,
                                  value: this.state.address1,
                                  className: "input-field ".concat(invalidFields.includes('address1') ? 'error-field' : '')
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 1198,
                                  columnNumber: 57
                                }, this)]
                              }, void 0, true, {
                                fileName: _jsxFileName,
                                lineNumber: 1196,
                                columnNumber: 53
                              }, this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1195,
                              columnNumber: 49
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("div", {
                              className: "col-md-6",
                              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("div", {
                                className: "input-box",
                                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("label", {
                                  children: "Address 2"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 1205,
                                  columnNumber: 57
                                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("input", {
                                  type: "text",
                                  name: "address2",
                                  onChange: this.handleChange,
                                  value: this.state.address2,
                                  className: "input-field ".concat(invalidFields.includes('address2') ? 'error-field' : '')
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 1206,
                                  columnNumber: 57
                                }, this)]
                              }, void 0, true, {
                                fileName: _jsxFileName,
                                lineNumber: 1204,
                                columnNumber: 53
                              }, this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1203,
                              columnNumber: 49
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("div", {
                              className: "col-md-3",
                              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("div", {
                                className: "input-box",
                                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("label", {
                                  children: "City"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 1213,
                                  columnNumber: 57
                                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("input", {
                                  type: "text",
                                  name: "city",
                                  onChange: this.handleChange,
                                  value: this.state.city,
                                  className: "input-field ".concat(invalidFields.includes('city') ? 'error-field' : '')
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 1214,
                                  columnNumber: 57
                                }, this)]
                              }, void 0, true, {
                                fileName: _jsxFileName,
                                lineNumber: 1212,
                                columnNumber: 53
                              }, this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1211,
                              columnNumber: 49
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("div", {
                              className: "col-md-3",
                              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("div", {
                                className: "input-box",
                                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("label", {
                                  children: "State"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 1221,
                                  columnNumber: 57
                                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("input", {
                                  type: "text",
                                  name: "state",
                                  onChange: this.handleChange,
                                  value: this.state.state,
                                  className: "input-field ".concat(invalidFields.includes('state') ? 'error-field' : '')
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 1222,
                                  columnNumber: 57
                                }, this)]
                              }, void 0, true, {
                                fileName: _jsxFileName,
                                lineNumber: 1220,
                                columnNumber: 53
                              }, this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1219,
                              columnNumber: 49
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("div", {
                              className: "col-md-3",
                              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("div", {
                                className: "input-box",
                                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("label", {
                                  children: "Country"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 1229,
                                  columnNumber: 57
                                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("input", {
                                  type: "text",
                                  name: "country",
                                  onChange: this.handleChange,
                                  value: this.state.country,
                                  className: "input-field ".concat(invalidFields.includes('country') ? 'error-field' : '')
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 1230,
                                  columnNumber: 57
                                }, this)]
                              }, void 0, true, {
                                fileName: _jsxFileName,
                                lineNumber: 1228,
                                columnNumber: 53
                              }, this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1227,
                              columnNumber: 49
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("div", {
                              className: "col-md-3",
                              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("div", {
                                className: "input-box",
                                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("label", {
                                  children: "Pincode"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 1237,
                                  columnNumber: 57
                                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("input", {
                                  type: "text",
                                  name: "pincode",
                                  onChange: this.handleChange,
                                  value: this.state.pincode,
                                  className: "input-field ".concat(invalidFields.includes('pincode') ? 'error-field' : '')
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 1238,
                                  columnNumber: 57
                                }, this)]
                              }, void 0, true, {
                                fileName: _jsxFileName,
                                lineNumber: 1236,
                                columnNumber: 53
                              }, this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1235,
                              columnNumber: 49
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("div", {
                              className: "col-md-4",
                              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("div", {
                                className: "input-box",
                                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("label", {
                                  children: "Mobile"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 1245,
                                  columnNumber: 57
                                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("input", {
                                  type: "number",
                                  className: "input-field ".concat(invalidFields.includes('mobile') ? 'error-field' : ''),
                                  name: "mobile",
                                  onChange: this.handleChange,
                                  value: this.state.mobile
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 1246,
                                  columnNumber: 57
                                }, this)]
                              }, void 0, true, {
                                fileName: _jsxFileName,
                                lineNumber: 1244,
                                columnNumber: 53
                              }, this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1243,
                              columnNumber: 49
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("div", {
                              className: "col-md-4",
                              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("div", {
                                className: "input-box",
                                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("label", {
                                  children: "Additional Phone"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 1254,
                                  columnNumber: 57
                                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("input", {
                                  type: "number",
                                  className: "input-field ".concat(invalidFields.includes('additionalphonenumber') ? 'error-field' : ''),
                                  name: "additionalphonenumber",
                                  onChange: this.handleChange,
                                  value: this.state.additionalphonenumber
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 1255,
                                  columnNumber: 57
                                }, this)]
                              }, void 0, true, {
                                fileName: _jsxFileName,
                                lineNumber: 1253,
                                columnNumber: 53
                              }, this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1252,
                              columnNumber: 49
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("div", {
                              className: "col-md-4",
                              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("div", {
                                className: "input-box",
                                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("label", {
                                  children: "Email"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 1263,
                                  columnNumber: 57
                                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("input", {
                                  type: "email",
                                  className: "input-field ".concat(invalidFields.includes('email') ? 'error-field' : ''),
                                  name: "email",
                                  onChange: this.handleChange,
                                  value: this.state.email
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 1264,
                                  columnNumber: 57
                                }, this)]
                              }, void 0, true, {
                                fileName: _jsxFileName,
                                lineNumber: 1262,
                                columnNumber: 53
                              }, this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1261,
                              columnNumber: 49
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 1178,
                            columnNumber: 45
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 1177,
                          columnNumber: 41
                        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("div", {
                          className: "payment-wrap",
                          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("button", {
                            className: "general-btn grey",
                            onClick: function onClick() {
                              return _this3.backToCart();
                            },
                            children: "Back"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 1274,
                            columnNumber: 45
                          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("button", {
                            className: "general-btn",
                            onClick: function onClick(e) {
                              return _this3.saveBooking(e, grand_total, total_cost, 0.00, '', total_gst);
                            },
                            children: "Continue To Payment"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 1275,
                            columnNumber: 45
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 1273,
                          columnNumber: 41
                        }, this)]
                      }, void 0, true)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 1054,
                      columnNumber: 33
                    }, this), !this.state.initSearch && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("div", {
                      className: "room-container",
                      children: [hotel_rooms.length === 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("div", {
                        className: "no-result",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("p", {
                          children: "Rooms will be added soon"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 1290,
                          columnNumber: 41
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 1289,
                        columnNumber: 37
                      }, this), hotel_rooms.map(function (room) {
                        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)(_views_RoomBlock__WEBPACK_IMPORTED_MODULE_18__.default, {
                          item: room,
                          showFullDetail: _this3.showFullDetail
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 1295,
                          columnNumber: 41
                        }, _this3);
                      })]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 1287,
                      columnNumber: 33
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 1038,
                    columnNumber: 29
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1037,
                  columnNumber: 25
                }, this), !this.state.initSearch && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.Fragment, {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("section", {
                    "class": "content-area text-content",
                    id: "hotel-facilities",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("div", {
                      className: "container",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("div", {
                        className: "section-header",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("h5", {
                          children: "Facilities & Attractions"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 1309,
                          columnNumber: 41
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 1308,
                        columnNumber: 37
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("div", {
                        className: "feature-wrapper three-per-col image-top",
                        children: [!hotelfacilities || hotelfacilities.length === 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("h5", {
                          children: "Facilities will be added soon."
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 1313,
                          columnNumber: 41
                        }, this), hotelfacilities && hotelfacilities.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.Fragment, {
                          children: hotelfacilities.map(function (fac, index) {
                            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)(_views_FacilityNewBlock__WEBPACK_IMPORTED_MODULE_21__.default, {
                              item: fac,
                              imgAlign: index % 2 === 1 ? 'left' : 'right'
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1319,
                              columnNumber: 49
                            }, _this3);
                          })
                        }, void 0, false)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 1311,
                        columnNumber: 37
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 1307,
                      columnNumber: 33
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 1306,
                    columnNumber: 29
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("section", {
                    className: "room-section",
                    id: "hotel-gallery",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("div", {
                      className: "container",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("div", {
                        className: "section-header",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)("h5", {
                          children: "Gallery"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 1329,
                          columnNumber: 41
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 1328,
                        columnNumber: 37
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)(_views_common_Gallery__WEBPACK_IMPORTED_MODULE_28__.default, {
                        galleryImages: galleryImages
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 1331,
                        columnNumber: 37
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 1327,
                      columnNumber: 33
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 1326,
                    columnNumber: 29
                  }, this)]
                }, void 0, true)]
              }, void 0, true), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)(_views_Footer__WEBPACK_IMPORTED_MODULE_11__.default, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1344,
                columnNumber: 21
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 849,
              columnNumber: 17
            }, this), this.state.showError && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)(_views_common_AlertModal__WEBPACK_IMPORTED_MODULE_23__.default, {
              modalHeader: false,
              modalFooter: true,
              modalTitle: "Warning",
              modalBody: "Please select your choices",
              modalStatus: this.state.showError,
              OKButton: true,
              CANCELButton: false,
              OKAction: this.hideError
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 1351,
              columnNumber: 17
            }, this), this.state.showProfileInfoError && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)(_views_common_AlertModal__WEBPACK_IMPORTED_MODULE_23__.default, {
              modalHeader: false,
              modalFooter: true,
              modalTitle: "Profile Details",
              modalBody: "Please enter your personal information to proceed",
              modalStatus: this.state.showProfileInfoError,
              OKButton: true,
              CANCELButton: false,
              OKAction: this.hideProfileInfoError
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 1363,
              columnNumber: 17
            }, this), this.state.itemRemovalMessage && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)(_views_common_AlertModal__WEBPACK_IMPORTED_MODULE_23__.default, {
              modalHeader: false,
              modalFooter: true,
              modalTitle: "Warning!",
              modalBody: "Are you sure to remove this room? You will be redirected to the rooms list.",
              modalStatus: this.state.itemRemovalMessage,
              OKButton: true,
              CANCELButton: true,
              OKAction: this.emptyCart,
              CANCELAction: this.hideItemRemovalMessage,
              OKText: "OK",
              CANCELText: "CANCEL"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 1375,
              columnNumber: 17
            }, this), this.state.cannotContinue && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)(_views_common_AlertModal__WEBPACK_IMPORTED_MODULE_23__.default, {
              modalHeader: false,
              modalFooter: true,
              modalTitle: "Warning!",
              modalBody: this.state.cannotContinueMessage,
              modalStatus: this.state.cannotContinue,
              OKButton: true,
              CANCELButton: false,
              OKAction: this.hideCannotContinue
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 1391,
              columnNumber: 17
            }, this), this.state.showDetailStatus && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)(_views_common_FullWidthModal__WEBPACK_IMPORTED_MODULE_25__.default, {
              modalHeader: true,
              modalFooter: true,
              modalTitle: hotelDetail.hotel_name,
              modalBody: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)(_views_RoomDetail__WEBPACK_IMPORTED_MODULE_19__.default, {
                roomDetail: this.state.roomDetail,
                hideFullDetail: this.hideFullDetail
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1408,
                columnNumber: 34
              }, this),
              modalStatus: this.state.showDetailStatus,
              OKButton: true,
              CANCELButton: false,
              OKAction: this.hideFullDetail,
              CANCELAction: this.hideFullDetail,
              OKText: "OK",
              CANCELText: "CANCEL"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 1404,
              columnNumber: 17
            }, this), this.state.showSpReqStat && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)(_views_common_AlertModal__WEBPACK_IMPORTED_MODULE_23__.default, {
              modalHeader: false,
              modalFooter: true,
              modalTitle: "Warning!",
              modalBody: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)(_views_HotelSpReqList__WEBPACK_IMPORTED_MODULE_27__.default, {
                spRequests: spRequests,
                selectedSpReqIds: this.state.selectedSpReqIds,
                selectedSpReqs: this.state.selectedSpReqs,
                handleSpSelection: this.handleSpSelection
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1424,
                columnNumber: 34
              }, this),
              modalStatus: this.state.showSpReqStat,
              OKButton: true,
              CANCELButton: false,
              OKAction: this.hideSpecialRequests
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 1420,
              columnNumber: 17
            }, this), this.state.showPendingMessage && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxDEV)(_views_common_AlertModal__WEBPACK_IMPORTED_MODULE_23__.default, {
              modalHeader: false,
              modalFooter: true,
              modalTitle: "Warning!",
              modalBody: "Booking is temperorily unavailable due to Covid-19. It will be available only from July 2021 onwards. For further information please send an email to booking@uthhotels.com or call +91 9746838883,+91 9567338884.",
              modalStatus: this.state.showPendingMessage,
              OKButton: true,
              CANCELButton: false,
              OKAction: this.hidePendingMessage
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 1433,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 848,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 847,
          columnNumber: 17
        }, this)]
      }, void 0, true);
    }
  }]);

  return HotelDetail;
}(react__WEBPACK_IMPORTED_MODULE_8__.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    hotelData: state.HotelReducer.hotelData,
    // facilityData:state.HotelReducer.facilityData,
    bookingData: state.HotelReducer.bookingData
  };
};

var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_14__.connect)(mapStateToProps, {
  searchRooms: _actions_hotel__WEBPACK_IMPORTED_MODULE_15__.searchRooms,
  saveBooking: _actions_hotel__WEBPACK_IMPORTED_MODULE_15__.saveBooking,
  confirmBooking: _actions_hotel__WEBPACK_IMPORTED_MODULE_15__.confirmBooking,
  getBannerImages: _actions_hotel__WEBPACK_IMPORTED_MODULE_15__.getBannerImages,
  //getHotelHighlights : HotelActions.getHotelHighlights,
  getHotelPolicies: _actions_hotel__WEBPACK_IMPORTED_MODULE_15__.getHotelPolicies,
  getSpRequests: _actions_hotel__WEBPACK_IMPORTED_MODULE_15__.getSpRequests
})(HotelDetailSlug));

var _c;

$RefreshReg$(_c, "HotelDetailSlug");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/head.js":
/*!***********************************!*\
  !*** ./node_modules/next/head.js ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/shared/lib/head */ "./node_modules/next/dist/shared/lib/head.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/next/node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/defineProperty.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \*********************************************************************************/
/***/ (function(module) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \**********************************************************************************/
/***/ (function(module) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

module.exports = _iterableToArray;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \************************************************************************************/
/***/ (function(module) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/next/node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/next/node_modules/@babel/runtime/helpers/iterableToArray.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/next/node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/next/node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaG90ZWwvW3NsdWddLmUzOTBmYjVkYzg1ZTZmMjlhNzRhLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUNiQSw4Q0FBNkM7QUFDekNHLEVBQUFBLEtBQUssRUFBRTtBQURrQyxDQUE3QztBQUdBRCx1QkFBQSxHQUEwQixLQUFLLENBQS9COztBQUNBLElBQUlHLE1BQU0sR0FBR0Msc0JBQXNCLENBQUNDLG1CQUFPLENBQUMsNENBQUQsQ0FBUixDQUFuQzs7QUFDQSxTQUFTRCxzQkFBVCxDQUFnQ0UsR0FBaEMsRUFBcUM7QUFDakMsU0FBT0EsR0FBRyxJQUFJQSxHQUFHLENBQUNDLFVBQVgsR0FBd0JELEdBQXhCLEdBQThCO0FBQ2pDLGVBQVNBO0FBRHdCLEdBQXJDO0FBR0g7O0FBQ0QsSUFBTUosZUFBZSxHQUFHQyxNQUFNLFdBQU4sQ0FBZUssYUFBZixDQUE2QixFQUE3QixDQUF4Qjs7QUFFQVIsdUJBQUEsR0FBMEJFLGVBQTFCOztBQUNBLElBQUksTUFBdUM7QUFDdkNBLEVBQUFBLGVBQWUsQ0FBQ08sV0FBaEIsR0FBOEIsaUJBQTlCO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJZOzs7O0FBQ2JYLDhDQUE2QztBQUN6Q0csRUFBQUEsS0FBSyxFQUFFO0FBRGtDLENBQTdDO0FBR0FELG1CQUFBLEdBQXNCVSxXQUF0QjtBQUNBVixjQUFBLEdBQWlCVyxNQUFqQjs7QUFDQSxJQUFJUixNQUFNLEdBQUdDLHNCQUFzQixDQUFDQyxtQkFBTyxDQUFDLDRDQUFELENBQVIsQ0FBbkM7O0FBQ0EsSUFBSU8sV0FBVyxHQUFHUCxtQkFBTyxDQUFDLHlFQUFELENBQXpCOztBQUNBLFNBQVNELHNCQUFULENBQWdDRSxHQUFoQyxFQUFxQztBQUNqQyxTQUFPQSxHQUFHLElBQUlBLEdBQUcsQ0FBQ0MsVUFBWCxHQUF3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LGVBRGtCLEVBRWxCO0FBRUk1QixFQUFBQSxXQUFXLEVBQUdyTSx3REFGbEI7QUFHSXFILEVBQUFBLFdBQVcsRUFBR3JILHdEQUhsQjtBQUlJc0ksRUFBQUEsY0FBYyxFQUFHdEksMkRBSnJCO0FBS0lvTyxFQUFBQSxlQUFlLEVBQUdwTyw0REFMdEI7QUFNSTtBQUNBcU8sRUFBQUEsZ0JBQWdCLEVBQUdyTyw2REFQdkI7QUFRSXNPLEVBQUFBLGFBQWEsRUFBR3RPLDBEQUEwQnNPO0FBUjlDLENBRmtCLENBQVAsQ0FZYnBOLGVBWmEsQ0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ243Q0EsaUhBQWtEOzs7Ozs7Ozs7OztBQ0FsRCx1QkFBdUIsbUJBQU8sQ0FBQywwR0FBdUI7O0FBRXREO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNCQUF5QixtQkFBbUIseUJBQXlCOzs7Ozs7Ozs7O0FDUHJFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBeUIsbUJBQW1CLHlCQUF5Qjs7Ozs7Ozs7OztBQ2hCckU7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXlCLG1CQUFtQix5QkFBeUI7Ozs7Ozs7Ozs7QUNMckU7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXlCLG1CQUFtQix5QkFBeUI7Ozs7Ozs7Ozs7QUNMckUsd0JBQXdCLG1CQUFPLENBQUMsNEdBQXdCOztBQUV4RCxzQkFBc0IsbUJBQU8sQ0FBQyx3R0FBc0I7O0FBRXBELGlDQUFpQyxtQkFBTyxDQUFDLDhIQUFpQzs7QUFFMUUsd0JBQXdCLG1CQUFPLENBQUMsNEdBQXdCOztBQUV4RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBeUIsbUJBQW1CLHlCQUF5QiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3NoYXJlZC9saWIvYW1wLWNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3Qvc2hhcmVkL2xpYi9hbXAuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3Qvc2hhcmVkL2xpYi9oZWFkLW1hbmFnZXItY29udGV4dC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9zaGFyZWQvbGliL2hlYWQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3Qvc2hhcmVkL2xpYi9zaWRlLWVmZmVjdC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaG90ZWwvW3NsdWddLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9oZWFkLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhvdXRIb2xlcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvbm9uSXRlcmFibGVTcHJlYWQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5BbXBTdGF0ZUNvbnRleHQgPSB2b2lkIDA7XG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuY29uc3QgQW1wU3RhdGVDb250ZXh0ID0gX3JlYWN0LmRlZmF1bHQuY3JlYXRlQ29udGV4dCh7XG59KTtcbmV4cG9ydHMuQW1wU3RhdGVDb250ZXh0ID0gQW1wU3RhdGVDb250ZXh0O1xuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBBbXBTdGF0ZUNvbnRleHQuZGlzcGxheU5hbWUgPSAnQW1wU3RhdGVDb250ZXh0Jztcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YW1wLWNvbnRleHQuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmlzSW5BbXBNb2RlID0gaXNJbkFtcE1vZGU7XG5leHBvcnRzLnVzZUFtcCA9IHVzZUFtcDtcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgX2FtcENvbnRleHQgPSByZXF1aXJlKFwiLi9hbXAtY29udGV4dFwiKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGlzSW5BbXBNb2RlKHsgYW1wRmlyc3QgPWZhbHNlICwgaHlicmlkID1mYWxzZSAsIGhhc1F1ZXJ5ID1mYWxzZSAsICB9ID0ge1xufSkge1xuICAgIHJldHVybiBhbXBGaXJzdCB8fCBoeWJyaWQgJiYgaGFzUXVlcnk7XG59XG5mdW5jdGlvbiB1c2VBbXAoKSB7XG4gICAgLy8gRG9uJ3QgYXNzaWduIHRoZSBjb250ZXh0IHZhbHVlIHRvIGEgdmFyaWFibGUgdG8gc2F2ZSBieXRlc1xuICAgIHJldHVybiBpc0luQW1wTW9kZShfcmVhY3QuZGVmYXVsdC51c2VDb250ZXh0KF9hbXBDb250ZXh0LkFtcFN0YXRlQ29udGV4dCkpO1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hbXAuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLkhlYWRNYW5hZ2VyQ29udGV4dCA9IHZvaWQgMDtcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5jb25zdCBIZWFkTWFuYWdlckNvbnRleHQgPSBfcmVhY3QuZGVmYXVsdC5jcmVhdGVDb250ZXh0KHtcbn0pO1xuZXhwb3J0cy5IZWFkTWFuYWdlckNvbnRleHQgPSBIZWFkTWFuYWdlckNvbnRleHQ7XG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIEhlYWRNYW5hZ2VyQ29udGV4dC5kaXNwbGF5TmFtZSA9ICdIZWFkTWFuYWdlckNvbnRleHQnO1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1oZWFkLW1hbmFnZXItY29udGV4dC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdEhlYWQgPSBkZWZhdWx0SGVhZDtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIF9zaWRlRWZmZWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9zaWRlLWVmZmVjdFwiKSk7XG52YXIgX2FtcENvbnRleHQgPSByZXF1aXJlKFwiLi9hbXAtY29udGV4dFwiKTtcbnZhciBfaGVhZE1hbmFnZXJDb250ZXh0ID0gcmVxdWlyZShcIi4vaGVhZC1tYW5hZ2VyLWNvbnRleHRcIik7XG52YXIgX2FtcCA9IHJlcXVpcmUoXCIuL2FtcFwiKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICAgIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgbmV3T2JqID0ge1xuICAgICAgICB9O1xuICAgICAgICBpZiAob2JqICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvcih2YXIga2V5IGluIG9iail7XG4gICAgICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRlc2MgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDoge1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIG5ld09iai5kZWZhdWx0ID0gb2JqO1xuICAgICAgICByZXR1cm4gbmV3T2JqO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGRlZmF1bHRIZWFkKGluQW1wTW9kZSA9IGZhbHNlKSB7XG4gICAgY29uc3QgaGVhZCA9IFtcbiAgICAgICAgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICAgICAgICBjaGFyU2V0OiBcInV0Zi04XCJcbiAgICAgICAgfSlcbiAgICBdO1xuICAgIGlmICghaW5BbXBNb2RlKSB7XG4gICAgICAgIGhlYWQucHVzaCgvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHtcbiAgICAgICAgICAgIG5hbWU6IFwidmlld3BvcnRcIixcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwid2lkdGg9ZGV2aWNlLXdpZHRoXCJcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICByZXR1cm4gaGVhZDtcbn1cbmZ1bmN0aW9uIG9ubHlSZWFjdEVsZW1lbnQobGlzdCwgY2hpbGQpIHtcbiAgICAvLyBSZWFjdCBjaGlsZHJlbiBjYW4gYmUgXCJzdHJpbmdcIiBvciBcIm51bWJlclwiIGluIHRoaXMgY2FzZSB3ZSBpZ25vcmUgdGhlbSBmb3IgYmFja3dhcmRzIGNvbXBhdFxuICAgIGlmICh0eXBlb2YgY2hpbGQgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBjaGlsZCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgcmV0dXJuIGxpc3Q7XG4gICAgfVxuICAgIC8vIEFkZHMgc3VwcG9ydCBmb3IgUmVhY3QuRnJhZ21lbnRcbiAgICBpZiAoY2hpbGQudHlwZSA9PT0gX3JlYWN0LmRlZmF1bHQuRnJhZ21lbnQpIHtcbiAgICAgICAgcmV0dXJuIGxpc3QuY29uY2F0KF9yZWFjdC5kZWZhdWx0LkNoaWxkcmVuLnRvQXJyYXkoY2hpbGQucHJvcHMuY2hpbGRyZW4pLnJlZHVjZSgoZnJhZ21lbnRMaXN0LCBmcmFnbWVudENoaWxkKT0+e1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBmcmFnbWVudENoaWxkID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgZnJhZ21lbnRDaGlsZCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZnJhZ21lbnRMaXN0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZyYWdtZW50TGlzdC5jb25jYXQoZnJhZ21lbnRDaGlsZCk7XG4gICAgICAgIH0sIFtdKSk7XG4gICAgfVxuICAgIHJldHVybiBsaXN0LmNvbmNhdChjaGlsZCk7XG59XG5jb25zdCBNRVRBVFlQRVMgPSBbXG4gICAgJ25hbWUnLFxuICAgICdodHRwRXF1aXYnLFxuICAgICdjaGFyU2V0JyxcbiAgICAnaXRlbVByb3AnXG5dO1xuLypcbiByZXR1cm5zIGEgZnVuY3Rpb24gZm9yIGZpbHRlcmluZyBoZWFkIGNoaWxkIGVsZW1lbnRzXG4gd2hpY2ggc2hvdWxkbid0IGJlIGR1cGxpY2F0ZWQsIGxpa2UgPHRpdGxlLz5cbiBBbHNvIGFkZHMgc3VwcG9ydCBmb3IgZGVkdXBsaWNhdGVkIGBrZXlgIHByb3BlcnRpZXNcbiovIGZ1bmN0aW9uIHVuaXF1ZSgpIHtcbiAgICBjb25zdCBrZXlzID0gbmV3IFNldCgpO1xuICAgIGNvbnN0IHRhZ3MgPSBuZXcgU2V0KCk7XG4gICAgY29uc3QgbWV0YVR5cGVzID0gbmV3IFNldCgpO1xuICAgIGNvbnN0IG1ldGFDYXRlZ29yaWVzID0ge1xuICAgIH07XG4gICAgcmV0dXJuIChoKT0+e1xuICAgICAgICBsZXQgaXNVbmlxdWUgPSB0cnVlO1xuICAgICAgICBsZXQgaGFzS2V5ID0gZmFsc2U7XG4gICAgICAgIGlmIChoLmtleSAmJiB0eXBlb2YgaC5rZXkgIT09ICdudW1iZXInICYmIGgua2V5LmluZGV4T2YoJyQnKSA+IDApIHtcbiAgICAgICAgICAgIGhhc0tleSA9IHRydWU7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSBoLmtleS5zbGljZShoLmtleS5pbmRleE9mKCckJykgKyAxKTtcbiAgICAgICAgICAgIGlmIChrZXlzLmhhcyhrZXkpKSB7XG4gICAgICAgICAgICAgICAgaXNVbmlxdWUgPSBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAga2V5cy5hZGQoa2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVmYXVsdC1jYXNlXG4gICAgICAgIHN3aXRjaChoLnR5cGUpe1xuICAgICAgICAgICAgY2FzZSAndGl0bGUnOlxuICAgICAgICAgICAgY2FzZSAnYmFzZSc6XG4gICAgICAgICAgICAgICAgaWYgKHRhZ3MuaGFzKGgudHlwZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaXNVbmlxdWUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0YWdzLmFkZChoLnR5cGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ21ldGEnOlxuICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDAsIGxlbiA9IE1FVEFUWVBFUy5sZW5ndGg7IGkgPCBsZW47IGkrKyl7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1ldGF0eXBlID0gTUVUQVRZUEVTW2ldO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWgucHJvcHMuaGFzT3duUHJvcGVydHkobWV0YXR5cGUpKSBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1ldGF0eXBlID09PSAnY2hhclNldCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtZXRhVHlwZXMuaGFzKG1ldGF0eXBlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzVW5pcXVlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGFUeXBlcy5hZGQobWV0YXR5cGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2F0ZWdvcnkgPSBoLnByb3BzW21ldGF0eXBlXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNhdGVnb3JpZXMgPSBtZXRhQ2F0ZWdvcmllc1ttZXRhdHlwZV0gfHwgbmV3IFNldCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChtZXRhdHlwZSAhPT0gJ25hbWUnIHx8ICFoYXNLZXkpICYmIGNhdGVnb3JpZXMuaGFzKGNhdGVnb3J5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzVW5pcXVlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3JpZXMuYWRkKGNhdGVnb3J5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRhQ2F0ZWdvcmllc1ttZXRhdHlwZV0gPSBjYXRlZ29yaWVzO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpc1VuaXF1ZTtcbiAgICB9O1xufVxuLyoqXG4gKlxuICogQHBhcmFtIGhlYWRFbGVtZW50cyBMaXN0IG9mIG11bHRpcGxlIDxIZWFkPiBpbnN0YW5jZXNcbiAqLyBmdW5jdGlvbiByZWR1Y2VDb21wb25lbnRzKGhlYWRFbGVtZW50cywgcHJvcHMpIHtcbiAgICByZXR1cm4gaGVhZEVsZW1lbnRzLnJlZHVjZSgobGlzdCwgaGVhZEVsZW1lbnQpPT57XG4gICAgICAgIGNvbnN0IGhlYWRFbGVtZW50Q2hpbGRyZW4gPSBfcmVhY3QuZGVmYXVsdC5DaGlsZHJlbi50b0FycmF5KGhlYWRFbGVtZW50LnByb3BzLmNoaWxkcmVuKTtcbiAgICAgICAgcmV0dXJuIGxpc3QuY29uY2F0KGhlYWRFbGVtZW50Q2hpbGRyZW4pO1xuICAgIH0sIFtdKS5yZWR1Y2Uob25seVJlYWN0RWxlbWVudCwgW10pLnJldmVyc2UoKS5jb25jYXQoZGVmYXVsdEhlYWQocHJvcHMuaW5BbXBNb2RlKSkuZmlsdGVyKHVuaXF1ZSgpKS5yZXZlcnNlKCkubWFwKChjLCBpKT0+e1xuICAgICAgICBjb25zdCBrZXkgPSBjLmtleSB8fCBpO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdkZXZlbG9wbWVudCcgJiYgcHJvY2Vzcy5lbnYuX19ORVhUX09QVElNSVpFX0ZPTlRTICYmICFwcm9wcy5pbkFtcE1vZGUpIHtcbiAgICAgICAgICAgIGlmIChjLnR5cGUgPT09ICdsaW5rJyAmJiBjLnByb3BzWydocmVmJ10gJiYgLy8gVE9ETyhwcmF0ZWVrYmhAKTogUmVwbGFjZSB0aGlzIHdpdGggY29uc3QgZnJvbSBgY29uc3RhbnRzYCB3aGVuIHRoZSB0cmVlIHNoYWtpbmcgd29ya3MuXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzJyxcbiAgICAgICAgICAgICAgICAnaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvJ1xuICAgICAgICAgICAgXS5zb21lKCh1cmwpPT5jLnByb3BzWydocmVmJ10uc3RhcnRzV2l0aCh1cmwpXG4gICAgICAgICAgICApKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3UHJvcHMgPSB7XG4gICAgICAgICAgICAgICAgICAgIC4uLmMucHJvcHMgfHwge1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBuZXdQcm9wc1snZGF0YS1ocmVmJ10gPSBuZXdQcm9wc1snaHJlZiddO1xuICAgICAgICAgICAgICAgIG5ld1Byb3BzWydocmVmJ10gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgLy8gQWRkIHRoaXMgYXR0cmlidXRlIHRvIG1ha2UgaXQgZWFzeSB0byBpZGVudGlmeSBvcHRpbWl6ZWQgdGFnc1xuICAgICAgICAgICAgICAgIG5ld1Byb3BzWydkYXRhLW9wdGltaXplZC1mb250cyddID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4oLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jbG9uZUVsZW1lbnQoYywgbmV3UHJvcHMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4oLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jbG9uZUVsZW1lbnQoYywge1xuICAgICAgICAgICAga2V5XG4gICAgICAgIH0pKTtcbiAgICB9KTtcbn1cbi8qKlxuICogVGhpcyBjb21wb25lbnQgaW5qZWN0cyBlbGVtZW50cyB0byBgPGhlYWQ+YCBvZiB5b3VyIHBhZ2UuXG4gKiBUbyBhdm9pZCBkdXBsaWNhdGVkIGB0YWdzYCBpbiBgPGhlYWQ+YCB5b3UgY2FuIHVzZSB0aGUgYGtleWAgcHJvcGVydHksIHdoaWNoIHdpbGwgbWFrZSBzdXJlIGV2ZXJ5IHRhZyBpcyBvbmx5IHJlbmRlcmVkIG9uY2UuXG4gKi8gZnVuY3Rpb24gSGVhZCh7IGNoaWxkcmVuICB9KSB7XG4gICAgY29uc3QgYW1wU3RhdGUgPSAoMCwgX3JlYWN0KS51c2VDb250ZXh0KF9hbXBDb250ZXh0LkFtcFN0YXRlQ29udGV4dCk7XG4gICAgY29uc3QgaGVhZE1hbmFnZXIgPSAoMCwgX3JlYWN0KS51c2VDb250ZXh0KF9oZWFkTWFuYWdlckNvbnRleHQuSGVhZE1hbmFnZXJDb250ZXh0KTtcbiAgICByZXR1cm4oLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9zaWRlRWZmZWN0LmRlZmF1bHQsIHtcbiAgICAgICAgcmVkdWNlQ29tcG9uZW50c1RvU3RhdGU6IHJlZHVjZUNvbXBvbmVudHMsXG4gICAgICAgIGhlYWRNYW5hZ2VyOiBoZWFkTWFuYWdlcixcbiAgICAgICAgaW5BbXBNb2RlOiAoMCwgX2FtcCkuaXNJbkFtcE1vZGUoYW1wU3RhdGUpXG4gICAgfSwgY2hpbGRyZW4pKTtcbn1cbnZhciBfZGVmYXVsdCA9IEhlYWQ7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aGVhZC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfcmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG5jb25zdCBpc1NlcnZlciA9IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnO1xuY2xhc3MgX2NsYXNzIGV4dGVuZHMgX3JlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuZW1pdENoYW5nZSA9ICgpPT57XG4gICAgICAgICAgICBpZiAodGhpcy5faGFzSGVhZE1hbmFnZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhlYWRNYW5hZ2VyLnVwZGF0ZUhlYWQodGhpcy5wcm9wcy5yZWR1Y2VDb21wb25lbnRzVG9TdGF0ZShbXG4gICAgICAgICAgICAgICAgICAgIC4uLnRoaXMucHJvcHMuaGVhZE1hbmFnZXIubW91bnRlZEluc3RhbmNlc1xuICAgICAgICAgICAgICAgIF0sIHRoaXMucHJvcHMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5faGFzSGVhZE1hbmFnZXIgPSB0aGlzLnByb3BzLmhlYWRNYW5hZ2VyICYmIHRoaXMucHJvcHMuaGVhZE1hbmFnZXIubW91bnRlZEluc3RhbmNlcztcbiAgICAgICAgaWYgKGlzU2VydmVyICYmIHRoaXMuX2hhc0hlYWRNYW5hZ2VyKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmhlYWRNYW5hZ2VyLm1vdW50ZWRJbnN0YW5jZXMuYWRkKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5lbWl0Q2hhbmdlKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGlmICh0aGlzLl9oYXNIZWFkTWFuYWdlcikge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5oZWFkTWFuYWdlci5tb3VudGVkSW5zdGFuY2VzLmFkZCh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVtaXRDaGFuZ2UoKTtcbiAgICB9XG4gICAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgICAgICB0aGlzLmVtaXRDaGFuZ2UoKTtcbiAgICB9XG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIGlmICh0aGlzLl9oYXNIZWFkTWFuYWdlcikge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5oZWFkTWFuYWdlci5tb3VudGVkSW5zdGFuY2VzLmRlbGV0ZSh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVtaXRDaGFuZ2UoKTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBfY2xhc3M7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNpZGUtZWZmZWN0LmpzLm1hcCIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsU3VzcGVuc2UsIGxhenkgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uLy4uL3ZpZXdzL0Zvb3RlclwiO1xyXG5pbXBvcnQgQ29udGVudFNsaWRlciBmcm9tIFwiLi4vLi4vdmlld3MvY29tbW9uL2hvdGVsU2xpZGVyXCI7XHJcbmltcG9ydCB7Z2V0VXJsU2VnbWVudH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9DdXN0b21GdW5jdGlvbnNcIjtcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0ICogYXMgSG90ZWxBY3Rpb25zIGZyb20gXCIuLi8uLi9hY3Rpb25zL2hvdGVsXCI7XHJcbmltcG9ydCB7IGVuR0IgfSBmcm9tICdkYXRlLWZucy9sb2NhbGUnXHJcbmltcG9ydCB7IERhdGVSYW5nZVBpY2tlciwgU1RBUlRfREFURSwgRU5EX0RBVEUgfSBmcm9tICdyZWFjdC1uaWNlLWRhdGVzJ1xyXG5pbXBvcnQgJ3JlYWN0LW5pY2UtZGF0ZXMvYnVpbGQvc3R5bGUuY3NzJ1xyXG5pbXBvcnQgUm9vbUJsb2NrIGZyb20gXCIuLi8uLi92aWV3cy9Sb29tQmxvY2tcIjtcclxuaW1wb3J0IFJvb21EZXRhaWwgZnJvbSBcIi4uLy4uL3ZpZXdzL1Jvb21EZXRhaWxcIjtcclxuaW1wb3J0IFJvb21TZWFyY2hCbG9jayBmcm9tIFwiLi4vLi4vdmlld3MvUm9vbVNlYXJjaEJsb2NrXCI7XHJcbmltcG9ydCBGYWNpbGl0eU5ld0Jsb2NrIGZyb20gXCIuLi8uLi92aWV3cy9GYWNpbGl0eU5ld0Jsb2NrXCI7XHJcbmltcG9ydCBTdW1tYXJ5SXRlbSBmcm9tIFwiLi4vLi4vdmlld3MvU3VtbWFyeUl0ZW1cIjtcclxuaW1wb3J0IEFsZXJ0TW9kYWwgZnJvbSBcIi4uLy4uL3ZpZXdzL2NvbW1vbi9BbGVydE1vZGFsXCI7XHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuaW1wb3J0IEZ1bGxXaWR0aE1vZGFsIGZyb20gXCIuLi8uLi92aWV3cy9jb21tb24vRnVsbFdpZHRoTW9kYWxcIjtcclxuaW1wb3J0IEhvdGVsTmF2YmFyIGZyb20gXCIuLi8uLi92aWV3cy9Ib3RlbE5hdmJhclwiO1xyXG5pbXBvcnQgSG90ZWxTcFJlcUxpc3QgZnJvbSBcIi4uLy4uL3ZpZXdzL0hvdGVsU3BSZXFMaXN0XCI7XHJcbmltcG9ydCBHYWxsZXJ5IGZyb20gXCIuLi8uLi92aWV3cy9jb21tb24vR2FsbGVyeVwiO1xyXG5pbXBvcnQge0lNQUdFX1BBVEgsIEFQSV9QQVRIfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XHJcbmNvbnN0IEFQSSA9ICdodHRwczovL3J6cF90ZXN0X3JuRUg1STROSHVhR0p4OlNQbXE2cUtRRUx4eExsWVRuUDdZNWR5akBhcGkucmF6b3JwYXkuY29tL3YxL3BheW1lbnRzLyc7XHJcbi8vVGhpcyBnZXRzIGNhbGxlZCBldmVyeSB0aW1lIHRoZSBwYWdlIGlzIGNhbGxlZFxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuICAgIGNvbnN0IHtwYXJhbXN9ID0gY29udGV4dDtcclxuICAgIGNvbnN0IHtzbHVnfSA9IHBhcmFtcztcclxuICAgIC8vaG90ZWwgZGV0YWlsXHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke0FQSV9QQVRIfWhvdGVsL2hvdGVsZGV0YWlsc3YyP3VybD0ke3NsdWd9YCk7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICBsZXQgaG90ZWxEZXRhaWwgPSByZXMucmVzdWx0cyA/IHJlcy5yZXN1bHRzLmRhdGE6IFtdO1xyXG4gICAgY29uc29sZS5sb2coaG90ZWxEZXRhaWwpXHJcblxyXG4gICAgLy9Sb29tIFR5cGVzXHJcbiAgICBjb25zdCByZXNwb25zZTIgPSBhd2FpdCBmZXRjaChgJHtBUElfUEFUSH1ob3RlbC9yb29tdHlwZWApO1xyXG4gICAgY29uc3QgcmVzMiA9IGF3YWl0IHJlc3BvbnNlMi5qc29uKCk7XHJcbiAgICBsZXQgcm9vbVR5cGVzID0gcmVzMi5yZXN1bHRzID8gcmVzMi5yZXN1bHRzLmRhdGE6IFtdO1xyXG4gICAgbGV0IGJhbm5lckltYWdlcyA9IFtdO1xyXG4gICAgbGV0IGhvdGVsX3Jvb21zID0gW107XHJcbiAgICBsZXQgZ2FsbGVyeUltYWdlcyA9W107XHJcbiAgICBsZXQgaG90ZWxfaWQgPSAnJ1xyXG4gICAgaWYoaG90ZWxEZXRhaWwpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhob3RlbERldGFpbClcclxuICAgICAgICBob3RlbF9pZCA9IGhvdGVsRGV0YWlsLmhvdGVsX2lkO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGhvdGVsX2lkKVxyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlMyA9IGF3YWl0IGZldGNoKGAke0FQSV9QQVRIfWhvdGVsL2hvdGVsYmFubmVyaW1hZ2VzP2hvdGVsX2lkPSR7aG90ZWxfaWR9YCk7XHJcbiAgICAgICAgY29uc3QgcmVzMyA9IGF3YWl0IHJlc3BvbnNlMy5qc29uKCk7XHJcbiAgICAgICAgYmFubmVySW1hZ2VzID0gcmVzMy5yZXN1bHRzID8gcmVzMy5yZXN1bHRzLmRhdGE6IFtdO1xyXG5cclxuICAgICAgICBob3RlbF9yb29tcyA9IGhvdGVsRGV0YWlsLmhvdGVsX3Jvb21zIHx8IFtdO1xyXG4gICAgICAgIGhvdGVsX3Jvb21zID0gaG90ZWxfcm9vbXMubWFwKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBpdGVtLnF0eSA9IDBcclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZ2FsbGVyeUltYWdlcyA9IGhvdGVsRGV0YWlsLmhvdGVsX2ltYWdlcyB8fCBbXTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcHJvcHMgOiB7XHJcbiAgICAgICAgICAgICAgICBob3RlbERldGFpbCA6IFtob3RlbERldGFpbF0sXHJcbiAgICAgICAgICAgICAgICBob3RlbF9yb29tcyA6IGhvdGVsX3Jvb21zLFxyXG4gICAgICAgICAgICAgICAgZ2FsbGVyeUltYWdlcyA6IGdhbGxlcnlJbWFnZXMsXHJcbiAgICAgICAgICAgICAgICBiYW5uZXJJbWFnZXMgOiBiYW5uZXJJbWFnZXNcclxuICAgICAgICAgICAgICAgLy8gTUFYX0NBUEFDSVRZX0dFTkVSQUwgOiBob3RlbERldGFpbC5tYXhfb2NjdXBhbmN5LFxyXG4gICAgICAgICAgICAgICAgLy9ob3RlbEhpZ2hsaWdodHMgOiBob3RlbERldGFpbC5ob3RlbGhpZ2hsaWdodHMsXHJcbiAgICAgICAgICAgICAgICAvL2hvdGVsUG9saWNpZXMgOiBob3RlbERldGFpbC5ob3RlbHBvbGljaWVzLFxyXG4gICAgICAgICAgICAgICAgLy9zcFJlcXVlc3RzIDogaG90ZWxEZXRhaWwuc3BlY2lhbHJlcXVlc3RcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL3RoaXMucHJvcHMuZ2V0QmFubmVySW1hZ2VzKHBhcmFtcyk7XHJcbiAgICAvLyBsZXQgaG90ZWxfcm9vbXMgPSB0aGlzLnByb3BzLmhvdGVsRGV0YWlsLmhvdGVsX3Jvb21zIHx8IFtdO1xyXG4gICAgLy8gaG90ZWxfcm9vbXMgPSBob3RlbF9yb29tcy5tYXAoaXRlbSA9PiB7XHJcbiAgICAvLyAgICAgaXRlbS5xdHkgPSAwXHJcbiAgICAvLyAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICAvLyB9KTtcclxuICAgIC8vIGxldCBnYWxsZXJ5SW1hZ2VzID0gdGhpcy5wcm9wcy5ob3RlbERldGFpbC5ob3RlbF9pbWFnZXMgfHwgW107XHJcbiAgICAvLyB0aGlzLnNldFN0YXRlKHtcclxuICAgIC8vICAgICBob3RlbF9pZCA6IGhvdGVsX2lkLFxyXG4gICAgLy8gICAgIGhvdGVsRGV0YWlsIDogaG90ZWxEZXRhaWwsXHJcbiAgICAvLyAgICAgaG90ZWxfcm9vbXMgOiBob3RlbF9yb29tcyxcclxuICAgIC8vICAgICBnYWxsZXJ5SW1hZ2VzIDogZ2FsbGVyeUltYWdlcyxcclxuICAgIC8vICAgICBNQVhfQ0FQQUNJVFlfR0VORVJBTCA6IGhvdGVsRGV0YWlsLm1heF9vY2N1cGFuY3ksXHJcbiAgICAvLyAgICAgaG90ZWxIaWdobGlnaHRzIDogaG90ZWxEZXRhaWwuaG90ZWxoaWdobGlnaHRzLFxyXG4gICAgLy8gICAgIGhvdGVsUG9saWNpZXMgOiBob3RlbERldGFpbC5ob3RlbHBvbGljaWVzLFxyXG4gICAgLy8gICAgIHNwUmVxdWVzdHMgOiBob3RlbERldGFpbC5zcGVjaWFscmVxdWVzdFxyXG4gICAgLy8gfSwgZnVuY3Rpb24oKSB7XHJcbiAgICAvL1xyXG4gICAgLy8gfSlcclxuXHJcblxyXG59XHJcblxyXG5cclxuXHJcbmNvbnN0IEhvdGVsRGV0YWlsU2x1ZyA9KHtob3RlbERldGFpbCwgZ2FsbGVyeUltYWdlcywgYmFubmVySW1hZ2VzLCBob3RlbF9yb29tcyB9KSA9PiB7XHJcblxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICAgIGNvbnN0IHsgc2x1ZyB9ID0gcm91dGVyLnF1ZXJ5O1xyXG4gICAgY29uc29sZS5sb2coaG90ZWxEZXRhaWwpXHJcbiAgICBjb25zb2xlLmxvZyhnYWxsZXJ5SW1hZ2VzKVxyXG4gICAgY29uc29sZS5sb2coaG90ZWxfcm9vbXMpXHJcbiAgICBjb25zb2xlLmxvZyhiYW5uZXJJbWFnZXMpXHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgICA8SG90ZWxEZXRhaWwgaG90ZWxEZXRhaWw9e2hvdGVsRGV0YWlsWzBdfSBob3RlbF91cmw9e3NsdWd9IGJhbm5lckltYWdlcz17YmFubmVySW1hZ2VzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgZ2FsbGVyeUltYWdlcz17Z2FsbGVyeUltYWdlc30gaG90ZWxfcm9vbXM9e2hvdGVsX3Jvb21zfS8+XHJcbiAgICApXHJcbn1cclxuXHJcbmNsYXNzIEhvdGVsRGV0YWlsIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIGxldCB0b2RheSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgbGV0IHRvbW9ycm93ID0gbmV3IERhdGUodG9kYXkpO1xyXG4gICAgICAgIHRvbW9ycm93LnNldERhdGUodG9tb3Jyb3cuZ2V0RGF0ZSgpICsgMSk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgdG9kYXkgOiB0b2RheSxcclxuICAgICAgICAgICAgdG9tb3Jyb3cgOiB0b21vcnJvdyxcclxuICAgICAgICAgICAgc3RhcnREYXRlIDogdG9kYXksXHJcbiAgICAgICAgICAgIGVuZERhdGUgOiB0b21vcnJvdyxcclxuICAgICAgICAgICAgY2hlY2tpbmRhdGUgOiB0b2RheSxcclxuICAgICAgICAgICAgY2hlY2tvdXRkYXRlIDogdG9tb3Jyb3csXHJcbiAgICAgICAgICAgIHJvb21zIDogJycsXHJcbiAgICAgICAgICAgIGFkdWx0cyA6ICcnLFxyXG4gICAgICAgICAgICBjaGlsZHJlbiA6ICcnLFxyXG4gICAgICAgICAgICByb29tVHlwZXMgOiBbXSxcclxuICAgICAgICAgICAgaW5pdFNlYXJjaCA6IGZhbHNlLFxyXG4gICAgICAgICAgICBzZWFyY2hTdGVwIDogMSxcclxuICAgICAgICAgICAgc2VsZWN0ZWRSb29tcyA6IFtdLFxyXG4gICAgICAgICAgICBzZWxlY3RlZFJvb21JZHMgOiBbXSxcclxuICAgICAgICAgICAgaG90ZWxfcm9vbXMgOiBbXSxcclxuICAgICAgICAgICAgaW52YWxpZEZpZWxkcyA6IFtdLFxyXG4gICAgICAgICAgICBzaG93RXJyb3IgOiBmYWxzZSxcclxuICAgICAgICAgICAgZmlyc3RuYW1lIDonJyxcclxuICAgICAgICAgICAgbGFzdG5hbWUgOicnLFxyXG4gICAgICAgICAgICBhZGRyZXNzMSA6ICcnLFxyXG4gICAgICAgICAgICBhZGRyZXNzMiA6ICcnLFxyXG4gICAgICAgICAgICBjaXR5IDogJycsXHJcbiAgICAgICAgICAgIHN0YXRlIDogJycsXHJcbiAgICAgICAgICAgIHBpbmNvZGUgOiAnJyxcclxuICAgICAgICAgICAgY291bnRyeSA6ICcnLFxyXG4gICAgICAgICAgICBtb2JpbGUgOiAnJyxcclxuICAgICAgICAgICAgYWRkaXRpb25hbHBob25lbnVtYmVyIDogJycsXHJcbiAgICAgICAgICAgIGVtYWlsIDogJycsXHJcbiAgICAgICAgICAgIHNob3dQcm9maWxlSW5mb0Vycm9yIDogZmFsc2UsXHJcbiAgICAgICAgICAgIGJvb2tpbmdJZCA6ICcnLFxyXG4gICAgICAgICAgICB0b3RhbEFtb3VudCA6IDAsXHJcbiAgICAgICAgICAgIHByaW5jaXBsZUFtb3VudCA6IDAsXHJcbiAgICAgICAgICAgIGRpc2NvdW50IDogMCxcclxuICAgICAgICAgICAgcHJvZ3JhbV9kZXNjcmlwdGlvbiA6ICcnLFxyXG4gICAgICAgICAgICBnc3QgOiAwLFxyXG4gICAgICAgICAgICBNQVhfQ0FQQUNJVFlfTVNHIDogJycsXHJcbiAgICAgICAgICAgIGl0ZW1SZW1vdmFsTWVzc2FnZSA6IGZhbHNlLFxyXG4gICAgICAgICAgICBiYW5uZXJJbWFnZXMgOiBbXSxcclxuICAgICAgICAgICAgY2Fubm90Q29udGludWVNZXNzYWdlIDpmYWxzZSxcclxuICAgICAgICAgICAgZ2FsbGVyeUltYWdlcyA6IFtdLFxyXG4gICAgICAgICAgICBzaG93RGV0YWlsU3RhdHVzIDogZmFsc2UsXHJcbiAgICAgICAgICAgIGhvdGVsUG9saWNpZXMgOiBbXSxcclxuICAgICAgICAgICAgaG90ZWxIaWdobGlnaHRzIDogW10sXHJcbiAgICAgICAgICAgIE1BWF9DQVBBQ0lUWV9HRU5FUkFMIDogMSxcclxuICAgICAgICAgICAgc2hvd1NwZWNpYWxSZXF1ZXN0cyA6IGZhbHNlLFxyXG4gICAgICAgICAgICBzcFJlcXVlc3RzIDogW10sXHJcbiAgICAgICAgICAgIHNlbGVjdGVkU3BSZXFzIDpbXSxcclxuICAgICAgICAgICAgc2VsZWN0ZWRTcFJlcUlkcyA6IFtdLFxyXG4gICAgICAgICAgICBzaG93UGVuZGluZ01lc3NhZ2UgOiBmYWxzZSxcclxuICAgICAgICAgICAgZXhwYW5kQ29udGVudCA6IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcbiAgICAgICAgc2NyaXB0LnNyYyA9ICdodHRwczovL2NoZWNrb3V0LnJhem9ycGF5LmNvbS92MS9jaGVja291dC5qcyc7XHJcbiAgICAgICAgc2NyaXB0LmFzeW5jID0gdHJ1ZTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdCk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGhvdGVsX3VybCA6IHRoaXMucHJvcHMuaG90ZWxfdXJsXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBzY3JvbGxUb1NlY3Rpb24gPSAoc2VjdGlvbikgPT4ge1xyXG4gICAgICAgIGlmKHNlY3Rpb24gIT09ICcnKSB7XHJcbiAgICAgICAgICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2VjdGlvbik7XHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnNjcm9sbEludG9WaWV3KHtiZWhhdmlvcjogXCJzbW9vdGhcIiwgYmxvY2s6IFwic3RhcnRcIiwgaW5saW5lOiBcIm5lYXJlc3RcIn0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUsIHNuYXBzaG90KSB7XHJcblxyXG4gICAgICAgIGlmKHRoaXMucHJvcHMuaG90ZWxEZXRhaWwgIT09IHByZXZQcm9wcy5ob3RlbERldGFpbCkge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBob3RlbF9pZCA6IHRoaXMucHJvcHMuaG90ZWxEZXRhaWwuaG90ZWxfaWQsXHJcbiAgICAgICAgICAgICAgICBob3RlbERldGFpbCA6IHRoaXMucHJvcHMuaG90ZWxEZXRhaWwsXHJcbiAgICAgICAgICAgICAgICBob3RlbF9yb29tcyA6IHRoaXMucHJvcHMuaG90ZWxfcm9vbXMsXHJcbiAgICAgICAgICAgICAgICBnYWxsZXJ5SW1hZ2VzIDogdGhpcy5wcm9wcy5nYWxsZXJ5SW1hZ2VzLFxyXG4gICAgICAgICAgICAgICAgTUFYX0NBUEFDSVRZX0dFTkVSQUwgOiB0aGlzLnByb3BzLmhvdGVsRGV0YWlsLm1heF9vY2N1cGFuY3ksXHJcbiAgICAgICAgICAgICAgICBob3RlbEhpZ2hsaWdodHMgOiB0aGlzLnByb3BzLmhvdGVsRGV0YWlsLmhvdGVsaGlnaGxpZ2h0cyxcclxuICAgICAgICAgICAgICAgIGhvdGVsUG9saWNpZXMgOiB0aGlzLnByb3BzLmhvdGVsRGV0YWlsLmhvdGVscG9saWNpZXMsXHJcbiAgICAgICAgICAgICAgICBzcFJlcXVlc3RzIDogdGhpcy5wcm9wcy5ob3RlbERldGFpbC5zcGVjaWFscmVxdWVzdFxyXG4gICAgICAgICAgICB9LCBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBpZih0aGlzLnByb3BzLmZhY2lsaXR5RGF0YS5yb29tVHlwZXMgIT09IHByZXZQcm9wcy5mYWNpbGl0eURhdGEucm9vbVR5cGVzKSB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIC8vICAgICAgICAgcm9vbVR5cGVzIDogdGhpcy5wcm9wcy5mYWNpbGl0eURhdGEucm9vbVR5cGVzXHJcbiAgICAgICAgLy8gICAgIH0pXHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIGlmKHRoaXMucHJvcHMuYm9va2luZ0RhdGEuYm9va2luZ0lkICE9PSBwcmV2UHJvcHMuYm9va2luZ0RhdGEuYm9va2luZ0lkKSB7XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgLy8gICAgICAgICBib29raW5nSWQgOiB0aGlzLnByb3BzLmJvb2tpbmdEYXRhLmJvb2tpbmdJZFxyXG4gICAgICAgIC8vICAgICB9LCBmdW5jdGlvbiAoKXtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuY29udGludWVUb1BheW1lbnQoKVxyXG4gICAgICAgIC8vICAgICB9KVxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBpZih0aGlzLnByb3BzLmJvb2tpbmdEYXRhLmJvb2tpbmdSZXN1bHQgIT09IHByZXZQcm9wcy5ib29raW5nRGF0YS5ib29raW5nUmVzdWx0KSB7XHJcbiAgICAgICAgLy8gICAgIGxldCBQYXltZW50VXJsID0gYGh0dHBzOi8vdXRoZGV2Lm5ldmVyYmVmb3JlaG9saWRheXMuY29tL3BheW1lbnQtc3VjY2Vzcz9ycF9pZD1gK3RoaXMuc3RhdGUuUGF5bWVudElkK2AmcmFtdD1gK3RoaXMuc3RhdGUudG90YWxBbW91bnQrYCZtb2JpbGU9YCt0aGlzLnN0YXRlLm1vYmlsZStgJmVtYWlsPWArdGhpcy5zdGF0ZS5lbWFpbCtgJm1ldGhvZD1DYXJkIHBheW1lbnQmZGF0ZT1gK21vbWVudCh0aGlzLnN0YXRlLnRvZGF5KS5mb3JtYXQoJ0REIE1NTSwgWVlZWScpO1xyXG4gICAgICAgIC8vICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFBheW1lbnRVcmw7XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAvLyBpZih0aGlzLnByb3BzLmJhbm5lckltYWdlcyAhPT0gcHJldlByb3BzLmJhbm5lckltYWdlcykge1xyXG4gICAgICAgIC8vICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAvLyAgICAgICAgIGJhbm5lckltYWdlcyA6IHRoaXMucHJvcHMuYmFubmVySW1hZ2VzXHJcbiAgICAgICAgLy8gICAgIH0pXHJcbiAgICAgICAgLy8gfVxyXG4gICAgfVxyXG5cclxuICAgIHNldFN0YXJ0RGF0ZSA9IChkYXRlKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHN0YXJ0RGF0ZSA6IGRhdGVcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgc2V0RW5kRGF0ZSA9IChkYXRlKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGVuZERhdGUgOiBkYXRlXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBbZS50YXJnZXQubmFtZV0gOiBlLnRhcmdldC52YWx1ZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgc2VhcmNoUm9vbXMgPSAoKSA9PiB7XHJcblxyXG5cclxuICAgICAgICBsZXQgTUFYX0NBUEFDSVRZX0dFTkVSQUwgPSB0aGlzLnN0YXRlLk1BWF9DQVBBQ0lUWV9HRU5FUkFMO1xyXG4gICAgICAgIGxldCBzdGFydERhdGUgPSB0aGlzLnN0YXRlLnN0YXJ0RGF0ZTtcclxuICAgICAgICBsZXQgZW5kRGF0ZSA9IHRoaXMuc3RhdGUuc3RhcnREYXRlO1xyXG4gICAgICAgIGxldCByb29tcyA9IHRoaXMuc3RhdGUucm9vbXM7XHJcbiAgICAgICAgbGV0IGFkdWx0cyA9IHRoaXMuc3RhdGUuYWR1bHRzO1xyXG4gICAgICAgIGxldCBjaGlsZHJlbiA9IHRoaXMuc3RhdGUuY2hpbGRyZW47XHJcbiAgICAgICAgbGV0IGludmFsaWRGaWVsZHMgPSBbXTtcclxuICAgICAgICBpZihzdGFydERhdGUgPT09ICcnKSB7XHJcbiAgICAgICAgICAgIGludmFsaWRGaWVsZHMucHVzaCgnc3RhcnREYXRlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGVuZERhdGUgPT09ICcnKSB7XHJcbiAgICAgICAgICAgIGludmFsaWRGaWVsZHMucHVzaCgnZW5kRGF0ZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihyb29tcyA9PT0gJycpIHtcclxuICAgICAgICAgICAgaW52YWxpZEZpZWxkcy5wdXNoKCdyb29tcycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihhZHVsdHMgPT09ICcnKSB7XHJcbiAgICAgICAgICAgIGludmFsaWRGaWVsZHMucHVzaCgnYWR1bHRzJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgYWR1bHRDb3VudCA9IHBhcnNlSW50KHJvb21zKSAqIHBhcnNlSW50KE1BWF9DQVBBQ0lUWV9HRU5FUkFMKTtcclxuICAgICAgICBpZihwYXJzZUludChhZHVsdHMpID4gYWR1bHRDb3VudCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIE1BWF9DQVBBQ0lUWV9NU0cgOiBcIlNvcnJ5LiBXZSBhcmUgYWxsb3dpbmcgYSBtYXhpbXVtIG9mIFwiK01BWF9DQVBBQ0lUWV9HRU5FUkFMK1wiIG1lbWJlcnMgaW4gYSByb29tXCJcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoaW52YWxpZEZpZWxkcy5sZW5ndGggPT09IDAgKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgcGFyYW1zID0ge3N0YXJ0RGF0ZTogdGhpcy5zdGF0ZS5zdGFydERhdGUsIGVuZERhdGUgOiB0aGlzLnN0YXRlLmVuZERhdGUsIHJvb21zIDogdGhpcy5zdGF0ZS5yb29tcyxcclxuICAgICAgICAgICAgICAgIGFkdWx0cyA6IHRoaXMuc3RhdGUuYWR1bHRzLCBjaGlsZHJlbiA6IHRoaXMuc3RhdGUuY2hpbGRyZW59O1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzaG93RXJyb3IgOiBmYWxzZSwgaW5pdFNlYXJjaCA6ICB0cnVlLCBzZWFyY2hTdGVwIDogMSwgc3RhcnREYXRlOiB0aGlzLnN0YXRlLnN0YXJ0RGF0ZSwgZW5kRGF0ZSA6IHRoaXMuc3RhdGUuZW5kRGF0ZSwgcm9vbXMgOiB0aGlzLnN0YXRlLnJvb21zLFxyXG4gICAgICAgICAgICAgICAgYWR1bHRzIDogdGhpcy5zdGF0ZS5hZHVsdHMsIGNoaWxkcmVuIDogdGhpcy5zdGF0ZS5jaGlsZHJlbiwgaW52YWxpZEZpZWxkcyA6IGludmFsaWRGaWVsZHN9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dFcnJvciA6IHRydWUsIHN0YXJ0RGF0ZTogdGhpcy5zdGF0ZS5zdGFydERhdGUsIGVuZERhdGUgOiB0aGlzLnN0YXRlLmVuZERhdGUsIHJvb21zIDogdGhpcy5zdGF0ZS5yb29tcyxcclxuICAgICAgICAgICAgICAgIGFkdWx0cyA6IHRoaXMuc3RhdGUuYWR1bHRzLCBjaGlsZHJlbiA6IHRoaXMuc3RhdGUuY2hpbGRyZW4sIGludmFsaWRGaWVsZHMgOiBpbnZhbGlkRmllbGRzfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXNldFNlYXJjaCA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtzaG93RXJyb3IgOiBmYWxzZSwgaW5pdFNlYXJjaCA6ICBmYWxzZSwgc2VhcmNoU3RlcCA6IDAsIHN0YXJ0RGF0ZTogdGhpcy5zdGF0ZS50b2RheSwgZW5kRGF0ZSA6IHRoaXMuc3RhdGUudG9tb3Jyb3csIHJvb21zIDogJycsXHJcbiAgICAgICAgICAgIGFkdWx0cyA6ICcnLCBjaGlsZHJlbiA6ICcnLCBpbnZhbGlkRmllbGRzIDogW119KVxyXG4gICAgfVxyXG4gICAgYmFja1RvRGV0YWlsID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2luaXRTZWFyY2ggOiAgZmFsc2V9KVxyXG4gICAgfVxyXG4gICAgYmFja1RvQ2FydCA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtzZWFyY2hTdGVwIDogIDF9KVxyXG4gICAgfVxyXG5cclxuICAgIHNlbGVjdFJvb20gPSAocm9vbSwgdHlwZSxlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICBsZXQgc2VsZWN0ZWRSb29tcyA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRSb29tcztcclxuICAgICAgICBsZXQgc2VsZWN0ZWRSb29tSWRzID0gdGhpcy5zdGF0ZS5zZWxlY3RlZFJvb21JZHM7XHJcblxyXG4gICAgICAgIGxldCBob3RlbF9yb29tcyA9IHRoaXMucHJvcHMuaG90ZWxfcm9vbXNcclxuICAgICAgICBpZih0eXBlID09PSAnYWRkJyB8fCB0eXBlID09PSAnY2hvb3NlJykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzZWxlY3RlZFJvb21JZHMpXHJcbiAgICAgICAgICAgIGlmKCFzZWxlY3RlZFJvb21JZHMuaW5jbHVkZXMocm9vbS5yb29taWQpKXtcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkUm9vbUlkcy5wdXNoKHJvb20ucm9vbWlkKVxyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRSb29tcy5wdXNoKHJvb20pO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocm9vbSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodHlwZSA9PT0gJ3JlbW92ZScpIHtcclxuICAgICAgICAgICAgaWYodGhpcy5zdGF0ZS5zZWFyY2hTdGVwID09PSAyICYmIHNlbGVjdGVkUm9vbXMubGVuZ3RoID09PTEpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbVJlbW92YWxNZXNzYWdlIDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmKHNlbGVjdGVkUm9vbUlkcy5pbmNsdWRlcyhyb29tLnJvb21pZCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBzZWxlY3RlZFJvb21JZHMuaW5kZXhPZihyb29tLnJvb21pZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkUm9vbUlkcy5zcGxpY2UoaW5kZXgsIDEpXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRSb29tcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGhvdGVsX3Jvb21zID0gaG90ZWxfcm9vbXMubWFwKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihpdGVtLnJvb21pZCA9PT0gcm9vbS5yb29taWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ucXR5ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkUm9vbUlkcyA6c2VsZWN0ZWRSb29tSWRzLFxyXG4gICAgICAgICAgICBzZWxlY3RlZFJvb21zIDogc2VsZWN0ZWRSb29tcyxcclxuICAgICAgICAgICAgaG90ZWxfcm9vbXMgOiBob3RlbF9yb29tc1xyXG4gICAgICAgIH0sIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGlmKHR5cGUgIT09ICdyZW1vdmUnKSB7XHJcbiAgICAgICAgICAgICAgICAodHlwZSA9PT0gJ2FkZCcgfHwgdHlwZSA9PT0gJ2Nob29zZScgKSA/IHRoaXMuYWRkUXR5KHJvb20pIDogdGhpcy5zdWJRdHkocm9vbSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb250aW51ZVRvU3VtbWFyeSA9ICgpID0+IHtcclxuICAgICAgICBsZXQgYWR1bHRDb3VudCA9IHBhcnNlSW50KHRoaXMuc3RhdGUuYWR1bHRzKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhhZHVsdENvdW50KTtcclxuICAgICAgICBsZXQgcGVyc29uT2NjdXBpZWQgPSAwO1xyXG4gICAgICAgIGxldCBzZWxlY3RlZFJvb21zID0gdGhpcy5zdGF0ZS5zZWxlY3RlZFJvb21zO1xyXG4gICAgICAgIGxldCB0b3RhbFJvb21zID0gMDtcclxuICAgICAgICBpZihzZWxlY3RlZFJvb21zLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgZm9yKHZhciBpPTA7IGk8c2VsZWN0ZWRSb29tcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHF0eSA9IHNlbGVjdGVkUm9vbXNbaV0ucXR5O1xyXG4gICAgICAgICAgICAgICAgdG90YWxSb29tcyArPSBwYXJzZUludChxdHkpO1xyXG4gICAgICAgICAgICAgICAgbGV0IG9jY3VwYW5jeSA9IHBhcnNlSW50KHNlbGVjdGVkUm9vbXNbaV0ubWF4X2NhcGFjaXR5X2FkdWx0KTtcclxuICAgICAgICAgICAgICAgIGxldCBleHRyYV9vY2N1cGFuY3kgPSBzZWxlY3RlZFJvb21zW2ldLmV4dHJhYmVkID09PSAneWVzJz8gIDE6IDA7XHJcbiAgICAgICAgICAgICAgICBsZXQgdG90YWxfb2NjdXBhbmN5ID0gb2NjdXBhbmN5ICsgZXh0cmFfb2NjdXBhbmN5O1xyXG4gICAgICAgICAgICAgICAgcGVyc29uT2NjdXBpZWQgKz0gcGFyc2VJbnQocXR5KSAqdG90YWxfb2NjdXBhbmN5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihzZWxlY3RlZFJvb21zLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGNhbm5vdENvbnRpbnVlIDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGNhbm5vdENvbnRpbnVlTWVzc2FnZSA6IFwiUGxlYXNlIHNlbGVjdCBhdGxlYXN0IGEgcm9vbSB0byBwcm9jZWVkXCJcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZihhZHVsdENvdW50ID4gcGVyc29uT2NjdXBpZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBjYW5ub3RDb250aW51ZSA6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBjYW5ub3RDb250aW51ZU1lc3NhZ2UgOiBcIlNvcnJ5LlwiKyBhZHVsdENvdW50K1wiIHBlcnNvbnMgY2Fubm90IGJlIG9jY3VwaWVkIGluIFwiK3RvdGFsUm9vbXMrXCIgcm9vbXNcIlxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYodGhpcy5zdGF0ZS5zZWxlY3RlZFJvb21zLmxlbmd0aCA+MCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoU3RlcCA6MlxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICBhZGRRdHkgPSAocm9vbSkgPT4ge1xyXG4gICAgICAgIGxldCBzZWxlY3RlZFJvb21zID0gdGhpcy5zdGF0ZS5zZWxlY3RlZFJvb21zO1xyXG4gICAgICAgIGxldCBzZWxlY3RlZFJvb21JZHMgPSB0aGlzLnN0YXRlLnNlbGVjdGVkUm9vbUlkcztcclxuICAgICAgICBsZXQgcm9vbUlkID0gcm9vbS5yb29taWQ7XHJcbiAgICAgICAgc2VsZWN0ZWRSb29tcyA9IHNlbGVjdGVkUm9vbXMubWFwKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBpZihpdGVtLnJvb21pZCA9PT0gcm9vbUlkKSB7XHJcbiAgICAgICAgICAgICAgICBpZihpdGVtLnF0eSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGl0ZW0ucXR5IDwgaXRlbS5yb29tY291bnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5xdHkgPSBwYXJzZUludChpdGVtLnF0eSkgKzE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5xdHkgPSAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBzZWxlY3RlZFJvb21zIDogc2VsZWN0ZWRSb29tcyxcclxuICAgICAgICAgICAgc2VsZWN0ZWRSb29tSWRzIDogc2VsZWN0ZWRSb29tSWRzXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHN1YlF0eSA9IChyb29tKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocm9vbSlcclxuICAgICAgICBsZXQgc2VsZWN0ZWRSb29tcyA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRSb29tcztcclxuICAgICAgICBsZXQgc2VsZWN0ZWRSb29tSWRzID0gdGhpcy5zdGF0ZS5zZWxlY3RlZFJvb21JZHM7XHJcbiAgICAgICAgbGV0IHJvb21JZCA9IHJvb20ucm9vbWlkO1xyXG5cclxuICAgICAgICBpZihyb29tLnF0eSAmJiByb29tLnF0eSA9PT0gMSkge1xyXG4gICAgICAgICAgICBpZih0aGlzLnN0YXRlLnNlYXJjaFN0ZXAgPT09IDIgJiYgc2VsZWN0ZWRSb29tcy5sZW5ndGggPT09MSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtUmVtb3ZhbE1lc3NhZ2UgOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcm9vbS5xdHkgPSAwO1xyXG4gICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gc2VsZWN0ZWRSb29tSWRzLmluZGV4T2Yocm9vbS5yb29taWQpO1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRSb29tSWRzLnNwbGljZShpbmRleCwxKVxyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRSb29tcy5zcGxpY2UoaW5kZXgsMSlcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcblxyXG4gICAgICAgICAgICBzZWxlY3RlZFJvb21zID0gc2VsZWN0ZWRSb29tcy5tYXAoaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZihpdGVtLnJvb21pZCA9PT0gcm9vbUlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5xdHkgPSAoaXRlbS5xdHkgJiYgaXRlbS5xdHkgPjApID8gcGFyc2VJbnQoaXRlbS5xdHkpIC0xIDowO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgc2VsZWN0ZWRSb29tcyA6IHNlbGVjdGVkUm9vbXMsXHJcbiAgICAgICAgICAgIHNlbGVjdGVkUm9vbUlkcyA6IHNlbGVjdGVkUm9vbUlkc1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlUXR5ID0gKHJvb20sZSkgPT4ge1xyXG4gICAgICAgIGxldCBxdHkgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICBsZXQgc2VsZWN0ZWRSb29tcyA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRSb29tcztcclxuICAgICAgICBsZXQgc2VsZWN0ZWRSb29tSWRzID0gdGhpcy5zdGF0ZS5zZWxlY3RlZFJvb21JZHM7XHJcbiAgICAgICAgbGV0IHJvb21JZCA9IHJvb20ucm9vbWlkO1xyXG4gICAgICAgIHNlbGVjdGVkUm9vbXMgPSBzZWxlY3RlZFJvb21zLm1hcChpdGVtID0+IHtcclxuICAgICAgICAgICAgaWYoaXRlbS5yb29taWQgPT09IHJvb21JZCkge1xyXG4gICAgICAgICAgICAgICAgaXRlbS5xdHkgPSAoaXRlbS5xdHkgJiYgaXRlbS5xdHkgPjApID8gcGFyc2VJbnQoaXRlbS5xdHkpIC0xIDogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuc2VsZWN0Um9vbShyb29tKVxyXG4gICAgfVxyXG5cclxuICAgIHNhdmVCb29raW5nID0gKGUsIGFtb3VudCwgcHJpbmNpcGxlQW1vdW50LCBkaXNjb3VudCwgcHJvZ3JhbV9kZXNjcmlwdGlvbiwgZ3N0KSA9PiB7XHJcblxyXG5cclxuICAgICAgICBsZXQgZmlyc3RuYW1lID0gdGhpcy5zdGF0ZS5maXJzdG5hbWU7XHJcbiAgICAgICAgbGV0IGxhc3RuYW1lID0gdGhpcy5zdGF0ZS5sYXN0bmFtZTtcclxuICAgICAgICBsZXQgYWRkcmVzczEgPSB0aGlzLnN0YXRlLmFkZHJlc3MxO1xyXG4gICAgICAgIGxldCBhZGRyZXNzMiA9IHRoaXMuc3RhdGUuYWRkcmVzczI7XHJcbiAgICAgICAgbGV0IGNpdHkgPSB0aGlzLnN0YXRlLmNpdHk7XHJcbiAgICAgICAgbGV0IHN0YXRlID0gdGhpcy5zdGF0ZS5zdGF0ZTtcclxuICAgICAgICBsZXQgY291bnRyeSA9IHRoaXMuc3RhdGUuY291bnRyeTtcclxuICAgICAgICBsZXQgcGluY29kZSA9IHRoaXMuc3RhdGUucGluY29kZTtcclxuICAgICAgICBsZXQgbW9iaWxlID0gdGhpcy5zdGF0ZS5tb2JpbGU7XHJcbiAgICAgICAgbGV0IGFkZGl0aW9uYWxwaG9uZW51bWJlciA9IHRoaXMuc3RhdGUuYWRkaXRpb25hbHBob25lbnVtYmVyO1xyXG4gICAgICAgIGxldCBlbWFpbCA9IHRoaXMuc3RhdGUuZW1haWw7XHJcbiAgICAgICAgbGV0IGludmFsaWRGaWVsZHMgPSBbXTtcclxuICAgICAgICBpZihmaXJzdG5hbWUgPT09ICcnKSB7XHJcbiAgICAgICAgICAgIGludmFsaWRGaWVsZHMucHVzaCgnZmlyc3RuYW1lJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGxhc3RuYW1lID09PSAnJykge1xyXG4gICAgICAgICAgICBpbnZhbGlkRmllbGRzLnB1c2goJ2xhc3RuYW1lJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGFkZHJlc3MxID09PSAnJykge1xyXG4gICAgICAgICAgICBpbnZhbGlkRmllbGRzLnB1c2goJ2FkZHJlc3MxJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGFkZHJlc3MyID09PSAnJykge1xyXG4gICAgICAgICAgICBpbnZhbGlkRmllbGRzLnB1c2goJ2FkZHJlc3MyJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGNpdHkgPT09ICcnKSB7XHJcbiAgICAgICAgICAgIGludmFsaWRGaWVsZHMucHVzaCgnY2l0eScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihzdGF0ZSA9PT0gJycpIHtcclxuICAgICAgICAgICAgaW52YWxpZEZpZWxkcy5wdXNoKCdzdGF0ZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihjb3VudHJ5ID09PSAnJykge1xyXG4gICAgICAgICAgICBpbnZhbGlkRmllbGRzLnB1c2goJ2NvdW50cnknKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYocGluY29kZSA9PT0gJycpIHtcclxuICAgICAgICAgICAgaW52YWxpZEZpZWxkcy5wdXNoKCdwaW5jb2RlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKG1vYmlsZSA9PT0gJycpIHtcclxuICAgICAgICAgICAgaW52YWxpZEZpZWxkcy5wdXNoKCdtb2JpbGUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoYWRkaXRpb25hbHBob25lbnVtYmVyID09PSAnJykge1xyXG4gICAgICAgICAgICBpbnZhbGlkRmllbGRzLnB1c2goJ2FkZGl0aW9uYWxwaG9uZW51bWJlcicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihlbWFpbCA9PT0gJycpIHtcclxuICAgICAgICAgICAgaW52YWxpZEZpZWxkcy5wdXNoKCdlbWFpbCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoaW52YWxpZEZpZWxkcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgbGV0IHNlbGVjdGVkUm9vbXMgPSB0aGlzLnN0YXRlLnNlbGVjdGVkUm9vbXM7XHJcbiAgICAgICAgICAgIGxldCBjaGVja2luZGF0ZSA9IG1vbWVudCh0aGlzLnN0YXRlLnN0YXJ0RGF0ZSkuZm9ybWF0KCd5eXl5LU1NLUREJyk7XHJcbiAgICAgICAgICAgIGxldCBjaGVja291dGRhdGUgPSBtb21lbnQodGhpcy5zdGF0ZS5lbmREYXRlKS5mb3JtYXQoJ3l5eXktTU0tREQnKTtcclxuICAgICAgICAgICAgbGV0IGFkdWx0cyA9IHRoaXMuc3RhdGUuYWR1bHRzIHx8IDA7XHJcbiAgICAgICAgICAgIGxldCBjaGlsZHJlbiA9IHRoaXMuc3RhdGUuY2hpbGRyZW4gfHwgMDtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgdmFyIHN0YXJ0ID0gbW9tZW50KGNoZWNraW5kYXRlLCBcIllZWVktTU0tRERcIik7XHJcbiAgICAgICAgICAgIHZhciBlbmQgPSBtb21lbnQoY2hlY2tvdXRkYXRlLCBcIllZWVktTU0tRERcIik7XHJcblxyXG4gICAgICAgICAgICBsZXQgbm9PZkRheXMgPSBtb21lbnQuZHVyYXRpb24oZW5kLmRpZmYoc3RhcnQpKS5hc0RheXMoKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBub09mcm9vbXMgPSB0aGlzLnN0YXRlLnJvb21zO1xyXG4gICAgICAgICAgICBsZXQgdGF4YW1vdW50ID0gZ3N0O1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coc2VsZWN0ZWRSb29tcylcclxuXHJcbiAgICAgICAgICAgIGxldCBzZWxlY3RlZFNwUmVxcyA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRTcFJlcXM7XHJcblxyXG5cclxuICAgICAgICAgICAgbGV0IGJvb2tlZFJvb21zID0gW107XHJcblxyXG4gICAgICAgICAgICBmb3IobGV0IGk9MDsgaTxzZWxlY3RlZFJvb21zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcm9vbSA9IHtcclxuICAgICAgICAgICAgICAgICAgICBcInJvb21pZFwiIDogc2VsZWN0ZWRSb29tc1tpXS5yb29taWQsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJub29mYWR1bHRzXCIgOiAgc2VsZWN0ZWRSb29tc1tpXS5tYXhfY2FwYWNpdHlfYWR1bHQsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJub29mY2hpbGRzXCIgOiAgMCxcclxuICAgICAgICAgICAgICAgICAgICBcImV4dHJhYmVkXCIgOiAgc2VsZWN0ZWRSb29tc1tpXS5leHRyYWJlZGNvdW50LFxyXG4gICAgICAgICAgICAgICAgICAgIFwicHJpY2VcIiA6ICBzZWxlY3RlZFJvb21zW2ldLnJvb21fcHJpY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJleHRyYWJlZHByaWNlXCIgOiAgMCxcclxuICAgICAgICAgICAgICAgICAgICBcInRheGFtb3VudFwiOiAgMCxcclxuICAgICAgICAgICAgICAgICAgICBcInRvdGFscHJpY2VcIiA6ICBwYXJzZUZsb2F0KHNlbGVjdGVkUm9vbXNbaV0ucm9vbV9wcmljZSkgKiBub09mRGF5cyxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJvb2tlZFJvb21zLnB1c2gocm9vbSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBwYXJhbXMgPSB7XHJcbiAgICAgICAgICAgICAgICBcImhvdGVsX2lkXCI6IHRoaXMuc3RhdGUuaG90ZWxfaWQsXHJcbiAgICAgICAgICAgICAgICBcImNoZWNraW5kYXRlXCI6IGNoZWNraW5kYXRlLFxyXG4gICAgICAgICAgICAgICAgXCJjaGVja291dGRhdGVcIjogY2hlY2tvdXRkYXRlLFxyXG4gICAgICAgICAgICAgICAgXCJub29mYWR1bHRzXCI6IGFkdWx0cyxcclxuICAgICAgICAgICAgICAgIFwibm9vZmNoaWxkc1wiOiBjaGlsZHJlbixcclxuICAgICAgICAgICAgICAgIFwibm9vZnJvb21zXCI6IG5vT2Zyb29tcyxcclxuICAgICAgICAgICAgICAgIFwicHJpY2VcIiA6IHByaW5jaXBsZUFtb3VudCxcclxuICAgICAgICAgICAgICAgIFwidGF4YW1vdW50XCI6IHRheGFtb3VudCxcclxuICAgICAgICAgICAgICAgIFwidG90YWxwcmljZVwiOiBhbW91bnQsXHJcbiAgICAgICAgICAgICAgICBcImZpcnN0bmFtZVwiOiBmaXJzdG5hbWUsXHJcbiAgICAgICAgICAgICAgICBcImxhc3RuYW1lXCI6IGxhc3RuYW1lLFxyXG4gICAgICAgICAgICAgICAgXCJhZGRyZXNzMVwiOiBhZGRyZXNzMSxcclxuICAgICAgICAgICAgICAgIFwiYWRkcmVzczJcIjogYWRkcmVzczIsXHJcbiAgICAgICAgICAgICAgICBcImNpdHlcIjogY2l0eSxcclxuICAgICAgICAgICAgICAgIFwic3RhdGVcIjogc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBcImNvdW50cnlcIjogY291bnRyeSxcclxuICAgICAgICAgICAgICAgIFwicGluY29kZVwiOiBwaW5jb2RlLFxyXG4gICAgICAgICAgICAgICAgXCJtb2JpbGVcIjogbW9iaWxlLFxyXG4gICAgICAgICAgICAgICAgXCJlbWFpbFwiOiBlbWFpbCxcclxuICAgICAgICAgICAgICAgIFwiaWRwcm9vZlwiOiBcInRlc3QucGRmXCIsXHJcbiAgICAgICAgICAgICAgICBcInJvb21zXCI6IGJvb2tlZFJvb21zLFxyXG4gICAgICAgICAgICAgICAgXCJhZGRpdGlvbmFscGhvbmVudW1iZXJcIjogbW9iaWxlLFxyXG4gICAgICAgICAgICAgICAgXCJzcGxyZXF1ZXN0XCIgOiBzZWxlY3RlZFNwUmVxcy5sZW5ndGggPjAgID8gSlNPTi5zdHJpbmdpZnkoc2VsZWN0ZWRTcFJlcXMpIDogXCJcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHBhcmFtcylcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5zYXZlQm9va2luZyhwYXJhbXMpO1xyXG5cclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgaW52YWxpZEZpZWxkcyA6IFtdLFxyXG4gICAgICAgICAgICAgICAgdG90YWxBbW91bnQgOiBhbW91bnQsXHJcbiAgICAgICAgICAgICAgICBwcmluY2lwbGVBbW91bnQgOiBwcmluY2lwbGVBbW91bnQsXHJcbiAgICAgICAgICAgICAgICBkaXNjb3VudCA6IGRpc2NvdW50LFxyXG4gICAgICAgICAgICAgICAgcHJvZ3JhbV9kZXNjcmlwdGlvbiA6IHByb2dyYW1fZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICBnc3QgOiBnc3QsXHJcbiAgICAgICAgICAgICAgICBjaGVja2luZGF0ZSA6IGNoZWNraW5kYXRlLFxyXG4gICAgICAgICAgICAgICAgY2hlY2tvdXRkYXRlIDogY2hlY2tvdXRkYXRlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIHNob3dQcm9maWxlSW5mb0Vycm9yIDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGludmFsaWRGaWVsZHMgOiBpbnZhbGlkRmllbGRzLFxyXG4gICAgICAgICAgICAgICAgdG90YWxBbW91bnQgOiBhbW91bnQsXHJcbiAgICAgICAgICAgICAgICBwcmluY2lwbGVBbW91bnQgOiBwcmluY2lwbGVBbW91bnQsXHJcbiAgICAgICAgICAgICAgICBkaXNjb3VudCA6IGRpc2NvdW50LFxyXG4gICAgICAgICAgICAgICAgcHJvZ3JhbV9kZXNjcmlwdGlvbiA6IHByb2dyYW1fZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICBnc3QgOiBnc3RcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGhpZGVQcm9maWxlSW5mb0Vycm9yID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBzaG93UHJvZmlsZUluZm9FcnJvciA6IGZhbHNlXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjb250aW51ZVRvUGF5bWVudCA9ICgpID0+IHtcclxuICAgICAgICBsZXQgdGhhdD10aGlzO1xyXG4gICAgICAgIGxldCBvcHRpb25zID0ge1xyXG4gICAgICAgICAgICAvLyBrZXk6ICdyenBfbGl2ZV91TlFnejZyT0dROTZxRScsXHJcbiAgICAgICAgICAgIGtleTogJ3J6cF90ZXN0X3JuRUg1STROSHVhR0p4JyxcclxuICAgICAgICAgICAgYW1vdW50OiBwYXJzZUZsb2F0KHRoaXMuc3RhdGUudG90YWxBbW91bnQpKjEwMCwgLy8gID0gSU5SIDFcclxuICAgICAgICAgICAgbmFtZTogJ1VUSCBCb29raW5nJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdQbGVhc2UgcGF5IHRoZSBib29raW5nIGNoYXJnZXMgaGVyZSB0byBjb25maXJtJyxcclxuICAgICAgICAgICAgaW1hZ2U6ICdodHRwczovL3V0aGRldi5uZXZlcmJlZm9yZWhvbGlkYXlzLmNvbS9hc3NldHMvaW1hZ2VzL3V0aC1sb2dvLWJsYWNrLnBuZycsXHJcbiAgICAgICAgICAgIC8vIG9yZGVyX2lkOiB0aGlzLnN0YXRlLm9yZGVySWQsXHJcbiAgICAgICAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICB0aGF0LnNldFN0YXRlKHtQYXltZW50SWQ6IHJlc3BvbnNlLnJhem9ycGF5X3BheW1lbnRfaWQsIHRvdGFsQW1vdW50IDogdGhhdC5zdGF0ZS50b3RhbEFtb3VudCwgZGF0ZSA6IG1vbWVudChuZXcgRGF0ZSgpKS5mb3JtYXQoJ0REIE1NTSBZWVlZJykgLCBlbWFpbCA6dGhhdC5zdGF0ZS5lbWFpbCwgbW9iaWxlIDogdGhhdC5zdGF0ZS5tb2JpbGUgfSlcclxuICAgICAgICAgICAgICAgIC8vbGV0IFBheW1lbnRVcmwgPSBgaHR0cDovLzE1OS42NS4xNTMuNTkvc2l0ZS8jL3BheW1lbnQtc3VjY2Vzcy9gK3RoaXMucHJvcHMuYm9va2luZ0RhdGEuYm9va2luZ0lkO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcGF5bWVudElkID0gcmVzcG9uc2UucmF6b3JwYXlfcGF5bWVudF9pZDtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgUGF5bWVudFVybCA9IGBodHRwczovL3V0aGRldi5uZXZlcmJlZm9yZWhvbGlkYXlzLmNvbS9wYXltZW50LXN1Y2Nlc3M/cnBfaWQ9YCtwYXltZW50SWQrYCZyYW10PWArdGhhdC5zdGF0ZS50b3RhbEFtb3VudCtgJm1vYmlsZT1gK3RoYXQuc3RhdGUubW9iaWxlK2AmZW1haWw9YCt0aGF0LnN0YXRlLmVtYWlsK2AmbWV0aG9kPUNhcmQgcGF5bWVudCZkYXRlPWArbW9tZW50KHRoYXQuc3RhdGUudG9kYXkpLmZvcm1hdCgnREQgTU1NLCBZWVlZJyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgcGFyYW1zID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiX2lkXCI6IHBheW1lbnRJZCxcclxuICAgICAgICAgICAgICAgICAgICBcInJlZmVyZW5jZVwiOiAnVVRIJyxcclxuICAgICAgICAgICAgICAgICAgICBcImRpc2NvdW50XCI6IHRoYXQuc3RhdGUuZGlzY291bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJnc3RcIjogdGhhdC5zdGF0ZS5nc3QsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJkZXNjXCI6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIFwicHJpbmNpcGFsXCI6IHRoYXQuc3RhdGUucHJpbmNpcGxlQW1vdW50LFxyXG4gICAgICAgICAgICAgICAgICAgIFwicGF5bWVudHVybFwiOiBQYXltZW50VXJsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwicHJvZFwiOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy90aGF0LnByb3BzLmNvbmZpcm1Cb29raW5nKHBhcmFtcyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgYm9va1BhcmFtcyA9IHtcclxuICAgICAgICAgICAgICAgICAgICBib29raW5nSWQ6IHRoYXQucHJvcHMuYm9va2luZ0RhdGEuYm9va2luZ0lkXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGF0LnByb3BzLmNvbmZpcm1Cb29raW5nKGJvb2tQYXJhbXMpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwcmVmaWxsOiB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnVVRIJyxcclxuICAgICAgICAgICAgICAgIGNvbnRhY3Q6ICcnLFxyXG4gICAgICAgICAgICAgICAgZW1haWw6ICcnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG5vdGVzOiB7XHJcbiAgICAgICAgICAgICAgICBhZGRyZXNzOiAnVVRIJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0aGVtZToge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICcjM2ZhOWY1JyxcclxuICAgICAgICAgICAgICAgIGhpZGVfdG9wYmFyOiBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKG9wdGlvbnMpO1xyXG4gICAgICAgIHZhciByenAxID0gbmV3IHdpbmRvdy5SYXpvcnBheShvcHRpb25zKTtcclxuICAgICAgICByenAxLm9uKCdwYXltZW50LmZhaWxlZCcsIGZ1bmN0aW9uIChyZXNwb25zZSl7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3BvbnNlLmVycm9yLmRlc2NyaXB0aW9uKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByenAxLm9wZW4oKTtcclxuICAgIH1cclxuXHJcbiAgICBoaWRlRXJyb3IgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHNob3dFcnJvciA6IGZhbHNlXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBoaWRlSXRlbVJlbW92YWxNZXNzYWdlID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBpdGVtUmVtb3ZhbE1lc3NhZ2UgOiBmYWxzZSxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGVtcHR5Q2FydCA9ICgpID0+IHtcclxuICAgICAgICBsZXQgc2VsZWN0ZWRSb29tcyA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRSb29tcztcclxuXHJcbiAgICAgICAgc2VsZWN0ZWRSb29tcyA9IHNlbGVjdGVkUm9vbXMubWFwKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBpdGVtLnF0eSA9IDA7XHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgICAgIH0pXHJcblxyXG5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgaXRlbVJlbW92YWxNZXNzYWdlIDogZmFsc2UsXHJcbiAgICAgICAgICAgIHNlbGVjdGVkUm9vbXMgOiBbXSxcclxuICAgICAgICAgICAgc2VsZWN0ZWRSb29tSWRzIDogW10sXHJcbiAgICAgICAgICAgIHNlYXJjaFN0ZXAgOiAxXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGhpZGVDYW5ub3RDb250aW51ZSA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgY2Fubm90Q29udGludWUgOiBmYWxzZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0Z1bGxEZXRhaWwgPSAoaWQpID0+IHtcclxuICAgICAgICBsZXQgaG90ZWxfcm9vbXMgPSB0aGlzLnByb3BzLmhvdGVsX3Jvb21zO1xyXG4gICAgICAgIGxldCByb29tTGlzdCA9ICBob3RlbF9yb29tcy5maWx0ZXIoaXRlbSA9PiBpdGVtLnJvb21pZCA9PT0gaWQpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBzaG93RGV0YWlsU3RhdHVzIDogdHJ1ZSxcclxuICAgICAgICAgICAgcm9vbUlkIDogaWQsXHJcbiAgICAgICAgICAgIHJvb21EZXRhaWwgOiByb29tTGlzdC5sZW5ndGggPiAwICYmIHJvb21MaXN0WzBdXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBoaWRlRnVsbERldGFpbCA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgc2hvd0RldGFpbFN0YXR1cyA6IGZhbHNlXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBzaG93U3BlY2lhbFJlcXVlc3RzID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBzaG93U3BSZXFTdGF0IDogdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBoaWRlU3BlY2lhbFJlcXVlc3RzID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBzaG93U3BSZXFTdGF0IDogZmFsc2VcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVNwU2VsZWN0aW9uID0gKGUsIHNwKSA9PiB7XHJcbiAgICAgICAgbGV0IHNlbGVjdGVkU3BSZXFJZHMgPSBbLi4udGhpcy5zdGF0ZS5zZWxlY3RlZFNwUmVxSWRzXTtcclxuICAgICAgICBsZXQgc2VsZWN0ZWRTcFJlcXMgPSBbLi4udGhpcy5zdGF0ZS5zZWxlY3RlZFNwUmVxc107XHJcblxyXG4gICAgICAgIGlmKGUudGFyZ2V0LmNoZWNrZWQpIHtcclxuICAgICAgICAgICAgc2VsZWN0ZWRTcFJlcUlkcy5wdXNoKHNwLnNwX2lkKVxyXG4gICAgICAgICAgICBzZWxlY3RlZFNwUmVxcy5wdXNoKHNwKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IGluZGV4ID0gc2VsZWN0ZWRTcFJlcUlkcy5pbmRleE9mKHNwLnNwX2lkKTtcclxuICAgICAgICAgICAgc2VsZWN0ZWRTcFJlcUlkcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICBzZWxlY3RlZFNwUmVxcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkU3BSZXFzIDogc2VsZWN0ZWRTcFJlcXMsXHJcbiAgICAgICAgICAgIHNlbGVjdGVkU3BSZXFJZHMgOiBzZWxlY3RlZFNwUmVxSWRzXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVTcCA9IChlLCBzcF9pZCkgPT4ge1xyXG4gICAgICAgIGxldCBzZWxlY3RlZFNwUmVxSWRzID0gWy4uLnRoaXMuc3RhdGUuc2VsZWN0ZWRTcFJlcUlkc107XHJcbiAgICAgICAgbGV0IHNlbGVjdGVkU3BSZXFzID0gWy4uLnRoaXMuc3RhdGUuc2VsZWN0ZWRTcFJlcXNdO1xyXG4gICAgICAgIGxldCBpbmRleCA9IHNlbGVjdGVkU3BSZXFJZHMuaW5kZXhPZihzcF9pZCk7XHJcbiAgICAgICAgc2VsZWN0ZWRTcFJlcUlkcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIHNlbGVjdGVkU3BSZXFzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkU3BSZXFzIDogc2VsZWN0ZWRTcFJlcXMsXHJcbiAgICAgICAgICAgIHNlbGVjdGVkU3BSZXFJZHMgOiBzZWxlY3RlZFNwUmVxSWRzXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9XHJcblxyXG4gICAgaGlkZVBlbmRpbmdNZXNzYWdlID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBzaG93UGVuZGluZ01lc3NhZ2UgOiBmYWxzZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlQ29udGVudCA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgZXhwYW5kQ29udGVudCA6ICF0aGlzLnN0YXRlLmV4cGFuZENvbnRlbnRcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMuaG90ZWxEZXRhaWwpXHJcbiAgICAgICAgLy9sZXQgaG90ZWxEZXRhaWwgPSB0aGlzLnByb3BzLmhvdGVsRGV0YWlsO1xyXG4gICAgICAgIGxldCBob3RlbERldGFpbCA9IHRoaXMucHJvcHMuaG90ZWxEZXRhaWw7XHJcbiAgICAgICAgbGV0IGJhbm5lckltYWdlcyA9IHRoaXMucHJvcHMuYmFubmVySW1hZ2VzIHx8IFtdO1xyXG5cclxuXHJcbiAgICAgICAgbGV0IGdhbGxlcnlJbWFnZXMgPSB0aGlzLnByb3BzLmdhbGxlcnlJbWFnZXMgfHwgW107XHJcbiAgICAgICAgbGV0IHN0YXJ0RGF0ZSA9IHRoaXMuc3RhdGUuc3RhcnREYXRlO1xyXG4gICAgICAgIGxldCBlbmREYXRlID0gdGhpcy5zdGF0ZS5lbmREYXRlO1xyXG5cclxuICAgICAgICBsZXQgaG90ZWxfcm9vbXMgPSB0aGlzLnByb3BzLmhvdGVsX3Jvb21zO1xyXG4gICAgICAgIGxldCBnZW5lcmFsX2ZhY2lsaXRpZXMgPSAgaG90ZWxEZXRhaWwgPyBob3RlbERldGFpbC5ob3RlbF9mYWNpbGl0aWVzIDogW107XHJcbiAgICAgICAgbGV0IGhvdGVsZmFjaWxpdGllcyA9IGhvdGVsRGV0YWlsID8gaG90ZWxEZXRhaWwuaG90ZWxmYWNpbGl0aWVzIDogW107XHJcbiAgICAgICAgbGV0IHJvb21UeXBlcyA9IHRoaXMuc3RhdGUucm9vbVR5cGVzIHx8IFtdO1xyXG5cclxuICAgICAgICBsZXQgc2VsZWN0ZWRSb29tcyA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRSb29tcyB8fCBbXTtcclxuICAgICAgICBsZXQgc3BSZXF1ZXN0cyA9IHRoaXMuc3RhdGUuc3BSZXF1ZXN0cyB8fCBbXTtcclxuICAgICAgICBsZXQgc2VsZWN0ZWRTcFJlcUlkcyA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRTcFJlcUlkcyB8fCBbXTtcclxuICAgICAgICBsZXQgc2VsZWN0ZWRTcFJlcXMgPSB0aGlzLnN0YXRlLnNlbGVjdGVkU3BSZXFzIHx8IFtdO1xyXG5cclxuICAgICAgICBsZXQgdG90YWxfY29zdCA9MDtcclxuICAgICAgICBsZXQgdG90YWxfZ3N0ID0wO1xyXG4gICAgICAgIGlmKHNlbGVjdGVkUm9vbXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBmb3IodmFyIGk9MDsgaTxzZWxlY3RlZFJvb21zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB0b3RhbF9jb3N0ICs9IChwYXJzZUZsb2F0KHNlbGVjdGVkUm9vbXNbaV0ucm9vbV9wcmljZSkgKiBwYXJzZUludChzZWxlY3RlZFJvb21zW2ldLnF0eSkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoc2VsZWN0ZWRTcFJlcXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBmb3IodmFyIGk9MDsgaTxzZWxlY3RlZFNwUmVxcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYoc2VsZWN0ZWRTcFJlcXNbaV0uY2F0ZWdvcnkgPT09ICdwYXlhYmxlJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsX2Nvc3QgKz0gcGFyc2VGbG9hdChzZWxlY3RlZFNwUmVxc1tpXS5yYXRlKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRvdGFsX2dzdCA9ICh0b3RhbF9jb3N0KjEwKS8xMDA7XHJcbiAgICAgICAgbGV0IGdyYW5kX3RvdGFsID0gdG90YWxfY29zdCsgdG90YWxfZ3N0O1xyXG4gICAgICAgIC8vZ3JhbmRfdG90YWwgPSBncmFuZF90b3RhbD4wPyBncmFuZF90b3RhbC50b0ZpeGVkKDIpOicnO1xyXG4gICAgICAgIGxldCByYXpvckdyYW5kVG90YWwgPSBncmFuZF90b3RhbCoxMDA7XHJcblxyXG4gICAgICAgIGxldCBpbnZhbGlkRmllbGRzID0gdGhpcy5zdGF0ZS5pbnZhbGlkRmllbGRzIHx8IFtdO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGludmFsaWRGaWVsZHMpXHJcblxyXG4gICAgICAgIGxldCBob3RlbEhpZ2hsaWdodHMgPSBob3RlbERldGFpbCA/IGhvdGVsRGV0YWlsLmhvdGVsaGlnaGxpZ2h0cyA6IFtdO1xyXG4gICAgICAgIGxldCBob3RlbFBvbGljaWVzID0gdGhpcy5zdGF0ZS5ob3RlbFBvbGljaWVzIHx8IFtdO1xyXG5cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coc2VsZWN0ZWRTcFJlcXMpXHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcblxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgY2hhclNldD1cIlVURi04XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8dGl0bGU+e2hvdGVsRGV0YWlsID8gaG90ZWxEZXRhaWwuaG90ZWxfbmFtZSA6J1VUSCd9PC90aXRsZT5cclxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e2hvdGVsRGV0YWlsID8gKGhvdGVsRGV0YWlsLmFkZHJlc3MgKyBcIiAgXCIgK2hvdGVsRGV0YWlsLnBob25lbm8gKyBcIiBcIiAraG90ZWxEZXRhaWwubW9iaWxlbm8gICsgaG90ZWxEZXRhaWwuaG90ZWxfZGVzYyApIDogJ1VUSCBHcm91cCBvZiBIb3RlbHMnIH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwia2V5d29yZHNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e2hvdGVsRGV0YWlsID8gKGhvdGVsRGV0YWlsLmFkZHJlc3MgLCBob3RlbERldGFpbC5waG9uZW5vICwgaG90ZWxEZXRhaWwubW9iaWxlbm8gLCBob3RlbERldGFpbC5ob3RlbF9kZXNjKSA6ICdiZXN0IGhvdGVscyBvZiBrb2NoaSwgYmVzdCBob3RlbHMnfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImF1dGhvclwiIGNvbnRlbnQ9XCJVVEggR3JvdXAgT2YgSG90ZWxzXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0eXBlXCIgY29udGVudD1cIndlYnNpdGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PXtob3RlbERldGFpbCA/IGhvdGVsRGV0YWlsLmhvdGVsX25hbWUgOidVVEgnfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIiBjb250ZW50PVwiVGhlIHRvdXJpc20gaXMgaW4gZnVsbCBzd2luZyBmb3IgdGhlIEdvZOKAmXMgb3duIGNvdW50cnkgYW5kIHRoZSBiZXN0IGhvdGVscyBpbiBLb2NoaSBhcmUgYWxzbyByZWFkeSB0byB3ZWxjb21lIHRoZSBndWVzdHMuIFRoZSBTdWdhciBob3RlbCBpbiBLb2NoaSBpcyBhIHByZXN0aWdpb3VzIG9uZSBpbiB0aGlzIGxpc3Qgd2hvc2UgbG9jYXRpb24gaXRzZWxmIGlzIHNpZ25pZmljYW50LlVUSCBpcyB0aGUgbGVhZGluZyBicmFuZCBpbiB0aGUgaG90ZWwgYnVzaW5lc3MgdGhhdCBpcyBydW5uaW5nIG1hbnkgaG90ZWxzIGFuZCByZXNvcnRzIGFsbCBvdmVyIHRoZSBjb3VudHJ5IGFuZCBvdXQgb2YgdGhlIGNvdW50cnkgdG9vIHN1Y2ggYXMgU3JpIExhbmthLCBEdWJhaSBhbmQgTWFsZGl2ZXMuXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnVybFwiIGNvbnRlbnQ9XCIlUFVCTElDX1VSTCVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6c2l0ZV9uYW1lXCIgY29udGVudD1cIlVUSCB8IEdyb3VwIG9mIEhvdGVsc1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9XCJodHRwOi8vMTU5LjY1LjE1My41OS9zaXRlL2Fzc2V0cy9pbWFnZXMvZmF2L29nLWltYWdlLmpwZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6Y2FyZFwiIGNvbnRlbnQ9XCJodHRwOi8vMTU5LjY1LjE1My41OS9zaXRlL2Fzc2V0cy9pbWFnZXMvZmF2L29nLWltYWdlLmpwZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6dGl0bGVcIiBjb250ZW50PVwiVVRIIHwgR3JvdXAgb2YgSG90ZWxzXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgICAgICAgICAgICA8bWFpbj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5uZXItcGFnZVwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8SG90ZWxOYXZiYXIgIHNjcm9sbFRvU2VjdGlvbj17dGhpcy5zY3JvbGxUb1NlY3Rpb259Lz5cclxuICAgICAgICAgICAgICAgICAgICB7aG90ZWxEZXRhaWwgJiZcclxuICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJkZXRhaWxzLWJhbm5uZXJcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcm91c2VsLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2Fyb3VzZWwtdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1Pntob3RlbERldGFpbC5ob3RlbF9uYW1lfTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsb2NhdGlvblwiPntob3RlbERldGFpbC5hZGRyZXNzfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29udGVudFNsaWRlciBpbWFnZXM9e2Jhbm5lckltYWdlc30vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnNlYXJjaFN0ZXAgIT09IDIgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYm9va2luZy1jb250YWluZXIgc3RpY2t5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9va2luZy1wYW5lbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvb2tpbmctcGFuZWwtbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib29raW5nLW9wdGlvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGUtcGlja2VyLXBhbmVsXCI+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERhdGVSYW5nZVBpY2tlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnREYXRlPXtzdGFydERhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmREYXRlPXtlbmREYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25TdGFydERhdGVDaGFuZ2U9e3RoaXMuc2V0U3RhcnREYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25FbmREYXRlQ2hhbmdlPXt0aGlzLnNldEVuZERhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5pbXVtRGF0ZT17bmV3IERhdGUoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbmltdW1MZW5ndGg9ezF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXQ9J2RkL01NL3l5eXknXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhbGU9e2VuR0J9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoe3N0YXJ0RGF0ZUlucHV0UHJvcHMsIGVuZERhdGVJbnB1dFByb3BzLCBmb2N1c30pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGF0ZS1yYW5nZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsnaW5wdXQnICsgKGZvY3VzID09PSBTVEFSVF9EQVRFID8gJyAtZm9jdXNlZCcgOiAnJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uc3RhcnREYXRlSW5wdXRQcm9wc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdTdGFydCBkYXRlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2RhdGUtcmFuZ2VfYXJyb3cnLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eydpbnB1dCcgKyAoZm9jdXMgPT09IEVORF9EQVRFID8gJyAtZm9jdXNlZCcgOiAnJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uZW5kRGF0ZUlucHV0UHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nRW5kIGRhdGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0RhdGVSYW5nZVBpY2tlcj5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VsZWN0LXBhbmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VsZWN0LWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwicm9vbXNcIiB2YWx1ZT17dGhpcy5zdGF0ZS5yb29tc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2ludmFsaWRGaWVsZHMuaW5jbHVkZXMoJ3Jvb21zJykgPyAnZXJyb3ItZmllbGQnIDogJyd9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPlJvb21zPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjFcIj4xPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjJcIj4yPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjNcIj4zPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjRcIj40PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjVcIj41PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjZcIj42PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjdcIj43PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjhcIj44PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjlcIj45Kzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlbGVjdC1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cImFkdWx0c1wiIHZhbHVlPXt0aGlzLnN0YXRlLmFkdWx0c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2ludmFsaWRGaWVsZHMuaW5jbHVkZXMoJ2FkdWx0cycpID8gJ2Vycm9yLWZpZWxkJyA6ICcnfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5BZHVsdHM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMVwiPjE8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMlwiPjI8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiM1wiPjM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNFwiPjQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNVwiPjU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNlwiPjY8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiN1wiPjc8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiOFwiPjg8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiOVwiPjkrPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VsZWN0LWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwiY2hpbGRyZW5cIiB2YWx1ZT17dGhpcy5zdGF0ZS5jaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2ludmFsaWRGaWVsZHMuaW5jbHVkZXMoJ2NoaWxkcmVuJykgPyAnZXJyb3ItZmllbGQnIDogJyd9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPkNoaWxkcmVuPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjBcIj4wPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjFcIj4xPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjJcIj4yPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjNcIj4zPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjRcIj40PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjVcIj41PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjZcIj42PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjdcIj43PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjhcIj44PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjlcIj45Kzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLk1BWF9DQVBBQ0lUWV9NU0cgIT09ICcnICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVycm9yLWZsZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLk1BWF9DQVBBQ0lUWV9NU0d9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9va2luZy1wYW5lbC1yaWdodFwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9va2luZy1idXR0b24tYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImdlbmVyYWwtYnRuXCIgb25DbGljaz17KCkgPT4gdGhpcy5zZWFyY2hSb29tcygpfT5Cb29rIE5vdzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgeyF0aGlzLnN0YXRlLmluaXRTZWFyY2ggJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb29tLXNlY3Rpb24gZmFjaWxpdGllc1wiIGlkPVwiaG90ZWwtb3ZlcnZpZXdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+T3ZlcnZpZXc8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJnZW5lcmFsLWluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJhZGRyZXNzLXNtLWljb1wiPntob3RlbERldGFpbC5hZGRyZXNzfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicGhvbmUtc20taWNvXCI+e2hvdGVsRGV0YWlsLnBob25lbm99ICwge2hvdGVsRGV0YWlsLm1vYmlsZW5vfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgIGNsYXNzTmFtZT1cIm1haWwtc20taWNvXCI+e2hvdGVsRGV0YWlsLmVtYWlsfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGV4dHJhLWNvbnRlbnQgJHt0aGlzLnN0YXRlLmV4cGFuZENvbnRlbnQgPyAnIGFjdGl2ZScgOiAnJ31gfT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJ2aWV3LWRlc2NyaXB0aW9uXCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWwgOiBob3RlbERldGFpbC5ob3RlbF9kZXNjfX0gLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aG90ZWxIaWdobGlnaHRzLmxlbmd0aCA+IDAgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWItaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5IaWdobGlnaHRzPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiaGlnaGxpZ2h0LXRhYlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aG90ZWxIaWdobGlnaHRzLm1hcChobCA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPntobC5oaWdobGlnaHRzfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvbGljeS1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3ViLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+SG90ZWwgUG9saWNpZXM8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkNoZWNrIEluIFRpbWU6IDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPntob3RlbERldGFpbCA/IGhvdGVsRGV0YWlsLmNoZWNraW4gOiAnJ308L3NwYW4+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkNoZWNrIE91dCBUaW1lOiA8c3BhbiBjbGFzc05hbWU9XCJmb250LWJvbGRcIj57aG90ZWxEZXRhaWwgPyBob3RlbERldGFpbC5jaGVja291dCA6ICcnfTwvc3Bhbj48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aG90ZWxQb2xpY2llcy5tYXAoaHAgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvbGljeS1ib3ggaW5kZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3ViLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PntocC5jYXRlZ29yeX08L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2hwLnBvbGljeS5tYXAocG9sID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57cG9sLnBvbGljeX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImNvbnRlbnQtaGlkZVwiIG9uQ2xpY2s9eygpPT4gdGhpcy50b2dnbGVDb250ZW50KCl9PlNob3cge3RoaXMuc3RhdGUuZXhwYW5kQ29udGVudCA/ICdsZXNzJyA6ICdtb3JlJ308L25hdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicm9vbS1zZWN0aW9uXCIgaWQ9XCJob3RlbC1yb29tc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5zZWFyY2hTdGVwID09PSAyID8gJ0Jvb2tpbmcgRGV0YWlscycgOiAnUm9vbXMnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g1PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuaW5pdFNlYXJjaCAmJiB0aGlzLnN0YXRlLnNlYXJjaFN0ZXAgPT09IDEgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ZXh0LWxpbmsgYmFja1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5iYWNrVG9EZXRhaWwoKX0+QmFjazwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmluaXRTZWFyY2ggJiZcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXZhaWxhYmxlLXJvb21zXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5zZWFyY2hTdGVwID09PSAxICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aG90ZWxfcm9vbXMubGVuZ3RoID09PSAwICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vLXJlc3VsdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb21pbmctc29vbi13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5ObyBIb3RlbHMgRm91bmQ8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5TZWFyY2ggQWdhaW4gZm9yIHJpZ2h0IHBsYWNlLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2hvdGVsX3Jvb21zLm1hcChyb29tID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvb21TZWFyY2hCbG9jayBpdGVtPXtyb29tfSBzZWxlY3RSb29tPXt0aGlzLnNlbGVjdFJvb219XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFJvb21zPXt0aGlzLnN0YXRlLnNlbGVjdGVkUm9vbXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFJvb21JZHM9e3RoaXMuc3RhdGUuc2VsZWN0ZWRSb29tSWRzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlUXR5PXt0aGlzLmNoYW5nZVF0eX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dGdWxsRGV0YWlsPXt0aGlzLnNob3dGdWxsRGV0YWlsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb29tLWJvb2stc3VibWl0XCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZ2VuZXJhbC1idG5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5jb250aW51ZVRvU3VtbWFyeSgpfT5Db250aW51ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5zZWFyY2hTdGVwID09PSAyICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1bW1hcnktdGFibGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+Um9vbXM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlF0eTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+UHJpY2U8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlRvdGFsIFByaWNlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD48L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZFJvb21zLm1hcChyb29tID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3VtbWFyeUl0ZW0gaXRlbT17cm9vbX0gc2VsZWN0Um9vbT17dGhpcy5zZWxlY3RSb29tfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkUm9vbXM9e3RoaXMuc3RhdGUuc2VsZWN0ZWRSb29tc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFJvb21JZHM9e3RoaXMuc3RhdGUuc2VsZWN0ZWRSb29tSWRzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZVF0eT17dGhpcy5jaGFuZ2VRdHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cInNwZWNpYWwtc2VydmljZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbHNwYW49XCI1XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5hdiBvbkNsaWNrPXsoKSA9PiB0aGlzLnNob3dTcGVjaWFsUmVxdWVzdHMoKX0gY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+QWRkIFNwZWNpYWwgUmVxdWVzdHMgKzwvbmF2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZFNwUmVxcy5sZW5ndGggPjAgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRTcFJlcXMuZmlsdGVyKHNwID0+IHNwLmNhdGVnb3J5ID09PSAncGF5YWJsZScpLm1hcChzcCA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cInNwZWNpYWwtc2VydmljZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xTcGFuPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57c3AudGl0bGV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPuKCuSB7c3AucmF0ZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJkZWxldGUtaXRlbVwiIG9uQ2xpY2s9eyhlKSA9PiB0aGlzLnJlbW92ZVNwKGUsc3Auc3BfaWQpfT48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3NlbGVjdGVkU3BSZXFzLmxlbmd0aCA+MCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFNwUmVxcy5maWx0ZXIoc3AgPT4gc3AuY2F0ZWdvcnkgPT09ICdub24gcGF5YWJsZScpLm1hcChzcCA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cInNwZWNpYWwtc2VydmljZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xTcGFuPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57c3AudGl0bGV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPuKCuSAwPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZGVsZXRlLWl0ZW1cIiBvbkNsaWNrPXsoZSkgPT4gdGhpcy5yZW1vdmVTcChlLHNwLnNwX2lkKX0+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPlRPVEFMPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJmb250LWJvbGRcIj7igrkge3RvdGFsX2Nvc3QudG9GaXhlZCgyKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+R1NUIDEwLjAwJTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+4oK5IHt0b3RhbF9nc3QudG9GaXhlZCgyKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPkdSQU5EIFRPVEFMPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJmb250LWJvbGRcIj7igrkge2dyYW5kX3RvdGFsLnRvRml4ZWQoMil9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY29sU3Bhbj1cIjVcIj5DaGVjay1pbiAmIENoZWNrLW91dDogPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb250LWJvbGRcIj57bW9tZW50KHRoaXMuc3RhdGUuY2hlY2tpbmRhdGUpLmZvcm1hdCgnREQgTU1NIFlZWVknKX0gLSB7bW9tZW50KHRoaXMuc3RhdGUuY2hlY2tvdXRkYXRlKS5mb3JtYXQoJ0REIE1NTSBZWVlZJyl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb24taGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PlBlcnNvbmFsIERldGFpbHM8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiZm9ybS1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5GaXJzdCBOYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiZmlyc3RuYW1lXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5maXJzdG5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGlucHV0LWZpZWxkICR7aW52YWxpZEZpZWxkcy5pbmNsdWRlcygnZmlyc3RuYW1lJykgPyAnZXJyb3ItZmllbGQnIDogJyd9YH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5MYXN0IE5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJsYXN0bmFtZVwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubGFzdG5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGlucHV0LWZpZWxkICR7aW52YWxpZEZpZWxkcy5pbmNsdWRlcygnbGFzdG5hbWUnKSA/ICdlcnJvci1maWVsZCcgOiAnJ31gfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkFkZHJlc3MgMTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImFkZHJlc3MxXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5hZGRyZXNzMX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgaW5wdXQtZmllbGQgJHtpbnZhbGlkRmllbGRzLmluY2x1ZGVzKCdhZGRyZXNzMScpID8gJ2Vycm9yLWZpZWxkJyA6ICcnfWB9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+QWRkcmVzcyAyPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiYWRkcmVzczJcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmFkZHJlc3MyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BpbnB1dC1maWVsZCAke2ludmFsaWRGaWVsZHMuaW5jbHVkZXMoJ2FkZHJlc3MyJykgPyAnZXJyb3ItZmllbGQnIDogJyd9YH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5DaXR5PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiY2l0eVwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuY2l0eX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgaW5wdXQtZmllbGQgJHtpbnZhbGlkRmllbGRzLmluY2x1ZGVzKCdjaXR5JykgPyAnZXJyb3ItZmllbGQnIDogJyd9YH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5TdGF0ZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInN0YXRlXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5zdGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgaW5wdXQtZmllbGQgJHtpbnZhbGlkRmllbGRzLmluY2x1ZGVzKCdzdGF0ZScpID8gJ2Vycm9yLWZpZWxkJyA6ICcnfWB9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+Q291bnRyeTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImNvdW50cnlcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmNvdW50cnl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGlucHV0LWZpZWxkICR7aW52YWxpZEZpZWxkcy5pbmNsdWRlcygnY291bnRyeScpID8gJ2Vycm9yLWZpZWxkJyA6ICcnfWB9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+UGluY29kZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInBpbmNvZGVcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnBpbmNvZGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGlucHV0LWZpZWxkICR7aW52YWxpZEZpZWxkcy5pbmNsdWRlcygncGluY29kZScpID8gJ2Vycm9yLWZpZWxkJyA6ICcnfWB9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+TW9iaWxlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGlucHV0LWZpZWxkICR7aW52YWxpZEZpZWxkcy5pbmNsdWRlcygnbW9iaWxlJykgPyAnZXJyb3ItZmllbGQnIDogJyd9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm1vYmlsZVwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubW9iaWxlfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkFkZGl0aW9uYWwgUGhvbmU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgaW5wdXQtZmllbGQgJHtpbnZhbGlkRmllbGRzLmluY2x1ZGVzKCdhZGRpdGlvbmFscGhvbmVudW1iZXInKSA/ICdlcnJvci1maWVsZCcgOiAnJ31gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYWRkaXRpb25hbHBob25lbnVtYmVyXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5hZGRpdGlvbmFscGhvbmVudW1iZXJ9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+RW1haWw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BpbnB1dC1maWVsZCAke2ludmFsaWRGaWVsZHMuaW5jbHVkZXMoJ2VtYWlsJykgPyAnZXJyb3ItZmllbGQnIDogJyd9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5lbWFpbH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGF5bWVudC13cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJnZW5lcmFsLWJ0biBncmV5XCIgb25DbGljaz17KCk9PiB0aGlzLmJhY2tUb0NhcnQoKX0+QmFjazwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZ2VuZXJhbC1idG5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHRoaXMuc2F2ZUJvb2tpbmcoZSwgZ3JhbmRfdG90YWwsIHRvdGFsX2Nvc3QsIDAuMDAsICcnLCB0b3RhbF9nc3QpfT5Db250aW51ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUbyBQYXltZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IXRoaXMuc3RhdGUuaW5pdFNlYXJjaCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm9vbS1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2hvdGVsX3Jvb21zLmxlbmd0aCA9PT0gMCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vLXJlc3VsdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+Um9vbXMgd2lsbCBiZSBhZGRlZCBzb29uPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2hvdGVsX3Jvb21zLm1hcChyb29tID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um9vbUJsb2NrIGl0ZW09e3Jvb219IHNob3dGdWxsRGV0YWlsPXt0aGlzLnNob3dGdWxsRGV0YWlsfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IXRoaXMuc3RhdGUuaW5pdFNlYXJjaCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiY29udGVudC1hcmVhIHRleHQtY29udGVudFwiIGlkPVwiaG90ZWwtZmFjaWxpdGllc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5GYWNpbGl0aWVzICYgQXR0cmFjdGlvbnM8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmZWF0dXJlLXdyYXBwZXIgdGhyZWUtcGVyLWNvbCBpbWFnZS10b3BcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHshaG90ZWxmYWNpbGl0aWVzIHx8IGhvdGVsZmFjaWxpdGllcy5sZW5ndGggPT09IDAgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5GYWNpbGl0aWVzIHdpbGwgYmUgYWRkZWQgc29vbi48L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtob3RlbGZhY2lsaXRpZXMgJiYgaG90ZWxmYWNpbGl0aWVzLmxlbmd0aCA+IDAgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2hvdGVsZmFjaWxpdGllcy5tYXAoKGZhYywgaW5kZXgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGYWNpbGl0eU5ld0Jsb2NrIGl0ZW09e2ZhY30gaW1nQWxpZ249e2luZGV4ICUgMiA9PT0gMSA/ICdsZWZ0JyA6ICdyaWdodCd9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicm9vbS1zZWN0aW9uXCIgaWQ9XCJob3RlbC1nYWxsZXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PkdhbGxlcnk8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdhbGxlcnkgZ2FsbGVyeUltYWdlcz17Z2FsbGVyeUltYWdlc30gLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPEZvb3RlciAvPlxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuc2hvd0Vycm9yICYmXHJcbiAgICAgICAgICAgICAgICA8QWxlcnRNb2RhbFxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGFsSGVhZGVyID0ge2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGFsRm9vdGVyID0ge3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kYWxUaXRsZSA9IFwiV2FybmluZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgbW9kYWxCb2R5ID0gXCJQbGVhc2Ugc2VsZWN0IHlvdXIgY2hvaWNlc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgbW9kYWxTdGF0dXM9e3RoaXMuc3RhdGUuc2hvd0Vycm9yfVxyXG4gICAgICAgICAgICAgICAgICAgIE9LQnV0dG9uPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgIENBTkNFTEJ1dHRvbj17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgT0tBY3Rpb249e3RoaXMuaGlkZUVycm9yfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnNob3dQcm9maWxlSW5mb0Vycm9yICYmXHJcbiAgICAgICAgICAgICAgICA8QWxlcnRNb2RhbFxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGFsSGVhZGVyID0ge2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGFsRm9vdGVyID0ge3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kYWxUaXRsZSA9IFwiUHJvZmlsZSBEZXRhaWxzXCJcclxuICAgICAgICAgICAgICAgICAgICBtb2RhbEJvZHkgPSBcIlBsZWFzZSBlbnRlciB5b3VyIHBlcnNvbmFsIGluZm9ybWF0aW9uIHRvIHByb2NlZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGFsU3RhdHVzPXt0aGlzLnN0YXRlLnNob3dQcm9maWxlSW5mb0Vycm9yfVxyXG4gICAgICAgICAgICAgICAgICAgIE9LQnV0dG9uPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgIENBTkNFTEJ1dHRvbj17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgT0tBY3Rpb249e3RoaXMuaGlkZVByb2ZpbGVJbmZvRXJyb3J9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuaXRlbVJlbW92YWxNZXNzYWdlICYmXHJcbiAgICAgICAgICAgICAgICA8QWxlcnRNb2RhbFxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGFsSGVhZGVyID0ge2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGFsRm9vdGVyID0ge3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kYWxUaXRsZSA9IFwiV2FybmluZyFcIlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGFsQm9keSA9IFwiQXJlIHlvdSBzdXJlIHRvIHJlbW92ZSB0aGlzIHJvb20/IFlvdSB3aWxsIGJlIHJlZGlyZWN0ZWQgdG8gdGhlIHJvb21zIGxpc3QuXCJcclxuICAgICAgICAgICAgICAgICAgICBtb2RhbFN0YXR1cz17dGhpcy5zdGF0ZS5pdGVtUmVtb3ZhbE1lc3NhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgT0tCdXR0b249e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgQ0FOQ0VMQnV0dG9uPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgIE9LQWN0aW9uPXt0aGlzLmVtcHR5Q2FydH1cclxuICAgICAgICAgICAgICAgICAgICBDQU5DRUxBY3Rpb249e3RoaXMuaGlkZUl0ZW1SZW1vdmFsTWVzc2FnZX1cclxuICAgICAgICAgICAgICAgICAgICBPS1RleHQgPSBcIk9LXCJcclxuICAgICAgICAgICAgICAgICAgICBDQU5DRUxUZXh0ID0gXCJDQU5DRUxcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5jYW5ub3RDb250aW51ZSAmJlxyXG4gICAgICAgICAgICAgICAgPEFsZXJ0TW9kYWxcclxuICAgICAgICAgICAgICAgICAgICBtb2RhbEhlYWRlciA9IHtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICBtb2RhbEZvb3RlciA9IHt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGFsVGl0bGUgPSBcIldhcm5pbmchXCJcclxuICAgICAgICAgICAgICAgICAgICBtb2RhbEJvZHkgPSB7dGhpcy5zdGF0ZS5jYW5ub3RDb250aW51ZU1lc3NhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kYWxTdGF0dXM9e3RoaXMuc3RhdGUuY2Fubm90Q29udGludWV9XHJcbiAgICAgICAgICAgICAgICAgICAgT0tCdXR0b249e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgQ0FOQ0VMQnV0dG9uPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICBPS0FjdGlvbj17dGhpcy5oaWRlQ2Fubm90Q29udGludWV9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnNob3dEZXRhaWxTdGF0dXMgJiZcclxuICAgICAgICAgICAgICAgIDxGdWxsV2lkdGhNb2RhbFxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGFsSGVhZGVyID0ge3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kYWxGb290ZXIgPSB7dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICBtb2RhbFRpdGxlID0ge2hvdGVsRGV0YWlsLmhvdGVsX25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kYWxCb2R5ID0gezxSb29tRGV0YWlsIHJvb21EZXRhaWw9e3RoaXMuc3RhdGUucm9vbURldGFpbH0gaGlkZUZ1bGxEZXRhaWw9e3RoaXMuaGlkZUZ1bGxEZXRhaWx9IC8+fVxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGFsU3RhdHVzPXt0aGlzLnN0YXRlLnNob3dEZXRhaWxTdGF0dXN9XHJcbiAgICAgICAgICAgICAgICAgICAgT0tCdXR0b249e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgQ0FOQ0VMQnV0dG9uPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICBPS0FjdGlvbj17dGhpcy5oaWRlRnVsbERldGFpbH1cclxuICAgICAgICAgICAgICAgICAgICBDQU5DRUxBY3Rpb249e3RoaXMuaGlkZUZ1bGxEZXRhaWx9XHJcbiAgICAgICAgICAgICAgICAgICAgT0tUZXh0ID0gXCJPS1wiXHJcbiAgICAgICAgICAgICAgICAgICAgQ0FOQ0VMVGV4dCA9IFwiQ0FOQ0VMXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuc2hvd1NwUmVxU3RhdCAmJlxyXG4gICAgICAgICAgICAgICAgPEFsZXJ0TW9kYWxcclxuICAgICAgICAgICAgICAgICAgICBtb2RhbEhlYWRlciA9IHtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICBtb2RhbEZvb3RlciA9IHt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGFsVGl0bGUgPSBcIldhcm5pbmchXCJcclxuICAgICAgICAgICAgICAgICAgICBtb2RhbEJvZHkgPSB7PEhvdGVsU3BSZXFMaXN0IHNwUmVxdWVzdHM9e3NwUmVxdWVzdHN9IHNlbGVjdGVkU3BSZXFJZHM9e3RoaXMuc3RhdGUuc2VsZWN0ZWRTcFJlcUlkc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkU3BSZXFzPXt0aGlzLnN0YXRlLnNlbGVjdGVkU3BSZXFzfSBoYW5kbGVTcFNlbGVjdGlvbj17dGhpcy5oYW5kbGVTcFNlbGVjdGlvbn0gLz59XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kYWxTdGF0dXM9e3RoaXMuc3RhdGUuc2hvd1NwUmVxU3RhdH1cclxuICAgICAgICAgICAgICAgICAgICBPS0J1dHRvbj17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICBDQU5DRUxCdXR0b249e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgIE9LQWN0aW9uPXt0aGlzLmhpZGVTcGVjaWFsUmVxdWVzdHN9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuc2hvd1BlbmRpbmdNZXNzYWdlICYmXHJcbiAgICAgICAgICAgICAgICA8QWxlcnRNb2RhbFxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGFsSGVhZGVyID0ge2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGFsRm9vdGVyID0ge3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kYWxUaXRsZSA9IFwiV2FybmluZyFcIlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGFsQm9keSA9IHtcIkJvb2tpbmcgaXMgdGVtcGVyb3JpbHkgdW5hdmFpbGFibGUgZHVlIHRvIENvdmlkLTE5LiBJdCB3aWxsIGJlIGF2YWlsYWJsZSBvbmx5IGZyb20gSnVseSAyMDIxIG9ud2FyZHMuIEZvciBmdXJ0aGVyIGluZm9ybWF0aW9uIHBsZWFzZSBzZW5kIGFuIGVtYWlsIHRvIGJvb2tpbmdAdXRoaG90ZWxzLmNvbSBvciBjYWxsICs5MSA5NzQ2ODM4ODgzLCs5MSA5NTY3MzM4ODg0LlwifVxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGFsU3RhdHVzPXt0aGlzLnN0YXRlLnNob3dQZW5kaW5nTWVzc2FnZX1cclxuICAgICAgICAgICAgICAgICAgICBPS0J1dHRvbj17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICBDQU5DRUxCdXR0b249e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgIE9LQWN0aW9uPXt0aGlzLmhpZGVQZW5kaW5nTWVzc2FnZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9tYWluPlxyXG4gICAgICAgICAgICA8Lz5cclxuXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XHJcbiAgICBob3RlbERhdGE6c3RhdGUuSG90ZWxSZWR1Y2VyLmhvdGVsRGF0YSxcclxuICAgLy8gZmFjaWxpdHlEYXRhOnN0YXRlLkhvdGVsUmVkdWNlci5mYWNpbGl0eURhdGEsXHJcbiAgICBib29raW5nRGF0YSA6IHN0YXRlLkhvdGVsUmVkdWNlci5ib29raW5nRGF0YVxyXG59KTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxyXG4gICAgbWFwU3RhdGVUb1Byb3BzLFxyXG4gICAge1xyXG5cclxuICAgICAgICBzZWFyY2hSb29tcyA6IEhvdGVsQWN0aW9ucy5zZWFyY2hSb29tcyxcclxuICAgICAgICBzYXZlQm9va2luZyA6IEhvdGVsQWN0aW9ucy5zYXZlQm9va2luZyxcclxuICAgICAgICBjb25maXJtQm9va2luZyA6IEhvdGVsQWN0aW9ucy5jb25maXJtQm9va2luZyxcclxuICAgICAgICBnZXRCYW5uZXJJbWFnZXMgOiBIb3RlbEFjdGlvbnMuZ2V0QmFubmVySW1hZ2VzLFxyXG4gICAgICAgIC8vZ2V0SG90ZWxIaWdobGlnaHRzIDogSG90ZWxBY3Rpb25zLmdldEhvdGVsSGlnaGxpZ2h0cyxcclxuICAgICAgICBnZXRIb3RlbFBvbGljaWVzIDogSG90ZWxBY3Rpb25zLmdldEhvdGVsUG9saWNpZXMsXHJcbiAgICAgICAgZ2V0U3BSZXF1ZXN0cyA6IEhvdGVsQWN0aW9ucy5nZXRTcFJlcXVlc3RzXHJcbiAgICB9XHJcbikoSG90ZWxEZXRhaWxTbHVnKTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3Qvc2hhcmVkL2xpYi9oZWFkJylcbiIsInZhciBhcnJheUxpa2VUb0FycmF5ID0gcmVxdWlyZShcIi4vYXJyYXlMaWtlVG9BcnJheS5qc1wiKTtcblxuZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShhcnIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheVdpdGhvdXRIb2xlcztcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHk7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGl0ZXJbU3ltYm9sLml0ZXJhdG9yXSAhPSBudWxsIHx8IGl0ZXJbXCJAQGl0ZXJhdG9yXCJdICE9IG51bGwpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pdGVyYWJsZVRvQXJyYXk7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfbm9uSXRlcmFibGVTcHJlYWQ7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwidmFyIGFycmF5V2l0aG91dEhvbGVzID0gcmVxdWlyZShcIi4vYXJyYXlXaXRob3V0SG9sZXMuanNcIik7XG5cbnZhciBpdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9pdGVyYWJsZVRvQXJyYXkuanNcIik7XG5cbnZhciB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzXCIpO1xuXG52YXIgbm9uSXRlcmFibGVTcHJlYWQgPSByZXF1aXJlKFwiLi9ub25JdGVyYWJsZVNwcmVhZC5qc1wiKTtcblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IG5vbkl0ZXJhYmxlU3ByZWFkKCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3RvQ29uc3VtYWJsZUFycmF5O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyJdLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIkFtcFN0YXRlQ29udGV4dCIsIl9yZWFjdCIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwib2JqIiwiX19lc01vZHVsZSIsImNyZWF0ZUNvbnRleHQiLCJkaXNwbGF5TmFtZSIsImlzSW5BbXBNb2RlIiwidXNlQW1wIiwiX2FtcENvbnRleHQiLCJhbXBGaXJzdCIsImh5YnJpZCIsImhhc1F1ZXJ5IiwidXNlQ29udGV4dCIsIkhlYWRNYW5hZ2VyQ29udGV4dCIsImRlZmF1bHRIZWFkIiwiX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQiLCJfc2lkZUVmZmVjdCIsIl9oZWFkTWFuYWdlckNvbnRleHQiLCJfYW1wIiwibmV3T2JqIiwia2V5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiZGVzYyIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImdldCIsInNldCIsImluQW1wTW9kZSIsImhlYWQiLCJjcmVhdGVFbGVtZW50IiwiY2hhclNldCIsInB1c2giLCJuYW1lIiwiY29udGVudCIsIm9ubHlSZWFjdEVsZW1lbnQiLCJsaXN0IiwiY2hpbGQiLCJ0eXBlIiwiRnJhZ21lbnQiLCJjb25jYXQiLCJDaGlsZHJlbiIsInRvQXJyYXkiLCJwcm9wcyIsImNoaWxkcmVuIiwicmVkdWNlIiwiZnJhZ21lbnRMaXN0IiwiZnJhZ21lbnRDaGlsZCIsIk1FVEFUWVBFUyIsInVuaXF1ZSIsImtleXMiLCJTZXQiLCJ0YWdzIiwibWV0YVR5cGVzIiwibWV0YUNhdGVnb3JpZXMiLCJoIiwiaXNVbmlxdWUiLCJoYXNLZXkiLCJpbmRleE9mIiwic2xpY2UiLCJoYXMiLCJhZGQiLCJpIiwibGVuIiwibGVuZ3RoIiwibWV0YXR5cGUiLCJjYXRlZ29yeSIsImNhdGVnb3JpZXMiLCJyZWR1Y2VDb21wb25lbnRzIiwiaGVhZEVsZW1lbnRzIiwiaGVhZEVsZW1lbnQiLCJoZWFkRWxlbWVudENoaWxkcmVuIiwicmV2ZXJzZSIsImZpbHRlciIsIm1hcCIsImMiLCJwcm9jZXNzIiwiZW52IiwiX19ORVhUX09QVElNSVpFX0ZPTlRTIiwic29tZSIsInVybCIsInN0YXJ0c1dpdGgiLCJuZXdQcm9wcyIsInVuZGVmaW5lZCIsImNsb25lRWxlbWVudCIsIkhlYWQiLCJhbXBTdGF0ZSIsImhlYWRNYW5hZ2VyIiwicmVkdWNlQ29tcG9uZW50c1RvU3RhdGUiLCJfZGVmYXVsdCIsImlzU2VydmVyIiwiX2NsYXNzIiwiZW1pdENoYW5nZSIsIl9oYXNIZWFkTWFuYWdlciIsInVwZGF0ZUhlYWQiLCJtb3VudGVkSW5zdGFuY2VzIiwiQ29tcG9uZW50IiwiUmVhY3QiLCJTdXNwZW5zZSIsImxhenkiLCJ1c2VSb3V0ZXIiLCJGb290ZXIiLCJDb250ZW50U2xpZGVyIiwiZ2V0VXJsU2VnbWVudCIsImNvbm5lY3QiLCJIb3RlbEFjdGlvbnMiLCJlbkdCIiwiRGF0ZVJhbmdlUGlja2VyIiwiU1RBUlRfREFURSIsIkVORF9EQVRFIiwiUm9vbUJsb2NrIiwiUm9vbURldGFpbCIsIlJvb21TZWFyY2hCbG9jayIsIkZhY2lsaXR5TmV3QmxvY2siLCJTdW1tYXJ5SXRlbSIsIkFsZXJ0TW9kYWwiLCJtb21lbnQiLCJGdWxsV2lkdGhNb2RhbCIsIkhvdGVsTmF2YmFyIiwiSG90ZWxTcFJlcUxpc3QiLCJHYWxsZXJ5IiwiSU1BR0VfUEFUSCIsIkFQSSIsIkhvdGVsRGV0YWlsU2x1ZyIsImhvdGVsRGV0YWlsIiwiZ2FsbGVyeUltYWdlcyIsImJhbm5lckltYWdlcyIsImhvdGVsX3Jvb21zIiwicm91dGVyIiwic2x1ZyIsInF1ZXJ5IiwiY29uc29sZSIsImxvZyIsIkhvdGVsRGV0YWlsIiwic2VjdGlvbiIsImVsZW1lbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsImJsb2NrIiwiaW5saW5lIiwiZGF0ZSIsInNldFN0YXRlIiwic3RhcnREYXRlIiwiZW5kRGF0ZSIsImUiLCJ0YXJnZXQiLCJNQVhfQ0FQQUNJVFlfR0VORVJBTCIsInN0YXRlIiwicm9vbXMiLCJhZHVsdHMiLCJpbnZhbGlkRmllbGRzIiwiYWR1bHRDb3VudCIsInBhcnNlSW50IiwiTUFYX0NBUEFDSVRZX01TRyIsInBhcmFtcyIsInNob3dFcnJvciIsImluaXRTZWFyY2giLCJzZWFyY2hTdGVwIiwidG9kYXkiLCJ0b21vcnJvdyIsInJvb20iLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsInNlbGVjdGVkUm9vbXMiLCJzZWxlY3RlZFJvb21JZHMiLCJpbmNsdWRlcyIsInJvb21pZCIsIml0ZW1SZW1vdmFsTWVzc2FnZSIsImluZGV4Iiwic3BsaWNlIiwiaXRlbSIsInF0eSIsImFkZFF0eSIsInN1YlF0eSIsInBlcnNvbk9jY3VwaWVkIiwidG90YWxSb29tcyIsIm9jY3VwYW5jeSIsIm1heF9jYXBhY2l0eV9hZHVsdCIsImV4dHJhX29jY3VwYW5jeSIsImV4dHJhYmVkIiwidG90YWxfb2NjdXBhbmN5IiwiY2Fubm90Q29udGludWUiLCJjYW5ub3RDb250aW51ZU1lc3NhZ2UiLCJyb29tSWQiLCJyb29tY291bnQiLCJzZWxlY3RSb29tIiwiYW1vdW50IiwicHJpbmNpcGxlQW1vdW50IiwiZGlzY291bnQiLCJwcm9ncmFtX2Rlc2NyaXB0aW9uIiwiZ3N0IiwiZmlyc3RuYW1lIiwibGFzdG5hbWUiLCJhZGRyZXNzMSIsImFkZHJlc3MyIiwiY2l0eSIsImNvdW50cnkiLCJwaW5jb2RlIiwibW9iaWxlIiwiYWRkaXRpb25hbHBob25lbnVtYmVyIiwiZW1haWwiLCJjaGVja2luZGF0ZSIsImZvcm1hdCIsImNoZWNrb3V0ZGF0ZSIsInN0YXJ0IiwiZW5kIiwibm9PZkRheXMiLCJkdXJhdGlvbiIsImRpZmYiLCJhc0RheXMiLCJub09mcm9vbXMiLCJ0YXhhbW91bnQiLCJzZWxlY3RlZFNwUmVxcyIsImJvb2tlZFJvb21zIiwiZXh0cmFiZWRjb3VudCIsInJvb21fcHJpY2UiLCJwYXJzZUZsb2F0IiwiaG90ZWxfaWQiLCJKU09OIiwic3RyaW5naWZ5Iiwic2F2ZUJvb2tpbmciLCJ0b3RhbEFtb3VudCIsInNob3dQcm9maWxlSW5mb0Vycm9yIiwidGhhdCIsIm9wdGlvbnMiLCJkZXNjcmlwdGlvbiIsImltYWdlIiwiaGFuZGxlciIsInJlc3BvbnNlIiwiUGF5bWVudElkIiwicmF6b3JwYXlfcGF5bWVudF9pZCIsIkRhdGUiLCJwYXltZW50SWQiLCJQYXltZW50VXJsIiwiYm9va1BhcmFtcyIsImJvb2tpbmdJZCIsImJvb2tpbmdEYXRhIiwiY29uZmlybUJvb2tpbmciLCJwcmVmaWxsIiwiY29udGFjdCIsIm5vdGVzIiwiYWRkcmVzcyIsInRoZW1lIiwiY29sb3IiLCJoaWRlX3RvcGJhciIsInJ6cDEiLCJ3aW5kb3ciLCJSYXpvcnBheSIsIm9uIiwib3BlbiIsImlkIiwicm9vbUxpc3QiLCJzaG93RGV0YWlsU3RhdHVzIiwicm9vbURldGFpbCIsInNob3dTcFJlcVN0YXQiLCJzcCIsInNlbGVjdGVkU3BSZXFJZHMiLCJjaGVja2VkIiwic3BfaWQiLCJzaG93UGVuZGluZ01lc3NhZ2UiLCJleHBhbmRDb250ZW50Iiwic2V0RGF0ZSIsImdldERhdGUiLCJyb29tVHlwZXMiLCJob3RlbFBvbGljaWVzIiwiaG90ZWxIaWdobGlnaHRzIiwic2hvd1NwZWNpYWxSZXF1ZXN0cyIsInNwUmVxdWVzdHMiLCJzY3JpcHQiLCJzcmMiLCJhc3luYyIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImhvdGVsX3VybCIsInByZXZQcm9wcyIsInByZXZTdGF0ZSIsInNuYXBzaG90IiwibWF4X29jY3VwYW5jeSIsImhvdGVsaGlnaGxpZ2h0cyIsImhvdGVscG9saWNpZXMiLCJzcGVjaWFscmVxdWVzdCIsImdlbmVyYWxfZmFjaWxpdGllcyIsImhvdGVsX2ZhY2lsaXRpZXMiLCJob3RlbGZhY2lsaXRpZXMiLCJ0b3RhbF9jb3N0IiwidG90YWxfZ3N0IiwicmF0ZSIsImdyYW5kX3RvdGFsIiwicmF6b3JHcmFuZFRvdGFsIiwiaG90ZWxfbmFtZSIsInBob25lbm8iLCJtb2JpbGVubyIsImhvdGVsX2Rlc2MiLCJzY3JvbGxUb1NlY3Rpb24iLCJzZXRTdGFydERhdGUiLCJzZXRFbmREYXRlIiwic3RhcnREYXRlSW5wdXRQcm9wcyIsImVuZERhdGVJbnB1dFByb3BzIiwiZm9jdXMiLCJoYW5kbGVDaGFuZ2UiLCJzZWFyY2hSb29tcyIsIl9faHRtbCIsImhsIiwiaGlnaGxpZ2h0cyIsImNoZWNraW4iLCJjaGVja291dCIsImhwIiwicG9saWN5IiwicG9sIiwidG9nZ2xlQ29udGVudCIsImJhY2tUb0RldGFpbCIsImNoYW5nZVF0eSIsInNob3dGdWxsRGV0YWlsIiwiY29udGludWVUb1N1bW1hcnkiLCJ0aXRsZSIsInJlbW92ZVNwIiwidG9GaXhlZCIsImJhY2tUb0NhcnQiLCJmYWMiLCJoaWRlRXJyb3IiLCJoaWRlUHJvZmlsZUluZm9FcnJvciIsImVtcHR5Q2FydCIsImhpZGVJdGVtUmVtb3ZhbE1lc3NhZ2UiLCJoaWRlQ2Fubm90Q29udGludWUiLCJoaWRlRnVsbERldGFpbCIsImhhbmRsZVNwU2VsZWN0aW9uIiwiaGlkZVNwZWNpYWxSZXF1ZXN0cyIsImhpZGVQZW5kaW5nTWVzc2FnZSIsIm1hcFN0YXRlVG9Qcm9wcyIsImhvdGVsRGF0YSIsIkhvdGVsUmVkdWNlciIsImdldEJhbm5lckltYWdlcyIsImdldEhvdGVsUG9saWNpZXMiLCJnZXRTcFJlcXVlc3RzIl0sInNvdXJjZVJvb3QiOiIifQ==