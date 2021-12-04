(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var _public_assets_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../public/assets/css/bootstrap.css */ "./public/assets/css/bootstrap.css");
/* harmony import */ var _public_assets_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_public_assets_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_assets_css_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/assets/css/style.css */ "./public/assets/css/style.css");
/* harmony import */ var _public_assets_css_style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_assets_css_style_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_assets_css_slider_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/assets/css/slider.css */ "./public/assets/css/slider.css");
/* harmony import */ var _public_assets_css_slider_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_assets_css_slider_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers_configureStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/configureStore */ "./reducers/configureStore.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "D:\\demo\\uth-next\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const store = (0,_reducers_configureStore__WEBPACK_IMPORTED_MODULE_3__.default)();
function App({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_4__.Provider, {
    store: store,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./reducers/HotelReducer.js":
/*!**********************************!*\
  !*** ./reducers/HotelReducer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HotelReducer": () => (/* binding */ HotelReducer),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const hotelData = (state = {
  hotelList: [],
  category: {},
  categoryList: [],
  search: false,
  bannerImages: [],
  highlights: [],
  policies: [],
  spRequests: []
}, action) => {
  switch (action.type) {
    case "HOTEL_LIST_SUCCESS":
      return _objectSpread(_objectSpread({}, state), {}, {
        hotelList: action.hotelList,
        category: action.category
      });
      break;

    case "HOTEL_CATEGORY_SUCCESS":
      return _objectSpread(_objectSpread({}, state), {}, {
        categoryList: action.categoryList
      });
      break;

    case "SEARCH_HOTEL_LIST_SUCCESS":
      return _objectSpread(_objectSpread({}, state), {}, {
        hotelList: action.hotelList,
        search: action.search,
        category: action.category
      });
      break;

    case "HOTEL_DETAIL_SUCCESS":
      return _objectSpread(_objectSpread({}, state), {}, {
        hotelDetail: action.hotelDetail
      });
      break;

    case "BANNER_SUCCESS":
      return _objectSpread(_objectSpread({}, state), {}, {
        bannerImages: action.bannerImages
      });
      break;

    case "HIGHLIGHT_SUCCESS":
      return _objectSpread(_objectSpread({}, state), {}, {
        highlights: action.highlights
      });
      break;

    case "POLICIES_SUCCESS":
      return _objectSpread(_objectSpread({}, state), {}, {
        policies: action.policies
      });
      break;

    case "SP_REQ_SUCCESS":
      return _objectSpread(_objectSpread({}, state), {}, {
        spRequests: action.spRequests
      });
      break;

    default:
      return state;
  }
};

const facilityData = (state = {
  facilities: [],
  roomTypes: []
}, action) => {
  switch (action.type) {
    case "FACILITY_LIST_SUCCESS":
      return _objectSpread(_objectSpread({}, state), {}, {
        facilities: action.facilities
      });
      break;

    case "ROOM_TYPE_SUCCESS":
      return _objectSpread(_objectSpread({}, state), {}, {
        roomTypes: action.roomTypes
      });
      break;

    default:
      return state;
  }
};

const saveContactData = (state = {
  saved: false
}, action) => {
  switch (action.type) {
    case "CONTACT_SAVED":
      return _objectSpread(_objectSpread({}, state), {}, {
        saved: action.saved
      });
      break;

    default:
      return state;
  }
};

const bookingData = (state = {
  bookingId: '',
  bookingResult: false
}, action) => {
  switch (action.type) {
    case "SAVED_BOOKING":
      return _objectSpread(_objectSpread({}, state), {}, {
        bookingId: action.bookingId
      });
      break;

    case "CONFIRMED_BOOKING":
      return _objectSpread(_objectSpread({}, state), {}, {
        bookingResult: action.bookingResult
      });
      break;

    default:
      return state;
  }
};

const HotelReducer = (0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({
  hotelData,
  facilityData,
  saveContactData,
  bookingData
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HotelReducer);

/***/ }),

/***/ "./reducers/configureStore.js":
/*!************************************!*\
  !*** ./reducers/configureStore.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ configureStore)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reducers_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducers/index */ "./reducers/index.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_2__);


 //import logger from 'redux-logger'

const middlewares = [];

if (true) {//   const { logger } = require(`redux-logger`);
  // middlewares.push(logger);
}

function configureStore() {
  return (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(_reducers_index__WEBPACK_IMPORTED_MODULE_1__.default, (0,redux__WEBPACK_IMPORTED_MODULE_0__.applyMiddleware)((redux_thunk__WEBPACK_IMPORTED_MODULE_2___default())));
}

/***/ }),

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _HotelReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HotelReducer */ "./reducers/HotelReducer.js");


