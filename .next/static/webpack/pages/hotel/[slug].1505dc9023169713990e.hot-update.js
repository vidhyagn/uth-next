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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _views_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../views/Footer */ "./views/Footer.js");
/* harmony import */ var _views_common_hotelSlider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../views/common/hotelSlider */ "./views/common/hotelSlider.js");
/* harmony import */ var _utilities_CustomFunctions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utilities/CustomFunctions */ "./utilities/CustomFunctions.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_hotel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../actions/hotel */ "./actions/hotel.js");
/* harmony import */ var react_nice_dates__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-nice-dates */ "./node_modules/react-nice-dates/build/index.esm.js");
/* harmony import */ var react_nice_dates_build_style_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-nice-dates/build/style.css */ "./node_modules/react-nice-dates/build/style.css");
/* harmony import */ var react_nice_dates_build_style_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_nice_dates_build_style_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _views_RoomBlock__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../views/RoomBlock */ "./views/RoomBlock.js");
/* harmony import */ var _views_RoomDetail__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../views/RoomDetail */ "./views/RoomDetail.js");
/* harmony import */ var _views_RoomSearchBlock__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../views/RoomSearchBlock */ "./views/RoomSearchBlock.js");
/* harmony import */ var _views_FacilityNewBlock__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../views/FacilityNewBlock */ "./views/FacilityNewBlock.js");
/* harmony import */ var _views_SummaryItem__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../views/SummaryItem */ "./views/SummaryItem.js");
/* harmony import */ var _views_common_AlertModal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../views/common/AlertModal */ "./views/common/AlertModal.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _views_common_FullWidthModal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../views/common/FullWidthModal */ "./views/common/FullWidthModal.js");
/* harmony import */ var _views_HotelNavbar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../views/HotelNavbar */ "./views/HotelNavbar.js");
/* harmony import */ var _views_HotelSpReqList__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../views/HotelSpReqList */ "./views/HotelSpReqList.js");
/* harmony import */ var _views_common_Gallery__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../views/common/Gallery */ "./views/common/Gallery.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../constants */ "./constants/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "D:\\demo\\uth-next\\pages\\hotel\\[slug].js",
    _this = undefined,
    _s = $RefreshSig$();
























var API = 'https://rzp_test_rnEH5I4NHuaGJx:SPmq6qKQELxxLlYTnP7Y5dyj@api.razorpay.com/v1/payments/'; //This gets called every time the page is called

