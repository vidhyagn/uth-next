"use strict";
self["webpackHotUpdate_N_E"]("pages/hotel/[slug]",{

/***/ "./pages/hotel/[slug].js":
/*!*******************************!*\
  !*** ./pages/hotel/[slug].js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _views_Footer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../views/Footer */ "./views/Footer.js");
/* harmony import */ var _views_common_hotelSlider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../views/common/hotelSlider */ "./views/common/hotelSlider.js");
/* harmony import */ var _utilities_CustomFunctions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../utilities/CustomFunctions */ "./utilities/CustomFunctions.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_hotel__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../actions/hotel */ "./actions/hotel.js");
/* harmony import */ var date_fns_locale__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! date-fns/locale */ "./node_modules/date-fns/esm/locale/index.js");
/* harmony import */ var react_nice_dates__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-nice-dates */ "./node_modules/react-nice-dates/build/index.esm.js");
/* harmony import */ var react_nice_dates_build_style_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-nice-dates/build/style.css */ "./node_modules/react-nice-dates/build/style.css");
/* harmony import */ var react_nice_dates_build_style_css__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_nice_dates_build_style_css__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _views_RoomBlock__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../views/RoomBlock */ "./views/RoomBlock.js");
/* harmony import */ var _views_RoomDetail__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../views/RoomDetail */ "./views/RoomDetail.js");
/* harmony import */ var _views_RoomSearchBlock__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../views/RoomSearchBlock */ "./views/RoomSearchBlock.js");
/* harmony import */ var _views_FacilityNewBlock__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../views/FacilityNewBlock */ "./views/FacilityNewBlock.js");
/* harmony import */ var _views_SummaryItem__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../views/SummaryItem */ "./views/SummaryItem.js");
/* harmony import */ var _views_common_AlertModal__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../views/common/AlertModal */ "./views/common/AlertModal.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _views_common_FullWidthModal__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../views/common/FullWidthModal */ "./views/common/FullWidthModal.js");
/* harmony import */ var _views_HotelNavbar__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../views/HotelNavbar */ "./views/HotelNavbar.js");
/* harmony import */ var _views_HotelSpReqList__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../views/HotelSpReqList */ "./views/HotelSpReqList.js");
/* harmony import */ var _views_common_Gallery__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../views/common/Gallery */ "./views/common/Gallery.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../constants */ "./constants/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__);
/* module decorator */ module = __webpack_require__.hmd(module);









var _jsxFileName = "D:\\demo\\uth-next\\pages\\hotel\\[slug].js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,D_demo_uth_next_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,D_demo_uth_next_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,D_demo_uth_next_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,D_demo_uth_next_node_modules_next_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

























var API = 'https://rzp_test_rnEH5I4NHuaGJx:SPmq6qKQELxxLlYTnP7Y5dyj@api.razorpay.com/v1/payments/'; //This gets called every time the page is called

var HotelDetailSlug = function HotelDetailSlug(hotelDetail, galleryImages, hotel_rooms) {
  _s();

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter)();
  var hotel_url = router.query.hotel_url;
  console.log(hotelDetail);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)(HotelDetail, {
    hotelDetail: hotelDetail[0],
    hotel_url: hotel_url,
    galleryImages: galleryImages,
    hotel_rooms: hotel_rooms
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 102,
    columnNumber: 10
  }, _this);
};

