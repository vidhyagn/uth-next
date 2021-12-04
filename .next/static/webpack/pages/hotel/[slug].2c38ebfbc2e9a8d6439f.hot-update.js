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

      var hotelDetail = this.props.hotelDetail;
      var bannerImages = this.state.bannerImages || [];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaG90ZWwvW3NsdWddLjJjMzhlYmZiYzJlOWE4ZDY0MzlmLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsSUFBTTBCLEdBQUcsR0FBRyx3RkFBWixFQUNBOztBQXdFQSxJQUFNQyxlQUFlLEdBQUUsU0FBakJBLGVBQWlCLE9BQWdEO0FBQUE7O0FBQUEsTUFBOUNDLFdBQThDLFFBQTlDQSxXQUE4QztBQUFBLE1BQWpDQyxhQUFpQyxRQUFqQ0EsYUFBaUM7QUFBQSxNQUFsQkMsV0FBa0IsUUFBbEJBLFdBQWtCO0FBRW5FLE1BQU1DLE1BQU0sR0FBRzNCLHNEQUFTLEVBQXhCO0FBQ0EsTUFBUTRCLElBQVIsR0FBaUJELE1BQU0sQ0FBQ0UsS0FBeEIsQ0FBUUQsSUFBUjtBQUNBRSxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWVAsV0FBWjtBQUNBTSxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWU4sYUFBWjtBQUNBSyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUwsV0FBWjtBQUNBSSxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUgsSUFBWjtBQUVBLHNCQUNLLCtEQUFDLFdBQUQ7QUFBYSxlQUFXLEVBQUVKLFdBQVcsQ0FBQyxDQUFELENBQXJDO0FBQTBDLGFBQVMsRUFBRUksSUFBckQ7QUFDYSxpQkFBYSxFQUFFSCxhQUQ1QjtBQUMyQyxlQUFXLEVBQUVDO0FBRHhEO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FETDtBQUlILENBYkQ7O0dBQU1IO1VBRWF2Qjs7O0tBRmJ1Qjs7SUFlQVM7Ozs7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TixDQUFtQmxHO0FBSEgsR0FBTDtBQUFBLENBQTdCOzs7QUFPQSwrREFBZWhKLHFEQUFPLENBQ2xCZ1AsZUFEa0IsRUFFbEI7QUFFSS9CLEVBQUFBLFdBQVcsRUFBR2hOLHdEQUZsQjtBQUdJOEgsRUFBQUEsV0FBVyxFQUFHOUgsd0RBSGxCO0FBSUlnSixFQUFBQSxjQUFjLEVBQUdoSiwyREFKckI7QUFLSWtQLEVBQUFBLGVBQWUsRUFBR2xQLDREQUx0QjtBQU1JO0FBQ0FtUCxFQUFBQSxnQkFBZ0IsRUFBR25QLDZEQVB2QjtBQVFJb1AsRUFBQUEsYUFBYSxFQUFHcFAsMERBQTBCb1A7QUFSOUMsQ0FGa0IsQ0FBUCxDQVlibE8sZUFaYSxDQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2hvdGVsL1tzbHVnXS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LFN1c3BlbnNlLCBsYXp5IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vLi4vdmlld3MvRm9vdGVyXCI7XHJcbmltcG9ydCBDb250ZW50U2xpZGVyIGZyb20gXCIuLi8uLi92aWV3cy9jb21tb24vaG90ZWxTbGlkZXJcIjtcclxuaW1wb3J0IHtnZXRVcmxTZWdtZW50fSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL0N1c3RvbUZ1bmN0aW9uc1wiO1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgKiBhcyBIb3RlbEFjdGlvbnMgZnJvbSBcIi4uLy4uL2FjdGlvbnMvaG90ZWxcIjtcclxuaW1wb3J0IHsgZW5HQiB9IGZyb20gJ2RhdGUtZm5zL2xvY2FsZSdcclxuaW1wb3J0IHsgRGF0ZVJhbmdlUGlja2VyLCBTVEFSVF9EQVRFLCBFTkRfREFURSB9IGZyb20gJ3JlYWN0LW5pY2UtZGF0ZXMnXHJcbmltcG9ydCAncmVhY3QtbmljZS1kYXRlcy9idWlsZC9zdHlsZS5jc3MnXHJcbmltcG9ydCBSb29tQmxvY2sgZnJvbSBcIi4uLy4uL3ZpZXdzL1Jvb21CbG9ja1wiO1xyXG5pbXBvcnQgUm9vbURldGFpbCBmcm9tIFwiLi4vLi4vdmlld3MvUm9vbURldGFpbFwiO1xyXG5pbXBvcnQgUm9vbVNlYXJjaEJsb2NrIGZyb20gXCIuLi8uLi92aWV3cy9Sb29tU2VhcmNoQmxvY2tcIjtcclxuaW1wb3J0IEZhY2lsaXR5TmV3QmxvY2sgZnJvbSBcIi4uLy4uL3ZpZXdzL0ZhY2lsaXR5TmV3QmxvY2tcIjtcclxuaW1wb3J0IFN1bW1hcnlJdGVtIGZyb20gXCIuLi8uLi92aWV3cy9TdW1tYXJ5SXRlbVwiO1xyXG5pbXBvcnQgQWxlcnRNb2RhbCBmcm9tIFwiLi4vLi4vdmlld3MvY29tbW9uL0FsZXJ0TW9kYWxcIjtcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgRnVsbFdpZHRoTW9kYWwgZnJvbSBcIi4uLy4uL3ZpZXdzL2NvbW1vbi9GdWxsV2lkdGhNb2RhbFwiO1xyXG5pbXBvcnQgSG90ZWxOYXZiYXIgZnJvbSBcIi4uLy4uL3ZpZXdzL0hvdGVsTmF2YmFyXCI7XHJcbmltcG9ydCBIb3RlbFNwUmVxTGlzdCBmcm9tIFwiLi4vLi4vdmlld3MvSG90ZWxTcFJlcUxpc3RcIjtcclxuaW1wb3J0IEdhbGxlcnkgZnJvbSBcIi4uLy4uL3ZpZXdzL2NvbW1vbi9HYWxsZXJ5XCI7XHJcbmltcG9ydCB7SU1BR0VfUEFUSCwgQVBJX1BBVEh9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcclxuY29uc3QgQVBJID0gJ2h0dHBzOi8vcnpwX3Rlc3Rfcm5FSDVJNE5IdWFHSng6U1BtcTZxS1FFTHh4TGxZVG5QN1k1ZHlqQGFwaS5yYXpvcnBheS5jb20vdjEvcGF5bWVudHMvJztcclxuLy9UaGlzIGdldHMgY2FsbGVkIGV2ZXJ5IHRpbWUgdGhlIHBhZ2UgaXMgY2FsbGVkXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4gICAgY29uc3Qge3BhcmFtc30gPSBjb250ZXh0O1xyXG4gICAgY29uc3Qge3NsdWd9ID0gcGFyYW1zO1xyXG4gICAgLy9ob3RlbCBkZXRhaWxcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7QVBJX1BBVEh9aG90ZWwvaG90ZWxkZXRhaWxzdjI/dXJsPSR7c2x1Z31gKTtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIGxldCBob3RlbERldGFpbCA9IHJlcy5yZXN1bHRzID8gcmVzLnJlc3VsdHMuZGF0YTogW107XHJcbiAgICBjb25zb2xlLmxvZyhob3RlbERldGFpbClcclxuXHJcbiAgICAvL1Jvb20gVHlwZXNcclxuICAgIGNvbnN0IHJlc3BvbnNlMiA9IGF3YWl0IGZldGNoKGAke0FQSV9QQVRIfWhvdGVsL3Jvb210eXBlYCk7XHJcbiAgICBjb25zdCByZXMyID0gYXdhaXQgcmVzcG9uc2UyLmpzb24oKTtcclxuICAgIGxldCByb29tVHlwZXMgPSByZXMyLnJlc3VsdHMgPyByZXMyLnJlc3VsdHMuZGF0YTogW107XHJcbiAgICBsZXQgYmFubmVySW1hZ2VzID0gW107XHJcbiAgICBsZXQgaG90ZWxfcm9vbXMgPSBbXTtcclxuICAgIGxldCBnYWxsZXJ5SW1hZ2VzID1bXTtcclxuICAgIGxldCBob3RlbF9pZCA9ICcnXHJcbiAgICBpZihob3RlbERldGFpbCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGhvdGVsRGV0YWlsKVxyXG4gICAgICAgIGhvdGVsX2lkID0gaG90ZWxEZXRhaWwuaG90ZWxfaWQ7XHJcbiAgICAgICAgY29uc29sZS5sb2coaG90ZWxfaWQpXHJcbiAgICAgICAgbGV0IHBhcmFtcyA9IHtob3RlbF9pZCA6IGhvdGVsX2lkfTtcclxuICAgICAgICBjb25zdCByZXNwb25zZTMgPSBhd2FpdCBmZXRjaChgJHtBUElfUEFUSH1ob3RlbC9ob3RlbGJhbm5lcmltYWdlc2ApO1xyXG4gICAgICAgIGNvbnN0IHJlczMgPSBhd2FpdCByZXNwb25zZTMuanNvbigpO1xyXG4gICAgICAgIGJhbm5lckltYWdlcyA9IHJlczMucmVzdWx0cyA/IHJlczMucmVzdWx0cy5kYXRhOiBbXTtcclxuXHJcbiAgICAgICAgaG90ZWxfcm9vbXMgPSBob3RlbERldGFpbC5ob3RlbF9yb29tcyB8fCBbXTtcclxuICAgICAgICBob3RlbF9yb29tcyA9IGhvdGVsX3Jvb21zLm1hcChpdGVtID0+IHtcclxuICAgICAgICAgICAgaXRlbS5xdHkgPSAwXHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGdhbGxlcnlJbWFnZXMgPSBob3RlbERldGFpbC5ob3RlbF9pbWFnZXMgfHwgW107XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHByb3BzIDoge1xyXG4gICAgICAgICAgICAgICAgaG90ZWxEZXRhaWwgOiBbaG90ZWxEZXRhaWxdLFxyXG4gICAgICAgICAgICAgICAgaG90ZWxfcm9vbXMgOiBob3RlbF9yb29tcyxcclxuICAgICAgICAgICAgICAgIGdhbGxlcnlJbWFnZXMgOiBnYWxsZXJ5SW1hZ2VzLFxyXG4gICAgICAgICAgICAgICAvLyBNQVhfQ0FQQUNJVFlfR0VORVJBTCA6IGhvdGVsRGV0YWlsLm1heF9vY2N1cGFuY3ksXHJcbiAgICAgICAgICAgICAgICAvL2hvdGVsSGlnaGxpZ2h0cyA6IGhvdGVsRGV0YWlsLmhvdGVsaGlnaGxpZ2h0cyxcclxuICAgICAgICAgICAgICAgIC8vaG90ZWxQb2xpY2llcyA6IGhvdGVsRGV0YWlsLmhvdGVscG9saWNpZXMsXHJcbiAgICAgICAgICAgICAgICAvL3NwUmVxdWVzdHMgOiBob3RlbERldGFpbC5zcGVjaWFscmVxdWVzdFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vdGhpcy5wcm9wcy5nZXRCYW5uZXJJbWFnZXMocGFyYW1zKTtcclxuICAgIC8vIGxldCBob3RlbF9yb29tcyA9IHRoaXMucHJvcHMuaG90ZWxEZXRhaWwuaG90ZWxfcm9vbXMgfHwgW107XHJcbiAgICAvLyBob3RlbF9yb29tcyA9IGhvdGVsX3Jvb21zLm1hcChpdGVtID0+IHtcclxuICAgIC8vICAgICBpdGVtLnF0eSA9IDBcclxuICAgIC8vICAgICByZXR1cm4gaXRlbTtcclxuICAgIC8vIH0pO1xyXG4gICAgLy8gbGV0IGdhbGxlcnlJbWFnZXMgPSB0aGlzLnByb3BzLmhvdGVsRGV0YWlsLmhvdGVsX2ltYWdlcyB8fCBbXTtcclxuICAgIC8vIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgLy8gICAgIGhvdGVsX2lkIDogaG90ZWxfaWQsXHJcbiAgICAvLyAgICAgaG90ZWxEZXRhaWwgOiBob3RlbERldGFpbCxcclxuICAgIC8vICAgICBob3RlbF9yb29tcyA6IGhvdGVsX3Jvb21zLFxyXG4gICAgLy8gICAgIGdhbGxlcnlJbWFnZXMgOiBnYWxsZXJ5SW1hZ2VzLFxyXG4gICAgLy8gICAgIE1BWF9DQVBBQ0lUWV9HRU5FUkFMIDogaG90ZWxEZXRhaWwubWF4X29jY3VwYW5jeSxcclxuICAgIC8vICAgICBob3RlbEhpZ2hsaWdodHMgOiBob3RlbERldGFpbC5ob3RlbGhpZ2hsaWdodHMsXHJcbiAgICAvLyAgICAgaG90ZWxQb2xpY2llcyA6IGhvdGVsRGV0YWlsLmhvdGVscG9saWNpZXMsXHJcbiAgICAvLyAgICAgc3BSZXF1ZXN0cyA6IGhvdGVsRGV0YWlsLnNwZWNpYWxyZXF1ZXN0XHJcbiAgICAvLyB9LCBmdW5jdGlvbigpIHtcclxuICAgIC8vXHJcbiAgICAvLyB9KVxyXG5cclxuXHJcbn1cclxuXHJcblxyXG5cclxuY29uc3QgSG90ZWxEZXRhaWxTbHVnID0oe2hvdGVsRGV0YWlsLCBnYWxsZXJ5SW1hZ2VzLCBob3RlbF9yb29tcyB9KSA9PiB7XHJcblxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICAgIGNvbnN0IHsgc2x1ZyB9ID0gcm91dGVyLnF1ZXJ5O1xyXG4gICAgY29uc29sZS5sb2coaG90ZWxEZXRhaWwpXHJcbiAgICBjb25zb2xlLmxvZyhnYWxsZXJ5SW1hZ2VzKVxyXG4gICAgY29uc29sZS5sb2coaG90ZWxfcm9vbXMpXHJcbiAgICBjb25zb2xlLmxvZyhzbHVnKVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICAgPEhvdGVsRGV0YWlsIGhvdGVsRGV0YWlsPXtob3RlbERldGFpbFswXX0gaG90ZWxfdXJsPXtzbHVnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgZ2FsbGVyeUltYWdlcz17Z2FsbGVyeUltYWdlc30gaG90ZWxfcm9vbXM9e2hvdGVsX3Jvb21zfS8+XHJcbiAgICApXHJcbn1cclxuXHJcbmNsYXNzIEhvdGVsRGV0YWlsIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIGxldCB0b2RheSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgbGV0IHRvbW9ycm93ID0gbmV3IERhdGUodG9kYXkpO1xyXG4gICAgICAgIHRvbW9ycm93LnNldERhdGUodG9tb3Jyb3cuZ2V0RGF0ZSgpICsgMSk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgdG9kYXkgOiB0b2RheSxcclxuICAgICAgICAgICAgdG9tb3Jyb3cgOiB0b21vcnJvdyxcclxuICAgICAgICAgICAgc3RhcnREYXRlIDogdG9kYXksXHJcbiAgICAgICAgICAgIGVuZERhdGUgOiB0b21vcnJvdyxcclxuICAgICAgICAgICAgY2hlY2tpbmRhdGUgOiB0b2RheSxcclxuICAgICAgICAgICAgY2hlY2tvdXRkYXRlIDogdG9tb3Jyb3csXHJcbiAgICAgICAgICAgIHJvb21zIDogJycsXHJcbiAgICAgICAgICAgIGFkdWx0cyA6ICcnLFxyXG4gICAgICAgICAgICBjaGlsZHJlbiA6ICcnLFxyXG4gICAgICAgICAgICByb29tVHlwZXMgOiBbXSxcclxuICAgICAgICAgICAgaW5pdFNlYXJjaCA6IGZhbHNlLFxyXG4gICAgICAgICAgICBzZWFyY2hTdGVwIDogMSxcclxuICAgICAgICAgICAgc2VsZWN0ZWRSb29tcyA6IFtdLFxyXG4gICAgICAgICAgICBzZWxlY3RlZFJvb21JZHMgOiBbXSxcclxuICAgICAgICAgICAgaG90ZWxfcm9vbXMgOiBbXSxcclxuICAgICAgICAgICAgaW52YWxpZEZpZWxkcyA6IFtdLFxyXG4gICAgICAgICAgICBzaG93RXJyb3IgOiBmYWxzZSxcclxuICAgICAgICAgICAgZmlyc3RuYW1lIDonJyxcclxuICAgICAgICAgICAgbGFzdG5hbWUgOicnLFxyXG4gICAgICAgICAgICBhZGRyZXNzMSA6ICcnLFxyXG4gICAgICAgICAgICBhZGRyZXNzMiA6ICcnLFxyXG4gICAgICAgICAgICBjaXR5IDogJycsXHJcbiAgICAgICAgICAgIHN0YXRlIDogJycsXHJcbiAgICAgICAgICAgIHBpbmNvZGUgOiAnJyxcclxuICAgICAgICAgICAgY291bnRyeSA6ICcnLFxyXG4gICAgICAgICAgICBtb2JpbGUgOiAnJyxcclxuICAgICAgICAgICAgYWRkaXRpb25hbHBob25lbnVtYmVyIDogJycsXHJcbiAgICAgICAgICAgIGVtYWlsIDogJycsXHJcbiAgICAgICAgICAgIHNob3dQcm9maWxlSW5mb0Vycm9yIDogZmFsc2UsXHJcbiAgICAgICAgICAgIGJvb2tpbmdJZCA6ICcnLFxyXG4gICAgICAgICAgICB0b3RhbEFtb3VudCA6IDAsXHJcbiAgICAgICAgICAgIHByaW5jaXBsZUFtb3VudCA6IDAsXHJcbiAgICAgICAgICAgIGRpc2NvdW50IDogMCxcclxuICAgICAgICAgICAgcHJvZ3JhbV9kZXNjcmlwdGlvbiA6ICcnLFxyXG4gICAgICAgICAgICBnc3QgOiAwLFxyXG4gICAgICAgICAgICBNQVhfQ0FQQUNJVFlfTVNHIDogJycsXHJcbiAgICAgICAgICAgIGl0ZW1SZW1vdmFsTWVzc2FnZSA6IGZhbHNlLFxyXG4gICAgICAgICAgICBiYW5uZXJJbWFnZXMgOiBbXSxcclxuICAgICAgICAgICAgY2Fubm90Q29udGludWVNZXNzYWdlIDpmYWxzZSxcclxuICAgICAgICAgICAgZ2FsbGVyeUltYWdlcyA6IFtdLFxyXG4gICAgICAgICAgICBzaG93RGV0YWlsU3RhdHVzIDogZmFsc2UsXHJcbiAgICAgICAgICAgIGhvdGVsUG9saWNpZXMgOiBbXSxcclxuICAgICAgICAgICAgaG90ZWxIaWdobGlnaHRzIDogW10sXHJcbiAgICAgICAgICAgIE1BWF9DQVBBQ0lUWV9HRU5FUkFMIDogMSxcclxuICAgICAgICAgICAgc2hvd1NwZWNpYWxSZXF1ZXN0cyA6IGZhbHNlLFxyXG4gICAgICAgICAgICBzcFJlcXVlc3RzIDogW10sXHJcbiAgICAgICAgICAgIHNlbGVjdGVkU3BSZXFzIDpbXSxcclxuICAgICAgICAgICAgc2VsZWN0ZWRTcFJlcUlkcyA6IFtdLFxyXG4gICAgICAgICAgICBzaG93UGVuZGluZ01lc3NhZ2UgOiBmYWxzZSxcclxuICAgICAgICAgICAgZXhwYW5kQ29udGVudCA6IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcbiAgICAgICAgc2NyaXB0LnNyYyA9ICdodHRwczovL2NoZWNrb3V0LnJhem9ycGF5LmNvbS92MS9jaGVja291dC5qcyc7XHJcbiAgICAgICAgc2NyaXB0LmFzeW5jID0gdHJ1ZTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdCk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGhvdGVsX3VybCA6IHRoaXMucHJvcHMuaG90ZWxfdXJsXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBzY3JvbGxUb1NlY3Rpb24gPSAoc2VjdGlvbikgPT4ge1xyXG4gICAgICAgIGlmKHNlY3Rpb24gIT09ICcnKSB7XHJcbiAgICAgICAgICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2VjdGlvbik7XHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnNjcm9sbEludG9WaWV3KHtiZWhhdmlvcjogXCJzbW9vdGhcIiwgYmxvY2s6IFwic3RhcnRcIiwgaW5saW5lOiBcIm5lYXJlc3RcIn0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUsIHNuYXBzaG90KSB7XHJcblxyXG4gICAgICAgIGlmKHRoaXMucHJvcHMuaG90ZWxEZXRhaWwgIT09IHByZXZQcm9wcy5ob3RlbERldGFpbCkge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBob3RlbF9pZCA6IHRoaXMucHJvcHMuaG90ZWxEZXRhaWwuaG90ZWxfaWQsXHJcbiAgICAgICAgICAgICAgICBob3RlbERldGFpbCA6IHRoaXMucHJvcHMuaG90ZWxEZXRhaWwsXHJcbiAgICAgICAgICAgICAgICBob3RlbF9yb29tcyA6IHRoaXMucHJvcHMuaG90ZWxfcm9vbXMsXHJcbiAgICAgICAgICAgICAgICBnYWxsZXJ5SW1hZ2VzIDogdGhpcy5wcm9wcy5nYWxsZXJ5SW1hZ2VzLFxyXG4gICAgICAgICAgICAgICAgTUFYX0NBUEFDSVRZX0dFTkVSQUwgOiB0aGlzLnByb3BzLmhvdGVsRGV0YWlsLm1heF9vY2N1cGFuY3ksXHJcbiAgICAgICAgICAgICAgICBob3RlbEhpZ2hsaWdodHMgOiB0aGlzLnByb3BzLmhvdGVsRGV0YWlsLmhvdGVsaGlnaGxpZ2h0cyxcclxuICAgICAgICAgICAgICAgIGhvdGVsUG9saWNpZXMgOiB0aGlzLnByb3BzLmhvdGVsRGV0YWlsLmhvdGVscG9saWNpZXMsXHJcbiAgICAgICAgICAgICAgICBzcFJlcXVlc3RzIDogdGhpcy5wcm9wcy5ob3RlbERldGFpbC5zcGVjaWFscmVxdWVzdFxyXG4gICAgICAgICAgICB9LCBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBpZih0aGlzLnByb3BzLmZhY2lsaXR5RGF0YS5yb29tVHlwZXMgIT09IHByZXZQcm9wcy5mYWNpbGl0eURhdGEucm9vbVR5cGVzKSB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIC8vICAgICAgICAgcm9vbVR5cGVzIDogdGhpcy5wcm9wcy5mYWNpbGl0eURhdGEucm9vbVR5cGVzXHJcbiAgICAgICAgLy8gICAgIH0pXHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIGlmKHRoaXMucHJvcHMuYm9va2luZ0RhdGEuYm9va2luZ0lkICE9PSBwcmV2UHJvcHMuYm9va2luZ0RhdGEuYm9va2luZ0lkKSB7XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgLy8gICAgICAgICBib29raW5nSWQgOiB0aGlzLnByb3BzLmJvb2tpbmdEYXRhLmJvb2tpbmdJZFxyXG4gICAgICAgIC8vICAgICB9LCBmdW5jdGlvbiAoKXtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuY29udGludWVUb1BheW1lbnQoKVxyXG4gICAgICAgIC8vICAgICB9KVxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBpZih0aGlzLnByb3BzLmJvb2tpbmdEYXRhLmJvb2tpbmdSZXN1bHQgIT09IHByZXZQcm9wcy5ib29raW5nRGF0YS5ib29raW5nUmVzdWx0KSB7XHJcbiAgICAgICAgLy8gICAgIGxldCBQYXltZW50VXJsID0gYGh0dHBzOi8vdXRoZGV2Lm5ldmVyYmVmb3JlaG9saWRheXMuY29tL3BheW1lbnQtc3VjY2Vzcz9ycF9pZD1gK3RoaXMuc3RhdGUuUGF5bWVudElkK2AmcmFtdD1gK3RoaXMuc3RhdGUudG90YWxBbW91bnQrYCZtb2JpbGU9YCt0aGlzLnN0YXRlLm1vYmlsZStgJmVtYWlsPWArdGhpcy5zdGF0ZS5lbWFpbCtgJm1ldGhvZD1DYXJkIHBheW1lbnQmZGF0ZT1gK21vbWVudCh0aGlzLnN0YXRlLnRvZGF5KS5mb3JtYXQoJ0REIE1NTSwgWVlZWScpO1xyXG4gICAgICAgIC8vICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFBheW1lbnRVcmw7XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAvLyBpZih0aGlzLnByb3BzLmhvdGVsRGF0YS5iYW5uZXJJbWFnZXMgIT09IHByZXZQcm9wcy5ob3RlbERhdGEuYmFubmVySW1hZ2VzKSB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIC8vICAgICAgICAgYmFubmVySW1hZ2VzIDogdGhpcy5wcm9wcy5ob3RlbERhdGEuYmFubmVySW1hZ2VzXHJcbiAgICAgICAgLy8gICAgIH0pXHJcbiAgICAgICAgLy8gfVxyXG4gICAgfVxyXG5cclxuICAgIHNldFN0YXJ0RGF0ZSA9IChkYXRlKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHN0YXJ0RGF0ZSA6IGRhdGVcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgc2V0RW5kRGF0ZSA9IChkYXRlKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGVuZERhdGUgOiBkYXRlXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBbZS50YXJnZXQubmFtZV0gOiBlLnRhcmdldC52YWx1ZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgc2VhcmNoUm9vbXMgPSAoKSA9PiB7XHJcblxyXG5cclxuICAgICAgICBsZXQgTUFYX0NBUEFDSVRZX0dFTkVSQUwgPSB0aGlzLnN0YXRlLk1BWF9DQVBBQ0lUWV9HRU5FUkFMO1xyXG4gICAgICAgIGxldCBzdGFydERhdGUgPSB0aGlzLnN0YXRlLnN0YXJ0RGF0ZTtcclxuICAgICAgICBsZXQgZW5kRGF0ZSA9IHRoaXMuc3RhdGUuc3RhcnREYXRlO1xyXG4gICAgICAgIGxldCByb29tcyA9IHRoaXMuc3RhdGUucm9vbXM7XHJcbiAgICAgICAgbGV0IGFkdWx0cyA9IHRoaXMuc3RhdGUuYWR1bHRzO1xyXG4gICAgICAgIGxldCBjaGlsZHJlbiA9IHRoaXMuc3RhdGUuY2hpbGRyZW47XHJcbiAgICAgICAgbGV0IGludmFsaWRGaWVsZHMgPSBbXTtcclxuICAgICAgICBpZihzdGFydERhdGUgPT09ICcnKSB7XHJcbiAgICAgICAgICAgIGludmFsaWRGaWVsZHMucHVzaCgnc3RhcnREYXRlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGVuZERhdGUgPT09ICcnKSB7XHJcbiAgICAgICAgICAgIGludmFsaWRGaWVsZHMucHVzaCgnZW5kRGF0ZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihyb29tcyA9PT0gJycpIHtcclxuICAgICAgICAgICAgaW52YWxpZEZpZWxkcy5wdXNoKCdyb29tcycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihhZHVsdHMgPT09ICcnKSB7XHJcbiAgICAgICAgICAgIGludmFsaWRGaWVsZHMucHVzaCgnYWR1bHRzJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgYWR1bHRDb3VudCA9IHBhcnNlSW50KHJvb21zKSAqIHBhcnNlSW50KE1BWF9DQVBBQ0lUWV9HRU5FUkFMKTtcclxuICAgICAgICBpZihwYXJzZUludChhZHVsdHMpID4gYWR1bHRDb3VudCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIE1BWF9DQVBBQ0lUWV9NU0cgOiBcIlNvcnJ5LiBXZSBhcmUgYWxsb3dpbmcgYSBtYXhpbXVtIG9mIFwiK01BWF9DQVBBQ0lUWV9HRU5FUkFMK1wiIG1lbWJlcnMgaW4gYSByb29tXCJcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoaW52YWxpZEZpZWxkcy5sZW5ndGggPT09IDAgKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgcGFyYW1zID0ge3N0YXJ0RGF0ZTogdGhpcy5zdGF0ZS5zdGFydERhdGUsIGVuZERhdGUgOiB0aGlzLnN0YXRlLmVuZERhdGUsIHJvb21zIDogdGhpcy5zdGF0ZS5yb29tcyxcclxuICAgICAgICAgICAgICAgIGFkdWx0cyA6IHRoaXMuc3RhdGUuYWR1bHRzLCBjaGlsZHJlbiA6IHRoaXMuc3RhdGUuY2hpbGRyZW59O1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzaG93RXJyb3IgOiBmYWxzZSwgaW5pdFNlYXJjaCA6ICB0cnVlLCBzZWFyY2hTdGVwIDogMSwgc3RhcnREYXRlOiB0aGlzLnN0YXRlLnN0YXJ0RGF0ZSwgZW5kRGF0ZSA6IHRoaXMuc3RhdGUuZW5kRGF0ZSwgcm9vbXMgOiB0aGlzLnN0YXRlLnJvb21zLFxyXG4gICAgICAgICAgICAgICAgYWR1bHRzIDogdGhpcy5zdGF0ZS5hZHVsdHMsIGNoaWxkcmVuIDogdGhpcy5zdGF0ZS5jaGlsZHJlbiwgaW52YWxpZEZpZWxkcyA6IGludmFsaWRGaWVsZHN9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dFcnJvciA6IHRydWUsIHN0YXJ0RGF0ZTogdGhpcy5zdGF0ZS5zdGFydERhdGUsIGVuZERhdGUgOiB0aGlzLnN0YXRlLmVuZERhdGUsIHJvb21zIDogdGhpcy5zdGF0ZS5yb29tcyxcclxuICAgICAgICAgICAgICAgIGFkdWx0cyA6IHRoaXMuc3RhdGUuYWR1bHRzLCBjaGlsZHJlbiA6IHRoaXMuc3RhdGUuY2hpbGRyZW4sIGludmFsaWRGaWVsZHMgOiBpbnZhbGlkRmllbGRzfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXNldFNlYXJjaCA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtzaG93RXJyb3IgOiBmYWxzZSwgaW5pdFNlYXJjaCA6ICBmYWxzZSwgc2VhcmNoU3RlcCA6IDAsIHN0YXJ0RGF0ZTogdGhpcy5zdGF0ZS50b2RheSwgZW5kRGF0ZSA6IHRoaXMuc3RhdGUudG9tb3Jyb3csIHJvb21zIDogJycsXHJcbiAgICAgICAgICAgIGFkdWx0cyA6ICcnLCBjaGlsZHJlbiA6ICcnLCBpbnZhbGlkRmllbGRzIDogW119KVxyXG4gICAgfVxyXG4gICAgYmFja1RvRGV0YWlsID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2luaXRTZWFyY2ggOiAgZmFsc2V9KVxyXG4gICAgfVxyXG4gICAgYmFja1RvQ2FydCA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtzZWFyY2hTdGVwIDogIDF9KVxyXG4gICAgfVxyXG5cclxuICAgIHNlbGVjdFJvb20gPSAocm9vbSwgdHlwZSxlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICBsZXQgc2VsZWN0ZWRSb29tcyA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRSb29tcztcclxuICAgICAgICBsZXQgc2VsZWN0ZWRSb29tSWRzID0gdGhpcy5zdGF0ZS5zZWxlY3RlZFJvb21JZHM7XHJcblxyXG4gICAgICAgIGxldCBob3RlbF9yb29tcyA9IHRoaXMucHJvcHMuaG90ZWxfcm9vbXNcclxuICAgICAgICBpZih0eXBlID09PSAnYWRkJyB8fCB0eXBlID09PSAnY2hvb3NlJykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzZWxlY3RlZFJvb21JZHMpXHJcbiAgICAgICAgICAgIGlmKCFzZWxlY3RlZFJvb21JZHMuaW5jbHVkZXMocm9vbS5yb29taWQpKXtcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkUm9vbUlkcy5wdXNoKHJvb20ucm9vbWlkKVxyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRSb29tcy5wdXNoKHJvb20pO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocm9vbSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodHlwZSA9PT0gJ3JlbW92ZScpIHtcclxuICAgICAgICAgICAgaWYodGhpcy5zdGF0ZS5zZWFyY2hTdGVwID09PSAyICYmIHNlbGVjdGVkUm9vbXMubGVuZ3RoID09PTEpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbVJlbW92YWxNZXNzYWdlIDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmKHNlbGVjdGVkUm9vbUlkcy5pbmNsdWRlcyhyb29tLnJvb21pZCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBzZWxlY3RlZFJvb21JZHMuaW5kZXhPZihyb29tLnJvb21pZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkUm9vbUlkcy5zcGxpY2UoaW5kZXgsIDEpXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRSb29tcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGhvdGVsX3Jvb21zID0gaG90ZWxfcm9vbXMubWFwKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihpdGVtLnJvb21pZCA9PT0gcm9vbS5yb29taWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ucXR5ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkUm9vbUlkcyA6c2VsZWN0ZWRSb29tSWRzLFxyXG4gICAgICAgICAgICBzZWxlY3RlZFJvb21zIDogc2VsZWN0ZWRSb29tcyxcclxuICAgICAgICAgICAgaG90ZWxfcm9vbXMgOiBob3RlbF9yb29tc1xyXG4gICAgICAgIH0sIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGlmKHR5cGUgIT09ICdyZW1vdmUnKSB7XHJcbiAgICAgICAgICAgICAgICAodHlwZSA9PT0gJ2FkZCcgfHwgdHlwZSA9PT0gJ2Nob29zZScgKSA/IHRoaXMuYWRkUXR5KHJvb20pIDogdGhpcy5zdWJRdHkocm9vbSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb250aW51ZVRvU3VtbWFyeSA9ICgpID0+IHtcclxuICAgICAgICBsZXQgYWR1bHRDb3VudCA9IHBhcnNlSW50KHRoaXMuc3RhdGUuYWR1bHRzKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhhZHVsdENvdW50KTtcclxuICAgICAgICBsZXQgcGVyc29uT2NjdXBpZWQgPSAwO1xyXG4gICAgICAgIGxldCBzZWxlY3RlZFJvb21zID0gdGhpcy5zdGF0ZS5zZWxlY3RlZFJvb21zO1xyXG4gICAgICAgIGxldCB0b3RhbFJvb21zID0gMDtcclxuICAgICAgICBpZihzZWxlY3RlZFJvb21zLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgZm9yKHZhciBpPTA7IGk8c2VsZWN0ZWRSb29tcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHF0eSA9IHNlbGVjdGVkUm9vbXNbaV0ucXR5O1xyXG4gICAgICAgICAgICAgICAgdG90YWxSb29tcyArPSBwYXJzZUludChxdHkpO1xyXG4gICAgICAgICAgICAgICAgbGV0IG9jY3VwYW5jeSA9IHBhcnNlSW50KHNlbGVjdGVkUm9vbXNbaV0ubWF4X2NhcGFjaXR5X2FkdWx0KTtcclxuICAgICAgICAgICAgICAgIGxldCBleHRyYV9vY2N1cGFuY3kgPSBzZWxlY3RlZFJvb21zW2ldLmV4dHJhYmVkID09PSAneWVzJz8gIDE6IDA7XHJcbiAgICAgICAgICAgICAgICBsZXQgdG90YWxfb2NjdXBhbmN5ID0gb2NjdXBhbmN5ICsgZXh0cmFfb2NjdXBhbmN5O1xyXG4gICAgICAgICAgICAgICAgcGVyc29uT2NjdXBpZWQgKz0gcGFyc2VJbnQocXR5KSAqdG90YWxfb2NjdXBhbmN5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihzZWxlY3RlZFJvb21zLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGNhbm5vdENvbnRpbnVlIDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGNhbm5vdENvbnRpbnVlTWVzc2FnZSA6IFwiUGxlYXNlIHNlbGVjdCBhdGxlYXN0IGEgcm9vbSB0byBwcm9jZWVkXCJcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZihhZHVsdENvdW50ID4gcGVyc29uT2NjdXBpZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBjYW5ub3RDb250aW51ZSA6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBjYW5ub3RDb250aW51ZU1lc3NhZ2UgOiBcIlNvcnJ5LlwiKyBhZHVsdENvdW50K1wiIHBlcnNvbnMgY2Fubm90IGJlIG9jY3VwaWVkIGluIFwiK3RvdGFsUm9vbXMrXCIgcm9vbXNcIlxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYodGhpcy5zdGF0ZS5zZWxlY3RlZFJvb21zLmxlbmd0aCA+MCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoU3RlcCA6MlxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICBhZGRRdHkgPSAocm9vbSkgPT4ge1xyXG4gICAgICAgIGxldCBzZWxlY3RlZFJvb21zID0gdGhpcy5zdGF0ZS5zZWxlY3RlZFJvb21zO1xyXG4gICAgICAgIGxldCBzZWxlY3RlZFJvb21JZHMgPSB0aGlzLnN0YXRlLnNlbGVjdGVkUm9vbUlkcztcclxuICAgICAgICBsZXQgcm9vbUlkID0gcm9vbS5yb29taWQ7XHJcbiAgICAgICAgc2VsZWN0ZWRSb29tcyA9IHNlbGVjdGVkUm9vbXMubWFwKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBpZihpdGVtLnJvb21pZCA9PT0gcm9vbUlkKSB7XHJcbiAgICAgICAgICAgICAgICBpZihpdGVtLnF0eSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGl0ZW0ucXR5IDwgaXRlbS5yb29tY291bnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5xdHkgPSBwYXJzZUludChpdGVtLnF0eSkgKzE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5xdHkgPSAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBzZWxlY3RlZFJvb21zIDogc2VsZWN0ZWRSb29tcyxcclxuICAgICAgICAgICAgc2VsZWN0ZWRSb29tSWRzIDogc2VsZWN0ZWRSb29tSWRzXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHN1YlF0eSA9IChyb29tKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocm9vbSlcclxuICAgICAgICBsZXQgc2VsZWN0ZWRSb29tcyA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRSb29tcztcclxuICAgICAgICBsZXQgc2VsZWN0ZWRSb29tSWRzID0gdGhpcy5zdGF0ZS5zZWxlY3RlZFJvb21JZHM7XHJcbiAgICAgICAgbGV0IHJvb21JZCA9IHJvb20ucm9vbWlkO1xyXG5cclxuICAgICAgICBpZihyb29tLnF0eSAmJiByb29tLnF0eSA9PT0gMSkge1xyXG4gICAgICAgICAgICBpZih0aGlzLnN0YXRlLnNlYXJjaFN0ZXAgPT09IDIgJiYgc2VsZWN0ZWRSb29tcy5sZW5ndGggPT09MSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtUmVtb3ZhbE1lc3NhZ2UgOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcm9vbS5xdHkgPSAwO1xyXG4gICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gc2VsZWN0ZWRSb29tSWRzLmluZGV4T2Yocm9vbS5yb29taWQpO1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRSb29tSWRzLnNwbGljZShpbmRleCwxKVxyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRSb29tcy5zcGxpY2UoaW5kZXgsMSlcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcblxyXG4gICAgICAgICAgICBzZWxlY3RlZFJvb21zID0gc2VsZWN0ZWRSb29tcy5tYXAoaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZihpdGVtLnJvb21pZCA9PT0gcm9vbUlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5xdHkgPSAoaXRlbS5xdHkgJiYgaXRlbS5xdHkgPjApID8gcGFyc2VJbnQoaXRlbS5xdHkpIC0xIDowO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgc2VsZWN0ZWRSb29tcyA6IHNlbGVjdGVkUm9vbXMsXHJcbiAgICAgICAgICAgIHNlbGVjdGVkUm9vbUlkcyA6IHNlbGVjdGVkUm9vbUlkc1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlUXR5ID0gKHJvb20sZSkgPT4ge1xyXG4gICAgICAgIGxldCBxdHkgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICBsZXQgc2VsZWN0ZWRSb29tcyA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRSb29tcztcclxuICAgICAgICBsZXQgc2VsZWN0ZWRSb29tSWRzID0gdGhpcy5zdGF0ZS5zZWxlY3RlZFJvb21JZHM7XHJcbiAgICAgICAgbGV0IHJvb21JZCA9IHJvb20ucm9vbWlkO1xyXG4gICAgICAgIHNlbGVjdGVkUm9vbXMgPSBzZWxlY3RlZFJvb21zLm1hcChpdGVtID0+IHtcclxuICAgICAgICAgICAgaWYoaXRlbS5yb29taWQgPT09IHJvb21JZCkge1xyXG4gICAgICAgICAgICAgICAgaXRlbS5xdHkgPSAoaXRlbS5xdHkgJiYgaXRlbS5xdHkgPjApID8gcGFyc2VJbnQoaXRlbS5xdHkpIC0xIDogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuc2VsZWN0Um9vbShyb29tKVxyXG4gICAgfVxyXG5cclxuICAgIHNhdmVCb29raW5nID0gKGUsIGFtb3VudCwgcHJpbmNpcGxlQW1vdW50LCBkaXNjb3VudCwgcHJvZ3JhbV9kZXNjcmlwdGlvbiwgZ3N0KSA9PiB7XHJcblxyXG5cclxuICAgICAgICBsZXQgZmlyc3RuYW1lID0gdGhpcy5zdGF0ZS5maXJzdG5hbWU7XHJcbiAgICAgICAgbGV0IGxhc3RuYW1lID0gdGhpcy5zdGF0ZS5sYXN0bmFtZTtcclxuICAgICAgICBsZXQgYWRkcmVzczEgPSB0aGlzLnN0YXRlLmFkZHJlc3MxO1xyXG4gICAgICAgIGxldCBhZGRyZXNzMiA9IHRoaXMuc3RhdGUuYWRkcmVzczI7XHJcbiAgICAgICAgbGV0IGNpdHkgPSB0aGlzLnN0YXRlLmNpdHk7XHJcbiAgICAgICAgbGV0IHN0YXRlID0gdGhpcy5zdGF0ZS5zdGF0ZTtcclxuICAgICAgICBsZXQgY291bnRyeSA9IHRoaXMuc3RhdGUuY291bnRyeTtcclxuICAgICAgICBsZXQgcGluY29kZSA9IHRoaXMuc3RhdGUucGluY29kZTtcclxuICAgICAgICBsZXQgbW9iaWxlID0gdGhpcy5zdGF0ZS5tb2JpbGU7XHJcbiAgICAgICAgbGV0IGFkZGl0aW9uYWxwaG9uZW51bWJlciA9IHRoaXMuc3RhdGUuYWRkaXRpb25hbHBob25lbnVtYmVyO1xyXG4gICAgICAgIGxldCBlbWFpbCA9IHRoaXMuc3RhdGUuZW1haWw7XHJcbiAgICAgICAgbGV0IGludmFsaWRGaWVsZHMgPSBbXTtcclxuICAgICAgICBpZihmaXJzdG5hbWUgPT09ICcnKSB7XHJcbiAgICAgICAgICAgIGludmFsaWRGaWVsZHMucHVzaCgnZmlyc3RuYW1lJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGxhc3RuYW1lID09PSAnJykge1xyXG4gICAgICAgICAgICBpbnZhbGlkRmllbGRzLnB1c2goJ2xhc3RuYW1lJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGFkZHJlc3MxID09PSAnJykge1xyXG4gICAgICAgICAgICBpbnZhbGlkRmllbGRzLnB1c2goJ2FkZHJlc3MxJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGFkZHJlc3MyID09PSAnJykge1xyXG4gICAgICAgICAgICBpbnZhbGlkRmllbGRzLnB1c2goJ2FkZHJlc3MyJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGNpdHkgPT09ICcnKSB7XHJcbiAgICAgICAgICAgIGludmFsaWRGaWVsZHMucHVzaCgnY2l0eScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihzdGF0ZSA9PT0gJycpIHtcclxuICAgICAgICAgICAgaW52YWxpZEZpZWxkcy5wdXNoKCdzdGF0ZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihjb3VudHJ5ID09PSAnJykge1xyXG4gICAgICAgICAgICBpbnZhbGlkRmllbGRzLnB1c2goJ2NvdW50cnknKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYocGluY29kZSA9PT0gJycpIHtcclxuICAgICAgICAgICAgaW52YWxpZEZpZWxkcy5wdXNoKCdwaW5jb2RlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKG1vYmlsZSA9PT0gJycpIHtcclxuICAgICAgICAgICAgaW52YWxpZEZpZWxkcy5wdXNoKCdtb2JpbGUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoYWRkaXRpb25hbHBob25lbnVtYmVyID09PSAnJykge1xyXG4gICAgICAgICAgICBpbnZhbGlkRmllbGRzLnB1c2goJ2FkZGl0aW9uYWxwaG9uZW51bWJlcicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihlbWFpbCA9PT0gJycpIHtcclxuICAgICAgICAgICAgaW52YWxpZEZpZWxkcy5wdXNoKCdlbWFpbCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoaW52YWxpZEZpZWxkcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgbGV0IHNlbGVjdGVkUm9vbXMgPSB0aGlzLnN0YXRlLnNlbGVjdGVkUm9vbXM7XHJcbiAgICAgICAgICAgIGxldCBjaGVja2luZGF0ZSA9IG1vbWVudCh0aGlzLnN0YXRlLnN0YXJ0RGF0ZSkuZm9ybWF0KCd5eXl5LU1NLUREJyk7XHJcbiAgICAgICAgICAgIGxldCBjaGVja291dGRhdGUgPSBtb21lbnQodGhpcy5zdGF0ZS5lbmREYXRlKS5mb3JtYXQoJ3l5eXktTU0tREQnKTtcclxuICAgICAgICAgICAgbGV0IGFkdWx0cyA9IHRoaXMuc3RhdGUuYWR1bHRzIHx8IDA7XHJcbiAgICAgICAgICAgIGxldCBjaGlsZHJlbiA9IHRoaXMuc3RhdGUuY2hpbGRyZW4gfHwgMDtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgdmFyIHN0YXJ0ID0gbW9tZW50KGNoZWNraW5kYXRlLCBcIllZWVktTU0tRERcIik7XHJcbiAgICAgICAgICAgIHZhciBlbmQgPSBtb21lbnQoY2hlY2tvdXRkYXRlLCBcIllZWVktTU0tRERcIik7XHJcblxyXG4gICAgICAgICAgICBsZXQgbm9PZkRheXMgPSBtb21lbnQuZHVyYXRpb24oZW5kLmRpZmYoc3RhcnQpKS5hc0RheXMoKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBub09mcm9vbXMgPSB0aGlzLnN0YXRlLnJvb21zO1xyXG4gICAgICAgICAgICBsZXQgdGF4YW1vdW50ID0gZ3N0O1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coc2VsZWN0ZWRSb29tcylcclxuXHJcbiAgICAgICAgICAgIGxldCBzZWxlY3RlZFNwUmVxcyA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRTcFJlcXM7XHJcblxyXG5cclxuICAgICAgICAgICAgbGV0IGJvb2tlZFJvb21zID0gW107XHJcblxyXG4gICAgICAgICAgICBmb3IobGV0IGk9MDsgaTxzZWxlY3RlZFJvb21zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcm9vbSA9IHtcclxuICAgICAgICAgICAgICAgICAgICBcInJvb21pZFwiIDogc2VsZWN0ZWRSb29tc1tpXS5yb29taWQsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJub29mYWR1bHRzXCIgOiAgc2VsZWN0ZWRSb29tc1tpXS5tYXhfY2FwYWNpdHlfYWR1bHQsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJub29mY2hpbGRzXCIgOiAgMCxcclxuICAgICAgICAgICAgICAgICAgICBcImV4dHJhYmVkXCIgOiAgc2VsZWN0ZWRSb29tc1tpXS5leHRyYWJlZGNvdW50LFxyXG4gICAgICAgICAgICAgICAgICAgIFwicHJpY2VcIiA6ICBzZWxlY3RlZFJvb21zW2ldLnJvb21fcHJpY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJleHRyYWJlZHByaWNlXCIgOiAgMCxcclxuICAgICAgICAgICAgICAgICAgICBcInRheGFtb3VudFwiOiAgMCxcclxuICAgICAgICAgICAgICAgICAgICBcInRvdGFscHJpY2VcIiA6ICBwYXJzZUZsb2F0KHNlbGVjdGVkUm9vbXNbaV0ucm9vbV9wcmljZSkgKiBub09mRGF5cyxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJvb2tlZFJvb21zLnB1c2gocm9vbSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBwYXJhbXMgPSB7XHJcbiAgICAgICAgICAgICAgICBcImhvdGVsX2lkXCI6IHRoaXMuc3RhdGUuaG90ZWxfaWQsXHJcbiAgICAgICAgICAgICAgICBcImNoZWNraW5kYXRlXCI6IGNoZWNraW5kYXRlLFxyXG4gICAgICAgICAgICAgICAgXCJjaGVja291dGRhdGVcIjogY2hlY2tvdXRkYXRlLFxyXG4gICAgICAgICAgICAgICAgXCJub29mYWR1bHRzXCI6IGFkdWx0cyxcclxuICAgICAgICAgICAgICAgIFwibm9vZmNoaWxkc1wiOiBjaGlsZHJlbixcclxuICAgICAgICAgICAgICAgIFwibm9vZnJvb21zXCI6IG5vT2Zyb29tcyxcclxuICAgICAgICAgICAgICAgIFwicHJpY2VcIiA6IHByaW5jaXBsZUFtb3VudCxcclxuICAgICAgICAgICAgICAgIFwidGF4YW1vdW50XCI6IHRheGFtb3VudCxcclxuICAgICAgICAgICAgICAgIFwidG90YWxwcmljZVwiOiBhbW91bnQsXHJcbiAgICAgICAgICAgICAgICBcImZpcnN0bmFtZVwiOiBmaXJzdG5hbWUsXHJcbiAgICAgICAgICAgICAgICBcImxhc3RuYW1lXCI6IGxhc3RuYW1lLFxyXG4gICAgICAgICAgICAgICAgXCJhZGRyZXNzMVwiOiBhZGRyZXNzMSxcclxuICAgICAgICAgICAgICAgIFwiYWRkcmVzczJcIjogYWRkcmVzczIsXHJcbiAgICAgICAgICAgICAgICBcImNpdHlcIjogY2l0eSxcclxuICAgICAgICAgICAgICAgIFwic3RhdGVcIjogc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBcImNvdW50cnlcIjogY291bnRyeSxcclxuICAgICAgICAgICAgICAgIFwicGluY29kZVwiOiBwaW5jb2RlLFxyXG4gICAgICAgICAgICAgICAgXCJtb2JpbGVcIjogbW9iaWxlLFxyXG4gICAgICAgICAgICAgICAgXCJlbWFpbFwiOiBlbWFpbCxcclxuICAgICAgICAgICAgICAgIFwiaWRwcm9vZlwiOiBcInRlc3QucGRmXCIsXHJcbiAgICAgICAgICAgICAgICBcInJvb21zXCI6IGJvb2tlZFJvb21zLFxyXG4gICAgICAgICAgICAgICAgXCJhZGRpdGlvbmFscGhvbmVudW1iZXJcIjogbW9iaWxlLFxyXG4gICAgICAgICAgICAgICAgXCJzcGxyZXF1ZXN0XCIgOiBzZWxlY3RlZFNwUmVxcy5sZW5ndGggPjAgID8gSlNPTi5zdHJpbmdpZnkoc2VsZWN0ZWRTcFJlcXMpIDogXCJcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHBhcmFtcylcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5zYXZlQm9va2luZyhwYXJhbXMpO1xyXG5cclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgaW52YWxpZEZpZWxkcyA6IFtdLFxyXG4gICAgICAgICAgICAgICAgdG90YWxBbW91bnQgOiBhbW91bnQsXHJcbiAgICAgICAgICAgICAgICBwcmluY2lwbGVBbW91bnQgOiBwcmluY2lwbGVBbW91bnQsXHJcbiAgICAgICAgICAgICAgICBkaXNjb3VudCA6IGRpc2NvdW50LFxyXG4gICAgICAgICAgICAgICAgcHJvZ3JhbV9kZXNjcmlwdGlvbiA6IHByb2dyYW1fZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICBnc3QgOiBnc3QsXHJcbiAgICAgICAgICAgICAgICBjaGVja2luZGF0ZSA6IGNoZWNraW5kYXRlLFxyXG4gICAgICAgICAgICAgICAgY2hlY2tvdXRkYXRlIDogY2hlY2tvdXRkYXRlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIHNob3dQcm9maWxlSW5mb0Vycm9yIDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGludmFsaWRGaWVsZHMgOiBpbnZhbGlkRmllbGRzLFxyXG4gICAgICAgICAgICAgICAgdG90YWxBbW91bnQgOiBhbW91bnQsXHJcbiAgICAgICAgICAgICAgICBwcmluY2lwbGVBbW91bnQgOiBwcmluY2lwbGVBbW91bnQsXHJcbiAgICAgICAgICAgICAgICBkaXNjb3VudCA6IGRpc2NvdW50LFxyXG4gICAgICAgICAgICAgICAgcHJvZ3JhbV9kZXNjcmlwdGlvbiA6IHByb2dyYW1fZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICBnc3QgOiBnc3RcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGhpZGVQcm9maWxlSW5mb0Vycm9yID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBzaG93UHJvZmlsZUluZm9FcnJvciA6IGZhbHNlXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjb250aW51ZVRvUGF5bWVudCA9ICgpID0+IHtcclxuICAgICAgICBsZXQgdGhhdD10aGlzO1xyXG4gICAgICAgIGxldCBvcHRpb25zID0ge1xyXG4gICAgICAgICAgICAvLyBrZXk6ICdyenBfbGl2ZV91TlFnejZyT0dROTZxRScsXHJcbiAgICAgICAgICAgIGtleTogJ3J6cF90ZXN0X3JuRUg1STROSHVhR0p4JyxcclxuICAgICAgICAgICAgYW1vdW50OiBwYXJzZUZsb2F0KHRoaXMuc3RhdGUudG90YWxBbW91bnQpKjEwMCwgLy8gID0gSU5SIDFcclxuICAgICAgICAgICAgbmFtZTogJ1VUSCBCb29raW5nJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdQbGVhc2UgcGF5IHRoZSBib29raW5nIGNoYXJnZXMgaGVyZSB0byBjb25maXJtJyxcclxuICAgICAgICAgICAgaW1hZ2U6ICdodHRwczovL3V0aGRldi5uZXZlcmJlZm9yZWhvbGlkYXlzLmNvbS9hc3NldHMvaW1hZ2VzL3V0aC1sb2dvLWJsYWNrLnBuZycsXHJcbiAgICAgICAgICAgIC8vIG9yZGVyX2lkOiB0aGlzLnN0YXRlLm9yZGVySWQsXHJcbiAgICAgICAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICB0aGF0LnNldFN0YXRlKHtQYXltZW50SWQ6IHJlc3BvbnNlLnJhem9ycGF5X3BheW1lbnRfaWQsIHRvdGFsQW1vdW50IDogdGhhdC5zdGF0ZS50b3RhbEFtb3VudCwgZGF0ZSA6IG1vbWVudChuZXcgRGF0ZSgpKS5mb3JtYXQoJ0REIE1NTSBZWVlZJykgLCBlbWFpbCA6dGhhdC5zdGF0ZS5lbWFpbCwgbW9iaWxlIDogdGhhdC5zdGF0ZS5tb2JpbGUgfSlcclxuICAgICAgICAgICAgICAgIC8vbGV0IFBheW1lbnRVcmwgPSBgaHR0cDovLzE1OS42NS4xNTMuNTkvc2l0ZS8jL3BheW1lbnQtc3VjY2Vzcy9gK3RoaXMucHJvcHMuYm9va2luZ0RhdGEuYm9va2luZ0lkO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcGF5bWVudElkID0gcmVzcG9uc2UucmF6b3JwYXlfcGF5bWVudF9pZDtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgUGF5bWVudFVybCA9IGBodHRwczovL3V0aGRldi5uZXZlcmJlZm9yZWhvbGlkYXlzLmNvbS9wYXltZW50LXN1Y2Nlc3M/cnBfaWQ9YCtwYXltZW50SWQrYCZyYW10PWArdGhhdC5zdGF0ZS50b3RhbEFtb3VudCtgJm1vYmlsZT1gK3RoYXQuc3RhdGUubW9iaWxlK2AmZW1haWw9YCt0aGF0LnN0YXRlLmVtYWlsK2AmbWV0aG9kPUNhcmQgcGF5bWVudCZkYXRlPWArbW9tZW50KHRoYXQuc3RhdGUudG9kYXkpLmZvcm1hdCgnREQgTU1NLCBZWVlZJyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgcGFyYW1zID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiX2lkXCI6IHBheW1lbnRJZCxcclxuICAgICAgICAgICAgICAgICAgICBcInJlZmVyZW5jZVwiOiAnVVRIJyxcclxuICAgICAgICAgICAgICAgICAgICBcImRpc2NvdW50XCI6IHRoYXQuc3RhdGUuZGlzY291bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJnc3RcIjogdGhhdC5zdGF0ZS5nc3QsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJkZXNjXCI6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIFwicHJpbmNpcGFsXCI6IHRoYXQuc3RhdGUucHJpbmNpcGxlQW1vdW50LFxyXG4gICAgICAgICAgICAgICAgICAgIFwicGF5bWVudHVybFwiOiBQYXltZW50VXJsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwicHJvZFwiOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy90aGF0LnByb3BzLmNvbmZpcm1Cb29raW5nKHBhcmFtcyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgYm9va1BhcmFtcyA9IHtcclxuICAgICAgICAgICAgICAgICAgICBib29raW5nSWQ6IHRoYXQucHJvcHMuYm9va2luZ0RhdGEuYm9va2luZ0lkXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGF0LnByb3BzLmNvbmZpcm1Cb29raW5nKGJvb2tQYXJhbXMpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwcmVmaWxsOiB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnVVRIJyxcclxuICAgICAgICAgICAgICAgIGNvbnRhY3Q6ICcnLFxyXG4gICAgICAgICAgICAgICAgZW1haWw6ICcnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG5vdGVzOiB7XHJcbiAgICAgICAgICAgICAgICBhZGRyZXNzOiAnVVRIJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0aGVtZToge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICcjM2ZhOWY1JyxcclxuICAgICAgICAgICAgICAgIGhpZGVfdG9wYmFyOiBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKG9wdGlvbnMpO1xyXG4gICAgICAgIHZhciByenAxID0gbmV3IHdpbmRvdy5SYXpvcnBheShvcHRpb25zKTtcclxuICAgICAgICByenAxLm9uKCdwYXltZW50LmZhaWxlZCcsIGZ1bmN0aW9uIChyZXNwb25zZSl7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3BvbnNlLmVycm9yLmRlc2NyaXB0aW9uKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByenAxLm9wZW4oKTtcclxuICAgIH1cclxuXHJcbiAgICBoaWRlRXJyb3IgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHNob3dFcnJvciA6IGZhbHNlXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBoaWRlSXRlbVJlbW92YWxNZXNzYWdlID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBpdGVtUmVtb3ZhbE1lc3NhZ2UgOiBmYWxzZSxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGVtcHR5Q2FydCA9ICgpID0+IHtcclxuICAgICAgICBsZXQgc2VsZWN0ZWRSb29tcyA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRSb29tcztcclxuXHJcbiAgICAgICAgc2VsZWN0ZWRSb29tcyA9IHNlbGVjdGVkUm9vbXMubWFwKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBpdGVtLnF0eSA9IDA7XHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgICAgIH0pXHJcblxyXG5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgaXRlbVJlbW92YWxNZXNzYWdlIDogZmFsc2UsXHJcbiAgICAgICAgICAgIHNlbGVjdGVkUm9vbXMgOiBbXSxcclxuICAgICAgICAgICAgc2VsZWN0ZWRSb29tSWRzIDogW10sXHJcbiAgICAgICAgICAgIHNlYXJjaFN0ZXAgOiAxXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGhpZGVDYW5ub3RDb250aW51ZSA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgY2Fubm90Q29udGludWUgOiBmYWxzZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0Z1bGxEZXRhaWwgPSAoaWQpID0+IHtcclxuICAgICAgICBsZXQgaG90ZWxfcm9vbXMgPSB0aGlzLnByb3BzLmhvdGVsX3Jvb21zO1xyXG4gICAgICAgIGxldCByb29tTGlzdCA9ICBob3RlbF9yb29tcy5maWx0ZXIoaXRlbSA9PiBpdGVtLnJvb21pZCA9PT0gaWQpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBzaG93RGV0YWlsU3RhdHVzIDogdHJ1ZSxcclxuICAgICAgICAgICAgcm9vbUlkIDogaWQsXHJcbiAgICAgICAgICAgIHJvb21EZXRhaWwgOiByb29tTGlzdC5sZW5ndGggPiAwICYmIHJvb21MaXN0WzBdXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBoaWRlRnVsbERldGFpbCA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgc2hvd0RldGFpbFN0YXR1cyA6IGZhbHNlXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBzaG93U3BlY2lhbFJlcXVlc3RzID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBzaG93U3BSZXFTdGF0IDogdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBoaWRlU3BlY2lhbFJlcXVlc3RzID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBzaG93U3BSZXFTdGF0IDogZmFsc2VcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVNwU2VsZWN0aW9uID0gKGUsIHNwKSA9PiB7XHJcbiAgICAgICAgbGV0IHNlbGVjdGVkU3BSZXFJZHMgPSBbLi4udGhpcy5zdGF0ZS5zZWxlY3RlZFNwUmVxSWRzXTtcclxuICAgICAgICBsZXQgc2VsZWN0ZWRTcFJlcXMgPSBbLi4udGhpcy5zdGF0ZS5zZWxlY3RlZFNwUmVxc107XHJcblxyXG4gICAgICAgIGlmKGUudGFyZ2V0LmNoZWNrZWQpIHtcclxuICAgICAgICAgICAgc2VsZWN0ZWRTcFJlcUlkcy5wdXNoKHNwLnNwX2lkKVxyXG4gICAgICAgICAgICBzZWxlY3RlZFNwUmVxcy5wdXNoKHNwKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IGluZGV4ID0gc2VsZWN0ZWRTcFJlcUlkcy5pbmRleE9mKHNwLnNwX2lkKTtcclxuICAgICAgICAgICAgc2VsZWN0ZWRTcFJlcUlkcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICBzZWxlY3RlZFNwUmVxcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkU3BSZXFzIDogc2VsZWN0ZWRTcFJlcXMsXHJcbiAgICAgICAgICAgIHNlbGVjdGVkU3BSZXFJZHMgOiBzZWxlY3RlZFNwUmVxSWRzXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVTcCA9IChlLCBzcF9pZCkgPT4ge1xyXG4gICAgICAgIGxldCBzZWxlY3RlZFNwUmVxSWRzID0gWy4uLnRoaXMuc3RhdGUuc2VsZWN0ZWRTcFJlcUlkc107XHJcbiAgICAgICAgbGV0IHNlbGVjdGVkU3BSZXFzID0gWy4uLnRoaXMuc3RhdGUuc2VsZWN0ZWRTcFJlcXNdO1xyXG4gICAgICAgIGxldCBpbmRleCA9IHNlbGVjdGVkU3BSZXFJZHMuaW5kZXhPZihzcF9pZCk7XHJcbiAgICAgICAgc2VsZWN0ZWRTcFJlcUlkcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIHNlbGVjdGVkU3BSZXFzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkU3BSZXFzIDogc2VsZWN0ZWRTcFJlcXMsXHJcbiAgICAgICAgICAgIHNlbGVjdGVkU3BSZXFJZHMgOiBzZWxlY3RlZFNwUmVxSWRzXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9XHJcblxyXG4gICAgaGlkZVBlbmRpbmdNZXNzYWdlID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBzaG93UGVuZGluZ01lc3NhZ2UgOiBmYWxzZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlQ29udGVudCA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgZXhwYW5kQ29udGVudCA6ICF0aGlzLnN0YXRlLmV4cGFuZENvbnRlbnRcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMuaG90ZWxEZXRhaWwpXHJcbiAgICAgICAgLy9sZXQgaG90ZWxEZXRhaWwgPSB0aGlzLnByb3BzLmhvdGVsRGV0YWlsO1xyXG4gICAgICAgIGxldCBob3RlbERldGFpbCA9IHRoaXMucHJvcHMuaG90ZWxEZXRhaWw7XHJcbiAgICAgICAgbGV0IGJhbm5lckltYWdlcyA9IHRoaXMuc3RhdGUuYmFubmVySW1hZ2VzIHx8IFtdO1xyXG5cclxuXHJcbiAgICAgICAgbGV0IGdhbGxlcnlJbWFnZXMgPSB0aGlzLnByb3BzLmdhbGxlcnlJbWFnZXMgfHwgW107XHJcbiAgICAgICAgbGV0IHN0YXJ0RGF0ZSA9IHRoaXMuc3RhdGUuc3RhcnREYXRlO1xyXG4gICAgICAgIGxldCBlbmREYXRlID0gdGhpcy5zdGF0ZS5lbmREYXRlO1xyXG5cclxuICAgICAgICBsZXQgaG90ZWxfcm9vbXMgPSB0aGlzLnByb3BzLmhvdGVsX3Jvb21zO1xyXG4gICAgICAgIGxldCBnZW5lcmFsX2ZhY2lsaXRpZXMgPSAgaG90ZWxEZXRhaWwgPyBob3RlbERldGFpbC5ob3RlbF9mYWNpbGl0aWVzIDogW107XHJcbiAgICAgICAgbGV0IGhvdGVsZmFjaWxpdGllcyA9IGhvdGVsRGV0YWlsID8gaG90ZWxEZXRhaWwuaG90ZWxmYWNpbGl0aWVzIDogW107XHJcbiAgICAgICAgbGV0IHJvb21UeXBlcyA9IHRoaXMuc3RhdGUucm9vbVR5cGVzIHx8IFtdO1xyXG5cclxuICAgICAgICBsZXQgc2VsZWN0ZWRSb29tcyA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRSb29tcyB8fCBbXTtcclxuICAgICAgICBsZXQgc3BSZXF1ZXN0cyA9IHRoaXMuc3RhdGUuc3BSZXF1ZXN0cyB8fCBbXTtcclxuICAgICAgICBsZXQgc2VsZWN0ZWRTcFJlcUlkcyA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRTcFJlcUlkcyB8fCBbXTtcclxuICAgICAgICBsZXQgc2VsZWN0ZWRTcFJlcXMgPSB0aGlzLnN0YXRlLnNlbGVjdGVkU3BSZXFzIHx8IFtdO1xyXG5cclxuICAgICAgICBsZXQgdG90YWxfY29zdCA9MDtcclxuICAgICAgICBsZXQgdG90YWxfZ3N0ID0wO1xyXG4gICAgICAgIGlmKHNlbGVjdGVkUm9vbXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBmb3IodmFyIGk9MDsgaTxzZWxlY3RlZFJvb21zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB0b3RhbF9jb3N0ICs9IChwYXJzZUZsb2F0KHNlbGVjdGVkUm9vbXNbaV0ucm9vbV9wcmljZSkgKiBwYXJzZUludChzZWxlY3RlZFJvb21zW2ldLnF0eSkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoc2VsZWN0ZWRTcFJlcXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBmb3IodmFyIGk9MDsgaTxzZWxlY3RlZFNwUmVxcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYoc2VsZWN0ZWRTcFJlcXNbaV0uY2F0ZWdvcnkgPT09ICdwYXlhYmxlJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsX2Nvc3QgKz0gcGFyc2VGbG9hdChzZWxlY3RlZFNwUmVxc1tpXS5yYXRlKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRvdGFsX2dzdCA9ICh0b3RhbF9jb3N0KjEwKS8xMDA7XHJcbiAgICAgICAgbGV0IGdyYW5kX3RvdGFsID0gdG90YWxfY29zdCsgdG90YWxfZ3N0O1xyXG4gICAgICAgIC8vZ3JhbmRfdG90YWwgPSBncmFuZF90b3RhbD4wPyBncmFuZF90b3RhbC50b0ZpeGVkKDIpOicnO1xyXG4gICAgICAgIGxldCByYXpvckdyYW5kVG90YWwgPSBncmFuZF90b3RhbCoxMDA7XHJcblxyXG4gICAgICAgIGxldCBpbnZhbGlkRmllbGRzID0gdGhpcy5zdGF0ZS5pbnZhbGlkRmllbGRzIHx8IFtdO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGludmFsaWRGaWVsZHMpXHJcblxyXG4gICAgICAgIGxldCBob3RlbEhpZ2hsaWdodHMgPSB0aGlzLnN0YXRlLmhvdGVsSGlnaGxpZ2h0cyB8fCBbXTtcclxuICAgICAgICBsZXQgaG90ZWxQb2xpY2llcyA9IHRoaXMuc3RhdGUuaG90ZWxQb2xpY2llcyB8fCBbXTtcclxuXHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKHNlbGVjdGVkU3BSZXFzKVxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5uZXItcGFnZVwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8SG90ZWxOYXZiYXIgIHNjcm9sbFRvU2VjdGlvbj17dGhpcy5zY3JvbGxUb1NlY3Rpb259Lz5cclxuICAgICAgICAgICAgICAgICAgICB7aG90ZWxEZXRhaWwgJiZcclxuICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJkZXRhaWxzLWJhbm5uZXJcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcm91c2VsLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2Fyb3VzZWwtdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1Pntob3RlbERldGFpbC5ob3RlbF9uYW1lfTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsb2NhdGlvblwiPntob3RlbERldGFpbC5hZGRyZXNzfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29udGVudFNsaWRlciBpbWFnZXM9e2Jhbm5lckltYWdlc30vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnNlYXJjaFN0ZXAgIT09IDIgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYm9va2luZy1jb250YWluZXIgc3RpY2t5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9va2luZy1wYW5lbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvb2tpbmctcGFuZWwtbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib29raW5nLW9wdGlvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGUtcGlja2VyLXBhbmVsXCI+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERhdGVSYW5nZVBpY2tlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnREYXRlPXtzdGFydERhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmREYXRlPXtlbmREYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25TdGFydERhdGVDaGFuZ2U9e3RoaXMuc2V0U3RhcnREYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25FbmREYXRlQ2hhbmdlPXt0aGlzLnNldEVuZERhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5pbXVtRGF0ZT17bmV3IERhdGUoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbmltdW1MZW5ndGg9ezF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXQ9J2RkL01NL3l5eXknXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhbGU9e2VuR0J9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoe3N0YXJ0RGF0ZUlucHV0UHJvcHMsIGVuZERhdGVJbnB1dFByb3BzLCBmb2N1c30pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGF0ZS1yYW5nZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsnaW5wdXQnICsgKGZvY3VzID09PSBTVEFSVF9EQVRFID8gJyAtZm9jdXNlZCcgOiAnJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uc3RhcnREYXRlSW5wdXRQcm9wc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdTdGFydCBkYXRlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2RhdGUtcmFuZ2VfYXJyb3cnLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eydpbnB1dCcgKyAoZm9jdXMgPT09IEVORF9EQVRFID8gJyAtZm9jdXNlZCcgOiAnJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uZW5kRGF0ZUlucHV0UHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nRW5kIGRhdGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0RhdGVSYW5nZVBpY2tlcj5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VsZWN0LXBhbmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VsZWN0LWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwicm9vbXNcIiB2YWx1ZT17dGhpcy5zdGF0ZS5yb29tc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2ludmFsaWRGaWVsZHMuaW5jbHVkZXMoJ3Jvb21zJykgPyAnZXJyb3ItZmllbGQnIDogJyd9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPlJvb21zPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjFcIj4xPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjJcIj4yPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjNcIj4zPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjRcIj40PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjVcIj41PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjZcIj42PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjdcIj43PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjhcIj44PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjlcIj45Kzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlbGVjdC1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cImFkdWx0c1wiIHZhbHVlPXt0aGlzLnN0YXRlLmFkdWx0c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2ludmFsaWRGaWVsZHMuaW5jbHVkZXMoJ2FkdWx0cycpID8gJ2Vycm9yLWZpZWxkJyA6ICcnfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5BZHVsdHM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMVwiPjE8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMlwiPjI8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiM1wiPjM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNFwiPjQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNVwiPjU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNlwiPjY8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiN1wiPjc8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiOFwiPjg8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiOVwiPjkrPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VsZWN0LWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwiY2hpbGRyZW5cIiB2YWx1ZT17dGhpcy5zdGF0ZS5jaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2ludmFsaWRGaWVsZHMuaW5jbHVkZXMoJ2NoaWxkcmVuJykgPyAnZXJyb3ItZmllbGQnIDogJyd9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPkNoaWxkcmVuPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjBcIj4wPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjFcIj4xPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjJcIj4yPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjNcIj4zPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjRcIj40PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjVcIj41PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjZcIj42PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjdcIj43PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjhcIj44PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjlcIj45Kzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLk1BWF9DQVBBQ0lUWV9NU0cgIT09ICcnICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVycm9yLWZsZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLk1BWF9DQVBBQ0lUWV9NU0d9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9va2luZy1wYW5lbC1yaWdodFwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9va2luZy1idXR0b24tYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImdlbmVyYWwtYnRuXCIgb25DbGljaz17KCkgPT4gdGhpcy5zZWFyY2hSb29tcygpfT5Cb29rIE5vdzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgeyF0aGlzLnN0YXRlLmluaXRTZWFyY2ggJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb29tLXNlY3Rpb24gZmFjaWxpdGllc1wiIGlkPVwiaG90ZWwtb3ZlcnZpZXdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+T3ZlcnZpZXc8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJnZW5lcmFsLWluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJhZGRyZXNzLXNtLWljb1wiPntob3RlbERldGFpbC5hZGRyZXNzfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicGhvbmUtc20taWNvXCI+e2hvdGVsRGV0YWlsLnBob25lbm99ICwge2hvdGVsRGV0YWlsLm1vYmlsZW5vfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgIGNsYXNzTmFtZT1cIm1haWwtc20taWNvXCI+e2hvdGVsRGV0YWlsLmVtYWlsfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGV4dHJhLWNvbnRlbnQgJHt0aGlzLnN0YXRlLmV4cGFuZENvbnRlbnQgPyAnIGFjdGl2ZScgOiAnJ31gfT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJ2aWV3LWRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWwgOiBob3RlbERldGFpbC5ob3RlbF9kZXNjfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtob3RlbEhpZ2hsaWdodHMubGVuZ3RoID4gMCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1Yi1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PkhpZ2hsaWdodHM8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJoaWdobGlnaHQtdGFiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtob3RlbEhpZ2hsaWdodHMubWFwKGhsID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+e2hsLmhpZ2hsaWdodHN9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9saWN5LWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdWItaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5Ib3RlbCBQb2xpY2llczwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+Q2hlY2sgSW4gVGltZTogPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+e2hvdGVsRGV0YWlsID8gaG90ZWxEZXRhaWwuY2hlY2tpbiA6ICcnfTwvc3Bhbj48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+Q2hlY2sgT3V0IFRpbWU6IDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPntob3RlbERldGFpbCA/IGhvdGVsRGV0YWlsLmNoZWNrb3V0IDogJyd9PC9zcGFuPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtob3RlbFBvbGljaWVzLm1hcChocCA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9saWN5LWJveCBpbmRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWItaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+e2hwLmNhdGVnb3J5fTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aHAucG9saWN5Lm1hcChwb2wgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntwb2wucG9saWN5fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiY29udGVudC1oaWRlXCIgb25DbGljaz17KCk9PiB0aGlzLnRvZ2dsZUNvbnRlbnQoKX0+U2hvdyB7dGhpcy5zdGF0ZS5leHBhbmRDb250ZW50ID8gJ2xlc3MnIDogJ21vcmUnfTwvbmF2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJyb29tLXNlY3Rpb25cIiBpZD1cImhvdGVsLXJvb21zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24taGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnNlYXJjaFN0ZXAgPT09IDIgPyAnQm9va2luZyBEZXRhaWxzJyA6ICdSb29tcyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDU+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5pbml0U2VhcmNoICYmIHRoaXMuc3RhdGUuc2VhcmNoU3RlcCA9PT0gMSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRleHQtbGluayBiYWNrXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmJhY2tUb0RldGFpbCgpfT5CYWNrPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuaW5pdFNlYXJjaCAmJlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdmFpbGFibGUtcm9vbXNcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnNlYXJjaFN0ZXAgPT09IDEgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtob3RlbF9yb29tcy5sZW5ndGggPT09IDAgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibm8tcmVzdWx0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbWluZy1zb29uLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPk5vIEhvdGVscyBGb3VuZDwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlNlYXJjaCBBZ2FpbiBmb3IgcmlnaHQgcGxhY2UuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aG90ZWxfcm9vbXMubWFwKHJvb20gPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um9vbVNlYXJjaEJsb2NrIGl0ZW09e3Jvb219IHNlbGVjdFJvb209e3RoaXMuc2VsZWN0Um9vbX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkUm9vbXM9e3RoaXMuc3RhdGUuc2VsZWN0ZWRSb29tc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkUm9vbUlkcz17dGhpcy5zdGF0ZS5zZWxlY3RlZFJvb21JZHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VRdHk9e3RoaXMuY2hhbmdlUXR5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0Z1bGxEZXRhaWw9e3RoaXMuc2hvd0Z1bGxEZXRhaWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvb20tYm9vay1zdWJtaXRcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJnZW5lcmFsLWJ0blwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmNvbnRpbnVlVG9TdW1tYXJ5KCl9PkNvbnRpbnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnNlYXJjaFN0ZXAgPT09IDIgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VtbWFyeS10YWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Sb29tczwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+UXR5PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5QcmljZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+VG90YWwgUHJpY2U8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3NlbGVjdGVkUm9vbXMubWFwKHJvb20gPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdW1tYXJ5SXRlbSBpdGVtPXtyb29tfSBzZWxlY3RSb29tPXt0aGlzLnNlbGVjdFJvb219XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRSb29tcz17dGhpcy5zdGF0ZS5zZWxlY3RlZFJvb21zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkUm9vbUlkcz17dGhpcy5zdGF0ZS5zZWxlY3RlZFJvb21JZHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlUXR5PXt0aGlzLmNoYW5nZVF0eX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwic3BlY2lhbC1zZXJ2aWNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY29sc3Bhbj1cIjVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmF2IG9uQ2xpY2s9eygpID0+IHRoaXMuc2hvd1NwZWNpYWxSZXF1ZXN0cygpfSBjbGFzc05hbWU9XCJmb250LWJvbGRcIj5BZGQgU3BlY2lhbCBSZXF1ZXN0cyArPC9uYXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3NlbGVjdGVkU3BSZXFzLmxlbmd0aCA+MCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFNwUmVxcy5maWx0ZXIoc3AgPT4gc3AuY2F0ZWdvcnkgPT09ICdwYXlhYmxlJykubWFwKHNwID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwic3BlY2lhbC1zZXJ2aWNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbFNwYW49XCIzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntzcC50aXRsZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+4oK5IHtzcC5yYXRlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImRlbGV0ZS1pdGVtXCIgb25DbGljaz17KGUpID0+IHRoaXMucmVtb3ZlU3AoZSxzcC5zcF9pZCl9PjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2VsZWN0ZWRTcFJlcXMubGVuZ3RoID4wICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkU3BSZXFzLmZpbHRlcihzcCA9PiBzcC5jYXRlZ29yeSA9PT0gJ25vbiBwYXlhYmxlJykubWFwKHNwID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwic3BlY2lhbC1zZXJ2aWNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbFNwYW49XCIzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntzcC50aXRsZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+4oK5IDA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJkZWxldGUtaXRlbVwiIG9uQ2xpY2s9eyhlKSA9PiB0aGlzLnJlbW92ZVNwKGUsc3Auc3BfaWQpfT48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+VE9UQUw8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPuKCuSB7dG90YWxfY29zdC50b0ZpeGVkKDIpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJmb250LWJvbGRcIj5HU1QgMTAuMDAlPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJmb250LWJvbGRcIj7igrkge3RvdGFsX2dzdC50b0ZpeGVkKDIpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+R1JBTkQgVE9UQUw8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPuKCuSB7Z3JhbmRfdG90YWwudG9GaXhlZCgyKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xTcGFuPVwiNVwiPkNoZWNrLWluICYgQ2hlY2stb3V0OiA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPnttb21lbnQodGhpcy5zdGF0ZS5jaGVja2luZGF0ZSkuZm9ybWF0KCdERCBNTU0gWVlZWScpfSAtIHttb21lbnQodGhpcy5zdGF0ZS5jaGVja291dGRhdGUpLmZvcm1hdCgnREQgTU1NIFlZWVknKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbi1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+UGVyc29uYWwgRGV0YWlsczwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJmb3JtLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkZpcnN0IE5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJmaXJzdG5hbWVcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmZpcnN0bmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgaW5wdXQtZmllbGQgJHtpbnZhbGlkRmllbGRzLmluY2x1ZGVzKCdmaXJzdG5hbWUnKSA/ICdlcnJvci1maWVsZCcgOiAnJ31gfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkxhc3QgTmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImxhc3RuYW1lXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5sYXN0bmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgaW5wdXQtZmllbGQgJHtpbnZhbGlkRmllbGRzLmluY2x1ZGVzKCdsYXN0bmFtZScpID8gJ2Vycm9yLWZpZWxkJyA6ICcnfWB9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+QWRkcmVzcyAxPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiYWRkcmVzczFcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmFkZHJlc3MxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BpbnB1dC1maWVsZCAke2ludmFsaWRGaWVsZHMuaW5jbHVkZXMoJ2FkZHJlc3MxJykgPyAnZXJyb3ItZmllbGQnIDogJyd9YH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5BZGRyZXNzIDI8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJhZGRyZXNzMlwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuYWRkcmVzczJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGlucHV0LWZpZWxkICR7aW52YWxpZEZpZWxkcy5pbmNsdWRlcygnYWRkcmVzczInKSA/ICdlcnJvci1maWVsZCcgOiAnJ31gfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkNpdHk8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJjaXR5XCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5jaXR5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BpbnB1dC1maWVsZCAke2ludmFsaWRGaWVsZHMuaW5jbHVkZXMoJ2NpdHknKSA/ICdlcnJvci1maWVsZCcgOiAnJ31gfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlN0YXRlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwic3RhdGVcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnN0YXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BpbnB1dC1maWVsZCAke2ludmFsaWRGaWVsZHMuaW5jbHVkZXMoJ3N0YXRlJykgPyAnZXJyb3ItZmllbGQnIDogJyd9YH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5Db3VudHJ5PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiY291bnRyeVwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuY291bnRyeX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgaW5wdXQtZmllbGQgJHtpbnZhbGlkRmllbGRzLmluY2x1ZGVzKCdjb3VudHJ5JykgPyAnZXJyb3ItZmllbGQnIDogJyd9YH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5QaW5jb2RlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwicGluY29kZVwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucGluY29kZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgaW5wdXQtZmllbGQgJHtpbnZhbGlkRmllbGRzLmluY2x1ZGVzKCdwaW5jb2RlJykgPyAnZXJyb3ItZmllbGQnIDogJyd9YH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5Nb2JpbGU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgaW5wdXQtZmllbGQgJHtpbnZhbGlkRmllbGRzLmluY2x1ZGVzKCdtb2JpbGUnKSA/ICdlcnJvci1maWVsZCcgOiAnJ31gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibW9iaWxlXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5tb2JpbGV9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+QWRkaXRpb25hbCBQaG9uZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BpbnB1dC1maWVsZCAke2ludmFsaWRGaWVsZHMuaW5jbHVkZXMoJ2FkZGl0aW9uYWxwaG9uZW51bWJlcicpID8gJ2Vycm9yLWZpZWxkJyA6ICcnfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJhZGRpdGlvbmFscGhvbmVudW1iZXJcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmFkZGl0aW9uYWxwaG9uZW51bWJlcn0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5FbWFpbDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGlucHV0LWZpZWxkICR7aW52YWxpZEZpZWxkcy5pbmNsdWRlcygnZW1haWwnKSA/ICdlcnJvci1maWVsZCcgOiAnJ31gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmVtYWlsfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXltZW50LXdyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImdlbmVyYWwtYnRuIGdyZXlcIiBvbkNsaWNrPXsoKT0+IHRoaXMuYmFja1RvQ2FydCgpfT5CYWNrPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJnZW5lcmFsLWJ0blwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gdGhpcy5zYXZlQm9va2luZyhlLCBncmFuZF90b3RhbCwgdG90YWxfY29zdCwgMC4wMCwgJycsIHRvdGFsX2dzdCl9PkNvbnRpbnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRvIFBheW1lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHshdGhpcy5zdGF0ZS5pbml0U2VhcmNoICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb29tLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aG90ZWxfcm9vbXMubGVuZ3RoID09PSAwICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibm8tcmVzdWx0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Sb29tcyB3aWxsIGJlIGFkZGVkIHNvb248L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aG90ZWxfcm9vbXMubWFwKHJvb20gPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb29tQmxvY2sgaXRlbT17cm9vbX0gc2hvd0Z1bGxEZXRhaWw9e3RoaXMuc2hvd0Z1bGxEZXRhaWx9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHshdGhpcy5zdGF0ZS5pbml0U2VhcmNoICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJjb250ZW50LWFyZWEgdGV4dC1jb250ZW50XCIgaWQ9XCJob3RlbC1mYWNpbGl0aWVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PkZhY2lsaXRpZXMgJiBBdHRyYWN0aW9uczwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZlYXR1cmUtd3JhcHBlciB0aHJlZS1wZXItY29sIGltYWdlLXRvcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyFob3RlbGZhY2lsaXRpZXMgfHwgaG90ZWxmYWNpbGl0aWVzLmxlbmd0aCA9PT0gMCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PkZhY2lsaXRpZXMgd2lsbCBiZSBhZGRlZCBzb29uLjwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2hvdGVsZmFjaWxpdGllcyAmJiBob3RlbGZhY2lsaXRpZXMubGVuZ3RoID4gMCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aG90ZWxmYWNpbGl0aWVzLm1hcCgoZmFjLCBpbmRleCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZhY2lsaXR5TmV3QmxvY2sgaXRlbT17ZmFjfSBpbWdBbGlnbj17aW5kZXggJSAyID09PSAxID8gJ2xlZnQnIDogJ3JpZ2h0J30vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJyb29tLXNlY3Rpb25cIiBpZD1cImhvdGVsLWdhbGxlcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24taGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+R2FsbGVyeTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R2FsbGVyeSBnYWxsZXJ5SW1hZ2VzPXtnYWxsZXJ5SW1hZ2VzfSAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9vdGVyIC8+XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5zaG93RXJyb3IgJiZcclxuICAgICAgICAgICAgICAgIDxBbGVydE1vZGFsXHJcbiAgICAgICAgICAgICAgICAgICAgbW9kYWxIZWFkZXIgPSB7ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kYWxGb290ZXIgPSB7dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICBtb2RhbFRpdGxlID0gXCJXYXJuaW5nXCJcclxuICAgICAgICAgICAgICAgICAgICBtb2RhbEJvZHkgPSBcIlBsZWFzZSBzZWxlY3QgeW91ciBjaG9pY2VzXCJcclxuICAgICAgICAgICAgICAgICAgICBtb2RhbFN0YXR1cz17dGhpcy5zdGF0ZS5zaG93RXJyb3J9XHJcbiAgICAgICAgICAgICAgICAgICAgT0tCdXR0b249e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgQ0FOQ0VMQnV0dG9uPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICBPS0FjdGlvbj17dGhpcy5oaWRlRXJyb3J9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuc2hvd1Byb2ZpbGVJbmZvRXJyb3IgJiZcclxuICAgICAgICAgICAgICAgIDxBbGVydE1vZGFsXHJcbiAgICAgICAgICAgICAgICAgICAgbW9kYWxIZWFkZXIgPSB7ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kYWxGb290ZXIgPSB7dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICBtb2RhbFRpdGxlID0gXCJQcm9maWxlIERldGFpbHNcIlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGFsQm9keSA9IFwiUGxlYXNlIGVudGVyIHlvdXIgcGVyc29uYWwgaW5mb3JtYXRpb24gdG8gcHJvY2VlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgbW9kYWxTdGF0dXM9e3RoaXMuc3RhdGUuc2hvd1Byb2ZpbGVJbmZvRXJyb3J9XHJcbiAgICAgICAgICAgICAgICAgICAgT0tCdXR0b249e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgQ0FOQ0VMQnV0dG9uPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICBPS0FjdGlvbj17dGhpcy5oaWRlUHJvZmlsZUluZm9FcnJvcn1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5pdGVtUmVtb3ZhbE1lc3NhZ2UgJiZcclxuICAgICAgICAgICAgICAgIDxBbGVydE1vZGFsXHJcbiAgICAgICAgICAgICAgICAgICAgbW9kYWxIZWFkZXIgPSB7ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kYWxGb290ZXIgPSB7dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICBtb2RhbFRpdGxlID0gXCJXYXJuaW5nIVwiXHJcbiAgICAgICAgICAgICAgICAgICAgbW9kYWxCb2R5ID0gXCJBcmUgeW91IHN1cmUgdG8gcmVtb3ZlIHRoaXMgcm9vbT8gWW91IHdpbGwgYmUgcmVkaXJlY3RlZCB0byB0aGUgcm9vbXMgbGlzdC5cIlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGFsU3RhdHVzPXt0aGlzLnN0YXRlLml0ZW1SZW1vdmFsTWVzc2FnZX1cclxuICAgICAgICAgICAgICAgICAgICBPS0J1dHRvbj17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICBDQU5DRUxCdXR0b249e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgT0tBY3Rpb249e3RoaXMuZW1wdHlDYXJ0fVxyXG4gICAgICAgICAgICAgICAgICAgIENBTkNFTEFjdGlvbj17dGhpcy5oaWRlSXRlbVJlbW92YWxNZXNzYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgIE9LVGV4dCA9IFwiT0tcIlxyXG4gICAgICAgICAgICAgICAgICAgIENBTkNFTFRleHQgPSBcIkNBTkNFTFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmNhbm5vdENvbnRpbnVlICYmXHJcbiAgICAgICAgICAgICAgICA8QWxlcnRNb2RhbFxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGFsSGVhZGVyID0ge2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGFsRm9vdGVyID0ge3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kYWxUaXRsZSA9IFwiV2FybmluZyFcIlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGFsQm9keSA9IHt0aGlzLnN0YXRlLmNhbm5vdENvbnRpbnVlTWVzc2FnZX1cclxuICAgICAgICAgICAgICAgICAgICBtb2RhbFN0YXR1cz17dGhpcy5zdGF0ZS5jYW5ub3RDb250aW51ZX1cclxuICAgICAgICAgICAgICAgICAgICBPS0J1dHRvbj17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICBDQU5DRUxCdXR0b249e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgIE9LQWN0aW9uPXt0aGlzLmhpZGVDYW5ub3RDb250aW51ZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuc2hvd0RldGFpbFN0YXR1cyAmJlxyXG4gICAgICAgICAgICAgICAgPEZ1bGxXaWR0aE1vZGFsXHJcbiAgICAgICAgICAgICAgICAgICAgbW9kYWxIZWFkZXIgPSB7dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICBtb2RhbEZvb3RlciA9IHt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGFsVGl0bGUgPSB7aG90ZWxEZXRhaWwuaG90ZWxfbmFtZX1cclxuICAgICAgICAgICAgICAgICAgICBtb2RhbEJvZHkgPSB7PFJvb21EZXRhaWwgcm9vbURldGFpbD17dGhpcy5zdGF0ZS5yb29tRGV0YWlsfSBoaWRlRnVsbERldGFpbD17dGhpcy5oaWRlRnVsbERldGFpbH0gLz59XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kYWxTdGF0dXM9e3RoaXMuc3RhdGUuc2hvd0RldGFpbFN0YXR1c31cclxuICAgICAgICAgICAgICAgICAgICBPS0J1dHRvbj17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICBDQU5DRUxCdXR0b249e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgIE9LQWN0aW9uPXt0aGlzLmhpZGVGdWxsRGV0YWlsfVxyXG4gICAgICAgICAgICAgICAgICAgIENBTkNFTEFjdGlvbj17dGhpcy5oaWRlRnVsbERldGFpbH1cclxuICAgICAgICAgICAgICAgICAgICBPS1RleHQgPSBcIk9LXCJcclxuICAgICAgICAgICAgICAgICAgICBDQU5DRUxUZXh0ID0gXCJDQU5DRUxcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5zaG93U3BSZXFTdGF0ICYmXHJcbiAgICAgICAgICAgICAgICA8QWxlcnRNb2RhbFxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGFsSGVhZGVyID0ge2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGFsRm9vdGVyID0ge3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kYWxUaXRsZSA9IFwiV2FybmluZyFcIlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGFsQm9keSA9IHs8SG90ZWxTcFJlcUxpc3Qgc3BSZXF1ZXN0cz17c3BSZXF1ZXN0c30gc2VsZWN0ZWRTcFJlcUlkcz17dGhpcy5zdGF0ZS5zZWxlY3RlZFNwUmVxSWRzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRTcFJlcXM9e3RoaXMuc3RhdGUuc2VsZWN0ZWRTcFJlcXN9IGhhbmRsZVNwU2VsZWN0aW9uPXt0aGlzLmhhbmRsZVNwU2VsZWN0aW9ufSAvPn1cclxuICAgICAgICAgICAgICAgICAgICBtb2RhbFN0YXR1cz17dGhpcy5zdGF0ZS5zaG93U3BSZXFTdGF0fVxyXG4gICAgICAgICAgICAgICAgICAgIE9LQnV0dG9uPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgIENBTkNFTEJ1dHRvbj17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgT0tBY3Rpb249e3RoaXMuaGlkZVNwZWNpYWxSZXF1ZXN0c31cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5zaG93UGVuZGluZ01lc3NhZ2UgJiZcclxuICAgICAgICAgICAgICAgIDxBbGVydE1vZGFsXHJcbiAgICAgICAgICAgICAgICAgICAgbW9kYWxIZWFkZXIgPSB7ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kYWxGb290ZXIgPSB7dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICBtb2RhbFRpdGxlID0gXCJXYXJuaW5nIVwiXHJcbiAgICAgICAgICAgICAgICAgICAgbW9kYWxCb2R5ID0ge1wiQm9va2luZyBpcyB0ZW1wZXJvcmlseSB1bmF2YWlsYWJsZSBkdWUgdG8gQ292aWQtMTkuIEl0IHdpbGwgYmUgYXZhaWxhYmxlIG9ubHkgZnJvbSBKdWx5IDIwMjEgb253YXJkcy4gRm9yIGZ1cnRoZXIgaW5mb3JtYXRpb24gcGxlYXNlIHNlbmQgYW4gZW1haWwgdG8gYm9va2luZ0B1dGhob3RlbHMuY29tIG9yIGNhbGwgKzkxIDk3NDY4Mzg4ODMsKzkxIDk1NjczMzg4ODQuXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kYWxTdGF0dXM9e3RoaXMuc3RhdGUuc2hvd1BlbmRpbmdNZXNzYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgIE9LQnV0dG9uPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgIENBTkNFTEJ1dHRvbj17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgT0tBY3Rpb249e3RoaXMuaGlkZVBlbmRpbmdNZXNzYWdlfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xyXG4gICAgaG90ZWxEYXRhOnN0YXRlLkhvdGVsUmVkdWNlci5ob3RlbERhdGEsXHJcbiAgIC8vIGZhY2lsaXR5RGF0YTpzdGF0ZS5Ib3RlbFJlZHVjZXIuZmFjaWxpdHlEYXRhLFxyXG4gICAgYm9va2luZ0RhdGEgOiBzdGF0ZS5Ib3RlbFJlZHVjZXIuYm9va2luZ0RhdGFcclxufSk7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcclxuICAgIG1hcFN0YXRlVG9Qcm9wcyxcclxuICAgIHtcclxuXHJcbiAgICAgICAgc2VhcmNoUm9vbXMgOiBIb3RlbEFjdGlvbnMuc2VhcmNoUm9vbXMsXHJcbiAgICAgICAgc2F2ZUJvb2tpbmcgOiBIb3RlbEFjdGlvbnMuc2F2ZUJvb2tpbmcsXHJcbiAgICAgICAgY29uZmlybUJvb2tpbmcgOiBIb3RlbEFjdGlvbnMuY29uZmlybUJvb2tpbmcsXHJcbiAgICAgICAgZ2V0QmFubmVySW1hZ2VzIDogSG90ZWxBY3Rpb25zLmdldEJhbm5lckltYWdlcyxcclxuICAgICAgICAvL2dldEhvdGVsSGlnaGxpZ2h0cyA6IEhvdGVsQWN0aW9ucy5nZXRIb3RlbEhpZ2hsaWdodHMsXHJcbiAgICAgICAgZ2V0SG90ZWxQb2xpY2llcyA6IEhvdGVsQWN0aW9ucy5nZXRIb3RlbFBvbGljaWVzLFxyXG4gICAgICAgIGdldFNwUmVxdWVzdHMgOiBIb3RlbEFjdGlvbnMuZ2V0U3BSZXF1ZXN0c1xyXG4gICAgfVxyXG4pKEhvdGVsRGV0YWlsU2x1Zyk7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlN1c3BlbnNlIiwibGF6eSIsInVzZVJvdXRlciIsIkZvb3RlciIsIkNvbnRlbnRTbGlkZXIiLCJnZXRVcmxTZWdtZW50IiwiY29ubmVjdCIsIkhvdGVsQWN0aW9ucyIsImVuR0IiLCJEYXRlUmFuZ2VQaWNrZXIiLCJTVEFSVF9EQVRFIiwiRU5EX0RBVEUiLCJSb29tQmxvY2siLCJSb29tRGV0YWlsIiwiUm9vbVNlYXJjaEJsb2NrIiwiRmFjaWxpdHlOZXdCbG9jayIsIlN1bW1hcnlJdGVtIiwiQWxlcnRNb2RhbCIsIm1vbWVudCIsIkZ1bGxXaWR0aE1vZGFsIiwiSG90ZWxOYXZiYXIiLCJIb3RlbFNwUmVxTGlzdCIsIkdhbGxlcnkiLCJJTUFHRV9QQVRIIiwiQVBJIiwiSG90ZWxEZXRhaWxTbHVnIiwiaG90ZWxEZXRhaWwiLCJnYWxsZXJ5SW1hZ2VzIiwiaG90ZWxfcm9vbXMiLCJyb3V0ZXIiLCJzbHVnIiwicXVlcnkiLCJjb25zb2xlIiwibG9nIiwiSG90ZWxEZXRhaWwiLCJwcm9wcyIsInNlY3Rpb24iLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJibG9jayIsImlubGluZSIsImRhdGUiLCJzZXRTdGF0ZSIsInN0YXJ0RGF0ZSIsImVuZERhdGUiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJuYW1lIiwiTUFYX0NBUEFDSVRZX0dFTkVSQUwiLCJzdGF0ZSIsInJvb21zIiwiYWR1bHRzIiwiY2hpbGRyZW4iLCJpbnZhbGlkRmllbGRzIiwicHVzaCIsImFkdWx0Q291bnQiLCJwYXJzZUludCIsIk1BWF9DQVBBQ0lUWV9NU0ciLCJsZW5ndGgiLCJwYXJhbXMiLCJzaG93RXJyb3IiLCJpbml0U2VhcmNoIiwic2VhcmNoU3RlcCIsInRvZGF5IiwidG9tb3Jyb3ciLCJyb29tIiwidHlwZSIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwic2VsZWN0ZWRSb29tcyIsInNlbGVjdGVkUm9vbUlkcyIsImluY2x1ZGVzIiwicm9vbWlkIiwiaXRlbVJlbW92YWxNZXNzYWdlIiwiaW5kZXgiLCJpbmRleE9mIiwic3BsaWNlIiwibWFwIiwiaXRlbSIsInF0eSIsImFkZFF0eSIsInN1YlF0eSIsInBlcnNvbk9jY3VwaWVkIiwidG90YWxSb29tcyIsImkiLCJvY2N1cGFuY3kiLCJtYXhfY2FwYWNpdHlfYWR1bHQiLCJleHRyYV9vY2N1cGFuY3kiLCJleHRyYWJlZCIsInRvdGFsX29jY3VwYW5jeSIsImNhbm5vdENvbnRpbnVlIiwiY2Fubm90Q29udGludWVNZXNzYWdlIiwicm9vbUlkIiwicm9vbWNvdW50Iiwic2VsZWN0Um9vbSIsImFtb3VudCIsInByaW5jaXBsZUFtb3VudCIsImRpc2NvdW50IiwicHJvZ3JhbV9kZXNjcmlwdGlvbiIsImdzdCIsImZpcnN0bmFtZSIsImxhc3RuYW1lIiwiYWRkcmVzczEiLCJhZGRyZXNzMiIsImNpdHkiLCJjb3VudHJ5IiwicGluY29kZSIsIm1vYmlsZSIsImFkZGl0aW9uYWxwaG9uZW51bWJlciIsImVtYWlsIiwiY2hlY2tpbmRhdGUiLCJmb3JtYXQiLCJjaGVja291dGRhdGUiLCJzdGFydCIsImVuZCIsIm5vT2ZEYXlzIiwiZHVyYXRpb24iLCJkaWZmIiwiYXNEYXlzIiwibm9PZnJvb21zIiwidGF4YW1vdW50Iiwic2VsZWN0ZWRTcFJlcXMiLCJib29rZWRSb29tcyIsImV4dHJhYmVkY291bnQiLCJyb29tX3ByaWNlIiwicGFyc2VGbG9hdCIsImhvdGVsX2lkIiwiSlNPTiIsInN0cmluZ2lmeSIsInNhdmVCb29raW5nIiwidG90YWxBbW91bnQiLCJzaG93UHJvZmlsZUluZm9FcnJvciIsInRoYXQiLCJvcHRpb25zIiwia2V5IiwiZGVzY3JpcHRpb24iLCJpbWFnZSIsImhhbmRsZXIiLCJyZXNwb25zZSIsIlBheW1lbnRJZCIsInJhem9ycGF5X3BheW1lbnRfaWQiLCJEYXRlIiwicGF5bWVudElkIiwiUGF5bWVudFVybCIsImJvb2tQYXJhbXMiLCJib29raW5nSWQiLCJib29raW5nRGF0YSIsImNvbmZpcm1Cb29raW5nIiwicHJlZmlsbCIsImNvbnRhY3QiLCJub3RlcyIsImFkZHJlc3MiLCJ0aGVtZSIsImNvbG9yIiwiaGlkZV90b3BiYXIiLCJyenAxIiwid2luZG93IiwiUmF6b3JwYXkiLCJvbiIsIm9wZW4iLCJpZCIsInJvb21MaXN0IiwiZmlsdGVyIiwic2hvd0RldGFpbFN0YXR1cyIsInJvb21EZXRhaWwiLCJzaG93U3BSZXFTdGF0Iiwic3AiLCJzZWxlY3RlZFNwUmVxSWRzIiwiY2hlY2tlZCIsInNwX2lkIiwic2hvd1BlbmRpbmdNZXNzYWdlIiwiZXhwYW5kQ29udGVudCIsInNldERhdGUiLCJnZXREYXRlIiwicm9vbVR5cGVzIiwiYmFubmVySW1hZ2VzIiwiaG90ZWxQb2xpY2llcyIsImhvdGVsSGlnaGxpZ2h0cyIsInNob3dTcGVjaWFsUmVxdWVzdHMiLCJzcFJlcXVlc3RzIiwic2NyaXB0IiwiY3JlYXRlRWxlbWVudCIsInNyYyIsImFzeW5jIiwiYm9keSIsImFwcGVuZENoaWxkIiwiaG90ZWxfdXJsIiwicHJldlByb3BzIiwicHJldlN0YXRlIiwic25hcHNob3QiLCJtYXhfb2NjdXBhbmN5IiwiaG90ZWxoaWdobGlnaHRzIiwiaG90ZWxwb2xpY2llcyIsInNwZWNpYWxyZXF1ZXN0IiwiZ2VuZXJhbF9mYWNpbGl0aWVzIiwiaG90ZWxfZmFjaWxpdGllcyIsImhvdGVsZmFjaWxpdGllcyIsInRvdGFsX2Nvc3QiLCJ0b3RhbF9nc3QiLCJjYXRlZ29yeSIsInJhdGUiLCJncmFuZF90b3RhbCIsInJhem9yR3JhbmRUb3RhbCIsInNjcm9sbFRvU2VjdGlvbiIsImhvdGVsX25hbWUiLCJzZXRTdGFydERhdGUiLCJzZXRFbmREYXRlIiwic3RhcnREYXRlSW5wdXRQcm9wcyIsImVuZERhdGVJbnB1dFByb3BzIiwiZm9jdXMiLCJoYW5kbGVDaGFuZ2UiLCJzZWFyY2hSb29tcyIsInBob25lbm8iLCJtb2JpbGVubyIsIl9faHRtbCIsImhvdGVsX2Rlc2MiLCJobCIsImhpZ2hsaWdodHMiLCJjaGVja2luIiwiY2hlY2tvdXQiLCJocCIsInBvbGljeSIsInBvbCIsInRvZ2dsZUNvbnRlbnQiLCJiYWNrVG9EZXRhaWwiLCJjaGFuZ2VRdHkiLCJzaG93RnVsbERldGFpbCIsImNvbnRpbnVlVG9TdW1tYXJ5IiwidGl0bGUiLCJyZW1vdmVTcCIsInRvRml4ZWQiLCJiYWNrVG9DYXJ0IiwiZmFjIiwiaGlkZUVycm9yIiwiaGlkZVByb2ZpbGVJbmZvRXJyb3IiLCJlbXB0eUNhcnQiLCJoaWRlSXRlbVJlbW92YWxNZXNzYWdlIiwiaGlkZUNhbm5vdENvbnRpbnVlIiwiaGlkZUZ1bGxEZXRhaWwiLCJoYW5kbGVTcFNlbGVjdGlvbiIsImhpZGVTcGVjaWFsUmVxdWVzdHMiLCJoaWRlUGVuZGluZ01lc3NhZ2UiLCJtYXBTdGF0ZVRvUHJvcHMiLCJob3RlbERhdGEiLCJIb3RlbFJlZHVjZXIiLCJnZXRCYW5uZXJJbWFnZXMiLCJnZXRIb3RlbFBvbGljaWVzIiwiZ2V0U3BSZXF1ZXN0cyJdLCJzb3VyY2VSb290IjoiIn0=