var HotelDetailSlug = function HotelDetailSlug(_ref) {
  _s();

  var hotelDetail = _ref.hotelDetail,
      galleryImages = _ref.galleryImages,
      hotel_rooms = _ref.hotel_rooms;
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  var hotel_url = router.query.hotel_url;
  console.log(hotelDetail);
  console.log(galleryImages);
  console.log(hotel_rooms);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxDEV)("div", {
    children: "skdfskfsdfdjsf"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 111,
    columnNumber: 9
  }, _this) // <HotelDetail hotelDetail={hotelDetail[0]} hotel_url={hotel_url}
  //              galleryImages={galleryImages} hotel_rooms={hotel_rooms}/>
  ;
}; // class HotelDetail extends Component {
//     constructor(props) {
//         super(props);
//         let today = new Date();
//         let tomorrow = new Date(today);
//         tomorrow.setDate(tomorrow.getDate() + 1);
//         this.state = {
//             today : today,
//             tomorrow : tomorrow,
//             startDate : today,
//             endDate : tomorrow,
//             checkindate : today,
//             checkoutdate : tomorrow,
//             rooms : '',
//             adults : '',
//             children : '',
//             roomTypes : [],
//             initSearch : false,
//             searchStep : 1,
//             selectedRooms : [],
//             selectedRoomIds : [],
//             hotel_rooms : [],
//             invalidFields : [],
//             showError : false,
//             firstname :'',
//             lastname :'',
//             address1 : '',
//             address2 : '',
//             city : '',
//             state : '',
//             pincode : '',
//             country : '',
//             mobile : '',
//             additionalphonenumber : '',
//             email : '',
//             showProfileInfoError : false,
//             bookingId : '',
//             totalAmount : 0,
//             principleAmount : 0,
//             discount : 0,
//             program_description : '',
//             gst : 0,
//             MAX_CAPACITY_MSG : '',
//             itemRemovalMessage : false,
//             bannerImages : [],
//             cannotContinueMessage :false,
//             galleryImages : [],
//             showDetailStatus : false,
//             hotelPolicies : [],
//             hotelHighlights : [],
//             MAX_CAPACITY_GENERAL : 1,
//             showSpecialRequests : false,
//             spRequests : [],
//             selectedSpReqs :[],
//             selectedSpReqIds : [],
//             showPendingMessage : false,
//             expandContent : false
//         }
//     }
//     componentDidMount() {
//         const script = document.createElement('script');
//         script.src = 'https://checkout.razorpay.com/v1/checkout.js';
//         script.async = true;
//         document.body.appendChild(script);
//         this.setState({
//             hotel_url : this.props.hotel_url
//         })
//     }
//
//     scrollToSection = (section) => {
//         if(section !== '') {
//             var element = document.getElementById(section);
//             if (element) {
//                 element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
//             }
//         }
//     }
//
//
//     componentDidUpdate(prevProps, prevState, snapshot) {
//
//         if(this.props.hotelDetail !== prevProps.hotelDetail) {
//
//             this.setState({
//                 hotel_id : this.props.hotelDetail.hotel_id,
//                 hotelDetail : this.props.hotelDetail,
//                 hotel_rooms : this.props.hotel_rooms,
//                 galleryImages : this.props.galleryImages,
//                 MAX_CAPACITY_GENERAL : this.props.hotelDetail.max_occupancy,
//                 hotelHighlights : this.props.hotelDetail.hotelhighlights,
//                 hotelPolicies : this.props.hotelDetail.hotelpolicies,
//                 spRequests : this.props.hotelDetail.specialrequest
//             }, function() {
//
//             })
//         }
//
//         // if(this.props.facilityData.roomTypes !== prevProps.facilityData.roomTypes) {
//         //     this.setState({
//         //         roomTypes : this.props.facilityData.roomTypes
//         //     })
//         // }
//         // if(this.props.bookingData.bookingId !== prevProps.bookingData.bookingId) {
//         //
//         //     this.setState({
//         //         bookingId : this.props.bookingData.bookingId
//         //     }, function (){
//         //         this.continueToPayment()
//         //     })
//         // }
//         // if(this.props.bookingData.bookingResult !== prevProps.bookingData.bookingResult) {
//         //     let PaymentUrl = `https://uthdev.neverbeforeholidays.com/payment-success?rp_id=`+this.state.PaymentId+`&ramt=`+this.state.totalAmount+`&mobile=`+this.state.mobile+`&email=`+this.state.email+`&method=Card payment&date=`+moment(this.state.today).format('DD MMM, YYYY');
//         //     window.location.href = PaymentUrl;
//         // }
//
//         // if(this.props.hotelData.bannerImages !== prevProps.hotelData.bannerImages) {
//         //     this.setState({
//         //         bannerImages : this.props.hotelData.bannerImages
//         //     })
//         // }
//     }
//
//     setStartDate = (date) => {
//         this.setState({
//             startDate : date
//         })
//     }
//     setEndDate = (date) => {
//         this.setState({
//             endDate : date
//         })
//     }
//
//     handleChange = (e) => {
//         console.log(e.target.value)
//         this.setState({
//             [e.target.name] : e.target.value
//         })
//     }
//
//     searchRooms = () => {
//
//
//         let MAX_CAPACITY_GENERAL = this.state.MAX_CAPACITY_GENERAL;
//         let startDate = this.state.startDate;
//         let endDate = this.state.startDate;
//         let rooms = this.state.rooms;
//         let adults = this.state.adults;
//         let children = this.state.children;
//         let invalidFields = [];
//         if(startDate === '') {
//             invalidFields.push('startDate');
//         }
//         if(endDate === '') {
//             invalidFields.push('endDate');
//         }
//         if(rooms === '') {
//             invalidFields.push('rooms');
//         }
//         if(adults === '') {
//             invalidFields.push('adults');
//         }
//
//         let adultCount = parseInt(rooms) * parseInt(MAX_CAPACITY_GENERAL);
//         if(parseInt(adults) > adultCount) {
//             this.setState({
//                 MAX_CAPACITY_MSG : "Sorry. We are allowing a maximum of "+MAX_CAPACITY_GENERAL+" members in a room"
//             })
//         }
//         if(invalidFields.length === 0 ) {
//
//             let params = {startDate: this.state.startDate, endDate : this.state.endDate, rooms : this.state.rooms,
//                 adults : this.state.adults, children : this.state.children};
//             this.setState({showError : false, initSearch :  true, searchStep : 1, startDate: this.state.startDate, endDate : this.state.endDate, rooms : this.state.rooms,
//                 adults : this.state.adults, children : this.state.children, invalidFields : invalidFields})
//         }
//         else {
//             this.setState({ showError : true, startDate: this.state.startDate, endDate : this.state.endDate, rooms : this.state.rooms,
//                 adults : this.state.adults, children : this.state.children, invalidFields : invalidFields})
//         }
//     }
//     resetSearch = () => {
//         this.setState({showError : false, initSearch :  false, searchStep : 0, startDate: this.state.today, endDate : this.state.tomorrow, rooms : '',
//             adults : '', children : '', invalidFields : []})
//     }
//     backToDetail = () => {
//         this.setState({initSearch :  false})
//     }
//     backToCart = () => {
//         this.setState({searchStep :  1})
//     }
//
//     selectRoom = (room, type,e) => {
//         e.preventDefault()
//         e.stopPropagation();
//         let selectedRooms = this.state.selectedRooms;
//         let selectedRoomIds = this.state.selectedRoomIds;
//
//         let hotel_rooms = this.state.hotel_rooms
//         if(type === 'add' || type === 'choose') {
//             console.log(selectedRoomIds)
//             if(!selectedRoomIds.includes(room.roomid)){
//                 selectedRoomIds.push(room.roomid)
//                 selectedRooms.push(room);
//                 console.log(room)
//             }
//         }
//
//         if(type === 'remove') {
//             if(this.state.searchStep === 2 && selectedRooms.length ===1){
//                 this.setState({
//                     itemRemovalMessage : true
//                 })
//             }
//             else {
//                 if(selectedRoomIds.includes(room.roomid)) {
//                     let index = selectedRoomIds.indexOf(room.roomid);
//
//                     selectedRoomIds.splice(index, 1)
//                     selectedRooms.splice(index, 1);
//                     hotel_rooms = hotel_rooms.map(item => {
//                         if(item.roomid === room.roomid) {
//                             item.qty = 0;
//                         }
//                         return item;
//                     });
//                 }
//             }
//         }
//
//         this.setState({
//             selectedRoomIds :selectedRoomIds,
//             selectedRooms : selectedRooms,
//             hotel_rooms : hotel_rooms
//         }, function(){
//             if(type !== 'remove') {
//                 (type === 'add' || type === 'choose' ) ? this.addQty(room) : this.subQty(room);
//             }
//
//
//         })
//
//     }
//
//
//     continueToSummary = () => {
//         let adultCount = parseInt(this.state.adults);
//         console.log(adultCount);
//         let personOccupied = 0;
//         let selectedRooms = this.state.selectedRooms;
//         let totalRooms = 0;
//         if(selectedRooms.length > 0) {
//             for(var i=0; i<selectedRooms.length; i++) {
//                 let qty = selectedRooms[i].qty;
//                 totalRooms += parseInt(qty);
//                 let occupancy = parseInt(selectedRooms[i].max_capacity_adult);
//                 let extra_occupancy = selectedRooms[i].extrabed === 'yes'?  1: 0;
//                 let total_occupancy = occupancy + extra_occupancy;
//                 personOccupied += parseInt(qty) *total_occupancy;
//             }
//         }
//
//         if(selectedRooms.length === 0) {
//             this.setState({
//                 cannotContinue : true,
//                 cannotContinueMessage : "Please select atleast a room to proceed"
//             })
//         }
//         else if(adultCount > personOccupied) {
//             this.setState({
//                 cannotContinue : true,
//                 cannotContinueMessage : "Sorry."+ adultCount+" persons cannot be occupied in "+totalRooms+" rooms"
//             })
//         }
//         else {
//             if(this.state.selectedRooms.length >0) {
//                 this.setState({
//                     searchStep :2
//                 })
//             }
//         }
//
//
//
//     }
//
//     addQty = (room) => {
//         let selectedRooms = this.state.selectedRooms;
//         let selectedRoomIds = this.state.selectedRoomIds;
//         let roomId = room.roomid;
//         selectedRooms = selectedRooms.map(item => {
//             if(item.roomid === roomId) {
//                 if(item.qty) {
//                     if(item.qty < item.roomcount) {
//                         item.qty = parseInt(item.qty) +1;
//                     }
//                 }
//                 else {
//                     item.qty = 1;
//                 }
//             }
//             return item;
//         });
//         this.setState({
//             selectedRooms : selectedRooms,
//             selectedRoomIds : selectedRoomIds
//         })
//     }
//     subQty = (room) => {
//         console.log(room)
//         let selectedRooms = this.state.selectedRooms;
//         let selectedRoomIds = this.state.selectedRoomIds;
//         let roomId = room.roomid;
//
//         if(room.qty && room.qty === 1) {
//             if(this.state.searchStep === 2 && selectedRooms.length ===1){
//                 this.setState({
//                     itemRemovalMessage : true
//                 })
//             }
//             else {
//                 room.qty = 0;
//                 let index = selectedRoomIds.indexOf(room.roomid);
//                 selectedRoomIds.splice(index,1)
//                 selectedRooms.splice(index,1)
//             }
//
//         }
//         else {
//
//             selectedRooms = selectedRooms.map(item => {
//                 if(item.roomid === roomId) {
//                     item.qty = (item.qty && item.qty >0) ? parseInt(item.qty) -1 :0;
//                 }
//                 return item;
//             })
//         }
//
//         this.setState({
//             selectedRooms : selectedRooms,
//             selectedRoomIds : selectedRoomIds
//         })
//     }
//
//     changeQty = (room,e) => {
//         let qty = e.target.value;
//         let selectedRooms = this.state.selectedRooms;
//         let selectedRoomIds = this.state.selectedRoomIds;
//         let roomId = room.roomid;
//         selectedRooms = selectedRooms.map(item => {
//             if(item.roomid === roomId) {
//                 item.qty = (item.qty && item.qty >0) ? parseInt(item.qty) -1 : 0;
//             }
//             return item;
//         })
//         this.selectRoom(room)
//     }
//
//     saveBooking = (e, amount, principleAmount, discount, program_description, gst) => {
//
//
//         let firstname = this.state.firstname;
//         let lastname = this.state.lastname;
//         let address1 = this.state.address1;
//         let address2 = this.state.address2;
//         let city = this.state.city;
//         let state = this.state.state;
//         let country = this.state.country;
//         let pincode = this.state.pincode;
//         let mobile = this.state.mobile;
//         let additionalphonenumber = this.state.additionalphonenumber;
//         let email = this.state.email;
//         let invalidFields = [];
//         if(firstname === '') {
//             invalidFields.push('firstname');
//         }
//         if(lastname === '') {
//             invalidFields.push('lastname');
//         }
//         if(address1 === '') {
//             invalidFields.push('address1');
//         }
//         if(address2 === '') {
//             invalidFields.push('address2');
//         }
//         if(city === '') {
//             invalidFields.push('city');
//         }
//         if(state === '') {
//             invalidFields.push('state');
//         }
//         if(country === '') {
//             invalidFields.push('country');
//         }
//         if(pincode === '') {
//             invalidFields.push('pincode');
//         }
//         if(mobile === '') {
//             invalidFields.push('mobile');
//         }
//         if(additionalphonenumber === '') {
//             invalidFields.push('additionalphonenumber');
//         }
//         if(email === '') {
//             invalidFields.push('email');
//         }
//
//         if(invalidFields.length === 0) {
//             let selectedRooms = this.state.selectedRooms;
//             let checkindate = moment(this.state.startDate).format('yyyy-MM-DD');
//             let checkoutdate = moment(this.state.endDate).format('yyyy-MM-DD');
//             let adults = this.state.adults || 0;
//             let children = this.state.children || 0;
//
//
//
//             var start = moment(checkindate, "YYYY-MM-DD");
//             var end = moment(checkoutdate, "YYYY-MM-DD");
//
//             let noOfDays = moment.duration(end.diff(start)).asDays();
//
//             let noOfrooms = this.state.rooms;
//             let taxamount = gst;
//
//             console.log(selectedRooms)
//
//             let selectedSpReqs = this.state.selectedSpReqs;
//
//
//             let bookedRooms = [];
//
//             for(let i=0; i<selectedRooms.length; i++) {
//                 let room = {
//                     "roomid" : selectedRooms[i].roomid,
//                     "noofadults" :  selectedRooms[i].max_capacity_adult,
//                     "noofchilds" :  0,
//                     "extrabed" :  selectedRooms[i].extrabedcount,
//                     "price" :  selectedRooms[i].room_price,
//                     "extrabedprice" :  0,
//                     "taxamount":  0,
//                     "totalprice" :  parseFloat(selectedRooms[i].room_price) * noOfDays,
//                 }
//                 bookedRooms.push(room);
//             }
//
//             let params = {
//                 "hotel_id": this.state.hotel_id,
//                 "checkindate": checkindate,
//                 "checkoutdate": checkoutdate,
//                 "noofadults": adults,
//                 "noofchilds": children,
//                 "noofrooms": noOfrooms,
//                 "price" : principleAmount,
//                 "taxamount": taxamount,
//                 "totalprice": amount,
//                 "firstname": firstname,
//                 "lastname": lastname,
//                 "address1": address1,
//                 "address2": address2,
//                 "city": city,
//                 "state": state,
//                 "country": country,
//                 "pincode": pincode,
//                 "mobile": mobile,
//                 "email": email,
//                 "idproof": "test.pdf",
//                 "rooms": bookedRooms,
//                 "additionalphonenumber": mobile,
//                 "splrequest" : selectedSpReqs.length >0  ? JSON.stringify(selectedSpReqs) : ""
//             }
//             console.log(params)
//             this.props.saveBooking(params);
//
//
//             this.setState({
//                 invalidFields : [],
//                 totalAmount : amount,
//                 principleAmount : principleAmount,
//                 discount : discount,
//                 program_description : program_description,
//                 gst : gst,
//                 checkindate : checkindate,
//                 checkoutdate : checkoutdate
//             })
//         }
//         else {
//             this.setState({
//                 showProfileInfoError : true,
//                 invalidFields : invalidFields,
//                 totalAmount : amount,
//                 principleAmount : principleAmount,
//                 discount : discount,
//                 program_description : program_description,
//                 gst : gst
//             })
//         }
//
//     }
//
//     hideProfileInfoError = () => {
//         this.setState({
//             showProfileInfoError : false
//         })
//     }
//
//     continueToPayment = () => {
//         let that=this;
//         let options = {
//             // key: 'rzp_live_uNQgz6rOGQ96qE',
//             key: 'rzp_test_rnEH5I4NHuaGJx',
//             amount: parseFloat(this.state.totalAmount)*100, //  = INR 1
//             name: 'UTH Booking',
//             description: 'Please pay the booking charges here to confirm',
//             image: 'https://uthdev.neverbeforeholidays.com/assets/images/uth-logo-black.png',
//             // order_id: this.state.orderId,
//             handler: function(response) {
//                 console.log(response);
//                 that.setState({PaymentId: response.razorpay_payment_id, totalAmount : that.state.totalAmount, date : moment(new Date()).format('DD MMM YYYY') , email :that.state.email, mobile : that.state.mobile })
//                 //let PaymentUrl = `http://159.65.153.59/site/#/payment-success/`+this.props.bookingData.bookingId;
//                 const paymentId = response.razorpay_payment_id;
//
//                 let PaymentUrl = `https://uthdev.neverbeforeholidays.com/payment-success?rp_id=`+paymentId+`&ramt=`+that.state.totalAmount+`&mobile=`+that.state.mobile+`&email=`+that.state.email+`&method=Card payment&date=`+moment(that.state.today).format('DD MMM, YYYY');
//                 let params = {
//                     "_id": paymentId,
//                     "reference": 'UTH',
//                     "discount": that.state.discount,
//                     "gst": that.state.gst,
//                     "desc": '',
//                     "principal": that.state.principleAmount,
//                     "paymenturl": PaymentUrl,
//                     "prod": false
//                 }
//                 //that.props.confirmBooking(params);
//                 let bookParams = {
//                     bookingId: that.props.bookingData.bookingId
//                 }
//                 that.props.confirmBooking(bookParams);
//             },
//             prefill: {
//                 name: 'UTH',
//                 contact: '',
//                 email: ''
//             },
//             notes: {
//                 address: 'UTH'
//             },
//             theme: {
//                 color: '#3fa9f5',
//                 hide_topbar: false
//             }
//         };
//         //console.log(options);
//         var rzp1 = new window.Razorpay(options);
//         rzp1.on('payment.failed', function (response){
//             // console.log(response.error.description);
//         });
//         rzp1.open();
//     }
//
//     hideError = () => {
//         this.setState({
//             showError : false
//         })
//     }
//
//     hideItemRemovalMessage = () => {
//         this.setState({
//             itemRemovalMessage : false,
//         })
//     }
//
//     emptyCart = () => {
//         let selectedRooms = this.state.selectedRooms;
//
//         selectedRooms = selectedRooms.map(item => {
//             item.qty = 0;
//             return item;
//         })
//
//
//         this.setState({
//             itemRemovalMessage : false,
//             selectedRooms : [],
//             selectedRoomIds : [],
//             searchStep : 1
//         })
//     }
//     hideCannotContinue = () => {
//         this.setState({
//             cannotContinue : false
//         })
//     }
//
//     showFullDetail = (id) => {
//         let hotel_rooms = this.state.hotel_rooms;
//         let roomList =  hotel_rooms.filter(item => item.roomid === id);
//         this.setState({
//             showDetailStatus : true,
//             roomId : id,
//             roomDetail : roomList.length > 0 && roomList[0]
//         })
//     }
//
//     hideFullDetail = () => {
//         this.setState({
//             showDetailStatus : false
//         })
//     }
//
//     showSpecialRequests = () => {
//         this.setState({
//             showSpReqStat : true
//         })
//     }
//     hideSpecialRequests = () => {
//         this.setState({
//             showSpReqStat : false
//         })
//     }
//
//     handleSpSelection = (e, sp) => {
//         let selectedSpReqIds = [...this.state.selectedSpReqIds];
//         let selectedSpReqs = [...this.state.selectedSpReqs];
//
//         if(e.target.checked) {
//             selectedSpReqIds.push(sp.sp_id)
//             selectedSpReqs.push(sp)
//         }
//         else {
//             let index = selectedSpReqIds.indexOf(sp.sp_id);
//             selectedSpReqIds.splice(index, 1);
//             selectedSpReqs.splice(index, 1);
//
//         }
//         this.setState({
//             selectedSpReqs : selectedSpReqs,
//             selectedSpReqIds : selectedSpReqIds
//         })
//     }
//
//     removeSp = (e, sp_id) => {
//         let selectedSpReqIds = [...this.state.selectedSpReqIds];
//         let selectedSpReqs = [...this.state.selectedSpReqs];
//         let index = selectedSpReqIds.indexOf(sp_id);
//         selectedSpReqIds.splice(index, 1);
//         selectedSpReqs.splice(index, 1);
//         this.setState({
//             selectedSpReqs : selectedSpReqs,
//             selectedSpReqIds : selectedSpReqIds
//         })
//
//     }
//
//     hidePendingMessage = () => {
//         this.setState({
//             showPendingMessage : false
//         })
//     }
//
//     toggleContent = () => {
//         this.setState({
//             expandContent : !this.state.expandContent
//         })
//     }
//     render() {
//         console.log(this.props.hotelDetail)
//         //let hotelDetail = this.props.hotelDetail;
//         let hotelDetail = this.state.hotelDetail;
//         let bannerImages = this.state.bannerImages || [];
//
//
//         let galleryImages = this.state.galleryImages || [];
//         let startDate = this.state.startDate;
//         let endDate = this.state.endDate;
//
//         let hotel_rooms = this.state.hotel_rooms;
//         let general_facilities =  hotelDetail ? hotelDetail.hotel_facilities : [];
//         let hotelfacilities = hotelDetail ? hotelDetail.hotelfacilities : [];
//         let roomTypes = this.state.roomTypes || [];
//
//         let selectedRooms = this.state.selectedRooms || [];
//         let spRequests = this.state.spRequests || [];
//         let selectedSpReqIds = this.state.selectedSpReqIds || [];
//         let selectedSpReqs = this.state.selectedSpReqs || [];
//
//         let total_cost =0;
//         let total_gst =0;
//         if(selectedRooms.length > 0) {
//             for(var i=0; i<selectedRooms.length; i++) {
//                 total_cost += (parseFloat(selectedRooms[i].room_price) * parseInt(selectedRooms[i].qty))
//             }
//         }
//         if(selectedSpReqs.length > 0) {
//             for(var i=0; i<selectedSpReqs.length; i++) {
//                 if(selectedSpReqs[i].category === 'payable') {
//                     total_cost += parseFloat(selectedSpReqs[i].rate)
//                 }
//             }
//         }
//         total_gst = (total_cost*10)/100;
//         let grand_total = total_cost+ total_gst;
//         //grand_total = grand_total>0? grand_total.toFixed(2):'';
//         let razorGrandTotal = grand_total*100;
//
//         let invalidFields = this.state.invalidFields || [];
//         console.log(invalidFields)
//
//         let hotelHighlights = this.state.hotelHighlights || [];
//         let hotelPolicies = this.state.hotelPolicies || [];
//
//
//         console.log(selectedSpReqs)
//
//         return (
//             <div className="wrapper">
//                 <div className="inner-page">
//
//                     <HotelNavbar  scrollToSection={this.scrollToSection}/>
//                     {hotelDetail &&
//                     <>
//                         <section className="details-bannner">
//
//                             <div className="carousel-container">
//                                 <div className="container">
//                                     <div className="carousel-text">
//                                         <h5>{hotelDetail.hotel_name}</h5>
//                                         <p className="location">{hotelDetail.address}</p>
//                                     </div>
//                                 </div>
//                             </div>
//
//                             <ContentSlider images={bannerImages}/>
//                         </section>
//                         {this.state.searchStep !== 2 &&
//                         <section className="booking-container sticky">
//                             <div className="container">
//                                 <div className="booking-panel">
//                                     <div className="booking-panel-left">
//                                         <div className="booking-options">
//                                             <div className="date-picker-panel">
//
//
//                                                 <DateRangePicker
//                                                     startDate={startDate}
//                                                     endDate={endDate}
//                                                     onStartDateChange={this.setStartDate}
//                                                     onEndDateChange={this.setEndDate}
//                                                     minimumDate={new Date()}
//                                                     minimumLength={1}
//                                                     format='dd/MM/yyyy'
//                                                     locale={enGB}
//                                                 >
//                                                     {({startDateInputProps, endDateInputProps, focus}) => (
//                                                         <div className='date-range'>
//                                                             <input
//                                                                 className={'input' + (focus === START_DATE ? ' -focused' : '')}
//                                                                 {...startDateInputProps}
//                                                                 placeholder='Start date'
//                                                             />
//                                                             <span className='date-range_arrow'/>
//                                                             <input
//                                                                 className={'input' + (focus === END_DATE ? ' -focused' : '')}
//                                                                 {...endDateInputProps}
//                                                                 placeholder='End date'
//                                                             />
//                                                         </div>
//                                                     )}
//                                                 </DateRangePicker>
//
//
//                                             </div>
//
//
//
//                                             <div className="select-panel">
//                                                 <div className="select-box">
//                                                     <select name="rooms" value={this.state.rooms}
//                                                             onChange={this.handleChange}
//                                                             className={`${invalidFields.includes('rooms') ? 'error-field' : ''}`}>
//                                                         <option value="">Rooms</option>
//                                                         <option value="1">1</option>
//                                                         <option value="2">2</option>
//                                                         <option value="3">3</option>
//                                                         <option value="4">4</option>
//                                                         <option value="5">5</option>
//                                                         <option value="6">6</option>
//                                                         <option value="7">7</option>
//                                                         <option value="8">8</option>
//                                                         <option value="9">9+</option>
//                                                     </select>
//                                                 </div>
//                                                 <div className="select-box">
//                                                     <select name="adults" value={this.state.adults}
//                                                             onChange={this.handleChange}
//                                                             className={`${invalidFields.includes('adults') ? 'error-field' : ''}`}>
//                                                         <option value="">Adults</option>
//                                                         <option value="1">1</option>
//                                                         <option value="2">2</option>
//                                                         <option value="3">3</option>
//                                                         <option value="4">4</option>
//                                                         <option value="5">5</option>
//                                                         <option value="6">6</option>
//                                                         <option value="7">7</option>
//                                                         <option value="8">8</option>
//                                                         <option value="9">9+</option>
//                                                     </select>
//                                                 </div>
//                                                 <div className="select-box">
//                                                     <select name="children" value={this.state.children}
//                                                             onChange={this.handleChange}
//                                                             className={`${invalidFields.includes('children') ? 'error-field' : ''}`}>
//                                                         <option value="">Children</option>
//                                                         <option value="0">0</option>
//                                                         <option value="1">1</option>
//                                                         <option value="2">2</option>
//                                                         <option value="3">3</option>
//                                                         <option value="4">4</option>
//                                                         <option value="5">5</option>
//                                                         <option value="6">6</option>
//                                                         <option value="7">7</option>
//                                                         <option value="8">8</option>
//                                                         <option value="9">9+</option>
//                                                     </select>
//                                                 </div>
//                                             </div>
//
//                                         </div>
//
//                                         {this.state.MAX_CAPACITY_MSG !== '' &&
//                                         <div className="error-fld">
//                                             {this.state.MAX_CAPACITY_MSG}
//                                         </div>
//                                         }
//                                     </div>
//                                     <div className="booking-panel-right">
//
//                                         <div className="booking-button-block">
//                                             <button className="general-btn" onClick={() => this.searchRooms()}>Book Now</button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </section>
//                         }
//
//                         {!this.state.initSearch &&
//                         <div className="room-section facilities" id="hotel-overview">
//                             <div className="container">
//                                 <div className="section-header">
//                                     <h5>Overview</h5>
//                                 </div>
//                                 <div className="section-content">
//                                     <ul className="general-info">
//                                         <li className="address-sm-ico">{hotelDetail.address}</li>
//                                         <li className="phone-sm-ico">{hotelDetail.phoneno} , {hotelDetail.mobileno}</li>
//                                         <li  className="mail-sm-ico">{hotelDetail.email}</li>
//                                     </ul>
//
//                                     <div className={`extra-content ${this.state.expandContent ? ' active' : ''}`}>
//
//                                         <div className="overview-description">
//                                             <p dangerouslySetInnerHTML={{__html : hotelDetail.hotel_desc}} />
//                                         </div>
//
//                                         {hotelHighlights.length > 0 &&
//                                         <>
//                                             <div className="sub-header">
//                                                 <h5>Highlights</h5>
//                                             </div>
//                                             <ul className="highlight-tab">
//                                                 {hotelHighlights.map(hl =>
//                                                     <li>{hl.highlights}</li>
//                                                 )}
//                                             </ul>
//                                         </>
//                                         }
//
//
//                                         <div className="policy-box">
//                                             <div class="sub-header">
//                                                 <h5>Hotel Policies</h5>
//                                             </div>
//                                             <p>Check In Time: <span className="font-bold">{hotelDetail ? hotelDetail.checkin : ''}</span></p>
//                                             <p>Check Out Time: <span className="font-bold">{hotelDetail ? hotelDetail.checkout : ''}</span></p>
//                                         </div>
//
//                                         {hotelPolicies.map(hp =>
//                                             <div className="policy-box indent">
//                                                 <div className="sub-header">
//                                                     <h5>{hp.category}</h5>
//                                                 </div>
//                                                 {hp.policy.map(pol =>
//                                                     <p>{pol.policy}</p>
//                                                 )}
//                                             </div>
//                                         )}
//
//                                     </div>
//
//                                     <nav className="content-hide" onClick={()=> this.toggleContent()}>Show {this.state.expandContent ? 'less' : 'more'}</nav>
//                                 </div>
//                             </div>
//                         </div>
//                         }
//
//                         <section className="room-section" id="hotel-rooms">
//                             <div className="container">
//
//                                 <div className="section-header">
//                                     <h5>
//                                         {this.state.searchStep === 2 ? 'Booking Details' : 'Rooms'}
//                                     </h5>
//
//                                     {this.state.initSearch && this.state.searchStep === 1 &&
//                                     <button className="text-link back"
//                                             onClick={() => this.backToDetail()}>Back</button>
//                                     }
//                                 </div>
//
//                                 {this.state.initSearch &&
//
//
//                                 <div className="available-rooms">
//
//                                     {this.state.searchStep === 1 &&
//                                     <>
//                                         {hotel_rooms.length === 0 &&
//                                         <div className="no-result">
//                                             <div class="coming-soon-wrapper">
//                                                 <h1>No Hotels Found</h1>
//                                                 <p>Search Again for right place.</p>
//                                             </div>
//                                         </div>
//                                         }
//                                         {hotel_rooms.map(room =>
//                                             <RoomSearchBlock item={room} selectRoom={this.selectRoom}
//                                                              selectedRooms={this.state.selectedRooms}
//                                                              selectedRoomIds={this.state.selectedRoomIds}
//                                                              changeQty={this.changeQty}
//                                                              showFullDetail={this.showFullDetail}
//                                             />
//                                         )}
//                                         <div className="room-book-submit">
//
//                                             <button className="general-btn"
//                                                     onClick={() => this.continueToSummary()}>Continue
//                                             </button>
//                                         </div>
//                                     </>
//                                     }
//
//                                     {this.state.searchStep === 2 &&
//                                     <>
//                                         <div className="summary-table">
//                                             <table className="table">
//                                                 <thead>
//                                                 <tr>
//                                                     <th>Rooms</th>
//                                                     <th>Qty</th>
//                                                     <th>Price</th>
//                                                     <th>Total Price</th>
//                                                     <th></th>
//                                                 </tr>
//                                                 </thead>
//                                                 <tbody>
//                                                 {selectedRooms.map(room =>
//                                                     <SummaryItem item={room} selectRoom={this.selectRoom}
//                                                                  selectedRooms={this.state.selectedRooms}
//                                                                  selectedRoomIds={this.state.selectedRoomIds}
//                                                                  changeQty={this.changeQty}
//                                                     />
//                                                 )}
//
//                                                 <tr className="special-service">
//                                                     <td colspan="5">
//                                                         <nav onClick={() => this.showSpecialRequests()} className="font-bold">Add Special Requests +</nav>
//                                                     </td>
//
//                                                 </tr>
//                                                 {selectedSpReqs.length >0 &&
//                                                 selectedSpReqs.filter(sp => sp.category === 'payable').map(sp =>
//                                                     <tr className="special-service">
//                                                         <td colSpan="3">
//                                                             <span>{sp.title}</span>
//                                                         </td>
//                                                         <td className="font-bold">₹ {sp.rate}</td>
//                                                         <td>
//                                                             <button className="delete-item" onClick={(e) => this.removeSp(e,sp.sp_id)}></button>
//                                                         </td>
//                                                     </tr>
//                                                 )}
//                                                 {selectedSpReqs.length >0 &&
//                                                 selectedSpReqs.filter(sp => sp.category === 'non payable').map(sp =>
//                                                     <tr className="special-service">
//                                                         <td colSpan="3">
//                                                             <span>{sp.title}</span>
//                                                         </td>
//                                                         <td className="font-bold">₹ 0</td>
//                                                         <td>
//                                                             <button className="delete-item" onClick={(e) => this.removeSp(e,sp.sp_id)}></button>
//                                                         </td>
//                                                     </tr>
//                                                 )}
//
//                                                 <tr>
//                                                     <td>
//
//                                                     </td>
//                                                     <td></td>
//                                                     <td className="font-bold">TOTAL</td>
//                                                     <td className="font-bold">₹ {total_cost.toFixed(2)}</td>
//                                                     <td></td>
//                                                 </tr>
//                                                 <tr>
//                                                     <td>
//
//                                                     </td>
//                                                     <td></td>
//                                                     <td className="font-bold">GST 10.00%</td>
//                                                     <td className="font-bold">₹ {total_gst.toFixed(2)}</td>
//                                                     <td></td>
//                                                 </tr>
//
//                                                 <tr>
//                                                     <td>
//
//                                                     </td>
//                                                     <td></td>
//                                                     <td className="font-bold">GRAND TOTAL</td>
//                                                     <td className="font-bold">₹ {grand_total.toFixed(2)}</td>
//                                                     <td></td>
//                                                 </tr>
//                                                 <tr>
//                                                     <td colSpan="5">Check-in & Check-out: <span
//                                                         className="font-bold">{moment(this.state.checkindate).format('DD MMM YYYY')} - {moment(this.state.checkoutdate).format('DD MMM YYYY')}</span>
//                                                     </td>
//                                                 </tr>
//                                                 </tbody>
//                                             </table>
//                                         </div>
//
//                                         <div class="section-header">
//                                             <h5>Personal Details</h5>
//                                         </div>
//
//                                         <form className="form-container">
//                                             <div className="row">
//                                                 <div className="col-md-6">
//                                                     <div className="input-box">
//                                                         <label>First Name</label>
//                                                         <input type="text" name="firstname" onChange={this.handleChange}
//                                                                value={this.state.firstname}
//                                                                className={`input-field ${invalidFields.includes('firstname') ? 'error-field' : ''}`}/>
//                                                     </div>
//                                                 </div>
//                                                 <div className="col-md-6">
//                                                     <div className="input-box">
//                                                         <label>Last Name</label>
//                                                         <input type="text" name="lastname" onChange={this.handleChange}
//                                                                value={this.state.lastname}
//                                                                className={`input-field ${invalidFields.includes('lastname') ? 'error-field' : ''}`}/>
//                                                     </div>
//                                                 </div>
//                                                 <div className="col-md-6">
//                                                     <div className="input-box">
//                                                         <label>Address 1</label>
//                                                         <input type="text" name="address1" onChange={this.handleChange}
//                                                                value={this.state.address1}
//                                                                className={`input-field ${invalidFields.includes('address1') ? 'error-field' : ''}`}/>
//                                                     </div>
//                                                 </div>
//                                                 <div className="col-md-6">
//                                                     <div className="input-box">
//                                                         <label>Address 2</label>
//                                                         <input type="text" name="address2" onChange={this.handleChange}
//                                                                value={this.state.address2}
//                                                                className={`input-field ${invalidFields.includes('address2') ? 'error-field' : ''}`}/>
//                                                     </div>
//                                                 </div>
//                                                 <div className="col-md-3">
//                                                     <div className="input-box">
//                                                         <label>City</label>
//                                                         <input type="text" name="city" onChange={this.handleChange}
//                                                                value={this.state.city}
//                                                                className={`input-field ${invalidFields.includes('city') ? 'error-field' : ''}`}/>
//                                                     </div>
//                                                 </div>
//                                                 <div className="col-md-3">
//                                                     <div className="input-box">
//                                                         <label>State</label>
//                                                         <input type="text" name="state" onChange={this.handleChange}
//                                                                value={this.state.state}
//                                                                className={`input-field ${invalidFields.includes('state') ? 'error-field' : ''}`}/>
//                                                     </div>
//                                                 </div>
//                                                 <div className="col-md-3">
//                                                     <div className="input-box">
//                                                         <label>Country</label>
//                                                         <input type="text" name="country" onChange={this.handleChange}
//                                                                value={this.state.country}
//                                                                className={`input-field ${invalidFields.includes('country') ? 'error-field' : ''}`}/>
//                                                     </div>
//                                                 </div>
//                                                 <div className="col-md-3">
//                                                     <div className="input-box">
//                                                         <label>Pincode</label>
//                                                         <input type="text" name="pincode" onChange={this.handleChange}
//                                                                value={this.state.pincode}
//                                                                className={`input-field ${invalidFields.includes('pincode') ? 'error-field' : ''}`}/>
//                                                     </div>
//                                                 </div>
//                                                 <div className="col-md-4">
//                                                     <div className="input-box">
//                                                         <label>Mobile</label>
//                                                         <input type="number"
//                                                                className={`input-field ${invalidFields.includes('mobile') ? 'error-field' : ''}`}
//                                                                name="mobile" onChange={this.handleChange}
//                                                                value={this.state.mobile}/>
//                                                     </div>
//                                                 </div>
//                                                 <div className="col-md-4">
//                                                     <div className="input-box">
//                                                         <label>Additional Phone</label>
//                                                         <input type="number"
//                                                                className={`input-field ${invalidFields.includes('additionalphonenumber') ? 'error-field' : ''}`}
//                                                                name="additionalphonenumber" onChange={this.handleChange}
//                                                                value={this.state.additionalphonenumber}/>
//                                                     </div>
//                                                 </div>
//                                                 <div className="col-md-4">
//                                                     <div className="input-box">
//                                                         <label>Email</label>
//                                                         <input type="email"
//                                                                className={`input-field ${invalidFields.includes('email') ? 'error-field' : ''}`}
//                                                                name="email" onChange={this.handleChange}
//                                                                value={this.state.email}/>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </form>
//
//                                         <div className="payment-wrap">
//                                             <button className="general-btn grey" onClick={()=> this.backToCart()}>Back</button>
//                                             <button className="general-btn"
//                                                     onClick={(e) => this.saveBooking(e, grand_total, total_cost, 0.00, '', total_gst)}>Continue
//                                                 To Payment
//                                             </button>
//                                         </div>
//                                     </>
//                                     }
//
//                                 </div>
//                                 }
//
//                                 {!this.state.initSearch &&
//                                 <div className="room-container">
//                                     {hotel_rooms.length === 0 &&
//                                     <div className="no-result">
//                                         <p>Rooms will be added soon</p>
//                                     </div>
//                                     }
//
//                                     {hotel_rooms.map(room =>
//                                         <RoomBlock item={room} showFullDetail={this.showFullDetail}/>
//                                     )}
//
//                                 </div>
//                                 }
//                             </div>
//                         </section>
//
//                         {!this.state.initSearch &&
//                         <>
//
//                             <section class="content-area text-content" id="hotel-facilities">
//                                 <div className="container">
//                                     <div className="section-header">
//                                         <h5>Facilities & Attractions</h5>
//                                     </div>
//                                     <div className="feature-wrapper three-per-col image-top">
//                                         {!hotelfacilities || hotelfacilities.length === 0 &&
//                                         <h5>Facilities will be added soon.</h5>
//                                         }
//
//                                         {hotelfacilities && hotelfacilities.length > 0 &&
//                                         <>
//                                             {hotelfacilities.map((fac, index) =>
//                                                 <FacilityNewBlock item={fac} imgAlign={index % 2 === 1 ? 'left' : 'right'}/>
//                                             )}
//                                         </>
//                                         }
//                                     </div>
//                                 </div>
//                             </section>
//                             <section className="room-section" id="hotel-gallery">
//                                 <div className="container">
//                                     <div className="section-header">
//                                         <h5>Gallery</h5>
//                                     </div>
//                                     <Gallery galleryImages={galleryImages} />
//
//                                 </div>
//                             </section>
//
//
//                         </>
//                         }
//                     </>
//                     }
//
//
//
//                     <Footer />
//
//
//
//                 </div>
//
//                 {this.state.showError &&
//                 <AlertModal
//                     modalHeader = {false}
//                     modalFooter = {true}
//                     modalTitle = "Warning"
//                     modalBody = "Please select your choices"
//                     modalStatus={this.state.showError}
//                     OKButton={true}
//                     CANCELButton={false}
//                     OKAction={this.hideError}
//                 />
//                 }
//                 {this.state.showProfileInfoError &&
//                 <AlertModal
//                     modalHeader = {false}
//                     modalFooter = {true}
//                     modalTitle = "Profile Details"
//                     modalBody = "Please enter your personal information to proceed"
//                     modalStatus={this.state.showProfileInfoError}
//                     OKButton={true}
//                     CANCELButton={false}
//                     OKAction={this.hideProfileInfoError}
//                 />
//                 }
//                 {this.state.itemRemovalMessage &&
//                 <AlertModal
//                     modalHeader = {false}
//                     modalFooter = {true}
//                     modalTitle = "Warning!"
//                     modalBody = "Are you sure to remove this room? You will be redirected to the rooms list."
//                     modalStatus={this.state.itemRemovalMessage}
//                     OKButton={true}
//                     CANCELButton={true}
//                     OKAction={this.emptyCart}
//                     CANCELAction={this.hideItemRemovalMessage}
//                     OKText = "OK"
//                     CANCELText = "CANCEL"
//                 />
//                 }
//
//                 {this.state.cannotContinue &&
//                 <AlertModal
//                     modalHeader = {false}
//                     modalFooter = {true}
//                     modalTitle = "Warning!"
//                     modalBody = {this.state.cannotContinueMessage}
//                     modalStatus={this.state.cannotContinue}
//                     OKButton={true}
//                     CANCELButton={false}
//                     OKAction={this.hideCannotContinue}
//                 />
//                 }
//
//                 {this.state.showDetailStatus &&
//                 <FullWidthModal
//                     modalHeader = {true}
//                     modalFooter = {true}
//                     modalTitle = {hotelDetail.hotel_name}
//                     modalBody = {<RoomDetail roomDetail={this.state.roomDetail} hideFullDetail={this.hideFullDetail} />}
//                     modalStatus={this.state.showDetailStatus}
//                     OKButton={true}
//                     CANCELButton={false}
//                     OKAction={this.hideFullDetail}
//                     CANCELAction={this.hideFullDetail}
//                     OKText = "OK"
//                     CANCELText = "CANCEL"
//                 />
//                 }
//
//                 {this.state.showSpReqStat &&
//                 <AlertModal
//                     modalHeader = {false}
//                     modalFooter = {true}
//                     modalTitle = "Warning!"
//                     modalBody = {<HotelSpReqList spRequests={spRequests} selectedSpReqIds={this.state.selectedSpReqIds}
//                                                  selectedSpReqs={this.state.selectedSpReqs} handleSpSelection={this.handleSpSelection} />}
//                     modalStatus={this.state.showSpReqStat}
//                     OKButton={true}
//                     CANCELButton={false}
//                     OKAction={this.hideSpecialRequests}
//                 />
//                 }
//                 {this.state.showPendingMessage &&
//                 <AlertModal
//                     modalHeader = {false}
//                     modalFooter = {true}
//                     modalTitle = "Warning!"
//                     modalBody = {"Booking is temperorily unavailable due to Covid-19. It will be available only from July 2021 onwards. For further information please send an email to booking@uthhotels.com or call +91 9746838883,+91 9567338884."}
//                     modalStatus={this.state.showPendingMessage}
//                     OKButton={true}
//                     CANCELButton={false}
//                     OKAction={this.hidePendingMessage}
//                 />
//                 }
//             </div>
//
//         );
//     }
// }