_s(HotelDetailSlug, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter];
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
      var hotel_rooms = _this2.state.hotel_rooms;

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
        var checkindate = moment__WEBPACK_IMPORTED_MODULE_23___default()(_this2.state.startDate).format('yyyy-MM-DD');
        var checkoutdate = moment__WEBPACK_IMPORTED_MODULE_23___default()(_this2.state.endDate).format('yyyy-MM-DD');
        var adults = _this2.state.adults || 0;
        var children = _this2.state.children || 0;
        var start = moment__WEBPACK_IMPORTED_MODULE_23___default()(checkindate, "YYYY-MM-DD");
        var end = moment__WEBPACK_IMPORTED_MODULE_23___default()(checkoutdate, "YYYY-MM-DD");
        var noOfDays = moment__WEBPACK_IMPORTED_MODULE_23___default().duration(end.diff(start)).asDays();
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
            date: moment__WEBPACK_IMPORTED_MODULE_23___default()(new Date()).format('DD MMM YYYY'),
            email: that.state.email,
            mobile: that.state.mobile
          }); //let PaymentUrl = `http://159.65.153.59/site/#/payment-success/`+this.props.bookingData.bookingId;

          var paymentId = response.razorpay_payment_id;
          var PaymentUrl = "https://uthdev.neverbeforeholidays.com/payment-success?rp_id=" + paymentId + "&ramt=" + that.state.totalAmount + "&mobile=" + that.state.mobile + "&email=" + that.state.email + "&method=Card payment&date=" + moment__WEBPACK_IMPORTED_MODULE_23___default()(that.state.today).format('DD MMM, YYYY');
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
      var hotel_rooms = _this2.state.hotel_rooms;
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
      // if(this.props.hotelData.bannerImages !== prevProps.hotelData.bannerImages) {
      //     this.setState({
      //         bannerImages : this.props.hotelData.bannerImages
      //     })
      // }

    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      console.log(this.props.hotelDetail); //let hotelDetail = this.props.hotelDetail;

      var hotelDetail = this.state.hotelDetail;
      var bannerImages = this.state.bannerImages || [];
      var galleryImages = this.state.galleryImages || [];
      var startDate = this.state.startDate;
      var endDate = this.state.endDate;
      var hotel_rooms = this.state.hotel_rooms;
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
      var hotelHighlights = this.state.hotelHighlights || [];
      var hotelPolicies = this.state.hotelPolicies || [];
      console.log(selectedSpReqs);
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
        className: "wrapper",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
          className: "inner-page",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)(_views_HotelNavbar__WEBPACK_IMPORTED_MODULE_25__.default, {
            scrollToSection: this.scrollToSection
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 824,
            columnNumber: 21
          }, this), hotelDetail && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("section", {
              className: "details-bannner",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                className: "carousel-container",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                  className: "container",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                    className: "carousel-text",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("h5", {
                      children: hotelDetail.hotel_name
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 832,
                      columnNumber: 41
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("p", {
                      className: "location",
                      children: hotelDetail.address
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 833,
                      columnNumber: 41
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 831,
                    columnNumber: 37
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 830,
                  columnNumber: 33
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 829,
                columnNumber: 29
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)(_views_common_hotelSlider__WEBPACK_IMPORTED_MODULE_11__.default, {
                images: bannerImages
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 838,
                columnNumber: 29
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 827,
              columnNumber: 25
            }, this), this.state.searchStep !== 2 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("section", {
              className: "booking-container sticky",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                className: "container",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                  className: "booking-panel",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                    className: "booking-panel-left",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                      className: "booking-options",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                        className: "date-picker-panel",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)(react_nice_dates__WEBPACK_IMPORTED_MODULE_15__.DateRangePicker, {
                          startDate: startDate,
                          endDate: endDate,
                          onStartDateChange: this.setStartDate,
                          onEndDateChange: this.setEndDate,
                          minimumDate: new Date(),
                          minimumLength: 1,
                          format: "dd/MM/yyyy",
                          locale: date_fns_locale__WEBPACK_IMPORTED_MODULE_30__.enGB,
                          children: function children(_ref) {
                            var startDateInputProps = _ref.startDateInputProps,
                                endDateInputProps = _ref.endDateInputProps,
                                focus = _ref.focus;
                            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                              className: "date-range",
                              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("input", _objectSpread(_objectSpread({
                                className: 'input' + (focus === react_nice_dates__WEBPACK_IMPORTED_MODULE_15__.START_DATE ? ' -focused' : '')
                              }, startDateInputProps), {}, {
                                placeholder: "Start date"
                              }), void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 861,
                                columnNumber: 61
                              }, _this3), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("span", {
                                className: "date-range_arrow"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 866,
                                columnNumber: 61
                              }, _this3), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("input", _objectSpread(_objectSpread({
                                className: 'input' + (focus === react_nice_dates__WEBPACK_IMPORTED_MODULE_15__.END_DATE ? ' -focused' : '')
                              }, endDateInputProps), {}, {
                                placeholder: "End date"
                              }), void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 867,
                                columnNumber: 61
                              }, _this3)]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 860,
                              columnNumber: 57
                            }, _this3);
                          }
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 849,
                          columnNumber: 49
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 846,
                        columnNumber: 45
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                        className: "select-panel",
                        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                          className: "select-box",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("select", {
                            name: "rooms",
                            value: this.state.rooms,
                            onChange: this.handleChange,
                            className: "".concat(invalidFields.includes('rooms') ? 'error-field' : ''),
                            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("option", {
                              value: "",
                              children: "Rooms"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 886,
                              columnNumber: 57
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("option", {
                              value: "1",
                              children: "1"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 887,
                              columnNumber: 57
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("option", {
                              value: "2",
                              children: "2"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 888,
                              columnNumber: 57
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("option", {
                              value: "3",
                              children: "3"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 889,
                              columnNumber: 57
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("option", {
                              value: "4",
                              children: "4"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 890,
                              columnNumber: 57
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("option", {
                              value: "5",
                              children: "5"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 891,
                              columnNumber: 57
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("option", {
                              value: "6",
                              children: "6"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 892,
                              columnNumber: 57
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("option", {
                              value: "7",
                              children: "7"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 893,
                              columnNumber: 57
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("option", {
                              value: "8",
                              children: "8"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 894,
                              columnNumber: 57
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("option", {
                              value: "9",
                              children: "9+"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 895,
                              columnNumber: 57
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 883,
                            columnNumber: 53
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 882,
                          columnNumber: 49
                        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                          className: "select-box",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("select", {
                            name: "adults",
                            value: this.state.adults,
                            onChange: this.handleChange,
                            className: "".concat(invalidFields.includes('adults') ? 'error-field' : ''),
                            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("option", {
                              value: "",
                              children: "Adults"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 902,
                              columnNumber: 57
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("option", {
                              value: "1",
                              children: "1"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 903,
                              columnNumber: 57
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("option", {
                              value: "2",
                              children: "2"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 904,
                              columnNumber: 57
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("option", {
                              value: "3",
                              children: "3"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 905,
                              columnNumber: 57
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("option", {
                              value: "4",
                              children: "4"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 906,
                              columnNumber: 57
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("option", {
                              value: "5",
                              children: "5"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 907,
                              columnNumber: 57
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("option", {
                              value: "6",
                              children: "6"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 908,
                              columnNumber: 57
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("option", {
                              value: "7",
                              children: "7"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 909,
                              columnNumber: 57
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("option", {
                              value: "8",
                              children: "8"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 910,
                              columnNumber: 57
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("option", {
                              value: "9",
                              children: "9+"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 911,
                              columnNumber: 57
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 899,
                            columnNumber: 53
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 898,
                          columnNumber: 49
                        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                          className: "select-box",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("select", {
                            name: "children",
                            value: this.state.children,
                            onChange: this.handleChange,
                            className: "".concat(invalidFields.includes('children') ? 'error-field' : ''),
                            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("option", {
                              value: "",
                              children: "Children"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 918,
                              columnNumber: 57
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("option", {
                              value: "0",
                              children: "0"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 919,
                              columnNumber: 57
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("option", {
                              value: "1",
                              children: "1"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 920,
                              columnNumber: 57
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("option", {
                              value: "2",
                              children: "2"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 921,
                              columnNumber: 57
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("option", {
                              value: "3",
                              children: "3"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 922,
                              columnNumber: 57
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("option", {
                              value: "4",
                              children: "4"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 923,
                              columnNumber: 57
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("option", {
                              value: "5",
                              children: "5"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 924,
                              columnNumber: 57
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("option", {
                              value: "6",
                              children: "6"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 925,
                              columnNumber: 57
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("option", {
                              value: "7",
                              children: "7"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 926,
                              columnNumber: 57
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("option", {
                              value: "8",
                              children: "8"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 927,
                              columnNumber: 57
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("option", {
                              value: "9",
                              children: "9+"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 928,
                              columnNumber: 57
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 915,
                            columnNumber: 53
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 914,
                          columnNumber: 49
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 881,
                        columnNumber: 45
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 845,
                      columnNumber: 41
                    }, this), this.state.MAX_CAPACITY_MSG !== '' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                      className: "error-fld",
                      children: this.state.MAX_CAPACITY_MSG
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 936,
                      columnNumber: 41
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 844,
                    columnNumber: 37
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                    className: "booking-panel-right",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                      className: "booking-button-block",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("button", {
                        className: "general-btn",
                        onClick: function onClick() {
                          return _this3.searchRooms();
                        },
                        children: "Book Now"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 944,
                        columnNumber: 45
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 943,
                      columnNumber: 41
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 941,
                    columnNumber: 37
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 843,
                  columnNumber: 33
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 842,
                columnNumber: 29
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 841,
              columnNumber: 25
            }, this), !this.state.initSearch && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
              className: "room-section facilities",
              id: "hotel-overview",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                className: "container",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                  className: "section-header",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("h5", {
                    children: "Overview"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 956,
                    columnNumber: 37
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 955,
                  columnNumber: 33
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                  className: "section-content",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("ul", {
                    className: "general-info",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("li", {
                      className: "address-sm-ico",
                      children: hotelDetail.address
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 960,
                      columnNumber: 41
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("li", {
                      className: "phone-sm-ico",
                      children: [hotelDetail.phoneno, " , ", hotelDetail.mobileno]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 961,
                      columnNumber: 41
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("li", {
                      className: "mail-sm-ico",
                      children: hotelDetail.email
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 962,
                      columnNumber: 41
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 959,
                    columnNumber: 37
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                    className: "extra-content ".concat(this.state.expandContent ? ' active' : ''),
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                      className: "overview-description",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("p", {
                        dangerouslySetInnerHTML: {
                          __html: hotelDetail.hotel_desc
                        }
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 968,
                        columnNumber: 45
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 967,
                      columnNumber: 41
                    }, this), hotelHighlights.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.Fragment, {
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                        className: "sub-header",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("h5", {
                          children: "Highlights"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 974,
                          columnNumber: 49
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 973,
                        columnNumber: 45
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("ul", {
                        className: "highlight-tab",
                        children: hotelHighlights.map(function (hl) {
                          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("li", {
                            children: hl.highlights
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 978,
                            columnNumber: 53
                          }, _this3);
                        })
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 976,
                        columnNumber: 45
                      }, this)]
                    }, void 0, true), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                      className: "policy-box",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                        "class": "sub-header",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("h5", {
                          children: "Hotel Policies"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 987,
                          columnNumber: 49
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 986,
                        columnNumber: 45
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("p", {
                        children: ["Check In Time: ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("span", {
                          className: "font-bold",
                          children: hotelDetail ? hotelDetail.checkin : ''
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 989,
                          columnNumber: 63
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 989,
                        columnNumber: 45
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("p", {
                        children: ["Check Out Time: ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("span", {
                          className: "font-bold",
                          children: hotelDetail ? hotelDetail.checkout : ''
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 990,
                          columnNumber: 64
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 990,
                        columnNumber: 45
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 985,
                      columnNumber: 41
                    }, this), hotelPolicies.map(function (hp) {
                      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                        className: "policy-box indent",
                        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                          className: "sub-header",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("h5", {
                            children: hp.category
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 996,
                            columnNumber: 53
                          }, _this3)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 995,
                          columnNumber: 49
                        }, _this3), hp.policy.map(function (pol) {
                          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("p", {
                            children: pol.policy
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 999,
                            columnNumber: 53
                          }, _this3);
                        })]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 994,
                        columnNumber: 45
                      }, _this3);
                    })]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 965,
                    columnNumber: 37
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("nav", {
                    className: "content-hide",
                    onClick: function onClick() {
                      return _this3.toggleContent();
                    },
                    children: ["Show ", this.state.expandContent ? 'less' : 'more']
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 1006,
                    columnNumber: 37
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 958,
                  columnNumber: 33
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 954,
                columnNumber: 29
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 953,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("section", {
              className: "room-section",
              id: "hotel-rooms",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                className: "container",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                  className: "section-header",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("h5", {
                    children: this.state.searchStep === 2 ? 'Booking Details' : 'Rooms'
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 1016,
                    columnNumber: 37
                  }, this), this.state.initSearch && this.state.searchStep === 1 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("button", {
                    className: "text-link back",
                    onClick: function onClick() {
                      return _this3.backToDetail();
                    },
                    children: "Back"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 1021,
                    columnNumber: 37
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 1015,
                  columnNumber: 33
                }, this), this.state.initSearch && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                  className: "available-rooms",
                  children: [this.state.searchStep === 1 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.Fragment, {
                    children: [hotel_rooms.length === 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                      className: "no-result",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                        "class": "coming-soon-wrapper",
                        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("h1", {
                          children: "No Hotels Found"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 1036,
                          columnNumber: 49
                        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("p", {
                          children: "Search Again for right place."
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 1037,
                          columnNumber: 49
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 1035,
                        columnNumber: 45
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 1034,
                      columnNumber: 41
                    }, this), hotel_rooms.map(function (room) {
                      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)(_views_RoomSearchBlock__WEBPACK_IMPORTED_MODULE_19__.default, {
                        item: room,
                        selectRoom: _this3.selectRoom,
                        selectedRooms: _this3.state.selectedRooms,
                        selectedRoomIds: _this3.state.selectedRoomIds,
                        changeQty: _this3.changeQty,
                        showFullDetail: _this3.showFullDetail
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 1042,
                        columnNumber: 45
                      }, _this3);
                    }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                      className: "room-book-submit",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("button", {
                        className: "general-btn",
                        onClick: function onClick() {
                          return _this3.continueToSummary();
                        },
                        children: "Continue"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 1051,
                        columnNumber: 45
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 1049,
                      columnNumber: 41
                    }, this)]
                  }, void 0, true), this.state.searchStep === 2 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.Fragment, {
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                      className: "summary-table",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("table", {
                        className: "table",
                        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("thead", {
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("tr", {
                            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("th", {
                              children: "Rooms"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1064,
                              columnNumber: 53
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("th", {
                              children: "Qty"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1065,
                              columnNumber: 53
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("th", {
                              children: "Price"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1066,
                              columnNumber: 53
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("th", {
                              children: "Total Price"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1067,
                              columnNumber: 53
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("th", {}, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1068,
                              columnNumber: 53
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 1063,
                            columnNumber: 49
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 1062,
                          columnNumber: 49
                        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("tbody", {
                          children: [selectedRooms.map(function (room) {
                            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)(_views_SummaryItem__WEBPACK_IMPORTED_MODULE_21__.default, {
                              item: room,
                              selectRoom: _this3.selectRoom,
                              selectedRooms: _this3.state.selectedRooms,
                              selectedRoomIds: _this3.state.selectedRoomIds,
                              changeQty: _this3.changeQty
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1073,
                              columnNumber: 53
                            }, _this3);
                          }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("tr", {
                            className: "special-service",
                            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("td", {
                              colspan: "5",
                              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("nav", {
                                onClick: function onClick() {
                                  return _this3.showSpecialRequests();
                                },
                                className: "font-bold",
                                children: "Add Special Requests +"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 1082,
                                columnNumber: 57
                              }, this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1081,
                              columnNumber: 53
                            }, this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 1080,
                            columnNumber: 49
                          }, this), selectedSpReqs.length > 0 && selectedSpReqs.filter(function (sp) {
                            return sp.category === 'payable';
                          }).map(function (sp) {
                            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("tr", {
                              className: "special-service",
                              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("td", {
                                colSpan: "3",
                                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("span", {
                                  children: sp.title
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 1090,
                                  columnNumber: 61
                                }, _this3)
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 1089,
                                columnNumber: 57
                              }, _this3), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("td", {
                                className: "font-bold",
                                children: ["\u20B9 ", sp.rate]
                              }, void 0, true, {
                                fileName: _jsxFileName,
                                lineNumber: 1092,
                                columnNumber: 57
                              }, _this3), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("td", {
                                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("button", {
                                  className: "delete-item",
                                  onClick: function onClick(e) {
                                    return _this3.removeSp(e, sp.sp_id);
                                  }
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 1094,
                                  columnNumber: 61
                                }, _this3)
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 1093,
                                columnNumber: 57
                              }, _this3)]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 1088,
                              columnNumber: 53
                            }, _this3);
                          }), selectedSpReqs.length > 0 && selectedSpReqs.filter(function (sp) {
                            return sp.category === 'non payable';
                          }).map(function (sp) {
                            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("tr", {
                              className: "special-service",
                              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("td", {
                                colSpan: "3",
                                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("span", {
                                  children: sp.title
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 1102,
                                  columnNumber: 61
                                }, _this3)
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 1101,
                                columnNumber: 57
                              }, _this3), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("td", {
                                className: "font-bold",
                                children: "\u20B9 0"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 1104,
                                columnNumber: 57
                              }, _this3), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("td", {
                                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("button", {
                                  className: "delete-item",
                                  onClick: function onClick(e) {
                                    return _this3.removeSp(e, sp.sp_id);
                                  }
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 1106,
                                  columnNumber: 61
                                }, _this3)
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 1105,
                                columnNumber: 57
                              }, _this3)]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 1100,
                              columnNumber: 53
                            }, _this3);
                          }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("tr", {
                            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("td", {}, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1112,
                              columnNumber: 53
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("td", {}, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1115,
                              columnNumber: 53
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("td", {
                              className: "font-bold",
                              children: "TOTAL"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1116,
                              columnNumber: 53
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("td", {
                              className: "font-bold",
                              children: ["\u20B9 ", total_cost.toFixed(2)]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 1117,
                              columnNumber: 53
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("td", {}, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1118,
                              columnNumber: 53
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 1111,
                            columnNumber: 49
                          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("tr", {
                            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("td", {}, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1121,
                              columnNumber: 53
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("td", {}, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1124,
                              columnNumber: 53
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("td", {
                              className: "font-bold",
                              children: "GST 10.00%"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1125,
                              columnNumber: 53
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("td", {
                              className: "font-bold",
                              children: ["\u20B9 ", total_gst.toFixed(2)]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 1126,
                              columnNumber: 53
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("td", {}, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1127,
                              columnNumber: 53
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 1120,
                            columnNumber: 49
                          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("tr", {
                            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("td", {}, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1131,
                              columnNumber: 53
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("td", {}, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1134,
                              columnNumber: 53
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("td", {
                              className: "font-bold",
                              children: "GRAND TOTAL"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1135,
                              columnNumber: 53
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("td", {
                              className: "font-bold",
                              children: ["\u20B9 ", grand_total.toFixed(2)]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 1136,
                              columnNumber: 53
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("td", {}, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1137,
                              columnNumber: 53
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 1130,
                            columnNumber: 49
                          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("tr", {
                            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("td", {
                              colSpan: "5",
                              children: ["Check-in & Check-out: ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("span", {
                                className: "font-bold",
                                children: [moment__WEBPACK_IMPORTED_MODULE_23___default()(this.state.checkindate).format('DD MMM YYYY'), " - ", moment__WEBPACK_IMPORTED_MODULE_23___default()(this.state.checkoutdate).format('DD MMM YYYY')]
                              }, void 0, true, {
                                fileName: _jsxFileName,
                                lineNumber: 1140,
                                columnNumber: 91
                              }, this)]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 1140,
                              columnNumber: 53
                            }, this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 1139,
                            columnNumber: 49
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 1071,
                          columnNumber: 49
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 1061,
                        columnNumber: 45
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 1060,
                      columnNumber: 41
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                      "class": "section-header",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("h5", {
                        children: "Personal Details"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 1149,
                        columnNumber: 45
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 1148,
                      columnNumber: 41
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("form", {
                      className: "form-container",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                        className: "row",
                        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                          className: "col-md-6",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                            className: "input-box",
                            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("label", {
                              children: "First Name"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1156,
                              columnNumber: 57
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("input", {
                              type: "text",
                              name: "firstname",
                              onChange: this.handleChange,
                              value: this.state.firstname,
                              className: "input-field ".concat(invalidFields.includes('firstname') ? 'error-field' : '')
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1157,
                              columnNumber: 57
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 1155,
                            columnNumber: 53
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 1154,
                          columnNumber: 49
                        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                          className: "col-md-6",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                            className: "input-box",
                            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("label", {
                              children: "Last Name"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1164,
                              columnNumber: 57
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("input", {
                              type: "text",
                              name: "lastname",
                              onChange: this.handleChange,
                              value: this.state.lastname,
                              className: "input-field ".concat(invalidFields.includes('lastname') ? 'error-field' : '')
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1165,
                              columnNumber: 57
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 1163,
                            columnNumber: 53
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 1162,
                          columnNumber: 49
                        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                          className: "col-md-6",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                            className: "input-box",
                            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("label", {
                              children: "Address 1"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1172,
                              columnNumber: 57
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("input", {
                              type: "text",
                              name: "address1",
                              onChange: this.handleChange,
                              value: this.state.address1,
                              className: "input-field ".concat(invalidFields.includes('address1') ? 'error-field' : '')
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1173,
                              columnNumber: 57
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 1171,
                            columnNumber: 53
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 1170,
                          columnNumber: 49
                        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                          className: "col-md-6",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                            className: "input-box",
                            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("label", {
                              children: "Address 2"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1180,
                              columnNumber: 57
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("input", {
                              type: "text",
                              name: "address2",
                              onChange: this.handleChange,
                              value: this.state.address2,
                              className: "input-field ".concat(invalidFields.includes('address2') ? 'error-field' : '')
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1181,
                              columnNumber: 57
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 1179,
                            columnNumber: 53
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 1178,
                          columnNumber: 49
                        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                          className: "col-md-3",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                            className: "input-box",
                            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("label", {
                              children: "City"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1188,
                              columnNumber: 57
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("input", {
                              type: "text",
                              name: "city",
                              onChange: this.handleChange,
                              value: this.state.city,
                              className: "input-field ".concat(invalidFields.includes('city') ? 'error-field' : '')
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1189,
                              columnNumber: 57
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 1187,
                            columnNumber: 53
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 1186,
                          columnNumber: 49
                        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                          className: "col-md-3",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                            className: "input-box",
                            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("label", {
                              children: "State"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1196,
                              columnNumber: 57
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("input", {
                              type: "text",
                              name: "state",
                              onChange: this.handleChange,
                              value: this.state.state,
                              className: "input-field ".concat(invalidFields.includes('state') ? 'error-field' : '')
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1197,
                              columnNumber: 57
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 1195,
                            columnNumber: 53
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 1194,
                          columnNumber: 49
                        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                          className: "col-md-3",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                            className: "input-box",
                            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("label", {
                              children: "Country"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1204,
                              columnNumber: 57
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("input", {
                              type: "text",
                              name: "country",
                              onChange: this.handleChange,
                              value: this.state.country,
                              className: "input-field ".concat(invalidFields.includes('country') ? 'error-field' : '')
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1205,
                              columnNumber: 57
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 1203,
                            columnNumber: 53
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 1202,
                          columnNumber: 49
                        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                          className: "col-md-3",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                            className: "input-box",
                            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("label", {
                              children: "Pincode"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1212,
                              columnNumber: 57
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("input", {
                              type: "text",
                              name: "pincode",
                              onChange: this.handleChange,
                              value: this.state.pincode,
                              className: "input-field ".concat(invalidFields.includes('pincode') ? 'error-field' : '')
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1213,
                              columnNumber: 57
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 1211,
                            columnNumber: 53
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 1210,
                          columnNumber: 49
                        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                          className: "col-md-4",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                            className: "input-box",
                            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("label", {
                              children: "Mobile"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1220,
                              columnNumber: 57
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("input", {
                              type: "number",
                              className: "input-field ".concat(invalidFields.includes('mobile') ? 'error-field' : ''),
                              name: "mobile",
                              onChange: this.handleChange,
                              value: this.state.mobile
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1221,
                              columnNumber: 57
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 1219,
                            columnNumber: 53
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 1218,
                          columnNumber: 49
                        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                          className: "col-md-4",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                            className: "input-box",
                            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("label", {
                              children: "Additional Phone"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1229,
                              columnNumber: 57
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("input", {
                              type: "number",
                              className: "input-field ".concat(invalidFields.includes('additionalphonenumber') ? 'error-field' : ''),
                              name: "additionalphonenumber",
                              onChange: this.handleChange,
                              value: this.state.additionalphonenumber
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
                        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                          className: "col-md-4",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                            className: "input-box",
                            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("label", {
                              children: "Email"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1238,
                              columnNumber: 57
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("input", {
                              type: "email",
                              className: "input-field ".concat(invalidFields.includes('email') ? 'error-field' : ''),
                              name: "email",
                              onChange: this.handleChange,
                              value: this.state.email
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1239,
                              columnNumber: 57
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 1237,
                            columnNumber: 53
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 1236,
                          columnNumber: 49
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 1153,
                        columnNumber: 45
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 1152,
                      columnNumber: 41
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                      className: "payment-wrap",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("button", {
                        className: "general-btn grey",
                        onClick: function onClick() {
                          return _this3.backToCart();
                        },
                        children: "Back"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 1249,
                        columnNumber: 45
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("button", {
                        className: "general-btn",
                        onClick: function onClick(e) {
                          return _this3.saveBooking(e, grand_total, total_cost, 0.00, '', total_gst);
                        },
                        children: "Continue To Payment"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 1250,
                        columnNumber: 45
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 1248,
                      columnNumber: 41
                    }, this)]
                  }, void 0, true)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 1029,
                  columnNumber: 33
                }, this), !this.state.initSearch && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                  className: "room-container",
                  children: [hotel_rooms.length === 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                    className: "no-result",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("p", {
                      children: "Rooms will be added soon"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 1265,
                      columnNumber: 41
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 1264,
                    columnNumber: 37
                  }, this), hotel_rooms.map(function (room) {
                    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)(_views_RoomBlock__WEBPACK_IMPORTED_MODULE_17__.default, {
                      item: room,
                      showFullDetail: _this3.showFullDetail
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 1270,
                      columnNumber: 41
                    }, _this3);
                  })]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 1262,
                  columnNumber: 33
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 1013,
                columnNumber: 29
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 1012,
              columnNumber: 25
            }, this), !this.state.initSearch && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("section", {
                "class": "content-area text-content",
                id: "hotel-facilities",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                  className: "container",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                    className: "section-header",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("h5", {
                      children: "Facilities & Attractions"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 1284,
                      columnNumber: 41
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 1283,
                    columnNumber: 37
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                    className: "feature-wrapper three-per-col image-top",
                    children: [!hotelfacilities || hotelfacilities.length === 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("h5", {
                      children: "Facilities will be added soon."
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 1288,
                      columnNumber: 41
                    }, this), hotelfacilities && hotelfacilities.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.Fragment, {
                      children: hotelfacilities.map(function (fac, index) {
                        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)(_views_FacilityNewBlock__WEBPACK_IMPORTED_MODULE_20__.default, {
                          item: fac,
                          imgAlign: index % 2 === 1 ? 'left' : 'right'
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 1294,
                          columnNumber: 49
                        }, _this3);
                      })
                    }, void 0, false)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 1286,
                    columnNumber: 37
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 1282,
                  columnNumber: 33
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1281,
                columnNumber: 29
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("section", {
                className: "room-section",
                id: "hotel-gallery",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                  className: "container",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                    className: "section-header",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("h5", {
                      children: "Gallery"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 1304,
                      columnNumber: 41
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 1303,
                    columnNumber: 37
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)(_views_common_Gallery__WEBPACK_IMPORTED_MODULE_27__.default, {
                    galleryImages: galleryImages
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 1306,
                    columnNumber: 37
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 1302,
                  columnNumber: 33
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1301,
                columnNumber: 29
              }, this)]
            }, void 0, true)]
          }, void 0, true), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)(_views_Footer__WEBPACK_IMPORTED_MODULE_10__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1319,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 822,
          columnNumber: 17
        }, this), this.state.showError && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)(_views_common_AlertModal__WEBPACK_IMPORTED_MODULE_22__.default, {
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
          lineNumber: 1326,
          columnNumber: 17
        }, this), this.state.showProfileInfoError && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)(_views_common_AlertModal__WEBPACK_IMPORTED_MODULE_22__.default, {
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
          lineNumber: 1338,
          columnNumber: 17
        }, this), this.state.itemRemovalMessage && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)(_views_common_AlertModal__WEBPACK_IMPORTED_MODULE_22__.default, {
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
          lineNumber: 1350,
          columnNumber: 17
        }, this), this.state.cannotContinue && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)(_views_common_AlertModal__WEBPACK_IMPORTED_MODULE_22__.default, {
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
          lineNumber: 1366,
          columnNumber: 17
        }, this), this.state.showDetailStatus && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)(_views_common_FullWidthModal__WEBPACK_IMPORTED_MODULE_24__.default, {
          modalHeader: true,
          modalFooter: true,
          modalTitle: hotelDetail.hotel_name,
          modalBody: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)(_views_RoomDetail__WEBPACK_IMPORTED_MODULE_18__.default, {
            roomDetail: this.state.roomDetail,
            hideFullDetail: this.hideFullDetail
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1383,
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
          lineNumber: 1379,
          columnNumber: 17
        }, this), this.state.showSpReqStat && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)(_views_common_AlertModal__WEBPACK_IMPORTED_MODULE_22__.default, {
          modalHeader: false,
          modalFooter: true,
          modalTitle: "Warning!",
          modalBody: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)(_views_HotelSpReqList__WEBPACK_IMPORTED_MODULE_26__.default, {
            spRequests: spRequests,
            selectedSpReqIds: this.state.selectedSpReqIds,
            selectedSpReqs: this.state.selectedSpReqs,
            handleSpSelection: this.handleSpSelection
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1399,
            columnNumber: 34
          }, this),
          modalStatus: this.state.showSpReqStat,
          OKButton: true,
          CANCELButton: false,
          OKAction: this.hideSpecialRequests
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1395,
          columnNumber: 17
        }, this), this.state.showPendingMessage && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)(_views_common_AlertModal__WEBPACK_IMPORTED_MODULE_22__.default, {
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
          lineNumber: 1408,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 821,
        columnNumber: 13
      }, this);
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
/* harmony default export */ __webpack_exports__["default"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_13__.connect)(mapStateToProps, {
  searchRooms: _actions_hotel__WEBPACK_IMPORTED_MODULE_14__.searchRooms,
  saveBooking: _actions_hotel__WEBPACK_IMPORTED_MODULE_14__.saveBooking,
  confirmBooking: _actions_hotel__WEBPACK_IMPORTED_MODULE_14__.confirmBooking,
  getBannerImages: _actions_hotel__WEBPACK_IMPORTED_MODULE_14__.getBannerImages,
  //getHotelHighlights : HotelActions.getHotelHighlights,
  getHotelPolicies: _actions_hotel__WEBPACK_IMPORTED_MODULE_14__.getHotelPolicies,
  getSpRequests: _actions_hotel__WEBPACK_IMPORTED_MODULE_14__.getSpRequests
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaG90ZWwvW3NsdWddLjhlZWJkODVhYTI5NzJiMGY2MmYwLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsSUFBTTBCLEdBQUcsR0FBRyx3RkFBWixFQUNBOztBQXVFQSxJQUFNQyxlQUFlLEdBQUUsU0FBakJBLGVBQWlCLENBQUNDLFdBQUQsRUFBY0MsYUFBZCxFQUE2QkMsV0FBN0IsRUFBOEM7QUFBQTs7QUFFakUsTUFBTUMsTUFBTSxHQUFHM0Isc0RBQVMsRUFBeEI7QUFDQSxNQUFRNEIsU0FBUixHQUFzQkQsTUFBTSxDQUFDRSxLQUE3QixDQUFRRCxTQUFSO0FBQ0FFLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZUCxXQUFaO0FBRUEsc0JBQ0ssK0RBQUMsV0FBRDtBQUFhLGVBQVcsRUFBRUEsV0FBVyxDQUFDLENBQUQsQ0FBckM7QUFBMEMsYUFBUyxFQUFFSSxTQUFyRDtBQUNhLGlCQUFhLEVBQUVILGFBRDVCO0FBQzJDLGVBQVcsRUFBRUM7QUFEeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURMO0FBSUgsQ0FWRDs7R0FBTUg7VUFFYXZCOzs7S0FGYnVCOztJQVlBUzs7Ozs7QUFDRix1QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLCtCQUFNQSxLQUFOOztBQURlLHlTQW9FRCxVQUFDQyxPQUFELEVBQWE7QUFDM0IsVUFBR0EsT0FBTyxLQUFLLEVBQWYsRUFBbUI7QUFDZixZQUFJQyxPQUFPLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QkgsT0FBeEIsQ0FBZDs7QUFD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O0FBS0lpUCxFQUFBQSxlQUFlLEVBQUdqUCw0REFMdEI7QUFNSTtBQUNBa1AsRUFBQUEsZ0JBQWdCLEVBQUdsUCw2REFQdkI7QUFRSW1QLEVBQUFBLGFBQWEsRUFBR25QLDBEQUEwQm1QO0FBUjlDLENBRmtCLENBQVAsQ0FZYmpPLGVBWmEsQ0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9ob3RlbC9bc2x1Z10uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCxTdXNwZW5zZSwgbGF6eSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uLy4uL3ZpZXdzL0Zvb3RlclwiO1xyXG5pbXBvcnQgQ29udGVudFNsaWRlciBmcm9tIFwiLi4vLi4vdmlld3MvY29tbW9uL2hvdGVsU2xpZGVyXCI7XHJcbmltcG9ydCB7Z2V0VXJsU2VnbWVudH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9DdXN0b21GdW5jdGlvbnNcIjtcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0ICogYXMgSG90ZWxBY3Rpb25zIGZyb20gXCIuLi8uLi9hY3Rpb25zL2hvdGVsXCI7XHJcbmltcG9ydCB7IGVuR0IgfSBmcm9tICdkYXRlLWZucy9sb2NhbGUnXHJcbmltcG9ydCB7IERhdGVSYW5nZVBpY2tlciwgU1RBUlRfREFURSwgRU5EX0RBVEUgfSBmcm9tICdyZWFjdC1uaWNlLWRhdGVzJ1xyXG5pbXBvcnQgJ3JlYWN0LW5pY2UtZGF0ZXMvYnVpbGQvc3R5bGUuY3NzJ1xyXG5pbXBvcnQgUm9vbUJsb2NrIGZyb20gXCIuLi8uLi92aWV3cy9Sb29tQmxvY2tcIjtcclxuaW1wb3J0IFJvb21EZXRhaWwgZnJvbSBcIi4uLy4uL3ZpZXdzL1Jvb21EZXRhaWxcIjtcclxuaW1wb3J0IFJvb21TZWFyY2hCbG9jayBmcm9tIFwiLi4vLi4vdmlld3MvUm9vbVNlYXJjaEJsb2NrXCI7XHJcbmltcG9ydCBGYWNpbGl0eU5ld0Jsb2NrIGZyb20gXCIuLi8uLi92aWV3cy9GYWNpbGl0eU5ld0Jsb2NrXCI7XHJcbmltcG9ydCBTdW1tYXJ5SXRlbSBmcm9tIFwiLi4vLi4vdmlld3MvU3VtbWFyeUl0ZW1cIjtcclxuaW1wb3J0IEFsZXJ0TW9kYWwgZnJvbSBcIi4uLy4uL3ZpZXdzL2NvbW1vbi9BbGVydE1vZGFsXCI7XHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuaW1wb3J0IEZ1bGxXaWR0aE1vZGFsIGZyb20gXCIuLi8uLi92aWV3cy9jb21tb24vRnVsbFdpZHRoTW9kYWxcIjtcclxuaW1wb3J0IEhvdGVsTmF2YmFyIGZyb20gXCIuLi8uLi92aWV3cy9Ib3RlbE5hdmJhclwiO1xyXG5pbXBvcnQgSG90ZWxTcFJlcUxpc3QgZnJvbSBcIi4uLy4uL3ZpZXdzL0hvdGVsU3BSZXFMaXN0XCI7XHJcbmltcG9ydCBHYWxsZXJ5IGZyb20gXCIuLi8uLi92aWV3cy9jb21tb24vR2FsbGVyeVwiO1xyXG5pbXBvcnQge0lNQUdFX1BBVEgsIEFQSV9QQVRIfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XHJcbmNvbnN0IEFQSSA9ICdodHRwczovL3J6cF90ZXN0X3JuRUg1STROSHVhR0p4OlNQbXE2cUtRRUx4eExsWVRuUDdZNWR5akBhcGkucmF6b3JwYXkuY29tL3YxL3BheW1lbnRzLyc7XHJcbi8vVGhpcyBnZXRzIGNhbGxlZCBldmVyeSB0aW1lIHRoZSBwYWdlIGlzIGNhbGxlZFxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuICAgIGNvbnN0IHtwYXJhbXN9ID0gY29udGV4dDtcclxuICAgIGNvbnN0IHtob3RlbF91cmx9ID0gcGFyYW1zO1xyXG4gICAgLy9ob3RlbCBkZXRhaWxcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7QVBJX1BBVEh9aG90ZWwvaG90ZWxkZXRhaWxzdjI/dXJsPSR7aG90ZWxfdXJsfWApO1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgbGV0IGhvdGVsRGV0YWlsID0gcmVzLnJlc3VsdHMgPyByZXMucmVzdWx0cy5kYXRhOiBbXTtcclxuXHJcbiAgICAvL1Jvb20gVHlwZXNcclxuICAgIGNvbnN0IHJlc3BvbnNlMiA9IGF3YWl0IGZldGNoKGAke0FQSV9QQVRIfWhvdGVsL3Jvb210eXBlYCk7XHJcbiAgICBjb25zdCByZXMyID0gYXdhaXQgcmVzcG9uc2UyLmpzb24oKTtcclxuICAgIGxldCByb29tVHlwZXMgPSByZXMyLnJlc3VsdHMgPyByZXMyLnJlc3VsdHMuZGF0YTogW107XHJcbiAgICBsZXQgYmFubmVySW1hZ2VzID0gW107XHJcbiAgICBsZXQgaG90ZWxfcm9vbXMgPSBbXTtcclxuICAgIGxldCBnYWxsZXJ5SW1hZ2VzID1bXTtcclxuICAgIGxldCBob3RlbF9pZCA9ICcnXHJcbiAgICBpZihob3RlbERldGFpbCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGhvdGVsRGV0YWlsKVxyXG4gICAgICAgIGhvdGVsX2lkID0gaG90ZWxEZXRhaWwuaG90ZWxfaWQ7XHJcbiAgICAgICAgY29uc29sZS5sb2coaG90ZWxfaWQpXHJcbiAgICAgICAgbGV0IHBhcmFtcyA9IHtob3RlbF9pZCA6IGhvdGVsX2lkfTtcclxuICAgICAgICBjb25zdCByZXNwb25zZTMgPSBhd2FpdCBmZXRjaChgJHtBUElfUEFUSH1ob3RlbC9ob3RlbGJhbm5lcmltYWdlc2ApO1xyXG4gICAgICAgIGNvbnN0IHJlczMgPSBhd2FpdCByZXNwb25zZTMuanNvbigpO1xyXG4gICAgICAgIGJhbm5lckltYWdlcyA9IHJlczMucmVzdWx0cyA/IHJlczMucmVzdWx0cy5kYXRhOiBbXTtcclxuXHJcbiAgICAgICAgaG90ZWxfcm9vbXMgPSBob3RlbERldGFpbC5ob3RlbF9yb29tcyB8fCBbXTtcclxuICAgICAgICBob3RlbF9yb29tcyA9IGhvdGVsX3Jvb21zLm1hcChpdGVtID0+IHtcclxuICAgICAgICAgICAgaXRlbS5xdHkgPSAwXHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGdhbGxlcnlJbWFnZXMgPSBob3RlbERldGFpbC5ob3RlbF9pbWFnZXMgfHwgW107XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHByb3BzIDoge1xyXG4gICAgICAgICAgICAgICAgaG90ZWxEZXRhaWwgOiBbaG90ZWxEZXRhaWxdLFxyXG4gICAgICAgICAgICAgICAgaG90ZWxfcm9vbXMgOiBob3RlbF9yb29tcyxcclxuICAgICAgICAgICAgICAgIGdhbGxlcnlJbWFnZXMgOiBnYWxsZXJ5SW1hZ2VzLFxyXG4gICAgICAgICAgICAgICAvLyBNQVhfQ0FQQUNJVFlfR0VORVJBTCA6IGhvdGVsRGV0YWlsLm1heF9vY2N1cGFuY3ksXHJcbiAgICAgICAgICAgICAgICAvL2hvdGVsSGlnaGxpZ2h0cyA6IGhvdGVsRGV0YWlsLmhvdGVsaGlnaGxpZ2h0cyxcclxuICAgICAgICAgICAgICAgIC8vaG90ZWxQb2xpY2llcyA6IGhvdGVsRGV0YWlsLmhvdGVscG9saWNpZXMsXHJcbiAgICAgICAgICAgICAgICAvL3NwUmVxdWVzdHMgOiBob3RlbERldGFpbC5zcGVjaWFscmVxdWVzdFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vdGhpcy5wcm9wcy5nZXRCYW5uZXJJbWFnZXMocGFyYW1zKTtcclxuICAgIC8vIGxldCBob3RlbF9yb29tcyA9IHRoaXMucHJvcHMuaG90ZWxEZXRhaWwuaG90ZWxfcm9vbXMgfHwgW107XHJcbiAgICAvLyBob3RlbF9yb29tcyA9IGhvdGVsX3Jvb21zLm1hcChpdGVtID0+IHtcclxuICAgIC8vICAgICBpdGVtLnF0eSA9IDBcclxuICAgIC8vICAgICByZXR1cm4gaXRlbTtcclxuICAgIC8vIH0pO1xyXG4gICAgLy8gbGV0IGdhbGxlcnlJbWFnZXMgPSB0aGlzLnByb3BzLmhvdGVsRGV0YWlsLmhvdGVsX2ltYWdlcyB8fCBbXTtcclxuICAgIC8vIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgLy8gICAgIGhvdGVsX2lkIDogaG90ZWxfaWQsXHJcbiAgICAvLyAgICAgaG90ZWxEZXRhaWwgOiBob3RlbERldGFpbCxcclxuICAgIC8vICAgICBob3RlbF9yb29tcyA6IGhvdGVsX3Jvb21zLFxyXG4gICAgLy8gICAgIGdhbGxlcnlJbWFnZXMgOiBnYWxsZXJ5SW1hZ2VzLFxyXG4gICAgLy8gICAgIE1BWF9DQVBBQ0lUWV9HRU5FUkFMIDogaG90ZWxEZXRhaWwubWF4X29jY3VwYW5jeSxcclxuICAgIC8vICAgICBob3RlbEhpZ2hsaWdodHMgOiBob3RlbERldGFpbC5ob3RlbGhpZ2hsaWdodHMsXHJcbiAgICAvLyAgICAgaG90ZWxQb2xpY2llcyA6IGhvdGVsRGV0YWlsLmhvdGVscG9saWNpZXMsXHJcbiAgICAvLyAgICAgc3BSZXF1ZXN0cyA6IGhvdGVsRGV0YWlsLnNwZWNpYWxyZXF1ZXN0XHJcbiAgICAvLyB9LCBmdW5jdGlvbigpIHtcclxuICAgIC8vXHJcbiAgICAvLyB9KVxyXG5cclxuXHJcbn1cclxuXHJcblxyXG5cclxuY29uc3QgSG90ZWxEZXRhaWxTbHVnID0oaG90ZWxEZXRhaWwsIGdhbGxlcnlJbWFnZXMsIGhvdGVsX3Jvb21zICkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgICBjb25zdCB7IGhvdGVsX3VybCB9ID0gcm91dGVyLnF1ZXJ5O1xyXG4gICAgY29uc29sZS5sb2coaG90ZWxEZXRhaWwpXHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgICA8SG90ZWxEZXRhaWwgaG90ZWxEZXRhaWw9e2hvdGVsRGV0YWlsWzBdfSBob3RlbF91cmw9e2hvdGVsX3VybH1cclxuICAgICAgICAgICAgICAgICAgICAgIGdhbGxlcnlJbWFnZXM9e2dhbGxlcnlJbWFnZXN9IGhvdGVsX3Jvb21zPXtob3RlbF9yb29tc30vPlxyXG4gICAgKVxyXG59XHJcblxyXG5jbGFzcyBIb3RlbERldGFpbCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICBsZXQgdG9kYXkgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIGxldCB0b21vcnJvdyA9IG5ldyBEYXRlKHRvZGF5KTtcclxuICAgICAgICB0b21vcnJvdy5zZXREYXRlKHRvbW9ycm93LmdldERhdGUoKSArIDEpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHRvZGF5IDogdG9kYXksXHJcbiAgICAgICAgICAgIHRvbW9ycm93IDogdG9tb3Jyb3csXHJcbiAgICAgICAgICAgIHN0YXJ0RGF0ZSA6IHRvZGF5LFxyXG4gICAgICAgICAgICBlbmREYXRlIDogdG9tb3Jyb3csXHJcbiAgICAgICAgICAgIGNoZWNraW5kYXRlIDogdG9kYXksXHJcbiAgICAgICAgICAgIGNoZWNrb3V0ZGF0ZSA6IHRvbW9ycm93LFxyXG4gICAgICAgICAgICByb29tcyA6ICcnLFxyXG4gICAgICAgICAgICBhZHVsdHMgOiAnJyxcclxuICAgICAgICAgICAgY2hpbGRyZW4gOiAnJyxcclxuICAgICAgICAgICAgcm9vbVR5cGVzIDogW10sXHJcbiAgICAgICAgICAgIGluaXRTZWFyY2ggOiBmYWxzZSxcclxuICAgICAgICAgICAgc2VhcmNoU3RlcCA6IDEsXHJcbiAgICAgICAgICAgIHNlbGVjdGVkUm9vbXMgOiBbXSxcclxuICAgICAgICAgICAgc2VsZWN0ZWRSb29tSWRzIDogW10sXHJcbiAgICAgICAgICAgIGhvdGVsX3Jvb21zIDogW10sXHJcbiAgICAgICAgICAgIGludmFsaWRGaWVsZHMgOiBbXSxcclxuICAgICAgICAgICAgc2hvd0Vycm9yIDogZmFsc2UsXHJcbiAgICAgICAgICAgIGZpcnN0bmFtZSA6JycsXHJcbiAgICAgICAgICAgIGxhc3RuYW1lIDonJyxcclxuICAgICAgICAgICAgYWRkcmVzczEgOiAnJyxcclxuICAgICAgICAgICAgYWRkcmVzczIgOiAnJyxcclxuICAgICAgICAgICAgY2l0eSA6ICcnLFxyXG4gICAgICAgICAgICBzdGF0ZSA6ICcnLFxyXG4gICAgICAgICAgICBwaW5jb2RlIDogJycsXHJcbiAgICAgICAgICAgIGNvdW50cnkgOiAnJyxcclxuICAgICAgICAgICAgbW9iaWxlIDogJycsXHJcbiAgICAgICAgICAgIGFkZGl0aW9uYWxwaG9uZW51bWJlciA6ICcnLFxyXG4gICAgICAgICAgICBlbWFpbCA6ICcnLFxyXG4gICAgICAgICAgICBzaG93UHJvZmlsZUluZm9FcnJvciA6IGZhbHNlLFxyXG4gICAgICAgICAgICBib29raW5nSWQgOiAnJyxcclxuICAgICAgICAgICAgdG90YWxBbW91bnQgOiAwLFxyXG4gICAgICAgICAgICBwcmluY2lwbGVBbW91bnQgOiAwLFxyXG4gICAgICAgICAgICBkaXNjb3VudCA6IDAsXHJcbiAgICAgICAgICAgIHByb2dyYW1fZGVzY3JpcHRpb24gOiAnJyxcclxuICAgICAgICAgICAgZ3N0IDogMCxcclxuICAgICAgICAgICAgTUFYX0NBUEFDSVRZX01TRyA6ICcnLFxyXG4gICAgICAgICAgICBpdGVtUmVtb3ZhbE1lc3NhZ2UgOiBmYWxzZSxcclxuICAgICAgICAgICAgYmFubmVySW1hZ2VzIDogW10sXHJcbiAgICAgICAgICAgIGNhbm5vdENvbnRpbnVlTWVzc2FnZSA6ZmFsc2UsXHJcbiAgICAgICAgICAgIGdhbGxlcnlJbWFnZXMgOiBbXSxcclxuICAgICAgICAgICAgc2hvd0RldGFpbFN0YXR1cyA6IGZhbHNlLFxyXG4gICAgICAgICAgICBob3RlbFBvbGljaWVzIDogW10sXHJcbiAgICAgICAgICAgIGhvdGVsSGlnaGxpZ2h0cyA6IFtdLFxyXG4gICAgICAgICAgICBNQVhfQ0FQQUNJVFlfR0VORVJBTCA6IDEsXHJcbiAgICAgICAgICAgIHNob3dTcGVjaWFsUmVxdWVzdHMgOiBmYWxzZSxcclxuICAgICAgICAgICAgc3BSZXF1ZXN0cyA6IFtdLFxyXG4gICAgICAgICAgICBzZWxlY3RlZFNwUmVxcyA6W10sXHJcbiAgICAgICAgICAgIHNlbGVjdGVkU3BSZXFJZHMgOiBbXSxcclxuICAgICAgICAgICAgc2hvd1BlbmRpbmdNZXNzYWdlIDogZmFsc2UsXHJcbiAgICAgICAgICAgIGV4cGFuZENvbnRlbnQgOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xyXG4gICAgICAgIHNjcmlwdC5zcmMgPSAnaHR0cHM6Ly9jaGVja291dC5yYXpvcnBheS5jb20vdjEvY2hlY2tvdXQuanMnO1xyXG4gICAgICAgIHNjcmlwdC5hc3luYyA9IHRydWU7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBob3RlbF91cmwgOiB0aGlzLnByb3BzLmhvdGVsX3VybFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgc2Nyb2xsVG9TZWN0aW9uID0gKHNlY3Rpb24pID0+IHtcclxuICAgICAgICBpZihzZWN0aW9uICE9PSAnJykge1xyXG4gICAgICAgICAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNlY3Rpb24pO1xyXG4gICAgICAgICAgICBpZiAoZWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5zY3JvbGxJbnRvVmlldyh7YmVoYXZpb3I6IFwic21vb3RoXCIsIGJsb2NrOiBcInN0YXJ0XCIsIGlubGluZTogXCJuZWFyZXN0XCJ9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlLCBzbmFwc2hvdCkge1xyXG5cclxuICAgICAgICBpZih0aGlzLnByb3BzLmhvdGVsRGV0YWlsICE9PSBwcmV2UHJvcHMuaG90ZWxEZXRhaWwpIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgaG90ZWxfaWQgOiB0aGlzLnByb3BzLmhvdGVsRGV0YWlsLmhvdGVsX2lkLFxyXG4gICAgICAgICAgICAgICAgaG90ZWxEZXRhaWwgOiB0aGlzLnByb3BzLmhvdGVsRGV0YWlsLFxyXG4gICAgICAgICAgICAgICAgaG90ZWxfcm9vbXMgOiB0aGlzLnByb3BzLmhvdGVsX3Jvb21zLFxyXG4gICAgICAgICAgICAgICAgZ2FsbGVyeUltYWdlcyA6IHRoaXMucHJvcHMuZ2FsbGVyeUltYWdlcyxcclxuICAgICAgICAgICAgICAgIE1BWF9DQVBBQ0lUWV9HRU5FUkFMIDogdGhpcy5wcm9wcy5ob3RlbERldGFpbC5tYXhfb2NjdXBhbmN5LFxyXG4gICAgICAgICAgICAgICAgaG90ZWxIaWdobGlnaHRzIDogdGhpcy5wcm9wcy5ob3RlbERldGFpbC5ob3RlbGhpZ2hsaWdodHMsXHJcbiAgICAgICAgICAgICAgICBob3RlbFBvbGljaWVzIDogdGhpcy5wcm9wcy5ob3RlbERldGFpbC5ob3RlbHBvbGljaWVzLFxyXG4gICAgICAgICAgICAgICAgc3BSZXF1ZXN0cyA6IHRoaXMucHJvcHMuaG90ZWxEZXRhaWwuc3BlY2lhbHJlcXVlc3RcclxuICAgICAgICAgICAgfSwgZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gaWYodGhpcy5wcm9wcy5mYWNpbGl0eURhdGEucm9vbVR5cGVzICE9PSBwcmV2UHJvcHMuZmFjaWxpdHlEYXRhLnJvb21UeXBlcykge1xyXG4gICAgICAgIC8vICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAvLyAgICAgICAgIHJvb21UeXBlcyA6IHRoaXMucHJvcHMuZmFjaWxpdHlEYXRhLnJvb21UeXBlc1xyXG4gICAgICAgIC8vICAgICB9KVxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBpZih0aGlzLnByb3BzLmJvb2tpbmdEYXRhLmJvb2tpbmdJZCAhPT0gcHJldlByb3BzLmJvb2tpbmdEYXRhLmJvb2tpbmdJZCkge1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIC8vICAgICAgICAgYm9va2luZ0lkIDogdGhpcy5wcm9wcy5ib29raW5nRGF0YS5ib29raW5nSWRcclxuICAgICAgICAvLyAgICAgfSwgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmNvbnRpbnVlVG9QYXltZW50KClcclxuICAgICAgICAvLyAgICAgfSlcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gaWYodGhpcy5wcm9wcy5ib29raW5nRGF0YS5ib29raW5nUmVzdWx0ICE9PSBwcmV2UHJvcHMuYm9va2luZ0RhdGEuYm9va2luZ1Jlc3VsdCkge1xyXG4gICAgICAgIC8vICAgICBsZXQgUGF5bWVudFVybCA9IGBodHRwczovL3V0aGRldi5uZXZlcmJlZm9yZWhvbGlkYXlzLmNvbS9wYXltZW50LXN1Y2Nlc3M/cnBfaWQ9YCt0aGlzLnN0YXRlLlBheW1lbnRJZCtgJnJhbXQ9YCt0aGlzLnN0YXRlLnRvdGFsQW1vdW50K2AmbW9iaWxlPWArdGhpcy5zdGF0ZS5tb2JpbGUrYCZlbWFpbD1gK3RoaXMuc3RhdGUuZW1haWwrYCZtZXRob2Q9Q2FyZCBwYXltZW50JmRhdGU9YCttb21lbnQodGhpcy5zdGF0ZS50b2RheSkuZm9ybWF0KCdERCBNTU0sIFlZWVknKTtcclxuICAgICAgICAvLyAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBQYXltZW50VXJsO1xyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgLy8gaWYodGhpcy5wcm9wcy5ob3RlbERhdGEuYmFubmVySW1hZ2VzICE9PSBwcmV2UHJvcHMuaG90ZWxEYXRhLmJhbm5lckltYWdlcykge1xyXG4gICAgICAgIC8vICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAvLyAgICAgICAgIGJhbm5lckltYWdlcyA6IHRoaXMucHJvcHMuaG90ZWxEYXRhLmJhbm5lckltYWdlc1xyXG4gICAgICAgIC8vICAgICB9KVxyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXRTdGFydERhdGUgPSAoZGF0ZSkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBzdGFydERhdGUgOiBkYXRlXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHNldEVuZERhdGUgPSAoZGF0ZSkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBlbmREYXRlIDogZGF0ZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC52YWx1ZSlcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgW2UudGFyZ2V0Lm5hbWVdIDogZS50YXJnZXQudmFsdWVcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHNlYXJjaFJvb21zID0gKCkgPT4ge1xyXG5cclxuXHJcbiAgICAgICAgbGV0IE1BWF9DQVBBQ0lUWV9HRU5FUkFMID0gdGhpcy5zdGF0ZS5NQVhfQ0FQQUNJVFlfR0VORVJBTDtcclxuICAgICAgICBsZXQgc3RhcnREYXRlID0gdGhpcy5zdGF0ZS5zdGFydERhdGU7XHJcbiAgICAgICAgbGV0IGVuZERhdGUgPSB0aGlzLnN0YXRlLnN0YXJ0RGF0ZTtcclxuICAgICAgICBsZXQgcm9vbXMgPSB0aGlzLnN0YXRlLnJvb21zO1xyXG4gICAgICAgIGxldCBhZHVsdHMgPSB0aGlzLnN0YXRlLmFkdWx0cztcclxuICAgICAgICBsZXQgY2hpbGRyZW4gPSB0aGlzLnN0YXRlLmNoaWxkcmVuO1xyXG4gICAgICAgIGxldCBpbnZhbGlkRmllbGRzID0gW107XHJcbiAgICAgICAgaWYoc3RhcnREYXRlID09PSAnJykge1xyXG4gICAgICAgICAgICBpbnZhbGlkRmllbGRzLnB1c2goJ3N0YXJ0RGF0ZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihlbmREYXRlID09PSAnJykge1xyXG4gICAgICAgICAgICBpbnZhbGlkRmllbGRzLnB1c2goJ2VuZERhdGUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYocm9vbXMgPT09ICcnKSB7XHJcbiAgICAgICAgICAgIGludmFsaWRGaWVsZHMucHVzaCgncm9vbXMnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoYWR1bHRzID09PSAnJykge1xyXG4gICAgICAgICAgICBpbnZhbGlkRmllbGRzLnB1c2goJ2FkdWx0cycpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGFkdWx0Q291bnQgPSBwYXJzZUludChyb29tcykgKiBwYXJzZUludChNQVhfQ0FQQUNJVFlfR0VORVJBTCk7XHJcbiAgICAgICAgaWYocGFyc2VJbnQoYWR1bHRzKSA+IGFkdWx0Q291bnQpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBNQVhfQ0FQQUNJVFlfTVNHIDogXCJTb3JyeS4gV2UgYXJlIGFsbG93aW5nIGEgbWF4aW11bSBvZiBcIitNQVhfQ0FQQUNJVFlfR0VORVJBTCtcIiBtZW1iZXJzIGluIGEgcm9vbVwiXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGludmFsaWRGaWVsZHMubGVuZ3RoID09PSAwICkge1xyXG5cclxuICAgICAgICAgICAgbGV0IHBhcmFtcyA9IHtzdGFydERhdGU6IHRoaXMuc3RhdGUuc3RhcnREYXRlLCBlbmREYXRlIDogdGhpcy5zdGF0ZS5lbmREYXRlLCByb29tcyA6IHRoaXMuc3RhdGUucm9vbXMsXHJcbiAgICAgICAgICAgICAgICBhZHVsdHMgOiB0aGlzLnN0YXRlLmFkdWx0cywgY2hpbGRyZW4gOiB0aGlzLnN0YXRlLmNoaWxkcmVufTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2hvd0Vycm9yIDogZmFsc2UsIGluaXRTZWFyY2ggOiAgdHJ1ZSwgc2VhcmNoU3RlcCA6IDEsIHN0YXJ0RGF0ZTogdGhpcy5zdGF0ZS5zdGFydERhdGUsIGVuZERhdGUgOiB0aGlzLnN0YXRlLmVuZERhdGUsIHJvb21zIDogdGhpcy5zdGF0ZS5yb29tcyxcclxuICAgICAgICAgICAgICAgIGFkdWx0cyA6IHRoaXMuc3RhdGUuYWR1bHRzLCBjaGlsZHJlbiA6IHRoaXMuc3RhdGUuY2hpbGRyZW4sIGludmFsaWRGaWVsZHMgOiBpbnZhbGlkRmllbGRzfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93RXJyb3IgOiB0cnVlLCBzdGFydERhdGU6IHRoaXMuc3RhdGUuc3RhcnREYXRlLCBlbmREYXRlIDogdGhpcy5zdGF0ZS5lbmREYXRlLCByb29tcyA6IHRoaXMuc3RhdGUucm9vbXMsXHJcbiAgICAgICAgICAgICAgICBhZHVsdHMgOiB0aGlzLnN0YXRlLmFkdWx0cywgY2hpbGRyZW4gOiB0aGlzLnN0YXRlLmNoaWxkcmVuLCBpbnZhbGlkRmllbGRzIDogaW52YWxpZEZpZWxkc30pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVzZXRTZWFyY2ggPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2hvd0Vycm9yIDogZmFsc2UsIGluaXRTZWFyY2ggOiAgZmFsc2UsIHNlYXJjaFN0ZXAgOiAwLCBzdGFydERhdGU6IHRoaXMuc3RhdGUudG9kYXksIGVuZERhdGUgOiB0aGlzLnN0YXRlLnRvbW9ycm93LCByb29tcyA6ICcnLFxyXG4gICAgICAgICAgICBhZHVsdHMgOiAnJywgY2hpbGRyZW4gOiAnJywgaW52YWxpZEZpZWxkcyA6IFtdfSlcclxuICAgIH1cclxuICAgIGJhY2tUb0RldGFpbCA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtpbml0U2VhcmNoIDogIGZhbHNlfSlcclxuICAgIH1cclxuICAgIGJhY2tUb0NhcnQgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2VhcmNoU3RlcCA6ICAxfSlcclxuICAgIH1cclxuXHJcbiAgICBzZWxlY3RSb29tID0gKHJvb20sIHR5cGUsZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgbGV0IHNlbGVjdGVkUm9vbXMgPSB0aGlzLnN0YXRlLnNlbGVjdGVkUm9vbXM7XHJcbiAgICAgICAgbGV0IHNlbGVjdGVkUm9vbUlkcyA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRSb29tSWRzO1xyXG5cclxuICAgICAgICBsZXQgaG90ZWxfcm9vbXMgPSB0aGlzLnN0YXRlLmhvdGVsX3Jvb21zXHJcbiAgICAgICAgaWYodHlwZSA9PT0gJ2FkZCcgfHwgdHlwZSA9PT0gJ2Nob29zZScpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coc2VsZWN0ZWRSb29tSWRzKVxyXG4gICAgICAgICAgICBpZighc2VsZWN0ZWRSb29tSWRzLmluY2x1ZGVzKHJvb20ucm9vbWlkKSl7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZFJvb21JZHMucHVzaChyb29tLnJvb21pZClcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkUm9vbXMucHVzaChyb29tKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJvb20pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHR5cGUgPT09ICdyZW1vdmUnKSB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuc3RhdGUuc2VhcmNoU3RlcCA9PT0gMiAmJiBzZWxlY3RlZFJvb21zLmxlbmd0aCA9PT0xKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1SZW1vdmFsTWVzc2FnZSA6IHRydWVcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZihzZWxlY3RlZFJvb21JZHMuaW5jbHVkZXMocm9vbS5yb29taWQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gc2VsZWN0ZWRSb29tSWRzLmluZGV4T2Yocm9vbS5yb29taWQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFJvb21JZHMuc3BsaWNlKGluZGV4LCAxKVxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkUm9vbXMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgICAgICAgICBob3RlbF9yb29tcyA9IGhvdGVsX3Jvb21zLm1hcChpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoaXRlbS5yb29taWQgPT09IHJvb20ucm9vbWlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnF0eSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBzZWxlY3RlZFJvb21JZHMgOnNlbGVjdGVkUm9vbUlkcyxcclxuICAgICAgICAgICAgc2VsZWN0ZWRSb29tcyA6IHNlbGVjdGVkUm9vbXMsXHJcbiAgICAgICAgICAgIGhvdGVsX3Jvb21zIDogaG90ZWxfcm9vbXNcclxuICAgICAgICB9LCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBpZih0eXBlICE9PSAncmVtb3ZlJykge1xyXG4gICAgICAgICAgICAgICAgKHR5cGUgPT09ICdhZGQnIHx8IHR5cGUgPT09ICdjaG9vc2UnICkgPyB0aGlzLmFkZFF0eShyb29tKSA6IHRoaXMuc3ViUXR5KHJvb20pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICB9KVxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgY29udGludWVUb1N1bW1hcnkgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IGFkdWx0Q291bnQgPSBwYXJzZUludCh0aGlzLnN0YXRlLmFkdWx0cyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coYWR1bHRDb3VudCk7XHJcbiAgICAgICAgbGV0IHBlcnNvbk9jY3VwaWVkID0gMDtcclxuICAgICAgICBsZXQgc2VsZWN0ZWRSb29tcyA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRSb29tcztcclxuICAgICAgICBsZXQgdG90YWxSb29tcyA9IDA7XHJcbiAgICAgICAgaWYoc2VsZWN0ZWRSb29tcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGZvcih2YXIgaT0wOyBpPHNlbGVjdGVkUm9vbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBxdHkgPSBzZWxlY3RlZFJvb21zW2ldLnF0eTtcclxuICAgICAgICAgICAgICAgIHRvdGFsUm9vbXMgKz0gcGFyc2VJbnQocXR5KTtcclxuICAgICAgICAgICAgICAgIGxldCBvY2N1cGFuY3kgPSBwYXJzZUludChzZWxlY3RlZFJvb21zW2ldLm1heF9jYXBhY2l0eV9hZHVsdCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgZXh0cmFfb2NjdXBhbmN5ID0gc2VsZWN0ZWRSb29tc1tpXS5leHRyYWJlZCA9PT0gJ3llcyc/ICAxOiAwO1xyXG4gICAgICAgICAgICAgICAgbGV0IHRvdGFsX29jY3VwYW5jeSA9IG9jY3VwYW5jeSArIGV4dHJhX29jY3VwYW5jeTtcclxuICAgICAgICAgICAgICAgIHBlcnNvbk9jY3VwaWVkICs9IHBhcnNlSW50KHF0eSkgKnRvdGFsX29jY3VwYW5jeTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoc2VsZWN0ZWRSb29tcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBjYW5ub3RDb250aW51ZSA6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBjYW5ub3RDb250aW51ZU1lc3NhZ2UgOiBcIlBsZWFzZSBzZWxlY3QgYXRsZWFzdCBhIHJvb20gdG8gcHJvY2VlZFwiXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYoYWR1bHRDb3VudCA+IHBlcnNvbk9jY3VwaWVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgY2Fubm90Q29udGludWUgOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgY2Fubm90Q29udGludWVNZXNzYWdlIDogXCJTb3JyeS5cIisgYWR1bHRDb3VudCtcIiBwZXJzb25zIGNhbm5vdCBiZSBvY2N1cGllZCBpbiBcIit0b3RhbFJvb21zK1wiIHJvb21zXCJcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuc3RhdGUuc2VsZWN0ZWRSb29tcy5sZW5ndGggPjApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaFN0ZXAgOjJcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgYWRkUXR5ID0gKHJvb20pID0+IHtcclxuICAgICAgICBsZXQgc2VsZWN0ZWRSb29tcyA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRSb29tcztcclxuICAgICAgICBsZXQgc2VsZWN0ZWRSb29tSWRzID0gdGhpcy5zdGF0ZS5zZWxlY3RlZFJvb21JZHM7XHJcbiAgICAgICAgbGV0IHJvb21JZCA9IHJvb20ucm9vbWlkO1xyXG4gICAgICAgIHNlbGVjdGVkUm9vbXMgPSBzZWxlY3RlZFJvb21zLm1hcChpdGVtID0+IHtcclxuICAgICAgICAgICAgaWYoaXRlbS5yb29taWQgPT09IHJvb21JZCkge1xyXG4gICAgICAgICAgICAgICAgaWYoaXRlbS5xdHkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZihpdGVtLnF0eSA8IGl0ZW0ucm9vbWNvdW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ucXR5ID0gcGFyc2VJbnQoaXRlbS5xdHkpICsxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0ucXR5ID0gMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgc2VsZWN0ZWRSb29tcyA6IHNlbGVjdGVkUm9vbXMsXHJcbiAgICAgICAgICAgIHNlbGVjdGVkUm9vbUlkcyA6IHNlbGVjdGVkUm9vbUlkc1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBzdWJRdHkgPSAocm9vbSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJvb20pXHJcbiAgICAgICAgbGV0IHNlbGVjdGVkUm9vbXMgPSB0aGlzLnN0YXRlLnNlbGVjdGVkUm9vbXM7XHJcbiAgICAgICAgbGV0IHNlbGVjdGVkUm9vbUlkcyA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRSb29tSWRzO1xyXG4gICAgICAgIGxldCByb29tSWQgPSByb29tLnJvb21pZDtcclxuXHJcbiAgICAgICAgaWYocm9vbS5xdHkgJiYgcm9vbS5xdHkgPT09IDEpIHtcclxuICAgICAgICAgICAgaWYodGhpcy5zdGF0ZS5zZWFyY2hTdGVwID09PSAyICYmIHNlbGVjdGVkUm9vbXMubGVuZ3RoID09PTEpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbVJlbW92YWxNZXNzYWdlIDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJvb20ucXR5ID0gMDtcclxuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IHNlbGVjdGVkUm9vbUlkcy5pbmRleE9mKHJvb20ucm9vbWlkKTtcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkUm9vbUlkcy5zcGxpY2UoaW5kZXgsMSlcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkUm9vbXMuc3BsaWNlKGluZGV4LDEpXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgc2VsZWN0ZWRSb29tcyA9IHNlbGVjdGVkUm9vbXMubWFwKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYoaXRlbS5yb29taWQgPT09IHJvb21JZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0ucXR5ID0gKGl0ZW0ucXR5ICYmIGl0ZW0ucXR5ID4wKSA/IHBhcnNlSW50KGl0ZW0ucXR5KSAtMSA6MDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkUm9vbXMgOiBzZWxlY3RlZFJvb21zLFxyXG4gICAgICAgICAgICBzZWxlY3RlZFJvb21JZHMgOiBzZWxlY3RlZFJvb21JZHNcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZVF0eSA9IChyb29tLGUpID0+IHtcclxuICAgICAgICBsZXQgcXR5ID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgbGV0IHNlbGVjdGVkUm9vbXMgPSB0aGlzLnN0YXRlLnNlbGVjdGVkUm9vbXM7XHJcbiAgICAgICAgbGV0IHNlbGVjdGVkUm9vbUlkcyA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRSb29tSWRzO1xyXG4gICAgICAgIGxldCByb29tSWQgPSByb29tLnJvb21pZDtcclxuICAgICAgICBzZWxlY3RlZFJvb21zID0gc2VsZWN0ZWRSb29tcy5tYXAoaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIGlmKGl0ZW0ucm9vbWlkID09PSByb29tSWQpIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0ucXR5ID0gKGl0ZW0ucXR5ICYmIGl0ZW0ucXR5ID4wKSA/IHBhcnNlSW50KGl0ZW0ucXR5KSAtMSA6IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLnNlbGVjdFJvb20ocm9vbSlcclxuICAgIH1cclxuXHJcbiAgICBzYXZlQm9va2luZyA9IChlLCBhbW91bnQsIHByaW5jaXBsZUFtb3VudCwgZGlzY291bnQsIHByb2dyYW1fZGVzY3JpcHRpb24sIGdzdCkgPT4ge1xyXG5cclxuXHJcbiAgICAgICAgbGV0IGZpcnN0bmFtZSA9IHRoaXMuc3RhdGUuZmlyc3RuYW1lO1xyXG4gICAgICAgIGxldCBsYXN0bmFtZSA9IHRoaXMuc3RhdGUubGFzdG5hbWU7XHJcbiAgICAgICAgbGV0IGFkZHJlc3MxID0gdGhpcy5zdGF0ZS5hZGRyZXNzMTtcclxuICAgICAgICBsZXQgYWRkcmVzczIgPSB0aGlzLnN0YXRlLmFkZHJlc3MyO1xyXG4gICAgICAgIGxldCBjaXR5ID0gdGhpcy5zdGF0ZS5jaXR5O1xyXG4gICAgICAgIGxldCBzdGF0ZSA9IHRoaXMuc3RhdGUuc3RhdGU7XHJcbiAgICAgICAgbGV0IGNvdW50cnkgPSB0aGlzLnN0YXRlLmNvdW50cnk7XHJcbiAgICAgICAgbGV0IHBpbmNvZGUgPSB0aGlzLnN0YXRlLnBpbmNvZGU7XHJcbiAgICAgICAgbGV0IG1vYmlsZSA9IHRoaXMuc3RhdGUubW9iaWxlO1xyXG4gICAgICAgIGxldCBhZGRpdGlvbmFscGhvbmVudW1iZXIgPSB0aGlzLnN0YXRlLmFkZGl0aW9uYWxwaG9uZW51bWJlcjtcclxuICAgICAgICBsZXQgZW1haWwgPSB0aGlzLnN0YXRlLmVtYWlsO1xyXG4gICAgICAgIGxldCBpbnZhbGlkRmllbGRzID0gW107XHJcbiAgICAgICAgaWYoZmlyc3RuYW1lID09PSAnJykge1xyXG4gICAgICAgICAgICBpbnZhbGlkRmllbGRzLnB1c2goJ2ZpcnN0bmFtZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihsYXN0bmFtZSA9PT0gJycpIHtcclxuICAgICAgICAgICAgaW52YWxpZEZpZWxkcy5wdXNoKCdsYXN0bmFtZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihhZGRyZXNzMSA9PT0gJycpIHtcclxuICAgICAgICAgICAgaW52YWxpZEZpZWxkcy5wdXNoKCdhZGRyZXNzMScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihhZGRyZXNzMiA9PT0gJycpIHtcclxuICAgICAgICAgICAgaW52YWxpZEZpZWxkcy5wdXNoKCdhZGRyZXNzMicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihjaXR5ID09PSAnJykge1xyXG4gICAgICAgICAgICBpbnZhbGlkRmllbGRzLnB1c2goJ2NpdHknKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoc3RhdGUgPT09ICcnKSB7XHJcbiAgICAgICAgICAgIGludmFsaWRGaWVsZHMucHVzaCgnc3RhdGUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoY291bnRyeSA9PT0gJycpIHtcclxuICAgICAgICAgICAgaW52YWxpZEZpZWxkcy5wdXNoKCdjb3VudHJ5Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHBpbmNvZGUgPT09ICcnKSB7XHJcbiAgICAgICAgICAgIGludmFsaWRGaWVsZHMucHVzaCgncGluY29kZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihtb2JpbGUgPT09ICcnKSB7XHJcbiAgICAgICAgICAgIGludmFsaWRGaWVsZHMucHVzaCgnbW9iaWxlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGFkZGl0aW9uYWxwaG9uZW51bWJlciA9PT0gJycpIHtcclxuICAgICAgICAgICAgaW52YWxpZEZpZWxkcy5wdXNoKCdhZGRpdGlvbmFscGhvbmVudW1iZXInKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoZW1haWwgPT09ICcnKSB7XHJcbiAgICAgICAgICAgIGludmFsaWRGaWVsZHMucHVzaCgnZW1haWwnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKGludmFsaWRGaWVsZHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIGxldCBzZWxlY3RlZFJvb21zID0gdGhpcy5zdGF0ZS5zZWxlY3RlZFJvb21zO1xyXG4gICAgICAgICAgICBsZXQgY2hlY2tpbmRhdGUgPSBtb21lbnQodGhpcy5zdGF0ZS5zdGFydERhdGUpLmZvcm1hdCgneXl5eS1NTS1ERCcpO1xyXG4gICAgICAgICAgICBsZXQgY2hlY2tvdXRkYXRlID0gbW9tZW50KHRoaXMuc3RhdGUuZW5kRGF0ZSkuZm9ybWF0KCd5eXl5LU1NLUREJyk7XHJcbiAgICAgICAgICAgIGxldCBhZHVsdHMgPSB0aGlzLnN0YXRlLmFkdWx0cyB8fCAwO1xyXG4gICAgICAgICAgICBsZXQgY2hpbGRyZW4gPSB0aGlzLnN0YXRlLmNoaWxkcmVuIHx8IDA7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIHZhciBzdGFydCA9IG1vbWVudChjaGVja2luZGF0ZSwgXCJZWVlZLU1NLUREXCIpO1xyXG4gICAgICAgICAgICB2YXIgZW5kID0gbW9tZW50KGNoZWNrb3V0ZGF0ZSwgXCJZWVlZLU1NLUREXCIpO1xyXG5cclxuICAgICAgICAgICAgbGV0IG5vT2ZEYXlzID0gbW9tZW50LmR1cmF0aW9uKGVuZC5kaWZmKHN0YXJ0KSkuYXNEYXlzKCk7XHJcblxyXG4gICAgICAgICAgICBsZXQgbm9PZnJvb21zID0gdGhpcy5zdGF0ZS5yb29tcztcclxuICAgICAgICAgICAgbGV0IHRheGFtb3VudCA9IGdzdDtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHNlbGVjdGVkUm9vbXMpXHJcblxyXG4gICAgICAgICAgICBsZXQgc2VsZWN0ZWRTcFJlcXMgPSB0aGlzLnN0YXRlLnNlbGVjdGVkU3BSZXFzO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGxldCBib29rZWRSb29tcyA9IFtdO1xyXG5cclxuICAgICAgICAgICAgZm9yKGxldCBpPTA7IGk8c2VsZWN0ZWRSb29tcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHJvb20gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJyb29taWRcIiA6IHNlbGVjdGVkUm9vbXNbaV0ucm9vbWlkLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibm9vZmFkdWx0c1wiIDogIHNlbGVjdGVkUm9vbXNbaV0ubWF4X2NhcGFjaXR5X2FkdWx0LFxyXG4gICAgICAgICAgICAgICAgICAgIFwibm9vZmNoaWxkc1wiIDogIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJleHRyYWJlZFwiIDogIHNlbGVjdGVkUm9vbXNbaV0uZXh0cmFiZWRjb3VudCxcclxuICAgICAgICAgICAgICAgICAgICBcInByaWNlXCIgOiAgc2VsZWN0ZWRSb29tc1tpXS5yb29tX3ByaWNlLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZXh0cmFiZWRwcmljZVwiIDogIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0YXhhbW91bnRcIjogIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0b3RhbHByaWNlXCIgOiAgcGFyc2VGbG9hdChzZWxlY3RlZFJvb21zW2ldLnJvb21fcHJpY2UpICogbm9PZkRheXMsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBib29rZWRSb29tcy5wdXNoKHJvb20pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgcGFyYW1zID0ge1xyXG4gICAgICAgICAgICAgICAgXCJob3RlbF9pZFwiOiB0aGlzLnN0YXRlLmhvdGVsX2lkLFxyXG4gICAgICAgICAgICAgICAgXCJjaGVja2luZGF0ZVwiOiBjaGVja2luZGF0ZSxcclxuICAgICAgICAgICAgICAgIFwiY2hlY2tvdXRkYXRlXCI6IGNoZWNrb3V0ZGF0ZSxcclxuICAgICAgICAgICAgICAgIFwibm9vZmFkdWx0c1wiOiBhZHVsdHMsXHJcbiAgICAgICAgICAgICAgICBcIm5vb2ZjaGlsZHNcIjogY2hpbGRyZW4sXHJcbiAgICAgICAgICAgICAgICBcIm5vb2Zyb29tc1wiOiBub09mcm9vbXMsXHJcbiAgICAgICAgICAgICAgICBcInByaWNlXCIgOiBwcmluY2lwbGVBbW91bnQsXHJcbiAgICAgICAgICAgICAgICBcInRheGFtb3VudFwiOiB0YXhhbW91bnQsXHJcbiAgICAgICAgICAgICAgICBcInRvdGFscHJpY2VcIjogYW1vdW50LFxyXG4gICAgICAgICAgICAgICAgXCJmaXJzdG5hbWVcIjogZmlyc3RuYW1lLFxyXG4gICAgICAgICAgICAgICAgXCJsYXN0bmFtZVwiOiBsYXN0bmFtZSxcclxuICAgICAgICAgICAgICAgIFwiYWRkcmVzczFcIjogYWRkcmVzczEsXHJcbiAgICAgICAgICAgICAgICBcImFkZHJlc3MyXCI6IGFkZHJlc3MyLFxyXG4gICAgICAgICAgICAgICAgXCJjaXR5XCI6IGNpdHksXHJcbiAgICAgICAgICAgICAgICBcInN0YXRlXCI6IHN0YXRlLFxyXG4gICAgICAgICAgICAgICAgXCJjb3VudHJ5XCI6IGNvdW50cnksXHJcbiAgICAgICAgICAgICAgICBcInBpbmNvZGVcIjogcGluY29kZSxcclxuICAgICAgICAgICAgICAgIFwibW9iaWxlXCI6IG1vYmlsZSxcclxuICAgICAgICAgICAgICAgIFwiZW1haWxcIjogZW1haWwsXHJcbiAgICAgICAgICAgICAgICBcImlkcHJvb2ZcIjogXCJ0ZXN0LnBkZlwiLFxyXG4gICAgICAgICAgICAgICAgXCJyb29tc1wiOiBib29rZWRSb29tcyxcclxuICAgICAgICAgICAgICAgIFwiYWRkaXRpb25hbHBob25lbnVtYmVyXCI6IG1vYmlsZSxcclxuICAgICAgICAgICAgICAgIFwic3BscmVxdWVzdFwiIDogc2VsZWN0ZWRTcFJlcXMubGVuZ3RoID4wICA/IEpTT04uc3RyaW5naWZ5KHNlbGVjdGVkU3BSZXFzKSA6IFwiXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwYXJhbXMpXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuc2F2ZUJvb2tpbmcocGFyYW1zKTtcclxuXHJcblxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGludmFsaWRGaWVsZHMgOiBbXSxcclxuICAgICAgICAgICAgICAgIHRvdGFsQW1vdW50IDogYW1vdW50LFxyXG4gICAgICAgICAgICAgICAgcHJpbmNpcGxlQW1vdW50IDogcHJpbmNpcGxlQW1vdW50LFxyXG4gICAgICAgICAgICAgICAgZGlzY291bnQgOiBkaXNjb3VudCxcclxuICAgICAgICAgICAgICAgIHByb2dyYW1fZGVzY3JpcHRpb24gOiBwcm9ncmFtX2Rlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgZ3N0IDogZ3N0LFxyXG4gICAgICAgICAgICAgICAgY2hlY2tpbmRhdGUgOiBjaGVja2luZGF0ZSxcclxuICAgICAgICAgICAgICAgIGNoZWNrb3V0ZGF0ZSA6IGNoZWNrb3V0ZGF0ZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBzaG93UHJvZmlsZUluZm9FcnJvciA6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBpbnZhbGlkRmllbGRzIDogaW52YWxpZEZpZWxkcyxcclxuICAgICAgICAgICAgICAgIHRvdGFsQW1vdW50IDogYW1vdW50LFxyXG4gICAgICAgICAgICAgICAgcHJpbmNpcGxlQW1vdW50IDogcHJpbmNpcGxlQW1vdW50LFxyXG4gICAgICAgICAgICAgICAgZGlzY291bnQgOiBkaXNjb3VudCxcclxuICAgICAgICAgICAgICAgIHByb2dyYW1fZGVzY3JpcHRpb24gOiBwcm9ncmFtX2Rlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgZ3N0IDogZ3N0XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBoaWRlUHJvZmlsZUluZm9FcnJvciA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgc2hvd1Byb2ZpbGVJbmZvRXJyb3IgOiBmYWxzZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY29udGludWVUb1BheW1lbnQgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHRoYXQ9dGhpcztcclxuICAgICAgICBsZXQgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgLy8ga2V5OiAncnpwX2xpdmVfdU5RZ3o2ck9HUTk2cUUnLFxyXG4gICAgICAgICAgICBrZXk6ICdyenBfdGVzdF9ybkVINUk0Tkh1YUdKeCcsXHJcbiAgICAgICAgICAgIGFtb3VudDogcGFyc2VGbG9hdCh0aGlzLnN0YXRlLnRvdGFsQW1vdW50KSoxMDAsIC8vICA9IElOUiAxXHJcbiAgICAgICAgICAgIG5hbWU6ICdVVEggQm9va2luZycsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnUGxlYXNlIHBheSB0aGUgYm9va2luZyBjaGFyZ2VzIGhlcmUgdG8gY29uZmlybScsXHJcbiAgICAgICAgICAgIGltYWdlOiAnaHR0cHM6Ly91dGhkZXYubmV2ZXJiZWZvcmVob2xpZGF5cy5jb20vYXNzZXRzL2ltYWdlcy91dGgtbG9nby1ibGFjay5wbmcnLFxyXG4gICAgICAgICAgICAvLyBvcmRlcl9pZDogdGhpcy5zdGF0ZS5vcmRlcklkLFxyXG4gICAgICAgICAgICBoYW5kbGVyOiBmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgdGhhdC5zZXRTdGF0ZSh7UGF5bWVudElkOiByZXNwb25zZS5yYXpvcnBheV9wYXltZW50X2lkLCB0b3RhbEFtb3VudCA6IHRoYXQuc3RhdGUudG90YWxBbW91bnQsIGRhdGUgOiBtb21lbnQobmV3IERhdGUoKSkuZm9ybWF0KCdERCBNTU0gWVlZWScpICwgZW1haWwgOnRoYXQuc3RhdGUuZW1haWwsIG1vYmlsZSA6IHRoYXQuc3RhdGUubW9iaWxlIH0pXHJcbiAgICAgICAgICAgICAgICAvL2xldCBQYXltZW50VXJsID0gYGh0dHA6Ly8xNTkuNjUuMTUzLjU5L3NpdGUvIy9wYXltZW50LXN1Y2Nlc3MvYCt0aGlzLnByb3BzLmJvb2tpbmdEYXRhLmJvb2tpbmdJZDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBheW1lbnRJZCA9IHJlc3BvbnNlLnJhem9ycGF5X3BheW1lbnRfaWQ7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IFBheW1lbnRVcmwgPSBgaHR0cHM6Ly91dGhkZXYubmV2ZXJiZWZvcmVob2xpZGF5cy5jb20vcGF5bWVudC1zdWNjZXNzP3JwX2lkPWArcGF5bWVudElkK2AmcmFtdD1gK3RoYXQuc3RhdGUudG90YWxBbW91bnQrYCZtb2JpbGU9YCt0aGF0LnN0YXRlLm1vYmlsZStgJmVtYWlsPWArdGhhdC5zdGF0ZS5lbWFpbCtgJm1ldGhvZD1DYXJkIHBheW1lbnQmZGF0ZT1gK21vbWVudCh0aGF0LnN0YXRlLnRvZGF5KS5mb3JtYXQoJ0REIE1NTSwgWVlZWScpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHBhcmFtcyA9IHtcclxuICAgICAgICAgICAgICAgICAgICBcIl9pZFwiOiBwYXltZW50SWQsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJyZWZlcmVuY2VcIjogJ1VUSCcsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJkaXNjb3VudFwiOiB0aGF0LnN0YXRlLmRpc2NvdW50LFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZ3N0XCI6IHRoYXQuc3RhdGUuZ3N0LFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZGVzY1wiOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBcInByaW5jaXBhbFwiOiB0aGF0LnN0YXRlLnByaW5jaXBsZUFtb3VudCxcclxuICAgICAgICAgICAgICAgICAgICBcInBheW1lbnR1cmxcIjogUGF5bWVudFVybCxcclxuICAgICAgICAgICAgICAgICAgICBcInByb2RcIjogZmFsc2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vdGhhdC5wcm9wcy5jb25maXJtQm9va2luZyhwYXJhbXMpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGJvb2tQYXJhbXMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9va2luZ0lkOiB0aGF0LnByb3BzLmJvb2tpbmdEYXRhLmJvb2tpbmdJZFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhhdC5wcm9wcy5jb25maXJtQm9va2luZyhib29rUGFyYW1zKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcHJlZmlsbDoge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ1VUSCcsXHJcbiAgICAgICAgICAgICAgICBjb250YWN0OiAnJyxcclxuICAgICAgICAgICAgICAgIGVtYWlsOiAnJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBub3Rlczoge1xyXG4gICAgICAgICAgICAgICAgYWRkcmVzczogJ1VUSCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdGhlbWU6IHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAnIzNmYTlmNScsXHJcbiAgICAgICAgICAgICAgICBoaWRlX3RvcGJhcjogZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhvcHRpb25zKTtcclxuICAgICAgICB2YXIgcnpwMSA9IG5ldyB3aW5kb3cuUmF6b3JwYXkob3B0aW9ucyk7XHJcbiAgICAgICAgcnpwMS5vbigncGF5bWVudC5mYWlsZWQnLCBmdW5jdGlvbiAocmVzcG9uc2Upe1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXNwb25zZS5lcnJvci5kZXNjcmlwdGlvbik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcnpwMS5vcGVuKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaGlkZUVycm9yID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBzaG93RXJyb3IgOiBmYWxzZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgaGlkZUl0ZW1SZW1vdmFsTWVzc2FnZSA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgaXRlbVJlbW92YWxNZXNzYWdlIDogZmFsc2UsXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBlbXB0eUNhcnQgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHNlbGVjdGVkUm9vbXMgPSB0aGlzLnN0YXRlLnNlbGVjdGVkUm9vbXM7XHJcblxyXG4gICAgICAgIHNlbGVjdGVkUm9vbXMgPSBzZWxlY3RlZFJvb21zLm1hcChpdGVtID0+IHtcclxuICAgICAgICAgICAgaXRlbS5xdHkgPSAwO1xyXG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgICAgICB9KVxyXG5cclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGl0ZW1SZW1vdmFsTWVzc2FnZSA6IGZhbHNlLFxyXG4gICAgICAgICAgICBzZWxlY3RlZFJvb21zIDogW10sXHJcbiAgICAgICAgICAgIHNlbGVjdGVkUm9vbUlkcyA6IFtdLFxyXG4gICAgICAgICAgICBzZWFyY2hTdGVwIDogMVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBoaWRlQ2Fubm90Q29udGludWUgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGNhbm5vdENvbnRpbnVlIDogZmFsc2VcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHNob3dGdWxsRGV0YWlsID0gKGlkKSA9PiB7XHJcbiAgICAgICAgbGV0IGhvdGVsX3Jvb21zID0gdGhpcy5zdGF0ZS5ob3RlbF9yb29tcztcclxuICAgICAgICBsZXQgcm9vbUxpc3QgPSAgaG90ZWxfcm9vbXMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5yb29taWQgPT09IGlkKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgc2hvd0RldGFpbFN0YXR1cyA6IHRydWUsXHJcbiAgICAgICAgICAgIHJvb21JZCA6IGlkLFxyXG4gICAgICAgICAgICByb29tRGV0YWlsIDogcm9vbUxpc3QubGVuZ3RoID4gMCAmJiByb29tTGlzdFswXVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgaGlkZUZ1bGxEZXRhaWwgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHNob3dEZXRhaWxTdGF0dXMgOiBmYWxzZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgc2hvd1NwZWNpYWxSZXF1ZXN0cyA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgc2hvd1NwUmVxU3RhdCA6IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgaGlkZVNwZWNpYWxSZXF1ZXN0cyA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgc2hvd1NwUmVxU3RhdCA6IGZhbHNlXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVTcFNlbGVjdGlvbiA9IChlLCBzcCkgPT4ge1xyXG4gICAgICAgIGxldCBzZWxlY3RlZFNwUmVxSWRzID0gWy4uLnRoaXMuc3RhdGUuc2VsZWN0ZWRTcFJlcUlkc107XHJcbiAgICAgICAgbGV0IHNlbGVjdGVkU3BSZXFzID0gWy4uLnRoaXMuc3RhdGUuc2VsZWN0ZWRTcFJlcXNdO1xyXG5cclxuICAgICAgICBpZihlLnRhcmdldC5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkU3BSZXFJZHMucHVzaChzcC5zcF9pZClcclxuICAgICAgICAgICAgc2VsZWN0ZWRTcFJlcXMucHVzaChzcClcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBpbmRleCA9IHNlbGVjdGVkU3BSZXFJZHMuaW5kZXhPZihzcC5zcF9pZCk7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkU3BSZXFJZHMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgc2VsZWN0ZWRTcFJlcXMuc3BsaWNlKGluZGV4LCAxKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBzZWxlY3RlZFNwUmVxcyA6IHNlbGVjdGVkU3BSZXFzLFxyXG4gICAgICAgICAgICBzZWxlY3RlZFNwUmVxSWRzIDogc2VsZWN0ZWRTcFJlcUlkc1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlU3AgPSAoZSwgc3BfaWQpID0+IHtcclxuICAgICAgICBsZXQgc2VsZWN0ZWRTcFJlcUlkcyA9IFsuLi50aGlzLnN0YXRlLnNlbGVjdGVkU3BSZXFJZHNdO1xyXG4gICAgICAgIGxldCBzZWxlY3RlZFNwUmVxcyA9IFsuLi50aGlzLnN0YXRlLnNlbGVjdGVkU3BSZXFzXTtcclxuICAgICAgICBsZXQgaW5kZXggPSBzZWxlY3RlZFNwUmVxSWRzLmluZGV4T2Yoc3BfaWQpO1xyXG4gICAgICAgIHNlbGVjdGVkU3BSZXFJZHMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICBzZWxlY3RlZFNwUmVxcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBzZWxlY3RlZFNwUmVxcyA6IHNlbGVjdGVkU3BSZXFzLFxyXG4gICAgICAgICAgICBzZWxlY3RlZFNwUmVxSWRzIDogc2VsZWN0ZWRTcFJlcUlkc1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGhpZGVQZW5kaW5nTWVzc2FnZSA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgc2hvd1BlbmRpbmdNZXNzYWdlIDogZmFsc2VcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZUNvbnRlbnQgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGV4cGFuZENvbnRlbnQgOiAhdGhpcy5zdGF0ZS5leHBhbmRDb250ZW50XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzLmhvdGVsRGV0YWlsKVxyXG4gICAgICAgIC8vbGV0IGhvdGVsRGV0YWlsID0gdGhpcy5wcm9wcy5ob3RlbERldGFpbDtcclxuICAgICAgICBsZXQgaG90ZWxEZXRhaWwgPSB0aGlzLnN0YXRlLmhvdGVsRGV0YWlsO1xyXG4gICAgICAgIGxldCBiYW5uZXJJbWFnZXMgPSB0aGlzLnN0YXRlLmJhbm5lckltYWdlcyB8fCBbXTtcclxuXHJcblxyXG4gICAgICAgIGxldCBnYWxsZXJ5SW1hZ2VzID0gdGhpcy5zdGF0ZS5nYWxsZXJ5SW1hZ2VzIHx8IFtdO1xyXG4gICAgICAgIGxldCBzdGFydERhdGUgPSB0aGlzLnN0YXRlLnN0YXJ0RGF0ZTtcclxuICAgICAgICBsZXQgZW5kRGF0ZSA9IHRoaXMuc3RhdGUuZW5kRGF0ZTtcclxuXHJcbiAgICAgICAgbGV0IGhvdGVsX3Jvb21zID0gdGhpcy5zdGF0ZS5ob3RlbF9yb29tcztcclxuICAgICAgICBsZXQgZ2VuZXJhbF9mYWNpbGl0aWVzID0gIGhvdGVsRGV0YWlsID8gaG90ZWxEZXRhaWwuaG90ZWxfZmFjaWxpdGllcyA6IFtdO1xyXG4gICAgICAgIGxldCBob3RlbGZhY2lsaXRpZXMgPSBob3RlbERldGFpbCA/IGhvdGVsRGV0YWlsLmhvdGVsZmFjaWxpdGllcyA6IFtdO1xyXG4gICAgICAgIGxldCByb29tVHlwZXMgPSB0aGlzLnN0YXRlLnJvb21UeXBlcyB8fCBbXTtcclxuXHJcbiAgICAgICAgbGV0IHNlbGVjdGVkUm9vbXMgPSB0aGlzLnN0YXRlLnNlbGVjdGVkUm9vbXMgfHwgW107XHJcbiAgICAgICAgbGV0IHNwUmVxdWVzdHMgPSB0aGlzLnN0YXRlLnNwUmVxdWVzdHMgfHwgW107XHJcbiAgICAgICAgbGV0IHNlbGVjdGVkU3BSZXFJZHMgPSB0aGlzLnN0YXRlLnNlbGVjdGVkU3BSZXFJZHMgfHwgW107XHJcbiAgICAgICAgbGV0IHNlbGVjdGVkU3BSZXFzID0gdGhpcy5zdGF0ZS5zZWxlY3RlZFNwUmVxcyB8fCBbXTtcclxuXHJcbiAgICAgICAgbGV0IHRvdGFsX2Nvc3QgPTA7XHJcbiAgICAgICAgbGV0IHRvdGFsX2dzdCA9MDtcclxuICAgICAgICBpZihzZWxlY3RlZFJvb21zLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgZm9yKHZhciBpPTA7IGk8c2VsZWN0ZWRSb29tcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdG90YWxfY29zdCArPSAocGFyc2VGbG9hdChzZWxlY3RlZFJvb21zW2ldLnJvb21fcHJpY2UpICogcGFyc2VJbnQoc2VsZWN0ZWRSb29tc1tpXS5xdHkpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHNlbGVjdGVkU3BSZXFzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgZm9yKHZhciBpPTA7IGk8c2VsZWN0ZWRTcFJlcXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmKHNlbGVjdGVkU3BSZXFzW2ldLmNhdGVnb3J5ID09PSAncGF5YWJsZScpIHtcclxuICAgICAgICAgICAgICAgICAgICB0b3RhbF9jb3N0ICs9IHBhcnNlRmxvYXQoc2VsZWN0ZWRTcFJlcXNbaV0ucmF0ZSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0b3RhbF9nc3QgPSAodG90YWxfY29zdCoxMCkvMTAwO1xyXG4gICAgICAgIGxldCBncmFuZF90b3RhbCA9IHRvdGFsX2Nvc3QrIHRvdGFsX2dzdDtcclxuICAgICAgICAvL2dyYW5kX3RvdGFsID0gZ3JhbmRfdG90YWw+MD8gZ3JhbmRfdG90YWwudG9GaXhlZCgyKTonJztcclxuICAgICAgICBsZXQgcmF6b3JHcmFuZFRvdGFsID0gZ3JhbmRfdG90YWwqMTAwO1xyXG5cclxuICAgICAgICBsZXQgaW52YWxpZEZpZWxkcyA9IHRoaXMuc3RhdGUuaW52YWxpZEZpZWxkcyB8fCBbXTtcclxuICAgICAgICBjb25zb2xlLmxvZyhpbnZhbGlkRmllbGRzKVxyXG5cclxuICAgICAgICBsZXQgaG90ZWxIaWdobGlnaHRzID0gdGhpcy5zdGF0ZS5ob3RlbEhpZ2hsaWdodHMgfHwgW107XHJcbiAgICAgICAgbGV0IGhvdGVsUG9saWNpZXMgPSB0aGlzLnN0YXRlLmhvdGVsUG9saWNpZXMgfHwgW107XHJcblxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhzZWxlY3RlZFNwUmVxcylcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyLXBhZ2VcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPEhvdGVsTmF2YmFyICBzY3JvbGxUb1NlY3Rpb249e3RoaXMuc2Nyb2xsVG9TZWN0aW9ufS8+XHJcbiAgICAgICAgICAgICAgICAgICAge2hvdGVsRGV0YWlsICYmXHJcbiAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZGV0YWlscy1iYW5ubmVyXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJvdXNlbC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcm91c2VsLXRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT57aG90ZWxEZXRhaWwuaG90ZWxfbmFtZX08L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibG9jYXRpb25cIj57aG90ZWxEZXRhaWwuYWRkcmVzc308L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRlbnRTbGlkZXIgaW1hZ2VzPXtiYW5uZXJJbWFnZXN9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5zZWFyY2hTdGVwICE9PSAyICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImJvb2tpbmctY29udGFpbmVyIHN0aWNreVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvb2tpbmctcGFuZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib29raW5nLXBhbmVsLWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9va2luZy1vcHRpb25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXRlLXBpY2tlci1wYW5lbFwiPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEYXRlUmFuZ2VQaWNrZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0RGF0ZT17c3RhcnREYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kRGF0ZT17ZW5kRGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU3RhcnREYXRlQ2hhbmdlPXt0aGlzLnNldFN0YXJ0RGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRW5kRGF0ZUNoYW5nZT17dGhpcy5zZXRFbmREYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluaW11bURhdGU9e25ldyBEYXRlKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5pbXVtTGVuZ3RoPXsxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0PSdkZC9NTS95eXl5J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxlPXtlbkdCfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KHtzdGFydERhdGVJbnB1dFByb3BzLCBlbmREYXRlSW5wdXRQcm9wcywgZm9jdXN9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RhdGUtcmFuZ2UnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17J2lucHV0JyArIChmb2N1cyA9PT0gU1RBUlRfREFURSA/ICcgLWZvY3VzZWQnIDogJycpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLnN0YXJ0RGF0ZUlucHV0UHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nU3RhcnQgZGF0ZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdkYXRlLXJhbmdlX2Fycm93Jy8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsnaW5wdXQnICsgKGZvY3VzID09PSBFTkRfREFURSA/ICcgLWZvY3VzZWQnIDogJycpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLmVuZERhdGVJbnB1dFByb3BzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0VuZCBkYXRlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9EYXRlUmFuZ2VQaWNrZXI+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlbGVjdC1wYW5lbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlbGVjdC1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cInJvb21zXCIgdmFsdWU9e3RoaXMuc3RhdGUucm9vbXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtpbnZhbGlkRmllbGRzLmluY2x1ZGVzKCdyb29tcycpID8gJ2Vycm9yLWZpZWxkJyA6ICcnfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5Sb29tczwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxXCI+MTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyXCI+Mjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIzXCI+Mzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI0XCI+NDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI1XCI+NTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI2XCI+Njwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI3XCI+Nzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI4XCI+ODwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI5XCI+OSs8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWxlY3QtYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJhZHVsdHNcIiB2YWx1ZT17dGhpcy5zdGF0ZS5hZHVsdHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtpbnZhbGlkRmllbGRzLmluY2x1ZGVzKCdhZHVsdHMnKSA/ICdlcnJvci1maWVsZCcgOiAnJ31gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+QWR1bHRzPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjFcIj4xPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjJcIj4yPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjNcIj4zPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjRcIj40PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjVcIj41PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjZcIj42PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjdcIj43PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjhcIj44PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjlcIj45Kzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlbGVjdC1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cImNoaWxkcmVuXCIgdmFsdWU9e3RoaXMuc3RhdGUuY2hpbGRyZW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtpbnZhbGlkRmllbGRzLmluY2x1ZGVzKCdjaGlsZHJlbicpID8gJ2Vycm9yLWZpZWxkJyA6ICcnfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5DaGlsZHJlbjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIwXCI+MDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxXCI+MTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyXCI+Mjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIzXCI+Mzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI0XCI+NDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI1XCI+NTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI2XCI+Njwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI3XCI+Nzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI4XCI+ODwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI5XCI+OSs8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5NQVhfQ0FQQUNJVFlfTVNHICE9PSAnJyAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlcnJvci1mbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5NQVhfQ0FQQUNJVFlfTVNHfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvb2tpbmctcGFuZWwtcmlnaHRcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvb2tpbmctYnV0dG9uLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJnZW5lcmFsLWJ0blwiIG9uQ2xpY2s9eygpID0+IHRoaXMuc2VhcmNoUm9vbXMoKX0+Qm9vayBOb3c8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHshdGhpcy5zdGF0ZS5pbml0U2VhcmNoICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm9vbS1zZWN0aW9uIGZhY2lsaXRpZXNcIiBpZD1cImhvdGVsLW92ZXJ2aWV3XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1Pk92ZXJ2aWV3PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZ2VuZXJhbC1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYWRkcmVzcy1zbS1pY29cIj57aG90ZWxEZXRhaWwuYWRkcmVzc308L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInBob25lLXNtLWljb1wiPntob3RlbERldGFpbC5waG9uZW5vfSAsIHtob3RlbERldGFpbC5tb2JpbGVub308L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpICBjbGFzc05hbWU9XCJtYWlsLXNtLWljb1wiPntob3RlbERldGFpbC5lbWFpbH08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BleHRyYS1jb250ZW50ICR7dGhpcy5zdGF0ZS5leHBhbmRDb250ZW50ID8gJyBhY3RpdmUnIDogJyd9YH0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVydmlldy1kZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sIDogaG90ZWxEZXRhaWwuaG90ZWxfZGVzY319IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aG90ZWxIaWdobGlnaHRzLmxlbmd0aCA+IDAgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWItaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5IaWdobGlnaHRzPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiaGlnaGxpZ2h0LXRhYlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aG90ZWxIaWdobGlnaHRzLm1hcChobCA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPntobC5oaWdobGlnaHRzfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvbGljeS1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3ViLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+SG90ZWwgUG9saWNpZXM8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkNoZWNrIEluIFRpbWU6IDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPntob3RlbERldGFpbCA/IGhvdGVsRGV0YWlsLmNoZWNraW4gOiAnJ308L3NwYW4+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkNoZWNrIE91dCBUaW1lOiA8c3BhbiBjbGFzc05hbWU9XCJmb250LWJvbGRcIj57aG90ZWxEZXRhaWwgPyBob3RlbERldGFpbC5jaGVja291dCA6ICcnfTwvc3Bhbj48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aG90ZWxQb2xpY2llcy5tYXAoaHAgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvbGljeS1ib3ggaW5kZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3ViLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PntocC5jYXRlZ29yeX08L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2hwLnBvbGljeS5tYXAocG9sID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57cG9sLnBvbGljeX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImNvbnRlbnQtaGlkZVwiIG9uQ2xpY2s9eygpPT4gdGhpcy50b2dnbGVDb250ZW50KCl9PlNob3cge3RoaXMuc3RhdGUuZXhwYW5kQ29udGVudCA/ICdsZXNzJyA6ICdtb3JlJ308L25hdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicm9vbS1zZWN0aW9uXCIgaWQ9XCJob3RlbC1yb29tc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5zZWFyY2hTdGVwID09PSAyID8gJ0Jvb2tpbmcgRGV0YWlscycgOiAnUm9vbXMnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g1PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuaW5pdFNlYXJjaCAmJiB0aGlzLnN0YXRlLnNlYXJjaFN0ZXAgPT09IDEgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ZXh0LWxpbmsgYmFja1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5iYWNrVG9EZXRhaWwoKX0+QmFjazwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmluaXRTZWFyY2ggJiZcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXZhaWxhYmxlLXJvb21zXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5zZWFyY2hTdGVwID09PSAxICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aG90ZWxfcm9vbXMubGVuZ3RoID09PSAwICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vLXJlc3VsdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb21pbmctc29vbi13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5ObyBIb3RlbHMgRm91bmQ8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5TZWFyY2ggQWdhaW4gZm9yIHJpZ2h0IHBsYWNlLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2hvdGVsX3Jvb21zLm1hcChyb29tID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvb21TZWFyY2hCbG9jayBpdGVtPXtyb29tfSBzZWxlY3RSb29tPXt0aGlzLnNlbGVjdFJvb219XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFJvb21zPXt0aGlzLnN0YXRlLnNlbGVjdGVkUm9vbXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFJvb21JZHM9e3RoaXMuc3RhdGUuc2VsZWN0ZWRSb29tSWRzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlUXR5PXt0aGlzLmNoYW5nZVF0eX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dGdWxsRGV0YWlsPXt0aGlzLnNob3dGdWxsRGV0YWlsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb29tLWJvb2stc3VibWl0XCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZ2VuZXJhbC1idG5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5jb250aW51ZVRvU3VtbWFyeSgpfT5Db250aW51ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5zZWFyY2hTdGVwID09PSAyICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1bW1hcnktdGFibGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+Um9vbXM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlF0eTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+UHJpY2U8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlRvdGFsIFByaWNlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD48L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZFJvb21zLm1hcChyb29tID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3VtbWFyeUl0ZW0gaXRlbT17cm9vbX0gc2VsZWN0Um9vbT17dGhpcy5zZWxlY3RSb29tfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkUm9vbXM9e3RoaXMuc3RhdGUuc2VsZWN0ZWRSb29tc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFJvb21JZHM9e3RoaXMuc3RhdGUuc2VsZWN0ZWRSb29tSWRzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZVF0eT17dGhpcy5jaGFuZ2VRdHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cInNwZWNpYWwtc2VydmljZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbHNwYW49XCI1XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5hdiBvbkNsaWNrPXsoKSA9PiB0aGlzLnNob3dTcGVjaWFsUmVxdWVzdHMoKX0gY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+QWRkIFNwZWNpYWwgUmVxdWVzdHMgKzwvbmF2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZFNwUmVxcy5sZW5ndGggPjAgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRTcFJlcXMuZmlsdGVyKHNwID0+IHNwLmNhdGVnb3J5ID09PSAncGF5YWJsZScpLm1hcChzcCA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cInNwZWNpYWwtc2VydmljZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xTcGFuPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57c3AudGl0bGV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPuKCuSB7c3AucmF0ZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJkZWxldGUtaXRlbVwiIG9uQ2xpY2s9eyhlKSA9PiB0aGlzLnJlbW92ZVNwKGUsc3Auc3BfaWQpfT48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3NlbGVjdGVkU3BSZXFzLmxlbmd0aCA+MCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFNwUmVxcy5maWx0ZXIoc3AgPT4gc3AuY2F0ZWdvcnkgPT09ICdub24gcGF5YWJsZScpLm1hcChzcCA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cInNwZWNpYWwtc2VydmljZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xTcGFuPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57c3AudGl0bGV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPuKCuSAwPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZGVsZXRlLWl0ZW1cIiBvbkNsaWNrPXsoZSkgPT4gdGhpcy5yZW1vdmVTcChlLHNwLnNwX2lkKX0+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPlRPVEFMPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJmb250LWJvbGRcIj7igrkge3RvdGFsX2Nvc3QudG9GaXhlZCgyKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+R1NUIDEwLjAwJTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+4oK5IHt0b3RhbF9nc3QudG9GaXhlZCgyKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPkdSQU5EIFRPVEFMPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJmb250LWJvbGRcIj7igrkge2dyYW5kX3RvdGFsLnRvRml4ZWQoMil9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY29sU3Bhbj1cIjVcIj5DaGVjay1pbiAmIENoZWNrLW91dDogPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb250LWJvbGRcIj57bW9tZW50KHRoaXMuc3RhdGUuY2hlY2tpbmRhdGUpLmZvcm1hdCgnREQgTU1NIFlZWVknKX0gLSB7bW9tZW50KHRoaXMuc3RhdGUuY2hlY2tvdXRkYXRlKS5mb3JtYXQoJ0REIE1NTSBZWVlZJyl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb24taGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PlBlcnNvbmFsIERldGFpbHM8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiZm9ybS1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5GaXJzdCBOYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiZmlyc3RuYW1lXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5maXJzdG5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGlucHV0LWZpZWxkICR7aW52YWxpZEZpZWxkcy5pbmNsdWRlcygnZmlyc3RuYW1lJykgPyAnZXJyb3ItZmllbGQnIDogJyd9YH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5MYXN0IE5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJsYXN0bmFtZVwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubGFzdG5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGlucHV0LWZpZWxkICR7aW52YWxpZEZpZWxkcy5pbmNsdWRlcygnbGFzdG5hbWUnKSA/ICdlcnJvci1maWVsZCcgOiAnJ31gfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkFkZHJlc3MgMTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImFkZHJlc3MxXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5hZGRyZXNzMX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgaW5wdXQtZmllbGQgJHtpbnZhbGlkRmllbGRzLmluY2x1ZGVzKCdhZGRyZXNzMScpID8gJ2Vycm9yLWZpZWxkJyA6ICcnfWB9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+QWRkcmVzcyAyPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiYWRkcmVzczJcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmFkZHJlc3MyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BpbnB1dC1maWVsZCAke2ludmFsaWRGaWVsZHMuaW5jbHVkZXMoJ2FkZHJlc3MyJykgPyAnZXJyb3ItZmllbGQnIDogJyd9YH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5DaXR5PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiY2l0eVwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuY2l0eX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgaW5wdXQtZmllbGQgJHtpbnZhbGlkRmllbGRzLmluY2x1ZGVzKCdjaXR5JykgPyAnZXJyb3ItZmllbGQnIDogJyd9YH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5TdGF0ZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInN0YXRlXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5zdGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgaW5wdXQtZmllbGQgJHtpbnZhbGlkRmllbGRzLmluY2x1ZGVzKCdzdGF0ZScpID8gJ2Vycm9yLWZpZWxkJyA6ICcnfWB9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+Q291bnRyeTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImNvdW50cnlcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmNvdW50cnl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGlucHV0LWZpZWxkICR7aW52YWxpZEZpZWxkcy5pbmNsdWRlcygnY291bnRyeScpID8gJ2Vycm9yLWZpZWxkJyA6ICcnfWB9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+UGluY29kZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInBpbmNvZGVcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnBpbmNvZGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGlucHV0LWZpZWxkICR7aW52YWxpZEZpZWxkcy5pbmNsdWRlcygncGluY29kZScpID8gJ2Vycm9yLWZpZWxkJyA6ICcnfWB9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+TW9iaWxlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGlucHV0LWZpZWxkICR7aW52YWxpZEZpZWxkcy5pbmNsdWRlcygnbW9iaWxlJykgPyAnZXJyb3ItZmllbGQnIDogJyd9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm1vYmlsZVwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubW9iaWxlfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkFkZGl0aW9uYWwgUGhvbmU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgaW5wdXQtZmllbGQgJHtpbnZhbGlkRmllbGRzLmluY2x1ZGVzKCdhZGRpdGlvbmFscGhvbmVudW1iZXInKSA/ICdlcnJvci1maWVsZCcgOiAnJ31gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYWRkaXRpb25hbHBob25lbnVtYmVyXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5hZGRpdGlvbmFscGhvbmVudW1iZXJ9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+RW1haWw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BpbnB1dC1maWVsZCAke2ludmFsaWRGaWVsZHMuaW5jbHVkZXMoJ2VtYWlsJykgPyAnZXJyb3ItZmllbGQnIDogJyd9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5lbWFpbH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGF5bWVudC13cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJnZW5lcmFsLWJ0biBncmV5XCIgb25DbGljaz17KCk9PiB0aGlzLmJhY2tUb0NhcnQoKX0+QmFjazwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZ2VuZXJhbC1idG5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHRoaXMuc2F2ZUJvb2tpbmcoZSwgZ3JhbmRfdG90YWwsIHRvdGFsX2Nvc3QsIDAuMDAsICcnLCB0b3RhbF9nc3QpfT5Db250aW51ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUbyBQYXltZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IXRoaXMuc3RhdGUuaW5pdFNlYXJjaCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm9vbS1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2hvdGVsX3Jvb21zLmxlbmd0aCA9PT0gMCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vLXJlc3VsdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+Um9vbXMgd2lsbCBiZSBhZGRlZCBzb29uPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2hvdGVsX3Jvb21zLm1hcChyb29tID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um9vbUJsb2NrIGl0ZW09e3Jvb219IHNob3dGdWxsRGV0YWlsPXt0aGlzLnNob3dGdWxsRGV0YWlsfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IXRoaXMuc3RhdGUuaW5pdFNlYXJjaCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiY29udGVudC1hcmVhIHRleHQtY29udGVudFwiIGlkPVwiaG90ZWwtZmFjaWxpdGllc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5GYWNpbGl0aWVzICYgQXR0cmFjdGlvbnM8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmZWF0dXJlLXdyYXBwZXIgdGhyZWUtcGVyLWNvbCBpbWFnZS10b3BcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHshaG90ZWxmYWNpbGl0aWVzIHx8IGhvdGVsZmFjaWxpdGllcy5sZW5ndGggPT09IDAgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5GYWNpbGl0aWVzIHdpbGwgYmUgYWRkZWQgc29vbi48L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtob3RlbGZhY2lsaXRpZXMgJiYgaG90ZWxmYWNpbGl0aWVzLmxlbmd0aCA+IDAgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2hvdGVsZmFjaWxpdGllcy5tYXAoKGZhYywgaW5kZXgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGYWNpbGl0eU5ld0Jsb2NrIGl0ZW09e2ZhY30gaW1nQWxpZ249e2luZGV4ICUgMiA9PT0gMSA/ICdsZWZ0JyA6ICdyaWdodCd9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicm9vbS1zZWN0aW9uXCIgaWQ9XCJob3RlbC1nYWxsZXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PkdhbGxlcnk8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdhbGxlcnkgZ2FsbGVyeUltYWdlcz17Z2FsbGVyeUltYWdlc30gLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPEZvb3RlciAvPlxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuc2hvd0Vycm9yICYmXHJcbiAgICAgICAgICAgICAgICA8QWxlcnRNb2RhbFxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGFsSGVhZGVyID0ge2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGFsRm9vdGVyID0ge3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kYWxUaXRsZSA9IFwiV2FybmluZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgbW9kYWxCb2R5ID0gXCJQbGVhc2Ugc2VsZWN0IHlvdXIgY2hvaWNlc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgbW9kYWxTdGF0dXM9e3RoaXMuc3RhdGUuc2hvd0Vycm9yfVxyXG4gICAgICAgICAgICAgICAgICAgIE9LQnV0dG9uPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgIENBTkNFTEJ1dHRvbj17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgT0tBY3Rpb249e3RoaXMuaGlkZUVycm9yfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnNob3dQcm9maWxlSW5mb0Vycm9yICYmXHJcbiAgICAgICAgICAgICAgICA8QWxlcnRNb2RhbFxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGFsSGVhZGVyID0ge2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGFsRm9vdGVyID0ge3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kYWxUaXRsZSA9IFwiUHJvZmlsZSBEZXRhaWxzXCJcclxuICAgICAgICAgICAgICAgICAgICBtb2RhbEJvZHkgPSBcIlBsZWFzZSBlbnRlciB5b3VyIHBlcnNvbmFsIGluZm9ybWF0aW9uIHRvIHByb2NlZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGFsU3RhdHVzPXt0aGlzLnN0YXRlLnNob3dQcm9maWxlSW5mb0Vycm9yfVxyXG4gICAgICAgICAgICAgICAgICAgIE9LQnV0dG9uPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgIENBTkNFTEJ1dHRvbj17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgT0tBY3Rpb249e3RoaXMuaGlkZVByb2ZpbGVJbmZvRXJyb3J9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuaXRlbVJlbW92YWxNZXNzYWdlICYmXHJcbiAgICAgICAgICAgICAgICA8QWxlcnRNb2RhbFxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGFsSGVhZGVyID0ge2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGFsRm9vdGVyID0ge3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kYWxUaXRsZSA9IFwiV2FybmluZyFcIlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGFsQm9keSA9IFwiQXJlIHlvdSBzdXJlIHRvIHJlbW92ZSB0aGlzIHJvb20/IFlvdSB3aWxsIGJlIHJlZGlyZWN0ZWQgdG8gdGhlIHJvb21zIGxpc3QuXCJcclxuICAgICAgICAgICAgICAgICAgICBtb2RhbFN0YXR1cz17dGhpcy5zdGF0ZS5pdGVtUmVtb3ZhbE1lc3NhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgT0tCdXR0b249e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgQ0FOQ0VMQnV0dG9uPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgIE9LQWN0aW9uPXt0aGlzLmVtcHR5Q2FydH1cclxuICAgICAgICAgICAgICAgICAgICBDQU5DRUxBY3Rpb249e3RoaXMuaGlkZUl0ZW1SZW1vdmFsTWVzc2FnZX1cclxuICAgICAgICAgICAgICAgICAgICBPS1RleHQgPSBcIk9LXCJcclxuICAgICAgICAgICAgICAgICAgICBDQU5DRUxUZXh0ID0gXCJDQU5DRUxcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5jYW5ub3RDb250aW51ZSAmJlxyXG4gICAgICAgICAgICAgICAgPEFsZXJ0TW9kYWxcclxuICAgICAgICAgICAgICAgICAgICBtb2RhbEhlYWRlciA9IHtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICBtb2RhbEZvb3RlciA9IHt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGFsVGl0bGUgPSBcIldhcm5pbmchXCJcclxuICAgICAgICAgICAgICAgICAgICBtb2RhbEJvZHkgPSB7dGhpcy5zdGF0ZS5jYW5ub3RDb250aW51ZU1lc3NhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kYWxTdGF0dXM9e3RoaXMuc3RhdGUuY2Fubm90Q29udGludWV9XHJcbiAgICAgICAgICAgICAgICAgICAgT0tCdXR0b249e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgQ0FOQ0VMQnV0dG9uPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICBPS0FjdGlvbj17dGhpcy5oaWRlQ2Fubm90Q29udGludWV9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnNob3dEZXRhaWxTdGF0dXMgJiZcclxuICAgICAgICAgICAgICAgIDxGdWxsV2lkdGhNb2RhbFxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGFsSGVhZGVyID0ge3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kYWxGb290ZXIgPSB7dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICBtb2RhbFRpdGxlID0ge2hvdGVsRGV0YWlsLmhvdGVsX25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kYWxCb2R5ID0gezxSb29tRGV0YWlsIHJvb21EZXRhaWw9e3RoaXMuc3RhdGUucm9vbURldGFpbH0gaGlkZUZ1bGxEZXRhaWw9e3RoaXMuaGlkZUZ1bGxEZXRhaWx9IC8+fVxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGFsU3RhdHVzPXt0aGlzLnN0YXRlLnNob3dEZXRhaWxTdGF0dXN9XHJcbiAgICAgICAgICAgICAgICAgICAgT0tCdXR0b249e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgQ0FOQ0VMQnV0dG9uPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICBPS0FjdGlvbj17dGhpcy5oaWRlRnVsbERldGFpbH1cclxuICAgICAgICAgICAgICAgICAgICBDQU5DRUxBY3Rpb249e3RoaXMuaGlkZUZ1bGxEZXRhaWx9XHJcbiAgICAgICAgICAgICAgICAgICAgT0tUZXh0ID0gXCJPS1wiXHJcbiAgICAgICAgICAgICAgICAgICAgQ0FOQ0VMVGV4dCA9IFwiQ0FOQ0VMXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuc2hvd1NwUmVxU3RhdCAmJlxyXG4gICAgICAgICAgICAgICAgPEFsZXJ0TW9kYWxcclxuICAgICAgICAgICAgICAgICAgICBtb2RhbEhlYWRlciA9IHtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICBtb2RhbEZvb3RlciA9IHt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGFsVGl0bGUgPSBcIldhcm5pbmchXCJcclxuICAgICAgICAgICAgICAgICAgICBtb2RhbEJvZHkgPSB7PEhvdGVsU3BSZXFMaXN0IHNwUmVxdWVzdHM9e3NwUmVxdWVzdHN9IHNlbGVjdGVkU3BSZXFJZHM9e3RoaXMuc3RhdGUuc2VsZWN0ZWRTcFJlcUlkc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkU3BSZXFzPXt0aGlzLnN0YXRlLnNlbGVjdGVkU3BSZXFzfSBoYW5kbGVTcFNlbGVjdGlvbj17dGhpcy5oYW5kbGVTcFNlbGVjdGlvbn0gLz59XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kYWxTdGF0dXM9e3RoaXMuc3RhdGUuc2hvd1NwUmVxU3RhdH1cclxuICAgICAgICAgICAgICAgICAgICBPS0J1dHRvbj17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICBDQU5DRUxCdXR0b249e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgIE9LQWN0aW9uPXt0aGlzLmhpZGVTcGVjaWFsUmVxdWVzdHN9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuc2hvd1BlbmRpbmdNZXNzYWdlICYmXHJcbiAgICAgICAgICAgICAgICA8QWxlcnRNb2RhbFxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGFsSGVhZGVyID0ge2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGFsRm9vdGVyID0ge3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kYWxUaXRsZSA9IFwiV2FybmluZyFcIlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGFsQm9keSA9IHtcIkJvb2tpbmcgaXMgdGVtcGVyb3JpbHkgdW5hdmFpbGFibGUgZHVlIHRvIENvdmlkLTE5LiBJdCB3aWxsIGJlIGF2YWlsYWJsZSBvbmx5IGZyb20gSnVseSAyMDIxIG9ud2FyZHMuIEZvciBmdXJ0aGVyIGluZm9ybWF0aW9uIHBsZWFzZSBzZW5kIGFuIGVtYWlsIHRvIGJvb2tpbmdAdXRoaG90ZWxzLmNvbSBvciBjYWxsICs5MSA5NzQ2ODM4ODgzLCs5MSA5NTY3MzM4ODg0LlwifVxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGFsU3RhdHVzPXt0aGlzLnN0YXRlLnNob3dQZW5kaW5nTWVzc2FnZX1cclxuICAgICAgICAgICAgICAgICAgICBPS0J1dHRvbj17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICBDQU5DRUxCdXR0b249e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgIE9LQWN0aW9uPXt0aGlzLmhpZGVQZW5kaW5nTWVzc2FnZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcclxuICAgIGhvdGVsRGF0YTpzdGF0ZS5Ib3RlbFJlZHVjZXIuaG90ZWxEYXRhLFxyXG4gICAvLyBmYWNpbGl0eURhdGE6c3RhdGUuSG90ZWxSZWR1Y2VyLmZhY2lsaXR5RGF0YSxcclxuICAgIGJvb2tpbmdEYXRhIDogc3RhdGUuSG90ZWxSZWR1Y2VyLmJvb2tpbmdEYXRhXHJcbn0pO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXHJcbiAgICBtYXBTdGF0ZVRvUHJvcHMsXHJcbiAgICB7XHJcblxyXG4gICAgICAgIHNlYXJjaFJvb21zIDogSG90ZWxBY3Rpb25zLnNlYXJjaFJvb21zLFxyXG4gICAgICAgIHNhdmVCb29raW5nIDogSG90ZWxBY3Rpb25zLnNhdmVCb29raW5nLFxyXG4gICAgICAgIGNvbmZpcm1Cb29raW5nIDogSG90ZWxBY3Rpb25zLmNvbmZpcm1Cb29raW5nLFxyXG4gICAgICAgIGdldEJhbm5lckltYWdlcyA6IEhvdGVsQWN0aW9ucy5nZXRCYW5uZXJJbWFnZXMsXHJcbiAgICAgICAgLy9nZXRIb3RlbEhpZ2hsaWdodHMgOiBIb3RlbEFjdGlvbnMuZ2V0SG90ZWxIaWdobGlnaHRzLFxyXG4gICAgICAgIGdldEhvdGVsUG9saWNpZXMgOiBIb3RlbEFjdGlvbnMuZ2V0SG90ZWxQb2xpY2llcyxcclxuICAgICAgICBnZXRTcFJlcXVlc3RzIDogSG90ZWxBY3Rpb25zLmdldFNwUmVxdWVzdHNcclxuICAgIH1cclxuKShIb3RlbERldGFpbFNsdWcpO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJTdXNwZW5zZSIsImxhenkiLCJ1c2VSb3V0ZXIiLCJGb290ZXIiLCJDb250ZW50U2xpZGVyIiwiZ2V0VXJsU2VnbWVudCIsImNvbm5lY3QiLCJIb3RlbEFjdGlvbnMiLCJlbkdCIiwiRGF0ZVJhbmdlUGlja2VyIiwiU1RBUlRfREFURSIsIkVORF9EQVRFIiwiUm9vbUJsb2NrIiwiUm9vbURldGFpbCIsIlJvb21TZWFyY2hCbG9jayIsIkZhY2lsaXR5TmV3QmxvY2siLCJTdW1tYXJ5SXRlbSIsIkFsZXJ0TW9kYWwiLCJtb21lbnQiLCJGdWxsV2lkdGhNb2RhbCIsIkhvdGVsTmF2YmFyIiwiSG90ZWxTcFJlcUxpc3QiLCJHYWxsZXJ5IiwiSU1BR0VfUEFUSCIsIkFQSSIsIkhvdGVsRGV0YWlsU2x1ZyIsImhvdGVsRGV0YWlsIiwiZ2FsbGVyeUltYWdlcyIsImhvdGVsX3Jvb21zIiwicm91dGVyIiwiaG90ZWxfdXJsIiwicXVlcnkiLCJjb25zb2xlIiwibG9nIiwiSG90ZWxEZXRhaWwiLCJwcm9wcyIsInNlY3Rpb24iLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJibG9jayIsImlubGluZSIsImRhdGUiLCJzZXRTdGF0ZSIsInN0YXJ0RGF0ZSIsImVuZERhdGUiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJuYW1lIiwiTUFYX0NBUEFDSVRZX0dFTkVSQUwiLCJzdGF0ZSIsInJvb21zIiwiYWR1bHRzIiwiY2hpbGRyZW4iLCJpbnZhbGlkRmllbGRzIiwicHVzaCIsImFkdWx0Q291bnQiLCJwYXJzZUludCIsIk1BWF9DQVBBQ0lUWV9NU0ciLCJsZW5ndGgiLCJwYXJhbXMiLCJzaG93RXJyb3IiLCJpbml0U2VhcmNoIiwic2VhcmNoU3RlcCIsInRvZGF5IiwidG9tb3Jyb3ciLCJyb29tIiwidHlwZSIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwic2VsZWN0ZWRSb29tcyIsInNlbGVjdGVkUm9vbUlkcyIsImluY2x1ZGVzIiwicm9vbWlkIiwiaXRlbVJlbW92YWxNZXNzYWdlIiwiaW5kZXgiLCJpbmRleE9mIiwic3BsaWNlIiwibWFwIiwiaXRlbSIsInF0eSIsImFkZFF0eSIsInN1YlF0eSIsInBlcnNvbk9jY3VwaWVkIiwidG90YWxSb29tcyIsImkiLCJvY2N1cGFuY3kiLCJtYXhfY2FwYWNpdHlfYWR1bHQiLCJleHRyYV9vY2N1cGFuY3kiLCJleHRyYWJlZCIsInRvdGFsX29jY3VwYW5jeSIsImNhbm5vdENvbnRpbnVlIiwiY2Fubm90Q29udGludWVNZXNzYWdlIiwicm9vbUlkIiwicm9vbWNvdW50Iiwic2VsZWN0Um9vbSIsImFtb3VudCIsInByaW5jaXBsZUFtb3VudCIsImRpc2NvdW50IiwicHJvZ3JhbV9kZXNjcmlwdGlvbiIsImdzdCIsImZpcnN0bmFtZSIsImxhc3RuYW1lIiwiYWRkcmVzczEiLCJhZGRyZXNzMiIsImNpdHkiLCJjb3VudHJ5IiwicGluY29kZSIsIm1vYmlsZSIsImFkZGl0aW9uYWxwaG9uZW51bWJlciIsImVtYWlsIiwiY2hlY2tpbmRhdGUiLCJmb3JtYXQiLCJjaGVja291dGRhdGUiLCJzdGFydCIsImVuZCIsIm5vT2ZEYXlzIiwiZHVyYXRpb24iLCJkaWZmIiwiYXNEYXlzIiwibm9PZnJvb21zIiwidGF4YW1vdW50Iiwic2VsZWN0ZWRTcFJlcXMiLCJib29rZWRSb29tcyIsImV4dHJhYmVkY291bnQiLCJyb29tX3ByaWNlIiwicGFyc2VGbG9hdCIsImhvdGVsX2lkIiwiSlNPTiIsInN0cmluZ2lmeSIsInNhdmVCb29raW5nIiwidG90YWxBbW91bnQiLCJzaG93UHJvZmlsZUluZm9FcnJvciIsInRoYXQiLCJvcHRpb25zIiwia2V5IiwiZGVzY3JpcHRpb24iLCJpbWFnZSIsImhhbmRsZXIiLCJyZXNwb25zZSIsIlBheW1lbnRJZCIsInJhem9ycGF5X3BheW1lbnRfaWQiLCJEYXRlIiwicGF5bWVudElkIiwiUGF5bWVudFVybCIsImJvb2tQYXJhbXMiLCJib29raW5nSWQiLCJib29raW5nRGF0YSIsImNvbmZpcm1Cb29raW5nIiwicHJlZmlsbCIsImNvbnRhY3QiLCJub3RlcyIsImFkZHJlc3MiLCJ0aGVtZSIsImNvbG9yIiwiaGlkZV90b3BiYXIiLCJyenAxIiwid2luZG93IiwiUmF6b3JwYXkiLCJvbiIsIm9wZW4iLCJpZCIsInJvb21MaXN0IiwiZmlsdGVyIiwic2hvd0RldGFpbFN0YXR1cyIsInJvb21EZXRhaWwiLCJzaG93U3BSZXFTdGF0Iiwic3AiLCJzZWxlY3RlZFNwUmVxSWRzIiwiY2hlY2tlZCIsInNwX2lkIiwic2hvd1BlbmRpbmdNZXNzYWdlIiwiZXhwYW5kQ29udGVudCIsInNldERhdGUiLCJnZXREYXRlIiwicm9vbVR5cGVzIiwiYmFubmVySW1hZ2VzIiwiaG90ZWxQb2xpY2llcyIsImhvdGVsSGlnaGxpZ2h0cyIsInNob3dTcGVjaWFsUmVxdWVzdHMiLCJzcFJlcXVlc3RzIiwic2NyaXB0IiwiY3JlYXRlRWxlbWVudCIsInNyYyIsImFzeW5jIiwiYm9keSIsImFwcGVuZENoaWxkIiwicHJldlByb3BzIiwicHJldlN0YXRlIiwic25hcHNob3QiLCJtYXhfb2NjdXBhbmN5IiwiaG90ZWxoaWdobGlnaHRzIiwiaG90ZWxwb2xpY2llcyIsInNwZWNpYWxyZXF1ZXN0IiwiZ2VuZXJhbF9mYWNpbGl0aWVzIiwiaG90ZWxfZmFjaWxpdGllcyIsImhvdGVsZmFjaWxpdGllcyIsInRvdGFsX2Nvc3QiLCJ0b3RhbF9nc3QiLCJjYXRlZ29yeSIsInJhdGUiLCJncmFuZF90b3RhbCIsInJhem9yR3JhbmRUb3RhbCIsInNjcm9sbFRvU2VjdGlvbiIsImhvdGVsX25hbWUiLCJzZXRTdGFydERhdGUiLCJzZXRFbmREYXRlIiwic3RhcnREYXRlSW5wdXRQcm9wcyIsImVuZERhdGVJbnB1dFByb3BzIiwiZm9jdXMiLCJoYW5kbGVDaGFuZ2UiLCJzZWFyY2hSb29tcyIsInBob25lbm8iLCJtb2JpbGVubyIsIl9faHRtbCIsImhvdGVsX2Rlc2MiLCJobCIsImhpZ2hsaWdodHMiLCJjaGVja2luIiwiY2hlY2tvdXQiLCJocCIsInBvbGljeSIsInBvbCIsInRvZ2dsZUNvbnRlbnQiLCJiYWNrVG9EZXRhaWwiLCJjaGFuZ2VRdHkiLCJzaG93RnVsbERldGFpbCIsImNvbnRpbnVlVG9TdW1tYXJ5IiwidGl0bGUiLCJyZW1vdmVTcCIsInRvRml4ZWQiLCJiYWNrVG9DYXJ0IiwiZmFjIiwiaGlkZUVycm9yIiwiaGlkZVByb2ZpbGVJbmZvRXJyb3IiLCJlbXB0eUNhcnQiLCJoaWRlSXRlbVJlbW92YWxNZXNzYWdlIiwiaGlkZUNhbm5vdENvbnRpbnVlIiwiaGlkZUZ1bGxEZXRhaWwiLCJoYW5kbGVTcFNlbGVjdGlvbiIsImhpZGVTcGVjaWFsUmVxdWVzdHMiLCJoaWRlUGVuZGluZ01lc3NhZ2UiLCJtYXBTdGF0ZVRvUHJvcHMiLCJob3RlbERhdGEiLCJIb3RlbFJlZHVjZXIiLCJnZXRCYW5uZXJJbWFnZXMiLCJnZXRIb3RlbFBvbGljaWVzIiwiZ2V0U3BSZXF1ZXN0cyJdLCJzb3VyY2VSb290IjoiIn0=