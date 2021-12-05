self["webpackHotUpdate_N_E"]("pages/hotels/[id]",{

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

/***/ "./pages/hotels/[id].js":
/*!******************************!*\
  !*** ./pages/hotels/[id].js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSP": function() { return /* binding */ __N_SSP; }
/* harmony export */ });
/* harmony import */ var D_FL_uth_next_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var D_FL_uth_next_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_FL_uth_next_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(D_FL_uth_next_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _views_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../views/Navbar */ "./views/Navbar.js");
/* harmony import */ var _views_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../views/Footer */ "./views/Footer.js");
/* harmony import */ var _views_LeftPanel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../views/LeftPanel */ "./views/LeftPanel.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _views_HotelBlock__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../views/HotelBlock */ "./views/HotelBlock.js");
/* harmony import */ var _actions_hotel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../actions/hotel */ "./actions/hotel.js");
/* harmony import */ var _utilities_CustomFunctions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utilities/CustomFunctions */ "./utilities/CustomFunctions.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../constants */ "./constants/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _services_hotel_services__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../services/hotel.services */ "./services/hotel.services.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\FL\\uth-next\\pages\\hotels\\[id].js",
    _this = undefined,
    _s = $RefreshSig$();















 //This gets called every time the page is called




var HotelList = function HotelList(_ref) {
  _s();

  var hotelList = _ref.hotelList,
      categoryInfo = _ref.categoryInfo;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
      facilities = _useState[0],
      setfacilities = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      showFilterStatus = _useState2[0],
      setshowFilterStatus = _useState2[1];

  var total = hotelList.length;
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    // Always do navigations after the first render
    getFacilities();
  }, []);

  function getFacilities() {
    return _getFacilities.apply(this, arguments);
  } // const router = useRouter();


  function _getFacilities() {
    _getFacilities = (0,D_FL_uth_next_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/D_FL_uth_next_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
      var fresponse, fres;
      return D_FL_uth_next_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch("".concat(_constants__WEBPACK_IMPORTED_MODULE_11__.API_PATH, "\"hotel/masterfacilities"));

            case 2:
              fresponse = _context.sent;
              _context.next = 5;
              return fresponse.json();

            case 5:
              fres = _context.sent;
              setfacilities(fres.results ? fres.results.data : []);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _getFacilities.apply(this, arguments);
  }

  function searchHotels() {// this.props.searchHotels();
  }

  function showFilters() {
    setshowFilterStatus(true); // this.setState({
    //     showFilterStatus : true
    // })
  }

  function hideFilters() {
    setshowFilterStatus(false); //     showFilterStatus : false
    // })
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_14___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("meta", {
        charSet: "UTF-8"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("title", {
        children: hotelDetail ? hotelDetail.hotel_name : 'UTH'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("meta", {
        name: "description",
        content: hotelDetail ? hotelDetail.address + "  " + hotelDetail.phoneno + " " + hotelDetail.mobileno + hotelDetail.hotel_desc : 'UTH Group of Hotels'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("meta", {
        name: "keywords",
        content: hotelDetail ? (hotelDetail.address, hotelDetail.phoneno, hotelDetail.mobileno, hotelDetail.hotel_desc) : 'best hotels of kochi, best hotels'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("meta", {
        name: "author",
        content: "UTH Group Of Hotels"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("meta", {
        property: "og:type",
        content: "website"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("meta", {
        property: "og:title",
        content: hotelDetail ? hotelDetail.hotel_name : 'UTH'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("meta", {
        property: "og:description",
        content: "The tourism is in full swing for the God\u2019s own country and the best hotels in Kochi are also ready to welcome the guests. The Sugar hotel in Kochi is a prestigious one in this list whose location itself is significant.UTH is the leading brand in the hotel business that is running many hotels and resorts all over the country and out of the country too such as Sri Lanka, Dubai and Maldives."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("meta", {
        property: "og:url",
        content: "%PUBLIC_URL%"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("meta", {
        property: "og:site_name",
        content: "UTH | Group of Hotels"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("meta", {
        property: "og:image",
        content: "http://159.65.153.59/site/assets/images/fav/og-image.jpg"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("meta", {
        name: "twitter:card",
        content: "http://159.65.153.59/site/assets/images/fav/og-image.jpg"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("link", {
        rel: "apple-touch-icon",
        sizes: "57x57",
        href: "/assets/images/fav/apple-icon-57x57.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("link", {
        rel: "apple-touch-icon",
        sizes: "60x60",
        href: "/assets/images/fav/apple-icon-60x60.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("link", {
        rel: "apple-touch-icon",
        sizes: "72x72",
        href: "/assets/images/fav/apple-icon-72x72.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("link", {
        rel: "apple-touch-icon",
        sizes: "76x76",
        href: "/assets/images/fav/apple-icon-76x76.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("link", {
        rel: "apple-touch-icon",
        sizes: "114x114",
        href: "/assets/images/fav/apple-icon-114x114.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("link", {
        rel: "apple-touch-icon",
        sizes: "120x120",
        href: "/assets/images/fav/apple-icon-120x120.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("link", {
        rel: "apple-touch-icon",
        sizes: "144x144",
        href: "/assets/images/fav/apple-icon-144x144.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("link", {
        rel: "apple-touch-icon",
        sizes: "152x152",
        href: "/assets/images/fav/apple-icon-152x152.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("link", {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/assets/images/fav/apple-icon-180x180.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("link", {
        rel: "icon",
        type: "image/png",
        sizes: "192x192",
        href: "/assets/images/fav/android-icon-192x192.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("link", {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/assets/images/fav/favicon-32x32.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("link", {
        rel: "icon",
        type: "image/png",
        sizes: "96x96",
        href: "/assets/images/fav/favicon-96x96.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("link", {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/assets/images/fav/favicon-16x16.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("meta", {
        name: "msapplication-TileImage",
        content: "/assets/images/fav/ms-icon-144x144.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("meta", {
        name: "twitter:title",
        content: "UTH | Group of Hotels"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("main", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("div", {
        className: "wrapper",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("div", {
          className: "inner-page listing",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)(_views_Navbar__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("section", {
            className: "details-banner-block image-shade",
            children: [categoryInfo && categoryInfo.thumb && categoryInfo.thumb !== '' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("img", {
              src: "".concat(_constants__WEBPACK_IMPORTED_MODULE_11__.IMAGE_PATH + 'category/' + categoryInfo.thumb)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 29
            }, _this), (!categoryInfo || !categoryInfo.thumb || categoryInfo.thumb === '') && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("img", {
              src: "../assets/images/banner.jpg"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 116,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("div", {
              className: "carousel-text-block",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("div", {
                className: "container",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("h1", {
                  children: categoryInfo.category
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 122,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 121,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 120,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("div", {
            className: "listing-wrapper",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)(_views_LeftPanel__WEBPACK_IMPORTED_MODULE_6__.default, {
              facilities: facilities,
              searchHotels: searchHotels,
              showFilterStatus: showFilterStatus,
              hideFilters: hideFilters
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 130,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("div", {
              className: "listing-content",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("div", {
                className: "listing-content-header",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("h5", {
                  children: "HOTELS & RESORTS"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 136,
                  columnNumber: 37
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("div", {
                  className: "listing-content-header-right",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("p", {
                    className: "font-bold",
                    children: [hotelList.length, " Hotels found"]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 139,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("button", {
                    className: "filter",
                    onClick: function onClick() {
                      return showFilters();
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 140,
                    columnNumber: 41
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 138,
                  columnNumber: 37
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 135,
                columnNumber: 33
              }, _this), hotelList.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("div", {
                className: "content-lister",
                children: [hotelList.map(function (hotel, index) {
                  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)(_views_HotelBlock__WEBPACK_IMPORTED_MODULE_8__.default, {
                    detail: hotel
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 146,
                    columnNumber: 41
                  }, _this);
                }), hotelList.length < total && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("div", {
                  className: "loadmore-block",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {
                    href: "/hotel-detail",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("nav", {
                      children: "Load more"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 151,
                      columnNumber: 45
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 150,
                    columnNumber: 41
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 149,
                  columnNumber: 37
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 144,
                columnNumber: 33
              }, _this), hotelList.length === 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("div", {
                className: "coming-soon-wrapper",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("h1", {
                  children: "Hotels will be added Soon"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 160,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 159,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 133,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)(_views_Footer__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 167,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("a", {
          id: "back-to-top",
          href: "#",
          className: "back-to-top",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("span", {
            className: "top"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 172,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 13
    }, _this)]
  }, void 0, true);
};

_s(HotelList, "CKvfzqHdf3fb/Lb94iDytuO9vJY=");

_c = HotelList;
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (HotelList); // class HotelList extends Component {
//     constructor(props) {
//         super(props);
//
//         this.state = {
//             hotelList : props.hotelList,
//             searchTexts : [],
//             facilities : [],
//             showFilterStatus : false,
//             category : {}
//         }
//
//     }
//
//     componentDidMount() {
//
//         this.getFacilities();
//         //this.getHotelList()
//         this.setState({
//             hotelList : this.props.hotelList
//         })
//
//
//     }
//
//     componentDidUpdate(prevProps, prevState, snapshot) {
//
//         if(this.props.hotelData.hotelList !== prevProps.hotelData.hotelList) {
//             let hotelList = this.props.hotelData.hotelList;
//             console.log(hotelList)
//             hotelList = hotelList.map(item => {
//                 let facilities =  item.facilities ? item.facilities : [];
//                 facilities = facilities.map((fac,index) => {
//                         if (fac.facility_id === 1) {
//                             fac.class = 'pool-ico';
//                         }
//                         else if (fac.facility_id === 2) {
//                             fac.class = 'wifi-ico';
//                         }
//                         else if (fac.facility_id === 3) {
//                             fac.class = 'family-ico';
//                         }
//                         else if (fac.facility_id === 4) {
//                             fac.class = 'parking-ico';
//                         }
//                         else if (fac.facility_id === 5) {
//                             fac.class = 'spa-ico';
//                         }
//                         else if (fac.facility_id === 6) {
//                             fac.class = 'restaurant-ico';
//                         }
//                         else if (fac.facility_id === 7) {
//                             fac.class = 'fitness-ico';
//                         }
//                         else if (fac.facility_id === 8) {
//                             fac.class = 'beach-ico';
//                         }
//                         return fac;
//                     }
//                 )
//                 item.facilities = facilities;
//                 return item;
//             });
//             this.setState({
//                 hotelList : hotelList
//             })
//         }
//         if(this.props.hotelData.category !== prevProps.hotelData.category) {
//             let category = this.props.hotelData.category;
//             this.setState({
//                 category : category
//             })
//         }
//         if(this.props.facilityData.facilities !== prevProps.facilityData.facilities) {
//             let facilities = this.props.facilityData.facilities;
//
//             this.setState({
//                 facilities : this.props.facilityData.facilities
//             })
//         }
//     }
//
//     getHotelList =()=>{
//
//         let category_id = id;
//         let params = {}
//         if(category_id) {
//             params = {category : category_id};
//
//         }
//         this.props.hotelList(params);
//     }
//
//     getFacilities =()=>{
//         this.props.getFacilities()
//     }
//
//     searchHotels = () => {
//         this.props.searchHotels();
//     }
//
//     showFilters = () => {
//         this.setState({
//             showFilterStatus : true
//         })
//     }
//
//     hideFilters = () => {
//         this.setState({
//             showFilterStatus : false
//         })
//     }
//
//     render() {
//         let hotelList = this.props.hotelList || [];
//         let categoryInfo = this.state.category || {};
//         let facilities = this.state.facilities || [];
//         let total = hotelList.length;
//         //hotelList =hotels;
//         console.log(hotelList)
//         const { id } = this.props.router.query;
//         return (
//             <div className="wrapper">
//                 <div className="inner-page listing">
//
//                     <Navbar />
//
//                     <section className="details-banner-block image-shade">
//                         {categoryInfo && categoryInfo.thumb && categoryInfo.thumb !== '' &&
//                         <img src={`${IMAGE_PATH + 'category/' + categoryInfo.thumb}`}/>
//                         }
//                         {(!categoryInfo || !categoryInfo.thumb || categoryInfo.thumb === '') &&
//                         <img src="../assets/images/banner.jpg"/>
//                         }
//
//
//                         <div class="carousel-text-block">
//                             <div class="container">
//                                 <h1>{categoryInfo.category}</h1>
//                             </div>
//                         </div>
//                     </section>
//
//
//                     <div className="listing-wrapper">
//
//                         <LeftPanel facilities={facilities} searchHotels={this.searchHotels} showFilterStatus = {this.state.showFilterStatus}
//                                    hideFilters={this.hideFilters}/>
//                         <div className="listing-content">
//
//                             <div className="listing-content-header">
//                                 <h5>HOTELS & RESORTS</h5>
//
//                                 <div className="listing-content-header-right">
//                                     <p className="font-bold">{hotelList.length} Hotels found</p>
//                                     <button className="filter" onClick={() => this.showFilters()}></button>
//                                 </div>
//                             </div>
//                             {hotelList.length > 0 &&
//                             <div className="content-lister">
//                                 {hotelList.map((hotel, index) =>
//                                     <HotelBlock detail={hotel}/>
//                                 )}
//                                 {hotelList.length < total &&
//                                 <div className="loadmore-block">
//                                     <Link href={"/hotel-detail"}>
//                                         <nav>Load more</nav>
//                                     </Link>
//                                 </div>
//                                 }
//
//                             </div>
//                             }
//                             {hotelList.length === 0 &&
//                             <div className="coming-soon-wrapper">
//                                 <h1>Hotels will be added Soon</h1>
//                             </div>
//                             }
//                         </div>
//
//                     </div>
//
//                     <Footer />
//
//                 </div>
//
//                 <a id="back-to-top" href="#" className="back-to-top">
//                     <span className="top"></span>
//                 </a>
//
//             </div>
//         );
//     }
// }
//
// const mapStateToProps = state => ({
//     hotelData:state.HotelReducer.hotelData,
//     facilityData:state.HotelReducer.facilityData
// });
//
// export default withRouter(connect(
//     mapStateToProps,
//     {
//         hotelList : HotelActions.getHotelList,
//         getFacilities : HotelActions.getFacilities,
//         searchHotels : HotelActions.searchHotels
//     }
// )(HotelList));

var _c;

$RefreshReg$(_c, "HotelList");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaG90ZWxzL1tpZF0uNzUzYTA4YjJmMzlmMDRiMzQ0NjMuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7O0FBQ2JBLDhDQUE2QztBQUN6Q0csRUFBQUEsS0FBSyxFQUFFO0FBRGtDLENBQTdDO0FBR0FELHVCQUFBLEdBQTBCLEtBQUssQ0FBL0I7O0FBQ0EsSUFBSUcsTUFBTSxHQUFHQyxzQkFBc0IsQ0FBQ0MsbUJBQU8sQ0FBQyw0Q0FBRCxDQUFSLENBQW5DOztBQUNBLFNBQVNELHNCQUFULENBQWdDRSxHQUFoQyxFQUFxQztBQUNqQyxTQUFPQSxHQUFHLElBQUlBLEdBQUcsQ0FBQ0MsVUFBWCxHQUF3QkQsR0FBeEIsR0FBOEI7QUFDakMsZUFBU0E7QUFEd0IsR0FBckM7QUFHSDs7QUFDRCxJQUFNSixlQUFlLEdBQUdDLE1BQU0sV0FBTixDQUFlSyxhQUFmLENBQTZCLEVBQTdCLENBQXhCOztBQUVBUix1QkFBQSxHQUEwQkUsZUFBMUI7O0FBQ0EsSUFBSSxNQUF1QztBQUN2Q0EsRUFBQUEsZUFBZSxDQUFDTyxXQUFoQixHQUE4QixpQkFBOUI7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQlk7Ozs7QUFDYlgsOENBQTZDO0FBQ3pDRyxFQUFBQSxLQUFLLEVBQUU7QUFEa0MsQ0FBN0M7QUFHQUQsbUJBQUEsR0FBc0JVLFdBQXRCO0FBQ0FWLGNBQUEsR0FBaUJXLE1BQWpCOztBQUNBLElBQUlSLE1BQU0sR0FBR0Msc0JBQXNCLENBQUNDLG1CQUFPLENBQUMsNENBQUQsQ0FBUixDQUFuQzs7QUFDQSxJQUFJTyxXQUFXLEdBQUdQLG1CQUFPLENBQUMseUVBQUQsQ0FBekI7O0FBQ0EsU0FBU0Qsc0JBQVQsQ0FBZ0NFLEdBQWhDLEVBQXFDO0FBQ2pDLFNBQU9BLEdBQUcsSUFBSUEsR0FBRyxDQUFDQyxVQUFYLEdBQXdC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QUFBQTs7QUFvSk4sK0RBQWVBLFNBQWYsR0FDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JZQSxpSEFBa0Q7Ozs7Ozs7Ozs7O0FDQWxELHVCQUF1QixtQkFBTyxDQUFDLDBHQUF1Qjs7QUFFdEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXlCLG1CQUFtQix5QkFBeUI7Ozs7Ozs7Ozs7QUNQckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHNCQUF5QixtQkFBbUIseUJBQXlCOzs7Ozs7Ozs7O0FDaEJyRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBeUIsbUJBQW1CLHlCQUF5Qjs7Ozs7Ozs7OztBQ0xyRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBeUIsbUJBQW1CLHlCQUF5Qjs7Ozs7Ozs7OztBQ0xyRSx3QkFBd0IsbUJBQU8sQ0FBQyw0R0FBd0I7O0FBRXhELHNCQUFzQixtQkFBTyxDQUFDLHdHQUFzQjs7QUFFcEQsaUNBQWlDLG1CQUFPLENBQUMsOEhBQWlDOztBQUUxRSx3QkFBd0IsbUJBQU8sQ0FBQyw0R0FBd0I7O0FBRXhEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNCQUF5QixtQkFBbUIseUJBQXlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3Qvc2hhcmVkL2xpYi9hbXAtY29udGV4dC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9zaGFyZWQvbGliL2FtcC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9zaGFyZWQvbGliL2hlYWQtbWFuYWdlci1jb250ZXh0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3NoYXJlZC9saWIvaGVhZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9zaGFyZWQvbGliL3NpZGUtZWZmZWN0LmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9ob3RlbHMvW2lkXS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvaGVhZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRob3V0SG9sZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlU3ByZWFkLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuQW1wU3RhdGVDb250ZXh0ID0gdm9pZCAwO1xudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbmNvbnN0IEFtcFN0YXRlQ29udGV4dCA9IF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUNvbnRleHQoe1xufSk7XG5leHBvcnRzLkFtcFN0YXRlQ29udGV4dCA9IEFtcFN0YXRlQ29udGV4dDtcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgQW1wU3RhdGVDb250ZXh0LmRpc3BsYXlOYW1lID0gJ0FtcFN0YXRlQ29udGV4dCc7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFtcC1jb250ZXh0LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5pc0luQW1wTW9kZSA9IGlzSW5BbXBNb2RlO1xuZXhwb3J0cy51c2VBbXAgPSB1c2VBbXA7XG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIF9hbXBDb250ZXh0ID0gcmVxdWlyZShcIi4vYW1wLWNvbnRleHRcIik7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5mdW5jdGlvbiBpc0luQW1wTW9kZSh7IGFtcEZpcnN0ID1mYWxzZSAsIGh5YnJpZCA9ZmFsc2UgLCBoYXNRdWVyeSA9ZmFsc2UgLCAgfSA9IHtcbn0pIHtcbiAgICByZXR1cm4gYW1wRmlyc3QgfHwgaHlicmlkICYmIGhhc1F1ZXJ5O1xufVxuZnVuY3Rpb24gdXNlQW1wKCkge1xuICAgIC8vIERvbid0IGFzc2lnbiB0aGUgY29udGV4dCB2YWx1ZSB0byBhIHZhcmlhYmxlIHRvIHNhdmUgYnl0ZXNcbiAgICByZXR1cm4gaXNJbkFtcE1vZGUoX3JlYWN0LmRlZmF1bHQudXNlQ29udGV4dChfYW1wQ29udGV4dC5BbXBTdGF0ZUNvbnRleHQpKTtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YW1wLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5IZWFkTWFuYWdlckNvbnRleHQgPSB2b2lkIDA7XG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuY29uc3QgSGVhZE1hbmFnZXJDb250ZXh0ID0gX3JlYWN0LmRlZmF1bHQuY3JlYXRlQ29udGV4dCh7XG59KTtcbmV4cG9ydHMuSGVhZE1hbmFnZXJDb250ZXh0ID0gSGVhZE1hbmFnZXJDb250ZXh0O1xuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBIZWFkTWFuYWdlckNvbnRleHQuZGlzcGxheU5hbWUgPSAnSGVhZE1hbmFnZXJDb250ZXh0Jztcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aGVhZC1tYW5hZ2VyLWNvbnRleHQuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHRIZWFkID0gZGVmYXVsdEhlYWQ7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBfc2lkZUVmZmVjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vc2lkZS1lZmZlY3RcIikpO1xudmFyIF9hbXBDb250ZXh0ID0gcmVxdWlyZShcIi4vYW1wLWNvbnRleHRcIik7XG52YXIgX2hlYWRNYW5hZ2VyQ29udGV4dCA9IHJlcXVpcmUoXCIuL2hlYWQtbWFuYWdlci1jb250ZXh0XCIpO1xudmFyIF9hbXAgPSByZXF1aXJlKFwiLi9hbXBcIik7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIG5ld09iaiA9IHtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKG9iaiAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IodmFyIGtleSBpbiBvYmope1xuICAgICAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkZXNjID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IHtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBuZXdPYmouZGVmYXVsdCA9IG9iajtcbiAgICAgICAgcmV0dXJuIG5ld09iajtcbiAgICB9XG59XG5mdW5jdGlvbiBkZWZhdWx0SGVhZChpbkFtcE1vZGUgPSBmYWxzZSkge1xuICAgIGNvbnN0IGhlYWQgPSBbXG4gICAgICAgIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAgICAgICAgY2hhclNldDogXCJ1dGYtOFwiXG4gICAgICAgIH0pXG4gICAgXTtcbiAgICBpZiAoIWluQW1wTW9kZSkge1xuICAgICAgICBoZWFkLnB1c2goLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICAgICAgICBuYW1lOiBcInZpZXdwb3J0XCIsXG4gICAgICAgICAgICBjb250ZW50OiBcIndpZHRoPWRldmljZS13aWR0aFwiXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgcmV0dXJuIGhlYWQ7XG59XG5mdW5jdGlvbiBvbmx5UmVhY3RFbGVtZW50KGxpc3QsIGNoaWxkKSB7XG4gICAgLy8gUmVhY3QgY2hpbGRyZW4gY2FuIGJlIFwic3RyaW5nXCIgb3IgXCJudW1iZXJcIiBpbiB0aGlzIGNhc2Ugd2UgaWdub3JlIHRoZW0gZm9yIGJhY2t3YXJkcyBjb21wYXRcbiAgICBpZiAodHlwZW9mIGNoaWxkID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgY2hpbGQgPT09ICdudW1iZXInKSB7XG4gICAgICAgIHJldHVybiBsaXN0O1xuICAgIH1cbiAgICAvLyBBZGRzIHN1cHBvcnQgZm9yIFJlYWN0LkZyYWdtZW50XG4gICAgaWYgKGNoaWxkLnR5cGUgPT09IF9yZWFjdC5kZWZhdWx0LkZyYWdtZW50KSB7XG4gICAgICAgIHJldHVybiBsaXN0LmNvbmNhdChfcmVhY3QuZGVmYXVsdC5DaGlsZHJlbi50b0FycmF5KGNoaWxkLnByb3BzLmNoaWxkcmVuKS5yZWR1Y2UoKGZyYWdtZW50TGlzdCwgZnJhZ21lbnRDaGlsZCk9PntcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZnJhZ21lbnRDaGlsZCA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIGZyYWdtZW50Q2hpbGQgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZyYWdtZW50TGlzdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmcmFnbWVudExpc3QuY29uY2F0KGZyYWdtZW50Q2hpbGQpO1xuICAgICAgICB9LCBbXSkpO1xuICAgIH1cbiAgICByZXR1cm4gbGlzdC5jb25jYXQoY2hpbGQpO1xufVxuY29uc3QgTUVUQVRZUEVTID0gW1xuICAgICduYW1lJyxcbiAgICAnaHR0cEVxdWl2JyxcbiAgICAnY2hhclNldCcsXG4gICAgJ2l0ZW1Qcm9wJ1xuXTtcbi8qXG4gcmV0dXJucyBhIGZ1bmN0aW9uIGZvciBmaWx0ZXJpbmcgaGVhZCBjaGlsZCBlbGVtZW50c1xuIHdoaWNoIHNob3VsZG4ndCBiZSBkdXBsaWNhdGVkLCBsaWtlIDx0aXRsZS8+XG4gQWxzbyBhZGRzIHN1cHBvcnQgZm9yIGRlZHVwbGljYXRlZCBga2V5YCBwcm9wZXJ0aWVzXG4qLyBmdW5jdGlvbiB1bmlxdWUoKSB7XG4gICAgY29uc3Qga2V5cyA9IG5ldyBTZXQoKTtcbiAgICBjb25zdCB0YWdzID0gbmV3IFNldCgpO1xuICAgIGNvbnN0IG1ldGFUeXBlcyA9IG5ldyBTZXQoKTtcbiAgICBjb25zdCBtZXRhQ2F0ZWdvcmllcyA9IHtcbiAgICB9O1xuICAgIHJldHVybiAoaCk9PntcbiAgICAgICAgbGV0IGlzVW5pcXVlID0gdHJ1ZTtcbiAgICAgICAgbGV0IGhhc0tleSA9IGZhbHNlO1xuICAgICAgICBpZiAoaC5rZXkgJiYgdHlwZW9mIGgua2V5ICE9PSAnbnVtYmVyJyAmJiBoLmtleS5pbmRleE9mKCckJykgPiAwKSB7XG4gICAgICAgICAgICBoYXNLZXkgPSB0cnVlO1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gaC5rZXkuc2xpY2UoaC5rZXkuaW5kZXhPZignJCcpICsgMSk7XG4gICAgICAgICAgICBpZiAoa2V5cy5oYXMoa2V5KSkge1xuICAgICAgICAgICAgICAgIGlzVW5pcXVlID0gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGtleXMuYWRkKGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlZmF1bHQtY2FzZVxuICAgICAgICBzd2l0Y2goaC50eXBlKXtcbiAgICAgICAgICAgIGNhc2UgJ3RpdGxlJzpcbiAgICAgICAgICAgIGNhc2UgJ2Jhc2UnOlxuICAgICAgICAgICAgICAgIGlmICh0YWdzLmhhcyhoLnR5cGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzVW5pcXVlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGFncy5hZGQoaC50eXBlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdtZXRhJzpcbiAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSAwLCBsZW4gPSBNRVRBVFlQRVMubGVuZ3RoOyBpIDwgbGVuOyBpKyspe1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBtZXRhdHlwZSA9IE1FVEFUWVBFU1tpXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFoLnByb3BzLmhhc093blByb3BlcnR5KG1ldGF0eXBlKSkgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtZXRhdHlwZSA9PT0gJ2NoYXJTZXQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWV0YVR5cGVzLmhhcyhtZXRhdHlwZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1VuaXF1ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRhVHlwZXMuYWRkKG1ldGF0eXBlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNhdGVnb3J5ID0gaC5wcm9wc1ttZXRhdHlwZV07XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjYXRlZ29yaWVzID0gbWV0YUNhdGVnb3JpZXNbbWV0YXR5cGVdIHx8IG5ldyBTZXQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgobWV0YXR5cGUgIT09ICduYW1lJyB8fCAhaGFzS2V5KSAmJiBjYXRlZ29yaWVzLmhhcyhjYXRlZ29yeSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1VuaXF1ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yaWVzLmFkZChjYXRlZ29yeSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0YUNhdGVnb3JpZXNbbWV0YXR5cGVdID0gY2F0ZWdvcmllcztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaXNVbmlxdWU7XG4gICAgfTtcbn1cbi8qKlxuICpcbiAqIEBwYXJhbSBoZWFkRWxlbWVudHMgTGlzdCBvZiBtdWx0aXBsZSA8SGVhZD4gaW5zdGFuY2VzXG4gKi8gZnVuY3Rpb24gcmVkdWNlQ29tcG9uZW50cyhoZWFkRWxlbWVudHMsIHByb3BzKSB7XG4gICAgcmV0dXJuIGhlYWRFbGVtZW50cy5yZWR1Y2UoKGxpc3QsIGhlYWRFbGVtZW50KT0+e1xuICAgICAgICBjb25zdCBoZWFkRWxlbWVudENoaWxkcmVuID0gX3JlYWN0LmRlZmF1bHQuQ2hpbGRyZW4udG9BcnJheShoZWFkRWxlbWVudC5wcm9wcy5jaGlsZHJlbik7XG4gICAgICAgIHJldHVybiBsaXN0LmNvbmNhdChoZWFkRWxlbWVudENoaWxkcmVuKTtcbiAgICB9LCBbXSkucmVkdWNlKG9ubHlSZWFjdEVsZW1lbnQsIFtdKS5yZXZlcnNlKCkuY29uY2F0KGRlZmF1bHRIZWFkKHByb3BzLmluQW1wTW9kZSkpLmZpbHRlcih1bmlxdWUoKSkucmV2ZXJzZSgpLm1hcCgoYywgaSk9PntcbiAgICAgICAgY29uc3Qga2V5ID0gYy5rZXkgfHwgaTtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAnZGV2ZWxvcG1lbnQnICYmIHByb2Nlc3MuZW52Ll9fTkVYVF9PUFRJTUlaRV9GT05UUyAmJiAhcHJvcHMuaW5BbXBNb2RlKSB7XG4gICAgICAgICAgICBpZiAoYy50eXBlID09PSAnbGluaycgJiYgYy5wcm9wc1snaHJlZiddICYmIC8vIFRPRE8ocHJhdGVla2JoQCk6IFJlcGxhY2UgdGhpcyB3aXRoIGNvbnN0IGZyb20gYGNvbnN0YW50c2Agd2hlbiB0aGUgdHJlZSBzaGFraW5nIHdvcmtzLlxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzcycsXG4gICAgICAgICAgICAgICAgJ2h0dHBzOi8vdXNlLnR5cGVraXQubmV0LydcbiAgICAgICAgICAgIF0uc29tZSgodXJsKT0+Yy5wcm9wc1snaHJlZiddLnN0YXJ0c1dpdGgodXJsKVxuICAgICAgICAgICAgKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1Byb3BzID0ge1xuICAgICAgICAgICAgICAgICAgICAuLi5jLnByb3BzIHx8IHtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgbmV3UHJvcHNbJ2RhdGEtaHJlZiddID0gbmV3UHJvcHNbJ2hyZWYnXTtcbiAgICAgICAgICAgICAgICBuZXdQcm9wc1snaHJlZiddID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIC8vIEFkZCB0aGlzIGF0dHJpYnV0ZSB0byBtYWtlIGl0IGVhc3kgdG8gaWRlbnRpZnkgb3B0aW1pemVkIHRhZ3NcbiAgICAgICAgICAgICAgICBuZXdQcm9wc1snZGF0YS1vcHRpbWl6ZWQtZm9udHMnXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuKC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY2xvbmVFbGVtZW50KGMsIG5ld1Byb3BzKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuKC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY2xvbmVFbGVtZW50KGMsIHtcbiAgICAgICAgICAgIGtleVxuICAgICAgICB9KSk7XG4gICAgfSk7XG59XG4vKipcbiAqIFRoaXMgY29tcG9uZW50IGluamVjdHMgZWxlbWVudHMgdG8gYDxoZWFkPmAgb2YgeW91ciBwYWdlLlxuICogVG8gYXZvaWQgZHVwbGljYXRlZCBgdGFnc2AgaW4gYDxoZWFkPmAgeW91IGNhbiB1c2UgdGhlIGBrZXlgIHByb3BlcnR5LCB3aGljaCB3aWxsIG1ha2Ugc3VyZSBldmVyeSB0YWcgaXMgb25seSByZW5kZXJlZCBvbmNlLlxuICovIGZ1bmN0aW9uIEhlYWQoeyBjaGlsZHJlbiAgfSkge1xuICAgIGNvbnN0IGFtcFN0YXRlID0gKDAsIF9yZWFjdCkudXNlQ29udGV4dChfYW1wQ29udGV4dC5BbXBTdGF0ZUNvbnRleHQpO1xuICAgIGNvbnN0IGhlYWRNYW5hZ2VyID0gKDAsIF9yZWFjdCkudXNlQ29udGV4dChfaGVhZE1hbmFnZXJDb250ZXh0LkhlYWRNYW5hZ2VyQ29udGV4dCk7XG4gICAgcmV0dXJuKC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfc2lkZUVmZmVjdC5kZWZhdWx0LCB7XG4gICAgICAgIHJlZHVjZUNvbXBvbmVudHNUb1N0YXRlOiByZWR1Y2VDb21wb25lbnRzLFxuICAgICAgICBoZWFkTWFuYWdlcjogaGVhZE1hbmFnZXIsXG4gICAgICAgIGluQW1wTW9kZTogKDAsIF9hbXApLmlzSW5BbXBNb2RlKGFtcFN0YXRlKVxuICAgIH0sIGNoaWxkcmVuKSk7XG59XG52YXIgX2RlZmF1bHQgPSBIZWFkO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWhlYWQuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX3JlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xuY29uc3QgaXNTZXJ2ZXIgPSB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJztcbmNsYXNzIF9jbGFzcyBleHRlbmRzIF9yZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLmVtaXRDaGFuZ2UgPSAoKT0+e1xuICAgICAgICAgICAgaWYgKHRoaXMuX2hhc0hlYWRNYW5hZ2VyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oZWFkTWFuYWdlci51cGRhdGVIZWFkKHRoaXMucHJvcHMucmVkdWNlQ29tcG9uZW50c1RvU3RhdGUoW1xuICAgICAgICAgICAgICAgICAgICAuLi50aGlzLnByb3BzLmhlYWRNYW5hZ2VyLm1vdW50ZWRJbnN0YW5jZXNcbiAgICAgICAgICAgICAgICBdLCB0aGlzLnByb3BzKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX2hhc0hlYWRNYW5hZ2VyID0gdGhpcy5wcm9wcy5oZWFkTWFuYWdlciAmJiB0aGlzLnByb3BzLmhlYWRNYW5hZ2VyLm1vdW50ZWRJbnN0YW5jZXM7XG4gICAgICAgIGlmIChpc1NlcnZlciAmJiB0aGlzLl9oYXNIZWFkTWFuYWdlcikge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5oZWFkTWFuYWdlci5tb3VudGVkSW5zdGFuY2VzLmFkZCh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuZW1pdENoYW5nZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBpZiAodGhpcy5faGFzSGVhZE1hbmFnZXIpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaGVhZE1hbmFnZXIubW91bnRlZEluc3RhbmNlcy5hZGQodGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbWl0Q2hhbmdlKCk7XG4gICAgfVxuICAgIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy5lbWl0Q2hhbmdlKCk7XG4gICAgfVxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICBpZiAodGhpcy5faGFzSGVhZE1hbmFnZXIpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaGVhZE1hbmFnZXIubW91bnRlZEluc3RhbmNlcy5kZWxldGUodGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbWl0Q2hhbmdlKCk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gX2NsYXNzO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1zaWRlLWVmZmVjdC5qcy5tYXAiLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnQsIHVzZUVmZmVjdCwgbGF6eSwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi4vLi4vdmlld3MvTmF2YmFyXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uLy4uL3ZpZXdzL0Zvb3RlclwiO1xyXG5pbXBvcnQgTGVmdFBhbmVsIGZyb20gXCIuLi8uLi92aWV3cy9MZWZ0UGFuZWxcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgSG90ZWxCbG9jayBmcm9tIFwiLi4vLi4vdmlld3MvSG90ZWxCbG9ja1wiO1xyXG5pbXBvcnQgKiBhcyBIb3RlbEFjdGlvbnMgZnJvbSBcIi4uLy4uL2FjdGlvbnMvaG90ZWxcIlxyXG5pbXBvcnQge2dldFVybFNlZ21lbnR9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvQ3VzdG9tRnVuY3Rpb25zXCI7XHJcbmltcG9ydCB7SU1BR0VfUEFUSCwgQVBJX1BBVEh9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQge2hvdGVsfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvaG90ZWwuc2VydmljZXNcIjtcclxuaW1wb3J0IHtnZXRGYWNpbGl0aWVzfSBmcm9tIFwiLi4vLi4vYWN0aW9ucy9ob3RlbFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcblxyXG5cclxuXHJcbi8vVGhpcyBnZXRzIGNhbGxlZCBldmVyeSB0aW1lIHRoZSBwYWdlIGlzIGNhbGxlZFxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuICAgIGNvbnN0IHtwYXJhbXN9ID0gY29udGV4dDtcclxuICAgIGNvbnN0IHtpZH0gPSBwYXJhbXM7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke0FQSV9QQVRIfWhvdGVsL2hvdGVsbGlzdD9jYXRlZ29yeT0ke2lkfWApO1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHMgOiB7XHJcbiAgICAgICAgICAgIGhvdGVsTGlzdDogcmVzLnJlc3VsdHMgPyByZXMucmVzdWx0cy5kYXRhOiBbXSxcclxuICAgICAgICAgICAgY2F0ZWdvcnlJbmZvIDogcmVzLnJlc3VsdHMuY2F0ZWdvcnlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5jb25zdCBIb3RlbExpc3QgPSAoeyBob3RlbExpc3QsIGNhdGVnb3J5SW5mbyB9KSA9PiB7XHJcbiAgICBjb25zdCBbZmFjaWxpdGllcywgc2V0ZmFjaWxpdGllc10gPSB1c2VTdGF0ZShbXSlcclxuICAgIGNvbnN0IFtzaG93RmlsdGVyU3RhdHVzLCBzZXRzaG93RmlsdGVyU3RhdHVzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGxldCB0b3RhbCA9IGhvdGVsTGlzdC5sZW5ndGg7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAvLyBBbHdheXMgZG8gbmF2aWdhdGlvbnMgYWZ0ZXIgdGhlIGZpcnN0IHJlbmRlclxyXG4gICAgICAgIGdldEZhY2lsaXRpZXMoKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBnZXRGYWNpbGl0aWVzKCkge1xyXG4gICAgICAgIGxldCBmcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtBUElfUEFUSH1cImhvdGVsL21hc3RlcmZhY2lsaXRpZXNgKTtcclxuICAgICAgICBsZXQgZnJlcyA9IGF3YWl0IGZyZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgc2V0ZmFjaWxpdGllcyhmcmVzLnJlc3VsdHMgPyBmcmVzLnJlc3VsdHMuZGF0YSA6IFtdKTtcclxuXHJcbiAgICB9XHJcbiAgIC8vIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIGZ1bmN0aW9uIHNlYXJjaEhvdGVscygpIHtcclxuICAgICAgIC8vIHRoaXMucHJvcHMuc2VhcmNoSG90ZWxzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2hvd0ZpbHRlcnMoKXtcclxuICAgICAgICBzZXRzaG93RmlsdGVyU3RhdHVzKHRydWUpXHJcblxyXG4gICAgICAgIC8vIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIC8vICAgICBzaG93RmlsdGVyU3RhdHVzIDogdHJ1ZVxyXG4gICAgICAgIC8vIH0pXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGlkZUZpbHRlcnMoKXtcclxuICAgICAgICBzZXRzaG93RmlsdGVyU3RhdHVzKGZhbHNlKVxyXG4gICAgICAgIC8vICAgICBzaG93RmlsdGVyU3RhdHVzIDogZmFsc2VcclxuICAgICAgICAvLyB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBjaGFyU2V0PVwiVVRGLThcIiAvPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPntob3RlbERldGFpbCA/IGhvdGVsRGV0YWlsLmhvdGVsX25hbWUgOidVVEgnfTwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY29udGVudD17aG90ZWxEZXRhaWwgPyAoaG90ZWxEZXRhaWwuYWRkcmVzcyArIFwiICBcIiAraG90ZWxEZXRhaWwucGhvbmVubyArIFwiIFwiICtob3RlbERldGFpbC5tb2JpbGVubyAgKyBob3RlbERldGFpbC5ob3RlbF9kZXNjICkgOiAnVVRIIEdyb3VwIG9mIEhvdGVscycgfSAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImtleXdvcmRzXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e2hvdGVsRGV0YWlsID8gKGhvdGVsRGV0YWlsLmFkZHJlc3MgLCBob3RlbERldGFpbC5waG9uZW5vICwgaG90ZWxEZXRhaWwubW9iaWxlbm8gLCBob3RlbERldGFpbC5ob3RlbF9kZXNjKSA6ICdiZXN0IGhvdGVscyBvZiBrb2NoaSwgYmVzdCBob3RlbHMnfS8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiYXV0aG9yXCIgY29udGVudD1cIlVUSCBHcm91cCBPZiBIb3RlbHNcIiAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcIiAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0eXBlXCIgY29udGVudD1cIndlYnNpdGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9e2hvdGVsRGV0YWlsID8gaG90ZWxEZXRhaWwuaG90ZWxfbmFtZSA6J1VUSCd9IC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD1cIlRoZSB0b3VyaXNtIGlzIGluIGZ1bGwgc3dpbmcgZm9yIHRoZSBHb2TigJlzIG93biBjb3VudHJ5IGFuZCB0aGUgYmVzdCBob3RlbHMgaW4gS29jaGkgYXJlIGFsc28gcmVhZHkgdG8gd2VsY29tZSB0aGUgZ3Vlc3RzLiBUaGUgU3VnYXIgaG90ZWwgaW4gS29jaGkgaXMgYSBwcmVzdGlnaW91cyBvbmUgaW4gdGhpcyBsaXN0IHdob3NlIGxvY2F0aW9uIGl0c2VsZiBpcyBzaWduaWZpY2FudC5VVEggaXMgdGhlIGxlYWRpbmcgYnJhbmQgaW4gdGhlIGhvdGVsIGJ1c2luZXNzIHRoYXQgaXMgcnVubmluZyBtYW55IGhvdGVscyBhbmQgcmVzb3J0cyBhbGwgb3ZlciB0aGUgY291bnRyeSBhbmQgb3V0IG9mIHRoZSBjb3VudHJ5IHRvbyBzdWNoIGFzIFNyaSBMYW5rYSwgRHViYWkgYW5kIE1hbGRpdmVzLlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnVybFwiIGNvbnRlbnQ9XCIlUFVCTElDX1VSTCVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpzaXRlX25hbWVcIiBjb250ZW50PVwiVVRIIHwgR3JvdXAgb2YgSG90ZWxzXCIgLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBjb250ZW50PVwiaHR0cDovLzE1OS42NS4xNTMuNTkvc2l0ZS9hc3NldHMvaW1hZ2VzL2Zhdi9vZy1pbWFnZS5qcGdcIiAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6Y2FyZFwiIGNvbnRlbnQ9XCJodHRwOi8vMTU5LjY1LjE1My41OS9zaXRlL2Fzc2V0cy9pbWFnZXMvZmF2L29nLWltYWdlLmpwZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgc2l6ZXM9XCI1N3g1N1wiIGhyZWY9XCIvYXNzZXRzL2ltYWdlcy9mYXYvYXBwbGUtaWNvbi01N3g1Ny5wbmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIHNpemVzPVwiNjB4NjBcIiBocmVmPVwiL2Fzc2V0cy9pbWFnZXMvZmF2L2FwcGxlLWljb24tNjB4NjAucG5nXCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBzaXplcz1cIjcyeDcyXCIgaHJlZj1cIi9hc3NldHMvaW1hZ2VzL2Zhdi9hcHBsZS1pY29uLTcyeDcyLnBuZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgc2l6ZXM9XCI3Nng3NlwiIGhyZWY9XCIvYXNzZXRzL2ltYWdlcy9mYXYvYXBwbGUtaWNvbi03Nng3Ni5wbmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIHNpemVzPVwiMTE0eDExNFwiIGhyZWY9XCIvYXNzZXRzL2ltYWdlcy9mYXYvYXBwbGUtaWNvbi0xMTR4MTE0LnBuZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgc2l6ZXM9XCIxMjB4MTIwXCIgaHJlZj1cIi9hc3NldHMvaW1hZ2VzL2Zhdi9hcHBsZS1pY29uLTEyMHgxMjAucG5nXCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBzaXplcz1cIjE0NHgxNDRcIiBocmVmPVwiL2Fzc2V0cy9pbWFnZXMvZmF2L2FwcGxlLWljb24tMTQ0eDE0NC5wbmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIHNpemVzPVwiMTUyeDE1MlwiIGhyZWY9XCIvYXNzZXRzL2ltYWdlcy9mYXYvYXBwbGUtaWNvbi0xNTJ4MTUyLnBuZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgc2l6ZXM9XCIxODB4MTgwXCIgaHJlZj1cIi9hc3NldHMvaW1hZ2VzL2Zhdi9hcHBsZS1pY29uLTE4MHgxODAucG5nXCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiB0eXBlPVwiaW1hZ2UvcG5nXCIgc2l6ZXM9XCIxOTJ4MTkyXCIgaHJlZj1cIi9hc3NldHMvaW1hZ2VzL2Zhdi9hbmRyb2lkLWljb24tMTkyeDE5Mi5wbmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIHR5cGU9XCJpbWFnZS9wbmdcIiBzaXplcz1cIjMyeDMyXCIgaHJlZj1cIi9hc3NldHMvaW1hZ2VzL2Zhdi9mYXZpY29uLTMyeDMyLnBuZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgdHlwZT1cImltYWdlL3BuZ1wiIHNpemVzPVwiOTZ4OTZcIiBocmVmPVwiL2Fzc2V0cy9pbWFnZXMvZmF2L2Zhdmljb24tOTZ4OTYucG5nXCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiB0eXBlPVwiaW1hZ2UvcG5nXCIgc2l6ZXM9XCIxNngxNlwiIGhyZWY9XCIvYXNzZXRzL2ltYWdlcy9mYXYvZmF2aWNvbi0xNngxNi5wbmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cIm1zYXBwbGljYXRpb24tVGlsZUltYWdlXCIgY29udGVudD1cIi9hc3NldHMvaW1hZ2VzL2Zhdi9tcy1pY29uLTE0NHgxNDQucG5nXCIgLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOnRpdGxlXCIgY29udGVudD1cIlVUSCB8IEdyb3VwIG9mIEhvdGVsc1wiIC8+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgICAgICAgIDxtYWluPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lci1wYWdlIGxpc3RpbmdcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZiYXIvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZGV0YWlscy1iYW5uZXItYmxvY2sgaW1hZ2Utc2hhZGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjYXRlZ29yeUluZm8gJiYgY2F0ZWdvcnlJbmZvLnRodW1iICYmIGNhdGVnb3J5SW5mby50aHVtYiAhPT0gJycgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgJHtJTUFHRV9QQVRIICsgJ2NhdGVnb3J5LycgKyBjYXRlZ29yeUluZm8udGh1bWJ9YH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyghY2F0ZWdvcnlJbmZvIHx8ICFjYXRlZ29yeUluZm8udGh1bWIgfHwgY2F0ZWdvcnlJbmZvLnRodW1iID09PSAnJykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vYXNzZXRzL2ltYWdlcy9iYW5uZXIuanBnXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcm91c2VsLXRleHQtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+e2NhdGVnb3J5SW5mby5jYXRlZ29yeX08L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3Rpbmctd3JhcHBlclwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMZWZ0UGFuZWwgZmFjaWxpdGllcz17ZmFjaWxpdGllc30gc2VhcmNoSG90ZWxzPXtzZWFyY2hIb3RlbHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dGaWx0ZXJTdGF0dXM9e3Nob3dGaWx0ZXJTdGF0dXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVGaWx0ZXJzPXtoaWRlRmlsdGVyc30vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nLWNvbnRlbnRcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nLWNvbnRlbnQtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5IT1RFTFMgJiBSRVNPUlRTPC9oNT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdGluZy1jb250ZW50LWhlYWRlci1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+e2hvdGVsTGlzdC5sZW5ndGh9IEhvdGVscyBmb3VuZDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZmlsdGVyXCIgb25DbGljaz17KCkgPT4gc2hvd0ZpbHRlcnMoKX0+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtob3RlbExpc3QubGVuZ3RoID4gMCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1saXN0ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2hvdGVsTGlzdC5tYXAoKGhvdGVsLCBpbmRleCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIb3RlbEJsb2NrIGRldGFpbD17aG90ZWx9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2hvdGVsTGlzdC5sZW5ndGggPCB0b3RhbCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRtb3JlLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtcIi9ob3RlbC1kZXRhaWxcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5hdj5Mb2FkIG1vcmU8L25hdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtob3RlbExpc3QubGVuZ3RoID09PSAwICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21pbmctc29vbi13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5Ib3RlbHMgd2lsbCBiZSBhZGRlZCBTb29uPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvb3Rlci8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8YSBpZD1cImJhY2stdG8tdG9wXCIgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJiYWNrLXRvLXRvcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0b3BcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L21haW4+XHJcbiAgICAgICAgPC8+XHJcblxyXG5cclxuICAgICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEhvdGVsTGlzdDtcclxuLy8gY2xhc3MgSG90ZWxMaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuLy8gICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbi8vICAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4vL1xyXG4vLyAgICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbi8vICAgICAgICAgICAgIGhvdGVsTGlzdCA6IHByb3BzLmhvdGVsTGlzdCxcclxuLy8gICAgICAgICAgICAgc2VhcmNoVGV4dHMgOiBbXSxcclxuLy8gICAgICAgICAgICAgZmFjaWxpdGllcyA6IFtdLFxyXG4vLyAgICAgICAgICAgICBzaG93RmlsdGVyU3RhdHVzIDogZmFsc2UsXHJcbi8vICAgICAgICAgICAgIGNhdGVnb3J5IDoge31cclxuLy8gICAgICAgICB9XHJcbi8vXHJcbi8vICAgICB9XHJcbi8vXHJcbi8vICAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuLy9cclxuLy8gICAgICAgICB0aGlzLmdldEZhY2lsaXRpZXMoKTtcclxuLy8gICAgICAgICAvL3RoaXMuZ2V0SG90ZWxMaXN0KClcclxuLy8gICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuLy8gICAgICAgICAgICAgaG90ZWxMaXN0IDogdGhpcy5wcm9wcy5ob3RlbExpc3RcclxuLy8gICAgICAgICB9KVxyXG4vL1xyXG4vL1xyXG4vLyAgICAgfVxyXG4vL1xyXG4vLyAgICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlLCBzbmFwc2hvdCkge1xyXG4vL1xyXG4vLyAgICAgICAgIGlmKHRoaXMucHJvcHMuaG90ZWxEYXRhLmhvdGVsTGlzdCAhPT0gcHJldlByb3BzLmhvdGVsRGF0YS5ob3RlbExpc3QpIHtcclxuLy8gICAgICAgICAgICAgbGV0IGhvdGVsTGlzdCA9IHRoaXMucHJvcHMuaG90ZWxEYXRhLmhvdGVsTGlzdDtcclxuLy8gICAgICAgICAgICAgY29uc29sZS5sb2coaG90ZWxMaXN0KVxyXG4vLyAgICAgICAgICAgICBob3RlbExpc3QgPSBob3RlbExpc3QubWFwKGl0ZW0gPT4ge1xyXG4vLyAgICAgICAgICAgICAgICAgbGV0IGZhY2lsaXRpZXMgPSAgaXRlbS5mYWNpbGl0aWVzID8gaXRlbS5mYWNpbGl0aWVzIDogW107XHJcbi8vICAgICAgICAgICAgICAgICBmYWNpbGl0aWVzID0gZmFjaWxpdGllcy5tYXAoKGZhYyxpbmRleCkgPT4ge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmFjLmZhY2lsaXR5X2lkID09PSAxKSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWMuY2xhc3MgPSAncG9vbC1pY28nO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGZhYy5mYWNpbGl0eV9pZCA9PT0gMikge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFjLmNsYXNzID0gJ3dpZmktaWNvJztcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChmYWMuZmFjaWxpdHlfaWQgPT09IDMpIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhYy5jbGFzcyA9ICdmYW1pbHktaWNvJztcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChmYWMuZmFjaWxpdHlfaWQgPT09IDQpIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhYy5jbGFzcyA9ICdwYXJraW5nLWljbyc7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoZmFjLmZhY2lsaXR5X2lkID09PSA1KSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWMuY2xhc3MgPSAnc3BhLWljbyc7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoZmFjLmZhY2lsaXR5X2lkID09PSA2KSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWMuY2xhc3MgPSAncmVzdGF1cmFudC1pY28nO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGZhYy5mYWNpbGl0eV9pZCA9PT0gNykge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFjLmNsYXNzID0gJ2ZpdG5lc3MtaWNvJztcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChmYWMuZmFjaWxpdHlfaWQgPT09IDgpIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhYy5jbGFzcyA9ICdiZWFjaC1pY28nO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWM7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAgICAgKVxyXG4vLyAgICAgICAgICAgICAgICAgaXRlbS5mYWNpbGl0aWVzID0gZmFjaWxpdGllcztcclxuLy8gICAgICAgICAgICAgICAgIHJldHVybiBpdGVtO1xyXG4vLyAgICAgICAgICAgICB9KTtcclxuLy8gICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbi8vICAgICAgICAgICAgICAgICBob3RlbExpc3QgOiBob3RlbExpc3RcclxuLy8gICAgICAgICAgICAgfSlcclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgICAgaWYodGhpcy5wcm9wcy5ob3RlbERhdGEuY2F0ZWdvcnkgIT09IHByZXZQcm9wcy5ob3RlbERhdGEuY2F0ZWdvcnkpIHtcclxuLy8gICAgICAgICAgICAgbGV0IGNhdGVnb3J5ID0gdGhpcy5wcm9wcy5ob3RlbERhdGEuY2F0ZWdvcnk7XHJcbi8vICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4vLyAgICAgICAgICAgICAgICAgY2F0ZWdvcnkgOiBjYXRlZ29yeVxyXG4vLyAgICAgICAgICAgICB9KVxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgICBpZih0aGlzLnByb3BzLmZhY2lsaXR5RGF0YS5mYWNpbGl0aWVzICE9PSBwcmV2UHJvcHMuZmFjaWxpdHlEYXRhLmZhY2lsaXRpZXMpIHtcclxuLy8gICAgICAgICAgICAgbGV0IGZhY2lsaXRpZXMgPSB0aGlzLnByb3BzLmZhY2lsaXR5RGF0YS5mYWNpbGl0aWVzO1xyXG4vL1xyXG4vLyAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuLy8gICAgICAgICAgICAgICAgIGZhY2lsaXRpZXMgOiB0aGlzLnByb3BzLmZhY2lsaXR5RGF0YS5mYWNpbGl0aWVzXHJcbi8vICAgICAgICAgICAgIH0pXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG4vL1xyXG4vLyAgICAgZ2V0SG90ZWxMaXN0ID0oKT0+e1xyXG4vL1xyXG4vLyAgICAgICAgIGxldCBjYXRlZ29yeV9pZCA9IGlkO1xyXG4vLyAgICAgICAgIGxldCBwYXJhbXMgPSB7fVxyXG4vLyAgICAgICAgIGlmKGNhdGVnb3J5X2lkKSB7XHJcbi8vICAgICAgICAgICAgIHBhcmFtcyA9IHtjYXRlZ29yeSA6IGNhdGVnb3J5X2lkfTtcclxuLy9cclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgICAgdGhpcy5wcm9wcy5ob3RlbExpc3QocGFyYW1zKTtcclxuLy8gICAgIH1cclxuLy9cclxuLy8gICAgIGdldEZhY2lsaXRpZXMgPSgpPT57XHJcbi8vICAgICAgICAgdGhpcy5wcm9wcy5nZXRGYWNpbGl0aWVzKClcclxuLy8gICAgIH1cclxuLy9cclxuLy8gICAgIHNlYXJjaEhvdGVscyA9ICgpID0+IHtcclxuLy8gICAgICAgICB0aGlzLnByb3BzLnNlYXJjaEhvdGVscygpO1xyXG4vLyAgICAgfVxyXG4vL1xyXG4vLyAgICAgc2hvd0ZpbHRlcnMgPSAoKSA9PiB7XHJcbi8vICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbi8vICAgICAgICAgICAgIHNob3dGaWx0ZXJTdGF0dXMgOiB0cnVlXHJcbi8vICAgICAgICAgfSlcclxuLy8gICAgIH1cclxuLy9cclxuLy8gICAgIGhpZGVGaWx0ZXJzID0gKCkgPT4ge1xyXG4vLyAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4vLyAgICAgICAgICAgICBzaG93RmlsdGVyU3RhdHVzIDogZmFsc2VcclxuLy8gICAgICAgICB9KVxyXG4vLyAgICAgfVxyXG4vL1xyXG4vLyAgICAgcmVuZGVyKCkge1xyXG4vLyAgICAgICAgIGxldCBob3RlbExpc3QgPSB0aGlzLnByb3BzLmhvdGVsTGlzdCB8fCBbXTtcclxuLy8gICAgICAgICBsZXQgY2F0ZWdvcnlJbmZvID0gdGhpcy5zdGF0ZS5jYXRlZ29yeSB8fCB7fTtcclxuLy8gICAgICAgICBsZXQgZmFjaWxpdGllcyA9IHRoaXMuc3RhdGUuZmFjaWxpdGllcyB8fCBbXTtcclxuLy8gICAgICAgICBsZXQgdG90YWwgPSBob3RlbExpc3QubGVuZ3RoO1xyXG4vLyAgICAgICAgIC8vaG90ZWxMaXN0ID1ob3RlbHM7XHJcbi8vICAgICAgICAgY29uc29sZS5sb2coaG90ZWxMaXN0KVxyXG4vLyAgICAgICAgIGNvbnN0IHsgaWQgfSA9IHRoaXMucHJvcHMucm91dGVyLnF1ZXJ5O1xyXG4vLyAgICAgICAgIHJldHVybiAoXHJcbi8vICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxyXG4vLyAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lci1wYWdlIGxpc3RpbmdcIj5cclxuLy9cclxuLy8gICAgICAgICAgICAgICAgICAgICA8TmF2YmFyIC8+XHJcbi8vXHJcbi8vICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZGV0YWlscy1iYW5uZXItYmxvY2sgaW1hZ2Utc2hhZGVcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAge2NhdGVnb3J5SW5mbyAmJiBjYXRlZ29yeUluZm8udGh1bWIgJiYgY2F0ZWdvcnlJbmZvLnRodW1iICE9PSAnJyAmJlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YCR7SU1BR0VfUEFUSCArICdjYXRlZ29yeS8nICsgY2F0ZWdvcnlJbmZvLnRodW1ifWB9Lz5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB7KCFjYXRlZ29yeUluZm8gfHwgIWNhdGVnb3J5SW5mby50aHVtYiB8fCBjYXRlZ29yeUluZm8udGh1bWIgPT09ICcnKSAmJlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4uL2Fzc2V0cy9pbWFnZXMvYmFubmVyLmpwZ1wiLz5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4vL1xyXG4vL1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2Fyb3VzZWwtdGV4dC1ibG9ja1wiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT57Y2F0ZWdvcnlJbmZvLmNhdGVnb3J5fTwvaDE+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4vL1xyXG4vL1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdGluZy13cmFwcGVyXCI+XHJcbi8vXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIDxMZWZ0UGFuZWwgZmFjaWxpdGllcz17ZmFjaWxpdGllc30gc2VhcmNoSG90ZWxzPXt0aGlzLnNlYXJjaEhvdGVsc30gc2hvd0ZpbHRlclN0YXR1cyA9IHt0aGlzLnN0YXRlLnNob3dGaWx0ZXJTdGF0dXN9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZUZpbHRlcnM9e3RoaXMuaGlkZUZpbHRlcnN9Lz5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nLWNvbnRlbnRcIj5cclxuLy9cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdGluZy1jb250ZW50LWhlYWRlclwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5IT1RFTFMgJiBSRVNPUlRTPC9oNT5cclxuLy9cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmctY29udGVudC1oZWFkZXItcmlnaHRcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+e2hvdGVsTGlzdC5sZW5ndGh9IEhvdGVscyBmb3VuZDwvcD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJmaWx0ZXJcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnNob3dGaWx0ZXJzKCl9PjwvYnV0dG9uPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aG90ZWxMaXN0Lmxlbmd0aCA+IDAgJiZcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1saXN0ZXJcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aG90ZWxMaXN0Lm1hcCgoaG90ZWwsIGluZGV4KSA9PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SG90ZWxCbG9jayBkZXRhaWw9e2hvdGVsfS8+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aG90ZWxMaXN0Lmxlbmd0aCA8IHRvdGFsICYmXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkbW9yZS1ibG9ja1wiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtcIi9ob3RlbC1kZXRhaWxcIn0+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmF2PkxvYWQgbW9yZTwvbmF2PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4vL1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aG90ZWxMaXN0Lmxlbmd0aCA9PT0gMCAmJlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21pbmctc29vbi13cmFwcGVyXCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPkhvdGVscyB3aWxsIGJlIGFkZGVkIFNvb248L2gxPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4vL1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4vL1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIDxGb290ZXIgLz5cclxuLy9cclxuLy8gICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4vL1xyXG4vLyAgICAgICAgICAgICAgICAgPGEgaWQ9XCJiYWNrLXRvLXRvcFwiIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYmFjay10by10b3BcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0b3BcIj48L3NwYW4+XHJcbi8vICAgICAgICAgICAgICAgICA8L2E+XHJcbi8vXHJcbi8vICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICk7XHJcbi8vICAgICB9XHJcbi8vIH1cclxuLy9cclxuLy8gY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcclxuLy8gICAgIGhvdGVsRGF0YTpzdGF0ZS5Ib3RlbFJlZHVjZXIuaG90ZWxEYXRhLFxyXG4vLyAgICAgZmFjaWxpdHlEYXRhOnN0YXRlLkhvdGVsUmVkdWNlci5mYWNpbGl0eURhdGFcclxuLy8gfSk7XHJcbi8vXHJcbi8vIGV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoY29ubmVjdChcclxuLy8gICAgIG1hcFN0YXRlVG9Qcm9wcyxcclxuLy8gICAgIHtcclxuLy8gICAgICAgICBob3RlbExpc3QgOiBIb3RlbEFjdGlvbnMuZ2V0SG90ZWxMaXN0LFxyXG4vLyAgICAgICAgIGdldEZhY2lsaXRpZXMgOiBIb3RlbEFjdGlvbnMuZ2V0RmFjaWxpdGllcyxcclxuLy8gICAgICAgICBzZWFyY2hIb3RlbHMgOiBIb3RlbEFjdGlvbnMuc2VhcmNoSG90ZWxzXHJcbi8vICAgICB9XHJcbi8vICkoSG90ZWxMaXN0KSk7XHJcblxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9zaGFyZWQvbGliL2hlYWQnKVxuIiwidmFyIGFycmF5TGlrZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9hcnJheUxpa2VUb0FycmF5LmpzXCIpO1xuXG5mdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KGFycik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5V2l0aG91dEhvbGVzO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9kZWZpbmVQcm9wZXJ0eTtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgaXRlcltTeW1ib2wuaXRlcmF0b3JdICE9IG51bGwgfHwgaXRlcltcIkBAaXRlcmF0b3JcIl0gIT0gbnVsbCkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2l0ZXJhYmxlVG9BcnJheTtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9ub25JdGVyYWJsZVNwcmVhZDtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJ2YXIgYXJyYXlXaXRob3V0SG9sZXMgPSByZXF1aXJlKFwiLi9hcnJheVdpdGhvdXRIb2xlcy5qc1wiKTtcblxudmFyIGl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2l0ZXJhYmxlVG9BcnJheS5qc1wiKTtcblxudmFyIHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanNcIik7XG5cbnZhciBub25JdGVyYWJsZVNwcmVhZCA9IHJlcXVpcmUoXCIuL25vbkl0ZXJhYmxlU3ByZWFkLmpzXCIpO1xuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7XG4gIHJldHVybiBhcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFycikgfHwgbm9uSXRlcmFibGVTcHJlYWQoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdG9Db25zdW1hYmxlQXJyYXk7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7Il0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiQW1wU3RhdGVDb250ZXh0IiwiX3JlYWN0IiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJvYmoiLCJfX2VzTW9kdWxlIiwiY3JlYXRlQ29udGV4dCIsImRpc3BsYXlOYW1lIiwiaXNJbkFtcE1vZGUiLCJ1c2VBbXAiLCJfYW1wQ29udGV4dCIsImFtcEZpcnN0IiwiaHlicmlkIiwiaGFzUXVlcnkiLCJ1c2VDb250ZXh0IiwiSGVhZE1hbmFnZXJDb250ZXh0IiwiZGVmYXVsdEhlYWQiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsIl9zaWRlRWZmZWN0IiwiX2hlYWRNYW5hZ2VyQ29udGV4dCIsIl9hbXAiLCJuZXdPYmoiLCJrZXkiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJkZXNjIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiZ2V0Iiwic2V0IiwiaW5BbXBNb2RlIiwiaGVhZCIsImNyZWF0ZUVsZW1lbnQiLCJjaGFyU2V0IiwicHVzaCIsIm5hbWUiLCJjb250ZW50Iiwib25seVJlYWN0RWxlbWVudCIsImxpc3QiLCJjaGlsZCIsInR5cGUiLCJGcmFnbWVudCIsImNvbmNhdCIsIkNoaWxkcmVuIiwidG9BcnJheSIsInByb3BzIiwiY2hpbGRyZW4iLCJyZWR1Y2UiLCJmcmFnbWVudExpc3QiLCJmcmFnbWVudENoaWxkIiwiTUVUQVRZUEVTIiwidW5pcXVlIiwia2V5cyIsIlNldCIsInRhZ3MiLCJtZXRhVHlwZXMiLCJtZXRhQ2F0ZWdvcmllcyIsImgiLCJpc1VuaXF1ZSIsImhhc0tleSIsImluZGV4T2YiLCJzbGljZSIsImhhcyIsImFkZCIsImkiLCJsZW4iLCJsZW5ndGgiLCJtZXRhdHlwZSIsImNhdGVnb3J5IiwiY2F0ZWdvcmllcyIsInJlZHVjZUNvbXBvbmVudHMiLCJoZWFkRWxlbWVudHMiLCJoZWFkRWxlbWVudCIsImhlYWRFbGVtZW50Q2hpbGRyZW4iLCJyZXZlcnNlIiwiZmlsdGVyIiwibWFwIiwiYyIsInByb2Nlc3MiLCJlbnYiLCJfX05FWFRfT1BUSU1JWkVfRk9OVFMiLCJzb21lIiwidXJsIiwic3RhcnRzV2l0aCIsIm5ld1Byb3BzIiwidW5kZWZpbmVkIiwiY2xvbmVFbGVtZW50IiwiSGVhZCIsImFtcFN0YXRlIiwiaGVhZE1hbmFnZXIiLCJyZWR1Y2VDb21wb25lbnRzVG9TdGF0ZSIsIl9kZWZhdWx0IiwiaXNTZXJ2ZXIiLCJfY2xhc3MiLCJlbWl0Q2hhbmdlIiwiX2hhc0hlYWRNYW5hZ2VyIiwidXBkYXRlSGVhZCIsIm1vdW50ZWRJbnN0YW5jZXMiLCJDb21wb25lbnQiLCJSZWFjdCIsInVzZUVmZmVjdCIsImxhenkiLCJ1c2VTdGF0ZSIsImNvbm5lY3QiLCJOYXZiYXIiLCJGb290ZXIiLCJMZWZ0UGFuZWwiLCJMaW5rIiwiSG90ZWxCbG9jayIsIkhvdGVsQWN0aW9ucyIsImdldFVybFNlZ21lbnQiLCJJTUFHRV9QQVRIIiwiQVBJX1BBVEgiLCJ3aXRoUm91dGVyIiwiaG90ZWwiLCJnZXRGYWNpbGl0aWVzIiwiSG90ZWxMaXN0IiwiaG90ZWxMaXN0IiwiY2F0ZWdvcnlJbmZvIiwiZmFjaWxpdGllcyIsInNldGZhY2lsaXRpZXMiLCJzaG93RmlsdGVyU3RhdHVzIiwic2V0c2hvd0ZpbHRlclN0YXR1cyIsInRvdGFsIiwiZmV0Y2giLCJmcmVzcG9uc2UiLCJqc29uIiwiZnJlcyIsInJlc3VsdHMiLCJkYXRhIiwic2VhcmNoSG90ZWxzIiwic2hvd0ZpbHRlcnMiLCJoaWRlRmlsdGVycyIsImhvdGVsRGV0YWlsIiwiaG90ZWxfbmFtZSIsImFkZHJlc3MiLCJwaG9uZW5vIiwibW9iaWxlbm8iLCJob3RlbF9kZXNjIiwidGh1bWIiLCJpbmRleCJdLCJzb3VyY2VSb290IjoiIn0=