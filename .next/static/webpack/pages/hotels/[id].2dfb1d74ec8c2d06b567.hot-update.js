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
/* harmony import */ var D_demo_uth_next_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var D_demo_uth_next_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_demo_uth_next_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(D_demo_uth_next_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
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
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\demo\\uth-next\\pages\\hotels\\[id].js",
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
    _getFacilities = (0,D_demo_uth_next_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/D_demo_uth_next_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
      var fresponse, fres;
      return D_demo_uth_next_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
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

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
    className: "wrapper",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
      className: "inner-page listing",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_views_Navbar__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("section", {
        className: "details-banner-block image-shade",
        children: [categoryInfo && categoryInfo.thumb && categoryInfo.thumb !== '' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("img", {
          src: "".concat(_constants__WEBPACK_IMPORTED_MODULE_11__.IMAGE_PATH + 'category/' + categoryInfo.thumb)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 21
        }, _this), (!categoryInfo || !categoryInfo.thumb || categoryInfo.thumb === '') && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("img", {
          src: "../assets/images/banner.jpg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
          className: "carousel-text-block",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
            className: "container",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("h1", {
              children: categoryInfo.category
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
        className: "listing-wrapper",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_views_LeftPanel__WEBPACK_IMPORTED_MODULE_6__.default, {
          facilities: facilities,
          searchHotels: searchHotels,
          showFilterStatus: showFilterStatus,
          hideFilters: hideFilters
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
          className: "listing-content",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
            className: "listing-content-header",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("h5", {
              children: "HOTELS & RESORTS"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
              className: "listing-content-header-right",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("p", {
                className: "font-bold",
                children: [hotelList.length, " Hotels found"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 103,
                columnNumber: 33
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("button", {
                className: "filter",
                onClick: function onClick() {
                  return showFilters();
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 104,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 25
          }, _this), hotelList.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
            className: "content-lister",
            children: [hotelList.map(function (hotel, index) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_views_HotelBlock__WEBPACK_IMPORTED_MODULE_8__.default, {
                detail: hotel
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 110,
                columnNumber: 33
              }, _this);
            }), hotelList.length < total && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
              className: "loadmore-block",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {
                href: "/hotel-detail",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("nav", {
                  children: "Load more"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 115,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 114,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 25
          }, _this), hotelList.length === 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
            className: "coming-soon-wrapper",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("h1", {
              children: "Hotels will be added Soon"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 124,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_views_Footer__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("a", {
      id: "back-to-top",
      href: "#",
      className: "back-to-top",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("span", {
        className: "top"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 70,
    columnNumber: 9
  }, _this);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaG90ZWxzL1tpZF0uMmRmYjFkNzRlYzhjMmQwNmI1NjcuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUtBOzs7O0FBZ0JBLElBQU1rQixTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQUFpQztBQUFBOztBQUFBLE1BQTlCQyxTQUE4QixRQUE5QkEsU0FBOEI7QUFBQSxNQUFuQkMsWUFBbUIsUUFBbkJBLFlBQW1COztBQUMvQyxrQkFBb0NoQiwrQ0FBUSxDQUFDLEVBQUQsQ0FBNUM7QUFBQSxNQUFPaUIsVUFBUDtBQUFBLE1BQW1CQyxhQUFuQjs7QUFDQSxtQkFBZ0RsQiwrQ0FBUSxDQUFDLEtBQUQsQ0FBeEQ7QUFBQSxNQUFPbUIsZ0JBQVA7QUFBQSxNQUF5QkMsbUJBQXpCOztBQUNBLE1BQUlDLEtBQUssR0FBR04sU0FBUyxDQUFDTyxNQUF0QjtBQUVBeEIsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ1o7QUFDQWUsSUFBQUEsYUFBYTtBQUNoQixHQUhRLEVBR04sRUFITSxDQUFUOztBQUwrQyxXQVVoQ0EsYUFWZ0M7QUFBQTtBQUFBLElBZ0JoRDs7O0FBaEJnRDtBQUFBLDJSQVUvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUMwQlUsS0FBSyxXQUFJYixpREFBSiw4QkFEL0I7O0FBQUE7QUFDUWMsY0FBQUEsU0FEUjtBQUFBO0FBQUEscUJBRXFCQSxTQUFTLENBQUNDLElBQVYsRUFGckI7O0FBQUE7QUFFUUMsY0FBQUEsSUFGUjtBQUdJUixjQUFBQSxhQUFhLENBQUNRLElBQUksQ0FBQ0MsT0FBTCxHQUFlRCxJQUFJLENBQUNDLE9BQUwsQ0FBYUMsSUFBNUIsR0FBbUMsRUFBcEMsQ0FBYjs7QUFISjtBQUFBO0FBQUE7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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2hvdGVscy9baWRdLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudCwgdXNlRWZmZWN0LCBsYXp5LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuLi8uLi92aWV3cy9OYXZiYXJcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vLi4vdmlld3MvRm9vdGVyXCI7XHJcbmltcG9ydCBMZWZ0UGFuZWwgZnJvbSBcIi4uLy4uL3ZpZXdzL0xlZnRQYW5lbFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBIb3RlbEJsb2NrIGZyb20gXCIuLi8uLi92aWV3cy9Ib3RlbEJsb2NrXCI7XHJcbmltcG9ydCAqIGFzIEhvdGVsQWN0aW9ucyBmcm9tIFwiLi4vLi4vYWN0aW9ucy9ob3RlbFwiXHJcbmltcG9ydCB7Z2V0VXJsU2VnbWVudH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9DdXN0b21GdW5jdGlvbnNcIjtcclxuaW1wb3J0IHtJTUFHRV9QQVRILCBBUElfUEFUSH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7aG90ZWx9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9ob3RlbC5zZXJ2aWNlc1wiO1xyXG5pbXBvcnQge2dldEZhY2lsaXRpZXN9IGZyb20gXCIuLi8uLi9hY3Rpb25zL2hvdGVsXCI7XHJcblxyXG5cclxuXHJcbi8vVGhpcyBnZXRzIGNhbGxlZCBldmVyeSB0aW1lIHRoZSBwYWdlIGlzIGNhbGxlZFxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuICAgIGNvbnN0IHtwYXJhbXN9ID0gY29udGV4dDtcclxuICAgIGNvbnN0IHtpZH0gPSBwYXJhbXM7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke0FQSV9QQVRIfWhvdGVsL2hvdGVsbGlzdD9jYXRlZ29yeT0ke2lkfWApO1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHMgOiB7XHJcbiAgICAgICAgICAgIGhvdGVsTGlzdDogcmVzLnJlc3VsdHMgPyByZXMucmVzdWx0cy5kYXRhOiBbXSxcclxuICAgICAgICAgICAgY2F0ZWdvcnlJbmZvIDogcmVzLnJlc3VsdHMuY2F0ZWdvcnlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5jb25zdCBIb3RlbExpc3QgPSAoeyBob3RlbExpc3QsIGNhdGVnb3J5SW5mbyB9KSA9PiB7XHJcbiAgICBjb25zdCBbZmFjaWxpdGllcywgc2V0ZmFjaWxpdGllc10gPSB1c2VTdGF0ZShbXSlcclxuICAgIGNvbnN0IFtzaG93RmlsdGVyU3RhdHVzLCBzZXRzaG93RmlsdGVyU3RhdHVzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGxldCB0b3RhbCA9IGhvdGVsTGlzdC5sZW5ndGg7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAvLyBBbHdheXMgZG8gbmF2aWdhdGlvbnMgYWZ0ZXIgdGhlIGZpcnN0IHJlbmRlclxyXG4gICAgICAgIGdldEZhY2lsaXRpZXMoKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBnZXRGYWNpbGl0aWVzKCkge1xyXG4gICAgICAgIGxldCBmcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtBUElfUEFUSH1cImhvdGVsL21hc3RlcmZhY2lsaXRpZXNgKTtcclxuICAgICAgICBsZXQgZnJlcyA9IGF3YWl0IGZyZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgc2V0ZmFjaWxpdGllcyhmcmVzLnJlc3VsdHMgPyBmcmVzLnJlc3VsdHMuZGF0YSA6IFtdKTtcclxuXHJcbiAgICB9XHJcbiAgIC8vIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIGZ1bmN0aW9uIHNlYXJjaEhvdGVscygpIHtcclxuICAgICAgIC8vIHRoaXMucHJvcHMuc2VhcmNoSG90ZWxzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2hvd0ZpbHRlcnMoKXtcclxuICAgICAgICBzZXRzaG93RmlsdGVyU3RhdHVzKHRydWUpXHJcblxyXG4gICAgICAgIC8vIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIC8vICAgICBzaG93RmlsdGVyU3RhdHVzIDogdHJ1ZVxyXG4gICAgICAgIC8vIH0pXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGlkZUZpbHRlcnMoKXtcclxuICAgICAgICBzZXRzaG93RmlsdGVyU3RhdHVzKGZhbHNlKVxyXG4gICAgICAgIC8vICAgICBzaG93RmlsdGVyU3RhdHVzIDogZmFsc2VcclxuICAgICAgICAvLyB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5uZXItcGFnZSBsaXN0aW5nXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgPE5hdmJhci8+XHJcblxyXG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZGV0YWlscy1iYW5uZXItYmxvY2sgaW1hZ2Utc2hhZGVcIj5cclxuICAgICAgICAgICAgICAgICAgICB7Y2F0ZWdvcnlJbmZvICYmIGNhdGVnb3J5SW5mby50aHVtYiAmJiBjYXRlZ29yeUluZm8udGh1bWIgIT09ICcnICYmXHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2Ake0lNQUdFX1BBVEggKyAnY2F0ZWdvcnkvJyArIGNhdGVnb3J5SW5mby50aHVtYn1gfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHsoIWNhdGVnb3J5SW5mbyB8fCAhY2F0ZWdvcnlJbmZvLnRodW1iIHx8IGNhdGVnb3J5SW5mby50aHVtYiA9PT0gJycpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuLi9hc3NldHMvaW1hZ2VzL2Jhbm5lci5qcGdcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJvdXNlbC10ZXh0LWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+e2NhdGVnb3J5SW5mby5jYXRlZ29yeX08L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nLXdyYXBwZXJcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPExlZnRQYW5lbCBmYWNpbGl0aWVzPXtmYWNpbGl0aWVzfSBzZWFyY2hIb3RlbHM9e3NlYXJjaEhvdGVsc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dGaWx0ZXJTdGF0dXM9e3Nob3dGaWx0ZXJTdGF0dXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlRmlsdGVycz17aGlkZUZpbHRlcnN9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmctY29udGVudFwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nLWNvbnRlbnQtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+SE9URUxTICYgUkVTT1JUUzwvaDU+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nLWNvbnRlbnQtaGVhZGVyLXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+e2hvdGVsTGlzdC5sZW5ndGh9IEhvdGVscyBmb3VuZDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImZpbHRlclwiIG9uQ2xpY2s9eygpID0+IHNob3dGaWx0ZXJzKCl9PjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7aG90ZWxMaXN0Lmxlbmd0aCA+IDAgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWxpc3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2hvdGVsTGlzdC5tYXAoKGhvdGVsLCBpbmRleCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SG90ZWxCbG9jayBkZXRhaWw9e2hvdGVsfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2hvdGVsTGlzdC5sZW5ndGggPCB0b3RhbCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkbW9yZS1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e1wiL2hvdGVsLWRldGFpbFwifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5hdj5Mb2FkIG1vcmU8L25hdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtob3RlbExpc3QubGVuZ3RoID09PSAwICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29taW5nLXNvb24td3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPkhvdGVscyB3aWxsIGJlIGFkZGVkIFNvb248L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxGb290ZXIvPlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8YSBpZD1cImJhY2stdG8tdG9wXCIgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJiYWNrLXRvLXRvcFwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidG9wXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEhvdGVsTGlzdDtcclxuLy8gY2xhc3MgSG90ZWxMaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuLy8gICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbi8vICAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4vL1xyXG4vLyAgICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbi8vICAgICAgICAgICAgIGhvdGVsTGlzdCA6IHByb3BzLmhvdGVsTGlzdCxcclxuLy8gICAgICAgICAgICAgc2VhcmNoVGV4dHMgOiBbXSxcclxuLy8gICAgICAgICAgICAgZmFjaWxpdGllcyA6IFtdLFxyXG4vLyAgICAgICAgICAgICBzaG93RmlsdGVyU3RhdHVzIDogZmFsc2UsXHJcbi8vICAgICAgICAgICAgIGNhdGVnb3J5IDoge31cclxuLy8gICAgICAgICB9XHJcbi8vXHJcbi8vICAgICB9XHJcbi8vXHJcbi8vICAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuLy9cclxuLy8gICAgICAgICB0aGlzLmdldEZhY2lsaXRpZXMoKTtcclxuLy8gICAgICAgICAvL3RoaXMuZ2V0SG90ZWxMaXN0KClcclxuLy8gICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuLy8gICAgICAgICAgICAgaG90ZWxMaXN0IDogdGhpcy5wcm9wcy5ob3RlbExpc3RcclxuLy8gICAgICAgICB9KVxyXG4vL1xyXG4vL1xyXG4vLyAgICAgfVxyXG4vL1xyXG4vLyAgICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlLCBzbmFwc2hvdCkge1xyXG4vL1xyXG4vLyAgICAgICAgIGlmKHRoaXMucHJvcHMuaG90ZWxEYXRhLmhvdGVsTGlzdCAhPT0gcHJldlByb3BzLmhvdGVsRGF0YS5ob3RlbExpc3QpIHtcclxuLy8gICAgICAgICAgICAgbGV0IGhvdGVsTGlzdCA9IHRoaXMucHJvcHMuaG90ZWxEYXRhLmhvdGVsTGlzdDtcclxuLy8gICAgICAgICAgICAgY29uc29sZS5sb2coaG90ZWxMaXN0KVxyXG4vLyAgICAgICAgICAgICBob3RlbExpc3QgPSBob3RlbExpc3QubWFwKGl0ZW0gPT4ge1xyXG4vLyAgICAgICAgICAgICAgICAgbGV0IGZhY2lsaXRpZXMgPSAgaXRlbS5mYWNpbGl0aWVzID8gaXRlbS5mYWNpbGl0aWVzIDogW107XHJcbi8vICAgICAgICAgICAgICAgICBmYWNpbGl0aWVzID0gZmFjaWxpdGllcy5tYXAoKGZhYyxpbmRleCkgPT4ge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmFjLmZhY2lsaXR5X2lkID09PSAxKSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWMuY2xhc3MgPSAncG9vbC1pY28nO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGZhYy5mYWNpbGl0eV9pZCA9PT0gMikge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFjLmNsYXNzID0gJ3dpZmktaWNvJztcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChmYWMuZmFjaWxpdHlfaWQgPT09IDMpIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhYy5jbGFzcyA9ICdmYW1pbHktaWNvJztcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChmYWMuZmFjaWxpdHlfaWQgPT09IDQpIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhYy5jbGFzcyA9ICdwYXJraW5nLWljbyc7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoZmFjLmZhY2lsaXR5X2lkID09PSA1KSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWMuY2xhc3MgPSAnc3BhLWljbyc7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoZmFjLmZhY2lsaXR5X2lkID09PSA2KSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWMuY2xhc3MgPSAncmVzdGF1cmFudC1pY28nO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGZhYy5mYWNpbGl0eV9pZCA9PT0gNykge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFjLmNsYXNzID0gJ2ZpdG5lc3MtaWNvJztcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChmYWMuZmFjaWxpdHlfaWQgPT09IDgpIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhYy5jbGFzcyA9ICdiZWFjaC1pY28nO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWM7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAgICAgKVxyXG4vLyAgICAgICAgICAgICAgICAgaXRlbS5mYWNpbGl0aWVzID0gZmFjaWxpdGllcztcclxuLy8gICAgICAgICAgICAgICAgIHJldHVybiBpdGVtO1xyXG4vLyAgICAgICAgICAgICB9KTtcclxuLy8gICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbi8vICAgICAgICAgICAgICAgICBob3RlbExpc3QgOiBob3RlbExpc3RcclxuLy8gICAgICAgICAgICAgfSlcclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgICAgaWYodGhpcy5wcm9wcy5ob3RlbERhdGEuY2F0ZWdvcnkgIT09IHByZXZQcm9wcy5ob3RlbERhdGEuY2F0ZWdvcnkpIHtcclxuLy8gICAgICAgICAgICAgbGV0IGNhdGVnb3J5ID0gdGhpcy5wcm9wcy5ob3RlbERhdGEuY2F0ZWdvcnk7XHJcbi8vICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4vLyAgICAgICAgICAgICAgICAgY2F0ZWdvcnkgOiBjYXRlZ29yeVxyXG4vLyAgICAgICAgICAgICB9KVxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgICBpZih0aGlzLnByb3BzLmZhY2lsaXR5RGF0YS5mYWNpbGl0aWVzICE9PSBwcmV2UHJvcHMuZmFjaWxpdHlEYXRhLmZhY2lsaXRpZXMpIHtcclxuLy8gICAgICAgICAgICAgbGV0IGZhY2lsaXRpZXMgPSB0aGlzLnByb3BzLmZhY2lsaXR5RGF0YS5mYWNpbGl0aWVzO1xyXG4vL1xyXG4vLyAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuLy8gICAgICAgICAgICAgICAgIGZhY2lsaXRpZXMgOiB0aGlzLnByb3BzLmZhY2lsaXR5RGF0YS5mYWNpbGl0aWVzXHJcbi8vICAgICAgICAgICAgIH0pXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG4vL1xyXG4vLyAgICAgZ2V0SG90ZWxMaXN0ID0oKT0+e1xyXG4vL1xyXG4vLyAgICAgICAgIGxldCBjYXRlZ29yeV9pZCA9IGlkO1xyXG4vLyAgICAgICAgIGxldCBwYXJhbXMgPSB7fVxyXG4vLyAgICAgICAgIGlmKGNhdGVnb3J5X2lkKSB7XHJcbi8vICAgICAgICAgICAgIHBhcmFtcyA9IHtjYXRlZ29yeSA6IGNhdGVnb3J5X2lkfTtcclxuLy9cclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgICAgdGhpcy5wcm9wcy5ob3RlbExpc3QocGFyYW1zKTtcclxuLy8gICAgIH1cclxuLy9cclxuLy8gICAgIGdldEZhY2lsaXRpZXMgPSgpPT57XHJcbi8vICAgICAgICAgdGhpcy5wcm9wcy5nZXRGYWNpbGl0aWVzKClcclxuLy8gICAgIH1cclxuLy9cclxuLy8gICAgIHNlYXJjaEhvdGVscyA9ICgpID0+IHtcclxuLy8gICAgICAgICB0aGlzLnByb3BzLnNlYXJjaEhvdGVscygpO1xyXG4vLyAgICAgfVxyXG4vL1xyXG4vLyAgICAgc2hvd0ZpbHRlcnMgPSAoKSA9PiB7XHJcbi8vICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbi8vICAgICAgICAgICAgIHNob3dGaWx0ZXJTdGF0dXMgOiB0cnVlXHJcbi8vICAgICAgICAgfSlcclxuLy8gICAgIH1cclxuLy9cclxuLy8gICAgIGhpZGVGaWx0ZXJzID0gKCkgPT4ge1xyXG4vLyAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4vLyAgICAgICAgICAgICBzaG93RmlsdGVyU3RhdHVzIDogZmFsc2VcclxuLy8gICAgICAgICB9KVxyXG4vLyAgICAgfVxyXG4vL1xyXG4vLyAgICAgcmVuZGVyKCkge1xyXG4vLyAgICAgICAgIGxldCBob3RlbExpc3QgPSB0aGlzLnByb3BzLmhvdGVsTGlzdCB8fCBbXTtcclxuLy8gICAgICAgICBsZXQgY2F0ZWdvcnlJbmZvID0gdGhpcy5zdGF0ZS5jYXRlZ29yeSB8fCB7fTtcclxuLy8gICAgICAgICBsZXQgZmFjaWxpdGllcyA9IHRoaXMuc3RhdGUuZmFjaWxpdGllcyB8fCBbXTtcclxuLy8gICAgICAgICBsZXQgdG90YWwgPSBob3RlbExpc3QubGVuZ3RoO1xyXG4vLyAgICAgICAgIC8vaG90ZWxMaXN0ID1ob3RlbHM7XHJcbi8vICAgICAgICAgY29uc29sZS5sb2coaG90ZWxMaXN0KVxyXG4vLyAgICAgICAgIGNvbnN0IHsgaWQgfSA9IHRoaXMucHJvcHMucm91dGVyLnF1ZXJ5O1xyXG4vLyAgICAgICAgIHJldHVybiAoXHJcbi8vICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxyXG4vLyAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lci1wYWdlIGxpc3RpbmdcIj5cclxuLy9cclxuLy8gICAgICAgICAgICAgICAgICAgICA8TmF2YmFyIC8+XHJcbi8vXHJcbi8vICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZGV0YWlscy1iYW5uZXItYmxvY2sgaW1hZ2Utc2hhZGVcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAge2NhdGVnb3J5SW5mbyAmJiBjYXRlZ29yeUluZm8udGh1bWIgJiYgY2F0ZWdvcnlJbmZvLnRodW1iICE9PSAnJyAmJlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YCR7SU1BR0VfUEFUSCArICdjYXRlZ29yeS8nICsgY2F0ZWdvcnlJbmZvLnRodW1ifWB9Lz5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB7KCFjYXRlZ29yeUluZm8gfHwgIWNhdGVnb3J5SW5mby50aHVtYiB8fCBjYXRlZ29yeUluZm8udGh1bWIgPT09ICcnKSAmJlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4uL2Fzc2V0cy9pbWFnZXMvYmFubmVyLmpwZ1wiLz5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4vL1xyXG4vL1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2Fyb3VzZWwtdGV4dC1ibG9ja1wiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT57Y2F0ZWdvcnlJbmZvLmNhdGVnb3J5fTwvaDE+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4vL1xyXG4vL1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdGluZy13cmFwcGVyXCI+XHJcbi8vXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIDxMZWZ0UGFuZWwgZmFjaWxpdGllcz17ZmFjaWxpdGllc30gc2VhcmNoSG90ZWxzPXt0aGlzLnNlYXJjaEhvdGVsc30gc2hvd0ZpbHRlclN0YXR1cyA9IHt0aGlzLnN0YXRlLnNob3dGaWx0ZXJTdGF0dXN9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZUZpbHRlcnM9e3RoaXMuaGlkZUZpbHRlcnN9Lz5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nLWNvbnRlbnRcIj5cclxuLy9cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdGluZy1jb250ZW50LWhlYWRlclwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5IT1RFTFMgJiBSRVNPUlRTPC9oNT5cclxuLy9cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmctY29udGVudC1oZWFkZXItcmlnaHRcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+e2hvdGVsTGlzdC5sZW5ndGh9IEhvdGVscyBmb3VuZDwvcD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJmaWx0ZXJcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnNob3dGaWx0ZXJzKCl9PjwvYnV0dG9uPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aG90ZWxMaXN0Lmxlbmd0aCA+IDAgJiZcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1saXN0ZXJcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aG90ZWxMaXN0Lm1hcCgoaG90ZWwsIGluZGV4KSA9PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SG90ZWxCbG9jayBkZXRhaWw9e2hvdGVsfS8+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aG90ZWxMaXN0Lmxlbmd0aCA8IHRvdGFsICYmXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkbW9yZS1ibG9ja1wiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtcIi9ob3RlbC1kZXRhaWxcIn0+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmF2PkxvYWQgbW9yZTwvbmF2PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4vL1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aG90ZWxMaXN0Lmxlbmd0aCA9PT0gMCAmJlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21pbmctc29vbi13cmFwcGVyXCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPkhvdGVscyB3aWxsIGJlIGFkZGVkIFNvb248L2gxPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4vL1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4vL1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIDxGb290ZXIgLz5cclxuLy9cclxuLy8gICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4vL1xyXG4vLyAgICAgICAgICAgICAgICAgPGEgaWQ9XCJiYWNrLXRvLXRvcFwiIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYmFjay10by10b3BcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0b3BcIj48L3NwYW4+XHJcbi8vICAgICAgICAgICAgICAgICA8L2E+XHJcbi8vXHJcbi8vICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICk7XHJcbi8vICAgICB9XHJcbi8vIH1cclxuLy9cclxuLy8gY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcclxuLy8gICAgIGhvdGVsRGF0YTpzdGF0ZS5Ib3RlbFJlZHVjZXIuaG90ZWxEYXRhLFxyXG4vLyAgICAgZmFjaWxpdHlEYXRhOnN0YXRlLkhvdGVsUmVkdWNlci5mYWNpbGl0eURhdGFcclxuLy8gfSk7XHJcbi8vXHJcbi8vIGV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoY29ubmVjdChcclxuLy8gICAgIG1hcFN0YXRlVG9Qcm9wcyxcclxuLy8gICAgIHtcclxuLy8gICAgICAgICBob3RlbExpc3QgOiBIb3RlbEFjdGlvbnMuZ2V0SG90ZWxMaXN0LFxyXG4vLyAgICAgICAgIGdldEZhY2lsaXRpZXMgOiBIb3RlbEFjdGlvbnMuZ2V0RmFjaWxpdGllcyxcclxuLy8gICAgICAgICBzZWFyY2hIb3RlbHMgOiBIb3RlbEFjdGlvbnMuc2VhcmNoSG90ZWxzXHJcbi8vICAgICB9XHJcbi8vICkoSG90ZWxMaXN0KSk7XHJcblxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJ1c2VFZmZlY3QiLCJsYXp5IiwidXNlU3RhdGUiLCJjb25uZWN0IiwiTmF2YmFyIiwiRm9vdGVyIiwiTGVmdFBhbmVsIiwiTGluayIsIkhvdGVsQmxvY2siLCJIb3RlbEFjdGlvbnMiLCJnZXRVcmxTZWdtZW50IiwiSU1BR0VfUEFUSCIsIkFQSV9QQVRIIiwid2l0aFJvdXRlciIsImhvdGVsIiwiZ2V0RmFjaWxpdGllcyIsIkhvdGVsTGlzdCIsImhvdGVsTGlzdCIsImNhdGVnb3J5SW5mbyIsImZhY2lsaXRpZXMiLCJzZXRmYWNpbGl0aWVzIiwic2hvd0ZpbHRlclN0YXR1cyIsInNldHNob3dGaWx0ZXJTdGF0dXMiLCJ0b3RhbCIsImxlbmd0aCIsImZldGNoIiwiZnJlc3BvbnNlIiwianNvbiIsImZyZXMiLCJyZXN1bHRzIiwiZGF0YSIsInNlYXJjaEhvdGVscyIsInNob3dGaWx0ZXJzIiwiaGlkZUZpbHRlcnMiLCJ0aHVtYiIsImNhdGVnb3J5IiwibWFwIiwiaW5kZXgiXSwic291cmNlUm9vdCI6IiJ9