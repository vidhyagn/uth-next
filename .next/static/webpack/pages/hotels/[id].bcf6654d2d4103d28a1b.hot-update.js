"use strict";
self["webpackHotUpdate_N_E"]("pages/hotels/[id]",{

/***/ "./pages/hotels/[id].js":
/*!******************************!*\
  !*** ./pages/hotels/[id].js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

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
        children: "Sugar by UTH| Best Hotels in Kochi| Best deals at Sugar Business hotel Kochi"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("meta", {
        name: "description",
        content: "The tourism is in full swing for the God\u2019s own country and the best hotels in Kochi are also ready to welcome the guests. The Sugar hotel in Kochi is a prestigious one in this list whose location itself is significant.UTH is the leading brand in the hotel business that is running many hotels and resorts all over the country and out of the country too such as Sri Lanka, Dubai and Maldives."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("meta", {
        name: "keywords",
        content: "best hotels in thekkady, best hotels in kochi, best hotels in munnar, best hotels in banglore,best hotels in varanasi,best price luxury hotels in kochi "
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
        content: "Sugar by UTH| Best Hotels in Kochi| Best deals at Sugar Business hotel Kochi"
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaG90ZWxzL1tpZF0uYmNmNjY1NGQyZDQxMDNkMjhhMWIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FLQTs7Ozs7QUFnQkEsSUFBTW1CLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BQWlDO0FBQUE7O0FBQUEsTUFBOUJDLFNBQThCLFFBQTlCQSxTQUE4QjtBQUFBLE1BQW5CQyxZQUFtQixRQUFuQkEsWUFBbUI7O0FBQy9DLGtCQUFvQ2pCLCtDQUFRLENBQUMsRUFBRCxDQUE1QztBQUFBLE1BQU9rQixVQUFQO0FBQUEsTUFBbUJDLGFBQW5COztBQUNBLG1CQUFnRG5CLCtDQUFRLENBQUMsS0FBRCxDQUF4RDtBQUFBLE1BQU9vQixnQkFBUDtBQUFBLE1BQXlCQyxtQkFBekI7O0FBQ0EsTUFBSUMsS0FBSyxHQUFHTixTQUFTLENBQUNPLE1BQXRCO0FBRUF6QixFQUFBQSxnREFBUyxDQUFDLFlBQU07QUFDWjtBQUNBZSxJQUFBQSxhQUFhO0FBQ2hCLEdBSFEsRUFHTixFQUhNLENBQVQ7O0FBTCtDLFdBVWhDQSxhQVZnQztBQUFBO0FBQUEsSUFnQmhEOzs7QUFoQmdEO0FBQUEsdVJBVS9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQzBCVyxLQUFLLFdBQUlkLGlEQUFKLDhCQUQvQjs7QUFBQTtBQUNRZSxjQUFBQSxTQURSO0FBQUE7QUFBQSxxQkFFcUJBLFNBQVMsQ0FBQ0MsSUFBVixFQUZyQjs7QUFBQTtBQUVRQyxjQUFBQSxJQUZSO0FBR0lSLGNBQUFBLGFBQWEsQ0FBQ1EsSUFBSSxDQUFDQyxPQUFMLEdBQWVELElBQUksQ0FBQ0MsT0FBTCxDQUFhQyxJQUE1QixHQUFtQyxFQUFwQyxDQUFiOztBQUhKO0FB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9ob3RlbHMvW2lkXS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnQsIHVzZUVmZmVjdCwgbGF6eSwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi4vLi4vdmlld3MvTmF2YmFyXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uLy4uL3ZpZXdzL0Zvb3RlclwiO1xyXG5pbXBvcnQgTGVmdFBhbmVsIGZyb20gXCIuLi8uLi92aWV3cy9MZWZ0UGFuZWxcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgSG90ZWxCbG9jayBmcm9tIFwiLi4vLi4vdmlld3MvSG90ZWxCbG9ja1wiO1xyXG5pbXBvcnQgKiBhcyBIb3RlbEFjdGlvbnMgZnJvbSBcIi4uLy4uL2FjdGlvbnMvaG90ZWxcIlxyXG5pbXBvcnQge2dldFVybFNlZ21lbnR9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvQ3VzdG9tRnVuY3Rpb25zXCI7XHJcbmltcG9ydCB7SU1BR0VfUEFUSCwgQVBJX1BBVEh9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQge2hvdGVsfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvaG90ZWwuc2VydmljZXNcIjtcclxuaW1wb3J0IHtnZXRGYWNpbGl0aWVzfSBmcm9tIFwiLi4vLi4vYWN0aW9ucy9ob3RlbFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcblxyXG5cclxuXHJcbi8vVGhpcyBnZXRzIGNhbGxlZCBldmVyeSB0aW1lIHRoZSBwYWdlIGlzIGNhbGxlZFxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuICAgIGNvbnN0IHtwYXJhbXN9ID0gY29udGV4dDtcclxuICAgIGNvbnN0IHtpZH0gPSBwYXJhbXM7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke0FQSV9QQVRIfWhvdGVsL2hvdGVsbGlzdD9jYXRlZ29yeT0ke2lkfWApO1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHMgOiB7XHJcbiAgICAgICAgICAgIGhvdGVsTGlzdDogcmVzLnJlc3VsdHMgPyByZXMucmVzdWx0cy5kYXRhOiBbXSxcclxuICAgICAgICAgICAgY2F0ZWdvcnlJbmZvIDogcmVzLnJlc3VsdHMuY2F0ZWdvcnlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5jb25zdCBIb3RlbExpc3QgPSAoeyBob3RlbExpc3QsIGNhdGVnb3J5SW5mbyB9KSA9PiB7XHJcbiAgICBjb25zdCBbZmFjaWxpdGllcywgc2V0ZmFjaWxpdGllc10gPSB1c2VTdGF0ZShbXSlcclxuICAgIGNvbnN0IFtzaG93RmlsdGVyU3RhdHVzLCBzZXRzaG93RmlsdGVyU3RhdHVzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGxldCB0b3RhbCA9IGhvdGVsTGlzdC5sZW5ndGg7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAvLyBBbHdheXMgZG8gbmF2aWdhdGlvbnMgYWZ0ZXIgdGhlIGZpcnN0IHJlbmRlclxyXG4gICAgICAgIGdldEZhY2lsaXRpZXMoKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBnZXRGYWNpbGl0aWVzKCkge1xyXG4gICAgICAgIGxldCBmcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtBUElfUEFUSH1cImhvdGVsL21hc3RlcmZhY2lsaXRpZXNgKTtcclxuICAgICAgICBsZXQgZnJlcyA9IGF3YWl0IGZyZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgc2V0ZmFjaWxpdGllcyhmcmVzLnJlc3VsdHMgPyBmcmVzLnJlc3VsdHMuZGF0YSA6IFtdKTtcclxuXHJcbiAgICB9XHJcbiAgIC8vIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIGZ1bmN0aW9uIHNlYXJjaEhvdGVscygpIHtcclxuICAgICAgIC8vIHRoaXMucHJvcHMuc2VhcmNoSG90ZWxzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2hvd0ZpbHRlcnMoKXtcclxuICAgICAgICBzZXRzaG93RmlsdGVyU3RhdHVzKHRydWUpXHJcblxyXG4gICAgICAgIC8vIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIC8vICAgICBzaG93RmlsdGVyU3RhdHVzIDogdHJ1ZVxyXG4gICAgICAgIC8vIH0pXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGlkZUZpbHRlcnMoKXtcclxuICAgICAgICBzZXRzaG93RmlsdGVyU3RhdHVzKGZhbHNlKVxyXG4gICAgICAgIC8vICAgICBzaG93RmlsdGVyU3RhdHVzIDogZmFsc2VcclxuICAgICAgICAvLyB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBjaGFyU2V0PVwiVVRGLThcIiAvPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPlN1Z2FyIGJ5IFVUSHwgQmVzdCBIb3RlbHMgaW4gS29jaGl8IEJlc3QgZGVhbHMgYXQgU3VnYXIgQnVzaW5lc3MgaG90ZWwgS29jaGk8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJUaGUgdG91cmlzbSBpcyBpbiBmdWxsIHN3aW5nIGZvciB0aGUgR29k4oCZcyBvd24gY291bnRyeSBhbmQgdGhlIGJlc3QgaG90ZWxzIGluIEtvY2hpIGFyZSBhbHNvIHJlYWR5IHRvIHdlbGNvbWUgdGhlIGd1ZXN0cy4gVGhlIFN1Z2FyIGhvdGVsIGluIEtvY2hpIGlzIGEgcHJlc3RpZ2lvdXMgb25lIGluIHRoaXMgbGlzdCB3aG9zZSBsb2NhdGlvbiBpdHNlbGYgaXMgc2lnbmlmaWNhbnQuVVRIIGlzIHRoZSBsZWFkaW5nIGJyYW5kIGluIHRoZSBob3RlbCBidXNpbmVzcyB0aGF0IGlzIHJ1bm5pbmcgbWFueSBob3RlbHMgYW5kIHJlc29ydHMgYWxsIG92ZXIgdGhlIGNvdW50cnkgYW5kIG91dCBvZiB0aGUgY291bnRyeSB0b28gc3VjaCBhcyBTcmkgTGFua2EsIER1YmFpIGFuZCBNYWxkaXZlcy5cIiAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImtleXdvcmRzXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJiZXN0IGhvdGVscyBpbiB0aGVra2FkeSwgYmVzdCBob3RlbHMgaW4ga29jaGksIGJlc3QgaG90ZWxzIGluIG11bm5hciwgYmVzdCBob3RlbHMgaW4gYmFuZ2xvcmUsYmVzdCBob3RlbHMgaW4gdmFyYW5hc2ksYmVzdCBwcmljZSBsdXh1cnkgaG90ZWxzIGluIGtvY2hpIFwiLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJhdXRob3JcIiBjb250ZW50PVwiVVRIIEdyb3VwIE9mIEhvdGVsc1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnR5cGVcIiBjb250ZW50PVwid2Vic2l0ZVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD1cIlN1Z2FyIGJ5IFVUSHwgQmVzdCBIb3RlbHMgaW4gS29jaGl8IEJlc3QgZGVhbHMgYXQgU3VnYXIgQnVzaW5lc3MgaG90ZWwgS29jaGlcIiAgLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIiBjb250ZW50PVwiVGhlIHRvdXJpc20gaXMgaW4gZnVsbCBzd2luZyBmb3IgdGhlIEdvZOKAmXMgb3duIGNvdW50cnkgYW5kIHRoZSBiZXN0IGhvdGVscyBpbiBLb2NoaSBhcmUgYWxzbyByZWFkeSB0byB3ZWxjb21lIHRoZSBndWVzdHMuIFRoZSBTdWdhciBob3RlbCBpbiBLb2NoaSBpcyBhIHByZXN0aWdpb3VzIG9uZSBpbiB0aGlzIGxpc3Qgd2hvc2UgbG9jYXRpb24gaXRzZWxmIGlzIHNpZ25pZmljYW50LlVUSCBpcyB0aGUgbGVhZGluZyBicmFuZCBpbiB0aGUgaG90ZWwgYnVzaW5lc3MgdGhhdCBpcyBydW5uaW5nIG1hbnkgaG90ZWxzIGFuZCByZXNvcnRzIGFsbCBvdmVyIHRoZSBjb3VudHJ5IGFuZCBvdXQgb2YgdGhlIGNvdW50cnkgdG9vIHN1Y2ggYXMgU3JpIExhbmthLCBEdWJhaSBhbmQgTWFsZGl2ZXMuXCIgLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dXJsXCIgY29udGVudD1cIiVQVUJMSUNfVVJMJVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnNpdGVfbmFtZVwiIGNvbnRlbnQ9XCJVVEggfCBHcm91cCBvZiBIb3RlbHNcIiAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9XCJodHRwOi8vMTU5LjY1LjE1My41OS9zaXRlL2Fzc2V0cy9pbWFnZXMvZmF2L29nLWltYWdlLmpwZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpjYXJkXCIgY29udGVudD1cImh0dHA6Ly8xNTkuNjUuMTUzLjU5L3NpdGUvYXNzZXRzL2ltYWdlcy9mYXYvb2ctaW1hZ2UuanBnXCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBzaXplcz1cIjU3eDU3XCIgaHJlZj1cIi9hc3NldHMvaW1hZ2VzL2Zhdi9hcHBsZS1pY29uLTU3eDU3LnBuZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgc2l6ZXM9XCI2MHg2MFwiIGhyZWY9XCIvYXNzZXRzL2ltYWdlcy9mYXYvYXBwbGUtaWNvbi02MHg2MC5wbmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIHNpemVzPVwiNzJ4NzJcIiBocmVmPVwiL2Fzc2V0cy9pbWFnZXMvZmF2L2FwcGxlLWljb24tNzJ4NzIucG5nXCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBzaXplcz1cIjc2eDc2XCIgaHJlZj1cIi9hc3NldHMvaW1hZ2VzL2Zhdi9hcHBsZS1pY29uLTc2eDc2LnBuZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgc2l6ZXM9XCIxMTR4MTE0XCIgaHJlZj1cIi9hc3NldHMvaW1hZ2VzL2Zhdi9hcHBsZS1pY29uLTExNHgxMTQucG5nXCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBzaXplcz1cIjEyMHgxMjBcIiBocmVmPVwiL2Fzc2V0cy9pbWFnZXMvZmF2L2FwcGxlLWljb24tMTIweDEyMC5wbmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIHNpemVzPVwiMTQ0eDE0NFwiIGhyZWY9XCIvYXNzZXRzL2ltYWdlcy9mYXYvYXBwbGUtaWNvbi0xNDR4MTQ0LnBuZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgc2l6ZXM9XCIxNTJ4MTUyXCIgaHJlZj1cIi9hc3NldHMvaW1hZ2VzL2Zhdi9hcHBsZS1pY29uLTE1MngxNTIucG5nXCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBzaXplcz1cIjE4MHgxODBcIiBocmVmPVwiL2Fzc2V0cy9pbWFnZXMvZmF2L2FwcGxlLWljb24tMTgweDE4MC5wbmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIHR5cGU9XCJpbWFnZS9wbmdcIiBzaXplcz1cIjE5MngxOTJcIiBocmVmPVwiL2Fzc2V0cy9pbWFnZXMvZmF2L2FuZHJvaWQtaWNvbi0xOTJ4MTkyLnBuZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgdHlwZT1cImltYWdlL3BuZ1wiIHNpemVzPVwiMzJ4MzJcIiBocmVmPVwiL2Fzc2V0cy9pbWFnZXMvZmF2L2Zhdmljb24tMzJ4MzIucG5nXCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiB0eXBlPVwiaW1hZ2UvcG5nXCIgc2l6ZXM9XCI5Nng5NlwiIGhyZWY9XCIvYXNzZXRzL2ltYWdlcy9mYXYvZmF2aWNvbi05Nng5Ni5wbmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIHR5cGU9XCJpbWFnZS9wbmdcIiBzaXplcz1cIjE2eDE2XCIgaHJlZj1cIi9hc3NldHMvaW1hZ2VzL2Zhdi9mYXZpY29uLTE2eDE2LnBuZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwibXNhcHBsaWNhdGlvbi1UaWxlSW1hZ2VcIiBjb250ZW50PVwiL2Fzc2V0cy9pbWFnZXMvZmF2L21zLWljb24tMTQ0eDE0NC5wbmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6dGl0bGVcIiBjb250ZW50PVwiVVRIIHwgR3JvdXAgb2YgSG90ZWxzXCIgLz5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgICAgICAgPG1haW4+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyLXBhZ2UgbGlzdGluZ1wiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE5hdmJhci8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJkZXRhaWxzLWJhbm5lci1ibG9jayBpbWFnZS1zaGFkZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2NhdGVnb3J5SW5mbyAmJiBjYXRlZ29yeUluZm8udGh1bWIgJiYgY2F0ZWdvcnlJbmZvLnRodW1iICE9PSAnJyAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2Ake0lNQUdFX1BBVEggKyAnY2F0ZWdvcnkvJyArIGNhdGVnb3J5SW5mby50aHVtYn1gfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KCFjYXRlZ29yeUluZm8gfHwgIWNhdGVnb3J5SW5mby50aHVtYiB8fCBjYXRlZ29yeUluZm8udGh1bWIgPT09ICcnKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuLi9hc3NldHMvaW1hZ2VzL2Jhbm5lci5qcGdcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2Fyb3VzZWwtdGV4dC1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT57Y2F0ZWdvcnlJbmZvLmNhdGVnb3J5fTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdGluZy13cmFwcGVyXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExlZnRQYW5lbCBmYWNpbGl0aWVzPXtmYWNpbGl0aWVzfSBzZWFyY2hIb3RlbHM9e3NlYXJjaEhvdGVsc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0ZpbHRlclN0YXR1cz17c2hvd0ZpbHRlclN0YXR1c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZUZpbHRlcnM9e2hpZGVGaWx0ZXJzfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmctY29udGVudFwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmctY29udGVudC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PkhPVEVMUyAmIFJFU09SVFM8L2g1PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nLWNvbnRlbnQtaGVhZGVyLXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LWJvbGRcIj57aG90ZWxMaXN0Lmxlbmd0aH0gSG90ZWxzIGZvdW5kPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJmaWx0ZXJcIiBvbkNsaWNrPXsoKSA9PiBzaG93RmlsdGVycygpfT48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2hvdGVsTGlzdC5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWxpc3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aG90ZWxMaXN0Lm1hcCgoaG90ZWwsIGluZGV4KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEhvdGVsQmxvY2sgZGV0YWlsPXtob3RlbH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aG90ZWxMaXN0Lmxlbmd0aCA8IHRvdGFsICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZG1vcmUtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e1wiL2hvdGVsLWRldGFpbFwifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmF2PkxvYWQgbW9yZTwvbmF2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2hvdGVsTGlzdC5sZW5ndGggPT09IDAgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbWluZy1zb29uLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPkhvdGVscyB3aWxsIGJlIGFkZGVkIFNvb248L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9vdGVyLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGlkPVwiYmFjay10by10b3BcIiBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImJhY2stdG8tdG9wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRvcFwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbWFpbj5cclxuICAgICAgICA8Lz5cclxuXHJcblxyXG4gICAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgSG90ZWxMaXN0O1xyXG4vLyBjbGFzcyBIb3RlbExpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4vLyAgICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuLy8gICAgICAgICBzdXBlcihwcm9wcyk7XHJcbi8vXHJcbi8vICAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuLy8gICAgICAgICAgICAgaG90ZWxMaXN0IDogcHJvcHMuaG90ZWxMaXN0LFxyXG4vLyAgICAgICAgICAgICBzZWFyY2hUZXh0cyA6IFtdLFxyXG4vLyAgICAgICAgICAgICBmYWNpbGl0aWVzIDogW10sXHJcbi8vICAgICAgICAgICAgIHNob3dGaWx0ZXJTdGF0dXMgOiBmYWxzZSxcclxuLy8gICAgICAgICAgICAgY2F0ZWdvcnkgOiB7fVxyXG4vLyAgICAgICAgIH1cclxuLy9cclxuLy8gICAgIH1cclxuLy9cclxuLy8gICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4vL1xyXG4vLyAgICAgICAgIHRoaXMuZ2V0RmFjaWxpdGllcygpO1xyXG4vLyAgICAgICAgIC8vdGhpcy5nZXRIb3RlbExpc3QoKVxyXG4vLyAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4vLyAgICAgICAgICAgICBob3RlbExpc3QgOiB0aGlzLnByb3BzLmhvdGVsTGlzdFxyXG4vLyAgICAgICAgIH0pXHJcbi8vXHJcbi8vXHJcbi8vICAgICB9XHJcbi8vXHJcbi8vICAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUsIHNuYXBzaG90KSB7XHJcbi8vXHJcbi8vICAgICAgICAgaWYodGhpcy5wcm9wcy5ob3RlbERhdGEuaG90ZWxMaXN0ICE9PSBwcmV2UHJvcHMuaG90ZWxEYXRhLmhvdGVsTGlzdCkge1xyXG4vLyAgICAgICAgICAgICBsZXQgaG90ZWxMaXN0ID0gdGhpcy5wcm9wcy5ob3RlbERhdGEuaG90ZWxMaXN0O1xyXG4vLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhob3RlbExpc3QpXHJcbi8vICAgICAgICAgICAgIGhvdGVsTGlzdCA9IGhvdGVsTGlzdC5tYXAoaXRlbSA9PiB7XHJcbi8vICAgICAgICAgICAgICAgICBsZXQgZmFjaWxpdGllcyA9ICBpdGVtLmZhY2lsaXRpZXMgPyBpdGVtLmZhY2lsaXRpZXMgOiBbXTtcclxuLy8gICAgICAgICAgICAgICAgIGZhY2lsaXRpZXMgPSBmYWNpbGl0aWVzLm1hcCgoZmFjLGluZGV4KSA9PiB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmYWMuZmFjaWxpdHlfaWQgPT09IDEpIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhYy5jbGFzcyA9ICdwb29sLWljbyc7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoZmFjLmZhY2lsaXR5X2lkID09PSAyKSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWMuY2xhc3MgPSAnd2lmaS1pY28nO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGZhYy5mYWNpbGl0eV9pZCA9PT0gMykge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFjLmNsYXNzID0gJ2ZhbWlseS1pY28nO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGZhYy5mYWNpbGl0eV9pZCA9PT0gNCkge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFjLmNsYXNzID0gJ3BhcmtpbmctaWNvJztcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChmYWMuZmFjaWxpdHlfaWQgPT09IDUpIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhYy5jbGFzcyA9ICdzcGEtaWNvJztcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChmYWMuZmFjaWxpdHlfaWQgPT09IDYpIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhYy5jbGFzcyA9ICdyZXN0YXVyYW50LWljbyc7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoZmFjLmZhY2lsaXR5X2lkID09PSA3KSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWMuY2xhc3MgPSAnZml0bmVzcy1pY28nO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGZhYy5mYWNpbGl0eV9pZCA9PT0gOCkge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFjLmNsYXNzID0gJ2JlYWNoLWljbyc7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhYztcclxuLy8gICAgICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgICAgICApXHJcbi8vICAgICAgICAgICAgICAgICBpdGVtLmZhY2lsaXRpZXMgPSBmYWNpbGl0aWVzO1xyXG4vLyAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW07XHJcbi8vICAgICAgICAgICAgIH0pO1xyXG4vLyAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuLy8gICAgICAgICAgICAgICAgIGhvdGVsTGlzdCA6IGhvdGVsTGlzdFxyXG4vLyAgICAgICAgICAgICB9KVxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgICBpZih0aGlzLnByb3BzLmhvdGVsRGF0YS5jYXRlZ29yeSAhPT0gcHJldlByb3BzLmhvdGVsRGF0YS5jYXRlZ29yeSkge1xyXG4vLyAgICAgICAgICAgICBsZXQgY2F0ZWdvcnkgPSB0aGlzLnByb3BzLmhvdGVsRGF0YS5jYXRlZ29yeTtcclxuLy8gICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbi8vICAgICAgICAgICAgICAgICBjYXRlZ29yeSA6IGNhdGVnb3J5XHJcbi8vICAgICAgICAgICAgIH0pXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICAgIGlmKHRoaXMucHJvcHMuZmFjaWxpdHlEYXRhLmZhY2lsaXRpZXMgIT09IHByZXZQcm9wcy5mYWNpbGl0eURhdGEuZmFjaWxpdGllcykge1xyXG4vLyAgICAgICAgICAgICBsZXQgZmFjaWxpdGllcyA9IHRoaXMucHJvcHMuZmFjaWxpdHlEYXRhLmZhY2lsaXRpZXM7XHJcbi8vXHJcbi8vICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4vLyAgICAgICAgICAgICAgICAgZmFjaWxpdGllcyA6IHRoaXMucHJvcHMuZmFjaWxpdHlEYXRhLmZhY2lsaXRpZXNcclxuLy8gICAgICAgICAgICAgfSlcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vXHJcbi8vICAgICBnZXRIb3RlbExpc3QgPSgpPT57XHJcbi8vXHJcbi8vICAgICAgICAgbGV0IGNhdGVnb3J5X2lkID0gaWQ7XHJcbi8vICAgICAgICAgbGV0IHBhcmFtcyA9IHt9XHJcbi8vICAgICAgICAgaWYoY2F0ZWdvcnlfaWQpIHtcclxuLy8gICAgICAgICAgICAgcGFyYW1zID0ge2NhdGVnb3J5IDogY2F0ZWdvcnlfaWR9O1xyXG4vL1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgICB0aGlzLnByb3BzLmhvdGVsTGlzdChwYXJhbXMpO1xyXG4vLyAgICAgfVxyXG4vL1xyXG4vLyAgICAgZ2V0RmFjaWxpdGllcyA9KCk9PntcclxuLy8gICAgICAgICB0aGlzLnByb3BzLmdldEZhY2lsaXRpZXMoKVxyXG4vLyAgICAgfVxyXG4vL1xyXG4vLyAgICAgc2VhcmNoSG90ZWxzID0gKCkgPT4ge1xyXG4vLyAgICAgICAgIHRoaXMucHJvcHMuc2VhcmNoSG90ZWxzKCk7XHJcbi8vICAgICB9XHJcbi8vXHJcbi8vICAgICBzaG93RmlsdGVycyA9ICgpID0+IHtcclxuLy8gICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuLy8gICAgICAgICAgICAgc2hvd0ZpbHRlclN0YXR1cyA6IHRydWVcclxuLy8gICAgICAgICB9KVxyXG4vLyAgICAgfVxyXG4vL1xyXG4vLyAgICAgaGlkZUZpbHRlcnMgPSAoKSA9PiB7XHJcbi8vICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbi8vICAgICAgICAgICAgIHNob3dGaWx0ZXJTdGF0dXMgOiBmYWxzZVxyXG4vLyAgICAgICAgIH0pXHJcbi8vICAgICB9XHJcbi8vXHJcbi8vICAgICByZW5kZXIoKSB7XHJcbi8vICAgICAgICAgbGV0IGhvdGVsTGlzdCA9IHRoaXMucHJvcHMuaG90ZWxMaXN0IHx8IFtdO1xyXG4vLyAgICAgICAgIGxldCBjYXRlZ29yeUluZm8gPSB0aGlzLnN0YXRlLmNhdGVnb3J5IHx8IHt9O1xyXG4vLyAgICAgICAgIGxldCBmYWNpbGl0aWVzID0gdGhpcy5zdGF0ZS5mYWNpbGl0aWVzIHx8IFtdO1xyXG4vLyAgICAgICAgIGxldCB0b3RhbCA9IGhvdGVsTGlzdC5sZW5ndGg7XHJcbi8vICAgICAgICAgLy9ob3RlbExpc3QgPWhvdGVscztcclxuLy8gICAgICAgICBjb25zb2xlLmxvZyhob3RlbExpc3QpXHJcbi8vICAgICAgICAgY29uc3QgeyBpZCB9ID0gdGhpcy5wcm9wcy5yb3V0ZXIucXVlcnk7XHJcbi8vICAgICAgICAgcmV0dXJuIChcclxuLy8gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XHJcbi8vICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyLXBhZ2UgbGlzdGluZ1wiPlxyXG4vL1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIDxOYXZiYXIgLz5cclxuLy9cclxuLy8gICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJkZXRhaWxzLWJhbm5lci1ibG9jayBpbWFnZS1zaGFkZVwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB7Y2F0ZWdvcnlJbmZvICYmIGNhdGVnb3J5SW5mby50aHVtYiAmJiBjYXRlZ29yeUluZm8udGh1bWIgIT09ICcnICYmXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgJHtJTUFHRV9QQVRIICsgJ2NhdGVnb3J5LycgKyBjYXRlZ29yeUluZm8udGh1bWJ9YH0vPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHsoIWNhdGVnb3J5SW5mbyB8fCAhY2F0ZWdvcnlJbmZvLnRodW1iIHx8IGNhdGVnb3J5SW5mby50aHVtYiA9PT0gJycpICYmXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vYXNzZXRzL2ltYWdlcy9iYW5uZXIuanBnXCIvPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbi8vXHJcbi8vXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJvdXNlbC10ZXh0LWJsb2NrXCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPntjYXRlZ29yeUluZm8uY2F0ZWdvcnl9PC9oMT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbi8vXHJcbi8vXHJcbi8vICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nLXdyYXBwZXJcIj5cclxuLy9cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgPExlZnRQYW5lbCBmYWNpbGl0aWVzPXtmYWNpbGl0aWVzfSBzZWFyY2hIb3RlbHM9e3RoaXMuc2VhcmNoSG90ZWxzfSBzaG93RmlsdGVyU3RhdHVzID0ge3RoaXMuc3RhdGUuc2hvd0ZpbHRlclN0YXR1c31cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlRmlsdGVycz17dGhpcy5oaWRlRmlsdGVyc30vPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmctY29udGVudFwiPlxyXG4vL1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nLWNvbnRlbnQtaGVhZGVyXCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PkhPVEVMUyAmIFJFU09SVFM8L2g1PlxyXG4vL1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdGluZy1jb250ZW50LWhlYWRlci1yaWdodFwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LWJvbGRcIj57aG90ZWxMaXN0Lmxlbmd0aH0gSG90ZWxzIGZvdW5kPC9wPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImZpbHRlclwiIG9uQ2xpY2s9eygpID0+IHRoaXMuc2hvd0ZpbHRlcnMoKX0+PC9idXR0b24+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtob3RlbExpc3QubGVuZ3RoID4gMCAmJlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWxpc3RlclwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtob3RlbExpc3QubWFwKChob3RlbCwgaW5kZXgpID0+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIb3RlbEJsb2NrIGRldGFpbD17aG90ZWx9Lz5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtob3RlbExpc3QubGVuZ3RoIDwgdG90YWwgJiZcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRtb3JlLWJsb2NrXCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e1wiL2hvdGVsLWRldGFpbFwifT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuYXY+TG9hZCBtb3JlPC9uYXY+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbi8vXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtob3RlbExpc3QubGVuZ3RoID09PSAwICYmXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbWluZy1zb29uLXdyYXBwZXJcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+SG90ZWxzIHdpbGwgYmUgYWRkZWQgU29vbjwvaDE+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbi8vXHJcbi8vICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbi8vXHJcbi8vICAgICAgICAgICAgICAgICAgICAgPEZvb3RlciAvPlxyXG4vL1xyXG4vLyAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbi8vXHJcbi8vICAgICAgICAgICAgICAgICA8YSBpZD1cImJhY2stdG8tdG9wXCIgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJiYWNrLXRvLXRvcFwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRvcFwiPjwvc3Bhbj5cclxuLy8gICAgICAgICAgICAgICAgIDwvYT5cclxuLy9cclxuLy8gICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgKTtcclxuLy8gICAgIH1cclxuLy8gfVxyXG4vL1xyXG4vLyBjb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xyXG4vLyAgICAgaG90ZWxEYXRhOnN0YXRlLkhvdGVsUmVkdWNlci5ob3RlbERhdGEsXHJcbi8vICAgICBmYWNpbGl0eURhdGE6c3RhdGUuSG90ZWxSZWR1Y2VyLmZhY2lsaXR5RGF0YVxyXG4vLyB9KTtcclxuLy9cclxuLy8gZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihjb25uZWN0KFxyXG4vLyAgICAgbWFwU3RhdGVUb1Byb3BzLFxyXG4vLyAgICAge1xyXG4vLyAgICAgICAgIGhvdGVsTGlzdCA6IEhvdGVsQWN0aW9ucy5nZXRIb3RlbExpc3QsXHJcbi8vICAgICAgICAgZ2V0RmFjaWxpdGllcyA6IEhvdGVsQWN0aW9ucy5nZXRGYWNpbGl0aWVzLFxyXG4vLyAgICAgICAgIHNlYXJjaEhvdGVscyA6IEhvdGVsQWN0aW9ucy5zZWFyY2hIb3RlbHNcclxuLy8gICAgIH1cclxuLy8gKShIb3RlbExpc3QpKTtcclxuXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsInVzZUVmZmVjdCIsImxhenkiLCJ1c2VTdGF0ZSIsImNvbm5lY3QiLCJOYXZiYXIiLCJGb290ZXIiLCJMZWZ0UGFuZWwiLCJMaW5rIiwiSG90ZWxCbG9jayIsIkhvdGVsQWN0aW9ucyIsImdldFVybFNlZ21lbnQiLCJJTUFHRV9QQVRIIiwiQVBJX1BBVEgiLCJ3aXRoUm91dGVyIiwiaG90ZWwiLCJnZXRGYWNpbGl0aWVzIiwiSGVhZCIsIkhvdGVsTGlzdCIsImhvdGVsTGlzdCIsImNhdGVnb3J5SW5mbyIsImZhY2lsaXRpZXMiLCJzZXRmYWNpbGl0aWVzIiwic2hvd0ZpbHRlclN0YXR1cyIsInNldHNob3dGaWx0ZXJTdGF0dXMiLCJ0b3RhbCIsImxlbmd0aCIsImZldGNoIiwiZnJlc3BvbnNlIiwianNvbiIsImZyZXMiLCJyZXN1bHRzIiwiZGF0YSIsInNlYXJjaEhvdGVscyIsInNob3dGaWx0ZXJzIiwiaGlkZUZpbHRlcnMiLCJ0aHVtYiIsImNhdGVnb3J5IiwibWFwIiwiaW5kZXgiXSwic291cmNlUm9vdCI6IiJ9