const app = (0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({
  HotelReducer: _HotelReducer__WEBPACK_IMPORTED_MODULE_1__.default
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (app);

/***/ }),

/***/ "./public/assets/css/bootstrap.css":
/*!*****************************************!*\
  !*** ./public/assets/css/bootstrap.css ***!
  \*****************************************/
/***/ (() => {



/***/ }),

/***/ "./public/assets/css/slider.css":
/*!**************************************!*\
  !*** ./public/assets/css/slider.css ***!
  \**************************************/
/***/ (() => {



/***/ }),

/***/ "./public/assets/css/style.css":
/*!*************************************!*\
  !*** ./public/assets/css/style.css ***!
  \*************************************/
/***/ (() => {



/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-thunk");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YyxFQUVkRixzREFBZSxDQUFDRyxvREFBRCxDQUZELENBQWxCO0FBSUg7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCRDtBQUNBO0FBR0EsTUFBTUUsR0FBRyxHQUFHNUIsc0RBQWUsQ0FBQztBQUN4QnNCLEVBQUFBLFlBQVlBLG9EQUFBQTtBQURZLENBQUQsQ0FBM0I7QUFJQSxpRUFBZU0sR0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUlSQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL1VUSC8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vVVRILy4vcmVkdWNlcnMvSG90ZWxSZWR1Y2VyLmpzIiwid2VicGFjazovL1VUSC8uL3JlZHVjZXJzL2NvbmZpZ3VyZVN0b3JlLmpzIiwid2VicGFjazovL1VUSC8uL3JlZHVjZXJzL2luZGV4LmpzIiwid2VicGFjazovL1VUSC8uL3B1YmxpYy9hc3NldHMvY3NzL2Jvb3RzdHJhcC5jc3MiLCJ3ZWJwYWNrOi8vVVRILy4vcHVibGljL2Fzc2V0cy9jc3Mvc2xpZGVyLmNzcyIsIndlYnBhY2s6Ly9VVEgvLi9wdWJsaWMvYXNzZXRzL2Nzcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vVVRIL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly9VVEgvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9VVEgvZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovL1VUSC9leHRlcm5hbCBcInJlZHV4LXRodW5rXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9wdWJsaWMvYXNzZXRzL2Nzcy9ib290c3RyYXAuY3NzJztcclxuaW1wb3J0ICcuLi9wdWJsaWMvYXNzZXRzL2Nzcy9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgJy4uL3B1YmxpYy9hc3NldHMvY3NzL3NsaWRlci5jc3MnO1xyXG5pbXBvcnQgY29uZmlndXJlU3RvcmUgZnJvbSAnLi4vcmVkdWNlcnMvY29uZmlndXJlU3RvcmUnO1xyXG5pbXBvcnQge1Byb3ZpZGVyfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmNvbnN0IHN0b3JlID0gY29uZmlndXJlU3RvcmUoKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxyXG4gICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgICAgPC9Qcm92aWRlcj5cclxuICAgIClcclxufSIsImltcG9ydCB7Y29tYmluZVJlZHVjZXJzfSBmcm9tICdyZWR1eCc7XHJcbmNvbnN0IGhvdGVsRGF0YSA9IChzdGF0ZSA9IHtob3RlbExpc3Q6IFtdLCBjYXRlZ29yeSA6IHt9LCBjYXRlZ29yeUxpc3QgOltdLCBzZWFyY2ggOiBmYWxzZSwgYmFubmVySW1hZ2VzIDogW10sIGhpZ2hsaWdodHMgOiBbXSwgcG9saWNpZXMgOiBbXSwgc3BSZXF1ZXN0cyA6IFtdfSwgYWN0aW9uKSA9PiB7XHJcblxyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cclxuICAgICAgICBjYXNlIFwiSE9URUxfTElTVF9TVUNDRVNTXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGhvdGVsTGlzdDogYWN0aW9uLmhvdGVsTGlzdCxcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBhY3Rpb24uY2F0ZWdvcnlcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcIkhPVEVMX0NBVEVHT1JZX1NVQ0NFU1NcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnlMaXN0OiBhY3Rpb24uY2F0ZWdvcnlMaXN0XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgY2FzZSBcIlNFQVJDSF9IT1RFTF9MSVNUX1NVQ0NFU1NcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgaG90ZWxMaXN0OiBhY3Rpb24uaG90ZWxMaXN0LFxyXG4gICAgICAgICAgICAgICAgc2VhcmNoIDphY3Rpb24uc2VhcmNoLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IGFjdGlvbi5jYXRlZ29yeVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiSE9URUxfREVUQUlMX1NVQ0NFU1NcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgaG90ZWxEZXRhaWw6IGFjdGlvbi5ob3RlbERldGFpbFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiQkFOTkVSX1NVQ0NFU1NcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgYmFubmVySW1hZ2VzOiBhY3Rpb24uYmFubmVySW1hZ2VzXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJISUdITElHSFRfU1VDQ0VTU1wiOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBoaWdobGlnaHRzOiBhY3Rpb24uaGlnaGxpZ2h0c1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiUE9MSUNJRVNfU1VDQ0VTU1wiOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBwb2xpY2llczogYWN0aW9uLnBvbGljaWVzXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJTUF9SRVFfU1VDQ0VTU1wiOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBzcFJlcXVlc3RzOiBhY3Rpb24uc3BSZXF1ZXN0c1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn07XHJcblxyXG5jb25zdCBmYWNpbGl0eURhdGEgPSAoc3RhdGUgPSB7ZmFjaWxpdGllczogW10sIHJvb21UeXBlcyA6IFtdfSwgYWN0aW9uKSA9PiB7XHJcblxyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cclxuICAgICAgICBjYXNlIFwiRkFDSUxJVFlfTElTVF9TVUNDRVNTXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGZhY2lsaXRpZXM6IGFjdGlvbi5mYWNpbGl0aWVzXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJST09NX1RZUEVfU1VDQ0VTU1wiOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICByb29tVHlwZXM6IGFjdGlvbi5yb29tVHlwZXNcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59O1xyXG5jb25zdCBzYXZlQ29udGFjdERhdGEgPSAoc3RhdGUgPSB7c2F2ZWQ6IGZhbHNlfSwgYWN0aW9uKSA9PiB7XHJcblxyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cclxuICAgICAgICBjYXNlIFwiQ09OVEFDVF9TQVZFRFwiOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBzYXZlZDogYWN0aW9uLnNhdmVkXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufTtcclxuXHJcbmNvbnN0IGJvb2tpbmdEYXRhID0gKHN0YXRlID0ge2Jvb2tpbmdJZDogJycsIGJvb2tpbmdSZXN1bHQgOiBmYWxzZX0sIGFjdGlvbikgPT4ge1xyXG5cclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHJcbiAgICAgICAgY2FzZSBcIlNBVkVEX0JPT0tJTkdcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgYm9va2luZ0lkOiBhY3Rpb24uYm9va2luZ0lkXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJDT05GSVJNRURfQk9PS0lOR1wiOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBib29raW5nUmVzdWx0OiBhY3Rpb24uYm9va2luZ1Jlc3VsdFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn07XHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgSG90ZWxSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuICAgIGhvdGVsRGF0YSxcclxuICAgIGZhY2lsaXR5RGF0YSxcclxuICAgIHNhdmVDb250YWN0RGF0YSxcclxuICAgIGJvb2tpbmdEYXRhXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG90ZWxSZWR1Y2VyO1xyXG5cclxuXHJcbiIsImltcG9ydCB7YXBwbHlNaWRkbGV3YXJlLCBjcmVhdGVTdG9yZX0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgcm9vdFJlZHVjZXIgZnJvbSAnLi4vcmVkdWNlcnMvaW5kZXgnO1xyXG5pbXBvcnQgdGh1bmsgZnJvbSAncmVkdXgtdGh1bmsnO1xyXG4vL2ltcG9ydCBsb2dnZXIgZnJvbSAncmVkdXgtbG9nZ2VyJ1xyXG5jb25zdCBtaWRkbGV3YXJlcyA9IFtdO1xyXG5cclxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBgZGV2ZWxvcG1lbnRgKSB7XHJcbiAvLyAgIGNvbnN0IHsgbG9nZ2VyIH0gPSByZXF1aXJlKGByZWR1eC1sb2dnZXJgKTtcclxuXHJcbiAgIC8vIG1pZGRsZXdhcmVzLnB1c2gobG9nZ2VyKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29uZmlndXJlU3RvcmUoKSB7XHJcbiAgICByZXR1cm4gY3JlYXRlU3RvcmUoXHJcbiAgICAgICAgcm9vdFJlZHVjZXIsXHJcbiAgICAgICAgYXBwbHlNaWRkbGV3YXJlKHRodW5rKVxyXG4gICAgKTtcclxufVxyXG4iLCJpbXBvcnQge2NvbWJpbmVSZWR1Y2Vyc30gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgSG90ZWxSZWR1Y2VyIGZyb20gJy4vSG90ZWxSZWR1Y2VyJztcclxuXHJcblxyXG5jb25zdCBhcHAgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gICAgSG90ZWxSZWR1Y2VyXHJcblxyXG59KTtcclxuZXhwb3J0IGRlZmF1bHQgYXBwO1xyXG4iLCIiLCIiLCIiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtdGh1bmtcIik7Il0sIm5hbWVzIjpbImNvbmZpZ3VyZVN0b3JlIiwiUHJvdmlkZXIiLCJzdG9yZSIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImNvbWJpbmVSZWR1Y2VycyIsImhvdGVsRGF0YSIsInN0YXRlIiwiaG90ZWxMaXN0IiwiY2F0ZWdvcnkiLCJjYXRlZ29yeUxpc3QiLCJzZWFyY2giLCJiYW5uZXJJbWFnZXMiLCJoaWdobGlnaHRzIiwicG9saWNpZXMiLCJzcFJlcXVlc3RzIiwiYWN0aW9uIiwidHlwZSIsImhvdGVsRGV0YWlsIiwiZmFjaWxpdHlEYXRhIiwiZmFjaWxpdGllcyIsInJvb21UeXBlcyIsInNhdmVDb250YWN0RGF0YSIsInNhdmVkIiwiYm9va2luZ0RhdGEiLCJib29raW5nSWQiLCJib29raW5nUmVzdWx0IiwiSG90ZWxSZWR1Y2VyIiwiYXBwbHlNaWRkbGV3YXJlIiwiY3JlYXRlU3RvcmUiLCJyb290UmVkdWNlciIsInRodW5rIiwibWlkZGxld2FyZXMiLCJhcHAiXSwic291cmNlUm9vdCI6IiJ9