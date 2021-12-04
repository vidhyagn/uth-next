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

var HotelDetailSlug = function HotelDetailSlug(_ref) {
  _s();

  var hotelDetail = _ref.hotelDetail,
      galleryImages = _ref.galleryImages,
      hotel_rooms = _ref.hotel_rooms;
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter)();
  var slug = router.query.slug;
  console.log(hotelDetail);
  console.log(galleryImages);
  console.log(hotel_rooms);
  console.log(slug);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)(HotelDetail, {
    hotelDetail: hotelDetail[0],
    hotel_url: slug,
    galleryImages: galleryImages,
    hotel_rooms: hotel_rooms
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 106,
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
            lineNumber: 828,
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
                      lineNumber: 836,
                      columnNumber: 41
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("p", {
                      className: "location",
                      children: hotelDetail.address
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 837,
                      columnNumber: 41
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 835,
                    columnNumber: 37
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 834,
                  columnNumber: 33
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 833,
                columnNumber: 29
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)(_views_common_hotelSlider__WEBPACK_IMPORTED_MODULE_11__.default, {
                images: bannerImages
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 842,
                columnNumber: 29
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 831,
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
                          children: function children(_ref2) {
                            var startDateInputProps = _ref2.startDateInputProps,
                                endDateInputProps = _ref2.endDateInputProps,
                                focus = _ref2.focus;
                            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                              className: "date-range",
                              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("input", _objectSpread(_objectSpread({
                                className: 'input' + (focus === react_nice_dates__WEBPACK_IMPORTED_MODULE_15__.START_DATE ? ' -focused' : '')
                              }, startDateInputProps), {}, {
                                placeholder: "Start date"
                              }), void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 865,
                                columnNumber: 61
                              }, _this3), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("span", {
                                className: "date-range_arrow"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 870,
                                columnNumber: 61
                              }, _this3), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("input", _objectSpread(_objectSpread({
                                className: 'input' + (focus === react_nice_dates__WEBPACK_IMPORTED_MODULE_15__.END_DATE ? ' -focused' : '')
                              }, endDateInputProps), {}, {
                                placeholder: "End date"
                              }), void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 871,
                                columnNumber: 61
                              }, _this3)]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 864,
                              columnNumber: 57
                            }, _this3);
                          }
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 853,
                          columnNumber: 49
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 850,
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
                              lineNumber: 890,
                              columnNumber: 57
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("option", {
                              value: "1",
                              children: "1"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 891,
                              columnNumber: 57
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("option", {
                              value: "2",
                              children: "2"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 892,
                              columnNumber: 57
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("option", {
                              value: "3",
                              children: "3"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 893,
                              columnNumber: 57
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("option", {
                              value: "4",
                              children: "4"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 894,
                              columnNumber: 57
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("option", {
                              value: "5",
                              children: "5"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 895,
                              columnNumber: 57
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("option", {
                              value: "6",
                              children: "6"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 896,
                              columnNumber: 57
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("option", {
                              value: "7",
                              children: "7"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 897,
                              columnNumber: 57
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("option", {
                              value: "8",
                              children: "8"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 898,
                              columnNumber: 57
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("option", {
                              value: "9",
                              children: "9+"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 899,
                              columnNumber: 57
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 887,
                            columnNumber: 53
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 886,
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
                              lineNumber: 906,
                              columnNumber: 57
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("option", {
                              value: "1",
                              children: "1"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 907,
                              columnNumber: 57
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("option", {
                              value: "2",
                              children: "2"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 908,
                              columnNumber: 57
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("option", {
                              value: "3",
                              children: "3"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 909,
                              columnNumber: 57
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("option", {
                              value: "4",
                              children: "4"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 910,
                              columnNumber: 57
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("option", {
                              value: "5",
                              children: "5"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 911,
                              columnNumber: 57
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("option", {
                              value: "6",
                              children: "6"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 912,
                              columnNumber: 57
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("option", {
                              value: "7",
                              children: "7"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 913,
                              columnNumber: 57
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("option", {
                              value: "8",
                              children: "8"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 914,
                              columnNumber: 57
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("option", {
                              value: "9",
                              children: "9+"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 915,
                              columnNumber: 57
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 903,
                            columnNumber: 53
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 902,
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
                              lineNumber: 922,
                              columnNumber: 57
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("option", {
                              value: "0",
                              children: "0"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 923,
                              columnNumber: 57
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("option", {
                              value: "1",
                              children: "1"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 924,
                              columnNumber: 57
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("option", {
                              value: "2",
                              children: "2"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 925,
                              columnNumber: 57
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("option", {
                              value: "3",
                              children: "3"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 926,
                              columnNumber: 57
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("option", {
                              value: "4",
                              children: "4"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 927,
                              columnNumber: 57
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("option", {
                              value: "5",
                              children: "5"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 928,
                              columnNumber: 57
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("option", {
                              value: "6",
                              children: "6"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 929,
                              columnNumber: 57
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("option", {
                              value: "7",
                              children: "7"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 930,
                              columnNumber: 57
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("option", {
                              value: "8",
                              children: "8"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 931,
                              columnNumber: 57
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("option", {
                              value: "9",
                              children: "9+"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 932,
                              columnNumber: 57
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 919,
                            columnNumber: 53
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 918,
                          columnNumber: 49
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 885,
                        columnNumber: 45
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 849,
                      columnNumber: 41
                    }, this), this.state.MAX_CAPACITY_MSG !== '' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                      className: "error-fld",
                      children: this.state.MAX_CAPACITY_MSG
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 940,
                      columnNumber: 41
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 848,
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
                        lineNumber: 948,
                        columnNumber: 45
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 947,
                      columnNumber: 41
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 945,
                    columnNumber: 37
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 847,
                  columnNumber: 33
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 846,
                columnNumber: 29
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 845,
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
                    lineNumber: 960,
                    columnNumber: 37
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 959,
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
                      lineNumber: 964,
                      columnNumber: 41
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("li", {
                      className: "phone-sm-ico",
                      children: [hotelDetail.phoneno, " , ", hotelDetail.mobileno]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 965,
                      columnNumber: 41
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("li", {
                      className: "mail-sm-ico",
                      children: hotelDetail.email
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 966,
                      columnNumber: 41
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 963,
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
                        lineNumber: 972,
                        columnNumber: 45
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 971,
                      columnNumber: 41
                    }, this), hotelHighlights.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.Fragment, {
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                        className: "sub-header",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("h5", {
                          children: "Highlights"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 978,
                          columnNumber: 49
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 977,
                        columnNumber: 45
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("ul", {
                        className: "highlight-tab",
                        children: hotelHighlights.map(function (hl) {
                          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("li", {
                            children: hl.highlights
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 982,
                            columnNumber: 53
                          }, _this3);
                        })
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 980,
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
                          lineNumber: 991,
                          columnNumber: 49
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 990,
                        columnNumber: 45
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("p", {
                        children: ["Check In Time: ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("span", {
                          className: "font-bold",
                          children: hotelDetail ? hotelDetail.checkin : ''
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 993,
                          columnNumber: 63
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 993,
                        columnNumber: 45
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("p", {
                        children: ["Check Out Time: ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("span", {
                          className: "font-bold",
                          children: hotelDetail ? hotelDetail.checkout : ''
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 994,
                          columnNumber: 64
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 994,
                        columnNumber: 45
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 989,
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
                            lineNumber: 1000,
                            columnNumber: 53
                          }, _this3)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 999,
                          columnNumber: 49
                        }, _this3), hp.policy.map(function (pol) {
                          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("p", {
                            children: pol.policy
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 1003,
                            columnNumber: 53
                          }, _this3);
                        })]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 998,
                        columnNumber: 45
                      }, _this3);
                    })]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 969,
                    columnNumber: 37
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("nav", {
                    className: "content-hide",
                    onClick: function onClick() {
                      return _this3.toggleContent();
                    },
                    children: ["Show ", this.state.expandContent ? 'less' : 'more']
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 1010,
                    columnNumber: 37
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 962,
                  columnNumber: 33
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 958,
                columnNumber: 29
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 957,
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
                    lineNumber: 1020,
                    columnNumber: 37
                  }, this), this.state.initSearch && this.state.searchStep === 1 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("button", {
                    className: "text-link back",
                    onClick: function onClick() {
                      return _this3.backToDetail();
                    },
                    children: "Back"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 1025,
                    columnNumber: 37
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 1019,
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
                          lineNumber: 1040,
                          columnNumber: 49
                        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("p", {
                          children: "Search Again for right place."
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 1041,
                          columnNumber: 49
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 1039,
                        columnNumber: 45
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 1038,
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
                        lineNumber: 1046,
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
                        lineNumber: 1055,
                        columnNumber: 45
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 1053,
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
                              lineNumber: 1068,
                              columnNumber: 53
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("th", {
                              children: "Qty"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1069,
                              columnNumber: 53
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("th", {
                              children: "Price"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1070,
                              columnNumber: 53
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("th", {
                              children: "Total Price"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1071,
                              columnNumber: 53
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("th", {}, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1072,
                              columnNumber: 53
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 1067,
                            columnNumber: 49
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 1066,
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
                              lineNumber: 1077,
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
                                lineNumber: 1086,
                                columnNumber: 57
                              }, this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1085,
                              columnNumber: 53
                            }, this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 1084,
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
                                  lineNumber: 1094,
                                  columnNumber: 61
                                }, _this3)
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 1093,
                                columnNumber: 57
                              }, _this3), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("td", {
                                className: "font-bold",
                                children: ["\u20B9 ", sp.rate]
                              }, void 0, true, {
                                fileName: _jsxFileName,
                                lineNumber: 1096,
                                columnNumber: 57
                              }, _this3), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("td", {
                                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("button", {
                                  className: "delete-item",
                                  onClick: function onClick(e) {
                                    return _this3.removeSp(e, sp.sp_id);
                                  }
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 1098,
                                  columnNumber: 61
                                }, _this3)
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 1097,
                                columnNumber: 57
                              }, _this3)]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 1092,
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
                                  lineNumber: 1106,
                                  columnNumber: 61
                                }, _this3)
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 1105,
                                columnNumber: 57
                              }, _this3), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("td", {
                                className: "font-bold",
                                children: "\u20B9 0"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 1108,
                                columnNumber: 57
                              }, _this3), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("td", {
                                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("button", {
                                  className: "delete-item",
                                  onClick: function onClick(e) {
                                    return _this3.removeSp(e, sp.sp_id);
                                  }
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 1110,
                                  columnNumber: 61
                                }, _this3)
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 1109,
                                columnNumber: 57
                              }, _this3)]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 1104,
                              columnNumber: 53
                            }, _this3);
                          }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("tr", {
                            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("td", {}, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1116,
                              columnNumber: 53
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("td", {}, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1119,
                              columnNumber: 53
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("td", {
                              className: "font-bold",
                              children: "TOTAL"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1120,
                              columnNumber: 53
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("td", {
                              className: "font-bold",
                              children: ["\u20B9 ", total_cost.toFixed(2)]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 1121,
                              columnNumber: 53
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("td", {}, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1122,
                              columnNumber: 53
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 1115,
                            columnNumber: 49
                          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("tr", {
                            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("td", {}, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1125,
                              columnNumber: 53
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("td", {}, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1128,
                              columnNumber: 53
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("td", {
                              className: "font-bold",
                              children: "GST 10.00%"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1129,
                              columnNumber: 53
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("td", {
                              className: "font-bold",
                              children: ["\u20B9 ", total_gst.toFixed(2)]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 1130,
                              columnNumber: 53
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("td", {}, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1131,
                              columnNumber: 53
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 1124,
                            columnNumber: 49
                          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("tr", {
                            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("td", {}, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1135,
                              columnNumber: 53
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("td", {}, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1138,
                              columnNumber: 53
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("td", {
                              className: "font-bold",
                              children: "GRAND TOTAL"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1139,
                              columnNumber: 53
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("td", {
                              className: "font-bold",
                              children: ["\u20B9 ", grand_total.toFixed(2)]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 1140,
                              columnNumber: 53
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("td", {}, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1141,
                              columnNumber: 53
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 1134,
                            columnNumber: 49
                          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("tr", {
                            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("td", {
                              colSpan: "5",
                              children: ["Check-in & Check-out: ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("span", {
                                className: "font-bold",
                                children: [moment__WEBPACK_IMPORTED_MODULE_23___default()(this.state.checkindate).format('DD MMM YYYY'), " - ", moment__WEBPACK_IMPORTED_MODULE_23___default()(this.state.checkoutdate).format('DD MMM YYYY')]
                              }, void 0, true, {
                                fileName: _jsxFileName,
                                lineNumber: 1144,
                                columnNumber: 91
                              }, this)]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 1144,
                              columnNumber: 53
                            }, this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 1143,
                            columnNumber: 49
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 1075,
                          columnNumber: 49
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 1065,
                        columnNumber: 45
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 1064,
                      columnNumber: 41
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                      "class": "section-header",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("h5", {
                        children: "Personal Details"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 1153,
                        columnNumber: 45
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 1152,
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
                              lineNumber: 1160,
                              columnNumber: 57
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("input", {
                              type: "text",
                              name: "firstname",
                              onChange: this.handleChange,
                              value: this.state.firstname,
                              className: "input-field ".concat(invalidFields.includes('firstname') ? 'error-field' : '')
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1161,
                              columnNumber: 57
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 1159,
                            columnNumber: 53
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 1158,
                          columnNumber: 49
                        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                          className: "col-md-6",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                            className: "input-box",
                            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("label", {
                              children: "Last Name"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1168,
                              columnNumber: 57
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("input", {
                              type: "text",
                              name: "lastname",
                              onChange: this.handleChange,
                              value: this.state.lastname,
                              className: "input-field ".concat(invalidFields.includes('lastname') ? 'error-field' : '')
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1169,
                              columnNumber: 57
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 1167,
                            columnNumber: 53
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 1166,
                          columnNumber: 49
                        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                          className: "col-md-6",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                            className: "input-box",
                            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("label", {
                              children: "Address 1"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1176,
                              columnNumber: 57
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("input", {
                              type: "text",
                              name: "address1",
                              onChange: this.handleChange,
                              value: this.state.address1,
                              className: "input-field ".concat(invalidFields.includes('address1') ? 'error-field' : '')
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1177,
                              columnNumber: 57
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 1175,
                            columnNumber: 53
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 1174,
                          columnNumber: 49
                        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                          className: "col-md-6",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                            className: "input-box",
                            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("label", {
                              children: "Address 2"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1184,
                              columnNumber: 57
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("input", {
                              type: "text",
                              name: "address2",
                              onChange: this.handleChange,
                              value: this.state.address2,
                              className: "input-field ".concat(invalidFields.includes('address2') ? 'error-field' : '')
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1185,
                              columnNumber: 57
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 1183,
                            columnNumber: 53
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 1182,
                          columnNumber: 49
                        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                          className: "col-md-3",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                            className: "input-box",
                            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("label", {
                              children: "City"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1192,
                              columnNumber: 57
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("input", {
                              type: "text",
                              name: "city",
                              onChange: this.handleChange,
                              value: this.state.city,
                              className: "input-field ".concat(invalidFields.includes('city') ? 'error-field' : '')
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1193,
                              columnNumber: 57
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 1191,
                            columnNumber: 53
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 1190,
                          columnNumber: 49
                        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                          className: "col-md-3",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                            className: "input-box",
                            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("label", {
                              children: "State"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1200,
                              columnNumber: 57
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("input", {
                              type: "text",
                              name: "state",
                              onChange: this.handleChange,
                              value: this.state.state,
                              className: "input-field ".concat(invalidFields.includes('state') ? 'error-field' : '')
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1201,
                              columnNumber: 57
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 1199,
                            columnNumber: 53
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 1198,
                          columnNumber: 49
                        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                          className: "col-md-3",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                            className: "input-box",
                            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("label", {
                              children: "Country"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1208,
                              columnNumber: 57
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("input", {
                              type: "text",
                              name: "country",
                              onChange: this.handleChange,
                              value: this.state.country,
                              className: "input-field ".concat(invalidFields.includes('country') ? 'error-field' : '')
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1209,
                              columnNumber: 57
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 1207,
                            columnNumber: 53
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 1206,
                          columnNumber: 49
                        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                          className: "col-md-3",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                            className: "input-box",
                            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("label", {
                              children: "Pincode"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1216,
                              columnNumber: 57
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("input", {
                              type: "text",
                              name: "pincode",
                              onChange: this.handleChange,
                              value: this.state.pincode,
                              className: "input-field ".concat(invalidFields.includes('pincode') ? 'error-field' : '')
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1217,
                              columnNumber: 57
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 1215,
                            columnNumber: 53
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 1214,
                          columnNumber: 49
                        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                          className: "col-md-4",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                            className: "input-box",
                            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("label", {
                              children: "Mobile"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1224,
                              columnNumber: 57
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("input", {
                              type: "number",
                              className: "input-field ".concat(invalidFields.includes('mobile') ? 'error-field' : ''),
                              name: "mobile",
                              onChange: this.handleChange,
                              value: this.state.mobile
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1225,
                              columnNumber: 57
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 1223,
                            columnNumber: 53
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 1222,
                          columnNumber: 49
                        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                          className: "col-md-4",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                            className: "input-box",
                            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("label", {
                              children: "Additional Phone"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1233,
                              columnNumber: 57
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("input", {
                              type: "number",
                              className: "input-field ".concat(invalidFields.includes('additionalphonenumber') ? 'error-field' : ''),
                              name: "additionalphonenumber",
                              onChange: this.handleChange,
                              value: this.state.additionalphonenumber
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1234,
                              columnNumber: 57
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 1232,
                            columnNumber: 53
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 1231,
                          columnNumber: 49
                        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                          className: "col-md-4",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                            className: "input-box",
                            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("label", {
                              children: "Email"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1242,
                              columnNumber: 57
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("input", {
                              type: "email",
                              className: "input-field ".concat(invalidFields.includes('email') ? 'error-field' : ''),
                              name: "email",
                              onChange: this.handleChange,
                              value: this.state.email
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1243,
                              columnNumber: 57
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 1241,
                            columnNumber: 53
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 1240,
                          columnNumber: 49
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 1157,
                        columnNumber: 45
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 1156,
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
                        lineNumber: 1253,
                        columnNumber: 45
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("button", {
                        className: "general-btn",
                        onClick: function onClick(e) {
                          return _this3.saveBooking(e, grand_total, total_cost, 0.00, '', total_gst);
                        },
                        children: "Continue To Payment"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 1254,
                        columnNumber: 45
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 1252,
                      columnNumber: 41
                    }, this)]
                  }, void 0, true)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 1033,
                  columnNumber: 33
                }, this), !this.state.initSearch && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                  className: "room-container",
                  children: [hotel_rooms.length === 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                    className: "no-result",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("p", {
                      children: "Rooms will be added soon"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 1269,
                      columnNumber: 41
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 1268,
                    columnNumber: 37
                  }, this), hotel_rooms.map(function (room) {
                    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)(_views_RoomBlock__WEBPACK_IMPORTED_MODULE_17__.default, {
                      item: room,
                      showFullDetail: _this3.showFullDetail
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 1274,
                      columnNumber: 41
                    }, _this3);
                  })]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 1266,
                  columnNumber: 33
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 1017,
                columnNumber: 29
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 1016,
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
                      lineNumber: 1288,
                      columnNumber: 41
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 1287,
                    columnNumber: 37
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                    className: "feature-wrapper three-per-col image-top",
                    children: [!hotelfacilities || hotelfacilities.length === 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("h5", {
                      children: "Facilities will be added soon."
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 1292,
                      columnNumber: 41
                    }, this), hotelfacilities && hotelfacilities.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.Fragment, {
                      children: hotelfacilities.map(function (fac, index) {
                        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)(_views_FacilityNewBlock__WEBPACK_IMPORTED_MODULE_20__.default, {
                          item: fac,
                          imgAlign: index % 2 === 1 ? 'left' : 'right'
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 1298,
                          columnNumber: 49
                        }, _this3);
                      })
                    }, void 0, false)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 1290,
                    columnNumber: 37
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 1286,
                  columnNumber: 33
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1285,
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
                      lineNumber: 1308,
                      columnNumber: 41
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 1307,
                    columnNumber: 37
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)(_views_common_Gallery__WEBPACK_IMPORTED_MODULE_27__.default, {
                    galleryImages: galleryImages
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 1310,
                    columnNumber: 37
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 1306,
                  columnNumber: 33
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1305,
                columnNumber: 29
              }, this)]
            }, void 0, true)]
          }, void 0, true), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)(_views_Footer__WEBPACK_IMPORTED_MODULE_10__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1323,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 826,
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
          lineNumber: 1330,
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
          lineNumber: 1342,
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
          lineNumber: 1354,
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
          lineNumber: 1370,
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
            lineNumber: 1387,
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
          lineNumber: 1383,
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
            lineNumber: 1403,
            columnNumber: 34
          }, this),
          modalStatus: this.state.showSpReqStat,
          OKButton: true,
          CANCELButton: false,
          OKAction: this.hideSpecialRequests
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1399,
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
          lineNumber: 1412,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 825,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaG90ZWwvW3NsdWddLjY3YjNjYjY1NDE3OGI4MTFlZjY0LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsSUFBTTBCLEdBQUcsR0FBRyx3RkFBWixFQUNBOztBQXdFQSxJQUFNQyxlQUFlLEdBQUUsU0FBakJBLGVBQWlCLE9BQWdEO0FBQUE7O0FBQUEsTUFBOUNDLFdBQThDLFFBQTlDQSxXQUE4QztBQUFBLE1BQWpDQyxhQUFpQyxRQUFqQ0EsYUFBaUM7QUFBQSxNQUFsQkMsV0FBa0IsUUFBbEJBLFdBQWtCO0FBRW5FLE1BQU1DLE1BQU0sR0FBRzNCLHNEQUFTLEVBQXhCO0FBQ0EsTUFBUTRCLElBQVIsR0FBaUJELE1BQU0sQ0FBQ0UsS0FBeEIsQ0FBUUQsSUFBUjtBQUNBRSxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWVAsV0FBWjtBQUNBTSxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWU4sYUFBWjtBQUNBSyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUwsV0FBWjtBQUNBSSxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUgsSUFBWjtBQUVBLHNCQUNLLCtEQUFDLFdBQUQ7QUFBYSxlQUFXLEVBQUVKLFdBQVcsQ0FBQyxDQUFELENBQXJDO0FBQTBDLGFBQVMsRUFBRUksSUFBckQ7QUFDYSxpQkFBYSxFQUFFSCxhQUQ1QjtBQUMyQyxlQUFXLEVBQUVDO0FBRHhEO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FETDtBQUlILENBYkQ7O0dBQU1IO1VBRWF2Qjs7O0tBRmJ1Qjs7SUFlQVM7Ozs7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Q0FBQ21NLFlBQU4sQ0FBbUJsRztBQUhILEdBQUw7QUFBQSxDQUE3Qjs7O0FBT0EsK0RBQWVoSixxREFBTyxDQUNsQmdQLGVBRGtCLEVBRWxCO0FBRUkvQixFQUFBQSxXQUFXLEVBQUdoTix3REFGbEI7QUFHSThILEVBQUFBLFdBQVcsRUFBRzlILHdEQUhsQjtBQUlJZ0osRUFBQUEsY0FBYyxFQUFHaEosMkRBSnJCO0FBS0lrUCxFQUFBQSxlQUFlLEVBQUdsUCw0REFMdEI7QUFNSTtBQUNBbVAsRUFBQUEsZ0JBQWdCLEVBQUduUCw2REFQdkI7QUFRSW9QLEVBQUFBLGFBQWEsRUFBR3BQLDBEQUEwQm9QO0FBUjlDLENBRmtCLENBQVAsQ0FZYmxPLGVBWmEsQ0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9ob3RlbC9bc2x1Z10uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCxTdXNwZW5zZSwgbGF6eSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uLy4uL3ZpZXdzL0Zvb3RlclwiO1xyXG5pbXBvcnQgQ29udGVudFNsaWRlciBmcm9tIFwiLi4vLi4vdmlld3MvY29tbW9uL2hvdGVsU2xpZGVyXCI7XHJcbmltcG9ydCB7Z2V0VXJsU2VnbWVudH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9DdXN0b21GdW5jdGlvbnNcIjtcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0ICogYXMgSG90ZWxBY3Rpb25zIGZyb20gXCIuLi8uLi9hY3Rpb25zL2hvdGVsXCI7XHJcbmltcG9ydCB7IGVuR0IgfSBmcm9tICdkYXRlLWZucy9sb2NhbGUnXHJcbmltcG9ydCB7IERhdGVSYW5nZVBpY2tlciwgU1RBUlRfREFURSwgRU5EX0RBVEUgfSBmcm9tICdyZWFjdC1uaWNlLWRhdGVzJ1xyXG5pbXBvcnQgJ3JlYWN0LW5pY2UtZGF0ZXMvYnVpbGQvc3R5bGUuY3NzJ1xyXG5pbXBvcnQgUm9vbUJsb2NrIGZyb20gXCIuLi8uLi92aWV3cy9Sb29tQmxvY2tcIjtcclxuaW1wb3J0IFJvb21EZXRhaWwgZnJvbSBcIi4uLy4uL3ZpZXdzL1Jvb21EZXRhaWxcIjtcclxuaW1wb3J0IFJvb21TZWFyY2hCbG9jayBmcm9tIFwiLi4vLi4vdmlld3MvUm9vbVNlYXJjaEJsb2NrXCI7XHJcbmltcG9ydCBGYWNpbGl0eU5ld0Jsb2NrIGZyb20gXCIuLi8uLi92aWV3cy9GYWNpbGl0eU5ld0Jsb2NrXCI7XHJcbmltcG9ydCBTdW1tYXJ5SXRlbSBmcm9tIFwiLi4vLi4vdmlld3MvU3VtbWFyeUl0ZW1cIjtcclxuaW1wb3J0IEFsZXJ0TW9kYWwgZnJvbSBcIi4uLy4uL3ZpZXdzL2NvbW1vbi9BbGVydE1vZGFsXCI7XHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuaW1wb3J0IEZ1bGxXaWR0aE1vZGFsIGZyb20gXCIuLi8uLi92aWV3cy9jb21tb24vRnVsbFdpZHRoTW9kYWxcIjtcclxuaW1wb3J0IEhvdGVsTmF2YmFyIGZyb20gXCIuLi8uLi92aWV3cy9Ib3RlbE5hdmJhclwiO1xyXG5pbXBvcnQgSG90ZWxTcFJlcUxpc3QgZnJvbSBcIi4uLy4uL3ZpZXdzL0hvdGVsU3BSZXFMaXN0XCI7XHJcbmltcG9ydCBHYWxsZXJ5IGZyb20gXCIuLi8uLi92aWV3cy9jb21tb24vR2FsbGVyeVwiO1xyXG5pbXBvcnQge0lNQUdFX1BBVEgsIEFQSV9QQVRIfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XHJcbmNvbnN0IEFQSSA9ICdodHRwczovL3J6cF90ZXN0X3JuRUg1STROSHVhR0p4OlNQbXE2cUtRRUx4eExsWVRuUDdZNWR5akBhcGkucmF6b3JwYXkuY29tL3YxL3BheW1lbnRzLyc7XHJcbi8vVGhpcyBnZXRzIGNhbGxlZCBldmVyeSB0aW1lIHRoZSBwYWdlIGlzIGNhbGxlZFxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuICAgIGNvbnN0IHtwYXJhbXN9ID0gY29udGV4dDtcclxuICAgIGNvbnN0IHtzbHVnfSA9IHBhcmFtcztcclxuICAgIC8vaG90ZWwgZGV0YWlsXHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke0FQSV9QQVRIfWhvdGVsL2hvdGVsZGV0YWlsc3YyP3VybD0ke3NsdWd9YCk7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICBsZXQgaG90ZWxEZXRhaWwgPSByZXMucmVzdWx0cyA/IHJlcy5yZXN1bHRzLmRhdGE6IFtdO1xyXG4gICAgY29uc29sZS5sb2coaG90ZWxEZXRhaWwpXHJcblxyXG4gICAgLy9Sb29tIFR5cGVzXHJcbiAgICBjb25zdCByZXNwb25zZTIgPSBhd2FpdCBmZXRjaChgJHtBUElfUEFUSH1ob3RlbC9yb29tdHlwZWApO1xyXG4gICAgY29uc3QgcmVzMiA9IGF3YWl0IHJlc3BvbnNlMi5qc29uKCk7XHJcbiAgICBsZXQgcm9vbVR5cGVzID0gcmVzMi5yZXN1bHRzID8gcmVzMi5yZXN1bHRzLmRhdGE6IFtdO1xyXG4gICAgbGV0IGJhbm5lckltYWdlcyA9IFtdO1xyXG4gICAgbGV0IGhvdGVsX3Jvb21zID0gW107XHJcbiAgICBsZXQgZ2FsbGVyeUltYWdlcyA9W107XHJcbiAgICBsZXQgaG90ZWxfaWQgPSAnJ1xyXG4gICAgaWYoaG90ZWxEZXRhaWwpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhob3RlbERldGFpbClcclxuICAgICAgICBob3RlbF9pZCA9IGhvdGVsRGV0YWlsLmhvdGVsX2lkO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGhvdGVsX2lkKVxyXG4gICAgICAgIGxldCBwYXJhbXMgPSB7aG90ZWxfaWQgOiBob3RlbF9pZH07XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UzID0gYXdhaXQgZmV0Y2goYCR7QVBJX1BBVEh9aG90ZWwvaG90ZWxiYW5uZXJpbWFnZXNgKTtcclxuICAgICAgICBjb25zdCByZXMzID0gYXdhaXQgcmVzcG9uc2UzLmpzb24oKTtcclxuICAgICAgICBiYW5uZXJJbWFnZXMgPSByZXMzLnJlc3VsdHMgPyByZXMzLnJlc3VsdHMuZGF0YTogW107XHJcblxyXG4gICAgICAgIGhvdGVsX3Jvb21zID0gaG90ZWxEZXRhaWwuaG90ZWxfcm9vbXMgfHwgW107XHJcbiAgICAgICAgaG90ZWxfcm9vbXMgPSBob3RlbF9yb29tcy5tYXAoaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIGl0ZW0ucXR5ID0gMFxyXG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBnYWxsZXJ5SW1hZ2VzID0gaG90ZWxEZXRhaWwuaG90ZWxfaW1hZ2VzIHx8IFtdO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBwcm9wcyA6IHtcclxuICAgICAgICAgICAgICAgIGhvdGVsRGV0YWlsIDogW2hvdGVsRGV0YWlsXSxcclxuICAgICAgICAgICAgICAgIGhvdGVsX3Jvb21zIDogaG90ZWxfcm9vbXMsXHJcbiAgICAgICAgICAgICAgICBnYWxsZXJ5SW1hZ2VzIDogZ2FsbGVyeUltYWdlcyxcclxuICAgICAgICAgICAgICAgLy8gTUFYX0NBUEFDSVRZX0dFTkVSQUwgOiBob3RlbERldGFpbC5tYXhfb2NjdXBhbmN5LFxyXG4gICAgICAgICAgICAgICAgLy9ob3RlbEhpZ2hsaWdodHMgOiBob3RlbERldGFpbC5ob3RlbGhpZ2hsaWdodHMsXHJcbiAgICAgICAgICAgICAgICAvL2hvdGVsUG9saWNpZXMgOiBob3RlbERldGFpbC5ob3RlbHBvbGljaWVzLFxyXG4gICAgICAgICAgICAgICAgLy9zcFJlcXVlc3RzIDogaG90ZWxEZXRhaWwuc3BlY2lhbHJlcXVlc3RcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL3RoaXMucHJvcHMuZ2V0QmFubmVySW1hZ2VzKHBhcmFtcyk7XHJcbiAgICAvLyBsZXQgaG90ZWxfcm9vbXMgPSB0aGlzLnByb3BzLmhvdGVsRGV0YWlsLmhvdGVsX3Jvb21zIHx8IFtdO1xyXG4gICAgLy8gaG90ZWxfcm9vbXMgPSBob3RlbF9yb29tcy5tYXAoaXRlbSA9PiB7XHJcbiAgICAvLyAgICAgaXRlbS5xdHkgPSAwXHJcbiAgICAvLyAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICAvLyB9KTtcclxuICAgIC8vIGxldCBnYWxsZXJ5SW1hZ2VzID0gdGhpcy5wcm9wcy5ob3RlbERldGFpbC5ob3RlbF9pbWFnZXMgfHwgW107XHJcbiAgICAvLyB0aGlzLnNldFN0YXRlKHtcclxuICAgIC8vICAgICBob3RlbF9pZCA6IGhvdGVsX2lkLFxyXG4gICAgLy8gICAgIGhvdGVsRGV0YWlsIDogaG90ZWxEZXRhaWwsXHJcbiAgICAvLyAgICAgaG90ZWxfcm9vbXMgOiBob3RlbF9yb29tcyxcclxuICAgIC8vICAgICBnYWxsZXJ5SW1hZ2VzIDogZ2FsbGVyeUltYWdlcyxcclxuICAgIC8vICAgICBNQVhfQ0FQQUNJVFlfR0VORVJBTCA6IGhvdGVsRGV0YWlsLm1heF9vY2N1cGFuY3ksXHJcbiAgICAvLyAgICAgaG90ZWxIaWdobGlnaHRzIDogaG90ZWxEZXRhaWwuaG90ZWxoaWdobGlnaHRzLFxyXG4gICAgLy8gICAgIGhvdGVsUG9saWNpZXMgOiBob3RlbERldGFpbC5ob3RlbHBvbGljaWVzLFxyXG4gICAgLy8gICAgIHNwUmVxdWVzdHMgOiBob3RlbERldGFpbC5zcGVjaWFscmVxdWVzdFxyXG4gICAgLy8gfSwgZnVuY3Rpb24oKSB7XHJcbiAgICAvL1xyXG4gICAgLy8gfSlcclxuXHJcblxyXG59XHJcblxyXG5cclxuXHJcbmNvbnN0IEhvdGVsRGV0YWlsU2x1ZyA9KHtob3RlbERldGFpbCwgZ2FsbGVyeUltYWdlcywgaG90ZWxfcm9vbXMgfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgICBjb25zdCB7IHNsdWcgfSA9IHJvdXRlci5xdWVyeTtcclxuICAgIGNvbnNvbGUubG9nKGhvdGVsRGV0YWlsKVxyXG4gICAgY29uc29sZS5sb2coZ2FsbGVyeUltYWdlcylcclxuICAgIGNvbnNvbGUubG9nKGhvdGVsX3Jvb21zKVxyXG4gICAgY29uc29sZS5sb2coc2x1ZylcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgIDxIb3RlbERldGFpbCBob3RlbERldGFpbD17aG90ZWxEZXRhaWxbMF19IGhvdGVsX3VybD17c2x1Z31cclxuICAgICAgICAgICAgICAgICAgICAgIGdhbGxlcnlJbWFnZXM9e2dhbGxlcnlJbWFnZXN9IGhvdGVsX3Jvb21zPXtob3RlbF9yb29tc30vPlxyXG4gICAgKVxyXG59XHJcblxyXG5jbGFzcyBIb3RlbERldGFpbCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICBsZXQgdG9kYXkgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIGxldCB0b21vcnJvdyA9IG5ldyBEYXRlKHRvZGF5KTtcclxuICAgICAgICB0b21vcnJvdy5zZXREYXRlKHRvbW9ycm93LmdldERhdGUoKSArIDEpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHRvZGF5IDogdG9kYXksXHJcbiAgICAgICAgICAgIHRvbW9ycm93IDogdG9tb3Jyb3csXHJcbiAgICAgICAgICAgIHN0YXJ0RGF0ZSA6IHRvZGF5LFxyXG4gICAgICAgICAgICBlbmREYXRlIDogdG9tb3Jyb3csXHJcbiAgICAgICAgICAgIGNoZWNraW5kYXRlIDogdG9kYXksXHJcbiAgICAgICAgICAgIGNoZWNrb3V0ZGF0ZSA6IHRvbW9ycm93LFxyXG4gICAgICAgICAgICByb29tcyA6ICcnLFxyXG4gICAgICAgICAgICBhZHVsdHMgOiAnJyxcclxuICAgICAgICAgICAgY2hpbGRyZW4gOiAnJyxcclxuICAgICAgICAgICAgcm9vbVR5cGVzIDogW10sXHJcbiAgICAgICAgICAgIGluaXRTZWFyY2ggOiBmYWxzZSxcclxuICAgICAgICAgICAgc2VhcmNoU3RlcCA6IDEsXHJcbiAgICAgICAgICAgIHNlbGVjdGVkUm9vbXMgOiBbXSxcclxuICAgICAgICAgICAgc2VsZWN0ZWRSb29tSWRzIDogW10sXHJcbiAgICAgICAgICAgIGhvdGVsX3Jvb21zIDogW10sXHJcbiAgICAgICAgICAgIGludmFsaWRGaWVsZHMgOiBbXSxcclxuICAgICAgICAgICAgc2hvd0Vycm9yIDogZmFsc2UsXHJcbiAgICAgICAgICAgIGZpcnN0bmFtZSA6JycsXHJcbiAgICAgICAgICAgIGxhc3RuYW1lIDonJyxcclxuICAgICAgICAgICAgYWRkcmVzczEgOiAnJyxcclxuICAgICAgICAgICAgYWRkcmVzczIgOiAnJyxcclxuICAgICAgICAgICAgY2l0eSA6ICcnLFxyXG4gICAgICAgICAgICBzdGF0ZSA6ICcnLFxyXG4gICAgICAgICAgICBwaW5jb2RlIDogJycsXHJcbiAgICAgICAgICAgIGNvdW50cnkgOiAnJyxcclxuICAgICAgICAgICAgbW9iaWxlIDogJycsXHJcbiAgICAgICAgICAgIGFkZGl0aW9uYWxwaG9uZW51bWJlciA6ICcnLFxyXG4gICAgICAgICAgICBlbWFpbCA6ICcnLFxyXG4gICAgICAgICAgICBzaG93UHJvZmlsZUluZm9FcnJvciA6IGZhbHNlLFxyXG4gICAgICAgICAgICBib29raW5nSWQgOiAnJyxcclxuICAgICAgICAgICAgdG90YWxBbW91bnQgOiAwLFxyXG4gICAgICAgICAgICBwcmluY2lwbGVBbW91bnQgOiAwLFxyXG4gICAgICAgICAgICBkaXNjb3VudCA6IDAsXHJcbiAgICAgICAgICAgIHByb2dyYW1fZGVzY3JpcHRpb24gOiAnJyxcclxuICAgICAgICAgICAgZ3N0IDogMCxcclxuICAgICAgICAgICAgTUFYX0NBUEFDSVRZX01TRyA6ICcnLFxyXG4gICAgICAgICAgICBpdGVtUmVtb3ZhbE1lc3NhZ2UgOiBmYWxzZSxcclxuICAgICAgICAgICAgYmFubmVySW1hZ2VzIDogW10sXHJcbiAgICAgICAgICAgIGNhbm5vdENvbnRpbnVlTWVzc2FnZSA6ZmFsc2UsXHJcbiAgICAgICAgICAgIGdhbGxlcnlJbWFnZXMgOiBbXSxcclxuICAgICAgICAgICAgc2hvd0RldGFpbFN0YXR1cyA6IGZhbHNlLFxyXG4gICAgICAgICAgICBob3RlbFBvbGljaWVzIDogW10sXHJcbiAgICAgICAgICAgIGhvdGVsSGlnaGxpZ2h0cyA6IFtdLFxyXG4gICAgICAgICAgICBNQVhfQ0FQQUNJVFlfR0VORVJBTCA6IDEsXHJcbiAgICAgICAgICAgIHNob3dTcGVjaWFsUmVxdWVzdHMgOiBmYWxzZSxcclxuICAgICAgICAgICAgc3BSZXF1ZXN0cyA6IFtdLFxyXG4gICAgICAgICAgICBzZWxlY3RlZFNwUmVxcyA6W10sXHJcbiAgICAgICAgICAgIHNlbGVjdGVkU3BSZXFJZHMgOiBbXSxcclxuICAgICAgICAgICAgc2hvd1BlbmRpbmdNZXNzYWdlIDogZmFsc2UsXHJcbiAgICAgICAgICAgIGV4cGFuZENvbnRlbnQgOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xyXG4gICAgICAgIHNjcmlwdC5zcmMgPSAnaHR0cHM6Ly9jaGVja291dC5yYXpvcnBheS5jb20vdjEvY2hlY2tvdXQuanMnO1xyXG4gICAgICAgIHNjcmlwdC5hc3luYyA9IHRydWU7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBob3RlbF91cmwgOiB0aGlzLnByb3BzLmhvdGVsX3VybFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgc2Nyb2xsVG9TZWN0aW9uID0gKHNlY3Rpb24pID0+IHtcclxuICAgICAgICBpZihzZWN0aW9uICE9PSAnJykge1xyXG4gICAgICAgICAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNlY3Rpb24pO1xyXG4gICAgICAgICAgICBpZiAoZWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5zY3JvbGxJbnRvVmlldyh7YmVoYXZpb3I6IFwic21vb3RoXCIsIGJsb2NrOiBcInN0YXJ0XCIsIGlubGluZTogXCJuZWFyZXN0XCJ9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlLCBzbmFwc2hvdCkge1xyXG5cclxuICAgICAgICBpZih0aGlzLnByb3BzLmhvdGVsRGV0YWlsICE9PSBwcmV2UHJvcHMuaG90ZWxEZXRhaWwpIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgaG90ZWxfaWQgOiB0aGlzLnByb3BzLmhvdGVsRGV0YWlsLmhvdGVsX2lkLFxyXG4gICAgICAgICAgICAgICAgaG90ZWxEZXRhaWwgOiB0aGlzLnByb3BzLmhvdGVsRGV0YWlsLFxyXG4gICAgICAgICAgICAgICAgaG90ZWxfcm9vbXMgOiB0aGlzLnByb3BzLmhvdGVsX3Jvb21zLFxyXG4gICAgICAgICAgICAgICAgZ2FsbGVyeUltYWdlcyA6IHRoaXMucHJvcHMuZ2FsbGVyeUltYWdlcyxcclxuICAgICAgICAgICAgICAgIE1BWF9DQVBBQ0lUWV9HRU5FUkFMIDogdGhpcy5wcm9wcy5ob3RlbERldGFpbC5tYXhfb2NjdXBhbmN5LFxyXG4gICAgICAgICAgICAgICAgaG90ZWxIaWdobGlnaHRzIDogdGhpcy5wcm9wcy5ob3RlbERldGFpbC5ob3RlbGhpZ2hsaWdodHMsXHJcbiAgICAgICAgICAgICAgICBob3RlbFBvbGljaWVzIDogdGhpcy5wcm9wcy5ob3RlbERldGFpbC5ob3RlbHBvbGljaWVzLFxyXG4gICAgICAgICAgICAgICAgc3BSZXF1ZXN0cyA6IHRoaXMucHJvcHMuaG90ZWxEZXRhaWwuc3BlY2lhbHJlcXVlc3RcclxuICAgICAgICAgICAgfSwgZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gaWYodGhpcy5wcm9wcy5mYWNpbGl0eURhdGEucm9vbVR5cGVzICE9PSBwcmV2UHJvcHMuZmFjaWxpdHlEYXRhLnJvb21UeXBlcykge1xyXG4gICAgICAgIC8vICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAvLyAgICAgICAgIHJvb21UeXBlcyA6IHRoaXMucHJvcHMuZmFjaWxpdHlEYXRhLnJvb21UeXBlc1xyXG4gICAgICAgIC8vICAgICB9KVxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBpZih0aGlzLnByb3BzLmJvb2tpbmdEYXRhLmJvb2tpbmdJZCAhPT0gcHJldlByb3BzLmJvb2tpbmdEYXRhLmJvb2tpbmdJZCkge1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIC8vICAgICAgICAgYm9va2luZ0lkIDogdGhpcy5wcm9wcy5ib29raW5nRGF0YS5ib29raW5nSWRcclxuICAgICAgICAvLyAgICAgfSwgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmNvbnRpbnVlVG9QYXltZW50KClcclxuICAgICAgICAvLyAgICAgfSlcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gaWYodGhpcy5wcm9wcy5ib29raW5nRGF0YS5ib29raW5nUmVzdWx0ICE9PSBwcmV2UHJvcHMuYm9va2luZ0RhdGEuYm9va2luZ1Jlc3VsdCkge1xyXG4gICAgICAgIC8vICAgICBsZXQgUGF5bWVudFVybCA9IGBodHRwczovL3V0aGRldi5uZXZlcmJlZm9yZWhvbGlkYXlzLmNvbS9wYXltZW50LXN1Y2Nlc3M/cnBfaWQ9YCt0aGlzLnN0YXRlLlBheW1lbnRJZCtgJnJhbXQ9YCt0aGlzLnN0YXRlLnRvdGFsQW1vdW50K2AmbW9iaWxlPWArdGhpcy5zdGF0ZS5tb2JpbGUrYCZlbWFpbD1gK3RoaXMuc3RhdGUuZW1haWwrYCZtZXRob2Q9Q2FyZCBwYXltZW50JmRhdGU9YCttb21lbnQodGhpcy5zdGF0ZS50b2RheSkuZm9ybWF0KCdERCBNTU0sIFlZWVknKTtcclxuICAgICAgICAvLyAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBQYXltZW50VXJsO1xyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgLy8gaWYodGhpcy5wcm9wcy5ob3RlbERhdGEuYmFubmVySW1hZ2VzICE9PSBwcmV2UHJvcHMuaG90ZWxEYXRhLmJhbm5lckltYWdlcykge1xyXG4gICAgICAgIC8vICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAvLyAgICAgICAgIGJhbm5lckltYWdlcyA6IHRoaXMucHJvcHMuaG90ZWxEYXRhLmJhbm5lckltYWdlc1xyXG4gICAgICAgIC8vICAgICB9KVxyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXRTdGFydERhdGUgPSAoZGF0ZSkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBzdGFydERhdGUgOiBkYXRlXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHNldEVuZERhdGUgPSAoZGF0ZSkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBlbmREYXRlIDogZGF0ZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC52YWx1ZSlcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgW2UudGFyZ2V0Lm5hbWVdIDogZS50YXJnZXQudmFsdWVcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHNlYXJjaFJvb21zID0gKCkgPT4ge1xyXG5cclxuXHJcbiAgICAgICAgbGV0IE1BWF9DQVBBQ0lUWV9HRU5FUkFMID0gdGhpcy5zdGF0ZS5NQVhfQ0FQQUNJVFlfR0VORVJBTDtcclxuICAgICAgICBsZXQgc3RhcnREYXRlID0gdGhpcy5zdGF0ZS5zdGFydERhdGU7XHJcbiAgICAgICAgbGV0IGVuZERhdGUgPSB0aGlzLnN0YXRlLnN0YXJ0RGF0ZTtcclxuICAgICAgICBsZXQgcm9vbXMgPSB0aGlzLnN0YXRlLnJvb21zO1xyXG4gICAgICAgIGxldCBhZHVsdHMgPSB0aGlzLnN0YXRlLmFkdWx0cztcclxuICAgICAgICBsZXQgY2hpbGRyZW4gPSB0aGlzLnN0YXRlLmNoaWxkcmVuO1xyXG4gICAgICAgIGxldCBpbnZhbGlkRmllbGRzID0gW107XHJcbiAgICAgICAgaWYoc3RhcnREYXRlID09PSAnJykge1xyXG4gICAgICAgICAgICBpbnZhbGlkRmllbGRzLnB1c2goJ3N0YXJ0RGF0ZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihlbmREYXRlID09PSAnJykge1xyXG4gICAgICAgICAgICBpbnZhbGlkRmllbGRzLnB1c2goJ2VuZERhdGUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYocm9vbXMgPT09ICcnKSB7XHJcbiAgICAgICAgICAgIGludmFsaWRGaWVsZHMucHVzaCgncm9vbXMnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoYWR1bHRzID09PSAnJykge1xyXG4gICAgICAgICAgICBpbnZhbGlkRmllbGRzLnB1c2goJ2FkdWx0cycpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGFkdWx0Q291bnQgPSBwYXJzZUludChyb29tcykgKiBwYXJzZUludChNQVhfQ0FQQUNJVFlfR0VORVJBTCk7XHJcbiAgICAgICAgaWYocGFyc2VJbnQoYWR1bHRzKSA+IGFkdWx0Q291bnQpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBNQVhfQ0FQQUNJVFlfTVNHIDogXCJTb3JyeS4gV2UgYXJlIGFsbG93aW5nIGEgbWF4aW11bSBvZiBcIitNQVhfQ0FQQUNJVFlfR0VORVJBTCtcIiBtZW1iZXJzIGluIGEgcm9vbVwiXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGludmFsaWRGaWVsZHMubGVuZ3RoID09PSAwICkge1xyXG5cclxuICAgICAgICAgICAgbGV0IHBhcmFtcyA9IHtzdGFydERhdGU6IHRoaXMuc3RhdGUuc3RhcnREYXRlLCBlbmREYXRlIDogdGhpcy5zdGF0ZS5lbmREYXRlLCByb29tcyA6IHRoaXMuc3RhdGUucm9vbXMsXHJcbiAgICAgICAgICAgICAgICBhZHVsdHMgOiB0aGlzLnN0YXRlLmFkdWx0cywgY2hpbGRyZW4gOiB0aGlzLnN0YXRlLmNoaWxkcmVufTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2hvd0Vycm9yIDogZmFsc2UsIGluaXRTZWFyY2ggOiAgdHJ1ZSwgc2VhcmNoU3RlcCA6IDEsIHN0YXJ0RGF0ZTogdGhpcy5zdGF0ZS5zdGFydERhdGUsIGVuZERhdGUgOiB0aGlzLnN0YXRlLmVuZERhdGUsIHJvb21zIDogdGhpcy5zdGF0ZS5yb29tcyxcclxuICAgICAgICAgICAgICAgIGFkdWx0cyA6IHRoaXMuc3RhdGUuYWR1bHRzLCBjaGlsZHJlbiA6IHRoaXMuc3RhdGUuY2hpbGRyZW4sIGludmFsaWRGaWVsZHMgOiBpbnZhbGlkRmllbGRzfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93RXJyb3IgOiB0cnVlLCBzdGFydERhdGU6IHRoaXMuc3RhdGUuc3RhcnREYXRlLCBlbmREYXRlIDogdGhpcy5zdGF0ZS5lbmREYXRlLCByb29tcyA6IHRoaXMuc3RhdGUucm9vbXMsXHJcbiAgICAgICAgICAgICAgICBhZHVsdHMgOiB0aGlzLnN0YXRlLmFkdWx0cywgY2hpbGRyZW4gOiB0aGlzLnN0YXRlLmNoaWxkcmVuLCBpbnZhbGlkRmllbGRzIDogaW52YWxpZEZpZWxkc30pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVzZXRTZWFyY2ggPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2hvd0Vycm9yIDogZmFsc2UsIGluaXRTZWFyY2ggOiAgZmFsc2UsIHNlYXJjaFN0ZXAgOiAwLCBzdGFydERhdGU6IHRoaXMuc3RhdGUudG9kYXksIGVuZERhdGUgOiB0aGlzLnN0YXRlLnRvbW9ycm93LCByb29tcyA6ICcnLFxyXG4gICAgICAgICAgICBhZHVsdHMgOiAnJywgY2hpbGRyZW4gOiAnJywgaW52YWxpZEZpZWxkcyA6IFtdfSlcclxuICAgIH1cclxuICAgIGJhY2tUb0RldGFpbCA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtpbml0U2VhcmNoIDogIGZhbHNlfSlcclxuICAgIH1cclxuICAgIGJhY2tUb0NhcnQgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2VhcmNoU3RlcCA6ICAxfSlcclxuICAgIH1cclxuXHJcbiAgICBzZWxlY3RSb29tID0gKHJvb20sIHR5cGUsZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgbGV0IHNlbGVjdGVkUm9vbXMgPSB0aGlzLnN0YXRlLnNlbGVjdGVkUm9vbXM7XHJcbiAgICAgICAgbGV0IHNlbGVjdGVkUm9vbUlkcyA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRSb29tSWRzO1xyXG5cclxuICAgICAgICBsZXQgaG90ZWxfcm9vbXMgPSB0aGlzLnN0YXRlLmhvdGVsX3Jvb21zXHJcbiAgICAgICAgaWYodHlwZSA9PT0gJ2FkZCcgfHwgdHlwZSA9PT0gJ2Nob29zZScpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coc2VsZWN0ZWRSb29tSWRzKVxyXG4gICAgICAgICAgICBpZighc2VsZWN0ZWRSb29tSWRzLmluY2x1ZGVzKHJvb20ucm9vbWlkKSl7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZFJvb21JZHMucHVzaChyb29tLnJvb21pZClcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkUm9vbXMucHVzaChyb29tKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJvb20pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHR5cGUgPT09ICdyZW1vdmUnKSB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuc3RhdGUuc2VhcmNoU3RlcCA9PT0gMiAmJiBzZWxlY3RlZFJvb21zLmxlbmd0aCA9PT0xKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1SZW1vdmFsTWVzc2FnZSA6IHRydWVcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZihzZWxlY3RlZFJvb21JZHMuaW5jbHVkZXMocm9vbS5yb29taWQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gc2VsZWN0ZWRSb29tSWRzLmluZGV4T2Yocm9vbS5yb29taWQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFJvb21JZHMuc3BsaWNlKGluZGV4LCAxKVxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkUm9vbXMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgICAgICAgICBob3RlbF9yb29tcyA9IGhvdGVsX3Jvb21zLm1hcChpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoaXRlbS5yb29taWQgPT09IHJvb20ucm9vbWlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnF0eSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBzZWxlY3RlZFJvb21JZHMgOnNlbGVjdGVkUm9vbUlkcyxcclxuICAgICAgICAgICAgc2VsZWN0ZWRSb29tcyA6IHNlbGVjdGVkUm9vbXMsXHJcbiAgICAgICAgICAgIGhvdGVsX3Jvb21zIDogaG90ZWxfcm9vbXNcclxuICAgICAgICB9LCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBpZih0eXBlICE9PSAncmVtb3ZlJykge1xyXG4gICAgICAgICAgICAgICAgKHR5cGUgPT09ICdhZGQnIHx8IHR5cGUgPT09ICdjaG9vc2UnICkgPyB0aGlzLmFkZFF0eShyb29tKSA6IHRoaXMuc3ViUXR5KHJvb20pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICB9KVxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgY29udGludWVUb1N1bW1hcnkgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IGFkdWx0Q291bnQgPSBwYXJzZUludCh0aGlzLnN0YXRlLmFkdWx0cyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coYWR1bHRDb3VudCk7XHJcbiAgICAgICAgbGV0IHBlcnNvbk9jY3VwaWVkID0gMDtcclxuICAgICAgICBsZXQgc2VsZWN0ZWRSb29tcyA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRSb29tcztcclxuICAgICAgICBsZXQgdG90YWxSb29tcyA9IDA7XHJcbiAgICAgICAgaWYoc2VsZWN0ZWRSb29tcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGZvcih2YXIgaT0wOyBpPHNlbGVjdGVkUm9vbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBxdHkgPSBzZWxlY3RlZFJvb21zW2ldLnF0eTtcclxuICAgICAgICAgICAgICAgIHRvdGFsUm9vbXMgKz0gcGFyc2VJbnQocXR5KTtcclxuICAgICAgICAgICAgICAgIGxldCBvY2N1cGFuY3kgPSBwYXJzZUludChzZWxlY3RlZFJvb21zW2ldLm1heF9jYXBhY2l0eV9hZHVsdCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgZXh0cmFfb2NjdXBhbmN5ID0gc2VsZWN0ZWRSb29tc1tpXS5leHRyYWJlZCA9PT0gJ3llcyc/ICAxOiAwO1xyXG4gICAgICAgICAgICAgICAgbGV0IHRvdGFsX29jY3VwYW5jeSA9IG9jY3VwYW5jeSArIGV4dHJhX29jY3VwYW5jeTtcclxuICAgICAgICAgICAgICAgIHBlcnNvbk9jY3VwaWVkICs9IHBhcnNlSW50KHF0eSkgKnRvdGFsX29jY3VwYW5jeTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoc2VsZWN0ZWRSb29tcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBjYW5ub3RDb250aW51ZSA6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBjYW5ub3RDb250aW51ZU1lc3NhZ2UgOiBcIlBsZWFzZSBzZWxlY3QgYXRsZWFzdCBhIHJvb20gdG8gcHJvY2VlZFwiXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYoYWR1bHRDb3VudCA+IHBlcnNvbk9jY3VwaWVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgY2Fubm90Q29udGludWUgOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgY2Fubm90Q29udGludWVNZXNzYWdlIDogXCJTb3JyeS5cIisgYWR1bHRDb3VudCtcIiBwZXJzb25zIGNhbm5vdCBiZSBvY2N1cGllZCBpbiBcIit0b3RhbFJvb21zK1wiIHJvb21zXCJcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuc3RhdGUuc2VsZWN0ZWRSb29tcy5sZW5ndGggPjApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaFN0ZXAgOjJcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgYWRkUXR5ID0gKHJvb20pID0+IHtcclxuICAgICAgICBsZXQgc2VsZWN0ZWRSb29tcyA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRSb29tcztcclxuICAgICAgICBsZXQgc2VsZWN0ZWRSb29tSWRzID0gdGhpcy5zdGF0ZS5zZWxlY3RlZFJvb21JZHM7XHJcbiAgICAgICAgbGV0IHJvb21JZCA9IHJvb20ucm9vbWlkO1xyXG4gICAgICAgIHNlbGVjdGVkUm9vbXMgPSBzZWxlY3RlZFJvb21zLm1hcChpdGVtID0+IHtcclxuICAgICAgICAgICAgaWYoaXRlbS5yb29taWQgPT09IHJvb21JZCkge1xyXG4gICAgICAgICAgICAgICAgaWYoaXRlbS5xdHkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZihpdGVtLnF0eSA8IGl0ZW0ucm9vbWNvdW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ucXR5ID0gcGFyc2VJbnQoaXRlbS5xdHkpICsxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0ucXR5ID0gMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgc2VsZWN0ZWRSb29tcyA6IHNlbGVjdGVkUm9vbXMsXHJcbiAgICAgICAgICAgIHNlbGVjdGVkUm9vbUlkcyA6IHNlbGVjdGVkUm9vbUlkc1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBzdWJRdHkgPSAocm9vbSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJvb20pXHJcbiAgICAgICAgbGV0IHNlbGVjdGVkUm9vbXMgPSB0aGlzLnN0YXRlLnNlbGVjdGVkUm9vbXM7XHJcbiAgICAgICAgbGV0IHNlbGVjdGVkUm9vbUlkcyA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRSb29tSWRzO1xyXG4gICAgICAgIGxldCByb29tSWQgPSByb29tLnJvb21pZDtcclxuXHJcbiAgICAgICAgaWYocm9vbS5xdHkgJiYgcm9vbS5xdHkgPT09IDEpIHtcclxuICAgICAgICAgICAgaWYodGhpcy5zdGF0ZS5zZWFyY2hTdGVwID09PSAyICYmIHNlbGVjdGVkUm9vbXMubGVuZ3RoID09PTEpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbVJlbW92YWxNZXNzYWdlIDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJvb20ucXR5ID0gMDtcclxuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IHNlbGVjdGVkUm9vbUlkcy5pbmRleE9mKHJvb20ucm9vbWlkKTtcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkUm9vbUlkcy5zcGxpY2UoaW5kZXgsMSlcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkUm9vbXMuc3BsaWNlKGluZGV4LDEpXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgc2VsZWN0ZWRSb29tcyA9IHNlbGVjdGVkUm9vbXMubWFwKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYoaXRlbS5yb29taWQgPT09IHJvb21JZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0ucXR5ID0gKGl0ZW0ucXR5ICYmIGl0ZW0ucXR5ID4wKSA/IHBhcnNlSW50KGl0ZW0ucXR5KSAtMSA6MDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkUm9vbXMgOiBzZWxlY3RlZFJvb21zLFxyXG4gICAgICAgICAgICBzZWxlY3RlZFJvb21JZHMgOiBzZWxlY3RlZFJvb21JZHNcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZVF0eSA9IChyb29tLGUpID0+IHtcclxuICAgICAgICBsZXQgcXR5ID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgbGV0IHNlbGVjdGVkUm9vbXMgPSB0aGlzLnN0YXRlLnNlbGVjdGVkUm9vbXM7XHJcbiAgICAgICAgbGV0IHNlbGVjdGVkUm9vbUlkcyA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRSb29tSWRzO1xyXG4gICAgICAgIGxldCByb29tSWQgPSByb29tLnJvb21pZDtcclxuICAgICAgICBzZWxlY3RlZFJvb21zID0gc2VsZWN0ZWRSb29tcy5tYXAoaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIGlmKGl0ZW0ucm9vbWlkID09PSByb29tSWQpIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0ucXR5ID0gKGl0ZW0ucXR5ICYmIGl0ZW0ucXR5ID4wKSA/IHBhcnNlSW50KGl0ZW0ucXR5KSAtMSA6IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLnNlbGVjdFJvb20ocm9vbSlcclxuICAgIH1cclxuXHJcbiAgICBzYXZlQm9va2luZyA9IChlLCBhbW91bnQsIHByaW5jaXBsZUFtb3VudCwgZGlzY291bnQsIHByb2dyYW1fZGVzY3JpcHRpb24sIGdzdCkgPT4ge1xyXG5cclxuXHJcbiAgICAgICAgbGV0IGZpcnN0bmFtZSA9IHRoaXMuc3RhdGUuZmlyc3RuYW1lO1xyXG4gICAgICAgIGxldCBsYXN0bmFtZSA9IHRoaXMuc3RhdGUubGFzdG5hbWU7XHJcbiAgICAgICAgbGV0IGFkZHJlc3MxID0gdGhpcy5zdGF0ZS5hZGRyZXNzMTtcclxuICAgICAgICBsZXQgYWRkcmVzczIgPSB0aGlzLnN0YXRlLmFkZHJlc3MyO1xyXG4gICAgICAgIGxldCBjaXR5ID0gdGhpcy5zdGF0ZS5jaXR5O1xyXG4gICAgICAgIGxldCBzdGF0ZSA9IHRoaXMuc3RhdGUuc3RhdGU7XHJcbiAgICAgICAgbGV0IGNvdW50cnkgPSB0aGlzLnN0YXRlLmNvdW50cnk7XHJcbiAgICAgICAgbGV0IHBpbmNvZGUgPSB0aGlzLnN0YXRlLnBpbmNvZGU7XHJcbiAgICAgICAgbGV0IG1vYmlsZSA9IHRoaXMuc3RhdGUubW9iaWxlO1xyXG4gICAgICAgIGxldCBhZGRpdGlvbmFscGhvbmVudW1iZXIgPSB0aGlzLnN0YXRlLmFkZGl0aW9uYWxwaG9uZW51bWJlcjtcclxuICAgICAgICBsZXQgZW1haWwgPSB0aGlzLnN0YXRlLmVtYWlsO1xyXG4gICAgICAgIGxldCBpbnZhbGlkRmllbGRzID0gW107XHJcbiAgICAgICAgaWYoZmlyc3RuYW1lID09PSAnJykge1xyXG4gICAgICAgICAgICBpbnZhbGlkRmllbGRzLnB1c2goJ2ZpcnN0bmFtZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihsYXN0bmFtZSA9PT0gJycpIHtcclxuICAgICAgICAgICAgaW52YWxpZEZpZWxkcy5wdXNoKCdsYXN0bmFtZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihhZGRyZXNzMSA9PT0gJycpIHtcclxuICAgICAgICAgICAgaW52YWxpZEZpZWxkcy5wdXNoKCdhZGRyZXNzMScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihhZGRyZXNzMiA9PT0gJycpIHtcclxuICAgICAgICAgICAgaW52YWxpZEZpZWxkcy5wdXNoKCdhZGRyZXNzMicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihjaXR5ID09PSAnJykge1xyXG4gICAgICAgICAgICBpbnZhbGlkRmllbGRzLnB1c2goJ2NpdHknKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoc3RhdGUgPT09ICcnKSB7XHJcbiAgICAgICAgICAgIGludmFsaWRGaWVsZHMucHVzaCgnc3RhdGUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoY291bnRyeSA9PT0gJycpIHtcclxuICAgICAgICAgICAgaW52YWxpZEZpZWxkcy5wdXNoKCdjb3VudHJ5Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHBpbmNvZGUgPT09ICcnKSB7XHJcbiAgICAgICAgICAgIGludmFsaWRGaWVsZHMucHVzaCgncGluY29kZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihtb2JpbGUgPT09ICcnKSB7XHJcbiAgICAgICAgICAgIGludmFsaWRGaWVsZHMucHVzaCgnbW9iaWxlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGFkZGl0aW9uYWxwaG9uZW51bWJlciA9PT0gJycpIHtcclxuICAgICAgICAgICAgaW52YWxpZEZpZWxkcy5wdXNoKCdhZGRpdGlvbmFscGhvbmVudW1iZXInKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoZW1haWwgPT09ICcnKSB7XHJcbiAgICAgICAgICAgIGludmFsaWRGaWVsZHMucHVzaCgnZW1haWwnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKGludmFsaWRGaWVsZHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIGxldCBzZWxlY3RlZFJvb21zID0gdGhpcy5zdGF0ZS5zZWxlY3RlZFJvb21zO1xyXG4gICAgICAgICAgICBsZXQgY2hlY2tpbmRhdGUgPSBtb21lbnQodGhpcy5zdGF0ZS5zdGFydERhdGUpLmZvcm1hdCgneXl5eS1NTS1ERCcpO1xyXG4gICAgICAgICAgICBsZXQgY2hlY2tvdXRkYXRlID0gbW9tZW50KHRoaXMuc3RhdGUuZW5kRGF0ZSkuZm9ybWF0KCd5eXl5LU1NLUREJyk7XHJcbiAgICAgICAgICAgIGxldCBhZHVsdHMgPSB0aGlzLnN0YXRlLmFkdWx0cyB8fCAwO1xyXG4gICAgICAgICAgICBsZXQgY2hpbGRyZW4gPSB0aGlzLnN0YXRlLmNoaWxkcmVuIHx8IDA7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIHZhciBzdGFydCA9IG1vbWVudChjaGVja2luZGF0ZSwgXCJZWVlZLU1NLUREXCIpO1xyXG4gICAgICAgICAgICB2YXIgZW5kID0gbW9tZW50KGNoZWNrb3V0ZGF0ZSwgXCJZWVlZLU1NLUREXCIpO1xyXG5cclxuICAgICAgICAgICAgbGV0IG5vT2ZEYXlzID0gbW9tZW50LmR1cmF0aW9uKGVuZC5kaWZmKHN0YXJ0KSkuYXNEYXlzKCk7XHJcblxyXG4gICAgICAgICAgICBsZXQgbm9PZnJvb21zID0gdGhpcy5zdGF0ZS5yb29tcztcclxuICAgICAgICAgICAgbGV0IHRheGFtb3VudCA9IGdzdDtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHNlbGVjdGVkUm9vbXMpXHJcblxyXG4gICAgICAgICAgICBsZXQgc2VsZWN0ZWRTcFJlcXMgPSB0aGlzLnN0YXRlLnNlbGVjdGVkU3BSZXFzO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGxldCBib29rZWRSb29tcyA9IFtdO1xyXG5cclxuICAgICAgICAgICAgZm9yKGxldCBpPTA7IGk8c2VsZWN0ZWRSb29tcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHJvb20gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJyb29taWRcIiA6IHNlbGVjdGVkUm9vbXNbaV0ucm9vbWlkLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibm9vZmFkdWx0c1wiIDogIHNlbGVjdGVkUm9vbXNbaV0ubWF4X2NhcGFjaXR5X2FkdWx0LFxyXG4gICAgICAgICAgICAgICAgICAgIFwibm9vZmNoaWxkc1wiIDogIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJleHRyYWJlZFwiIDogIHNlbGVjdGVkUm9vbXNbaV0uZXh0cmFiZWRjb3VudCxcclxuICAgICAgICAgICAgICAgICAgICBcInByaWNlXCIgOiAgc2VsZWN0ZWRSb29tc1tpXS5yb29tX3ByaWNlLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZXh0cmFiZWRwcmljZVwiIDogIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0YXhhbW91bnRcIjogIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0b3RhbHByaWNlXCIgOiAgcGFyc2VGbG9hdChzZWxlY3RlZFJvb21zW2ldLnJvb21fcHJpY2UpICogbm9PZkRheXMsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBib29rZWRSb29tcy5wdXNoKHJvb20pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgcGFyYW1zID0ge1xyXG4gICAgICAgICAgICAgICAgXCJob3RlbF9pZFwiOiB0aGlzLnN0YXRlLmhvdGVsX2lkLFxyXG4gICAgICAgICAgICAgICAgXCJjaGVja2luZGF0ZVwiOiBjaGVja2luZGF0ZSxcclxuICAgICAgICAgICAgICAgIFwiY2hlY2tvdXRkYXRlXCI6IGNoZWNrb3V0ZGF0ZSxcclxuICAgICAgICAgICAgICAgIFwibm9vZmFkdWx0c1wiOiBhZHVsdHMsXHJcbiAgICAgICAgICAgICAgICBcIm5vb2ZjaGlsZHNcIjogY2hpbGRyZW4sXHJcbiAgICAgICAgICAgICAgICBcIm5vb2Zyb29tc1wiOiBub09mcm9vbXMsXHJcbiAgICAgICAgICAgICAgICBcInByaWNlXCIgOiBwcmluY2lwbGVBbW91bnQsXHJcbiAgICAgICAgICAgICAgICBcInRheGFtb3VudFwiOiB0YXhhbW91bnQsXHJcbiAgICAgICAgICAgICAgICBcInRvdGFscHJpY2VcIjogYW1vdW50LFxyXG4gICAgICAgICAgICAgICAgXCJmaXJzdG5hbWVcIjogZmlyc3RuYW1lLFxyXG4gICAgICAgICAgICAgICAgXCJsYXN0bmFtZVwiOiBsYXN0bmFtZSxcclxuICAgICAgICAgICAgICAgIFwiYWRkcmVzczFcIjogYWRkcmVzczEsXHJcbiAgICAgICAgICAgICAgICBcImFkZHJlc3MyXCI6IGFkZHJlc3MyLFxyXG4gICAgICAgICAgICAgICAgXCJjaXR5XCI6IGNpdHksXHJcbiAgICAgICAgICAgICAgICBcInN0YXRlXCI6IHN0YXRlLFxyXG4gICAgICAgICAgICAgICAgXCJjb3VudHJ5XCI6IGNvdW50cnksXHJcbiAgICAgICAgICAgICAgICBcInBpbmNvZGVcIjogcGluY29kZSxcclxuICAgICAgICAgICAgICAgIFwibW9iaWxlXCI6IG1vYmlsZSxcclxuICAgICAgICAgICAgICAgIFwiZW1haWxcIjogZW1haWwsXHJcbiAgICAgICAgICAgICAgICBcImlkcHJvb2ZcIjogXCJ0ZXN0LnBkZlwiLFxyXG4gICAgICAgICAgICAgICAgXCJyb29tc1wiOiBib29rZWRSb29tcyxcclxuICAgICAgICAgICAgICAgIFwiYWRkaXRpb25hbHBob25lbnVtYmVyXCI6IG1vYmlsZSxcclxuICAgICAgICAgICAgICAgIFwic3BscmVxdWVzdFwiIDogc2VsZWN0ZWRTcFJlcXMubGVuZ3RoID4wICA/IEpTT04uc3RyaW5naWZ5KHNlbGVjdGVkU3BSZXFzKSA6IFwiXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwYXJhbXMpXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuc2F2ZUJvb2tpbmcocGFyYW1zKTtcclxuXHJcblxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGludmFsaWRGaWVsZHMgOiBbXSxcclxuICAgICAgICAgICAgICAgIHRvdGFsQW1vdW50IDogYW1vdW50LFxyXG4gICAgICAgICAgICAgICAgcHJpbmNpcGxlQW1vdW50IDogcHJpbmNpcGxlQW1vdW50LFxyXG4gICAgICAgICAgICAgICAgZGlzY291bnQgOiBkaXNjb3VudCxcclxuICAgICAgICAgICAgICAgIHByb2dyYW1fZGVzY3JpcHRpb24gOiBwcm9ncmFtX2Rlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgZ3N0IDogZ3N0LFxyXG4gICAgICAgICAgICAgICAgY2hlY2tpbmRhdGUgOiBjaGVja2luZGF0ZSxcclxuICAgICAgICAgICAgICAgIGNoZWNrb3V0ZGF0ZSA6IGNoZWNrb3V0ZGF0ZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBzaG93UHJvZmlsZUluZm9FcnJvciA6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBpbnZhbGlkRmllbGRzIDogaW52YWxpZEZpZWxkcyxcclxuICAgICAgICAgICAgICAgIHRvdGFsQW1vdW50IDogYW1vdW50LFxyXG4gICAgICAgICAgICAgICAgcHJpbmNpcGxlQW1vdW50IDogcHJpbmNpcGxlQW1vdW50LFxyXG4gICAgICAgICAgICAgICAgZGlzY291bnQgOiBkaXNjb3VudCxcclxuICAgICAgICAgICAgICAgIHByb2dyYW1fZGVzY3JpcHRpb24gOiBwcm9ncmFtX2Rlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgZ3N0IDogZ3N0XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBoaWRlUHJvZmlsZUluZm9FcnJvciA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgc2hvd1Byb2ZpbGVJbmZvRXJyb3IgOiBmYWxzZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY29udGludWVUb1BheW1lbnQgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHRoYXQ9dGhpcztcclxuICAgICAgICBsZXQgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgLy8ga2V5OiAncnpwX2xpdmVfdU5RZ3o2ck9HUTk2cUUnLFxyXG4gICAgICAgICAgICBrZXk6ICdyenBfdGVzdF9ybkVINUk0Tkh1YUdKeCcsXHJcbiAgICAgICAgICAgIGFtb3VudDogcGFyc2VGbG9hdCh0aGlzLnN0YXRlLnRvdGFsQW1vdW50KSoxMDAsIC8vICA9IElOUiAxXHJcbiAgICAgICAgICAgIG5hbWU6ICdVVEggQm9va2luZycsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnUGxlYXNlIHBheSB0aGUgYm9va2luZyBjaGFyZ2VzIGhlcmUgdG8gY29uZmlybScsXHJcbiAgICAgICAgICAgIGltYWdlOiAnaHR0cHM6Ly91dGhkZXYubmV2ZXJiZWZvcmVob2xpZGF5cy5jb20vYXNzZXRzL2ltYWdlcy91dGgtbG9nby1ibGFjay5wbmcnLFxyXG4gICAgICAgICAgICAvLyBvcmRlcl9pZDogdGhpcy5zdGF0ZS5vcmRlcklkLFxyXG4gICAgICAgICAgICBoYW5kbGVyOiBmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgdGhhdC5zZXRTdGF0ZSh7UGF5bWVudElkOiByZXNwb25zZS5yYXpvcnBheV9wYXltZW50X2lkLCB0b3RhbEFtb3VudCA6IHRoYXQuc3RhdGUudG90YWxBbW91bnQsIGRhdGUgOiBtb21lbnQobmV3IERhdGUoKSkuZm9ybWF0KCdERCBNTU0gWVlZWScpICwgZW1haWwgOnRoYXQuc3RhdGUuZW1haWwsIG1vYmlsZSA6IHRoYXQuc3RhdGUubW9iaWxlIH0pXHJcbiAgICAgICAgICAgICAgICAvL2xldCBQYXltZW50VXJsID0gYGh0dHA6Ly8xNTkuNjUuMTUzLjU5L3NpdGUvIy9wYXltZW50LXN1Y2Nlc3MvYCt0aGlzLnByb3BzLmJvb2tpbmdEYXRhLmJvb2tpbmdJZDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBheW1lbnRJZCA9IHJlc3BvbnNlLnJhem9ycGF5X3BheW1lbnRfaWQ7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IFBheW1lbnRVcmwgPSBgaHR0cHM6Ly91dGhkZXYubmV2ZXJiZWZvcmVob2xpZGF5cy5jb20vcGF5bWVudC1zdWNjZXNzP3JwX2lkPWArcGF5bWVudElkK2AmcmFtdD1gK3RoYXQuc3RhdGUudG90YWxBbW91bnQrYCZtb2JpbGU9YCt0aGF0LnN0YXRlLm1vYmlsZStgJmVtYWlsPWArdGhhdC5zdGF0ZS5lbWFpbCtgJm1ldGhvZD1DYXJkIHBheW1lbnQmZGF0ZT1gK21vbWVudCh0aGF0LnN0YXRlLnRvZGF5KS5mb3JtYXQoJ0REIE1NTSwgWVlZWScpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHBhcmFtcyA9IHtcclxuICAgICAgICAgICAgICAgICAgICBcIl9pZFwiOiBwYXltZW50SWQsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJyZWZlcmVuY2VcIjogJ1VUSCcsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJkaXNjb3VudFwiOiB0aGF0LnN0YXRlLmRpc2NvdW50LFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZ3N0XCI6IHRoYXQuc3RhdGUuZ3N0LFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZGVzY1wiOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBcInByaW5jaXBhbFwiOiB0aGF0LnN0YXRlLnByaW5jaXBsZUFtb3VudCxcclxuICAgICAgICAgICAgICAgICAgICBcInBheW1lbnR1cmxcIjogUGF5bWVudFVybCxcclxuICAgICAgICAgICAgICAgICAgICBcInByb2RcIjogZmFsc2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vdGhhdC5wcm9wcy5jb25maXJtQm9va2luZyhwYXJhbXMpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGJvb2tQYXJhbXMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9va2luZ0lkOiB0aGF0LnByb3BzLmJvb2tpbmdEYXRhLmJvb2tpbmdJZFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhhdC5wcm9wcy5jb25maXJtQm9va2luZyhib29rUGFyYW1zKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcHJlZmlsbDoge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ1VUSCcsXHJcbiAgICAgICAgICAgICAgICBjb250YWN0OiAnJyxcclxuICAgICAgICAgICAgICAgIGVtYWlsOiAnJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBub3Rlczoge1xyXG4gICAgICAgICAgICAgICAgYWRkcmVzczogJ1VUSCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdGhlbWU6IHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAnIzNmYTlmNScsXHJcbiAgICAgICAgICAgICAgICBoaWRlX3RvcGJhcjogZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhvcHRpb25zKTtcclxuICAgICAgICB2YXIgcnpwMSA9IG5ldyB3aW5kb3cuUmF6b3JwYXkob3B0aW9ucyk7XHJcbiAgICAgICAgcnpwMS5vbigncGF5bWVudC5mYWlsZWQnLCBmdW5jdGlvbiAocmVzcG9uc2Upe1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXNwb25zZS5lcnJvci5kZXNjcmlwdGlvbik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcnpwMS5vcGVuKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaGlkZUVycm9yID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBzaG93RXJyb3IgOiBmYWxzZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgaGlkZUl0ZW1SZW1vdmFsTWVzc2FnZSA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgaXRlbVJlbW92YWxNZXNzYWdlIDogZmFsc2UsXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBlbXB0eUNhcnQgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHNlbGVjdGVkUm9vbXMgPSB0aGlzLnN0YXRlLnNlbGVjdGVkUm9vbXM7XHJcblxyXG4gICAgICAgIHNlbGVjdGVkUm9vbXMgPSBzZWxlY3RlZFJvb21zLm1hcChpdGVtID0+IHtcclxuICAgICAgICAgICAgaXRlbS5xdHkgPSAwO1xyXG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgICAgICB9KVxyXG5cclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGl0ZW1SZW1vdmFsTWVzc2FnZSA6IGZhbHNlLFxyXG4gICAgICAgICAgICBzZWxlY3RlZFJvb21zIDogW10sXHJcbiAgICAgICAgICAgIHNlbGVjdGVkUm9vbUlkcyA6IFtdLFxyXG4gICAgICAgICAgICBzZWFyY2hTdGVwIDogMVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBoaWRlQ2Fubm90Q29udGludWUgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGNhbm5vdENvbnRpbnVlIDogZmFsc2VcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHNob3dGdWxsRGV0YWlsID0gKGlkKSA9PiB7XHJcbiAgICAgICAgbGV0IGhvdGVsX3Jvb21zID0gdGhpcy5zdGF0ZS5ob3RlbF9yb29tcztcclxuICAgICAgICBsZXQgcm9vbUxpc3QgPSAgaG90ZWxfcm9vbXMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5yb29taWQgPT09IGlkKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgc2hvd0RldGFpbFN0YXR1cyA6IHRydWUsXHJcbiAgICAgICAgICAgIHJvb21JZCA6IGlkLFxyXG4gICAgICAgICAgICByb29tRGV0YWlsIDogcm9vbUxpc3QubGVuZ3RoID4gMCAmJiByb29tTGlzdFswXVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgaGlkZUZ1bGxEZXRhaWwgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHNob3dEZXRhaWxTdGF0dXMgOiBmYWxzZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgc2hvd1NwZWNpYWxSZXF1ZXN0cyA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgc2hvd1NwUmVxU3RhdCA6IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgaGlkZVNwZWNpYWxSZXF1ZXN0cyA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgc2hvd1NwUmVxU3RhdCA6IGZhbHNlXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVTcFNlbGVjdGlvbiA9IChlLCBzcCkgPT4ge1xyXG4gICAgICAgIGxldCBzZWxlY3RlZFNwUmVxSWRzID0gWy4uLnRoaXMuc3RhdGUuc2VsZWN0ZWRTcFJlcUlkc107XHJcbiAgICAgICAgbGV0IHNlbGVjdGVkU3BSZXFzID0gWy4uLnRoaXMuc3RhdGUuc2VsZWN0ZWRTcFJlcXNdO1xyXG5cclxuICAgICAgICBpZihlLnRhcmdldC5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkU3BSZXFJZHMucHVzaChzcC5zcF9pZClcclxuICAgICAgICAgICAgc2VsZWN0ZWRTcFJlcXMucHVzaChzcClcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBpbmRleCA9IHNlbGVjdGVkU3BSZXFJZHMuaW5kZXhPZihzcC5zcF9pZCk7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkU3BSZXFJZHMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgc2VsZWN0ZWRTcFJlcXMuc3BsaWNlKGluZGV4LCAxKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBzZWxlY3RlZFNwUmVxcyA6IHNlbGVjdGVkU3BSZXFzLFxyXG4gICAgICAgICAgICBzZWxlY3RlZFNwUmVxSWRzIDogc2VsZWN0ZWRTcFJlcUlkc1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlU3AgPSAoZSwgc3BfaWQpID0+IHtcclxuICAgICAgICBsZXQgc2VsZWN0ZWRTcFJlcUlkcyA9IFsuLi50aGlzLnN0YXRlLnNlbGVjdGVkU3BSZXFJZHNdO1xyXG4gICAgICAgIGxldCBzZWxlY3RlZFNwUmVxcyA9IFsuLi50aGlzLnN0YXRlLnNlbGVjdGVkU3BSZXFzXTtcclxuICAgICAgICBsZXQgaW5kZXggPSBzZWxlY3RlZFNwUmVxSWRzLmluZGV4T2Yoc3BfaWQpO1xyXG4gICAgICAgIHNlbGVjdGVkU3BSZXFJZHMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICBzZWxlY3RlZFNwUmVxcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBzZWxlY3RlZFNwUmVxcyA6IHNlbGVjdGVkU3BSZXFzLFxyXG4gICAgICAgICAgICBzZWxlY3RlZFNwUmVxSWRzIDogc2VsZWN0ZWRTcFJlcUlkc1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGhpZGVQZW5kaW5nTWVzc2FnZSA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgc2hvd1BlbmRpbmdNZXNzYWdlIDogZmFsc2VcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZUNvbnRlbnQgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGV4cGFuZENvbnRlbnQgOiAhdGhpcy5zdGF0ZS5leHBhbmRDb250ZW50XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzLmhvdGVsRGV0YWlsKVxyXG4gICAgICAgIC8vbGV0IGhvdGVsRGV0YWlsID0gdGhpcy5wcm9wcy5ob3RlbERldGFpbDtcclxuICAgICAgICBsZXQgaG90ZWxEZXRhaWwgPSB0aGlzLnN0YXRlLmhvdGVsRGV0YWlsO1xyXG4gICAgICAgIGxldCBiYW5uZXJJbWFnZXMgPSB0aGlzLnN0YXRlLmJhbm5lckltYWdlcyB8fCBbXTtcclxuXHJcblxyXG4gICAgICAgIGxldCBnYWxsZXJ5SW1hZ2VzID0gdGhpcy5zdGF0ZS5nYWxsZXJ5SW1hZ2VzIHx8IFtdO1xyXG4gICAgICAgIGxldCBzdGFydERhdGUgPSB0aGlzLnN0YXRlLnN0YXJ0RGF0ZTtcclxuICAgICAgICBsZXQgZW5kRGF0ZSA9IHRoaXMuc3RhdGUuZW5kRGF0ZTtcclxuXHJcbiAgICAgICAgbGV0IGhvdGVsX3Jvb21zID0gdGhpcy5zdGF0ZS5ob3RlbF9yb29tcztcclxuICAgICAgICBsZXQgZ2VuZXJhbF9mYWNpbGl0aWVzID0gIGhvdGVsRGV0YWlsID8gaG90ZWxEZXRhaWwuaG90ZWxfZmFjaWxpdGllcyA6IFtdO1xyXG4gICAgICAgIGxldCBob3RlbGZhY2lsaXRpZXMgPSBob3RlbERldGFpbCA/IGhvdGVsRGV0YWlsLmhvdGVsZmFjaWxpdGllcyA6IFtdO1xyXG4gICAgICAgIGxldCByb29tVHlwZXMgPSB0aGlzLnN0YXRlLnJvb21UeXBlcyB8fCBbXTtcclxuXHJcbiAgICAgICAgbGV0IHNlbGVjdGVkUm9vbXMgPSB0aGlzLnN0YXRlLnNlbGVjdGVkUm9vbXMgfHwgW107XHJcbiAgICAgICAgbGV0IHNwUmVxdWVzdHMgPSB0aGlzLnN0YXRlLnNwUmVxdWVzdHMgfHwgW107XHJcbiAgICAgICAgbGV0IHNlbGVjdGVkU3BSZXFJZHMgPSB0aGlzLnN0YXRlLnNlbGVjdGVkU3BSZXFJZHMgfHwgW107XHJcbiAgICAgICAgbGV0IHNlbGVjdGVkU3BSZXFzID0gdGhpcy5zdGF0ZS5zZWxlY3RlZFNwUmVxcyB8fCBbXTtcclxuXHJcbiAgICAgICAgbGV0IHRvdGFsX2Nvc3QgPTA7XHJcbiAgICAgICAgbGV0IHRvdGFsX2dzdCA9MDtcclxuICAgICAgICBpZihzZWxlY3RlZFJvb21zLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgZm9yKHZhciBpPTA7IGk8c2VsZWN0ZWRSb29tcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdG90YWxfY29zdCArPSAocGFyc2VGbG9hdChzZWxlY3RlZFJvb21zW2ldLnJvb21fcHJpY2UpICogcGFyc2VJbnQoc2VsZWN0ZWRSb29tc1tpXS5xdHkpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHNlbGVjdGVkU3BSZXFzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgZm9yKHZhciBpPTA7IGk8c2VsZWN0ZWRTcFJlcXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmKHNlbGVjdGVkU3BSZXFzW2ldLmNhdGVnb3J5ID09PSAncGF5YWJsZScpIHtcclxuICAgICAgICAgICAgICAgICAgICB0b3RhbF9jb3N0ICs9IHBhcnNlRmxvYXQoc2VsZWN0ZWRTcFJlcXNbaV0ucmF0ZSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0b3RhbF9nc3QgPSAodG90YWxfY29zdCoxMCkvMTAwO1xyXG4gICAgICAgIGxldCBncmFuZF90b3RhbCA9IHRvdGFsX2Nvc3QrIHRvdGFsX2dzdDtcclxuICAgICAgICAvL2dyYW5kX3RvdGFsID0gZ3JhbmRfdG90YWw+MD8gZ3JhbmRfdG90YWwudG9GaXhlZCgyKTonJztcclxuICAgICAgICBsZXQgcmF6b3JHcmFuZFRvdGFsID0gZ3JhbmRfdG90YWwqMTAwO1xyXG5cclxuICAgICAgICBsZXQgaW52YWxpZEZpZWxkcyA9IHRoaXMuc3RhdGUuaW52YWxpZEZpZWxkcyB8fCBbXTtcclxuICAgICAgICBjb25zb2xlLmxvZyhpbnZhbGlkRmllbGRzKVxyXG5cclxuICAgICAgICBsZXQgaG90ZWxIaWdobGlnaHRzID0gdGhpcy5zdGF0ZS5ob3RlbEhpZ2hsaWdodHMgfHwgW107XHJcbiAgICAgICAgbGV0IGhvdGVsUG9saWNpZXMgPSB0aGlzLnN0YXRlLmhvdGVsUG9saWNpZXMgfHwgW107XHJcblxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhzZWxlY3RlZFNwUmVxcylcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyLXBhZ2VcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPEhvdGVsTmF2YmFyICBzY3JvbGxUb1NlY3Rpb249e3RoaXMuc2Nyb2xsVG9TZWN0aW9ufS8+XHJcbiAgICAgICAgICAgICAgICAgICAge2hvdGVsRGV0YWlsICYmXHJcbiAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZGV0YWlscy1iYW5ubmVyXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJvdXNlbC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcm91c2VsLXRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT57aG90ZWxEZXRhaWwuaG90ZWxfbmFtZX08L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibG9jYXRpb25cIj57aG90ZWxEZXRhaWwuYWRkcmVzc308L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRlbnRTbGlkZXIgaW1hZ2VzPXtiYW5uZXJJbWFnZXN9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5zZWFyY2hTdGVwICE9PSAyICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImJvb2tpbmctY29udGFpbmVyIHN0aWNreVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvb2tpbmctcGFuZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib29raW5nLXBhbmVsLWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9va2luZy1vcHRpb25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXRlLXBpY2tlci1wYW5lbFwiPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEYXRlUmFuZ2VQaWNrZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0RGF0ZT17c3RhcnREYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kRGF0ZT17ZW5kRGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU3RhcnREYXRlQ2hhbmdlPXt0aGlzLnNldFN0YXJ0RGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRW5kRGF0ZUNoYW5nZT17dGhpcy5zZXRFbmREYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluaW11bURhdGU9e25ldyBEYXRlKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5pbXVtTGVuZ3RoPXsxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0PSdkZC9NTS95eXl5J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxlPXtlbkdCfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KHtzdGFydERhdGVJbnB1dFByb3BzLCBlbmREYXRlSW5wdXRQcm9wcywgZm9jdXN9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RhdGUtcmFuZ2UnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17J2lucHV0JyArIChmb2N1cyA9PT0gU1RBUlRfREFURSA/ICcgLWZvY3VzZWQnIDogJycpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLnN0YXJ0RGF0ZUlucHV0UHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nU3RhcnQgZGF0ZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdkYXRlLXJhbmdlX2Fycm93Jy8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsnaW5wdXQnICsgKGZvY3VzID09PSBFTkRfREFURSA/ICcgLWZvY3VzZWQnIDogJycpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLmVuZERhdGVJbnB1dFByb3BzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0VuZCBkYXRlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9EYXRlUmFuZ2VQaWNrZXI+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlbGVjdC1wYW5lbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlbGVjdC1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cInJvb21zXCIgdmFsdWU9e3RoaXMuc3RhdGUucm9vbXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtpbnZhbGlkRmllbGRzLmluY2x1ZGVzKCdyb29tcycpID8gJ2Vycm9yLWZpZWxkJyA6ICcnfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5Sb29tczwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxXCI+MTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyXCI+Mjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIzXCI+Mzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI0XCI+NDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI1XCI+NTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI2XCI+Njwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI3XCI+Nzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI4XCI+ODwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI5XCI+OSs8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWxlY3QtYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJhZHVsdHNcIiB2YWx1ZT17dGhpcy5zdGF0ZS5hZHVsdHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtpbnZhbGlkRmllbGRzLmluY2x1ZGVzKCdhZHVsdHMnKSA/ICdlcnJvci1maWVsZCcgOiAnJ31gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+QWR1bHRzPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjFcIj4xPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjJcIj4yPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjNcIj4zPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjRcIj40PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjVcIj41PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjZcIj42PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjdcIj43PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjhcIj44PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjlcIj45Kzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlbGVjdC1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cImNoaWxkcmVuXCIgdmFsdWU9e3RoaXMuc3RhdGUuY2hpbGRyZW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtpbnZhbGlkRmllbGRzLmluY2x1ZGVzKCdjaGlsZHJlbicpID8gJ2Vycm9yLWZpZWxkJyA6ICcnfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5DaGlsZHJlbjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIwXCI+MDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxXCI+MTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyXCI+Mjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIzXCI+Mzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI0XCI+NDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI1XCI+NTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI2XCI+Njwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI3XCI+Nzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI4XCI+ODwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI5XCI+OSs8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5NQVhfQ0FQQUNJVFlfTVNHICE9PSAnJyAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlcnJvci1mbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5NQVhfQ0FQQUNJVFlfTVNHfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvb2tpbmctcGFuZWwtcmlnaHRcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvb2tpbmctYnV0dG9uLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJnZW5lcmFsLWJ0blwiIG9uQ2xpY2s9eygpID0+IHRoaXMuc2VhcmNoUm9vbXMoKX0+Qm9vayBOb3c8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHshdGhpcy5zdGF0ZS5pbml0U2VhcmNoICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm9vbS1zZWN0aW9uIGZhY2lsaXRpZXNcIiBpZD1cImhvdGVsLW92ZXJ2aWV3XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1Pk92ZXJ2aWV3PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZ2VuZXJhbC1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYWRkcmVzcy1zbS1pY29cIj57aG90ZWxEZXRhaWwuYWRkcmVzc308L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInBob25lLXNtLWljb1wiPntob3RlbERldGFpbC5waG9uZW5vfSAsIHtob3RlbERldGFpbC5tb2JpbGVub308L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpICBjbGFzc05hbWU9XCJtYWlsLXNtLWljb1wiPntob3RlbERldGFpbC5lbWFpbH08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BleHRyYS1jb250ZW50ICR7dGhpcy5zdGF0ZS5leHBhbmRDb250ZW50ID8gJyBhY3RpdmUnIDogJyd9YH0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVydmlldy1kZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sIDogaG90ZWxEZXRhaWwuaG90ZWxfZGVzY319IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aG90ZWxIaWdobGlnaHRzLmxlbmd0aCA+IDAgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWItaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5IaWdobGlnaHRzPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiaGlnaGxpZ2h0LXRhYlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aG90ZWxIaWdobGlnaHRzLm1hcChobCA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPntobC5oaWdobGlnaHRzfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvbGljeS1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3ViLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+SG90ZWwgUG9saWNpZXM8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkNoZWNrIEluIFRpbWU6IDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPntob3RlbERldGFpbCA/IGhvdGVsRGV0YWlsLmNoZWNraW4gOiAnJ308L3NwYW4+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkNoZWNrIE91dCBUaW1lOiA8c3BhbiBjbGFzc05hbWU9XCJmb250LWJvbGRcIj57aG90ZWxEZXRhaWwgPyBob3RlbERldGFpbC5jaGVja291dCA6ICcnfTwvc3Bhbj48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aG90ZWxQb2xpY2llcy5tYXAoaHAgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvbGljeS1ib3ggaW5kZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3ViLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PntocC5jYXRlZ29yeX08L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2hwLnBvbGljeS5tYXAocG9sID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57cG9sLnBvbGljeX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImNvbnRlbnQtaGlkZVwiIG9uQ2xpY2s9eygpPT4gdGhpcy50b2dnbGVDb250ZW50KCl9PlNob3cge3RoaXMuc3RhdGUuZXhwYW5kQ29udGVudCA/ICdsZXNzJyA6ICdtb3JlJ308L25hdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicm9vbS1zZWN0aW9uXCIgaWQ9XCJob3RlbC1yb29tc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5zZWFyY2hTdGVwID09PSAyID8gJ0Jvb2tpbmcgRGV0YWlscycgOiAnUm9vbXMnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g1PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuaW5pdFNlYXJjaCAmJiB0aGlzLnN0YXRlLnNlYXJjaFN0ZXAgPT09IDEgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ZXh0LWxpbmsgYmFja1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5iYWNrVG9EZXRhaWwoKX0+QmFjazwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmluaXRTZWFyY2ggJiZcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXZhaWxhYmxlLXJvb21zXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5zZWFyY2hTdGVwID09PSAxICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aG90ZWxfcm9vbXMubGVuZ3RoID09PSAwICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vLXJlc3VsdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb21pbmctc29vbi13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5ObyBIb3RlbHMgRm91bmQ8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5TZWFyY2ggQWdhaW4gZm9yIHJpZ2h0IHBsYWNlLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2hvdGVsX3Jvb21zLm1hcChyb29tID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvb21TZWFyY2hCbG9jayBpdGVtPXtyb29tfSBzZWxlY3RSb29tPXt0aGlzLnNlbGVjdFJvb219XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFJvb21zPXt0aGlzLnN0YXRlLnNlbGVjdGVkUm9vbXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFJvb21JZHM9e3RoaXMuc3RhdGUuc2VsZWN0ZWRSb29tSWRzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlUXR5PXt0aGlzLmNoYW5nZVF0eX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dGdWxsRGV0YWlsPXt0aGlzLnNob3dGdWxsRGV0YWlsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb29tLWJvb2stc3VibWl0XCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZ2VuZXJhbC1idG5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5jb250aW51ZVRvU3VtbWFyeSgpfT5Db250aW51ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5zZWFyY2hTdGVwID09PSAyICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1bW1hcnktdGFibGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+Um9vbXM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlF0eTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+UHJpY2U8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlRvdGFsIFByaWNlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD48L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZFJvb21zLm1hcChyb29tID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3VtbWFyeUl0ZW0gaXRlbT17cm9vbX0gc2VsZWN0Um9vbT17dGhpcy5zZWxlY3RSb29tfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkUm9vbXM9e3RoaXMuc3RhdGUuc2VsZWN0ZWRSb29tc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFJvb21JZHM9e3RoaXMuc3RhdGUuc2VsZWN0ZWRSb29tSWRzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZVF0eT17dGhpcy5jaGFuZ2VRdHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cInNwZWNpYWwtc2VydmljZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbHNwYW49XCI1XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5hdiBvbkNsaWNrPXsoKSA9PiB0aGlzLnNob3dTcGVjaWFsUmVxdWVzdHMoKX0gY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+QWRkIFNwZWNpYWwgUmVxdWVzdHMgKzwvbmF2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZFNwUmVxcy5sZW5ndGggPjAgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRTcFJlcXMuZmlsdGVyKHNwID0+IHNwLmNhdGVnb3J5ID09PSAncGF5YWJsZScpLm1hcChzcCA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cInNwZWNpYWwtc2VydmljZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xTcGFuPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57c3AudGl0bGV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPuKCuSB7c3AucmF0ZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJkZWxldGUtaXRlbVwiIG9uQ2xpY2s9eyhlKSA9PiB0aGlzLnJlbW92ZVNwKGUsc3Auc3BfaWQpfT48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3NlbGVjdGVkU3BSZXFzLmxlbmd0aCA+MCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFNwUmVxcy5maWx0ZXIoc3AgPT4gc3AuY2F0ZWdvcnkgPT09ICdub24gcGF5YWJsZScpLm1hcChzcCA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cInNwZWNpYWwtc2VydmljZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xTcGFuPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57c3AudGl0bGV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPuKCuSAwPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZGVsZXRlLWl0ZW1cIiBvbkNsaWNrPXsoZSkgPT4gdGhpcy5yZW1vdmVTcChlLHNwLnNwX2lkKX0+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPlRPVEFMPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJmb250LWJvbGRcIj7igrkge3RvdGFsX2Nvc3QudG9GaXhlZCgyKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+R1NUIDEwLjAwJTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+4oK5IHt0b3RhbF9nc3QudG9GaXhlZCgyKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPkdSQU5EIFRPVEFMPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJmb250LWJvbGRcIj7igrkge2dyYW5kX3RvdGFsLnRvRml4ZWQoMil9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY29sU3Bhbj1cIjVcIj5DaGVjay1pbiAmIENoZWNrLW91dDogPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb250LWJvbGRcIj57bW9tZW50KHRoaXMuc3RhdGUuY2hlY2tpbmRhdGUpLmZvcm1hdCgnREQgTU1NIFlZWVknKX0gLSB7bW9tZW50KHRoaXMuc3RhdGUuY2hlY2tvdXRkYXRlKS5mb3JtYXQoJ0REIE1NTSBZWVlZJyl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb24taGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PlBlcnNvbmFsIERldGFpbHM8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiZm9ybS1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5GaXJzdCBOYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiZmlyc3RuYW1lXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5maXJzdG5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGlucHV0LWZpZWxkICR7aW52YWxpZEZpZWxkcy5pbmNsdWRlcygnZmlyc3RuYW1lJykgPyAnZXJyb3ItZmllbGQnIDogJyd9YH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5MYXN0IE5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJsYXN0bmFtZVwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubGFzdG5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGlucHV0LWZpZWxkICR7aW52YWxpZEZpZWxkcy5pbmNsdWRlcygnbGFzdG5hbWUnKSA/ICdlcnJvci1maWVsZCcgOiAnJ31gfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkFkZHJlc3MgMTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImFkZHJlc3MxXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5hZGRyZXNzMX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgaW5wdXQtZmllbGQgJHtpbnZhbGlkRmllbGRzLmluY2x1ZGVzKCdhZGRyZXNzMScpID8gJ2Vycm9yLWZpZWxkJyA6ICcnfWB9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+QWRkcmVzcyAyPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiYWRkcmVzczJcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmFkZHJlc3MyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BpbnB1dC1maWVsZCAke2ludmFsaWRGaWVsZHMuaW5jbHVkZXMoJ2FkZHJlc3MyJykgPyAnZXJyb3ItZmllbGQnIDogJyd9YH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5DaXR5PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiY2l0eVwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuY2l0eX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgaW5wdXQtZmllbGQgJHtpbnZhbGlkRmllbGRzLmluY2x1ZGVzKCdjaXR5JykgPyAnZXJyb3ItZmllbGQnIDogJyd9YH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5TdGF0ZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInN0YXRlXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5zdGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgaW5wdXQtZmllbGQgJHtpbnZhbGlkRmllbGRzLmluY2x1ZGVzKCdzdGF0ZScpID8gJ2Vycm9yLWZpZWxkJyA6ICcnfWB9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+Q291bnRyeTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImNvdW50cnlcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmNvdW50cnl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGlucHV0LWZpZWxkICR7aW52YWxpZEZpZWxkcy5pbmNsdWRlcygnY291bnRyeScpID8gJ2Vycm9yLWZpZWxkJyA6ICcnfWB9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+UGluY29kZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInBpbmNvZGVcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnBpbmNvZGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGlucHV0LWZpZWxkICR7aW52YWxpZEZpZWxkcy5pbmNsdWRlcygncGluY29kZScpID8gJ2Vycm9yLWZpZWxkJyA6ICcnfWB9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+TW9iaWxlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGlucHV0LWZpZWxkICR7aW52YWxpZEZpZWxkcy5pbmNsdWRlcygnbW9iaWxlJykgPyAnZXJyb3ItZmllbGQnIDogJyd9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm1vYmlsZVwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubW9iaWxlfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkFkZGl0aW9uYWwgUGhvbmU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgaW5wdXQtZmllbGQgJHtpbnZhbGlkRmllbGRzLmluY2x1ZGVzKCdhZGRpdGlvbmFscGhvbmVudW1iZXInKSA/ICdlcnJvci1maWVsZCcgOiAnJ31gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYWRkaXRpb25hbHBob25lbnVtYmVyXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5hZGRpdGlvbmFscGhvbmVudW1iZXJ9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+RW1haWw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BpbnB1dC1maWVsZCAke2ludmFsaWRGaWVsZHMuaW5jbHVkZXMoJ2VtYWlsJykgPyAnZXJyb3ItZmllbGQnIDogJyd9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5lbWFpbH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGF5bWVudC13cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJnZW5lcmFsLWJ0biBncmV5XCIgb25DbGljaz17KCk9PiB0aGlzLmJhY2tUb0NhcnQoKX0+QmFjazwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZ2VuZXJhbC1idG5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHRoaXMuc2F2ZUJvb2tpbmcoZSwgZ3JhbmRfdG90YWwsIHRvdGFsX2Nvc3QsIDAuMDAsICcnLCB0b3RhbF9nc3QpfT5Db250aW51ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUbyBQYXltZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IXRoaXMuc3RhdGUuaW5pdFNlYXJjaCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm9vbS1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2hvdGVsX3Jvb21zLmxlbmd0aCA9PT0gMCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vLXJlc3VsdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+Um9vbXMgd2lsbCBiZSBhZGRlZCBzb29uPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2hvdGVsX3Jvb21zLm1hcChyb29tID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um9vbUJsb2NrIGl0ZW09e3Jvb219IHNob3dGdWxsRGV0YWlsPXt0aGlzLnNob3dGdWxsRGV0YWlsfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IXRoaXMuc3RhdGUuaW5pdFNlYXJjaCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiY29udGVudC1hcmVhIHRleHQtY29udGVudFwiIGlkPVwiaG90ZWwtZmFjaWxpdGllc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5GYWNpbGl0aWVzICYgQXR0cmFjdGlvbnM8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmZWF0dXJlLXdyYXBwZXIgdGhyZWUtcGVyLWNvbCBpbWFnZS10b3BcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHshaG90ZWxmYWNpbGl0aWVzIHx8IGhvdGVsZmFjaWxpdGllcy5sZW5ndGggPT09IDAgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5GYWNpbGl0aWVzIHdpbGwgYmUgYWRkZWQgc29vbi48L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtob3RlbGZhY2lsaXRpZXMgJiYgaG90ZWxmYWNpbGl0aWVzLmxlbmd0aCA+IDAgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2hvdGVsZmFjaWxpdGllcy5tYXAoKGZhYywgaW5kZXgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGYWNpbGl0eU5ld0Jsb2NrIGl0ZW09e2ZhY30gaW1nQWxpZ249e2luZGV4ICUgMiA9PT0gMSA/ICdsZWZ0JyA6ICdyaWdodCd9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicm9vbS1zZWN0aW9uXCIgaWQ9XCJob3RlbC1nYWxsZXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PkdhbGxlcnk8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdhbGxlcnkgZ2FsbGVyeUltYWdlcz17Z2FsbGVyeUltYWdlc30gLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPEZvb3RlciAvPlxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuc2hvd0Vycm9yICYmXHJcbiAgICAgICAgICAgICAgICA8QWxlcnRNb2RhbFxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGFsSGVhZGVyID0ge2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGFsRm9vdGVyID0ge3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kYWxUaXRsZSA9IFwiV2FybmluZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgbW9kYWxCb2R5ID0gXCJQbGVhc2Ugc2VsZWN0IHlvdXIgY2hvaWNlc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgbW9kYWxTdGF0dXM9e3RoaXMuc3RhdGUuc2hvd0Vycm9yfVxyXG4gICAgICAgICAgICAgICAgICAgIE9LQnV0dG9uPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgIENBTkNFTEJ1dHRvbj17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgT0tBY3Rpb249e3RoaXMuaGlkZUVycm9yfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnNob3dQcm9maWxlSW5mb0Vycm9yICYmXHJcbiAgICAgICAgICAgICAgICA8QWxlcnRNb2RhbFxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGFsSGVhZGVyID0ge2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGFsRm9vdGVyID0ge3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kYWxUaXRsZSA9IFwiUHJvZmlsZSBEZXRhaWxzXCJcclxuICAgICAgICAgICAgICAgICAgICBtb2RhbEJvZHkgPSBcIlBsZWFzZSBlbnRlciB5b3VyIHBlcnNvbmFsIGluZm9ybWF0aW9uIHRvIHByb2NlZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGFsU3RhdHVzPXt0aGlzLnN0YXRlLnNob3dQcm9maWxlSW5mb0Vycm9yfVxyXG4gICAgICAgICAgICAgICAgICAgIE9LQnV0dG9uPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgIENBTkNFTEJ1dHRvbj17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgT0tBY3Rpb249e3RoaXMuaGlkZVByb2ZpbGVJbmZvRXJyb3J9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuaXRlbVJlbW92YWxNZXNzYWdlICYmXHJcbiAgICAgICAgICAgICAgICA8QWxlcnRNb2RhbFxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGFsSGVhZGVyID0ge2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGFsRm9vdGVyID0ge3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kYWxUaXRsZSA9IFwiV2FybmluZyFcIlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGFsQm9keSA9IFwiQXJlIHlvdSBzdXJlIHRvIHJlbW92ZSB0aGlzIHJvb20/IFlvdSB3aWxsIGJlIHJlZGlyZWN0ZWQgdG8gdGhlIHJvb21zIGxpc3QuXCJcclxuICAgICAgICAgICAgICAgICAgICBtb2RhbFN0YXR1cz17dGhpcy5zdGF0ZS5pdGVtUmVtb3ZhbE1lc3NhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgT0tCdXR0b249e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgQ0FOQ0VMQnV0dG9uPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgIE9LQWN0aW9uPXt0aGlzLmVtcHR5Q2FydH1cclxuICAgICAgICAgICAgICAgICAgICBDQU5DRUxBY3Rpb249e3RoaXMuaGlkZUl0ZW1SZW1vdmFsTWVzc2FnZX1cclxuICAgICAgICAgICAgICAgICAgICBPS1RleHQgPSBcIk9LXCJcclxuICAgICAgICAgICAgICAgICAgICBDQU5DRUxUZXh0ID0gXCJDQU5DRUxcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5jYW5ub3RDb250aW51ZSAmJlxyXG4gICAgICAgICAgICAgICAgPEFsZXJ0TW9kYWxcclxuICAgICAgICAgICAgICAgICAgICBtb2RhbEhlYWRlciA9IHtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICBtb2RhbEZvb3RlciA9IHt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGFsVGl0bGUgPSBcIldhcm5pbmchXCJcclxuICAgICAgICAgICAgICAgICAgICBtb2RhbEJvZHkgPSB7dGhpcy5zdGF0ZS5jYW5ub3RDb250aW51ZU1lc3NhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kYWxTdGF0dXM9e3RoaXMuc3RhdGUuY2Fubm90Q29udGludWV9XHJcbiAgICAgICAgICAgICAgICAgICAgT0tCdXR0b249e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgQ0FOQ0VMQnV0dG9uPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICBPS0FjdGlvbj17dGhpcy5oaWRlQ2Fubm90Q29udGludWV9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnNob3dEZXRhaWxTdGF0dXMgJiZcclxuICAgICAgICAgICAgICAgIDxGdWxsV2lkdGhNb2RhbFxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGFsSGVhZGVyID0ge3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kYWxGb290ZXIgPSB7dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICBtb2RhbFRpdGxlID0ge2hvdGVsRGV0YWlsLmhvdGVsX25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kYWxCb2R5ID0gezxSb29tRGV0YWlsIHJvb21EZXRhaWw9e3RoaXMuc3RhdGUucm9vbURldGFpbH0gaGlkZUZ1bGxEZXRhaWw9e3RoaXMuaGlkZUZ1bGxEZXRhaWx9IC8+fVxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGFsU3RhdHVzPXt0aGlzLnN0YXRlLnNob3dEZXRhaWxTdGF0dXN9XHJcbiAgICAgICAgICAgICAgICAgICAgT0tCdXR0b249e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgQ0FOQ0VMQnV0dG9uPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICBPS0FjdGlvbj17dGhpcy5oaWRlRnVsbERldGFpbH1cclxuICAgICAgICAgICAgICAgICAgICBDQU5DRUxBY3Rpb249e3RoaXMuaGlkZUZ1bGxEZXRhaWx9XHJcbiAgICAgICAgICAgICAgICAgICAgT0tUZXh0ID0gXCJPS1wiXHJcbiAgICAgICAgICAgICAgICAgICAgQ0FOQ0VMVGV4dCA9IFwiQ0FOQ0VMXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuc2hvd1NwUmVxU3RhdCAmJlxyXG4gICAgICAgICAgICAgICAgPEFsZXJ0TW9kYWxcclxuICAgICAgICAgICAgICAgICAgICBtb2RhbEhlYWRlciA9IHtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICBtb2RhbEZvb3RlciA9IHt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGFsVGl0bGUgPSBcIldhcm5pbmchXCJcclxuICAgICAgICAgICAgICAgICAgICBtb2RhbEJvZHkgPSB7PEhvdGVsU3BSZXFMaXN0IHNwUmVxdWVzdHM9e3NwUmVxdWVzdHN9IHNlbGVjdGVkU3BSZXFJZHM9e3RoaXMuc3RhdGUuc2VsZWN0ZWRTcFJlcUlkc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkU3BSZXFzPXt0aGlzLnN0YXRlLnNlbGVjdGVkU3BSZXFzfSBoYW5kbGVTcFNlbGVjdGlvbj17dGhpcy5oYW5kbGVTcFNlbGVjdGlvbn0gLz59XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kYWxTdGF0dXM9e3RoaXMuc3RhdGUuc2hvd1NwUmVxU3RhdH1cclxuICAgICAgICAgICAgICAgICAgICBPS0J1dHRvbj17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICBDQU5DRUxCdXR0b249e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgIE9LQWN0aW9uPXt0aGlzLmhpZGVTcGVjaWFsUmVxdWVzdHN9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuc2hvd1BlbmRpbmdNZXNzYWdlICYmXHJcbiAgICAgICAgICAgICAgICA8QWxlcnRNb2RhbFxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGFsSGVhZGVyID0ge2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGFsRm9vdGVyID0ge3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kYWxUaXRsZSA9IFwiV2FybmluZyFcIlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGFsQm9keSA9IHtcIkJvb2tpbmcgaXMgdGVtcGVyb3JpbHkgdW5hdmFpbGFibGUgZHVlIHRvIENvdmlkLTE5LiBJdCB3aWxsIGJlIGF2YWlsYWJsZSBvbmx5IGZyb20gSnVseSAyMDIxIG9ud2FyZHMuIEZvciBmdXJ0aGVyIGluZm9ybWF0aW9uIHBsZWFzZSBzZW5kIGFuIGVtYWlsIHRvIGJvb2tpbmdAdXRoaG90ZWxzLmNvbSBvciBjYWxsICs5MSA5NzQ2ODM4ODgzLCs5MSA5NTY3MzM4ODg0LlwifVxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGFsU3RhdHVzPXt0aGlzLnN0YXRlLnNob3dQZW5kaW5nTWVzc2FnZX1cclxuICAgICAgICAgICAgICAgICAgICBPS0J1dHRvbj17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICBDQU5DRUxCdXR0b249e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgIE9LQWN0aW9uPXt0aGlzLmhpZGVQZW5kaW5nTWVzc2FnZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcclxuICAgIGhvdGVsRGF0YTpzdGF0ZS5Ib3RlbFJlZHVjZXIuaG90ZWxEYXRhLFxyXG4gICAvLyBmYWNpbGl0eURhdGE6c3RhdGUuSG90ZWxSZWR1Y2VyLmZhY2lsaXR5RGF0YSxcclxuICAgIGJvb2tpbmdEYXRhIDogc3RhdGUuSG90ZWxSZWR1Y2VyLmJvb2tpbmdEYXRhXHJcbn0pO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXHJcbiAgICBtYXBTdGF0ZVRvUHJvcHMsXHJcbiAgICB7XHJcblxyXG4gICAgICAgIHNlYXJjaFJvb21zIDogSG90ZWxBY3Rpb25zLnNlYXJjaFJvb21zLFxyXG4gICAgICAgIHNhdmVCb29raW5nIDogSG90ZWxBY3Rpb25zLnNhdmVCb29raW5nLFxyXG4gICAgICAgIGNvbmZpcm1Cb29raW5nIDogSG90ZWxBY3Rpb25zLmNvbmZpcm1Cb29raW5nLFxyXG4gICAgICAgIGdldEJhbm5lckltYWdlcyA6IEhvdGVsQWN0aW9ucy5nZXRCYW5uZXJJbWFnZXMsXHJcbiAgICAgICAgLy9nZXRIb3RlbEhpZ2hsaWdodHMgOiBIb3RlbEFjdGlvbnMuZ2V0SG90ZWxIaWdobGlnaHRzLFxyXG4gICAgICAgIGdldEhvdGVsUG9saWNpZXMgOiBIb3RlbEFjdGlvbnMuZ2V0SG90ZWxQb2xpY2llcyxcclxuICAgICAgICBnZXRTcFJlcXVlc3RzIDogSG90ZWxBY3Rpb25zLmdldFNwUmVxdWVzdHNcclxuICAgIH1cclxuKShIb3RlbERldGFpbFNsdWcpO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJTdXNwZW5zZSIsImxhenkiLCJ1c2VSb3V0ZXIiLCJGb290ZXIiLCJDb250ZW50U2xpZGVyIiwiZ2V0VXJsU2VnbWVudCIsImNvbm5lY3QiLCJIb3RlbEFjdGlvbnMiLCJlbkdCIiwiRGF0ZVJhbmdlUGlja2VyIiwiU1RBUlRfREFURSIsIkVORF9EQVRFIiwiUm9vbUJsb2NrIiwiUm9vbURldGFpbCIsIlJvb21TZWFyY2hCbG9jayIsIkZhY2lsaXR5TmV3QmxvY2siLCJTdW1tYXJ5SXRlbSIsIkFsZXJ0TW9kYWwiLCJtb21lbnQiLCJGdWxsV2lkdGhNb2RhbCIsIkhvdGVsTmF2YmFyIiwiSG90ZWxTcFJlcUxpc3QiLCJHYWxsZXJ5IiwiSU1BR0VfUEFUSCIsIkFQSSIsIkhvdGVsRGV0YWlsU2x1ZyIsImhvdGVsRGV0YWlsIiwiZ2FsbGVyeUltYWdlcyIsImhvdGVsX3Jvb21zIiwicm91dGVyIiwic2x1ZyIsInF1ZXJ5IiwiY29uc29sZSIsImxvZyIsIkhvdGVsRGV0YWlsIiwicHJvcHMiLCJzZWN0aW9uIiwiZWxlbWVudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwiYmxvY2siLCJpbmxpbmUiLCJkYXRlIiwic2V0U3RhdGUiLCJzdGFydERhdGUiLCJlbmREYXRlIiwiZSIsInRhcmdldCIsInZhbHVlIiwibmFtZSIsIk1BWF9DQVBBQ0lUWV9HRU5FUkFMIiwic3RhdGUiLCJyb29tcyIsImFkdWx0cyIsImNoaWxkcmVuIiwiaW52YWxpZEZpZWxkcyIsInB1c2giLCJhZHVsdENvdW50IiwicGFyc2VJbnQiLCJNQVhfQ0FQQUNJVFlfTVNHIiwibGVuZ3RoIiwicGFyYW1zIiwic2hvd0Vycm9yIiwiaW5pdFNlYXJjaCIsInNlYXJjaFN0ZXAiLCJ0b2RheSIsInRvbW9ycm93Iiwicm9vbSIsInR5cGUiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsInNlbGVjdGVkUm9vbXMiLCJzZWxlY3RlZFJvb21JZHMiLCJpbmNsdWRlcyIsInJvb21pZCIsIml0ZW1SZW1vdmFsTWVzc2FnZSIsImluZGV4IiwiaW5kZXhPZiIsInNwbGljZSIsIm1hcCIsIml0ZW0iLCJxdHkiLCJhZGRRdHkiLCJzdWJRdHkiLCJwZXJzb25PY2N1cGllZCIsInRvdGFsUm9vbXMiLCJpIiwib2NjdXBhbmN5IiwibWF4X2NhcGFjaXR5X2FkdWx0IiwiZXh0cmFfb2NjdXBhbmN5IiwiZXh0cmFiZWQiLCJ0b3RhbF9vY2N1cGFuY3kiLCJjYW5ub3RDb250aW51ZSIsImNhbm5vdENvbnRpbnVlTWVzc2FnZSIsInJvb21JZCIsInJvb21jb3VudCIsInNlbGVjdFJvb20iLCJhbW91bnQiLCJwcmluY2lwbGVBbW91bnQiLCJkaXNjb3VudCIsInByb2dyYW1fZGVzY3JpcHRpb24iLCJnc3QiLCJmaXJzdG5hbWUiLCJsYXN0bmFtZSIsImFkZHJlc3MxIiwiYWRkcmVzczIiLCJjaXR5IiwiY291bnRyeSIsInBpbmNvZGUiLCJtb2JpbGUiLCJhZGRpdGlvbmFscGhvbmVudW1iZXIiLCJlbWFpbCIsImNoZWNraW5kYXRlIiwiZm9ybWF0IiwiY2hlY2tvdXRkYXRlIiwic3RhcnQiLCJlbmQiLCJub09mRGF5cyIsImR1cmF0aW9uIiwiZGlmZiIsImFzRGF5cyIsIm5vT2Zyb29tcyIsInRheGFtb3VudCIsInNlbGVjdGVkU3BSZXFzIiwiYm9va2VkUm9vbXMiLCJleHRyYWJlZGNvdW50Iiwicm9vbV9wcmljZSIsInBhcnNlRmxvYXQiLCJob3RlbF9pZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJzYXZlQm9va2luZyIsInRvdGFsQW1vdW50Iiwic2hvd1Byb2ZpbGVJbmZvRXJyb3IiLCJ0aGF0Iiwib3B0aW9ucyIsImtleSIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiLCJoYW5kbGVyIiwicmVzcG9uc2UiLCJQYXltZW50SWQiLCJyYXpvcnBheV9wYXltZW50X2lkIiwiRGF0ZSIsInBheW1lbnRJZCIsIlBheW1lbnRVcmwiLCJib29rUGFyYW1zIiwiYm9va2luZ0lkIiwiYm9va2luZ0RhdGEiLCJjb25maXJtQm9va2luZyIsInByZWZpbGwiLCJjb250YWN0Iiwibm90ZXMiLCJhZGRyZXNzIiwidGhlbWUiLCJjb2xvciIsImhpZGVfdG9wYmFyIiwicnpwMSIsIndpbmRvdyIsIlJhem9ycGF5Iiwib24iLCJvcGVuIiwiaWQiLCJyb29tTGlzdCIsImZpbHRlciIsInNob3dEZXRhaWxTdGF0dXMiLCJyb29tRGV0YWlsIiwic2hvd1NwUmVxU3RhdCIsInNwIiwic2VsZWN0ZWRTcFJlcUlkcyIsImNoZWNrZWQiLCJzcF9pZCIsInNob3dQZW5kaW5nTWVzc2FnZSIsImV4cGFuZENvbnRlbnQiLCJzZXREYXRlIiwiZ2V0RGF0ZSIsInJvb21UeXBlcyIsImJhbm5lckltYWdlcyIsImhvdGVsUG9saWNpZXMiLCJob3RlbEhpZ2hsaWdodHMiLCJzaG93U3BlY2lhbFJlcXVlc3RzIiwic3BSZXF1ZXN0cyIsInNjcmlwdCIsImNyZWF0ZUVsZW1lbnQiLCJzcmMiLCJhc3luYyIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImhvdGVsX3VybCIsInByZXZQcm9wcyIsInByZXZTdGF0ZSIsInNuYXBzaG90IiwibWF4X29jY3VwYW5jeSIsImhvdGVsaGlnaGxpZ2h0cyIsImhvdGVscG9saWNpZXMiLCJzcGVjaWFscmVxdWVzdCIsImdlbmVyYWxfZmFjaWxpdGllcyIsImhvdGVsX2ZhY2lsaXRpZXMiLCJob3RlbGZhY2lsaXRpZXMiLCJ0b3RhbF9jb3N0IiwidG90YWxfZ3N0IiwiY2F0ZWdvcnkiLCJyYXRlIiwiZ3JhbmRfdG90YWwiLCJyYXpvckdyYW5kVG90YWwiLCJzY3JvbGxUb1NlY3Rpb24iLCJob3RlbF9uYW1lIiwic2V0U3RhcnREYXRlIiwic2V0RW5kRGF0ZSIsInN0YXJ0RGF0ZUlucHV0UHJvcHMiLCJlbmREYXRlSW5wdXRQcm9wcyIsImZvY3VzIiwiaGFuZGxlQ2hhbmdlIiwic2VhcmNoUm9vbXMiLCJwaG9uZW5vIiwibW9iaWxlbm8iLCJfX2h0bWwiLCJob3RlbF9kZXNjIiwiaGwiLCJoaWdobGlnaHRzIiwiY2hlY2tpbiIsImNoZWNrb3V0IiwiaHAiLCJwb2xpY3kiLCJwb2wiLCJ0b2dnbGVDb250ZW50IiwiYmFja1RvRGV0YWlsIiwiY2hhbmdlUXR5Iiwic2hvd0Z1bGxEZXRhaWwiLCJjb250aW51ZVRvU3VtbWFyeSIsInRpdGxlIiwicmVtb3ZlU3AiLCJ0b0ZpeGVkIiwiYmFja1RvQ2FydCIsImZhYyIsImhpZGVFcnJvciIsImhpZGVQcm9maWxlSW5mb0Vycm9yIiwiZW1wdHlDYXJ0IiwiaGlkZUl0ZW1SZW1vdmFsTWVzc2FnZSIsImhpZGVDYW5ub3RDb250aW51ZSIsImhpZGVGdWxsRGV0YWlsIiwiaGFuZGxlU3BTZWxlY3Rpb24iLCJoaWRlU3BlY2lhbFJlcXVlc3RzIiwiaGlkZVBlbmRpbmdNZXNzYWdlIiwibWFwU3RhdGVUb1Byb3BzIiwiaG90ZWxEYXRhIiwiSG90ZWxSZWR1Y2VyIiwiZ2V0QmFubmVySW1hZ2VzIiwiZ2V0SG90ZWxQb2xpY2llcyIsImdldFNwUmVxdWVzdHMiXSwic291cmNlUm9vdCI6IiJ9