_s(HotelDetailSlug, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter];
});

_c = HotelDetailSlug;

var mapStateToProps = function mapStateToProps(state) {
  return {
    hotelData: state.HotelReducer.hotelData,
    // facilityData:state.HotelReducer.facilityData,
    bookingData: state.HotelReducer.bookingData
  };
};

var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_5__.connect)(mapStateToProps, {
  searchRooms: _actions_hotel__WEBPACK_IMPORTED_MODULE_6__.searchRooms,
  saveBooking: _actions_hotel__WEBPACK_IMPORTED_MODULE_6__.saveBooking,
  confirmBooking: _actions_hotel__WEBPACK_IMPORTED_MODULE_6__.confirmBooking,
  getBannerImages: _actions_hotel__WEBPACK_IMPORTED_MODULE_6__.getBannerImages,
  //getHotelHighlights : HotelActions.getHotelHighlights,
  getHotelPolicies: _actions_hotel__WEBPACK_IMPORTED_MODULE_6__.getHotelPolicies,
  getSpRequests: _actions_hotel__WEBPACK_IMPORTED_MODULE_6__.getSpRequests
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaG90ZWwvW3NsdWddLjE1MDVkYzkwMjMxNjk3MTM5OTBlLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTTBCLEdBQUcsR0FBRyx3RkFBWixFQUNBOztBQThFQSxJQUFNQyxlQUFlLEdBQUUsU0FBakJBLGVBQWlCLE9BQWdEO0FBQUE7O0FBQUEsTUFBOUNDLFdBQThDLFFBQTlDQSxXQUE4QztBQUFBLE1BQWpDQyxhQUFpQyxRQUFqQ0EsYUFBaUM7QUFBQSxNQUFsQkMsV0FBa0IsUUFBbEJBLFdBQWtCO0FBRW5FLE1BQU1DLE1BQU0sR0FBRzNCLHNEQUFTLEVBQXhCO0FBQ0EsTUFBUTRCLFNBQVIsR0FBc0JELE1BQU0sQ0FBQ0UsS0FBN0IsQ0FBUUQsU0FBUjtBQUNBRSxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWVAsV0FBWjtBQUNBTSxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWU4sYUFBWjtBQUNBSyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUwsV0FBWjtBQUVBLHNCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREosQ0FJSztBQUNBO0FBTEw7QUFPSCxDQWZELEVBaUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0dBcnpDTUg7VUFFYXZCOzs7S0FGYnVCOztBQXd6Q04sSUFBTVMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFBQyxLQUFLO0FBQUEsU0FBSztBQUM5QkMsSUFBQUEsU0FBUyxFQUFDRCxLQUFLLENBQUNFLFlBQU4sQ0FBbUJELFNBREM7QUFFL0I7QUFDQ0UsSUFBQUEsV0FBVyxFQUFHSCxLQUFLLENBQUNFLFlBQU4sQ0FBbUJDO0FBSEgsR0FBTDtBQUFBLENBQTdCOzs7QUFPQSwrREFBZWhDLG9EQUFPLENBQ2xCNEIsZUFEa0IsRUFFbEI7QUFFSUssRUFBQUEsV0FBVyxFQUFHaEMsdURBRmxCO0FBR0lpQyxFQUFBQSxXQUFXLEVBQUdqQyx1REFIbEI7QUFJSWtDLEVBQUFBLGNBQWMsRUFBR2xDLDBEQUpyQjtBQUtJbUMsRUFBQUEsZUFBZSxFQUFHbkMsMkRBTHRCO0FBTUk7QUFDQW9DLEVBQUFBLGdCQUFnQixFQUFHcEMsNERBUHZCO0FBUUlxQyxFQUFBQSxhQUFhLEVBQUdyQyx5REFBMEJxQztBQVI5QyxDQUZrQixDQUFQLENBWWJuQixlQVphLENBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaG90ZWwvW3NsdWddLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsU3VzcGVuc2UsIGxhenkgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi8uLi92aWV3cy9Gb290ZXJcIjtcclxuaW1wb3J0IENvbnRlbnRTbGlkZXIgZnJvbSBcIi4uLy4uL3ZpZXdzL2NvbW1vbi9ob3RlbFNsaWRlclwiO1xyXG5pbXBvcnQge2dldFVybFNlZ21lbnR9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvQ3VzdG9tRnVuY3Rpb25zXCI7XHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCAqIGFzIEhvdGVsQWN0aW9ucyBmcm9tIFwiLi4vLi4vYWN0aW9ucy9ob3RlbFwiO1xyXG5pbXBvcnQgeyBlbkdCIH0gZnJvbSAnZGF0ZS1mbnMvbG9jYWxlJ1xyXG5pbXBvcnQgeyBEYXRlUmFuZ2VQaWNrZXIsIFNUQVJUX0RBVEUsIEVORF9EQVRFIH0gZnJvbSAncmVhY3QtbmljZS1kYXRlcydcclxuaW1wb3J0ICdyZWFjdC1uaWNlLWRhdGVzL2J1aWxkL3N0eWxlLmNzcydcclxuaW1wb3J0IFJvb21CbG9jayBmcm9tIFwiLi4vLi4vdmlld3MvUm9vbUJsb2NrXCI7XHJcbmltcG9ydCBSb29tRGV0YWlsIGZyb20gXCIuLi8uLi92aWV3cy9Sb29tRGV0YWlsXCI7XHJcbmltcG9ydCBSb29tU2VhcmNoQmxvY2sgZnJvbSBcIi4uLy4uL3ZpZXdzL1Jvb21TZWFyY2hCbG9ja1wiO1xyXG5pbXBvcnQgRmFjaWxpdHlOZXdCbG9jayBmcm9tIFwiLi4vLi4vdmlld3MvRmFjaWxpdHlOZXdCbG9ja1wiO1xyXG5pbXBvcnQgU3VtbWFyeUl0ZW0gZnJvbSBcIi4uLy4uL3ZpZXdzL1N1bW1hcnlJdGVtXCI7XHJcbmltcG9ydCBBbGVydE1vZGFsIGZyb20gXCIuLi8uLi92aWV3cy9jb21tb24vQWxlcnRNb2RhbFwiO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCBGdWxsV2lkdGhNb2RhbCBmcm9tIFwiLi4vLi4vdmlld3MvY29tbW9uL0Z1bGxXaWR0aE1vZGFsXCI7XHJcbmltcG9ydCBIb3RlbE5hdmJhciBmcm9tIFwiLi4vLi4vdmlld3MvSG90ZWxOYXZiYXJcIjtcclxuaW1wb3J0IEhvdGVsU3BSZXFMaXN0IGZyb20gXCIuLi8uLi92aWV3cy9Ib3RlbFNwUmVxTGlzdFwiO1xyXG5pbXBvcnQgR2FsbGVyeSBmcm9tIFwiLi4vLi4vdmlld3MvY29tbW9uL0dhbGxlcnlcIjtcclxuaW1wb3J0IHtJTUFHRV9QQVRILCBBUElfUEFUSH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xyXG5jb25zdCBBUEkgPSAnaHR0cHM6Ly9yenBfdGVzdF9ybkVINUk0Tkh1YUdKeDpTUG1xNnFLUUVMeHhMbFlUblA3WTVkeWpAYXBpLnJhem9ycGF5LmNvbS92MS9wYXltZW50cy8nO1xyXG4vL1RoaXMgZ2V0cyBjYWxsZWQgZXZlcnkgdGltZSB0aGUgcGFnZSBpcyBjYWxsZWRcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XHJcbiAgICBjb25zdCB7cGFyYW1zfSA9IGNvbnRleHQ7XHJcbiAgICBjb25zdCB7c2x1Z30gPSBwYXJhbXM7XHJcbiAgICAvL2hvdGVsIGRldGFpbFxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtBUElfUEFUSH1ob3RlbC9ob3RlbGRldGFpbHN2Mj91cmw9JHtzbHVnfWApO1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgbGV0IGhvdGVsRGV0YWlsID0gcmVzLnJlc3VsdHMgPyByZXMucmVzdWx0cy5kYXRhOiBbXTtcclxuICAgIGNvbnNvbGUubG9nKGhvdGVsRGV0YWlsKVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgaG90ZWxEZXRhaWw6IFtob3RlbERldGFpbF1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy9Sb29tIFR5cGVzXHJcbiAgICBjb25zdCByZXNwb25zZTIgPSBhd2FpdCBmZXRjaChgJHtBUElfUEFUSH1ob3RlbC9yb29tdHlwZWApO1xyXG4gICAgY29uc3QgcmVzMiA9IGF3YWl0IHJlc3BvbnNlMi5qc29uKCk7XHJcbiAgICBsZXQgcm9vbVR5cGVzID0gcmVzMi5yZXN1bHRzID8gcmVzMi5yZXN1bHRzLmRhdGE6IFtdO1xyXG4gICAgbGV0IGJhbm5lckltYWdlcyA9IFtdO1xyXG4gICAgbGV0IGhvdGVsX3Jvb21zID0gW107XHJcbiAgICBsZXQgZ2FsbGVyeUltYWdlcyA9W107XHJcbiAgICBsZXQgaG90ZWxfaWQgPSAnJ1xyXG4gICAgaWYoaG90ZWxEZXRhaWwpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhob3RlbERldGFpbClcclxuICAgICAgICBob3RlbF9pZCA9IGhvdGVsRGV0YWlsLmhvdGVsX2lkO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGhvdGVsX2lkKVxyXG4gICAgICAgIGxldCBwYXJhbXMgPSB7aG90ZWxfaWQgOiBob3RlbF9pZH07XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UzID0gYXdhaXQgZmV0Y2goYCR7QVBJX1BBVEh9aG90ZWwvaG90ZWxiYW5uZXJpbWFnZXNgKTtcclxuICAgICAgICBjb25zdCByZXMzID0gYXdhaXQgcmVzcG9uc2UzLmpzb24oKTtcclxuICAgICAgICBiYW5uZXJJbWFnZXMgPSByZXMzLnJlc3VsdHMgPyByZXMzLnJlc3VsdHMuZGF0YTogW107XHJcblxyXG4gICAgICAgIGhvdGVsX3Jvb21zID0gaG90ZWxEZXRhaWwuaG90ZWxfcm9vbXMgfHwgW107XHJcbiAgICAgICAgaG90ZWxfcm9vbXMgPSBob3RlbF9yb29tcy5tYXAoaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIGl0ZW0ucXR5ID0gMFxyXG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBnYWxsZXJ5SW1hZ2VzID0gaG90ZWxEZXRhaWwuaG90ZWxfaW1hZ2VzIHx8IFtdO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBwcm9wcyA6IHtcclxuICAgICAgICAgICAgICAgIGhvdGVsRGV0YWlsIDogW2hvdGVsRGV0YWlsXSxcclxuICAgICAgICAgICAgICAgIGhvdGVsX3Jvb21zIDogaG90ZWxfcm9vbXMsXHJcbiAgICAgICAgICAgICAgICBnYWxsZXJ5SW1hZ2VzIDogZ2FsbGVyeUltYWdlcyxcclxuICAgICAgICAgICAgICAgLy8gTUFYX0NBUEFDSVRZX0dFTkVSQUwgOiBob3RlbERldGFpbC5tYXhfb2NjdXBhbmN5LFxyXG4gICAgICAgICAgICAgICAgLy9ob3RlbEhpZ2hsaWdodHMgOiBob3RlbERldGFpbC5ob3RlbGhpZ2hsaWdodHMsXHJcbiAgICAgICAgICAgICAgICAvL2hvdGVsUG9saWNpZXMgOiBob3RlbERldGFpbC5ob3RlbHBvbGljaWVzLFxyXG4gICAgICAgICAgICAgICAgLy9zcFJlcXVlc3RzIDogaG90ZWxEZXRhaWwuc3BlY2lhbHJlcXVlc3RcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL3RoaXMucHJvcHMuZ2V0QmFubmVySW1hZ2VzKHBhcmFtcyk7XHJcbiAgICAvLyBsZXQgaG90ZWxfcm9vbXMgPSB0aGlzLnByb3BzLmhvdGVsRGV0YWlsLmhvdGVsX3Jvb21zIHx8IFtdO1xyXG4gICAgLy8gaG90ZWxfcm9vbXMgPSBob3RlbF9yb29tcy5tYXAoaXRlbSA9PiB7XHJcbiAgICAvLyAgICAgaXRlbS5xdHkgPSAwXHJcbiAgICAvLyAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICAvLyB9KTtcclxuICAgIC8vIGxldCBnYWxsZXJ5SW1hZ2VzID0gdGhpcy5wcm9wcy5ob3RlbERldGFpbC5ob3RlbF9pbWFnZXMgfHwgW107XHJcbiAgICAvLyB0aGlzLnNldFN0YXRlKHtcclxuICAgIC8vICAgICBob3RlbF9pZCA6IGhvdGVsX2lkLFxyXG4gICAgLy8gICAgIGhvdGVsRGV0YWlsIDogaG90ZWxEZXRhaWwsXHJcbiAgICAvLyAgICAgaG90ZWxfcm9vbXMgOiBob3RlbF9yb29tcyxcclxuICAgIC8vICAgICBnYWxsZXJ5SW1hZ2VzIDogZ2FsbGVyeUltYWdlcyxcclxuICAgIC8vICAgICBNQVhfQ0FQQUNJVFlfR0VORVJBTCA6IGhvdGVsRGV0YWlsLm1heF9vY2N1cGFuY3ksXHJcbiAgICAvLyAgICAgaG90ZWxIaWdobGlnaHRzIDogaG90ZWxEZXRhaWwuaG90ZWxoaWdobGlnaHRzLFxyXG4gICAgLy8gICAgIGhvdGVsUG9saWNpZXMgOiBob3RlbERldGFpbC5ob3RlbHBvbGljaWVzLFxyXG4gICAgLy8gICAgIHNwUmVxdWVzdHMgOiBob3RlbERldGFpbC5zcGVjaWFscmVxdWVzdFxyXG4gICAgLy8gfSwgZnVuY3Rpb24oKSB7XHJcbiAgICAvL1xyXG4gICAgLy8gfSlcclxuXHJcblxyXG59XHJcblxyXG5cclxuXHJcbmNvbnN0IEhvdGVsRGV0YWlsU2x1ZyA9KHtob3RlbERldGFpbCwgZ2FsbGVyeUltYWdlcywgaG90ZWxfcm9vbXMgfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgICBjb25zdCB7IGhvdGVsX3VybCB9ID0gcm91dGVyLnF1ZXJ5O1xyXG4gICAgY29uc29sZS5sb2coaG90ZWxEZXRhaWwpXHJcbiAgICBjb25zb2xlLmxvZyhnYWxsZXJ5SW1hZ2VzKVxyXG4gICAgY29uc29sZS5sb2coaG90ZWxfcm9vbXMpXHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHNrZGZza2ZzZGZkanNmXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIC8vIDxIb3RlbERldGFpbCBob3RlbERldGFpbD17aG90ZWxEZXRhaWxbMF19IGhvdGVsX3VybD17aG90ZWxfdXJsfVxyXG4gICAgICAgICAvLyAgICAgICAgICAgICAgZ2FsbGVyeUltYWdlcz17Z2FsbGVyeUltYWdlc30gaG90ZWxfcm9vbXM9e2hvdGVsX3Jvb21zfS8+XHJcbiAgICApXHJcbn1cclxuXHJcbi8vIGNsYXNzIEhvdGVsRGV0YWlsIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuLy8gICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbi8vICAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4vLyAgICAgICAgIGxldCB0b2RheSA9IG5ldyBEYXRlKCk7XHJcbi8vICAgICAgICAgbGV0IHRvbW9ycm93ID0gbmV3IERhdGUodG9kYXkpO1xyXG4vLyAgICAgICAgIHRvbW9ycm93LnNldERhdGUodG9tb3Jyb3cuZ2V0RGF0ZSgpICsgMSk7XHJcbi8vICAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuLy8gICAgICAgICAgICAgdG9kYXkgOiB0b2RheSxcclxuLy8gICAgICAgICAgICAgdG9tb3Jyb3cgOiB0b21vcnJvdyxcclxuLy8gICAgICAgICAgICAgc3RhcnREYXRlIDogdG9kYXksXHJcbi8vICAgICAgICAgICAgIGVuZERhdGUgOiB0b21vcnJvdyxcclxuLy8gICAgICAgICAgICAgY2hlY2tpbmRhdGUgOiB0b2RheSxcclxuLy8gICAgICAgICAgICAgY2hlY2tvdXRkYXRlIDogdG9tb3Jyb3csXHJcbi8vICAgICAgICAgICAgIHJvb21zIDogJycsXHJcbi8vICAgICAgICAgICAgIGFkdWx0cyA6ICcnLFxyXG4vLyAgICAgICAgICAgICBjaGlsZHJlbiA6ICcnLFxyXG4vLyAgICAgICAgICAgICByb29tVHlwZXMgOiBbXSxcclxuLy8gICAgICAgICAgICAgaW5pdFNlYXJjaCA6IGZhbHNlLFxyXG4vLyAgICAgICAgICAgICBzZWFyY2hTdGVwIDogMSxcclxuLy8gICAgICAgICAgICAgc2VsZWN0ZWRSb29tcyA6IFtdLFxyXG4vLyAgICAgICAgICAgICBzZWxlY3RlZFJvb21JZHMgOiBbXSxcclxuLy8gICAgICAgICAgICAgaG90ZWxfcm9vbXMgOiBbXSxcclxuLy8gICAgICAgICAgICAgaW52YWxpZEZpZWxkcyA6IFtdLFxyXG4vLyAgICAgICAgICAgICBzaG93RXJyb3IgOiBmYWxzZSxcclxuLy8gICAgICAgICAgICAgZmlyc3RuYW1lIDonJyxcclxuLy8gICAgICAgICAgICAgbGFzdG5hbWUgOicnLFxyXG4vLyAgICAgICAgICAgICBhZGRyZXNzMSA6ICcnLFxyXG4vLyAgICAgICAgICAgICBhZGRyZXNzMiA6ICcnLFxyXG4vLyAgICAgICAgICAgICBjaXR5IDogJycsXHJcbi8vICAgICAgICAgICAgIHN0YXRlIDogJycsXHJcbi8vICAgICAgICAgICAgIHBpbmNvZGUgOiAnJyxcclxuLy8gICAgICAgICAgICAgY291bnRyeSA6ICcnLFxyXG4vLyAgICAgICAgICAgICBtb2JpbGUgOiAnJyxcclxuLy8gICAgICAgICAgICAgYWRkaXRpb25hbHBob25lbnVtYmVyIDogJycsXHJcbi8vICAgICAgICAgICAgIGVtYWlsIDogJycsXHJcbi8vICAgICAgICAgICAgIHNob3dQcm9maWxlSW5mb0Vycm9yIDogZmFsc2UsXHJcbi8vICAgICAgICAgICAgIGJvb2tpbmdJZCA6ICcnLFxyXG4vLyAgICAgICAgICAgICB0b3RhbEFtb3VudCA6IDAsXHJcbi8vICAgICAgICAgICAgIHByaW5jaXBsZUFtb3VudCA6IDAsXHJcbi8vICAgICAgICAgICAgIGRpc2NvdW50IDogMCxcclxuLy8gICAgICAgICAgICAgcHJvZ3JhbV9kZXNjcmlwdGlvbiA6ICcnLFxyXG4vLyAgICAgICAgICAgICBnc3QgOiAwLFxyXG4vLyAgICAgICAgICAgICBNQVhfQ0FQQUNJVFlfTVNHIDogJycsXHJcbi8vICAgICAgICAgICAgIGl0ZW1SZW1vdmFsTWVzc2FnZSA6IGZhbHNlLFxyXG4vLyAgICAgICAgICAgICBiYW5uZXJJbWFnZXMgOiBbXSxcclxuLy8gICAgICAgICAgICAgY2Fubm90Q29udGludWVNZXNzYWdlIDpmYWxzZSxcclxuLy8gICAgICAgICAgICAgZ2FsbGVyeUltYWdlcyA6IFtdLFxyXG4vLyAgICAgICAgICAgICBzaG93RGV0YWlsU3RhdHVzIDogZmFsc2UsXHJcbi8vICAgICAgICAgICAgIGhvdGVsUG9saWNpZXMgOiBbXSxcclxuLy8gICAgICAgICAgICAgaG90ZWxIaWdobGlnaHRzIDogW10sXHJcbi8vICAgICAgICAgICAgIE1BWF9DQVBBQ0lUWV9HRU5FUkFMIDogMSxcclxuLy8gICAgICAgICAgICAgc2hvd1NwZWNpYWxSZXF1ZXN0cyA6IGZhbHNlLFxyXG4vLyAgICAgICAgICAgICBzcFJlcXVlc3RzIDogW10sXHJcbi8vICAgICAgICAgICAgIHNlbGVjdGVkU3BSZXFzIDpbXSxcclxuLy8gICAgICAgICAgICAgc2VsZWN0ZWRTcFJlcUlkcyA6IFtdLFxyXG4vLyAgICAgICAgICAgICBzaG93UGVuZGluZ01lc3NhZ2UgOiBmYWxzZSxcclxuLy8gICAgICAgICAgICAgZXhwYW5kQ29udGVudCA6IGZhbHNlXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyAgICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbi8vICAgICAgICAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcbi8vICAgICAgICAgc2NyaXB0LnNyYyA9ICdodHRwczovL2NoZWNrb3V0LnJhem9ycGF5LmNvbS92MS9jaGVja291dC5qcyc7XHJcbi8vICAgICAgICAgc2NyaXB0LmFzeW5jID0gdHJ1ZTtcclxuLy8gICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdCk7XHJcbi8vICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbi8vICAgICAgICAgICAgIGhvdGVsX3VybCA6IHRoaXMucHJvcHMuaG90ZWxfdXJsXHJcbi8vICAgICAgICAgfSlcclxuLy8gICAgIH1cclxuLy9cclxuLy8gICAgIHNjcm9sbFRvU2VjdGlvbiA9IChzZWN0aW9uKSA9PiB7XHJcbi8vICAgICAgICAgaWYoc2VjdGlvbiAhPT0gJycpIHtcclxuLy8gICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzZWN0aW9uKTtcclxuLy8gICAgICAgICAgICAgaWYgKGVsZW1lbnQpIHtcclxuLy8gICAgICAgICAgICAgICAgIGVsZW1lbnQuc2Nyb2xsSW50b1ZpZXcoe2JlaGF2aW9yOiBcInNtb290aFwiLCBibG9jazogXCJzdGFydFwiLCBpbmxpbmU6IFwibmVhcmVzdFwifSk7XHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vXHJcbi8vXHJcbi8vICAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUsIHNuYXBzaG90KSB7XHJcbi8vXHJcbi8vICAgICAgICAgaWYodGhpcy5wcm9wcy5ob3RlbERldGFpbCAhPT0gcHJldlByb3BzLmhvdGVsRGV0YWlsKSB7XHJcbi8vXHJcbi8vICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4vLyAgICAgICAgICAgICAgICAgaG90ZWxfaWQgOiB0aGlzLnByb3BzLmhvdGVsRGV0YWlsLmhvdGVsX2lkLFxyXG4vLyAgICAgICAgICAgICAgICAgaG90ZWxEZXRhaWwgOiB0aGlzLnByb3BzLmhvdGVsRGV0YWlsLFxyXG4vLyAgICAgICAgICAgICAgICAgaG90ZWxfcm9vbXMgOiB0aGlzLnByb3BzLmhvdGVsX3Jvb21zLFxyXG4vLyAgICAgICAgICAgICAgICAgZ2FsbGVyeUltYWdlcyA6IHRoaXMucHJvcHMuZ2FsbGVyeUltYWdlcyxcclxuLy8gICAgICAgICAgICAgICAgIE1BWF9DQVBBQ0lUWV9HRU5FUkFMIDogdGhpcy5wcm9wcy5ob3RlbERldGFpbC5tYXhfb2NjdXBhbmN5LFxyXG4vLyAgICAgICAgICAgICAgICAgaG90ZWxIaWdobGlnaHRzIDogdGhpcy5wcm9wcy5ob3RlbERldGFpbC5ob3RlbGhpZ2hsaWdodHMsXHJcbi8vICAgICAgICAgICAgICAgICBob3RlbFBvbGljaWVzIDogdGhpcy5wcm9wcy5ob3RlbERldGFpbC5ob3RlbHBvbGljaWVzLFxyXG4vLyAgICAgICAgICAgICAgICAgc3BSZXF1ZXN0cyA6IHRoaXMucHJvcHMuaG90ZWxEZXRhaWwuc3BlY2lhbHJlcXVlc3RcclxuLy8gICAgICAgICAgICAgfSwgZnVuY3Rpb24oKSB7XHJcbi8vXHJcbi8vICAgICAgICAgICAgIH0pXHJcbi8vICAgICAgICAgfVxyXG4vL1xyXG4vLyAgICAgICAgIC8vIGlmKHRoaXMucHJvcHMuZmFjaWxpdHlEYXRhLnJvb21UeXBlcyAhPT0gcHJldlByb3BzLmZhY2lsaXR5RGF0YS5yb29tVHlwZXMpIHtcclxuLy8gICAgICAgICAvLyAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbi8vICAgICAgICAgLy8gICAgICAgICByb29tVHlwZXMgOiB0aGlzLnByb3BzLmZhY2lsaXR5RGF0YS5yb29tVHlwZXNcclxuLy8gICAgICAgICAvLyAgICAgfSlcclxuLy8gICAgICAgICAvLyB9XHJcbi8vICAgICAgICAgLy8gaWYodGhpcy5wcm9wcy5ib29raW5nRGF0YS5ib29raW5nSWQgIT09IHByZXZQcm9wcy5ib29raW5nRGF0YS5ib29raW5nSWQpIHtcclxuLy8gICAgICAgICAvL1xyXG4vLyAgICAgICAgIC8vICAgICB0aGlzLnNldFN0YXRlKHtcclxuLy8gICAgICAgICAvLyAgICAgICAgIGJvb2tpbmdJZCA6IHRoaXMucHJvcHMuYm9va2luZ0RhdGEuYm9va2luZ0lkXHJcbi8vICAgICAgICAgLy8gICAgIH0sIGZ1bmN0aW9uICgpe1xyXG4vLyAgICAgICAgIC8vICAgICAgICAgdGhpcy5jb250aW51ZVRvUGF5bWVudCgpXHJcbi8vICAgICAgICAgLy8gICAgIH0pXHJcbi8vICAgICAgICAgLy8gfVxyXG4vLyAgICAgICAgIC8vIGlmKHRoaXMucHJvcHMuYm9va2luZ0RhdGEuYm9va2luZ1Jlc3VsdCAhPT0gcHJldlByb3BzLmJvb2tpbmdEYXRhLmJvb2tpbmdSZXN1bHQpIHtcclxuLy8gICAgICAgICAvLyAgICAgbGV0IFBheW1lbnRVcmwgPSBgaHR0cHM6Ly91dGhkZXYubmV2ZXJiZWZvcmVob2xpZGF5cy5jb20vcGF5bWVudC1zdWNjZXNzP3JwX2lkPWArdGhpcy5zdGF0ZS5QYXltZW50SWQrYCZyYW10PWArdGhpcy5zdGF0ZS50b3RhbEFtb3VudCtgJm1vYmlsZT1gK3RoaXMuc3RhdGUubW9iaWxlK2AmZW1haWw9YCt0aGlzLnN0YXRlLmVtYWlsK2AmbWV0aG9kPUNhcmQgcGF5bWVudCZkYXRlPWArbW9tZW50KHRoaXMuc3RhdGUudG9kYXkpLmZvcm1hdCgnREQgTU1NLCBZWVlZJyk7XHJcbi8vICAgICAgICAgLy8gICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gUGF5bWVudFVybDtcclxuLy8gICAgICAgICAvLyB9XHJcbi8vXHJcbi8vICAgICAgICAgLy8gaWYodGhpcy5wcm9wcy5ob3RlbERhdGEuYmFubmVySW1hZ2VzICE9PSBwcmV2UHJvcHMuaG90ZWxEYXRhLmJhbm5lckltYWdlcykge1xyXG4vLyAgICAgICAgIC8vICAgICB0aGlzLnNldFN0YXRlKHtcclxuLy8gICAgICAgICAvLyAgICAgICAgIGJhbm5lckltYWdlcyA6IHRoaXMucHJvcHMuaG90ZWxEYXRhLmJhbm5lckltYWdlc1xyXG4vLyAgICAgICAgIC8vICAgICB9KVxyXG4vLyAgICAgICAgIC8vIH1cclxuLy8gICAgIH1cclxuLy9cclxuLy8gICAgIHNldFN0YXJ0RGF0ZSA9IChkYXRlKSA9PiB7XHJcbi8vICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbi8vICAgICAgICAgICAgIHN0YXJ0RGF0ZSA6IGRhdGVcclxuLy8gICAgICAgICB9KVxyXG4vLyAgICAgfVxyXG4vLyAgICAgc2V0RW5kRGF0ZSA9IChkYXRlKSA9PiB7XHJcbi8vICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbi8vICAgICAgICAgICAgIGVuZERhdGUgOiBkYXRlXHJcbi8vICAgICAgICAgfSlcclxuLy8gICAgIH1cclxuLy9cclxuLy8gICAgIGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XHJcbi8vICAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQudmFsdWUpXHJcbi8vICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbi8vICAgICAgICAgICAgIFtlLnRhcmdldC5uYW1lXSA6IGUudGFyZ2V0LnZhbHVlXHJcbi8vICAgICAgICAgfSlcclxuLy8gICAgIH1cclxuLy9cclxuLy8gICAgIHNlYXJjaFJvb21zID0gKCkgPT4ge1xyXG4vL1xyXG4vL1xyXG4vLyAgICAgICAgIGxldCBNQVhfQ0FQQUNJVFlfR0VORVJBTCA9IHRoaXMuc3RhdGUuTUFYX0NBUEFDSVRZX0dFTkVSQUw7XHJcbi8vICAgICAgICAgbGV0IHN0YXJ0RGF0ZSA9IHRoaXMuc3RhdGUuc3RhcnREYXRlO1xyXG4vLyAgICAgICAgIGxldCBlbmREYXRlID0gdGhpcy5zdGF0ZS5zdGFydERhdGU7XHJcbi8vICAgICAgICAgbGV0IHJvb21zID0gdGhpcy5zdGF0ZS5yb29tcztcclxuLy8gICAgICAgICBsZXQgYWR1bHRzID0gdGhpcy5zdGF0ZS5hZHVsdHM7XHJcbi8vICAgICAgICAgbGV0IGNoaWxkcmVuID0gdGhpcy5zdGF0ZS5jaGlsZHJlbjtcclxuLy8gICAgICAgICBsZXQgaW52YWxpZEZpZWxkcyA9IFtdO1xyXG4vLyAgICAgICAgIGlmKHN0YXJ0RGF0ZSA9PT0gJycpIHtcclxuLy8gICAgICAgICAgICAgaW52YWxpZEZpZWxkcy5wdXNoKCdzdGFydERhdGUnKTtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgICAgaWYoZW5kRGF0ZSA9PT0gJycpIHtcclxuLy8gICAgICAgICAgICAgaW52YWxpZEZpZWxkcy5wdXNoKCdlbmREYXRlJyk7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICAgIGlmKHJvb21zID09PSAnJykge1xyXG4vLyAgICAgICAgICAgICBpbnZhbGlkRmllbGRzLnB1c2goJ3Jvb21zJyk7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICAgIGlmKGFkdWx0cyA9PT0gJycpIHtcclxuLy8gICAgICAgICAgICAgaW52YWxpZEZpZWxkcy5wdXNoKCdhZHVsdHMnKTtcclxuLy8gICAgICAgICB9XHJcbi8vXHJcbi8vICAgICAgICAgbGV0IGFkdWx0Q291bnQgPSBwYXJzZUludChyb29tcykgKiBwYXJzZUludChNQVhfQ0FQQUNJVFlfR0VORVJBTCk7XHJcbi8vICAgICAgICAgaWYocGFyc2VJbnQoYWR1bHRzKSA+IGFkdWx0Q291bnQpIHtcclxuLy8gICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbi8vICAgICAgICAgICAgICAgICBNQVhfQ0FQQUNJVFlfTVNHIDogXCJTb3JyeS4gV2UgYXJlIGFsbG93aW5nIGEgbWF4aW11bSBvZiBcIitNQVhfQ0FQQUNJVFlfR0VORVJBTCtcIiBtZW1iZXJzIGluIGEgcm9vbVwiXHJcbi8vICAgICAgICAgICAgIH0pXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICAgIGlmKGludmFsaWRGaWVsZHMubGVuZ3RoID09PSAwICkge1xyXG4vL1xyXG4vLyAgICAgICAgICAgICBsZXQgcGFyYW1zID0ge3N0YXJ0RGF0ZTogdGhpcy5zdGF0ZS5zdGFydERhdGUsIGVuZERhdGUgOiB0aGlzLnN0YXRlLmVuZERhdGUsIHJvb21zIDogdGhpcy5zdGF0ZS5yb29tcyxcclxuLy8gICAgICAgICAgICAgICAgIGFkdWx0cyA6IHRoaXMuc3RhdGUuYWR1bHRzLCBjaGlsZHJlbiA6IHRoaXMuc3RhdGUuY2hpbGRyZW59O1xyXG4vLyAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzaG93RXJyb3IgOiBmYWxzZSwgaW5pdFNlYXJjaCA6ICB0cnVlLCBzZWFyY2hTdGVwIDogMSwgc3RhcnREYXRlOiB0aGlzLnN0YXRlLnN0YXJ0RGF0ZSwgZW5kRGF0ZSA6IHRoaXMuc3RhdGUuZW5kRGF0ZSwgcm9vbXMgOiB0aGlzLnN0YXRlLnJvb21zLFxyXG4vLyAgICAgICAgICAgICAgICAgYWR1bHRzIDogdGhpcy5zdGF0ZS5hZHVsdHMsIGNoaWxkcmVuIDogdGhpcy5zdGF0ZS5jaGlsZHJlbiwgaW52YWxpZEZpZWxkcyA6IGludmFsaWRGaWVsZHN9KVxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgICBlbHNlIHtcclxuLy8gICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dFcnJvciA6IHRydWUsIHN0YXJ0RGF0ZTogdGhpcy5zdGF0ZS5zdGFydERhdGUsIGVuZERhdGUgOiB0aGlzLnN0YXRlLmVuZERhdGUsIHJvb21zIDogdGhpcy5zdGF0ZS5yb29tcyxcclxuLy8gICAgICAgICAgICAgICAgIGFkdWx0cyA6IHRoaXMuc3RhdGUuYWR1bHRzLCBjaGlsZHJlbiA6IHRoaXMuc3RhdGUuY2hpbGRyZW4sIGludmFsaWRGaWVsZHMgOiBpbnZhbGlkRmllbGRzfSlcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vICAgICByZXNldFNlYXJjaCA9ICgpID0+IHtcclxuLy8gICAgICAgICB0aGlzLnNldFN0YXRlKHtzaG93RXJyb3IgOiBmYWxzZSwgaW5pdFNlYXJjaCA6ICBmYWxzZSwgc2VhcmNoU3RlcCA6IDAsIHN0YXJ0RGF0ZTogdGhpcy5zdGF0ZS50b2RheSwgZW5kRGF0ZSA6IHRoaXMuc3RhdGUudG9tb3Jyb3csIHJvb21zIDogJycsXHJcbi8vICAgICAgICAgICAgIGFkdWx0cyA6ICcnLCBjaGlsZHJlbiA6ICcnLCBpbnZhbGlkRmllbGRzIDogW119KVxyXG4vLyAgICAgfVxyXG4vLyAgICAgYmFja1RvRGV0YWlsID0gKCkgPT4ge1xyXG4vLyAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2luaXRTZWFyY2ggOiAgZmFsc2V9KVxyXG4vLyAgICAgfVxyXG4vLyAgICAgYmFja1RvQ2FydCA9ICgpID0+IHtcclxuLy8gICAgICAgICB0aGlzLnNldFN0YXRlKHtzZWFyY2hTdGVwIDogIDF9KVxyXG4vLyAgICAgfVxyXG4vL1xyXG4vLyAgICAgc2VsZWN0Um9vbSA9IChyb29tLCB0eXBlLGUpID0+IHtcclxuLy8gICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuLy8gICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4vLyAgICAgICAgIGxldCBzZWxlY3RlZFJvb21zID0gdGhpcy5zdGF0ZS5zZWxlY3RlZFJvb21zO1xyXG4vLyAgICAgICAgIGxldCBzZWxlY3RlZFJvb21JZHMgPSB0aGlzLnN0YXRlLnNlbGVjdGVkUm9vbUlkcztcclxuLy9cclxuLy8gICAgICAgICBsZXQgaG90ZWxfcm9vbXMgPSB0aGlzLnN0YXRlLmhvdGVsX3Jvb21zXHJcbi8vICAgICAgICAgaWYodHlwZSA9PT0gJ2FkZCcgfHwgdHlwZSA9PT0gJ2Nob29zZScpIHtcclxuLy8gICAgICAgICAgICAgY29uc29sZS5sb2coc2VsZWN0ZWRSb29tSWRzKVxyXG4vLyAgICAgICAgICAgICBpZighc2VsZWN0ZWRSb29tSWRzLmluY2x1ZGVzKHJvb20ucm9vbWlkKSl7XHJcbi8vICAgICAgICAgICAgICAgICBzZWxlY3RlZFJvb21JZHMucHVzaChyb29tLnJvb21pZClcclxuLy8gICAgICAgICAgICAgICAgIHNlbGVjdGVkUm9vbXMucHVzaChyb29tKTtcclxuLy8gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJvb20pXHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICB9XHJcbi8vXHJcbi8vICAgICAgICAgaWYodHlwZSA9PT0gJ3JlbW92ZScpIHtcclxuLy8gICAgICAgICAgICAgaWYodGhpcy5zdGF0ZS5zZWFyY2hTdGVwID09PSAyICYmIHNlbGVjdGVkUm9vbXMubGVuZ3RoID09PTEpe1xyXG4vLyAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgaXRlbVJlbW92YWxNZXNzYWdlIDogdHJ1ZVxyXG4vLyAgICAgICAgICAgICAgICAgfSlcclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICBlbHNlIHtcclxuLy8gICAgICAgICAgICAgICAgIGlmKHNlbGVjdGVkUm9vbUlkcy5pbmNsdWRlcyhyb29tLnJvb21pZCkpIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBzZWxlY3RlZFJvb21JZHMuaW5kZXhPZihyb29tLnJvb21pZCk7XHJcbi8vXHJcbi8vICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRSb29tSWRzLnNwbGljZShpbmRleCwgMSlcclxuLy8gICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFJvb21zLnNwbGljZShpbmRleCwgMSk7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgaG90ZWxfcm9vbXMgPSBob3RlbF9yb29tcy5tYXAoaXRlbSA9PiB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGl0ZW0ucm9vbWlkID09PSByb29tLnJvb21pZCkge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5xdHkgPSAwO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4vLyAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgfVxyXG4vL1xyXG4vLyAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4vLyAgICAgICAgICAgICBzZWxlY3RlZFJvb21JZHMgOnNlbGVjdGVkUm9vbUlkcyxcclxuLy8gICAgICAgICAgICAgc2VsZWN0ZWRSb29tcyA6IHNlbGVjdGVkUm9vbXMsXHJcbi8vICAgICAgICAgICAgIGhvdGVsX3Jvb21zIDogaG90ZWxfcm9vbXNcclxuLy8gICAgICAgICB9LCBmdW5jdGlvbigpe1xyXG4vLyAgICAgICAgICAgICBpZih0eXBlICE9PSAncmVtb3ZlJykge1xyXG4vLyAgICAgICAgICAgICAgICAgKHR5cGUgPT09ICdhZGQnIHx8IHR5cGUgPT09ICdjaG9vc2UnICkgPyB0aGlzLmFkZFF0eShyb29tKSA6IHRoaXMuc3ViUXR5KHJvb20pO1xyXG4vLyAgICAgICAgICAgICB9XHJcbi8vXHJcbi8vXHJcbi8vICAgICAgICAgfSlcclxuLy9cclxuLy8gICAgIH1cclxuLy9cclxuLy9cclxuLy8gICAgIGNvbnRpbnVlVG9TdW1tYXJ5ID0gKCkgPT4ge1xyXG4vLyAgICAgICAgIGxldCBhZHVsdENvdW50ID0gcGFyc2VJbnQodGhpcy5zdGF0ZS5hZHVsdHMpO1xyXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKGFkdWx0Q291bnQpO1xyXG4vLyAgICAgICAgIGxldCBwZXJzb25PY2N1cGllZCA9IDA7XHJcbi8vICAgICAgICAgbGV0IHNlbGVjdGVkUm9vbXMgPSB0aGlzLnN0YXRlLnNlbGVjdGVkUm9vbXM7XHJcbi8vICAgICAgICAgbGV0IHRvdGFsUm9vbXMgPSAwO1xyXG4vLyAgICAgICAgIGlmKHNlbGVjdGVkUm9vbXMubGVuZ3RoID4gMCkge1xyXG4vLyAgICAgICAgICAgICBmb3IodmFyIGk9MDsgaTxzZWxlY3RlZFJvb21zLmxlbmd0aDsgaSsrKSB7XHJcbi8vICAgICAgICAgICAgICAgICBsZXQgcXR5ID0gc2VsZWN0ZWRSb29tc1tpXS5xdHk7XHJcbi8vICAgICAgICAgICAgICAgICB0b3RhbFJvb21zICs9IHBhcnNlSW50KHF0eSk7XHJcbi8vICAgICAgICAgICAgICAgICBsZXQgb2NjdXBhbmN5ID0gcGFyc2VJbnQoc2VsZWN0ZWRSb29tc1tpXS5tYXhfY2FwYWNpdHlfYWR1bHQpO1xyXG4vLyAgICAgICAgICAgICAgICAgbGV0IGV4dHJhX29jY3VwYW5jeSA9IHNlbGVjdGVkUm9vbXNbaV0uZXh0cmFiZWQgPT09ICd5ZXMnPyAgMTogMDtcclxuLy8gICAgICAgICAgICAgICAgIGxldCB0b3RhbF9vY2N1cGFuY3kgPSBvY2N1cGFuY3kgKyBleHRyYV9vY2N1cGFuY3k7XHJcbi8vICAgICAgICAgICAgICAgICBwZXJzb25PY2N1cGllZCArPSBwYXJzZUludChxdHkpICp0b3RhbF9vY2N1cGFuY3k7XHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICB9XHJcbi8vXHJcbi8vICAgICAgICAgaWYoc2VsZWN0ZWRSb29tcy5sZW5ndGggPT09IDApIHtcclxuLy8gICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbi8vICAgICAgICAgICAgICAgICBjYW5ub3RDb250aW51ZSA6IHRydWUsXHJcbi8vICAgICAgICAgICAgICAgICBjYW5ub3RDb250aW51ZU1lc3NhZ2UgOiBcIlBsZWFzZSBzZWxlY3QgYXRsZWFzdCBhIHJvb20gdG8gcHJvY2VlZFwiXHJcbi8vICAgICAgICAgICAgIH0pXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICAgIGVsc2UgaWYoYWR1bHRDb3VudCA+IHBlcnNvbk9jY3VwaWVkKSB7XHJcbi8vICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4vLyAgICAgICAgICAgICAgICAgY2Fubm90Q29udGludWUgOiB0cnVlLFxyXG4vLyAgICAgICAgICAgICAgICAgY2Fubm90Q29udGludWVNZXNzYWdlIDogXCJTb3JyeS5cIisgYWR1bHRDb3VudCtcIiBwZXJzb25zIGNhbm5vdCBiZSBvY2N1cGllZCBpbiBcIit0b3RhbFJvb21zK1wiIHJvb21zXCJcclxuLy8gICAgICAgICAgICAgfSlcclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgICAgZWxzZSB7XHJcbi8vICAgICAgICAgICAgIGlmKHRoaXMuc3RhdGUuc2VsZWN0ZWRSb29tcy5sZW5ndGggPjApIHtcclxuLy8gICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIHNlYXJjaFN0ZXAgOjJcclxuLy8gICAgICAgICAgICAgICAgIH0pXHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICB9XHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vICAgICB9XHJcbi8vXHJcbi8vICAgICBhZGRRdHkgPSAocm9vbSkgPT4ge1xyXG4vLyAgICAgICAgIGxldCBzZWxlY3RlZFJvb21zID0gdGhpcy5zdGF0ZS5zZWxlY3RlZFJvb21zO1xyXG4vLyAgICAgICAgIGxldCBzZWxlY3RlZFJvb21JZHMgPSB0aGlzLnN0YXRlLnNlbGVjdGVkUm9vbUlkcztcclxuLy8gICAgICAgICBsZXQgcm9vbUlkID0gcm9vbS5yb29taWQ7XHJcbi8vICAgICAgICAgc2VsZWN0ZWRSb29tcyA9IHNlbGVjdGVkUm9vbXMubWFwKGl0ZW0gPT4ge1xyXG4vLyAgICAgICAgICAgICBpZihpdGVtLnJvb21pZCA9PT0gcm9vbUlkKSB7XHJcbi8vICAgICAgICAgICAgICAgICBpZihpdGVtLnF0eSkge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIGlmKGl0ZW0ucXR5IDwgaXRlbS5yb29tY291bnQpIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5xdHkgPSBwYXJzZUludChpdGVtLnF0eSkgKzE7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgaXRlbS5xdHkgPSAxO1xyXG4vLyAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgIHJldHVybiBpdGVtO1xyXG4vLyAgICAgICAgIH0pO1xyXG4vLyAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4vLyAgICAgICAgICAgICBzZWxlY3RlZFJvb21zIDogc2VsZWN0ZWRSb29tcyxcclxuLy8gICAgICAgICAgICAgc2VsZWN0ZWRSb29tSWRzIDogc2VsZWN0ZWRSb29tSWRzXHJcbi8vICAgICAgICAgfSlcclxuLy8gICAgIH1cclxuLy8gICAgIHN1YlF0eSA9IChyb29tKSA9PiB7XHJcbi8vICAgICAgICAgY29uc29sZS5sb2cocm9vbSlcclxuLy8gICAgICAgICBsZXQgc2VsZWN0ZWRSb29tcyA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRSb29tcztcclxuLy8gICAgICAgICBsZXQgc2VsZWN0ZWRSb29tSWRzID0gdGhpcy5zdGF0ZS5zZWxlY3RlZFJvb21JZHM7XHJcbi8vICAgICAgICAgbGV0IHJvb21JZCA9IHJvb20ucm9vbWlkO1xyXG4vL1xyXG4vLyAgICAgICAgIGlmKHJvb20ucXR5ICYmIHJvb20ucXR5ID09PSAxKSB7XHJcbi8vICAgICAgICAgICAgIGlmKHRoaXMuc3RhdGUuc2VhcmNoU3RlcCA9PT0gMiAmJiBzZWxlY3RlZFJvb21zLmxlbmd0aCA9PT0xKXtcclxuLy8gICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIGl0ZW1SZW1vdmFsTWVzc2FnZSA6IHRydWVcclxuLy8gICAgICAgICAgICAgICAgIH0pXHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgZWxzZSB7XHJcbi8vICAgICAgICAgICAgICAgICByb29tLnF0eSA9IDA7XHJcbi8vICAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBzZWxlY3RlZFJvb21JZHMuaW5kZXhPZihyb29tLnJvb21pZCk7XHJcbi8vICAgICAgICAgICAgICAgICBzZWxlY3RlZFJvb21JZHMuc3BsaWNlKGluZGV4LDEpXHJcbi8vICAgICAgICAgICAgICAgICBzZWxlY3RlZFJvb21zLnNwbGljZShpbmRleCwxKVxyXG4vLyAgICAgICAgICAgICB9XHJcbi8vXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICAgIGVsc2Uge1xyXG4vL1xyXG4vLyAgICAgICAgICAgICBzZWxlY3RlZFJvb21zID0gc2VsZWN0ZWRSb29tcy5tYXAoaXRlbSA9PiB7XHJcbi8vICAgICAgICAgICAgICAgICBpZihpdGVtLnJvb21pZCA9PT0gcm9vbUlkKSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgaXRlbS5xdHkgPSAoaXRlbS5xdHkgJiYgaXRlbS5xdHkgPjApID8gcGFyc2VJbnQoaXRlbS5xdHkpIC0xIDowO1xyXG4vLyAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW07XHJcbi8vICAgICAgICAgICAgIH0pXHJcbi8vICAgICAgICAgfVxyXG4vL1xyXG4vLyAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4vLyAgICAgICAgICAgICBzZWxlY3RlZFJvb21zIDogc2VsZWN0ZWRSb29tcyxcclxuLy8gICAgICAgICAgICAgc2VsZWN0ZWRSb29tSWRzIDogc2VsZWN0ZWRSb29tSWRzXHJcbi8vICAgICAgICAgfSlcclxuLy8gICAgIH1cclxuLy9cclxuLy8gICAgIGNoYW5nZVF0eSA9IChyb29tLGUpID0+IHtcclxuLy8gICAgICAgICBsZXQgcXR5ID0gZS50YXJnZXQudmFsdWU7XHJcbi8vICAgICAgICAgbGV0IHNlbGVjdGVkUm9vbXMgPSB0aGlzLnN0YXRlLnNlbGVjdGVkUm9vbXM7XHJcbi8vICAgICAgICAgbGV0IHNlbGVjdGVkUm9vbUlkcyA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRSb29tSWRzO1xyXG4vLyAgICAgICAgIGxldCByb29tSWQgPSByb29tLnJvb21pZDtcclxuLy8gICAgICAgICBzZWxlY3RlZFJvb21zID0gc2VsZWN0ZWRSb29tcy5tYXAoaXRlbSA9PiB7XHJcbi8vICAgICAgICAgICAgIGlmKGl0ZW0ucm9vbWlkID09PSByb29tSWQpIHtcclxuLy8gICAgICAgICAgICAgICAgIGl0ZW0ucXR5ID0gKGl0ZW0ucXR5ICYmIGl0ZW0ucXR5ID4wKSA/IHBhcnNlSW50KGl0ZW0ucXR5KSAtMSA6IDA7XHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgcmV0dXJuIGl0ZW07XHJcbi8vICAgICAgICAgfSlcclxuLy8gICAgICAgICB0aGlzLnNlbGVjdFJvb20ocm9vbSlcclxuLy8gICAgIH1cclxuLy9cclxuLy8gICAgIHNhdmVCb29raW5nID0gKGUsIGFtb3VudCwgcHJpbmNpcGxlQW1vdW50LCBkaXNjb3VudCwgcHJvZ3JhbV9kZXNjcmlwdGlvbiwgZ3N0KSA9PiB7XHJcbi8vXHJcbi8vXHJcbi8vICAgICAgICAgbGV0IGZpcnN0bmFtZSA9IHRoaXMuc3RhdGUuZmlyc3RuYW1lO1xyXG4vLyAgICAgICAgIGxldCBsYXN0bmFtZSA9IHRoaXMuc3RhdGUubGFzdG5hbWU7XHJcbi8vICAgICAgICAgbGV0IGFkZHJlc3MxID0gdGhpcy5zdGF0ZS5hZGRyZXNzMTtcclxuLy8gICAgICAgICBsZXQgYWRkcmVzczIgPSB0aGlzLnN0YXRlLmFkZHJlc3MyO1xyXG4vLyAgICAgICAgIGxldCBjaXR5ID0gdGhpcy5zdGF0ZS5jaXR5O1xyXG4vLyAgICAgICAgIGxldCBzdGF0ZSA9IHRoaXMuc3RhdGUuc3RhdGU7XHJcbi8vICAgICAgICAgbGV0IGNvdW50cnkgPSB0aGlzLnN0YXRlLmNvdW50cnk7XHJcbi8vICAgICAgICAgbGV0IHBpbmNvZGUgPSB0aGlzLnN0YXRlLnBpbmNvZGU7XHJcbi8vICAgICAgICAgbGV0IG1vYmlsZSA9IHRoaXMuc3RhdGUubW9iaWxlO1xyXG4vLyAgICAgICAgIGxldCBhZGRpdGlvbmFscGhvbmVudW1iZXIgPSB0aGlzLnN0YXRlLmFkZGl0aW9uYWxwaG9uZW51bWJlcjtcclxuLy8gICAgICAgICBsZXQgZW1haWwgPSB0aGlzLnN0YXRlLmVtYWlsO1xyXG4vLyAgICAgICAgIGxldCBpbnZhbGlkRmllbGRzID0gW107XHJcbi8vICAgICAgICAgaWYoZmlyc3RuYW1lID09PSAnJykge1xyXG4vLyAgICAgICAgICAgICBpbnZhbGlkRmllbGRzLnB1c2goJ2ZpcnN0bmFtZScpO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgICBpZihsYXN0bmFtZSA9PT0gJycpIHtcclxuLy8gICAgICAgICAgICAgaW52YWxpZEZpZWxkcy5wdXNoKCdsYXN0bmFtZScpO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgICBpZihhZGRyZXNzMSA9PT0gJycpIHtcclxuLy8gICAgICAgICAgICAgaW52YWxpZEZpZWxkcy5wdXNoKCdhZGRyZXNzMScpO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgICBpZihhZGRyZXNzMiA9PT0gJycpIHtcclxuLy8gICAgICAgICAgICAgaW52YWxpZEZpZWxkcy5wdXNoKCdhZGRyZXNzMicpO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgICBpZihjaXR5ID09PSAnJykge1xyXG4vLyAgICAgICAgICAgICBpbnZhbGlkRmllbGRzLnB1c2goJ2NpdHknKTtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgICAgaWYoc3RhdGUgPT09ICcnKSB7XHJcbi8vICAgICAgICAgICAgIGludmFsaWRGaWVsZHMucHVzaCgnc3RhdGUnKTtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgICAgaWYoY291bnRyeSA9PT0gJycpIHtcclxuLy8gICAgICAgICAgICAgaW52YWxpZEZpZWxkcy5wdXNoKCdjb3VudHJ5Jyk7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICAgIGlmKHBpbmNvZGUgPT09ICcnKSB7XHJcbi8vICAgICAgICAgICAgIGludmFsaWRGaWVsZHMucHVzaCgncGluY29kZScpO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgICBpZihtb2JpbGUgPT09ICcnKSB7XHJcbi8vICAgICAgICAgICAgIGludmFsaWRGaWVsZHMucHVzaCgnbW9iaWxlJyk7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICAgIGlmKGFkZGl0aW9uYWxwaG9uZW51bWJlciA9PT0gJycpIHtcclxuLy8gICAgICAgICAgICAgaW52YWxpZEZpZWxkcy5wdXNoKCdhZGRpdGlvbmFscGhvbmVudW1iZXInKTtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgICAgaWYoZW1haWwgPT09ICcnKSB7XHJcbi8vICAgICAgICAgICAgIGludmFsaWRGaWVsZHMucHVzaCgnZW1haWwnKTtcclxuLy8gICAgICAgICB9XHJcbi8vXHJcbi8vICAgICAgICAgaWYoaW52YWxpZEZpZWxkcy5sZW5ndGggPT09IDApIHtcclxuLy8gICAgICAgICAgICAgbGV0IHNlbGVjdGVkUm9vbXMgPSB0aGlzLnN0YXRlLnNlbGVjdGVkUm9vbXM7XHJcbi8vICAgICAgICAgICAgIGxldCBjaGVja2luZGF0ZSA9IG1vbWVudCh0aGlzLnN0YXRlLnN0YXJ0RGF0ZSkuZm9ybWF0KCd5eXl5LU1NLUREJyk7XHJcbi8vICAgICAgICAgICAgIGxldCBjaGVja291dGRhdGUgPSBtb21lbnQodGhpcy5zdGF0ZS5lbmREYXRlKS5mb3JtYXQoJ3l5eXktTU0tREQnKTtcclxuLy8gICAgICAgICAgICAgbGV0IGFkdWx0cyA9IHRoaXMuc3RhdGUuYWR1bHRzIHx8IDA7XHJcbi8vICAgICAgICAgICAgIGxldCBjaGlsZHJlbiA9IHRoaXMuc3RhdGUuY2hpbGRyZW4gfHwgMDtcclxuLy9cclxuLy9cclxuLy9cclxuLy8gICAgICAgICAgICAgdmFyIHN0YXJ0ID0gbW9tZW50KGNoZWNraW5kYXRlLCBcIllZWVktTU0tRERcIik7XHJcbi8vICAgICAgICAgICAgIHZhciBlbmQgPSBtb21lbnQoY2hlY2tvdXRkYXRlLCBcIllZWVktTU0tRERcIik7XHJcbi8vXHJcbi8vICAgICAgICAgICAgIGxldCBub09mRGF5cyA9IG1vbWVudC5kdXJhdGlvbihlbmQuZGlmZihzdGFydCkpLmFzRGF5cygpO1xyXG4vL1xyXG4vLyAgICAgICAgICAgICBsZXQgbm9PZnJvb21zID0gdGhpcy5zdGF0ZS5yb29tcztcclxuLy8gICAgICAgICAgICAgbGV0IHRheGFtb3VudCA9IGdzdDtcclxuLy9cclxuLy8gICAgICAgICAgICAgY29uc29sZS5sb2coc2VsZWN0ZWRSb29tcylcclxuLy9cclxuLy8gICAgICAgICAgICAgbGV0IHNlbGVjdGVkU3BSZXFzID0gdGhpcy5zdGF0ZS5zZWxlY3RlZFNwUmVxcztcclxuLy9cclxuLy9cclxuLy8gICAgICAgICAgICAgbGV0IGJvb2tlZFJvb21zID0gW107XHJcbi8vXHJcbi8vICAgICAgICAgICAgIGZvcihsZXQgaT0wOyBpPHNlbGVjdGVkUm9vbXMubGVuZ3RoOyBpKyspIHtcclxuLy8gICAgICAgICAgICAgICAgIGxldCByb29tID0ge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIFwicm9vbWlkXCIgOiBzZWxlY3RlZFJvb21zW2ldLnJvb21pZCxcclxuLy8gICAgICAgICAgICAgICAgICAgICBcIm5vb2ZhZHVsdHNcIiA6ICBzZWxlY3RlZFJvb21zW2ldLm1heF9jYXBhY2l0eV9hZHVsdCxcclxuLy8gICAgICAgICAgICAgICAgICAgICBcIm5vb2ZjaGlsZHNcIiA6ICAwLFxyXG4vLyAgICAgICAgICAgICAgICAgICAgIFwiZXh0cmFiZWRcIiA6ICBzZWxlY3RlZFJvb21zW2ldLmV4dHJhYmVkY291bnQsXHJcbi8vICAgICAgICAgICAgICAgICAgICAgXCJwcmljZVwiIDogIHNlbGVjdGVkUm9vbXNbaV0ucm9vbV9wcmljZSxcclxuLy8gICAgICAgICAgICAgICAgICAgICBcImV4dHJhYmVkcHJpY2VcIiA6ICAwLFxyXG4vLyAgICAgICAgICAgICAgICAgICAgIFwidGF4YW1vdW50XCI6ICAwLFxyXG4vLyAgICAgICAgICAgICAgICAgICAgIFwidG90YWxwcmljZVwiIDogIHBhcnNlRmxvYXQoc2VsZWN0ZWRSb29tc1tpXS5yb29tX3ByaWNlKSAqIG5vT2ZEYXlzLFxyXG4vLyAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAgICAgYm9va2VkUm9vbXMucHVzaChyb29tKTtcclxuLy8gICAgICAgICAgICAgfVxyXG4vL1xyXG4vLyAgICAgICAgICAgICBsZXQgcGFyYW1zID0ge1xyXG4vLyAgICAgICAgICAgICAgICAgXCJob3RlbF9pZFwiOiB0aGlzLnN0YXRlLmhvdGVsX2lkLFxyXG4vLyAgICAgICAgICAgICAgICAgXCJjaGVja2luZGF0ZVwiOiBjaGVja2luZGF0ZSxcclxuLy8gICAgICAgICAgICAgICAgIFwiY2hlY2tvdXRkYXRlXCI6IGNoZWNrb3V0ZGF0ZSxcclxuLy8gICAgICAgICAgICAgICAgIFwibm9vZmFkdWx0c1wiOiBhZHVsdHMsXHJcbi8vICAgICAgICAgICAgICAgICBcIm5vb2ZjaGlsZHNcIjogY2hpbGRyZW4sXHJcbi8vICAgICAgICAgICAgICAgICBcIm5vb2Zyb29tc1wiOiBub09mcm9vbXMsXHJcbi8vICAgICAgICAgICAgICAgICBcInByaWNlXCIgOiBwcmluY2lwbGVBbW91bnQsXHJcbi8vICAgICAgICAgICAgICAgICBcInRheGFtb3VudFwiOiB0YXhhbW91bnQsXHJcbi8vICAgICAgICAgICAgICAgICBcInRvdGFscHJpY2VcIjogYW1vdW50LFxyXG4vLyAgICAgICAgICAgICAgICAgXCJmaXJzdG5hbWVcIjogZmlyc3RuYW1lLFxyXG4vLyAgICAgICAgICAgICAgICAgXCJsYXN0bmFtZVwiOiBsYXN0bmFtZSxcclxuLy8gICAgICAgICAgICAgICAgIFwiYWRkcmVzczFcIjogYWRkcmVzczEsXHJcbi8vICAgICAgICAgICAgICAgICBcImFkZHJlc3MyXCI6IGFkZHJlc3MyLFxyXG4vLyAgICAgICAgICAgICAgICAgXCJjaXR5XCI6IGNpdHksXHJcbi8vICAgICAgICAgICAgICAgICBcInN0YXRlXCI6IHN0YXRlLFxyXG4vLyAgICAgICAgICAgICAgICAgXCJjb3VudHJ5XCI6IGNvdW50cnksXHJcbi8vICAgICAgICAgICAgICAgICBcInBpbmNvZGVcIjogcGluY29kZSxcclxuLy8gICAgICAgICAgICAgICAgIFwibW9iaWxlXCI6IG1vYmlsZSxcclxuLy8gICAgICAgICAgICAgICAgIFwiZW1haWxcIjogZW1haWwsXHJcbi8vICAgICAgICAgICAgICAgICBcImlkcHJvb2ZcIjogXCJ0ZXN0LnBkZlwiLFxyXG4vLyAgICAgICAgICAgICAgICAgXCJyb29tc1wiOiBib29rZWRSb29tcyxcclxuLy8gICAgICAgICAgICAgICAgIFwiYWRkaXRpb25hbHBob25lbnVtYmVyXCI6IG1vYmlsZSxcclxuLy8gICAgICAgICAgICAgICAgIFwic3BscmVxdWVzdFwiIDogc2VsZWN0ZWRTcFJlcXMubGVuZ3RoID4wICA/IEpTT04uc3RyaW5naWZ5KHNlbGVjdGVkU3BSZXFzKSA6IFwiXCJcclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhwYXJhbXMpXHJcbi8vICAgICAgICAgICAgIHRoaXMucHJvcHMuc2F2ZUJvb2tpbmcocGFyYW1zKTtcclxuLy9cclxuLy9cclxuLy8gICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbi8vICAgICAgICAgICAgICAgICBpbnZhbGlkRmllbGRzIDogW10sXHJcbi8vICAgICAgICAgICAgICAgICB0b3RhbEFtb3VudCA6IGFtb3VudCxcclxuLy8gICAgICAgICAgICAgICAgIHByaW5jaXBsZUFtb3VudCA6IHByaW5jaXBsZUFtb3VudCxcclxuLy8gICAgICAgICAgICAgICAgIGRpc2NvdW50IDogZGlzY291bnQsXHJcbi8vICAgICAgICAgICAgICAgICBwcm9ncmFtX2Rlc2NyaXB0aW9uIDogcHJvZ3JhbV9kZXNjcmlwdGlvbixcclxuLy8gICAgICAgICAgICAgICAgIGdzdCA6IGdzdCxcclxuLy8gICAgICAgICAgICAgICAgIGNoZWNraW5kYXRlIDogY2hlY2tpbmRhdGUsXHJcbi8vICAgICAgICAgICAgICAgICBjaGVja291dGRhdGUgOiBjaGVja291dGRhdGVcclxuLy8gICAgICAgICAgICAgfSlcclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgICAgZWxzZSB7XHJcbi8vICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4vLyAgICAgICAgICAgICAgICAgc2hvd1Byb2ZpbGVJbmZvRXJyb3IgOiB0cnVlLFxyXG4vLyAgICAgICAgICAgICAgICAgaW52YWxpZEZpZWxkcyA6IGludmFsaWRGaWVsZHMsXHJcbi8vICAgICAgICAgICAgICAgICB0b3RhbEFtb3VudCA6IGFtb3VudCxcclxuLy8gICAgICAgICAgICAgICAgIHByaW5jaXBsZUFtb3VudCA6IHByaW5jaXBsZUFtb3VudCxcclxuLy8gICAgICAgICAgICAgICAgIGRpc2NvdW50IDogZGlzY291bnQsXHJcbi8vICAgICAgICAgICAgICAgICBwcm9ncmFtX2Rlc2NyaXB0aW9uIDogcHJvZ3JhbV9kZXNjcmlwdGlvbixcclxuLy8gICAgICAgICAgICAgICAgIGdzdCA6IGdzdFxyXG4vLyAgICAgICAgICAgICB9KVxyXG4vLyAgICAgICAgIH1cclxuLy9cclxuLy8gICAgIH1cclxuLy9cclxuLy8gICAgIGhpZGVQcm9maWxlSW5mb0Vycm9yID0gKCkgPT4ge1xyXG4vLyAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4vLyAgICAgICAgICAgICBzaG93UHJvZmlsZUluZm9FcnJvciA6IGZhbHNlXHJcbi8vICAgICAgICAgfSlcclxuLy8gICAgIH1cclxuLy9cclxuLy8gICAgIGNvbnRpbnVlVG9QYXltZW50ID0gKCkgPT4ge1xyXG4vLyAgICAgICAgIGxldCB0aGF0PXRoaXM7XHJcbi8vICAgICAgICAgbGV0IG9wdGlvbnMgPSB7XHJcbi8vICAgICAgICAgICAgIC8vIGtleTogJ3J6cF9saXZlX3VOUWd6NnJPR1E5NnFFJyxcclxuLy8gICAgICAgICAgICAga2V5OiAncnpwX3Rlc3Rfcm5FSDVJNE5IdWFHSngnLFxyXG4vLyAgICAgICAgICAgICBhbW91bnQ6IHBhcnNlRmxvYXQodGhpcy5zdGF0ZS50b3RhbEFtb3VudCkqMTAwLCAvLyAgPSBJTlIgMVxyXG4vLyAgICAgICAgICAgICBuYW1lOiAnVVRIIEJvb2tpbmcnLFxyXG4vLyAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1BsZWFzZSBwYXkgdGhlIGJvb2tpbmcgY2hhcmdlcyBoZXJlIHRvIGNvbmZpcm0nLFxyXG4vLyAgICAgICAgICAgICBpbWFnZTogJ2h0dHBzOi8vdXRoZGV2Lm5ldmVyYmVmb3JlaG9saWRheXMuY29tL2Fzc2V0cy9pbWFnZXMvdXRoLWxvZ28tYmxhY2sucG5nJyxcclxuLy8gICAgICAgICAgICAgLy8gb3JkZXJfaWQ6IHRoaXMuc3RhdGUub3JkZXJJZCxcclxuLy8gICAgICAgICAgICAgaGFuZGxlcjogZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuLy8gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuLy8gICAgICAgICAgICAgICAgIHRoYXQuc2V0U3RhdGUoe1BheW1lbnRJZDogcmVzcG9uc2UucmF6b3JwYXlfcGF5bWVudF9pZCwgdG90YWxBbW91bnQgOiB0aGF0LnN0YXRlLnRvdGFsQW1vdW50LCBkYXRlIDogbW9tZW50KG5ldyBEYXRlKCkpLmZvcm1hdCgnREQgTU1NIFlZWVknKSAsIGVtYWlsIDp0aGF0LnN0YXRlLmVtYWlsLCBtb2JpbGUgOiB0aGF0LnN0YXRlLm1vYmlsZSB9KVxyXG4vLyAgICAgICAgICAgICAgICAgLy9sZXQgUGF5bWVudFVybCA9IGBodHRwOi8vMTU5LjY1LjE1My41OS9zaXRlLyMvcGF5bWVudC1zdWNjZXNzL2ArdGhpcy5wcm9wcy5ib29raW5nRGF0YS5ib29raW5nSWQ7XHJcbi8vICAgICAgICAgICAgICAgICBjb25zdCBwYXltZW50SWQgPSByZXNwb25zZS5yYXpvcnBheV9wYXltZW50X2lkO1xyXG4vL1xyXG4vLyAgICAgICAgICAgICAgICAgbGV0IFBheW1lbnRVcmwgPSBgaHR0cHM6Ly91dGhkZXYubmV2ZXJiZWZvcmVob2xpZGF5cy5jb20vcGF5bWVudC1zdWNjZXNzP3JwX2lkPWArcGF5bWVudElkK2AmcmFtdD1gK3RoYXQuc3RhdGUudG90YWxBbW91bnQrYCZtb2JpbGU9YCt0aGF0LnN0YXRlLm1vYmlsZStgJmVtYWlsPWArdGhhdC5zdGF0ZS5lbWFpbCtgJm1ldGhvZD1DYXJkIHBheW1lbnQmZGF0ZT1gK21vbWVudCh0aGF0LnN0YXRlLnRvZGF5KS5mb3JtYXQoJ0REIE1NTSwgWVlZWScpO1xyXG4vLyAgICAgICAgICAgICAgICAgbGV0IHBhcmFtcyA9IHtcclxuLy8gICAgICAgICAgICAgICAgICAgICBcIl9pZFwiOiBwYXltZW50SWQsXHJcbi8vICAgICAgICAgICAgICAgICAgICAgXCJyZWZlcmVuY2VcIjogJ1VUSCcsXHJcbi8vICAgICAgICAgICAgICAgICAgICAgXCJkaXNjb3VudFwiOiB0aGF0LnN0YXRlLmRpc2NvdW50LFxyXG4vLyAgICAgICAgICAgICAgICAgICAgIFwiZ3N0XCI6IHRoYXQuc3RhdGUuZ3N0LFxyXG4vLyAgICAgICAgICAgICAgICAgICAgIFwiZGVzY1wiOiAnJyxcclxuLy8gICAgICAgICAgICAgICAgICAgICBcInByaW5jaXBhbFwiOiB0aGF0LnN0YXRlLnByaW5jaXBsZUFtb3VudCxcclxuLy8gICAgICAgICAgICAgICAgICAgICBcInBheW1lbnR1cmxcIjogUGF5bWVudFVybCxcclxuLy8gICAgICAgICAgICAgICAgICAgICBcInByb2RcIjogZmFsc2VcclxuLy8gICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgICAgIC8vdGhhdC5wcm9wcy5jb25maXJtQm9va2luZyhwYXJhbXMpO1xyXG4vLyAgICAgICAgICAgICAgICAgbGV0IGJvb2tQYXJhbXMgPSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgYm9va2luZ0lkOiB0aGF0LnByb3BzLmJvb2tpbmdEYXRhLmJvb2tpbmdJZFxyXG4vLyAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAgICAgdGhhdC5wcm9wcy5jb25maXJtQm9va2luZyhib29rUGFyYW1zKTtcclxuLy8gICAgICAgICAgICAgfSxcclxuLy8gICAgICAgICAgICAgcHJlZmlsbDoge1xyXG4vLyAgICAgICAgICAgICAgICAgbmFtZTogJ1VUSCcsXHJcbi8vICAgICAgICAgICAgICAgICBjb250YWN0OiAnJyxcclxuLy8gICAgICAgICAgICAgICAgIGVtYWlsOiAnJ1xyXG4vLyAgICAgICAgICAgICB9LFxyXG4vLyAgICAgICAgICAgICBub3Rlczoge1xyXG4vLyAgICAgICAgICAgICAgICAgYWRkcmVzczogJ1VUSCdcclxuLy8gICAgICAgICAgICAgfSxcclxuLy8gICAgICAgICAgICAgdGhlbWU6IHtcclxuLy8gICAgICAgICAgICAgICAgIGNvbG9yOiAnIzNmYTlmNScsXHJcbi8vICAgICAgICAgICAgICAgICBoaWRlX3RvcGJhcjogZmFsc2VcclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgIH07XHJcbi8vICAgICAgICAgLy9jb25zb2xlLmxvZyhvcHRpb25zKTtcclxuLy8gICAgICAgICB2YXIgcnpwMSA9IG5ldyB3aW5kb3cuUmF6b3JwYXkob3B0aW9ucyk7XHJcbi8vICAgICAgICAgcnpwMS5vbigncGF5bWVudC5mYWlsZWQnLCBmdW5jdGlvbiAocmVzcG9uc2Upe1xyXG4vLyAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXNwb25zZS5lcnJvci5kZXNjcmlwdGlvbik7XHJcbi8vICAgICAgICAgfSk7XHJcbi8vICAgICAgICAgcnpwMS5vcGVuKCk7XHJcbi8vICAgICB9XHJcbi8vXHJcbi8vICAgICBoaWRlRXJyb3IgPSAoKSA9PiB7XHJcbi8vICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbi8vICAgICAgICAgICAgIHNob3dFcnJvciA6IGZhbHNlXHJcbi8vICAgICAgICAgfSlcclxuLy8gICAgIH1cclxuLy9cclxuLy8gICAgIGhpZGVJdGVtUmVtb3ZhbE1lc3NhZ2UgPSAoKSA9PiB7XHJcbi8vICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbi8vICAgICAgICAgICAgIGl0ZW1SZW1vdmFsTWVzc2FnZSA6IGZhbHNlLFxyXG4vLyAgICAgICAgIH0pXHJcbi8vICAgICB9XHJcbi8vXHJcbi8vICAgICBlbXB0eUNhcnQgPSAoKSA9PiB7XHJcbi8vICAgICAgICAgbGV0IHNlbGVjdGVkUm9vbXMgPSB0aGlzLnN0YXRlLnNlbGVjdGVkUm9vbXM7XHJcbi8vXHJcbi8vICAgICAgICAgc2VsZWN0ZWRSb29tcyA9IHNlbGVjdGVkUm9vbXMubWFwKGl0ZW0gPT4ge1xyXG4vLyAgICAgICAgICAgICBpdGVtLnF0eSA9IDA7XHJcbi8vICAgICAgICAgICAgIHJldHVybiBpdGVtO1xyXG4vLyAgICAgICAgIH0pXHJcbi8vXHJcbi8vXHJcbi8vICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbi8vICAgICAgICAgICAgIGl0ZW1SZW1vdmFsTWVzc2FnZSA6IGZhbHNlLFxyXG4vLyAgICAgICAgICAgICBzZWxlY3RlZFJvb21zIDogW10sXHJcbi8vICAgICAgICAgICAgIHNlbGVjdGVkUm9vbUlkcyA6IFtdLFxyXG4vLyAgICAgICAgICAgICBzZWFyY2hTdGVwIDogMVxyXG4vLyAgICAgICAgIH0pXHJcbi8vICAgICB9XHJcbi8vICAgICBoaWRlQ2Fubm90Q29udGludWUgPSAoKSA9PiB7XHJcbi8vICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbi8vICAgICAgICAgICAgIGNhbm5vdENvbnRpbnVlIDogZmFsc2VcclxuLy8gICAgICAgICB9KVxyXG4vLyAgICAgfVxyXG4vL1xyXG4vLyAgICAgc2hvd0Z1bGxEZXRhaWwgPSAoaWQpID0+IHtcclxuLy8gICAgICAgICBsZXQgaG90ZWxfcm9vbXMgPSB0aGlzLnN0YXRlLmhvdGVsX3Jvb21zO1xyXG4vLyAgICAgICAgIGxldCByb29tTGlzdCA9ICBob3RlbF9yb29tcy5maWx0ZXIoaXRlbSA9PiBpdGVtLnJvb21pZCA9PT0gaWQpO1xyXG4vLyAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4vLyAgICAgICAgICAgICBzaG93RGV0YWlsU3RhdHVzIDogdHJ1ZSxcclxuLy8gICAgICAgICAgICAgcm9vbUlkIDogaWQsXHJcbi8vICAgICAgICAgICAgIHJvb21EZXRhaWwgOiByb29tTGlzdC5sZW5ndGggPiAwICYmIHJvb21MaXN0WzBdXHJcbi8vICAgICAgICAgfSlcclxuLy8gICAgIH1cclxuLy9cclxuLy8gICAgIGhpZGVGdWxsRGV0YWlsID0gKCkgPT4ge1xyXG4vLyAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4vLyAgICAgICAgICAgICBzaG93RGV0YWlsU3RhdHVzIDogZmFsc2VcclxuLy8gICAgICAgICB9KVxyXG4vLyAgICAgfVxyXG4vL1xyXG4vLyAgICAgc2hvd1NwZWNpYWxSZXF1ZXN0cyA9ICgpID0+IHtcclxuLy8gICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuLy8gICAgICAgICAgICAgc2hvd1NwUmVxU3RhdCA6IHRydWVcclxuLy8gICAgICAgICB9KVxyXG4vLyAgICAgfVxyXG4vLyAgICAgaGlkZVNwZWNpYWxSZXF1ZXN0cyA9ICgpID0+IHtcclxuLy8gICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuLy8gICAgICAgICAgICAgc2hvd1NwUmVxU3RhdCA6IGZhbHNlXHJcbi8vICAgICAgICAgfSlcclxuLy8gICAgIH1cclxuLy9cclxuLy8gICAgIGhhbmRsZVNwU2VsZWN0aW9uID0gKGUsIHNwKSA9PiB7XHJcbi8vICAgICAgICAgbGV0IHNlbGVjdGVkU3BSZXFJZHMgPSBbLi4udGhpcy5zdGF0ZS5zZWxlY3RlZFNwUmVxSWRzXTtcclxuLy8gICAgICAgICBsZXQgc2VsZWN0ZWRTcFJlcXMgPSBbLi4udGhpcy5zdGF0ZS5zZWxlY3RlZFNwUmVxc107XHJcbi8vXHJcbi8vICAgICAgICAgaWYoZS50YXJnZXQuY2hlY2tlZCkge1xyXG4vLyAgICAgICAgICAgICBzZWxlY3RlZFNwUmVxSWRzLnB1c2goc3Auc3BfaWQpXHJcbi8vICAgICAgICAgICAgIHNlbGVjdGVkU3BSZXFzLnB1c2goc3ApXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICAgIGVsc2Uge1xyXG4vLyAgICAgICAgICAgICBsZXQgaW5kZXggPSBzZWxlY3RlZFNwUmVxSWRzLmluZGV4T2Yoc3Auc3BfaWQpO1xyXG4vLyAgICAgICAgICAgICBzZWxlY3RlZFNwUmVxSWRzLnNwbGljZShpbmRleCwgMSk7XHJcbi8vICAgICAgICAgICAgIHNlbGVjdGVkU3BSZXFzLnNwbGljZShpbmRleCwgMSk7XHJcbi8vXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4vLyAgICAgICAgICAgICBzZWxlY3RlZFNwUmVxcyA6IHNlbGVjdGVkU3BSZXFzLFxyXG4vLyAgICAgICAgICAgICBzZWxlY3RlZFNwUmVxSWRzIDogc2VsZWN0ZWRTcFJlcUlkc1xyXG4vLyAgICAgICAgIH0pXHJcbi8vICAgICB9XHJcbi8vXHJcbi8vICAgICByZW1vdmVTcCA9IChlLCBzcF9pZCkgPT4ge1xyXG4vLyAgICAgICAgIGxldCBzZWxlY3RlZFNwUmVxSWRzID0gWy4uLnRoaXMuc3RhdGUuc2VsZWN0ZWRTcFJlcUlkc107XHJcbi8vICAgICAgICAgbGV0IHNlbGVjdGVkU3BSZXFzID0gWy4uLnRoaXMuc3RhdGUuc2VsZWN0ZWRTcFJlcXNdO1xyXG4vLyAgICAgICAgIGxldCBpbmRleCA9IHNlbGVjdGVkU3BSZXFJZHMuaW5kZXhPZihzcF9pZCk7XHJcbi8vICAgICAgICAgc2VsZWN0ZWRTcFJlcUlkcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4vLyAgICAgICAgIHNlbGVjdGVkU3BSZXFzLnNwbGljZShpbmRleCwgMSk7XHJcbi8vICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbi8vICAgICAgICAgICAgIHNlbGVjdGVkU3BSZXFzIDogc2VsZWN0ZWRTcFJlcXMsXHJcbi8vICAgICAgICAgICAgIHNlbGVjdGVkU3BSZXFJZHMgOiBzZWxlY3RlZFNwUmVxSWRzXHJcbi8vICAgICAgICAgfSlcclxuLy9cclxuLy8gICAgIH1cclxuLy9cclxuLy8gICAgIGhpZGVQZW5kaW5nTWVzc2FnZSA9ICgpID0+IHtcclxuLy8gICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuLy8gICAgICAgICAgICAgc2hvd1BlbmRpbmdNZXNzYWdlIDogZmFsc2VcclxuLy8gICAgICAgICB9KVxyXG4vLyAgICAgfVxyXG4vL1xyXG4vLyAgICAgdG9nZ2xlQ29udGVudCA9ICgpID0+IHtcclxuLy8gICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuLy8gICAgICAgICAgICAgZXhwYW5kQ29udGVudCA6ICF0aGlzLnN0YXRlLmV4cGFuZENvbnRlbnRcclxuLy8gICAgICAgICB9KVxyXG4vLyAgICAgfVxyXG4vLyAgICAgcmVuZGVyKCkge1xyXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMuaG90ZWxEZXRhaWwpXHJcbi8vICAgICAgICAgLy9sZXQgaG90ZWxEZXRhaWwgPSB0aGlzLnByb3BzLmhvdGVsRGV0YWlsO1xyXG4vLyAgICAgICAgIGxldCBob3RlbERldGFpbCA9IHRoaXMuc3RhdGUuaG90ZWxEZXRhaWw7XHJcbi8vICAgICAgICAgbGV0IGJhbm5lckltYWdlcyA9IHRoaXMuc3RhdGUuYmFubmVySW1hZ2VzIHx8IFtdO1xyXG4vL1xyXG4vL1xyXG4vLyAgICAgICAgIGxldCBnYWxsZXJ5SW1hZ2VzID0gdGhpcy5zdGF0ZS5nYWxsZXJ5SW1hZ2VzIHx8IFtdO1xyXG4vLyAgICAgICAgIGxldCBzdGFydERhdGUgPSB0aGlzLnN0YXRlLnN0YXJ0RGF0ZTtcclxuLy8gICAgICAgICBsZXQgZW5kRGF0ZSA9IHRoaXMuc3RhdGUuZW5kRGF0ZTtcclxuLy9cclxuLy8gICAgICAgICBsZXQgaG90ZWxfcm9vbXMgPSB0aGlzLnN0YXRlLmhvdGVsX3Jvb21zO1xyXG4vLyAgICAgICAgIGxldCBnZW5lcmFsX2ZhY2lsaXRpZXMgPSAgaG90ZWxEZXRhaWwgPyBob3RlbERldGFpbC5ob3RlbF9mYWNpbGl0aWVzIDogW107XHJcbi8vICAgICAgICAgbGV0IGhvdGVsZmFjaWxpdGllcyA9IGhvdGVsRGV0YWlsID8gaG90ZWxEZXRhaWwuaG90ZWxmYWNpbGl0aWVzIDogW107XHJcbi8vICAgICAgICAgbGV0IHJvb21UeXBlcyA9IHRoaXMuc3RhdGUucm9vbVR5cGVzIHx8IFtdO1xyXG4vL1xyXG4vLyAgICAgICAgIGxldCBzZWxlY3RlZFJvb21zID0gdGhpcy5zdGF0ZS5zZWxlY3RlZFJvb21zIHx8IFtdO1xyXG4vLyAgICAgICAgIGxldCBzcFJlcXVlc3RzID0gdGhpcy5zdGF0ZS5zcFJlcXVlc3RzIHx8IFtdO1xyXG4vLyAgICAgICAgIGxldCBzZWxlY3RlZFNwUmVxSWRzID0gdGhpcy5zdGF0ZS5zZWxlY3RlZFNwUmVxSWRzIHx8IFtdO1xyXG4vLyAgICAgICAgIGxldCBzZWxlY3RlZFNwUmVxcyA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRTcFJlcXMgfHwgW107XHJcbi8vXHJcbi8vICAgICAgICAgbGV0IHRvdGFsX2Nvc3QgPTA7XHJcbi8vICAgICAgICAgbGV0IHRvdGFsX2dzdCA9MDtcclxuLy8gICAgICAgICBpZihzZWxlY3RlZFJvb21zLmxlbmd0aCA+IDApIHtcclxuLy8gICAgICAgICAgICAgZm9yKHZhciBpPTA7IGk8c2VsZWN0ZWRSb29tcy5sZW5ndGg7IGkrKykge1xyXG4vLyAgICAgICAgICAgICAgICAgdG90YWxfY29zdCArPSAocGFyc2VGbG9hdChzZWxlY3RlZFJvb21zW2ldLnJvb21fcHJpY2UpICogcGFyc2VJbnQoc2VsZWN0ZWRSb29tc1tpXS5xdHkpKVxyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICAgIGlmKHNlbGVjdGVkU3BSZXFzLmxlbmd0aCA+IDApIHtcclxuLy8gICAgICAgICAgICAgZm9yKHZhciBpPTA7IGk8c2VsZWN0ZWRTcFJlcXMubGVuZ3RoOyBpKyspIHtcclxuLy8gICAgICAgICAgICAgICAgIGlmKHNlbGVjdGVkU3BSZXFzW2ldLmNhdGVnb3J5ID09PSAncGF5YWJsZScpIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICB0b3RhbF9jb3N0ICs9IHBhcnNlRmxvYXQoc2VsZWN0ZWRTcFJlcXNbaV0ucmF0ZSlcclxuLy8gICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgICB0b3RhbF9nc3QgPSAodG90YWxfY29zdCoxMCkvMTAwO1xyXG4vLyAgICAgICAgIGxldCBncmFuZF90b3RhbCA9IHRvdGFsX2Nvc3QrIHRvdGFsX2dzdDtcclxuLy8gICAgICAgICAvL2dyYW5kX3RvdGFsID0gZ3JhbmRfdG90YWw+MD8gZ3JhbmRfdG90YWwudG9GaXhlZCgyKTonJztcclxuLy8gICAgICAgICBsZXQgcmF6b3JHcmFuZFRvdGFsID0gZ3JhbmRfdG90YWwqMTAwO1xyXG4vL1xyXG4vLyAgICAgICAgIGxldCBpbnZhbGlkRmllbGRzID0gdGhpcy5zdGF0ZS5pbnZhbGlkRmllbGRzIHx8IFtdO1xyXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKGludmFsaWRGaWVsZHMpXHJcbi8vXHJcbi8vICAgICAgICAgbGV0IGhvdGVsSGlnaGxpZ2h0cyA9IHRoaXMuc3RhdGUuaG90ZWxIaWdobGlnaHRzIHx8IFtdO1xyXG4vLyAgICAgICAgIGxldCBob3RlbFBvbGljaWVzID0gdGhpcy5zdGF0ZS5ob3RlbFBvbGljaWVzIHx8IFtdO1xyXG4vL1xyXG4vL1xyXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKHNlbGVjdGVkU3BSZXFzKVxyXG4vL1xyXG4vLyAgICAgICAgIHJldHVybiAoXHJcbi8vICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxyXG4vLyAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lci1wYWdlXCI+XHJcbi8vXHJcbi8vICAgICAgICAgICAgICAgICAgICAgPEhvdGVsTmF2YmFyICBzY3JvbGxUb1NlY3Rpb249e3RoaXMuc2Nyb2xsVG9TZWN0aW9ufS8+XHJcbi8vICAgICAgICAgICAgICAgICAgICAge2hvdGVsRGV0YWlsICYmXHJcbi8vICAgICAgICAgICAgICAgICAgICAgPD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZGV0YWlscy1iYW5ubmVyXCI+XHJcbi8vXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcm91c2VsLWNvbnRhaW5lclwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2Fyb3VzZWwtdGV4dFwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1Pntob3RlbERldGFpbC5ob3RlbF9uYW1lfTwvaDU+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsb2NhdGlvblwiPntob3RlbERldGFpbC5hZGRyZXNzfTwvcD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuLy9cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb250ZW50U2xpZGVyIGltYWdlcz17YmFubmVySW1hZ2VzfS8+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuc2VhcmNoU3RlcCAhPT0gMiAmJlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJib29raW5nLWNvbnRhaW5lciBzdGlja3lcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib29raW5nLXBhbmVsXCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9va2luZy1wYW5lbC1sZWZ0XCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvb2tpbmctb3B0aW9uc1wiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0ZS1waWNrZXItcGFuZWxcIj5cclxuLy9cclxuLy9cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERhdGVSYW5nZVBpY2tlclxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnREYXRlPXtzdGFydERhdGV9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmREYXRlPXtlbmREYXRlfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25TdGFydERhdGVDaGFuZ2U9e3RoaXMuc2V0U3RhcnREYXRlfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25FbmREYXRlQ2hhbmdlPXt0aGlzLnNldEVuZERhdGV9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5pbXVtRGF0ZT17bmV3IERhdGUoKX1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbmltdW1MZW5ndGg9ezF9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXQ9J2RkL01NL3l5eXknXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhbGU9e2VuR0J9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoe3N0YXJ0RGF0ZUlucHV0UHJvcHMsIGVuZERhdGVJbnB1dFByb3BzLCBmb2N1c30pID0+IChcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGF0ZS1yYW5nZSc+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsnaW5wdXQnICsgKGZvY3VzID09PSBTVEFSVF9EQVRFID8gJyAtZm9jdXNlZCcgOiAnJyl9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uc3RhcnREYXRlSW5wdXRQcm9wc31cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdTdGFydCBkYXRlJ1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2RhdGUtcmFuZ2VfYXJyb3cnLz5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eydpbnB1dCcgKyAoZm9jdXMgPT09IEVORF9EQVRFID8gJyAtZm9jdXNlZCcgOiAnJyl9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uZW5kRGF0ZUlucHV0UHJvcHN9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nRW5kIGRhdGUnXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0RhdGVSYW5nZVBpY2tlcj5cclxuLy9cclxuLy9cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuLy9cclxuLy9cclxuLy9cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlbGVjdC1wYW5lbFwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlbGVjdC1ib3hcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cInJvb21zXCIgdmFsdWU9e3RoaXMuc3RhdGUucm9vbXN9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtpbnZhbGlkRmllbGRzLmluY2x1ZGVzKCdyb29tcycpID8gJ2Vycm9yLWZpZWxkJyA6ICcnfWB9PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5Sb29tczwvb3B0aW9uPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxXCI+MTwvb3B0aW9uPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyXCI+Mjwvb3B0aW9uPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIzXCI+Mzwvb3B0aW9uPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI0XCI+NDwvb3B0aW9uPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI1XCI+NTwvb3B0aW9uPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI2XCI+Njwvb3B0aW9uPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI3XCI+Nzwvb3B0aW9uPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI4XCI+ODwvb3B0aW9uPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI5XCI+OSs8L29wdGlvbj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWxlY3QtYm94XCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJhZHVsdHNcIiB2YWx1ZT17dGhpcy5zdGF0ZS5hZHVsdHN9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtpbnZhbGlkRmllbGRzLmluY2x1ZGVzKCdhZHVsdHMnKSA/ICdlcnJvci1maWVsZCcgOiAnJ31gfT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+QWR1bHRzPC9vcHRpb24+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjFcIj4xPC9vcHRpb24+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjJcIj4yPC9vcHRpb24+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjNcIj4zPC9vcHRpb24+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjRcIj40PC9vcHRpb24+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjVcIj41PC9vcHRpb24+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjZcIj42PC9vcHRpb24+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjdcIj43PC9vcHRpb24+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjhcIj44PC9vcHRpb24+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjlcIj45Kzwvb3B0aW9uPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlbGVjdC1ib3hcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cImNoaWxkcmVuXCIgdmFsdWU9e3RoaXMuc3RhdGUuY2hpbGRyZW59XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtpbnZhbGlkRmllbGRzLmluY2x1ZGVzKCdjaGlsZHJlbicpID8gJ2Vycm9yLWZpZWxkJyA6ICcnfWB9PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5DaGlsZHJlbjwvb3B0aW9uPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIwXCI+MDwvb3B0aW9uPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxXCI+MTwvb3B0aW9uPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyXCI+Mjwvb3B0aW9uPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIzXCI+Mzwvb3B0aW9uPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI0XCI+NDwvb3B0aW9uPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI1XCI+NTwvb3B0aW9uPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI2XCI+Njwvb3B0aW9uPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI3XCI+Nzwvb3B0aW9uPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI4XCI+ODwvb3B0aW9uPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI5XCI+OSs8L29wdGlvbj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuLy9cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4vL1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuTUFYX0NBUEFDSVRZX01TRyAhPT0gJycgJiZcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXJyb3ItZmxkXCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuTUFYX0NBUEFDSVRZX01TR31cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib29raW5nLXBhbmVsLXJpZ2h0XCI+XHJcbi8vXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvb2tpbmctYnV0dG9uLWJsb2NrXCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJnZW5lcmFsLWJ0blwiIG9uQ2xpY2s9eygpID0+IHRoaXMuc2VhcmNoUm9vbXMoKX0+Qm9vayBOb3c8L2J1dHRvbj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuLy9cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgeyF0aGlzLnN0YXRlLmluaXRTZWFyY2ggJiZcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb29tLXNlY3Rpb24gZmFjaWxpdGllc1wiIGlkPVwiaG90ZWwtb3ZlcnZpZXdcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLWhlYWRlclwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+T3ZlcnZpZXc8L2g1PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi1jb250ZW50XCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJnZW5lcmFsLWluZm9cIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJhZGRyZXNzLXNtLWljb1wiPntob3RlbERldGFpbC5hZGRyZXNzfTwvbGk+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicGhvbmUtc20taWNvXCI+e2hvdGVsRGV0YWlsLnBob25lbm99ICwge2hvdGVsRGV0YWlsLm1vYmlsZW5vfTwvbGk+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgIGNsYXNzTmFtZT1cIm1haWwtc20taWNvXCI+e2hvdGVsRGV0YWlsLmVtYWlsfTwvbGk+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbi8vXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZXh0cmEtY29udGVudCAke3RoaXMuc3RhdGUuZXhwYW5kQ29udGVudCA/ICcgYWN0aXZlJyA6ICcnfWB9PlxyXG4vL1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVydmlldy1kZXNjcmlwdGlvblwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sIDogaG90ZWxEZXRhaWwuaG90ZWxfZGVzY319IC8+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuLy9cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtob3RlbEhpZ2hsaWdodHMubGVuZ3RoID4gMCAmJlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1Yi1oZWFkZXJcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PkhpZ2hsaWdodHM8L2g1PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJoaWdobGlnaHQtdGFiXCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtob3RlbEhpZ2hsaWdodHMubWFwKGhsID0+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+e2hsLmhpZ2hsaWdodHN9PC9saT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbi8vXHJcbi8vXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvbGljeS1ib3hcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3ViLWhlYWRlclwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+SG90ZWwgUG9saWNpZXM8L2g1PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkNoZWNrIEluIFRpbWU6IDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPntob3RlbERldGFpbCA/IGhvdGVsRGV0YWlsLmNoZWNraW4gOiAnJ308L3NwYW4+PC9wPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkNoZWNrIE91dCBUaW1lOiA8c3BhbiBjbGFzc05hbWU9XCJmb250LWJvbGRcIj57aG90ZWxEZXRhaWwgPyBob3RlbERldGFpbC5jaGVja291dCA6ICcnfTwvc3Bhbj48L3A+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuLy9cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtob3RlbFBvbGljaWVzLm1hcChocCA9PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9saWN5LWJveCBpbmRlbnRcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWItaGVhZGVyXCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+e2hwLmNhdGVnb3J5fTwvaDU+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aHAucG9saWN5Lm1hcChwb2wgPT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntwb2wucG9saWN5fTwvcD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbi8vXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4vL1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImNvbnRlbnQtaGlkZVwiIG9uQ2xpY2s9eygpPT4gdGhpcy50b2dnbGVDb250ZW50KCl9PlNob3cge3RoaXMuc3RhdGUuZXhwYW5kQ29udGVudCA/ICdsZXNzJyA6ICdtb3JlJ308L25hdj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4vL1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJyb29tLXNlY3Rpb25cIiBpZD1cImhvdGVsLXJvb21zXCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4vL1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi1oZWFkZXJcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuc2VhcmNoU3RlcCA9PT0gMiA/ICdCb29raW5nIERldGFpbHMnIDogJ1Jvb21zJ31cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oNT5cclxuLy9cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuaW5pdFNlYXJjaCAmJiB0aGlzLnN0YXRlLnNlYXJjaFN0ZXAgPT09IDEgJiZcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ZXh0LWxpbmsgYmFja1wiXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5iYWNrVG9EZXRhaWwoKX0+QmFjazwvYnV0dG9uPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbi8vXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuaW5pdFNlYXJjaCAmJlxyXG4vL1xyXG4vL1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXZhaWxhYmxlLXJvb21zXCI+XHJcbi8vXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnNlYXJjaFN0ZXAgPT09IDEgJiZcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtob3RlbF9yb29tcy5sZW5ndGggPT09IDAgJiZcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibm8tcmVzdWx0XCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbWluZy1zb29uLXdyYXBwZXJcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPk5vIEhvdGVscyBGb3VuZDwvaDE+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlNlYXJjaCBBZ2FpbiBmb3IgcmlnaHQgcGxhY2UuPC9wPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aG90ZWxfcm9vbXMubWFwKHJvb20gPT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um9vbVNlYXJjaEJsb2NrIGl0ZW09e3Jvb219IHNlbGVjdFJvb209e3RoaXMuc2VsZWN0Um9vbX1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkUm9vbXM9e3RoaXMuc3RhdGUuc2VsZWN0ZWRSb29tc31cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkUm9vbUlkcz17dGhpcy5zdGF0ZS5zZWxlY3RlZFJvb21JZHN9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VRdHk9e3RoaXMuY2hhbmdlUXR5fVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0Z1bGxEZXRhaWw9e3RoaXMuc2hvd0Z1bGxEZXRhaWx9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvb20tYm9vay1zdWJtaXRcIj5cclxuLy9cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImdlbmVyYWwtYnRuXCJcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuY29udGludWVUb1N1bW1hcnkoKX0+Q29udGludWVcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4vL1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5zZWFyY2hTdGVwID09PSAyICYmXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1bW1hcnktdGFibGVcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGVcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+Um9vbXM8L3RoPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlF0eTwvdGg+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+UHJpY2U8L3RoPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlRvdGFsIFByaWNlPC90aD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD48L3RoPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZFJvb21zLm1hcChyb29tID0+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3VtbWFyeUl0ZW0gaXRlbT17cm9vbX0gc2VsZWN0Um9vbT17dGhpcy5zZWxlY3RSb29tfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkUm9vbXM9e3RoaXMuc3RhdGUuc2VsZWN0ZWRSb29tc31cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFJvb21JZHM9e3RoaXMuc3RhdGUuc2VsZWN0ZWRSb29tSWRzfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZVF0eT17dGhpcy5jaGFuZ2VRdHl9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4vL1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwic3BlY2lhbC1zZXJ2aWNlXCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY29sc3Bhbj1cIjVcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmF2IG9uQ2xpY2s9eygpID0+IHRoaXMuc2hvd1NwZWNpYWxSZXF1ZXN0cygpfSBjbGFzc05hbWU9XCJmb250LWJvbGRcIj5BZGQgU3BlY2lhbCBSZXF1ZXN0cyArPC9uYXY+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4vL1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2VsZWN0ZWRTcFJlcXMubGVuZ3RoID4wICYmXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkU3BSZXFzLmZpbHRlcihzcCA9PiBzcC5jYXRlZ29yeSA9PT0gJ3BheWFibGUnKS5tYXAoc3AgPT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJzcGVjaWFsLXNlcnZpY2VcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY29sU3Bhbj1cIjNcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3NwLnRpdGxlfTwvc3Bhbj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJmb250LWJvbGRcIj7igrkge3NwLnJhdGV9PC90ZD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZGVsZXRlLWl0ZW1cIiBvbkNsaWNrPXsoZSkgPT4gdGhpcy5yZW1vdmVTcChlLHNwLnNwX2lkKX0+PC9idXR0b24+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZFNwUmVxcy5sZW5ndGggPjAgJiZcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRTcFJlcXMuZmlsdGVyKHNwID0+IHNwLmNhdGVnb3J5ID09PSAnbm9uIHBheWFibGUnKS5tYXAoc3AgPT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJzcGVjaWFsLXNlcnZpY2VcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY29sU3Bhbj1cIjNcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3NwLnRpdGxlfTwvc3Bhbj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJmb250LWJvbGRcIj7igrkgMDwvdGQ+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImRlbGV0ZS1pdGVtXCIgb25DbGljaz17KGUpID0+IHRoaXMucmVtb3ZlU3AoZSxzcC5zcF9pZCl9PjwvYnV0dG9uPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4vL1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbi8vXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjwvdGQ+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+VE9UQUw8L3RkPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPuKCuSB7dG90YWxfY29zdC50b0ZpeGVkKDIpfTwvdGQ+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4vL1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48L3RkPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPkdTVCAxMC4wMCU8L3RkPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPuKCuSB7dG90YWxfZ3N0LnRvRml4ZWQoMil9PC90ZD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48L3RkPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4vL1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbi8vXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjwvdGQ+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+R1JBTkQgVE9UQUw8L3RkPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPuKCuSB7Z3JhbmRfdG90YWwudG9GaXhlZCgyKX08L3RkPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjwvdGQ+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xTcGFuPVwiNVwiPkNoZWNrLWluICYgQ2hlY2stb3V0OiA8c3BhblxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPnttb21lbnQodGhpcy5zdGF0ZS5jaGVja2luZGF0ZSkuZm9ybWF0KCdERCBNTU0gWVlZWScpfSAtIHttb21lbnQodGhpcy5zdGF0ZS5jaGVja291dGRhdGUpLmZvcm1hdCgnREQgTU1NIFlZWVknKX08L3NwYW4+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuLy9cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uLWhlYWRlclwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5QZXJzb25hbCBEZXRhaWxzPC9oNT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4vL1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiZm9ybS1jb250YWluZXJcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWJveFwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5GaXJzdCBOYW1lPC9sYWJlbD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiZmlyc3RuYW1lXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5maXJzdG5hbWV9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGlucHV0LWZpZWxkICR7aW52YWxpZEZpZWxkcy5pbmNsdWRlcygnZmlyc3RuYW1lJykgPyAnZXJyb3ItZmllbGQnIDogJyd9YH0vPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWJveFwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5MYXN0IE5hbWU8L2xhYmVsPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJsYXN0bmFtZVwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubGFzdG5hbWV9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGlucHV0LWZpZWxkICR7aW52YWxpZEZpZWxkcy5pbmNsdWRlcygnbGFzdG5hbWUnKSA/ICdlcnJvci1maWVsZCcgOiAnJ31gfS8+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtYm94XCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkFkZHJlc3MgMTwvbGFiZWw+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImFkZHJlc3MxXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5hZGRyZXNzMX1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgaW5wdXQtZmllbGQgJHtpbnZhbGlkRmllbGRzLmluY2x1ZGVzKCdhZGRyZXNzMScpID8gJ2Vycm9yLWZpZWxkJyA6ICcnfWB9Lz5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ib3hcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+QWRkcmVzcyAyPC9sYWJlbD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiYWRkcmVzczJcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmFkZHJlc3MyfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BpbnB1dC1maWVsZCAke2ludmFsaWRGaWVsZHMuaW5jbHVkZXMoJ2FkZHJlc3MyJykgPyAnZXJyb3ItZmllbGQnIDogJyd9YH0vPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0zXCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWJveFwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5DaXR5PC9sYWJlbD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiY2l0eVwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuY2l0eX1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgaW5wdXQtZmllbGQgJHtpbnZhbGlkRmllbGRzLmluY2x1ZGVzKCdjaXR5JykgPyAnZXJyb3ItZmllbGQnIDogJyd9YH0vPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0zXCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWJveFwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5TdGF0ZTwvbGFiZWw+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInN0YXRlXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5zdGF0ZX1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgaW5wdXQtZmllbGQgJHtpbnZhbGlkRmllbGRzLmluY2x1ZGVzKCdzdGF0ZScpID8gJ2Vycm9yLWZpZWxkJyA6ICcnfWB9Lz5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtM1wiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ib3hcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+Q291bnRyeTwvbGFiZWw+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImNvdW50cnlcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmNvdW50cnl9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGlucHV0LWZpZWxkICR7aW52YWxpZEZpZWxkcy5pbmNsdWRlcygnY291bnRyeScpID8gJ2Vycm9yLWZpZWxkJyA6ICcnfWB9Lz5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtM1wiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ib3hcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+UGluY29kZTwvbGFiZWw+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInBpbmNvZGVcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnBpbmNvZGV9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGlucHV0LWZpZWxkICR7aW52YWxpZEZpZWxkcy5pbmNsdWRlcygncGluY29kZScpID8gJ2Vycm9yLWZpZWxkJyA6ICcnfWB9Lz5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNFwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ib3hcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+TW9iaWxlPC9sYWJlbD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGlucHV0LWZpZWxkICR7aW52YWxpZEZpZWxkcy5pbmNsdWRlcygnbW9iaWxlJykgPyAnZXJyb3ItZmllbGQnIDogJyd9YH1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm1vYmlsZVwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubW9iaWxlfS8+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTRcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtYm94XCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkFkZGl0aW9uYWwgUGhvbmU8L2xhYmVsPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCJcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgaW5wdXQtZmllbGQgJHtpbnZhbGlkRmllbGRzLmluY2x1ZGVzKCdhZGRpdGlvbmFscGhvbmVudW1iZXInKSA/ICdlcnJvci1maWVsZCcgOiAnJ31gfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYWRkaXRpb25hbHBob25lbnVtYmVyXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5hZGRpdGlvbmFscGhvbmVudW1iZXJ9Lz5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNFwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ib3hcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+RW1haWw8L2xhYmVsPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BpbnB1dC1maWVsZCAke2ludmFsaWRGaWVsZHMuaW5jbHVkZXMoJ2VtYWlsJykgPyAnZXJyb3ItZmllbGQnIDogJyd9YH1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5lbWFpbH0vPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4vL1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXltZW50LXdyYXBcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImdlbmVyYWwtYnRuIGdyZXlcIiBvbkNsaWNrPXsoKT0+IHRoaXMuYmFja1RvQ2FydCgpfT5CYWNrPC9idXR0b24+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJnZW5lcmFsLWJ0blwiXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gdGhpcy5zYXZlQm9va2luZyhlLCBncmFuZF90b3RhbCwgdG90YWxfY29zdCwgMC4wMCwgJycsIHRvdGFsX2dzdCl9PkNvbnRpbnVlXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRvIFBheW1lbnRcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4vL1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuLy9cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IXRoaXMuc3RhdGUuaW5pdFNlYXJjaCAmJlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm9vbS1jb250YWluZXJcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2hvdGVsX3Jvb21zLmxlbmd0aCA9PT0gMCAmJlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vLXJlc3VsdFwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+Um9vbXMgd2lsbCBiZSBhZGRlZCBzb29uPC9wPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4vL1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aG90ZWxfcm9vbXMubWFwKHJvb20gPT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb29tQmxvY2sgaXRlbT17cm9vbX0gc2hvd0Z1bGxEZXRhaWw9e3RoaXMuc2hvd0Z1bGxEZXRhaWx9Lz5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuLy9cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4vL1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB7IXRoaXMuc3RhdGUuaW5pdFNlYXJjaCAmJlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4vL1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJjb250ZW50LWFyZWEgdGV4dC1jb250ZW50XCIgaWQ9XCJob3RlbC1mYWNpbGl0aWVzXCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLWhlYWRlclwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PkZhY2lsaXRpZXMgJiBBdHRyYWN0aW9uczwvaDU+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZlYXR1cmUtd3JhcHBlciB0aHJlZS1wZXItY29sIGltYWdlLXRvcFwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyFob3RlbGZhY2lsaXRpZXMgfHwgaG90ZWxmYWNpbGl0aWVzLmxlbmd0aCA9PT0gMCAmJlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PkZhY2lsaXRpZXMgd2lsbCBiZSBhZGRlZCBzb29uLjwvaDU+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbi8vXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aG90ZWxmYWNpbGl0aWVzICYmIGhvdGVsZmFjaWxpdGllcy5sZW5ndGggPiAwICYmXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtob3RlbGZhY2lsaXRpZXMubWFwKChmYWMsIGluZGV4KSA9PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmFjaWxpdHlOZXdCbG9jayBpdGVtPXtmYWN9IGltZ0FsaWduPXtpbmRleCAlIDIgPT09IDEgPyAnbGVmdCcgOiAncmlnaHQnfS8+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInJvb20tc2VjdGlvblwiIGlkPVwiaG90ZWwtZ2FsbGVyeVwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi1oZWFkZXJcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5HYWxsZXJ5PC9oNT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHYWxsZXJ5IGdhbGxlcnlJbWFnZXM9e2dhbGxlcnlJbWFnZXN9IC8+XHJcbi8vXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbi8vXHJcbi8vXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgfVxyXG4vL1xyXG4vL1xyXG4vL1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIDxGb290ZXIgLz5cclxuLy9cclxuLy9cclxuLy9cclxuLy8gICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4vL1xyXG4vLyAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuc2hvd0Vycm9yICYmXHJcbi8vICAgICAgICAgICAgICAgICA8QWxlcnRNb2RhbFxyXG4vLyAgICAgICAgICAgICAgICAgICAgIG1vZGFsSGVhZGVyID0ge2ZhbHNlfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIG1vZGFsRm9vdGVyID0ge3RydWV9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgbW9kYWxUaXRsZSA9IFwiV2FybmluZ1wiXHJcbi8vICAgICAgICAgICAgICAgICAgICAgbW9kYWxCb2R5ID0gXCJQbGVhc2Ugc2VsZWN0IHlvdXIgY2hvaWNlc1wiXHJcbi8vICAgICAgICAgICAgICAgICAgICAgbW9kYWxTdGF0dXM9e3RoaXMuc3RhdGUuc2hvd0Vycm9yfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIE9LQnV0dG9uPXt0cnVlfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIENBTkNFTEJ1dHRvbj17ZmFsc2V9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgT0tBY3Rpb249e3RoaXMuaGlkZUVycm9yfVxyXG4vLyAgICAgICAgICAgICAgICAgLz5cclxuLy8gICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnNob3dQcm9maWxlSW5mb0Vycm9yICYmXHJcbi8vICAgICAgICAgICAgICAgICA8QWxlcnRNb2RhbFxyXG4vLyAgICAgICAgICAgICAgICAgICAgIG1vZGFsSGVhZGVyID0ge2ZhbHNlfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIG1vZGFsRm9vdGVyID0ge3RydWV9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgbW9kYWxUaXRsZSA9IFwiUHJvZmlsZSBEZXRhaWxzXCJcclxuLy8gICAgICAgICAgICAgICAgICAgICBtb2RhbEJvZHkgPSBcIlBsZWFzZSBlbnRlciB5b3VyIHBlcnNvbmFsIGluZm9ybWF0aW9uIHRvIHByb2NlZWRcIlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIG1vZGFsU3RhdHVzPXt0aGlzLnN0YXRlLnNob3dQcm9maWxlSW5mb0Vycm9yfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIE9LQnV0dG9uPXt0cnVlfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIENBTkNFTEJ1dHRvbj17ZmFsc2V9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgT0tBY3Rpb249e3RoaXMuaGlkZVByb2ZpbGVJbmZvRXJyb3J9XHJcbi8vICAgICAgICAgICAgICAgICAvPlxyXG4vLyAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuaXRlbVJlbW92YWxNZXNzYWdlICYmXHJcbi8vICAgICAgICAgICAgICAgICA8QWxlcnRNb2RhbFxyXG4vLyAgICAgICAgICAgICAgICAgICAgIG1vZGFsSGVhZGVyID0ge2ZhbHNlfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIG1vZGFsRm9vdGVyID0ge3RydWV9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgbW9kYWxUaXRsZSA9IFwiV2FybmluZyFcIlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIG1vZGFsQm9keSA9IFwiQXJlIHlvdSBzdXJlIHRvIHJlbW92ZSB0aGlzIHJvb20/IFlvdSB3aWxsIGJlIHJlZGlyZWN0ZWQgdG8gdGhlIHJvb21zIGxpc3QuXCJcclxuLy8gICAgICAgICAgICAgICAgICAgICBtb2RhbFN0YXR1cz17dGhpcy5zdGF0ZS5pdGVtUmVtb3ZhbE1lc3NhZ2V9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgT0tCdXR0b249e3RydWV9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgQ0FOQ0VMQnV0dG9uPXt0cnVlfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIE9LQWN0aW9uPXt0aGlzLmVtcHR5Q2FydH1cclxuLy8gICAgICAgICAgICAgICAgICAgICBDQU5DRUxBY3Rpb249e3RoaXMuaGlkZUl0ZW1SZW1vdmFsTWVzc2FnZX1cclxuLy8gICAgICAgICAgICAgICAgICAgICBPS1RleHQgPSBcIk9LXCJcclxuLy8gICAgICAgICAgICAgICAgICAgICBDQU5DRUxUZXh0ID0gXCJDQU5DRUxcIlxyXG4vLyAgICAgICAgICAgICAgICAgLz5cclxuLy8gICAgICAgICAgICAgICAgIH1cclxuLy9cclxuLy8gICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmNhbm5vdENvbnRpbnVlICYmXHJcbi8vICAgICAgICAgICAgICAgICA8QWxlcnRNb2RhbFxyXG4vLyAgICAgICAgICAgICAgICAgICAgIG1vZGFsSGVhZGVyID0ge2ZhbHNlfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIG1vZGFsRm9vdGVyID0ge3RydWV9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgbW9kYWxUaXRsZSA9IFwiV2FybmluZyFcIlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIG1vZGFsQm9keSA9IHt0aGlzLnN0YXRlLmNhbm5vdENvbnRpbnVlTWVzc2FnZX1cclxuLy8gICAgICAgICAgICAgICAgICAgICBtb2RhbFN0YXR1cz17dGhpcy5zdGF0ZS5jYW5ub3RDb250aW51ZX1cclxuLy8gICAgICAgICAgICAgICAgICAgICBPS0J1dHRvbj17dHJ1ZX1cclxuLy8gICAgICAgICAgICAgICAgICAgICBDQU5DRUxCdXR0b249e2ZhbHNlfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIE9LQWN0aW9uPXt0aGlzLmhpZGVDYW5ub3RDb250aW51ZX1cclxuLy8gICAgICAgICAgICAgICAgIC8+XHJcbi8vICAgICAgICAgICAgICAgICB9XHJcbi8vXHJcbi8vICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5zaG93RGV0YWlsU3RhdHVzICYmXHJcbi8vICAgICAgICAgICAgICAgICA8RnVsbFdpZHRoTW9kYWxcclxuLy8gICAgICAgICAgICAgICAgICAgICBtb2RhbEhlYWRlciA9IHt0cnVlfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIG1vZGFsRm9vdGVyID0ge3RydWV9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgbW9kYWxUaXRsZSA9IHtob3RlbERldGFpbC5ob3RlbF9uYW1lfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIG1vZGFsQm9keSA9IHs8Um9vbURldGFpbCByb29tRGV0YWlsPXt0aGlzLnN0YXRlLnJvb21EZXRhaWx9IGhpZGVGdWxsRGV0YWlsPXt0aGlzLmhpZGVGdWxsRGV0YWlsfSAvPn1cclxuLy8gICAgICAgICAgICAgICAgICAgICBtb2RhbFN0YXR1cz17dGhpcy5zdGF0ZS5zaG93RGV0YWlsU3RhdHVzfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIE9LQnV0dG9uPXt0cnVlfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIENBTkNFTEJ1dHRvbj17ZmFsc2V9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgT0tBY3Rpb249e3RoaXMuaGlkZUZ1bGxEZXRhaWx9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgQ0FOQ0VMQWN0aW9uPXt0aGlzLmhpZGVGdWxsRGV0YWlsfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIE9LVGV4dCA9IFwiT0tcIlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIENBTkNFTFRleHQgPSBcIkNBTkNFTFwiXHJcbi8vICAgICAgICAgICAgICAgICAvPlxyXG4vLyAgICAgICAgICAgICAgICAgfVxyXG4vL1xyXG4vLyAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuc2hvd1NwUmVxU3RhdCAmJlxyXG4vLyAgICAgICAgICAgICAgICAgPEFsZXJ0TW9kYWxcclxuLy8gICAgICAgICAgICAgICAgICAgICBtb2RhbEhlYWRlciA9IHtmYWxzZX1cclxuLy8gICAgICAgICAgICAgICAgICAgICBtb2RhbEZvb3RlciA9IHt0cnVlfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIG1vZGFsVGl0bGUgPSBcIldhcm5pbmchXCJcclxuLy8gICAgICAgICAgICAgICAgICAgICBtb2RhbEJvZHkgPSB7PEhvdGVsU3BSZXFMaXN0IHNwUmVxdWVzdHM9e3NwUmVxdWVzdHN9IHNlbGVjdGVkU3BSZXFJZHM9e3RoaXMuc3RhdGUuc2VsZWN0ZWRTcFJlcUlkc31cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkU3BSZXFzPXt0aGlzLnN0YXRlLnNlbGVjdGVkU3BSZXFzfSBoYW5kbGVTcFNlbGVjdGlvbj17dGhpcy5oYW5kbGVTcFNlbGVjdGlvbn0gLz59XHJcbi8vICAgICAgICAgICAgICAgICAgICAgbW9kYWxTdGF0dXM9e3RoaXMuc3RhdGUuc2hvd1NwUmVxU3RhdH1cclxuLy8gICAgICAgICAgICAgICAgICAgICBPS0J1dHRvbj17dHJ1ZX1cclxuLy8gICAgICAgICAgICAgICAgICAgICBDQU5DRUxCdXR0b249e2ZhbHNlfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIE9LQWN0aW9uPXt0aGlzLmhpZGVTcGVjaWFsUmVxdWVzdHN9XHJcbi8vICAgICAgICAgICAgICAgICAvPlxyXG4vLyAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuc2hvd1BlbmRpbmdNZXNzYWdlICYmXHJcbi8vICAgICAgICAgICAgICAgICA8QWxlcnRNb2RhbFxyXG4vLyAgICAgICAgICAgICAgICAgICAgIG1vZGFsSGVhZGVyID0ge2ZhbHNlfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIG1vZGFsRm9vdGVyID0ge3RydWV9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgbW9kYWxUaXRsZSA9IFwiV2FybmluZyFcIlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIG1vZGFsQm9keSA9IHtcIkJvb2tpbmcgaXMgdGVtcGVyb3JpbHkgdW5hdmFpbGFibGUgZHVlIHRvIENvdmlkLTE5LiBJdCB3aWxsIGJlIGF2YWlsYWJsZSBvbmx5IGZyb20gSnVseSAyMDIxIG9ud2FyZHMuIEZvciBmdXJ0aGVyIGluZm9ybWF0aW9uIHBsZWFzZSBzZW5kIGFuIGVtYWlsIHRvIGJvb2tpbmdAdXRoaG90ZWxzLmNvbSBvciBjYWxsICs5MSA5NzQ2ODM4ODgzLCs5MSA5NTY3MzM4ODg0LlwifVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIG1vZGFsU3RhdHVzPXt0aGlzLnN0YXRlLnNob3dQZW5kaW5nTWVzc2FnZX1cclxuLy8gICAgICAgICAgICAgICAgICAgICBPS0J1dHRvbj17dHJ1ZX1cclxuLy8gICAgICAgICAgICAgICAgICAgICBDQU5DRUxCdXR0b249e2ZhbHNlfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIE9LQWN0aW9uPXt0aGlzLmhpZGVQZW5kaW5nTWVzc2FnZX1cclxuLy8gICAgICAgICAgICAgICAgIC8+XHJcbi8vICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgIDwvZGl2PlxyXG4vL1xyXG4vLyAgICAgICAgICk7XHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xyXG4gICAgaG90ZWxEYXRhOnN0YXRlLkhvdGVsUmVkdWNlci5ob3RlbERhdGEsXHJcbiAgIC8vIGZhY2lsaXR5RGF0YTpzdGF0ZS5Ib3RlbFJlZHVjZXIuZmFjaWxpdHlEYXRhLFxyXG4gICAgYm9va2luZ0RhdGEgOiBzdGF0ZS5Ib3RlbFJlZHVjZXIuYm9va2luZ0RhdGFcclxufSk7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcclxuICAgIG1hcFN0YXRlVG9Qcm9wcyxcclxuICAgIHtcclxuXHJcbiAgICAgICAgc2VhcmNoUm9vbXMgOiBIb3RlbEFjdGlvbnMuc2VhcmNoUm9vbXMsXHJcbiAgICAgICAgc2F2ZUJvb2tpbmcgOiBIb3RlbEFjdGlvbnMuc2F2ZUJvb2tpbmcsXHJcbiAgICAgICAgY29uZmlybUJvb2tpbmcgOiBIb3RlbEFjdGlvbnMuY29uZmlybUJvb2tpbmcsXHJcbiAgICAgICAgZ2V0QmFubmVySW1hZ2VzIDogSG90ZWxBY3Rpb25zLmdldEJhbm5lckltYWdlcyxcclxuICAgICAgICAvL2dldEhvdGVsSGlnaGxpZ2h0cyA6IEhvdGVsQWN0aW9ucy5nZXRIb3RlbEhpZ2hsaWdodHMsXHJcbiAgICAgICAgZ2V0SG90ZWxQb2xpY2llcyA6IEhvdGVsQWN0aW9ucy5nZXRIb3RlbFBvbGljaWVzLFxyXG4gICAgICAgIGdldFNwUmVxdWVzdHMgOiBIb3RlbEFjdGlvbnMuZ2V0U3BSZXF1ZXN0c1xyXG4gICAgfVxyXG4pKEhvdGVsRGV0YWlsU2x1Zyk7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlN1c3BlbnNlIiwibGF6eSIsInVzZVJvdXRlciIsIkZvb3RlciIsIkNvbnRlbnRTbGlkZXIiLCJnZXRVcmxTZWdtZW50IiwiY29ubmVjdCIsIkhvdGVsQWN0aW9ucyIsImVuR0IiLCJEYXRlUmFuZ2VQaWNrZXIiLCJTVEFSVF9EQVRFIiwiRU5EX0RBVEUiLCJSb29tQmxvY2siLCJSb29tRGV0YWlsIiwiUm9vbVNlYXJjaEJsb2NrIiwiRmFjaWxpdHlOZXdCbG9jayIsIlN1bW1hcnlJdGVtIiwiQWxlcnRNb2RhbCIsIm1vbWVudCIsIkZ1bGxXaWR0aE1vZGFsIiwiSG90ZWxOYXZiYXIiLCJIb3RlbFNwUmVxTGlzdCIsIkdhbGxlcnkiLCJJTUFHRV9QQVRIIiwiQVBJIiwiSG90ZWxEZXRhaWxTbHVnIiwiaG90ZWxEZXRhaWwiLCJnYWxsZXJ5SW1hZ2VzIiwiaG90ZWxfcm9vbXMiLCJyb3V0ZXIiLCJob3RlbF91cmwiLCJxdWVyeSIsImNvbnNvbGUiLCJsb2ciLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsImhvdGVsRGF0YSIsIkhvdGVsUmVkdWNlciIsImJvb2tpbmdEYXRhIiwic2VhcmNoUm9vbXMiLCJzYXZlQm9va2luZyIsImNvbmZpcm1Cb29raW5nIiwiZ2V0QmFubmVySW1hZ2VzIiwiZ2V0SG90ZWxQb2xpY2llcyIsImdldFNwUmVxdWVzdHMiXSwic291cmNlUm9vdCI6IiJ9