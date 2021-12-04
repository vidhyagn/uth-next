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
      bannerImages = _ref.bannerImages,
      hotel_rooms = _ref.hotel_rooms;
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter)();
  var slug = router.query.slug;
  console.log(hotelDetail);
  console.log(galleryImages);
  console.log(hotel_rooms);
  console.log(bannerImages);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)(HotelDetail, {
    hotelDetail: hotelDetail[0],
    hotel_url: slug,
    bannerImages: bannerImages,
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
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)(Head, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("meta", {
            charSet: "UTF-8"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 828,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("title", {
            children: hotelDetail ? hotelDetail.hotel_name : 'UTH'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 829,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("meta", {
            name: "description",
            content: hotelDetail ? hotelDetail.address + "  " + hotelDetail.phoneno + " " + hotelDetail.mobileno + hotelDetail.hotel_desc : 'UTH Group of Hotels'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 830,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("meta", {
            name: "keywords",
            content: hotelDetail ? (hotelDetail.address, hotelDetail.phoneno, hotelDetail.mobileno, hotelDetail.hotel_desc) : 'best hotels of kochi, best hotels'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 832,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("meta", {
            name: "author",
            content: "UTH Group Of Hotels"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 834,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("meta", {
            name: "viewport",
            content: "width=device-width, initial-scale=1.0"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 835,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("meta", {
            property: "og:type",
            content: "website"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 836,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("meta", {
            property: "og:title",
            content: hotelDetail ? hotelDetail.hotel_name : 'UTH'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 837,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("meta", {
            property: "og:description",
            content: "The tourism is in full swing for the God\u2019s own country and the best hotels in Kochi are also ready to welcome the guests. The Sugar hotel in Kochi is a prestigious one in this list whose location itself is significant.UTH is the leading brand in the hotel business that is running many hotels and resorts all over the country and out of the country too such as Sri Lanka, Dubai and Maldives."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 838,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("meta", {
            property: "og:url",
            content: "%PUBLIC_URL%"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 839,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("meta", {
            property: "og:site_name",
            content: "UTH | Group of Hotels"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 840,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("meta", {
            property: "og:image",
            content: "http://159.65.153.59/site/assets/images/fav/og-image.jpg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 841,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("meta", {
            name: "twitter:card",
            content: "http://159.65.153.59/site/assets/images/fav/og-image.jpg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 842,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("meta", {
            name: "twitter:title",
            content: "UTH | Group of Hotels"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 843,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 827,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("main", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
            className: "wrapper",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
              className: "inner-page",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)(_views_HotelNavbar__WEBPACK_IMPORTED_MODULE_25__.default, {
                scrollToSection: this.scrollToSection
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 850,
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
                          lineNumber: 858,
                          columnNumber: 41
                        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("p", {
                          className: "location",
                          children: hotelDetail.address
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 859,
                          columnNumber: 41
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 857,
                        columnNumber: 37
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 856,
                      columnNumber: 33
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 855,
                    columnNumber: 29
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)(_views_common_hotelSlider__WEBPACK_IMPORTED_MODULE_11__.default, {
                    images: bannerImages
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 864,
                    columnNumber: 29
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 853,
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
                                    lineNumber: 887,
                                    columnNumber: 61
                                  }, _this3), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("span", {
                                    className: "date-range_arrow"
                                  }, void 0, false, {
                                    fileName: _jsxFileName,
                                    lineNumber: 892,
                                    columnNumber: 61
                                  }, _this3), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("input", _objectSpread(_objectSpread({
                                    className: 'input' + (focus === react_nice_dates__WEBPACK_IMPORTED_MODULE_15__.END_DATE ? ' -focused' : '')
                                  }, endDateInputProps), {}, {
                                    placeholder: "End date"
                                  }), void 0, false, {
                                    fileName: _jsxFileName,
                                    lineNumber: 893,
                                    columnNumber: 61
                                  }, _this3)]
                                }, void 0, true, {
                                  fileName: _jsxFileName,
                                  lineNumber: 886,
                                  columnNumber: 57
                                }, _this3);
                              }
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 875,
                              columnNumber: 49
                            }, this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 872,
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
                                  lineNumber: 912,
                                  columnNumber: 57
                                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("option", {
                                  value: "1",
                                  children: "1"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 913,
                                  columnNumber: 57
                                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("option", {
                                  value: "2",
                                  children: "2"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 914,
                                  columnNumber: 57
                                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("option", {
                                  value: "3",
                                  children: "3"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 915,
                                  columnNumber: 57
                                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("option", {
                                  value: "4",
                                  children: "4"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 916,
                                  columnNumber: 57
                                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("option", {
                                  value: "5",
                                  children: "5"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 917,
                                  columnNumber: 57
                                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("option", {
                                  value: "6",
                                  children: "6"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 918,
                                  columnNumber: 57
                                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("option", {
                                  value: "7",
                                  children: "7"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 919,
                                  columnNumber: 57
                                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("option", {
                                  value: "8",
                                  children: "8"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 920,
                                  columnNumber: 57
                                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("option", {
                                  value: "9",
                                  children: "9+"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 921,
                                  columnNumber: 57
                                }, this)]
                              }, void 0, true, {
                                fileName: _jsxFileName,
                                lineNumber: 909,
                                columnNumber: 53
                              }, this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 908,
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
                                  lineNumber: 928,
                                  columnNumber: 57
                                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("option", {
                                  value: "1",
                                  children: "1"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 929,
                                  columnNumber: 57
                                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("option", {
                                  value: "2",
                                  children: "2"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 930,
                                  columnNumber: 57
                                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("option", {
                                  value: "3",
                                  children: "3"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 931,
                                  columnNumber: 57
                                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("option", {
                                  value: "4",
                                  children: "4"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 932,
                                  columnNumber: 57
                                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("option", {
                                  value: "5",
                                  children: "5"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 933,
                                  columnNumber: 57
                                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("option", {
                                  value: "6",
                                  children: "6"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 934,
                                  columnNumber: 57
                                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("option", {
                                  value: "7",
                                  children: "7"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 935,
                                  columnNumber: 57
                                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("option", {
                                  value: "8",
                                  children: "8"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 936,
                                  columnNumber: 57
                                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("option", {
                                  value: "9",
                                  children: "9+"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 937,
                                  columnNumber: 57
                                }, this)]
                              }, void 0, true, {
                                fileName: _jsxFileName,
                                lineNumber: 925,
                                columnNumber: 53
                              }, this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 924,
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
                                  lineNumber: 944,
                                  columnNumber: 57
                                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("option", {
                                  value: "0",
                                  children: "0"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 945,
                                  columnNumber: 57
                                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("option", {
                                  value: "1",
                                  children: "1"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 946,
                                  columnNumber: 57
                                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("option", {
                                  value: "2",
                                  children: "2"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 947,
                                  columnNumber: 57
                                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("option", {
                                  value: "3",
                                  children: "3"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 948,
                                  columnNumber: 57
                                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("option", {
                                  value: "4",
                                  children: "4"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 949,
                                  columnNumber: 57
                                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("option", {
                                  value: "5",
                                  children: "5"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 950,
                                  columnNumber: 57
                                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("option", {
                                  value: "6",
                                  children: "6"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 951,
                                  columnNumber: 57
                                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("option", {
                                  value: "7",
                                  children: "7"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 952,
                                  columnNumber: 57
                                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("option", {
                                  value: "8",
                                  children: "8"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 953,
                                  columnNumber: 57
                                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("option", {
                                  value: "9",
                                  children: "9+"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 954,
                                  columnNumber: 57
                                }, this)]
                              }, void 0, true, {
                                fileName: _jsxFileName,
                                lineNumber: 941,
                                columnNumber: 53
                              }, this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 940,
                              columnNumber: 49
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 907,
                            columnNumber: 45
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 871,
                          columnNumber: 41
                        }, this), this.state.MAX_CAPACITY_MSG !== '' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                          className: "error-fld",
                          children: this.state.MAX_CAPACITY_MSG
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 962,
                          columnNumber: 41
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 870,
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
                            lineNumber: 970,
                            columnNumber: 45
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 969,
                          columnNumber: 41
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 967,
                        columnNumber: 37
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 869,
                      columnNumber: 33
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 868,
                    columnNumber: 29
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 867,
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
                        lineNumber: 982,
                        columnNumber: 37
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 981,
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
                          lineNumber: 986,
                          columnNumber: 41
                        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("li", {
                          className: "phone-sm-ico",
                          children: [hotelDetail.phoneno, " , ", hotelDetail.mobileno]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 987,
                          columnNumber: 41
                        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("li", {
                          className: "mail-sm-ico",
                          children: hotelDetail.email
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 988,
                          columnNumber: 41
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 985,
                        columnNumber: 37
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                        className: "extra-content ".concat(this.state.expandContent ? ' active' : ''),
                        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                          className: "overview-description",
                          dangerouslySetInnerHTML: {
                            __html: hotelDetail.hotel_desc
                          }
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 993,
                          columnNumber: 41
                        }, this), hotelHighlights.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.Fragment, {
                          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                            className: "sub-header",
                            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("h5", {
                              children: "Highlights"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 998,
                              columnNumber: 49
                            }, this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 997,
                            columnNumber: 45
                          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("ul", {
                            className: "highlight-tab",
                            children: hotelHighlights.map(function (hl) {
                              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("li", {
                                children: hl.highlights
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 1002,
                                columnNumber: 53
                              }, _this3);
                            })
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 1000,
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
                              lineNumber: 1011,
                              columnNumber: 49
                            }, this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 1010,
                            columnNumber: 45
                          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("p", {
                            children: ["Check In Time: ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("span", {
                              className: "font-bold",
                              children: hotelDetail ? hotelDetail.checkin : ''
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1013,
                              columnNumber: 63
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 1013,
                            columnNumber: 45
                          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("p", {
                            children: ["Check Out Time: ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("span", {
                              className: "font-bold",
                              children: hotelDetail ? hotelDetail.checkout : ''
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1014,
                              columnNumber: 64
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 1014,
                            columnNumber: 45
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 1009,
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
                                lineNumber: 1020,
                                columnNumber: 53
                              }, _this3)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1019,
                              columnNumber: 49
                            }, _this3), hp.policy.map(function (pol) {
                              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("p", {
                                children: pol.policy
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 1023,
                                columnNumber: 53
                              }, _this3);
                            })]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 1018,
                            columnNumber: 45
                          }, _this3);
                        })]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 991,
                        columnNumber: 37
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("nav", {
                        className: "content-hide",
                        onClick: function onClick() {
                          return _this3.toggleContent();
                        },
                        children: ["Show ", this.state.expandContent ? 'less' : 'more']
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 1030,
                        columnNumber: 37
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 984,
                      columnNumber: 33
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 980,
                    columnNumber: 29
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 979,
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
                        lineNumber: 1040,
                        columnNumber: 37
                      }, this), this.state.initSearch && this.state.searchStep === 1 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("button", {
                        className: "text-link back",
                        onClick: function onClick() {
                          return _this3.backToDetail();
                        },
                        children: "Back"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 1045,
                        columnNumber: 37
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 1039,
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
                              lineNumber: 1060,
                              columnNumber: 49
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("p", {
                              children: "Search Again for right place."
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1061,
                              columnNumber: 49
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 1059,
                            columnNumber: 45
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 1058,
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
                            lineNumber: 1066,
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
                            lineNumber: 1075,
                            columnNumber: 45
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 1073,
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
                                  lineNumber: 1088,
                                  columnNumber: 53
                                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("th", {
                                  children: "Qty"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 1089,
                                  columnNumber: 53
                                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("th", {
                                  children: "Price"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 1090,
                                  columnNumber: 53
                                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("th", {
                                  children: "Total Price"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 1091,
                                  columnNumber: 53
                                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("th", {}, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 1092,
                                  columnNumber: 53
                                }, this)]
                              }, void 0, true, {
                                fileName: _jsxFileName,
                                lineNumber: 1087,
                                columnNumber: 49
                              }, this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1086,
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
                                  lineNumber: 1097,
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
                                    lineNumber: 1106,
                                    columnNumber: 57
                                  }, this)
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 1105,
                                  columnNumber: 53
                                }, this)
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 1104,
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
                                      lineNumber: 1114,
                                      columnNumber: 61
                                    }, _this3)
                                  }, void 0, false, {
                                    fileName: _jsxFileName,
                                    lineNumber: 1113,
                                    columnNumber: 57
                                  }, _this3), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("td", {
                                    className: "font-bold",
                                    children: ["\u20B9 ", sp.rate]
                                  }, void 0, true, {
                                    fileName: _jsxFileName,
                                    lineNumber: 1116,
                                    columnNumber: 57
                                  }, _this3), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("td", {
                                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("button", {
                                      className: "delete-item",
                                      onClick: function onClick(e) {
                                        return _this3.removeSp(e, sp.sp_id);
                                      }
                                    }, void 0, false, {
                                      fileName: _jsxFileName,
                                      lineNumber: 1118,
                                      columnNumber: 61
                                    }, _this3)
                                  }, void 0, false, {
                                    fileName: _jsxFileName,
                                    lineNumber: 1117,
                                    columnNumber: 57
                                  }, _this3)]
                                }, void 0, true, {
                                  fileName: _jsxFileName,
                                  lineNumber: 1112,
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
                                      lineNumber: 1126,
                                      columnNumber: 61
                                    }, _this3)
                                  }, void 0, false, {
                                    fileName: _jsxFileName,
                                    lineNumber: 1125,
                                    columnNumber: 57
                                  }, _this3), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("td", {
                                    className: "font-bold",
                                    children: "\u20B9 0"
                                  }, void 0, false, {
                                    fileName: _jsxFileName,
                                    lineNumber: 1128,
                                    columnNumber: 57
                                  }, _this3), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("td", {
                                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("button", {
                                      className: "delete-item",
                                      onClick: function onClick(e) {
                                        return _this3.removeSp(e, sp.sp_id);
                                      }
                                    }, void 0, false, {
                                      fileName: _jsxFileName,
                                      lineNumber: 1130,
                                      columnNumber: 61
                                    }, _this3)
                                  }, void 0, false, {
                                    fileName: _jsxFileName,
                                    lineNumber: 1129,
                                    columnNumber: 57
                                  }, _this3)]
                                }, void 0, true, {
                                  fileName: _jsxFileName,
                                  lineNumber: 1124,
                                  columnNumber: 53
                                }, _this3);
                              }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("tr", {
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
                                  children: "TOTAL"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 1140,
                                  columnNumber: 53
                                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("td", {
                                  className: "font-bold",
                                  children: ["\u20B9 ", total_cost.toFixed(2)]
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
                                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("td", {}, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 1145,
                                  columnNumber: 53
                                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("td", {}, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 1148,
                                  columnNumber: 53
                                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("td", {
                                  className: "font-bold",
                                  children: "GST 10.00%"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 1149,
                                  columnNumber: 53
                                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("td", {
                                  className: "font-bold",
                                  children: ["\u20B9 ", total_gst.toFixed(2)]
                                }, void 0, true, {
                                  fileName: _jsxFileName,
                                  lineNumber: 1150,
                                  columnNumber: 53
                                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("td", {}, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 1151,
                                  columnNumber: 53
                                }, this)]
                              }, void 0, true, {
                                fileName: _jsxFileName,
                                lineNumber: 1144,
                                columnNumber: 49
                              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("tr", {
                                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("td", {}, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 1155,
                                  columnNumber: 53
                                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("td", {}, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 1158,
                                  columnNumber: 53
                                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("td", {
                                  className: "font-bold",
                                  children: "GRAND TOTAL"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 1159,
                                  columnNumber: 53
                                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("td", {
                                  className: "font-bold",
                                  children: ["\u20B9 ", grand_total.toFixed(2)]
                                }, void 0, true, {
                                  fileName: _jsxFileName,
                                  lineNumber: 1160,
                                  columnNumber: 53
                                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("td", {}, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 1161,
                                  columnNumber: 53
                                }, this)]
                              }, void 0, true, {
                                fileName: _jsxFileName,
                                lineNumber: 1154,
                                columnNumber: 49
                              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("tr", {
                                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("td", {
                                  colSpan: "5",
                                  children: ["Check-in & Check-out: ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("span", {
                                    className: "font-bold",
                                    children: [moment__WEBPACK_IMPORTED_MODULE_23___default()(this.state.checkindate).format('DD MMM YYYY'), " - ", moment__WEBPACK_IMPORTED_MODULE_23___default()(this.state.checkoutdate).format('DD MMM YYYY')]
                                  }, void 0, true, {
                                    fileName: _jsxFileName,
                                    lineNumber: 1164,
                                    columnNumber: 91
                                  }, this)]
                                }, void 0, true, {
                                  fileName: _jsxFileName,
                                  lineNumber: 1164,
                                  columnNumber: 53
                                }, this)
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 1163,
                                columnNumber: 49
                              }, this)]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 1095,
                              columnNumber: 49
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 1085,
                            columnNumber: 45
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 1084,
                          columnNumber: 41
                        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                          "class": "section-header",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("h5", {
                            children: "Personal Details"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 1173,
                            columnNumber: 45
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 1172,
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
                                  lineNumber: 1180,
                                  columnNumber: 57
                                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("input", {
                                  type: "text",
                                  name: "firstname",
                                  onChange: this.handleChange,
                                  value: this.state.firstname,
                                  className: "input-field ".concat(invalidFields.includes('firstname') ? 'error-field' : '')
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
                              className: "col-md-6",
                              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                                className: "input-box",
                                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("label", {
                                  children: "Last Name"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 1188,
                                  columnNumber: 57
                                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("input", {
                                  type: "text",
                                  name: "lastname",
                                  onChange: this.handleChange,
                                  value: this.state.lastname,
                                  className: "input-field ".concat(invalidFields.includes('lastname') ? 'error-field' : '')
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
                              className: "col-md-6",
                              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                                className: "input-box",
                                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("label", {
                                  children: "Address 1"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 1196,
                                  columnNumber: 57
                                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("input", {
                                  type: "text",
                                  name: "address1",
                                  onChange: this.handleChange,
                                  value: this.state.address1,
                                  className: "input-field ".concat(invalidFields.includes('address1') ? 'error-field' : '')
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
                              className: "col-md-6",
                              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                                className: "input-box",
                                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("label", {
                                  children: "Address 2"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 1204,
                                  columnNumber: 57
                                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("input", {
                                  type: "text",
                                  name: "address2",
                                  onChange: this.handleChange,
                                  value: this.state.address2,
                                  className: "input-field ".concat(invalidFields.includes('address2') ? 'error-field' : '')
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
                                  children: "City"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 1212,
                                  columnNumber: 57
                                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("input", {
                                  type: "text",
                                  name: "city",
                                  onChange: this.handleChange,
                                  value: this.state.city,
                                  className: "input-field ".concat(invalidFields.includes('city') ? 'error-field' : '')
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
                              className: "col-md-3",
                              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                                className: "input-box",
                                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("label", {
                                  children: "State"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 1220,
                                  columnNumber: 57
                                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("input", {
                                  type: "text",
                                  name: "state",
                                  onChange: this.handleChange,
                                  value: this.state.state,
                                  className: "input-field ".concat(invalidFields.includes('state') ? 'error-field' : '')
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
                              className: "col-md-3",
                              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                                className: "input-box",
                                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("label", {
                                  children: "Country"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 1228,
                                  columnNumber: 57
                                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("input", {
                                  type: "text",
                                  name: "country",
                                  onChange: this.handleChange,
                                  value: this.state.country,
                                  className: "input-field ".concat(invalidFields.includes('country') ? 'error-field' : '')
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 1229,
                                  columnNumber: 57
                                }, this)]
                              }, void 0, true, {
                                fileName: _jsxFileName,
                                lineNumber: 1227,
                                columnNumber: 53
                              }, this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1226,
                              columnNumber: 49
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                              className: "col-md-3",
                              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                                className: "input-box",
                                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("label", {
                                  children: "Pincode"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 1236,
                                  columnNumber: 57
                                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("input", {
                                  type: "text",
                                  name: "pincode",
                                  onChange: this.handleChange,
                                  value: this.state.pincode,
                                  className: "input-field ".concat(invalidFields.includes('pincode') ? 'error-field' : '')
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 1237,
                                  columnNumber: 57
                                }, this)]
                              }, void 0, true, {
                                fileName: _jsxFileName,
                                lineNumber: 1235,
                                columnNumber: 53
                              }, this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1234,
                              columnNumber: 49
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                              className: "col-md-4",
                              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                                className: "input-box",
                                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("label", {
                                  children: "Mobile"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 1244,
                                  columnNumber: 57
                                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("input", {
                                  type: "number",
                                  className: "input-field ".concat(invalidFields.includes('mobile') ? 'error-field' : ''),
                                  name: "mobile",
                                  onChange: this.handleChange,
                                  value: this.state.mobile
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 1245,
                                  columnNumber: 57
                                }, this)]
                              }, void 0, true, {
                                fileName: _jsxFileName,
                                lineNumber: 1243,
                                columnNumber: 53
                              }, this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1242,
                              columnNumber: 49
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                              className: "col-md-4",
                              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                                className: "input-box",
                                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("label", {
                                  children: "Additional Phone"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 1253,
                                  columnNumber: 57
                                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("input", {
                                  type: "number",
                                  className: "input-field ".concat(invalidFields.includes('additionalphonenumber') ? 'error-field' : ''),
                                  name: "additionalphonenumber",
                                  onChange: this.handleChange,
                                  value: this.state.additionalphonenumber
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 1254,
                                  columnNumber: 57
                                }, this)]
                              }, void 0, true, {
                                fileName: _jsxFileName,
                                lineNumber: 1252,
                                columnNumber: 53
                              }, this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1251,
                              columnNumber: 49
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                              className: "col-md-4",
                              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                                className: "input-box",
                                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("label", {
                                  children: "Email"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 1262,
                                  columnNumber: 57
                                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("input", {
                                  type: "email",
                                  className: "input-field ".concat(invalidFields.includes('email') ? 'error-field' : ''),
                                  name: "email",
                                  onChange: this.handleChange,
                                  value: this.state.email
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 1263,
                                  columnNumber: 57
                                }, this)]
                              }, void 0, true, {
                                fileName: _jsxFileName,
                                lineNumber: 1261,
                                columnNumber: 53
                              }, this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1260,
                              columnNumber: 49
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 1177,
                            columnNumber: 45
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 1176,
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
                            lineNumber: 1273,
                            columnNumber: 45
                          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("button", {
                            className: "general-btn",
                            onClick: function onClick(e) {
                              return _this3.saveBooking(e, grand_total, total_cost, 0.00, '', total_gst);
                            },
                            children: "Continue To Payment"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 1274,
                            columnNumber: 45
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 1272,
                          columnNumber: 41
                        }, this)]
                      }, void 0, true)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 1053,
                      columnNumber: 33
                    }, this), !this.state.initSearch && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                      className: "room-container",
                      children: [hotel_rooms.length === 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                        className: "no-result",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("p", {
                          children: "Rooms will be added soon"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 1289,
                          columnNumber: 41
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 1288,
                        columnNumber: 37
                      }, this), hotel_rooms.map(function (room) {
                        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)(_views_RoomBlock__WEBPACK_IMPORTED_MODULE_17__.default, {
                          item: room,
                          showFullDetail: _this3.showFullDetail
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 1294,
                          columnNumber: 41
                        }, _this3);
                      })]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 1286,
                      columnNumber: 33
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 1037,
                    columnNumber: 29
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1036,
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
                          lineNumber: 1308,
                          columnNumber: 41
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 1307,
                        columnNumber: 37
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("div", {
                        className: "feature-wrapper three-per-col image-top",
                        children: [!hotelfacilities || hotelfacilities.length === 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)("h5", {
                          children: "Facilities will be added soon."
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 1312,
                          columnNumber: 41
                        }, this), hotelfacilities && hotelfacilities.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.Fragment, {
                          children: hotelfacilities.map(function (fac, index) {
                            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)(_views_FacilityNewBlock__WEBPACK_IMPORTED_MODULE_20__.default, {
                              item: fac,
                              imgAlign: index % 2 === 1 ? 'left' : 'right'
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1318,
                              columnNumber: 49
                            }, _this3);
                          })
                        }, void 0, false)]
                      }, void 0, true, {
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
                          lineNumber: 1328,
                          columnNumber: 41
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 1327,
                        columnNumber: 37
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)(_views_common_Gallery__WEBPACK_IMPORTED_MODULE_27__.default, {
                        galleryImages: galleryImages
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 1330,
                        columnNumber: 37
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 1326,
                      columnNumber: 33
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 1325,
                    columnNumber: 29
                  }, this)]
                }, void 0, true)]
              }, void 0, true), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxDEV)(_views_Footer__WEBPACK_IMPORTED_MODULE_10__.default, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1343,
                columnNumber: 21
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 848,
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
              lineNumber: 1350,
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
              lineNumber: 1362,
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
              lineNumber: 1374,
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
              lineNumber: 1390,
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
                lineNumber: 1407,
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
              lineNumber: 1403,
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
                lineNumber: 1423,
                columnNumber: 34
              }, this),
              modalStatus: this.state.showSpReqStat,
              OKButton: true,
              CANCELButton: false,
              OKAction: this.hideSpecialRequests
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 1419,
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
              lineNumber: 1432,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 847,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 846,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaG90ZWwvW3NsdWddLjhiNGUzNGNjMjQ1MzIyNzk1MmRhLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsSUFBTTBCLEdBQUcsR0FBRyx3RkFBWixFQUNBOztBQXdFQSxJQUFNQyxlQUFlLEdBQUUsU0FBakJBLGVBQWlCLE9BQThEO0FBQUE7O0FBQUEsTUFBNURDLFdBQTRELFFBQTVEQSxXQUE0RDtBQUFBLE1BQS9DQyxhQUErQyxRQUEvQ0EsYUFBK0M7QUFBQSxNQUFoQ0MsWUFBZ0MsUUFBaENBLFlBQWdDO0FBQUEsTUFBbEJDLFdBQWtCLFFBQWxCQSxXQUFrQjtBQUVqRixNQUFNQyxNQUFNLEdBQUc1QixzREFBUyxFQUF4QjtBQUNBLE1BQVE2QixJQUFSLEdBQWlCRCxNQUFNLENBQUNFLEtBQXhCLENBQVFELElBQVI7QUFDQUUsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlSLFdBQVo7QUFDQU8sRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlQLGFBQVo7QUFDQU0sRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlMLFdBQVo7QUFDQUksRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlOLFlBQVo7QUFFQSxzQkFDSywrREFBQyxXQUFEO0FBQWEsZUFBVyxFQUFFRixXQUFXLENBQUMsQ0FBRCxDQUFyQztBQUEwQyxhQUFTLEVBQUVLLElBQXJEO0FBQTJELGdCQUFZLEVBQUVILFlBQXpFO0FBQ2EsaUJBQWEsRUFBRUQsYUFENUI7QUFDMkMsZUFBVyxFQUFFRTtBQUR4RDtBQUFBO0FBQUE7QUFB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ZXMvaG90ZWwvW3NsdWddLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsU3VzcGVuc2UsIGxhenkgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi8uLi92aWV3cy9Gb290ZXJcIjtcclxuaW1wb3J0IENvbnRlbnRTbGlkZXIgZnJvbSBcIi4uLy4uL3ZpZXdzL2NvbW1vbi9ob3RlbFNsaWRlclwiO1xyXG5pbXBvcnQge2dldFVybFNlZ21lbnR9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvQ3VzdG9tRnVuY3Rpb25zXCI7XHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCAqIGFzIEhvdGVsQWN0aW9ucyBmcm9tIFwiLi4vLi4vYWN0aW9ucy9ob3RlbFwiO1xyXG5pbXBvcnQgeyBlbkdCIH0gZnJvbSAnZGF0ZS1mbnMvbG9jYWxlJ1xyXG5pbXBvcnQgeyBEYXRlUmFuZ2VQaWNrZXIsIFNUQVJUX0RBVEUsIEVORF9EQVRFIH0gZnJvbSAncmVhY3QtbmljZS1kYXRlcydcclxuaW1wb3J0ICdyZWFjdC1uaWNlLWRhdGVzL2J1aWxkL3N0eWxlLmNzcydcclxuaW1wb3J0IFJvb21CbG9jayBmcm9tIFwiLi4vLi4vdmlld3MvUm9vbUJsb2NrXCI7XHJcbmltcG9ydCBSb29tRGV0YWlsIGZyb20gXCIuLi8uLi92aWV3cy9Sb29tRGV0YWlsXCI7XHJcbmltcG9ydCBSb29tU2VhcmNoQmxvY2sgZnJvbSBcIi4uLy4uL3ZpZXdzL1Jvb21TZWFyY2hCbG9ja1wiO1xyXG5pbXBvcnQgRmFjaWxpdHlOZXdCbG9jayBmcm9tIFwiLi4vLi4vdmlld3MvRmFjaWxpdHlOZXdCbG9ja1wiO1xyXG5pbXBvcnQgU3VtbWFyeUl0ZW0gZnJvbSBcIi4uLy4uL3ZpZXdzL1N1bW1hcnlJdGVtXCI7XHJcbmltcG9ydCBBbGVydE1vZGFsIGZyb20gXCIuLi8uLi92aWV3cy9jb21tb24vQWxlcnRNb2RhbFwiO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCBGdWxsV2lkdGhNb2RhbCBmcm9tIFwiLi4vLi4vdmlld3MvY29tbW9uL0Z1bGxXaWR0aE1vZGFsXCI7XHJcbmltcG9ydCBIb3RlbE5hdmJhciBmcm9tIFwiLi4vLi4vdmlld3MvSG90ZWxOYXZiYXJcIjtcclxuaW1wb3J0IEhvdGVsU3BSZXFMaXN0IGZyb20gXCIuLi8uLi92aWV3cy9Ib3RlbFNwUmVxTGlzdFwiO1xyXG5pbXBvcnQgR2FsbGVyeSBmcm9tIFwiLi4vLi4vdmlld3MvY29tbW9uL0dhbGxlcnlcIjtcclxuaW1wb3J0IHtJTUFHRV9QQVRILCBBUElfUEFUSH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xyXG5jb25zdCBBUEkgPSAnaHR0cHM6Ly9yenBfdGVzdF9ybkVINUk0Tkh1YUdKeDpTUG1xNnFLUUVMeHhMbFlUblA3WTVkeWpAYXBpLnJhem9ycGF5LmNvbS92MS9wYXltZW50cy8nO1xyXG4vL1RoaXMgZ2V0cyBjYWxsZWQgZXZlcnkgdGltZSB0aGUgcGFnZSBpcyBjYWxsZWRcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XHJcbiAgICBjb25zdCB7cGFyYW1zfSA9IGNvbnRleHQ7XHJcbiAgICBjb25zdCB7c2x1Z30gPSBwYXJhbXM7XHJcbiAgICAvL2hvdGVsIGRldGFpbFxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtBUElfUEFUSH1ob3RlbC9ob3RlbGRldGFpbHN2Mj91cmw9JHtzbHVnfWApO1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgbGV0IGhvdGVsRGV0YWlsID0gcmVzLnJlc3VsdHMgPyByZXMucmVzdWx0cy5kYXRhOiBbXTtcclxuICAgIGNvbnNvbGUubG9nKGhvdGVsRGV0YWlsKVxyXG5cclxuICAgIC8vUm9vbSBUeXBlc1xyXG4gICAgY29uc3QgcmVzcG9uc2UyID0gYXdhaXQgZmV0Y2goYCR7QVBJX1BBVEh9aG90ZWwvcm9vbXR5cGVgKTtcclxuICAgIGNvbnN0IHJlczIgPSBhd2FpdCByZXNwb25zZTIuanNvbigpO1xyXG4gICAgbGV0IHJvb21UeXBlcyA9IHJlczIucmVzdWx0cyA/IHJlczIucmVzdWx0cy5kYXRhOiBbXTtcclxuICAgIGxldCBiYW5uZXJJbWFnZXMgPSBbXTtcclxuICAgIGxldCBob3RlbF9yb29tcyA9IFtdO1xyXG4gICAgbGV0IGdhbGxlcnlJbWFnZXMgPVtdO1xyXG4gICAgbGV0IGhvdGVsX2lkID0gJydcclxuICAgIGlmKGhvdGVsRGV0YWlsKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coaG90ZWxEZXRhaWwpXHJcbiAgICAgICAgaG90ZWxfaWQgPSBob3RlbERldGFpbC5ob3RlbF9pZDtcclxuICAgICAgICBjb25zb2xlLmxvZyhob3RlbF9pZClcclxuICAgICAgICBjb25zdCByZXNwb25zZTMgPSBhd2FpdCBmZXRjaChgJHtBUElfUEFUSH1ob3RlbC9ob3RlbGJhbm5lcmltYWdlcz9ob3RlbF9pZD0ke2hvdGVsX2lkfWApO1xyXG4gICAgICAgIGNvbnN0IHJlczMgPSBhd2FpdCByZXNwb25zZTMuanNvbigpO1xyXG4gICAgICAgIGJhbm5lckltYWdlcyA9IHJlczMucmVzdWx0cyA/IHJlczMucmVzdWx0cy5kYXRhOiBbXTtcclxuXHJcbiAgICAgICAgaG90ZWxfcm9vbXMgPSBob3RlbERldGFpbC5ob3RlbF9yb29tcyB8fCBbXTtcclxuICAgICAgICBob3RlbF9yb29tcyA9IGhvdGVsX3Jvb21zLm1hcChpdGVtID0+IHtcclxuICAgICAgICAgICAgaXRlbS5xdHkgPSAwXHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGdhbGxlcnlJbWFnZXMgPSBob3RlbERldGFpbC5ob3RlbF9pbWFnZXMgfHwgW107XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHByb3BzIDoge1xyXG4gICAgICAgICAgICAgICAgaG90ZWxEZXRhaWwgOiBbaG90ZWxEZXRhaWxdLFxyXG4gICAgICAgICAgICAgICAgaG90ZWxfcm9vbXMgOiBob3RlbF9yb29tcyxcclxuICAgICAgICAgICAgICAgIGdhbGxlcnlJbWFnZXMgOiBnYWxsZXJ5SW1hZ2VzLFxyXG4gICAgICAgICAgICAgICAgYmFubmVySW1hZ2VzIDogYmFubmVySW1hZ2VzXHJcbiAgICAgICAgICAgICAgIC8vIE1BWF9DQVBBQ0lUWV9HRU5FUkFMIDogaG90ZWxEZXRhaWwubWF4X29jY3VwYW5jeSxcclxuICAgICAgICAgICAgICAgIC8vaG90ZWxIaWdobGlnaHRzIDogaG90ZWxEZXRhaWwuaG90ZWxoaWdobGlnaHRzLFxyXG4gICAgICAgICAgICAgICAgLy9ob3RlbFBvbGljaWVzIDogaG90ZWxEZXRhaWwuaG90ZWxwb2xpY2llcyxcclxuICAgICAgICAgICAgICAgIC8vc3BSZXF1ZXN0cyA6IGhvdGVsRGV0YWlsLnNwZWNpYWxyZXF1ZXN0XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy90aGlzLnByb3BzLmdldEJhbm5lckltYWdlcyhwYXJhbXMpO1xyXG4gICAgLy8gbGV0IGhvdGVsX3Jvb21zID0gdGhpcy5wcm9wcy5ob3RlbERldGFpbC5ob3RlbF9yb29tcyB8fCBbXTtcclxuICAgIC8vIGhvdGVsX3Jvb21zID0gaG90ZWxfcm9vbXMubWFwKGl0ZW0gPT4ge1xyXG4gICAgLy8gICAgIGl0ZW0ucXR5ID0gMFxyXG4gICAgLy8gICAgIHJldHVybiBpdGVtO1xyXG4gICAgLy8gfSk7XHJcbiAgICAvLyBsZXQgZ2FsbGVyeUltYWdlcyA9IHRoaXMucHJvcHMuaG90ZWxEZXRhaWwuaG90ZWxfaW1hZ2VzIHx8IFtdO1xyXG4gICAgLy8gdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAvLyAgICAgaG90ZWxfaWQgOiBob3RlbF9pZCxcclxuICAgIC8vICAgICBob3RlbERldGFpbCA6IGhvdGVsRGV0YWlsLFxyXG4gICAgLy8gICAgIGhvdGVsX3Jvb21zIDogaG90ZWxfcm9vbXMsXHJcbiAgICAvLyAgICAgZ2FsbGVyeUltYWdlcyA6IGdhbGxlcnlJbWFnZXMsXHJcbiAgICAvLyAgICAgTUFYX0NBUEFDSVRZX0dFTkVSQUwgOiBob3RlbERldGFpbC5tYXhfb2NjdXBhbmN5LFxyXG4gICAgLy8gICAgIGhvdGVsSGlnaGxpZ2h0cyA6IGhvdGVsRGV0YWlsLmhvdGVsaGlnaGxpZ2h0cyxcclxuICAgIC8vICAgICBob3RlbFBvbGljaWVzIDogaG90ZWxEZXRhaWwuaG90ZWxwb2xpY2llcyxcclxuICAgIC8vICAgICBzcFJlcXVlc3RzIDogaG90ZWxEZXRhaWwuc3BlY2lhbHJlcXVlc3RcclxuICAgIC8vIH0sIGZ1bmN0aW9uKCkge1xyXG4gICAgLy9cclxuICAgIC8vIH0pXHJcblxyXG5cclxufVxyXG5cclxuXHJcblxyXG5jb25zdCBIb3RlbERldGFpbFNsdWcgPSh7aG90ZWxEZXRhaWwsIGdhbGxlcnlJbWFnZXMsIGJhbm5lckltYWdlcywgaG90ZWxfcm9vbXMgfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgICBjb25zdCB7IHNsdWcgfSA9IHJvdXRlci5xdWVyeTtcclxuICAgIGNvbnNvbGUubG9nKGhvdGVsRGV0YWlsKVxyXG4gICAgY29uc29sZS5sb2coZ2FsbGVyeUltYWdlcylcclxuICAgIGNvbnNvbGUubG9nKGhvdGVsX3Jvb21zKVxyXG4gICAgY29uc29sZS5sb2coYmFubmVySW1hZ2VzKVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICAgPEhvdGVsRGV0YWlsIGhvdGVsRGV0YWlsPXtob3RlbERldGFpbFswXX0gaG90ZWxfdXJsPXtzbHVnfSBiYW5uZXJJbWFnZXM9e2Jhbm5lckltYWdlc31cclxuICAgICAgICAgICAgICAgICAgICAgIGdhbGxlcnlJbWFnZXM9e2dhbGxlcnlJbWFnZXN9IGhvdGVsX3Jvb21zPXtob3RlbF9yb29tc30vPlxyXG4gICAgKVxyXG59XHJcblxyXG5jbGFzcyBIb3RlbERldGFpbCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICBsZXQgdG9kYXkgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIGxldCB0b21vcnJvdyA9IG5ldyBEYXRlKHRvZGF5KTtcclxuICAgICAgICB0b21vcnJvdy5zZXREYXRlKHRvbW9ycm93LmdldERhdGUoKSArIDEpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHRvZGF5IDogdG9kYXksXHJcbiAgICAgICAgICAgIHRvbW9ycm93IDogdG9tb3Jyb3csXHJcbiAgICAgICAgICAgIHN0YXJ0RGF0ZSA6IHRvZGF5LFxyXG4gICAgICAgICAgICBlbmREYXRlIDogdG9tb3Jyb3csXHJcbiAgICAgICAgICAgIGNoZWNraW5kYXRlIDogdG9kYXksXHJcbiAgICAgICAgICAgIGNoZWNrb3V0ZGF0ZSA6IHRvbW9ycm93LFxyXG4gICAgICAgICAgICByb29tcyA6ICcnLFxyXG4gICAgICAgICAgICBhZHVsdHMgOiAnJyxcclxuICAgICAgICAgICAgY2hpbGRyZW4gOiAnJyxcclxuICAgICAgICAgICAgcm9vbVR5cGVzIDogW10sXHJcbiAgICAgICAgICAgIGluaXRTZWFyY2ggOiBmYWxzZSxcclxuICAgICAgICAgICAgc2VhcmNoU3RlcCA6IDEsXHJcbiAgICAgICAgICAgIHNlbGVjdGVkUm9vbXMgOiBbXSxcclxuICAgICAgICAgICAgc2VsZWN0ZWRSb29tSWRzIDogW10sXHJcbiAgICAgICAgICAgIGhvdGVsX3Jvb21zIDogW10sXHJcbiAgICAgICAgICAgIGludmFsaWRGaWVsZHMgOiBbXSxcclxuICAgICAgICAgICAgc2hvd0Vycm9yIDogZmFsc2UsXHJcbiAgICAgICAgICAgIGZpcnN0bmFtZSA6JycsXHJcbiAgICAgICAgICAgIGxhc3RuYW1lIDonJyxcclxuICAgICAgICAgICAgYWRkcmVzczEgOiAnJyxcclxuICAgICAgICAgICAgYWRkcmVzczIgOiAnJyxcclxuICAgICAgICAgICAgY2l0eSA6ICcnLFxyXG4gICAgICAgICAgICBzdGF0ZSA6ICcnLFxyXG4gICAgICAgICAgICBwaW5jb2RlIDogJycsXHJcbiAgICAgICAgICAgIGNvdW50cnkgOiAnJyxcclxuICAgICAgICAgICAgbW9iaWxlIDogJycsXHJcbiAgICAgICAgICAgIGFkZGl0aW9uYWxwaG9uZW51bWJlciA6ICcnLFxyXG4gICAgICAgICAgICBlbWFpbCA6ICcnLFxyXG4gICAgICAgICAgICBzaG93UHJvZmlsZUluZm9FcnJvciA6IGZhbHNlLFxyXG4gICAgICAgICAgICBib29raW5nSWQgOiAnJyxcclxuICAgICAgICAgICAgdG90YWxBbW91bnQgOiAwLFxyXG4gICAgICAgICAgICBwcmluY2lwbGVBbW91bnQgOiAwLFxyXG4gICAgICAgICAgICBkaXNjb3VudCA6IDAsXHJcbiAgICAgICAgICAgIHByb2dyYW1fZGVzY3JpcHRpb24gOiAnJyxcclxuICAgICAgICAgICAgZ3N0IDogMCxcclxuICAgICAgICAgICAgTUFYX0NBUEFDSVRZX01TRyA6ICcnLFxyXG4gICAgICAgICAgICBpdGVtUmVtb3ZhbE1lc3NhZ2UgOiBmYWxzZSxcclxuICAgICAgICAgICAgYmFubmVySW1hZ2VzIDogW10sXHJcbiAgICAgICAgICAgIGNhbm5vdENvbnRpbnVlTWVzc2FnZSA6ZmFsc2UsXHJcbiAgICAgICAgICAgIGdhbGxlcnlJbWFnZXMgOiBbXSxcclxuICAgICAgICAgICAgc2hvd0RldGFpbFN0YXR1cyA6IGZhbHNlLFxyXG4gICAgICAgICAgICBob3RlbFBvbGljaWVzIDogW10sXHJcbiAgICAgICAgICAgIGhvdGVsSGlnaGxpZ2h0cyA6IFtdLFxyXG4gICAgICAgICAgICBNQVhfQ0FQQUNJVFlfR0VORVJBTCA6IDEsXHJcbiAgICAgICAgICAgIHNob3dTcGVjaWFsUmVxdWVzdHMgOiBmYWxzZSxcclxuICAgICAgICAgICAgc3BSZXF1ZXN0cyA6IFtdLFxyXG4gICAgICAgICAgICBzZWxlY3RlZFNwUmVxcyA6W10sXHJcbiAgICAgICAgICAgIHNlbGVjdGVkU3BSZXFJZHMgOiBbXSxcclxuICAgICAgICAgICAgc2hvd1BlbmRpbmdNZXNzYWdlIDogZmFsc2UsXHJcbiAgICAgICAgICAgIGV4cGFuZENvbnRlbnQgOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xyXG4gICAgICAgIHNjcmlwdC5zcmMgPSAnaHR0cHM6Ly9jaGVja291dC5yYXpvcnBheS5jb20vdjEvY2hlY2tvdXQuanMnO1xyXG4gICAgICAgIHNjcmlwdC5hc3luYyA9IHRydWU7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBob3RlbF91cmwgOiB0aGlzLnByb3BzLmhvdGVsX3VybFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgc2Nyb2xsVG9TZWN0aW9uID0gKHNlY3Rpb24pID0+IHtcclxuICAgICAgICBpZihzZWN0aW9uICE9PSAnJykge1xyXG4gICAgICAgICAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNlY3Rpb24pO1xyXG4gICAgICAgICAgICBpZiAoZWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5zY3JvbGxJbnRvVmlldyh7YmVoYXZpb3I6IFwic21vb3RoXCIsIGJsb2NrOiBcInN0YXJ0XCIsIGlubGluZTogXCJuZWFyZXN0XCJ9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlLCBzbmFwc2hvdCkge1xyXG5cclxuICAgICAgICBpZih0aGlzLnByb3BzLmhvdGVsRGV0YWlsICE9PSBwcmV2UHJvcHMuaG90ZWxEZXRhaWwpIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgaG90ZWxfaWQgOiB0aGlzLnByb3BzLmhvdGVsRGV0YWlsLmhvdGVsX2lkLFxyXG4gICAgICAgICAgICAgICAgaG90ZWxEZXRhaWwgOiB0aGlzLnByb3BzLmhvdGVsRGV0YWlsLFxyXG4gICAgICAgICAgICAgICAgaG90ZWxfcm9vbXMgOiB0aGlzLnByb3BzLmhvdGVsX3Jvb21zLFxyXG4gICAgICAgICAgICAgICAgZ2FsbGVyeUltYWdlcyA6IHRoaXMucHJvcHMuZ2FsbGVyeUltYWdlcyxcclxuICAgICAgICAgICAgICAgIE1BWF9DQVBBQ0lUWV9HRU5FUkFMIDogdGhpcy5wcm9wcy5ob3RlbERldGFpbC5tYXhfb2NjdXBhbmN5LFxyXG4gICAgICAgICAgICAgICAgaG90ZWxIaWdobGlnaHRzIDogdGhpcy5wcm9wcy5ob3RlbERldGFpbC5ob3RlbGhpZ2hsaWdodHMsXHJcbiAgICAgICAgICAgICAgICBob3RlbFBvbGljaWVzIDogdGhpcy5wcm9wcy5ob3RlbERldGFpbC5ob3RlbHBvbGljaWVzLFxyXG4gICAgICAgICAgICAgICAgc3BSZXF1ZXN0cyA6IHRoaXMucHJvcHMuaG90ZWxEZXRhaWwuc3BlY2lhbHJlcXVlc3RcclxuICAgICAgICAgICAgfSwgZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gaWYodGhpcy5wcm9wcy5mYWNpbGl0eURhdGEucm9vbVR5cGVzICE9PSBwcmV2UHJvcHMuZmFjaWxpdHlEYXRhLnJvb21UeXBlcykge1xyXG4gICAgICAgIC8vICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAvLyAgICAgICAgIHJvb21UeXBlcyA6IHRoaXMucHJvcHMuZmFjaWxpdHlEYXRhLnJvb21UeXBlc1xyXG4gICAgICAgIC8vICAgICB9KVxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBpZih0aGlzLnByb3BzLmJvb2tpbmdEYXRhLmJvb2tpbmdJZCAhPT0gcHJldlByb3BzLmJvb2tpbmdEYXRhLmJvb2tpbmdJZCkge1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIC8vICAgICAgICAgYm9va2luZ0lkIDogdGhpcy5wcm9wcy5ib29raW5nRGF0YS5ib29raW5nSWRcclxuICAgICAgICAvLyAgICAgfSwgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmNvbnRpbnVlVG9QYXltZW50KClcclxuICAgICAgICAvLyAgICAgfSlcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gaWYodGhpcy5wcm9wcy5ib29raW5nRGF0YS5ib29raW5nUmVzdWx0ICE9PSBwcmV2UHJvcHMuYm9va2luZ0RhdGEuYm9va2luZ1Jlc3VsdCkge1xyXG4gICAgICAgIC8vICAgICBsZXQgUGF5bWVudFVybCA9IGBodHRwczovL3V0aGRldi5uZXZlcmJlZm9yZWhvbGlkYXlzLmNvbS9wYXltZW50LXN1Y2Nlc3M/cnBfaWQ9YCt0aGlzLnN0YXRlLlBheW1lbnRJZCtgJnJhbXQ9YCt0aGlzLnN0YXRlLnRvdGFsQW1vdW50K2AmbW9iaWxlPWArdGhpcy5zdGF0ZS5tb2JpbGUrYCZlbWFpbD1gK3RoaXMuc3RhdGUuZW1haWwrYCZtZXRob2Q9Q2FyZCBwYXltZW50JmRhdGU9YCttb21lbnQodGhpcy5zdGF0ZS50b2RheSkuZm9ybWF0KCdERCBNTU0sIFlZWVknKTtcclxuICAgICAgICAvLyAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBQYXltZW50VXJsO1xyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgLy8gaWYodGhpcy5wcm9wcy5iYW5uZXJJbWFnZXMgIT09IHByZXZQcm9wcy5iYW5uZXJJbWFnZXMpIHtcclxuICAgICAgICAvLyAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgLy8gICAgICAgICBiYW5uZXJJbWFnZXMgOiB0aGlzLnByb3BzLmJhbm5lckltYWdlc1xyXG4gICAgICAgIC8vICAgICB9KVxyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXRTdGFydERhdGUgPSAoZGF0ZSkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBzdGFydERhdGUgOiBkYXRlXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHNldEVuZERhdGUgPSAoZGF0ZSkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBlbmREYXRlIDogZGF0ZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC52YWx1ZSlcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgW2UudGFyZ2V0Lm5hbWVdIDogZS50YXJnZXQudmFsdWVcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHNlYXJjaFJvb21zID0gKCkgPT4ge1xyXG5cclxuXHJcbiAgICAgICAgbGV0IE1BWF9DQVBBQ0lUWV9HRU5FUkFMID0gdGhpcy5zdGF0ZS5NQVhfQ0FQQUNJVFlfR0VORVJBTDtcclxuICAgICAgICBsZXQgc3RhcnREYXRlID0gdGhpcy5zdGF0ZS5zdGFydERhdGU7XHJcbiAgICAgICAgbGV0IGVuZERhdGUgPSB0aGlzLnN0YXRlLnN0YXJ0RGF0ZTtcclxuICAgICAgICBsZXQgcm9vbXMgPSB0aGlzLnN0YXRlLnJvb21zO1xyXG4gICAgICAgIGxldCBhZHVsdHMgPSB0aGlzLnN0YXRlLmFkdWx0cztcclxuICAgICAgICBsZXQgY2hpbGRyZW4gPSB0aGlzLnN0YXRlLmNoaWxkcmVuO1xyXG4gICAgICAgIGxldCBpbnZhbGlkRmllbGRzID0gW107XHJcbiAgICAgICAgaWYoc3RhcnREYXRlID09PSAnJykge1xyXG4gICAgICAgICAgICBpbnZhbGlkRmllbGRzLnB1c2goJ3N0YXJ0RGF0ZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihlbmREYXRlID09PSAnJykge1xyXG4gICAgICAgICAgICBpbnZhbGlkRmllbGRzLnB1c2goJ2VuZERhdGUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYocm9vbXMgPT09ICcnKSB7XHJcbiAgICAgICAgICAgIGludmFsaWRGaWVsZHMucHVzaCgncm9vbXMnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoYWR1bHRzID09PSAnJykge1xyXG4gICAgICAgICAgICBpbnZhbGlkRmllbGRzLnB1c2goJ2FkdWx0cycpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGFkdWx0Q291bnQgPSBwYXJzZUludChyb29tcykgKiBwYXJzZUludChNQVhfQ0FQQUNJVFlfR0VORVJBTCk7XHJcbiAgICAgICAgaWYocGFyc2VJbnQoYWR1bHRzKSA+IGFkdWx0Q291bnQpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBNQVhfQ0FQQUNJVFlfTVNHIDogXCJTb3JyeS4gV2UgYXJlIGFsbG93aW5nIGEgbWF4aW11bSBvZiBcIitNQVhfQ0FQQUNJVFlfR0VORVJBTCtcIiBtZW1iZXJzIGluIGEgcm9vbVwiXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGludmFsaWRGaWVsZHMubGVuZ3RoID09PSAwICkge1xyXG5cclxuICAgICAgICAgICAgbGV0IHBhcmFtcyA9IHtzdGFydERhdGU6IHRoaXMuc3RhdGUuc3RhcnREYXRlLCBlbmREYXRlIDogdGhpcy5zdGF0ZS5lbmREYXRlLCByb29tcyA6IHRoaXMuc3RhdGUucm9vbXMsXHJcbiAgICAgICAgICAgICAgICBhZHVsdHMgOiB0aGlzLnN0YXRlLmFkdWx0cywgY2hpbGRyZW4gOiB0aGlzLnN0YXRlLmNoaWxkcmVufTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2hvd0Vycm9yIDogZmFsc2UsIGluaXRTZWFyY2ggOiAgdHJ1ZSwgc2VhcmNoU3RlcCA6IDEsIHN0YXJ0RGF0ZTogdGhpcy5zdGF0ZS5zdGFydERhdGUsIGVuZERhdGUgOiB0aGlzLnN0YXRlLmVuZERhdGUsIHJvb21zIDogdGhpcy5zdGF0ZS5yb29tcyxcclxuICAgICAgICAgICAgICAgIGFkdWx0cyA6IHRoaXMuc3RhdGUuYWR1bHRzLCBjaGlsZHJlbiA6IHRoaXMuc3RhdGUuY2hpbGRyZW4sIGludmFsaWRGaWVsZHMgOiBpbnZhbGlkRmllbGRzfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93RXJyb3IgOiB0cnVlLCBzdGFydERhdGU6IHRoaXMuc3RhdGUuc3RhcnREYXRlLCBlbmREYXRlIDogdGhpcy5zdGF0ZS5lbmREYXRlLCByb29tcyA6IHRoaXMuc3RhdGUucm9vbXMsXHJcbiAgICAgICAgICAgICAgICBhZHVsdHMgOiB0aGlzLnN0YXRlLmFkdWx0cywgY2hpbGRyZW4gOiB0aGlzLnN0YXRlLmNoaWxkcmVuLCBpbnZhbGlkRmllbGRzIDogaW52YWxpZEZpZWxkc30pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVzZXRTZWFyY2ggPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2hvd0Vycm9yIDogZmFsc2UsIGluaXRTZWFyY2ggOiAgZmFsc2UsIHNlYXJjaFN0ZXAgOiAwLCBzdGFydERhdGU6IHRoaXMuc3RhdGUudG9kYXksIGVuZERhdGUgOiB0aGlzLnN0YXRlLnRvbW9ycm93LCByb29tcyA6ICcnLFxyXG4gICAgICAgICAgICBhZHVsdHMgOiAnJywgY2hpbGRyZW4gOiAnJywgaW52YWxpZEZpZWxkcyA6IFtdfSlcclxuICAgIH1cclxuICAgIGJhY2tUb0RldGFpbCA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtpbml0U2VhcmNoIDogIGZhbHNlfSlcclxuICAgIH1cclxuICAgIGJhY2tUb0NhcnQgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2VhcmNoU3RlcCA6ICAxfSlcclxuICAgIH1cclxuXHJcbiAgICBzZWxlY3RSb29tID0gKHJvb20sIHR5cGUsZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgbGV0IHNlbGVjdGVkUm9vbXMgPSB0aGlzLnN0YXRlLnNlbGVjdGVkUm9vbXM7XHJcbiAgICAgICAgbGV0IHNlbGVjdGVkUm9vbUlkcyA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRSb29tSWRzO1xyXG5cclxuICAgICAgICBsZXQgaG90ZWxfcm9vbXMgPSB0aGlzLnByb3BzLmhvdGVsX3Jvb21zXHJcbiAgICAgICAgaWYodHlwZSA9PT0gJ2FkZCcgfHwgdHlwZSA9PT0gJ2Nob29zZScpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coc2VsZWN0ZWRSb29tSWRzKVxyXG4gICAgICAgICAgICBpZighc2VsZWN0ZWRSb29tSWRzLmluY2x1ZGVzKHJvb20ucm9vbWlkKSl7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZFJvb21JZHMucHVzaChyb29tLnJvb21pZClcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkUm9vbXMucHVzaChyb29tKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJvb20pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHR5cGUgPT09ICdyZW1vdmUnKSB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuc3RhdGUuc2VhcmNoU3RlcCA9PT0gMiAmJiBzZWxlY3RlZFJvb21zLmxlbmd0aCA9PT0xKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1SZW1vdmFsTWVzc2FnZSA6IHRydWVcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZihzZWxlY3RlZFJvb21JZHMuaW5jbHVkZXMocm9vbS5yb29taWQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gc2VsZWN0ZWRSb29tSWRzLmluZGV4T2Yocm9vbS5yb29taWQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFJvb21JZHMuc3BsaWNlKGluZGV4LCAxKVxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkUm9vbXMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgICAgICAgICBob3RlbF9yb29tcyA9IGhvdGVsX3Jvb21zLm1hcChpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoaXRlbS5yb29taWQgPT09IHJvb20ucm9vbWlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnF0eSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBzZWxlY3RlZFJvb21JZHMgOnNlbGVjdGVkUm9vbUlkcyxcclxuICAgICAgICAgICAgc2VsZWN0ZWRSb29tcyA6IHNlbGVjdGVkUm9vbXMsXHJcbiAgICAgICAgICAgIGhvdGVsX3Jvb21zIDogaG90ZWxfcm9vbXNcclxuICAgICAgICB9LCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBpZih0eXBlICE9PSAncmVtb3ZlJykge1xyXG4gICAgICAgICAgICAgICAgKHR5cGUgPT09ICdhZGQnIHx8IHR5cGUgPT09ICdjaG9vc2UnICkgPyB0aGlzLmFkZFF0eShyb29tKSA6IHRoaXMuc3ViUXR5KHJvb20pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICB9KVxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgY29udGludWVUb1N1bW1hcnkgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IGFkdWx0Q291bnQgPSBwYXJzZUludCh0aGlzLnN0YXRlLmFkdWx0cyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coYWR1bHRDb3VudCk7XHJcbiAgICAgICAgbGV0IHBlcnNvbk9jY3VwaWVkID0gMDtcclxuICAgICAgICBsZXQgc2VsZWN0ZWRSb29tcyA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRSb29tcztcclxuICAgICAgICBsZXQgdG90YWxSb29tcyA9IDA7XHJcbiAgICAgICAgaWYoc2VsZWN0ZWRSb29tcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGZvcih2YXIgaT0wOyBpPHNlbGVjdGVkUm9vbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBxdHkgPSBzZWxlY3RlZFJvb21zW2ldLnF0eTtcclxuICAgICAgICAgICAgICAgIHRvdGFsUm9vbXMgKz0gcGFyc2VJbnQocXR5KTtcclxuICAgICAgICAgICAgICAgIGxldCBvY2N1cGFuY3kgPSBwYXJzZUludChzZWxlY3RlZFJvb21zW2ldLm1heF9jYXBhY2l0eV9hZHVsdCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgZXh0cmFfb2NjdXBhbmN5ID0gc2VsZWN0ZWRSb29tc1tpXS5leHRyYWJlZCA9PT0gJ3llcyc/ICAxOiAwO1xyXG4gICAgICAgICAgICAgICAgbGV0IHRvdGFsX29jY3VwYW5jeSA9IG9jY3VwYW5jeSArIGV4dHJhX29jY3VwYW5jeTtcclxuICAgICAgICAgICAgICAgIHBlcnNvbk9jY3VwaWVkICs9IHBhcnNlSW50KHF0eSkgKnRvdGFsX29jY3VwYW5jeTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoc2VsZWN0ZWRSb29tcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBjYW5ub3RDb250aW51ZSA6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBjYW5ub3RDb250aW51ZU1lc3NhZ2UgOiBcIlBsZWFzZSBzZWxlY3QgYXRsZWFzdCBhIHJvb20gdG8gcHJvY2VlZFwiXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYoYWR1bHRDb3VudCA+IHBlcnNvbk9jY3VwaWVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgY2Fubm90Q29udGludWUgOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgY2Fubm90Q29udGludWVNZXNzYWdlIDogXCJTb3JyeS5cIisgYWR1bHRDb3VudCtcIiBwZXJzb25zIGNhbm5vdCBiZSBvY2N1cGllZCBpbiBcIit0b3RhbFJvb21zK1wiIHJvb21zXCJcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuc3RhdGUuc2VsZWN0ZWRSb29tcy5sZW5ndGggPjApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaFN0ZXAgOjJcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgYWRkUXR5ID0gKHJvb20pID0+IHtcclxuICAgICAgICBsZXQgc2VsZWN0ZWRSb29tcyA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRSb29tcztcclxuICAgICAgICBsZXQgc2VsZWN0ZWRSb29tSWRzID0gdGhpcy5zdGF0ZS5zZWxlY3RlZFJvb21JZHM7XHJcbiAgICAgICAgbGV0IHJvb21JZCA9IHJvb20ucm9vbWlkO1xyXG4gICAgICAgIHNlbGVjdGVkUm9vbXMgPSBzZWxlY3RlZFJvb21zLm1hcChpdGVtID0+IHtcclxuICAgICAgICAgICAgaWYoaXRlbS5yb29taWQgPT09IHJvb21JZCkge1xyXG4gICAgICAgICAgICAgICAgaWYoaXRlbS5xdHkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZihpdGVtLnF0eSA8IGl0ZW0ucm9vbWNvdW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ucXR5ID0gcGFyc2VJbnQoaXRlbS5xdHkpICsxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0ucXR5ID0gMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgc2VsZWN0ZWRSb29tcyA6IHNlbGVjdGVkUm9vbXMsXHJcbiAgICAgICAgICAgIHNlbGVjdGVkUm9vbUlkcyA6IHNlbGVjdGVkUm9vbUlkc1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBzdWJRdHkgPSAocm9vbSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJvb20pXHJcbiAgICAgICAgbGV0IHNlbGVjdGVkUm9vbXMgPSB0aGlzLnN0YXRlLnNlbGVjdGVkUm9vbXM7XHJcbiAgICAgICAgbGV0IHNlbGVjdGVkUm9vbUlkcyA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRSb29tSWRzO1xyXG4gICAgICAgIGxldCByb29tSWQgPSByb29tLnJvb21pZDtcclxuXHJcbiAgICAgICAgaWYocm9vbS5xdHkgJiYgcm9vbS5xdHkgPT09IDEpIHtcclxuICAgICAgICAgICAgaWYodGhpcy5zdGF0ZS5zZWFyY2hTdGVwID09PSAyICYmIHNlbGVjdGVkUm9vbXMubGVuZ3RoID09PTEpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbVJlbW92YWxNZXNzYWdlIDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJvb20ucXR5ID0gMDtcclxuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IHNlbGVjdGVkUm9vbUlkcy5pbmRleE9mKHJvb20ucm9vbWlkKTtcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkUm9vbUlkcy5zcGxpY2UoaW5kZXgsMSlcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkUm9vbXMuc3BsaWNlKGluZGV4LDEpXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgc2VsZWN0ZWRSb29tcyA9IHNlbGVjdGVkUm9vbXMubWFwKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYoaXRlbS5yb29taWQgPT09IHJvb21JZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0ucXR5ID0gKGl0ZW0ucXR5ICYmIGl0ZW0ucXR5ID4wKSA/IHBhcnNlSW50KGl0ZW0ucXR5KSAtMSA6MDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkUm9vbXMgOiBzZWxlY3RlZFJvb21zLFxyXG4gICAgICAgICAgICBzZWxlY3RlZFJvb21JZHMgOiBzZWxlY3RlZFJvb21JZHNcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZVF0eSA9IChyb29tLGUpID0+IHtcclxuICAgICAgICBsZXQgcXR5ID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgbGV0IHNlbGVjdGVkUm9vbXMgPSB0aGlzLnN0YXRlLnNlbGVjdGVkUm9vbXM7XHJcbiAgICAgICAgbGV0IHNlbGVjdGVkUm9vbUlkcyA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRSb29tSWRzO1xyXG4gICAgICAgIGxldCByb29tSWQgPSByb29tLnJvb21pZDtcclxuICAgICAgICBzZWxlY3RlZFJvb21zID0gc2VsZWN0ZWRSb29tcy5tYXAoaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIGlmKGl0ZW0ucm9vbWlkID09PSByb29tSWQpIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0ucXR5ID0gKGl0ZW0ucXR5ICYmIGl0ZW0ucXR5ID4wKSA/IHBhcnNlSW50KGl0ZW0ucXR5KSAtMSA6IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLnNlbGVjdFJvb20ocm9vbSlcclxuICAgIH1cclxuXHJcbiAgICBzYXZlQm9va2luZyA9IChlLCBhbW91bnQsIHByaW5jaXBsZUFtb3VudCwgZGlzY291bnQsIHByb2dyYW1fZGVzY3JpcHRpb24sIGdzdCkgPT4ge1xyXG5cclxuXHJcbiAgICAgICAgbGV0IGZpcnN0bmFtZSA9IHRoaXMuc3RhdGUuZmlyc3RuYW1lO1xyXG4gICAgICAgIGxldCBsYXN0bmFtZSA9IHRoaXMuc3RhdGUubGFzdG5hbWU7XHJcbiAgICAgICAgbGV0IGFkZHJlc3MxID0gdGhpcy5zdGF0ZS5hZGRyZXNzMTtcclxuICAgICAgICBsZXQgYWRkcmVzczIgPSB0aGlzLnN0YXRlLmFkZHJlc3MyO1xyXG4gICAgICAgIGxldCBjaXR5ID0gdGhpcy5zdGF0ZS5jaXR5O1xyXG4gICAgICAgIGxldCBzdGF0ZSA9IHRoaXMuc3RhdGUuc3RhdGU7XHJcbiAgICAgICAgbGV0IGNvdW50cnkgPSB0aGlzLnN0YXRlLmNvdW50cnk7XHJcbiAgICAgICAgbGV0IHBpbmNvZGUgPSB0aGlzLnN0YXRlLnBpbmNvZGU7XHJcbiAgICAgICAgbGV0IG1vYmlsZSA9IHRoaXMuc3RhdGUubW9iaWxlO1xyXG4gICAgICAgIGxldCBhZGRpdGlvbmFscGhvbmVudW1iZXIgPSB0aGlzLnN0YXRlLmFkZGl0aW9uYWxwaG9uZW51bWJlcjtcclxuICAgICAgICBsZXQgZW1haWwgPSB0aGlzLnN0YXRlLmVtYWlsO1xyXG4gICAgICAgIGxldCBpbnZhbGlkRmllbGRzID0gW107XHJcbiAgICAgICAgaWYoZmlyc3RuYW1lID09PSAnJykge1xyXG4gICAgICAgICAgICBpbnZhbGlkRmllbGRzLnB1c2goJ2ZpcnN0bmFtZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihsYXN0bmFtZSA9PT0gJycpIHtcclxuICAgICAgICAgICAgaW52YWxpZEZpZWxkcy5wdXNoKCdsYXN0bmFtZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihhZGRyZXNzMSA9PT0gJycpIHtcclxuICAgICAgICAgICAgaW52YWxpZEZpZWxkcy5wdXNoKCdhZGRyZXNzMScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihhZGRyZXNzMiA9PT0gJycpIHtcclxuICAgICAgICAgICAgaW52YWxpZEZpZWxkcy5wdXNoKCdhZGRyZXNzMicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihjaXR5ID09PSAnJykge1xyXG4gICAgICAgICAgICBpbnZhbGlkRmllbGRzLnB1c2goJ2NpdHknKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoc3RhdGUgPT09ICcnKSB7XHJcbiAgICAgICAgICAgIGludmFsaWRGaWVsZHMucHVzaCgnc3RhdGUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoY291bnRyeSA9PT0gJycpIHtcclxuICAgICAgICAgICAgaW52YWxpZEZpZWxkcy5wdXNoKCdjb3VudHJ5Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHBpbmNvZGUgPT09ICcnKSB7XHJcbiAgICAgICAgICAgIGludmFsaWRGaWVsZHMucHVzaCgncGluY29kZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihtb2JpbGUgPT09ICcnKSB7XHJcbiAgICAgICAgICAgIGludmFsaWRGaWVsZHMucHVzaCgnbW9iaWxlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGFkZGl0aW9uYWxwaG9uZW51bWJlciA9PT0gJycpIHtcclxuICAgICAgICAgICAgaW52YWxpZEZpZWxkcy5wdXNoKCdhZGRpdGlvbmFscGhvbmVudW1iZXInKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoZW1haWwgPT09ICcnKSB7XHJcbiAgICAgICAgICAgIGludmFsaWRGaWVsZHMucHVzaCgnZW1haWwnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKGludmFsaWRGaWVsZHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIGxldCBzZWxlY3RlZFJvb21zID0gdGhpcy5zdGF0ZS5zZWxlY3RlZFJvb21zO1xyXG4gICAgICAgICAgICBsZXQgY2hlY2tpbmRhdGUgPSBtb21lbnQodGhpcy5zdGF0ZS5zdGFydERhdGUpLmZvcm1hdCgneXl5eS1NTS1ERCcpO1xyXG4gICAgICAgICAgICBsZXQgY2hlY2tvdXRkYXRlID0gbW9tZW50KHRoaXMuc3RhdGUuZW5kRGF0ZSkuZm9ybWF0KCd5eXl5LU1NLUREJyk7XHJcbiAgICAgICAgICAgIGxldCBhZHVsdHMgPSB0aGlzLnN0YXRlLmFkdWx0cyB8fCAwO1xyXG4gICAgICAgICAgICBsZXQgY2hpbGRyZW4gPSB0aGlzLnN0YXRlLmNoaWxkcmVuIHx8IDA7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIHZhciBzdGFydCA9IG1vbWVudChjaGVja2luZGF0ZSwgXCJZWVlZLU1NLUREXCIpO1xyXG4gICAgICAgICAgICB2YXIgZW5kID0gbW9tZW50KGNoZWNrb3V0ZGF0ZSwgXCJZWVlZLU1NLUREXCIpO1xyXG5cclxuICAgICAgICAgICAgbGV0IG5vT2ZEYXlzID0gbW9tZW50LmR1cmF0aW9uKGVuZC5kaWZmKHN0YXJ0KSkuYXNEYXlzKCk7XHJcblxyXG4gICAgICAgICAgICBsZXQgbm9PZnJvb21zID0gdGhpcy5zdGF0ZS5yb29tcztcclxuICAgICAgICAgICAgbGV0IHRheGFtb3VudCA9IGdzdDtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHNlbGVjdGVkUm9vbXMpXHJcblxyXG4gICAgICAgICAgICBsZXQgc2VsZWN0ZWRTcFJlcXMgPSB0aGlzLnN0YXRlLnNlbGVjdGVkU3BSZXFzO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGxldCBib29rZWRSb29tcyA9IFtdO1xyXG5cclxuICAgICAgICAgICAgZm9yKGxldCBpPTA7IGk8c2VsZWN0ZWRSb29tcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHJvb20gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJyb29taWRcIiA6IHNlbGVjdGVkUm9vbXNbaV0ucm9vbWlkLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibm9vZmFkdWx0c1wiIDogIHNlbGVjdGVkUm9vbXNbaV0ubWF4X2NhcGFjaXR5X2FkdWx0LFxyXG4gICAgICAgICAgICAgICAgICAgIFwibm9vZmNoaWxkc1wiIDogIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJleHRyYWJlZFwiIDogIHNlbGVjdGVkUm9vbXNbaV0uZXh0cmFiZWRjb3VudCxcclxuICAgICAgICAgICAgICAgICAgICBcInByaWNlXCIgOiAgc2VsZWN0ZWRSb29tc1tpXS5yb29tX3ByaWNlLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZXh0cmFiZWRwcmljZVwiIDogIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0YXhhbW91bnRcIjogIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0b3RhbHByaWNlXCIgOiAgcGFyc2VGbG9hdChzZWxlY3RlZFJvb21zW2ldLnJvb21fcHJpY2UpICogbm9PZkRheXMsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBib29rZWRSb29tcy5wdXNoKHJvb20pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgcGFyYW1zID0ge1xyXG4gICAgICAgICAgICAgICAgXCJob3RlbF9pZFwiOiB0aGlzLnN0YXRlLmhvdGVsX2lkLFxyXG4gICAgICAgICAgICAgICAgXCJjaGVja2luZGF0ZVwiOiBjaGVja2luZGF0ZSxcclxuICAgICAgICAgICAgICAgIFwiY2hlY2tvdXRkYXRlXCI6IGNoZWNrb3V0ZGF0ZSxcclxuICAgICAgICAgICAgICAgIFwibm9vZmFkdWx0c1wiOiBhZHVsdHMsXHJcbiAgICAgICAgICAgICAgICBcIm5vb2ZjaGlsZHNcIjogY2hpbGRyZW4sXHJcbiAgICAgICAgICAgICAgICBcIm5vb2Zyb29tc1wiOiBub09mcm9vbXMsXHJcbiAgICAgICAgICAgICAgICBcInByaWNlXCIgOiBwcmluY2lwbGVBbW91bnQsXHJcbiAgICAgICAgICAgICAgICBcInRheGFtb3VudFwiOiB0YXhhbW91bnQsXHJcbiAgICAgICAgICAgICAgICBcInRvdGFscHJpY2VcIjogYW1vdW50LFxyXG4gICAgICAgICAgICAgICAgXCJmaXJzdG5hbWVcIjogZmlyc3RuYW1lLFxyXG4gICAgICAgICAgICAgICAgXCJsYXN0bmFtZVwiOiBsYXN0bmFtZSxcclxuICAgICAgICAgICAgICAgIFwiYWRkcmVzczFcIjogYWRkcmVzczEsXHJcbiAgICAgICAgICAgICAgICBcImFkZHJlc3MyXCI6IGFkZHJlc3MyLFxyXG4gICAgICAgICAgICAgICAgXCJjaXR5XCI6IGNpdHksXHJcbiAgICAgICAgICAgICAgICBcInN0YXRlXCI6IHN0YXRlLFxyXG4gICAgICAgICAgICAgICAgXCJjb3VudHJ5XCI6IGNvdW50cnksXHJcbiAgICAgICAgICAgICAgICBcInBpbmNvZGVcIjogcGluY29kZSxcclxuICAgICAgICAgICAgICAgIFwibW9iaWxlXCI6IG1vYmlsZSxcclxuICAgICAgICAgICAgICAgIFwiZW1haWxcIjogZW1haWwsXHJcbiAgICAgICAgICAgICAgICBcImlkcHJvb2ZcIjogXCJ0ZXN0LnBkZlwiLFxyXG4gICAgICAgICAgICAgICAgXCJyb29tc1wiOiBib29rZWRSb29tcyxcclxuICAgICAgICAgICAgICAgIFwiYWRkaXRpb25hbHBob25lbnVtYmVyXCI6IG1vYmlsZSxcclxuICAgICAgICAgICAgICAgIFwic3BscmVxdWVzdFwiIDogc2VsZWN0ZWRTcFJlcXMubGVuZ3RoID4wICA/IEpTT04uc3RyaW5naWZ5KHNlbGVjdGVkU3BSZXFzKSA6IFwiXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwYXJhbXMpXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuc2F2ZUJvb2tpbmcocGFyYW1zKTtcclxuXHJcblxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGludmFsaWRGaWVsZHMgOiBbXSxcclxuICAgICAgICAgICAgICAgIHRvdGFsQW1vdW50IDogYW1vdW50LFxyXG4gICAgICAgICAgICAgICAgcHJpbmNpcGxlQW1vdW50IDogcHJpbmNpcGxlQW1vdW50LFxyXG4gICAgICAgICAgICAgICAgZGlzY291bnQgOiBkaXNjb3VudCxcclxuICAgICAgICAgICAgICAgIHByb2dyYW1fZGVzY3JpcHRpb24gOiBwcm9ncmFtX2Rlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgZ3N0IDogZ3N0LFxyXG4gICAgICAgICAgICAgICAgY2hlY2tpbmRhdGUgOiBjaGVja2luZGF0ZSxcclxuICAgICAgICAgICAgICAgIGNoZWNrb3V0ZGF0ZSA6IGNoZWNrb3V0ZGF0ZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBzaG93UHJvZmlsZUluZm9FcnJvciA6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBpbnZhbGlkRmllbGRzIDogaW52YWxpZEZpZWxkcyxcclxuICAgICAgICAgICAgICAgIHRvdGFsQW1vdW50IDogYW1vdW50LFxyXG4gICAgICAgICAgICAgICAgcHJpbmNpcGxlQW1vdW50IDogcHJpbmNpcGxlQW1vdW50LFxyXG4gICAgICAgICAgICAgICAgZGlzY291bnQgOiBkaXNjb3VudCxcclxuICAgICAgICAgICAgICAgIHByb2dyYW1fZGVzY3JpcHRpb24gOiBwcm9ncmFtX2Rlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgZ3N0IDogZ3N0XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBoaWRlUHJvZmlsZUluZm9FcnJvciA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgc2hvd1Byb2ZpbGVJbmZvRXJyb3IgOiBmYWxzZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY29udGludWVUb1BheW1lbnQgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHRoYXQ9dGhpcztcclxuICAgICAgICBsZXQgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgLy8ga2V5OiAncnpwX2xpdmVfdU5RZ3o2ck9HUTk2cUUnLFxyXG4gICAgICAgICAgICBrZXk6ICdyenBfdGVzdF9ybkVINUk0Tkh1YUdKeCcsXHJcbiAgICAgICAgICAgIGFtb3VudDogcGFyc2VGbG9hdCh0aGlzLnN0YXRlLnRvdGFsQW1vdW50KSoxMDAsIC8vICA9IElOUiAxXHJcbiAgICAgICAgICAgIG5hbWU6ICdVVEggQm9va2luZycsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnUGxlYXNlIHBheSB0aGUgYm9va2luZyBjaGFyZ2VzIGhlcmUgdG8gY29uZmlybScsXHJcbiAgICAgICAgICAgIGltYWdlOiAnaHR0cHM6Ly91dGhkZXYubmV2ZXJiZWZvcmVob2xpZGF5cy5jb20vYXNzZXRzL2ltYWdlcy91dGgtbG9nby1ibGFjay5wbmcnLFxyXG4gICAgICAgICAgICAvLyBvcmRlcl9pZDogdGhpcy5zdGF0ZS5vcmRlcklkLFxyXG4gICAgICAgICAgICBoYW5kbGVyOiBmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgdGhhdC5zZXRTdGF0ZSh7UGF5bWVudElkOiByZXNwb25zZS5yYXpvcnBheV9wYXltZW50X2lkLCB0b3RhbEFtb3VudCA6IHRoYXQuc3RhdGUudG90YWxBbW91bnQsIGRhdGUgOiBtb21lbnQobmV3IERhdGUoKSkuZm9ybWF0KCdERCBNTU0gWVlZWScpICwgZW1haWwgOnRoYXQuc3RhdGUuZW1haWwsIG1vYmlsZSA6IHRoYXQuc3RhdGUubW9iaWxlIH0pXHJcbiAgICAgICAgICAgICAgICAvL2xldCBQYXltZW50VXJsID0gYGh0dHA6Ly8xNTkuNjUuMTUzLjU5L3NpdGUvIy9wYXltZW50LXN1Y2Nlc3MvYCt0aGlzLnByb3BzLmJvb2tpbmdEYXRhLmJvb2tpbmdJZDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBheW1lbnRJZCA9IHJlc3BvbnNlLnJhem9ycGF5X3BheW1lbnRfaWQ7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IFBheW1lbnRVcmwgPSBgaHR0cHM6Ly91dGhkZXYubmV2ZXJiZWZvcmVob2xpZGF5cy5jb20vcGF5bWVudC1zdWNjZXNzP3JwX2lkPWArcGF5bWVudElkK2AmcmFtdD1gK3RoYXQuc3RhdGUudG90YWxBbW91bnQrYCZtb2JpbGU9YCt0aGF0LnN0YXRlLm1vYmlsZStgJmVtYWlsPWArdGhhdC5zdGF0ZS5lbWFpbCtgJm1ldGhvZD1DYXJkIHBheW1lbnQmZGF0ZT1gK21vbWVudCh0aGF0LnN0YXRlLnRvZGF5KS5mb3JtYXQoJ0REIE1NTSwgWVlZWScpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHBhcmFtcyA9IHtcclxuICAgICAgICAgICAgICAgICAgICBcIl9pZFwiOiBwYXltZW50SWQsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJyZWZlcmVuY2VcIjogJ1VUSCcsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJkaXNjb3VudFwiOiB0aGF0LnN0YXRlLmRpc2NvdW50LFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZ3N0XCI6IHRoYXQuc3RhdGUuZ3N0LFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZGVzY1wiOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBcInByaW5jaXBhbFwiOiB0aGF0LnN0YXRlLnByaW5jaXBsZUFtb3VudCxcclxuICAgICAgICAgICAgICAgICAgICBcInBheW1lbnR1cmxcIjogUGF5bWVudFVybCxcclxuICAgICAgICAgICAgICAgICAgICBcInByb2RcIjogZmFsc2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vdGhhdC5wcm9wcy5jb25maXJtQm9va2luZyhwYXJhbXMpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGJvb2tQYXJhbXMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9va2luZ0lkOiB0aGF0LnByb3BzLmJvb2tpbmdEYXRhLmJvb2tpbmdJZFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhhdC5wcm9wcy5jb25maXJtQm9va2luZyhib29rUGFyYW1zKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcHJlZmlsbDoge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ1VUSCcsXHJcbiAgICAgICAgICAgICAgICBjb250YWN0OiAnJyxcclxuICAgICAgICAgICAgICAgIGVtYWlsOiAnJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBub3Rlczoge1xyXG4gICAgICAgICAgICAgICAgYWRkcmVzczogJ1VUSCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdGhlbWU6IHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAnIzNmYTlmNScsXHJcbiAgICAgICAgICAgICAgICBoaWRlX3RvcGJhcjogZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhvcHRpb25zKTtcclxuICAgICAgICB2YXIgcnpwMSA9IG5ldyB3aW5kb3cuUmF6b3JwYXkob3B0aW9ucyk7XHJcbiAgICAgICAgcnpwMS5vbigncGF5bWVudC5mYWlsZWQnLCBmdW5jdGlvbiAocmVzcG9uc2Upe1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXNwb25zZS5lcnJvci5kZXNjcmlwdGlvbik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcnpwMS5vcGVuKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaGlkZUVycm9yID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBzaG93RXJyb3IgOiBmYWxzZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgaGlkZUl0ZW1SZW1vdmFsTWVzc2FnZSA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgaXRlbVJlbW92YWxNZXNzYWdlIDogZmFsc2UsXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBlbXB0eUNhcnQgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHNlbGVjdGVkUm9vbXMgPSB0aGlzLnN0YXRlLnNlbGVjdGVkUm9vbXM7XHJcblxyXG4gICAgICAgIHNlbGVjdGVkUm9vbXMgPSBzZWxlY3RlZFJvb21zLm1hcChpdGVtID0+IHtcclxuICAgICAgICAgICAgaXRlbS5xdHkgPSAwO1xyXG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgICAgICB9KVxyXG5cclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGl0ZW1SZW1vdmFsTWVzc2FnZSA6IGZhbHNlLFxyXG4gICAgICAgICAgICBzZWxlY3RlZFJvb21zIDogW10sXHJcbiAgICAgICAgICAgIHNlbGVjdGVkUm9vbUlkcyA6IFtdLFxyXG4gICAgICAgICAgICBzZWFyY2hTdGVwIDogMVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBoaWRlQ2Fubm90Q29udGludWUgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGNhbm5vdENvbnRpbnVlIDogZmFsc2VcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHNob3dGdWxsRGV0YWlsID0gKGlkKSA9PiB7XHJcbiAgICAgICAgbGV0IGhvdGVsX3Jvb21zID0gdGhpcy5wcm9wcy5ob3RlbF9yb29tcztcclxuICAgICAgICBsZXQgcm9vbUxpc3QgPSAgaG90ZWxfcm9vbXMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5yb29taWQgPT09IGlkKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgc2hvd0RldGFpbFN0YXR1cyA6IHRydWUsXHJcbiAgICAgICAgICAgIHJvb21JZCA6IGlkLFxyXG4gICAgICAgICAgICByb29tRGV0YWlsIDogcm9vbUxpc3QubGVuZ3RoID4gMCAmJiByb29tTGlzdFswXVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgaGlkZUZ1bGxEZXRhaWwgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHNob3dEZXRhaWxTdGF0dXMgOiBmYWxzZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgc2hvd1NwZWNpYWxSZXF1ZXN0cyA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgc2hvd1NwUmVxU3RhdCA6IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgaGlkZVNwZWNpYWxSZXF1ZXN0cyA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgc2hvd1NwUmVxU3RhdCA6IGZhbHNlXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVTcFNlbGVjdGlvbiA9IChlLCBzcCkgPT4ge1xyXG4gICAgICAgIGxldCBzZWxlY3RlZFNwUmVxSWRzID0gWy4uLnRoaXMuc3RhdGUuc2VsZWN0ZWRTcFJlcUlkc107XHJcbiAgICAgICAgbGV0IHNlbGVjdGVkU3BSZXFzID0gWy4uLnRoaXMuc3RhdGUuc2VsZWN0ZWRTcFJlcXNdO1xyXG5cclxuICAgICAgICBpZihlLnRhcmdldC5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkU3BSZXFJZHMucHVzaChzcC5zcF9pZClcclxuICAgICAgICAgICAgc2VsZWN0ZWRTcFJlcXMucHVzaChzcClcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBpbmRleCA9IHNlbGVjdGVkU3BSZXFJZHMuaW5kZXhPZihzcC5zcF9pZCk7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkU3BSZXFJZHMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgc2VsZWN0ZWRTcFJlcXMuc3BsaWNlKGluZGV4LCAxKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBzZWxlY3RlZFNwUmVxcyA6IHNlbGVjdGVkU3BSZXFzLFxyXG4gICAgICAgICAgICBzZWxlY3RlZFNwUmVxSWRzIDogc2VsZWN0ZWRTcFJlcUlkc1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlU3AgPSAoZSwgc3BfaWQpID0+IHtcclxuICAgICAgICBsZXQgc2VsZWN0ZWRTcFJlcUlkcyA9IFsuLi50aGlzLnN0YXRlLnNlbGVjdGVkU3BSZXFJZHNdO1xyXG4gICAgICAgIGxldCBzZWxlY3RlZFNwUmVxcyA9IFsuLi50aGlzLnN0YXRlLnNlbGVjdGVkU3BSZXFzXTtcclxuICAgICAgICBsZXQgaW5kZXggPSBzZWxlY3RlZFNwUmVxSWRzLmluZGV4T2Yoc3BfaWQpO1xyXG4gICAgICAgIHNlbGVjdGVkU3BSZXFJZHMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICBzZWxlY3RlZFNwUmVxcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBzZWxlY3RlZFNwUmVxcyA6IHNlbGVjdGVkU3BSZXFzLFxyXG4gICAgICAgICAgICBzZWxlY3RlZFNwUmVxSWRzIDogc2VsZWN0ZWRTcFJlcUlkc1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGhpZGVQZW5kaW5nTWVzc2FnZSA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgc2hvd1BlbmRpbmdNZXNzYWdlIDogZmFsc2VcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZUNvbnRlbnQgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGV4cGFuZENvbnRlbnQgOiAhdGhpcy5zdGF0ZS5leHBhbmRDb250ZW50XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzLmhvdGVsRGV0YWlsKVxyXG4gICAgICAgIC8vbGV0IGhvdGVsRGV0YWlsID0gdGhpcy5wcm9wcy5ob3RlbERldGFpbDtcclxuICAgICAgICBsZXQgaG90ZWxEZXRhaWwgPSB0aGlzLnByb3BzLmhvdGVsRGV0YWlsO1xyXG4gICAgICAgIGxldCBiYW5uZXJJbWFnZXMgPSB0aGlzLnByb3BzLmJhbm5lckltYWdlcyB8fCBbXTtcclxuXHJcblxyXG4gICAgICAgIGxldCBnYWxsZXJ5SW1hZ2VzID0gdGhpcy5wcm9wcy5nYWxsZXJ5SW1hZ2VzIHx8IFtdO1xyXG4gICAgICAgIGxldCBzdGFydERhdGUgPSB0aGlzLnN0YXRlLnN0YXJ0RGF0ZTtcclxuICAgICAgICBsZXQgZW5kRGF0ZSA9IHRoaXMuc3RhdGUuZW5kRGF0ZTtcclxuXHJcbiAgICAgICAgbGV0IGhvdGVsX3Jvb21zID0gdGhpcy5wcm9wcy5ob3RlbF9yb29tcztcclxuICAgICAgICBsZXQgZ2VuZXJhbF9mYWNpbGl0aWVzID0gIGhvdGVsRGV0YWlsID8gaG90ZWxEZXRhaWwuaG90ZWxfZmFjaWxpdGllcyA6IFtdO1xyXG4gICAgICAgIGxldCBob3RlbGZhY2lsaXRpZXMgPSBob3RlbERldGFpbCA/IGhvdGVsRGV0YWlsLmhvdGVsZmFjaWxpdGllcyA6IFtdO1xyXG4gICAgICAgIGxldCByb29tVHlwZXMgPSB0aGlzLnN0YXRlLnJvb21UeXBlcyB8fCBbXTtcclxuXHJcbiAgICAgICAgbGV0IHNlbGVjdGVkUm9vbXMgPSB0aGlzLnN0YXRlLnNlbGVjdGVkUm9vbXMgfHwgW107XHJcbiAgICAgICAgbGV0IHNwUmVxdWVzdHMgPSB0aGlzLnN0YXRlLnNwUmVxdWVzdHMgfHwgW107XHJcbiAgICAgICAgbGV0IHNlbGVjdGVkU3BSZXFJZHMgPSB0aGlzLnN0YXRlLnNlbGVjdGVkU3BSZXFJZHMgfHwgW107XHJcbiAgICAgICAgbGV0IHNlbGVjdGVkU3BSZXFzID0gdGhpcy5zdGF0ZS5zZWxlY3RlZFNwUmVxcyB8fCBbXTtcclxuXHJcbiAgICAgICAgbGV0IHRvdGFsX2Nvc3QgPTA7XHJcbiAgICAgICAgbGV0IHRvdGFsX2dzdCA9MDtcclxuICAgICAgICBpZihzZWxlY3RlZFJvb21zLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgZm9yKHZhciBpPTA7IGk8c2VsZWN0ZWRSb29tcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdG90YWxfY29zdCArPSAocGFyc2VGbG9hdChzZWxlY3RlZFJvb21zW2ldLnJvb21fcHJpY2UpICogcGFyc2VJbnQoc2VsZWN0ZWRSb29tc1tpXS5xdHkpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHNlbGVjdGVkU3BSZXFzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgZm9yKHZhciBpPTA7IGk8c2VsZWN0ZWRTcFJlcXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmKHNlbGVjdGVkU3BSZXFzW2ldLmNhdGVnb3J5ID09PSAncGF5YWJsZScpIHtcclxuICAgICAgICAgICAgICAgICAgICB0b3RhbF9jb3N0ICs9IHBhcnNlRmxvYXQoc2VsZWN0ZWRTcFJlcXNbaV0ucmF0ZSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0b3RhbF9nc3QgPSAodG90YWxfY29zdCoxMCkvMTAwO1xyXG4gICAgICAgIGxldCBncmFuZF90b3RhbCA9IHRvdGFsX2Nvc3QrIHRvdGFsX2dzdDtcclxuICAgICAgICAvL2dyYW5kX3RvdGFsID0gZ3JhbmRfdG90YWw+MD8gZ3JhbmRfdG90YWwudG9GaXhlZCgyKTonJztcclxuICAgICAgICBsZXQgcmF6b3JHcmFuZFRvdGFsID0gZ3JhbmRfdG90YWwqMTAwO1xyXG5cclxuICAgICAgICBsZXQgaW52YWxpZEZpZWxkcyA9IHRoaXMuc3RhdGUuaW52YWxpZEZpZWxkcyB8fCBbXTtcclxuICAgICAgICBjb25zb2xlLmxvZyhpbnZhbGlkRmllbGRzKVxyXG5cclxuICAgICAgICBsZXQgaG90ZWxIaWdobGlnaHRzID0gaG90ZWxEZXRhaWwgPyBob3RlbERldGFpbC5ob3RlbGhpZ2hsaWdodHMgOiBbXTtcclxuICAgICAgICBsZXQgaG90ZWxQb2xpY2llcyA9IHRoaXMuc3RhdGUuaG90ZWxQb2xpY2llcyB8fCBbXTtcclxuXHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKHNlbGVjdGVkU3BSZXFzKVxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG5cclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJVVEYtOFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRpdGxlPntob3RlbERldGFpbCA/IGhvdGVsRGV0YWlsLmhvdGVsX25hbWUgOidVVEgnfTwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtob3RlbERldGFpbCA/IChob3RlbERldGFpbC5hZGRyZXNzICsgXCIgIFwiICtob3RlbERldGFpbC5waG9uZW5vICsgXCIgXCIgK2hvdGVsRGV0YWlsLm1vYmlsZW5vICArIGhvdGVsRGV0YWlsLmhvdGVsX2Rlc2MgKSA6ICdVVEggR3JvdXAgb2YgSG90ZWxzJyB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImtleXdvcmRzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtob3RlbERldGFpbCA/IChob3RlbERldGFpbC5hZGRyZXNzICwgaG90ZWxEZXRhaWwucGhvbmVubyAsIGhvdGVsRGV0YWlsLm1vYmlsZW5vICwgaG90ZWxEZXRhaWwuaG90ZWxfZGVzYykgOiAnYmVzdCBob3RlbHMgb2Yga29jaGksIGJlc3QgaG90ZWxzJ30vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJhdXRob3JcIiBjb250ZW50PVwiVVRIIEdyb3VwIE9mIEhvdGVsc1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dHlwZVwiIGNvbnRlbnQ9XCJ3ZWJzaXRlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD17aG90ZWxEZXRhaWwgPyBob3RlbERldGFpbC5ob3RlbF9uYW1lIDonVVRIJ30gLz5cclxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD1cIlRoZSB0b3VyaXNtIGlzIGluIGZ1bGwgc3dpbmcgZm9yIHRoZSBHb2TigJlzIG93biBjb3VudHJ5IGFuZCB0aGUgYmVzdCBob3RlbHMgaW4gS29jaGkgYXJlIGFsc28gcmVhZHkgdG8gd2VsY29tZSB0aGUgZ3Vlc3RzLiBUaGUgU3VnYXIgaG90ZWwgaW4gS29jaGkgaXMgYSBwcmVzdGlnaW91cyBvbmUgaW4gdGhpcyBsaXN0IHdob3NlIGxvY2F0aW9uIGl0c2VsZiBpcyBzaWduaWZpY2FudC5VVEggaXMgdGhlIGxlYWRpbmcgYnJhbmQgaW4gdGhlIGhvdGVsIGJ1c2luZXNzIHRoYXQgaXMgcnVubmluZyBtYW55IGhvdGVscyBhbmQgcmVzb3J0cyBhbGwgb3ZlciB0aGUgY291bnRyeSBhbmQgb3V0IG9mIHRoZSBjb3VudHJ5IHRvbyBzdWNoIGFzIFNyaSBMYW5rYSwgRHViYWkgYW5kIE1hbGRpdmVzLlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp1cmxcIiBjb250ZW50PVwiJVBVQkxJQ19VUkwlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnNpdGVfbmFtZVwiIGNvbnRlbnQ9XCJVVEggfCBHcm91cCBvZiBIb3RlbHNcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBjb250ZW50PVwiaHR0cDovLzE1OS42NS4xNTMuNTkvc2l0ZS9hc3NldHMvaW1hZ2VzL2Zhdi9vZy1pbWFnZS5qcGdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmNhcmRcIiBjb250ZW50PVwiaHR0cDovLzE1OS42NS4xNTMuNTkvc2l0ZS9hc3NldHMvaW1hZ2VzL2Zhdi9vZy1pbWFnZS5qcGdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOnRpdGxlXCIgY29udGVudD1cIlVUSCB8IEdyb3VwIG9mIEhvdGVsc1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPG1haW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyLXBhZ2VcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPEhvdGVsTmF2YmFyICBzY3JvbGxUb1NlY3Rpb249e3RoaXMuc2Nyb2xsVG9TZWN0aW9ufS8+XHJcbiAgICAgICAgICAgICAgICAgICAge2hvdGVsRGV0YWlsICYmXHJcbiAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZGV0YWlscy1iYW5ubmVyXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJvdXNlbC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcm91c2VsLXRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT57aG90ZWxEZXRhaWwuaG90ZWxfbmFtZX08L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibG9jYXRpb25cIj57aG90ZWxEZXRhaWwuYWRkcmVzc308L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRlbnRTbGlkZXIgaW1hZ2VzPXtiYW5uZXJJbWFnZXN9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5zZWFyY2hTdGVwICE9PSAyICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImJvb2tpbmctY29udGFpbmVyIHN0aWNreVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvb2tpbmctcGFuZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib29raW5nLXBhbmVsLWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9va2luZy1vcHRpb25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXRlLXBpY2tlci1wYW5lbFwiPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEYXRlUmFuZ2VQaWNrZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0RGF0ZT17c3RhcnREYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kRGF0ZT17ZW5kRGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU3RhcnREYXRlQ2hhbmdlPXt0aGlzLnNldFN0YXJ0RGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRW5kRGF0ZUNoYW5nZT17dGhpcy5zZXRFbmREYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluaW11bURhdGU9e25ldyBEYXRlKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5pbXVtTGVuZ3RoPXsxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0PSdkZC9NTS95eXl5J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxlPXtlbkdCfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KHtzdGFydERhdGVJbnB1dFByb3BzLCBlbmREYXRlSW5wdXRQcm9wcywgZm9jdXN9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RhdGUtcmFuZ2UnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17J2lucHV0JyArIChmb2N1cyA9PT0gU1RBUlRfREFURSA/ICcgLWZvY3VzZWQnIDogJycpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLnN0YXJ0RGF0ZUlucHV0UHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nU3RhcnQgZGF0ZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdkYXRlLXJhbmdlX2Fycm93Jy8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsnaW5wdXQnICsgKGZvY3VzID09PSBFTkRfREFURSA/ICcgLWZvY3VzZWQnIDogJycpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLmVuZERhdGVJbnB1dFByb3BzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0VuZCBkYXRlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9EYXRlUmFuZ2VQaWNrZXI+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlbGVjdC1wYW5lbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlbGVjdC1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cInJvb21zXCIgdmFsdWU9e3RoaXMuc3RhdGUucm9vbXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtpbnZhbGlkRmllbGRzLmluY2x1ZGVzKCdyb29tcycpID8gJ2Vycm9yLWZpZWxkJyA6ICcnfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5Sb29tczwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxXCI+MTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyXCI+Mjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIzXCI+Mzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI0XCI+NDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI1XCI+NTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI2XCI+Njwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI3XCI+Nzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI4XCI+ODwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI5XCI+OSs8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWxlY3QtYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJhZHVsdHNcIiB2YWx1ZT17dGhpcy5zdGF0ZS5hZHVsdHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtpbnZhbGlkRmllbGRzLmluY2x1ZGVzKCdhZHVsdHMnKSA/ICdlcnJvci1maWVsZCcgOiAnJ31gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+QWR1bHRzPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjFcIj4xPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjJcIj4yPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjNcIj4zPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjRcIj40PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjVcIj41PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjZcIj42PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjdcIj43PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjhcIj44PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjlcIj45Kzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlbGVjdC1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cImNoaWxkcmVuXCIgdmFsdWU9e3RoaXMuc3RhdGUuY2hpbGRyZW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtpbnZhbGlkRmllbGRzLmluY2x1ZGVzKCdjaGlsZHJlbicpID8gJ2Vycm9yLWZpZWxkJyA6ICcnfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5DaGlsZHJlbjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIwXCI+MDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxXCI+MTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyXCI+Mjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIzXCI+Mzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI0XCI+NDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI1XCI+NTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI2XCI+Njwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI3XCI+Nzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI4XCI+ODwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI5XCI+OSs8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5NQVhfQ0FQQUNJVFlfTVNHICE9PSAnJyAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlcnJvci1mbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5NQVhfQ0FQQUNJVFlfTVNHfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvb2tpbmctcGFuZWwtcmlnaHRcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvb2tpbmctYnV0dG9uLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJnZW5lcmFsLWJ0blwiIG9uQ2xpY2s9eygpID0+IHRoaXMuc2VhcmNoUm9vbXMoKX0+Qm9vayBOb3c8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHshdGhpcy5zdGF0ZS5pbml0U2VhcmNoICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm9vbS1zZWN0aW9uIGZhY2lsaXRpZXNcIiBpZD1cImhvdGVsLW92ZXJ2aWV3XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1Pk92ZXJ2aWV3PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZ2VuZXJhbC1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYWRkcmVzcy1zbS1pY29cIj57aG90ZWxEZXRhaWwuYWRkcmVzc308L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInBob25lLXNtLWljb1wiPntob3RlbERldGFpbC5waG9uZW5vfSAsIHtob3RlbERldGFpbC5tb2JpbGVub308L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpICBjbGFzc05hbWU9XCJtYWlsLXNtLWljb1wiPntob3RlbERldGFpbC5lbWFpbH08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BleHRyYS1jb250ZW50ICR7dGhpcy5zdGF0ZS5leHBhbmRDb250ZW50ID8gJyBhY3RpdmUnIDogJyd9YH0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVydmlldy1kZXNjcmlwdGlvblwiIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sIDogaG90ZWxEZXRhaWwuaG90ZWxfZGVzY319IC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2hvdGVsSGlnaGxpZ2h0cy5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3ViLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+SGlnaGxpZ2h0czwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImhpZ2hsaWdodC10YWJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2hvdGVsSGlnaGxpZ2h0cy5tYXAoaGwgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT57aGwuaGlnaGxpZ2h0c308L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb2xpY3ktYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN1Yi1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PkhvdGVsIFBvbGljaWVzPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5DaGVjayBJbiBUaW1lOiA8c3BhbiBjbGFzc05hbWU9XCJmb250LWJvbGRcIj57aG90ZWxEZXRhaWwgPyBob3RlbERldGFpbC5jaGVja2luIDogJyd9PC9zcGFuPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5DaGVjayBPdXQgVGltZTogPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+e2hvdGVsRGV0YWlsID8gaG90ZWxEZXRhaWwuY2hlY2tvdXQgOiAnJ308L3NwYW4+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2hvdGVsUG9saWNpZXMubWFwKGhwID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb2xpY3ktYm94IGluZGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1Yi1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT57aHAuY2F0ZWdvcnl9PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtocC5wb2xpY3kubWFwKHBvbCA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3BvbC5wb2xpY3l9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJjb250ZW50LWhpZGVcIiBvbkNsaWNrPXsoKT0+IHRoaXMudG9nZ2xlQ29udGVudCgpfT5TaG93IHt0aGlzLnN0YXRlLmV4cGFuZENvbnRlbnQgPyAnbGVzcycgOiAnbW9yZSd9PC9uYXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInJvb20tc2VjdGlvblwiIGlkPVwiaG90ZWwtcm9vbXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuc2VhcmNoU3RlcCA9PT0gMiA/ICdCb29raW5nIERldGFpbHMnIDogJ1Jvb21zJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oNT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmluaXRTZWFyY2ggJiYgdGhpcy5zdGF0ZS5zZWFyY2hTdGVwID09PSAxICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidGV4dC1saW5rIGJhY2tcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuYmFja1RvRGV0YWlsKCl9PkJhY2s8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5pbml0U2VhcmNoICYmXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF2YWlsYWJsZS1yb29tc1wiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuc2VhcmNoU3RlcCA9PT0gMSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2hvdGVsX3Jvb21zLmxlbmd0aCA9PT0gMCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuby1yZXN1bHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29taW5nLXNvb24td3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+Tm8gSG90ZWxzIEZvdW5kPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+U2VhcmNoIEFnYWluIGZvciByaWdodCBwbGFjZS48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtob3RlbF9yb29tcy5tYXAocm9vbSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb29tU2VhcmNoQmxvY2sgaXRlbT17cm9vbX0gc2VsZWN0Um9vbT17dGhpcy5zZWxlY3RSb29tfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRSb29tcz17dGhpcy5zdGF0ZS5zZWxlY3RlZFJvb21zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRSb29tSWRzPXt0aGlzLnN0YXRlLnNlbGVjdGVkUm9vbUlkc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZVF0eT17dGhpcy5jaGFuZ2VRdHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93RnVsbERldGFpbD17dGhpcy5zaG93RnVsbERldGFpbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm9vbS1ib29rLXN1Ym1pdFwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImdlbmVyYWwtYnRuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuY29udGludWVUb1N1bW1hcnkoKX0+Q29udGludWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuc2VhcmNoU3RlcCA9PT0gMiAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdW1tYXJ5LXRhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlJvb21zPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5RdHk8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlByaWNlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Ub3RhbCBQcmljZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2VsZWN0ZWRSb29tcy5tYXAocm9vbSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN1bW1hcnlJdGVtIGl0ZW09e3Jvb219IHNlbGVjdFJvb209e3RoaXMuc2VsZWN0Um9vbX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFJvb21zPXt0aGlzLnN0YXRlLnNlbGVjdGVkUm9vbXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRSb29tSWRzPXt0aGlzLnN0YXRlLnNlbGVjdGVkUm9vbUlkc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VRdHk9e3RoaXMuY2hhbmdlUXR5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJzcGVjaWFsLXNlcnZpY2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xzcGFuPVwiNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuYXYgb25DbGljaz17KCkgPT4gdGhpcy5zaG93U3BlY2lhbFJlcXVlc3RzKCl9IGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPkFkZCBTcGVjaWFsIFJlcXVlc3RzICs8L25hdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2VsZWN0ZWRTcFJlcXMubGVuZ3RoID4wICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkU3BSZXFzLmZpbHRlcihzcCA9PiBzcC5jYXRlZ29yeSA9PT0gJ3BheWFibGUnKS5tYXAoc3AgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJzcGVjaWFsLXNlcnZpY2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY29sU3Bhbj1cIjNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3NwLnRpdGxlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJmb250LWJvbGRcIj7igrkge3NwLnJhdGV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZGVsZXRlLWl0ZW1cIiBvbkNsaWNrPXsoZSkgPT4gdGhpcy5yZW1vdmVTcChlLHNwLnNwX2lkKX0+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZFNwUmVxcy5sZW5ndGggPjAgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRTcFJlcXMuZmlsdGVyKHNwID0+IHNwLmNhdGVnb3J5ID09PSAnbm9uIHBheWFibGUnKS5tYXAoc3AgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJzcGVjaWFsLXNlcnZpY2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY29sU3Bhbj1cIjNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3NwLnRpdGxlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJmb250LWJvbGRcIj7igrkgMDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImRlbGV0ZS1pdGVtXCIgb25DbGljaz17KGUpID0+IHRoaXMucmVtb3ZlU3AoZSxzcC5zcF9pZCl9PjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJmb250LWJvbGRcIj5UT1RBTDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+4oK5IHt0b3RhbF9jb3N0LnRvRml4ZWQoMil9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPkdTVCAxMC4wMCU8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPuKCuSB7dG90YWxfZ3N0LnRvRml4ZWQoMil9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJmb250LWJvbGRcIj5HUkFORCBUT1RBTDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+4oK5IHtncmFuZF90b3RhbC50b0ZpeGVkKDIpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbFNwYW49XCI1XCI+Q2hlY2staW4gJiBDaGVjay1vdXQ6IDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+e21vbWVudCh0aGlzLnN0YXRlLmNoZWNraW5kYXRlKS5mb3JtYXQoJ0REIE1NTSBZWVlZJyl9IC0ge21vbWVudCh0aGlzLnN0YXRlLmNoZWNrb3V0ZGF0ZSkuZm9ybWF0KCdERCBNTU0gWVlZWScpfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5QZXJzb25hbCBEZXRhaWxzPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImZvcm0tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+Rmlyc3QgTmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImZpcnN0bmFtZVwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZmlyc3RuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BpbnB1dC1maWVsZCAke2ludmFsaWRGaWVsZHMuaW5jbHVkZXMoJ2ZpcnN0bmFtZScpID8gJ2Vycm9yLWZpZWxkJyA6ICcnfWB9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+TGFzdCBOYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibGFzdG5hbWVcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmxhc3RuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BpbnB1dC1maWVsZCAke2ludmFsaWRGaWVsZHMuaW5jbHVkZXMoJ2xhc3RuYW1lJykgPyAnZXJyb3ItZmllbGQnIDogJyd9YH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5BZGRyZXNzIDE8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJhZGRyZXNzMVwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuYWRkcmVzczF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGlucHV0LWZpZWxkICR7aW52YWxpZEZpZWxkcy5pbmNsdWRlcygnYWRkcmVzczEnKSA/ICdlcnJvci1maWVsZCcgOiAnJ31gfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkFkZHJlc3MgMjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImFkZHJlc3MyXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5hZGRyZXNzMn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgaW5wdXQtZmllbGQgJHtpbnZhbGlkRmllbGRzLmluY2x1ZGVzKCdhZGRyZXNzMicpID8gJ2Vycm9yLWZpZWxkJyA6ICcnfWB9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+Q2l0eTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImNpdHlcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmNpdHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGlucHV0LWZpZWxkICR7aW52YWxpZEZpZWxkcy5pbmNsdWRlcygnY2l0eScpID8gJ2Vycm9yLWZpZWxkJyA6ICcnfWB9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+U3RhdGU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJzdGF0ZVwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuc3RhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGlucHV0LWZpZWxkICR7aW52YWxpZEZpZWxkcy5pbmNsdWRlcygnc3RhdGUnKSA/ICdlcnJvci1maWVsZCcgOiAnJ31gfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkNvdW50cnk8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJjb3VudHJ5XCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5jb3VudHJ5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BpbnB1dC1maWVsZCAke2ludmFsaWRGaWVsZHMuaW5jbHVkZXMoJ2NvdW50cnknKSA/ICdlcnJvci1maWVsZCcgOiAnJ31gfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlBpbmNvZGU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJwaW5jb2RlXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5waW5jb2RlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BpbnB1dC1maWVsZCAke2ludmFsaWRGaWVsZHMuaW5jbHVkZXMoJ3BpbmNvZGUnKSA/ICdlcnJvci1maWVsZCcgOiAnJ31gfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPk1vYmlsZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BpbnB1dC1maWVsZCAke2ludmFsaWRGaWVsZHMuaW5jbHVkZXMoJ21vYmlsZScpID8gJ2Vycm9yLWZpZWxkJyA6ICcnfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJtb2JpbGVcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm1vYmlsZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5BZGRpdGlvbmFsIFBob25lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGlucHV0LWZpZWxkICR7aW52YWxpZEZpZWxkcy5pbmNsdWRlcygnYWRkaXRpb25hbHBob25lbnVtYmVyJykgPyAnZXJyb3ItZmllbGQnIDogJyd9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImFkZGl0aW9uYWxwaG9uZW51bWJlclwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuYWRkaXRpb25hbHBob25lbnVtYmVyfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkVtYWlsPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgaW5wdXQtZmllbGQgJHtpbnZhbGlkRmllbGRzLmluY2x1ZGVzKCdlbWFpbCcpID8gJ2Vycm9yLWZpZWxkJyA6ICcnfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZW1haWx9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBheW1lbnQtd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZ2VuZXJhbC1idG4gZ3JleVwiIG9uQ2xpY2s9eygpPT4gdGhpcy5iYWNrVG9DYXJ0KCl9PkJhY2s8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImdlbmVyYWwtYnRuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB0aGlzLnNhdmVCb29raW5nKGUsIGdyYW5kX3RvdGFsLCB0b3RhbF9jb3N0LCAwLjAwLCAnJywgdG90YWxfZ3N0KX0+Q29udGludWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVG8gUGF5bWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyF0aGlzLnN0YXRlLmluaXRTZWFyY2ggJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvb20tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtob3RlbF9yb29tcy5sZW5ndGggPT09IDAgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuby1yZXN1bHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlJvb21zIHdpbGwgYmUgYWRkZWQgc29vbjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtob3RlbF9yb29tcy5tYXAocm9vbSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvb21CbG9jayBpdGVtPXtyb29tfSBzaG93RnVsbERldGFpbD17dGhpcy5zaG93RnVsbERldGFpbH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgeyF0aGlzLnN0YXRlLmluaXRTZWFyY2ggJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzcz1cImNvbnRlbnQtYXJlYSB0ZXh0LWNvbnRlbnRcIiBpZD1cImhvdGVsLWZhY2lsaXRpZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24taGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+RmFjaWxpdGllcyAmIEF0dHJhY3Rpb25zPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmVhdHVyZS13cmFwcGVyIHRocmVlLXBlci1jb2wgaW1hZ2UtdG9wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IWhvdGVsZmFjaWxpdGllcyB8fCBob3RlbGZhY2lsaXRpZXMubGVuZ3RoID09PSAwICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+RmFjaWxpdGllcyB3aWxsIGJlIGFkZGVkIHNvb24uPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aG90ZWxmYWNpbGl0aWVzICYmIGhvdGVsZmFjaWxpdGllcy5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtob3RlbGZhY2lsaXRpZXMubWFwKChmYWMsIGluZGV4KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmFjaWxpdHlOZXdCbG9jayBpdGVtPXtmYWN9IGltZ0FsaWduPXtpbmRleCAlIDIgPT09IDEgPyAnbGVmdCcgOiAncmlnaHQnfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInJvb20tc2VjdGlvblwiIGlkPVwiaG90ZWwtZ2FsbGVyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5HYWxsZXJ5PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHYWxsZXJ5IGdhbGxlcnlJbWFnZXM9e2dhbGxlcnlJbWFnZXN9IC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxGb290ZXIgLz5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnNob3dFcnJvciAmJlxyXG4gICAgICAgICAgICAgICAgPEFsZXJ0TW9kYWxcclxuICAgICAgICAgICAgICAgICAgICBtb2RhbEhlYWRlciA9IHtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICBtb2RhbEZvb3RlciA9IHt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGFsVGl0bGUgPSBcIldhcm5pbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGFsQm9keSA9IFwiUGxlYXNlIHNlbGVjdCB5b3VyIGNob2ljZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGFsU3RhdHVzPXt0aGlzLnN0YXRlLnNob3dFcnJvcn1cclxuICAgICAgICAgICAgICAgICAgICBPS0J1dHRvbj17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICBDQU5DRUxCdXR0b249e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgIE9LQWN0aW9uPXt0aGlzLmhpZGVFcnJvcn1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5zaG93UHJvZmlsZUluZm9FcnJvciAmJlxyXG4gICAgICAgICAgICAgICAgPEFsZXJ0TW9kYWxcclxuICAgICAgICAgICAgICAgICAgICBtb2RhbEhlYWRlciA9IHtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICBtb2RhbEZvb3RlciA9IHt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGFsVGl0bGUgPSBcIlByb2ZpbGUgRGV0YWlsc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgbW9kYWxCb2R5ID0gXCJQbGVhc2UgZW50ZXIgeW91ciBwZXJzb25hbCBpbmZvcm1hdGlvbiB0byBwcm9jZWVkXCJcclxuICAgICAgICAgICAgICAgICAgICBtb2RhbFN0YXR1cz17dGhpcy5zdGF0ZS5zaG93UHJvZmlsZUluZm9FcnJvcn1cclxuICAgICAgICAgICAgICAgICAgICBPS0J1dHRvbj17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICBDQU5DRUxCdXR0b249e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgIE9LQWN0aW9uPXt0aGlzLmhpZGVQcm9maWxlSW5mb0Vycm9yfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLml0ZW1SZW1vdmFsTWVzc2FnZSAmJlxyXG4gICAgICAgICAgICAgICAgPEFsZXJ0TW9kYWxcclxuICAgICAgICAgICAgICAgICAgICBtb2RhbEhlYWRlciA9IHtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICBtb2RhbEZvb3RlciA9IHt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGFsVGl0bGUgPSBcIldhcm5pbmchXCJcclxuICAgICAgICAgICAgICAgICAgICBtb2RhbEJvZHkgPSBcIkFyZSB5b3Ugc3VyZSB0byByZW1vdmUgdGhpcyByb29tPyBZb3Ugd2lsbCBiZSByZWRpcmVjdGVkIHRvIHRoZSByb29tcyBsaXN0LlwiXHJcbiAgICAgICAgICAgICAgICAgICAgbW9kYWxTdGF0dXM9e3RoaXMuc3RhdGUuaXRlbVJlbW92YWxNZXNzYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgIE9LQnV0dG9uPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgIENBTkNFTEJ1dHRvbj17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICBPS0FjdGlvbj17dGhpcy5lbXB0eUNhcnR9XHJcbiAgICAgICAgICAgICAgICAgICAgQ0FOQ0VMQWN0aW9uPXt0aGlzLmhpZGVJdGVtUmVtb3ZhbE1lc3NhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgT0tUZXh0ID0gXCJPS1wiXHJcbiAgICAgICAgICAgICAgICAgICAgQ0FOQ0VMVGV4dCA9IFwiQ0FOQ0VMXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuY2Fubm90Q29udGludWUgJiZcclxuICAgICAgICAgICAgICAgIDxBbGVydE1vZGFsXHJcbiAgICAgICAgICAgICAgICAgICAgbW9kYWxIZWFkZXIgPSB7ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kYWxGb290ZXIgPSB7dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICBtb2RhbFRpdGxlID0gXCJXYXJuaW5nIVwiXHJcbiAgICAgICAgICAgICAgICAgICAgbW9kYWxCb2R5ID0ge3RoaXMuc3RhdGUuY2Fubm90Q29udGludWVNZXNzYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGFsU3RhdHVzPXt0aGlzLnN0YXRlLmNhbm5vdENvbnRpbnVlfVxyXG4gICAgICAgICAgICAgICAgICAgIE9LQnV0dG9uPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgIENBTkNFTEJ1dHRvbj17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgT0tBY3Rpb249e3RoaXMuaGlkZUNhbm5vdENvbnRpbnVlfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5zaG93RGV0YWlsU3RhdHVzICYmXHJcbiAgICAgICAgICAgICAgICA8RnVsbFdpZHRoTW9kYWxcclxuICAgICAgICAgICAgICAgICAgICBtb2RhbEhlYWRlciA9IHt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGFsRm9vdGVyID0ge3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kYWxUaXRsZSA9IHtob3RlbERldGFpbC5ob3RlbF9uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGFsQm9keSA9IHs8Um9vbURldGFpbCByb29tRGV0YWlsPXt0aGlzLnN0YXRlLnJvb21EZXRhaWx9IGhpZGVGdWxsRGV0YWlsPXt0aGlzLmhpZGVGdWxsRGV0YWlsfSAvPn1cclxuICAgICAgICAgICAgICAgICAgICBtb2RhbFN0YXR1cz17dGhpcy5zdGF0ZS5zaG93RGV0YWlsU3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgICAgIE9LQnV0dG9uPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgIENBTkNFTEJ1dHRvbj17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgT0tBY3Rpb249e3RoaXMuaGlkZUZ1bGxEZXRhaWx9XHJcbiAgICAgICAgICAgICAgICAgICAgQ0FOQ0VMQWN0aW9uPXt0aGlzLmhpZGVGdWxsRGV0YWlsfVxyXG4gICAgICAgICAgICAgICAgICAgIE9LVGV4dCA9IFwiT0tcIlxyXG4gICAgICAgICAgICAgICAgICAgIENBTkNFTFRleHQgPSBcIkNBTkNFTFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnNob3dTcFJlcVN0YXQgJiZcclxuICAgICAgICAgICAgICAgIDxBbGVydE1vZGFsXHJcbiAgICAgICAgICAgICAgICAgICAgbW9kYWxIZWFkZXIgPSB7ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kYWxGb290ZXIgPSB7dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICBtb2RhbFRpdGxlID0gXCJXYXJuaW5nIVwiXHJcbiAgICAgICAgICAgICAgICAgICAgbW9kYWxCb2R5ID0gezxIb3RlbFNwUmVxTGlzdCBzcFJlcXVlc3RzPXtzcFJlcXVlc3RzfSBzZWxlY3RlZFNwUmVxSWRzPXt0aGlzLnN0YXRlLnNlbGVjdGVkU3BSZXFJZHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFNwUmVxcz17dGhpcy5zdGF0ZS5zZWxlY3RlZFNwUmVxc30gaGFuZGxlU3BTZWxlY3Rpb249e3RoaXMuaGFuZGxlU3BTZWxlY3Rpb259IC8+fVxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGFsU3RhdHVzPXt0aGlzLnN0YXRlLnNob3dTcFJlcVN0YXR9XHJcbiAgICAgICAgICAgICAgICAgICAgT0tCdXR0b249e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgQ0FOQ0VMQnV0dG9uPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICBPS0FjdGlvbj17dGhpcy5oaWRlU3BlY2lhbFJlcXVlc3RzfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnNob3dQZW5kaW5nTWVzc2FnZSAmJlxyXG4gICAgICAgICAgICAgICAgPEFsZXJ0TW9kYWxcclxuICAgICAgICAgICAgICAgICAgICBtb2RhbEhlYWRlciA9IHtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICBtb2RhbEZvb3RlciA9IHt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGFsVGl0bGUgPSBcIldhcm5pbmchXCJcclxuICAgICAgICAgICAgICAgICAgICBtb2RhbEJvZHkgPSB7XCJCb29raW5nIGlzIHRlbXBlcm9yaWx5IHVuYXZhaWxhYmxlIGR1ZSB0byBDb3ZpZC0xOS4gSXQgd2lsbCBiZSBhdmFpbGFibGUgb25seSBmcm9tIEp1bHkgMjAyMSBvbndhcmRzLiBGb3IgZnVydGhlciBpbmZvcm1hdGlvbiBwbGVhc2Ugc2VuZCBhbiBlbWFpbCB0byBib29raW5nQHV0aGhvdGVscy5jb20gb3IgY2FsbCArOTEgOTc0NjgzODg4MywrOTEgOTU2NzMzODg4NC5cIn1cclxuICAgICAgICAgICAgICAgICAgICBtb2RhbFN0YXR1cz17dGhpcy5zdGF0ZS5zaG93UGVuZGluZ01lc3NhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgT0tCdXR0b249e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgQ0FOQ0VMQnV0dG9uPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICBPS0FjdGlvbj17dGhpcy5oaWRlUGVuZGluZ01lc3NhZ2V9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvbWFpbj5cclxuICAgICAgICAgICAgPC8+XHJcblxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xyXG4gICAgaG90ZWxEYXRhOnN0YXRlLkhvdGVsUmVkdWNlci5ob3RlbERhdGEsXHJcbiAgIC8vIGZhY2lsaXR5RGF0YTpzdGF0ZS5Ib3RlbFJlZHVjZXIuZmFjaWxpdHlEYXRhLFxyXG4gICAgYm9va2luZ0RhdGEgOiBzdGF0ZS5Ib3RlbFJlZHVjZXIuYm9va2luZ0RhdGFcclxufSk7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcclxuICAgIG1hcFN0YXRlVG9Qcm9wcyxcclxuICAgIHtcclxuXHJcbiAgICAgICAgc2VhcmNoUm9vbXMgOiBIb3RlbEFjdGlvbnMuc2VhcmNoUm9vbXMsXHJcbiAgICAgICAgc2F2ZUJvb2tpbmcgOiBIb3RlbEFjdGlvbnMuc2F2ZUJvb2tpbmcsXHJcbiAgICAgICAgY29uZmlybUJvb2tpbmcgOiBIb3RlbEFjdGlvbnMuY29uZmlybUJvb2tpbmcsXHJcbiAgICAgICAgZ2V0QmFubmVySW1hZ2VzIDogSG90ZWxBY3Rpb25zLmdldEJhbm5lckltYWdlcyxcclxuICAgICAgICAvL2dldEhvdGVsSGlnaGxpZ2h0cyA6IEhvdGVsQWN0aW9ucy5nZXRIb3RlbEhpZ2hsaWdodHMsXHJcbiAgICAgICAgZ2V0SG90ZWxQb2xpY2llcyA6IEhvdGVsQWN0aW9ucy5nZXRIb3RlbFBvbGljaWVzLFxyXG4gICAgICAgIGdldFNwUmVxdWVzdHMgOiBIb3RlbEFjdGlvbnMuZ2V0U3BSZXF1ZXN0c1xyXG4gICAgfVxyXG4pKEhvdGVsRGV0YWlsU2x1Zyk7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlN1c3BlbnNlIiwibGF6eSIsInVzZVJvdXRlciIsIkZvb3RlciIsIkNvbnRlbnRTbGlkZXIiLCJnZXRVcmxTZWdtZW50IiwiY29ubmVjdCIsIkhvdGVsQWN0aW9ucyIsImVuR0IiLCJEYXRlUmFuZ2VQaWNrZXIiLCJTVEFSVF9EQVRFIiwiRU5EX0RBVEUiLCJSb29tQmxvY2siLCJSb29tRGV0YWlsIiwiUm9vbVNlYXJjaEJsb2NrIiwiRmFjaWxpdHlOZXdCbG9jayIsIlN1bW1hcnlJdGVtIiwiQWxlcnRNb2RhbCIsIm1vbWVudCIsIkZ1bGxXaWR0aE1vZGFsIiwiSG90ZWxOYXZiYXIiLCJIb3RlbFNwUmVxTGlzdCIsIkdhbGxlcnkiLCJJTUFHRV9QQVRIIiwiQVBJIiwiSG90ZWxEZXRhaWxTbHVnIiwiaG90ZWxEZXRhaWwiLCJnYWxsZXJ5SW1hZ2VzIiwiYmFubmVySW1hZ2VzIiwiaG90ZWxfcm9vbXMiLCJyb3V0ZXIiLCJzbHVnIiwicXVlcnkiLCJjb25zb2xlIiwibG9nIiwiSG90ZWxEZXRhaWwiLCJwcm9wcyIsInNlY3Rpb24iLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJibG9jayIsImlubGluZSIsImRhdGUiLCJzZXRTdGF0ZSIsInN0YXJ0RGF0ZSIsImVuZERhdGUiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJuYW1lIiwiTUFYX0NBUEFDSVRZX0dFTkVSQUwiLCJzdGF0ZSIsInJvb21zIiwiYWR1bHRzIiwiY2hpbGRyZW4iLCJpbnZhbGlkRmllbGRzIiwicHVzaCIsImFkdWx0Q291bnQiLCJwYXJzZUludCIsIk1BWF9DQVBBQ0lUWV9NU0ciLCJsZW5ndGgiLCJwYXJhbXMiLCJzaG93RXJyb3IiLCJpbml0U2VhcmNoIiwic2VhcmNoU3RlcCIsInRvZGF5IiwidG9tb3Jyb3ciLCJyb29tIiwidHlwZSIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwic2VsZWN0ZWRSb29tcyIsInNlbGVjdGVkUm9vbUlkcyIsImluY2x1ZGVzIiwicm9vbWlkIiwiaXRlbVJlbW92YWxNZXNzYWdlIiwiaW5kZXgiLCJpbmRleE9mIiwic3BsaWNlIiwibWFwIiwiaXRlbSIsInF0eSIsImFkZFF0eSIsInN1YlF0eSIsInBlcnNvbk9jY3VwaWVkIiwidG90YWxSb29tcyIsImkiLCJvY2N1cGFuY3kiLCJtYXhfY2FwYWNpdHlfYWR1bHQiLCJleHRyYV9vY2N1cGFuY3kiLCJleHRyYWJlZCIsInRvdGFsX29jY3VwYW5jeSIsImNhbm5vdENvbnRpbnVlIiwiY2Fubm90Q29udGludWVNZXNzYWdlIiwicm9vbUlkIiwicm9vbWNvdW50Iiwic2VsZWN0Um9vbSIsImFtb3VudCIsInByaW5jaXBsZUFtb3VudCIsImRpc2NvdW50IiwicHJvZ3JhbV9kZXNjcmlwdGlvbiIsImdzdCIsImZpcnN0bmFtZSIsImxhc3RuYW1lIiwiYWRkcmVzczEiLCJhZGRyZXNzMiIsImNpdHkiLCJjb3VudHJ5IiwicGluY29kZSIsIm1vYmlsZSIsImFkZGl0aW9uYWxwaG9uZW51bWJlciIsImVtYWlsIiwiY2hlY2tpbmRhdGUiLCJmb3JtYXQiLCJjaGVja291dGRhdGUiLCJzdGFydCIsImVuZCIsIm5vT2ZEYXlzIiwiZHVyYXRpb24iLCJkaWZmIiwiYXNEYXlzIiwibm9PZnJvb21zIiwidGF4YW1vdW50Iiwic2VsZWN0ZWRTcFJlcXMiLCJib29rZWRSb29tcyIsImV4dHJhYmVkY291bnQiLCJyb29tX3ByaWNlIiwicGFyc2VGbG9hdCIsImhvdGVsX2lkIiwiSlNPTiIsInN0cmluZ2lmeSIsInNhdmVCb29raW5nIiwidG90YWxBbW91bnQiLCJzaG93UHJvZmlsZUluZm9FcnJvciIsInRoYXQiLCJvcHRpb25zIiwia2V5IiwiZGVzY3JpcHRpb24iLCJpbWFnZSIsImhhbmRsZXIiLCJyZXNwb25zZSIsIlBheW1lbnRJZCIsInJhem9ycGF5X3BheW1lbnRfaWQiLCJEYXRlIiwicGF5bWVudElkIiwiUGF5bWVudFVybCIsImJvb2tQYXJhbXMiLCJib29raW5nSWQiLCJib29raW5nRGF0YSIsImNvbmZpcm1Cb29raW5nIiwicHJlZmlsbCIsImNvbnRhY3QiLCJub3RlcyIsImFkZHJlc3MiLCJ0aGVtZSIsImNvbG9yIiwiaGlkZV90b3BiYXIiLCJyenAxIiwid2luZG93IiwiUmF6b3JwYXkiLCJvbiIsIm9wZW4iLCJpZCIsInJvb21MaXN0IiwiZmlsdGVyIiwic2hvd0RldGFpbFN0YXR1cyIsInJvb21EZXRhaWwiLCJzaG93U3BSZXFTdGF0Iiwic3AiLCJzZWxlY3RlZFNwUmVxSWRzIiwiY2hlY2tlZCIsInNwX2lkIiwic2hvd1BlbmRpbmdNZXNzYWdlIiwiZXhwYW5kQ29udGVudCIsInNldERhdGUiLCJnZXREYXRlIiwicm9vbVR5cGVzIiwiaG90ZWxQb2xpY2llcyIsImhvdGVsSGlnaGxpZ2h0cyIsInNob3dTcGVjaWFsUmVxdWVzdHMiLCJzcFJlcXVlc3RzIiwic2NyaXB0IiwiY3JlYXRlRWxlbWVudCIsInNyYyIsImFzeW5jIiwiYm9keSIsImFwcGVuZENoaWxkIiwiaG90ZWxfdXJsIiwicHJldlByb3BzIiwicHJldlN0YXRlIiwic25hcHNob3QiLCJtYXhfb2NjdXBhbmN5IiwiaG90ZWxoaWdobGlnaHRzIiwiaG90ZWxwb2xpY2llcyIsInNwZWNpYWxyZXF1ZXN0IiwiZ2VuZXJhbF9mYWNpbGl0aWVzIiwiaG90ZWxfZmFjaWxpdGllcyIsImhvdGVsZmFjaWxpdGllcyIsInRvdGFsX2Nvc3QiLCJ0b3RhbF9nc3QiLCJjYXRlZ29yeSIsInJhdGUiLCJncmFuZF90b3RhbCIsInJhem9yR3JhbmRUb3RhbCIsImhvdGVsX25hbWUiLCJwaG9uZW5vIiwibW9iaWxlbm8iLCJob3RlbF9kZXNjIiwic2Nyb2xsVG9TZWN0aW9uIiwic2V0U3RhcnREYXRlIiwic2V0RW5kRGF0ZSIsInN0YXJ0RGF0ZUlucHV0UHJvcHMiLCJlbmREYXRlSW5wdXRQcm9wcyIsImZvY3VzIiwiaGFuZGxlQ2hhbmdlIiwic2VhcmNoUm9vbXMiLCJfX2h0bWwiLCJobCIsImhpZ2hsaWdodHMiLCJjaGVja2luIiwiY2hlY2tvdXQiLCJocCIsInBvbGljeSIsInBvbCIsInRvZ2dsZUNvbnRlbnQiLCJiYWNrVG9EZXRhaWwiLCJjaGFuZ2VRdHkiLCJzaG93RnVsbERldGFpbCIsImNvbnRpbnVlVG9TdW1tYXJ5IiwidGl0bGUiLCJyZW1vdmVTcCIsInRvRml4ZWQiLCJiYWNrVG9DYXJ0IiwiZmFjIiwiaGlkZUVycm9yIiwiaGlkZVByb2ZpbGVJbmZvRXJyb3IiLCJlbXB0eUNhcnQiLCJoaWRlSXRlbVJlbW92YWxNZXNzYWdlIiwiaGlkZUNhbm5vdENvbnRpbnVlIiwiaGlkZUZ1bGxEZXRhaWwiLCJoYW5kbGVTcFNlbGVjdGlvbiIsImhpZGVTcGVjaWFsUmVxdWVzdHMiLCJoaWRlUGVuZGluZ01lc3NhZ2UiLCJtYXBTdGF0ZVRvUHJvcHMiLCJob3RlbERhdGEiLCJIb3RlbFJlZHVjZXIiLCJnZXRCYW5uZXJJbWFnZXMiLCJnZXRIb3RlbFBvbGljaWVzIiwiZ2V0U3BSZXF1ZXN0cyJdLCJzb3VyY2VSb290IjoiIn0=