(() => {
var exports = {};
exports.id = "pages/mice";
exports.ids = ["pages/mice"];
exports.modules = {

/***/ "./actions/hotel.js":
/*!**************************!*\
  !*** ./actions/hotel.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getHotelList": () => (/* binding */ getHotelList),
/* harmony export */   "getHotelCategoryList": () => (/* binding */ getHotelCategoryList),
/* harmony export */   "getHotelDetail": () => (/* binding */ getHotelDetail),
/* harmony export */   "getHotelDetailV2": () => (/* binding */ getHotelDetailV2),
/* harmony export */   "searchHotels": () => (/* binding */ searchHotels),
/* harmony export */   "getFacilities": () => (/* binding */ getFacilities),
/* harmony export */   "getRoomTypes": () => (/* binding */ getRoomTypes),
/* harmony export */   "saveContact": () => (/* binding */ saveContact),
/* harmony export */   "searchRooms": () => (/* binding */ searchRooms),
/* harmony export */   "saveBooking": () => (/* binding */ saveBooking),
/* harmony export */   "confirmBooking": () => (/* binding */ confirmBooking),
/* harmony export */   "getBannerImages": () => (/* binding */ getBannerImages),
/* harmony export */   "getHotelHighlights": () => (/* binding */ getHotelHighlights),
/* harmony export */   "getHotelPolicies": () => (/* binding */ getHotelPolicies),
/* harmony export */   "getSpRequests": () => (/* binding */ getSpRequests)
/* harmony export */ });
/* harmony import */ var _services_hotel_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/hotel.services */ "./services/hotel.services.js");

const getHotelList = params => dispatch => {
  dispatch({
    type: 'LOADER_STATUS',
    status: true
  });
  let hotelData = _services_hotel_services__WEBPACK_IMPORTED_MODULE_0__.hotel.getHotelList(params);
  hotelData.then(hotelData => {
    console.log(hotelData);
    dispatch({
      type: 'HOTEL_LIST_SUCCESS',
      hotelList: hotelData.results.data,
      category: hotelData.results.category
    });
    dispatch({
      type: 'LOADER_STATUS',
      status: false
    });
  }).catch(error => {
    dispatch({
      type: 'HOTEL_LIST_SUCCESS',
      hotelList: [],
      category: {}
    });
    dispatch({
      type: 'LOADER_STATUS',
      status: false
    });
  });
};
const getHotelCategoryList = () => dispatch => {
  let params = {};
  dispatch({
    type: 'LOADER_STATUS',
    status: true
  });
  let categoryData = _services_hotel_services__WEBPACK_IMPORTED_MODULE_0__.hotel.getHotelCategoryList(params);
  categoryData.then(categoryData => {
    console.log(categoryData);
    dispatch({
      type: 'HOTEL_CATEGORY_SUCCESS',
      categoryList: categoryData.results.data
    });
    dispatch({
      type: 'LOADER_STATUS',
      status: false
    });
  }).catch(error => {
    dispatch({
      type: 'HOTEL_CATEGORY_SUCCESS',
      categoryList: []
    });
    dispatch({
      type: 'LOADER_STATUS',
      status: false
    });
  });
};
const getHotelDetail = params => dispatch => {
  dispatch({
    type: 'LOADER_STATUS',
    status: true
  });
  let hotelData = _services_hotel_services__WEBPACK_IMPORTED_MODULE_0__.hotel.getHotelDetail(params);
  hotelData.then(hotelData => {
    console.log(hotelData);
    dispatch({
      type: 'HOTEL_DETAIL_SUCCESS',
      hotelDetail: hotelData.results.data
    });
    dispatch({
      type: 'LOADER_STATUS',
      status: false
    });
  }).catch(error => {
    dispatch({
      type: 'HOTEL_DETAIL_SUCCESS',
      hotelDetail: []
    });
    dispatch({
      type: 'LOADER_STATUS',
      status: false
    });
  });
};
const getHotelDetailV2 = params => dispatch => {
  dispatch({
    type: 'LOADER_STATUS',
    status: true
  });
  let hotelData = _services_hotel_services__WEBPACK_IMPORTED_MODULE_0__.hotel.getHotelDetailV2(params);
  hotelData.then(hotelData => {
    console.log(hotelData);
    dispatch({
      type: 'HOTEL_DETAIL_SUCCESS',
      hotelDetail: hotelData.results.data
    });
    dispatch({
      type: 'LOADER_STATUS',
      status: false
    });
  }).catch(error => {
    dispatch({
      type: 'HOTEL_DETAIL_SUCCESS',
      hotelDetail: []
    });
    dispatch({
      type: 'LOADER_STATUS',
      status: false
    });
  });
};
const searchHotels = params => dispatch => {
  // let params = {}
  dispatch({
    type: 'LOADER_STATUS',
    status: true
  });
  let hotelData = _services_hotel_services__WEBPACK_IMPORTED_MODULE_0__.hotel.getHotelList(params);
  hotelData.then(hotelData => {
    console.log(hotelData);
    dispatch({
      type: 'SEARCH_HOTEL_LIST_SUCCESS',
      hotelList: hotelData.results.data,
      search: true,
      category: hotelData.results.category
    });
    dispatch({
      type: 'LOADER_STATUS',
      status: false
    });
  }).catch(error => {
    dispatch({
      type: 'HOTEL_LIST_SUCCESS',
      hotelList: [],
      category: {}
    });
    dispatch({
      type: 'LOADER_STATUS',
      status: false
    });
  });
};
const getFacilities = () => dispatch => {
  let params = {};
  dispatch({
    type: 'LOADER_STATUS',
    status: true
  });
  let facilityData = _services_hotel_services__WEBPACK_IMPORTED_MODULE_0__.hotel.getFacilities(params);
  facilityData.then(facilityData => {
    dispatch({
      type: 'FACILITY_LIST_SUCCESS',
      facilities: facilityData.results.data
    });
    dispatch({
      type: 'LOADER_STATUS',
      status: false
    });
  }).catch(error => {
    dispatch({
      type: 'FACILITY_LIST_SUCCESS',
      facilities: []
    });
    dispatch({
      type: 'LOADER_STATUS',
      status: false
    });
  });
};
const getRoomTypes = () => dispatch => {
  let params = {};
  dispatch({
    type: 'LOADER_STATUS',
    status: true
  });
  let roomTypeData = _services_hotel_services__WEBPACK_IMPORTED_MODULE_0__.hotel.getRoomTypes(params);
  roomTypeData.then(roomTypeData => {
    dispatch({
      type: 'ROOM_TYPE_SUCCESS',
      roomTypes: roomTypeData.results.data
    });
    dispatch({
      type: 'LOADER_STATUS',
      status: false
    });
  }).catch(error => {
    dispatch({
      type: 'ROOM_TYPE_SUCCESS',
      roomTypes: []
    });
    dispatch({
      type: 'LOADER_STATUS',
      status: false
    });
  });
};
const saveContact = params => dispatch => {
  dispatch({
    type: 'LOADER_STATUS',
    status: true
  });
  let contactSaved = _services_hotel_services__WEBPACK_IMPORTED_MODULE_0__.hotel.saveContact(params);
  contactSaved.then(contactSaved => {
    dispatch({
      type: 'CONTACT_SAVED',
      saved: true
    });
    dispatch({
      type: 'LOADER_STATUS',
      status: false
    });
  }).catch(error => {
    dispatch({
      type: 'CONTACT_SAVED',
      saved: false
    });
    dispatch({
      type: 'LOADER_STATUS',
      status: false
    });
  });
};
const searchRooms = () => dispatch => {
  let params = {};
  dispatch({
    type: 'LOADER_STATUS',
    status: true
  });
  let roomData = _services_hotel_services__WEBPACK_IMPORTED_MODULE_0__.hotel.searchRooms(params);
  roomData.then(roomData => {
    dispatch({
      type: 'ROOM_TYPE_SUCCESS',
      roomList: roomData.results.data
    });
    dispatch({
      type: 'LOADER_STATUS',
      status: false
    });
  }).catch(error => {
    dispatch({
      type: 'ROOM_TYPE_SUCCESS',
      roomList: []
    });
    dispatch({
      type: 'LOADER_STATUS',
      status: false
    });
  });
};
const saveBooking = params => dispatch => {
  dispatch({
    type: 'LOADER_STATUS',
    status: true
  });
  let bookingData = _services_hotel_services__WEBPACK_IMPORTED_MODULE_0__.hotel.saveBooking(params);
  bookingData.then(bookingData => {
    dispatch({
      type: 'SAVED_BOOKING',
      bookingId: bookingData.results.data
    });
    dispatch({
      type: 'LOADER_STATUS',
      status: false
    });
  }).catch(error => {
    dispatch({
      type: 'SAVED_BOOKING',
      bookingId: ''
    });
    dispatch({
      type: 'LOADER_STATUS',
      status: false
    });
  });
};
const confirmBooking = params => dispatch => {
  dispatch({
    type: 'LOADER_STATUS',
    status: true
  });
  let bookingData = _services_hotel_services__WEBPACK_IMPORTED_MODULE_0__.hotel.confirmBooking(params);
  bookingData.then(bookingData => {
    dispatch({
      type: 'CONFIRMED_BOOKING',
      bookingResult: bookingData.results.success
    });
    dispatch({
      type: 'LOADER_STATUS',
      status: false
    });
  }).catch(error => {
    dispatch({
      type: 'CONFIRMED_BOOKING',
      bookingResult: {}
    });
    dispatch({
      type: 'LOADER_STATUS',
      status: false
    });
  });
};
const getBannerImages = params => dispatch => {
  dispatch({
    type: 'LOADER_STATUS',
    status: true
  });
  let bannerData = _services_hotel_services__WEBPACK_IMPORTED_MODULE_0__.hotel.getBannerImages(params);
  bannerData.then(bannerData => {
    dispatch({
      type: 'BANNER_SUCCESS',
      bannerImages: bannerData.results.data
    });
    dispatch({
      type: 'LOADER_STATUS',
      status: false
    });
  }).catch(error => {
    dispatch({
      type: 'BANNER_SUCCESS',
      bannerImages: []
    });
    dispatch({
      type: 'LOADER_STATUS',
      status: false
    });
  });
};
const getHotelHighlights = params => dispatch => {
  dispatch({
    type: 'LOADER_STATUS',
    status: true
  });
  let highlightData = _services_hotel_services__WEBPACK_IMPORTED_MODULE_0__.hotel.getHotelHighlights(params);
  highlightData.then(highlightData => {
    dispatch({
      type: 'HIGHLIGHT_SUCCESS',
      hightlights: highlightData.results.data
    });
    dispatch({
      type: 'LOADER_STATUS',
      status: false
    });
  }).catch(error => {
    dispatch({
      type: 'HIGHLIGHT_SUCCESS',
      hightlights: []
    });
    dispatch({
      type: 'LOADER_STATUS',
      status: false
    });
  });
};
const getHotelPolicies = params => dispatch => {
  dispatch({
    type: 'LOADER_STATUS',
    status: true
  });
  let policyData = _services_hotel_services__WEBPACK_IMPORTED_MODULE_0__.hotel.getHotelPolicies(params);
  policyData.then(policyData => {
    dispatch({
      type: 'POLICIES_SUCCESS',
      policies: policyData.results.data
    });
    dispatch({
      type: 'LOADER_STATUS',
      status: false
    });
  }).catch(error => {
    dispatch({
      type: 'POLICIES_SUCCESS',
      policies: []
    });
    dispatch({
      type: 'LOADER_STATUS',
      status: false
    });
  });
};
const getSpRequests = params => dispatch => {
  dispatch({
    type: 'LOADER_STATUS',
    status: true
  });
  let spReqData = _services_hotel_services__WEBPACK_IMPORTED_MODULE_0__.hotel.getSpRequests(params);
  spReqData.then(spReqData => {
    dispatch({
      type: 'SP_REQ_SUCCESS',
      spRequests: spReqData.results.data
    });
    dispatch({
      type: 'LOADER_STATUS',
      status: false
    });
  }).catch(error => {
    dispatch({
      type: 'SP_REQ_SUCCESS',
      spRequests: []
    });
    dispatch({
      type: 'LOADER_STATUS',
      status: false
    });
  });
};

/***/ }),

/***/ "./constants/index.js":
/*!****************************!*\
  !*** ./constants/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ENVIRONMENT": () => (/* binding */ ENVIRONMENT),
/* harmony export */   "HASH_ENABLED": () => (/* binding */ HASH_ENABLED),
/* harmony export */   "API_PATH": () => (/* binding */ API_PATH),
/* harmony export */   "IMAGE_PATH": () => (/* binding */ IMAGE_PATH),
/* harmony export */   "BASE_PATH": () => (/* binding */ BASE_PATH)
/* harmony export */ });
let WEB_ENVIRONMENT = 'LOCAL';
let WEB_HASH_ENABLED = false;
let WEB_API_PATH = "https://uthdevapi.neverbeforeholidays.com/";
let WEB_IMAGE_PATH = "https://uthdev.neverbeforeholidays.com/admin/assets/uploads/";
let WEB_BASE_PATH = "https://uthdev.neverbeforeholidays.com/";

if (false) {}

WEB_API_PATH = "https://api.uthhotels.com/";
WEB_IMAGE_PATH = "https://uthhotels.com/admin/assets/uploads/";
WEB_BASE_PATH = "https://uthhotels.com/";
const ENVIRONMENT = WEB_ENVIRONMENT;
const HASH_ENABLED = WEB_HASH_ENABLED;
const API_PATH = WEB_API_PATH;
const IMAGE_PATH = WEB_IMAGE_PATH;
const BASE_PATH = WEB_BASE_PATH;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../shared/lib/router/router */ "./node_modules/next/dist/shared/lib/router/router.js");

var _router1 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router).isLocalURL(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router).isLocalURL(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null && as.indexOf('#') >= 0) {
    scroll = false;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + ( false ? 0 : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://nextjs.org/docs/messages/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;
  const router = (0, _router1).useRouter();

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router).resolveHref(router, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router).resolveHref(router, props.as) : resolvedAs || resolvedHref
    };
  }, [router, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  let child;

  if (true) {
    try {
      child = _react.default.Children.only(children);
    } catch (err) {
      throw new Error(`Multiple children were passed to <Link> with \`href\` of \`${props.href}\` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children` + ( false ? 0 : ''));
    }
  } else {}

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection).useIntersection({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  _react.default.useEffect(() => {
    const shouldPrefetch = isVisible && p && (0, _router).isLocalURL(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);

  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router).isLocalURL(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router).getDomainLocale(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router).addBasePath((0, _router).addLocale(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}

const normalizePathTrailingSlash =  false ? 0 : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.requestIdleCallback = exports.cancelIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.createRouteLoader = createRouteLoader;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../shared/lib/router/utils/get-asset-path-from-route */ "../shared/lib/router/utils/get-asset-path-from-route"));

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (e) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR');

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // We wait for pages to be built in dev before we start the route transition
// timeout to prevent an un-necessary hard navigation in development.


let devBuildPromise; // Resolve a promise that times out after given amount of milliseconds.

function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then(r => {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject); // We wrap these checks separately for better dead-code elimination in
    // production bundles.

    if (true) {
      (devBuildPromise || Promise.resolve()).then(() => {
        (0, _requestIdleCallback).requestIdleCallback(() => setTimeout(() => {
          if (!cancelled) {
            reject(err);
          }
        }, ms));
      });
    }

    if (false) {}
  });
}

function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute).default(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route, prefetch) {
      return withFuture(route, routes, () => {
        const routeFilesPromise = getFilesForRoute(assetPrefix, route).then(({
          scripts,
          css
        }) => {
          return Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
        }).then(res => {
          return this.whenEntrypoint(route).then(entrypoint => ({
            entrypoint,
            styles: res[1]
          }));
        });

        if (true) {
          devBuildPromise = new Promise(resolve => {
            if (routeFilesPromise) {
              return routeFilesPromise.finally(() => {
                resolve();
              });
            }
          });
        }

        return resolvePromiseWithTimeout(routeFilesPromise, MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`))).then(({
          entrypoint,
          styles
        }) => {
          const res = Object.assign({
            styles: styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        }).catch(err => {
          if (prefetch) {
            // we don't want to cache errors during prefetch
            throw err;
          }

          return {
            error: err
          };
        });
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback).requestIdleCallback(() => this.loadRoute(route, true).catch(() => {}));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "Router", ({
  enumerable: true,
  get: function () {
    return _router.default;
  }
}));
Object.defineProperty(exports, "withRouter", ({
  enumerable: true,
  get: function () {
    return _withRouter.default;
  }
}));
exports.useRouter = useRouter;
exports.createRouter = createRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = _interopRequireDefault(__webpack_require__(/*! ../shared/lib/router/router */ "./node_modules/next/dist/shared/lib/router/router.js"));

var _routerContext = __webpack_require__(/*! ../shared/lib/router-context */ "../shared/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const singletonRouter = {
  router: null,
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain', 'domainLocales'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" on the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
}

var _default = singletonRouter;
exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
}

function createRouter(...args) {
  singletonRouter.router = new _router.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}

function makePublicRouterInstance(router) {
  const _router1 = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router1[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router1[property]) ? [] : {}, _router1[property]) // makes sure query is not stateful
      ;
      continue;
    }

    instance[property] = _router1[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router1[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react).useRef();
  const [visible, setVisible] = (0, _react).useState(false);
  const setRef = (0, _react).useCallback(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react).useEffect(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback).requestIdleCallback(() => setVisible(true));
        return () => (0, _requestIdleCallback).cancelIdleCallback(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router).useRouter()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/shared/lib/router/router.js":
/*!************************************************************!*\
  !*** ./node_modules/next/dist/shared/lib/router/router.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "./node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../../server/denormalize-page-path */ "../../../server/denormalize-page-path");

var _normalizeLocalePath = __webpack_require__(/*! ../i18n/normalize-locale-path */ "../i18n/normalize-locale-path");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "../mitt"));

var _utils = __webpack_require__(/*! ../utils */ "../shared/lib/utils");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./utils/is-dynamic");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./utils/parse-relative-url");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./utils/querystring");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "?5c99"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./utils/route-matcher");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./utils/route-regex");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash).normalizePathTrailingSlash(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {} else {
    return false;
  }
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}

function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#') || url.startsWith('?')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils).getLocationOrigin();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex).getRouteRegex(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher).getRouteMatcher(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && (interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = '' // did not satisfy all requirements
    ; // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}

function resolveHref(router, href, resolveAs) {
  // we use a dummy base url for relative urls
  let base;
  let urlAsString = typeof href === 'string' ? href : (0, _utils).formatWithValidation(href); // repeated slashes and backslashes in the URL are considered
  // invalid and will never match a Next.js page/file

  const urlProtoMatch = urlAsString.match(/^[a-zA-Z]{1,}:\/\//);
  const urlAsStringNoProto = urlProtoMatch ? urlAsString.substr(urlProtoMatch[0].length) : urlAsString;
  const urlParts = urlAsStringNoProto.split('?');

  if ((urlParts[0] || '').match(/(\/\/|\\)/)) {
    console.error(`Invalid href passed to next/router: ${urlAsString}, repeated forward-slashes (//) or backslashes \\ are not valid in the href`);
    const normalizedUrl = (0, _utils).normalizeRepeatedSlashes(urlAsStringNoProto);
    urlAsString = (urlProtoMatch ? urlProtoMatch[0] : '') + normalizedUrl;
  } // Return because it cannot be routed by the Next.js router


  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    base = new URL(urlAsString.startsWith('#') ? router.asPath : router.pathname, 'http://n');
  } catch (_) {
    // fallback to / for invalid asPath values e.g. //
    base = new URL('/', 'http://n');
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash).normalizePathTrailingSlash(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic).isDynamicRoute(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring).searchParamsToUrlQuery(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils).formatWithValidation({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils).getLocationOrigin();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router, url, true);
  const origin = (0, _utils).getLocationOrigin();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  const cleanPathname = (0, _normalizeTrailingSlash).removePathTrailingSlash((0, _denormalizePagePath).denormalizePagePath(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic).isDynamicRoute(page) && (0, _routeRegex).getRouteRegex(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname);
}

const manualScrollRestoration =  false && 0;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader).markAssetError(err);
    }

    throw err;
  });
}

