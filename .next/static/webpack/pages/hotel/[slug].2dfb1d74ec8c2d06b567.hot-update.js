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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaG90ZWwvW3NsdWddLjJkZmIxZDc0ZWM4YzJkMDZiNTY3LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTTBCLEdBQUcsR0FBRyx3RkFBWixFQUNBOztBQThFQSxJQUFNQyxlQUFlLEdBQUUsU0FBakJBLGVBQWlCLE9BQWdEO0FBQUE7O0FBQUEsTUFBOUNDLFdBQThDLFFBQTlDQSxXQUE4QztBQUFBLE1BQWpDQyxhQUFpQyxRQUFqQ0EsYUFBaUM7QUFBQSxNQUFsQkMsV0FBa0IsUUFBbEJBLFdBQWtCO0FBRW5FLE1BQU1DLE1BQU0sR0FBRzNCLHNEQUFTLEVBQXhCO0FBQ0EsTUFBUTRCLFNBQVIsR0FBc0JELE1BQU0sQ0FBQ0UsS0FBN0IsQ0FBUUQsU0FBUjtBQUNBRSxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWVAsV0FBWjtBQUNBTSxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWU4sYUFBWjtBQUNBSyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUwsV0FBWjtBQUVBLHNCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREosQ0FJSztBQUNBO0FBTEw7QUFPSCxDQWZELEVBaUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0dBcnpDTUg7VUFFYXZCOzs7S0FGYnVCOztBQXd6Q04sSUFBTVMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFBQyxLQUFLO0FBQUEsU0FBSztBQUM5QkMsSUFBQUEsU0FBUyxFQUFDRCxLQUFLLENBQUNFLFlBQU4sQ0FBbUJELFNBREM7QUFFL0I7QUFDQ0UsSUFBQUEsV0FBVyxFQUFHSCxLQUFLLENBQUNFLFlBQU4sQ0FBbUJDO0FBSEgsR0FBTDtBQUFBLENBQTdCOzs7QUFPQSwrREFBZWhDLG9EQUFPLENBQ2xCNEIsZUFEa0IsRUFFbEI7QUFFSUssRUFBQUEsV0FBVyxFQUFHaEMsdURBRmxCO0FBR0lpQyxFQUFBQSxXQUFXLEVBQUdqQyx1REFIbEI7QUFJSWtDLEVBQUFBLGNBQWMsRUFBR2xDLDBEQUpyQjtBQUtJbUMsRUFBQUEsZUFBZSxFQUFHbkMsMkRBTHRCO0FBTUk7QUFDQW9DLEVBQUFBLGdCQUFnQixFQUFHcEMsNERBUHZCO0FBUUlxQyxFQUFBQSxhQUFhLEVBQUdyQyx5REFBMEJxQztBQVI5QyxDQUZrQixDQUFQLENBWWJuQixlQVphLENBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaG90ZWwvW3NsdWddLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsU3VzcGVuc2UsIGxhenkgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi8uLi92aWV3cy9Gb290ZXJcIjtcclxuaW1wb3J0IENvbnRlbnRTbGlkZXIgZnJvbSBcIi4uLy4uL3ZpZXdzL2NvbW1vbi9ob3RlbFNsaWRlclwiO1xyXG5pbXBvcnQge2dldFVybFNlZ21lbnR9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvQ3VzdG9tRnVuY3Rpb25zXCI7XHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCAqIGFzIEhvdGVsQWN0aW9ucyBmcm9tIFwiLi4vLi4vYWN0aW9ucy9ob3RlbFwiO1xyXG5pbXBvcnQgeyBlbkdCIH0gZnJvbSAnZGF0ZS1mbnMvbG9jYWxlJ1xyXG5pbXBvcnQgeyBEYXRlUmFuZ2VQaWNrZXIsIFNUQVJUX0RBVEUsIEVORF9EQVRFIH0gZnJvbSAncmVhY3QtbmljZS1kYXRlcydcclxuaW1wb3J0ICdyZWFjdC1uaWNlLWRhdGVzL2J1aWxkL3N0eWxlLmNzcydcclxuaW1wb3J0IFJvb21CbG9jayBmcm9tIFwiLi4vLi4vdmlld3MvUm9vbUJsb2NrXCI7XHJcbmltcG9ydCBSb29tRGV0YWlsIGZyb20gXCIuLi8uLi92aWV3cy9Sb29tRGV0YWlsXCI7XHJcbmltcG9ydCBSb29tU2VhcmNoQmxvY2sgZnJvbSBcIi4uLy4uL3ZpZXdzL1Jvb21TZWFyY2hCbG9ja1wiO1xyXG5pbXBvcnQgRmFjaWxpdHlOZXdCbG9jayBmcm9tIFwiLi4vLi4vdmlld3MvRmFjaWxpdHlOZXdCbG9ja1wiO1xyXG5pbXBvcnQgU3VtbWFyeUl0ZW0gZnJvbSBcIi4uLy4uL3ZpZXdzL1N1bW1hcnlJdGVtXCI7XHJcbmltcG9ydCBBbGVydE1vZGFsIGZyb20gXCIuLi8uLi92aWV3cy9jb21tb24vQWxlcnRNb2RhbFwiO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCBGdWxsV2lkdGhNb2RhbCBmcm9tIFwiLi4vLi4vdmlld3MvY29tbW9uL0Z1bGxXaWR0aE1vZGFsXCI7XHJcbmltcG9ydCBIb3RlbE5hdmJhciBmcm9tIFwiLi4vLi4vdmlld3MvSG90ZWxOYXZiYXJcIjtcclxuaW1wb3J0IEhvdGVsU3BSZXFMaXN0IGZyb20gXCIuLi8uLi92aWV3cy9Ib3RlbFNwUmVxTGlzdFwiO1xyXG5pbXBvcnQgR2FsbGVyeSBmcm9tIFwiLi4vLi4vdmlld3MvY29tbW9uL0dhbGxlcnlcIjtcclxuaW1wb3J0IHtJTUFHRV9QQVRILCBBUElfUEFUSH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xyXG5jb25zdCBBUEkgPSAnaHR0cHM6Ly9yenBfdGVzdF9ybkVINUk0Tkh1YUdKeDpTUG1xNnFLUUVMeHhMbFlUblA3WTVkeWpAYXBpLnJhem9ycGF5LmNvbS92MS9wYXltZW50cy8nO1xyXG4vL1RoaXMgZ2V0cyBjYWxsZWQgZXZlcnkgdGltZSB0aGUgcGFnZSBpcyBjYWxsZWRcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XHJcbiAgICBjb25zdCB7cGFyYW1zfSA9IGNvbnRleHQ7XHJcbiAgICBjb25zdCB7aG90ZWxfdXJsfSA9IHBhcmFtcztcclxuICAgIC8vaG90ZWwgZGV0YWlsXHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke0FQSV9QQVRIfWhvdGVsL2hvdGVsZGV0YWlsc3YyP3VybD0ke2hvdGVsX3VybH1gKTtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIGxldCBob3RlbERldGFpbCA9IHJlcy5yZXN1bHRzID8gcmVzLnJlc3VsdHMuZGF0YTogW107XHJcbiAgICBjb25zb2xlLmxvZyhob3RlbERldGFpbClcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIGhvdGVsRGV0YWlsOiBbaG90ZWxEZXRhaWxdXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vUm9vbSBUeXBlc1xyXG4gICAgY29uc3QgcmVzcG9uc2UyID0gYXdhaXQgZmV0Y2goYCR7QVBJX1BBVEh9aG90ZWwvcm9vbXR5cGVgKTtcclxuICAgIGNvbnN0IHJlczIgPSBhd2FpdCByZXNwb25zZTIuanNvbigpO1xyXG4gICAgbGV0IHJvb21UeXBlcyA9IHJlczIucmVzdWx0cyA/IHJlczIucmVzdWx0cy5kYXRhOiBbXTtcclxuICAgIGxldCBiYW5uZXJJbWFnZXMgPSBbXTtcclxuICAgIGxldCBob3RlbF9yb29tcyA9IFtdO1xyXG4gICAgbGV0IGdhbGxlcnlJbWFnZXMgPVtdO1xyXG4gICAgbGV0IGhvdGVsX2lkID0gJydcclxuICAgIGlmKGhvdGVsRGV0YWlsKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coaG90ZWxEZXRhaWwpXHJcbiAgICAgICAgaG90ZWxfaWQgPSBob3RlbERldGFpbC5ob3RlbF9pZDtcclxuICAgICAgICBjb25zb2xlLmxvZyhob3RlbF9pZClcclxuICAgICAgICBsZXQgcGFyYW1zID0ge2hvdGVsX2lkIDogaG90ZWxfaWR9O1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlMyA9IGF3YWl0IGZldGNoKGAke0FQSV9QQVRIfWhvdGVsL2hvdGVsYmFubmVyaW1hZ2VzYCk7XHJcbiAgICAgICAgY29uc3QgcmVzMyA9IGF3YWl0IHJlc3BvbnNlMy5qc29uKCk7XHJcbiAgICAgICAgYmFubmVySW1hZ2VzID0gcmVzMy5yZXN1bHRzID8gcmVzMy5yZXN1bHRzLmRhdGE6IFtdO1xyXG5cclxuICAgICAgICBob3RlbF9yb29tcyA9IGhvdGVsRGV0YWlsLmhvdGVsX3Jvb21zIHx8IFtdO1xyXG4gICAgICAgIGhvdGVsX3Jvb21zID0gaG90ZWxfcm9vbXMubWFwKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBpdGVtLnF0eSA9IDBcclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZ2FsbGVyeUltYWdlcyA9IGhvdGVsRGV0YWlsLmhvdGVsX2ltYWdlcyB8fCBbXTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcHJvcHMgOiB7XHJcbiAgICAgICAgICAgICAgICBob3RlbERldGFpbCA6IFtob3RlbERldGFpbF0sXHJcbiAgICAgICAgICAgICAgICBob3RlbF9yb29tcyA6IGhvdGVsX3Jvb21zLFxyXG4gICAgICAgICAgICAgICAgZ2FsbGVyeUltYWdlcyA6IGdhbGxlcnlJbWFnZXMsXHJcbiAgICAgICAgICAgICAgIC8vIE1BWF9DQVBBQ0lUWV9HRU5FUkFMIDogaG90ZWxEZXRhaWwubWF4X29jY3VwYW5jeSxcclxuICAgICAgICAgICAgICAgIC8vaG90ZWxIaWdobGlnaHRzIDogaG90ZWxEZXRhaWwuaG90ZWxoaWdobGlnaHRzLFxyXG4gICAgICAgICAgICAgICAgLy9ob3RlbFBvbGljaWVzIDogaG90ZWxEZXRhaWwuaG90ZWxwb2xpY2llcyxcclxuICAgICAgICAgICAgICAgIC8vc3BSZXF1ZXN0cyA6IGhvdGVsRGV0YWlsLnNwZWNpYWxyZXF1ZXN0XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy90aGlzLnByb3BzLmdldEJhbm5lckltYWdlcyhwYXJhbXMpO1xyXG4gICAgLy8gbGV0IGhvdGVsX3Jvb21zID0gdGhpcy5wcm9wcy5ob3RlbERldGFpbC5ob3RlbF9yb29tcyB8fCBbXTtcclxuICAgIC8vIGhvdGVsX3Jvb21zID0gaG90ZWxfcm9vbXMubWFwKGl0ZW0gPT4ge1xyXG4gICAgLy8gICAgIGl0ZW0ucXR5ID0gMFxyXG4gICAgLy8gICAgIHJldHVybiBpdGVtO1xyXG4gICAgLy8gfSk7XHJcbiAgICAvLyBsZXQgZ2FsbGVyeUltYWdlcyA9IHRoaXMucHJvcHMuaG90ZWxEZXRhaWwuaG90ZWxfaW1hZ2VzIHx8IFtdO1xyXG4gICAgLy8gdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAvLyAgICAgaG90ZWxfaWQgOiBob3RlbF9pZCxcclxuICAgIC8vICAgICBob3RlbERldGFpbCA6IGhvdGVsRGV0YWlsLFxyXG4gICAgLy8gICAgIGhvdGVsX3Jvb21zIDogaG90ZWxfcm9vbXMsXHJcbiAgICAvLyAgICAgZ2FsbGVyeUltYWdlcyA6IGdhbGxlcnlJbWFnZXMsXHJcbiAgICAvLyAgICAgTUFYX0NBUEFDSVRZX0dFTkVSQUwgOiBob3RlbERldGFpbC5tYXhfb2NjdXBhbmN5LFxyXG4gICAgLy8gICAgIGhvdGVsSGlnaGxpZ2h0cyA6IGhvdGVsRGV0YWlsLmhvdGVsaGlnaGxpZ2h0cyxcclxuICAgIC8vICAgICBob3RlbFBvbGljaWVzIDogaG90ZWxEZXRhaWwuaG90ZWxwb2xpY2llcyxcclxuICAgIC8vICAgICBzcFJlcXVlc3RzIDogaG90ZWxEZXRhaWwuc3BlY2lhbHJlcXVlc3RcclxuICAgIC8vIH0sIGZ1bmN0aW9uKCkge1xyXG4gICAgLy9cclxuICAgIC8vIH0pXHJcblxyXG5cclxufVxyXG5cclxuXHJcblxyXG5jb25zdCBIb3RlbERldGFpbFNsdWcgPSh7aG90ZWxEZXRhaWwsIGdhbGxlcnlJbWFnZXMsIGhvdGVsX3Jvb21zIH0pID0+IHtcclxuXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gICAgY29uc3QgeyBob3RlbF91cmwgfSA9IHJvdXRlci5xdWVyeTtcclxuICAgIGNvbnNvbGUubG9nKGhvdGVsRGV0YWlsKVxyXG4gICAgY29uc29sZS5sb2coZ2FsbGVyeUltYWdlcylcclxuICAgIGNvbnNvbGUubG9nKGhvdGVsX3Jvb21zKVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICBza2Rmc2tmc2RmZGpzZlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAvLyA8SG90ZWxEZXRhaWwgaG90ZWxEZXRhaWw9e2hvdGVsRGV0YWlsWzBdfSBob3RlbF91cmw9e2hvdGVsX3VybH1cclxuICAgICAgICAgLy8gICAgICAgICAgICAgIGdhbGxlcnlJbWFnZXM9e2dhbGxlcnlJbWFnZXN9IGhvdGVsX3Jvb21zPXtob3RlbF9yb29tc30vPlxyXG4gICAgKVxyXG59XHJcblxyXG4vLyBjbGFzcyBIb3RlbERldGFpbCBleHRlbmRzIENvbXBvbmVudCB7XHJcbi8vICAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4vLyAgICAgICAgIHN1cGVyKHByb3BzKTtcclxuLy8gICAgICAgICBsZXQgdG9kYXkgPSBuZXcgRGF0ZSgpO1xyXG4vLyAgICAgICAgIGxldCB0b21vcnJvdyA9IG5ldyBEYXRlKHRvZGF5KTtcclxuLy8gICAgICAgICB0b21vcnJvdy5zZXREYXRlKHRvbW9ycm93LmdldERhdGUoKSArIDEpO1xyXG4vLyAgICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbi8vICAgICAgICAgICAgIHRvZGF5IDogdG9kYXksXHJcbi8vICAgICAgICAgICAgIHRvbW9ycm93IDogdG9tb3Jyb3csXHJcbi8vICAgICAgICAgICAgIHN0YXJ0RGF0ZSA6IHRvZGF5LFxyXG4vLyAgICAgICAgICAgICBlbmREYXRlIDogdG9tb3Jyb3csXHJcbi8vICAgICAgICAgICAgIGNoZWNraW5kYXRlIDogdG9kYXksXHJcbi8vICAgICAgICAgICAgIGNoZWNrb3V0ZGF0ZSA6IHRvbW9ycm93LFxyXG4vLyAgICAgICAgICAgICByb29tcyA6ICcnLFxyXG4vLyAgICAgICAgICAgICBhZHVsdHMgOiAnJyxcclxuLy8gICAgICAgICAgICAgY2hpbGRyZW4gOiAnJyxcclxuLy8gICAgICAgICAgICAgcm9vbVR5cGVzIDogW10sXHJcbi8vICAgICAgICAgICAgIGluaXRTZWFyY2ggOiBmYWxzZSxcclxuLy8gICAgICAgICAgICAgc2VhcmNoU3RlcCA6IDEsXHJcbi8vICAgICAgICAgICAgIHNlbGVjdGVkUm9vbXMgOiBbXSxcclxuLy8gICAgICAgICAgICAgc2VsZWN0ZWRSb29tSWRzIDogW10sXHJcbi8vICAgICAgICAgICAgIGhvdGVsX3Jvb21zIDogW10sXHJcbi8vICAgICAgICAgICAgIGludmFsaWRGaWVsZHMgOiBbXSxcclxuLy8gICAgICAgICAgICAgc2hvd0Vycm9yIDogZmFsc2UsXHJcbi8vICAgICAgICAgICAgIGZpcnN0bmFtZSA6JycsXHJcbi8vICAgICAgICAgICAgIGxhc3RuYW1lIDonJyxcclxuLy8gICAgICAgICAgICAgYWRkcmVzczEgOiAnJyxcclxuLy8gICAgICAgICAgICAgYWRkcmVzczIgOiAnJyxcclxuLy8gICAgICAgICAgICAgY2l0eSA6ICcnLFxyXG4vLyAgICAgICAgICAgICBzdGF0ZSA6ICcnLFxyXG4vLyAgICAgICAgICAgICBwaW5jb2RlIDogJycsXHJcbi8vICAgICAgICAgICAgIGNvdW50cnkgOiAnJyxcclxuLy8gICAgICAgICAgICAgbW9iaWxlIDogJycsXHJcbi8vICAgICAgICAgICAgIGFkZGl0aW9uYWxwaG9uZW51bWJlciA6ICcnLFxyXG4vLyAgICAgICAgICAgICBlbWFpbCA6ICcnLFxyXG4vLyAgICAgICAgICAgICBzaG93UHJvZmlsZUluZm9FcnJvciA6IGZhbHNlLFxyXG4vLyAgICAgICAgICAgICBib29raW5nSWQgOiAnJyxcclxuLy8gICAgICAgICAgICAgdG90YWxBbW91bnQgOiAwLFxyXG4vLyAgICAgICAgICAgICBwcmluY2lwbGVBbW91bnQgOiAwLFxyXG4vLyAgICAgICAgICAgICBkaXNjb3VudCA6IDAsXHJcbi8vICAgICAgICAgICAgIHByb2dyYW1fZGVzY3JpcHRpb24gOiAnJyxcclxuLy8gICAgICAgICAgICAgZ3N0IDogMCxcclxuLy8gICAgICAgICAgICAgTUFYX0NBUEFDSVRZX01TRyA6ICcnLFxyXG4vLyAgICAgICAgICAgICBpdGVtUmVtb3ZhbE1lc3NhZ2UgOiBmYWxzZSxcclxuLy8gICAgICAgICAgICAgYmFubmVySW1hZ2VzIDogW10sXHJcbi8vICAgICAgICAgICAgIGNhbm5vdENvbnRpbnVlTWVzc2FnZSA6ZmFsc2UsXHJcbi8vICAgICAgICAgICAgIGdhbGxlcnlJbWFnZXMgOiBbXSxcclxuLy8gICAgICAgICAgICAgc2hvd0RldGFpbFN0YXR1cyA6IGZhbHNlLFxyXG4vLyAgICAgICAgICAgICBob3RlbFBvbGljaWVzIDogW10sXHJcbi8vICAgICAgICAgICAgIGhvdGVsSGlnaGxpZ2h0cyA6IFtdLFxyXG4vLyAgICAgICAgICAgICBNQVhfQ0FQQUNJVFlfR0VORVJBTCA6IDEsXHJcbi8vICAgICAgICAgICAgIHNob3dTcGVjaWFsUmVxdWVzdHMgOiBmYWxzZSxcclxuLy8gICAgICAgICAgICAgc3BSZXF1ZXN0cyA6IFtdLFxyXG4vLyAgICAgICAgICAgICBzZWxlY3RlZFNwUmVxcyA6W10sXHJcbi8vICAgICAgICAgICAgIHNlbGVjdGVkU3BSZXFJZHMgOiBbXSxcclxuLy8gICAgICAgICAgICAgc2hvd1BlbmRpbmdNZXNzYWdlIDogZmFsc2UsXHJcbi8vICAgICAgICAgICAgIGV4cGFuZENvbnRlbnQgOiBmYWxzZVxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH1cclxuLy8gICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4vLyAgICAgICAgIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xyXG4vLyAgICAgICAgIHNjcmlwdC5zcmMgPSAnaHR0cHM6Ly9jaGVja291dC5yYXpvcnBheS5jb20vdjEvY2hlY2tvdXQuanMnO1xyXG4vLyAgICAgICAgIHNjcmlwdC5hc3luYyA9IHRydWU7XHJcbi8vICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO1xyXG4vLyAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4vLyAgICAgICAgICAgICBob3RlbF91cmwgOiB0aGlzLnByb3BzLmhvdGVsX3VybFxyXG4vLyAgICAgICAgIH0pXHJcbi8vICAgICB9XHJcbi8vXHJcbi8vICAgICBzY3JvbGxUb1NlY3Rpb24gPSAoc2VjdGlvbikgPT4ge1xyXG4vLyAgICAgICAgIGlmKHNlY3Rpb24gIT09ICcnKSB7XHJcbi8vICAgICAgICAgICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2VjdGlvbik7XHJcbi8vICAgICAgICAgICAgIGlmIChlbGVtZW50KSB7XHJcbi8vICAgICAgICAgICAgICAgICBlbGVtZW50LnNjcm9sbEludG9WaWV3KHtiZWhhdmlvcjogXCJzbW9vdGhcIiwgYmxvY2s6IFwic3RhcnRcIiwgaW5saW5lOiBcIm5lYXJlc3RcIn0pO1xyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG4vL1xyXG4vL1xyXG4vLyAgICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlLCBzbmFwc2hvdCkge1xyXG4vL1xyXG4vLyAgICAgICAgIGlmKHRoaXMucHJvcHMuaG90ZWxEZXRhaWwgIT09IHByZXZQcm9wcy5ob3RlbERldGFpbCkge1xyXG4vL1xyXG4vLyAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuLy8gICAgICAgICAgICAgICAgIGhvdGVsX2lkIDogdGhpcy5wcm9wcy5ob3RlbERldGFpbC5ob3RlbF9pZCxcclxuLy8gICAgICAgICAgICAgICAgIGhvdGVsRGV0YWlsIDogdGhpcy5wcm9wcy5ob3RlbERldGFpbCxcclxuLy8gICAgICAgICAgICAgICAgIGhvdGVsX3Jvb21zIDogdGhpcy5wcm9wcy5ob3RlbF9yb29tcyxcclxuLy8gICAgICAgICAgICAgICAgIGdhbGxlcnlJbWFnZXMgOiB0aGlzLnByb3BzLmdhbGxlcnlJbWFnZXMsXHJcbi8vICAgICAgICAgICAgICAgICBNQVhfQ0FQQUNJVFlfR0VORVJBTCA6IHRoaXMucHJvcHMuaG90ZWxEZXRhaWwubWF4X29jY3VwYW5jeSxcclxuLy8gICAgICAgICAgICAgICAgIGhvdGVsSGlnaGxpZ2h0cyA6IHRoaXMucHJvcHMuaG90ZWxEZXRhaWwuaG90ZWxoaWdobGlnaHRzLFxyXG4vLyAgICAgICAgICAgICAgICAgaG90ZWxQb2xpY2llcyA6IHRoaXMucHJvcHMuaG90ZWxEZXRhaWwuaG90ZWxwb2xpY2llcyxcclxuLy8gICAgICAgICAgICAgICAgIHNwUmVxdWVzdHMgOiB0aGlzLnByb3BzLmhvdGVsRGV0YWlsLnNwZWNpYWxyZXF1ZXN0XHJcbi8vICAgICAgICAgICAgIH0sIGZ1bmN0aW9uKCkge1xyXG4vL1xyXG4vLyAgICAgICAgICAgICB9KVxyXG4vLyAgICAgICAgIH1cclxuLy9cclxuLy8gICAgICAgICAvLyBpZih0aGlzLnByb3BzLmZhY2lsaXR5RGF0YS5yb29tVHlwZXMgIT09IHByZXZQcm9wcy5mYWNpbGl0eURhdGEucm9vbVR5cGVzKSB7XHJcbi8vICAgICAgICAgLy8gICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4vLyAgICAgICAgIC8vICAgICAgICAgcm9vbVR5cGVzIDogdGhpcy5wcm9wcy5mYWNpbGl0eURhdGEucm9vbVR5cGVzXHJcbi8vICAgICAgICAgLy8gICAgIH0pXHJcbi8vICAgICAgICAgLy8gfVxyXG4vLyAgICAgICAgIC8vIGlmKHRoaXMucHJvcHMuYm9va2luZ0RhdGEuYm9va2luZ0lkICE9PSBwcmV2UHJvcHMuYm9va2luZ0RhdGEuYm9va2luZ0lkKSB7XHJcbi8vICAgICAgICAgLy9cclxuLy8gICAgICAgICAvLyAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbi8vICAgICAgICAgLy8gICAgICAgICBib29raW5nSWQgOiB0aGlzLnByb3BzLmJvb2tpbmdEYXRhLmJvb2tpbmdJZFxyXG4vLyAgICAgICAgIC8vICAgICB9LCBmdW5jdGlvbiAoKXtcclxuLy8gICAgICAgICAvLyAgICAgICAgIHRoaXMuY29udGludWVUb1BheW1lbnQoKVxyXG4vLyAgICAgICAgIC8vICAgICB9KVxyXG4vLyAgICAgICAgIC8vIH1cclxuLy8gICAgICAgICAvLyBpZih0aGlzLnByb3BzLmJvb2tpbmdEYXRhLmJvb2tpbmdSZXN1bHQgIT09IHByZXZQcm9wcy5ib29raW5nRGF0YS5ib29raW5nUmVzdWx0KSB7XHJcbi8vICAgICAgICAgLy8gICAgIGxldCBQYXltZW50VXJsID0gYGh0dHBzOi8vdXRoZGV2Lm5ldmVyYmVmb3JlaG9saWRheXMuY29tL3BheW1lbnQtc3VjY2Vzcz9ycF9pZD1gK3RoaXMuc3RhdGUuUGF5bWVudElkK2AmcmFtdD1gK3RoaXMuc3RhdGUudG90YWxBbW91bnQrYCZtb2JpbGU9YCt0aGlzLnN0YXRlLm1vYmlsZStgJmVtYWlsPWArdGhpcy5zdGF0ZS5lbWFpbCtgJm1ldGhvZD1DYXJkIHBheW1lbnQmZGF0ZT1gK21vbWVudCh0aGlzLnN0YXRlLnRvZGF5KS5mb3JtYXQoJ0REIE1NTSwgWVlZWScpO1xyXG4vLyAgICAgICAgIC8vICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFBheW1lbnRVcmw7XHJcbi8vICAgICAgICAgLy8gfVxyXG4vL1xyXG4vLyAgICAgICAgIC8vIGlmKHRoaXMucHJvcHMuaG90ZWxEYXRhLmJhbm5lckltYWdlcyAhPT0gcHJldlByb3BzLmhvdGVsRGF0YS5iYW5uZXJJbWFnZXMpIHtcclxuLy8gICAgICAgICAvLyAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbi8vICAgICAgICAgLy8gICAgICAgICBiYW5uZXJJbWFnZXMgOiB0aGlzLnByb3BzLmhvdGVsRGF0YS5iYW5uZXJJbWFnZXNcclxuLy8gICAgICAgICAvLyAgICAgfSlcclxuLy8gICAgICAgICAvLyB9XHJcbi8vICAgICB9XHJcbi8vXHJcbi8vICAgICBzZXRTdGFydERhdGUgPSAoZGF0ZSkgPT4ge1xyXG4vLyAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4vLyAgICAgICAgICAgICBzdGFydERhdGUgOiBkYXRlXHJcbi8vICAgICAgICAgfSlcclxuLy8gICAgIH1cclxuLy8gICAgIHNldEVuZERhdGUgPSAoZGF0ZSkgPT4ge1xyXG4vLyAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4vLyAgICAgICAgICAgICBlbmREYXRlIDogZGF0ZVxyXG4vLyAgICAgICAgIH0pXHJcbi8vICAgICB9XHJcbi8vXHJcbi8vICAgICBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LnZhbHVlKVxyXG4vLyAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4vLyAgICAgICAgICAgICBbZS50YXJnZXQubmFtZV0gOiBlLnRhcmdldC52YWx1ZVxyXG4vLyAgICAgICAgIH0pXHJcbi8vICAgICB9XHJcbi8vXHJcbi8vICAgICBzZWFyY2hSb29tcyA9ICgpID0+IHtcclxuLy9cclxuLy9cclxuLy8gICAgICAgICBsZXQgTUFYX0NBUEFDSVRZX0dFTkVSQUwgPSB0aGlzLnN0YXRlLk1BWF9DQVBBQ0lUWV9HRU5FUkFMO1xyXG4vLyAgICAgICAgIGxldCBzdGFydERhdGUgPSB0aGlzLnN0YXRlLnN0YXJ0RGF0ZTtcclxuLy8gICAgICAgICBsZXQgZW5kRGF0ZSA9IHRoaXMuc3RhdGUuc3RhcnREYXRlO1xyXG4vLyAgICAgICAgIGxldCByb29tcyA9IHRoaXMuc3RhdGUucm9vbXM7XHJcbi8vICAgICAgICAgbGV0IGFkdWx0cyA9IHRoaXMuc3RhdGUuYWR1bHRzO1xyXG4vLyAgICAgICAgIGxldCBjaGlsZHJlbiA9IHRoaXMuc3RhdGUuY2hpbGRyZW47XHJcbi8vICAgICAgICAgbGV0IGludmFsaWRGaWVsZHMgPSBbXTtcclxuLy8gICAgICAgICBpZihzdGFydERhdGUgPT09ICcnKSB7XHJcbi8vICAgICAgICAgICAgIGludmFsaWRGaWVsZHMucHVzaCgnc3RhcnREYXRlJyk7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICAgIGlmKGVuZERhdGUgPT09ICcnKSB7XHJcbi8vICAgICAgICAgICAgIGludmFsaWRGaWVsZHMucHVzaCgnZW5kRGF0ZScpO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgICBpZihyb29tcyA9PT0gJycpIHtcclxuLy8gICAgICAgICAgICAgaW52YWxpZEZpZWxkcy5wdXNoKCdyb29tcycpO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgICBpZihhZHVsdHMgPT09ICcnKSB7XHJcbi8vICAgICAgICAgICAgIGludmFsaWRGaWVsZHMucHVzaCgnYWR1bHRzJyk7XHJcbi8vICAgICAgICAgfVxyXG4vL1xyXG4vLyAgICAgICAgIGxldCBhZHVsdENvdW50ID0gcGFyc2VJbnQocm9vbXMpICogcGFyc2VJbnQoTUFYX0NBUEFDSVRZX0dFTkVSQUwpO1xyXG4vLyAgICAgICAgIGlmKHBhcnNlSW50KGFkdWx0cykgPiBhZHVsdENvdW50KSB7XHJcbi8vICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4vLyAgICAgICAgICAgICAgICAgTUFYX0NBUEFDSVRZX01TRyA6IFwiU29ycnkuIFdlIGFyZSBhbGxvd2luZyBhIG1heGltdW0gb2YgXCIrTUFYX0NBUEFDSVRZX0dFTkVSQUwrXCIgbWVtYmVycyBpbiBhIHJvb21cIlxyXG4vLyAgICAgICAgICAgICB9KVxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgICBpZihpbnZhbGlkRmllbGRzLmxlbmd0aCA9PT0gMCApIHtcclxuLy9cclxuLy8gICAgICAgICAgICAgbGV0IHBhcmFtcyA9IHtzdGFydERhdGU6IHRoaXMuc3RhdGUuc3RhcnREYXRlLCBlbmREYXRlIDogdGhpcy5zdGF0ZS5lbmREYXRlLCByb29tcyA6IHRoaXMuc3RhdGUucm9vbXMsXHJcbi8vICAgICAgICAgICAgICAgICBhZHVsdHMgOiB0aGlzLnN0YXRlLmFkdWx0cywgY2hpbGRyZW4gOiB0aGlzLnN0YXRlLmNoaWxkcmVufTtcclxuLy8gICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2hvd0Vycm9yIDogZmFsc2UsIGluaXRTZWFyY2ggOiAgdHJ1ZSwgc2VhcmNoU3RlcCA6IDEsIHN0YXJ0RGF0ZTogdGhpcy5zdGF0ZS5zdGFydERhdGUsIGVuZERhdGUgOiB0aGlzLnN0YXRlLmVuZERhdGUsIHJvb21zIDogdGhpcy5zdGF0ZS5yb29tcyxcclxuLy8gICAgICAgICAgICAgICAgIGFkdWx0cyA6IHRoaXMuc3RhdGUuYWR1bHRzLCBjaGlsZHJlbiA6IHRoaXMuc3RhdGUuY2hpbGRyZW4sIGludmFsaWRGaWVsZHMgOiBpbnZhbGlkRmllbGRzfSlcclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgICAgZWxzZSB7XHJcbi8vICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93RXJyb3IgOiB0cnVlLCBzdGFydERhdGU6IHRoaXMuc3RhdGUuc3RhcnREYXRlLCBlbmREYXRlIDogdGhpcy5zdGF0ZS5lbmREYXRlLCByb29tcyA6IHRoaXMuc3RhdGUucm9vbXMsXHJcbi8vICAgICAgICAgICAgICAgICBhZHVsdHMgOiB0aGlzLnN0YXRlLmFkdWx0cywgY2hpbGRyZW4gOiB0aGlzLnN0YXRlLmNoaWxkcmVuLCBpbnZhbGlkRmllbGRzIDogaW52YWxpZEZpZWxkc30pXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyAgICAgcmVzZXRTZWFyY2ggPSAoKSA9PiB7XHJcbi8vICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2hvd0Vycm9yIDogZmFsc2UsIGluaXRTZWFyY2ggOiAgZmFsc2UsIHNlYXJjaFN0ZXAgOiAwLCBzdGFydERhdGU6IHRoaXMuc3RhdGUudG9kYXksIGVuZERhdGUgOiB0aGlzLnN0YXRlLnRvbW9ycm93LCByb29tcyA6ICcnLFxyXG4vLyAgICAgICAgICAgICBhZHVsdHMgOiAnJywgY2hpbGRyZW4gOiAnJywgaW52YWxpZEZpZWxkcyA6IFtdfSlcclxuLy8gICAgIH1cclxuLy8gICAgIGJhY2tUb0RldGFpbCA9ICgpID0+IHtcclxuLy8gICAgICAgICB0aGlzLnNldFN0YXRlKHtpbml0U2VhcmNoIDogIGZhbHNlfSlcclxuLy8gICAgIH1cclxuLy8gICAgIGJhY2tUb0NhcnQgPSAoKSA9PiB7XHJcbi8vICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2VhcmNoU3RlcCA6ICAxfSlcclxuLy8gICAgIH1cclxuLy9cclxuLy8gICAgIHNlbGVjdFJvb20gPSAocm9vbSwgdHlwZSxlKSA9PiB7XHJcbi8vICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbi8vICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuLy8gICAgICAgICBsZXQgc2VsZWN0ZWRSb29tcyA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRSb29tcztcclxuLy8gICAgICAgICBsZXQgc2VsZWN0ZWRSb29tSWRzID0gdGhpcy5zdGF0ZS5zZWxlY3RlZFJvb21JZHM7XHJcbi8vXHJcbi8vICAgICAgICAgbGV0IGhvdGVsX3Jvb21zID0gdGhpcy5zdGF0ZS5ob3RlbF9yb29tc1xyXG4vLyAgICAgICAgIGlmKHR5cGUgPT09ICdhZGQnIHx8IHR5cGUgPT09ICdjaG9vc2UnKSB7XHJcbi8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKHNlbGVjdGVkUm9vbUlkcylcclxuLy8gICAgICAgICAgICAgaWYoIXNlbGVjdGVkUm9vbUlkcy5pbmNsdWRlcyhyb29tLnJvb21pZCkpe1xyXG4vLyAgICAgICAgICAgICAgICAgc2VsZWN0ZWRSb29tSWRzLnB1c2gocm9vbS5yb29taWQpXHJcbi8vICAgICAgICAgICAgICAgICBzZWxlY3RlZFJvb21zLnB1c2gocm9vbSk7XHJcbi8vICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyb29tKVxyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgfVxyXG4vL1xyXG4vLyAgICAgICAgIGlmKHR5cGUgPT09ICdyZW1vdmUnKSB7XHJcbi8vICAgICAgICAgICAgIGlmKHRoaXMuc3RhdGUuc2VhcmNoU3RlcCA9PT0gMiAmJiBzZWxlY3RlZFJvb21zLmxlbmd0aCA9PT0xKXtcclxuLy8gICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIGl0ZW1SZW1vdmFsTWVzc2FnZSA6IHRydWVcclxuLy8gICAgICAgICAgICAgICAgIH0pXHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgZWxzZSB7XHJcbi8vICAgICAgICAgICAgICAgICBpZihzZWxlY3RlZFJvb21JZHMuaW5jbHVkZXMocm9vbS5yb29taWQpKSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gc2VsZWN0ZWRSb29tSWRzLmluZGV4T2Yocm9vbS5yb29taWQpO1xyXG4vL1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkUm9vbUlkcy5zcGxpY2UoaW5kZXgsIDEpXHJcbi8vICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRSb29tcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIGhvdGVsX3Jvb21zID0gaG90ZWxfcm9vbXMubWFwKGl0ZW0gPT4ge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBpZihpdGVtLnJvb21pZCA9PT0gcm9vbS5yb29taWQpIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ucXR5ID0gMDtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbTtcclxuLy8gICAgICAgICAgICAgICAgICAgICB9KTtcclxuLy8gICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgIH1cclxuLy9cclxuLy8gICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuLy8gICAgICAgICAgICAgc2VsZWN0ZWRSb29tSWRzIDpzZWxlY3RlZFJvb21JZHMsXHJcbi8vICAgICAgICAgICAgIHNlbGVjdGVkUm9vbXMgOiBzZWxlY3RlZFJvb21zLFxyXG4vLyAgICAgICAgICAgICBob3RlbF9yb29tcyA6IGhvdGVsX3Jvb21zXHJcbi8vICAgICAgICAgfSwgZnVuY3Rpb24oKXtcclxuLy8gICAgICAgICAgICAgaWYodHlwZSAhPT0gJ3JlbW92ZScpIHtcclxuLy8gICAgICAgICAgICAgICAgICh0eXBlID09PSAnYWRkJyB8fCB0eXBlID09PSAnY2hvb3NlJyApID8gdGhpcy5hZGRRdHkocm9vbSkgOiB0aGlzLnN1YlF0eShyb29tKTtcclxuLy8gICAgICAgICAgICAgfVxyXG4vL1xyXG4vL1xyXG4vLyAgICAgICAgIH0pXHJcbi8vXHJcbi8vICAgICB9XHJcbi8vXHJcbi8vXHJcbi8vICAgICBjb250aW51ZVRvU3VtbWFyeSA9ICgpID0+IHtcclxuLy8gICAgICAgICBsZXQgYWR1bHRDb3VudCA9IHBhcnNlSW50KHRoaXMuc3RhdGUuYWR1bHRzKTtcclxuLy8gICAgICAgICBjb25zb2xlLmxvZyhhZHVsdENvdW50KTtcclxuLy8gICAgICAgICBsZXQgcGVyc29uT2NjdXBpZWQgPSAwO1xyXG4vLyAgICAgICAgIGxldCBzZWxlY3RlZFJvb21zID0gdGhpcy5zdGF0ZS5zZWxlY3RlZFJvb21zO1xyXG4vLyAgICAgICAgIGxldCB0b3RhbFJvb21zID0gMDtcclxuLy8gICAgICAgICBpZihzZWxlY3RlZFJvb21zLmxlbmd0aCA+IDApIHtcclxuLy8gICAgICAgICAgICAgZm9yKHZhciBpPTA7IGk8c2VsZWN0ZWRSb29tcy5sZW5ndGg7IGkrKykge1xyXG4vLyAgICAgICAgICAgICAgICAgbGV0IHF0eSA9IHNlbGVjdGVkUm9vbXNbaV0ucXR5O1xyXG4vLyAgICAgICAgICAgICAgICAgdG90YWxSb29tcyArPSBwYXJzZUludChxdHkpO1xyXG4vLyAgICAgICAgICAgICAgICAgbGV0IG9jY3VwYW5jeSA9IHBhcnNlSW50KHNlbGVjdGVkUm9vbXNbaV0ubWF4X2NhcGFjaXR5X2FkdWx0KTtcclxuLy8gICAgICAgICAgICAgICAgIGxldCBleHRyYV9vY2N1cGFuY3kgPSBzZWxlY3RlZFJvb21zW2ldLmV4dHJhYmVkID09PSAneWVzJz8gIDE6IDA7XHJcbi8vICAgICAgICAgICAgICAgICBsZXQgdG90YWxfb2NjdXBhbmN5ID0gb2NjdXBhbmN5ICsgZXh0cmFfb2NjdXBhbmN5O1xyXG4vLyAgICAgICAgICAgICAgICAgcGVyc29uT2NjdXBpZWQgKz0gcGFyc2VJbnQocXR5KSAqdG90YWxfb2NjdXBhbmN5O1xyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgfVxyXG4vL1xyXG4vLyAgICAgICAgIGlmKHNlbGVjdGVkUm9vbXMubGVuZ3RoID09PSAwKSB7XHJcbi8vICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4vLyAgICAgICAgICAgICAgICAgY2Fubm90Q29udGludWUgOiB0cnVlLFxyXG4vLyAgICAgICAgICAgICAgICAgY2Fubm90Q29udGludWVNZXNzYWdlIDogXCJQbGVhc2Ugc2VsZWN0IGF0bGVhc3QgYSByb29tIHRvIHByb2NlZWRcIlxyXG4vLyAgICAgICAgICAgICB9KVxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgICBlbHNlIGlmKGFkdWx0Q291bnQgPiBwZXJzb25PY2N1cGllZCkge1xyXG4vLyAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuLy8gICAgICAgICAgICAgICAgIGNhbm5vdENvbnRpbnVlIDogdHJ1ZSxcclxuLy8gICAgICAgICAgICAgICAgIGNhbm5vdENvbnRpbnVlTWVzc2FnZSA6IFwiU29ycnkuXCIrIGFkdWx0Q291bnQrXCIgcGVyc29ucyBjYW5ub3QgYmUgb2NjdXBpZWQgaW4gXCIrdG90YWxSb29tcytcIiByb29tc1wiXHJcbi8vICAgICAgICAgICAgIH0pXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICAgIGVsc2Uge1xyXG4vLyAgICAgICAgICAgICBpZih0aGlzLnN0YXRlLnNlbGVjdGVkUm9vbXMubGVuZ3RoID4wKSB7XHJcbi8vICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuLy8gICAgICAgICAgICAgICAgICAgICBzZWFyY2hTdGVwIDoyXHJcbi8vICAgICAgICAgICAgICAgICB9KVxyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgfVxyXG4vL1xyXG4vL1xyXG4vL1xyXG4vLyAgICAgfVxyXG4vL1xyXG4vLyAgICAgYWRkUXR5ID0gKHJvb20pID0+IHtcclxuLy8gICAgICAgICBsZXQgc2VsZWN0ZWRSb29tcyA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRSb29tcztcclxuLy8gICAgICAgICBsZXQgc2VsZWN0ZWRSb29tSWRzID0gdGhpcy5zdGF0ZS5zZWxlY3RlZFJvb21JZHM7XHJcbi8vICAgICAgICAgbGV0IHJvb21JZCA9IHJvb20ucm9vbWlkO1xyXG4vLyAgICAgICAgIHNlbGVjdGVkUm9vbXMgPSBzZWxlY3RlZFJvb21zLm1hcChpdGVtID0+IHtcclxuLy8gICAgICAgICAgICAgaWYoaXRlbS5yb29taWQgPT09IHJvb21JZCkge1xyXG4vLyAgICAgICAgICAgICAgICAgaWYoaXRlbS5xdHkpIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICBpZihpdGVtLnF0eSA8IGl0ZW0ucm9vbWNvdW50KSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ucXR5ID0gcGFyc2VJbnQoaXRlbS5xdHkpICsxO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIGl0ZW0ucXR5ID0gMTtcclxuLy8gICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICByZXR1cm4gaXRlbTtcclxuLy8gICAgICAgICB9KTtcclxuLy8gICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuLy8gICAgICAgICAgICAgc2VsZWN0ZWRSb29tcyA6IHNlbGVjdGVkUm9vbXMsXHJcbi8vICAgICAgICAgICAgIHNlbGVjdGVkUm9vbUlkcyA6IHNlbGVjdGVkUm9vbUlkc1xyXG4vLyAgICAgICAgIH0pXHJcbi8vICAgICB9XHJcbi8vICAgICBzdWJRdHkgPSAocm9vbSkgPT4ge1xyXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKHJvb20pXHJcbi8vICAgICAgICAgbGV0IHNlbGVjdGVkUm9vbXMgPSB0aGlzLnN0YXRlLnNlbGVjdGVkUm9vbXM7XHJcbi8vICAgICAgICAgbGV0IHNlbGVjdGVkUm9vbUlkcyA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRSb29tSWRzO1xyXG4vLyAgICAgICAgIGxldCByb29tSWQgPSByb29tLnJvb21pZDtcclxuLy9cclxuLy8gICAgICAgICBpZihyb29tLnF0eSAmJiByb29tLnF0eSA9PT0gMSkge1xyXG4vLyAgICAgICAgICAgICBpZih0aGlzLnN0YXRlLnNlYXJjaFN0ZXAgPT09IDIgJiYgc2VsZWN0ZWRSb29tcy5sZW5ndGggPT09MSl7XHJcbi8vICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuLy8gICAgICAgICAgICAgICAgICAgICBpdGVtUmVtb3ZhbE1lc3NhZ2UgOiB0cnVlXHJcbi8vICAgICAgICAgICAgICAgICB9KVxyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgIGVsc2Uge1xyXG4vLyAgICAgICAgICAgICAgICAgcm9vbS5xdHkgPSAwO1xyXG4vLyAgICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gc2VsZWN0ZWRSb29tSWRzLmluZGV4T2Yocm9vbS5yb29taWQpO1xyXG4vLyAgICAgICAgICAgICAgICAgc2VsZWN0ZWRSb29tSWRzLnNwbGljZShpbmRleCwxKVxyXG4vLyAgICAgICAgICAgICAgICAgc2VsZWN0ZWRSb29tcy5zcGxpY2UoaW5kZXgsMSlcclxuLy8gICAgICAgICAgICAgfVxyXG4vL1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgICBlbHNlIHtcclxuLy9cclxuLy8gICAgICAgICAgICAgc2VsZWN0ZWRSb29tcyA9IHNlbGVjdGVkUm9vbXMubWFwKGl0ZW0gPT4ge1xyXG4vLyAgICAgICAgICAgICAgICAgaWYoaXRlbS5yb29taWQgPT09IHJvb21JZCkge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIGl0ZW0ucXR5ID0gKGl0ZW0ucXR5ICYmIGl0ZW0ucXR5ID4wKSA/IHBhcnNlSW50KGl0ZW0ucXR5KSAtMSA6MDtcclxuLy8gICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgICAgIHJldHVybiBpdGVtO1xyXG4vLyAgICAgICAgICAgICB9KVxyXG4vLyAgICAgICAgIH1cclxuLy9cclxuLy8gICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuLy8gICAgICAgICAgICAgc2VsZWN0ZWRSb29tcyA6IHNlbGVjdGVkUm9vbXMsXHJcbi8vICAgICAgICAgICAgIHNlbGVjdGVkUm9vbUlkcyA6IHNlbGVjdGVkUm9vbUlkc1xyXG4vLyAgICAgICAgIH0pXHJcbi8vICAgICB9XHJcbi8vXHJcbi8vICAgICBjaGFuZ2VRdHkgPSAocm9vbSxlKSA9PiB7XHJcbi8vICAgICAgICAgbGV0IHF0eSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4vLyAgICAgICAgIGxldCBzZWxlY3RlZFJvb21zID0gdGhpcy5zdGF0ZS5zZWxlY3RlZFJvb21zO1xyXG4vLyAgICAgICAgIGxldCBzZWxlY3RlZFJvb21JZHMgPSB0aGlzLnN0YXRlLnNlbGVjdGVkUm9vbUlkcztcclxuLy8gICAgICAgICBsZXQgcm9vbUlkID0gcm9vbS5yb29taWQ7XHJcbi8vICAgICAgICAgc2VsZWN0ZWRSb29tcyA9IHNlbGVjdGVkUm9vbXMubWFwKGl0ZW0gPT4ge1xyXG4vLyAgICAgICAgICAgICBpZihpdGVtLnJvb21pZCA9PT0gcm9vbUlkKSB7XHJcbi8vICAgICAgICAgICAgICAgICBpdGVtLnF0eSA9IChpdGVtLnF0eSAmJiBpdGVtLnF0eSA+MCkgPyBwYXJzZUludChpdGVtLnF0eSkgLTEgOiAwO1xyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgIHJldHVybiBpdGVtO1xyXG4vLyAgICAgICAgIH0pXHJcbi8vICAgICAgICAgdGhpcy5zZWxlY3RSb29tKHJvb20pXHJcbi8vICAgICB9XHJcbi8vXHJcbi8vICAgICBzYXZlQm9va2luZyA9IChlLCBhbW91bnQsIHByaW5jaXBsZUFtb3VudCwgZGlzY291bnQsIHByb2dyYW1fZGVzY3JpcHRpb24sIGdzdCkgPT4ge1xyXG4vL1xyXG4vL1xyXG4vLyAgICAgICAgIGxldCBmaXJzdG5hbWUgPSB0aGlzLnN0YXRlLmZpcnN0bmFtZTtcclxuLy8gICAgICAgICBsZXQgbGFzdG5hbWUgPSB0aGlzLnN0YXRlLmxhc3RuYW1lO1xyXG4vLyAgICAgICAgIGxldCBhZGRyZXNzMSA9IHRoaXMuc3RhdGUuYWRkcmVzczE7XHJcbi8vICAgICAgICAgbGV0IGFkZHJlc3MyID0gdGhpcy5zdGF0ZS5hZGRyZXNzMjtcclxuLy8gICAgICAgICBsZXQgY2l0eSA9IHRoaXMuc3RhdGUuY2l0eTtcclxuLy8gICAgICAgICBsZXQgc3RhdGUgPSB0aGlzLnN0YXRlLnN0YXRlO1xyXG4vLyAgICAgICAgIGxldCBjb3VudHJ5ID0gdGhpcy5zdGF0ZS5jb3VudHJ5O1xyXG4vLyAgICAgICAgIGxldCBwaW5jb2RlID0gdGhpcy5zdGF0ZS5waW5jb2RlO1xyXG4vLyAgICAgICAgIGxldCBtb2JpbGUgPSB0aGlzLnN0YXRlLm1vYmlsZTtcclxuLy8gICAgICAgICBsZXQgYWRkaXRpb25hbHBob25lbnVtYmVyID0gdGhpcy5zdGF0ZS5hZGRpdGlvbmFscGhvbmVudW1iZXI7XHJcbi8vICAgICAgICAgbGV0IGVtYWlsID0gdGhpcy5zdGF0ZS5lbWFpbDtcclxuLy8gICAgICAgICBsZXQgaW52YWxpZEZpZWxkcyA9IFtdO1xyXG4vLyAgICAgICAgIGlmKGZpcnN0bmFtZSA9PT0gJycpIHtcclxuLy8gICAgICAgICAgICAgaW52YWxpZEZpZWxkcy5wdXNoKCdmaXJzdG5hbWUnKTtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgICAgaWYobGFzdG5hbWUgPT09ICcnKSB7XHJcbi8vICAgICAgICAgICAgIGludmFsaWRGaWVsZHMucHVzaCgnbGFzdG5hbWUnKTtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgICAgaWYoYWRkcmVzczEgPT09ICcnKSB7XHJcbi8vICAgICAgICAgICAgIGludmFsaWRGaWVsZHMucHVzaCgnYWRkcmVzczEnKTtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgICAgaWYoYWRkcmVzczIgPT09ICcnKSB7XHJcbi8vICAgICAgICAgICAgIGludmFsaWRGaWVsZHMucHVzaCgnYWRkcmVzczInKTtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgICAgaWYoY2l0eSA9PT0gJycpIHtcclxuLy8gICAgICAgICAgICAgaW52YWxpZEZpZWxkcy5wdXNoKCdjaXR5Jyk7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICAgIGlmKHN0YXRlID09PSAnJykge1xyXG4vLyAgICAgICAgICAgICBpbnZhbGlkRmllbGRzLnB1c2goJ3N0YXRlJyk7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICAgIGlmKGNvdW50cnkgPT09ICcnKSB7XHJcbi8vICAgICAgICAgICAgIGludmFsaWRGaWVsZHMucHVzaCgnY291bnRyeScpO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgICBpZihwaW5jb2RlID09PSAnJykge1xyXG4vLyAgICAgICAgICAgICBpbnZhbGlkRmllbGRzLnB1c2goJ3BpbmNvZGUnKTtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgICAgaWYobW9iaWxlID09PSAnJykge1xyXG4vLyAgICAgICAgICAgICBpbnZhbGlkRmllbGRzLnB1c2goJ21vYmlsZScpO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgICBpZihhZGRpdGlvbmFscGhvbmVudW1iZXIgPT09ICcnKSB7XHJcbi8vICAgICAgICAgICAgIGludmFsaWRGaWVsZHMucHVzaCgnYWRkaXRpb25hbHBob25lbnVtYmVyJyk7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICAgIGlmKGVtYWlsID09PSAnJykge1xyXG4vLyAgICAgICAgICAgICBpbnZhbGlkRmllbGRzLnB1c2goJ2VtYWlsJyk7XHJcbi8vICAgICAgICAgfVxyXG4vL1xyXG4vLyAgICAgICAgIGlmKGludmFsaWRGaWVsZHMubGVuZ3RoID09PSAwKSB7XHJcbi8vICAgICAgICAgICAgIGxldCBzZWxlY3RlZFJvb21zID0gdGhpcy5zdGF0ZS5zZWxlY3RlZFJvb21zO1xyXG4vLyAgICAgICAgICAgICBsZXQgY2hlY2tpbmRhdGUgPSBtb21lbnQodGhpcy5zdGF0ZS5zdGFydERhdGUpLmZvcm1hdCgneXl5eS1NTS1ERCcpO1xyXG4vLyAgICAgICAgICAgICBsZXQgY2hlY2tvdXRkYXRlID0gbW9tZW50KHRoaXMuc3RhdGUuZW5kRGF0ZSkuZm9ybWF0KCd5eXl5LU1NLUREJyk7XHJcbi8vICAgICAgICAgICAgIGxldCBhZHVsdHMgPSB0aGlzLnN0YXRlLmFkdWx0cyB8fCAwO1xyXG4vLyAgICAgICAgICAgICBsZXQgY2hpbGRyZW4gPSB0aGlzLnN0YXRlLmNoaWxkcmVuIHx8IDA7XHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vICAgICAgICAgICAgIHZhciBzdGFydCA9IG1vbWVudChjaGVja2luZGF0ZSwgXCJZWVlZLU1NLUREXCIpO1xyXG4vLyAgICAgICAgICAgICB2YXIgZW5kID0gbW9tZW50KGNoZWNrb3V0ZGF0ZSwgXCJZWVlZLU1NLUREXCIpO1xyXG4vL1xyXG4vLyAgICAgICAgICAgICBsZXQgbm9PZkRheXMgPSBtb21lbnQuZHVyYXRpb24oZW5kLmRpZmYoc3RhcnQpKS5hc0RheXMoKTtcclxuLy9cclxuLy8gICAgICAgICAgICAgbGV0IG5vT2Zyb29tcyA9IHRoaXMuc3RhdGUucm9vbXM7XHJcbi8vICAgICAgICAgICAgIGxldCB0YXhhbW91bnQgPSBnc3Q7XHJcbi8vXHJcbi8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKHNlbGVjdGVkUm9vbXMpXHJcbi8vXHJcbi8vICAgICAgICAgICAgIGxldCBzZWxlY3RlZFNwUmVxcyA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRTcFJlcXM7XHJcbi8vXHJcbi8vXHJcbi8vICAgICAgICAgICAgIGxldCBib29rZWRSb29tcyA9IFtdO1xyXG4vL1xyXG4vLyAgICAgICAgICAgICBmb3IobGV0IGk9MDsgaTxzZWxlY3RlZFJvb21zLmxlbmd0aDsgaSsrKSB7XHJcbi8vICAgICAgICAgICAgICAgICBsZXQgcm9vbSA9IHtcclxuLy8gICAgICAgICAgICAgICAgICAgICBcInJvb21pZFwiIDogc2VsZWN0ZWRSb29tc1tpXS5yb29taWQsXHJcbi8vICAgICAgICAgICAgICAgICAgICAgXCJub29mYWR1bHRzXCIgOiAgc2VsZWN0ZWRSb29tc1tpXS5tYXhfY2FwYWNpdHlfYWR1bHQsXHJcbi8vICAgICAgICAgICAgICAgICAgICAgXCJub29mY2hpbGRzXCIgOiAgMCxcclxuLy8gICAgICAgICAgICAgICAgICAgICBcImV4dHJhYmVkXCIgOiAgc2VsZWN0ZWRSb29tc1tpXS5leHRyYWJlZGNvdW50LFxyXG4vLyAgICAgICAgICAgICAgICAgICAgIFwicHJpY2VcIiA6ICBzZWxlY3RlZFJvb21zW2ldLnJvb21fcHJpY2UsXHJcbi8vICAgICAgICAgICAgICAgICAgICAgXCJleHRyYWJlZHByaWNlXCIgOiAgMCxcclxuLy8gICAgICAgICAgICAgICAgICAgICBcInRheGFtb3VudFwiOiAgMCxcclxuLy8gICAgICAgICAgICAgICAgICAgICBcInRvdGFscHJpY2VcIiA6ICBwYXJzZUZsb2F0KHNlbGVjdGVkUm9vbXNbaV0ucm9vbV9wcmljZSkgKiBub09mRGF5cyxcclxuLy8gICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgICAgIGJvb2tlZFJvb21zLnB1c2gocm9vbSk7XHJcbi8vICAgICAgICAgICAgIH1cclxuLy9cclxuLy8gICAgICAgICAgICAgbGV0IHBhcmFtcyA9IHtcclxuLy8gICAgICAgICAgICAgICAgIFwiaG90ZWxfaWRcIjogdGhpcy5zdGF0ZS5ob3RlbF9pZCxcclxuLy8gICAgICAgICAgICAgICAgIFwiY2hlY2tpbmRhdGVcIjogY2hlY2tpbmRhdGUsXHJcbi8vICAgICAgICAgICAgICAgICBcImNoZWNrb3V0ZGF0ZVwiOiBjaGVja291dGRhdGUsXHJcbi8vICAgICAgICAgICAgICAgICBcIm5vb2ZhZHVsdHNcIjogYWR1bHRzLFxyXG4vLyAgICAgICAgICAgICAgICAgXCJub29mY2hpbGRzXCI6IGNoaWxkcmVuLFxyXG4vLyAgICAgICAgICAgICAgICAgXCJub29mcm9vbXNcIjogbm9PZnJvb21zLFxyXG4vLyAgICAgICAgICAgICAgICAgXCJwcmljZVwiIDogcHJpbmNpcGxlQW1vdW50LFxyXG4vLyAgICAgICAgICAgICAgICAgXCJ0YXhhbW91bnRcIjogdGF4YW1vdW50LFxyXG4vLyAgICAgICAgICAgICAgICAgXCJ0b3RhbHByaWNlXCI6IGFtb3VudCxcclxuLy8gICAgICAgICAgICAgICAgIFwiZmlyc3RuYW1lXCI6IGZpcnN0bmFtZSxcclxuLy8gICAgICAgICAgICAgICAgIFwibGFzdG5hbWVcIjogbGFzdG5hbWUsXHJcbi8vICAgICAgICAgICAgICAgICBcImFkZHJlc3MxXCI6IGFkZHJlc3MxLFxyXG4vLyAgICAgICAgICAgICAgICAgXCJhZGRyZXNzMlwiOiBhZGRyZXNzMixcclxuLy8gICAgICAgICAgICAgICAgIFwiY2l0eVwiOiBjaXR5LFxyXG4vLyAgICAgICAgICAgICAgICAgXCJzdGF0ZVwiOiBzdGF0ZSxcclxuLy8gICAgICAgICAgICAgICAgIFwiY291bnRyeVwiOiBjb3VudHJ5LFxyXG4vLyAgICAgICAgICAgICAgICAgXCJwaW5jb2RlXCI6IHBpbmNvZGUsXHJcbi8vICAgICAgICAgICAgICAgICBcIm1vYmlsZVwiOiBtb2JpbGUsXHJcbi8vICAgICAgICAgICAgICAgICBcImVtYWlsXCI6IGVtYWlsLFxyXG4vLyAgICAgICAgICAgICAgICAgXCJpZHByb29mXCI6IFwidGVzdC5wZGZcIixcclxuLy8gICAgICAgICAgICAgICAgIFwicm9vbXNcIjogYm9va2VkUm9vbXMsXHJcbi8vICAgICAgICAgICAgICAgICBcImFkZGl0aW9uYWxwaG9uZW51bWJlclwiOiBtb2JpbGUsXHJcbi8vICAgICAgICAgICAgICAgICBcInNwbHJlcXVlc3RcIiA6IHNlbGVjdGVkU3BSZXFzLmxlbmd0aCA+MCAgPyBKU09OLnN0cmluZ2lmeShzZWxlY3RlZFNwUmVxcykgOiBcIlwiXHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgY29uc29sZS5sb2cocGFyYW1zKVxyXG4vLyAgICAgICAgICAgICB0aGlzLnByb3BzLnNhdmVCb29raW5nKHBhcmFtcyk7XHJcbi8vXHJcbi8vXHJcbi8vICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4vLyAgICAgICAgICAgICAgICAgaW52YWxpZEZpZWxkcyA6IFtdLFxyXG4vLyAgICAgICAgICAgICAgICAgdG90YWxBbW91bnQgOiBhbW91bnQsXHJcbi8vICAgICAgICAgICAgICAgICBwcmluY2lwbGVBbW91bnQgOiBwcmluY2lwbGVBbW91bnQsXHJcbi8vICAgICAgICAgICAgICAgICBkaXNjb3VudCA6IGRpc2NvdW50LFxyXG4vLyAgICAgICAgICAgICAgICAgcHJvZ3JhbV9kZXNjcmlwdGlvbiA6IHByb2dyYW1fZGVzY3JpcHRpb24sXHJcbi8vICAgICAgICAgICAgICAgICBnc3QgOiBnc3QsXHJcbi8vICAgICAgICAgICAgICAgICBjaGVja2luZGF0ZSA6IGNoZWNraW5kYXRlLFxyXG4vLyAgICAgICAgICAgICAgICAgY2hlY2tvdXRkYXRlIDogY2hlY2tvdXRkYXRlXHJcbi8vICAgICAgICAgICAgIH0pXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICAgIGVsc2Uge1xyXG4vLyAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuLy8gICAgICAgICAgICAgICAgIHNob3dQcm9maWxlSW5mb0Vycm9yIDogdHJ1ZSxcclxuLy8gICAgICAgICAgICAgICAgIGludmFsaWRGaWVsZHMgOiBpbnZhbGlkRmllbGRzLFxyXG4vLyAgICAgICAgICAgICAgICAgdG90YWxBbW91bnQgOiBhbW91bnQsXHJcbi8vICAgICAgICAgICAgICAgICBwcmluY2lwbGVBbW91bnQgOiBwcmluY2lwbGVBbW91bnQsXHJcbi8vICAgICAgICAgICAgICAgICBkaXNjb3VudCA6IGRpc2NvdW50LFxyXG4vLyAgICAgICAgICAgICAgICAgcHJvZ3JhbV9kZXNjcmlwdGlvbiA6IHByb2dyYW1fZGVzY3JpcHRpb24sXHJcbi8vICAgICAgICAgICAgICAgICBnc3QgOiBnc3RcclxuLy8gICAgICAgICAgICAgfSlcclxuLy8gICAgICAgICB9XHJcbi8vXHJcbi8vICAgICB9XHJcbi8vXHJcbi8vICAgICBoaWRlUHJvZmlsZUluZm9FcnJvciA9ICgpID0+IHtcclxuLy8gICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuLy8gICAgICAgICAgICAgc2hvd1Byb2ZpbGVJbmZvRXJyb3IgOiBmYWxzZVxyXG4vLyAgICAgICAgIH0pXHJcbi8vICAgICB9XHJcbi8vXHJcbi8vICAgICBjb250aW51ZVRvUGF5bWVudCA9ICgpID0+IHtcclxuLy8gICAgICAgICBsZXQgdGhhdD10aGlzO1xyXG4vLyAgICAgICAgIGxldCBvcHRpb25zID0ge1xyXG4vLyAgICAgICAgICAgICAvLyBrZXk6ICdyenBfbGl2ZV91TlFnejZyT0dROTZxRScsXHJcbi8vICAgICAgICAgICAgIGtleTogJ3J6cF90ZXN0X3JuRUg1STROSHVhR0p4JyxcclxuLy8gICAgICAgICAgICAgYW1vdW50OiBwYXJzZUZsb2F0KHRoaXMuc3RhdGUudG90YWxBbW91bnQpKjEwMCwgLy8gID0gSU5SIDFcclxuLy8gICAgICAgICAgICAgbmFtZTogJ1VUSCBCb29raW5nJyxcclxuLy8gICAgICAgICAgICAgZGVzY3JpcHRpb246ICdQbGVhc2UgcGF5IHRoZSBib29raW5nIGNoYXJnZXMgaGVyZSB0byBjb25maXJtJyxcclxuLy8gICAgICAgICAgICAgaW1hZ2U6ICdodHRwczovL3V0aGRldi5uZXZlcmJlZm9yZWhvbGlkYXlzLmNvbS9hc3NldHMvaW1hZ2VzL3V0aC1sb2dvLWJsYWNrLnBuZycsXHJcbi8vICAgICAgICAgICAgIC8vIG9yZGVyX2lkOiB0aGlzLnN0YXRlLm9yZGVySWQsXHJcbi8vICAgICAgICAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbi8vICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbi8vICAgICAgICAgICAgICAgICB0aGF0LnNldFN0YXRlKHtQYXltZW50SWQ6IHJlc3BvbnNlLnJhem9ycGF5X3BheW1lbnRfaWQsIHRvdGFsQW1vdW50IDogdGhhdC5zdGF0ZS50b3RhbEFtb3VudCwgZGF0ZSA6IG1vbWVudChuZXcgRGF0ZSgpKS5mb3JtYXQoJ0REIE1NTSBZWVlZJykgLCBlbWFpbCA6dGhhdC5zdGF0ZS5lbWFpbCwgbW9iaWxlIDogdGhhdC5zdGF0ZS5tb2JpbGUgfSlcclxuLy8gICAgICAgICAgICAgICAgIC8vbGV0IFBheW1lbnRVcmwgPSBgaHR0cDovLzE1OS42NS4xNTMuNTkvc2l0ZS8jL3BheW1lbnQtc3VjY2Vzcy9gK3RoaXMucHJvcHMuYm9va2luZ0RhdGEuYm9va2luZ0lkO1xyXG4vLyAgICAgICAgICAgICAgICAgY29uc3QgcGF5bWVudElkID0gcmVzcG9uc2UucmF6b3JwYXlfcGF5bWVudF9pZDtcclxuLy9cclxuLy8gICAgICAgICAgICAgICAgIGxldCBQYXltZW50VXJsID0gYGh0dHBzOi8vdXRoZGV2Lm5ldmVyYmVmb3JlaG9saWRheXMuY29tL3BheW1lbnQtc3VjY2Vzcz9ycF9pZD1gK3BheW1lbnRJZCtgJnJhbXQ9YCt0aGF0LnN0YXRlLnRvdGFsQW1vdW50K2AmbW9iaWxlPWArdGhhdC5zdGF0ZS5tb2JpbGUrYCZlbWFpbD1gK3RoYXQuc3RhdGUuZW1haWwrYCZtZXRob2Q9Q2FyZCBwYXltZW50JmRhdGU9YCttb21lbnQodGhhdC5zdGF0ZS50b2RheSkuZm9ybWF0KCdERCBNTU0sIFlZWVknKTtcclxuLy8gICAgICAgICAgICAgICAgIGxldCBwYXJhbXMgPSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgXCJfaWRcIjogcGF5bWVudElkLFxyXG4vLyAgICAgICAgICAgICAgICAgICAgIFwicmVmZXJlbmNlXCI6ICdVVEgnLFxyXG4vLyAgICAgICAgICAgICAgICAgICAgIFwiZGlzY291bnRcIjogdGhhdC5zdGF0ZS5kaXNjb3VudCxcclxuLy8gICAgICAgICAgICAgICAgICAgICBcImdzdFwiOiB0aGF0LnN0YXRlLmdzdCxcclxuLy8gICAgICAgICAgICAgICAgICAgICBcImRlc2NcIjogJycsXHJcbi8vICAgICAgICAgICAgICAgICAgICAgXCJwcmluY2lwYWxcIjogdGhhdC5zdGF0ZS5wcmluY2lwbGVBbW91bnQsXHJcbi8vICAgICAgICAgICAgICAgICAgICAgXCJwYXltZW50dXJsXCI6IFBheW1lbnRVcmwsXHJcbi8vICAgICAgICAgICAgICAgICAgICAgXCJwcm9kXCI6IGZhbHNlXHJcbi8vICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgICAgICAvL3RoYXQucHJvcHMuY29uZmlybUJvb2tpbmcocGFyYW1zKTtcclxuLy8gICAgICAgICAgICAgICAgIGxldCBib29rUGFyYW1zID0ge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIGJvb2tpbmdJZDogdGhhdC5wcm9wcy5ib29raW5nRGF0YS5ib29raW5nSWRcclxuLy8gICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgICAgIHRoYXQucHJvcHMuY29uZmlybUJvb2tpbmcoYm9va1BhcmFtcyk7XHJcbi8vICAgICAgICAgICAgIH0sXHJcbi8vICAgICAgICAgICAgIHByZWZpbGw6IHtcclxuLy8gICAgICAgICAgICAgICAgIG5hbWU6ICdVVEgnLFxyXG4vLyAgICAgICAgICAgICAgICAgY29udGFjdDogJycsXHJcbi8vICAgICAgICAgICAgICAgICBlbWFpbDogJydcclxuLy8gICAgICAgICAgICAgfSxcclxuLy8gICAgICAgICAgICAgbm90ZXM6IHtcclxuLy8gICAgICAgICAgICAgICAgIGFkZHJlc3M6ICdVVEgnXHJcbi8vICAgICAgICAgICAgIH0sXHJcbi8vICAgICAgICAgICAgIHRoZW1lOiB7XHJcbi8vICAgICAgICAgICAgICAgICBjb2xvcjogJyMzZmE5ZjUnLFxyXG4vLyAgICAgICAgICAgICAgICAgaGlkZV90b3BiYXI6IGZhbHNlXHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICB9O1xyXG4vLyAgICAgICAgIC8vY29uc29sZS5sb2cob3B0aW9ucyk7XHJcbi8vICAgICAgICAgdmFyIHJ6cDEgPSBuZXcgd2luZG93LlJhem9ycGF5KG9wdGlvbnMpO1xyXG4vLyAgICAgICAgIHJ6cDEub24oJ3BheW1lbnQuZmFpbGVkJywgZnVuY3Rpb24gKHJlc3BvbnNlKXtcclxuLy8gICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzcG9uc2UuZXJyb3IuZGVzY3JpcHRpb24pO1xyXG4vLyAgICAgICAgIH0pO1xyXG4vLyAgICAgICAgIHJ6cDEub3BlbigpO1xyXG4vLyAgICAgfVxyXG4vL1xyXG4vLyAgICAgaGlkZUVycm9yID0gKCkgPT4ge1xyXG4vLyAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4vLyAgICAgICAgICAgICBzaG93RXJyb3IgOiBmYWxzZVxyXG4vLyAgICAgICAgIH0pXHJcbi8vICAgICB9XHJcbi8vXHJcbi8vICAgICBoaWRlSXRlbVJlbW92YWxNZXNzYWdlID0gKCkgPT4ge1xyXG4vLyAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4vLyAgICAgICAgICAgICBpdGVtUmVtb3ZhbE1lc3NhZ2UgOiBmYWxzZSxcclxuLy8gICAgICAgICB9KVxyXG4vLyAgICAgfVxyXG4vL1xyXG4vLyAgICAgZW1wdHlDYXJ0ID0gKCkgPT4ge1xyXG4vLyAgICAgICAgIGxldCBzZWxlY3RlZFJvb21zID0gdGhpcy5zdGF0ZS5zZWxlY3RlZFJvb21zO1xyXG4vL1xyXG4vLyAgICAgICAgIHNlbGVjdGVkUm9vbXMgPSBzZWxlY3RlZFJvb21zLm1hcChpdGVtID0+IHtcclxuLy8gICAgICAgICAgICAgaXRlbS5xdHkgPSAwO1xyXG4vLyAgICAgICAgICAgICByZXR1cm4gaXRlbTtcclxuLy8gICAgICAgICB9KVxyXG4vL1xyXG4vL1xyXG4vLyAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4vLyAgICAgICAgICAgICBpdGVtUmVtb3ZhbE1lc3NhZ2UgOiBmYWxzZSxcclxuLy8gICAgICAgICAgICAgc2VsZWN0ZWRSb29tcyA6IFtdLFxyXG4vLyAgICAgICAgICAgICBzZWxlY3RlZFJvb21JZHMgOiBbXSxcclxuLy8gICAgICAgICAgICAgc2VhcmNoU3RlcCA6IDFcclxuLy8gICAgICAgICB9KVxyXG4vLyAgICAgfVxyXG4vLyAgICAgaGlkZUNhbm5vdENvbnRpbnVlID0gKCkgPT4ge1xyXG4vLyAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4vLyAgICAgICAgICAgICBjYW5ub3RDb250aW51ZSA6IGZhbHNlXHJcbi8vICAgICAgICAgfSlcclxuLy8gICAgIH1cclxuLy9cclxuLy8gICAgIHNob3dGdWxsRGV0YWlsID0gKGlkKSA9PiB7XHJcbi8vICAgICAgICAgbGV0IGhvdGVsX3Jvb21zID0gdGhpcy5zdGF0ZS5ob3RlbF9yb29tcztcclxuLy8gICAgICAgICBsZXQgcm9vbUxpc3QgPSAgaG90ZWxfcm9vbXMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5yb29taWQgPT09IGlkKTtcclxuLy8gICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuLy8gICAgICAgICAgICAgc2hvd0RldGFpbFN0YXR1cyA6IHRydWUsXHJcbi8vICAgICAgICAgICAgIHJvb21JZCA6IGlkLFxyXG4vLyAgICAgICAgICAgICByb29tRGV0YWlsIDogcm9vbUxpc3QubGVuZ3RoID4gMCAmJiByb29tTGlzdFswXVxyXG4vLyAgICAgICAgIH0pXHJcbi8vICAgICB9XHJcbi8vXHJcbi8vICAgICBoaWRlRnVsbERldGFpbCA9ICgpID0+IHtcclxuLy8gICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuLy8gICAgICAgICAgICAgc2hvd0RldGFpbFN0YXR1cyA6IGZhbHNlXHJcbi8vICAgICAgICAgfSlcclxuLy8gICAgIH1cclxuLy9cclxuLy8gICAgIHNob3dTcGVjaWFsUmVxdWVzdHMgPSAoKSA9PiB7XHJcbi8vICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbi8vICAgICAgICAgICAgIHNob3dTcFJlcVN0YXQgOiB0cnVlXHJcbi8vICAgICAgICAgfSlcclxuLy8gICAgIH1cclxuLy8gICAgIGhpZGVTcGVjaWFsUmVxdWVzdHMgPSAoKSA9PiB7XHJcbi8vICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbi8vICAgICAgICAgICAgIHNob3dTcFJlcVN0YXQgOiBmYWxzZVxyXG4vLyAgICAgICAgIH0pXHJcbi8vICAgICB9XHJcbi8vXHJcbi8vICAgICBoYW5kbGVTcFNlbGVjdGlvbiA9IChlLCBzcCkgPT4ge1xyXG4vLyAgICAgICAgIGxldCBzZWxlY3RlZFNwUmVxSWRzID0gWy4uLnRoaXMuc3RhdGUuc2VsZWN0ZWRTcFJlcUlkc107XHJcbi8vICAgICAgICAgbGV0IHNlbGVjdGVkU3BSZXFzID0gWy4uLnRoaXMuc3RhdGUuc2VsZWN0ZWRTcFJlcXNdO1xyXG4vL1xyXG4vLyAgICAgICAgIGlmKGUudGFyZ2V0LmNoZWNrZWQpIHtcclxuLy8gICAgICAgICAgICAgc2VsZWN0ZWRTcFJlcUlkcy5wdXNoKHNwLnNwX2lkKVxyXG4vLyAgICAgICAgICAgICBzZWxlY3RlZFNwUmVxcy5wdXNoKHNwKVxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgICBlbHNlIHtcclxuLy8gICAgICAgICAgICAgbGV0IGluZGV4ID0gc2VsZWN0ZWRTcFJlcUlkcy5pbmRleE9mKHNwLnNwX2lkKTtcclxuLy8gICAgICAgICAgICAgc2VsZWN0ZWRTcFJlcUlkcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4vLyAgICAgICAgICAgICBzZWxlY3RlZFNwUmVxcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4vL1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuLy8gICAgICAgICAgICAgc2VsZWN0ZWRTcFJlcXMgOiBzZWxlY3RlZFNwUmVxcyxcclxuLy8gICAgICAgICAgICAgc2VsZWN0ZWRTcFJlcUlkcyA6IHNlbGVjdGVkU3BSZXFJZHNcclxuLy8gICAgICAgICB9KVxyXG4vLyAgICAgfVxyXG4vL1xyXG4vLyAgICAgcmVtb3ZlU3AgPSAoZSwgc3BfaWQpID0+IHtcclxuLy8gICAgICAgICBsZXQgc2VsZWN0ZWRTcFJlcUlkcyA9IFsuLi50aGlzLnN0YXRlLnNlbGVjdGVkU3BSZXFJZHNdO1xyXG4vLyAgICAgICAgIGxldCBzZWxlY3RlZFNwUmVxcyA9IFsuLi50aGlzLnN0YXRlLnNlbGVjdGVkU3BSZXFzXTtcclxuLy8gICAgICAgICBsZXQgaW5kZXggPSBzZWxlY3RlZFNwUmVxSWRzLmluZGV4T2Yoc3BfaWQpO1xyXG4vLyAgICAgICAgIHNlbGVjdGVkU3BSZXFJZHMuc3BsaWNlKGluZGV4LCAxKTtcclxuLy8gICAgICAgICBzZWxlY3RlZFNwUmVxcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4vLyAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4vLyAgICAgICAgICAgICBzZWxlY3RlZFNwUmVxcyA6IHNlbGVjdGVkU3BSZXFzLFxyXG4vLyAgICAgICAgICAgICBzZWxlY3RlZFNwUmVxSWRzIDogc2VsZWN0ZWRTcFJlcUlkc1xyXG4vLyAgICAgICAgIH0pXHJcbi8vXHJcbi8vICAgICB9XHJcbi8vXHJcbi8vICAgICBoaWRlUGVuZGluZ01lc3NhZ2UgPSAoKSA9PiB7XHJcbi8vICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbi8vICAgICAgICAgICAgIHNob3dQZW5kaW5nTWVzc2FnZSA6IGZhbHNlXHJcbi8vICAgICAgICAgfSlcclxuLy8gICAgIH1cclxuLy9cclxuLy8gICAgIHRvZ2dsZUNvbnRlbnQgPSAoKSA9PiB7XHJcbi8vICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbi8vICAgICAgICAgICAgIGV4cGFuZENvbnRlbnQgOiAhdGhpcy5zdGF0ZS5leHBhbmRDb250ZW50XHJcbi8vICAgICAgICAgfSlcclxuLy8gICAgIH1cclxuLy8gICAgIHJlbmRlcigpIHtcclxuLy8gICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzLmhvdGVsRGV0YWlsKVxyXG4vLyAgICAgICAgIC8vbGV0IGhvdGVsRGV0YWlsID0gdGhpcy5wcm9wcy5ob3RlbERldGFpbDtcclxuLy8gICAgICAgICBsZXQgaG90ZWxEZXRhaWwgPSB0aGlzLnN0YXRlLmhvdGVsRGV0YWlsO1xyXG4vLyAgICAgICAgIGxldCBiYW5uZXJJbWFnZXMgPSB0aGlzLnN0YXRlLmJhbm5lckltYWdlcyB8fCBbXTtcclxuLy9cclxuLy9cclxuLy8gICAgICAgICBsZXQgZ2FsbGVyeUltYWdlcyA9IHRoaXMuc3RhdGUuZ2FsbGVyeUltYWdlcyB8fCBbXTtcclxuLy8gICAgICAgICBsZXQgc3RhcnREYXRlID0gdGhpcy5zdGF0ZS5zdGFydERhdGU7XHJcbi8vICAgICAgICAgbGV0IGVuZERhdGUgPSB0aGlzLnN0YXRlLmVuZERhdGU7XHJcbi8vXHJcbi8vICAgICAgICAgbGV0IGhvdGVsX3Jvb21zID0gdGhpcy5zdGF0ZS5ob3RlbF9yb29tcztcclxuLy8gICAgICAgICBsZXQgZ2VuZXJhbF9mYWNpbGl0aWVzID0gIGhvdGVsRGV0YWlsID8gaG90ZWxEZXRhaWwuaG90ZWxfZmFjaWxpdGllcyA6IFtdO1xyXG4vLyAgICAgICAgIGxldCBob3RlbGZhY2lsaXRpZXMgPSBob3RlbERldGFpbCA/IGhvdGVsRGV0YWlsLmhvdGVsZmFjaWxpdGllcyA6IFtdO1xyXG4vLyAgICAgICAgIGxldCByb29tVHlwZXMgPSB0aGlzLnN0YXRlLnJvb21UeXBlcyB8fCBbXTtcclxuLy9cclxuLy8gICAgICAgICBsZXQgc2VsZWN0ZWRSb29tcyA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRSb29tcyB8fCBbXTtcclxuLy8gICAgICAgICBsZXQgc3BSZXF1ZXN0cyA9IHRoaXMuc3RhdGUuc3BSZXF1ZXN0cyB8fCBbXTtcclxuLy8gICAgICAgICBsZXQgc2VsZWN0ZWRTcFJlcUlkcyA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRTcFJlcUlkcyB8fCBbXTtcclxuLy8gICAgICAgICBsZXQgc2VsZWN0ZWRTcFJlcXMgPSB0aGlzLnN0YXRlLnNlbGVjdGVkU3BSZXFzIHx8IFtdO1xyXG4vL1xyXG4vLyAgICAgICAgIGxldCB0b3RhbF9jb3N0ID0wO1xyXG4vLyAgICAgICAgIGxldCB0b3RhbF9nc3QgPTA7XHJcbi8vICAgICAgICAgaWYoc2VsZWN0ZWRSb29tcy5sZW5ndGggPiAwKSB7XHJcbi8vICAgICAgICAgICAgIGZvcih2YXIgaT0wOyBpPHNlbGVjdGVkUm9vbXMubGVuZ3RoOyBpKyspIHtcclxuLy8gICAgICAgICAgICAgICAgIHRvdGFsX2Nvc3QgKz0gKHBhcnNlRmxvYXQoc2VsZWN0ZWRSb29tc1tpXS5yb29tX3ByaWNlKSAqIHBhcnNlSW50KHNlbGVjdGVkUm9vbXNbaV0ucXR5KSlcclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgICBpZihzZWxlY3RlZFNwUmVxcy5sZW5ndGggPiAwKSB7XHJcbi8vICAgICAgICAgICAgIGZvcih2YXIgaT0wOyBpPHNlbGVjdGVkU3BSZXFzLmxlbmd0aDsgaSsrKSB7XHJcbi8vICAgICAgICAgICAgICAgICBpZihzZWxlY3RlZFNwUmVxc1tpXS5jYXRlZ29yeSA9PT0gJ3BheWFibGUnKSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgdG90YWxfY29zdCArPSBwYXJzZUZsb2F0KHNlbGVjdGVkU3BSZXFzW2ldLnJhdGUpXHJcbi8vICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgICAgdG90YWxfZ3N0ID0gKHRvdGFsX2Nvc3QqMTApLzEwMDtcclxuLy8gICAgICAgICBsZXQgZ3JhbmRfdG90YWwgPSB0b3RhbF9jb3N0KyB0b3RhbF9nc3Q7XHJcbi8vICAgICAgICAgLy9ncmFuZF90b3RhbCA9IGdyYW5kX3RvdGFsPjA/IGdyYW5kX3RvdGFsLnRvRml4ZWQoMik6Jyc7XHJcbi8vICAgICAgICAgbGV0IHJhem9yR3JhbmRUb3RhbCA9IGdyYW5kX3RvdGFsKjEwMDtcclxuLy9cclxuLy8gICAgICAgICBsZXQgaW52YWxpZEZpZWxkcyA9IHRoaXMuc3RhdGUuaW52YWxpZEZpZWxkcyB8fCBbXTtcclxuLy8gICAgICAgICBjb25zb2xlLmxvZyhpbnZhbGlkRmllbGRzKVxyXG4vL1xyXG4vLyAgICAgICAgIGxldCBob3RlbEhpZ2hsaWdodHMgPSB0aGlzLnN0YXRlLmhvdGVsSGlnaGxpZ2h0cyB8fCBbXTtcclxuLy8gICAgICAgICBsZXQgaG90ZWxQb2xpY2llcyA9IHRoaXMuc3RhdGUuaG90ZWxQb2xpY2llcyB8fCBbXTtcclxuLy9cclxuLy9cclxuLy8gICAgICAgICBjb25zb2xlLmxvZyhzZWxlY3RlZFNwUmVxcylcclxuLy9cclxuLy8gICAgICAgICByZXR1cm4gKFxyXG4vLyAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cclxuLy8gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5uZXItcGFnZVwiPlxyXG4vL1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIDxIb3RlbE5hdmJhciAgc2Nyb2xsVG9TZWN0aW9uPXt0aGlzLnNjcm9sbFRvU2VjdGlvbn0vPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIHtob3RlbERldGFpbCAmJlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIDw+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImRldGFpbHMtYmFubm5lclwiPlxyXG4vL1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJvdXNlbC1jb250YWluZXJcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcm91c2VsLXRleHRcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT57aG90ZWxEZXRhaWwuaG90ZWxfbmFtZX08L2g1PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibG9jYXRpb25cIj57aG90ZWxEZXRhaWwuYWRkcmVzc308L3A+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbi8vXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29udGVudFNsaWRlciBpbWFnZXM9e2Jhbm5lckltYWdlc30vPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnNlYXJjaFN0ZXAgIT09IDIgJiZcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYm9va2luZy1jb250YWluZXIgc3RpY2t5XCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9va2luZy1wYW5lbFwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvb2tpbmctcGFuZWwtbGVmdFwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib29raW5nLW9wdGlvbnNcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGUtcGlja2VyLXBhbmVsXCI+XHJcbi8vXHJcbi8vXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEYXRlUmFuZ2VQaWNrZXJcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0RGF0ZT17c3RhcnREYXRlfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kRGF0ZT17ZW5kRGF0ZX1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU3RhcnREYXRlQ2hhbmdlPXt0aGlzLnNldFN0YXJ0RGF0ZX1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRW5kRGF0ZUNoYW5nZT17dGhpcy5zZXRFbmREYXRlfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluaW11bURhdGU9e25ldyBEYXRlKCl9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5pbXVtTGVuZ3RoPXsxfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0PSdkZC9NTS95eXl5J1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxlPXtlbkdCfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KHtzdGFydERhdGVJbnB1dFByb3BzLCBlbmREYXRlSW5wdXRQcm9wcywgZm9jdXN9KSA9PiAoXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RhdGUtcmFuZ2UnPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17J2lucHV0JyArIChmb2N1cyA9PT0gU1RBUlRfREFURSA/ICcgLWZvY3VzZWQnIDogJycpfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLnN0YXJ0RGF0ZUlucHV0UHJvcHN9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nU3RhcnQgZGF0ZSdcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdkYXRlLXJhbmdlX2Fycm93Jy8+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsnaW5wdXQnICsgKGZvY3VzID09PSBFTkRfREFURSA/ICcgLWZvY3VzZWQnIDogJycpfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLmVuZERhdGVJbnB1dFByb3BzfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0VuZCBkYXRlJ1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9EYXRlUmFuZ2VQaWNrZXI+XHJcbi8vXHJcbi8vXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWxlY3QtcGFuZWxcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWxlY3QtYm94XCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJyb29tc1wiIHZhbHVlPXt0aGlzLnN0YXRlLnJvb21zfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7aW52YWxpZEZpZWxkcy5pbmNsdWRlcygncm9vbXMnKSA/ICdlcnJvci1maWVsZCcgOiAnJ31gfT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+Um9vbXM8L29wdGlvbj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMVwiPjE8L29wdGlvbj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMlwiPjI8L29wdGlvbj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiM1wiPjM8L29wdGlvbj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNFwiPjQ8L29wdGlvbj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNVwiPjU8L29wdGlvbj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNlwiPjY8L29wdGlvbj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiN1wiPjc8L29wdGlvbj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiOFwiPjg8L29wdGlvbj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiOVwiPjkrPC9vcHRpb24+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VsZWN0LWJveFwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwiYWR1bHRzXCIgdmFsdWU9e3RoaXMuc3RhdGUuYWR1bHRzfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7aW52YWxpZEZpZWxkcy5pbmNsdWRlcygnYWR1bHRzJykgPyAnZXJyb3ItZmllbGQnIDogJyd9YH0+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPkFkdWx0czwvb3B0aW9uPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxXCI+MTwvb3B0aW9uPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyXCI+Mjwvb3B0aW9uPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIzXCI+Mzwvb3B0aW9uPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI0XCI+NDwvb3B0aW9uPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI1XCI+NTwvb3B0aW9uPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI2XCI+Njwvb3B0aW9uPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI3XCI+Nzwvb3B0aW9uPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI4XCI+ODwvb3B0aW9uPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI5XCI+OSs8L29wdGlvbj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWxlY3QtYm94XCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJjaGlsZHJlblwiIHZhbHVlPXt0aGlzLnN0YXRlLmNoaWxkcmVufVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7aW52YWxpZEZpZWxkcy5pbmNsdWRlcygnY2hpbGRyZW4nKSA/ICdlcnJvci1maWVsZCcgOiAnJ31gfT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+Q2hpbGRyZW48L29wdGlvbj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMFwiPjA8L29wdGlvbj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMVwiPjE8L29wdGlvbj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMlwiPjI8L29wdGlvbj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiM1wiPjM8L29wdGlvbj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNFwiPjQ8L29wdGlvbj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNVwiPjU8L29wdGlvbj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNlwiPjY8L29wdGlvbj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiN1wiPjc8L29wdGlvbj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiOFwiPjg8L29wdGlvbj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiOVwiPjkrPC9vcHRpb24+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbi8vXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuLy9cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLk1BWF9DQVBBQ0lUWV9NU0cgIT09ICcnICYmXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVycm9yLWZsZFwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLk1BWF9DQVBBQ0lUWV9NU0d9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9va2luZy1wYW5lbC1yaWdodFwiPlxyXG4vL1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib29raW5nLWJ1dHRvbi1ibG9ja1wiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZ2VuZXJhbC1idG5cIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnNlYXJjaFJvb21zKCl9PkJvb2sgTm93PC9idXR0b24+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbi8vXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHshdGhpcy5zdGF0ZS5pbml0U2VhcmNoICYmXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm9vbS1zZWN0aW9uIGZhY2lsaXRpZXNcIiBpZD1cImhvdGVsLW92ZXJ2aWV3XCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi1oZWFkZXJcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1Pk92ZXJ2aWV3PC9oNT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tY29udGVudFwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZ2VuZXJhbC1pbmZvXCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYWRkcmVzcy1zbS1pY29cIj57aG90ZWxEZXRhaWwuYWRkcmVzc308L2xpPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInBob25lLXNtLWljb1wiPntob3RlbERldGFpbC5waG9uZW5vfSAsIHtob3RlbERldGFpbC5tb2JpbGVub308L2xpPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpICBjbGFzc05hbWU9XCJtYWlsLXNtLWljb1wiPntob3RlbERldGFpbC5lbWFpbH08L2xpPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4vL1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGV4dHJhLWNvbnRlbnQgJHt0aGlzLnN0YXRlLmV4cGFuZENvbnRlbnQgPyAnIGFjdGl2ZScgOiAnJ31gfT5cclxuLy9cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcnZpZXctZGVzY3JpcHRpb25cIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbCA6IGhvdGVsRGV0YWlsLmhvdGVsX2Rlc2N9fSAvPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbi8vXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aG90ZWxIaWdobGlnaHRzLmxlbmd0aCA+IDAgJiZcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWItaGVhZGVyXCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5IaWdobGlnaHRzPC9oNT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiaGlnaGxpZ2h0LXRhYlwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aG90ZWxIaWdobGlnaHRzLm1hcChobCA9PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPntobC5oaWdobGlnaHRzfTwvbGk+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4vL1xyXG4vL1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb2xpY3ktYm94XCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN1Yi1oZWFkZXJcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PkhvdGVsIFBvbGljaWVzPC9oNT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5DaGVjayBJbiBUaW1lOiA8c3BhbiBjbGFzc05hbWU9XCJmb250LWJvbGRcIj57aG90ZWxEZXRhaWwgPyBob3RlbERldGFpbC5jaGVja2luIDogJyd9PC9zcGFuPjwvcD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5DaGVjayBPdXQgVGltZTogPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+e2hvdGVsRGV0YWlsID8gaG90ZWxEZXRhaWwuY2hlY2tvdXQgOiAnJ308L3NwYW4+PC9wPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbi8vXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aG90ZWxQb2xpY2llcy5tYXAoaHAgPT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvbGljeS1ib3ggaW5kZW50XCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3ViLWhlYWRlclwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PntocC5jYXRlZ29yeX08L2g1PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2hwLnBvbGljeS5tYXAocG9sID0+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57cG9sLnBvbGljeX08L3A+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4vL1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuLy9cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJjb250ZW50LWhpZGVcIiBvbkNsaWNrPXsoKT0+IHRoaXMudG9nZ2xlQ29udGVudCgpfT5TaG93IHt0aGlzLnN0YXRlLmV4cGFuZENvbnRlbnQgPyAnbGVzcycgOiAnbW9yZSd9PC9uYXY+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuLy9cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicm9vbS1zZWN0aW9uXCIgaWQ9XCJob3RlbC1yb29tc1wiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuLy9cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24taGVhZGVyXCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnNlYXJjaFN0ZXAgPT09IDIgPyAnQm9va2luZyBEZXRhaWxzJyA6ICdSb29tcyd9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDU+XHJcbi8vXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmluaXRTZWFyY2ggJiYgdGhpcy5zdGF0ZS5zZWFyY2hTdGVwID09PSAxICYmXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidGV4dC1saW5rIGJhY2tcIlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuYmFja1RvRGV0YWlsKCl9PkJhY2s8L2J1dHRvbj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4vL1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmluaXRTZWFyY2ggJiZcclxuLy9cclxuLy9cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF2YWlsYWJsZS1yb29tc1wiPlxyXG4vL1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5zZWFyY2hTdGVwID09PSAxICYmXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aG90ZWxfcm9vbXMubGVuZ3RoID09PSAwICYmXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vLXJlc3VsdFwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb21pbmctc29vbi13cmFwcGVyXCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5ObyBIb3RlbHMgRm91bmQ8L2gxPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5TZWFyY2ggQWdhaW4gZm9yIHJpZ2h0IHBsYWNlLjwvcD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2hvdGVsX3Jvb21zLm1hcChyb29tID0+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvb21TZWFyY2hCbG9jayBpdGVtPXtyb29tfSBzZWxlY3RSb29tPXt0aGlzLnNlbGVjdFJvb219XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFJvb21zPXt0aGlzLnN0YXRlLnNlbGVjdGVkUm9vbXN9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFJvb21JZHM9e3RoaXMuc3RhdGUuc2VsZWN0ZWRSb29tSWRzfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlUXR5PXt0aGlzLmNoYW5nZVF0eX1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dGdWxsRGV0YWlsPXt0aGlzLnNob3dGdWxsRGV0YWlsfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb29tLWJvb2stc3VibWl0XCI+XHJcbi8vXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJnZW5lcmFsLWJ0blwiXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmNvbnRpbnVlVG9TdW1tYXJ5KCl9PkNvbnRpbnVlXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuLy9cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuc2VhcmNoU3RlcCA9PT0gMiAmJlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdW1tYXJ5LXRhYmxlXCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlXCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlJvb21zPC90aD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5RdHk8L3RoPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlByaWNlPC90aD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Ub3RhbCBQcmljZTwvdGg+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+PC90aD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2VsZWN0ZWRSb29tcy5tYXAocm9vbSA9PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN1bW1hcnlJdGVtIGl0ZW09e3Jvb219IHNlbGVjdFJvb209e3RoaXMuc2VsZWN0Um9vbX1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFJvb21zPXt0aGlzLnN0YXRlLnNlbGVjdGVkUm9vbXN9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRSb29tSWRzPXt0aGlzLnN0YXRlLnNlbGVjdGVkUm9vbUlkc31cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VRdHk9e3RoaXMuY2hhbmdlUXR5fVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuLy9cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cInNwZWNpYWwtc2VydmljZVwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbHNwYW49XCI1XCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5hdiBvbkNsaWNrPXsoKSA9PiB0aGlzLnNob3dTcGVjaWFsUmVxdWVzdHMoKX0gY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+QWRkIFNwZWNpYWwgUmVxdWVzdHMgKzwvbmF2PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuLy9cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3NlbGVjdGVkU3BSZXFzLmxlbmd0aCA+MCAmJlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFNwUmVxcy5maWx0ZXIoc3AgPT4gc3AuY2F0ZWdvcnkgPT09ICdwYXlhYmxlJykubWFwKHNwID0+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwic3BlY2lhbC1zZXJ2aWNlXCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbFNwYW49XCIzXCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntzcC50aXRsZX08L3NwYW4+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+4oK5IHtzcC5yYXRlfTwvdGQ+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImRlbGV0ZS1pdGVtXCIgb25DbGljaz17KGUpID0+IHRoaXMucmVtb3ZlU3AoZSxzcC5zcF9pZCl9PjwvYnV0dG9uPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2VsZWN0ZWRTcFJlcXMubGVuZ3RoID4wICYmXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkU3BSZXFzLmZpbHRlcihzcCA9PiBzcC5jYXRlZ29yeSA9PT0gJ25vbiBwYXlhYmxlJykubWFwKHNwID0+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwic3BlY2lhbC1zZXJ2aWNlXCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbFNwYW49XCIzXCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntzcC50aXRsZX08L3NwYW4+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+4oK5IDA8L3RkPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJkZWxldGUtaXRlbVwiIG9uQ2xpY2s9eyhlKSA9PiB0aGlzLnJlbW92ZVNwKGUsc3Auc3BfaWQpfT48L2J1dHRvbj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuLy9cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4vL1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48L3RkPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPlRPVEFMPC90ZD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJmb250LWJvbGRcIj7igrkge3RvdGFsX2Nvc3QudG9GaXhlZCgyKX08L3RkPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjwvdGQ+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuLy9cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJmb250LWJvbGRcIj5HU1QgMTAuMDAlPC90ZD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJmb250LWJvbGRcIj7igrkge3RvdGFsX2dzdC50b0ZpeGVkKDIpfTwvdGQ+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuLy9cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4vL1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48L3RkPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPkdSQU5EIFRPVEFMPC90ZD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJmb250LWJvbGRcIj7igrkge2dyYW5kX3RvdGFsLnRvRml4ZWQoMil9PC90ZD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48L3RkPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY29sU3Bhbj1cIjVcIj5DaGVjay1pbiAmIENoZWNrLW91dDogPHNwYW5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb250LWJvbGRcIj57bW9tZW50KHRoaXMuc3RhdGUuY2hlY2tpbmRhdGUpLmZvcm1hdCgnREQgTU1NIFlZWVknKX0gLSB7bW9tZW50KHRoaXMuc3RhdGUuY2hlY2tvdXRkYXRlKS5mb3JtYXQoJ0REIE1NTSBZWVlZJyl9PC9zcGFuPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbi8vXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbi1oZWFkZXJcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+UGVyc29uYWwgRGV0YWlsczwvaDU+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuLy9cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImZvcm0tY29udGFpbmVyXCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ib3hcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+Rmlyc3QgTmFtZTwvbGFiZWw+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImZpcnN0bmFtZVwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZmlyc3RuYW1lfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BpbnB1dC1maWVsZCAke2ludmFsaWRGaWVsZHMuaW5jbHVkZXMoJ2ZpcnN0bmFtZScpID8gJ2Vycm9yLWZpZWxkJyA6ICcnfWB9Lz5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ib3hcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+TGFzdCBOYW1lPC9sYWJlbD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibGFzdG5hbWVcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmxhc3RuYW1lfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BpbnB1dC1maWVsZCAke2ludmFsaWRGaWVsZHMuaW5jbHVkZXMoJ2xhc3RuYW1lJykgPyAnZXJyb3ItZmllbGQnIDogJyd9YH0vPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWJveFwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5BZGRyZXNzIDE8L2xhYmVsPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJhZGRyZXNzMVwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuYWRkcmVzczF9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGlucHV0LWZpZWxkICR7aW52YWxpZEZpZWxkcy5pbmNsdWRlcygnYWRkcmVzczEnKSA/ICdlcnJvci1maWVsZCcgOiAnJ31gfS8+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtYm94XCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkFkZHJlc3MgMjwvbGFiZWw+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImFkZHJlc3MyXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5hZGRyZXNzMn1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgaW5wdXQtZmllbGQgJHtpbnZhbGlkRmllbGRzLmluY2x1ZGVzKCdhZGRyZXNzMicpID8gJ2Vycm9yLWZpZWxkJyA6ICcnfWB9Lz5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtM1wiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ib3hcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+Q2l0eTwvbGFiZWw+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImNpdHlcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmNpdHl9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGlucHV0LWZpZWxkICR7aW52YWxpZEZpZWxkcy5pbmNsdWRlcygnY2l0eScpID8gJ2Vycm9yLWZpZWxkJyA6ICcnfWB9Lz5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtM1wiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ib3hcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+U3RhdGU8L2xhYmVsPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJzdGF0ZVwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuc3RhdGV9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGlucHV0LWZpZWxkICR7aW52YWxpZEZpZWxkcy5pbmNsdWRlcygnc3RhdGUnKSA/ICdlcnJvci1maWVsZCcgOiAnJ31gfS8+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTNcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtYm94XCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkNvdW50cnk8L2xhYmVsPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJjb3VudHJ5XCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5jb3VudHJ5fVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BpbnB1dC1maWVsZCAke2ludmFsaWRGaWVsZHMuaW5jbHVkZXMoJ2NvdW50cnknKSA/ICdlcnJvci1maWVsZCcgOiAnJ31gfS8+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTNcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtYm94XCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlBpbmNvZGU8L2xhYmVsPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJwaW5jb2RlXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5waW5jb2RlfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BpbnB1dC1maWVsZCAke2ludmFsaWRGaWVsZHMuaW5jbHVkZXMoJ3BpbmNvZGUnKSA/ICdlcnJvci1maWVsZCcgOiAnJ31gfS8+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTRcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtYm94XCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPk1vYmlsZTwvbGFiZWw+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BpbnB1dC1maWVsZCAke2ludmFsaWRGaWVsZHMuaW5jbHVkZXMoJ21vYmlsZScpID8gJ2Vycm9yLWZpZWxkJyA6ICcnfWB9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJtb2JpbGVcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm1vYmlsZX0vPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00XCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWJveFwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5BZGRpdGlvbmFsIFBob25lPC9sYWJlbD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGlucHV0LWZpZWxkICR7aW52YWxpZEZpZWxkcy5pbmNsdWRlcygnYWRkaXRpb25hbHBob25lbnVtYmVyJykgPyAnZXJyb3ItZmllbGQnIDogJyd9YH1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImFkZGl0aW9uYWxwaG9uZW51bWJlclwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuYWRkaXRpb25hbHBob25lbnVtYmVyfS8+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTRcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtYm94XCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkVtYWlsPC9sYWJlbD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCJcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgaW5wdXQtZmllbGQgJHtpbnZhbGlkRmllbGRzLmluY2x1ZGVzKCdlbWFpbCcpID8gJ2Vycm9yLWZpZWxkJyA6ICcnfWB9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZW1haWx9Lz5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuLy9cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGF5bWVudC13cmFwXCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJnZW5lcmFsLWJ0biBncmV5XCIgb25DbGljaz17KCk9PiB0aGlzLmJhY2tUb0NhcnQoKX0+QmFjazwvYnV0dG9uPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZ2VuZXJhbC1idG5cIlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHRoaXMuc2F2ZUJvb2tpbmcoZSwgZ3JhbmRfdG90YWwsIHRvdGFsX2Nvc3QsIDAuMDAsICcnLCB0b3RhbF9nc3QpfT5Db250aW51ZVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUbyBQYXltZW50XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuLy9cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbi8vXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyF0aGlzLnN0YXRlLmluaXRTZWFyY2ggJiZcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvb20tY29udGFpbmVyXCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtob3RlbF9yb29tcy5sZW5ndGggPT09IDAgJiZcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuby1yZXN1bHRcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlJvb21zIHdpbGwgYmUgYWRkZWQgc29vbjwvcD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuLy9cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2hvdGVsX3Jvb21zLm1hcChyb29tID0+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um9vbUJsb2NrIGl0ZW09e3Jvb219IHNob3dGdWxsRGV0YWlsPXt0aGlzLnNob3dGdWxsRGV0YWlsfS8+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbi8vXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuLy9cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgeyF0aGlzLnN0YXRlLmluaXRTZWFyY2ggJiZcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuLy9cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiY29udGVudC1hcmVhIHRleHQtY29udGVudFwiIGlkPVwiaG90ZWwtZmFjaWxpdGllc1wiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi1oZWFkZXJcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5GYWNpbGl0aWVzICYgQXR0cmFjdGlvbnM8L2g1PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmZWF0dXJlLXdyYXBwZXIgdGhyZWUtcGVyLWNvbCBpbWFnZS10b3BcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHshaG90ZWxmYWNpbGl0aWVzIHx8IGhvdGVsZmFjaWxpdGllcy5sZW5ndGggPT09IDAgJiZcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5GYWNpbGl0aWVzIHdpbGwgYmUgYWRkZWQgc29vbi48L2g1PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4vL1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2hvdGVsZmFjaWxpdGllcyAmJiBob3RlbGZhY2lsaXRpZXMubGVuZ3RoID4gMCAmJlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aG90ZWxmYWNpbGl0aWVzLm1hcCgoZmFjLCBpbmRleCkgPT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZhY2lsaXR5TmV3QmxvY2sgaXRlbT17ZmFjfSBpbWdBbGlnbj17aW5kZXggJSAyID09PSAxID8gJ2xlZnQnIDogJ3JpZ2h0J30vPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJyb29tLXNlY3Rpb25cIiBpZD1cImhvdGVsLWdhbGxlcnlcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24taGVhZGVyXCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+R2FsbGVyeTwvaDU+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R2FsbGVyeSBnYWxsZXJ5SW1hZ2VzPXtnYWxsZXJ5SW1hZ2VzfSAvPlxyXG4vL1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4vL1xyXG4vL1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIH1cclxuLy9cclxuLy9cclxuLy9cclxuLy8gICAgICAgICAgICAgICAgICAgICA8Rm9vdGVyIC8+XHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuLy9cclxuLy8gICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnNob3dFcnJvciAmJlxyXG4vLyAgICAgICAgICAgICAgICAgPEFsZXJ0TW9kYWxcclxuLy8gICAgICAgICAgICAgICAgICAgICBtb2RhbEhlYWRlciA9IHtmYWxzZX1cclxuLy8gICAgICAgICAgICAgICAgICAgICBtb2RhbEZvb3RlciA9IHt0cnVlfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIG1vZGFsVGl0bGUgPSBcIldhcm5pbmdcIlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIG1vZGFsQm9keSA9IFwiUGxlYXNlIHNlbGVjdCB5b3VyIGNob2ljZXNcIlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIG1vZGFsU3RhdHVzPXt0aGlzLnN0YXRlLnNob3dFcnJvcn1cclxuLy8gICAgICAgICAgICAgICAgICAgICBPS0J1dHRvbj17dHJ1ZX1cclxuLy8gICAgICAgICAgICAgICAgICAgICBDQU5DRUxCdXR0b249e2ZhbHNlfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIE9LQWN0aW9uPXt0aGlzLmhpZGVFcnJvcn1cclxuLy8gICAgICAgICAgICAgICAgIC8+XHJcbi8vICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5zaG93UHJvZmlsZUluZm9FcnJvciAmJlxyXG4vLyAgICAgICAgICAgICAgICAgPEFsZXJ0TW9kYWxcclxuLy8gICAgICAgICAgICAgICAgICAgICBtb2RhbEhlYWRlciA9IHtmYWxzZX1cclxuLy8gICAgICAgICAgICAgICAgICAgICBtb2RhbEZvb3RlciA9IHt0cnVlfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIG1vZGFsVGl0bGUgPSBcIlByb2ZpbGUgRGV0YWlsc1wiXHJcbi8vICAgICAgICAgICAgICAgICAgICAgbW9kYWxCb2R5ID0gXCJQbGVhc2UgZW50ZXIgeW91ciBwZXJzb25hbCBpbmZvcm1hdGlvbiB0byBwcm9jZWVkXCJcclxuLy8gICAgICAgICAgICAgICAgICAgICBtb2RhbFN0YXR1cz17dGhpcy5zdGF0ZS5zaG93UHJvZmlsZUluZm9FcnJvcn1cclxuLy8gICAgICAgICAgICAgICAgICAgICBPS0J1dHRvbj17dHJ1ZX1cclxuLy8gICAgICAgICAgICAgICAgICAgICBDQU5DRUxCdXR0b249e2ZhbHNlfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIE9LQWN0aW9uPXt0aGlzLmhpZGVQcm9maWxlSW5mb0Vycm9yfVxyXG4vLyAgICAgICAgICAgICAgICAgLz5cclxuLy8gICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLml0ZW1SZW1vdmFsTWVzc2FnZSAmJlxyXG4vLyAgICAgICAgICAgICAgICAgPEFsZXJ0TW9kYWxcclxuLy8gICAgICAgICAgICAgICAgICAgICBtb2RhbEhlYWRlciA9IHtmYWxzZX1cclxuLy8gICAgICAgICAgICAgICAgICAgICBtb2RhbEZvb3RlciA9IHt0cnVlfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIG1vZGFsVGl0bGUgPSBcIldhcm5pbmchXCJcclxuLy8gICAgICAgICAgICAgICAgICAgICBtb2RhbEJvZHkgPSBcIkFyZSB5b3Ugc3VyZSB0byByZW1vdmUgdGhpcyByb29tPyBZb3Ugd2lsbCBiZSByZWRpcmVjdGVkIHRvIHRoZSByb29tcyBsaXN0LlwiXHJcbi8vICAgICAgICAgICAgICAgICAgICAgbW9kYWxTdGF0dXM9e3RoaXMuc3RhdGUuaXRlbVJlbW92YWxNZXNzYWdlfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIE9LQnV0dG9uPXt0cnVlfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIENBTkNFTEJ1dHRvbj17dHJ1ZX1cclxuLy8gICAgICAgICAgICAgICAgICAgICBPS0FjdGlvbj17dGhpcy5lbXB0eUNhcnR9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgQ0FOQ0VMQWN0aW9uPXt0aGlzLmhpZGVJdGVtUmVtb3ZhbE1lc3NhZ2V9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgT0tUZXh0ID0gXCJPS1wiXHJcbi8vICAgICAgICAgICAgICAgICAgICAgQ0FOQ0VMVGV4dCA9IFwiQ0FOQ0VMXCJcclxuLy8gICAgICAgICAgICAgICAgIC8+XHJcbi8vICAgICAgICAgICAgICAgICB9XHJcbi8vXHJcbi8vICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5jYW5ub3RDb250aW51ZSAmJlxyXG4vLyAgICAgICAgICAgICAgICAgPEFsZXJ0TW9kYWxcclxuLy8gICAgICAgICAgICAgICAgICAgICBtb2RhbEhlYWRlciA9IHtmYWxzZX1cclxuLy8gICAgICAgICAgICAgICAgICAgICBtb2RhbEZvb3RlciA9IHt0cnVlfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIG1vZGFsVGl0bGUgPSBcIldhcm5pbmchXCJcclxuLy8gICAgICAgICAgICAgICAgICAgICBtb2RhbEJvZHkgPSB7dGhpcy5zdGF0ZS5jYW5ub3RDb250aW51ZU1lc3NhZ2V9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgbW9kYWxTdGF0dXM9e3RoaXMuc3RhdGUuY2Fubm90Q29udGludWV9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgT0tCdXR0b249e3RydWV9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgQ0FOQ0VMQnV0dG9uPXtmYWxzZX1cclxuLy8gICAgICAgICAgICAgICAgICAgICBPS0FjdGlvbj17dGhpcy5oaWRlQ2Fubm90Q29udGludWV9XHJcbi8vICAgICAgICAgICAgICAgICAvPlxyXG4vLyAgICAgICAgICAgICAgICAgfVxyXG4vL1xyXG4vLyAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuc2hvd0RldGFpbFN0YXR1cyAmJlxyXG4vLyAgICAgICAgICAgICAgICAgPEZ1bGxXaWR0aE1vZGFsXHJcbi8vICAgICAgICAgICAgICAgICAgICAgbW9kYWxIZWFkZXIgPSB7dHJ1ZX1cclxuLy8gICAgICAgICAgICAgICAgICAgICBtb2RhbEZvb3RlciA9IHt0cnVlfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIG1vZGFsVGl0bGUgPSB7aG90ZWxEZXRhaWwuaG90ZWxfbmFtZX1cclxuLy8gICAgICAgICAgICAgICAgICAgICBtb2RhbEJvZHkgPSB7PFJvb21EZXRhaWwgcm9vbURldGFpbD17dGhpcy5zdGF0ZS5yb29tRGV0YWlsfSBoaWRlRnVsbERldGFpbD17dGhpcy5oaWRlRnVsbERldGFpbH0gLz59XHJcbi8vICAgICAgICAgICAgICAgICAgICAgbW9kYWxTdGF0dXM9e3RoaXMuc3RhdGUuc2hvd0RldGFpbFN0YXR1c31cclxuLy8gICAgICAgICAgICAgICAgICAgICBPS0J1dHRvbj17dHJ1ZX1cclxuLy8gICAgICAgICAgICAgICAgICAgICBDQU5DRUxCdXR0b249e2ZhbHNlfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIE9LQWN0aW9uPXt0aGlzLmhpZGVGdWxsRGV0YWlsfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIENBTkNFTEFjdGlvbj17dGhpcy5oaWRlRnVsbERldGFpbH1cclxuLy8gICAgICAgICAgICAgICAgICAgICBPS1RleHQgPSBcIk9LXCJcclxuLy8gICAgICAgICAgICAgICAgICAgICBDQU5DRUxUZXh0ID0gXCJDQU5DRUxcIlxyXG4vLyAgICAgICAgICAgICAgICAgLz5cclxuLy8gICAgICAgICAgICAgICAgIH1cclxuLy9cclxuLy8gICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnNob3dTcFJlcVN0YXQgJiZcclxuLy8gICAgICAgICAgICAgICAgIDxBbGVydE1vZGFsXHJcbi8vICAgICAgICAgICAgICAgICAgICAgbW9kYWxIZWFkZXIgPSB7ZmFsc2V9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgbW9kYWxGb290ZXIgPSB7dHJ1ZX1cclxuLy8gICAgICAgICAgICAgICAgICAgICBtb2RhbFRpdGxlID0gXCJXYXJuaW5nIVwiXHJcbi8vICAgICAgICAgICAgICAgICAgICAgbW9kYWxCb2R5ID0gezxIb3RlbFNwUmVxTGlzdCBzcFJlcXVlc3RzPXtzcFJlcXVlc3RzfSBzZWxlY3RlZFNwUmVxSWRzPXt0aGlzLnN0YXRlLnNlbGVjdGVkU3BSZXFJZHN9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFNwUmVxcz17dGhpcy5zdGF0ZS5zZWxlY3RlZFNwUmVxc30gaGFuZGxlU3BTZWxlY3Rpb249e3RoaXMuaGFuZGxlU3BTZWxlY3Rpb259IC8+fVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIG1vZGFsU3RhdHVzPXt0aGlzLnN0YXRlLnNob3dTcFJlcVN0YXR9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgT0tCdXR0b249e3RydWV9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgQ0FOQ0VMQnV0dG9uPXtmYWxzZX1cclxuLy8gICAgICAgICAgICAgICAgICAgICBPS0FjdGlvbj17dGhpcy5oaWRlU3BlY2lhbFJlcXVlc3RzfVxyXG4vLyAgICAgICAgICAgICAgICAgLz5cclxuLy8gICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnNob3dQZW5kaW5nTWVzc2FnZSAmJlxyXG4vLyAgICAgICAgICAgICAgICAgPEFsZXJ0TW9kYWxcclxuLy8gICAgICAgICAgICAgICAgICAgICBtb2RhbEhlYWRlciA9IHtmYWxzZX1cclxuLy8gICAgICAgICAgICAgICAgICAgICBtb2RhbEZvb3RlciA9IHt0cnVlfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIG1vZGFsVGl0bGUgPSBcIldhcm5pbmchXCJcclxuLy8gICAgICAgICAgICAgICAgICAgICBtb2RhbEJvZHkgPSB7XCJCb29raW5nIGlzIHRlbXBlcm9yaWx5IHVuYXZhaWxhYmxlIGR1ZSB0byBDb3ZpZC0xOS4gSXQgd2lsbCBiZSBhdmFpbGFibGUgb25seSBmcm9tIEp1bHkgMjAyMSBvbndhcmRzLiBGb3IgZnVydGhlciBpbmZvcm1hdGlvbiBwbGVhc2Ugc2VuZCBhbiBlbWFpbCB0byBib29raW5nQHV0aGhvdGVscy5jb20gb3IgY2FsbCArOTEgOTc0NjgzODg4MywrOTEgOTU2NzMzODg4NC5cIn1cclxuLy8gICAgICAgICAgICAgICAgICAgICBtb2RhbFN0YXR1cz17dGhpcy5zdGF0ZS5zaG93UGVuZGluZ01lc3NhZ2V9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgT0tCdXR0b249e3RydWV9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgQ0FOQ0VMQnV0dG9uPXtmYWxzZX1cclxuLy8gICAgICAgICAgICAgICAgICAgICBPS0FjdGlvbj17dGhpcy5oaWRlUGVuZGluZ01lc3NhZ2V9XHJcbi8vICAgICAgICAgICAgICAgICAvPlxyXG4vLyAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICA8L2Rpdj5cclxuLy9cclxuLy8gICAgICAgICApO1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcclxuICAgIGhvdGVsRGF0YTpzdGF0ZS5Ib3RlbFJlZHVjZXIuaG90ZWxEYXRhLFxyXG4gICAvLyBmYWNpbGl0eURhdGE6c3RhdGUuSG90ZWxSZWR1Y2VyLmZhY2lsaXR5RGF0YSxcclxuICAgIGJvb2tpbmdEYXRhIDogc3RhdGUuSG90ZWxSZWR1Y2VyLmJvb2tpbmdEYXRhXHJcbn0pO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXHJcbiAgICBtYXBTdGF0ZVRvUHJvcHMsXHJcbiAgICB7XHJcblxyXG4gICAgICAgIHNlYXJjaFJvb21zIDogSG90ZWxBY3Rpb25zLnNlYXJjaFJvb21zLFxyXG4gICAgICAgIHNhdmVCb29raW5nIDogSG90ZWxBY3Rpb25zLnNhdmVCb29raW5nLFxyXG4gICAgICAgIGNvbmZpcm1Cb29raW5nIDogSG90ZWxBY3Rpb25zLmNvbmZpcm1Cb29raW5nLFxyXG4gICAgICAgIGdldEJhbm5lckltYWdlcyA6IEhvdGVsQWN0aW9ucy5nZXRCYW5uZXJJbWFnZXMsXHJcbiAgICAgICAgLy9nZXRIb3RlbEhpZ2hsaWdodHMgOiBIb3RlbEFjdGlvbnMuZ2V0SG90ZWxIaWdobGlnaHRzLFxyXG4gICAgICAgIGdldEhvdGVsUG9saWNpZXMgOiBIb3RlbEFjdGlvbnMuZ2V0SG90ZWxQb2xpY2llcyxcclxuICAgICAgICBnZXRTcFJlcXVlc3RzIDogSG90ZWxBY3Rpb25zLmdldFNwUmVxdWVzdHNcclxuICAgIH1cclxuKShIb3RlbERldGFpbFNsdWcpO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJTdXNwZW5zZSIsImxhenkiLCJ1c2VSb3V0ZXIiLCJGb290ZXIiLCJDb250ZW50U2xpZGVyIiwiZ2V0VXJsU2VnbWVudCIsImNvbm5lY3QiLCJIb3RlbEFjdGlvbnMiLCJlbkdCIiwiRGF0ZVJhbmdlUGlja2VyIiwiU1RBUlRfREFURSIsIkVORF9EQVRFIiwiUm9vbUJsb2NrIiwiUm9vbURldGFpbCIsIlJvb21TZWFyY2hCbG9jayIsIkZhY2lsaXR5TmV3QmxvY2siLCJTdW1tYXJ5SXRlbSIsIkFsZXJ0TW9kYWwiLCJtb21lbnQiLCJGdWxsV2lkdGhNb2RhbCIsIkhvdGVsTmF2YmFyIiwiSG90ZWxTcFJlcUxpc3QiLCJHYWxsZXJ5IiwiSU1BR0VfUEFUSCIsIkFQSSIsIkhvdGVsRGV0YWlsU2x1ZyIsImhvdGVsRGV0YWlsIiwiZ2FsbGVyeUltYWdlcyIsImhvdGVsX3Jvb21zIiwicm91dGVyIiwiaG90ZWxfdXJsIiwicXVlcnkiLCJjb25zb2xlIiwibG9nIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJob3RlbERhdGEiLCJIb3RlbFJlZHVjZXIiLCJib29raW5nRGF0YSIsInNlYXJjaFJvb21zIiwic2F2ZUJvb2tpbmciLCJjb25maXJtQm9va2luZyIsImdldEJhbm5lckltYWdlcyIsImdldEhvdGVsUG9saWNpZXMiLCJnZXRTcFJlcXVlc3RzIl0sInNvdXJjZVJvb3QiOiIifQ==