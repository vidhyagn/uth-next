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
    lineNumber: 107,
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
            lineNumber: 829,
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
                      lineNumber: 837,
                      columnNumber: 41
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("p", {
                      className: "location",
                      children: hotelDetail.address
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 838,
                      columnNumber: 41
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 836,
                    columnNumber: 37
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 835,
                  columnNumber: 33
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 834,
                columnNumber: 29
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)(_views_common_hotelSlider__WEBPACK_IMPORTED_MODULE_11__.default, {
                images: bannerImages
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 843,
                columnNumber: 29
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 832,
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
                                lineNumber: 866,
                                columnNumber: 61
                              }, _this3), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("span", {
                                className: "date-range_arrow"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 871,
                                columnNumber: 61
                              }, _this3), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("input", _objectSpread(_objectSpread({
                                className: 'input' + (focus === react_nice_dates__WEBPACK_IMPORTED_MODULE_15__.END_DATE ? ' -focused' : '')
                              }, endDateInputProps), {}, {
                                placeholder: "End date"
                              }), void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 872,
                                columnNumber: 61
                              }, _this3)]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 865,
                              columnNumber: 57
                            }, _this3);
                          }
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 854,
                          columnNumber: 49
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 851,
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
                              lineNumber: 891,
                              columnNumber: 57
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("option", {
                              value: "1",
                              children: "1"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 892,
                              columnNumber: 57
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("option", {
                              value: "2",
                              children: "2"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 893,
                              columnNumber: 57
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("option", {
                              value: "3",
                              children: "3"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 894,
                              columnNumber: 57
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("option", {
                              value: "4",
                              children: "4"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 895,
                              columnNumber: 57
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("option", {
                              value: "5",
                              children: "5"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 896,
                              columnNumber: 57
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("option", {
                              value: "6",
                              children: "6"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 897,
                              columnNumber: 57
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("option", {
                              value: "7",
                              children: "7"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 898,
                              columnNumber: 57
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("option", {
                              value: "8",
                              children: "8"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 899,
                              columnNumber: 57
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("option", {
                              value: "9",
                              children: "9+"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 900,
                              columnNumber: 57
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 888,
                            columnNumber: 53
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 887,
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
                              lineNumber: 907,
                              columnNumber: 57
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("option", {
                              value: "1",
                              children: "1"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 908,
                              columnNumber: 57
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("option", {
                              value: "2",
                              children: "2"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 909,
                              columnNumber: 57
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("option", {
                              value: "3",
                              children: "3"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 910,
                              columnNumber: 57
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("option", {
                              value: "4",
                              children: "4"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 911,
                              columnNumber: 57
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("option", {
                              value: "5",
                              children: "5"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 912,
                              columnNumber: 57
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("option", {
                              value: "6",
                              children: "6"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 913,
                              columnNumber: 57
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("option", {
                              value: "7",
                              children: "7"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 914,
                              columnNumber: 57
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("option", {
                              value: "8",
                              children: "8"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 915,
                              columnNumber: 57
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("option", {
                              value: "9",
                              children: "9+"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 916,
                              columnNumber: 57
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 904,
                            columnNumber: 53
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 903,
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
                              lineNumber: 923,
                              columnNumber: 57
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("option", {
                              value: "0",
                              children: "0"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 924,
                              columnNumber: 57
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("option", {
                              value: "1",
                              children: "1"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 925,
                              columnNumber: 57
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("option", {
                              value: "2",
                              children: "2"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 926,
                              columnNumber: 57
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("option", {
                              value: "3",
                              children: "3"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 927,
                              columnNumber: 57
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("option", {
                              value: "4",
                              children: "4"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 928,
                              columnNumber: 57
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("option", {
                              value: "5",
                              children: "5"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 929,
                              columnNumber: 57
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("option", {
                              value: "6",
                              children: "6"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 930,
                              columnNumber: 57
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("option", {
                              value: "7",
                              children: "7"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 931,
                              columnNumber: 57
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("option", {
                              value: "8",
                              children: "8"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 932,
                              columnNumber: 57
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("option", {
                              value: "9",
                              children: "9+"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 933,
                              columnNumber: 57
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 920,
                            columnNumber: 53
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 919,
                          columnNumber: 49
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 886,
                        columnNumber: 45
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 850,
                      columnNumber: 41
                    }, this), this.state.MAX_CAPACITY_MSG !== '' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                      className: "error-fld",
                      children: this.state.MAX_CAPACITY_MSG
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 941,
                      columnNumber: 41
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 849,
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
                        lineNumber: 949,
                        columnNumber: 45
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 948,
                      columnNumber: 41
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 946,
                    columnNumber: 37
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 848,
                  columnNumber: 33
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 847,
                columnNumber: 29
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 846,
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
                    lineNumber: 961,
                    columnNumber: 37
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 960,
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
                      lineNumber: 965,
                      columnNumber: 41
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("li", {
                      className: "phone-sm-ico",
                      children: [hotelDetail.phoneno, " , ", hotelDetail.mobileno]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 966,
                      columnNumber: 41
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("li", {
                      className: "mail-sm-ico",
                      children: hotelDetail.email
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 967,
                      columnNumber: 41
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 964,
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
                        lineNumber: 973,
                        columnNumber: 45
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 972,
                      columnNumber: 41
                    }, this), hotelHighlights.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.Fragment, {
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                        className: "sub-header",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("h5", {
                          children: "Highlights"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 979,
                          columnNumber: 49
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 978,
                        columnNumber: 45
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("ul", {
                        className: "highlight-tab",
                        children: hotelHighlights.map(function (hl) {
                          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("li", {
                            children: hl.highlights
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 983,
                            columnNumber: 53
                          }, _this3);
                        })
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 981,
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
                          lineNumber: 992,
                          columnNumber: 49
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 991,
                        columnNumber: 45
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("p", {
                        children: ["Check In Time: ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("span", {
                          className: "font-bold",
                          children: hotelDetail ? hotelDetail.checkin : ''
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 994,
                          columnNumber: 63
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 994,
                        columnNumber: 45
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("p", {
                        children: ["Check Out Time: ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("span", {
                          className: "font-bold",
                          children: hotelDetail ? hotelDetail.checkout : ''
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 995,
                          columnNumber: 64
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 995,
                        columnNumber: 45
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 990,
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
                            lineNumber: 1001,
                            columnNumber: 53
                          }, _this3)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 1000,
                          columnNumber: 49
                        }, _this3), hp.policy.map(function (pol) {
                          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("p", {
                            children: pol.policy
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 1004,
                            columnNumber: 53
                          }, _this3);
                        })]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 999,
                        columnNumber: 45
                      }, _this3);
                    })]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 970,
                    columnNumber: 37
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("nav", {
                    className: "content-hide",
                    onClick: function onClick() {
                      return _this3.toggleContent();
                    },
                    children: ["Show ", this.state.expandContent ? 'less' : 'more']
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 1011,
                    columnNumber: 37
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 963,
                  columnNumber: 33
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 959,
                columnNumber: 29
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 958,
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
                    lineNumber: 1021,
                    columnNumber: 37
                  }, this), this.state.initSearch && this.state.searchStep === 1 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("button", {
                    className: "text-link back",
                    onClick: function onClick() {
                      return _this3.backToDetail();
                    },
                    children: "Back"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 1026,
                    columnNumber: 37
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 1020,
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
                          lineNumber: 1041,
                          columnNumber: 49
                        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("p", {
                          children: "Search Again for right place."
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 1042,
                          columnNumber: 49
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 1040,
                        columnNumber: 45
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 1039,
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
                        lineNumber: 1047,
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
                        lineNumber: 1056,
                        columnNumber: 45
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 1054,
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
                              lineNumber: 1069,
                              columnNumber: 53
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("th", {
                              children: "Qty"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1070,
                              columnNumber: 53
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("th", {
                              children: "Price"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1071,
                              columnNumber: 53
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("th", {
                              children: "Total Price"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1072,
                              columnNumber: 53
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("th", {}, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1073,
                              columnNumber: 53
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 1068,
                            columnNumber: 49
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 1067,
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
                              lineNumber: 1078,
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
                                lineNumber: 1087,
                                columnNumber: 57
                              }, this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1086,
                              columnNumber: 53
                            }, this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 1085,
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
                                  lineNumber: 1095,
                                  columnNumber: 61
                                }, _this3)
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 1094,
                                columnNumber: 57
                              }, _this3), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("td", {
                                className: "font-bold",
                                children: ["\u20B9 ", sp.rate]
                              }, void 0, true, {
                                fileName: _jsxFileName,
                                lineNumber: 1097,
                                columnNumber: 57
                              }, _this3), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("td", {
                                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("button", {
                                  className: "delete-item",
                                  onClick: function onClick(e) {
                                    return _this3.removeSp(e, sp.sp_id);
                                  }
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 1099,
                                  columnNumber: 61
                                }, _this3)
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 1098,
                                columnNumber: 57
                              }, _this3)]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 1093,
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
                                  lineNumber: 1107,
                                  columnNumber: 61
                                }, _this3)
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 1106,
                                columnNumber: 57
                              }, _this3), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("td", {
                                className: "font-bold",
                                children: "\u20B9 0"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 1109,
                                columnNumber: 57
                              }, _this3), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("td", {
                                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("button", {
                                  className: "delete-item",
                                  onClick: function onClick(e) {
                                    return _this3.removeSp(e, sp.sp_id);
                                  }
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 1111,
                                  columnNumber: 61
                                }, _this3)
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 1110,
                                columnNumber: 57
                              }, _this3)]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 1105,
                              columnNumber: 53
                            }, _this3);
                          }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("tr", {
                            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("td", {}, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1117,
                              columnNumber: 53
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("td", {}, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1120,
                              columnNumber: 53
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("td", {
                              className: "font-bold",
                              children: "TOTAL"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1121,
                              columnNumber: 53
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("td", {
                              className: "font-bold",
                              children: ["\u20B9 ", total_cost.toFixed(2)]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 1122,
                              columnNumber: 53
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("td", {}, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1123,
                              columnNumber: 53
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 1116,
                            columnNumber: 49
                          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("tr", {
                            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("td", {}, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1126,
                              columnNumber: 53
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("td", {}, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1129,
                              columnNumber: 53
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("td", {
                              className: "font-bold",
                              children: "GST 10.00%"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1130,
                              columnNumber: 53
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("td", {
                              className: "font-bold",
                              children: ["\u20B9 ", total_gst.toFixed(2)]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 1131,
                              columnNumber: 53
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("td", {}, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1132,
                              columnNumber: 53
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 1125,
                            columnNumber: 49
                          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("tr", {
                            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("td", {}, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1136,
                              columnNumber: 53
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("td", {}, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1139,
                              columnNumber: 53
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("td", {
                              className: "font-bold",
                              children: "GRAND TOTAL"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1140,
                              columnNumber: 53
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("td", {
                              className: "font-bold",
                              children: ["\u20B9 ", grand_total.toFixed(2)]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 1141,
                              columnNumber: 53
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("td", {}, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1142,
                              columnNumber: 53
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 1135,
                            columnNumber: 49
                          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("tr", {
                            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("td", {
                              colSpan: "5",
                              children: ["Check-in & Check-out: ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("span", {
                                className: "font-bold",
                                children: [moment__WEBPACK_IMPORTED_MODULE_23___default()(this.state.checkindate).format('DD MMM YYYY'), " - ", moment__WEBPACK_IMPORTED_MODULE_23___default()(this.state.checkoutdate).format('DD MMM YYYY')]
                              }, void 0, true, {
                                fileName: _jsxFileName,
                                lineNumber: 1145,
                                columnNumber: 91
                              }, this)]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 1145,
                              columnNumber: 53
                            }, this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 1144,
                            columnNumber: 49
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 1076,
                          columnNumber: 49
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 1066,
                        columnNumber: 45
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 1065,
                      columnNumber: 41
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                      "class": "section-header",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("h5", {
                        children: "Personal Details"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 1154,
                        columnNumber: 45
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 1153,
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
                              lineNumber: 1161,
                              columnNumber: 57
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("input", {
                              type: "text",
                              name: "firstname",
                              onChange: this.handleChange,
                              value: this.state.firstname,
                              className: "input-field ".concat(invalidFields.includes('firstname') ? 'error-field' : '')
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1162,
                              columnNumber: 57
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 1160,
                            columnNumber: 53
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 1159,
                          columnNumber: 49
                        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                          className: "col-md-6",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                            className: "input-box",
                            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("label", {
                              children: "Last Name"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1169,
                              columnNumber: 57
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("input", {
                              type: "text",
                              name: "lastname",
                              onChange: this.handleChange,
                              value: this.state.lastname,
                              className: "input-field ".concat(invalidFields.includes('lastname') ? 'error-field' : '')
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1170,
                              columnNumber: 57
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 1168,
                            columnNumber: 53
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 1167,
                          columnNumber: 49
                        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                          className: "col-md-6",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                            className: "input-box",
                            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("label", {
                              children: "Address 1"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1177,
                              columnNumber: 57
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("input", {
                              type: "text",
                              name: "address1",
                              onChange: this.handleChange,
                              value: this.state.address1,
                              className: "input-field ".concat(invalidFields.includes('address1') ? 'error-field' : '')
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1178,
                              columnNumber: 57
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 1176,
                            columnNumber: 53
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 1175,
                          columnNumber: 49
                        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                          className: "col-md-6",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                            className: "input-box",
                            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("label", {
                              children: "Address 2"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1185,
                              columnNumber: 57
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("input", {
                              type: "text",
                              name: "address2",
                              onChange: this.handleChange,
                              value: this.state.address2,
                              className: "input-field ".concat(invalidFields.includes('address2') ? 'error-field' : '')
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1186,
                              columnNumber: 57
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 1184,
                            columnNumber: 53
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 1183,
                          columnNumber: 49
                        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                          className: "col-md-3",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                            className: "input-box",
                            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("label", {
                              children: "City"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1193,
                              columnNumber: 57
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("input", {
                              type: "text",
                              name: "city",
                              onChange: this.handleChange,
                              value: this.state.city,
                              className: "input-field ".concat(invalidFields.includes('city') ? 'error-field' : '')
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1194,
                              columnNumber: 57
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 1192,
                            columnNumber: 53
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 1191,
                          columnNumber: 49
                        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                          className: "col-md-3",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                            className: "input-box",
                            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("label", {
                              children: "State"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1201,
                              columnNumber: 57
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("input", {
                              type: "text",
                              name: "state",
                              onChange: this.handleChange,
                              value: this.state.state,
                              className: "input-field ".concat(invalidFields.includes('state') ? 'error-field' : '')
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1202,
                              columnNumber: 57
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 1200,
                            columnNumber: 53
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 1199,
                          columnNumber: 49
                        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                          className: "col-md-3",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                            className: "input-box",
                            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("label", {
                              children: "Country"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1209,
                              columnNumber: 57
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("input", {
                              type: "text",
                              name: "country",
                              onChange: this.handleChange,
                              value: this.state.country,
                              className: "input-field ".concat(invalidFields.includes('country') ? 'error-field' : '')
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1210,
                              columnNumber: 57
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 1208,
                            columnNumber: 53
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 1207,
                          columnNumber: 49
                        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                          className: "col-md-3",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                            className: "input-box",
                            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("label", {
                              children: "Pincode"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1217,
                              columnNumber: 57
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("input", {
                              type: "text",
                              name: "pincode",
                              onChange: this.handleChange,
                              value: this.state.pincode,
                              className: "input-field ".concat(invalidFields.includes('pincode') ? 'error-field' : '')
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1218,
                              columnNumber: 57
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 1216,
                            columnNumber: 53
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 1215,
                          columnNumber: 49
                        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                          className: "col-md-4",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                            className: "input-box",
                            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("label", {
                              children: "Mobile"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1225,
                              columnNumber: 57
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("input", {
                              type: "number",
                              className: "input-field ".concat(invalidFields.includes('mobile') ? 'error-field' : ''),
                              name: "mobile",
                              onChange: this.handleChange,
                              value: this.state.mobile
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1226,
                              columnNumber: 57
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 1224,
                            columnNumber: 53
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 1223,
                          columnNumber: 49
                        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                          className: "col-md-4",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                            className: "input-box",
                            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("label", {
                              children: "Additional Phone"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1234,
                              columnNumber: 57
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("input", {
                              type: "number",
                              className: "input-field ".concat(invalidFields.includes('additionalphonenumber') ? 'error-field' : ''),
                              name: "additionalphonenumber",
                              onChange: this.handleChange,
                              value: this.state.additionalphonenumber
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1235,
                              columnNumber: 57
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 1233,
                            columnNumber: 53
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 1232,
                          columnNumber: 49
                        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                          className: "col-md-4",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                            className: "input-box",
                            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("label", {
                              children: "Email"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1243,
                              columnNumber: 57
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("input", {
                              type: "email",
                              className: "input-field ".concat(invalidFields.includes('email') ? 'error-field' : ''),
                              name: "email",
                              onChange: this.handleChange,
                              value: this.state.email
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1244,
                              columnNumber: 57
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 1242,
                            columnNumber: 53
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 1241,
                          columnNumber: 49
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 1158,
                        columnNumber: 45
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 1157,
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
                        lineNumber: 1254,
                        columnNumber: 45
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("button", {
                        className: "general-btn",
                        onClick: function onClick(e) {
                          return _this3.saveBooking(e, grand_total, total_cost, 0.00, '', total_gst);
                        },
                        children: "Continue To Payment"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 1255,
                        columnNumber: 45
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 1253,
                      columnNumber: 41
                    }, this)]
                  }, void 0, true)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 1034,
                  columnNumber: 33
                }, this), !this.state.initSearch && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                  className: "room-container",
                  children: [hotel_rooms.length === 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                    className: "no-result",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("p", {
                      children: "Rooms will be added soon"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 1270,
                      columnNumber: 41
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 1269,
                    columnNumber: 37
                  }, this), hotel_rooms.map(function (room) {
                    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)(_views_RoomBlock__WEBPACK_IMPORTED_MODULE_17__.default, {
                      item: room,
                      showFullDetail: _this3.showFullDetail
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 1275,
                      columnNumber: 41
                    }, _this3);
                  })]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 1267,
                  columnNumber: 33
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 1018,
                columnNumber: 29
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 1017,
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
                      lineNumber: 1289,
                      columnNumber: 41
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 1288,
                    columnNumber: 37
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                    className: "feature-wrapper three-per-col image-top",
                    children: [!hotelfacilities || hotelfacilities.length === 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("h5", {
                      children: "Facilities will be added soon."
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 1293,
                      columnNumber: 41
                    }, this), hotelfacilities && hotelfacilities.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.Fragment, {
                      children: hotelfacilities.map(function (fac, index) {
                        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)(_views_FacilityNewBlock__WEBPACK_IMPORTED_MODULE_20__.default, {
                          item: fac,
                          imgAlign: index % 2 === 1 ? 'left' : 'right'
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 1299,
                          columnNumber: 49
                        }, _this3);
                      })
                    }, void 0, false)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 1291,
                    columnNumber: 37
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 1287,
                  columnNumber: 33
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1286,
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
                      lineNumber: 1309,
                      columnNumber: 41
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 1308,
                    columnNumber: 37
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)(_views_common_Gallery__WEBPACK_IMPORTED_MODULE_27__.default, {
                    galleryImages: galleryImages
                  }, void 0, false, {
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
              }, this)]
            }, void 0, true)]
          }, void 0, true), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)(_views_Footer__WEBPACK_IMPORTED_MODULE_10__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1324,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 827,
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
          lineNumber: 1331,
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
          lineNumber: 1343,
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
          lineNumber: 1355,
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
          lineNumber: 1371,
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
            lineNumber: 1388,
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
          lineNumber: 1384,
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
            lineNumber: 1404,
            columnNumber: 34
          }, this),
          modalStatus: this.state.showSpReqStat,
          OKButton: true,
          CANCELButton: false,
          OKAction: this.hideSpecialRequests
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1400,
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
          lineNumber: 1413,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 826,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaG90ZWwvW3NsdWddLjE1YWEyMDI5ZGM1OGQ5MzdlNDI4LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsSUFBTTBCLEdBQUcsR0FBRyx3RkFBWixFQUNBOztBQXlFQSxJQUFNQyxlQUFlLEdBQUUsU0FBakJBLGVBQWlCLE9BQWdEO0FBQUE7O0FBQUEsTUFBOUNDLFdBQThDLFFBQTlDQSxXQUE4QztBQUFBLE1BQWpDQyxhQUFpQyxRQUFqQ0EsYUFBaUM7QUFBQSxNQUFsQkMsV0FBa0IsUUFBbEJBLFdBQWtCO0FBRW5FLE1BQU1DLE1BQU0sR0FBRzNCLHNEQUFTLEVBQXhCO0FBQ0EsTUFBUTRCLElBQVIsR0FBaUJELE1BQU0sQ0FBQ0UsS0FBeEIsQ0FBUUQsSUFBUjtBQUNBRSxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWVAsV0FBWjtBQUNBTSxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWU4sYUFBWjtBQUNBSyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUwsV0FBWjtBQUNBSSxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUgsSUFBWjtBQUVBLHNCQUNLLCtEQUFDLFdBQUQ7QUFBYSxlQUFXLEVBQUVKLFdBQVcsQ0FBQyxDQUFELENBQXJDO0FBQTBDLGFBQVMsRUFBRUksSUFBckQ7QUFDYSxpQkFBYSxFQUFFSCxhQUQ1QjtBQUMyQyxlQUFXLEVBQUVDO0FBRHhEO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FETDtBQUlILENBYkQ7O0dBQU1IO1VBRWF2Qjs7O0tBRmJ1Qjs7SUFlQVM7Ozs7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TixDQUFtQmxHO0FBSEgsR0FBTDtBQUFBLENBQTdCOzs7QUFPQSwrREFBZWhKLHFEQUFPLENBQ2xCZ1AsZUFEa0IsRUFFbEI7QUFFSS9CLEVBQUFBLFdBQVcsRUFBR2hOLHdEQUZsQjtBQUdJOEgsRUFBQUEsV0FBVyxFQUFHOUgsd0RBSGxCO0FBSUlnSixFQUFBQSxjQUFjLEVBQUdoSiwyREFKckI7QUFLSWtQLEVBQUFBLGVBQWUsRUFBR2xQLDREQUx0QjtBQU1JO0FBQ0FtUCxFQUFBQSxnQkFBZ0IsRUFBR25QLDZEQVB2QjtBQVFJb1AsRUFBQUEsYUFBYSxFQUFHcFAsMERBQTBCb1A7QUFSOUMsQ0FGa0IsQ0FBUCxDQVlibE8sZUFaYSxDQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2hvdGVsL1tzbHVnXS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LFN1c3BlbnNlLCBsYXp5IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vLi4vdmlld3MvRm9vdGVyXCI7XHJcbmltcG9ydCBDb250ZW50U2xpZGVyIGZyb20gXCIuLi8uLi92aWV3cy9jb21tb24vaG90ZWxTbGlkZXJcIjtcclxuaW1wb3J0IHtnZXRVcmxTZWdtZW50fSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL0N1c3RvbUZ1bmN0aW9uc1wiO1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgKiBhcyBIb3RlbEFjdGlvbnMgZnJvbSBcIi4uLy4uL2FjdGlvbnMvaG90ZWxcIjtcclxuaW1wb3J0IHsgZW5HQiB9IGZyb20gJ2RhdGUtZm5zL2xvY2FsZSdcclxuaW1wb3J0IHsgRGF0ZVJhbmdlUGlja2VyLCBTVEFSVF9EQVRFLCBFTkRfREFURSB9IGZyb20gJ3JlYWN0LW5pY2UtZGF0ZXMnXHJcbmltcG9ydCAncmVhY3QtbmljZS1kYXRlcy9idWlsZC9zdHlsZS5jc3MnXHJcbmltcG9ydCBSb29tQmxvY2sgZnJvbSBcIi4uLy4uL3ZpZXdzL1Jvb21CbG9ja1wiO1xyXG5pbXBvcnQgUm9vbURldGFpbCBmcm9tIFwiLi4vLi4vdmlld3MvUm9vbURldGFpbFwiO1xyXG5pbXBvcnQgUm9vbVNlYXJjaEJsb2NrIGZyb20gXCIuLi8uLi92aWV3cy9Sb29tU2VhcmNoQmxvY2tcIjtcclxuaW1wb3J0IEZhY2lsaXR5TmV3QmxvY2sgZnJvbSBcIi4uLy4uL3ZpZXdzL0ZhY2lsaXR5TmV3QmxvY2tcIjtcclxuaW1wb3J0IFN1bW1hcnlJdGVtIGZyb20gXCIuLi8uLi92aWV3cy9TdW1tYXJ5SXRlbVwiO1xyXG5pbXBvcnQgQWxlcnRNb2RhbCBmcm9tIFwiLi4vLi4vdmlld3MvY29tbW9uL0FsZXJ0TW9kYWxcIjtcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgRnVsbFdpZHRoTW9kYWwgZnJvbSBcIi4uLy4uL3ZpZXdzL2NvbW1vbi9GdWxsV2lkdGhNb2RhbFwiO1xyXG5pbXBvcnQgSG90ZWxOYXZiYXIgZnJvbSBcIi4uLy4uL3ZpZXdzL0hvdGVsTmF2YmFyXCI7XHJcbmltcG9ydCBIb3RlbFNwUmVxTGlzdCBmcm9tIFwiLi4vLi4vdmlld3MvSG90ZWxTcFJlcUxpc3RcIjtcclxuaW1wb3J0IEdhbGxlcnkgZnJvbSBcIi4uLy4uL3ZpZXdzL2NvbW1vbi9HYWxsZXJ5XCI7XHJcbmltcG9ydCB7SU1BR0VfUEFUSCwgQVBJX1BBVEh9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcclxuY29uc3QgQVBJID0gJ2h0dHBzOi8vcnpwX3Rlc3Rfcm5FSDVJNE5IdWFHSng6U1BtcTZxS1FFTHh4TGxZVG5QN1k1ZHlqQGFwaS5yYXpvcnBheS5jb20vdjEvcGF5bWVudHMvJztcclxuLy9UaGlzIGdldHMgY2FsbGVkIGV2ZXJ5IHRpbWUgdGhlIHBhZ2UgaXMgY2FsbGVkXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4gICAgY29uc3Qge3BhcmFtc30gPSBjb250ZXh0O1xyXG4gICAgY29uc3Qge3NsdWd9ID0gcGFyYW1zO1xyXG4gICAgLy9ob3RlbCBkZXRhaWxcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7QVBJX1BBVEh9aG90ZWwvaG90ZWxkZXRhaWxzdjI/dXJsPSR7c2x1Z31gKTtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIGxldCBob3RlbERldGFpbCA9IHJlcy5yZXN1bHRzID8gcmVzLnJlc3VsdHMuZGF0YTogW107XHJcbiAgICBjb25zb2xlLmxvZyhob3RlbERldGFpbClcclxuXHJcbiAgICAvL1Jvb20gVHlwZXNcclxuICAgIGNvbnN0IHJlc3BvbnNlMiA9IGF3YWl0IGZldGNoKGAke0FQSV9QQVRIfWhvdGVsL3Jvb210eXBlYCk7XHJcbiAgICBjb25zdCByZXMyID0gYXdhaXQgcmVzcG9uc2UyLmpzb24oKTtcclxuICAgIGxldCByb29tVHlwZXMgPSByZXMyLnJlc3VsdHMgPyByZXMyLnJlc3VsdHMuZGF0YTogW107XHJcbiAgICBsZXQgYmFubmVySW1hZ2VzID0gW107XHJcbiAgICBsZXQgaG90ZWxfcm9vbXMgPSBbXTtcclxuICAgIGxldCBnYWxsZXJ5SW1hZ2VzID1bXTtcclxuICAgIGxldCBob3RlbF9pZCA9ICcnXHJcbiAgICBpZihob3RlbERldGFpbCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGhvdGVsRGV0YWlsKVxyXG4gICAgICAgIGhvdGVsX2lkID0gaG90ZWxEZXRhaWwuaG90ZWxfaWQ7XHJcbiAgICAgICAgY29uc29sZS5sb2coaG90ZWxfaWQpXHJcbiAgICAgICAgbGV0IHBhcmFtcyA9IHtob3RlbF9pZCA6IGhvdGVsX2lkfTtcclxuICAgICAgICBjb25zdCByZXNwb25zZTMgPSBhd2FpdCBmZXRjaChgJHtBUElfUEFUSH1ob3RlbC9ob3RlbGJhbm5lcmltYWdlc2ApO1xyXG4gICAgICAgIGNvbnN0IHJlczMgPSBhd2FpdCByZXNwb25zZTMuanNvbigpO1xyXG4gICAgICAgIGJhbm5lckltYWdlcyA9IHJlczMucmVzdWx0cyA/IHJlczMucmVzdWx0cy5kYXRhOiBbXTtcclxuXHJcbiAgICAgICAgaG90ZWxfcm9vbXMgPSBob3RlbERldGFpbC5ob3RlbF9yb29tcyB8fCBbXTtcclxuICAgICAgICBob3RlbF9yb29tcyA9IGhvdGVsX3Jvb21zLm1hcChpdGVtID0+IHtcclxuICAgICAgICAgICAgaXRlbS5xdHkgPSAwXHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGdhbGxlcnlJbWFnZXMgPSBob3RlbERldGFpbC5ob3RlbF9pbWFnZXMgfHwgW107XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHByb3BzIDoge1xyXG4gICAgICAgICAgICAgICAgaG90ZWxEZXRhaWwgOiBbaG90ZWxEZXRhaWxdLFxyXG4gICAgICAgICAgICAgICAgaG90ZWxfcm9vbXMgOiBob3RlbF9yb29tcyxcclxuICAgICAgICAgICAgICAgIGdhbGxlcnlJbWFnZXMgOiBnYWxsZXJ5SW1hZ2VzLFxyXG4gICAgICAgICAgICAgICAgYmFubmVySW1hZ2VzIDogYmFubmVySW1hZ2VzXHJcbiAgICAgICAgICAgICAgIC8vIE1BWF9DQVBBQ0lUWV9HRU5FUkFMIDogaG90ZWxEZXRhaWwubWF4X29jY3VwYW5jeSxcclxuICAgICAgICAgICAgICAgIC8vaG90ZWxIaWdobGlnaHRzIDogaG90ZWxEZXRhaWwuaG90ZWxoaWdobGlnaHRzLFxyXG4gICAgICAgICAgICAgICAgLy9ob3RlbFBvbGljaWVzIDogaG90ZWxEZXRhaWwuaG90ZWxwb2xpY2llcyxcclxuICAgICAgICAgICAgICAgIC8vc3BSZXF1ZXN0cyA6IGhvdGVsRGV0YWlsLnNwZWNpYWxyZXF1ZXN0XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy90aGlzLnByb3BzLmdldEJhbm5lckltYWdlcyhwYXJhbXMpO1xyXG4gICAgLy8gbGV0IGhvdGVsX3Jvb21zID0gdGhpcy5wcm9wcy5ob3RlbERldGFpbC5ob3RlbF9yb29tcyB8fCBbXTtcclxuICAgIC8vIGhvdGVsX3Jvb21zID0gaG90ZWxfcm9vbXMubWFwKGl0ZW0gPT4ge1xyXG4gICAgLy8gICAgIGl0ZW0ucXR5ID0gMFxyXG4gICAgLy8gICAgIHJldHVybiBpdGVtO1xyXG4gICAgLy8gfSk7XHJcbiAgICAvLyBsZXQgZ2FsbGVyeUltYWdlcyA9IHRoaXMucHJvcHMuaG90ZWxEZXRhaWwuaG90ZWxfaW1hZ2VzIHx8IFtdO1xyXG4gICAgLy8gdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAvLyAgICAgaG90ZWxfaWQgOiBob3RlbF9pZCxcclxuICAgIC8vICAgICBob3RlbERldGFpbCA6IGhvdGVsRGV0YWlsLFxyXG4gICAgLy8gICAgIGhvdGVsX3Jvb21zIDogaG90ZWxfcm9vbXMsXHJcbiAgICAvLyAgICAgZ2FsbGVyeUltYWdlcyA6IGdhbGxlcnlJbWFnZXMsXHJcbiAgICAvLyAgICAgTUFYX0NBUEFDSVRZX0dFTkVSQUwgOiBob3RlbERldGFpbC5tYXhfb2NjdXBhbmN5LFxyXG4gICAgLy8gICAgIGhvdGVsSGlnaGxpZ2h0cyA6IGhvdGVsRGV0YWlsLmhvdGVsaGlnaGxpZ2h0cyxcclxuICAgIC8vICAgICBob3RlbFBvbGljaWVzIDogaG90ZWxEZXRhaWwuaG90ZWxwb2xpY2llcyxcclxuICAgIC8vICAgICBzcFJlcXVlc3RzIDogaG90ZWxEZXRhaWwuc3BlY2lhbHJlcXVlc3RcclxuICAgIC8vIH0sIGZ1bmN0aW9uKCkge1xyXG4gICAgLy9cclxuICAgIC8vIH0pXHJcblxyXG5cclxufVxyXG5cclxuXHJcblxyXG5jb25zdCBIb3RlbERldGFpbFNsdWcgPSh7aG90ZWxEZXRhaWwsIGdhbGxlcnlJbWFnZXMsIGhvdGVsX3Jvb21zIH0pID0+IHtcclxuXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gICAgY29uc3QgeyBzbHVnIH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgICBjb25zb2xlLmxvZyhob3RlbERldGFpbClcclxuICAgIGNvbnNvbGUubG9nKGdhbGxlcnlJbWFnZXMpXHJcbiAgICBjb25zb2xlLmxvZyhob3RlbF9yb29tcylcclxuICAgIGNvbnNvbGUubG9nKHNsdWcpXHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgICA8SG90ZWxEZXRhaWwgaG90ZWxEZXRhaWw9e2hvdGVsRGV0YWlsWzBdfSBob3RlbF91cmw9e3NsdWd9XHJcbiAgICAgICAgICAgICAgICAgICAgICBnYWxsZXJ5SW1hZ2VzPXtnYWxsZXJ5SW1hZ2VzfSBob3RlbF9yb29tcz17aG90ZWxfcm9vbXN9Lz5cclxuICAgIClcclxufVxyXG5cclxuY2xhc3MgSG90ZWxEZXRhaWwgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgbGV0IHRvZGF5ID0gbmV3IERhdGUoKTtcclxuICAgICAgICBsZXQgdG9tb3Jyb3cgPSBuZXcgRGF0ZSh0b2RheSk7XHJcbiAgICAgICAgdG9tb3Jyb3cuc2V0RGF0ZSh0b21vcnJvdy5nZXREYXRlKCkgKyAxKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICB0b2RheSA6IHRvZGF5LFxyXG4gICAgICAgICAgICB0b21vcnJvdyA6IHRvbW9ycm93LFxyXG4gICAgICAgICAgICBzdGFydERhdGUgOiB0b2RheSxcclxuICAgICAgICAgICAgZW5kRGF0ZSA6IHRvbW9ycm93LFxyXG4gICAgICAgICAgICBjaGVja2luZGF0ZSA6IHRvZGF5LFxyXG4gICAgICAgICAgICBjaGVja291dGRhdGUgOiB0b21vcnJvdyxcclxuICAgICAgICAgICAgcm9vbXMgOiAnJyxcclxuICAgICAgICAgICAgYWR1bHRzIDogJycsXHJcbiAgICAgICAgICAgIGNoaWxkcmVuIDogJycsXHJcbiAgICAgICAgICAgIHJvb21UeXBlcyA6IFtdLFxyXG4gICAgICAgICAgICBpbml0U2VhcmNoIDogZmFsc2UsXHJcbiAgICAgICAgICAgIHNlYXJjaFN0ZXAgOiAxLFxyXG4gICAgICAgICAgICBzZWxlY3RlZFJvb21zIDogW10sXHJcbiAgICAgICAgICAgIHNlbGVjdGVkUm9vbUlkcyA6IFtdLFxyXG4gICAgICAgICAgICBob3RlbF9yb29tcyA6IFtdLFxyXG4gICAgICAgICAgICBpbnZhbGlkRmllbGRzIDogW10sXHJcbiAgICAgICAgICAgIHNob3dFcnJvciA6IGZhbHNlLFxyXG4gICAgICAgICAgICBmaXJzdG5hbWUgOicnLFxyXG4gICAgICAgICAgICBsYXN0bmFtZSA6JycsXHJcbiAgICAgICAgICAgIGFkZHJlc3MxIDogJycsXHJcbiAgICAgICAgICAgIGFkZHJlc3MyIDogJycsXHJcbiAgICAgICAgICAgIGNpdHkgOiAnJyxcclxuICAgICAgICAgICAgc3RhdGUgOiAnJyxcclxuICAgICAgICAgICAgcGluY29kZSA6ICcnLFxyXG4gICAgICAgICAgICBjb3VudHJ5IDogJycsXHJcbiAgICAgICAgICAgIG1vYmlsZSA6ICcnLFxyXG4gICAgICAgICAgICBhZGRpdGlvbmFscGhvbmVudW1iZXIgOiAnJyxcclxuICAgICAgICAgICAgZW1haWwgOiAnJyxcclxuICAgICAgICAgICAgc2hvd1Byb2ZpbGVJbmZvRXJyb3IgOiBmYWxzZSxcclxuICAgICAgICAgICAgYm9va2luZ0lkIDogJycsXHJcbiAgICAgICAgICAgIHRvdGFsQW1vdW50IDogMCxcclxuICAgICAgICAgICAgcHJpbmNpcGxlQW1vdW50IDogMCxcclxuICAgICAgICAgICAgZGlzY291bnQgOiAwLFxyXG4gICAgICAgICAgICBwcm9ncmFtX2Rlc2NyaXB0aW9uIDogJycsXHJcbiAgICAgICAgICAgIGdzdCA6IDAsXHJcbiAgICAgICAgICAgIE1BWF9DQVBBQ0lUWV9NU0cgOiAnJyxcclxuICAgICAgICAgICAgaXRlbVJlbW92YWxNZXNzYWdlIDogZmFsc2UsXHJcbiAgICAgICAgICAgIGJhbm5lckltYWdlcyA6IFtdLFxyXG4gICAgICAgICAgICBjYW5ub3RDb250aW51ZU1lc3NhZ2UgOmZhbHNlLFxyXG4gICAgICAgICAgICBnYWxsZXJ5SW1hZ2VzIDogW10sXHJcbiAgICAgICAgICAgIHNob3dEZXRhaWxTdGF0dXMgOiBmYWxzZSxcclxuICAgICAgICAgICAgaG90ZWxQb2xpY2llcyA6IFtdLFxyXG4gICAgICAgICAgICBob3RlbEhpZ2hsaWdodHMgOiBbXSxcclxuICAgICAgICAgICAgTUFYX0NBUEFDSVRZX0dFTkVSQUwgOiAxLFxyXG4gICAgICAgICAgICBzaG93U3BlY2lhbFJlcXVlc3RzIDogZmFsc2UsXHJcbiAgICAgICAgICAgIHNwUmVxdWVzdHMgOiBbXSxcclxuICAgICAgICAgICAgc2VsZWN0ZWRTcFJlcXMgOltdLFxyXG4gICAgICAgICAgICBzZWxlY3RlZFNwUmVxSWRzIDogW10sXHJcbiAgICAgICAgICAgIHNob3dQZW5kaW5nTWVzc2FnZSA6IGZhbHNlLFxyXG4gICAgICAgICAgICBleHBhbmRDb250ZW50IDogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcclxuICAgICAgICBzY3JpcHQuc3JjID0gJ2h0dHBzOi8vY2hlY2tvdXQucmF6b3JwYXkuY29tL3YxL2NoZWNrb3V0LmpzJztcclxuICAgICAgICBzY3JpcHQuYXN5bmMgPSB0cnVlO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgaG90ZWxfdXJsIDogdGhpcy5wcm9wcy5ob3RlbF91cmxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHNjcm9sbFRvU2VjdGlvbiA9IChzZWN0aW9uKSA9PiB7XHJcbiAgICAgICAgaWYoc2VjdGlvbiAhPT0gJycpIHtcclxuICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzZWN0aW9uKTtcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuc2Nyb2xsSW50b1ZpZXcoe2JlaGF2aW9yOiBcInNtb290aFwiLCBibG9jazogXCJzdGFydFwiLCBpbmxpbmU6IFwibmVhcmVzdFwifSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSwgc25hcHNob3QpIHtcclxuXHJcbiAgICAgICAgaWYodGhpcy5wcm9wcy5ob3RlbERldGFpbCAhPT0gcHJldlByb3BzLmhvdGVsRGV0YWlsKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGhvdGVsX2lkIDogdGhpcy5wcm9wcy5ob3RlbERldGFpbC5ob3RlbF9pZCxcclxuICAgICAgICAgICAgICAgIGhvdGVsRGV0YWlsIDogdGhpcy5wcm9wcy5ob3RlbERldGFpbCxcclxuICAgICAgICAgICAgICAgIGhvdGVsX3Jvb21zIDogdGhpcy5wcm9wcy5ob3RlbF9yb29tcyxcclxuICAgICAgICAgICAgICAgIGdhbGxlcnlJbWFnZXMgOiB0aGlzLnByb3BzLmdhbGxlcnlJbWFnZXMsXHJcbiAgICAgICAgICAgICAgICBNQVhfQ0FQQUNJVFlfR0VORVJBTCA6IHRoaXMucHJvcHMuaG90ZWxEZXRhaWwubWF4X29jY3VwYW5jeSxcclxuICAgICAgICAgICAgICAgIGhvdGVsSGlnaGxpZ2h0cyA6IHRoaXMucHJvcHMuaG90ZWxEZXRhaWwuaG90ZWxoaWdobGlnaHRzLFxyXG4gICAgICAgICAgICAgICAgaG90ZWxQb2xpY2llcyA6IHRoaXMucHJvcHMuaG90ZWxEZXRhaWwuaG90ZWxwb2xpY2llcyxcclxuICAgICAgICAgICAgICAgIHNwUmVxdWVzdHMgOiB0aGlzLnByb3BzLmhvdGVsRGV0YWlsLnNwZWNpYWxyZXF1ZXN0XHJcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGlmKHRoaXMucHJvcHMuZmFjaWxpdHlEYXRhLnJvb21UeXBlcyAhPT0gcHJldlByb3BzLmZhY2lsaXR5RGF0YS5yb29tVHlwZXMpIHtcclxuICAgICAgICAvLyAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgLy8gICAgICAgICByb29tVHlwZXMgOiB0aGlzLnByb3BzLmZhY2lsaXR5RGF0YS5yb29tVHlwZXNcclxuICAgICAgICAvLyAgICAgfSlcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gaWYodGhpcy5wcm9wcy5ib29raW5nRGF0YS5ib29raW5nSWQgIT09IHByZXZQcm9wcy5ib29raW5nRGF0YS5ib29raW5nSWQpIHtcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAvLyAgICAgICAgIGJvb2tpbmdJZCA6IHRoaXMucHJvcHMuYm9va2luZ0RhdGEuYm9va2luZ0lkXHJcbiAgICAgICAgLy8gICAgIH0sIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5jb250aW51ZVRvUGF5bWVudCgpXHJcbiAgICAgICAgLy8gICAgIH0pXHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIGlmKHRoaXMucHJvcHMuYm9va2luZ0RhdGEuYm9va2luZ1Jlc3VsdCAhPT0gcHJldlByb3BzLmJvb2tpbmdEYXRhLmJvb2tpbmdSZXN1bHQpIHtcclxuICAgICAgICAvLyAgICAgbGV0IFBheW1lbnRVcmwgPSBgaHR0cHM6Ly91dGhkZXYubmV2ZXJiZWZvcmVob2xpZGF5cy5jb20vcGF5bWVudC1zdWNjZXNzP3JwX2lkPWArdGhpcy5zdGF0ZS5QYXltZW50SWQrYCZyYW10PWArdGhpcy5zdGF0ZS50b3RhbEFtb3VudCtgJm1vYmlsZT1gK3RoaXMuc3RhdGUubW9iaWxlK2AmZW1haWw9YCt0aGlzLnN0YXRlLmVtYWlsK2AmbWV0aG9kPUNhcmQgcGF5bWVudCZkYXRlPWArbW9tZW50KHRoaXMuc3RhdGUudG9kYXkpLmZvcm1hdCgnREQgTU1NLCBZWVlZJyk7XHJcbiAgICAgICAgLy8gICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gUGF5bWVudFVybDtcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIC8vIGlmKHRoaXMucHJvcHMuaG90ZWxEYXRhLmJhbm5lckltYWdlcyAhPT0gcHJldlByb3BzLmhvdGVsRGF0YS5iYW5uZXJJbWFnZXMpIHtcclxuICAgICAgICAvLyAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgLy8gICAgICAgICBiYW5uZXJJbWFnZXMgOiB0aGlzLnByb3BzLmhvdGVsRGF0YS5iYW5uZXJJbWFnZXNcclxuICAgICAgICAvLyAgICAgfSlcclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0U3RhcnREYXRlID0gKGRhdGUpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgc3RhcnREYXRlIDogZGF0ZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBzZXRFbmREYXRlID0gKGRhdGUpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgZW5kRGF0ZSA6IGRhdGVcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQudmFsdWUpXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIFtlLnRhcmdldC5uYW1lXSA6IGUudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBzZWFyY2hSb29tcyA9ICgpID0+IHtcclxuXHJcblxyXG4gICAgICAgIGxldCBNQVhfQ0FQQUNJVFlfR0VORVJBTCA9IHRoaXMuc3RhdGUuTUFYX0NBUEFDSVRZX0dFTkVSQUw7XHJcbiAgICAgICAgbGV0IHN0YXJ0RGF0ZSA9IHRoaXMuc3RhdGUuc3RhcnREYXRlO1xyXG4gICAgICAgIGxldCBlbmREYXRlID0gdGhpcy5zdGF0ZS5zdGFydERhdGU7XHJcbiAgICAgICAgbGV0IHJvb21zID0gdGhpcy5zdGF0ZS5yb29tcztcclxuICAgICAgICBsZXQgYWR1bHRzID0gdGhpcy5zdGF0ZS5hZHVsdHM7XHJcbiAgICAgICAgbGV0IGNoaWxkcmVuID0gdGhpcy5zdGF0ZS5jaGlsZHJlbjtcclxuICAgICAgICBsZXQgaW52YWxpZEZpZWxkcyA9IFtdO1xyXG4gICAgICAgIGlmKHN0YXJ0RGF0ZSA9PT0gJycpIHtcclxuICAgICAgICAgICAgaW52YWxpZEZpZWxkcy5wdXNoKCdzdGFydERhdGUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoZW5kRGF0ZSA9PT0gJycpIHtcclxuICAgICAgICAgICAgaW52YWxpZEZpZWxkcy5wdXNoKCdlbmREYXRlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHJvb21zID09PSAnJykge1xyXG4gICAgICAgICAgICBpbnZhbGlkRmllbGRzLnB1c2goJ3Jvb21zJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGFkdWx0cyA9PT0gJycpIHtcclxuICAgICAgICAgICAgaW52YWxpZEZpZWxkcy5wdXNoKCdhZHVsdHMnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBhZHVsdENvdW50ID0gcGFyc2VJbnQocm9vbXMpICogcGFyc2VJbnQoTUFYX0NBUEFDSVRZX0dFTkVSQUwpO1xyXG4gICAgICAgIGlmKHBhcnNlSW50KGFkdWx0cykgPiBhZHVsdENvdW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgTUFYX0NBUEFDSVRZX01TRyA6IFwiU29ycnkuIFdlIGFyZSBhbGxvd2luZyBhIG1heGltdW0gb2YgXCIrTUFYX0NBUEFDSVRZX0dFTkVSQUwrXCIgbWVtYmVycyBpbiBhIHJvb21cIlxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihpbnZhbGlkRmllbGRzLmxlbmd0aCA9PT0gMCApIHtcclxuXHJcbiAgICAgICAgICAgIGxldCBwYXJhbXMgPSB7c3RhcnREYXRlOiB0aGlzLnN0YXRlLnN0YXJ0RGF0ZSwgZW5kRGF0ZSA6IHRoaXMuc3RhdGUuZW5kRGF0ZSwgcm9vbXMgOiB0aGlzLnN0YXRlLnJvb21zLFxyXG4gICAgICAgICAgICAgICAgYWR1bHRzIDogdGhpcy5zdGF0ZS5hZHVsdHMsIGNoaWxkcmVuIDogdGhpcy5zdGF0ZS5jaGlsZHJlbn07XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3Nob3dFcnJvciA6IGZhbHNlLCBpbml0U2VhcmNoIDogIHRydWUsIHNlYXJjaFN0ZXAgOiAxLCBzdGFydERhdGU6IHRoaXMuc3RhdGUuc3RhcnREYXRlLCBlbmREYXRlIDogdGhpcy5zdGF0ZS5lbmREYXRlLCByb29tcyA6IHRoaXMuc3RhdGUucm9vbXMsXHJcbiAgICAgICAgICAgICAgICBhZHVsdHMgOiB0aGlzLnN0YXRlLmFkdWx0cywgY2hpbGRyZW4gOiB0aGlzLnN0YXRlLmNoaWxkcmVuLCBpbnZhbGlkRmllbGRzIDogaW52YWxpZEZpZWxkc30pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd0Vycm9yIDogdHJ1ZSwgc3RhcnREYXRlOiB0aGlzLnN0YXRlLnN0YXJ0RGF0ZSwgZW5kRGF0ZSA6IHRoaXMuc3RhdGUuZW5kRGF0ZSwgcm9vbXMgOiB0aGlzLnN0YXRlLnJvb21zLFxyXG4gICAgICAgICAgICAgICAgYWR1bHRzIDogdGhpcy5zdGF0ZS5hZHVsdHMsIGNoaWxkcmVuIDogdGhpcy5zdGF0ZS5jaGlsZHJlbiwgaW52YWxpZEZpZWxkcyA6IGludmFsaWRGaWVsZHN9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJlc2V0U2VhcmNoID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3Nob3dFcnJvciA6IGZhbHNlLCBpbml0U2VhcmNoIDogIGZhbHNlLCBzZWFyY2hTdGVwIDogMCwgc3RhcnREYXRlOiB0aGlzLnN0YXRlLnRvZGF5LCBlbmREYXRlIDogdGhpcy5zdGF0ZS50b21vcnJvdywgcm9vbXMgOiAnJyxcclxuICAgICAgICAgICAgYWR1bHRzIDogJycsIGNoaWxkcmVuIDogJycsIGludmFsaWRGaWVsZHMgOiBbXX0pXHJcbiAgICB9XHJcbiAgICBiYWNrVG9EZXRhaWwgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aW5pdFNlYXJjaCA6ICBmYWxzZX0pXHJcbiAgICB9XHJcbiAgICBiYWNrVG9DYXJ0ID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3NlYXJjaFN0ZXAgOiAgMX0pXHJcbiAgICB9XHJcblxyXG4gICAgc2VsZWN0Um9vbSA9IChyb29tLCB0eXBlLGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIGxldCBzZWxlY3RlZFJvb21zID0gdGhpcy5zdGF0ZS5zZWxlY3RlZFJvb21zO1xyXG4gICAgICAgIGxldCBzZWxlY3RlZFJvb21JZHMgPSB0aGlzLnN0YXRlLnNlbGVjdGVkUm9vbUlkcztcclxuXHJcbiAgICAgICAgbGV0IGhvdGVsX3Jvb21zID0gdGhpcy5wcm9wcy5ob3RlbF9yb29tc1xyXG4gICAgICAgIGlmKHR5cGUgPT09ICdhZGQnIHx8IHR5cGUgPT09ICdjaG9vc2UnKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHNlbGVjdGVkUm9vbUlkcylcclxuICAgICAgICAgICAgaWYoIXNlbGVjdGVkUm9vbUlkcy5pbmNsdWRlcyhyb29tLnJvb21pZCkpe1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRSb29tSWRzLnB1c2gocm9vbS5yb29taWQpXHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZFJvb21zLnB1c2gocm9vbSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyb29tKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih0eXBlID09PSAncmVtb3ZlJykge1xyXG4gICAgICAgICAgICBpZih0aGlzLnN0YXRlLnNlYXJjaFN0ZXAgPT09IDIgJiYgc2VsZWN0ZWRSb29tcy5sZW5ndGggPT09MSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtUmVtb3ZhbE1lc3NhZ2UgOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYoc2VsZWN0ZWRSb29tSWRzLmluY2x1ZGVzKHJvb20ucm9vbWlkKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IHNlbGVjdGVkUm9vbUlkcy5pbmRleE9mKHJvb20ucm9vbWlkKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRSb29tSWRzLnNwbGljZShpbmRleCwgMSlcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFJvb21zLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaG90ZWxfcm9vbXMgPSBob3RlbF9yb29tcy5tYXAoaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGl0ZW0ucm9vbWlkID09PSByb29tLnJvb21pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5xdHkgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgc2VsZWN0ZWRSb29tSWRzIDpzZWxlY3RlZFJvb21JZHMsXHJcbiAgICAgICAgICAgIHNlbGVjdGVkUm9vbXMgOiBzZWxlY3RlZFJvb21zLFxyXG4gICAgICAgICAgICBob3RlbF9yb29tcyA6IGhvdGVsX3Jvb21zXHJcbiAgICAgICAgfSwgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgaWYodHlwZSAhPT0gJ3JlbW92ZScpIHtcclxuICAgICAgICAgICAgICAgICh0eXBlID09PSAnYWRkJyB8fCB0eXBlID09PSAnY2hvb3NlJyApID8gdGhpcy5hZGRRdHkocm9vbSkgOiB0aGlzLnN1YlF0eShyb29tKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbnRpbnVlVG9TdW1tYXJ5ID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCBhZHVsdENvdW50ID0gcGFyc2VJbnQodGhpcy5zdGF0ZS5hZHVsdHMpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGFkdWx0Q291bnQpO1xyXG4gICAgICAgIGxldCBwZXJzb25PY2N1cGllZCA9IDA7XHJcbiAgICAgICAgbGV0IHNlbGVjdGVkUm9vbXMgPSB0aGlzLnN0YXRlLnNlbGVjdGVkUm9vbXM7XHJcbiAgICAgICAgbGV0IHRvdGFsUm9vbXMgPSAwO1xyXG4gICAgICAgIGlmKHNlbGVjdGVkUm9vbXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBmb3IodmFyIGk9MDsgaTxzZWxlY3RlZFJvb21zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcXR5ID0gc2VsZWN0ZWRSb29tc1tpXS5xdHk7XHJcbiAgICAgICAgICAgICAgICB0b3RhbFJvb21zICs9IHBhcnNlSW50KHF0eSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgb2NjdXBhbmN5ID0gcGFyc2VJbnQoc2VsZWN0ZWRSb29tc1tpXS5tYXhfY2FwYWNpdHlfYWR1bHQpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGV4dHJhX29jY3VwYW5jeSA9IHNlbGVjdGVkUm9vbXNbaV0uZXh0cmFiZWQgPT09ICd5ZXMnPyAgMTogMDtcclxuICAgICAgICAgICAgICAgIGxldCB0b3RhbF9vY2N1cGFuY3kgPSBvY2N1cGFuY3kgKyBleHRyYV9vY2N1cGFuY3k7XHJcbiAgICAgICAgICAgICAgICBwZXJzb25PY2N1cGllZCArPSBwYXJzZUludChxdHkpICp0b3RhbF9vY2N1cGFuY3k7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHNlbGVjdGVkUm9vbXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgY2Fubm90Q29udGludWUgOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgY2Fubm90Q29udGludWVNZXNzYWdlIDogXCJQbGVhc2Ugc2VsZWN0IGF0bGVhc3QgYSByb29tIHRvIHByb2NlZWRcIlxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKGFkdWx0Q291bnQgPiBwZXJzb25PY2N1cGllZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGNhbm5vdENvbnRpbnVlIDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGNhbm5vdENvbnRpbnVlTWVzc2FnZSA6IFwiU29ycnkuXCIrIGFkdWx0Q291bnQrXCIgcGVyc29ucyBjYW5ub3QgYmUgb2NjdXBpZWQgaW4gXCIrdG90YWxSb29tcytcIiByb29tc1wiXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZih0aGlzLnN0YXRlLnNlbGVjdGVkUm9vbXMubGVuZ3RoID4wKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBzZWFyY2hTdGVwIDoyXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGFkZFF0eSA9IChyb29tKSA9PiB7XHJcbiAgICAgICAgbGV0IHNlbGVjdGVkUm9vbXMgPSB0aGlzLnN0YXRlLnNlbGVjdGVkUm9vbXM7XHJcbiAgICAgICAgbGV0IHNlbGVjdGVkUm9vbUlkcyA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRSb29tSWRzO1xyXG4gICAgICAgIGxldCByb29tSWQgPSByb29tLnJvb21pZDtcclxuICAgICAgICBzZWxlY3RlZFJvb21zID0gc2VsZWN0ZWRSb29tcy5tYXAoaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIGlmKGl0ZW0ucm9vbWlkID09PSByb29tSWQpIHtcclxuICAgICAgICAgICAgICAgIGlmKGl0ZW0ucXR5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoaXRlbS5xdHkgPCBpdGVtLnJvb21jb3VudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnF0eSA9IHBhcnNlSW50KGl0ZW0ucXR5KSArMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLnF0eSA9IDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkUm9vbXMgOiBzZWxlY3RlZFJvb21zLFxyXG4gICAgICAgICAgICBzZWxlY3RlZFJvb21JZHMgOiBzZWxlY3RlZFJvb21JZHNcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgc3ViUXR5ID0gKHJvb20pID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyb29tKVxyXG4gICAgICAgIGxldCBzZWxlY3RlZFJvb21zID0gdGhpcy5zdGF0ZS5zZWxlY3RlZFJvb21zO1xyXG4gICAgICAgIGxldCBzZWxlY3RlZFJvb21JZHMgPSB0aGlzLnN0YXRlLnNlbGVjdGVkUm9vbUlkcztcclxuICAgICAgICBsZXQgcm9vbUlkID0gcm9vbS5yb29taWQ7XHJcblxyXG4gICAgICAgIGlmKHJvb20ucXR5ICYmIHJvb20ucXR5ID09PSAxKSB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuc3RhdGUuc2VhcmNoU3RlcCA9PT0gMiAmJiBzZWxlY3RlZFJvb21zLmxlbmd0aCA9PT0xKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1SZW1vdmFsTWVzc2FnZSA6IHRydWVcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByb29tLnF0eSA9IDA7XHJcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBzZWxlY3RlZFJvb21JZHMuaW5kZXhPZihyb29tLnJvb21pZCk7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZFJvb21JZHMuc3BsaWNlKGluZGV4LDEpXHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZFJvb21zLnNwbGljZShpbmRleCwxKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIHNlbGVjdGVkUm9vbXMgPSBzZWxlY3RlZFJvb21zLm1hcChpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKGl0ZW0ucm9vbWlkID09PSByb29tSWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLnF0eSA9IChpdGVtLnF0eSAmJiBpdGVtLnF0eSA+MCkgPyBwYXJzZUludChpdGVtLnF0eSkgLTEgOjA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBzZWxlY3RlZFJvb21zIDogc2VsZWN0ZWRSb29tcyxcclxuICAgICAgICAgICAgc2VsZWN0ZWRSb29tSWRzIDogc2VsZWN0ZWRSb29tSWRzXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VRdHkgPSAocm9vbSxlKSA9PiB7XHJcbiAgICAgICAgbGV0IHF0eSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIGxldCBzZWxlY3RlZFJvb21zID0gdGhpcy5zdGF0ZS5zZWxlY3RlZFJvb21zO1xyXG4gICAgICAgIGxldCBzZWxlY3RlZFJvb21JZHMgPSB0aGlzLnN0YXRlLnNlbGVjdGVkUm9vbUlkcztcclxuICAgICAgICBsZXQgcm9vbUlkID0gcm9vbS5yb29taWQ7XHJcbiAgICAgICAgc2VsZWN0ZWRSb29tcyA9IHNlbGVjdGVkUm9vbXMubWFwKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBpZihpdGVtLnJvb21pZCA9PT0gcm9vbUlkKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLnF0eSA9IChpdGVtLnF0eSAmJiBpdGVtLnF0eSA+MCkgPyBwYXJzZUludChpdGVtLnF0eSkgLTEgOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5zZWxlY3RSb29tKHJvb20pXHJcbiAgICB9XHJcblxyXG4gICAgc2F2ZUJvb2tpbmcgPSAoZSwgYW1vdW50LCBwcmluY2lwbGVBbW91bnQsIGRpc2NvdW50LCBwcm9ncmFtX2Rlc2NyaXB0aW9uLCBnc3QpID0+IHtcclxuXHJcblxyXG4gICAgICAgIGxldCBmaXJzdG5hbWUgPSB0aGlzLnN0YXRlLmZpcnN0bmFtZTtcclxuICAgICAgICBsZXQgbGFzdG5hbWUgPSB0aGlzLnN0YXRlLmxhc3RuYW1lO1xyXG4gICAgICAgIGxldCBhZGRyZXNzMSA9IHRoaXMuc3RhdGUuYWRkcmVzczE7XHJcbiAgICAgICAgbGV0IGFkZHJlc3MyID0gdGhpcy5zdGF0ZS5hZGRyZXNzMjtcclxuICAgICAgICBsZXQgY2l0eSA9IHRoaXMuc3RhdGUuY2l0eTtcclxuICAgICAgICBsZXQgc3RhdGUgPSB0aGlzLnN0YXRlLnN0YXRlO1xyXG4gICAgICAgIGxldCBjb3VudHJ5ID0gdGhpcy5zdGF0ZS5jb3VudHJ5O1xyXG4gICAgICAgIGxldCBwaW5jb2RlID0gdGhpcy5zdGF0ZS5waW5jb2RlO1xyXG4gICAgICAgIGxldCBtb2JpbGUgPSB0aGlzLnN0YXRlLm1vYmlsZTtcclxuICAgICAgICBsZXQgYWRkaXRpb25hbHBob25lbnVtYmVyID0gdGhpcy5zdGF0ZS5hZGRpdGlvbmFscGhvbmVudW1iZXI7XHJcbiAgICAgICAgbGV0IGVtYWlsID0gdGhpcy5zdGF0ZS5lbWFpbDtcclxuICAgICAgICBsZXQgaW52YWxpZEZpZWxkcyA9IFtdO1xyXG4gICAgICAgIGlmKGZpcnN0bmFtZSA9PT0gJycpIHtcclxuICAgICAgICAgICAgaW52YWxpZEZpZWxkcy5wdXNoKCdmaXJzdG5hbWUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYobGFzdG5hbWUgPT09ICcnKSB7XHJcbiAgICAgICAgICAgIGludmFsaWRGaWVsZHMucHVzaCgnbGFzdG5hbWUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoYWRkcmVzczEgPT09ICcnKSB7XHJcbiAgICAgICAgICAgIGludmFsaWRGaWVsZHMucHVzaCgnYWRkcmVzczEnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoYWRkcmVzczIgPT09ICcnKSB7XHJcbiAgICAgICAgICAgIGludmFsaWRGaWVsZHMucHVzaCgnYWRkcmVzczInKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoY2l0eSA9PT0gJycpIHtcclxuICAgICAgICAgICAgaW52YWxpZEZpZWxkcy5wdXNoKCdjaXR5Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHN0YXRlID09PSAnJykge1xyXG4gICAgICAgICAgICBpbnZhbGlkRmllbGRzLnB1c2goJ3N0YXRlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGNvdW50cnkgPT09ICcnKSB7XHJcbiAgICAgICAgICAgIGludmFsaWRGaWVsZHMucHVzaCgnY291bnRyeScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihwaW5jb2RlID09PSAnJykge1xyXG4gICAgICAgICAgICBpbnZhbGlkRmllbGRzLnB1c2goJ3BpbmNvZGUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYobW9iaWxlID09PSAnJykge1xyXG4gICAgICAgICAgICBpbnZhbGlkRmllbGRzLnB1c2goJ21vYmlsZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihhZGRpdGlvbmFscGhvbmVudW1iZXIgPT09ICcnKSB7XHJcbiAgICAgICAgICAgIGludmFsaWRGaWVsZHMucHVzaCgnYWRkaXRpb25hbHBob25lbnVtYmVyJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGVtYWlsID09PSAnJykge1xyXG4gICAgICAgICAgICBpbnZhbGlkRmllbGRzLnB1c2goJ2VtYWlsJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihpbnZhbGlkRmllbGRzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICBsZXQgc2VsZWN0ZWRSb29tcyA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRSb29tcztcclxuICAgICAgICAgICAgbGV0IGNoZWNraW5kYXRlID0gbW9tZW50KHRoaXMuc3RhdGUuc3RhcnREYXRlKS5mb3JtYXQoJ3l5eXktTU0tREQnKTtcclxuICAgICAgICAgICAgbGV0IGNoZWNrb3V0ZGF0ZSA9IG1vbWVudCh0aGlzLnN0YXRlLmVuZERhdGUpLmZvcm1hdCgneXl5eS1NTS1ERCcpO1xyXG4gICAgICAgICAgICBsZXQgYWR1bHRzID0gdGhpcy5zdGF0ZS5hZHVsdHMgfHwgMDtcclxuICAgICAgICAgICAgbGV0IGNoaWxkcmVuID0gdGhpcy5zdGF0ZS5jaGlsZHJlbiB8fCAwO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICB2YXIgc3RhcnQgPSBtb21lbnQoY2hlY2tpbmRhdGUsIFwiWVlZWS1NTS1ERFwiKTtcclxuICAgICAgICAgICAgdmFyIGVuZCA9IG1vbWVudChjaGVja291dGRhdGUsIFwiWVlZWS1NTS1ERFwiKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBub09mRGF5cyA9IG1vbWVudC5kdXJhdGlvbihlbmQuZGlmZihzdGFydCkpLmFzRGF5cygpO1xyXG5cclxuICAgICAgICAgICAgbGV0IG5vT2Zyb29tcyA9IHRoaXMuc3RhdGUucm9vbXM7XHJcbiAgICAgICAgICAgIGxldCB0YXhhbW91bnQgPSBnc3Q7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzZWxlY3RlZFJvb21zKVxyXG5cclxuICAgICAgICAgICAgbGV0IHNlbGVjdGVkU3BSZXFzID0gdGhpcy5zdGF0ZS5zZWxlY3RlZFNwUmVxcztcclxuXHJcblxyXG4gICAgICAgICAgICBsZXQgYm9va2VkUm9vbXMgPSBbXTtcclxuXHJcbiAgICAgICAgICAgIGZvcihsZXQgaT0wOyBpPHNlbGVjdGVkUm9vbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCByb29tID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIFwicm9vbWlkXCIgOiBzZWxlY3RlZFJvb21zW2ldLnJvb21pZCxcclxuICAgICAgICAgICAgICAgICAgICBcIm5vb2ZhZHVsdHNcIiA6ICBzZWxlY3RlZFJvb21zW2ldLm1heF9jYXBhY2l0eV9hZHVsdCxcclxuICAgICAgICAgICAgICAgICAgICBcIm5vb2ZjaGlsZHNcIiA6ICAwLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZXh0cmFiZWRcIiA6ICBzZWxlY3RlZFJvb21zW2ldLmV4dHJhYmVkY291bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJwcmljZVwiIDogIHNlbGVjdGVkUm9vbXNbaV0ucm9vbV9wcmljZSxcclxuICAgICAgICAgICAgICAgICAgICBcImV4dHJhYmVkcHJpY2VcIiA6ICAwLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidGF4YW1vdW50XCI6ICAwLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidG90YWxwcmljZVwiIDogIHBhcnNlRmxvYXQoc2VsZWN0ZWRSb29tc1tpXS5yb29tX3ByaWNlKSAqIG5vT2ZEYXlzLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYm9va2VkUm9vbXMucHVzaChyb29tKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IHBhcmFtcyA9IHtcclxuICAgICAgICAgICAgICAgIFwiaG90ZWxfaWRcIjogdGhpcy5zdGF0ZS5ob3RlbF9pZCxcclxuICAgICAgICAgICAgICAgIFwiY2hlY2tpbmRhdGVcIjogY2hlY2tpbmRhdGUsXHJcbiAgICAgICAgICAgICAgICBcImNoZWNrb3V0ZGF0ZVwiOiBjaGVja291dGRhdGUsXHJcbiAgICAgICAgICAgICAgICBcIm5vb2ZhZHVsdHNcIjogYWR1bHRzLFxyXG4gICAgICAgICAgICAgICAgXCJub29mY2hpbGRzXCI6IGNoaWxkcmVuLFxyXG4gICAgICAgICAgICAgICAgXCJub29mcm9vbXNcIjogbm9PZnJvb21zLFxyXG4gICAgICAgICAgICAgICAgXCJwcmljZVwiIDogcHJpbmNpcGxlQW1vdW50LFxyXG4gICAgICAgICAgICAgICAgXCJ0YXhhbW91bnRcIjogdGF4YW1vdW50LFxyXG4gICAgICAgICAgICAgICAgXCJ0b3RhbHByaWNlXCI6IGFtb3VudCxcclxuICAgICAgICAgICAgICAgIFwiZmlyc3RuYW1lXCI6IGZpcnN0bmFtZSxcclxuICAgICAgICAgICAgICAgIFwibGFzdG5hbWVcIjogbGFzdG5hbWUsXHJcbiAgICAgICAgICAgICAgICBcImFkZHJlc3MxXCI6IGFkZHJlc3MxLFxyXG4gICAgICAgICAgICAgICAgXCJhZGRyZXNzMlwiOiBhZGRyZXNzMixcclxuICAgICAgICAgICAgICAgIFwiY2l0eVwiOiBjaXR5LFxyXG4gICAgICAgICAgICAgICAgXCJzdGF0ZVwiOiBzdGF0ZSxcclxuICAgICAgICAgICAgICAgIFwiY291bnRyeVwiOiBjb3VudHJ5LFxyXG4gICAgICAgICAgICAgICAgXCJwaW5jb2RlXCI6IHBpbmNvZGUsXHJcbiAgICAgICAgICAgICAgICBcIm1vYmlsZVwiOiBtb2JpbGUsXHJcbiAgICAgICAgICAgICAgICBcImVtYWlsXCI6IGVtYWlsLFxyXG4gICAgICAgICAgICAgICAgXCJpZHByb29mXCI6IFwidGVzdC5wZGZcIixcclxuICAgICAgICAgICAgICAgIFwicm9vbXNcIjogYm9va2VkUm9vbXMsXHJcbiAgICAgICAgICAgICAgICBcImFkZGl0aW9uYWxwaG9uZW51bWJlclwiOiBtb2JpbGUsXHJcbiAgICAgICAgICAgICAgICBcInNwbHJlcXVlc3RcIiA6IHNlbGVjdGVkU3BSZXFzLmxlbmd0aCA+MCAgPyBKU09OLnN0cmluZ2lmeShzZWxlY3RlZFNwUmVxcykgOiBcIlwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc29sZS5sb2cocGFyYW1zKVxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLnNhdmVCb29raW5nKHBhcmFtcyk7XHJcblxyXG5cclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBpbnZhbGlkRmllbGRzIDogW10sXHJcbiAgICAgICAgICAgICAgICB0b3RhbEFtb3VudCA6IGFtb3VudCxcclxuICAgICAgICAgICAgICAgIHByaW5jaXBsZUFtb3VudCA6IHByaW5jaXBsZUFtb3VudCxcclxuICAgICAgICAgICAgICAgIGRpc2NvdW50IDogZGlzY291bnQsXHJcbiAgICAgICAgICAgICAgICBwcm9ncmFtX2Rlc2NyaXB0aW9uIDogcHJvZ3JhbV9kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgIGdzdCA6IGdzdCxcclxuICAgICAgICAgICAgICAgIGNoZWNraW5kYXRlIDogY2hlY2tpbmRhdGUsXHJcbiAgICAgICAgICAgICAgICBjaGVja291dGRhdGUgOiBjaGVja291dGRhdGVcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgc2hvd1Byb2ZpbGVJbmZvRXJyb3IgOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgaW52YWxpZEZpZWxkcyA6IGludmFsaWRGaWVsZHMsXHJcbiAgICAgICAgICAgICAgICB0b3RhbEFtb3VudCA6IGFtb3VudCxcclxuICAgICAgICAgICAgICAgIHByaW5jaXBsZUFtb3VudCA6IHByaW5jaXBsZUFtb3VudCxcclxuICAgICAgICAgICAgICAgIGRpc2NvdW50IDogZGlzY291bnQsXHJcbiAgICAgICAgICAgICAgICBwcm9ncmFtX2Rlc2NyaXB0aW9uIDogcHJvZ3JhbV9kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgIGdzdCA6IGdzdFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgaGlkZVByb2ZpbGVJbmZvRXJyb3IgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHNob3dQcm9maWxlSW5mb0Vycm9yIDogZmFsc2VcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnRpbnVlVG9QYXltZW50ID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCB0aGF0PXRoaXM7XHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIC8vIGtleTogJ3J6cF9saXZlX3VOUWd6NnJPR1E5NnFFJyxcclxuICAgICAgICAgICAga2V5OiAncnpwX3Rlc3Rfcm5FSDVJNE5IdWFHSngnLFxyXG4gICAgICAgICAgICBhbW91bnQ6IHBhcnNlRmxvYXQodGhpcy5zdGF0ZS50b3RhbEFtb3VudCkqMTAwLCAvLyAgPSBJTlIgMVxyXG4gICAgICAgICAgICBuYW1lOiAnVVRIIEJvb2tpbmcnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1BsZWFzZSBwYXkgdGhlIGJvb2tpbmcgY2hhcmdlcyBoZXJlIHRvIGNvbmZpcm0nLFxyXG4gICAgICAgICAgICBpbWFnZTogJ2h0dHBzOi8vdXRoZGV2Lm5ldmVyYmVmb3JlaG9saWRheXMuY29tL2Fzc2V0cy9pbWFnZXMvdXRoLWxvZ28tYmxhY2sucG5nJyxcclxuICAgICAgICAgICAgLy8gb3JkZXJfaWQ6IHRoaXMuc3RhdGUub3JkZXJJZCxcclxuICAgICAgICAgICAgaGFuZGxlcjogZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgIHRoYXQuc2V0U3RhdGUoe1BheW1lbnRJZDogcmVzcG9uc2UucmF6b3JwYXlfcGF5bWVudF9pZCwgdG90YWxBbW91bnQgOiB0aGF0LnN0YXRlLnRvdGFsQW1vdW50LCBkYXRlIDogbW9tZW50KG5ldyBEYXRlKCkpLmZvcm1hdCgnREQgTU1NIFlZWVknKSAsIGVtYWlsIDp0aGF0LnN0YXRlLmVtYWlsLCBtb2JpbGUgOiB0aGF0LnN0YXRlLm1vYmlsZSB9KVxyXG4gICAgICAgICAgICAgICAgLy9sZXQgUGF5bWVudFVybCA9IGBodHRwOi8vMTU5LjY1LjE1My41OS9zaXRlLyMvcGF5bWVudC1zdWNjZXNzL2ArdGhpcy5wcm9wcy5ib29raW5nRGF0YS5ib29raW5nSWQ7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwYXltZW50SWQgPSByZXNwb25zZS5yYXpvcnBheV9wYXltZW50X2lkO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBQYXltZW50VXJsID0gYGh0dHBzOi8vdXRoZGV2Lm5ldmVyYmVmb3JlaG9saWRheXMuY29tL3BheW1lbnQtc3VjY2Vzcz9ycF9pZD1gK3BheW1lbnRJZCtgJnJhbXQ9YCt0aGF0LnN0YXRlLnRvdGFsQW1vdW50K2AmbW9iaWxlPWArdGhhdC5zdGF0ZS5tb2JpbGUrYCZlbWFpbD1gK3RoYXQuc3RhdGUuZW1haWwrYCZtZXRob2Q9Q2FyZCBwYXltZW50JmRhdGU9YCttb21lbnQodGhhdC5zdGF0ZS50b2RheSkuZm9ybWF0KCdERCBNTU0sIFlZWVknKTtcclxuICAgICAgICAgICAgICAgIGxldCBwYXJhbXMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJfaWRcIjogcGF5bWVudElkLFxyXG4gICAgICAgICAgICAgICAgICAgIFwicmVmZXJlbmNlXCI6ICdVVEgnLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZGlzY291bnRcIjogdGhhdC5zdGF0ZS5kaXNjb3VudCxcclxuICAgICAgICAgICAgICAgICAgICBcImdzdFwiOiB0aGF0LnN0YXRlLmdzdCxcclxuICAgICAgICAgICAgICAgICAgICBcImRlc2NcIjogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJwcmluY2lwYWxcIjogdGhhdC5zdGF0ZS5wcmluY2lwbGVBbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJwYXltZW50dXJsXCI6IFBheW1lbnRVcmwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJwcm9kXCI6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvL3RoYXQucHJvcHMuY29uZmlybUJvb2tpbmcocGFyYW1zKTtcclxuICAgICAgICAgICAgICAgIGxldCBib29rUGFyYW1zID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvb2tpbmdJZDogdGhhdC5wcm9wcy5ib29raW5nRGF0YS5ib29raW5nSWRcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoYXQucHJvcHMuY29uZmlybUJvb2tpbmcoYm9va1BhcmFtcyk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHByZWZpbGw6IHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdVVEgnLFxyXG4gICAgICAgICAgICAgICAgY29udGFjdDogJycsXHJcbiAgICAgICAgICAgICAgICBlbWFpbDogJydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbm90ZXM6IHtcclxuICAgICAgICAgICAgICAgIGFkZHJlc3M6ICdVVEgnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHRoZW1lOiB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJyMzZmE5ZjUnLFxyXG4gICAgICAgICAgICAgICAgaGlkZV90b3BiYXI6IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vY29uc29sZS5sb2cob3B0aW9ucyk7XHJcbiAgICAgICAgdmFyIHJ6cDEgPSBuZXcgd2luZG93LlJhem9ycGF5KG9wdGlvbnMpO1xyXG4gICAgICAgIHJ6cDEub24oJ3BheW1lbnQuZmFpbGVkJywgZnVuY3Rpb24gKHJlc3BvbnNlKXtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzcG9uc2UuZXJyb3IuZGVzY3JpcHRpb24pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJ6cDEub3BlbigpO1xyXG4gICAgfVxyXG5cclxuICAgIGhpZGVFcnJvciA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgc2hvd0Vycm9yIDogZmFsc2VcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGhpZGVJdGVtUmVtb3ZhbE1lc3NhZ2UgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGl0ZW1SZW1vdmFsTWVzc2FnZSA6IGZhbHNlLFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgZW1wdHlDYXJ0ID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCBzZWxlY3RlZFJvb21zID0gdGhpcy5zdGF0ZS5zZWxlY3RlZFJvb21zO1xyXG5cclxuICAgICAgICBzZWxlY3RlZFJvb21zID0gc2VsZWN0ZWRSb29tcy5tYXAoaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIGl0ZW0ucXR5ID0gMDtcclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICAgICAgfSlcclxuXHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBpdGVtUmVtb3ZhbE1lc3NhZ2UgOiBmYWxzZSxcclxuICAgICAgICAgICAgc2VsZWN0ZWRSb29tcyA6IFtdLFxyXG4gICAgICAgICAgICBzZWxlY3RlZFJvb21JZHMgOiBbXSxcclxuICAgICAgICAgICAgc2VhcmNoU3RlcCA6IDFcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgaGlkZUNhbm5vdENvbnRpbnVlID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBjYW5ub3RDb250aW51ZSA6IGZhbHNlXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBzaG93RnVsbERldGFpbCA9IChpZCkgPT4ge1xyXG4gICAgICAgIGxldCBob3RlbF9yb29tcyA9IHRoaXMucHJvcHMuaG90ZWxfcm9vbXM7XHJcbiAgICAgICAgbGV0IHJvb21MaXN0ID0gIGhvdGVsX3Jvb21zLmZpbHRlcihpdGVtID0+IGl0ZW0ucm9vbWlkID09PSBpZCk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHNob3dEZXRhaWxTdGF0dXMgOiB0cnVlLFxyXG4gICAgICAgICAgICByb29tSWQgOiBpZCxcclxuICAgICAgICAgICAgcm9vbURldGFpbCA6IHJvb21MaXN0Lmxlbmd0aCA+IDAgJiYgcm9vbUxpc3RbMF1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGhpZGVGdWxsRGV0YWlsID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBzaG93RGV0YWlsU3RhdHVzIDogZmFsc2VcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHNob3dTcGVjaWFsUmVxdWVzdHMgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHNob3dTcFJlcVN0YXQgOiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGhpZGVTcGVjaWFsUmVxdWVzdHMgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHNob3dTcFJlcVN0YXQgOiBmYWxzZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlU3BTZWxlY3Rpb24gPSAoZSwgc3ApID0+IHtcclxuICAgICAgICBsZXQgc2VsZWN0ZWRTcFJlcUlkcyA9IFsuLi50aGlzLnN0YXRlLnNlbGVjdGVkU3BSZXFJZHNdO1xyXG4gICAgICAgIGxldCBzZWxlY3RlZFNwUmVxcyA9IFsuLi50aGlzLnN0YXRlLnNlbGVjdGVkU3BSZXFzXTtcclxuXHJcbiAgICAgICAgaWYoZS50YXJnZXQuY2hlY2tlZCkge1xyXG4gICAgICAgICAgICBzZWxlY3RlZFNwUmVxSWRzLnB1c2goc3Auc3BfaWQpXHJcbiAgICAgICAgICAgIHNlbGVjdGVkU3BSZXFzLnB1c2goc3ApXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgaW5kZXggPSBzZWxlY3RlZFNwUmVxSWRzLmluZGV4T2Yoc3Auc3BfaWQpO1xyXG4gICAgICAgICAgICBzZWxlY3RlZFNwUmVxSWRzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkU3BSZXFzLnNwbGljZShpbmRleCwgMSk7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgc2VsZWN0ZWRTcFJlcXMgOiBzZWxlY3RlZFNwUmVxcyxcclxuICAgICAgICAgICAgc2VsZWN0ZWRTcFJlcUlkcyA6IHNlbGVjdGVkU3BSZXFJZHNcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZVNwID0gKGUsIHNwX2lkKSA9PiB7XHJcbiAgICAgICAgbGV0IHNlbGVjdGVkU3BSZXFJZHMgPSBbLi4udGhpcy5zdGF0ZS5zZWxlY3RlZFNwUmVxSWRzXTtcclxuICAgICAgICBsZXQgc2VsZWN0ZWRTcFJlcXMgPSBbLi4udGhpcy5zdGF0ZS5zZWxlY3RlZFNwUmVxc107XHJcbiAgICAgICAgbGV0IGluZGV4ID0gc2VsZWN0ZWRTcFJlcUlkcy5pbmRleE9mKHNwX2lkKTtcclxuICAgICAgICBzZWxlY3RlZFNwUmVxSWRzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgc2VsZWN0ZWRTcFJlcXMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgc2VsZWN0ZWRTcFJlcXMgOiBzZWxlY3RlZFNwUmVxcyxcclxuICAgICAgICAgICAgc2VsZWN0ZWRTcFJlcUlkcyA6IHNlbGVjdGVkU3BSZXFJZHNcclxuICAgICAgICB9KVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBoaWRlUGVuZGluZ01lc3NhZ2UgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHNob3dQZW5kaW5nTWVzc2FnZSA6IGZhbHNlXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVDb250ZW50ID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBleHBhbmRDb250ZW50IDogIXRoaXMuc3RhdGUuZXhwYW5kQ29udGVudFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5wcm9wcy5ob3RlbERldGFpbClcclxuICAgICAgICAvL2xldCBob3RlbERldGFpbCA9IHRoaXMucHJvcHMuaG90ZWxEZXRhaWw7XHJcbiAgICAgICAgbGV0IGhvdGVsRGV0YWlsID0gdGhpcy5wcm9wcy5ob3RlbERldGFpbDtcclxuICAgICAgICBsZXQgYmFubmVySW1hZ2VzID0gdGhpcy5zdGF0ZS5iYW5uZXJJbWFnZXMgfHwgW107XHJcblxyXG5cclxuICAgICAgICBsZXQgZ2FsbGVyeUltYWdlcyA9IHRoaXMucHJvcHMuZ2FsbGVyeUltYWdlcyB8fCBbXTtcclxuICAgICAgICBsZXQgc3RhcnREYXRlID0gdGhpcy5zdGF0ZS5zdGFydERhdGU7XHJcbiAgICAgICAgbGV0IGVuZERhdGUgPSB0aGlzLnN0YXRlLmVuZERhdGU7XHJcblxyXG4gICAgICAgIGxldCBob3RlbF9yb29tcyA9IHRoaXMucHJvcHMuaG90ZWxfcm9vbXM7XHJcbiAgICAgICAgbGV0IGdlbmVyYWxfZmFjaWxpdGllcyA9ICBob3RlbERldGFpbCA/IGhvdGVsRGV0YWlsLmhvdGVsX2ZhY2lsaXRpZXMgOiBbXTtcclxuICAgICAgICBsZXQgaG90ZWxmYWNpbGl0aWVzID0gaG90ZWxEZXRhaWwgPyBob3RlbERldGFpbC5ob3RlbGZhY2lsaXRpZXMgOiBbXTtcclxuICAgICAgICBsZXQgcm9vbVR5cGVzID0gdGhpcy5zdGF0ZS5yb29tVHlwZXMgfHwgW107XHJcblxyXG4gICAgICAgIGxldCBzZWxlY3RlZFJvb21zID0gdGhpcy5zdGF0ZS5zZWxlY3RlZFJvb21zIHx8IFtdO1xyXG4gICAgICAgIGxldCBzcFJlcXVlc3RzID0gdGhpcy5zdGF0ZS5zcFJlcXVlc3RzIHx8IFtdO1xyXG4gICAgICAgIGxldCBzZWxlY3RlZFNwUmVxSWRzID0gdGhpcy5zdGF0ZS5zZWxlY3RlZFNwUmVxSWRzIHx8IFtdO1xyXG4gICAgICAgIGxldCBzZWxlY3RlZFNwUmVxcyA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRTcFJlcXMgfHwgW107XHJcblxyXG4gICAgICAgIGxldCB0b3RhbF9jb3N0ID0wO1xyXG4gICAgICAgIGxldCB0b3RhbF9nc3QgPTA7XHJcbiAgICAgICAgaWYoc2VsZWN0ZWRSb29tcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGZvcih2YXIgaT0wOyBpPHNlbGVjdGVkUm9vbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHRvdGFsX2Nvc3QgKz0gKHBhcnNlRmxvYXQoc2VsZWN0ZWRSb29tc1tpXS5yb29tX3ByaWNlKSAqIHBhcnNlSW50KHNlbGVjdGVkUm9vbXNbaV0ucXR5KSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihzZWxlY3RlZFNwUmVxcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGZvcih2YXIgaT0wOyBpPHNlbGVjdGVkU3BSZXFzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZihzZWxlY3RlZFNwUmVxc1tpXS5jYXRlZ29yeSA9PT0gJ3BheWFibGUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG90YWxfY29zdCArPSBwYXJzZUZsb2F0KHNlbGVjdGVkU3BSZXFzW2ldLnJhdGUpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdG90YWxfZ3N0ID0gKHRvdGFsX2Nvc3QqMTApLzEwMDtcclxuICAgICAgICBsZXQgZ3JhbmRfdG90YWwgPSB0b3RhbF9jb3N0KyB0b3RhbF9nc3Q7XHJcbiAgICAgICAgLy9ncmFuZF90b3RhbCA9IGdyYW5kX3RvdGFsPjA/IGdyYW5kX3RvdGFsLnRvRml4ZWQoMik6Jyc7XHJcbiAgICAgICAgbGV0IHJhem9yR3JhbmRUb3RhbCA9IGdyYW5kX3RvdGFsKjEwMDtcclxuXHJcbiAgICAgICAgbGV0IGludmFsaWRGaWVsZHMgPSB0aGlzLnN0YXRlLmludmFsaWRGaWVsZHMgfHwgW107XHJcbiAgICAgICAgY29uc29sZS5sb2coaW52YWxpZEZpZWxkcylcclxuXHJcbiAgICAgICAgbGV0IGhvdGVsSGlnaGxpZ2h0cyA9IHRoaXMuc3RhdGUuaG90ZWxIaWdobGlnaHRzIHx8IFtdO1xyXG4gICAgICAgIGxldCBob3RlbFBvbGljaWVzID0gdGhpcy5zdGF0ZS5ob3RlbFBvbGljaWVzIHx8IFtdO1xyXG5cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coc2VsZWN0ZWRTcFJlcXMpXHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lci1wYWdlXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxIb3RlbE5hdmJhciAgc2Nyb2xsVG9TZWN0aW9uPXt0aGlzLnNjcm9sbFRvU2VjdGlvbn0vPlxyXG4gICAgICAgICAgICAgICAgICAgIHtob3RlbERldGFpbCAmJlxyXG4gICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImRldGFpbHMtYmFubm5lclwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2Fyb3VzZWwtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJvdXNlbC10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+e2hvdGVsRGV0YWlsLmhvdGVsX25hbWV9PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImxvY2F0aW9uXCI+e2hvdGVsRGV0YWlsLmFkZHJlc3N9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb250ZW50U2xpZGVyIGltYWdlcz17YmFubmVySW1hZ2VzfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuc2VhcmNoU3RlcCAhPT0gMiAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJib29raW5nLWNvbnRhaW5lciBzdGlja3lcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib29raW5nLXBhbmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9va2luZy1wYW5lbC1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvb2tpbmctb3B0aW9uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0ZS1waWNrZXItcGFuZWxcIj5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGF0ZVJhbmdlUGlja2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydERhdGU9e3N0YXJ0RGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZERhdGU9e2VuZERhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblN0YXJ0RGF0ZUNoYW5nZT17dGhpcy5zZXRTdGFydERhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkVuZERhdGVDaGFuZ2U9e3RoaXMuc2V0RW5kRGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbmltdW1EYXRlPXtuZXcgRGF0ZSgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluaW11bUxlbmd0aD17MX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdD0nZGQvTU0veXl5eSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsZT17ZW5HQn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyh7c3RhcnREYXRlSW5wdXRQcm9wcywgZW5kRGF0ZUlucHV0UHJvcHMsIGZvY3VzfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkYXRlLXJhbmdlJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eydpbnB1dCcgKyAoZm9jdXMgPT09IFNUQVJUX0RBVEUgPyAnIC1mb2N1c2VkJyA6ICcnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5zdGFydERhdGVJbnB1dFByb3BzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J1N0YXJ0IGRhdGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZGF0ZS1yYW5nZV9hcnJvdycvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17J2lucHV0JyArIChmb2N1cyA9PT0gRU5EX0RBVEUgPyAnIC1mb2N1c2VkJyA6ICcnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5lbmREYXRlSW5wdXRQcm9wc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdFbmQgZGF0ZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRGF0ZVJhbmdlUGlja2VyPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWxlY3QtcGFuZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWxlY3QtYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJyb29tc1wiIHZhbHVlPXt0aGlzLnN0YXRlLnJvb21zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7aW52YWxpZEZpZWxkcy5pbmNsdWRlcygncm9vbXMnKSA/ICdlcnJvci1maWVsZCcgOiAnJ31gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+Um9vbXM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMVwiPjE8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMlwiPjI8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiM1wiPjM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNFwiPjQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNVwiPjU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNlwiPjY8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiN1wiPjc8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiOFwiPjg8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiOVwiPjkrPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VsZWN0LWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwiYWR1bHRzXCIgdmFsdWU9e3RoaXMuc3RhdGUuYWR1bHRzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7aW52YWxpZEZpZWxkcy5pbmNsdWRlcygnYWR1bHRzJykgPyAnZXJyb3ItZmllbGQnIDogJyd9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPkFkdWx0czwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxXCI+MTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyXCI+Mjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIzXCI+Mzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI0XCI+NDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI1XCI+NTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI2XCI+Njwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI3XCI+Nzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI4XCI+ODwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI5XCI+OSs8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWxlY3QtYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJjaGlsZHJlblwiIHZhbHVlPXt0aGlzLnN0YXRlLmNoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7aW52YWxpZEZpZWxkcy5pbmNsdWRlcygnY2hpbGRyZW4nKSA/ICdlcnJvci1maWVsZCcgOiAnJ31gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+Q2hpbGRyZW48L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMFwiPjA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMVwiPjE8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMlwiPjI8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiM1wiPjM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNFwiPjQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNVwiPjU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNlwiPjY8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiN1wiPjc8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiOFwiPjg8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiOVwiPjkrPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuTUFYX0NBUEFDSVRZX01TRyAhPT0gJycgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXJyb3ItZmxkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuTUFYX0NBUEFDSVRZX01TR31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib29raW5nLXBhbmVsLXJpZ2h0XCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib29raW5nLWJ1dHRvbi1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZ2VuZXJhbC1idG5cIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnNlYXJjaFJvb21zKCl9PkJvb2sgTm93PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IXRoaXMuc3RhdGUuaW5pdFNlYXJjaCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvb20tc2VjdGlvbiBmYWNpbGl0aWVzXCIgaWQ9XCJob3RlbC1vdmVydmlld1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24taGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5PdmVydmlldzwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImdlbmVyYWwtaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImFkZHJlc3Mtc20taWNvXCI+e2hvdGVsRGV0YWlsLmFkZHJlc3N9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwaG9uZS1zbS1pY29cIj57aG90ZWxEZXRhaWwucGhvbmVub30gLCB7aG90ZWxEZXRhaWwubW9iaWxlbm99PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSAgY2xhc3NOYW1lPVwibWFpbC1zbS1pY29cIj57aG90ZWxEZXRhaWwuZW1haWx9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZXh0cmEtY29udGVudCAke3RoaXMuc3RhdGUuZXhwYW5kQ29udGVudCA/ICcgYWN0aXZlJyA6ICcnfWB9PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcnZpZXctZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbCA6IGhvdGVsRGV0YWlsLmhvdGVsX2Rlc2N9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2hvdGVsSGlnaGxpZ2h0cy5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3ViLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+SGlnaGxpZ2h0czwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImhpZ2hsaWdodC10YWJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2hvdGVsSGlnaGxpZ2h0cy5tYXAoaGwgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT57aGwuaGlnaGxpZ2h0c308L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb2xpY3ktYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN1Yi1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PkhvdGVsIFBvbGljaWVzPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5DaGVjayBJbiBUaW1lOiA8c3BhbiBjbGFzc05hbWU9XCJmb250LWJvbGRcIj57aG90ZWxEZXRhaWwgPyBob3RlbERldGFpbC5jaGVja2luIDogJyd9PC9zcGFuPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5DaGVjayBPdXQgVGltZTogPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+e2hvdGVsRGV0YWlsID8gaG90ZWxEZXRhaWwuY2hlY2tvdXQgOiAnJ308L3NwYW4+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2hvdGVsUG9saWNpZXMubWFwKGhwID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb2xpY3ktYm94IGluZGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1Yi1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT57aHAuY2F0ZWdvcnl9PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtocC5wb2xpY3kubWFwKHBvbCA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3BvbC5wb2xpY3l9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJjb250ZW50LWhpZGVcIiBvbkNsaWNrPXsoKT0+IHRoaXMudG9nZ2xlQ29udGVudCgpfT5TaG93IHt0aGlzLnN0YXRlLmV4cGFuZENvbnRlbnQgPyAnbGVzcycgOiAnbW9yZSd9PC9uYXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInJvb20tc2VjdGlvblwiIGlkPVwiaG90ZWwtcm9vbXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuc2VhcmNoU3RlcCA9PT0gMiA/ICdCb29raW5nIERldGFpbHMnIDogJ1Jvb21zJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oNT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmluaXRTZWFyY2ggJiYgdGhpcy5zdGF0ZS5zZWFyY2hTdGVwID09PSAxICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidGV4dC1saW5rIGJhY2tcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuYmFja1RvRGV0YWlsKCl9PkJhY2s8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5pbml0U2VhcmNoICYmXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF2YWlsYWJsZS1yb29tc1wiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuc2VhcmNoU3RlcCA9PT0gMSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2hvdGVsX3Jvb21zLmxlbmd0aCA9PT0gMCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuby1yZXN1bHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29taW5nLXNvb24td3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+Tm8gSG90ZWxzIEZvdW5kPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+U2VhcmNoIEFnYWluIGZvciByaWdodCBwbGFjZS48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtob3RlbF9yb29tcy5tYXAocm9vbSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb29tU2VhcmNoQmxvY2sgaXRlbT17cm9vbX0gc2VsZWN0Um9vbT17dGhpcy5zZWxlY3RSb29tfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRSb29tcz17dGhpcy5zdGF0ZS5zZWxlY3RlZFJvb21zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRSb29tSWRzPXt0aGlzLnN0YXRlLnNlbGVjdGVkUm9vbUlkc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZVF0eT17dGhpcy5jaGFuZ2VRdHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93RnVsbERldGFpbD17dGhpcy5zaG93RnVsbERldGFpbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm9vbS1ib29rLXN1Ym1pdFwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImdlbmVyYWwtYnRuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuY29udGludWVUb1N1bW1hcnkoKX0+Q29udGludWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuc2VhcmNoU3RlcCA9PT0gMiAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdW1tYXJ5LXRhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlJvb21zPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5RdHk8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlByaWNlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Ub3RhbCBQcmljZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2VsZWN0ZWRSb29tcy5tYXAocm9vbSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN1bW1hcnlJdGVtIGl0ZW09e3Jvb219IHNlbGVjdFJvb209e3RoaXMuc2VsZWN0Um9vbX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFJvb21zPXt0aGlzLnN0YXRlLnNlbGVjdGVkUm9vbXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRSb29tSWRzPXt0aGlzLnN0YXRlLnNlbGVjdGVkUm9vbUlkc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VRdHk9e3RoaXMuY2hhbmdlUXR5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJzcGVjaWFsLXNlcnZpY2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xzcGFuPVwiNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuYXYgb25DbGljaz17KCkgPT4gdGhpcy5zaG93U3BlY2lhbFJlcXVlc3RzKCl9IGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPkFkZCBTcGVjaWFsIFJlcXVlc3RzICs8L25hdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2VsZWN0ZWRTcFJlcXMubGVuZ3RoID4wICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkU3BSZXFzLmZpbHRlcihzcCA9PiBzcC5jYXRlZ29yeSA9PT0gJ3BheWFibGUnKS5tYXAoc3AgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJzcGVjaWFsLXNlcnZpY2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY29sU3Bhbj1cIjNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3NwLnRpdGxlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJmb250LWJvbGRcIj7igrkge3NwLnJhdGV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZGVsZXRlLWl0ZW1cIiBvbkNsaWNrPXsoZSkgPT4gdGhpcy5yZW1vdmVTcChlLHNwLnNwX2lkKX0+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZFNwUmVxcy5sZW5ndGggPjAgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRTcFJlcXMuZmlsdGVyKHNwID0+IHNwLmNhdGVnb3J5ID09PSAnbm9uIHBheWFibGUnKS5tYXAoc3AgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJzcGVjaWFsLXNlcnZpY2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY29sU3Bhbj1cIjNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3NwLnRpdGxlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJmb250LWJvbGRcIj7igrkgMDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImRlbGV0ZS1pdGVtXCIgb25DbGljaz17KGUpID0+IHRoaXMucmVtb3ZlU3AoZSxzcC5zcF9pZCl9PjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJmb250LWJvbGRcIj5UT1RBTDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+4oK5IHt0b3RhbF9jb3N0LnRvRml4ZWQoMil9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPkdTVCAxMC4wMCU8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPuKCuSB7dG90YWxfZ3N0LnRvRml4ZWQoMil9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJmb250LWJvbGRcIj5HUkFORCBUT1RBTDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+4oK5IHtncmFuZF90b3RhbC50b0ZpeGVkKDIpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbFNwYW49XCI1XCI+Q2hlY2staW4gJiBDaGVjay1vdXQ6IDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+e21vbWVudCh0aGlzLnN0YXRlLmNoZWNraW5kYXRlKS5mb3JtYXQoJ0REIE1NTSBZWVlZJyl9IC0ge21vbWVudCh0aGlzLnN0YXRlLmNoZWNrb3V0ZGF0ZSkuZm9ybWF0KCdERCBNTU0gWVlZWScpfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5QZXJzb25hbCBEZXRhaWxzPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImZvcm0tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+Rmlyc3QgTmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImZpcnN0bmFtZVwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZmlyc3RuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BpbnB1dC1maWVsZCAke2ludmFsaWRGaWVsZHMuaW5jbHVkZXMoJ2ZpcnN0bmFtZScpID8gJ2Vycm9yLWZpZWxkJyA6ICcnfWB9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+TGFzdCBOYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibGFzdG5hbWVcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmxhc3RuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BpbnB1dC1maWVsZCAke2ludmFsaWRGaWVsZHMuaW5jbHVkZXMoJ2xhc3RuYW1lJykgPyAnZXJyb3ItZmllbGQnIDogJyd9YH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5BZGRyZXNzIDE8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJhZGRyZXNzMVwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuYWRkcmVzczF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGlucHV0LWZpZWxkICR7aW52YWxpZEZpZWxkcy5pbmNsdWRlcygnYWRkcmVzczEnKSA/ICdlcnJvci1maWVsZCcgOiAnJ31gfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkFkZHJlc3MgMjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImFkZHJlc3MyXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5hZGRyZXNzMn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgaW5wdXQtZmllbGQgJHtpbnZhbGlkRmllbGRzLmluY2x1ZGVzKCdhZGRyZXNzMicpID8gJ2Vycm9yLWZpZWxkJyA6ICcnfWB9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+Q2l0eTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImNpdHlcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmNpdHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGlucHV0LWZpZWxkICR7aW52YWxpZEZpZWxkcy5pbmNsdWRlcygnY2l0eScpID8gJ2Vycm9yLWZpZWxkJyA6ICcnfWB9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+U3RhdGU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJzdGF0ZVwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuc3RhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGlucHV0LWZpZWxkICR7aW52YWxpZEZpZWxkcy5pbmNsdWRlcygnc3RhdGUnKSA/ICdlcnJvci1maWVsZCcgOiAnJ31gfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkNvdW50cnk8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJjb3VudHJ5XCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5jb3VudHJ5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BpbnB1dC1maWVsZCAke2ludmFsaWRGaWVsZHMuaW5jbHVkZXMoJ2NvdW50cnknKSA/ICdlcnJvci1maWVsZCcgOiAnJ31gfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlBpbmNvZGU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJwaW5jb2RlXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5waW5jb2RlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BpbnB1dC1maWVsZCAke2ludmFsaWRGaWVsZHMuaW5jbHVkZXMoJ3BpbmNvZGUnKSA/ICdlcnJvci1maWVsZCcgOiAnJ31gfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPk1vYmlsZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BpbnB1dC1maWVsZCAke2ludmFsaWRGaWVsZHMuaW5jbHVkZXMoJ21vYmlsZScpID8gJ2Vycm9yLWZpZWxkJyA6ICcnfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJtb2JpbGVcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm1vYmlsZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5BZGRpdGlvbmFsIFBob25lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGlucHV0LWZpZWxkICR7aW52YWxpZEZpZWxkcy5pbmNsdWRlcygnYWRkaXRpb25hbHBob25lbnVtYmVyJykgPyAnZXJyb3ItZmllbGQnIDogJyd9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImFkZGl0aW9uYWxwaG9uZW51bWJlclwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuYWRkaXRpb25hbHBob25lbnVtYmVyfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkVtYWlsPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgaW5wdXQtZmllbGQgJHtpbnZhbGlkRmllbGRzLmluY2x1ZGVzKCdlbWFpbCcpID8gJ2Vycm9yLWZpZWxkJyA6ICcnfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZW1haWx9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBheW1lbnQtd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZ2VuZXJhbC1idG4gZ3JleVwiIG9uQ2xpY2s9eygpPT4gdGhpcy5iYWNrVG9DYXJ0KCl9PkJhY2s8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImdlbmVyYWwtYnRuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB0aGlzLnNhdmVCb29raW5nKGUsIGdyYW5kX3RvdGFsLCB0b3RhbF9jb3N0LCAwLjAwLCAnJywgdG90YWxfZ3N0KX0+Q29udGludWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVG8gUGF5bWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyF0aGlzLnN0YXRlLmluaXRTZWFyY2ggJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvb20tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtob3RlbF9yb29tcy5sZW5ndGggPT09IDAgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuby1yZXN1bHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlJvb21zIHdpbGwgYmUgYWRkZWQgc29vbjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtob3RlbF9yb29tcy5tYXAocm9vbSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvb21CbG9jayBpdGVtPXtyb29tfSBzaG93RnVsbERldGFpbD17dGhpcy5zaG93RnVsbERldGFpbH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgeyF0aGlzLnN0YXRlLmluaXRTZWFyY2ggJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzcz1cImNvbnRlbnQtYXJlYSB0ZXh0LWNvbnRlbnRcIiBpZD1cImhvdGVsLWZhY2lsaXRpZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24taGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+RmFjaWxpdGllcyAmIEF0dHJhY3Rpb25zPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmVhdHVyZS13cmFwcGVyIHRocmVlLXBlci1jb2wgaW1hZ2UtdG9wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IWhvdGVsZmFjaWxpdGllcyB8fCBob3RlbGZhY2lsaXRpZXMubGVuZ3RoID09PSAwICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+RmFjaWxpdGllcyB3aWxsIGJlIGFkZGVkIHNvb24uPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aG90ZWxmYWNpbGl0aWVzICYmIGhvdGVsZmFjaWxpdGllcy5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtob3RlbGZhY2lsaXRpZXMubWFwKChmYWMsIGluZGV4KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmFjaWxpdHlOZXdCbG9jayBpdGVtPXtmYWN9IGltZ0FsaWduPXtpbmRleCAlIDIgPT09IDEgPyAnbGVmdCcgOiAncmlnaHQnfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInJvb20tc2VjdGlvblwiIGlkPVwiaG90ZWwtZ2FsbGVyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5HYWxsZXJ5PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHYWxsZXJ5IGdhbGxlcnlJbWFnZXM9e2dhbGxlcnlJbWFnZXN9IC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxGb290ZXIgLz5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnNob3dFcnJvciAmJlxyXG4gICAgICAgICAgICAgICAgPEFsZXJ0TW9kYWxcclxuICAgICAgICAgICAgICAgICAgICBtb2RhbEhlYWRlciA9IHtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICBtb2RhbEZvb3RlciA9IHt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGFsVGl0bGUgPSBcIldhcm5pbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGFsQm9keSA9IFwiUGxlYXNlIHNlbGVjdCB5b3VyIGNob2ljZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGFsU3RhdHVzPXt0aGlzLnN0YXRlLnNob3dFcnJvcn1cclxuICAgICAgICAgICAgICAgICAgICBPS0J1dHRvbj17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICBDQU5DRUxCdXR0b249e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgIE9LQWN0aW9uPXt0aGlzLmhpZGVFcnJvcn1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5zaG93UHJvZmlsZUluZm9FcnJvciAmJlxyXG4gICAgICAgICAgICAgICAgPEFsZXJ0TW9kYWxcclxuICAgICAgICAgICAgICAgICAgICBtb2RhbEhlYWRlciA9IHtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICBtb2RhbEZvb3RlciA9IHt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGFsVGl0bGUgPSBcIlByb2ZpbGUgRGV0YWlsc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgbW9kYWxCb2R5ID0gXCJQbGVhc2UgZW50ZXIgeW91ciBwZXJzb25hbCBpbmZvcm1hdGlvbiB0byBwcm9jZWVkXCJcclxuICAgICAgICAgICAgICAgICAgICBtb2RhbFN0YXR1cz17dGhpcy5zdGF0ZS5zaG93UHJvZmlsZUluZm9FcnJvcn1cclxuICAgICAgICAgICAgICAgICAgICBPS0J1dHRvbj17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICBDQU5DRUxCdXR0b249e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgIE9LQWN0aW9uPXt0aGlzLmhpZGVQcm9maWxlSW5mb0Vycm9yfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLml0ZW1SZW1vdmFsTWVzc2FnZSAmJlxyXG4gICAgICAgICAgICAgICAgPEFsZXJ0TW9kYWxcclxuICAgICAgICAgICAgICAgICAgICBtb2RhbEhlYWRlciA9IHtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICBtb2RhbEZvb3RlciA9IHt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGFsVGl0bGUgPSBcIldhcm5pbmchXCJcclxuICAgICAgICAgICAgICAgICAgICBtb2RhbEJvZHkgPSBcIkFyZSB5b3Ugc3VyZSB0byByZW1vdmUgdGhpcyByb29tPyBZb3Ugd2lsbCBiZSByZWRpcmVjdGVkIHRvIHRoZSByb29tcyBsaXN0LlwiXHJcbiAgICAgICAgICAgICAgICAgICAgbW9kYWxTdGF0dXM9e3RoaXMuc3RhdGUuaXRlbVJlbW92YWxNZXNzYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgIE9LQnV0dG9uPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgIENBTkNFTEJ1dHRvbj17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICBPS0FjdGlvbj17dGhpcy5lbXB0eUNhcnR9XHJcbiAgICAgICAgICAgICAgICAgICAgQ0FOQ0VMQWN0aW9uPXt0aGlzLmhpZGVJdGVtUmVtb3ZhbE1lc3NhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgT0tUZXh0ID0gXCJPS1wiXHJcbiAgICAgICAgICAgICAgICAgICAgQ0FOQ0VMVGV4dCA9IFwiQ0FOQ0VMXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuY2Fubm90Q29udGludWUgJiZcclxuICAgICAgICAgICAgICAgIDxBbGVydE1vZGFsXHJcbiAgICAgICAgICAgICAgICAgICAgbW9kYWxIZWFkZXIgPSB7ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kYWxGb290ZXIgPSB7dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICBtb2RhbFRpdGxlID0gXCJXYXJuaW5nIVwiXHJcbiAgICAgICAgICAgICAgICAgICAgbW9kYWxCb2R5ID0ge3RoaXMuc3RhdGUuY2Fubm90Q29udGludWVNZXNzYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGFsU3RhdHVzPXt0aGlzLnN0YXRlLmNhbm5vdENvbnRpbnVlfVxyXG4gICAgICAgICAgICAgICAgICAgIE9LQnV0dG9uPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgIENBTkNFTEJ1dHRvbj17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgT0tBY3Rpb249e3RoaXMuaGlkZUNhbm5vdENvbnRpbnVlfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5zaG93RGV0YWlsU3RhdHVzICYmXHJcbiAgICAgICAgICAgICAgICA8RnVsbFdpZHRoTW9kYWxcclxuICAgICAgICAgICAgICAgICAgICBtb2RhbEhlYWRlciA9IHt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGFsRm9vdGVyID0ge3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kYWxUaXRsZSA9IHtob3RlbERldGFpbC5ob3RlbF9uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGFsQm9keSA9IHs8Um9vbURldGFpbCByb29tRGV0YWlsPXt0aGlzLnN0YXRlLnJvb21EZXRhaWx9IGhpZGVGdWxsRGV0YWlsPXt0aGlzLmhpZGVGdWxsRGV0YWlsfSAvPn1cclxuICAgICAgICAgICAgICAgICAgICBtb2RhbFN0YXR1cz17dGhpcy5zdGF0ZS5zaG93RGV0YWlsU3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgICAgIE9LQnV0dG9uPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgIENBTkNFTEJ1dHRvbj17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgT0tBY3Rpb249e3RoaXMuaGlkZUZ1bGxEZXRhaWx9XHJcbiAgICAgICAgICAgICAgICAgICAgQ0FOQ0VMQWN0aW9uPXt0aGlzLmhpZGVGdWxsRGV0YWlsfVxyXG4gICAgICAgICAgICAgICAgICAgIE9LVGV4dCA9IFwiT0tcIlxyXG4gICAgICAgICAgICAgICAgICAgIENBTkNFTFRleHQgPSBcIkNBTkNFTFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnNob3dTcFJlcVN0YXQgJiZcclxuICAgICAgICAgICAgICAgIDxBbGVydE1vZGFsXHJcbiAgICAgICAgICAgICAgICAgICAgbW9kYWxIZWFkZXIgPSB7ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kYWxGb290ZXIgPSB7dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICBtb2RhbFRpdGxlID0gXCJXYXJuaW5nIVwiXHJcbiAgICAgICAgICAgICAgICAgICAgbW9kYWxCb2R5ID0gezxIb3RlbFNwUmVxTGlzdCBzcFJlcXVlc3RzPXtzcFJlcXVlc3RzfSBzZWxlY3RlZFNwUmVxSWRzPXt0aGlzLnN0YXRlLnNlbGVjdGVkU3BSZXFJZHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFNwUmVxcz17dGhpcy5zdGF0ZS5zZWxlY3RlZFNwUmVxc30gaGFuZGxlU3BTZWxlY3Rpb249e3RoaXMuaGFuZGxlU3BTZWxlY3Rpb259IC8+fVxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGFsU3RhdHVzPXt0aGlzLnN0YXRlLnNob3dTcFJlcVN0YXR9XHJcbiAgICAgICAgICAgICAgICAgICAgT0tCdXR0b249e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgQ0FOQ0VMQnV0dG9uPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICBPS0FjdGlvbj17dGhpcy5oaWRlU3BlY2lhbFJlcXVlc3RzfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnNob3dQZW5kaW5nTWVzc2FnZSAmJlxyXG4gICAgICAgICAgICAgICAgPEFsZXJ0TW9kYWxcclxuICAgICAgICAgICAgICAgICAgICBtb2RhbEhlYWRlciA9IHtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICBtb2RhbEZvb3RlciA9IHt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGFsVGl0bGUgPSBcIldhcm5pbmchXCJcclxuICAgICAgICAgICAgICAgICAgICBtb2RhbEJvZHkgPSB7XCJCb29raW5nIGlzIHRlbXBlcm9yaWx5IHVuYXZhaWxhYmxlIGR1ZSB0byBDb3ZpZC0xOS4gSXQgd2lsbCBiZSBhdmFpbGFibGUgb25seSBmcm9tIEp1bHkgMjAyMSBvbndhcmRzLiBGb3IgZnVydGhlciBpbmZvcm1hdGlvbiBwbGVhc2Ugc2VuZCBhbiBlbWFpbCB0byBib29raW5nQHV0aGhvdGVscy5jb20gb3IgY2FsbCArOTEgOTc0NjgzODg4MywrOTEgOTU2NzMzODg4NC5cIn1cclxuICAgICAgICAgICAgICAgICAgICBtb2RhbFN0YXR1cz17dGhpcy5zdGF0ZS5zaG93UGVuZGluZ01lc3NhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgT0tCdXR0b249e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgQ0FOQ0VMQnV0dG9uPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICBPS0FjdGlvbj17dGhpcy5oaWRlUGVuZGluZ01lc3NhZ2V9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XHJcbiAgICBob3RlbERhdGE6c3RhdGUuSG90ZWxSZWR1Y2VyLmhvdGVsRGF0YSxcclxuICAgLy8gZmFjaWxpdHlEYXRhOnN0YXRlLkhvdGVsUmVkdWNlci5mYWNpbGl0eURhdGEsXHJcbiAgICBib29raW5nRGF0YSA6IHN0YXRlLkhvdGVsUmVkdWNlci5ib29raW5nRGF0YVxyXG59KTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxyXG4gICAgbWFwU3RhdGVUb1Byb3BzLFxyXG4gICAge1xyXG5cclxuICAgICAgICBzZWFyY2hSb29tcyA6IEhvdGVsQWN0aW9ucy5zZWFyY2hSb29tcyxcclxuICAgICAgICBzYXZlQm9va2luZyA6IEhvdGVsQWN0aW9ucy5zYXZlQm9va2luZyxcclxuICAgICAgICBjb25maXJtQm9va2luZyA6IEhvdGVsQWN0aW9ucy5jb25maXJtQm9va2luZyxcclxuICAgICAgICBnZXRCYW5uZXJJbWFnZXMgOiBIb3RlbEFjdGlvbnMuZ2V0QmFubmVySW1hZ2VzLFxyXG4gICAgICAgIC8vZ2V0SG90ZWxIaWdobGlnaHRzIDogSG90ZWxBY3Rpb25zLmdldEhvdGVsSGlnaGxpZ2h0cyxcclxuICAgICAgICBnZXRIb3RlbFBvbGljaWVzIDogSG90ZWxBY3Rpb25zLmdldEhvdGVsUG9saWNpZXMsXHJcbiAgICAgICAgZ2V0U3BSZXF1ZXN0cyA6IEhvdGVsQWN0aW9ucy5nZXRTcFJlcXVlc3RzXHJcbiAgICB9XHJcbikoSG90ZWxEZXRhaWxTbHVnKTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiU3VzcGVuc2UiLCJsYXp5IiwidXNlUm91dGVyIiwiRm9vdGVyIiwiQ29udGVudFNsaWRlciIsImdldFVybFNlZ21lbnQiLCJjb25uZWN0IiwiSG90ZWxBY3Rpb25zIiwiZW5HQiIsIkRhdGVSYW5nZVBpY2tlciIsIlNUQVJUX0RBVEUiLCJFTkRfREFURSIsIlJvb21CbG9jayIsIlJvb21EZXRhaWwiLCJSb29tU2VhcmNoQmxvY2siLCJGYWNpbGl0eU5ld0Jsb2NrIiwiU3VtbWFyeUl0ZW0iLCJBbGVydE1vZGFsIiwibW9tZW50IiwiRnVsbFdpZHRoTW9kYWwiLCJIb3RlbE5hdmJhciIsIkhvdGVsU3BSZXFMaXN0IiwiR2FsbGVyeSIsIklNQUdFX1BBVEgiLCJBUEkiLCJIb3RlbERldGFpbFNsdWciLCJob3RlbERldGFpbCIsImdhbGxlcnlJbWFnZXMiLCJob3RlbF9yb29tcyIsInJvdXRlciIsInNsdWciLCJxdWVyeSIsImNvbnNvbGUiLCJsb2ciLCJIb3RlbERldGFpbCIsInByb3BzIiwic2VjdGlvbiIsImVsZW1lbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsImJsb2NrIiwiaW5saW5lIiwiZGF0ZSIsInNldFN0YXRlIiwic3RhcnREYXRlIiwiZW5kRGF0ZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm5hbWUiLCJNQVhfQ0FQQUNJVFlfR0VORVJBTCIsInN0YXRlIiwicm9vbXMiLCJhZHVsdHMiLCJjaGlsZHJlbiIsImludmFsaWRGaWVsZHMiLCJwdXNoIiwiYWR1bHRDb3VudCIsInBhcnNlSW50IiwiTUFYX0NBUEFDSVRZX01TRyIsImxlbmd0aCIsInBhcmFtcyIsInNob3dFcnJvciIsImluaXRTZWFyY2giLCJzZWFyY2hTdGVwIiwidG9kYXkiLCJ0b21vcnJvdyIsInJvb20iLCJ0eXBlIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJzZWxlY3RlZFJvb21zIiwic2VsZWN0ZWRSb29tSWRzIiwiaW5jbHVkZXMiLCJyb29taWQiLCJpdGVtUmVtb3ZhbE1lc3NhZ2UiLCJpbmRleCIsImluZGV4T2YiLCJzcGxpY2UiLCJtYXAiLCJpdGVtIiwicXR5IiwiYWRkUXR5Iiwic3ViUXR5IiwicGVyc29uT2NjdXBpZWQiLCJ0b3RhbFJvb21zIiwiaSIsIm9jY3VwYW5jeSIsIm1heF9jYXBhY2l0eV9hZHVsdCIsImV4dHJhX29jY3VwYW5jeSIsImV4dHJhYmVkIiwidG90YWxfb2NjdXBhbmN5IiwiY2Fubm90Q29udGludWUiLCJjYW5ub3RDb250aW51ZU1lc3NhZ2UiLCJyb29tSWQiLCJyb29tY291bnQiLCJzZWxlY3RSb29tIiwiYW1vdW50IiwicHJpbmNpcGxlQW1vdW50IiwiZGlzY291bnQiLCJwcm9ncmFtX2Rlc2NyaXB0aW9uIiwiZ3N0IiwiZmlyc3RuYW1lIiwibGFzdG5hbWUiLCJhZGRyZXNzMSIsImFkZHJlc3MyIiwiY2l0eSIsImNvdW50cnkiLCJwaW5jb2RlIiwibW9iaWxlIiwiYWRkaXRpb25hbHBob25lbnVtYmVyIiwiZW1haWwiLCJjaGVja2luZGF0ZSIsImZvcm1hdCIsImNoZWNrb3V0ZGF0ZSIsInN0YXJ0IiwiZW5kIiwibm9PZkRheXMiLCJkdXJhdGlvbiIsImRpZmYiLCJhc0RheXMiLCJub09mcm9vbXMiLCJ0YXhhbW91bnQiLCJzZWxlY3RlZFNwUmVxcyIsImJvb2tlZFJvb21zIiwiZXh0cmFiZWRjb3VudCIsInJvb21fcHJpY2UiLCJwYXJzZUZsb2F0IiwiaG90ZWxfaWQiLCJKU09OIiwic3RyaW5naWZ5Iiwic2F2ZUJvb2tpbmciLCJ0b3RhbEFtb3VudCIsInNob3dQcm9maWxlSW5mb0Vycm9yIiwidGhhdCIsIm9wdGlvbnMiLCJrZXkiLCJkZXNjcmlwdGlvbiIsImltYWdlIiwiaGFuZGxlciIsInJlc3BvbnNlIiwiUGF5bWVudElkIiwicmF6b3JwYXlfcGF5bWVudF9pZCIsIkRhdGUiLCJwYXltZW50SWQiLCJQYXltZW50VXJsIiwiYm9va1BhcmFtcyIsImJvb2tpbmdJZCIsImJvb2tpbmdEYXRhIiwiY29uZmlybUJvb2tpbmciLCJwcmVmaWxsIiwiY29udGFjdCIsIm5vdGVzIiwiYWRkcmVzcyIsInRoZW1lIiwiY29sb3IiLCJoaWRlX3RvcGJhciIsInJ6cDEiLCJ3aW5kb3ciLCJSYXpvcnBheSIsIm9uIiwib3BlbiIsImlkIiwicm9vbUxpc3QiLCJmaWx0ZXIiLCJzaG93RGV0YWlsU3RhdHVzIiwicm9vbURldGFpbCIsInNob3dTcFJlcVN0YXQiLCJzcCIsInNlbGVjdGVkU3BSZXFJZHMiLCJjaGVja2VkIiwic3BfaWQiLCJzaG93UGVuZGluZ01lc3NhZ2UiLCJleHBhbmRDb250ZW50Iiwic2V0RGF0ZSIsImdldERhdGUiLCJyb29tVHlwZXMiLCJiYW5uZXJJbWFnZXMiLCJob3RlbFBvbGljaWVzIiwiaG90ZWxIaWdobGlnaHRzIiwic2hvd1NwZWNpYWxSZXF1ZXN0cyIsInNwUmVxdWVzdHMiLCJzY3JpcHQiLCJjcmVhdGVFbGVtZW50Iiwic3JjIiwiYXN5bmMiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJob3RlbF91cmwiLCJwcmV2UHJvcHMiLCJwcmV2U3RhdGUiLCJzbmFwc2hvdCIsIm1heF9vY2N1cGFuY3kiLCJob3RlbGhpZ2hsaWdodHMiLCJob3RlbHBvbGljaWVzIiwic3BlY2lhbHJlcXVlc3QiLCJnZW5lcmFsX2ZhY2lsaXRpZXMiLCJob3RlbF9mYWNpbGl0aWVzIiwiaG90ZWxmYWNpbGl0aWVzIiwidG90YWxfY29zdCIsInRvdGFsX2dzdCIsImNhdGVnb3J5IiwicmF0ZSIsImdyYW5kX3RvdGFsIiwicmF6b3JHcmFuZFRvdGFsIiwic2Nyb2xsVG9TZWN0aW9uIiwiaG90ZWxfbmFtZSIsInNldFN0YXJ0RGF0ZSIsInNldEVuZERhdGUiLCJzdGFydERhdGVJbnB1dFByb3BzIiwiZW5kRGF0ZUlucHV0UHJvcHMiLCJmb2N1cyIsImhhbmRsZUNoYW5nZSIsInNlYXJjaFJvb21zIiwicGhvbmVubyIsIm1vYmlsZW5vIiwiX19odG1sIiwiaG90ZWxfZGVzYyIsImhsIiwiaGlnaGxpZ2h0cyIsImNoZWNraW4iLCJjaGVja291dCIsImhwIiwicG9saWN5IiwicG9sIiwidG9nZ2xlQ29udGVudCIsImJhY2tUb0RldGFpbCIsImNoYW5nZVF0eSIsInNob3dGdWxsRGV0YWlsIiwiY29udGludWVUb1N1bW1hcnkiLCJ0aXRsZSIsInJlbW92ZVNwIiwidG9GaXhlZCIsImJhY2tUb0NhcnQiLCJmYWMiLCJoaWRlRXJyb3IiLCJoaWRlUHJvZmlsZUluZm9FcnJvciIsImVtcHR5Q2FydCIsImhpZGVJdGVtUmVtb3ZhbE1lc3NhZ2UiLCJoaWRlQ2Fubm90Q29udGludWUiLCJoaWRlRnVsbERldGFpbCIsImhhbmRsZVNwU2VsZWN0aW9uIiwiaGlkZVNwZWNpYWxSZXF1ZXN0cyIsImhpZGVQZW5kaW5nTWVzc2FnZSIsIm1hcFN0YXRlVG9Qcm9wcyIsImhvdGVsRGF0YSIsIkhvdGVsUmVkdWNlciIsImdldEJhbm5lckltYWdlcyIsImdldEhvdGVsUG9saWNpZXMiLCJnZXRTcFJlcXVlc3RzIl0sInNvdXJjZVJvb3QiOiIifQ==