class Router {
  constructor(pathname1, query1, as1, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component: Component1,
    err: err1,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    // Static Data Cache
    this.sdc = {}; // In-flight Server Data Requests, for deduping

    this.sdr = {};
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname: pathname1,
          query: query1
        } = this;
        this.changeState('replaceState', (0, _utils).formatWithValidation({
          pathname: addBasePath(pathname1),
          query: query1
        }), (0, _utils).getURL());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as: as1,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname: pathname1
      } = (0, _parseRelativeUrl).parseRelativeUrl(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as1 === this.asPath && pathname1 === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as1, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname1); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname1 !== '/_error') {
      this.components[this.route] = {
        Component: Component1,
        initial: true,
        props: initialProps,
        err: err1,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: []
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname1;
    this.query = query1; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic).isDynamicRoute(pathname1) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? pathname1 : as1;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || self.__NEXT_DATA__.appGip && !self.__NEXT_DATA__.gsp || !autoExportDynamic && !self.location.search && !false);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    const shouldResolveHref = url === as || options._h || options._shouldResolveHref; // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated

    if (options._h) {
      this.isReady = true;
    }

    const prevLocale = this.locale;

    if (false) { var ref; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as;
    let localeChange = prevLocale !== this.locale; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs) && !localeChange) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl).parseRelativeUrl(url);
    let {
      pathname: pathname1,
      query: query1
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader).getClientBuildManifest());
    } catch (err1) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    } // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url


    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    } // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly


    let resolvedAs = as; // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname1 = pathname1 ? (0, _normalizeTrailingSlash).removePathTrailingSlash(delBasePath(pathname1)) : pathname1;

    if (shouldResolveHref && pathname1 !== '/_error') {
      options._shouldResolveHref = true;

      if (false) {} else {
        parsed.pathname = resolveDynamicRoute(pathname1, pages);

        if (parsed.pathname !== pathname1) {
          pathname1 = parsed.pathname;
          parsed.pathname = addBasePath(pathname1);
          url = (0, _utils).formatWithValidation(parsed);
        }
      }
    }

    const route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname1);

    if (!isLocalURL(as)) {
      if (true) {
        throw new Error(`Invalid href: "${url}" and as: "${as}", received relative href and external as` + `\nSee more info: https://nextjs.org/docs/messages/invalid-relative-url-external-as`);
      }

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic).isDynamicRoute(route)) {
      const parsedAs = (0, _parseRelativeUrl).parseRelativeUrl(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex).getRouteRegex(route);
      const routeMatch = (0, _routeMatcher).getRouteMatcher(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query1) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query1[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils).formatWithValidation(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query1, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query1, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var ref, ref1;
      let routeInfo = await this.getRouteInfo(route, pathname1, query1, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl).parseRelativeUrl(destination);
            parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);
            const {
              url: newUrl,
              as: newAs
            } = prepareUrlAs(this, destination, destination);
            return this.change(method, newUrl, newAs, options);
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query1, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      if (options._h && pathname1 === '/_error' && ((ref = self.__NEXT_DATA__.props) === null || ref === void 0 ? void 0 : (ref1 = ref.pageProps) === null || ref1 === void 0 ? void 0 : ref1.statusCode) === 500 && (props === null || props === void 0 ? void 0 : props.pageProps)) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      } // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;

      var _scroll;

      const shouldScroll = (_scroll = options.scroll) !== null && _scroll !== void 0 ? _scroll : !isValidShallowRoute;
      const resetScroll = shouldScroll ? {
        x: 0,
        y: 0
      } : null;
      await this.set(route, pathname1, query1, cleanedAs, routeInfo, forcedScroll !== null && forcedScroll !== void 0 ? forcedScroll : resetScroll).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err1) {
      if (err1.cancelled) {
        return false;
      }

      throw err1;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils).getURL() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader).isAssetError(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component1;
      let styleSheets;
      let props;

      if (typeof Component1 === 'undefined' || typeof styleSheets === 'undefined') {
        ({
          page: Component1,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component: Component1,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component1, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component: Component1,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component1)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils).formatWithValidation({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component1, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as,
        locale: this.locale,
        locales: this.locales,
        defaultLocale: this.defaultLocale
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err2) {
      return this.handleRouteInfoError(err2, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl).parseRelativeUrl(url);
    let {
      pathname: pathname2
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    let resolvedAs = asPath;

    if (false) {} else {
      parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

      if (parsed.pathname !== pathname2) {
        pathname2 = parsed.pathname;
        parsed.pathname = pathname2;
        url = (0, _utils).formatWithValidation(parsed);
      }
    }

    const route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname2); // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (true) {
      return;
    }

    await Promise.all([this.pageLoader._isSsg(route).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err2 = new Error('Loading initial props cancelled');
        err2.cancelled = true;
        throw err2;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    const {
      href: resourceKey
    } = new URL(dataHref, window.location.href);

    if (this.sdr[resourceKey]) {
      return this.sdr[resourceKey];
    }

    return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(data => {
      delete this.sdr[resourceKey];
      return data;
    }).catch(err2 => {
      delete this.sdr[resourceKey];
      throw err2;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App1
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App1);

    ctx.AppTree = AppTree;
    return (0, _utils).loadGetInitialProps(App1, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

Router.events = (0, _mitt).default();
exports.default = Router;

/***/ }),

/***/ "./pages/mice.js":
/*!***********************!*\
  !*** ./pages/mice.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _views_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/Navbar */ "./views/Navbar.js");
/* harmony import */ var _views_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/Footer */ "./views/Footer.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "D:\\FL\\uth-next\\pages\\mice.js";







class Mice extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("meta", {
          charSet: "UTF-8"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("title", {
          children: "Misty Courtyard by UTH| Best Hotels in Munnar| Boutique hotels at best price| Book your stay now"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("meta", {
          name: "description",
          content: "Munnar is granted with nature pays such delight and draws amazingly diverse travelers to its coop. The misty courtyard is one of the best hotels in munnar provides all facities and delicious food.It has so many unique attractions and accompanying by non-stop mist."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("meta", {
          name: "keywords",
          content: "best hotels in thekkady, best hotels in kochi, best hotels in munnar, best hotels in banglore,best hotels in varanasi,best price luxury hotels in kochi "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("meta", {
          name: "author",
          content: "UTH Group Of Hotels"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("meta", {
          name: "viewport",
          content: "width=device-width, initial-scale=1.0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("meta", {
          property: "og:type",
          content: "website"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("meta", {
          property: "og:title",
          content: "Misty Courtyard by UTH| Best Hotels in Munnar| Boutique hotels at best price| Book your stay now"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("meta", {
          property: "og:description",
          content: "Munnar is granted with nature pays such delight and draws amazingly diverse travelers to its coop. The misty courtyard is one of the best hotels in munnar provides all facities and delicious food.It has so many unique attractions and accompanying by non-stop mist."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("meta", {
          property: "og:url",
          content: "%PUBLIC_URL%"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("meta", {
          property: "og:site_name",
          content: "UTH | Group of Hotels"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("meta", {
          property: "og:image",
          content: "http://159.65.153.59/site/assets/images/fav/og-image.jpg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("meta", {
          name: "twitter:card",
          content: "http://159.65.153.59/site/assets/images/fav/og-image.jpg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("link", {
          rel: "apple-touch-icon",
          sizes: "57x57",
          href: "/assets/images/fav/apple-icon-57x57.png"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("link", {
          rel: "apple-touch-icon",
          sizes: "60x60",
          href: "/assets/images/fav/apple-icon-60x60.png"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("link", {
          rel: "apple-touch-icon",
          sizes: "72x72",
          href: "/assets/images/fav/apple-icon-72x72.png"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("link", {
          rel: "apple-touch-icon",
          sizes: "76x76",
          href: "/assets/images/fav/apple-icon-76x76.png"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("link", {
          rel: "apple-touch-icon",
          sizes: "114x114",
          href: "/assets/images/fav/apple-icon-114x114.png"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("link", {
          rel: "apple-touch-icon",
          sizes: "120x120",
          href: "/assets/images/fav/apple-icon-120x120.png"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("link", {
          rel: "apple-touch-icon",
          sizes: "144x144",
          href: "/assets/images/fav/apple-icon-144x144.png"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("link", {
          rel: "apple-touch-icon",
          sizes: "152x152",
          href: "/assets/images/fav/apple-icon-152x152.png"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("link", {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/assets/images/fav/apple-icon-180x180.png"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("link", {
          rel: "icon",
          type: "image/png",
          sizes: "192x192",
          href: "/assets/images/fav/android-icon-192x192.png"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("link", {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/assets/images/fav/favicon-32x32.png"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("link", {
          rel: "icon",
          type: "image/png",
          sizes: "96x96",
          href: "/assets/images/fav/favicon-96x96.png"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("link", {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/assets/images/fav/favicon-16x16.png"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("meta", {
          name: "msapplication-TileImage",
          content: "/assets/images/fav/ms-icon-144x144.png"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("meta", {
          name: "twitter:title",
          content: "UTH | Group of Hotels"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("main", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: "wrapper",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
            className: "inner-page listing",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_views_Navbar__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("section", {
              className: "details-banner-block image-shade",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("img", {
                src: "./assets/images/mice-banner.jpg"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 64,
                columnNumber: 19
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                className: "carousel-text-block",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                  className: "container",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h1", {
                    children: "M.I.C.E"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 68,
                    columnNumber: 23
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 67,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 66,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
              className: "content-area text-content",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                className: "container",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                  className: "section-header",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h5", {
                    children: "Meeting"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 76,
                    columnNumber: 23
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 75,
                  columnNumber: 21
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                  className: "section-content",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
                    children: "Stay well-defined, organised and healthy positive here. Connect your colleagues and have a mindful way of holding things together. Get connected by heart!"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 79,
                    columnNumber: 23
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                    className: "row",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                      className: "pin-banner col-md-6",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                        className: "pintile-content",
                        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("figure", {
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("img", {
                            src: "./assets/images/business-meeting.jpg"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 86,
                            columnNumber: 31
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 85,
                          columnNumber: 29
                        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                          className: "pintile-decription",
                          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h5", {
                            children: "Business Meeting"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 89,
                            columnNumber: 31
                          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
                            children: "We UTH Group of Hotels are happy to provide the best service for your designated Business meetings with international standards. Our experienced team crew will be happy to host and provide ample space for Conference Hall, banquet halls, board rooms and outdoor venues for meetings for any range with all ground handling arrangements including, transportation, tours and many more."
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 90,
                            columnNumber: 31
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 88,
                          columnNumber: 29
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 84,
                        columnNumber: 27
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 83,
                      columnNumber: 25
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                      className: "pin-banner col-md-6",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                        className: "pintile-content",
                        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("figure", {
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("img", {
                            src: "./assets/images/online-meeting.jpg"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 101,
                            columnNumber: 31
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 100,
                          columnNumber: 29
                        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                          className: "pintile-decription",
                          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h5", {
                            children: "Virtual Meeting / Online Meeting"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 104,
                            columnNumber: 31
                          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
                            children: "Everyone from different geographic locations gathering for physical meetings has now tuned up to virtual meeting spaces. Our experienced team tunes up the virtual meeting space with the latest state of art technology; connecting through the latest software to conduct the meetings, with presentation space, chat private / public, video and audio with unlimited timings as per requirements. We have well-tuned IT team for offering Virtual Meetings"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 105,
                            columnNumber: 31
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 103,
                          columnNumber: 29
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 99,
                        columnNumber: 27
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 98,
                      columnNumber: 25
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                      className: "pin-banner col-md-6",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                        className: "pintile-content",
                        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("figure", {
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("img", {
                            src: "./assets/images/confidential-meeting.jpg"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 118,
                            columnNumber: 31
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 117,
                          columnNumber: 29
                        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                          className: "pintile-decription",
                          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h5", {
                            children: "Board Room Meetings / Confidential meetings"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 121,
                            columnNumber: 31
                          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
                            children: "We are delighted to provide you the confidential / board meeting with best facilities in your preferred destination. Our team will be seamlessly handling the right venues, facilities, dining and accommodation. We have a dedicated team to handle all kind of confidential meetings and they are capable to manage even your last minute requirements during the meeting."
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 122,
                            columnNumber: 31
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 120,
                          columnNumber: 29
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 116,
                        columnNumber: 27
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 115,
                      columnNumber: 25
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                      className: "pin-banner col-md-6",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                        className: "pintile-content",
                        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("figure", {
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("img", {
                            src: "./assets/images/corporate-meeting.jpg"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 133,
                            columnNumber: 31
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 132,
                          columnNumber: 29
                        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                          className: "pintile-decription",
                          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h5", {
                            children: "Corporate meeting"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 136,
                            columnNumber: 31
                          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
                            children: "According to the character and size of the corporate meeting, we can design whole programme in a very highly professional way. It can be venue, arrangements of meeting (Formal & Informal), cultural shows, team building programme, theme buffets, HI Tea programme, interactions, accommodation, transportation etc."
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 137,
                            columnNumber: 31
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 135,
                          columnNumber: 29
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 131,
                        columnNumber: 27
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 130,
                      columnNumber: 25
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 82,
                    columnNumber: 23
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 78,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 74,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
              className: "room-section",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                className: "container",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                  className: "section-header",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h5", {
                    children: "Incentive"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 153,
                    columnNumber: 23
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 152,
                  columnNumber: 21
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                  className: "section-content",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
                    children: "A meeting event as part of a programme, which is offered to its delegates to reward the result of their targets / performance in general."
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 156,
                    columnNumber: 23
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                    className: "row",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                      className: "pin-banner col-md-6",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                        className: "pintile-content",
                        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("figure", {
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("img", {
                            src: "./assets/images/incentive-sales.jpg"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 163,
                            columnNumber: 31
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 162,
                          columnNumber: 29
                        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                          className: "pintile-decription",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h5", {
                            children: "Sales"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 166,
                            columnNumber: 31
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 165,
                          columnNumber: 29
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 161,
                        columnNumber: 27
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 160,
                      columnNumber: 25
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                      className: "pin-banner col-md-6",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                        className: "pintile-content",
                        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("figure", {
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("img", {
                            src: "./assets/images/incentive-financial.jpg"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 174,
                            columnNumber: 31
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 173,
                          columnNumber: 29
                        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                          className: "pintile-decription",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h5", {
                            children: "Financial"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 177,
                            columnNumber: 31
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 176,
                          columnNumber: 29
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 172,
                        columnNumber: 27
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 171,
                      columnNumber: 25
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                      className: "pin-banner col-md-6",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                        className: "pintile-content",
                        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("figure", {
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("img", {
                            src: "./assets/images/incentive-business.jpg"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 185,
                            columnNumber: 31
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 184,
                          columnNumber: 29
                        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                          className: "pintile-decription",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h5", {
                            children: "Business"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 188,
                            columnNumber: 31
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 187,
                          columnNumber: 29
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 183,
                        columnNumber: 27
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 182,
                      columnNumber: 25
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                      className: "pin-banner col-md-6",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                        className: "pintile-content",
                        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("figure", {
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("img", {
                            src: "./assets/images/incentive-wellness.jpg"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 196,
                            columnNumber: 31
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 195,
                          columnNumber: 29
                        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                          className: "pintile-decription",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h5", {
                            children: "Wellness"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 199,
                            columnNumber: 31
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 198,
                          columnNumber: 29
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 194,
                        columnNumber: 27
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 193,
                      columnNumber: 25
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 159,
                    columnNumber: 23
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 155,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 151,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 150,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
              className: "content-area text-content",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                className: "container",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                  className: "section-header",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h5", {
                    children: "Conference"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 212,
                    columnNumber: 23
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 211,
                  columnNumber: 21
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                  className: "section-content",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
                    children: "Make your conferences live & confidential within our hotels and resorts. Let your delegates gather here with sprouting thoughts & ideas. Converge your best thoughts!"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 215,
                    columnNumber: 23
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                    className: "row",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                      className: "pin-banner col-md-6",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                        className: "pintile-content",
                        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("figure", {
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("img", {
                            src: "./assets/images/business-conference.jpg"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 222,
                            columnNumber: 31
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 221,
                          columnNumber: 29
                        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                          className: "pintile-decription",
                          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h5", {
                            children: "Business"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 225,
                            columnNumber: 31
                          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
                            children: "We UTH Group of Hotels are happy to provide the best service for your designated Business meetings with international standards. Our experienced team crew will be happy to host and provide ample space for Conference Hall, banquet halls, ball rooms and outdoor venues for meetings for any range with all ground handling arrangements including, transportation, tours and many more."
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 226,
                            columnNumber: 31
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 224,
                          columnNumber: 29
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 220,
                        columnNumber: 27
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 219,
                      columnNumber: 25
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                      className: "pin-banner col-md-6",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                        className: "pintile-content",
                        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("figure", {
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("img", {
                            src: "./assets/images/seminar.jpg"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 237,
                            columnNumber: 31
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 236,
                          columnNumber: 29
                        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                          className: "pintile-decription",
                          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h5", {
                            children: "Seminar"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 240,
                            columnNumber: 31
                          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
                            children: "Our team understands the choice of importance of your theme and we delegate the same with utmost care and vision. The meetings hall are equipped with state of art AV facilities. We handle the entire stream of process with delegate arrival in the destination, as well as venue with theme, the audio and visual set up, the dining experience with variety of unique menu with the spectacular beverages, with the best entertainment options."
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 241,
                            columnNumber: 31
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 239,
                          columnNumber: 29
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 235,
                        columnNumber: 27
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 234,
                      columnNumber: 25
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                      className: "pin-banner col-md-6",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                        className: "pintile-content",
                        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("figure", {
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("img", {
                            src: "./assets/images/virtual-meeting.jpg"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 253,
                            columnNumber: 31
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 252,
                          columnNumber: 29
                        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                          className: "pintile-decription",
                          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h5", {
                            children: "Virtual Meeting / Online Meeting"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 256,
                            columnNumber: 31
                          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
                            children: "Everyone from different geographic locations gathering for physical meetings has now tuned up to virtual meeting spaces. Our experienced team tunes up the virtual meeting space with the latest state of art technology; connecting through the latest software to conduct the meetings, with presentation space, chat private / public, video and audio with unlimited timings as per requirements. We have well-tuned IT team for offering Virtual Meetings "
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 257,
                            columnNumber: 31
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 255,
                          columnNumber: 29
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 251,
                        columnNumber: 27
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 250,
                      columnNumber: 25
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                      className: "pin-banner col-md-6",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                        className: "pintile-content",
                        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("figure", {
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("img", {
                            src: "./assets/images/residence-conference.jpg"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 269,
                            columnNumber: 31
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 268,
                          columnNumber: 29
                        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                          className: "pintile-decription",
                          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h5", {
                            children: "Residence Conference."
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 272,
                            columnNumber: 31
                          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
                            children: "We are delighted to be the host of your conference with accommodation in the right venue. Our choice of excellent dining venue with variety of cuisines, entertainment and many more. According to the choice of range of rooms for accommodation, our team will be glad to offer the right choices. We can provide travel desk, cultural show, cocktail dinners, live star bands. Etc. Our array of options will help you to choose the right mix and match."
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 273,
                            columnNumber: 31
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 271,
                          columnNumber: 29
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 267,
                        columnNumber: 27
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 266,
                      columnNumber: 25
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 218,
                    columnNumber: 23
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 214,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 210,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 209,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
              className: "room-section",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                className: "container",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                  className: "section-header",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h5", {
                    children: "Events"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 291,
                    columnNumber: 23
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 290,
                  columnNumber: 21
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                  className: "section-content",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
                    children: "Redefine the best moments of your life, have a splendid go with your events and weddings. Eye-catch perfection and feel the unexpectedness. Go more than just normal!"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 294,
                    columnNumber: 23
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                    className: "row",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                      className: "pin-banner col-md-6",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                        className: "pintile-content",
                        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("figure", {
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("img", {
                            src: "./assets/images/product-launch.jpg"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 301,
                            columnNumber: 31
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 300,
                          columnNumber: 29
                        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                          className: "pintile-decription",
                          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h5", {
                            children: "Product Launch"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 304,
                            columnNumber: 31
                          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
                            children: "It\u2019s a brand new launch \u2013 yes! you are connecting with most sophisticated \u2018Team UTH\u2019. We handle the entire stream of process with delegate arrival in the destination, as well as venue with theme, the audio and visual set up, the dining experience with variety of unique menu with the spectacular beverages, with the best entertainment options. We can even provide star nights for product launch. We can assist to arrange press meet during product launch. The venue can either be indoor and outdoor."
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 305,
                            columnNumber: 31
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 303,
                          columnNumber: 29
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 299,
                        columnNumber: 27
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 298,
                      columnNumber: 25
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                      className: "pin-banner col-md-6",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                        className: "pintile-content",
                        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("figure", {
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("img", {
                            src: "./assets/images/corporate-gathering.jpg"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 317,
                            columnNumber: 31
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 316,
                          columnNumber: 29
                        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                          className: "pintile-decription",
                          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h5", {
                            children: "Corporate Gathering"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 320,
                            columnNumber: 31
                          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
                            children: "Celebrating success mile stones or an annual party for the well-wishers and your employees; Star Award Nights, Fashion Shows, press meet / pharmaceutical or Doctors events \u2013 One stop point for vibrant team to handle the same. Our team arrange the total show with the latest state of art Audio and Video, gala dinner, solo entertainers, celebrities, cocktail themes. Additional to the event, we can arrange the travel desk as well as stay in appropriate resorts / hotels."
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 321,
                            columnNumber: 31
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 319,
                          columnNumber: 29
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 315,
                        columnNumber: 27
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 314,
                      columnNumber: 25
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                      className: "pin-banner col-md-6",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                        className: "pintile-content",
                        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("figure", {
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("img", {
                            src: "./assets/images/wedding-events.jpg"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 333,
                            columnNumber: 31
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 332,
                          columnNumber: 29
                        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                          className: "pintile-decription",
                          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h5", {
                            children: "Wedding"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 336,
                            columnNumber: 31
                          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
                            children: "We understand the need of the life time moment \u2013 the wedding \u2013 The themes (Hindu, Christian, and Muslim, non-religious, traditional or international), the menu (Traditional, International, fusion and theme buffet), the set-up, the live music, the lightings, the charm, the moments all unique for every wedding. We handle the entire stream of process with the guest\u2019s arrival in the destination, as well as venue with theme, the audio and visual set up, the dining experience with variety of unique menu with the spectacular beverages, with the best entertainment options. We will ensure this event giving ever green memory for not only nuptials, but also for entire team who attend this event. Because our dedicated team will design the event in a charming innovative way."
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 337,
                            columnNumber: 31
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 335,
                          columnNumber: 29
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 331,
                        columnNumber: 27
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 330,
                      columnNumber: 25
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                      className: "pin-banner col-md-6",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                        className: "pintile-content",
                        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("figure", {
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("img", {
                            src: "./assets/images/virtual-events.jpg"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 353,
                            columnNumber: 31
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 352,
                          columnNumber: 29
                        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                          className: "pintile-decription",
                          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h5", {
                            children: "Virtual Events"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 356,
                            columnNumber: 31
                          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
                            children: "Be it an education fair event / brand launching event online \u2013 UTH Group is the right choice. Our experienced IT team tunes up the virtual meeting space with the latest state of art technology; connecting through the latest softwares to conduct the meetings, with presentation space, chat private / public, video and audio with unlimited timings as per requirements. We have well-tuned IT team for offering Virtual Meetings."
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 357,
                            columnNumber: 31
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 355,
                          columnNumber: 29
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 351,
                        columnNumber: 27
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 350,
                      columnNumber: 25
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 297,
                    columnNumber: 23
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 293,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 289,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 288,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_views_Footer__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 370,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
            id: "back-to-top",
            href: "#",
            className: "back-to-top",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
              className: "top"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 375,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 374,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 11
      }, this)]
    }, void 0, true);
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Mice);

/***/ }),

/***/ "./services/common.services.js":
/*!*************************************!*\
  !*** ./services/common.services.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getRequests": () => (/* binding */ getRequests),
/* harmony export */   "postRequests": () => (/* binding */ postRequests)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./constants/index.js");

function getRequests(url, params) {
  let queryStr = '?';
  let i = 0;

  if (params && Object.keys(params).length > 0) {
    for (var key in params) {
      if (params.hasOwnProperty(key)) {
        if (i > 0) {
          queryStr += '&';
        }

        queryStr += key + '=' + params[key];
        i++;
      }
    }

    url = url + queryStr;
  }

  console.log(url);
  return fetch(_constants__WEBPACK_IMPORTED_MODULE_0__.API_PATH + url).then(res => res.json()).then(result => {
    //this.setState({facilities : result.results.data})
    console.log(result);
    return result;
  }, // Note: it's important to handle errors here
  // instead of a catch() block so that we don't swallow
  // exceptions from actual bugs in components.
  error => {
    console.log(error);
  });
}
function postRequests(url, params) {
  async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(_constants__WEBPACK_IMPORTED_MODULE_0__.API_PATH + url, {
      method: 'POST',
      // *GET, POST, PUT, DELETE, etc.
      mode: 'cors',
      // no-cors, *cors, same-origin
      cache: 'no-cache',
      // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin',
      // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json' // 'Content-Type': 'application/x-www-form-urlencoded',

      },
      redirect: 'follow',
      // manual, *follow, error
      referrerPolicy: 'no-referrer',
      // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header

    });
    return response.json(); // parses JSON response into native JavaScript objects
  }

  return postData(url, params).then(data => {
    console.log(data); // JSON data parsed by `data.json()` call

    return data;
  });
}

/***/ }),

/***/ "./services/hotel.services.js":
/*!************************************!*\
  !*** ./services/hotel.services.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hotel": () => (/* binding */ hotel)
/* harmony export */ });
/* harmony import */ var _common_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.services */ "./services/common.services.js");

const hotel = {
  getHotelList,
  getHotelCategoryList,
  getFacilities,
  getHotelDetail,
  getHotelDetailV2,
  getRoomTypes,
  saveContact,
  searchRooms,
  saveBooking,
  confirmBooking,
  getBannerImages,
  getHotelHighlights,
  getHotelPolicies,
  getSpRequests
};

function getHotelList(params) {
  return _common_services__WEBPACK_IMPORTED_MODULE_0__.getRequests('hotel/hotellist', params);
}

function getHotelCategoryList(params) {
  return _common_services__WEBPACK_IMPORTED_MODULE_0__.getRequests('hotel/hotelcategorylist', params);
}

function getFacilities(params) {
  return _common_services__WEBPACK_IMPORTED_MODULE_0__.getRequests('hotel/masterfacilities', params);
}

function getHotelDetail(params) {
  //return commonService.getRequests('hotel/hoteldetails', params);
  return _common_services__WEBPACK_IMPORTED_MODULE_0__.getRequests('hotel/hoteldetailsv1', params);
}

function getHotelDetailV2(params) {
  //return commonService.getRequests('hotel/hoteldetails', params);
  return _common_services__WEBPACK_IMPORTED_MODULE_0__.getRequests('hotel/hoteldetailsv2', params);
}

function getRoomTypes(params) {
  return _common_services__WEBPACK_IMPORTED_MODULE_0__.getRequests('hotel/roomtype', params);
}

function saveContact(params) {
  return _common_services__WEBPACK_IMPORTED_MODULE_0__.postRequests('login/savecontactus', params);
}

function searchRooms(params) {
  return _common_services__WEBPACK_IMPORTED_MODULE_0__.getRequests('hotel/searchrooms', params);
}

function saveBooking(params) {
  return _common_services__WEBPACK_IMPORTED_MODULE_0__.postRequests('hotel/savehotelbooking', params);
}

function confirmBooking(params) {
  return _common_services__WEBPACK_IMPORTED_MODULE_0__.postRequests('hotel/confirmhotelbooking', params);
}

function getBannerImages(params) {
  return _common_services__WEBPACK_IMPORTED_MODULE_0__.getRequests('hotel/hotelbannerimages', params);
}

function getHotelHighlights(params) {
  return _common_services__WEBPACK_IMPORTED_MODULE_0__.getRequests('hotel/hotelhighlights', params);
}

function getHotelPolicies(params) {
  return _common_services__WEBPACK_IMPORTED_MODULE_0__.getRequests('hotel/hotelpolicies', params);
}

function getSpRequests(params) {
  return _common_services__WEBPACK_IMPORTED_MODULE_0__.getRequests('hotel/specialrequest', params);
}

/***/ }),

/***/ "./views/Footer.js":
/*!*************************!*\
  !*** ./views/Footer.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\FL\\uth-next\\views\\Footer.js";



function Footer() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("footer", {
    className: "footer-block",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "container",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "footer-inner",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "footer-left",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
            href: "#",
            className: "brand-logo",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
              src: "/assets/images/uth-logo-black.png",
              alt: "Brand-logo"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 10,
              columnNumber: 21
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 9,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: "footer-address",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
              children: "Vrindhavan"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 13,
              columnNumber: 21
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
              children: "Mavelipuram Colony"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 14,
              columnNumber: 21
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
              children: "Kakkanadu P.O."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 15,
              columnNumber: 21
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
              children: "Kochi 30"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 16,
              columnNumber: 21
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 12,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("ul", {
          className: "other-info-list",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
            className: "mail-ico",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
              href: "mailto:booking@uthhotels.com",
              children: "booking@uthhotels.com"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 21,
              columnNumber: 42
            }, this), ", ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
              href: "mailto:info@uthhotels.com",
              children: "info@uthhotels.com"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 21,
              columnNumber: 108
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
            className: "phone-ico",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
              href: "tel:+919746838883",
              children: "+91 9746838883"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 23,
              columnNumber: 21
            }, this), ", ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
              href: "tel:+919567338884",
              children: "+91 9567338884"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 23,
              columnNumber: 69
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 9
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ }),

/***/ "./views/Navbar.js":
/*!*************************!*\
  !*** ./views/Navbar.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/index */ "./constants/index.js");
/* harmony import */ var _actions_hotel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/hotel */ "./actions/hotel.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "D:\\FL\\uth-next\\views\\Navbar.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








class Navbar extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "setMobileMenu", () => {
      this.setState({
        mobileMenu: !this.state.mobileMenu
      });
    });

    _defineProperty(this, "setSearchText", searchText => {
      this.setState({
        searchText: searchText
      });
    });

    _defineProperty(this, "handleChange", e => {
      let fieldVal = e.target.value;
      this.setSearchText(fieldVal);
    });

    _defineProperty(this, "handleKeyUp", e => {
      var code = e.keyCode ? e.keyCode : e.which;

      if (code == 13) {
        //Enter keycode
        //Props.searchHotels(searchText);
        let searchParams = {
          location: this.state.searchText
        };
        this.props.searchHotels(searchParams);
      }
    });

    this.state = {
      mobileMenu: false,
      searchText: ''
    };
  }

  componentDidMount() {}

  render() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
      className: "nav-bar",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        className: "container",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          className: "nav-bar-container",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: "/",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("a", {
              className: "brand-logo",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("img", {
                src: "/assets/images/uth-logo.png",
                alt: "Brand-logo",
                className: "white-logo"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 58,
                columnNumber: 37
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 33
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 29
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
            className: "nav-right",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
              className: `menu-wrapper ${this.state.mobileMenu ? ' fly-in' : ''}`,
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("button", {
                className: "close-fly",
                onClick: () => this.setMobileMenu(false)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 66,
                columnNumber: 37
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("ul", {
                className: "nav-menu",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                    href: "/",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("nav", {
                      children: "HOME"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 69,
                      columnNumber: 60
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 69,
                    columnNumber: 45
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 68,
                  columnNumber: 41
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                    href: "/about-us",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("nav", {
                      children: "POSITIVE VIBE OF US"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 72,
                      columnNumber: 68
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 72,
                    columnNumber: 45
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 71,
                  columnNumber: 41
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                    href: "/hotels-category",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("nav", {
                      children: "HOTELS & RESORTS"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 75,
                      columnNumber: 75
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 75,
                    columnNumber: 45
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 74,
                  columnNumber: 41
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                    href: "/mice",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("nav", {
                      children: "MICE"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 79,
                      columnNumber: 64
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 79,
                    columnNumber: 45
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 78,
                  columnNumber: 41
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                    href: "/health",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("nav", {
                      children: "HEALTH & LIFE STYLE"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 82,
                      columnNumber: 66
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 82,
                    columnNumber: 45
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 81,
                  columnNumber: 41
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                    href: "/contactus",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("nav", {
                      children: "KEEP IN TOUCH"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 85,
                      columnNumber: 69
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 85,
                    columnNumber: 45
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 84,
                  columnNumber: 41
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 67,
                columnNumber: 37
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 33
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
              className: "search-block",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("input", {
                type: "text",
                name: "search_loc",
                id: "search_loc",
                placeholder: "Search",
                onKeyUp: e => this.handleKeyUp(e),
                onChange: e => this.handleChange(e)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 91,
                columnNumber: 37
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 33
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("button", {
              className: "hamburger",
              onClick: () => this.setMobileMenu(true)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 25
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 17
    }, this);
  }

}

const mapStateToProps = state => ({
  hotelData: state.HotelReducer.hotelData
}); // export default  withRouter(connect(mapStateToProps, {
//     searchHotels : HotelActions.searchHotels
// })(Navbar));


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps, {
  searchHotels: _actions_hotel__WEBPACK_IMPORTED_MODULE_4__.searchHotels
})(Navbar));

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "../../../server/denormalize-page-path":
/*!************************************************************!*\
  !*** external "next/dist/server/denormalize-page-path.js" ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ "../i18n/normalize-locale-path":
/*!*********************************************************************!*\
  !*** external "next/dist/shared/lib/i18n/normalize-locale-path.js" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ "../mitt":
/*!***********************************************!*\
  !*** external "next/dist/shared/lib/mitt.js" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ "../shared/lib/router-context":
/*!*********************************************************!*\
  !*** external "next/dist/shared/lib/router-context.js" ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ "../shared/lib/router/utils/get-asset-path-from-route":
/*!*********************************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/get-asset-path-from-route.js" ***!
  \*********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "./utils/is-dynamic":
/*!******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/is-dynamic.js" ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ "./utils/parse-relative-url":
/*!**************************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/parse-relative-url.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ "./utils/querystring":
/*!*******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/querystring.js" ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ "./utils/route-matcher":
/*!*********************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/route-matcher.js" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ "./utils/route-regex":
/*!*******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/route-regex.js" ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ "../shared/lib/utils":
/*!************************************************!*\
  !*** external "next/dist/shared/lib/utils.js" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

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

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-is");

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

/***/ "?5c99":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (() => {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/mice.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9VVEgvLi9hY3Rpb25zL2hvdGVsLmpzIiwid2VicGFjazovL1VUSC8uL2NvbnN0YW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly9VVEgvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9saW5rLmpzIiwid2VicGFjazovL1VUSC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC5qcyIsIndlYnBhY2s6Ly9VVEgvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMiLCJ3ZWJwYWNrOi8vVVRILy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcm91dGUtbG9hZGVyLmpzIiwid2VicGFjazovL1VUSC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JvdXRlci5qcyIsIndlYnBhY2s6Ly9VVEgvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC91c2UtaW50ZXJzZWN0aW9uLmpzIiwid2VicGFjazovL1VUSC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3dpdGgtcm91dGVyLmpzIiwid2VicGFjazovL1VUSC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvcm91dGVyLmpzIiwid2VicGFjazovL1VUSC8uL3BhZ2VzL21pY2UuanMiLCJ3ZWJwYWNrOi8vVVRILy4vc2VydmljZXMvY29tbW9uLnNlcnZpY2VzLmpzIiwid2VicGFjazovL1VUSC8uL3NlcnZpY2VzL2hvdGVsLnNlcnZpY2VzLmpzIiwid2VicGFjazovL1VUSC8uL3ZpZXdzL0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9VVEgvLi92aWV3cy9OYXZiYXIuanMiLCJ3ZWJwYWNrOi8vVVRILy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly9VVEgvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aC5qc1wiIiwid2VicGFjazovL1VUSC9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoLmpzXCIiLCJ3ZWJwYWNrOi8vVVRIL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvbWl0dC5qc1wiIiwid2VicGFjazovL1VUSC9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vVVRIL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly9VVEgvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy5qc1wiIiwid2VicGFjazovL1VUSC9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwuanNcIiIsIndlYnBhY2s6Ly9VVEgvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcuanNcIiIsIndlYnBhY2s6Ly9VVEgvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci5qc1wiIiwid2VicGFjazovL1VUSC9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC5qc1wiIiwid2VicGFjazovL1VUSC9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3V0aWxzLmpzXCIiLCJ3ZWJwYWNrOi8vVVRIL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vVVRIL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9VVEgvZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovL1VUSC9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vVVRIL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vVVRIL2lnbm9yZWR8RDpcXEZMXFx1dGgtbmV4dFxcbm9kZV9tb2R1bGVzXFxuZXh0XFxkaXN0XFxzaGFyZWRcXGxpYlxccm91dGVyfC4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2hvdGVsfSBmcm9tIFwiLi4vc2VydmljZXMvaG90ZWwuc2VydmljZXNcIlxyXG5leHBvcnQgY29uc3QgZ2V0SG90ZWxMaXN0ID0gKHBhcmFtcykgPT4gZGlzcGF0Y2ggPT4ge1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6ICdMT0FERVJfU1RBVFVTJyxcclxuICAgICAgICBzdGF0dXM6dHJ1ZVxyXG5cclxuICAgIH0pO1xyXG4gICAgbGV0IGhvdGVsRGF0YSA9IGhvdGVsLmdldEhvdGVsTGlzdChwYXJhbXMpO1xyXG5cclxuICAgIGhvdGVsRGF0YS50aGVuKGhvdGVsRGF0YSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coaG90ZWxEYXRhKVxyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogJ0hPVEVMX0xJU1RfU1VDQ0VTUycsXHJcbiAgICAgICAgICAgIGhvdGVsTGlzdDogaG90ZWxEYXRhLnJlc3VsdHMuZGF0YSxcclxuICAgICAgICAgICAgY2F0ZWdvcnk6IGhvdGVsRGF0YS5yZXN1bHRzLmNhdGVnb3J5XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiAnTE9BREVSX1NUQVRVUycsXHJcbiAgICAgICAgICAgIHN0YXR1czpmYWxzZVxyXG5cclxuICAgICAgICB9KTtcclxuICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogJ0hPVEVMX0xJU1RfU1VDQ0VTUycsXHJcbiAgICAgICAgICAgICAgICBob3RlbExpc3Q6IFtdLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnkgOiB7fVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogJ0xPQURFUl9TVEFUVVMnLFxyXG4gICAgICAgICAgICAgICAgc3RhdHVzOmZhbHNlXHJcblxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KVxyXG59O1xyXG5leHBvcnQgY29uc3QgZ2V0SG90ZWxDYXRlZ29yeUxpc3QgPSAoKSA9PiBkaXNwYXRjaCA9PiB7XHJcbiAgICBsZXQgcGFyYW1zID0ge31cclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiAnTE9BREVSX1NUQVRVUycsXHJcbiAgICAgICAgc3RhdHVzOnRydWVcclxuXHJcbiAgICB9KTtcclxuICAgIGxldCBjYXRlZ29yeURhdGEgPSBob3RlbC5nZXRIb3RlbENhdGVnb3J5TGlzdChwYXJhbXMpO1xyXG5cclxuICAgIGNhdGVnb3J5RGF0YS50aGVuKGNhdGVnb3J5RGF0YSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coY2F0ZWdvcnlEYXRhKVxyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogJ0hPVEVMX0NBVEVHT1JZX1NVQ0NFU1MnLFxyXG4gICAgICAgICAgICBjYXRlZ29yeUxpc3Q6IGNhdGVnb3J5RGF0YS5yZXN1bHRzLmRhdGFcclxuICAgICAgICB9KTtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6ICdMT0FERVJfU1RBVFVTJyxcclxuICAgICAgICAgICAgc3RhdHVzOmZhbHNlXHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnSE9URUxfQ0FURUdPUllfU1VDQ0VTUycsXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeUxpc3Q6IFtdXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnTE9BREVSX1NUQVRVUycsXHJcbiAgICAgICAgICAgICAgICBzdGF0dXM6ZmFsc2VcclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0SG90ZWxEZXRhaWwgPSAocGFyYW1zKSA9PiBkaXNwYXRjaCA9PiB7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogJ0xPQURFUl9TVEFUVVMnLFxyXG4gICAgICAgIHN0YXR1czp0cnVlXHJcblxyXG4gICAgfSk7XHJcbiAgICBsZXQgaG90ZWxEYXRhID0gaG90ZWwuZ2V0SG90ZWxEZXRhaWwocGFyYW1zKTtcclxuXHJcbiAgICBob3RlbERhdGEudGhlbihob3RlbERhdGEgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGhvdGVsRGF0YSlcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6ICdIT1RFTF9ERVRBSUxfU1VDQ0VTUycsXHJcbiAgICAgICAgICAgIGhvdGVsRGV0YWlsOiBob3RlbERhdGEucmVzdWx0cy5kYXRhXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiAnTE9BREVSX1NUQVRVUycsXHJcbiAgICAgICAgICAgIHN0YXR1czpmYWxzZVxyXG5cclxuICAgICAgICB9KTtcclxuICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogJ0hPVEVMX0RFVEFJTF9TVUNDRVNTJyxcclxuICAgICAgICAgICAgICAgIGhvdGVsRGV0YWlsOiBbXVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogJ0xPQURFUl9TVEFUVVMnLFxyXG4gICAgICAgICAgICAgICAgc3RhdHVzOmZhbHNlXHJcblxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KVxyXG59O1xyXG5leHBvcnQgY29uc3QgZ2V0SG90ZWxEZXRhaWxWMiA9IChwYXJhbXMpID0+IGRpc3BhdGNoID0+IHtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiAnTE9BREVSX1NUQVRVUycsXHJcbiAgICAgICAgc3RhdHVzOnRydWVcclxuXHJcbiAgICB9KTtcclxuICAgIGxldCBob3RlbERhdGEgPSBob3RlbC5nZXRIb3RlbERldGFpbFYyKHBhcmFtcyk7XHJcblxyXG4gICAgaG90ZWxEYXRhLnRoZW4oaG90ZWxEYXRhID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhob3RlbERhdGEpXHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiAnSE9URUxfREVUQUlMX1NVQ0NFU1MnLFxyXG4gICAgICAgICAgICBob3RlbERldGFpbDogaG90ZWxEYXRhLnJlc3VsdHMuZGF0YVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogJ0xPQURFUl9TVEFUVVMnLFxyXG4gICAgICAgICAgICBzdGF0dXM6ZmFsc2VcclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdIT1RFTF9ERVRBSUxfU1VDQ0VTUycsXHJcbiAgICAgICAgICAgICAgICBob3RlbERldGFpbDogW11cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdMT0FERVJfU1RBVFVTJyxcclxuICAgICAgICAgICAgICAgIHN0YXR1czpmYWxzZVxyXG5cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSlcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZWFyY2hIb3RlbHMgPSAocGFyYW1zKSA9PiBkaXNwYXRjaCA9PiB7XHJcbiAgIC8vIGxldCBwYXJhbXMgPSB7fVxyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6ICdMT0FERVJfU1RBVFVTJyxcclxuICAgICAgICBzdGF0dXM6dHJ1ZVxyXG5cclxuICAgIH0pO1xyXG4gICAgbGV0IGhvdGVsRGF0YSA9IGhvdGVsLmdldEhvdGVsTGlzdChwYXJhbXMpO1xyXG5cclxuICAgIGhvdGVsRGF0YS50aGVuKGhvdGVsRGF0YSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coaG90ZWxEYXRhKVxyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogJ1NFQVJDSF9IT1RFTF9MSVNUX1NVQ0NFU1MnLFxyXG4gICAgICAgICAgICBob3RlbExpc3Q6IGhvdGVsRGF0YS5yZXN1bHRzLmRhdGEsXHJcbiAgICAgICAgICAgIHNlYXJjaCA6IHRydWUsXHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiBob3RlbERhdGEucmVzdWx0cy5jYXRlZ29yeVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogJ0xPQURFUl9TVEFUVVMnLFxyXG4gICAgICAgICAgICBzdGF0dXM6ZmFsc2VcclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdIT1RFTF9MSVNUX1NVQ0NFU1MnLFxyXG4gICAgICAgICAgICAgICAgaG90ZWxMaXN0OiBbXSxcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5IDoge31cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdMT0FERVJfU1RBVFVTJyxcclxuICAgICAgICAgICAgICAgIHN0YXR1czpmYWxzZVxyXG5cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSlcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRGYWNpbGl0aWVzID0gKCkgPT4gZGlzcGF0Y2ggPT4ge1xyXG4gICAgbGV0IHBhcmFtcyA9IHt9XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogJ0xPQURFUl9TVEFUVVMnLFxyXG4gICAgICAgIHN0YXR1czp0cnVlXHJcblxyXG4gICAgfSk7XHJcbiAgICBsZXQgZmFjaWxpdHlEYXRhID0gaG90ZWwuZ2V0RmFjaWxpdGllcyhwYXJhbXMpO1xyXG5cclxuICAgIGZhY2lsaXR5RGF0YS50aGVuKGZhY2lsaXR5RGF0YSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiAnRkFDSUxJVFlfTElTVF9TVUNDRVNTJyxcclxuICAgICAgICAgICAgZmFjaWxpdGllczogZmFjaWxpdHlEYXRhLnJlc3VsdHMuZGF0YVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogJ0xPQURFUl9TVEFUVVMnLFxyXG4gICAgICAgICAgICBzdGF0dXM6ZmFsc2VcclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdGQUNJTElUWV9MSVNUX1NVQ0NFU1MnLFxyXG4gICAgICAgICAgICAgICAgZmFjaWxpdGllczogW11cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdMT0FERVJfU1RBVFVTJyxcclxuICAgICAgICAgICAgICAgIHN0YXR1czpmYWxzZVxyXG5cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSlcclxufTtcclxuZXhwb3J0IGNvbnN0IGdldFJvb21UeXBlcyA9ICgpID0+IGRpc3BhdGNoID0+IHtcclxuICAgIGxldCBwYXJhbXMgPSB7fVxyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6ICdMT0FERVJfU1RBVFVTJyxcclxuICAgICAgICBzdGF0dXM6dHJ1ZVxyXG5cclxuICAgIH0pO1xyXG4gICAgbGV0IHJvb21UeXBlRGF0YSA9IGhvdGVsLmdldFJvb21UeXBlcyhwYXJhbXMpO1xyXG5cclxuICAgIHJvb21UeXBlRGF0YS50aGVuKHJvb21UeXBlRGF0YSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiAnUk9PTV9UWVBFX1NVQ0NFU1MnLFxyXG4gICAgICAgICAgICByb29tVHlwZXM6IHJvb21UeXBlRGF0YS5yZXN1bHRzLmRhdGFcclxuICAgICAgICB9KTtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6ICdMT0FERVJfU1RBVFVTJyxcclxuICAgICAgICAgICAgc3RhdHVzOmZhbHNlXHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnUk9PTV9UWVBFX1NVQ0NFU1MnLFxyXG4gICAgICAgICAgICAgICAgcm9vbVR5cGVzOiBbXVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogJ0xPQURFUl9TVEFUVVMnLFxyXG4gICAgICAgICAgICAgICAgc3RhdHVzOmZhbHNlXHJcblxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNhdmVDb250YWN0ID0gKHBhcmFtcykgPT4gZGlzcGF0Y2ggPT4ge1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6ICdMT0FERVJfU1RBVFVTJyxcclxuICAgICAgICBzdGF0dXM6dHJ1ZVxyXG5cclxuICAgIH0pO1xyXG4gICAgbGV0IGNvbnRhY3RTYXZlZCA9IGhvdGVsLnNhdmVDb250YWN0KHBhcmFtcyk7XHJcblxyXG4gICAgY29udGFjdFNhdmVkLnRoZW4oY29udGFjdFNhdmVkID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6ICdDT05UQUNUX1NBVkVEJyxcclxuICAgICAgICAgICAgc2F2ZWQ6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6ICdMT0FERVJfU1RBVFVTJyxcclxuICAgICAgICAgICAgc3RhdHVzOmZhbHNlXHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnQ09OVEFDVF9TQVZFRCcsXHJcbiAgICAgICAgICAgICAgICBzYXZlZDogZmFsc2VcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdMT0FERVJfU1RBVFVTJyxcclxuICAgICAgICAgICAgICAgIHN0YXR1czpmYWxzZVxyXG5cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSlcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZWFyY2hSb29tcyA9ICgpID0+IGRpc3BhdGNoID0+IHtcclxuICAgIGxldCBwYXJhbXMgPSB7fVxyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6ICdMT0FERVJfU1RBVFVTJyxcclxuICAgICAgICBzdGF0dXM6dHJ1ZVxyXG5cclxuICAgIH0pO1xyXG4gICAgbGV0IHJvb21EYXRhID0gaG90ZWwuc2VhcmNoUm9vbXMocGFyYW1zKTtcclxuXHJcbiAgICByb29tRGF0YS50aGVuKHJvb21EYXRhID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6ICdST09NX1RZUEVfU1VDQ0VTUycsXHJcbiAgICAgICAgICAgIHJvb21MaXN0OiByb29tRGF0YS5yZXN1bHRzLmRhdGFcclxuICAgICAgICB9KTtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6ICdMT0FERVJfU1RBVFVTJyxcclxuICAgICAgICAgICAgc3RhdHVzOmZhbHNlXHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnUk9PTV9UWVBFX1NVQ0NFU1MnLFxyXG4gICAgICAgICAgICAgICAgcm9vbUxpc3Q6IFtdXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnTE9BREVSX1NUQVRVUycsXHJcbiAgICAgICAgICAgICAgICBzdGF0dXM6ZmFsc2VcclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pXHJcbn07XHJcbmV4cG9ydCBjb25zdCBzYXZlQm9va2luZyA9IChwYXJhbXMpID0+IGRpc3BhdGNoID0+IHtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiAnTE9BREVSX1NUQVRVUycsXHJcbiAgICAgICAgc3RhdHVzOnRydWVcclxuXHJcbiAgICB9KTtcclxuICAgIGxldCBib29raW5nRGF0YSA9IGhvdGVsLnNhdmVCb29raW5nKHBhcmFtcyk7XHJcblxyXG4gICAgYm9va2luZ0RhdGEudGhlbihib29raW5nRGF0YSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiAnU0FWRURfQk9PS0lORycsXHJcbiAgICAgICAgICAgIGJvb2tpbmdJZDogYm9va2luZ0RhdGEucmVzdWx0cy5kYXRhXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiAnTE9BREVSX1NUQVRVUycsXHJcbiAgICAgICAgICAgIHN0YXR1czpmYWxzZVxyXG5cclxuICAgICAgICB9KTtcclxuICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogJ1NBVkVEX0JPT0tJTkcnLFxyXG4gICAgICAgICAgICAgICAgYm9va2luZ0lkOiAnJ1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogJ0xPQURFUl9TVEFUVVMnLFxyXG4gICAgICAgICAgICAgICAgc3RhdHVzOmZhbHNlXHJcblxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvbmZpcm1Cb29raW5nID0gKHBhcmFtcykgPT4gZGlzcGF0Y2ggPT4ge1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6ICdMT0FERVJfU1RBVFVTJyxcclxuICAgICAgICBzdGF0dXM6dHJ1ZVxyXG5cclxuICAgIH0pO1xyXG4gICAgbGV0IGJvb2tpbmdEYXRhID0gaG90ZWwuY29uZmlybUJvb2tpbmcocGFyYW1zKTtcclxuXHJcbiAgICBib29raW5nRGF0YS50aGVuKGJvb2tpbmdEYXRhID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6ICdDT05GSVJNRURfQk9PS0lORycsXHJcbiAgICAgICAgICAgIGJvb2tpbmdSZXN1bHQ6IGJvb2tpbmdEYXRhLnJlc3VsdHMuc3VjY2Vzc1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogJ0xPQURFUl9TVEFUVVMnLFxyXG4gICAgICAgICAgICBzdGF0dXM6ZmFsc2VcclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdDT05GSVJNRURfQk9PS0lORycsXHJcbiAgICAgICAgICAgICAgICBib29raW5nUmVzdWx0OiB7fVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogJ0xPQURFUl9TVEFUVVMnLFxyXG4gICAgICAgICAgICAgICAgc3RhdHVzOmZhbHNlXHJcblxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KVxyXG59O1xyXG5leHBvcnQgY29uc3QgZ2V0QmFubmVySW1hZ2VzID0gKHBhcmFtcykgPT4gZGlzcGF0Y2ggPT4ge1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6ICdMT0FERVJfU1RBVFVTJyxcclxuICAgICAgICBzdGF0dXM6dHJ1ZVxyXG5cclxuICAgIH0pO1xyXG4gICAgbGV0IGJhbm5lckRhdGEgPSBob3RlbC5nZXRCYW5uZXJJbWFnZXMocGFyYW1zKTtcclxuXHJcbiAgICBiYW5uZXJEYXRhLnRoZW4oYmFubmVyRGF0YSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiAnQkFOTkVSX1NVQ0NFU1MnLFxyXG4gICAgICAgICAgICBiYW5uZXJJbWFnZXM6IGJhbm5lckRhdGEucmVzdWx0cy5kYXRhXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiAnTE9BREVSX1NUQVRVUycsXHJcbiAgICAgICAgICAgIHN0YXR1czpmYWxzZVxyXG5cclxuICAgICAgICB9KTtcclxuICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogJ0JBTk5FUl9TVUNDRVNTJyxcclxuICAgICAgICAgICAgICAgIGJhbm5lckltYWdlczogW11cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdMT0FERVJfU1RBVFVTJyxcclxuICAgICAgICAgICAgICAgIHN0YXR1czpmYWxzZVxyXG5cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSlcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRIb3RlbEhpZ2hsaWdodHMgPSAocGFyYW1zKSA9PiBkaXNwYXRjaCA9PiB7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogJ0xPQURFUl9TVEFUVVMnLFxyXG4gICAgICAgIHN0YXR1czp0cnVlXHJcblxyXG4gICAgfSk7XHJcbiAgICBsZXQgaGlnaGxpZ2h0RGF0YSA9IGhvdGVsLmdldEhvdGVsSGlnaGxpZ2h0cyhwYXJhbXMpO1xyXG5cclxuICAgIGhpZ2hsaWdodERhdGEudGhlbihoaWdobGlnaHREYXRhID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6ICdISUdITElHSFRfU1VDQ0VTUycsXHJcbiAgICAgICAgICAgIGhpZ2h0bGlnaHRzOiBoaWdobGlnaHREYXRhLnJlc3VsdHMuZGF0YVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogJ0xPQURFUl9TVEFUVVMnLFxyXG4gICAgICAgICAgICBzdGF0dXM6ZmFsc2VcclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdISUdITElHSFRfU1VDQ0VTUycsXHJcbiAgICAgICAgICAgICAgICBoaWdodGxpZ2h0czogW11cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdMT0FERVJfU1RBVFVTJyxcclxuICAgICAgICAgICAgICAgIHN0YXR1czpmYWxzZVxyXG5cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSlcclxufTtcclxuZXhwb3J0IGNvbnN0IGdldEhvdGVsUG9saWNpZXMgPSAocGFyYW1zKSA9PiBkaXNwYXRjaCA9PiB7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogJ0xPQURFUl9TVEFUVVMnLFxyXG4gICAgICAgIHN0YXR1czp0cnVlXHJcblxyXG4gICAgfSk7XHJcbiAgICBsZXQgcG9saWN5RGF0YSA9IGhvdGVsLmdldEhvdGVsUG9saWNpZXMocGFyYW1zKTtcclxuXHJcbiAgICBwb2xpY3lEYXRhLnRoZW4ocG9saWN5RGF0YSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiAnUE9MSUNJRVNfU1VDQ0VTUycsXHJcbiAgICAgICAgICAgIHBvbGljaWVzOiBwb2xpY3lEYXRhLnJlc3VsdHMuZGF0YVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogJ0xPQURFUl9TVEFUVVMnLFxyXG4gICAgICAgICAgICBzdGF0dXM6ZmFsc2VcclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdQT0xJQ0lFU19TVUNDRVNTJyxcclxuICAgICAgICAgICAgICAgIHBvbGljaWVzOiBbXVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogJ0xPQURFUl9TVEFUVVMnLFxyXG4gICAgICAgICAgICAgICAgc3RhdHVzOmZhbHNlXHJcblxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KVxyXG59O1xyXG5leHBvcnQgY29uc3QgZ2V0U3BSZXF1ZXN0cyA9IChwYXJhbXMpID0+IGRpc3BhdGNoID0+IHtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiAnTE9BREVSX1NUQVRVUycsXHJcbiAgICAgICAgc3RhdHVzOnRydWVcclxuXHJcbiAgICB9KTtcclxuICAgIGxldCBzcFJlcURhdGEgPSBob3RlbC5nZXRTcFJlcXVlc3RzKHBhcmFtcyk7XHJcblxyXG4gICAgc3BSZXFEYXRhLnRoZW4oc3BSZXFEYXRhID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6ICdTUF9SRVFfU1VDQ0VTUycsXHJcbiAgICAgICAgICAgIHNwUmVxdWVzdHM6IHNwUmVxRGF0YS5yZXN1bHRzLmRhdGFcclxuICAgICAgICB9KTtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6ICdMT0FERVJfU1RBVFVTJyxcclxuICAgICAgICAgICAgc3RhdHVzOmZhbHNlXHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnU1BfUkVRX1NVQ0NFU1MnLFxyXG4gICAgICAgICAgICAgICAgc3BSZXF1ZXN0czogW11cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdMT0FERVJfU1RBVFVTJyxcclxuICAgICAgICAgICAgICAgIHN0YXR1czpmYWxzZVxyXG5cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSlcclxufTtcclxuIiwibGV0IFdFQl9FTlZJUk9OTUVOVCA9ICdMT0NBTCc7XHJcbmxldCBXRUJfSEFTSF9FTkFCTEVEID0gZmFsc2U7XHJcbmxldCBXRUJfQVBJX1BBVEggPSBcImh0dHBzOi8vdXRoZGV2YXBpLm5ldmVyYmVmb3JlaG9saWRheXMuY29tL1wiO1xyXG5sZXQgV0VCX0lNQUdFX1BBVEggPSBcImh0dHBzOi8vdXRoZGV2Lm5ldmVyYmVmb3JlaG9saWRheXMuY29tL2FkbWluL2Fzc2V0cy91cGxvYWRzL1wiO1xyXG5sZXQgV0VCX0JBU0VfUEFUSCA9IFwiaHR0cHM6Ly91dGhkZXYubmV2ZXJiZWZvcmVob2xpZGF5cy5jb20vXCI7XHJcbmlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcblxyXG4gICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSA9PT0gJ2xvY2FsaG9zdCcpIHtcclxuICAgICAgICBXRUJfRU5WSVJPTk1FTlQgPSAnTE9DQUwnO1xyXG4gICAgICAgIFdFQl9IQVNIX0VOQUJMRUQgPSBmYWxzZVxyXG4gICAgfSBlbHNlIGlmICh3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUgPT09ICd1dGhkZXYubmV2ZXJiZWZvcmVob2xpZGF5cy5jb20nKSB7XHJcbiAgICAgICAgV0VCX0VOVklST05NRU5UID0gJ1NUQUdJTkcnO1xyXG4gICAgICAgIFdFQl9IQVNIX0VOQUJMRUQgPSBmYWxzZTtcclxuICAgIH0gZWxzZSBpZiAod2luZG93LmxvY2F0aW9uLmhvc3RuYW1lID09PSAndXRoaG90ZWxzLmNvbScpIHtcclxuICAgICAgICBXRUJfRU5WSVJPTk1FTlQgPSAnUFJPRFVDVElPTic7XHJcbiAgICAgICAgV0VCX0hBU0hfRU5BQkxFRCA9IGZhbHNlO1xyXG4gICAgICAgIFdFQl9BUElfUEFUSCA9ICdodHRwczovL2FwaS51dGhob3RlbHMuY29tLyc7XHJcbiAgICAgICAgV0VCX0lNQUdFX1BBVEggPSAnaHR0cHM6Ly91dGhob3RlbHMuY29tL2FkbWluL2Fzc2V0cy91cGxvYWRzLyc7XHJcbiAgICB9XHJcbn1cclxuXHJcbldFQl9BUElfUEFUSCA9IFwiaHR0cHM6Ly9hcGkudXRoaG90ZWxzLmNvbS9cIjtcclxuV0VCX0lNQUdFX1BBVEggPSBcImh0dHBzOi8vdXRoaG90ZWxzLmNvbS9hZG1pbi9hc3NldHMvdXBsb2Fkcy9cIjtcclxuV0VCX0JBU0VfUEFUSCA9IFwiaHR0cHM6Ly91dGhob3RlbHMuY29tL1wiO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBFTlZJUk9OTUVOVCA9IFdFQl9FTlZJUk9OTUVOVDtcclxuZXhwb3J0IGNvbnN0IEhBU0hfRU5BQkxFRCA9IFdFQl9IQVNIX0VOQUJMRUQ7XHJcblxyXG5leHBvcnQgY29uc3QgQVBJX1BBVEggPSBXRUJfQVBJX1BBVEg7XHJcbmV4cG9ydCBjb25zdCBJTUFHRV9QQVRIID0gV0VCX0lNQUdFX1BBVEg7XHJcbmV4cG9ydCBjb25zdCBCQVNFX1BBVEggPSBXRUJfQkFTRV9QQVRIO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgX3JvdXRlciA9IHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL3JvdXRlci9yb3V0ZXJcIik7XG52YXIgX3JvdXRlcjEgPSByZXF1aXJlKFwiLi9yb3V0ZXJcIik7XG52YXIgX3VzZUludGVyc2VjdGlvbiA9IHJlcXVpcmUoXCIuL3VzZS1pbnRlcnNlY3Rpb25cIik7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5jb25zdCBwcmVmZXRjaGVkID0ge1xufTtcbmZ1bmN0aW9uIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIG9wdGlvbnMpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgIXJvdXRlcikgcmV0dXJuO1xuICAgIGlmICghKDAsIF9yb3V0ZXIpLmlzTG9jYWxVUkwoaHJlZikpIHJldHVybjtcbiAgICAvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4gICAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAgIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAgIC8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuICAgIHJvdXRlci5wcmVmZXRjaChocmVmLCBhcywgb3B0aW9ucykuY2F0Y2goKGVycik9PntcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IGN1ckxvY2FsZSA9IG9wdGlvbnMgJiYgdHlwZW9mIG9wdGlvbnMubG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IG9wdGlvbnMubG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGU7XG4gICAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhcyArIChjdXJMb2NhbGUgPyAnJScgKyBjdXJMb2NhbGUgOiAnJyldID0gdHJ1ZTtcbn1cbmZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudCkge1xuICAgIGNvbnN0IHsgdGFyZ2V0ICB9ID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICByZXR1cm4gdGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJyB8fCBldmVudC5tZXRhS2V5IHx8IGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQuc2hpZnRLZXkgfHwgZXZlbnQuYWx0S2V5IHx8IGV2ZW50Lm5hdGl2ZUV2ZW50ICYmIGV2ZW50Lm5hdGl2ZUV2ZW50LndoaWNoID09PSAyO1xufVxuZnVuY3Rpb24gbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsLCBsb2NhbGUpIHtcbiAgICBjb25zdCB7IG5vZGVOYW1lICB9ID0gZS5jdXJyZW50VGFyZ2V0O1xuICAgIGlmIChub2RlTmFtZSA9PT0gJ0EnICYmIChpc01vZGlmaWVkRXZlbnQoZSkgfHwgISgwLCBfcm91dGVyKS5pc0xvY2FsVVJMKGhyZWYpKSkge1xuICAgICAgICAvLyBpZ25vcmUgY2xpY2sgZm9yIGJyb3dzZXLigJlzIGRlZmF1bHQgYmVoYXZpb3JcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gICAgaWYgKHNjcm9sbCA9PSBudWxsICYmIGFzLmluZGV4T2YoJyMnKSA+PSAwKSB7XG4gICAgICAgIHNjcm9sbCA9IGZhbHNlO1xuICAgIH1cbiAgICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgICByb3V0ZXJbcmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHtcbiAgICAgICAgc2hhbGxvdyxcbiAgICAgICAgbG9jYWxlLFxuICAgICAgICBzY3JvbGxcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIExpbmsocHJvcHMpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJncykge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcihgRmFpbGVkIHByb3AgdHlwZTogVGhlIHByb3AgXFxgJHthcmdzLmtleX1cXGAgZXhwZWN0cyBhICR7YXJncy5leHBlY3RlZH0gaW4gXFxgPExpbms+XFxgLCBidXQgZ290IFxcYCR7YXJncy5hY3R1YWx9XFxgIGluc3RlYWQuYCArICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IFwiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIiA6ICcnKSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgY29uc3QgcmVxdWlyZWRQcm9wc0d1YXJkID0ge1xuICAgICAgICAgICAgaHJlZjogdHJ1ZVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXF1aXJlZFByb3BzID0gT2JqZWN0LmtleXMocmVxdWlyZWRQcm9wc0d1YXJkKTtcbiAgICAgICAgcmVxdWlyZWRQcm9wcy5mb3JFYWNoKChrZXkpPT57XG4gICAgICAgICAgICBpZiAoa2V5ID09PSAnaHJlZicpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHNba2V5XSA9PSBudWxsIHx8IHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsOiBwcm9wc1trZXldID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHByb3BzW2tleV1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgICAgICAgICBjb25zdCBfID0ga2V5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgY29uc3Qgb3B0aW9uYWxQcm9wc0d1YXJkID0ge1xuICAgICAgICAgICAgYXM6IHRydWUsXG4gICAgICAgICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgICAgICAgc2Nyb2xsOiB0cnVlLFxuICAgICAgICAgICAgc2hhbGxvdzogdHJ1ZSxcbiAgICAgICAgICAgIHBhc3NIcmVmOiB0cnVlLFxuICAgICAgICAgICAgcHJlZmV0Y2g6IHRydWUsXG4gICAgICAgICAgICBsb2NhbGU6IHRydWVcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3Qgb3B0aW9uYWxQcm9wcyA9IE9iamVjdC5rZXlzKG9wdGlvbmFsUHJvcHNHdWFyZCk7XG4gICAgICAgIG9wdGlvbmFsUHJvcHMuZm9yRWFjaCgoa2V5KT0+e1xuICAgICAgICAgICAgY29uc3QgdmFsVHlwZSA9IHR5cGVvZiBwcm9wc1trZXldO1xuICAgICAgICAgICAgaWYgKGtleSA9PT0gJ2FzJykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wc1trZXldICYmIHZhbFR5cGUgIT09ICdzdHJpbmcnICYmIHZhbFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ2xvY2FsZScpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdyZXBsYWNlJyB8fCBrZXkgPT09ICdzY3JvbGwnIHx8IGtleSA9PT0gJ3NoYWxsb3cnIHx8IGtleSA9PT0gJ3Bhc3NIcmVmJyB8fCBrZXkgPT09ICdwcmVmZXRjaCcpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHNba2V5XSAhPSBudWxsICYmIHZhbFR5cGUgIT09ICdib29sZWFuJykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgYm9vbGVhbmAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgICAgICAgICAgY29uc3QgXyA9IGtleTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIC8vIFRoaXMgaG9vayBpcyBpbiBhIGNvbmRpdGlvbmFsIGJ1dCB0aGF0IGlzIG9rIGJlY2F1c2UgYHByb2Nlc3MuZW52Lk5PREVfRU5WYCBuZXZlciBjaGFuZ2VzXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgICAgICBjb25zdCBoYXNXYXJuZWQgPSBfcmVhY3QuZGVmYXVsdC51c2VSZWYoZmFsc2UpO1xuICAgICAgICBpZiAocHJvcHMucHJlZmV0Y2ggJiYgIWhhc1dhcm5lZC5jdXJyZW50KSB7XG4gICAgICAgICAgICBoYXNXYXJuZWQuY3VycmVudCA9IHRydWU7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZTtcbiAgICBjb25zdCByb3V0ZXIgPSAoMCwgX3JvdXRlcjEpLnVzZVJvdXRlcigpO1xuICAgIGNvbnN0IHsgaHJlZiAsIGFzICB9ID0gX3JlYWN0LmRlZmF1bHQudXNlTWVtbygoKT0+e1xuICAgICAgICBjb25zdCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9ICgwLCBfcm91dGVyKS5yZXNvbHZlSHJlZihyb3V0ZXIsIHByb3BzLmhyZWYsIHRydWUpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaHJlZjogcmVzb2x2ZWRIcmVmLFxuICAgICAgICAgICAgYXM6IHByb3BzLmFzID8gKDAsIF9yb3V0ZXIpLnJlc29sdmVIcmVmKHJvdXRlciwgcHJvcHMuYXMpIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWZcbiAgICAgICAgfTtcbiAgICB9LCBbXG4gICAgICAgIHJvdXRlcixcbiAgICAgICAgcHJvcHMuaHJlZixcbiAgICAgICAgcHJvcHMuYXNcbiAgICBdKTtcbiAgICBsZXQgeyBjaGlsZHJlbiAsIHJlcGxhY2UgLCBzaGFsbG93ICwgc2Nyb2xsICwgbG9jYWxlICB9ID0gcHJvcHM7XG4gICAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG4gICAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgY2hpbGRyZW4gPSAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIG51bGwsIGNoaWxkcmVuKTtcbiAgICB9XG4gICAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG4gICAgbGV0IGNoaWxkO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY2hpbGQgPSBfcmVhY3QuZGVmYXVsdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE11bHRpcGxlIGNoaWxkcmVuIHdlcmUgcGFzc2VkIHRvIDxMaW5rPiB3aXRoIFxcYGhyZWZcXGAgb2YgXFxgJHtwcm9wcy5ocmVmfVxcYCBidXQgb25seSBvbmUgY2hpbGQgaXMgc3VwcG9ydGVkIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2xpbmstbXVsdGlwbGUtY2hpbGRyZW5gICsgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gXCIgXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIiA6ICcnKSk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBjaGlsZCA9IF9yZWFjdC5kZWZhdWx0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO1xuICAgIH1cbiAgICBjb25zdCBjaGlsZFJlZiA9IGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmO1xuICAgIGNvbnN0IFtzZXRJbnRlcnNlY3Rpb25SZWYsIGlzVmlzaWJsZV0gPSAoMCwgX3VzZUludGVyc2VjdGlvbikudXNlSW50ZXJzZWN0aW9uKHtcbiAgICAgICAgcm9vdE1hcmdpbjogJzIwMHB4J1xuICAgIH0pO1xuICAgIGNvbnN0IHNldFJlZiA9IF9yZWFjdC5kZWZhdWx0LnVzZUNhbGxiYWNrKChlbCk9PntcbiAgICAgICAgc2V0SW50ZXJzZWN0aW9uUmVmKGVsKTtcbiAgICAgICAgaWYgKGNoaWxkUmVmKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGNoaWxkUmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZFJlZihlbCk7XG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgY2hpbGRSZWYuY3VycmVudCA9IGVsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgW1xuICAgICAgICBjaGlsZFJlZixcbiAgICAgICAgc2V0SW50ZXJzZWN0aW9uUmVmXG4gICAgXSk7XG4gICAgX3JlYWN0LmRlZmF1bHQudXNlRWZmZWN0KCgpPT57XG4gICAgICAgIGNvbnN0IHNob3VsZFByZWZldGNoID0gaXNWaXNpYmxlICYmIHAgJiYgKDAsIF9yb3V0ZXIpLmlzTG9jYWxVUkwoaHJlZik7XG4gICAgICAgIGNvbnN0IGN1ckxvY2FsZSA9IHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGU7XG4gICAgICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9IHByZWZldGNoZWRbaHJlZiArICclJyArIGFzICsgKGN1ckxvY2FsZSA/ICclJyArIGN1ckxvY2FsZSA6ICcnKV07XG4gICAgICAgIGlmIChzaG91bGRQcmVmZXRjaCAmJiAhaXNQcmVmZXRjaGVkKSB7XG4gICAgICAgICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7XG4gICAgICAgICAgICAgICAgbG9jYWxlOiBjdXJMb2NhbGVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwgW1xuICAgICAgICBhcyxcbiAgICAgICAgaHJlZixcbiAgICAgICAgaXNWaXNpYmxlLFxuICAgICAgICBsb2NhbGUsXG4gICAgICAgIHAsXG4gICAgICAgIHJvdXRlclxuICAgIF0pO1xuICAgIGNvbnN0IGNoaWxkUHJvcHMgPSB7XG4gICAgICAgIHJlZjogc2V0UmVmLFxuICAgICAgICBvbkNsaWNrOiAoZSk9PntcbiAgICAgICAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICAgICAgICAgIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCwgbG9jYWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgY2hpbGRQcm9wcy5vbk1vdXNlRW50ZXIgPSAoZSk9PntcbiAgICAgICAgaWYgKCEoMCwgX3JvdXRlcikuaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuO1xuICAgICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpO1xuICAgICAgICB9XG4gICAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHtcbiAgICAgICAgICAgIHByaW9yaXR5OiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gICAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gICAgaWYgKHByb3BzLnBhc3NIcmVmIHx8IGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpIHtcbiAgICAgICAgY29uc3QgY3VyTG9jYWxlID0gdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZTtcbiAgICAgICAgLy8gd2Ugb25seSByZW5kZXIgZG9tYWluIGxvY2FsZXMgaWYgd2UgYXJlIGN1cnJlbnRseSBvbiBhIGRvbWFpbiBsb2NhbGVcbiAgICAgICAgLy8gc28gdGhhdCBsb2NhbGUgbGlua3MgYXJlIHN0aWxsIHZpc2l0YWJsZSBpbiBkZXZlbG9wbWVudC9wcmV2aWV3IGVudnNcbiAgICAgICAgY29uc3QgbG9jYWxlRG9tYWluID0gcm91dGVyICYmIHJvdXRlci5pc0xvY2FsZURvbWFpbiAmJiAoMCwgX3JvdXRlcikuZ2V0RG9tYWluTG9jYWxlKGFzLCBjdXJMb2NhbGUsIHJvdXRlciAmJiByb3V0ZXIubG9jYWxlcywgcm91dGVyICYmIHJvdXRlci5kb21haW5Mb2NhbGVzKTtcbiAgICAgICAgY2hpbGRQcm9wcy5ocmVmID0gbG9jYWxlRG9tYWluIHx8ICgwLCBfcm91dGVyKS5hZGRCYXNlUGF0aCgoMCwgX3JvdXRlcikuYWRkTG9jYWxlKGFzLCBjdXJMb2NhbGUsIHJvdXRlciAmJiByb3V0ZXIuZGVmYXVsdExvY2FsZSkpO1xuICAgIH1cbiAgICByZXR1cm4oLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jbG9uZUVsZW1lbnQoY2hpbGQsIGNoaWxkUHJvcHMpKTtcbn1cbnZhciBfZGVmYXVsdCA9IExpbms7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bGluay5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2ggPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaDtcbmV4cG9ydHMubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSB2b2lkIDA7XG5mdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKSB7XG4gICAgcmV0dXJuIHBhdGguZW5kc1dpdGgoJy8nKSAmJiBwYXRoICE9PSAnLycgPyBwYXRoLnNsaWNlKDAsIC0xKSA6IHBhdGg7XG59XG5jb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSCA/IChwYXRoKT0+e1xuICAgIGlmICgvXFwuW14vXStcXC8/JC8udGVzdChwYXRoKSkge1xuICAgICAgICByZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aCk7XG4gICAgfSBlbHNlIGlmIChwYXRoLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhdGggKyAnLyc7XG4gICAgfVxufSA6IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoO1xuZXhwb3J0cy5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1ub3JtYWxpemUtdHJhaWxpbmctc2xhc2guanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnJlcXVlc3RJZGxlQ2FsbGJhY2sgPSBleHBvcnRzLmNhbmNlbElkbGVDYWxsYmFjayA9IHZvaWQgMDtcbmNvbnN0IHJlcXVlc3RJZGxlQ2FsbGJhY2sgPSB0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrICYmIHNlbGYucmVxdWVzdElkbGVDYWxsYmFjay5iaW5kKHdpbmRvdykgfHwgZnVuY3Rpb24oY2IpIHtcbiAgICBsZXQgc3RhcnQgPSBEYXRlLm5vdygpO1xuICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBjYih7XG4gICAgICAgICAgICBkaWRUaW1lb3V0OiBmYWxzZSxcbiAgICAgICAgICAgIHRpbWVSZW1haW5pbmc6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBNYXRoLm1heCgwLCA1MCAtIChEYXRlLm5vdygpIC0gc3RhcnQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSwgMSk7XG59O1xuZXhwb3J0cy5yZXF1ZXN0SWRsZUNhbGxiYWNrID0gcmVxdWVzdElkbGVDYWxsYmFjaztcbmNvbnN0IGNhbmNlbElkbGVDYWxsYmFjayA9IHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLmNhbmNlbElkbGVDYWxsYmFjayAmJiBzZWxmLmNhbmNlbElkbGVDYWxsYmFjay5iaW5kKHdpbmRvdykgfHwgZnVuY3Rpb24oaWQpIHtcbiAgICByZXR1cm4gY2xlYXJUaW1lb3V0KGlkKTtcbn07XG5leHBvcnRzLmNhbmNlbElkbGVDYWxsYmFjayA9IGNhbmNlbElkbGVDYWxsYmFjaztcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVxdWVzdC1pZGxlLWNhbGxiYWNrLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5tYXJrQXNzZXRFcnJvciA9IG1hcmtBc3NldEVycm9yO1xuZXhwb3J0cy5pc0Fzc2V0RXJyb3IgPSBpc0Fzc2V0RXJyb3I7XG5leHBvcnRzLmdldENsaWVudEJ1aWxkTWFuaWZlc3QgPSBnZXRDbGllbnRCdWlsZE1hbmlmZXN0O1xuZXhwb3J0cy5jcmVhdGVSb3V0ZUxvYWRlciA9IGNyZWF0ZVJvdXRlTG9hZGVyO1xudmFyIF9nZXRBc3NldFBhdGhGcm9tUm91dGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlXCIpKTtcbnZhciBfcmVxdWVzdElkbGVDYWxsYmFjayA9IHJlcXVpcmUoXCIuL3JlcXVlc3QtaWRsZS1jYWxsYmFja1wiKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbi8vIDMuOHMgd2FzIGFyYml0cmFyaWx5IGNob3NlbiBhcyBpdCdzIHdoYXQgaHR0cHM6Ly93ZWIuZGV2L2ludGVyYWN0aXZlXG4vLyBjb25zaWRlcnMgYXMgXCJHb29kXCIgdGltZS10by1pbnRlcmFjdGl2ZS4gV2UgbXVzdCBhc3N1bWUgc29tZXRoaW5nIHdlbnRcbi8vIHdyb25nIGJleW9uZCB0aGlzIHBvaW50LCBhbmQgdGhlbiBmYWxsLWJhY2sgdG8gYSBmdWxsIHBhZ2UgdHJhbnNpdGlvbiB0b1xuLy8gc2hvdyB0aGUgdXNlciBzb21ldGhpbmcgb2YgdmFsdWUuXG5jb25zdCBNU19NQVhfSURMRV9ERUxBWSA9IDM4MDA7XG5mdW5jdGlvbiB3aXRoRnV0dXJlKGtleSwgbWFwLCBnZW5lcmF0b3IpIHtcbiAgICBsZXQgZW50cnkgPSBtYXAuZ2V0KGtleSk7XG4gICAgaWYgKGVudHJ5KSB7XG4gICAgICAgIGlmICgnZnV0dXJlJyBpbiBlbnRyeSkge1xuICAgICAgICAgICAgcmV0dXJuIGVudHJ5LmZ1dHVyZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGVudHJ5KTtcbiAgICB9XG4gICAgbGV0IHJlc29sdmVyO1xuICAgIGNvbnN0IHByb20gPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSk9PntcbiAgICAgICAgcmVzb2x2ZXIgPSByZXNvbHZlO1xuICAgIH0pO1xuICAgIG1hcC5zZXQoa2V5LCBlbnRyeSA9IHtcbiAgICAgICAgcmVzb2x2ZTogcmVzb2x2ZXIsXG4gICAgICAgIGZ1dHVyZTogcHJvbVxuICAgIH0pO1xuICAgIHJldHVybiBnZW5lcmF0b3IgPyBnZW5lcmF0b3IoKS50aGVuKCh2YWx1ZSk9PihyZXNvbHZlcih2YWx1ZSksIHZhbHVlKVxuICAgICkgOiBwcm9tO1xufVxuZnVuY3Rpb24gaGFzUHJlZmV0Y2gobGluaykge1xuICAgIHRyeSB7XG4gICAgICAgIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG4gICAgICAgIHJldHVybigvLyBkZXRlY3QgSUUxMSBzaW5jZSBpdCBzdXBwb3J0cyBwcmVmZXRjaCBidXQgaXNuJ3QgZGV0ZWN0ZWRcbiAgICAgICAgLy8gd2l0aCByZWxMaXN0LnN1cHBvcnRcbiAgICAgICAgKCEhd2luZG93Lk1TSW5wdXRNZXRob2RDb250ZXh0ICYmICEhZG9jdW1lbnQuZG9jdW1lbnRNb2RlKSB8fCBsaW5rLnJlbExpc3Quc3VwcG9ydHMoJ3ByZWZldGNoJykpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbmNvbnN0IGNhblByZWZldGNoID0gaGFzUHJlZmV0Y2goKTtcbmZ1bmN0aW9uIHByZWZldGNoVmlhRG9tKGhyZWYsIGFzLCBsaW5rKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMsIHJlaik9PntcbiAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxpbmtbcmVsPVwicHJlZmV0Y2hcIl1baHJlZl49XCIke2hyZWZ9XCJdYCkpIHtcbiAgICAgICAgICAgIHJldHVybiByZXMoKTtcbiAgICAgICAgfVxuICAgICAgICBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuICAgICAgICAvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsOlxuICAgICAgICBpZiAoYXMpIGxpbmsuYXMgPSBhcztcbiAgICAgICAgbGluay5yZWwgPSBgcHJlZmV0Y2hgO1xuICAgICAgICBsaW5rLmNyb3NzT3JpZ2luID0gcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTjtcbiAgICAgICAgbGluay5vbmxvYWQgPSByZXM7XG4gICAgICAgIGxpbmsub25lcnJvciA9IHJlajtcbiAgICAgICAgLy8gYGhyZWZgIHNob3VsZCBhbHdheXMgYmUgbGFzdDpcbiAgICAgICAgbGluay5ocmVmID0gaHJlZjtcbiAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICB9KTtcbn1cbmNvbnN0IEFTU0VUX0xPQURfRVJST1IgPSBTeW1ib2woJ0FTU0VUX0xPQURfRVJST1InKTtcbmZ1bmN0aW9uIG1hcmtBc3NldEVycm9yKGVycikge1xuICAgIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyLCBBU1NFVF9MT0FEX0VSUk9SLCB7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBpc0Fzc2V0RXJyb3IoZXJyKSB7XG4gICAgcmV0dXJuIGVyciAmJiBBU1NFVF9MT0FEX0VSUk9SIGluIGVycjtcbn1cbmZ1bmN0aW9uIGFwcGVuZFNjcmlwdChzcmMsIHNjcmlwdCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KT0+e1xuICAgICAgICBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgLy8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbC5cbiAgICAgICAgLy8gMS4gU2V0dXAgc3VjY2Vzcy9mYWlsdXJlIGhvb2tzIGluIGNhc2UgdGhlIGJyb3dzZXIgc3luY2hyb25vdXNseVxuICAgICAgICAvLyAgICBleGVjdXRlcyB3aGVuIGBzcmNgIGlzIHNldC5cbiAgICAgICAgc2NyaXB0Lm9ubG9hZCA9IHJlc29sdmU7XG4gICAgICAgIHNjcmlwdC5vbmVycm9yID0gKCk9PnJlamVjdChtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHNjcmlwdDogJHtzcmN9YCkpKVxuICAgICAgICA7XG4gICAgICAgIC8vIDIuIENvbmZpZ3VyZSB0aGUgY3Jvc3Mtb3JpZ2luIGF0dHJpYnV0ZSBiZWZvcmUgc2V0dGluZyBgc3JjYCBpbiBjYXNlIHRoZVxuICAgICAgICAvLyAgICBicm93c2VyIGJlZ2lucyB0byBmZXRjaC5cbiAgICAgICAgc2NyaXB0LmNyb3NzT3JpZ2luID0gcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTjtcbiAgICAgICAgLy8gMy4gRmluYWxseSwgc2V0IHRoZSBzb3VyY2UgYW5kIGluamVjdCBpbnRvIHRoZSBET00gaW4gY2FzZSB0aGUgY2hpbGRcbiAgICAgICAgLy8gICAgbXVzdCBiZSBhcHBlbmRlZCBmb3IgZmV0Y2hpbmcgdG8gc3RhcnQuXG4gICAgICAgIHNjcmlwdC5zcmMgPSBzcmM7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICB9KTtcbn1cbi8vIFdlIHdhaXQgZm9yIHBhZ2VzIHRvIGJlIGJ1aWx0IGluIGRldiBiZWZvcmUgd2Ugc3RhcnQgdGhlIHJvdXRlIHRyYW5zaXRpb25cbi8vIHRpbWVvdXQgdG8gcHJldmVudCBhbiB1bi1uZWNlc3NhcnkgaGFyZCBuYXZpZ2F0aW9uIGluIGRldmVsb3BtZW50LlxubGV0IGRldkJ1aWxkUHJvbWlzZTtcbi8vIFJlc29sdmUgYSBwcm9taXNlIHRoYXQgdGltZXMgb3V0IGFmdGVyIGdpdmVuIGFtb3VudCBvZiBtaWxsaXNlY29uZHMuXG5mdW5jdGlvbiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KHAsIG1zLCBlcnIpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCk9PntcbiAgICAgICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlO1xuICAgICAgICBwLnRoZW4oKHIpPT57XG4gICAgICAgICAgICAvLyBSZXNvbHZlZCwgY2FuY2VsIHRoZSB0aW1lb3V0XG4gICAgICAgICAgICBjYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmVzb2x2ZShyKTtcbiAgICAgICAgfSkuY2F0Y2gocmVqZWN0KTtcbiAgICAgICAgLy8gV2Ugd3JhcCB0aGVzZSBjaGVja3Mgc2VwYXJhdGVseSBmb3IgYmV0dGVyIGRlYWQtY29kZSBlbGltaW5hdGlvbiBpblxuICAgICAgICAvLyBwcm9kdWN0aW9uIGJ1bmRsZXMuXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICAgICAgKGRldkJ1aWxkUHJvbWlzZSB8fCBQcm9taXNlLnJlc29sdmUoKSkudGhlbigoKT0+e1xuICAgICAgICAgICAgICAgICgwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykucmVxdWVzdElkbGVDYWxsYmFjaygoKT0+c2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSwgbXMpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICAgICAgKDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5yZXF1ZXN0SWRsZUNhbGxiYWNrKCgpPT5zZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICAgICAgICAgIGlmICghY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIG1zKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZnVuY3Rpb24gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpIHtcbiAgICBpZiAoc2VsZi5fX0JVSUxEX01BTklGRVNUKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKTtcbiAgICB9XG4gICAgY29uc3Qgb25CdWlsZE1hbmlmZXN0ID0gbmV3IFByb21pc2UoKHJlc29sdmUpPT57XG4gICAgICAgIC8vIE1hbmRhdG9yeSBiZWNhdXNlIHRoaXMgaXMgbm90IGNvbmN1cnJlbnQgc2FmZTpcbiAgICAgICAgY29uc3QgY2IgPSBzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0I7XG4gICAgICAgIHNlbGYuX19CVUlMRF9NQU5JRkVTVF9DQiA9ICgpPT57XG4gICAgICAgICAgICByZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVCk7XG4gICAgICAgICAgICBjYiAmJiBjYigpO1xuICAgICAgICB9O1xuICAgIH0pO1xuICAgIHJldHVybiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KG9uQnVpbGRNYW5pZmVzdCwgTVNfTUFYX0lETEVfREVMQVksIG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcignRmFpbGVkIHRvIGxvYWQgY2xpZW50IGJ1aWxkIG1hbmlmZXN0JykpKTtcbn1cbmZ1bmN0aW9uIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoe1xuICAgICAgICAgICAgc2NyaXB0czogW1xuICAgICAgICAgICAgICAgIGFzc2V0UHJlZml4ICsgJy9fbmV4dC9zdGF0aWMvY2h1bmtzL3BhZ2VzJyArIGVuY29kZVVSSSgoMCwgX2dldEFzc2V0UGF0aEZyb21Sb3V0ZSkuZGVmYXVsdChyb3V0ZSwgJy5qcycpKSwgXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgLy8gU3R5bGVzIGFyZSBoYW5kbGVkIGJ5IGBzdHlsZS1sb2FkZXJgIGluIGRldmVsb3BtZW50OlxuICAgICAgICAgICAgY3NzOiBbXVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKS50aGVuKChtYW5pZmVzdCk9PntcbiAgICAgICAgaWYgKCEocm91dGUgaW4gbWFuaWZlc3QpKSB7XG4gICAgICAgICAgICB0aHJvdyBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb29rdXAgcm91dGU6ICR7cm91dGV9YCkpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFsbEZpbGVzID0gbWFuaWZlc3Rbcm91dGVdLm1hcCgoZW50cnkpPT5hc3NldFByZWZpeCArICcvX25leHQvJyArIGVuY29kZVVSSShlbnRyeSlcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNjcmlwdHM6IGFsbEZpbGVzLmZpbHRlcigodik9PnYuZW5kc1dpdGgoJy5qcycpXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgY3NzOiBhbGxGaWxlcy5maWx0ZXIoKHYpPT52LmVuZHNXaXRoKCcuY3NzJylcbiAgICAgICAgICAgIClcbiAgICAgICAgfTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVJvdXRlTG9hZGVyKGFzc2V0UHJlZml4KSB7XG4gICAgY29uc3QgZW50cnlwb2ludHMgPSBuZXcgTWFwKCk7XG4gICAgY29uc3QgbG9hZGVkU2NyaXB0cyA9IG5ldyBNYXAoKTtcbiAgICBjb25zdCBzdHlsZVNoZWV0cyA9IG5ldyBNYXAoKTtcbiAgICBjb25zdCByb3V0ZXMgPSBuZXcgTWFwKCk7XG4gICAgZnVuY3Rpb24gbWF5YmVFeGVjdXRlU2NyaXB0KHNyYykge1xuICAgICAgICBsZXQgcHJvbSA9IGxvYWRlZFNjcmlwdHMuZ2V0KHNyYyk7XG4gICAgICAgIGlmIChwcm9tKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvbTtcbiAgICAgICAgfVxuICAgICAgICAvLyBTa2lwIGV4ZWN1dGluZyBzY3JpcHQgaWYgaXQncyBhbHJlYWR5IGluIHRoZSBET006XG4gICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBzY3JpcHRbc3JjXj1cIiR7c3JjfVwiXWApKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgbG9hZGVkU2NyaXB0cy5zZXQoc3JjLCBwcm9tID0gYXBwZW5kU2NyaXB0KHNyYykpO1xuICAgICAgICByZXR1cm4gcHJvbTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZmV0Y2hTdHlsZVNoZWV0KGhyZWYpIHtcbiAgICAgICAgbGV0IHByb20gPSBzdHlsZVNoZWV0cy5nZXQoaHJlZik7XG4gICAgICAgIGlmIChwcm9tKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvbTtcbiAgICAgICAgfVxuICAgICAgICBzdHlsZVNoZWV0cy5zZXQoaHJlZiwgcHJvbSA9IGZldGNoKGhyZWYpLnRoZW4oKHJlcyk9PntcbiAgICAgICAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdHlsZXNoZWV0OiAke2hyZWZ9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzLnRleHQoKS50aGVuKCh0ZXh0KT0+KHtcbiAgICAgICAgICAgICAgICAgICAgaHJlZjogaHJlZixcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogdGV4dFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICB9KS5jYXRjaCgoZXJyKT0+e1xuICAgICAgICAgICAgdGhyb3cgbWFya0Fzc2V0RXJyb3IoZXJyKTtcbiAgICAgICAgfSkpO1xuICAgICAgICByZXR1cm4gcHJvbTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgd2hlbkVudHJ5cG9pbnQgKHJvdXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gd2l0aEZ1dHVyZShyb3V0ZSwgZW50cnlwb2ludHMpO1xuICAgICAgICB9LFxuICAgICAgICBvbkVudHJ5cG9pbnQgKHJvdXRlLCBleGVjdXRlKSB7XG4gICAgICAgICAgICBQcm9taXNlLnJlc29sdmUoZXhlY3V0ZSkudGhlbigoZm4pPT5mbigpXG4gICAgICAgICAgICApLnRoZW4oKGV4cG9ydHMpPT4oe1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ6IGV4cG9ydHMgJiYgZXhwb3J0cy5kZWZhdWx0IHx8IGV4cG9ydHMsXG4gICAgICAgICAgICAgICAgICAgIGV4cG9ydHM6IGV4cG9ydHNcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgLCAoZXJyKT0+KHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGVyclxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApLnRoZW4oKGlucHV0KT0+e1xuICAgICAgICAgICAgICAgIGNvbnN0IG9sZCA9IGVudHJ5cG9pbnRzLmdldChyb3V0ZSk7XG4gICAgICAgICAgICAgICAgZW50cnlwb2ludHMuc2V0KHJvdXRlLCBpbnB1dCk7XG4gICAgICAgICAgICAgICAgaWYgKG9sZCAmJiAncmVzb2x2ZScgaW4gb2xkKSBvbGQucmVzb2x2ZShpbnB1dCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgbG9hZFJvdXRlIChyb3V0ZSwgcHJlZmV0Y2gpIHtcbiAgICAgICAgICAgIHJldHVybiB3aXRoRnV0dXJlKHJvdXRlLCByb3V0ZXMsICgpPT57XG4gICAgICAgICAgICAgICAgY29uc3Qgcm91dGVGaWxlc1Byb21pc2UgPSBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSkudGhlbigoeyBzY3JpcHRzICwgY3NzICB9KT0+e1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgICAgICAgICAgICAgZW50cnlwb2ludHMuaGFzKHJvdXRlKSA/IFtdIDogUHJvbWlzZS5hbGwoc2NyaXB0cy5tYXAobWF5YmVFeGVjdXRlU2NyaXB0KSksXG4gICAgICAgICAgICAgICAgICAgICAgICBQcm9taXNlLmFsbChjc3MubWFwKGZldGNoU3R5bGVTaGVldCkpLCBcbiAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICAgICAgfSkudGhlbigocmVzKT0+e1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy53aGVuRW50cnlwb2ludChyb3V0ZSkudGhlbigoZW50cnlwb2ludCk9Pih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50cnlwb2ludCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZXM6IHJlc1sxXVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgICAgICAgICAgICAgZGV2QnVpbGRQcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocm91dGVGaWxlc1Byb21pc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcm91dGVGaWxlc1Byb21pc2UuZmluYWxseSgoKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChyb3V0ZUZpbGVzUHJvbWlzZSwgTVNfTUFYX0lETEVfREVMQVksIG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgUm91dGUgZGlkIG5vdCBjb21wbGV0ZSBsb2FkaW5nOiAke3JvdXRlfWApKSkudGhlbigoeyBlbnRyeXBvaW50ICwgc3R5bGVzICB9KT0+e1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlczogc3R5bGVzXG4gICAgICAgICAgICAgICAgICAgIH0sIGVudHJ5cG9pbnQpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ2Vycm9yJyBpbiBlbnRyeXBvaW50ID8gZW50cnlwb2ludCA6IHJlcztcbiAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZXJyKT0+e1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJlZmV0Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdlIGRvbid0IHdhbnQgdG8gY2FjaGUgZXJyb3JzIGR1cmluZyBwcmVmZXRjaFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogZXJyXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgcHJlZmV0Y2ggKHJvdXRlKSB7XG4gICAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lTGFicy9xdWlja2xpbmsvYmxvYi80NTNhNjYxZmExZmE5NDBlMmQyZTA0NDQ1MjM5OGUzOGM2N2E5OGZiL3NyYy9pbmRleC5tanMjTDExNS1MMTE4XG4gICAgICAgICAgICAvLyBMaWNlbnNlOiBBcGFjaGUgMi4wXG4gICAgICAgICAgICBsZXQgY247XG4gICAgICAgICAgICBpZiAoY24gPSBuYXZpZ2F0b3IuY29ubmVjdGlvbikge1xuICAgICAgICAgICAgICAgIC8vIERvbid0IHByZWZldGNoIGlmIHVzaW5nIDJHIG9yIGlmIFNhdmUtRGF0YSBpcyBlbmFibGVkLlxuICAgICAgICAgICAgICAgIGlmIChjbi5zYXZlRGF0YSB8fCAvMmcvLnRlc3QoY24uZWZmZWN0aXZlVHlwZSkpIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSkudGhlbigob3V0cHV0KT0+UHJvbWlzZS5hbGwoY2FuUHJlZmV0Y2ggPyBvdXRwdXQuc2NyaXB0cy5tYXAoKHNjcmlwdCk9PnByZWZldGNoVmlhRG9tKHNjcmlwdCwgJ3NjcmlwdCcpXG4gICAgICAgICAgICAgICAgKSA6IFtdKVxuICAgICAgICAgICAgKS50aGVuKCgpPT57XG4gICAgICAgICAgICAgICAgKDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5yZXF1ZXN0SWRsZUNhbGxiYWNrKCgpPT50aGlzLmxvYWRSb3V0ZShyb3V0ZSwgdHJ1ZSkuY2F0Y2goKCk9PntcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSkuY2F0Y2goLy8gc3dhbGxvdyBwcmVmZXRjaCBlcnJvcnNcbiAgICAgICAgICAgICgpPT57XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlLWxvYWRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlJvdXRlclwiLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX3JvdXRlci5kZWZhdWx0O1xuICAgIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwid2l0aFJvdXRlclwiLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX3dpdGhSb3V0ZXIuZGVmYXVsdDtcbiAgICB9XG59KTtcbmV4cG9ydHMudXNlUm91dGVyID0gdXNlUm91dGVyO1xuZXhwb3J0cy5jcmVhdGVSb3V0ZXIgPSBjcmVhdGVSb3V0ZXI7XG5leHBvcnRzLm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZSA9IG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgX3JvdXRlciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL3NoYXJlZC9saWIvcm91dGVyL3JvdXRlclwiKSk7XG52YXIgX3JvdXRlckNvbnRleHQgPSByZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi9yb3V0ZXItY29udGV4dFwiKTtcbnZhciBfd2l0aFJvdXRlciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vd2l0aC1yb3V0ZXJcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuY29uc3Qgc2luZ2xldG9uUm91dGVyID0ge1xuICAgIHJvdXRlcjogbnVsbCxcbiAgICByZWFkeUNhbGxiYWNrczogW10sXG4gICAgcmVhZHkgKGNiKSB7XG4gICAgICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKCk7XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgICAncGF0aG5hbWUnLFxuICAgICdyb3V0ZScsXG4gICAgJ3F1ZXJ5JyxcbiAgICAnYXNQYXRoJyxcbiAgICAnY29tcG9uZW50cycsXG4gICAgJ2lzRmFsbGJhY2snLFxuICAgICdiYXNlUGF0aCcsXG4gICAgJ2xvY2FsZScsXG4gICAgJ2xvY2FsZXMnLFxuICAgICdkZWZhdWx0TG9jYWxlJyxcbiAgICAnaXNSZWFkeScsXG4gICAgJ2lzUHJldmlldycsXG4gICAgJ2lzTG9jYWxlRG9tYWluJyxcbiAgICAnZG9tYWluTG9jYWxlcycsIFxuXTtcbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICAgJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLFxuICAgICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICAgJ2hhc2hDaGFuZ2VTdGFydCcsXG4gICAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIFxuXTtcbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICAgJ3B1c2gnLFxuICAgICdyZXBsYWNlJyxcbiAgICAncmVsb2FkJyxcbiAgICAnYmFjaycsXG4gICAgJ3ByZWZldGNoJyxcbiAgICAnYmVmb3JlUG9wU3RhdGUnLCBcbl07XG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICAgIGdldCAoKSB7XG4gICAgICAgIHJldHVybiBfcm91dGVyLmRlZmF1bHQuZXZlbnRzO1xuICAgIH1cbn0pO1xudXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaCgoZmllbGQpPT57XG4gICAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSB3ZSBuZWVkIHRvIHJldHVyblxuICAgIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAgIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAgIC8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICAgICAgZ2V0ICgpIHtcbiAgICAgICAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpO1xuICAgICAgICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF07XG4gICAgICAgIH1cbiAgICB9KTtcbn0pO1xuY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCk9PntcbiAgICBzaW5nbGV0b25Sb3V0ZXJbZmllbGRdID0gKC4uLmFyZ3MpPT57XG4gICAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpO1xuICAgICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKTtcbiAgICB9O1xufSk7XG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQpPT57XG4gICAgc2luZ2xldG9uUm91dGVyLnJlYWR5KCgpPT57XG4gICAgICAgIF9yb3V0ZXIuZGVmYXVsdC5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKT0+e1xuICAgICAgICAgICAgY29uc3QgZXZlbnRGaWVsZCA9IGBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoMSl9YDtcbiAgICAgICAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXI7XG4gICAgICAgICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncyk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn0pO1xuZnVuY3Rpb24gZ2V0Um91dGVyKCkge1xuICAgIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICsgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIG9uIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyO1xufVxudmFyIF9kZWZhdWx0ID0gc2luZ2xldG9uUm91dGVyO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5mdW5jdGlvbiB1c2VSb3V0ZXIoKSB7XG4gICAgcmV0dXJuIF9yZWFjdC5kZWZhdWx0LnVzZUNvbnRleHQoX3JvdXRlckNvbnRleHQuUm91dGVyQ29udGV4dCk7XG59XG5mdW5jdGlvbiBjcmVhdGVSb3V0ZXIoLi4uYXJncykge1xuICAgIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgX3JvdXRlci5kZWZhdWx0KC4uLmFyZ3MpO1xuICAgIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYik9PmNiKClcbiAgICApO1xuICAgIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcyA9IFtdO1xuICAgIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyO1xufVxuZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcikge1xuICAgIGNvbnN0IF9yb3V0ZXIxID0gcm91dGVyO1xuICAgIGNvbnN0IGluc3RhbmNlID0ge1xuICAgIH07XG4gICAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcyl7XG4gICAgICAgIGlmICh0eXBlb2YgX3JvdXRlcjFbcHJvcGVydHldID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gT2JqZWN0LmFzc2lnbihBcnJheS5pc0FycmF5KF9yb3V0ZXIxW3Byb3BlcnR5XSkgPyBbXSA6IHtcbiAgICAgICAgICAgIH0sIF9yb3V0ZXIxW3Byb3BlcnR5XSkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXIxW3Byb3BlcnR5XTtcbiAgICB9XG4gICAgLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuICAgIGluc3RhbmNlLmV2ZW50cyA9IF9yb3V0ZXIuZGVmYXVsdC5ldmVudHM7XG4gICAgY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCk9PntcbiAgICAgICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3MpPT57XG4gICAgICAgICAgICByZXR1cm4gX3JvdXRlcjFbZmllbGRdKC4uLmFyZ3MpO1xuICAgICAgICB9O1xuICAgIH0pO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy51c2VJbnRlcnNlY3Rpb24gPSB1c2VJbnRlcnNlY3Rpb247XG52YXIgX3JlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xudmFyIF9yZXF1ZXN0SWRsZUNhbGxiYWNrID0gcmVxdWlyZShcIi4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrXCIpO1xuY29uc3QgaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSB0eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnO1xuZnVuY3Rpb24gdXNlSW50ZXJzZWN0aW9uKHsgcm9vdE1hcmdpbiAsIGRpc2FibGVkICB9KSB7XG4gICAgY29uc3QgaXNEaXNhYmxlZCA9IGRpc2FibGVkIHx8ICFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcjtcbiAgICBjb25zdCB1bm9ic2VydmUgPSAoMCwgX3JlYWN0KS51c2VSZWYoKTtcbiAgICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSAoMCwgX3JlYWN0KS51c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3Qgc2V0UmVmID0gKDAsIF9yZWFjdCkudXNlQ2FsbGJhY2soKGVsKT0+e1xuICAgICAgICBpZiAodW5vYnNlcnZlLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50KCk7XG4gICAgICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNEaXNhYmxlZCB8fCB2aXNpYmxlKSByZXR1cm47XG4gICAgICAgIGlmIChlbCAmJiBlbC50YWdOYW1lKSB7XG4gICAgICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IG9ic2VydmUoZWwsIChpc1Zpc2libGUpPT5pc1Zpc2libGUgJiYgc2V0VmlzaWJsZShpc1Zpc2libGUpXG4gICAgICAgICAgICAsIHtcbiAgICAgICAgICAgICAgICByb290TWFyZ2luXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIFtcbiAgICAgICAgaXNEaXNhYmxlZCxcbiAgICAgICAgcm9vdE1hcmdpbixcbiAgICAgICAgdmlzaWJsZVxuICAgIF0pO1xuICAgICgwLCBfcmVhY3QpLnVzZUVmZmVjdCgoKT0+e1xuICAgICAgICBpZiAoIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgICAgICAgICBpZiAoIXZpc2libGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpZGxlQ2FsbGJhY2sgPSAoMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLnJlcXVlc3RJZGxlQ2FsbGJhY2soKCk9PnNldFZpc2libGUodHJ1ZSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHJldHVybiAoKT0+KDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5jYW5jZWxJZGxlQ2FsbGJhY2soaWRsZUNhbGxiYWNrKVxuICAgICAgICAgICAgICAgIDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIFtcbiAgICAgICAgdmlzaWJsZVxuICAgIF0pO1xuICAgIHJldHVybiBbXG4gICAgICAgIHNldFJlZixcbiAgICAgICAgdmlzaWJsZVxuICAgIF07XG59XG5mdW5jdGlvbiBvYnNlcnZlKGVsZW1lbnQsIGNhbGxiYWNrLCBvcHRpb25zKSB7XG4gICAgY29uc3QgeyBpZCAsIG9ic2VydmVyICwgZWxlbWVudHMgIH0gPSBjcmVhdGVPYnNlcnZlcihvcHRpb25zKTtcbiAgICBlbGVtZW50cy5zZXQoZWxlbWVudCwgY2FsbGJhY2spO1xuICAgIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudCk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIHVub2JzZXJ2ZSgpIHtcbiAgICAgICAgZWxlbWVudHMuZGVsZXRlKGVsZW1lbnQpO1xuICAgICAgICBvYnNlcnZlci51bm9ic2VydmUoZWxlbWVudCk7XG4gICAgICAgIC8vIERlc3Ryb3kgb2JzZXJ2ZXIgd2hlbiB0aGVyZSdzIG5vdGhpbmcgbGVmdCB0byB3YXRjaDpcbiAgICAgICAgaWYgKGVsZW1lbnRzLnNpemUgPT09IDApIHtcbiAgICAgICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgIG9ic2VydmVycy5kZWxldGUoaWQpO1xuICAgICAgICB9XG4gICAgfTtcbn1cbmNvbnN0IG9ic2VydmVycyA9IG5ldyBNYXAoKTtcbmZ1bmN0aW9uIGNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpIHtcbiAgICBjb25zdCBpZCA9IG9wdGlvbnMucm9vdE1hcmdpbiB8fCAnJztcbiAgICBsZXQgaW5zdGFuY2UgPSBvYnNlcnZlcnMuZ2V0KGlkKTtcbiAgICBpZiAoaW5zdGFuY2UpIHtcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH1cbiAgICBjb25zdCBlbGVtZW50cyA9IG5ldyBNYXAoKTtcbiAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcyk9PntcbiAgICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSk9PntcbiAgICAgICAgICAgIGNvbnN0IGNhbGxiYWNrID0gZWxlbWVudHMuZ2V0KGVudHJ5LnRhcmdldCk7XG4gICAgICAgICAgICBjb25zdCBpc1Zpc2libGUgPSBlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDA7XG4gICAgICAgICAgICBpZiAoY2FsbGJhY2sgJiYgaXNWaXNpYmxlKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soaXNWaXNpYmxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSwgb3B0aW9ucyk7XG4gICAgb2JzZXJ2ZXJzLnNldChpZCwgaW5zdGFuY2UgPSB7XG4gICAgICAgIGlkLFxuICAgICAgICBvYnNlcnZlcixcbiAgICAgICAgZWxlbWVudHNcbiAgICB9KTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1pbnRlcnNlY3Rpb24uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB3aXRoUm91dGVyO1xudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBfcm91dGVyID0gcmVxdWlyZShcIi4vcm91dGVyXCIpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuZnVuY3Rpb24gd2l0aFJvdXRlcihDb21wb3NlZENvbXBvbmVudCkge1xuICAgIGZ1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzKSB7XG4gICAgICAgIHJldHVybigvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29tcG9zZWRDb21wb25lbnQsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgcm91dGVyOiAoMCwgX3JvdXRlcikudXNlUm91dGVyKClcbiAgICAgICAgfSwgcHJvcHMpKSk7XG4gICAgfVxuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcztcbiAgICBXaXRoUm91dGVyV3JhcHBlci5vcmlnR2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQub3JpZ0dldEluaXRpYWxQcm9wcztcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCBuYW1lID0gQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bic7XG4gICAgICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgO1xuICAgIH1cbiAgICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXI7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXdpdGgtcm91dGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5nZXREb21haW5Mb2NhbGUgPSBnZXREb21haW5Mb2NhbGU7XG5leHBvcnRzLmFkZExvY2FsZSA9IGFkZExvY2FsZTtcbmV4cG9ydHMuZGVsTG9jYWxlID0gZGVsTG9jYWxlO1xuZXhwb3J0cy5oYXNCYXNlUGF0aCA9IGhhc0Jhc2VQYXRoO1xuZXhwb3J0cy5hZGRCYXNlUGF0aCA9IGFkZEJhc2VQYXRoO1xuZXhwb3J0cy5kZWxCYXNlUGF0aCA9IGRlbEJhc2VQYXRoO1xuZXhwb3J0cy5pc0xvY2FsVVJMID0gaXNMb2NhbFVSTDtcbmV4cG9ydHMuaW50ZXJwb2xhdGVBcyA9IGludGVycG9sYXRlQXM7XG5leHBvcnRzLnJlc29sdmVIcmVmID0gcmVzb2x2ZUhyZWY7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2ggPSByZXF1aXJlKFwiLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaFwiKTtcbnZhciBfcm91dGVMb2FkZXIgPSByZXF1aXJlKFwiLi4vLi4vLi4vY2xpZW50L3JvdXRlLWxvYWRlclwiKTtcbnZhciBfZGVub3JtYWxpemVQYWdlUGF0aCA9IHJlcXVpcmUoXCIuLi8uLi8uLi9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoXCIpO1xudmFyIF9ub3JtYWxpemVMb2NhbGVQYXRoID0gcmVxdWlyZShcIi4uL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoXCIpO1xudmFyIF9taXR0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vbWl0dFwiKSk7XG52YXIgX3V0aWxzID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xudmFyIF9pc0R5bmFtaWMgPSByZXF1aXJlKFwiLi91dGlscy9pcy1keW5hbWljXCIpO1xudmFyIF9wYXJzZVJlbGF0aXZlVXJsID0gcmVxdWlyZShcIi4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsXCIpO1xudmFyIF9xdWVyeXN0cmluZyA9IHJlcXVpcmUoXCIuL3V0aWxzL3F1ZXJ5c3RyaW5nXCIpO1xudmFyIF9yZXNvbHZlUmV3cml0ZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXNcIikpO1xudmFyIF9yb3V0ZU1hdGNoZXIgPSByZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1tYXRjaGVyXCIpO1xudmFyIF9yb3V0ZVJlZ2V4ID0gcmVxdWlyZShcIi4vdXRpbHMvcm91dGUtcmVnZXhcIik7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5sZXQgZGV0ZWN0RG9tYWluTG9jYWxlO1xuaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICBkZXRlY3REb21haW5Mb2NhbGUgPSByZXF1aXJlKCcuLi9pMThuL2RldGVjdC1kb21haW4tbG9jYWxlJykuZGV0ZWN0RG9tYWluTG9jYWxlO1xufVxuY29uc3QgYmFzZVBhdGggPSBwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIHx8ICcnO1xuZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpIHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLCB7XG4gICAgICAgIGNhbmNlbGxlZDogdHJ1ZVxuICAgIH0pO1xufVxuZnVuY3Rpb24gYWRkUGF0aFByZWZpeChwYXRoLCBwcmVmaXgpIHtcbiAgICByZXR1cm4gcHJlZml4ICYmIHBhdGguc3RhcnRzV2l0aCgnLycpID8gcGF0aCA9PT0gJy8nID8gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChwcmVmaXgpIDogYCR7cHJlZml4fSR7cGF0aE5vUXVlcnlIYXNoKHBhdGgpID09PSAnLycgPyBwYXRoLnN1YnN0cmluZygxKSA6IHBhdGh9YCA6IHBhdGg7XG59XG5mdW5jdGlvbiBnZXREb21haW5Mb2NhbGUocGF0aCwgbG9jYWxlLCBsb2NhbGVzLCBkb21haW5Mb2NhbGVzKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgbG9jYWxlID0gbG9jYWxlIHx8ICgwLCBfbm9ybWFsaXplTG9jYWxlUGF0aCkubm9ybWFsaXplTG9jYWxlUGF0aChwYXRoLCBsb2NhbGVzKS5kZXRlY3RlZExvY2FsZTtcbiAgICAgICAgY29uc3QgZGV0ZWN0ZWREb21haW4gPSBkZXRlY3REb21haW5Mb2NhbGUoZG9tYWluTG9jYWxlcywgdW5kZWZpbmVkLCBsb2NhbGUpO1xuICAgICAgICBpZiAoZGV0ZWN0ZWREb21haW4pIHtcbiAgICAgICAgICAgIHJldHVybiBgaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cCA/ICcnIDogJ3MnfTovLyR7ZGV0ZWN0ZWREb21haW4uZG9tYWlufSR7YmFzZVBhdGggfHwgJyd9JHtsb2NhbGUgPT09IGRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGUgPyAnJyA6IGAvJHtsb2NhbGV9YH0ke3BhdGh9YDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGFkZExvY2FsZShwYXRoLCBsb2NhbGUsIGRlZmF1bHRMb2NhbGUpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICBjb25zdCBwYXRobmFtZSA9IHBhdGhOb1F1ZXJ5SGFzaChwYXRoKTtcbiAgICAgICAgY29uc3QgcGF0aExvd2VyID0gcGF0aG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgY29uc3QgbG9jYWxlTG93ZXIgPSBsb2NhbGUgJiYgbG9jYWxlLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHJldHVybiBsb2NhbGUgJiYgbG9jYWxlICE9PSBkZWZhdWx0TG9jYWxlICYmICFwYXRoTG93ZXIuc3RhcnRzV2l0aCgnLycgKyBsb2NhbGVMb3dlciArICcvJykgJiYgcGF0aExvd2VyICE9PSAnLycgKyBsb2NhbGVMb3dlciA/IGFkZFBhdGhQcmVmaXgocGF0aCwgJy8nICsgbG9jYWxlKSA6IHBhdGg7XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xufVxuZnVuY3Rpb24gZGVsTG9jYWxlKHBhdGgsIGxvY2FsZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIGNvbnN0IHBhdGhuYW1lID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpO1xuICAgICAgICBjb25zdCBwYXRoTG93ZXIgPSBwYXRobmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBjb25zdCBsb2NhbGVMb3dlciA9IGxvY2FsZSAmJiBsb2NhbGUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgcmV0dXJuIGxvY2FsZSAmJiAocGF0aExvd2VyLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlTG93ZXIgKyAnLycpIHx8IHBhdGhMb3dlciA9PT0gJy8nICsgbG9jYWxlTG93ZXIpID8gKHBhdGhuYW1lLmxlbmd0aCA9PT0gbG9jYWxlLmxlbmd0aCArIDEgPyAnLycgOiAnJykgKyBwYXRoLnN1YnN0cihsb2NhbGUubGVuZ3RoICsgMSkgOiBwYXRoO1xuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbn1cbmZ1bmN0aW9uIHBhdGhOb1F1ZXJ5SGFzaChwYXRoKSB7XG4gICAgY29uc3QgcXVlcnlJbmRleCA9IHBhdGguaW5kZXhPZignPycpO1xuICAgIGNvbnN0IGhhc2hJbmRleCA9IHBhdGguaW5kZXhPZignIycpO1xuICAgIGlmIChxdWVyeUluZGV4ID4gLTEgfHwgaGFzaEluZGV4ID4gLTEpIHtcbiAgICAgICAgcGF0aCA9IHBhdGguc3Vic3RyaW5nKDAsIHF1ZXJ5SW5kZXggPiAtMSA/IHF1ZXJ5SW5kZXggOiBoYXNoSW5kZXgpO1xuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbn1cbmZ1bmN0aW9uIGhhc0Jhc2VQYXRoKHBhdGgpIHtcbiAgICBwYXRoID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpO1xuICAgIHJldHVybiBwYXRoID09PSBiYXNlUGF0aCB8fCBwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGggKyAnLycpO1xufVxuZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aCkge1xuICAgIC8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG4gICAgcmV0dXJuIGFkZFBhdGhQcmVmaXgocGF0aCwgYmFzZVBhdGgpO1xufVxuZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aCkge1xuICAgIHBhdGggPSBwYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aCk7XG4gICAgaWYgKCFwYXRoLnN0YXJ0c1dpdGgoJy8nKSkgcGF0aCA9IGAvJHtwYXRofWA7XG4gICAgcmV0dXJuIHBhdGg7XG59XG5mdW5jdGlvbiBpc0xvY2FsVVJMKHVybCkge1xuICAgIC8vIHByZXZlbnQgYSBoeWRyYXRpb24gbWlzbWF0Y2ggb24gaHJlZiBmb3IgdXJsIHdpdGggYW5jaG9yIHJlZnNcbiAgICBpZiAodXJsLnN0YXJ0c1dpdGgoJy8nKSB8fCB1cmwuc3RhcnRzV2l0aCgnIycpIHx8IHVybC5zdGFydHNXaXRoKCc/JykpIHJldHVybiB0cnVlO1xuICAgIHRyeSB7XG4gICAgICAgIC8vIGFic29sdXRlIHVybHMgY2FuIGJlIGxvY2FsIGlmIHRoZXkgYXJlIG9uIHRoZSBzYW1lIG9yaWdpblxuICAgICAgICBjb25zdCBsb2NhdGlvbk9yaWdpbiA9ICgwLCBfdXRpbHMpLmdldExvY2F0aW9uT3JpZ2luKCk7XG4gICAgICAgIGNvbnN0IHJlc29sdmVkID0gbmV3IFVSTCh1cmwsIGxvY2F0aW9uT3JpZ2luKTtcbiAgICAgICAgcmV0dXJuIHJlc29sdmVkLm9yaWdpbiA9PT0gbG9jYXRpb25PcmlnaW4gJiYgaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpO1xuICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGludGVycG9sYXRlQXMocm91dGUsIGFzUGF0aG5hbWUsIHF1ZXJ5KSB7XG4gICAgbGV0IGludGVycG9sYXRlZFJvdXRlID0gJyc7XG4gICAgY29uc3QgZHluYW1pY1JlZ2V4ID0gKDAsIF9yb3V0ZVJlZ2V4KS5nZXRSb3V0ZVJlZ2V4KHJvdXRlKTtcbiAgICBjb25zdCBkeW5hbWljR3JvdXBzID0gZHluYW1pY1JlZ2V4Lmdyb3VwcztcbiAgICBjb25zdCBkeW5hbWljTWF0Y2hlcyA9IC8vIFRyeSB0byBtYXRjaCB0aGUgZHluYW1pYyByb3V0ZSBhZ2FpbnN0IHRoZSBhc1BhdGhcbiAgICAoYXNQYXRobmFtZSAhPT0gcm91dGUgPyAoMCwgX3JvdXRlTWF0Y2hlcikuZ2V0Um91dGVNYXRjaGVyKGR5bmFtaWNSZWdleCkoYXNQYXRobmFtZSkgOiAnJykgfHwgLy8gRmFsbCBiYWNrIHRvIHJlYWRpbmcgdGhlIHZhbHVlcyBmcm9tIHRoZSBocmVmXG4gICAgLy8gVE9ETzogc2hvdWxkIHRoaXMgdGFrZSBwcmlvcml0eTsgYWxzbyBuZWVkIHRvIGNoYW5nZSBpbiB0aGUgcm91dGVyLlxuICAgIHF1ZXJ5O1xuICAgIGludGVycG9sYXRlZFJvdXRlID0gcm91dGU7XG4gICAgY29uc3QgcGFyYW1zID0gT2JqZWN0LmtleXMoZHluYW1pY0dyb3Vwcyk7XG4gICAgaWYgKCFwYXJhbXMuZXZlcnkoKHBhcmFtKT0+e1xuICAgICAgICBsZXQgdmFsdWUgPSBkeW5hbWljTWF0Y2hlc1twYXJhbV0gfHwgJyc7XG4gICAgICAgIGNvbnN0IHsgcmVwZWF0ICwgb3B0aW9uYWwgIH0gPSBkeW5hbWljR3JvdXBzW3BhcmFtXTtcbiAgICAgICAgLy8gc3VwcG9ydCBzaW5nbGUtbGV2ZWwgY2F0Y2gtYWxsXG4gICAgICAgIC8vIFRPRE86IG1vcmUgcm9idXN0IGhhbmRsaW5nIGZvciB1c2VyLWVycm9yIChwYXNzaW5nIGAvYClcbiAgICAgICAgbGV0IHJlcGxhY2VkID0gYFske3JlcGVhdCA/ICcuLi4nIDogJyd9JHtwYXJhbX1dYDtcbiAgICAgICAgaWYgKG9wdGlvbmFsKSB7XG4gICAgICAgICAgICByZXBsYWNlZCA9IGAkeyF2YWx1ZSA/ICcvJyA6ICcnfVske3JlcGxhY2VkfV1gO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXBlYXQgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpKSB2YWx1ZSA9IFtcbiAgICAgICAgICAgIHZhbHVlXG4gICAgICAgIF07XG4gICAgICAgIHJldHVybiAob3B0aW9uYWwgfHwgcGFyYW0gaW4gZHluYW1pY01hdGNoZXMpICYmIC8vIEludGVycG9sYXRlIGdyb3VwIGludG8gZGF0YSBVUkwgaWYgcHJlc2VudFxuICAgICAgICAoaW50ZXJwb2xhdGVkUm91dGUgPSBpbnRlcnBvbGF0ZWRSb3V0ZS5yZXBsYWNlKHJlcGxhY2VkLCByZXBlYXQgPyB2YWx1ZS5tYXAoLy8gdGhlc2UgdmFsdWVzIHNob3VsZCBiZSBmdWxseSBlbmNvZGVkIGluc3RlYWQgb2YganVzdFxuICAgICAgICAvLyBwYXRoIGRlbGltaXRlciBlc2NhcGVkIHNpbmNlIHRoZXkgYXJlIGJlaW5nIGluc2VydGVkXG4gICAgICAgIC8vIGludG8gdGhlIFVSTCBhbmQgd2UgZXhwZWN0IFVSTCBlbmNvZGVkIHNlZ21lbnRzXG4gICAgICAgIC8vIHdoZW4gcGFyc2luZyBkeW5hbWljIHJvdXRlIHBhcmFtc1xuICAgICAgICAoc2VnbWVudCk9PmVuY29kZVVSSUNvbXBvbmVudChzZWdtZW50KVxuICAgICAgICApLmpvaW4oJy8nKSA6IGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpIHx8ICcvJyk7XG4gICAgfSkpIHtcbiAgICAgICAgaW50ZXJwb2xhdGVkUm91dGUgPSAnJyAvLyBkaWQgbm90IHNhdGlzZnkgYWxsIHJlcXVpcmVtZW50c1xuICAgICAgICA7XG4gICAgLy8gbi5iLiBXZSBpZ25vcmUgdGhpcyBlcnJvciBiZWNhdXNlIHdlIGhhbmRsZSB3YXJuaW5nIGZvciB0aGlzIGNhc2UgaW5cbiAgICAvLyBkZXZlbG9wbWVudCBpbiB0aGUgYDxMaW5rPmAgY29tcG9uZW50IGRpcmVjdGx5LlxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBwYXJhbXMsXG4gICAgICAgIHJlc3VsdDogaW50ZXJwb2xhdGVkUm91dGVcbiAgICB9O1xufVxuZnVuY3Rpb24gb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBwYXJhbXMpIHtcbiAgICBjb25zdCBmaWx0ZXJlZFF1ZXJ5ID0ge1xuICAgIH07XG4gICAgT2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goKGtleSk9PntcbiAgICAgICAgaWYgKCFwYXJhbXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICAgICAgZmlsdGVyZWRRdWVyeVtrZXldID0gcXVlcnlba2V5XTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBmaWx0ZXJlZFF1ZXJ5O1xufVxuZnVuY3Rpb24gcmVzb2x2ZUhyZWYocm91dGVyLCBocmVmLCByZXNvbHZlQXMpIHtcbiAgICAvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xuICAgIGxldCBiYXNlO1xuICAgIGxldCB1cmxBc1N0cmluZyA9IHR5cGVvZiBocmVmID09PSAnc3RyaW5nJyA/IGhyZWYgOiAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihocmVmKTtcbiAgICAvLyByZXBlYXRlZCBzbGFzaGVzIGFuZCBiYWNrc2xhc2hlcyBpbiB0aGUgVVJMIGFyZSBjb25zaWRlcmVkXG4gICAgLy8gaW52YWxpZCBhbmQgd2lsbCBuZXZlciBtYXRjaCBhIE5leHQuanMgcGFnZS9maWxlXG4gICAgY29uc3QgdXJsUHJvdG9NYXRjaCA9IHVybEFzU3RyaW5nLm1hdGNoKC9eW2EtekEtWl17MSx9OlxcL1xcLy8pO1xuICAgIGNvbnN0IHVybEFzU3RyaW5nTm9Qcm90byA9IHVybFByb3RvTWF0Y2ggPyB1cmxBc1N0cmluZy5zdWJzdHIodXJsUHJvdG9NYXRjaFswXS5sZW5ndGgpIDogdXJsQXNTdHJpbmc7XG4gICAgY29uc3QgdXJsUGFydHMgPSB1cmxBc1N0cmluZ05vUHJvdG8uc3BsaXQoJz8nKTtcbiAgICBpZiAoKHVybFBhcnRzWzBdIHx8ICcnKS5tYXRjaCgvKFxcL1xcL3xcXFxcKS8pKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYEludmFsaWQgaHJlZiBwYXNzZWQgdG8gbmV4dC9yb3V0ZXI6ICR7dXJsQXNTdHJpbmd9LCByZXBlYXRlZCBmb3J3YXJkLXNsYXNoZXMgKC8vKSBvciBiYWNrc2xhc2hlcyBcXFxcIGFyZSBub3QgdmFsaWQgaW4gdGhlIGhyZWZgKTtcbiAgICAgICAgY29uc3Qgbm9ybWFsaXplZFVybCA9ICgwLCBfdXRpbHMpLm5vcm1hbGl6ZVJlcGVhdGVkU2xhc2hlcyh1cmxBc1N0cmluZ05vUHJvdG8pO1xuICAgICAgICB1cmxBc1N0cmluZyA9ICh1cmxQcm90b01hdGNoID8gdXJsUHJvdG9NYXRjaFswXSA6ICcnKSArIG5vcm1hbGl6ZWRVcmw7XG4gICAgfVxuICAgIC8vIFJldHVybiBiZWNhdXNlIGl0IGNhbm5vdCBiZSByb3V0ZWQgYnkgdGhlIE5leHQuanMgcm91dGVyXG4gICAgaWYgKCFpc0xvY2FsVVJMKHVybEFzU3RyaW5nKSkge1xuICAgICAgICByZXR1cm4gcmVzb2x2ZUFzID8gW1xuICAgICAgICAgICAgdXJsQXNTdHJpbmdcbiAgICAgICAgXSA6IHVybEFzU3RyaW5nO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBiYXNlID0gbmV3IFVSTCh1cmxBc1N0cmluZy5zdGFydHNXaXRoKCcjJykgPyByb3V0ZXIuYXNQYXRoIDogcm91dGVyLnBhdGhuYW1lLCAnaHR0cDovL24nKTtcbiAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIC8vIGZhbGxiYWNrIHRvIC8gZm9yIGludmFsaWQgYXNQYXRoIHZhbHVlcyBlLmcuIC8vXG4gICAgICAgIGJhc2UgPSBuZXcgVVJMKCcvJywgJ2h0dHA6Ly9uJyk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSk7XG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lID0gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChmaW5hbFVybC5wYXRobmFtZSk7XG4gICAgICAgIGxldCBpbnRlcnBvbGF0ZWRBcyA9ICcnO1xuICAgICAgICBpZiAoKDAsIF9pc0R5bmFtaWMpLmlzRHluYW1pY1JvdXRlKGZpbmFsVXJsLnBhdGhuYW1lKSAmJiBmaW5hbFVybC5zZWFyY2hQYXJhbXMgJiYgcmVzb2x2ZUFzKSB7XG4gICAgICAgICAgICBjb25zdCBxdWVyeSA9ICgwLCBfcXVlcnlzdHJpbmcpLnNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoZmluYWxVcmwuc2VhcmNoUGFyYW1zKTtcbiAgICAgICAgICAgIGNvbnN0IHsgcmVzdWx0ICwgcGFyYW1zICB9ID0gaW50ZXJwb2xhdGVBcyhmaW5hbFVybC5wYXRobmFtZSwgZmluYWxVcmwucGF0aG5hbWUsIHF1ZXJ5KTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBpbnRlcnBvbGF0ZWRBcyA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IHJlc3VsdCxcbiAgICAgICAgICAgICAgICAgICAgaGFzaDogZmluYWxVcmwuaGFzaCxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgcGFyYW1zKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGlmIHRoZSBvcmlnaW4gZGlkbid0IGNoYW5nZSwgaXQgbWVhbnMgd2UgcmVjZWl2ZWQgYSByZWxhdGl2ZSBocmVmXG4gICAgICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9IGZpbmFsVXJsLm9yaWdpbiA9PT0gYmFzZS5vcmlnaW4gPyBmaW5hbFVybC5ocmVmLnNsaWNlKGZpbmFsVXJsLm9yaWdpbi5sZW5ndGgpIDogZmluYWxVcmwuaHJlZjtcbiAgICAgICAgcmV0dXJuIHJlc29sdmVBcyA/IFtcbiAgICAgICAgICAgIHJlc29sdmVkSHJlZixcbiAgICAgICAgICAgIGludGVycG9sYXRlZEFzIHx8IHJlc29sdmVkSHJlZlxuICAgICAgICBdIDogcmVzb2x2ZWRIcmVmO1xuICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgcmV0dXJuIHJlc29sdmVBcyA/IFtcbiAgICAgICAgICAgIHVybEFzU3RyaW5nXG4gICAgICAgIF0gOiB1cmxBc1N0cmluZztcbiAgICB9XG59XG5mdW5jdGlvbiBzdHJpcE9yaWdpbih1cmwpIHtcbiAgICBjb25zdCBvcmlnaW4gPSAoMCwgX3V0aWxzKS5nZXRMb2NhdGlvbk9yaWdpbigpO1xuICAgIHJldHVybiB1cmwuc3RhcnRzV2l0aChvcmlnaW4pID8gdXJsLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKSA6IHVybDtcbn1cbmZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXIsIHVybCwgYXMpIHtcbiAgICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICAgIGxldCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHJvdXRlciwgdXJsLCB0cnVlKTtcbiAgICBjb25zdCBvcmlnaW4gPSAoMCwgX3V0aWxzKS5nZXRMb2NhdGlvbk9yaWdpbigpO1xuICAgIGNvbnN0IGhyZWZIYWRPcmlnaW4gPSByZXNvbHZlZEhyZWYuc3RhcnRzV2l0aChvcmlnaW4pO1xuICAgIGNvbnN0IGFzSGFkT3JpZ2luID0gcmVzb2x2ZWRBcyAmJiByZXNvbHZlZEFzLnN0YXJ0c1dpdGgob3JpZ2luKTtcbiAgICByZXNvbHZlZEhyZWYgPSBzdHJpcE9yaWdpbihyZXNvbHZlZEhyZWYpO1xuICAgIHJlc29sdmVkQXMgPSByZXNvbHZlZEFzID8gc3RyaXBPcmlnaW4ocmVzb2x2ZWRBcykgOiByZXNvbHZlZEFzO1xuICAgIGNvbnN0IHByZXBhcmVkVXJsID0gaHJlZkhhZE9yaWdpbiA/IHJlc29sdmVkSHJlZiA6IGFkZEJhc2VQYXRoKHJlc29sdmVkSHJlZik7XG4gICAgY29uc3QgcHJlcGFyZWRBcyA9IGFzID8gc3RyaXBPcmlnaW4ocmVzb2x2ZUhyZWYocm91dGVyLCBhcykpIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWY7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdXJsOiBwcmVwYXJlZFVybCxcbiAgICAgICAgYXM6IGFzSGFkT3JpZ2luID8gcHJlcGFyZWRBcyA6IGFkZEJhc2VQYXRoKHByZXBhcmVkQXMpXG4gICAgfTtcbn1cbmZ1bmN0aW9uIHJlc29sdmVEeW5hbWljUm91dGUocGF0aG5hbWUsIHBhZ2VzKSB7XG4gICAgY29uc3QgY2xlYW5QYXRobmFtZSA9ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goKDAsIF9kZW5vcm1hbGl6ZVBhZ2VQYXRoKS5kZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhdGhuYW1lKSk7XG4gICAgaWYgKGNsZWFuUGF0aG5hbWUgPT09ICcvNDA0JyB8fCBjbGVhblBhdGhuYW1lID09PSAnL19lcnJvcicpIHtcbiAgICAgICAgcmV0dXJuIHBhdGhuYW1lO1xuICAgIH1cbiAgICAvLyBoYW5kbGUgcmVzb2x2aW5nIGhyZWYgZm9yIGR5bmFtaWMgcm91dGVzXG4gICAgaWYgKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lKSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICAgIHBhZ2VzLnNvbWUoKHBhZ2UpPT57XG4gICAgICAgICAgICBpZiAoKDAsIF9pc0R5bmFtaWMpLmlzRHluYW1pY1JvdXRlKHBhZ2UpICYmICgwLCBfcm91dGVSZWdleCkuZ2V0Um91dGVSZWdleChwYWdlKS5yZS50ZXN0KGNsZWFuUGF0aG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUgPSBwYWdlO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpO1xufVxuY29uc3QgbWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gPSBwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmICdzY3JvbGxSZXN0b3JhdGlvbicgaW4gd2luZG93Lmhpc3RvcnkgJiYgISFmdW5jdGlvbigpIHtcbiAgICB0cnkge1xuICAgICAgICBsZXQgdiA9ICdfX25leHQnO1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG4gICAgICAgIHJldHVybiBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKHYsIHYpLCBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKHYpLCB0cnVlO1xuICAgIH0gY2F0Y2ggKG4pIHtcbiAgICB9XG59KCk7XG5jb25zdCBTU0dfREFUQV9OT1RfRk9VTkQgPSBTeW1ib2woJ1NTR19EQVRBX05PVF9GT1VORCcpO1xuZnVuY3Rpb24gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzKSB7XG4gICAgcmV0dXJuIGZldGNoKHVybCwge1xuICAgICAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAgICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgICAgIC8vXG4gICAgICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAgICAgLy8gPiBvcHRpb24uXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAgICAgLy9cbiAgICAgICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAgICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgICAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ1xuICAgIH0pLnRoZW4oKHJlcyk9PntcbiAgICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgICAgIGlmIChhdHRlbXB0cyA+IDEgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzIC0gMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocmVzLnN0YXR1cyA9PT0gNDA0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCkudGhlbigoZGF0YSk9PntcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEubm90Rm91bmQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90Rm91bmQ6IFNTR19EQVRBX05PVF9GT1VORFxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyKSB7XG4gICAgcmV0dXJuIGZldGNoUmV0cnkoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyID8gMyA6IDEpLmNhdGNoKChlcnIpPT57XG4gICAgICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgICAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgICAgICAvLyBsb29wLlxuICAgICAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICAgICAgICAoMCwgX3JvdXRlTG9hZGVyKS5tYXJrQXNzZXRFcnJvcihlcnIpO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IGVycjtcbiAgICB9KTtcbn1cbmNsYXNzIFJvdXRlciB7XG4gICAgY29uc3RydWN0b3IocGF0aG5hbWUxLCBxdWVyeTEsIGFzMSwgeyBpbml0aWFsUHJvcHMgLCBwYWdlTG9hZGVyICwgQXBwICwgd3JhcEFwcCAsIENvbXBvbmVudDogQ29tcG9uZW50MSAsIGVycjogZXJyMSAsIHN1YnNjcmlwdGlvbiAsIGlzRmFsbGJhY2sgLCBsb2NhbGUgLCBsb2NhbGVzICwgZGVmYXVsdExvY2FsZSAsIGRvbWFpbkxvY2FsZXMgLCBpc1ByZXZpZXcgIH0pe1xuICAgICAgICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICAgICAgICB0aGlzLnNkYyA9IHtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gSW4tZmxpZ2h0IFNlcnZlciBEYXRhIFJlcXVlc3RzLCBmb3IgZGVkdXBpbmdcbiAgICAgICAgdGhpcy5zZHIgPSB7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX2lkeCA9IDA7XG4gICAgICAgIHRoaXMub25Qb3BTdGF0ZSA9IChlKT0+e1xuICAgICAgICAgICAgY29uc3Qgc3RhdGUgPSBlLnN0YXRlO1xuICAgICAgICAgICAgaWYgKCFzdGF0ZSkge1xuICAgICAgICAgICAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgICAgICAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgICAgICAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAgICAgICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgICAgICAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgICAgICAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgICAgICAgICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgICAgICAgICAgICBjb25zdCB7IHBhdGhuYW1lOiBwYXRobmFtZTEgLCBxdWVyeTogcXVlcnkxICB9ID0gdGhpcztcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZTEpLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeTogcXVlcnkxXG4gICAgICAgICAgICAgICAgfSksICgwLCBfdXRpbHMpLmdldFVSTCgpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXN0YXRlLl9fTikge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBmb3JjZWRTY3JvbGw7XG4gICAgICAgICAgICBjb25zdCB7IHVybCAsIGFzOiBhczEgLCBvcHRpb25zICwgaWR4ICB9ID0gc3RhdGU7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICAgICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5faWR4ICE9PSBpZHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNuYXBzaG90IGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uOlxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdfX25leHRfc2Nyb2xsXycgKyB0aGlzLl9pZHgsIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogc2VsZi5wYWdlWE9mZnNldCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogc2VsZi5wYWdlWU9mZnNldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlc3RvcmUgb2xkIHNjcm9sbCBwb3NpdGlvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdiA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyArIGlkeCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yY2VkU2Nyb2xsID0gSlNPTi5wYXJzZSh2KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JjZWRTY3JvbGwgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5faWR4ID0gaWR4O1xuICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZTogcGF0aG5hbWUxICB9ID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKHVybCk7XG4gICAgICAgICAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAgICAgICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgICAgICAgICAgaWYgKHRoaXMuaXNTc3IgJiYgYXMxID09PSB0aGlzLmFzUGF0aCAmJiBwYXRobmFtZTEgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgICAgICAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgICAgICAgICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKHN0YXRlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzMSwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICB9LCBvcHRpb25zLCB7XG4gICAgICAgICAgICAgICAgc2hhbGxvdzogb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMuX3NoYWxsb3csXG4gICAgICAgICAgICAgICAgbG9jYWxlOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgICAgIH0pLCBmb3JjZWRTY3JvbGwpO1xuICAgICAgICB9O1xuICAgICAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICAgICAgdGhpcy5yb3V0ZSA9ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUxKTtcbiAgICAgICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgICAgIHRoaXMuY29tcG9uZW50cyA9IHtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgICAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgICAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgICAgIGlmIChwYXRobmFtZTEgIT09ICcvX2Vycm9yJykge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICAgICAgICAgIENvbXBvbmVudDogQ29tcG9uZW50MSxcbiAgICAgICAgICAgICAgICBpbml0aWFsOiB0cnVlLFxuICAgICAgICAgICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgICAgICAgICAgZXJyOiBlcnIxLFxuICAgICAgICAgICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1BcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0ge1xuICAgICAgICAgICAgQ29tcG9uZW50OiBBcHAsXG4gICAgICAgICAgICBzdHlsZVNoZWV0czogW11cbiAgICAgICAgfTtcbiAgICAgICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAgICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICAgICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzO1xuICAgICAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyO1xuICAgICAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWUxO1xuICAgICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnkxO1xuICAgICAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgICAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgICAgICBjb25zdCBhdXRvRXhwb3J0RHluYW1pYyA9ICgwLCBfaXNEeW5hbWljKS5pc0R5bmFtaWNSb3V0ZShwYXRobmFtZTEpICYmIHNlbGYuX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0O1xuICAgICAgICB0aGlzLmFzUGF0aCA9IGF1dG9FeHBvcnREeW5hbWljID8gcGF0aG5hbWUxIDogYXMxO1xuICAgICAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGg7XG4gICAgICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwO1xuICAgICAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgICAgIHRoaXMuaXNTc3IgPSB0cnVlO1xuICAgICAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrO1xuICAgICAgICB0aGlzLmlzUmVhZHkgPSAhIShzZWxmLl9fTkVYVF9EQVRBX18uZ3NzcCB8fCBzZWxmLl9fTkVYVF9EQVRBX18uZ2lwIHx8IHNlbGYuX19ORVhUX0RBVEFfXy5hcHBHaXAgJiYgIXNlbGYuX19ORVhUX0RBVEFfXy5nc3AgfHwgIWF1dG9FeHBvcnREeW5hbWljICYmICFzZWxmLmxvY2F0aW9uLnNlYXJjaCAmJiAhcHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyk7XG4gICAgICAgIHRoaXMuaXNQcmV2aWV3ID0gISFpc1ByZXZpZXc7XG4gICAgICAgIHRoaXMuaXNMb2NhbGVEb21haW4gPSBmYWxzZTtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlO1xuICAgICAgICAgICAgdGhpcy5sb2NhbGVzID0gbG9jYWxlcztcbiAgICAgICAgICAgIHRoaXMuZGVmYXVsdExvY2FsZSA9IGRlZmF1bHRMb2NhbGU7XG4gICAgICAgICAgICB0aGlzLmRvbWFpbkxvY2FsZXMgPSBkb21haW5Mb2NhbGVzO1xuICAgICAgICAgICAgdGhpcy5pc0xvY2FsZURvbWFpbiA9ICEhZGV0ZWN0RG9tYWluTG9jYWxlKGRvbWFpbkxvY2FsZXMsIHNlbGYubG9jYXRpb24uaG9zdG5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgICAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICAgICAgICBpZiAoYXMxLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAgICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgICAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxlXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBvcHRpb25zLl9zaG91bGRSZXNvbHZlSHJlZiA9IGFzMSAhPT0gcGF0aG5hbWUxO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoJ3JlcGxhY2VTdGF0ZScsICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lMSksXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBxdWVyeTFcbiAgICAgICAgICAgICAgICB9KSwgKDAsIF91dGlscykuZ2V0VVJMKCksIG9wdGlvbnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKTtcbiAgICAgICAgICAgIC8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4gICAgICAgICAgICAvLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gJ21hbnVhbCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJlbG9hZCgpIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH1cbiAgICAvKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqLyBiYWNrKCkge1xuICAgICAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XG4gICAgfVxuICAgIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi8gcHVzaCh1cmwsIGFzLCBvcHRpb25zID0ge1xuICAgIH0pIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgICAgIC8vIFRPRE86IHJlbW92ZSBpbiB0aGUgZnV0dXJlIHdoZW4gd2UgdXBkYXRlIGhpc3RvcnkgYmVmb3JlIHJvdXRlIGNoYW5nZVxuICAgICAgICAgICAgLy8gaXMgY29tcGxldGUsIGFzIHRoZSBwb3BzdGF0ZSBldmVudCBzaG91bGQgaGFuZGxlIHRoaXMgY2FwdHVyZS5cbiAgICAgICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFNuYXBzaG90IHNjcm9sbCBwb3NpdGlvbiByaWdodCBiZWZvcmUgbmF2aWdhdGluZyB0byBhIG5ldyBwYWdlOlxuICAgICAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdfX25leHRfc2Nyb2xsXycgKyB0aGlzLl9pZHgsIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IHNlbGYucGFnZVhPZmZzZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiBzZWxmLnBhZ2VZT2Zmc2V0XG4gICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoICB7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICh7IHVybCAsIGFzICB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICB9XG4gICAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqLyByZXBsYWNlKHVybCwgYXMsIG9wdGlvbnMgPSB7XG4gICAgfSkge1xuICAgICAgICAoeyB1cmwgLCBhcyAgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSk7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgfVxuICAgIGFzeW5jIGNoYW5nZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMsIGZvcmNlZFNjcm9sbCkge1xuICAgICAgICBpZiAoIWlzTG9jYWxVUkwodXJsKSkge1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc2hvdWxkUmVzb2x2ZUhyZWYgPSB1cmwgPT09IGFzIHx8IG9wdGlvbnMuX2ggfHwgb3B0aW9ucy5fc2hvdWxkUmVzb2x2ZUhyZWY7XG4gICAgICAgIC8vIGZvciBzdGF0aWMgcGFnZXMgd2l0aCBxdWVyeSBwYXJhbXMgaW4gdGhlIFVSTCB3ZSBkZWxheVxuICAgICAgICAvLyBtYXJraW5nIHRoZSByb3V0ZXIgcmVhZHkgdW50aWwgYWZ0ZXIgdGhlIHF1ZXJ5IGlzIHVwZGF0ZWRcbiAgICAgICAgaWYgKG9wdGlvbnMuX2gpIHtcbiAgICAgICAgICAgIHRoaXMuaXNSZWFkeSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcHJldkxvY2FsZSA9IHRoaXMubG9jYWxlO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgdGhpcy5sb2NhbGUgPSBvcHRpb25zLmxvY2FsZSA9PT0gZmFsc2UgPyB0aGlzLmRlZmF1bHRMb2NhbGUgOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmxvY2FsZTtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5sb2NhbGUgPSB0aGlzLmxvY2FsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZEFzID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzKTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsZVBhdGhSZXN1bHQgPSAoMCwgX25vcm1hbGl6ZUxvY2FsZVBhdGgpLm5vcm1hbGl6ZUxvY2FsZVBhdGgocGFyc2VkQXMucGF0aG5hbWUsIHRoaXMubG9jYWxlcyk7XG4gICAgICAgICAgICBpZiAobG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSkge1xuICAgICAgICAgICAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZTtcbiAgICAgICAgICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGFkZEJhc2VQYXRoKHBhcnNlZEFzLnBhdGhuYW1lKTtcbiAgICAgICAgICAgICAgICBhcyA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKTtcbiAgICAgICAgICAgICAgICB1cmwgPSBhZGRCYXNlUGF0aCgoMCwgX25vcm1hbGl6ZUxvY2FsZVBhdGgpLm5vcm1hbGl6ZUxvY2FsZVBhdGgoaGFzQmFzZVBhdGgodXJsKSA/IGRlbEJhc2VQYXRoKHVybCkgOiB1cmwsIHRoaXMubG9jYWxlcykucGF0aG5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGRpZE5hdmlnYXRlID0gZmFsc2U7XG4gICAgICAgICAgICAvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICAgIC8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVmO1xuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBsb2NhbGUgaXNuJ3QgY29uZmlndXJlZCBoYXJkIG5hdmlnYXRlIHRvIHNob3cgNDA0IHBhZ2VcbiAgICAgICAgICAgICAgICBpZiAoISgocmVmID0gdGhpcy5sb2NhbGVzKSA9PT0gbnVsbCB8fCByZWYgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJlZi5pbmNsdWRlcyh0aGlzLmxvY2FsZSkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gYWRkTG9jYWxlKHBhcnNlZEFzLnBhdGhuYW1lLCB0aGlzLmxvY2FsZSk7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpO1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIHdhcyBwcmV2aW91c2x5IGEgcmV0dXJuIGJ1dCB3YXMgcmVtb3ZlZCBpbiBmYXZvclxuICAgICAgICAgICAgICAgICAgICAvLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgICAgICAgICAgICBkaWROYXZpZ2F0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZGV0ZWN0ZWREb21haW4gPSBkZXRlY3REb21haW5Mb2NhbGUodGhpcy5kb21haW5Mb2NhbGVzLCB1bmRlZmluZWQsIHRoaXMubG9jYWxlKTtcbiAgICAgICAgICAgIC8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgICAgLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgICAgIC8vIGlmIHdlIGFyZSBuYXZpZ2F0aW5nIHRvIGEgZG9tYWluIGxvY2FsZSBlbnN1cmUgd2UgcmVkaXJlY3QgdG8gdGhlXG4gICAgICAgICAgICAgICAgLy8gY29ycmVjdCBkb21haW5cbiAgICAgICAgICAgICAgICBpZiAoIWRpZE5hdmlnYXRlICYmIGRldGVjdGVkRG9tYWluICYmIHRoaXMuaXNMb2NhbGVEb21haW4gJiYgc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSAhPT0gZGV0ZWN0ZWREb21haW4uZG9tYWluKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFzTm9CYXNlUGF0aCA9IGRlbEJhc2VQYXRoKGFzKTtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cCA/ICcnIDogJ3MnfTovLyR7ZGV0ZWN0ZWREb21haW4uZG9tYWlufSR7YWRkQmFzZVBhdGgoYCR7dGhpcy5sb2NhbGUgPT09IGRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGUgPyAnJyA6IGAvJHt0aGlzLmxvY2FsZX1gfSR7YXNOb0Jhc2VQYXRoID09PSAnLycgPyAnJyA6IGFzTm9CYXNlUGF0aH1gIHx8ICcvJyl9YDtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3JcbiAgICAgICAgICAgICAgICAgICAgLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICAgICAgICAgICAgZGlkTmF2aWdhdGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkaWROYXZpZ2F0ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKT0+e1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghb3B0aW9ucy5faCkge1xuICAgICAgICAgICAgdGhpcy5pc1NzciA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICAgICAgaWYgKF91dGlscy5TVCkge1xuICAgICAgICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IHNoYWxsb3cgPWZhbHNlICB9ID0gb3B0aW9ucztcbiAgICAgICAgY29uc3Qgcm91dGVQcm9wcyA9IHtcbiAgICAgICAgICAgIHNoYWxsb3dcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHRoaXMuX2luRmxpZ2h0Um91dGUpIHtcbiAgICAgICAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUsIHJvdXRlUHJvcHMpO1xuICAgICAgICB9XG4gICAgICAgIGFzID0gYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLCBvcHRpb25zLmxvY2FsZSwgdGhpcy5kZWZhdWx0TG9jYWxlKSk7XG4gICAgICAgIGNvbnN0IGNsZWFuZWRBcyA9IGRlbExvY2FsZShoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcywgdGhpcy5sb2NhbGUpO1xuICAgICAgICB0aGlzLl9pbkZsaWdodFJvdXRlID0gYXM7XG4gICAgICAgIGxldCBsb2NhbGVDaGFuZ2UgPSBwcmV2TG9jYWxlICE9PSB0aGlzLmxvY2FsZTtcbiAgICAgICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAgICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuICAgICAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAgICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgICAgIGlmICghb3B0aW9ucy5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpICYmICFsb2NhbGVDaGFuZ2UpIHtcbiAgICAgICAgICAgIHRoaXMuYXNQYXRoID0gY2xlYW5lZEFzO1xuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICAvLyBUT0RPOiBkbyB3ZSBuZWVkIHRoZSByZXNvbHZlZCBocmVmIHdoZW4gb25seSBhIGhhc2ggY2hhbmdlP1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKTtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSwgbnVsbCk7XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGxldCBwYXJzZWQgPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwodXJsKTtcbiAgICAgICAgbGV0IHsgcGF0aG5hbWU6IHBhdGhuYW1lMSAsIHF1ZXJ5OiBxdWVyeTEgIH0gPSBwYXJzZWQ7XG4gICAgICAgIC8vIFRoZSBidWlsZCBtYW5pZmVzdCBuZWVkcyB0byBiZSBsb2FkZWQgYmVmb3JlIGF1dG8tc3RhdGljIGR5bmFtaWMgcGFnZXNcbiAgICAgICAgLy8gZ2V0IHRoZWlyIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYWxsb3cgZW5zdXJpbmcgdGhleSBjYW4gYmUgcGFyc2VkIHByb3Blcmx5XG4gICAgICAgIC8vIHdoZW4gcmV3cml0dGVuIHRvXG4gICAgICAgIGxldCBwYWdlcywgcmV3cml0ZXM7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpO1xuICAgICAgICAgICAgKHsgX19yZXdyaXRlczogcmV3cml0ZXMgIH0gPSBhd2FpdCAoMCwgX3JvdXRlTG9hZGVyKS5nZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkpO1xuICAgICAgICB9IGNhdGNoIChlcnIxKSB7XG4gICAgICAgICAgICAvLyBJZiB3ZSBmYWlsIHRvIHJlc29sdmUgdGhlIHBhZ2UgbGlzdCBvciBjbGllbnQtYnVpbGQgbWFuaWZlc3QsIHdlIG11c3RcbiAgICAgICAgICAgIC8vIGRvIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbjpcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXM7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAgICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAgICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAgICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgICAgICBpZiAoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSAmJiAhbG9jYWxlQ2hhbmdlKSB7XG4gICAgICAgICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJztcbiAgICAgICAgfVxuICAgICAgICAvLyB3ZSBuZWVkIHRvIHJlc29sdmUgdGhlIGFzIHZhbHVlIHVzaW5nIHJld3JpdGVzIGZvciBkeW5hbWljIFNTR1xuICAgICAgICAvLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XG4gICAgICAgIGxldCByZXNvbHZlZEFzID0gYXM7XG4gICAgICAgIC8vIHVybCBhbmQgYXMgc2hvdWxkIGFsd2F5cyBiZSBwcmVmaXhlZCB3aXRoIGJhc2VQYXRoIGJ5IHRoaXNcbiAgICAgICAgLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuICAgICAgICAvLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxuICAgICAgICBwYXRobmFtZTEgPSBwYXRobmFtZTEgPyAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbEJhc2VQYXRoKHBhdGhuYW1lMSkpIDogcGF0aG5hbWUxO1xuICAgICAgICBpZiAoc2hvdWxkUmVzb2x2ZUhyZWYgJiYgcGF0aG5hbWUxICE9PSAnL19lcnJvcicpIHtcbiAgICAgICAgICAgIG9wdGlvbnMuX3Nob3VsZFJlc29sdmVIcmVmID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTICYmIGFzLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJld3JpdGVzUmVzdWx0ID0gKDAsIF9yZXNvbHZlUmV3cml0ZXMpLmRlZmF1bHQoYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGNsZWFuZWRBcywgdGhpcy5sb2NhbGUpKSwgcGFnZXMsIHJld3JpdGVzLCBxdWVyeTEsIChwKT0+cmVzb2x2ZUR5bmFtaWNSb3V0ZShwLCBwYWdlcylcbiAgICAgICAgICAgICAgICAsIHRoaXMubG9jYWxlcyk7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZWRBcyA9IHJld3JpdGVzUmVzdWx0LmFzUGF0aDtcbiAgICAgICAgICAgICAgICBpZiAocmV3cml0ZXNSZXN1bHQubWF0Y2hlZFBhZ2UgJiYgcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgICAgICAgICAgICAgLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUxID0gcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmO1xuICAgICAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBhZGRCYXNlUGF0aChwYXRobmFtZTEpO1xuICAgICAgICAgICAgICAgICAgICB1cmwgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXRobmFtZTEsIHBhZ2VzKTtcbiAgICAgICAgICAgICAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZTEpIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUxID0gcGFyc2VkLnBhdGhuYW1lO1xuICAgICAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBhZGRCYXNlUGF0aChwYXRobmFtZTEpO1xuICAgICAgICAgICAgICAgICAgICB1cmwgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCByb3V0ZSA9ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUxKTtcbiAgICAgICAgaWYgKCFpc0xvY2FsVVJMKGFzKSkge1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgaHJlZjogXCIke3VybH1cIiBhbmQgYXM6IFwiJHthc31cIiwgcmVjZWl2ZWQgcmVsYXRpdmUgaHJlZiBhbmQgZXh0ZXJuYWwgYXNgICsgYFxcblNlZSBtb3JlIGluZm86IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2ludmFsaWQtcmVsYXRpdmUtdXJsLWV4dGVybmFsLWFzYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmVzb2x2ZWRBcyksIHRoaXMubG9jYWxlKTtcbiAgICAgICAgaWYgKCgwLCBfaXNEeW5hbWljKS5pc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZEFzID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKHJlc29sdmVkQXMpO1xuICAgICAgICAgICAgY29uc3QgYXNQYXRobmFtZSA9IHBhcnNlZEFzLnBhdGhuYW1lO1xuICAgICAgICAgICAgY29uc3Qgcm91dGVSZWdleCA9ICgwLCBfcm91dGVSZWdleCkuZ2V0Um91dGVSZWdleChyb3V0ZSk7XG4gICAgICAgICAgICBjb25zdCByb3V0ZU1hdGNoID0gKDAsIF9yb3V0ZU1hdGNoZXIpLmdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKTtcbiAgICAgICAgICAgIGNvbnN0IHNob3VsZEludGVycG9sYXRlID0gcm91dGUgPT09IGFzUGF0aG5hbWU7XG4gICAgICAgICAgICBjb25zdCBpbnRlcnBvbGF0ZWRBcyA9IHNob3VsZEludGVycG9sYXRlID8gaW50ZXJwb2xhdGVBcyhyb3V0ZSwgYXNQYXRobmFtZSwgcXVlcnkxKSA6IHtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoIXJvdXRlTWF0Y2ggfHwgc2hvdWxkSW50ZXJwb2xhdGUgJiYgIWludGVycG9sYXRlZEFzLnJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKChwYXJhbSk9PiFxdWVyeTFbcGFyYW1dXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYCR7c2hvdWxkSW50ZXJwb2xhdGUgPyBgSW50ZXJwb2xhdGluZyBocmVmYCA6IGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYGB9IGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgKyBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oJywgJyl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKHNob3VsZEludGVycG9sYXRlID8gYFRoZSBwcm92aWRlZCBcXGBocmVmXFxgICgke3VybH0pIHZhbHVlIGlzIG1pc3NpbmcgcXVlcnkgdmFsdWVzICgke21pc3NpbmdQYXJhbXMuam9pbignLCAnKX0pIHRvIGJlIGludGVycG9sYXRlZCBwcm9wZXJseS4gYCA6IGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGApICsgYFJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvJHtzaG91bGRJbnRlcnBvbGF0ZSA/ICdocmVmLWludGVycG9sYXRpb24tZmFpbGVkJyA6ICdpbmNvbXBhdGlibGUtaHJlZi1hcyd9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChzaG91bGRJbnRlcnBvbGF0ZSkge1xuICAgICAgICAgICAgICAgIGFzID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICAgICAgfSwgcGFyc2VkQXMsIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IGludGVycG9sYXRlZEFzLnJlc3VsdCxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeTEsIGludGVycG9sYXRlZEFzLnBhcmFtcylcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeTEsIHJvdXRlTWF0Y2gpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciByZWYsIHJlZjE7XG4gICAgICAgICAgICBsZXQgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8ocm91dGUsIHBhdGhuYW1lMSwgcXVlcnkxLCBhcywgcmVzb2x2ZWRBcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICBsZXQgeyBlcnJvciAsIHByb3BzICwgX19OX1NTRyAsIF9fTl9TU1AgIH0gPSByb3V0ZUluZm87XG4gICAgICAgICAgICAvLyBoYW5kbGUgcmVkaXJlY3Qgb24gY2xpZW50LXRyYW5zaXRpb25cbiAgICAgICAgICAgIGlmICgoX19OX1NTRyB8fCBfX05fU1NQKSAmJiBwcm9wcykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wcy5wYWdlUHJvcHMgJiYgcHJvcHMucGFnZVByb3BzLl9fTl9SRURJUkVDVCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkZXN0aW5hdGlvbiA9IHByb3BzLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1Q7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNoZWNrIGlmIGRlc3RpbmF0aW9uIGlzIGludGVybmFsIChyZXNvbHZlcyB0byBhIHBhZ2UpIGFuZCBhdHRlbXB0XG4gICAgICAgICAgICAgICAgICAgIC8vIGNsaWVudC1uYXZpZ2F0aW9uIGlmIGl0IGlzIGZhbGxpbmcgYmFjayB0byBoYXJkIG5hdmlnYXRpb24gaWZcbiAgICAgICAgICAgICAgICAgICAgLy8gaXQncyBub3RcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFyc2VkSHJlZiA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWRIcmVmLnBhdGhuYW1lLCBwYWdlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB7IHVybDogbmV3VXJsICwgYXM6IG5ld0FzICB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIGRlc3RpbmF0aW9uLCBkZXN0aW5hdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UobWV0aG9kLCBuZXdVcmwsIG5ld0FzLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGRlc3RpbmF0aW9uO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuaXNQcmV2aWV3ID0gISFwcm9wcy5fX05fUFJFVklFVztcbiAgICAgICAgICAgICAgICAvLyBoYW5kbGUgU1NHIGRhdGEgNDA0XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzLm5vdEZvdW5kID09PSBTU0dfREFUQV9OT1RfRk9VTkQpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5vdEZvdW5kUm91dGU7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KCcvNDA0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBub3RGb3VuZFJvdXRlID0gJy80MDQnO1xuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBub3RGb3VuZFJvdXRlID0gJy9fZXJyb3InO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKG5vdEZvdW5kUm91dGUsIG5vdEZvdW5kUm91dGUsIHF1ZXJ5MSwgYXMsIHJlc29sdmVkQXMsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYWxsb3c6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXBwQ29tcCA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQ7XG4gICAgICAgICAgICAgICAgd2luZG93Lm5leHQuaXNQcmVyZW5kZXJlZCA9IGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiYgIXJvdXRlSW5mby5Db21wb25lbnQuZ2V0SW5pdGlhbFByb3BzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuX2ggJiYgcGF0aG5hbWUxID09PSAnL19lcnJvcicgJiYgKChyZWYgPSBzZWxmLl9fTkVYVF9EQVRBX18ucHJvcHMpID09PSBudWxsIHx8IHJlZiA9PT0gdm9pZCAwID8gdm9pZCAwIDogKHJlZjEgPSByZWYucGFnZVByb3BzKSA9PT0gbnVsbCB8fCByZWYxID09PSB2b2lkIDAgPyB2b2lkIDAgOiByZWYxLnN0YXR1c0NvZGUpID09PSA1MDAgJiYgKHByb3BzID09PSBudWxsIHx8IHByb3BzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwcm9wcy5wYWdlUHJvcHMpKSB7XG4gICAgICAgICAgICAgICAgLy8gZW5zdXJlIHN0YXR1c0NvZGUgaXMgc3RpbGwgY29ycmVjdCBmb3Igc3RhdGljIDUwMCBwYWdlXG4gICAgICAgICAgICAgICAgLy8gd2hlbiB1cGRhdGluZyBxdWVyeSBpbmZvcm1hdGlvblxuICAgICAgICAgICAgICAgIHByb3BzLnBhZ2VQcm9wcy5zdGF0dXNDb2RlID0gNTAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gc2hhbGxvdyByb3V0aW5nIGlzIG9ubHkgYWxsb3dlZCBmb3Igc2FtZSBwYWdlIFVSTCBjaGFuZ2VzLlxuICAgICAgICAgICAgY29uc3QgaXNWYWxpZFNoYWxsb3dSb3V0ZSA9IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZTtcbiAgICAgICAgICAgIHZhciBfc2Nyb2xsO1xuICAgICAgICAgICAgY29uc3Qgc2hvdWxkU2Nyb2xsID0gKF9zY3JvbGwgPSBvcHRpb25zLnNjcm9sbCkgIT09IG51bGwgJiYgX3Njcm9sbCAhPT0gdm9pZCAwID8gX3Njcm9sbCA6ICFpc1ZhbGlkU2hhbGxvd1JvdXRlO1xuICAgICAgICAgICAgY29uc3QgcmVzZXRTY3JvbGwgPSBzaG91bGRTY3JvbGwgPyB7XG4gICAgICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgICAgICB5OiAwXG4gICAgICAgICAgICB9IDogbnVsbDtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuc2V0KHJvdXRlLCBwYXRobmFtZTEsIHF1ZXJ5MSwgY2xlYW5lZEFzLCByb3V0ZUluZm8sIGZvcmNlZFNjcm9sbCAhPT0gbnVsbCAmJiBmb3JjZWRTY3JvbGwgIT09IHZvaWQgMCA/IGZvcmNlZFNjcm9sbCA6IHJlc2V0U2Nyb2xsKS5jYXRjaCgoZSk9PntcbiAgICAgICAgICAgICAgICBpZiAoZS5jYW5jZWxsZWQpIGVycm9yID0gZXJyb3IgfHwgZTtcbiAgICAgICAgICAgICAgICBlbHNlIHRocm93IGU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBjbGVhbmVkQXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5sb2NhbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmxhbmcgPSB0aGlzLmxvY2FsZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBjYXRjaCAoZXJyMSkge1xuICAgICAgICAgICAgaWYgKGVycjEuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgZXJyMTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMgPSB7XG4gICAgfSkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCAoMCwgX3V0aWxzKS5nZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgICAgICAgIHRoaXMuX3NoYWxsb3cgPSBvcHRpb25zLnNoYWxsb3c7XG4gICAgICAgICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKHtcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgYXMsXG4gICAgICAgICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICAgICAgICBfX046IHRydWUsXG4gICAgICAgICAgICAgICAgaWR4OiB0aGlzLl9pZHggPSBtZXRob2QgIT09ICdwdXNoU3RhdGUnID8gdGhpcy5faWR4IDogdGhpcy5faWR4ICsgMVxuICAgICAgICAgICAgfSwgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgICAgICcnLCBhcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZVByb3BzLCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoMCwgX3JvdXRlTG9hZGVyKS5pc0Fzc2V0RXJyb3IoZXJyKSB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnIsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAgICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAgICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuICAgICAgICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzO1xuICAgICAgICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAgICAgICAvLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgICAgICAgdGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpO1xuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgQ29tcG9uZW50MTtcbiAgICAgICAgICAgIGxldCBzdHlsZVNoZWV0cztcbiAgICAgICAgICAgIGxldCBwcm9wcztcbiAgICAgICAgICAgIGlmICh0eXBlb2YgQ29tcG9uZW50MSA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIHN0eWxlU2hlZXRzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICh7IHBhZ2U6IENvbXBvbmVudDEgLCBzdHlsZVNoZWV0cyAgfSA9IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy9fZXJyb3InKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByb3V0ZUluZm8gPSB7XG4gICAgICAgICAgICAgICAgcHJvcHMsXG4gICAgICAgICAgICAgICAgQ29tcG9uZW50OiBDb21wb25lbnQxLFxuICAgICAgICAgICAgICAgIHN0eWxlU2hlZXRzLFxuICAgICAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgICAgICBlcnJvcjogZXJyXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKCFyb3V0ZUluZm8ucHJvcHMpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBhd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQxLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGdpcEVycikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpO1xuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJvdXRlSW5mbztcbiAgICAgICAgfSBjYXRjaCAocm91dGVJbmZvRXJyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihyb3V0ZUluZm9FcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlUHJvcHMsIHRydWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFzeW5jIGdldFJvdXRlSW5mbyhyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcmVzb2x2ZWRBcywgcm91dGVQcm9wcykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgZXhpc3RpbmdSb3V0ZUluZm8gPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdO1xuICAgICAgICAgICAgaWYgKHJvdXRlUHJvcHMuc2hhbGxvdyAmJiBleGlzdGluZ1JvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBleGlzdGluZ1JvdXRlSW5mbztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbyA9IGV4aXN0aW5nUm91dGVJbmZvICYmICdpbml0aWFsJyBpbiBleGlzdGluZ1JvdXRlSW5mbyA/IHVuZGVmaW5lZCA6IGV4aXN0aW5nUm91dGVJbmZvO1xuICAgICAgICAgICAgY29uc3Qgcm91dGVJbmZvID0gY2FjaGVkUm91dGVJbmZvID8gY2FjaGVkUm91dGVJbmZvIDogYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbigocmVzKT0+KHtcbiAgICAgICAgICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVTaGVldHM6IHJlcy5zdHlsZVNoZWV0cyxcbiAgICAgICAgICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1BcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNvbnN0IHsgQ29tcG9uZW50OiBDb21wb25lbnQxICwgX19OX1NTRyAsIF9fTl9TU1AgIH0gPSByb3V0ZUluZm87XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlICB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcbiAgICAgICAgICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQxKSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGRhdGFIcmVmO1xuICAgICAgICAgICAgaWYgKF9fTl9TU0cgfHwgX19OX1NTUCkge1xuICAgICAgICAgICAgICAgIGRhdGFIcmVmID0gdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKCgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5XG4gICAgICAgICAgICAgICAgfSksIHJlc29sdmVkQXMsIF9fTl9TU0csIHRoaXMubG9jYWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHByb3BzID0gYXdhaXQgdGhpcy5fZ2V0RGF0YSgoKT0+X19OX1NTRyA/IHRoaXMuX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYpIDogX19OX1NTUCA/IHRoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYpIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50MSwgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxlOiB0aGlzLmxvY2FsZSxcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxlczogdGhpcy5sb2NhbGVzLFxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0TG9jYWxlOiB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzO1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mbztcbiAgICAgICAgICAgIHJldHVybiByb3V0ZUluZm87XG4gICAgICAgIH0gY2F0Y2ggKGVycjIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKGVycjIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNldChyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgZGF0YSwgcmVzZXRTY3JvbGwpIHtcbiAgICAgICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2U7XG4gICAgICAgIHRoaXMucm91dGUgPSByb3V0ZTtcbiAgICAgICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lO1xuICAgICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnk7XG4gICAgICAgIHRoaXMuYXNQYXRoID0gYXM7XG4gICAgICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhLCByZXNldFNjcm9sbCk7XG4gICAgfVxuICAgIC8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi8gYmVmb3JlUG9wU3RhdGUoY2IpIHtcbiAgICAgICAgdGhpcy5fYnBzID0gY2I7XG4gICAgfVxuICAgIG9ubHlBSGFzaENoYW5nZShhcykge1xuICAgICAgICBpZiAoIXRoaXMuYXNQYXRoKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKTtcbiAgICAgICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpO1xuICAgICAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICAgICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAgICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAgICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICAgICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2g7XG4gICAgfVxuICAgIHNjcm9sbFRvSGFzaChhcykge1xuICAgICAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJyk7XG4gICAgICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZSBvciBgI3RvcGBcbiAgICAgICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgICAgIGlmIChoYXNoID09PSAnJyB8fCBoYXNoID09PSAndG9wJykge1xuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKTtcbiAgICAgICAgaWYgKGlkRWwpIHtcbiAgICAgICAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAgICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdO1xuICAgICAgICBpZiAobmFtZUVsKSB7XG4gICAgICAgICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1cmxJc05ldyhhc1BhdGgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGg7XG4gICAgfVxuICAgIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovIGFzeW5jIHByZWZldGNoKHVybCwgYXNQYXRoID0gdXJsLCBvcHRpb25zID0ge1xuICAgIH0pIHtcbiAgICAgICAgbGV0IHBhcnNlZCA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybCh1cmwpO1xuICAgICAgICBsZXQgeyBwYXRobmFtZTogcGF0aG5hbWUyICB9ID0gcGFyc2VkO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMubG9jYWxlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lMiA9ICgwLCBfbm9ybWFsaXplTG9jYWxlUGF0aCkubm9ybWFsaXplTG9jYWxlUGF0aChwYXRobmFtZTIsIHRoaXMubG9jYWxlcykucGF0aG5hbWU7XG4gICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWUyO1xuICAgICAgICAgICAgICAgIHVybCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZCk7XG4gICAgICAgICAgICAgICAgbGV0IHBhcnNlZEFzID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKGFzUGF0aCk7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxlUGF0aFJlc3VsdCA9ICgwLCBfbm9ybWFsaXplTG9jYWxlUGF0aCkubm9ybWFsaXplTG9jYWxlUGF0aChwYXJzZWRBcy5wYXRobmFtZSwgdGhpcy5sb2NhbGVzKTtcbiAgICAgICAgICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGxvY2FsZVBhdGhSZXN1bHQucGF0aG5hbWU7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5sb2NhbGUgPSBsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlIHx8IHRoaXMuZGVmYXVsdExvY2FsZTtcbiAgICAgICAgICAgICAgICBhc1BhdGggPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKTtcbiAgICAgICAgbGV0IHJlc29sdmVkQXMgPSBhc1BhdGg7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTICYmIGFzUGF0aC5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICAgIGxldCByZXdyaXRlcztcbiAgICAgICAgICAgICh7IF9fcmV3cml0ZXM6IHJld3JpdGVzICB9ID0gYXdhaXQgKDAsIF9yb3V0ZUxvYWRlcikuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpKTtcbiAgICAgICAgICAgIGNvbnN0IHJld3JpdGVzUmVzdWx0ID0gKDAsIF9yZXNvbHZlUmV3cml0ZXMpLmRlZmF1bHQoYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGFzUGF0aCwgdGhpcy5sb2NhbGUpKSwgcGFnZXMsIHJld3JpdGVzLCBwYXJzZWQucXVlcnksIChwKT0+cmVzb2x2ZUR5bmFtaWNSb3V0ZShwLCBwYWdlcylcbiAgICAgICAgICAgICwgdGhpcy5sb2NhbGVzKTtcbiAgICAgICAgICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmV3cml0ZXNSZXN1bHQuYXNQYXRoKSwgdGhpcy5sb2NhbGUpO1xuICAgICAgICAgICAgaWYgKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlICYmIHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZikge1xuICAgICAgICAgICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICAgICAgICAgIHBhdGhuYW1lMiA9IHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZjtcbiAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZTI7XG4gICAgICAgICAgICAgICAgdXJsID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHJlc29sdmVEeW5hbWljUm91dGUocGFyc2VkLnBhdGhuYW1lLCBwYWdlcyk7XG4gICAgICAgICAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZTIpIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZTIgPSBwYXJzZWQucGF0aG5hbWU7XG4gICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWUyO1xuICAgICAgICAgICAgICAgIHVybCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgcm91dGUgPSAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lMik7XG4gICAgICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICB0aGlzLnBhZ2VMb2FkZXIuX2lzU3NnKHJvdXRlKS50aGVuKChpc1NzZyk9PntcbiAgICAgICAgICAgICAgICByZXR1cm4gaXNTc2cgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZih1cmwsIHJlc29sdmVkQXMsIHRydWUsIHR5cGVvZiBvcHRpb25zLmxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBvcHRpb25zLmxvY2FsZSA6IHRoaXMubG9jYWxlKSkgOiBmYWxzZTtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLCBcbiAgICAgICAgXSk7XG4gICAgfVxuICAgIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlKSB7XG4gICAgICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgY2FuY2VsID0gdGhpcy5jbGMgPSAoKT0+e1xuICAgICAgICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKTtcbiAgICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImApO1xuICAgICAgICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdDtcbiAgICB9XG4gICAgX2dldERhdGEoZm4pIHtcbiAgICAgICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlO1xuICAgICAgICBjb25zdCBjYW5jZWwgPSAoKT0+e1xuICAgICAgICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jbGMgPSBjYW5jZWw7XG4gICAgICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpPT57XG4gICAgICAgICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlcnIyID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJyk7XG4gICAgICAgICAgICAgICAgZXJyMi5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRocm93IGVycjI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmKSB7XG4gICAgICAgIGNvbnN0IHsgaHJlZjogY2FjaGVLZXkgIH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmICF0aGlzLmlzUHJldmlldyAmJiB0aGlzLnNkY1tjYWNoZUtleV0pIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSk9PntcbiAgICAgICAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XSA9IGRhdGE7XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmKSB7XG4gICAgICAgIGNvbnN0IHsgaHJlZjogcmVzb3VyY2VLZXkgIH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgICAgIGlmICh0aGlzLnNkcltyZXNvdXJjZUtleV0pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNkcltyZXNvdXJjZUtleV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuc2RyW3Jlc291cmNlS2V5XSA9IGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpLnRoZW4oKGRhdGEpPT57XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldO1xuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0pLmNhdGNoKChlcnIyKT0+e1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XTtcbiAgICAgICAgICAgIHRocm93IGVycjI7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCBjdHgpIHtcbiAgICAgICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcDEgIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ107XG4gICAgICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcDEpO1xuICAgICAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWU7XG4gICAgICAgIHJldHVybiAoMCwgX3V0aWxzKS5sb2FkR2V0SW5pdGlhbFByb3BzKEFwcDEsIHtcbiAgICAgICAgICAgIEFwcFRyZWUsXG4gICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICAgICAgICBjdHhcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGFib3J0Q29tcG9uZW50TG9hZChhcywgcm91dGVQcm9wcykge1xuICAgICAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSwgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgdGhpcy5jbGMoKTtcbiAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBub3RpZnkoZGF0YSwgcmVzZXRTY3JvbGwpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3ViKGRhdGEsIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQsIHJlc2V0U2Nyb2xsKTtcbiAgICB9XG59XG5Sb3V0ZXIuZXZlbnRzID0gKDAsIF9taXR0KS5kZWZhdWx0KCk7XG5leHBvcnRzLmRlZmF1bHQgPSBSb3V0ZXI7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlci5qcy5tYXAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi4vdmlld3MvTmF2YmFyXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi92aWV3cy9Gb290ZXJcIjtcblxuY2xhc3MgTWljZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgIH1cbiAgfVxuICBjb21wb25lbnREaWRNb3VudCgpIHtcblxuXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJVVEYtOFwiLz5cbiAgICAgICAgICAgIDx0aXRsZT5NaXN0eSBDb3VydHlhcmQgYnkgVVRIfCBCZXN0IEhvdGVscyBpbiBNdW5uYXJ8IEJvdXRpcXVlIGhvdGVscyBhdCBiZXN0IHByaWNlfCBCb29rIHlvdXIgc3RheVxuICAgICAgICAgICAgICBub3c8L3RpdGxlPlxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJNdW5uYXIgaXMgZ3JhbnRlZCB3aXRoIG5hdHVyZSBwYXlzIHN1Y2ggZGVsaWdodCBhbmQgZHJhd3MgYW1hemluZ2x5IGRpdmVyc2UgdHJhdmVsZXJzIHRvIGl0cyBjb29wLiBUaGUgbWlzdHkgY291cnR5YXJkIGlzIG9uZSBvZiB0aGUgYmVzdCBob3RlbHMgaW4gbXVubmFyIHByb3ZpZGVzIGFsbCBmYWNpdGllcyBhbmQgZGVsaWNpb3VzIGZvb2QuSXQgaGFzIHNvIG1hbnkgdW5pcXVlIGF0dHJhY3Rpb25zIGFuZCBhY2NvbXBhbnlpbmcgYnkgbm9uLXN0b3AgbWlzdC5cIi8+XG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwia2V5d29yZHNcIlxuICAgICAgICAgICAgICAgICAgY29udGVudD1cImJlc3QgaG90ZWxzIGluIHRoZWtrYWR5LCBiZXN0IGhvdGVscyBpbiBrb2NoaSwgYmVzdCBob3RlbHMgaW4gbXVubmFyLCBiZXN0IGhvdGVscyBpbiBiYW5nbG9yZSxiZXN0IGhvdGVscyBpbiB2YXJhbmFzaSxiZXN0IHByaWNlIGx1eHVyeSBob3RlbHMgaW4ga29jaGkgXCIvPlxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cImF1dGhvclwiIGNvbnRlbnQ9XCJVVEggR3JvdXAgT2YgSG90ZWxzXCIvPlxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcIi8+XG4gICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnR5cGVcIiBjb250ZW50PVwid2Vic2l0ZVwiIC8+XG4gICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD1cIk1pc3R5IENvdXJ0eWFyZCBieSBVVEh8IEJlc3QgSG90ZWxzIGluIE11bm5hcnwgQm91dGlxdWUgaG90ZWxzIGF0IGJlc3QgcHJpY2V8IEJvb2sgeW91ciBzdGF5XG4gICAgICAgICAgICAgIG5vd1wiIC8+XG4gICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD1cIk11bm5hciBpcyBncmFudGVkIHdpdGggbmF0dXJlIHBheXMgc3VjaCBkZWxpZ2h0IGFuZCBkcmF3cyBhbWF6aW5nbHkgZGl2ZXJzZSB0cmF2ZWxlcnMgdG8gaXRzIGNvb3AuIFRoZSBtaXN0eSBjb3VydHlhcmQgaXMgb25lIG9mIHRoZSBiZXN0IGhvdGVscyBpbiBtdW5uYXIgcHJvdmlkZXMgYWxsIGZhY2l0aWVzIGFuZCBkZWxpY2lvdXMgZm9vZC5JdCBoYXMgc28gbWFueSB1bmlxdWUgYXR0cmFjdGlvbnMgYW5kIGFjY29tcGFueWluZyBieSBub24tc3RvcCBtaXN0LlwiIC8+XG4gICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnVybFwiIGNvbnRlbnQ9XCIlUFVCTElDX1VSTCVcIiAvPlxuICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpzaXRlX25hbWVcIiBjb250ZW50PVwiVVRIIHwgR3JvdXAgb2YgSG90ZWxzXCIgLz5cbiAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBjb250ZW50PVwiaHR0cDovLzE1OS42NS4xNTMuNTkvc2l0ZS9hc3NldHMvaW1hZ2VzL2Zhdi9vZy1pbWFnZS5qcGdcIiAvPlxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6Y2FyZFwiIGNvbnRlbnQ9XCJodHRwOi8vMTU5LjY1LjE1My41OS9zaXRlL2Fzc2V0cy9pbWFnZXMvZmF2L29nLWltYWdlLmpwZ1wiIC8+XG4gICAgICAgICAgICA8bGluayByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgc2l6ZXM9XCI1N3g1N1wiIGhyZWY9XCIvYXNzZXRzL2ltYWdlcy9mYXYvYXBwbGUtaWNvbi01N3g1Ny5wbmdcIiAvPlxuICAgICAgICAgICAgPGxpbmsgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIHNpemVzPVwiNjB4NjBcIiBocmVmPVwiL2Fzc2V0cy9pbWFnZXMvZmF2L2FwcGxlLWljb24tNjB4NjAucG5nXCIgLz5cbiAgICAgICAgICAgIDxsaW5rIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBzaXplcz1cIjcyeDcyXCIgaHJlZj1cIi9hc3NldHMvaW1hZ2VzL2Zhdi9hcHBsZS1pY29uLTcyeDcyLnBuZ1wiIC8+XG4gICAgICAgICAgICA8bGluayByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgc2l6ZXM9XCI3Nng3NlwiIGhyZWY9XCIvYXNzZXRzL2ltYWdlcy9mYXYvYXBwbGUtaWNvbi03Nng3Ni5wbmdcIiAvPlxuICAgICAgICAgICAgPGxpbmsgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIHNpemVzPVwiMTE0eDExNFwiIGhyZWY9XCIvYXNzZXRzL2ltYWdlcy9mYXYvYXBwbGUtaWNvbi0xMTR4MTE0LnBuZ1wiIC8+XG4gICAgICAgICAgICA8bGluayByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgc2l6ZXM9XCIxMjB4MTIwXCIgaHJlZj1cIi9hc3NldHMvaW1hZ2VzL2Zhdi9hcHBsZS1pY29uLTEyMHgxMjAucG5nXCIgLz5cbiAgICAgICAgICAgIDxsaW5rIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBzaXplcz1cIjE0NHgxNDRcIiBocmVmPVwiL2Fzc2V0cy9pbWFnZXMvZmF2L2FwcGxlLWljb24tMTQ0eDE0NC5wbmdcIiAvPlxuICAgICAgICAgICAgPGxpbmsgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIHNpemVzPVwiMTUyeDE1MlwiIGhyZWY9XCIvYXNzZXRzL2ltYWdlcy9mYXYvYXBwbGUtaWNvbi0xNTJ4MTUyLnBuZ1wiIC8+XG4gICAgICAgICAgICA8bGluayByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgc2l6ZXM9XCIxODB4MTgwXCIgaHJlZj1cIi9hc3NldHMvaW1hZ2VzL2Zhdi9hcHBsZS1pY29uLTE4MHgxODAucG5nXCIgLz5cbiAgICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiB0eXBlPVwiaW1hZ2UvcG5nXCIgc2l6ZXM9XCIxOTJ4MTkyXCIgaHJlZj1cIi9hc3NldHMvaW1hZ2VzL2Zhdi9hbmRyb2lkLWljb24tMTkyeDE5Mi5wbmdcIiAvPlxuICAgICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIHR5cGU9XCJpbWFnZS9wbmdcIiBzaXplcz1cIjMyeDMyXCIgaHJlZj1cIi9hc3NldHMvaW1hZ2VzL2Zhdi9mYXZpY29uLTMyeDMyLnBuZ1wiIC8+XG4gICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgdHlwZT1cImltYWdlL3BuZ1wiIHNpemVzPVwiOTZ4OTZcIiBocmVmPVwiL2Fzc2V0cy9pbWFnZXMvZmF2L2Zhdmljb24tOTZ4OTYucG5nXCIgLz5cbiAgICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiB0eXBlPVwiaW1hZ2UvcG5nXCIgc2l6ZXM9XCIxNngxNlwiIGhyZWY9XCIvYXNzZXRzL2ltYWdlcy9mYXYvZmF2aWNvbi0xNngxNi5wbmdcIiAvPlxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cIm1zYXBwbGljYXRpb24tVGlsZUltYWdlXCIgY29udGVudD1cIi9hc3NldHMvaW1hZ2VzL2Zhdi9tcy1pY29uLTE0NHgxNDQucG5nXCIgLz5cbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOnRpdGxlXCIgY29udGVudD1cIlVUSCB8IEdyb3VwIG9mIEhvdGVsc1wiIC8+XG5cbiAgICAgICAgICA8L0hlYWQ+XG5cbiAgICAgICAgICA8bWFpbj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyLXBhZ2UgbGlzdGluZ1wiPlxuXG4gICAgICAgICAgICAgICAgPE5hdmJhci8+XG5cbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJkZXRhaWxzLWJhbm5lci1ibG9jayBpbWFnZS1zaGFkZVwiPlxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuL2Fzc2V0cy9pbWFnZXMvbWljZS1iYW5uZXIuanBnXCIvPlxuXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcm91c2VsLXRleHQtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aDE+TS5JLkMuRTwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWFyZWEgdGV4dC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24taGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGg1Pk1lZXRpbmc8L2g1PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8cD5TdGF5IHdlbGwtZGVmaW5lZCwgb3JnYW5pc2VkIGFuZCBoZWFsdGh5IHBvc2l0aXZlIGhlcmUuIENvbm5lY3QgeW91ciBjb2xsZWFndWVzIGFuZCBoYXZlIGFcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbmRmdWwgd2F5IG9mIGhvbGRpbmcgdGhpbmdzIHRvZ2V0aGVyLiBHZXQgY29ubmVjdGVkIGJ5IGhlYXJ0ITwvcD5cblxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBpbi1iYW5uZXIgY29sLW1kLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwaW50aWxlLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmlndXJlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuL2Fzc2V0cy9pbWFnZXMvYnVzaW5lc3MtbWVldGluZy5qcGdcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwaW50aWxlLWRlY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5CdXNpbmVzcyBNZWV0aW5nPC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPldlIFVUSCBHcm91cCBvZiBIb3RlbHMgYXJlIGhhcHB5IHRvIHByb3ZpZGUgdGhlIGJlc3Qgc2VydmljZSBmb3IgeW91ciBkZXNpZ25hdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJ1c2luZXNzIG1lZXRpbmdzIHdpdGggaW50ZXJuYXRpb25hbCBzdGFuZGFyZHMuIE91ciBleHBlcmllbmNlZCB0ZWFtIGNyZXcgd2lsbCBiZSBoYXBweVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0byBob3N0IGFuZCBwcm92aWRlIGFtcGxlIHNwYWNlIGZvciBDb25mZXJlbmNlIEhhbGwsIGJhbnF1ZXQgaGFsbHMsIGJvYXJkIHJvb21zIGFuZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRkb29yIHZlbnVlcyBmb3IgbWVldGluZ3MgZm9yIGFueSByYW5nZSB3aXRoIGFsbCBncm91bmQgaGFuZGxpbmcgYXJyYW5nZW1lbnRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluY2x1ZGluZywgdHJhbnNwb3J0YXRpb24sIHRvdXJzIGFuZCBtYW55IG1vcmUuPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwaW4tYmFubmVyIGNvbC1tZC02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGludGlsZS1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9hc3NldHMvaW1hZ2VzL29ubGluZS1tZWV0aW5nLmpwZ1wiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBpbnRpbGUtZGVjcmlwdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PlZpcnR1YWwgTWVldGluZyAvIE9ubGluZSBNZWV0aW5nPC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkV2ZXJ5b25lIGZyb20gZGlmZmVyZW50IGdlb2dyYXBoaWMgbG9jYXRpb25zIGdhdGhlcmluZyBmb3IgcGh5c2ljYWwgbWVldGluZ3MgaGFzIG5vd1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0dW5lZCB1cCB0byB2aXJ0dWFsIG1lZXRpbmcgc3BhY2VzLiBPdXIgZXhwZXJpZW5jZWQgdGVhbSB0dW5lcyB1cCB0aGUgdmlydHVhbCBtZWV0aW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwYWNlIHdpdGggdGhlIGxhdGVzdCBzdGF0ZSBvZiBhcnQgdGVjaG5vbG9neTsgY29ubmVjdGluZyB0aHJvdWdoIHRoZSBsYXRlc3Qgc29mdHdhcmUgdG9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZHVjdCB0aGUgbWVldGluZ3MsIHdpdGggcHJlc2VudGF0aW9uIHNwYWNlLCBjaGF0IHByaXZhdGUgLyBwdWJsaWMsIHZpZGVvIGFuZCBhdWRpb1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoIHVubGltaXRlZCB0aW1pbmdzIGFzIHBlciByZXF1aXJlbWVudHMuIFdlIGhhdmUgd2VsbC10dW5lZCBJVCB0ZWFtIGZvciBvZmZlcmluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWaXJ0dWFsIE1lZXRpbmdzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBpbi1iYW5uZXIgY29sLW1kLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwaW50aWxlLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmlndXJlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuL2Fzc2V0cy9pbWFnZXMvY29uZmlkZW50aWFsLW1lZXRpbmcuanBnXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGludGlsZS1kZWNyaXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+Qm9hcmQgUm9vbSBNZWV0aW5ncyAvIENvbmZpZGVudGlhbCBtZWV0aW5nczwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5XZSBhcmUgZGVsaWdodGVkIHRvIHByb3ZpZGUgeW91IHRoZSBjb25maWRlbnRpYWwgLyBib2FyZCBtZWV0aW5nIHdpdGggYmVzdCBmYWNpbGl0aWVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluIHlvdXIgcHJlZmVycmVkIGRlc3RpbmF0aW9uLiBPdXIgdGVhbSB3aWxsIGJlIHNlYW1sZXNzbHkgaGFuZGxpbmcgdGhlIHJpZ2h0IHZlbnVlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFjaWxpdGllcywgZGluaW5nIGFuZCBhY2NvbW1vZGF0aW9uLiBXZSBoYXZlIGEgZGVkaWNhdGVkIHRlYW0gdG8gaGFuZGxlIGFsbCBraW5kIG9mXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZGVudGlhbCBtZWV0aW5ncyBhbmQgdGhleSBhcmUgY2FwYWJsZSB0byBtYW5hZ2UgZXZlbiB5b3VyIGxhc3QgbWludXRlIHJlcXVpcmVtZW50c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJpbmcgdGhlIG1lZXRpbmcuPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwaW4tYmFubmVyIGNvbC1tZC02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGludGlsZS1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9hc3NldHMvaW1hZ2VzL2NvcnBvcmF0ZS1tZWV0aW5nLmpwZ1wiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBpbnRpbGUtZGVjcmlwdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PkNvcnBvcmF0ZSBtZWV0aW5nPC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkFjY29yZGluZyB0byB0aGUgY2hhcmFjdGVyIGFuZCBzaXplIG9mIHRoZSBjb3Jwb3JhdGUgbWVldGluZywgd2UgY2FuIGRlc2lnbiB3aG9sZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9ncmFtbWUgaW4gYSB2ZXJ5IGhpZ2hseSBwcm9mZXNzaW9uYWwgd2F5LiBJdCBjYW4gYmUgdmVudWUsIGFycmFuZ2VtZW50cyBvZiBtZWV0aW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChGb3JtYWwgJiBJbmZvcm1hbCksIGN1bHR1cmFsIHNob3dzLCB0ZWFtIGJ1aWxkaW5nIHByb2dyYW1tZSwgdGhlbWUgYnVmZmV0cywgSEkgVGVhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2dyYW1tZSwgaW50ZXJhY3Rpb25zLCBhY2NvbW1vZGF0aW9uLCB0cmFuc3BvcnRhdGlvbiBldGMuPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvb20tc2VjdGlvblwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxoNT5JbmNlbnRpdmU8L2g1PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8cD5BIG1lZXRpbmcgZXZlbnQgYXMgcGFydCBvZiBhIHByb2dyYW1tZSwgd2hpY2ggaXMgb2ZmZXJlZCB0byBpdHMgZGVsZWdhdGVzIHRvIHJld2FyZCB0aGUgcmVzdWx0XG4gICAgICAgICAgICAgICAgICAgICAgICBvZiB0aGVpciB0YXJnZXRzIC8gcGVyZm9ybWFuY2UgaW4gZ2VuZXJhbC48L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwaW4tYmFubmVyIGNvbC1tZC02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGludGlsZS1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9hc3NldHMvaW1hZ2VzL2luY2VudGl2ZS1zYWxlcy5qcGdcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwaW50aWxlLWRlY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5TYWxlczwvaDU+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGluLWJhbm5lciBjb2wtbWQtNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBpbnRpbGUtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmaWd1cmU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4vYXNzZXRzL2ltYWdlcy9pbmNlbnRpdmUtZmluYW5jaWFsLmpwZ1wiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBpbnRpbGUtZGVjcmlwdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PkZpbmFuY2lhbDwvaDU+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGluLWJhbm5lciBjb2wtbWQtNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBpbnRpbGUtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmaWd1cmU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4vYXNzZXRzL2ltYWdlcy9pbmNlbnRpdmUtYnVzaW5lc3MuanBnXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGludGlsZS1kZWNyaXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+QnVzaW5lc3M8L2g1PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBpbi1iYW5uZXIgY29sLW1kLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwaW50aWxlLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmlndXJlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuL2Fzc2V0cy9pbWFnZXMvaW5jZW50aXZlLXdlbGxuZXNzLmpwZ1wiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBpbnRpbGUtZGVjcmlwdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PldlbGxuZXNzPC9oNT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWFyZWEgdGV4dC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24taGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGg1PkNvbmZlcmVuY2U8L2g1PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8cD5NYWtlIHlvdXIgY29uZmVyZW5jZXMgbGl2ZSAmIGNvbmZpZGVudGlhbCB3aXRoaW4gb3VyIGhvdGVscyBhbmQgcmVzb3J0cy4gTGV0IHlvdXIgZGVsZWdhdGVzXG4gICAgICAgICAgICAgICAgICAgICAgICBnYXRoZXIgaGVyZSB3aXRoIHNwcm91dGluZyB0aG91Z2h0cyAmIGlkZWFzLiBDb252ZXJnZSB5b3VyIGJlc3QgdGhvdWdodHMhPC9wPlxuXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGluLWJhbm5lciBjb2wtbWQtNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBpbnRpbGUtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmaWd1cmU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4vYXNzZXRzL2ltYWdlcy9idXNpbmVzcy1jb25mZXJlbmNlLmpwZ1wiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBpbnRpbGUtZGVjcmlwdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PkJ1c2luZXNzPC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPldlIFVUSCBHcm91cCBvZiBIb3RlbHMgYXJlIGhhcHB5IHRvIHByb3ZpZGUgdGhlIGJlc3Qgc2VydmljZSBmb3IgeW91ciBkZXNpZ25hdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJ1c2luZXNzIG1lZXRpbmdzIHdpdGggaW50ZXJuYXRpb25hbCBzdGFuZGFyZHMuIE91ciBleHBlcmllbmNlZCB0ZWFtIGNyZXcgd2lsbCBiZSBoYXBweVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0byBob3N0IGFuZCBwcm92aWRlIGFtcGxlIHNwYWNlIGZvciBDb25mZXJlbmNlIEhhbGwsIGJhbnF1ZXQgaGFsbHMsIGJhbGwgcm9vbXMgYW5kXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dGRvb3IgdmVudWVzIGZvciBtZWV0aW5ncyBmb3IgYW55IHJhbmdlIHdpdGggYWxsIGdyb3VuZCBoYW5kbGluZyBhcnJhbmdlbWVudHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5jbHVkaW5nLCB0cmFuc3BvcnRhdGlvbiwgdG91cnMgYW5kIG1hbnkgbW9yZS48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBpbi1iYW5uZXIgY29sLW1kLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwaW50aWxlLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmlndXJlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuL2Fzc2V0cy9pbWFnZXMvc2VtaW5hci5qcGdcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwaW50aWxlLWRlY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5TZW1pbmFyPC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPk91ciB0ZWFtIHVuZGVyc3RhbmRzIHRoZSBjaG9pY2Ugb2YgaW1wb3J0YW5jZSBvZiB5b3VyIHRoZW1lIGFuZCB3ZSBkZWxlZ2F0ZSB0aGUgc2FtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoIHV0bW9zdCBjYXJlIGFuZCB2aXNpb24uIFRoZSBtZWV0aW5ncyBoYWxsIGFyZSBlcXVpcHBlZCB3aXRoIHN0YXRlIG9mIGFydCBBVlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWNpbGl0aWVzLiBXZSBoYW5kbGUgdGhlIGVudGlyZSBzdHJlYW0gb2YgcHJvY2VzcyB3aXRoIGRlbGVnYXRlIGFycml2YWwgaW4gdGhlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uLCBhcyB3ZWxsIGFzIHZlbnVlIHdpdGggdGhlbWUsIHRoZSBhdWRpbyBhbmQgdmlzdWFsIHNldCB1cCwgdGhlIGRpbmluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBlcmllbmNlIHdpdGggdmFyaWV0eSBvZiB1bmlxdWUgbWVudSB3aXRoIHRoZSBzcGVjdGFjdWxhciBiZXZlcmFnZXMsIHdpdGggdGhlIGJlc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50ZXJ0YWlubWVudCBvcHRpb25zLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGluLWJhbm5lciBjb2wtbWQtNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBpbnRpbGUtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmaWd1cmU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4vYXNzZXRzL2ltYWdlcy92aXJ0dWFsLW1lZXRpbmcuanBnXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGludGlsZS1kZWNyaXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+VmlydHVhbCBNZWV0aW5nIC8gT25saW5lIE1lZXRpbmc8L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+RXZlcnlvbmUgZnJvbSBkaWZmZXJlbnQgZ2VvZ3JhcGhpYyBsb2NhdGlvbnMgZ2F0aGVyaW5nIGZvciBwaHlzaWNhbCBtZWV0aW5ncyBoYXMgbm93XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR1bmVkIHVwIHRvIHZpcnR1YWwgbWVldGluZyBzcGFjZXMuIE91ciBleHBlcmllbmNlZCB0ZWFtIHR1bmVzIHVwIHRoZSB2aXJ0dWFsIG1lZXRpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BhY2Ugd2l0aCB0aGUgbGF0ZXN0IHN0YXRlIG9mIGFydCB0ZWNobm9sb2d5OyBjb25uZWN0aW5nIHRocm91Z2ggdGhlIGxhdGVzdCBzb2Z0d2FyZSB0b1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25kdWN0IHRoZSBtZWV0aW5ncywgd2l0aCBwcmVzZW50YXRpb24gc3BhY2UsIGNoYXQgcHJpdmF0ZSAvIHB1YmxpYywgdmlkZW8gYW5kIGF1ZGlvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGggdW5saW1pdGVkIHRpbWluZ3MgYXMgcGVyIHJlcXVpcmVtZW50cy4gV2UgaGF2ZSB3ZWxsLXR1bmVkIElUIHRlYW0gZm9yIG9mZmVyaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZpcnR1YWwgTWVldGluZ3MgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwaW4tYmFubmVyIGNvbC1tZC02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGludGlsZS1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9hc3NldHMvaW1hZ2VzL3Jlc2lkZW5jZS1jb25mZXJlbmNlLmpwZ1wiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBpbnRpbGUtZGVjcmlwdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PlJlc2lkZW5jZSBDb25mZXJlbmNlLjwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5XZSBhcmUgZGVsaWdodGVkIHRvIGJlIHRoZSBob3N0IG9mIHlvdXIgY29uZmVyZW5jZSB3aXRoIGFjY29tbW9kYXRpb24gaW4gdGhlIHJpZ2h0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlbnVlLiBPdXIgY2hvaWNlIG9mIGV4Y2VsbGVudCBkaW5pbmcgdmVudWUgd2l0aCB2YXJpZXR5IG9mIGN1aXNpbmVzLCBlbnRlcnRhaW5tZW50IGFuZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYW55IG1vcmUuIEFjY29yZGluZyB0byB0aGUgY2hvaWNlIG9mIHJhbmdlIG9mIHJvb21zIGZvciBhY2NvbW1vZGF0aW9uLCBvdXIgdGVhbSB3aWxsIGJlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdsYWQgdG8gb2ZmZXIgdGhlIHJpZ2h0IGNob2ljZXMuIFdlIGNhbiBwcm92aWRlIHRyYXZlbCBkZXNrLCBjdWx0dXJhbCBzaG93LCBjb2NrdGFpbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaW5uZXJzLCBsaXZlIHN0YXIgYmFuZHMuIEV0Yy4gT3VyIGFycmF5IG9mIG9wdGlvbnMgd2lsbCBoZWxwIHlvdSB0byBjaG9vc2UgdGhlIHJpZ2h0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1peCBhbmQgbWF0Y2guPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvb20tc2VjdGlvblwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxoNT5FdmVudHM8L2g1PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8cD5SZWRlZmluZSB0aGUgYmVzdCBtb21lbnRzIG9mIHlvdXIgbGlmZSwgaGF2ZSBhIHNwbGVuZGlkIGdvIHdpdGggeW91ciBldmVudHMgYW5kIHdlZGRpbmdzLlxuICAgICAgICAgICAgICAgICAgICAgICAgRXllLWNhdGNoIHBlcmZlY3Rpb24gYW5kIGZlZWwgdGhlIHVuZXhwZWN0ZWRuZXNzLiBHbyBtb3JlIHRoYW4ganVzdCBub3JtYWwhPC9wPlxuXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGluLWJhbm5lciBjb2wtbWQtNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBpbnRpbGUtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmaWd1cmU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4vYXNzZXRzL2ltYWdlcy9wcm9kdWN0LWxhdW5jaC5qcGdcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwaW50aWxlLWRlY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5Qcm9kdWN0IExhdW5jaDwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5JdOKAmXMgYSBicmFuZCBuZXcgbGF1bmNoIOKAkyB5ZXMhIHlvdSBhcmUgY29ubmVjdGluZyB3aXRoIG1vc3Qgc29waGlzdGljYXRlZCDigJhUZWFtIFVUSOKAmS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgV2UgaGFuZGxlIHRoZSBlbnRpcmUgc3RyZWFtIG9mIHByb2Nlc3Mgd2l0aCBkZWxlZ2F0ZSBhcnJpdmFsIGluIHRoZSBkZXN0aW5hdGlvbiwgYXMgd2VsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcyB2ZW51ZSB3aXRoIHRoZW1lLCB0aGUgYXVkaW8gYW5kIHZpc3VhbCBzZXQgdXAsIHRoZSBkaW5pbmcgZXhwZXJpZW5jZSB3aXRoIHZhcmlldHkgb2ZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5pcXVlIG1lbnUgd2l0aCB0aGUgc3BlY3RhY3VsYXIgYmV2ZXJhZ2VzLCB3aXRoIHRoZSBiZXN0IGVudGVydGFpbm1lbnQgb3B0aW9ucy4gV2UgY2FuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW4gcHJvdmlkZSBzdGFyIG5pZ2h0cyBmb3IgcHJvZHVjdCBsYXVuY2guIFdlIGNhbiBhc3Npc3QgdG8gYXJyYW5nZSBwcmVzcyBtZWV0IGR1cmluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0IGxhdW5jaC4gVGhlIHZlbnVlIGNhbiBlaXRoZXIgYmUgaW5kb29yIGFuZCBvdXRkb29yLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGluLWJhbm5lciBjb2wtbWQtNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBpbnRpbGUtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmaWd1cmU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4vYXNzZXRzL2ltYWdlcy9jb3Jwb3JhdGUtZ2F0aGVyaW5nLmpwZ1wiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBpbnRpbGUtZGVjcmlwdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PkNvcnBvcmF0ZSBHYXRoZXJpbmc8L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+Q2VsZWJyYXRpbmcgc3VjY2VzcyBtaWxlIHN0b25lcyBvciBhbiBhbm51YWwgcGFydHkgZm9yIHRoZSB3ZWxsLXdpc2hlcnMgYW5kIHlvdXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW1wbG95ZWVzOyBTdGFyIEF3YXJkIE5pZ2h0cywgRmFzaGlvbiBTaG93cywgcHJlc3MgbWVldCAvIHBoYXJtYWNldXRpY2FsIG9yIERvY3RvcnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRzIOKAkyBPbmUgc3RvcCBwb2ludCBmb3IgdmlicmFudCB0ZWFtIHRvIGhhbmRsZSB0aGUgc2FtZS4gT3VyIHRlYW0gYXJyYW5nZSB0aGUgdG90YWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvdyB3aXRoIHRoZSBsYXRlc3Qgc3RhdGUgb2YgYXJ0IEF1ZGlvIGFuZCBWaWRlbywgZ2FsYSBkaW5uZXIsIHNvbG8gZW50ZXJ0YWluZXJzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZWxlYnJpdGllcywgY29ja3RhaWwgdGhlbWVzLiBBZGRpdGlvbmFsIHRvIHRoZSBldmVudCwgd2UgY2FuIGFycmFuZ2UgdGhlIHRyYXZlbCBkZXNrIGFzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdlbGwgYXMgc3RheSBpbiBhcHByb3ByaWF0ZSByZXNvcnRzIC8gaG90ZWxzLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGluLWJhbm5lciBjb2wtbWQtNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBpbnRpbGUtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmaWd1cmU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4vYXNzZXRzL2ltYWdlcy93ZWRkaW5nLWV2ZW50cy5qcGdcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwaW50aWxlLWRlY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5XZWRkaW5nPC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPldlIHVuZGVyc3RhbmQgdGhlIG5lZWQgb2YgdGhlIGxpZmUgdGltZSBtb21lbnQg4oCTIHRoZSB3ZWRkaW5nIOKAkyBUaGUgdGhlbWVzIChIaW5kdSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2hyaXN0aWFuLCBhbmQgTXVzbGltLCBub24tcmVsaWdpb3VzLCB0cmFkaXRpb25hbCBvciBpbnRlcm5hdGlvbmFsKSwgdGhlIG1lbnVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKFRyYWRpdGlvbmFsLCBJbnRlcm5hdGlvbmFsLCBmdXNpb24gYW5kIHRoZW1lIGJ1ZmZldCksIHRoZSBzZXQtdXAsIHRoZSBsaXZlIG11c2ljLCB0aGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlnaHRpbmdzLCB0aGUgY2hhcm0sIHRoZSBtb21lbnRzIGFsbCB1bmlxdWUgZm9yIGV2ZXJ5IHdlZGRpbmcuIFdlIGhhbmRsZSB0aGUgZW50aXJlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cmVhbSBvZiBwcm9jZXNzIHdpdGggdGhlIGd1ZXN04oCZcyBhcnJpdmFsIGluIHRoZSBkZXN0aW5hdGlvbiwgYXMgd2VsbCBhcyB2ZW51ZSB3aXRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZW1lLCB0aGUgYXVkaW8gYW5kIHZpc3VhbCBzZXQgdXAsIHRoZSBkaW5pbmcgZXhwZXJpZW5jZSB3aXRoIHZhcmlldHkgb2YgdW5pcXVlIG1lbnVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aCB0aGUgc3BlY3RhY3VsYXIgYmV2ZXJhZ2VzLCB3aXRoIHRoZSBiZXN0IGVudGVydGFpbm1lbnQgb3B0aW9ucy4gV2Ugd2lsbCBlbnN1cmUgdGhpc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudCBnaXZpbmcgZXZlciBncmVlbiBtZW1vcnkgZm9yIG5vdCBvbmx5IG51cHRpYWxzLCBidXQgYWxzbyBmb3IgZW50aXJlIHRlYW0gd2hvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dGVuZCB0aGlzIGV2ZW50LiBCZWNhdXNlIG91ciBkZWRpY2F0ZWQgdGVhbSB3aWxsIGRlc2lnbiB0aGUgZXZlbnQgaW4gYSBjaGFybWluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbm5vdmF0aXZlIHdheS48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBpbi1iYW5uZXIgY29sLW1kLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwaW50aWxlLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmlndXJlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuL2Fzc2V0cy9pbWFnZXMvdmlydHVhbC1ldmVudHMuanBnXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGludGlsZS1kZWNyaXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+VmlydHVhbCBFdmVudHM8L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+QmUgaXQgYW4gZWR1Y2F0aW9uIGZhaXIgZXZlbnQgLyBicmFuZCBsYXVuY2hpbmcgZXZlbnQgb25saW5lIOKAkyBVVEggR3JvdXAgaXMgdGhlIHJpZ2h0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNob2ljZS4gT3VyIGV4cGVyaWVuY2VkIElUIHRlYW0gdHVuZXMgdXAgdGhlIHZpcnR1YWwgbWVldGluZyBzcGFjZSB3aXRoIHRoZSBsYXRlc3Qgc3RhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2YgYXJ0IHRlY2hub2xvZ3k7IGNvbm5lY3RpbmcgdGhyb3VnaCB0aGUgbGF0ZXN0IHNvZnR3YXJlcyB0byBjb25kdWN0IHRoZSBtZWV0aW5ncywgd2l0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW50YXRpb24gc3BhY2UsIGNoYXQgcHJpdmF0ZSAvIHB1YmxpYywgdmlkZW8gYW5kIGF1ZGlvIHdpdGggdW5saW1pdGVkIHRpbWluZ3MgYXMgcGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVtZW50cy4gV2UgaGF2ZSB3ZWxsLXR1bmVkIElUIHRlYW0gZm9yIG9mZmVyaW5nIFZpcnR1YWwgTWVldGluZ3MuPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPEZvb3Rlci8+XG5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGEgaWQ9XCJiYWNrLXRvLXRvcFwiIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYmFjay10by10b3BcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0b3BcIj48L3NwYW4+XG4gICAgICAgICAgICAgIDwvYT5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9tYWluPlxuICAgICAgICAgIDwvPlxuICAgIClcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgTWljZTsiLCJpbXBvcnQge0FQSV9QQVRIfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRSZXF1ZXN0cyh1cmwsIHBhcmFtcykge1xyXG4gICAgbGV0IHF1ZXJ5U3RyID0gJz8nO1xyXG4gICAgbGV0IGkgPTA7XHJcbiAgICBpZihwYXJhbXMgJiYgT2JqZWN0LmtleXMocGFyYW1zKS5sZW5ndGggPiAwKXtcclxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gcGFyYW1zKSB7XHJcbiAgICAgICAgICAgIGlmIChwYXJhbXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgaWYoaT4wKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcXVlcnlTdHIgKz0gJyYnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcXVlcnlTdHIgKz0gIGtleSArJz0nKyBwYXJhbXNba2V5XSA7XHJcbiAgICAgICAgICAgICAgICBpKys7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHVybCA9IHVybCtxdWVyeVN0clxyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2codXJsKVxyXG4gICAgcmV0dXJuIGZldGNoKEFQSV9QQVRIK3VybClcclxuICAgICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAudGhlbihcclxuICAgICAgICAgICAgKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy90aGlzLnNldFN0YXRlKHtmYWNpbGl0aWVzIDogcmVzdWx0LnJlc3VsdHMuZGF0YX0pXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAvLyBOb3RlOiBpdCdzIGltcG9ydGFudCB0byBoYW5kbGUgZXJyb3JzIGhlcmVcclxuICAgICAgICAgICAgLy8gaW5zdGVhZCBvZiBhIGNhdGNoKCkgYmxvY2sgc28gdGhhdCB3ZSBkb24ndCBzd2FsbG93XHJcbiAgICAgICAgICAgIC8vIGV4Y2VwdGlvbnMgZnJvbSBhY3R1YWwgYnVncyBpbiBjb21wb25lbnRzLlxyXG4gICAgICAgICAgICAoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIClcclxuXHJcblxyXG5cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gcG9zdFJlcXVlc3RzKHVybCwgcGFyYW1zKXtcclxuICAgIGFzeW5jIGZ1bmN0aW9uIHBvc3REYXRhKHVybCA9ICcnLCBkYXRhID0ge30pIHtcclxuICAgICAgICAvLyBEZWZhdWx0IG9wdGlvbnMgYXJlIG1hcmtlZCB3aXRoICpcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKEFQSV9QQVRIK3VybCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJywgLy8gKkdFVCwgUE9TVCwgUFVULCBERUxFVEUsIGV0Yy5cclxuICAgICAgICAgICAgbW9kZTogJ2NvcnMnLCAvLyBuby1jb3JzLCAqY29ycywgc2FtZS1vcmlnaW5cclxuICAgICAgICAgICAgY2FjaGU6ICduby1jYWNoZScsIC8vICpkZWZhdWx0LCBuby1jYWNoZSwgcmVsb2FkLCBmb3JjZS1jYWNoZSwgb25seS1pZi1jYWNoZWRcclxuICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsIC8vIGluY2x1ZGUsICpzYW1lLW9yaWdpbiwgb21pdFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgICAgICAvLyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHJlZGlyZWN0OiAnZm9sbG93JywgLy8gbWFudWFsLCAqZm9sbG93LCBlcnJvclxyXG4gICAgICAgICAgICByZWZlcnJlclBvbGljeTogJ25vLXJlZmVycmVyJywgLy8gbm8tcmVmZXJyZXIsICpuby1yZWZlcnJlci13aGVuLWRvd25ncmFkZSwgb3JpZ2luLCBvcmlnaW4td2hlbi1jcm9zcy1vcmlnaW4sIHNhbWUtb3JpZ2luLCBzdHJpY3Qtb3JpZ2luLCBzdHJpY3Qtb3JpZ2luLXdoZW4tY3Jvc3Mtb3JpZ2luLCB1bnNhZmUtdXJsXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpIC8vIGJvZHkgZGF0YSB0eXBlIG11c3QgbWF0Y2ggXCJDb250ZW50LVR5cGVcIiBoZWFkZXJcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpOyAvLyBwYXJzZXMgSlNPTiByZXNwb25zZSBpbnRvIG5hdGl2ZSBKYXZhU2NyaXB0IG9iamVjdHNcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcG9zdERhdGEodXJsLCBwYXJhbXMpXHJcbiAgICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpOyAvLyBKU09OIGRhdGEgcGFyc2VkIGJ5IGBkYXRhLmpzb24oKWAgY2FsbFxyXG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICB9KTtcclxuXHJcbn0iLCJpbXBvcnQgKiBhcyBjb21tb25TZXJ2aWNlIGZyb20gXCIuL2NvbW1vbi5zZXJ2aWNlc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGhvdGVsID0ge1xyXG4gICAgZ2V0SG90ZWxMaXN0LFxyXG4gICAgZ2V0SG90ZWxDYXRlZ29yeUxpc3QsXHJcbiAgICBnZXRGYWNpbGl0aWVzLFxyXG4gICAgZ2V0SG90ZWxEZXRhaWwsXHJcbiAgICBnZXRIb3RlbERldGFpbFYyLFxyXG4gICAgZ2V0Um9vbVR5cGVzLFxyXG4gICAgc2F2ZUNvbnRhY3QsXHJcbiAgICBzZWFyY2hSb29tcyxcclxuICAgIHNhdmVCb29raW5nLFxyXG4gICAgY29uZmlybUJvb2tpbmcsXHJcbiAgICBnZXRCYW5uZXJJbWFnZXMsXHJcbiAgICBnZXRIb3RlbEhpZ2hsaWdodHMsXHJcbiAgICBnZXRIb3RlbFBvbGljaWVzLFxyXG4gICAgZ2V0U3BSZXF1ZXN0c1xyXG59O1xyXG5cclxuZnVuY3Rpb24gZ2V0SG90ZWxMaXN0KHBhcmFtcykge1xyXG4gICAgcmV0dXJuIGNvbW1vblNlcnZpY2UuZ2V0UmVxdWVzdHMoJ2hvdGVsL2hvdGVsbGlzdCcsIHBhcmFtcyk7XHJcbn1cclxuZnVuY3Rpb24gZ2V0SG90ZWxDYXRlZ29yeUxpc3QocGFyYW1zKSB7XHJcbiAgICByZXR1cm4gY29tbW9uU2VydmljZS5nZXRSZXF1ZXN0cygnaG90ZWwvaG90ZWxjYXRlZ29yeWxpc3QnLCBwYXJhbXMpO1xyXG59XHJcbmZ1bmN0aW9uIGdldEZhY2lsaXRpZXMocGFyYW1zKSB7XHJcbiAgICByZXR1cm4gY29tbW9uU2VydmljZS5nZXRSZXF1ZXN0cygnaG90ZWwvbWFzdGVyZmFjaWxpdGllcycsIHBhcmFtcyk7XHJcbn1cclxuZnVuY3Rpb24gZ2V0SG90ZWxEZXRhaWwocGFyYW1zKSB7XHJcbiAgICAvL3JldHVybiBjb21tb25TZXJ2aWNlLmdldFJlcXVlc3RzKCdob3RlbC9ob3RlbGRldGFpbHMnLCBwYXJhbXMpO1xyXG4gICAgcmV0dXJuIGNvbW1vblNlcnZpY2UuZ2V0UmVxdWVzdHMoJ2hvdGVsL2hvdGVsZGV0YWlsc3YxJywgcGFyYW1zKTtcclxufVxyXG5mdW5jdGlvbiBnZXRIb3RlbERldGFpbFYyKHBhcmFtcykge1xyXG4gICAgLy9yZXR1cm4gY29tbW9uU2VydmljZS5nZXRSZXF1ZXN0cygnaG90ZWwvaG90ZWxkZXRhaWxzJywgcGFyYW1zKTtcclxuICAgIHJldHVybiBjb21tb25TZXJ2aWNlLmdldFJlcXVlc3RzKCdob3RlbC9ob3RlbGRldGFpbHN2MicsIHBhcmFtcyk7XHJcbn1cclxuZnVuY3Rpb24gZ2V0Um9vbVR5cGVzKHBhcmFtcykge1xyXG4gICAgcmV0dXJuIGNvbW1vblNlcnZpY2UuZ2V0UmVxdWVzdHMoJ2hvdGVsL3Jvb210eXBlJywgcGFyYW1zKTtcclxufVxyXG5mdW5jdGlvbiBzYXZlQ29udGFjdChwYXJhbXMpIHtcclxuICAgIHJldHVybiBjb21tb25TZXJ2aWNlLnBvc3RSZXF1ZXN0cygnbG9naW4vc2F2ZWNvbnRhY3R1cycsIHBhcmFtcyk7XHJcbn1cclxuZnVuY3Rpb24gc2VhcmNoUm9vbXMocGFyYW1zKSB7XHJcbiAgICByZXR1cm4gY29tbW9uU2VydmljZS5nZXRSZXF1ZXN0cygnaG90ZWwvc2VhcmNocm9vbXMnLCBwYXJhbXMpO1xyXG59XHJcbmZ1bmN0aW9uIHNhdmVCb29raW5nKHBhcmFtcykge1xyXG4gICAgcmV0dXJuIGNvbW1vblNlcnZpY2UucG9zdFJlcXVlc3RzKCdob3RlbC9zYXZlaG90ZWxib29raW5nJywgcGFyYW1zKTtcclxufVxyXG5mdW5jdGlvbiBjb25maXJtQm9va2luZyhwYXJhbXMpIHtcclxuICAgIHJldHVybiBjb21tb25TZXJ2aWNlLnBvc3RSZXF1ZXN0cygnaG90ZWwvY29uZmlybWhvdGVsYm9va2luZycsIHBhcmFtcyk7XHJcbn1cclxuZnVuY3Rpb24gZ2V0QmFubmVySW1hZ2VzKHBhcmFtcykge1xyXG4gICAgcmV0dXJuIGNvbW1vblNlcnZpY2UuZ2V0UmVxdWVzdHMoJ2hvdGVsL2hvdGVsYmFubmVyaW1hZ2VzJywgcGFyYW1zKTtcclxufVxyXG5mdW5jdGlvbiBnZXRIb3RlbEhpZ2hsaWdodHMocGFyYW1zKSB7XHJcbiAgICByZXR1cm4gY29tbW9uU2VydmljZS5nZXRSZXF1ZXN0cygnaG90ZWwvaG90ZWxoaWdobGlnaHRzJywgcGFyYW1zKTtcclxufVxyXG5mdW5jdGlvbiBnZXRIb3RlbFBvbGljaWVzKHBhcmFtcykge1xyXG4gICAgcmV0dXJuIGNvbW1vblNlcnZpY2UuZ2V0UmVxdWVzdHMoJ2hvdGVsL2hvdGVscG9saWNpZXMnLCBwYXJhbXMpO1xyXG59XHJcbmZ1bmN0aW9uIGdldFNwUmVxdWVzdHMocGFyYW1zKSB7XHJcbiAgICByZXR1cm4gY29tbW9uU2VydmljZS5nZXRSZXF1ZXN0cygnaG90ZWwvc3BlY2lhbHJlcXVlc3QnLCBwYXJhbXMpO1xyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5mdW5jdGlvbiBGb290ZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxmb290ZXIgY2xhc3NOYW1lPVwiZm9vdGVyLWJsb2NrXCI+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLWlubmVyXCI+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImJyYW5kLWxvZ29cIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9hc3NldHMvaW1hZ2VzL3V0aC1sb2dvLWJsYWNrLnBuZ1wiIGFsdD1cIkJyYW5kLWxvZ29cIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItYWRkcmVzc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlZyaW5kaGF2YW48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+TWF2ZWxpcHVyYW0gQ29sb255PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPktha2thbmFkdSBQLk8uPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPktvY2hpIDMwPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm90aGVyLWluZm8tbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1haWwtaWNvXCI+PGEgaHJlZj1cIm1haWx0bzpib29raW5nQHV0aGhvdGVscy5jb21cIj5ib29raW5nQHV0aGhvdGVscy5jb208L2E+LCA8YSBocmVmPVwibWFpbHRvOmluZm9AdXRoaG90ZWxzLmNvbVwiPmluZm9AdXRoaG90ZWxzLmNvbTwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInBob25lLWljb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJ0ZWw6KzkxOTc0NjgzODg4M1wiPis5MSA5NzQ2ODM4ODgzPC9hPiwgPGEgaHJlZj1cInRlbDorOTE5NTY3MzM4ODg0XCI+KzkxIDk1NjczMzg4ODQ8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbjwvZm9vdGVyPlxyXG4gICAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjsiLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnQsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHtCQVNFX1BBVEh9IGZyb20gJy4uL2NvbnN0YW50cy9pbmRleCc7XHJcbmltcG9ydCAqIGFzIEhvdGVsQWN0aW9ucyBmcm9tIFwiLi4vYWN0aW9ucy9ob3RlbFwiO1xyXG5jbGFzcyBOYXZiYXIgZXh0ZW5kcyBDb21wb25lbnR7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgbW9iaWxlTWVudSA6IGZhbHNlLFxyXG4gICAgICAgICAgICBzZWFyY2hUZXh0IDogJydcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICBzZXRNb2JpbGVNZW51ID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBtb2JpbGVNZW51IDogIXRoaXMuc3RhdGUubW9iaWxlTWVudVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBzZXRTZWFyY2hUZXh0ID0gKHNlYXJjaFRleHQpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgc2VhcmNoVGV4dCA6IHNlYXJjaFRleHRcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUNoYW5nZSA9KGUpID0+IHtcclxuICAgICAgICBsZXQgZmllbGRWYWwgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICB0aGlzLnNldFNlYXJjaFRleHQoZmllbGRWYWwpXHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlS2V5VXAgPSAoZSkgPT4ge1xyXG4gICAgICAgIHZhciBjb2RlID0gKGUua2V5Q29kZSA/IGUua2V5Q29kZSA6IGUud2hpY2gpO1xyXG5cclxuICAgICAgICBpZihjb2RlID09IDEzKSB7IC8vRW50ZXIga2V5Y29kZVxyXG4gICAgICAgICAgICAvL1Byb3BzLnNlYXJjaEhvdGVscyhzZWFyY2hUZXh0KTtcclxuICAgICAgICAgICAgbGV0IHNlYXJjaFBhcmFtcyA9IHtcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uIDogdGhpcy5zdGF0ZS5zZWFyY2hUZXh0XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5zZWFyY2hIb3RlbHMoc2VhcmNoUGFyYW1zKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtYmFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtYmFyLWNvbnRhaW5lclwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnJhbmQtbG9nb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9hc3NldHMvaW1hZ2VzL3V0aC1sb2dvLnBuZ1wiIGFsdD1cIkJyYW5kLWxvZ29cIiBjbGFzc05hbWU9XCJ3aGl0ZS1sb2dvXCIvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtcmlnaHRcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BtZW51LXdyYXBwZXIgJHt0aGlzLnN0YXRlLm1vYmlsZU1lbnUgPyAnIGZseS1pbicgOiAnJ31gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJjbG9zZS1mbHlcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldE1vYmlsZU1lbnUoZmFsc2UpfT48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdi1tZW51XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj48bmF2PkhPTUU8L25hdj48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXQtdXNcIj48bmF2PlBPU0lUSVZFIFZJQkUgT0YgVVM8L25hdj48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvaG90ZWxzLWNhdGVnb3J5XCI+PG5hdj5IT1RFTFMgJiBSRVNPUlRTPC9uYXY+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9taWNlXCI+PG5hdj5NSUNFPC9uYXY+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2hlYWx0aFwiPjxuYXY+SEVBTFRIICYgTElGRSBTVFlMRTwvbmF2PjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jb250YWN0dXNcIj48bmF2PktFRVAgSU4gVE9VQ0g8L25hdj48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwic2VhcmNoX2xvY1wiIGlkPVwic2VhcmNoX2xvY1wiIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uS2V5VXA9eyhlKT0+IHRoaXMuaGFuZGxlS2V5VXAoZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuaGFuZGxlQ2hhbmdlKGUpfS8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImhhbWJ1cmdlclwiIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0TW9iaWxlTWVudSh0cnVlKX0+PC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKVxyXG4gICAgfVxyXG5cclxufVxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xyXG4gICAgaG90ZWxEYXRhOnN0YXRlLkhvdGVsUmVkdWNlci5ob3RlbERhdGFcclxufSk7XHJcbi8vIGV4cG9ydCBkZWZhdWx0ICB3aXRoUm91dGVyKGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCB7XHJcbi8vICAgICBzZWFyY2hIb3RlbHMgOiBIb3RlbEFjdGlvbnMuc2VhcmNoSG90ZWxzXHJcbi8vIH0pKE5hdmJhcikpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcclxuICAgIG1hcFN0YXRlVG9Qcm9wcyxcclxuICAgIHtcclxuICAgICAgICBzZWFyY2hIb3RlbHMgOiBIb3RlbEFjdGlvbnMuc2VhcmNoSG90ZWxzXHJcbiAgICB9XHJcbikoTmF2YmFyKTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvbWl0dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvdXRpbHMuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCIvKiAoaWdub3JlZCkgKi8iXSwibmFtZXMiOlsiaG90ZWwiLCJnZXRIb3RlbExpc3QiLCJwYXJhbXMiLCJkaXNwYXRjaCIsInR5cGUiLCJzdGF0dXMiLCJob3RlbERhdGEiLCJ0aGVuIiwiY29uc29sZSIsImxvZyIsImhvdGVsTGlzdCIsInJlc3VsdHMiLCJkYXRhIiwiY2F0ZWdvcnkiLCJjYXRjaCIsImVycm9yIiwiZ2V0SG90ZWxDYXRlZ29yeUxpc3QiLCJjYXRlZ29yeURhdGEiLCJjYXRlZ29yeUxpc3QiLCJnZXRIb3RlbERldGFpbCIsImhvdGVsRGV0YWlsIiwiZ2V0SG90ZWxEZXRhaWxWMiIsInNlYXJjaEhvdGVscyIsInNlYXJjaCIsImdldEZhY2lsaXRpZXMiLCJmYWNpbGl0eURhdGEiLCJmYWNpbGl0aWVzIiwiZ2V0Um9vbVR5cGVzIiwicm9vbVR5cGVEYXRhIiwicm9vbVR5cGVzIiwic2F2ZUNvbnRhY3QiLCJjb250YWN0U2F2ZWQiLCJzYXZlZCIsInNlYXJjaFJvb21zIiwicm9vbURhdGEiLCJyb29tTGlzdCIsInNhdmVCb29raW5nIiwiYm9va2luZ0RhdGEiLCJib29raW5nSWQiLCJjb25maXJtQm9va2luZyIsImJvb2tpbmdSZXN1bHQiLCJzdWNjZXNzIiwiZ2V0QmFubmVySW1hZ2VzIiwiYmFubmVyRGF0YSIsImJhbm5lckltYWdlcyIsImdldEhvdGVsSGlnaGxpZ2h0cyIsImhpZ2hsaWdodERhdGEiLCJoaWdodGxpZ2h0cyIsImdldEhvdGVsUG9saWNpZXMiLCJwb2xpY3lEYXRhIiwicG9saWNpZXMiLCJnZXRTcFJlcXVlc3RzIiwic3BSZXFEYXRhIiwic3BSZXF1ZXN0cyIsIldFQl9FTlZJUk9OTUVOVCIsIldFQl9IQVNIX0VOQUJMRUQiLCJXRUJfQVBJX1BBVEgiLCJXRUJfSU1BR0VfUEFUSCIsIldFQl9CQVNFX1BBVEgiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhvc3RuYW1lIiwiRU5WSVJPTk1FTlQiLCJIQVNIX0VOQUJMRUQiLCJBUElfUEFUSCIsIklNQUdFX1BBVEgiLCJCQVNFX1BBVEgiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsImRlZmF1bHQiLCJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIl9yb3V0ZXIiLCJfcm91dGVyMSIsIl91c2VJbnRlcnNlY3Rpb24iLCJvYmoiLCJfX2VzTW9kdWxlIiwicHJlZmV0Y2hlZCIsInByZWZldGNoIiwicm91dGVyIiwiaHJlZiIsImFzIiwib3B0aW9ucyIsImlzTG9jYWxVUkwiLCJlcnIiLCJjdXJMb2NhbGUiLCJsb2NhbGUiLCJpc01vZGlmaWVkRXZlbnQiLCJldmVudCIsInRhcmdldCIsImN1cnJlbnRUYXJnZXQiLCJtZXRhS2V5IiwiY3RybEtleSIsInNoaWZ0S2V5IiwiYWx0S2V5IiwibmF0aXZlRXZlbnQiLCJ3aGljaCIsImxpbmtDbGlja2VkIiwiZSIsInJlcGxhY2UiLCJzaGFsbG93Iiwic2Nyb2xsIiwibm9kZU5hbWUiLCJwcmV2ZW50RGVmYXVsdCIsImluZGV4T2YiLCJMaW5rIiwicHJvcHMiLCJjcmVhdGVQcm9wRXJyb3IiLCJhcmdzIiwiRXJyb3IiLCJrZXkiLCJleHBlY3RlZCIsImFjdHVhbCIsInJlcXVpcmVkUHJvcHNHdWFyZCIsInJlcXVpcmVkUHJvcHMiLCJrZXlzIiwiZm9yRWFjaCIsIl8iLCJvcHRpb25hbFByb3BzR3VhcmQiLCJwYXNzSHJlZiIsIm9wdGlvbmFsUHJvcHMiLCJ2YWxUeXBlIiwiaGFzV2FybmVkIiwidXNlUmVmIiwiY3VycmVudCIsIndhcm4iLCJwIiwidXNlUm91dGVyIiwidXNlTWVtbyIsInJlc29sdmVkSHJlZiIsInJlc29sdmVkQXMiLCJyZXNvbHZlSHJlZiIsImNoaWxkcmVuIiwiY3JlYXRlRWxlbWVudCIsImNoaWxkIiwiQ2hpbGRyZW4iLCJvbmx5IiwiY2hpbGRSZWYiLCJyZWYiLCJzZXRJbnRlcnNlY3Rpb25SZWYiLCJpc1Zpc2libGUiLCJ1c2VJbnRlcnNlY3Rpb24iLCJyb290TWFyZ2luIiwic2V0UmVmIiwidXNlQ2FsbGJhY2siLCJlbCIsInVzZUVmZmVjdCIsInNob3VsZFByZWZldGNoIiwiaXNQcmVmZXRjaGVkIiwiY2hpbGRQcm9wcyIsIm9uQ2xpY2siLCJkZWZhdWx0UHJldmVudGVkIiwib25Nb3VzZUVudGVyIiwicHJpb3JpdHkiLCJsb2NhbGVEb21haW4iLCJpc0xvY2FsZURvbWFpbiIsImdldERvbWFpbkxvY2FsZSIsImxvY2FsZXMiLCJkb21haW5Mb2NhbGVzIiwiYWRkQmFzZVBhdGgiLCJhZGRMb2NhbGUiLCJkZWZhdWx0TG9jYWxlIiwiY2xvbmVFbGVtZW50IiwiX2RlZmF1bHQiLCJyZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCIsIm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoIiwicGF0aCIsImVuZHNXaXRoIiwic2xpY2UiLCJwcm9jZXNzIiwiZW52IiwiX19ORVhUX1RSQUlMSU5HX1NMQVNIIiwidGVzdCIsInJlcXVlc3RJZGxlQ2FsbGJhY2siLCJjYW5jZWxJZGxlQ2FsbGJhY2siLCJzZWxmIiwiYmluZCIsImNiIiwic3RhcnQiLCJEYXRlIiwibm93Iiwic2V0VGltZW91dCIsImRpZFRpbWVvdXQiLCJ0aW1lUmVtYWluaW5nIiwiTWF0aCIsIm1heCIsImlkIiwiY2xlYXJUaW1lb3V0IiwibWFya0Fzc2V0RXJyb3IiLCJpc0Fzc2V0RXJyb3IiLCJnZXRDbGllbnRCdWlsZE1hbmlmZXN0IiwiY3JlYXRlUm91dGVMb2FkZXIiLCJfZ2V0QXNzZXRQYXRoRnJvbVJvdXRlIiwiX3JlcXVlc3RJZGxlQ2FsbGJhY2siLCJNU19NQVhfSURMRV9ERUxBWSIsIndpdGhGdXR1cmUiLCJtYXAiLCJnZW5lcmF0b3IiLCJlbnRyeSIsImdldCIsImZ1dHVyZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVzb2x2ZXIiLCJwcm9tIiwic2V0IiwiaGFzUHJlZmV0Y2giLCJsaW5rIiwiZG9jdW1lbnQiLCJNU0lucHV0TWV0aG9kQ29udGV4dCIsImRvY3VtZW50TW9kZSIsInJlbExpc3QiLCJzdXBwb3J0cyIsImNhblByZWZldGNoIiwicHJlZmV0Y2hWaWFEb20iLCJyZXMiLCJyZWoiLCJxdWVyeVNlbGVjdG9yIiwicmVsIiwiY3Jvc3NPcmlnaW4iLCJfX05FWFRfQ1JPU1NfT1JJR0lOIiwib25sb2FkIiwib25lcnJvciIsImhlYWQiLCJhcHBlbmRDaGlsZCIsIkFTU0VUX0xPQURfRVJST1IiLCJTeW1ib2wiLCJhcHBlbmRTY3JpcHQiLCJzcmMiLCJzY3JpcHQiLCJyZWplY3QiLCJib2R5IiwiZGV2QnVpbGRQcm9taXNlIiwicmVzb2x2ZVByb21pc2VXaXRoVGltZW91dCIsIm1zIiwiY2FuY2VsbGVkIiwiciIsIl9fQlVJTERfTUFOSUZFU1QiLCJvbkJ1aWxkTWFuaWZlc3QiLCJfX0JVSUxEX01BTklGRVNUX0NCIiwiZ2V0RmlsZXNGb3JSb3V0ZSIsImFzc2V0UHJlZml4Iiwicm91dGUiLCJzY3JpcHRzIiwiZW5jb2RlVVJJIiwiY3NzIiwibWFuaWZlc3QiLCJhbGxGaWxlcyIsImZpbHRlciIsInYiLCJlbnRyeXBvaW50cyIsIk1hcCIsImxvYWRlZFNjcmlwdHMiLCJzdHlsZVNoZWV0cyIsInJvdXRlcyIsIm1heWJlRXhlY3V0ZVNjcmlwdCIsImZldGNoU3R5bGVTaGVldCIsImZldGNoIiwib2siLCJ0ZXh0IiwiY29udGVudCIsIndoZW5FbnRyeXBvaW50Iiwib25FbnRyeXBvaW50IiwiZXhlY3V0ZSIsImZuIiwiY29tcG9uZW50IiwiaW5wdXQiLCJvbGQiLCJsb2FkUm91dGUiLCJyb3V0ZUZpbGVzUHJvbWlzZSIsImFsbCIsImhhcyIsImVudHJ5cG9pbnQiLCJzdHlsZXMiLCJmaW5hbGx5IiwiYXNzaWduIiwiY24iLCJuYXZpZ2F0b3IiLCJjb25uZWN0aW9uIiwic2F2ZURhdGEiLCJlZmZlY3RpdmVUeXBlIiwib3V0cHV0IiwiZW51bWVyYWJsZSIsIl93aXRoUm91dGVyIiwiY3JlYXRlUm91dGVyIiwibWFrZVB1YmxpY1JvdXRlckluc3RhbmNlIiwiX3JvdXRlckNvbnRleHQiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwicHVzaCIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsImV2ZW50cyIsImZpZWxkIiwiZ2V0Um91dGVyIiwib24iLCJldmVudEZpZWxkIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzdWJzdHJpbmciLCJfc2luZ2xldG9uUm91dGVyIiwibWVzc2FnZSIsInN0YWNrIiwidXNlQ29udGV4dCIsIlJvdXRlckNvbnRleHQiLCJpbnN0YW5jZSIsInByb3BlcnR5IiwiQXJyYXkiLCJpc0FycmF5IiwiaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImRpc2FibGVkIiwiaXNEaXNhYmxlZCIsInVub2JzZXJ2ZSIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwidXNlU3RhdGUiLCJ1bmRlZmluZWQiLCJ0YWdOYW1lIiwib2JzZXJ2ZSIsImlkbGVDYWxsYmFjayIsImVsZW1lbnQiLCJjYWxsYmFjayIsIm9ic2VydmVyIiwiZWxlbWVudHMiLCJjcmVhdGVPYnNlcnZlciIsImRlbGV0ZSIsInNpemUiLCJkaXNjb25uZWN0Iiwib2JzZXJ2ZXJzIiwiZW50cmllcyIsImlzSW50ZXJzZWN0aW5nIiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJ3aXRoUm91dGVyIiwiQ29tcG9zZWRDb21wb25lbnQiLCJXaXRoUm91dGVyV3JhcHBlciIsImdldEluaXRpYWxQcm9wcyIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJuYW1lIiwiZGlzcGxheU5hbWUiLCJkZWxMb2NhbGUiLCJoYXNCYXNlUGF0aCIsImRlbEJhc2VQYXRoIiwiaW50ZXJwb2xhdGVBcyIsIl9ub3JtYWxpemVUcmFpbGluZ1NsYXNoIiwiX3JvdXRlTG9hZGVyIiwiX2Rlbm9ybWFsaXplUGFnZVBhdGgiLCJfbm9ybWFsaXplTG9jYWxlUGF0aCIsIl9taXR0IiwiX3V0aWxzIiwiX2lzRHluYW1pYyIsIl9wYXJzZVJlbGF0aXZlVXJsIiwiX3F1ZXJ5c3RyaW5nIiwiX3Jlc29sdmVSZXdyaXRlcyIsIl9yb3V0ZU1hdGNoZXIiLCJfcm91dGVSZWdleCIsImRldGVjdERvbWFpbkxvY2FsZSIsIl9fTkVYVF9JMThOX1NVUFBPUlQiLCJiYXNlUGF0aCIsIl9fTkVYVF9ST1VURVJfQkFTRVBBVEgiLCJidWlsZENhbmNlbGxhdGlvbkVycm9yIiwiYWRkUGF0aFByZWZpeCIsInByZWZpeCIsInN0YXJ0c1dpdGgiLCJwYXRoTm9RdWVyeUhhc2giLCJub3JtYWxpemVMb2NhbGVQYXRoIiwiZGV0ZWN0ZWRMb2NhbGUiLCJkZXRlY3RlZERvbWFpbiIsImh0dHAiLCJkb21haW4iLCJwYXRobmFtZSIsInBhdGhMb3dlciIsInRvTG93ZXJDYXNlIiwibG9jYWxlTG93ZXIiLCJsZW5ndGgiLCJzdWJzdHIiLCJxdWVyeUluZGV4IiwiaGFzaEluZGV4IiwidXJsIiwibG9jYXRpb25PcmlnaW4iLCJnZXRMb2NhdGlvbk9yaWdpbiIsInJlc29sdmVkIiwiVVJMIiwib3JpZ2luIiwiYXNQYXRobmFtZSIsInF1ZXJ5IiwiaW50ZXJwb2xhdGVkUm91dGUiLCJkeW5hbWljUmVnZXgiLCJnZXRSb3V0ZVJlZ2V4IiwiZHluYW1pY0dyb3VwcyIsImdyb3VwcyIsImR5bmFtaWNNYXRjaGVzIiwiZ2V0Um91dGVNYXRjaGVyIiwiZXZlcnkiLCJwYXJhbSIsInJlcGVhdCIsIm9wdGlvbmFsIiwicmVwbGFjZWQiLCJzZWdtZW50IiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwiam9pbiIsInJlc3VsdCIsIm9taXRQYXJtc0Zyb21RdWVyeSIsImZpbHRlcmVkUXVlcnkiLCJpbmNsdWRlcyIsInJlc29sdmVBcyIsImJhc2UiLCJ1cmxBc1N0cmluZyIsImZvcm1hdFdpdGhWYWxpZGF0aW9uIiwidXJsUHJvdG9NYXRjaCIsIm1hdGNoIiwidXJsQXNTdHJpbmdOb1Byb3RvIiwidXJsUGFydHMiLCJzcGxpdCIsIm5vcm1hbGl6ZWRVcmwiLCJub3JtYWxpemVSZXBlYXRlZFNsYXNoZXMiLCJhc1BhdGgiLCJmaW5hbFVybCIsImludGVycG9sYXRlZEFzIiwiaXNEeW5hbWljUm91dGUiLCJzZWFyY2hQYXJhbXMiLCJzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IiwiaGFzaCIsInN0cmlwT3JpZ2luIiwicHJlcGFyZVVybEFzIiwiaHJlZkhhZE9yaWdpbiIsImFzSGFkT3JpZ2luIiwicHJlcGFyZWRVcmwiLCJwcmVwYXJlZEFzIiwicmVzb2x2ZUR5bmFtaWNSb3V0ZSIsInBhZ2VzIiwiY2xlYW5QYXRobmFtZSIsImRlbm9ybWFsaXplUGFnZVBhdGgiLCJzb21lIiwicGFnZSIsInJlIiwibWFudWFsU2Nyb2xsUmVzdG9yYXRpb24iLCJfX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OIiwiaGlzdG9yeSIsInNlc3Npb25TdG9yYWdlIiwic2V0SXRlbSIsInJlbW92ZUl0ZW0iLCJuIiwiU1NHX0RBVEFfTk9UX0ZPVU5EIiwiZmV0Y2hSZXRyeSIsImF0dGVtcHRzIiwiY3JlZGVudGlhbHMiLCJqc29uIiwibm90Rm91bmQiLCJmZXRjaE5leHREYXRhIiwiZGF0YUhyZWYiLCJpc1NlcnZlclJlbmRlciIsIlJvdXRlciIsImNvbnN0cnVjdG9yIiwicGF0aG5hbWUxIiwicXVlcnkxIiwiYXMxIiwiaW5pdGlhbFByb3BzIiwicGFnZUxvYWRlciIsIkFwcCIsIndyYXBBcHAiLCJDb21wb25lbnQiLCJDb21wb25lbnQxIiwiZXJyMSIsInN1YnNjcmlwdGlvbiIsImlzRmFsbGJhY2siLCJpc1ByZXZpZXciLCJzZGMiLCJzZHIiLCJfaWR4Iiwib25Qb3BTdGF0ZSIsInN0YXRlIiwiY2hhbmdlU3RhdGUiLCJnZXRVUkwiLCJfX04iLCJmb3JjZWRTY3JvbGwiLCJpZHgiLCJKU09OIiwic3RyaW5naWZ5IiwieCIsInBhZ2VYT2Zmc2V0IiwieSIsInBhZ2VZT2Zmc2V0IiwiZ2V0SXRlbSIsInBhcnNlIiwicGFyc2VSZWxhdGl2ZVVybCIsImlzU3NyIiwiX2JwcyIsImNoYW5nZSIsIl9zaGFsbG93IiwiY29tcG9uZW50cyIsImluaXRpYWwiLCJfX05fU1NHIiwiX19OX1NTUCIsImF1dG9FeHBvcnREeW5hbWljIiwiX19ORVhUX0RBVEFfXyIsImF1dG9FeHBvcnQiLCJzdWIiLCJjbGMiLCJfd3JhcEFwcCIsImlzUmVhZHkiLCJnc3NwIiwiZ2lwIiwiYXBwR2lwIiwiZ3NwIiwiX19ORVhUX0hBU19SRVdSSVRFUyIsIl9zaG91bGRSZXNvbHZlSHJlZiIsImFkZEV2ZW50TGlzdGVuZXIiLCJzY3JvbGxSZXN0b3JhdGlvbiIsInJlbG9hZCIsImJhY2siLCJtZXRob2QiLCJzaG91bGRSZXNvbHZlSHJlZiIsIl9oIiwicHJldkxvY2FsZSIsInBhcnNlZEFzIiwibG9jYWxlUGF0aFJlc3VsdCIsImRpZE5hdmlnYXRlIiwiYXNOb0Jhc2VQYXRoIiwiU1QiLCJwZXJmb3JtYW5jZSIsIm1hcmsiLCJyb3V0ZVByb3BzIiwiX2luRmxpZ2h0Um91dGUiLCJhYm9ydENvbXBvbmVudExvYWQiLCJjbGVhbmVkQXMiLCJsb2NhbGVDaGFuZ2UiLCJvbmx5QUhhc2hDaGFuZ2UiLCJlbWl0Iiwic2Nyb2xsVG9IYXNoIiwibm90aWZ5IiwicGFyc2VkIiwicmV3cml0ZXMiLCJnZXRQYWdlTGlzdCIsIl9fcmV3cml0ZXMiLCJ1cmxJc05ldyIsInJld3JpdGVzUmVzdWx0IiwibWF0Y2hlZFBhZ2UiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsInNob3VsZEludGVycG9sYXRlIiwibWlzc2luZ1BhcmFtcyIsInJlZjEiLCJyb3V0ZUluZm8iLCJnZXRSb3V0ZUluZm8iLCJwYWdlUHJvcHMiLCJfX05fUkVESVJFQ1QiLCJkZXN0aW5hdGlvbiIsInBhcnNlZEhyZWYiLCJuZXdVcmwiLCJuZXdBcyIsIl9fTl9QUkVWSUVXIiwibm90Rm91bmRSb3V0ZSIsImZldGNoQ29tcG9uZW50IiwiYXBwQ29tcCIsIm5leHQiLCJpc1ByZXJlbmRlcmVkIiwic3RhdHVzQ29kZSIsImlzVmFsaWRTaGFsbG93Um91dGUiLCJfc2Nyb2xsIiwic2hvdWxkU2Nyb2xsIiwicmVzZXRTY3JvbGwiLCJkb2N1bWVudEVsZW1lbnQiLCJsYW5nIiwiaGFuZGxlUm91dGVJbmZvRXJyb3IiLCJsb2FkRXJyb3JGYWlsIiwiZ2lwRXJyIiwicm91dGVJbmZvRXJyIiwiZXhpc3RpbmdSb3V0ZUluZm8iLCJjYWNoZWRSb3V0ZUluZm8iLCJtb2QiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJnZXREYXRhSHJlZiIsIl9nZXREYXRhIiwiX2dldFN0YXRpY0RhdGEiLCJfZ2V0U2VydmVyRGF0YSIsImVycjIiLCJiZWZvcmVQb3BTdGF0ZSIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJuZXdVcmxOb0hhc2giLCJuZXdIYXNoIiwic2Nyb2xsVG8iLCJpZEVsIiwiZ2V0RWxlbWVudEJ5SWQiLCJzY3JvbGxJbnRvVmlldyIsIm5hbWVFbCIsImdldEVsZW1lbnRzQnlOYW1lIiwicGF0aG5hbWUyIiwiX2lzU3NnIiwiaXNTc2ciLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJsb2FkUGFnZSIsImNhY2hlS2V5IiwicmVzb3VyY2VLZXkiLCJjdHgiLCJBcHAxIiwiQXBwVHJlZSIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJSZWFjdCIsIkhlYWQiLCJOYXZiYXIiLCJGb290ZXIiLCJNaWNlIiwiY29tcG9uZW50RGlkTW91bnQiLCJyZW5kZXIiLCJnZXRSZXF1ZXN0cyIsInF1ZXJ5U3RyIiwiaSIsImhhc093blByb3BlcnR5IiwicG9zdFJlcXVlc3RzIiwicG9zdERhdGEiLCJyZXNwb25zZSIsIm1vZGUiLCJjYWNoZSIsImhlYWRlcnMiLCJyZWRpcmVjdCIsInJlZmVycmVyUG9saWN5IiwiY29tbW9uU2VydmljZSIsImNvbm5lY3QiLCJIb3RlbEFjdGlvbnMiLCJzZXRTdGF0ZSIsIm1vYmlsZU1lbnUiLCJzZWFyY2hUZXh0IiwiZmllbGRWYWwiLCJzZXRTZWFyY2hUZXh0IiwiY29kZSIsImtleUNvZGUiLCJzZXRNb2JpbGVNZW51IiwiaGFuZGxlS2V5VXAiLCJoYW5kbGVDaGFuZ2UiLCJtYXBTdGF0ZVRvUHJvcHMiLCJIb3RlbFJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9