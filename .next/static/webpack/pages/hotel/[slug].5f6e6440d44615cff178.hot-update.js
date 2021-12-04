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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaG90ZWwvW3NsdWddLjVmNmU2NDQwZDQ0NjE1Y2ZmMTc4LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTTBCLEdBQUcsR0FBRyx3RkFBWixFQUNBOztBQThFQSxJQUFNQyxlQUFlLEdBQUUsU0FBakJBLGVBQWlCLE9BQWdEO0FBQUE7O0FBQUEsTUFBOUNDLFdBQThDLFFBQTlDQSxXQUE4QztBQUFBLE1BQWpDQyxhQUFpQyxRQUFqQ0EsYUFBaUM7QUFBQSxNQUFsQkMsV0FBa0IsUUFBbEJBLFdBQWtCO0FBRW5FLE1BQU1DLE1BQU0sR0FBRzNCLHNEQUFTLEVBQXhCO0FBQ0EsTUFBUTRCLFNBQVIsR0FBc0JELE1BQU0sQ0FBQ0UsS0FBN0IsQ0FBUUQsU0FBUjtBQUNBRSxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWVAsV0FBWjtBQUNBTSxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWU4sYUFBWjtBQUNBSyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUwsV0FBWjtBQUVBLHNCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREosQ0FJSztBQUNBO0FBTEw7QUFPSCxDQWZELEVBaUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0dBcnpDTUg7VUFFYXZCOzs7S0FGYnVCOztBQXd6Q04sSUFBTVMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFBQyxLQUFLO0FBQUEsU0FBSztBQUM5QkMsSUFBQUEsU0FBUyxFQUFDRCxLQUFLLENBQUNFLFlBQU4sQ0FBbUJELFNBREM7QUFFL0I7QUFDQ0UsSUFBQUEsV0FBVyxFQUFHSCxLQUFLLENBQUNFLFlBQU4sQ0FBbUJDO0FBSEgsR0FBTDtBQUFBLENBQTdCOzs7QUFPQSwrREFBZWhDLG9EQUFPLENBQ2xCNEIsZUFEa0IsRUFFbEI7QUFFSUssRUFBQUEsV0FBVyxFQUFHaEMsdURBRmxCO0FBR0lpQyxFQUFBQSxXQUFXLEVBQUdqQyx1REFIbEI7QUFJSWtDLEVBQUFBLGNBQWMsRUFBR2xDLDBEQUpyQjtBQUtJbUMsRUFBQUEsZUFBZSxFQUFHbkMsMkRBTHRCO0FBTUk7QUFDQW9DLEVBQUFBLGdCQUFnQixFQUFHcEMsNERBUHZCO0FBUUlxQyxFQUFBQSxhQUFhLEVBQUdyQyx5REFBMEJxQztBQVI5QyxDQUZrQixDQUFQLENBWWJuQixlQVphLENBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaG90ZWwvW3NsdWddLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsU3VzcGVuc2UsIGxhenkgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi8uLi92aWV3cy9Gb290ZXJcIjtcclxuaW1wb3J0IENvbnRlbnRTbGlkZXIgZnJvbSBcIi4uLy4uL3ZpZXdzL2NvbW1vbi9ob3RlbFNsaWRlclwiO1xyXG5pbXBvcnQge2dldFVybFNlZ21lbnR9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvQ3VzdG9tRnVuY3Rpb25zXCI7XHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCAqIGFzIEhvdGVsQWN0aW9ucyBmcm9tIFwiLi4vLi4vYWN0aW9ucy9ob3RlbFwiO1xyXG5pbXBvcnQgeyBlbkdCIH0gZnJvbSAnZGF0ZS1mbnMvbG9jYWxlJ1xyXG5pbXBvcnQgeyBEYXRlUmFuZ2VQaWNrZXIsIFNUQVJUX0RBVEUsIEVORF9EQVRFIH0gZnJvbSAncmVhY3QtbmljZS1kYXRlcydcclxuaW1wb3J0ICdyZWFjdC1uaWNlLWRhdGVzL2J1aWxkL3N0eWxlLmNzcydcclxuaW1wb3J0IFJvb21CbG9jayBmcm9tIFwiLi4vLi4vdmlld3MvUm9vbUJsb2NrXCI7XHJcbmltcG9ydCBSb29tRGV0YWlsIGZyb20gXCIuLi8uLi92aWV3cy9Sb29tRGV0YWlsXCI7XHJcbmltcG9ydCBSb29tU2VhcmNoQmxvY2sgZnJvbSBcIi4uLy4uL3ZpZXdzL1Jvb21TZWFyY2hCbG9ja1wiO1xyXG5pbXBvcnQgRmFjaWxpdHlOZXdCbG9jayBmcm9tIFwiLi4vLi4vdmlld3MvRmFjaWxpdHlOZXdCbG9ja1wiO1xyXG5pbXBvcnQgU3VtbWFyeUl0ZW0gZnJvbSBcIi4uLy4uL3ZpZXdzL1N1bW1hcnlJdGVtXCI7XHJcbmltcG9ydCBBbGVydE1vZGFsIGZyb20gXCIuLi8uLi92aWV3cy9jb21tb24vQWxlcnRNb2RhbFwiO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCBGdWxsV2lkdGhNb2RhbCBmcm9tIFwiLi4vLi4vdmlld3MvY29tbW9uL0Z1bGxXaWR0aE1vZGFsXCI7XHJcbmltcG9ydCBIb3RlbE5hdmJhciBmcm9tIFwiLi4vLi4vdmlld3MvSG90ZWxOYXZiYXJcIjtcclxuaW1wb3J0IEhvdGVsU3BSZXFMaXN0IGZyb20gXCIuLi8uLi92aWV3cy9Ib3RlbFNwUmVxTGlzdFwiO1xyXG5pbXBvcnQgR2FsbGVyeSBmcm9tIFwiLi4vLi4vdmlld3MvY29tbW9uL0dhbGxlcnlcIjtcclxuaW1wb3J0IHtJTUFHRV9QQVRILCBBUElfUEFUSH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xyXG5jb25zdCBBUEkgPSAnaHR0cHM6Ly9yenBfdGVzdF9ybkVINUk0Tkh1YUdKeDpTUG1xNnFLUUVMeHhMbFlUblA3WTVkeWpAYXBpLnJhem9ycGF5LmNvbS92MS9wYXltZW50cy8nO1xyXG4vL1RoaXMgZ2V0cyBjYWxsZWQgZXZlcnkgdGltZSB0aGUgcGFnZSBpcyBjYWxsZWRcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XHJcbiAgICBjb25zdCB7cGFyYW1zfSA9IGNvbnRleHQ7XHJcbiAgICBjb25zdCB7c2x1Z30gPSBwYXJhbXM7XHJcbiAgICAvL2hvdGVsIGRldGFpbFxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtBUElfUEFUSH1ob3RlbC9ob3RlbGRldGFpbHN2Mj91cmw9JHtob3RlbF91cmx9YCk7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICBsZXQgaG90ZWxEZXRhaWwgPSByZXMucmVzdWx0cyA/IHJlcy5yZXN1bHRzLmRhdGE6IFtdO1xyXG4gICAgY29uc29sZS5sb2coaG90ZWxEZXRhaWwpXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICBob3RlbERldGFpbDogW2hvdGVsRGV0YWlsXVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL1Jvb20gVHlwZXNcclxuICAgIGNvbnN0IHJlc3BvbnNlMiA9IGF3YWl0IGZldGNoKGAke0FQSV9QQVRIfWhvdGVsL3Jvb210eXBlYCk7XHJcbiAgICBjb25zdCByZXMyID0gYXdhaXQgcmVzcG9uc2UyLmpzb24oKTtcclxuICAgIGxldCByb29tVHlwZXMgPSByZXMyLnJlc3VsdHMgPyByZXMyLnJlc3VsdHMuZGF0YTogW107XHJcbiAgICBsZXQgYmFubmVySW1hZ2VzID0gW107XHJcbiAgICBsZXQgaG90ZWxfcm9vbXMgPSBbXTtcclxuICAgIGxldCBnYWxsZXJ5SW1hZ2VzID1bXTtcclxuICAgIGxldCBob3RlbF9pZCA9ICcnXHJcbiAgICBpZihob3RlbERldGFpbCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGhvdGVsRGV0YWlsKVxyXG4gICAgICAgIGhvdGVsX2lkID0gaG90ZWxEZXRhaWwuaG90ZWxfaWQ7XHJcbiAgICAgICAgY29uc29sZS5sb2coaG90ZWxfaWQpXHJcbiAgICAgICAgbGV0IHBhcmFtcyA9IHtob3RlbF9pZCA6IGhvdGVsX2lkfTtcclxuICAgICAgICBjb25zdCByZXNwb25zZTMgPSBhd2FpdCBmZXRjaChgJHtBUElfUEFUSH1ob3RlbC9ob3RlbGJhbm5lcmltYWdlc2ApO1xyXG4gICAgICAgIGNvbnN0IHJlczMgPSBhd2FpdCByZXNwb25zZTMuanNvbigpO1xyXG4gICAgICAgIGJhbm5lckltYWdlcyA9IHJlczMucmVzdWx0cyA/IHJlczMucmVzdWx0cy5kYXRhOiBbXTtcclxuXHJcbiAgICAgICAgaG90ZWxfcm9vbXMgPSBob3RlbERldGFpbC5ob3RlbF9yb29tcyB8fCBbXTtcclxuICAgICAgICBob3RlbF9yb29tcyA9IGhvdGVsX3Jvb21zLm1hcChpdGVtID0+IHtcclxuICAgICAgICAgICAgaXRlbS5xdHkgPSAwXHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGdhbGxlcnlJbWFnZXMgPSBob3RlbERldGFpbC5ob3RlbF9pbWFnZXMgfHwgW107XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHByb3BzIDoge1xyXG4gICAgICAgICAgICAgICAgaG90ZWxEZXRhaWwgOiBbaG90ZWxEZXRhaWxdLFxyXG4gICAgICAgICAgICAgICAgaG90ZWxfcm9vbXMgOiBob3RlbF9yb29tcyxcclxuICAgICAgICAgICAgICAgIGdhbGxlcnlJbWFnZXMgOiBnYWxsZXJ5SW1hZ2VzLFxyXG4gICAgICAgICAgICAgICAvLyBNQVhfQ0FQQUNJVFlfR0VORVJBTCA6IGhvdGVsRGV0YWlsLm1heF9vY2N1cGFuY3ksXHJcbiAgICAgICAgICAgICAgICAvL2hvdGVsSGlnaGxpZ2h0cyA6IGhvdGVsRGV0YWlsLmhvdGVsaGlnaGxpZ2h0cyxcclxuICAgICAgICAgICAgICAgIC8vaG90ZWxQb2xpY2llcyA6IGhvdGVsRGV0YWlsLmhvdGVscG9saWNpZXMsXHJcbiAgICAgICAgICAgICAgICAvL3NwUmVxdWVzdHMgOiBob3RlbERldGFpbC5zcGVjaWFscmVxdWVzdFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vdGhpcy5wcm9wcy5nZXRCYW5uZXJJbWFnZXMocGFyYW1zKTtcclxuICAgIC8vIGxldCBob3RlbF9yb29tcyA9IHRoaXMucHJvcHMuaG90ZWxEZXRhaWwuaG90ZWxfcm9vbXMgfHwgW107XHJcbiAgICAvLyBob3RlbF9yb29tcyA9IGhvdGVsX3Jvb21zLm1hcChpdGVtID0+IHtcclxuICAgIC8vICAgICBpdGVtLnF0eSA9IDBcclxuICAgIC8vICAgICByZXR1cm4gaXRlbTtcclxuICAgIC8vIH0pO1xyXG4gICAgLy8gbGV0IGdhbGxlcnlJbWFnZXMgPSB0aGlzLnByb3BzLmhvdGVsRGV0YWlsLmhvdGVsX2ltYWdlcyB8fCBbXTtcclxuICAgIC8vIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgLy8gICAgIGhvdGVsX2lkIDogaG90ZWxfaWQsXHJcbiAgICAvLyAgICAgaG90ZWxEZXRhaWwgOiBob3RlbERldGFpbCxcclxuICAgIC8vICAgICBob3RlbF9yb29tcyA6IGhvdGVsX3Jvb21zLFxyXG4gICAgLy8gICAgIGdhbGxlcnlJbWFnZXMgOiBnYWxsZXJ5SW1hZ2VzLFxyXG4gICAgLy8gICAgIE1BWF9DQVBBQ0lUWV9HRU5FUkFMIDogaG90ZWxEZXRhaWwubWF4X29jY3VwYW5jeSxcclxuICAgIC8vICAgICBob3RlbEhpZ2hsaWdodHMgOiBob3RlbERldGFpbC5ob3RlbGhpZ2hsaWdodHMsXHJcbiAgICAvLyAgICAgaG90ZWxQb2xpY2llcyA6IGhvdGVsRGV0YWlsLmhvdGVscG9saWNpZXMsXHJcbiAgICAvLyAgICAgc3BSZXF1ZXN0cyA6IGhvdGVsRGV0YWlsLnNwZWNpYWxyZXF1ZXN0XHJcbiAgICAvLyB9LCBmdW5jdGlvbigpIHtcclxuICAgIC8vXHJcbiAgICAvLyB9KVxyXG5cclxuXHJcbn1cclxuXHJcblxyXG5cclxuY29uc3QgSG90ZWxEZXRhaWxTbHVnID0oe2hvdGVsRGV0YWlsLCBnYWxsZXJ5SW1hZ2VzLCBob3RlbF9yb29tcyB9KSA9PiB7XHJcblxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICAgIGNvbnN0IHsgaG90ZWxfdXJsIH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgICBjb25zb2xlLmxvZyhob3RlbERldGFpbClcclxuICAgIGNvbnNvbGUubG9nKGdhbGxlcnlJbWFnZXMpXHJcbiAgICBjb25zb2xlLmxvZyhob3RlbF9yb29tcylcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgc2tkZnNrZnNkZmRqc2ZcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgLy8gPEhvdGVsRGV0YWlsIGhvdGVsRGV0YWlsPXtob3RlbERldGFpbFswXX0gaG90ZWxfdXJsPXtob3RlbF91cmx9XHJcbiAgICAgICAgIC8vICAgICAgICAgICAgICBnYWxsZXJ5SW1hZ2VzPXtnYWxsZXJ5SW1hZ2VzfSBob3RlbF9yb29tcz17aG90ZWxfcm9vbXN9Lz5cclxuICAgIClcclxufVxyXG5cclxuLy8gY2xhc3MgSG90ZWxEZXRhaWwgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4vLyAgICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuLy8gICAgICAgICBzdXBlcihwcm9wcyk7XHJcbi8vICAgICAgICAgbGV0IHRvZGF5ID0gbmV3IERhdGUoKTtcclxuLy8gICAgICAgICBsZXQgdG9tb3Jyb3cgPSBuZXcgRGF0ZSh0b2RheSk7XHJcbi8vICAgICAgICAgdG9tb3Jyb3cuc2V0RGF0ZSh0b21vcnJvdy5nZXREYXRlKCkgKyAxKTtcclxuLy8gICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4vLyAgICAgICAgICAgICB0b2RheSA6IHRvZGF5LFxyXG4vLyAgICAgICAgICAgICB0b21vcnJvdyA6IHRvbW9ycm93LFxyXG4vLyAgICAgICAgICAgICBzdGFydERhdGUgOiB0b2RheSxcclxuLy8gICAgICAgICAgICAgZW5kRGF0ZSA6IHRvbW9ycm93LFxyXG4vLyAgICAgICAgICAgICBjaGVja2luZGF0ZSA6IHRvZGF5LFxyXG4vLyAgICAgICAgICAgICBjaGVja291dGRhdGUgOiB0b21vcnJvdyxcclxuLy8gICAgICAgICAgICAgcm9vbXMgOiAnJyxcclxuLy8gICAgICAgICAgICAgYWR1bHRzIDogJycsXHJcbi8vICAgICAgICAgICAgIGNoaWxkcmVuIDogJycsXHJcbi8vICAgICAgICAgICAgIHJvb21UeXBlcyA6IFtdLFxyXG4vLyAgICAgICAgICAgICBpbml0U2VhcmNoIDogZmFsc2UsXHJcbi8vICAgICAgICAgICAgIHNlYXJjaFN0ZXAgOiAxLFxyXG4vLyAgICAgICAgICAgICBzZWxlY3RlZFJvb21zIDogW10sXHJcbi8vICAgICAgICAgICAgIHNlbGVjdGVkUm9vbUlkcyA6IFtdLFxyXG4vLyAgICAgICAgICAgICBob3RlbF9yb29tcyA6IFtdLFxyXG4vLyAgICAgICAgICAgICBpbnZhbGlkRmllbGRzIDogW10sXHJcbi8vICAgICAgICAgICAgIHNob3dFcnJvciA6IGZhbHNlLFxyXG4vLyAgICAgICAgICAgICBmaXJzdG5hbWUgOicnLFxyXG4vLyAgICAgICAgICAgICBsYXN0bmFtZSA6JycsXHJcbi8vICAgICAgICAgICAgIGFkZHJlc3MxIDogJycsXHJcbi8vICAgICAgICAgICAgIGFkZHJlc3MyIDogJycsXHJcbi8vICAgICAgICAgICAgIGNpdHkgOiAnJyxcclxuLy8gICAgICAgICAgICAgc3RhdGUgOiAnJyxcclxuLy8gICAgICAgICAgICAgcGluY29kZSA6ICcnLFxyXG4vLyAgICAgICAgICAgICBjb3VudHJ5IDogJycsXHJcbi8vICAgICAgICAgICAgIG1vYmlsZSA6ICcnLFxyXG4vLyAgICAgICAgICAgICBhZGRpdGlvbmFscGhvbmVudW1iZXIgOiAnJyxcclxuLy8gICAgICAgICAgICAgZW1haWwgOiAnJyxcclxuLy8gICAgICAgICAgICAgc2hvd1Byb2ZpbGVJbmZvRXJyb3IgOiBmYWxzZSxcclxuLy8gICAgICAgICAgICAgYm9va2luZ0lkIDogJycsXHJcbi8vICAgICAgICAgICAgIHRvdGFsQW1vdW50IDogMCxcclxuLy8gICAgICAgICAgICAgcHJpbmNpcGxlQW1vdW50IDogMCxcclxuLy8gICAgICAgICAgICAgZGlzY291bnQgOiAwLFxyXG4vLyAgICAgICAgICAgICBwcm9ncmFtX2Rlc2NyaXB0aW9uIDogJycsXHJcbi8vICAgICAgICAgICAgIGdzdCA6IDAsXHJcbi8vICAgICAgICAgICAgIE1BWF9DQVBBQ0lUWV9NU0cgOiAnJyxcclxuLy8gICAgICAgICAgICAgaXRlbVJlbW92YWxNZXNzYWdlIDogZmFsc2UsXHJcbi8vICAgICAgICAgICAgIGJhbm5lckltYWdlcyA6IFtdLFxyXG4vLyAgICAgICAgICAgICBjYW5ub3RDb250aW51ZU1lc3NhZ2UgOmZhbHNlLFxyXG4vLyAgICAgICAgICAgICBnYWxsZXJ5SW1hZ2VzIDogW10sXHJcbi8vICAgICAgICAgICAgIHNob3dEZXRhaWxTdGF0dXMgOiBmYWxzZSxcclxuLy8gICAgICAgICAgICAgaG90ZWxQb2xpY2llcyA6IFtdLFxyXG4vLyAgICAgICAgICAgICBob3RlbEhpZ2hsaWdodHMgOiBbXSxcclxuLy8gICAgICAgICAgICAgTUFYX0NBUEFDSVRZX0dFTkVSQUwgOiAxLFxyXG4vLyAgICAgICAgICAgICBzaG93U3BlY2lhbFJlcXVlc3RzIDogZmFsc2UsXHJcbi8vICAgICAgICAgICAgIHNwUmVxdWVzdHMgOiBbXSxcclxuLy8gICAgICAgICAgICAgc2VsZWN0ZWRTcFJlcXMgOltdLFxyXG4vLyAgICAgICAgICAgICBzZWxlY3RlZFNwUmVxSWRzIDogW10sXHJcbi8vICAgICAgICAgICAgIHNob3dQZW5kaW5nTWVzc2FnZSA6IGZhbHNlLFxyXG4vLyAgICAgICAgICAgICBleHBhbmRDb250ZW50IDogZmFsc2VcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vICAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuLy8gICAgICAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcclxuLy8gICAgICAgICBzY3JpcHQuc3JjID0gJ2h0dHBzOi8vY2hlY2tvdXQucmF6b3JwYXkuY29tL3YxL2NoZWNrb3V0LmpzJztcclxuLy8gICAgICAgICBzY3JpcHQuYXN5bmMgPSB0cnVlO1xyXG4vLyAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcclxuLy8gICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuLy8gICAgICAgICAgICAgaG90ZWxfdXJsIDogdGhpcy5wcm9wcy5ob3RlbF91cmxcclxuLy8gICAgICAgICB9KVxyXG4vLyAgICAgfVxyXG4vL1xyXG4vLyAgICAgc2Nyb2xsVG9TZWN0aW9uID0gKHNlY3Rpb24pID0+IHtcclxuLy8gICAgICAgICBpZihzZWN0aW9uICE9PSAnJykge1xyXG4vLyAgICAgICAgICAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNlY3Rpb24pO1xyXG4vLyAgICAgICAgICAgICBpZiAoZWxlbWVudCkge1xyXG4vLyAgICAgICAgICAgICAgICAgZWxlbWVudC5zY3JvbGxJbnRvVmlldyh7YmVoYXZpb3I6IFwic21vb3RoXCIsIGJsb2NrOiBcInN0YXJ0XCIsIGlubGluZTogXCJuZWFyZXN0XCJ9KTtcclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH1cclxuLy9cclxuLy9cclxuLy8gICAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSwgc25hcHNob3QpIHtcclxuLy9cclxuLy8gICAgICAgICBpZih0aGlzLnByb3BzLmhvdGVsRGV0YWlsICE9PSBwcmV2UHJvcHMuaG90ZWxEZXRhaWwpIHtcclxuLy9cclxuLy8gICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbi8vICAgICAgICAgICAgICAgICBob3RlbF9pZCA6IHRoaXMucHJvcHMuaG90ZWxEZXRhaWwuaG90ZWxfaWQsXHJcbi8vICAgICAgICAgICAgICAgICBob3RlbERldGFpbCA6IHRoaXMucHJvcHMuaG90ZWxEZXRhaWwsXHJcbi8vICAgICAgICAgICAgICAgICBob3RlbF9yb29tcyA6IHRoaXMucHJvcHMuaG90ZWxfcm9vbXMsXHJcbi8vICAgICAgICAgICAgICAgICBnYWxsZXJ5SW1hZ2VzIDogdGhpcy5wcm9wcy5nYWxsZXJ5SW1hZ2VzLFxyXG4vLyAgICAgICAgICAgICAgICAgTUFYX0NBUEFDSVRZX0dFTkVSQUwgOiB0aGlzLnByb3BzLmhvdGVsRGV0YWlsLm1heF9vY2N1cGFuY3ksXHJcbi8vICAgICAgICAgICAgICAgICBob3RlbEhpZ2hsaWdodHMgOiB0aGlzLnByb3BzLmhvdGVsRGV0YWlsLmhvdGVsaGlnaGxpZ2h0cyxcclxuLy8gICAgICAgICAgICAgICAgIGhvdGVsUG9saWNpZXMgOiB0aGlzLnByb3BzLmhvdGVsRGV0YWlsLmhvdGVscG9saWNpZXMsXHJcbi8vICAgICAgICAgICAgICAgICBzcFJlcXVlc3RzIDogdGhpcy5wcm9wcy5ob3RlbERldGFpbC5zcGVjaWFscmVxdWVzdFxyXG4vLyAgICAgICAgICAgICB9LCBmdW5jdGlvbigpIHtcclxuLy9cclxuLy8gICAgICAgICAgICAgfSlcclxuLy8gICAgICAgICB9XHJcbi8vXHJcbi8vICAgICAgICAgLy8gaWYodGhpcy5wcm9wcy5mYWNpbGl0eURhdGEucm9vbVR5cGVzICE9PSBwcmV2UHJvcHMuZmFjaWxpdHlEYXRhLnJvb21UeXBlcykge1xyXG4vLyAgICAgICAgIC8vICAgICB0aGlzLnNldFN0YXRlKHtcclxuLy8gICAgICAgICAvLyAgICAgICAgIHJvb21UeXBlcyA6IHRoaXMucHJvcHMuZmFjaWxpdHlEYXRhLnJvb21UeXBlc1xyXG4vLyAgICAgICAgIC8vICAgICB9KVxyXG4vLyAgICAgICAgIC8vIH1cclxuLy8gICAgICAgICAvLyBpZih0aGlzLnByb3BzLmJvb2tpbmdEYXRhLmJvb2tpbmdJZCAhPT0gcHJldlByb3BzLmJvb2tpbmdEYXRhLmJvb2tpbmdJZCkge1xyXG4vLyAgICAgICAgIC8vXHJcbi8vICAgICAgICAgLy8gICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4vLyAgICAgICAgIC8vICAgICAgICAgYm9va2luZ0lkIDogdGhpcy5wcm9wcy5ib29raW5nRGF0YS5ib29raW5nSWRcclxuLy8gICAgICAgICAvLyAgICAgfSwgZnVuY3Rpb24gKCl7XHJcbi8vICAgICAgICAgLy8gICAgICAgICB0aGlzLmNvbnRpbnVlVG9QYXltZW50KClcclxuLy8gICAgICAgICAvLyAgICAgfSlcclxuLy8gICAgICAgICAvLyB9XHJcbi8vICAgICAgICAgLy8gaWYodGhpcy5wcm9wcy5ib29raW5nRGF0YS5ib29raW5nUmVzdWx0ICE9PSBwcmV2UHJvcHMuYm9va2luZ0RhdGEuYm9va2luZ1Jlc3VsdCkge1xyXG4vLyAgICAgICAgIC8vICAgICBsZXQgUGF5bWVudFVybCA9IGBodHRwczovL3V0aGRldi5uZXZlcmJlZm9yZWhvbGlkYXlzLmNvbS9wYXltZW50LXN1Y2Nlc3M/cnBfaWQ9YCt0aGlzLnN0YXRlLlBheW1lbnRJZCtgJnJhbXQ9YCt0aGlzLnN0YXRlLnRvdGFsQW1vdW50K2AmbW9iaWxlPWArdGhpcy5zdGF0ZS5tb2JpbGUrYCZlbWFpbD1gK3RoaXMuc3RhdGUuZW1haWwrYCZtZXRob2Q9Q2FyZCBwYXltZW50JmRhdGU9YCttb21lbnQodGhpcy5zdGF0ZS50b2RheSkuZm9ybWF0KCdERCBNTU0sIFlZWVknKTtcclxuLy8gICAgICAgICAvLyAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBQYXltZW50VXJsO1xyXG4vLyAgICAgICAgIC8vIH1cclxuLy9cclxuLy8gICAgICAgICAvLyBpZih0aGlzLnByb3BzLmhvdGVsRGF0YS5iYW5uZXJJbWFnZXMgIT09IHByZXZQcm9wcy5ob3RlbERhdGEuYmFubmVySW1hZ2VzKSB7XHJcbi8vICAgICAgICAgLy8gICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4vLyAgICAgICAgIC8vICAgICAgICAgYmFubmVySW1hZ2VzIDogdGhpcy5wcm9wcy5ob3RlbERhdGEuYmFubmVySW1hZ2VzXHJcbi8vICAgICAgICAgLy8gICAgIH0pXHJcbi8vICAgICAgICAgLy8gfVxyXG4vLyAgICAgfVxyXG4vL1xyXG4vLyAgICAgc2V0U3RhcnREYXRlID0gKGRhdGUpID0+IHtcclxuLy8gICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuLy8gICAgICAgICAgICAgc3RhcnREYXRlIDogZGF0ZVxyXG4vLyAgICAgICAgIH0pXHJcbi8vICAgICB9XHJcbi8vICAgICBzZXRFbmREYXRlID0gKGRhdGUpID0+IHtcclxuLy8gICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuLy8gICAgICAgICAgICAgZW5kRGF0ZSA6IGRhdGVcclxuLy8gICAgICAgICB9KVxyXG4vLyAgICAgfVxyXG4vL1xyXG4vLyAgICAgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcclxuLy8gICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC52YWx1ZSlcclxuLy8gICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuLy8gICAgICAgICAgICAgW2UudGFyZ2V0Lm5hbWVdIDogZS50YXJnZXQudmFsdWVcclxuLy8gICAgICAgICB9KVxyXG4vLyAgICAgfVxyXG4vL1xyXG4vLyAgICAgc2VhcmNoUm9vbXMgPSAoKSA9PiB7XHJcbi8vXHJcbi8vXHJcbi8vICAgICAgICAgbGV0IE1BWF9DQVBBQ0lUWV9HRU5FUkFMID0gdGhpcy5zdGF0ZS5NQVhfQ0FQQUNJVFlfR0VORVJBTDtcclxuLy8gICAgICAgICBsZXQgc3RhcnREYXRlID0gdGhpcy5zdGF0ZS5zdGFydERhdGU7XHJcbi8vICAgICAgICAgbGV0IGVuZERhdGUgPSB0aGlzLnN0YXRlLnN0YXJ0RGF0ZTtcclxuLy8gICAgICAgICBsZXQgcm9vbXMgPSB0aGlzLnN0YXRlLnJvb21zO1xyXG4vLyAgICAgICAgIGxldCBhZHVsdHMgPSB0aGlzLnN0YXRlLmFkdWx0cztcclxuLy8gICAgICAgICBsZXQgY2hpbGRyZW4gPSB0aGlzLnN0YXRlLmNoaWxkcmVuO1xyXG4vLyAgICAgICAgIGxldCBpbnZhbGlkRmllbGRzID0gW107XHJcbi8vICAgICAgICAgaWYoc3RhcnREYXRlID09PSAnJykge1xyXG4vLyAgICAgICAgICAgICBpbnZhbGlkRmllbGRzLnB1c2goJ3N0YXJ0RGF0ZScpO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgICBpZihlbmREYXRlID09PSAnJykge1xyXG4vLyAgICAgICAgICAgICBpbnZhbGlkRmllbGRzLnB1c2goJ2VuZERhdGUnKTtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgICAgaWYocm9vbXMgPT09ICcnKSB7XHJcbi8vICAgICAgICAgICAgIGludmFsaWRGaWVsZHMucHVzaCgncm9vbXMnKTtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgICAgaWYoYWR1bHRzID09PSAnJykge1xyXG4vLyAgICAgICAgICAgICBpbnZhbGlkRmllbGRzLnB1c2goJ2FkdWx0cycpO1xyXG4vLyAgICAgICAgIH1cclxuLy9cclxuLy8gICAgICAgICBsZXQgYWR1bHRDb3VudCA9IHBhcnNlSW50KHJvb21zKSAqIHBhcnNlSW50KE1BWF9DQVBBQ0lUWV9HRU5FUkFMKTtcclxuLy8gICAgICAgICBpZihwYXJzZUludChhZHVsdHMpID4gYWR1bHRDb3VudCkge1xyXG4vLyAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuLy8gICAgICAgICAgICAgICAgIE1BWF9DQVBBQ0lUWV9NU0cgOiBcIlNvcnJ5LiBXZSBhcmUgYWxsb3dpbmcgYSBtYXhpbXVtIG9mIFwiK01BWF9DQVBBQ0lUWV9HRU5FUkFMK1wiIG1lbWJlcnMgaW4gYSByb29tXCJcclxuLy8gICAgICAgICAgICAgfSlcclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgICAgaWYoaW52YWxpZEZpZWxkcy5sZW5ndGggPT09IDAgKSB7XHJcbi8vXHJcbi8vICAgICAgICAgICAgIGxldCBwYXJhbXMgPSB7c3RhcnREYXRlOiB0aGlzLnN0YXRlLnN0YXJ0RGF0ZSwgZW5kRGF0ZSA6IHRoaXMuc3RhdGUuZW5kRGF0ZSwgcm9vbXMgOiB0aGlzLnN0YXRlLnJvb21zLFxyXG4vLyAgICAgICAgICAgICAgICAgYWR1bHRzIDogdGhpcy5zdGF0ZS5hZHVsdHMsIGNoaWxkcmVuIDogdGhpcy5zdGF0ZS5jaGlsZHJlbn07XHJcbi8vICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3Nob3dFcnJvciA6IGZhbHNlLCBpbml0U2VhcmNoIDogIHRydWUsIHNlYXJjaFN0ZXAgOiAxLCBzdGFydERhdGU6IHRoaXMuc3RhdGUuc3RhcnREYXRlLCBlbmREYXRlIDogdGhpcy5zdGF0ZS5lbmREYXRlLCByb29tcyA6IHRoaXMuc3RhdGUucm9vbXMsXHJcbi8vICAgICAgICAgICAgICAgICBhZHVsdHMgOiB0aGlzLnN0YXRlLmFkdWx0cywgY2hpbGRyZW4gOiB0aGlzLnN0YXRlLmNoaWxkcmVuLCBpbnZhbGlkRmllbGRzIDogaW52YWxpZEZpZWxkc30pXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICAgIGVsc2Uge1xyXG4vLyAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd0Vycm9yIDogdHJ1ZSwgc3RhcnREYXRlOiB0aGlzLnN0YXRlLnN0YXJ0RGF0ZSwgZW5kRGF0ZSA6IHRoaXMuc3RhdGUuZW5kRGF0ZSwgcm9vbXMgOiB0aGlzLnN0YXRlLnJvb21zLFxyXG4vLyAgICAgICAgICAgICAgICAgYWR1bHRzIDogdGhpcy5zdGF0ZS5hZHVsdHMsIGNoaWxkcmVuIDogdGhpcy5zdGF0ZS5jaGlsZHJlbiwgaW52YWxpZEZpZWxkcyA6IGludmFsaWRGaWVsZHN9KVxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH1cclxuLy8gICAgIHJlc2V0U2VhcmNoID0gKCkgPT4ge1xyXG4vLyAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3Nob3dFcnJvciA6IGZhbHNlLCBpbml0U2VhcmNoIDogIGZhbHNlLCBzZWFyY2hTdGVwIDogMCwgc3RhcnREYXRlOiB0aGlzLnN0YXRlLnRvZGF5LCBlbmREYXRlIDogdGhpcy5zdGF0ZS50b21vcnJvdywgcm9vbXMgOiAnJyxcclxuLy8gICAgICAgICAgICAgYWR1bHRzIDogJycsIGNoaWxkcmVuIDogJycsIGludmFsaWRGaWVsZHMgOiBbXX0pXHJcbi8vICAgICB9XHJcbi8vICAgICBiYWNrVG9EZXRhaWwgPSAoKSA9PiB7XHJcbi8vICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aW5pdFNlYXJjaCA6ICBmYWxzZX0pXHJcbi8vICAgICB9XHJcbi8vICAgICBiYWNrVG9DYXJ0ID0gKCkgPT4ge1xyXG4vLyAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3NlYXJjaFN0ZXAgOiAgMX0pXHJcbi8vICAgICB9XHJcbi8vXHJcbi8vICAgICBzZWxlY3RSb29tID0gKHJvb20sIHR5cGUsZSkgPT4ge1xyXG4vLyAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4vLyAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbi8vICAgICAgICAgbGV0IHNlbGVjdGVkUm9vbXMgPSB0aGlzLnN0YXRlLnNlbGVjdGVkUm9vbXM7XHJcbi8vICAgICAgICAgbGV0IHNlbGVjdGVkUm9vbUlkcyA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRSb29tSWRzO1xyXG4vL1xyXG4vLyAgICAgICAgIGxldCBob3RlbF9yb29tcyA9IHRoaXMuc3RhdGUuaG90ZWxfcm9vbXNcclxuLy8gICAgICAgICBpZih0eXBlID09PSAnYWRkJyB8fCB0eXBlID09PSAnY2hvb3NlJykge1xyXG4vLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhzZWxlY3RlZFJvb21JZHMpXHJcbi8vICAgICAgICAgICAgIGlmKCFzZWxlY3RlZFJvb21JZHMuaW5jbHVkZXMocm9vbS5yb29taWQpKXtcclxuLy8gICAgICAgICAgICAgICAgIHNlbGVjdGVkUm9vbUlkcy5wdXNoKHJvb20ucm9vbWlkKVxyXG4vLyAgICAgICAgICAgICAgICAgc2VsZWN0ZWRSb29tcy5wdXNoKHJvb20pO1xyXG4vLyAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocm9vbSlcclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgIH1cclxuLy9cclxuLy8gICAgICAgICBpZih0eXBlID09PSAncmVtb3ZlJykge1xyXG4vLyAgICAgICAgICAgICBpZih0aGlzLnN0YXRlLnNlYXJjaFN0ZXAgPT09IDIgJiYgc2VsZWN0ZWRSb29tcy5sZW5ndGggPT09MSl7XHJcbi8vICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuLy8gICAgICAgICAgICAgICAgICAgICBpdGVtUmVtb3ZhbE1lc3NhZ2UgOiB0cnVlXHJcbi8vICAgICAgICAgICAgICAgICB9KVxyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgIGVsc2Uge1xyXG4vLyAgICAgICAgICAgICAgICAgaWYoc2VsZWN0ZWRSb29tSWRzLmluY2x1ZGVzKHJvb20ucm9vbWlkKSkge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IHNlbGVjdGVkUm9vbUlkcy5pbmRleE9mKHJvb20ucm9vbWlkKTtcclxuLy9cclxuLy8gICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFJvb21JZHMuc3BsaWNlKGluZGV4LCAxKVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkUm9vbXMuc3BsaWNlKGluZGV4LCAxKTtcclxuLy8gICAgICAgICAgICAgICAgICAgICBob3RlbF9yb29tcyA9IGhvdGVsX3Jvb21zLm1hcChpdGVtID0+IHtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgaWYoaXRlbS5yb29taWQgPT09IHJvb20ucm9vbWlkKSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnF0eSA9IDA7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW07XHJcbi8vICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbi8vICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICB9XHJcbi8vXHJcbi8vICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbi8vICAgICAgICAgICAgIHNlbGVjdGVkUm9vbUlkcyA6c2VsZWN0ZWRSb29tSWRzLFxyXG4vLyAgICAgICAgICAgICBzZWxlY3RlZFJvb21zIDogc2VsZWN0ZWRSb29tcyxcclxuLy8gICAgICAgICAgICAgaG90ZWxfcm9vbXMgOiBob3RlbF9yb29tc1xyXG4vLyAgICAgICAgIH0sIGZ1bmN0aW9uKCl7XHJcbi8vICAgICAgICAgICAgIGlmKHR5cGUgIT09ICdyZW1vdmUnKSB7XHJcbi8vICAgICAgICAgICAgICAgICAodHlwZSA9PT0gJ2FkZCcgfHwgdHlwZSA9PT0gJ2Nob29zZScgKSA/IHRoaXMuYWRkUXR5KHJvb20pIDogdGhpcy5zdWJRdHkocm9vbSk7XHJcbi8vICAgICAgICAgICAgIH1cclxuLy9cclxuLy9cclxuLy8gICAgICAgICB9KVxyXG4vL1xyXG4vLyAgICAgfVxyXG4vL1xyXG4vL1xyXG4vLyAgICAgY29udGludWVUb1N1bW1hcnkgPSAoKSA9PiB7XHJcbi8vICAgICAgICAgbGV0IGFkdWx0Q291bnQgPSBwYXJzZUludCh0aGlzLnN0YXRlLmFkdWx0cyk7XHJcbi8vICAgICAgICAgY29uc29sZS5sb2coYWR1bHRDb3VudCk7XHJcbi8vICAgICAgICAgbGV0IHBlcnNvbk9jY3VwaWVkID0gMDtcclxuLy8gICAgICAgICBsZXQgc2VsZWN0ZWRSb29tcyA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRSb29tcztcclxuLy8gICAgICAgICBsZXQgdG90YWxSb29tcyA9IDA7XHJcbi8vICAgICAgICAgaWYoc2VsZWN0ZWRSb29tcy5sZW5ndGggPiAwKSB7XHJcbi8vICAgICAgICAgICAgIGZvcih2YXIgaT0wOyBpPHNlbGVjdGVkUm9vbXMubGVuZ3RoOyBpKyspIHtcclxuLy8gICAgICAgICAgICAgICAgIGxldCBxdHkgPSBzZWxlY3RlZFJvb21zW2ldLnF0eTtcclxuLy8gICAgICAgICAgICAgICAgIHRvdGFsUm9vbXMgKz0gcGFyc2VJbnQocXR5KTtcclxuLy8gICAgICAgICAgICAgICAgIGxldCBvY2N1cGFuY3kgPSBwYXJzZUludChzZWxlY3RlZFJvb21zW2ldLm1heF9jYXBhY2l0eV9hZHVsdCk7XHJcbi8vICAgICAgICAgICAgICAgICBsZXQgZXh0cmFfb2NjdXBhbmN5ID0gc2VsZWN0ZWRSb29tc1tpXS5leHRyYWJlZCA9PT0gJ3llcyc/ICAxOiAwO1xyXG4vLyAgICAgICAgICAgICAgICAgbGV0IHRvdGFsX29jY3VwYW5jeSA9IG9jY3VwYW5jeSArIGV4dHJhX29jY3VwYW5jeTtcclxuLy8gICAgICAgICAgICAgICAgIHBlcnNvbk9jY3VwaWVkICs9IHBhcnNlSW50KHF0eSkgKnRvdGFsX29jY3VwYW5jeTtcclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgIH1cclxuLy9cclxuLy8gICAgICAgICBpZihzZWxlY3RlZFJvb21zLmxlbmd0aCA9PT0gMCkge1xyXG4vLyAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuLy8gICAgICAgICAgICAgICAgIGNhbm5vdENvbnRpbnVlIDogdHJ1ZSxcclxuLy8gICAgICAgICAgICAgICAgIGNhbm5vdENvbnRpbnVlTWVzc2FnZSA6IFwiUGxlYXNlIHNlbGVjdCBhdGxlYXN0IGEgcm9vbSB0byBwcm9jZWVkXCJcclxuLy8gICAgICAgICAgICAgfSlcclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgICAgZWxzZSBpZihhZHVsdENvdW50ID4gcGVyc29uT2NjdXBpZWQpIHtcclxuLy8gICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbi8vICAgICAgICAgICAgICAgICBjYW5ub3RDb250aW51ZSA6IHRydWUsXHJcbi8vICAgICAgICAgICAgICAgICBjYW5ub3RDb250aW51ZU1lc3NhZ2UgOiBcIlNvcnJ5LlwiKyBhZHVsdENvdW50K1wiIHBlcnNvbnMgY2Fubm90IGJlIG9jY3VwaWVkIGluIFwiK3RvdGFsUm9vbXMrXCIgcm9vbXNcIlxyXG4vLyAgICAgICAgICAgICB9KVxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgICBlbHNlIHtcclxuLy8gICAgICAgICAgICAgaWYodGhpcy5zdGF0ZS5zZWxlY3RlZFJvb21zLmxlbmd0aCA+MCkge1xyXG4vLyAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgc2VhcmNoU3RlcCA6MlxyXG4vLyAgICAgICAgICAgICAgICAgfSlcclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgIH1cclxuLy9cclxuLy9cclxuLy9cclxuLy8gICAgIH1cclxuLy9cclxuLy8gICAgIGFkZFF0eSA9IChyb29tKSA9PiB7XHJcbi8vICAgICAgICAgbGV0IHNlbGVjdGVkUm9vbXMgPSB0aGlzLnN0YXRlLnNlbGVjdGVkUm9vbXM7XHJcbi8vICAgICAgICAgbGV0IHNlbGVjdGVkUm9vbUlkcyA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRSb29tSWRzO1xyXG4vLyAgICAgICAgIGxldCByb29tSWQgPSByb29tLnJvb21pZDtcclxuLy8gICAgICAgICBzZWxlY3RlZFJvb21zID0gc2VsZWN0ZWRSb29tcy5tYXAoaXRlbSA9PiB7XHJcbi8vICAgICAgICAgICAgIGlmKGl0ZW0ucm9vbWlkID09PSByb29tSWQpIHtcclxuLy8gICAgICAgICAgICAgICAgIGlmKGl0ZW0ucXR5KSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgaWYoaXRlbS5xdHkgPCBpdGVtLnJvb21jb3VudCkge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnF0eSA9IHBhcnNlSW50KGl0ZW0ucXR5KSArMTtcclxuLy8gICAgICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgICAgICBlbHNlIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICBpdGVtLnF0eSA9IDE7XHJcbi8vICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgcmV0dXJuIGl0ZW07XHJcbi8vICAgICAgICAgfSk7XHJcbi8vICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbi8vICAgICAgICAgICAgIHNlbGVjdGVkUm9vbXMgOiBzZWxlY3RlZFJvb21zLFxyXG4vLyAgICAgICAgICAgICBzZWxlY3RlZFJvb21JZHMgOiBzZWxlY3RlZFJvb21JZHNcclxuLy8gICAgICAgICB9KVxyXG4vLyAgICAgfVxyXG4vLyAgICAgc3ViUXR5ID0gKHJvb20pID0+IHtcclxuLy8gICAgICAgICBjb25zb2xlLmxvZyhyb29tKVxyXG4vLyAgICAgICAgIGxldCBzZWxlY3RlZFJvb21zID0gdGhpcy5zdGF0ZS5zZWxlY3RlZFJvb21zO1xyXG4vLyAgICAgICAgIGxldCBzZWxlY3RlZFJvb21JZHMgPSB0aGlzLnN0YXRlLnNlbGVjdGVkUm9vbUlkcztcclxuLy8gICAgICAgICBsZXQgcm9vbUlkID0gcm9vbS5yb29taWQ7XHJcbi8vXHJcbi8vICAgICAgICAgaWYocm9vbS5xdHkgJiYgcm9vbS5xdHkgPT09IDEpIHtcclxuLy8gICAgICAgICAgICAgaWYodGhpcy5zdGF0ZS5zZWFyY2hTdGVwID09PSAyICYmIHNlbGVjdGVkUm9vbXMubGVuZ3RoID09PTEpe1xyXG4vLyAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgaXRlbVJlbW92YWxNZXNzYWdlIDogdHJ1ZVxyXG4vLyAgICAgICAgICAgICAgICAgfSlcclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICBlbHNlIHtcclxuLy8gICAgICAgICAgICAgICAgIHJvb20ucXR5ID0gMDtcclxuLy8gICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IHNlbGVjdGVkUm9vbUlkcy5pbmRleE9mKHJvb20ucm9vbWlkKTtcclxuLy8gICAgICAgICAgICAgICAgIHNlbGVjdGVkUm9vbUlkcy5zcGxpY2UoaW5kZXgsMSlcclxuLy8gICAgICAgICAgICAgICAgIHNlbGVjdGVkUm9vbXMuc3BsaWNlKGluZGV4LDEpXHJcbi8vICAgICAgICAgICAgIH1cclxuLy9cclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgICAgZWxzZSB7XHJcbi8vXHJcbi8vICAgICAgICAgICAgIHNlbGVjdGVkUm9vbXMgPSBzZWxlY3RlZFJvb21zLm1hcChpdGVtID0+IHtcclxuLy8gICAgICAgICAgICAgICAgIGlmKGl0ZW0ucm9vbWlkID09PSByb29tSWQpIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICBpdGVtLnF0eSA9IChpdGVtLnF0eSAmJiBpdGVtLnF0eSA+MCkgPyBwYXJzZUludChpdGVtLnF0eSkgLTEgOjA7XHJcbi8vICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbTtcclxuLy8gICAgICAgICAgICAgfSlcclxuLy8gICAgICAgICB9XHJcbi8vXHJcbi8vICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbi8vICAgICAgICAgICAgIHNlbGVjdGVkUm9vbXMgOiBzZWxlY3RlZFJvb21zLFxyXG4vLyAgICAgICAgICAgICBzZWxlY3RlZFJvb21JZHMgOiBzZWxlY3RlZFJvb21JZHNcclxuLy8gICAgICAgICB9KVxyXG4vLyAgICAgfVxyXG4vL1xyXG4vLyAgICAgY2hhbmdlUXR5ID0gKHJvb20sZSkgPT4ge1xyXG4vLyAgICAgICAgIGxldCBxdHkgPSBlLnRhcmdldC52YWx1ZTtcclxuLy8gICAgICAgICBsZXQgc2VsZWN0ZWRSb29tcyA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRSb29tcztcclxuLy8gICAgICAgICBsZXQgc2VsZWN0ZWRSb29tSWRzID0gdGhpcy5zdGF0ZS5zZWxlY3RlZFJvb21JZHM7XHJcbi8vICAgICAgICAgbGV0IHJvb21JZCA9IHJvb20ucm9vbWlkO1xyXG4vLyAgICAgICAgIHNlbGVjdGVkUm9vbXMgPSBzZWxlY3RlZFJvb21zLm1hcChpdGVtID0+IHtcclxuLy8gICAgICAgICAgICAgaWYoaXRlbS5yb29taWQgPT09IHJvb21JZCkge1xyXG4vLyAgICAgICAgICAgICAgICAgaXRlbS5xdHkgPSAoaXRlbS5xdHkgJiYgaXRlbS5xdHkgPjApID8gcGFyc2VJbnQoaXRlbS5xdHkpIC0xIDogMDtcclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICByZXR1cm4gaXRlbTtcclxuLy8gICAgICAgICB9KVxyXG4vLyAgICAgICAgIHRoaXMuc2VsZWN0Um9vbShyb29tKVxyXG4vLyAgICAgfVxyXG4vL1xyXG4vLyAgICAgc2F2ZUJvb2tpbmcgPSAoZSwgYW1vdW50LCBwcmluY2lwbGVBbW91bnQsIGRpc2NvdW50LCBwcm9ncmFtX2Rlc2NyaXB0aW9uLCBnc3QpID0+IHtcclxuLy9cclxuLy9cclxuLy8gICAgICAgICBsZXQgZmlyc3RuYW1lID0gdGhpcy5zdGF0ZS5maXJzdG5hbWU7XHJcbi8vICAgICAgICAgbGV0IGxhc3RuYW1lID0gdGhpcy5zdGF0ZS5sYXN0bmFtZTtcclxuLy8gICAgICAgICBsZXQgYWRkcmVzczEgPSB0aGlzLnN0YXRlLmFkZHJlc3MxO1xyXG4vLyAgICAgICAgIGxldCBhZGRyZXNzMiA9IHRoaXMuc3RhdGUuYWRkcmVzczI7XHJcbi8vICAgICAgICAgbGV0IGNpdHkgPSB0aGlzLnN0YXRlLmNpdHk7XHJcbi8vICAgICAgICAgbGV0IHN0YXRlID0gdGhpcy5zdGF0ZS5zdGF0ZTtcclxuLy8gICAgICAgICBsZXQgY291bnRyeSA9IHRoaXMuc3RhdGUuY291bnRyeTtcclxuLy8gICAgICAgICBsZXQgcGluY29kZSA9IHRoaXMuc3RhdGUucGluY29kZTtcclxuLy8gICAgICAgICBsZXQgbW9iaWxlID0gdGhpcy5zdGF0ZS5tb2JpbGU7XHJcbi8vICAgICAgICAgbGV0IGFkZGl0aW9uYWxwaG9uZW51bWJlciA9IHRoaXMuc3RhdGUuYWRkaXRpb25hbHBob25lbnVtYmVyO1xyXG4vLyAgICAgICAgIGxldCBlbWFpbCA9IHRoaXMuc3RhdGUuZW1haWw7XHJcbi8vICAgICAgICAgbGV0IGludmFsaWRGaWVsZHMgPSBbXTtcclxuLy8gICAgICAgICBpZihmaXJzdG5hbWUgPT09ICcnKSB7XHJcbi8vICAgICAgICAgICAgIGludmFsaWRGaWVsZHMucHVzaCgnZmlyc3RuYW1lJyk7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICAgIGlmKGxhc3RuYW1lID09PSAnJykge1xyXG4vLyAgICAgICAgICAgICBpbnZhbGlkRmllbGRzLnB1c2goJ2xhc3RuYW1lJyk7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICAgIGlmKGFkZHJlc3MxID09PSAnJykge1xyXG4vLyAgICAgICAgICAgICBpbnZhbGlkRmllbGRzLnB1c2goJ2FkZHJlc3MxJyk7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICAgIGlmKGFkZHJlc3MyID09PSAnJykge1xyXG4vLyAgICAgICAgICAgICBpbnZhbGlkRmllbGRzLnB1c2goJ2FkZHJlc3MyJyk7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICAgIGlmKGNpdHkgPT09ICcnKSB7XHJcbi8vICAgICAgICAgICAgIGludmFsaWRGaWVsZHMucHVzaCgnY2l0eScpO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgICBpZihzdGF0ZSA9PT0gJycpIHtcclxuLy8gICAgICAgICAgICAgaW52YWxpZEZpZWxkcy5wdXNoKCdzdGF0ZScpO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgICBpZihjb3VudHJ5ID09PSAnJykge1xyXG4vLyAgICAgICAgICAgICBpbnZhbGlkRmllbGRzLnB1c2goJ2NvdW50cnknKTtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgICAgaWYocGluY29kZSA9PT0gJycpIHtcclxuLy8gICAgICAgICAgICAgaW52YWxpZEZpZWxkcy5wdXNoKCdwaW5jb2RlJyk7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICAgIGlmKG1vYmlsZSA9PT0gJycpIHtcclxuLy8gICAgICAgICAgICAgaW52YWxpZEZpZWxkcy5wdXNoKCdtb2JpbGUnKTtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgICAgaWYoYWRkaXRpb25hbHBob25lbnVtYmVyID09PSAnJykge1xyXG4vLyAgICAgICAgICAgICBpbnZhbGlkRmllbGRzLnB1c2goJ2FkZGl0aW9uYWxwaG9uZW51bWJlcicpO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgICBpZihlbWFpbCA9PT0gJycpIHtcclxuLy8gICAgICAgICAgICAgaW52YWxpZEZpZWxkcy5wdXNoKCdlbWFpbCcpO1xyXG4vLyAgICAgICAgIH1cclxuLy9cclxuLy8gICAgICAgICBpZihpbnZhbGlkRmllbGRzLmxlbmd0aCA9PT0gMCkge1xyXG4vLyAgICAgICAgICAgICBsZXQgc2VsZWN0ZWRSb29tcyA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRSb29tcztcclxuLy8gICAgICAgICAgICAgbGV0IGNoZWNraW5kYXRlID0gbW9tZW50KHRoaXMuc3RhdGUuc3RhcnREYXRlKS5mb3JtYXQoJ3l5eXktTU0tREQnKTtcclxuLy8gICAgICAgICAgICAgbGV0IGNoZWNrb3V0ZGF0ZSA9IG1vbWVudCh0aGlzLnN0YXRlLmVuZERhdGUpLmZvcm1hdCgneXl5eS1NTS1ERCcpO1xyXG4vLyAgICAgICAgICAgICBsZXQgYWR1bHRzID0gdGhpcy5zdGF0ZS5hZHVsdHMgfHwgMDtcclxuLy8gICAgICAgICAgICAgbGV0IGNoaWxkcmVuID0gdGhpcy5zdGF0ZS5jaGlsZHJlbiB8fCAwO1xyXG4vL1xyXG4vL1xyXG4vL1xyXG4vLyAgICAgICAgICAgICB2YXIgc3RhcnQgPSBtb21lbnQoY2hlY2tpbmRhdGUsIFwiWVlZWS1NTS1ERFwiKTtcclxuLy8gICAgICAgICAgICAgdmFyIGVuZCA9IG1vbWVudChjaGVja291dGRhdGUsIFwiWVlZWS1NTS1ERFwiKTtcclxuLy9cclxuLy8gICAgICAgICAgICAgbGV0IG5vT2ZEYXlzID0gbW9tZW50LmR1cmF0aW9uKGVuZC5kaWZmKHN0YXJ0KSkuYXNEYXlzKCk7XHJcbi8vXHJcbi8vICAgICAgICAgICAgIGxldCBub09mcm9vbXMgPSB0aGlzLnN0YXRlLnJvb21zO1xyXG4vLyAgICAgICAgICAgICBsZXQgdGF4YW1vdW50ID0gZ3N0O1xyXG4vL1xyXG4vLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhzZWxlY3RlZFJvb21zKVxyXG4vL1xyXG4vLyAgICAgICAgICAgICBsZXQgc2VsZWN0ZWRTcFJlcXMgPSB0aGlzLnN0YXRlLnNlbGVjdGVkU3BSZXFzO1xyXG4vL1xyXG4vL1xyXG4vLyAgICAgICAgICAgICBsZXQgYm9va2VkUm9vbXMgPSBbXTtcclxuLy9cclxuLy8gICAgICAgICAgICAgZm9yKGxldCBpPTA7IGk8c2VsZWN0ZWRSb29tcy5sZW5ndGg7IGkrKykge1xyXG4vLyAgICAgICAgICAgICAgICAgbGV0IHJvb20gPSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgXCJyb29taWRcIiA6IHNlbGVjdGVkUm9vbXNbaV0ucm9vbWlkLFxyXG4vLyAgICAgICAgICAgICAgICAgICAgIFwibm9vZmFkdWx0c1wiIDogIHNlbGVjdGVkUm9vbXNbaV0ubWF4X2NhcGFjaXR5X2FkdWx0LFxyXG4vLyAgICAgICAgICAgICAgICAgICAgIFwibm9vZmNoaWxkc1wiIDogIDAsXHJcbi8vICAgICAgICAgICAgICAgICAgICAgXCJleHRyYWJlZFwiIDogIHNlbGVjdGVkUm9vbXNbaV0uZXh0cmFiZWRjb3VudCxcclxuLy8gICAgICAgICAgICAgICAgICAgICBcInByaWNlXCIgOiAgc2VsZWN0ZWRSb29tc1tpXS5yb29tX3ByaWNlLFxyXG4vLyAgICAgICAgICAgICAgICAgICAgIFwiZXh0cmFiZWRwcmljZVwiIDogIDAsXHJcbi8vICAgICAgICAgICAgICAgICAgICAgXCJ0YXhhbW91bnRcIjogIDAsXHJcbi8vICAgICAgICAgICAgICAgICAgICAgXCJ0b3RhbHByaWNlXCIgOiAgcGFyc2VGbG9hdChzZWxlY3RlZFJvb21zW2ldLnJvb21fcHJpY2UpICogbm9PZkRheXMsXHJcbi8vICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgICAgICBib29rZWRSb29tcy5wdXNoKHJvb20pO1xyXG4vLyAgICAgICAgICAgICB9XHJcbi8vXHJcbi8vICAgICAgICAgICAgIGxldCBwYXJhbXMgPSB7XHJcbi8vICAgICAgICAgICAgICAgICBcImhvdGVsX2lkXCI6IHRoaXMuc3RhdGUuaG90ZWxfaWQsXHJcbi8vICAgICAgICAgICAgICAgICBcImNoZWNraW5kYXRlXCI6IGNoZWNraW5kYXRlLFxyXG4vLyAgICAgICAgICAgICAgICAgXCJjaGVja291dGRhdGVcIjogY2hlY2tvdXRkYXRlLFxyXG4vLyAgICAgICAgICAgICAgICAgXCJub29mYWR1bHRzXCI6IGFkdWx0cyxcclxuLy8gICAgICAgICAgICAgICAgIFwibm9vZmNoaWxkc1wiOiBjaGlsZHJlbixcclxuLy8gICAgICAgICAgICAgICAgIFwibm9vZnJvb21zXCI6IG5vT2Zyb29tcyxcclxuLy8gICAgICAgICAgICAgICAgIFwicHJpY2VcIiA6IHByaW5jaXBsZUFtb3VudCxcclxuLy8gICAgICAgICAgICAgICAgIFwidGF4YW1vdW50XCI6IHRheGFtb3VudCxcclxuLy8gICAgICAgICAgICAgICAgIFwidG90YWxwcmljZVwiOiBhbW91bnQsXHJcbi8vICAgICAgICAgICAgICAgICBcImZpcnN0bmFtZVwiOiBmaXJzdG5hbWUsXHJcbi8vICAgICAgICAgICAgICAgICBcImxhc3RuYW1lXCI6IGxhc3RuYW1lLFxyXG4vLyAgICAgICAgICAgICAgICAgXCJhZGRyZXNzMVwiOiBhZGRyZXNzMSxcclxuLy8gICAgICAgICAgICAgICAgIFwiYWRkcmVzczJcIjogYWRkcmVzczIsXHJcbi8vICAgICAgICAgICAgICAgICBcImNpdHlcIjogY2l0eSxcclxuLy8gICAgICAgICAgICAgICAgIFwic3RhdGVcIjogc3RhdGUsXHJcbi8vICAgICAgICAgICAgICAgICBcImNvdW50cnlcIjogY291bnRyeSxcclxuLy8gICAgICAgICAgICAgICAgIFwicGluY29kZVwiOiBwaW5jb2RlLFxyXG4vLyAgICAgICAgICAgICAgICAgXCJtb2JpbGVcIjogbW9iaWxlLFxyXG4vLyAgICAgICAgICAgICAgICAgXCJlbWFpbFwiOiBlbWFpbCxcclxuLy8gICAgICAgICAgICAgICAgIFwiaWRwcm9vZlwiOiBcInRlc3QucGRmXCIsXHJcbi8vICAgICAgICAgICAgICAgICBcInJvb21zXCI6IGJvb2tlZFJvb21zLFxyXG4vLyAgICAgICAgICAgICAgICAgXCJhZGRpdGlvbmFscGhvbmVudW1iZXJcIjogbW9iaWxlLFxyXG4vLyAgICAgICAgICAgICAgICAgXCJzcGxyZXF1ZXN0XCIgOiBzZWxlY3RlZFNwUmVxcy5sZW5ndGggPjAgID8gSlNPTi5zdHJpbmdpZnkoc2VsZWN0ZWRTcFJlcXMpIDogXCJcIlxyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKHBhcmFtcylcclxuLy8gICAgICAgICAgICAgdGhpcy5wcm9wcy5zYXZlQm9va2luZyhwYXJhbXMpO1xyXG4vL1xyXG4vL1xyXG4vLyAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuLy8gICAgICAgICAgICAgICAgIGludmFsaWRGaWVsZHMgOiBbXSxcclxuLy8gICAgICAgICAgICAgICAgIHRvdGFsQW1vdW50IDogYW1vdW50LFxyXG4vLyAgICAgICAgICAgICAgICAgcHJpbmNpcGxlQW1vdW50IDogcHJpbmNpcGxlQW1vdW50LFxyXG4vLyAgICAgICAgICAgICAgICAgZGlzY291bnQgOiBkaXNjb3VudCxcclxuLy8gICAgICAgICAgICAgICAgIHByb2dyYW1fZGVzY3JpcHRpb24gOiBwcm9ncmFtX2Rlc2NyaXB0aW9uLFxyXG4vLyAgICAgICAgICAgICAgICAgZ3N0IDogZ3N0LFxyXG4vLyAgICAgICAgICAgICAgICAgY2hlY2tpbmRhdGUgOiBjaGVja2luZGF0ZSxcclxuLy8gICAgICAgICAgICAgICAgIGNoZWNrb3V0ZGF0ZSA6IGNoZWNrb3V0ZGF0ZVxyXG4vLyAgICAgICAgICAgICB9KVxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgICBlbHNlIHtcclxuLy8gICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbi8vICAgICAgICAgICAgICAgICBzaG93UHJvZmlsZUluZm9FcnJvciA6IHRydWUsXHJcbi8vICAgICAgICAgICAgICAgICBpbnZhbGlkRmllbGRzIDogaW52YWxpZEZpZWxkcyxcclxuLy8gICAgICAgICAgICAgICAgIHRvdGFsQW1vdW50IDogYW1vdW50LFxyXG4vLyAgICAgICAgICAgICAgICAgcHJpbmNpcGxlQW1vdW50IDogcHJpbmNpcGxlQW1vdW50LFxyXG4vLyAgICAgICAgICAgICAgICAgZGlzY291bnQgOiBkaXNjb3VudCxcclxuLy8gICAgICAgICAgICAgICAgIHByb2dyYW1fZGVzY3JpcHRpb24gOiBwcm9ncmFtX2Rlc2NyaXB0aW9uLFxyXG4vLyAgICAgICAgICAgICAgICAgZ3N0IDogZ3N0XHJcbi8vICAgICAgICAgICAgIH0pXHJcbi8vICAgICAgICAgfVxyXG4vL1xyXG4vLyAgICAgfVxyXG4vL1xyXG4vLyAgICAgaGlkZVByb2ZpbGVJbmZvRXJyb3IgPSAoKSA9PiB7XHJcbi8vICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbi8vICAgICAgICAgICAgIHNob3dQcm9maWxlSW5mb0Vycm9yIDogZmFsc2VcclxuLy8gICAgICAgICB9KVxyXG4vLyAgICAgfVxyXG4vL1xyXG4vLyAgICAgY29udGludWVUb1BheW1lbnQgPSAoKSA9PiB7XHJcbi8vICAgICAgICAgbGV0IHRoYXQ9dGhpcztcclxuLy8gICAgICAgICBsZXQgb3B0aW9ucyA9IHtcclxuLy8gICAgICAgICAgICAgLy8ga2V5OiAncnpwX2xpdmVfdU5RZ3o2ck9HUTk2cUUnLFxyXG4vLyAgICAgICAgICAgICBrZXk6ICdyenBfdGVzdF9ybkVINUk0Tkh1YUdKeCcsXHJcbi8vICAgICAgICAgICAgIGFtb3VudDogcGFyc2VGbG9hdCh0aGlzLnN0YXRlLnRvdGFsQW1vdW50KSoxMDAsIC8vICA9IElOUiAxXHJcbi8vICAgICAgICAgICAgIG5hbWU6ICdVVEggQm9va2luZycsXHJcbi8vICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnUGxlYXNlIHBheSB0aGUgYm9va2luZyBjaGFyZ2VzIGhlcmUgdG8gY29uZmlybScsXHJcbi8vICAgICAgICAgICAgIGltYWdlOiAnaHR0cHM6Ly91dGhkZXYubmV2ZXJiZWZvcmVob2xpZGF5cy5jb20vYXNzZXRzL2ltYWdlcy91dGgtbG9nby1ibGFjay5wbmcnLFxyXG4vLyAgICAgICAgICAgICAvLyBvcmRlcl9pZDogdGhpcy5zdGF0ZS5vcmRlcklkLFxyXG4vLyAgICAgICAgICAgICBoYW5kbGVyOiBmdW5jdGlvbihyZXNwb25zZSkge1xyXG4vLyAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4vLyAgICAgICAgICAgICAgICAgdGhhdC5zZXRTdGF0ZSh7UGF5bWVudElkOiByZXNwb25zZS5yYXpvcnBheV9wYXltZW50X2lkLCB0b3RhbEFtb3VudCA6IHRoYXQuc3RhdGUudG90YWxBbW91bnQsIGRhdGUgOiBtb21lbnQobmV3IERhdGUoKSkuZm9ybWF0KCdERCBNTU0gWVlZWScpICwgZW1haWwgOnRoYXQuc3RhdGUuZW1haWwsIG1vYmlsZSA6IHRoYXQuc3RhdGUubW9iaWxlIH0pXHJcbi8vICAgICAgICAgICAgICAgICAvL2xldCBQYXltZW50VXJsID0gYGh0dHA6Ly8xNTkuNjUuMTUzLjU5L3NpdGUvIy9wYXltZW50LXN1Y2Nlc3MvYCt0aGlzLnByb3BzLmJvb2tpbmdEYXRhLmJvb2tpbmdJZDtcclxuLy8gICAgICAgICAgICAgICAgIGNvbnN0IHBheW1lbnRJZCA9IHJlc3BvbnNlLnJhem9ycGF5X3BheW1lbnRfaWQ7XHJcbi8vXHJcbi8vICAgICAgICAgICAgICAgICBsZXQgUGF5bWVudFVybCA9IGBodHRwczovL3V0aGRldi5uZXZlcmJlZm9yZWhvbGlkYXlzLmNvbS9wYXltZW50LXN1Y2Nlc3M/cnBfaWQ9YCtwYXltZW50SWQrYCZyYW10PWArdGhhdC5zdGF0ZS50b3RhbEFtb3VudCtgJm1vYmlsZT1gK3RoYXQuc3RhdGUubW9iaWxlK2AmZW1haWw9YCt0aGF0LnN0YXRlLmVtYWlsK2AmbWV0aG9kPUNhcmQgcGF5bWVudCZkYXRlPWArbW9tZW50KHRoYXQuc3RhdGUudG9kYXkpLmZvcm1hdCgnREQgTU1NLCBZWVlZJyk7XHJcbi8vICAgICAgICAgICAgICAgICBsZXQgcGFyYW1zID0ge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIFwiX2lkXCI6IHBheW1lbnRJZCxcclxuLy8gICAgICAgICAgICAgICAgICAgICBcInJlZmVyZW5jZVwiOiAnVVRIJyxcclxuLy8gICAgICAgICAgICAgICAgICAgICBcImRpc2NvdW50XCI6IHRoYXQuc3RhdGUuZGlzY291bnQsXHJcbi8vICAgICAgICAgICAgICAgICAgICAgXCJnc3RcIjogdGhhdC5zdGF0ZS5nc3QsXHJcbi8vICAgICAgICAgICAgICAgICAgICAgXCJkZXNjXCI6ICcnLFxyXG4vLyAgICAgICAgICAgICAgICAgICAgIFwicHJpbmNpcGFsXCI6IHRoYXQuc3RhdGUucHJpbmNpcGxlQW1vdW50LFxyXG4vLyAgICAgICAgICAgICAgICAgICAgIFwicGF5bWVudHVybFwiOiBQYXltZW50VXJsLFxyXG4vLyAgICAgICAgICAgICAgICAgICAgIFwicHJvZFwiOiBmYWxzZVxyXG4vLyAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAgICAgLy90aGF0LnByb3BzLmNvbmZpcm1Cb29raW5nKHBhcmFtcyk7XHJcbi8vICAgICAgICAgICAgICAgICBsZXQgYm9va1BhcmFtcyA9IHtcclxuLy8gICAgICAgICAgICAgICAgICAgICBib29raW5nSWQ6IHRoYXQucHJvcHMuYm9va2luZ0RhdGEuYm9va2luZ0lkXHJcbi8vICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgICAgICB0aGF0LnByb3BzLmNvbmZpcm1Cb29raW5nKGJvb2tQYXJhbXMpO1xyXG4vLyAgICAgICAgICAgICB9LFxyXG4vLyAgICAgICAgICAgICBwcmVmaWxsOiB7XHJcbi8vICAgICAgICAgICAgICAgICBuYW1lOiAnVVRIJyxcclxuLy8gICAgICAgICAgICAgICAgIGNvbnRhY3Q6ICcnLFxyXG4vLyAgICAgICAgICAgICAgICAgZW1haWw6ICcnXHJcbi8vICAgICAgICAgICAgIH0sXHJcbi8vICAgICAgICAgICAgIG5vdGVzOiB7XHJcbi8vICAgICAgICAgICAgICAgICBhZGRyZXNzOiAnVVRIJ1xyXG4vLyAgICAgICAgICAgICB9LFxyXG4vLyAgICAgICAgICAgICB0aGVtZToge1xyXG4vLyAgICAgICAgICAgICAgICAgY29sb3I6ICcjM2ZhOWY1JyxcclxuLy8gICAgICAgICAgICAgICAgIGhpZGVfdG9wYmFyOiBmYWxzZVxyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgfTtcclxuLy8gICAgICAgICAvL2NvbnNvbGUubG9nKG9wdGlvbnMpO1xyXG4vLyAgICAgICAgIHZhciByenAxID0gbmV3IHdpbmRvdy5SYXpvcnBheShvcHRpb25zKTtcclxuLy8gICAgICAgICByenAxLm9uKCdwYXltZW50LmZhaWxlZCcsIGZ1bmN0aW9uIChyZXNwb25zZSl7XHJcbi8vICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3BvbnNlLmVycm9yLmRlc2NyaXB0aW9uKTtcclxuLy8gICAgICAgICB9KTtcclxuLy8gICAgICAgICByenAxLm9wZW4oKTtcclxuLy8gICAgIH1cclxuLy9cclxuLy8gICAgIGhpZGVFcnJvciA9ICgpID0+IHtcclxuLy8gICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuLy8gICAgICAgICAgICAgc2hvd0Vycm9yIDogZmFsc2VcclxuLy8gICAgICAgICB9KVxyXG4vLyAgICAgfVxyXG4vL1xyXG4vLyAgICAgaGlkZUl0ZW1SZW1vdmFsTWVzc2FnZSA9ICgpID0+IHtcclxuLy8gICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuLy8gICAgICAgICAgICAgaXRlbVJlbW92YWxNZXNzYWdlIDogZmFsc2UsXHJcbi8vICAgICAgICAgfSlcclxuLy8gICAgIH1cclxuLy9cclxuLy8gICAgIGVtcHR5Q2FydCA9ICgpID0+IHtcclxuLy8gICAgICAgICBsZXQgc2VsZWN0ZWRSb29tcyA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRSb29tcztcclxuLy9cclxuLy8gICAgICAgICBzZWxlY3RlZFJvb21zID0gc2VsZWN0ZWRSb29tcy5tYXAoaXRlbSA9PiB7XHJcbi8vICAgICAgICAgICAgIGl0ZW0ucXR5ID0gMDtcclxuLy8gICAgICAgICAgICAgcmV0dXJuIGl0ZW07XHJcbi8vICAgICAgICAgfSlcclxuLy9cclxuLy9cclxuLy8gICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuLy8gICAgICAgICAgICAgaXRlbVJlbW92YWxNZXNzYWdlIDogZmFsc2UsXHJcbi8vICAgICAgICAgICAgIHNlbGVjdGVkUm9vbXMgOiBbXSxcclxuLy8gICAgICAgICAgICAgc2VsZWN0ZWRSb29tSWRzIDogW10sXHJcbi8vICAgICAgICAgICAgIHNlYXJjaFN0ZXAgOiAxXHJcbi8vICAgICAgICAgfSlcclxuLy8gICAgIH1cclxuLy8gICAgIGhpZGVDYW5ub3RDb250aW51ZSA9ICgpID0+IHtcclxuLy8gICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuLy8gICAgICAgICAgICAgY2Fubm90Q29udGludWUgOiBmYWxzZVxyXG4vLyAgICAgICAgIH0pXHJcbi8vICAgICB9XHJcbi8vXHJcbi8vICAgICBzaG93RnVsbERldGFpbCA9IChpZCkgPT4ge1xyXG4vLyAgICAgICAgIGxldCBob3RlbF9yb29tcyA9IHRoaXMuc3RhdGUuaG90ZWxfcm9vbXM7XHJcbi8vICAgICAgICAgbGV0IHJvb21MaXN0ID0gIGhvdGVsX3Jvb21zLmZpbHRlcihpdGVtID0+IGl0ZW0ucm9vbWlkID09PSBpZCk7XHJcbi8vICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbi8vICAgICAgICAgICAgIHNob3dEZXRhaWxTdGF0dXMgOiB0cnVlLFxyXG4vLyAgICAgICAgICAgICByb29tSWQgOiBpZCxcclxuLy8gICAgICAgICAgICAgcm9vbURldGFpbCA6IHJvb21MaXN0Lmxlbmd0aCA+IDAgJiYgcm9vbUxpc3RbMF1cclxuLy8gICAgICAgICB9KVxyXG4vLyAgICAgfVxyXG4vL1xyXG4vLyAgICAgaGlkZUZ1bGxEZXRhaWwgPSAoKSA9PiB7XHJcbi8vICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbi8vICAgICAgICAgICAgIHNob3dEZXRhaWxTdGF0dXMgOiBmYWxzZVxyXG4vLyAgICAgICAgIH0pXHJcbi8vICAgICB9XHJcbi8vXHJcbi8vICAgICBzaG93U3BlY2lhbFJlcXVlc3RzID0gKCkgPT4ge1xyXG4vLyAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4vLyAgICAgICAgICAgICBzaG93U3BSZXFTdGF0IDogdHJ1ZVxyXG4vLyAgICAgICAgIH0pXHJcbi8vICAgICB9XHJcbi8vICAgICBoaWRlU3BlY2lhbFJlcXVlc3RzID0gKCkgPT4ge1xyXG4vLyAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4vLyAgICAgICAgICAgICBzaG93U3BSZXFTdGF0IDogZmFsc2VcclxuLy8gICAgICAgICB9KVxyXG4vLyAgICAgfVxyXG4vL1xyXG4vLyAgICAgaGFuZGxlU3BTZWxlY3Rpb24gPSAoZSwgc3ApID0+IHtcclxuLy8gICAgICAgICBsZXQgc2VsZWN0ZWRTcFJlcUlkcyA9IFsuLi50aGlzLnN0YXRlLnNlbGVjdGVkU3BSZXFJZHNdO1xyXG4vLyAgICAgICAgIGxldCBzZWxlY3RlZFNwUmVxcyA9IFsuLi50aGlzLnN0YXRlLnNlbGVjdGVkU3BSZXFzXTtcclxuLy9cclxuLy8gICAgICAgICBpZihlLnRhcmdldC5jaGVja2VkKSB7XHJcbi8vICAgICAgICAgICAgIHNlbGVjdGVkU3BSZXFJZHMucHVzaChzcC5zcF9pZClcclxuLy8gICAgICAgICAgICAgc2VsZWN0ZWRTcFJlcXMucHVzaChzcClcclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgICAgZWxzZSB7XHJcbi8vICAgICAgICAgICAgIGxldCBpbmRleCA9IHNlbGVjdGVkU3BSZXFJZHMuaW5kZXhPZihzcC5zcF9pZCk7XHJcbi8vICAgICAgICAgICAgIHNlbGVjdGVkU3BSZXFJZHMuc3BsaWNlKGluZGV4LCAxKTtcclxuLy8gICAgICAgICAgICAgc2VsZWN0ZWRTcFJlcXMuc3BsaWNlKGluZGV4LCAxKTtcclxuLy9cclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbi8vICAgICAgICAgICAgIHNlbGVjdGVkU3BSZXFzIDogc2VsZWN0ZWRTcFJlcXMsXHJcbi8vICAgICAgICAgICAgIHNlbGVjdGVkU3BSZXFJZHMgOiBzZWxlY3RlZFNwUmVxSWRzXHJcbi8vICAgICAgICAgfSlcclxuLy8gICAgIH1cclxuLy9cclxuLy8gICAgIHJlbW92ZVNwID0gKGUsIHNwX2lkKSA9PiB7XHJcbi8vICAgICAgICAgbGV0IHNlbGVjdGVkU3BSZXFJZHMgPSBbLi4udGhpcy5zdGF0ZS5zZWxlY3RlZFNwUmVxSWRzXTtcclxuLy8gICAgICAgICBsZXQgc2VsZWN0ZWRTcFJlcXMgPSBbLi4udGhpcy5zdGF0ZS5zZWxlY3RlZFNwUmVxc107XHJcbi8vICAgICAgICAgbGV0IGluZGV4ID0gc2VsZWN0ZWRTcFJlcUlkcy5pbmRleE9mKHNwX2lkKTtcclxuLy8gICAgICAgICBzZWxlY3RlZFNwUmVxSWRzLnNwbGljZShpbmRleCwgMSk7XHJcbi8vICAgICAgICAgc2VsZWN0ZWRTcFJlcXMuc3BsaWNlKGluZGV4LCAxKTtcclxuLy8gICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuLy8gICAgICAgICAgICAgc2VsZWN0ZWRTcFJlcXMgOiBzZWxlY3RlZFNwUmVxcyxcclxuLy8gICAgICAgICAgICAgc2VsZWN0ZWRTcFJlcUlkcyA6IHNlbGVjdGVkU3BSZXFJZHNcclxuLy8gICAgICAgICB9KVxyXG4vL1xyXG4vLyAgICAgfVxyXG4vL1xyXG4vLyAgICAgaGlkZVBlbmRpbmdNZXNzYWdlID0gKCkgPT4ge1xyXG4vLyAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4vLyAgICAgICAgICAgICBzaG93UGVuZGluZ01lc3NhZ2UgOiBmYWxzZVxyXG4vLyAgICAgICAgIH0pXHJcbi8vICAgICB9XHJcbi8vXHJcbi8vICAgICB0b2dnbGVDb250ZW50ID0gKCkgPT4ge1xyXG4vLyAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4vLyAgICAgICAgICAgICBleHBhbmRDb250ZW50IDogIXRoaXMuc3RhdGUuZXhwYW5kQ29udGVudFxyXG4vLyAgICAgICAgIH0pXHJcbi8vICAgICB9XHJcbi8vICAgICByZW5kZXIoKSB7XHJcbi8vICAgICAgICAgY29uc29sZS5sb2codGhpcy5wcm9wcy5ob3RlbERldGFpbClcclxuLy8gICAgICAgICAvL2xldCBob3RlbERldGFpbCA9IHRoaXMucHJvcHMuaG90ZWxEZXRhaWw7XHJcbi8vICAgICAgICAgbGV0IGhvdGVsRGV0YWlsID0gdGhpcy5zdGF0ZS5ob3RlbERldGFpbDtcclxuLy8gICAgICAgICBsZXQgYmFubmVySW1hZ2VzID0gdGhpcy5zdGF0ZS5iYW5uZXJJbWFnZXMgfHwgW107XHJcbi8vXHJcbi8vXHJcbi8vICAgICAgICAgbGV0IGdhbGxlcnlJbWFnZXMgPSB0aGlzLnN0YXRlLmdhbGxlcnlJbWFnZXMgfHwgW107XHJcbi8vICAgICAgICAgbGV0IHN0YXJ0RGF0ZSA9IHRoaXMuc3RhdGUuc3RhcnREYXRlO1xyXG4vLyAgICAgICAgIGxldCBlbmREYXRlID0gdGhpcy5zdGF0ZS5lbmREYXRlO1xyXG4vL1xyXG4vLyAgICAgICAgIGxldCBob3RlbF9yb29tcyA9IHRoaXMuc3RhdGUuaG90ZWxfcm9vbXM7XHJcbi8vICAgICAgICAgbGV0IGdlbmVyYWxfZmFjaWxpdGllcyA9ICBob3RlbERldGFpbCA/IGhvdGVsRGV0YWlsLmhvdGVsX2ZhY2lsaXRpZXMgOiBbXTtcclxuLy8gICAgICAgICBsZXQgaG90ZWxmYWNpbGl0aWVzID0gaG90ZWxEZXRhaWwgPyBob3RlbERldGFpbC5ob3RlbGZhY2lsaXRpZXMgOiBbXTtcclxuLy8gICAgICAgICBsZXQgcm9vbVR5cGVzID0gdGhpcy5zdGF0ZS5yb29tVHlwZXMgfHwgW107XHJcbi8vXHJcbi8vICAgICAgICAgbGV0IHNlbGVjdGVkUm9vbXMgPSB0aGlzLnN0YXRlLnNlbGVjdGVkUm9vbXMgfHwgW107XHJcbi8vICAgICAgICAgbGV0IHNwUmVxdWVzdHMgPSB0aGlzLnN0YXRlLnNwUmVxdWVzdHMgfHwgW107XHJcbi8vICAgICAgICAgbGV0IHNlbGVjdGVkU3BSZXFJZHMgPSB0aGlzLnN0YXRlLnNlbGVjdGVkU3BSZXFJZHMgfHwgW107XHJcbi8vICAgICAgICAgbGV0IHNlbGVjdGVkU3BSZXFzID0gdGhpcy5zdGF0ZS5zZWxlY3RlZFNwUmVxcyB8fCBbXTtcclxuLy9cclxuLy8gICAgICAgICBsZXQgdG90YWxfY29zdCA9MDtcclxuLy8gICAgICAgICBsZXQgdG90YWxfZ3N0ID0wO1xyXG4vLyAgICAgICAgIGlmKHNlbGVjdGVkUm9vbXMubGVuZ3RoID4gMCkge1xyXG4vLyAgICAgICAgICAgICBmb3IodmFyIGk9MDsgaTxzZWxlY3RlZFJvb21zLmxlbmd0aDsgaSsrKSB7XHJcbi8vICAgICAgICAgICAgICAgICB0b3RhbF9jb3N0ICs9IChwYXJzZUZsb2F0KHNlbGVjdGVkUm9vbXNbaV0ucm9vbV9wcmljZSkgKiBwYXJzZUludChzZWxlY3RlZFJvb21zW2ldLnF0eSkpXHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgICAgaWYoc2VsZWN0ZWRTcFJlcXMubGVuZ3RoID4gMCkge1xyXG4vLyAgICAgICAgICAgICBmb3IodmFyIGk9MDsgaTxzZWxlY3RlZFNwUmVxcy5sZW5ndGg7IGkrKykge1xyXG4vLyAgICAgICAgICAgICAgICAgaWYoc2VsZWN0ZWRTcFJlcXNbaV0uY2F0ZWdvcnkgPT09ICdwYXlhYmxlJykge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIHRvdGFsX2Nvc3QgKz0gcGFyc2VGbG9hdChzZWxlY3RlZFNwUmVxc1tpXS5yYXRlKVxyXG4vLyAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICAgIHRvdGFsX2dzdCA9ICh0b3RhbF9jb3N0KjEwKS8xMDA7XHJcbi8vICAgICAgICAgbGV0IGdyYW5kX3RvdGFsID0gdG90YWxfY29zdCsgdG90YWxfZ3N0O1xyXG4vLyAgICAgICAgIC8vZ3JhbmRfdG90YWwgPSBncmFuZF90b3RhbD4wPyBncmFuZF90b3RhbC50b0ZpeGVkKDIpOicnO1xyXG4vLyAgICAgICAgIGxldCByYXpvckdyYW5kVG90YWwgPSBncmFuZF90b3RhbCoxMDA7XHJcbi8vXHJcbi8vICAgICAgICAgbGV0IGludmFsaWRGaWVsZHMgPSB0aGlzLnN0YXRlLmludmFsaWRGaWVsZHMgfHwgW107XHJcbi8vICAgICAgICAgY29uc29sZS5sb2coaW52YWxpZEZpZWxkcylcclxuLy9cclxuLy8gICAgICAgICBsZXQgaG90ZWxIaWdobGlnaHRzID0gdGhpcy5zdGF0ZS5ob3RlbEhpZ2hsaWdodHMgfHwgW107XHJcbi8vICAgICAgICAgbGV0IGhvdGVsUG9saWNpZXMgPSB0aGlzLnN0YXRlLmhvdGVsUG9saWNpZXMgfHwgW107XHJcbi8vXHJcbi8vXHJcbi8vICAgICAgICAgY29uc29sZS5sb2coc2VsZWN0ZWRTcFJlcXMpXHJcbi8vXHJcbi8vICAgICAgICAgcmV0dXJuIChcclxuLy8gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XHJcbi8vICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyLXBhZ2VcIj5cclxuLy9cclxuLy8gICAgICAgICAgICAgICAgICAgICA8SG90ZWxOYXZiYXIgIHNjcm9sbFRvU2VjdGlvbj17dGhpcy5zY3JvbGxUb1NlY3Rpb259Lz5cclxuLy8gICAgICAgICAgICAgICAgICAgICB7aG90ZWxEZXRhaWwgJiZcclxuLy8gICAgICAgICAgICAgICAgICAgICA8PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJkZXRhaWxzLWJhbm5uZXJcIj5cclxuLy9cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2Fyb3VzZWwtY29udGFpbmVyXCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJvdXNlbC10ZXh0XCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+e2hvdGVsRGV0YWlsLmhvdGVsX25hbWV9PC9oNT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImxvY2F0aW9uXCI+e2hvdGVsRGV0YWlsLmFkZHJlc3N9PC9wPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4vL1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRlbnRTbGlkZXIgaW1hZ2VzPXtiYW5uZXJJbWFnZXN9Lz5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5zZWFyY2hTdGVwICE9PSAyICYmXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImJvb2tpbmctY29udGFpbmVyIHN0aWNreVwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvb2tpbmctcGFuZWxcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib29raW5nLXBhbmVsLWxlZnRcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9va2luZy1vcHRpb25zXCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXRlLXBpY2tlci1wYW5lbFwiPlxyXG4vL1xyXG4vL1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGF0ZVJhbmdlUGlja2VyXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydERhdGU9e3N0YXJ0RGF0ZX1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZERhdGU9e2VuZERhdGV9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblN0YXJ0RGF0ZUNoYW5nZT17dGhpcy5zZXRTdGFydERhdGV9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkVuZERhdGVDaGFuZ2U9e3RoaXMuc2V0RW5kRGF0ZX1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbmltdW1EYXRlPXtuZXcgRGF0ZSgpfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluaW11bUxlbmd0aD17MX1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdD0nZGQvTU0veXl5eSdcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsZT17ZW5HQn1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyh7c3RhcnREYXRlSW5wdXRQcm9wcywgZW5kRGF0ZUlucHV0UHJvcHMsIGZvY3VzfSkgPT4gKFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkYXRlLXJhbmdlJz5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eydpbnB1dCcgKyAoZm9jdXMgPT09IFNUQVJUX0RBVEUgPyAnIC1mb2N1c2VkJyA6ICcnKX1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5zdGFydERhdGVJbnB1dFByb3BzfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J1N0YXJ0IGRhdGUnXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZGF0ZS1yYW5nZV9hcnJvdycvPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17J2lucHV0JyArIChmb2N1cyA9PT0gRU5EX0RBVEUgPyAnIC1mb2N1c2VkJyA6ICcnKX1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5lbmREYXRlSW5wdXRQcm9wc31cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdFbmQgZGF0ZSdcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRGF0ZVJhbmdlUGlja2VyPlxyXG4vL1xyXG4vL1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4vL1xyXG4vL1xyXG4vL1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VsZWN0LXBhbmVsXCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VsZWN0LWJveFwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwicm9vbXNcIiB2YWx1ZT17dGhpcy5zdGF0ZS5yb29tc31cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2ludmFsaWRGaWVsZHMuaW5jbHVkZXMoJ3Jvb21zJykgPyAnZXJyb3ItZmllbGQnIDogJyd9YH0+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPlJvb21zPC9vcHRpb24+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjFcIj4xPC9vcHRpb24+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjJcIj4yPC9vcHRpb24+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjNcIj4zPC9vcHRpb24+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjRcIj40PC9vcHRpb24+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjVcIj41PC9vcHRpb24+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjZcIj42PC9vcHRpb24+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjdcIj43PC9vcHRpb24+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjhcIj44PC9vcHRpb24+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjlcIj45Kzwvb3B0aW9uPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlbGVjdC1ib3hcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cImFkdWx0c1wiIHZhbHVlPXt0aGlzLnN0YXRlLmFkdWx0c31cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2ludmFsaWRGaWVsZHMuaW5jbHVkZXMoJ2FkdWx0cycpID8gJ2Vycm9yLWZpZWxkJyA6ICcnfWB9PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5BZHVsdHM8L29wdGlvbj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMVwiPjE8L29wdGlvbj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMlwiPjI8L29wdGlvbj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiM1wiPjM8L29wdGlvbj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNFwiPjQ8L29wdGlvbj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNVwiPjU8L29wdGlvbj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNlwiPjY8L29wdGlvbj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiN1wiPjc8L29wdGlvbj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiOFwiPjg8L29wdGlvbj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiOVwiPjkrPC9vcHRpb24+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VsZWN0LWJveFwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwiY2hpbGRyZW5cIiB2YWx1ZT17dGhpcy5zdGF0ZS5jaGlsZHJlbn1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2ludmFsaWRGaWVsZHMuaW5jbHVkZXMoJ2NoaWxkcmVuJykgPyAnZXJyb3ItZmllbGQnIDogJyd9YH0+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPkNoaWxkcmVuPC9vcHRpb24+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjBcIj4wPC9vcHRpb24+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjFcIj4xPC9vcHRpb24+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjJcIj4yPC9vcHRpb24+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjNcIj4zPC9vcHRpb24+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjRcIj40PC9vcHRpb24+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjVcIj41PC9vcHRpb24+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjZcIj42PC9vcHRpb24+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjdcIj43PC9vcHRpb24+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjhcIj44PC9vcHRpb24+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjlcIj45Kzwvb3B0aW9uPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4vL1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbi8vXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5NQVhfQ0FQQUNJVFlfTVNHICE9PSAnJyAmJlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlcnJvci1mbGRcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5NQVhfQ0FQQUNJVFlfTVNHfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvb2tpbmctcGFuZWwtcmlnaHRcIj5cclxuLy9cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9va2luZy1idXR0b24tYmxvY2tcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImdlbmVyYWwtYnRuXCIgb25DbGljaz17KCkgPT4gdGhpcy5zZWFyY2hSb29tcygpfT5Cb29rIE5vdzwvYnV0dG9uPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4vL1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB7IXRoaXMuc3RhdGUuaW5pdFNlYXJjaCAmJlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvb20tc2VjdGlvbiBmYWNpbGl0aWVzXCIgaWQ9XCJob3RlbC1vdmVydmlld1wiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24taGVhZGVyXCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5PdmVydmlldzwvaDU+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLWNvbnRlbnRcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImdlbmVyYWwtaW5mb1wiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImFkZHJlc3Mtc20taWNvXCI+e2hvdGVsRGV0YWlsLmFkZHJlc3N9PC9saT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwaG9uZS1zbS1pY29cIj57aG90ZWxEZXRhaWwucGhvbmVub30gLCB7aG90ZWxEZXRhaWwubW9iaWxlbm99PC9saT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSAgY2xhc3NOYW1lPVwibWFpbC1zbS1pY29cIj57aG90ZWxEZXRhaWwuZW1haWx9PC9saT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuLy9cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BleHRyYS1jb250ZW50ICR7dGhpcy5zdGF0ZS5leHBhbmRDb250ZW50ID8gJyBhY3RpdmUnIDogJyd9YH0+XHJcbi8vXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJ2aWV3LWRlc2NyaXB0aW9uXCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWwgOiBob3RlbERldGFpbC5ob3RlbF9kZXNjfX0gLz5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4vL1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2hvdGVsSGlnaGxpZ2h0cy5sZW5ndGggPiAwICYmXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3ViLWhlYWRlclwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+SGlnaGxpZ2h0czwvaDU+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImhpZ2hsaWdodC10YWJcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2hvdGVsSGlnaGxpZ2h0cy5tYXAoaGwgPT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT57aGwuaGlnaGxpZ2h0c308L2xpPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuLy9cclxuLy9cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9saWN5LWJveFwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdWItaGVhZGVyXCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5Ib3RlbCBQb2xpY2llczwvaDU+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+Q2hlY2sgSW4gVGltZTogPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+e2hvdGVsRGV0YWlsID8gaG90ZWxEZXRhaWwuY2hlY2tpbiA6ICcnfTwvc3Bhbj48L3A+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+Q2hlY2sgT3V0IFRpbWU6IDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPntob3RlbERldGFpbCA/IGhvdGVsRGV0YWlsLmNoZWNrb3V0IDogJyd9PC9zcGFuPjwvcD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4vL1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2hvdGVsUG9saWNpZXMubWFwKGhwID0+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb2xpY3ktYm94IGluZGVudFwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1Yi1oZWFkZXJcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT57aHAuY2F0ZWdvcnl9PC9oNT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtocC5wb2xpY3kubWFwKHBvbCA9PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3BvbC5wb2xpY3l9PC9wPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuLy9cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbi8vXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiY29udGVudC1oaWRlXCIgb25DbGljaz17KCk9PiB0aGlzLnRvZ2dsZUNvbnRlbnQoKX0+U2hvdyB7dGhpcy5zdGF0ZS5leHBhbmRDb250ZW50ID8gJ2xlc3MnIDogJ21vcmUnfTwvbmF2PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbi8vXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInJvb20tc2VjdGlvblwiIGlkPVwiaG90ZWwtcm9vbXNcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbi8vXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLWhlYWRlclwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5zZWFyY2hTdGVwID09PSAyID8gJ0Jvb2tpbmcgRGV0YWlscycgOiAnUm9vbXMnfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g1PlxyXG4vL1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5pbml0U2VhcmNoICYmIHRoaXMuc3RhdGUuc2VhcmNoU3RlcCA9PT0gMSAmJlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRleHQtbGluayBiYWNrXCJcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmJhY2tUb0RldGFpbCgpfT5CYWNrPC9idXR0b24+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuLy9cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5pbml0U2VhcmNoICYmXHJcbi8vXHJcbi8vXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdmFpbGFibGUtcm9vbXNcIj5cclxuLy9cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuc2VhcmNoU3RlcCA9PT0gMSAmJlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2hvdGVsX3Jvb21zLmxlbmd0aCA9PT0gMCAmJlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuby1yZXN1bHRcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29taW5nLXNvb24td3JhcHBlclwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+Tm8gSG90ZWxzIEZvdW5kPC9oMT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+U2VhcmNoIEFnYWluIGZvciByaWdodCBwbGFjZS48L3A+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtob3RlbF9yb29tcy5tYXAocm9vbSA9PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb29tU2VhcmNoQmxvY2sgaXRlbT17cm9vbX0gc2VsZWN0Um9vbT17dGhpcy5zZWxlY3RSb29tfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRSb29tcz17dGhpcy5zdGF0ZS5zZWxlY3RlZFJvb21zfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRSb29tSWRzPXt0aGlzLnN0YXRlLnNlbGVjdGVkUm9vbUlkc31cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZVF0eT17dGhpcy5jaGFuZ2VRdHl9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93RnVsbERldGFpbD17dGhpcy5zaG93RnVsbERldGFpbH1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm9vbS1ib29rLXN1Ym1pdFwiPlxyXG4vL1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZ2VuZXJhbC1idG5cIlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5jb250aW51ZVRvU3VtbWFyeSgpfT5Db250aW51ZVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbi8vXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnNlYXJjaFN0ZXAgPT09IDIgJiZcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VtbWFyeS10YWJsZVwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZVwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Sb29tczwvdGg+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+UXR5PC90aD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5QcmljZTwvdGg+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+VG90YWwgUHJpY2U8L3RoPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPjwvdGg+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3NlbGVjdGVkUm9vbXMubWFwKHJvb20gPT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdW1tYXJ5SXRlbSBpdGVtPXtyb29tfSBzZWxlY3RSb29tPXt0aGlzLnNlbGVjdFJvb219XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRSb29tcz17dGhpcy5zdGF0ZS5zZWxlY3RlZFJvb21zfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkUm9vbUlkcz17dGhpcy5zdGF0ZS5zZWxlY3RlZFJvb21JZHN9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlUXR5PXt0aGlzLmNoYW5nZVF0eX1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbi8vXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJzcGVjaWFsLXNlcnZpY2VcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xzcGFuPVwiNVwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuYXYgb25DbGljaz17KCkgPT4gdGhpcy5zaG93U3BlY2lhbFJlcXVlc3RzKCl9IGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPkFkZCBTcGVjaWFsIFJlcXVlc3RzICs8L25hdj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbi8vXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZFNwUmVxcy5sZW5ndGggPjAgJiZcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRTcFJlcXMuZmlsdGVyKHNwID0+IHNwLmNhdGVnb3J5ID09PSAncGF5YWJsZScpLm1hcChzcCA9PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cInNwZWNpYWwtc2VydmljZVwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xTcGFuPVwiM1wiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57c3AudGl0bGV9PC9zcGFuPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPuKCuSB7c3AucmF0ZX08L3RkPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJkZWxldGUtaXRlbVwiIG9uQ2xpY2s9eyhlKSA9PiB0aGlzLnJlbW92ZVNwKGUsc3Auc3BfaWQpfT48L2J1dHRvbj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3NlbGVjdGVkU3BSZXFzLmxlbmd0aCA+MCAmJlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFNwUmVxcy5maWx0ZXIoc3AgPT4gc3AuY2F0ZWdvcnkgPT09ICdub24gcGF5YWJsZScpLm1hcChzcCA9PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cInNwZWNpYWwtc2VydmljZVwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xTcGFuPVwiM1wiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57c3AudGl0bGV9PC9zcGFuPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPuKCuSAwPC90ZD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZGVsZXRlLWl0ZW1cIiBvbkNsaWNrPXsoZSkgPT4gdGhpcy5yZW1vdmVTcChlLHNwLnNwX2lkKX0+PC9idXR0b24+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbi8vXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuLy9cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJmb250LWJvbGRcIj5UT1RBTDwvdGQ+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+4oK5IHt0b3RhbF9jb3N0LnRvRml4ZWQoMil9PC90ZD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48L3RkPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbi8vXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjwvdGQ+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+R1NUIDEwLjAwJTwvdGQ+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+4oK5IHt0b3RhbF9nc3QudG9GaXhlZCgyKX08L3RkPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjwvdGQ+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbi8vXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuLy9cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJmb250LWJvbGRcIj5HUkFORCBUT1RBTDwvdGQ+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+4oK5IHtncmFuZF90b3RhbC50b0ZpeGVkKDIpfTwvdGQ+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbFNwYW49XCI1XCI+Q2hlY2staW4gJiBDaGVjay1vdXQ6IDxzcGFuXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+e21vbWVudCh0aGlzLnN0YXRlLmNoZWNraW5kYXRlKS5mb3JtYXQoJ0REIE1NTSBZWVlZJyl9IC0ge21vbWVudCh0aGlzLnN0YXRlLmNoZWNrb3V0ZGF0ZSkuZm9ybWF0KCdERCBNTU0gWVlZWScpfTwvc3Bhbj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4vL1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb24taGVhZGVyXCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PlBlcnNvbmFsIERldGFpbHM8L2g1PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbi8vXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJmb3JtLWNvbnRhaW5lclwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtYm94XCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkZpcnN0IE5hbWU8L2xhYmVsPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJmaXJzdG5hbWVcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmZpcnN0bmFtZX1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgaW5wdXQtZmllbGQgJHtpbnZhbGlkRmllbGRzLmluY2x1ZGVzKCdmaXJzdG5hbWUnKSA/ICdlcnJvci1maWVsZCcgOiAnJ31gfS8+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtYm94XCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkxhc3QgTmFtZTwvbGFiZWw+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImxhc3RuYW1lXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5sYXN0bmFtZX1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgaW5wdXQtZmllbGQgJHtpbnZhbGlkRmllbGRzLmluY2x1ZGVzKCdsYXN0bmFtZScpID8gJ2Vycm9yLWZpZWxkJyA6ICcnfWB9Lz5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ib3hcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+QWRkcmVzcyAxPC9sYWJlbD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiYWRkcmVzczFcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmFkZHJlc3MxfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BpbnB1dC1maWVsZCAke2ludmFsaWRGaWVsZHMuaW5jbHVkZXMoJ2FkZHJlc3MxJykgPyAnZXJyb3ItZmllbGQnIDogJyd9YH0vPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWJveFwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5BZGRyZXNzIDI8L2xhYmVsPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJhZGRyZXNzMlwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuYWRkcmVzczJ9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGlucHV0LWZpZWxkICR7aW52YWxpZEZpZWxkcy5pbmNsdWRlcygnYWRkcmVzczInKSA/ICdlcnJvci1maWVsZCcgOiAnJ31gfS8+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTNcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtYm94XCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkNpdHk8L2xhYmVsPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJjaXR5XCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5jaXR5fVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BpbnB1dC1maWVsZCAke2ludmFsaWRGaWVsZHMuaW5jbHVkZXMoJ2NpdHknKSA/ICdlcnJvci1maWVsZCcgOiAnJ31gfS8+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTNcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtYm94XCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlN0YXRlPC9sYWJlbD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwic3RhdGVcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnN0YXRlfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BpbnB1dC1maWVsZCAke2ludmFsaWRGaWVsZHMuaW5jbHVkZXMoJ3N0YXRlJykgPyAnZXJyb3ItZmllbGQnIDogJyd9YH0vPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0zXCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWJveFwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5Db3VudHJ5PC9sYWJlbD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiY291bnRyeVwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuY291bnRyeX1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgaW5wdXQtZmllbGQgJHtpbnZhbGlkRmllbGRzLmluY2x1ZGVzKCdjb3VudHJ5JykgPyAnZXJyb3ItZmllbGQnIDogJyd9YH0vPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0zXCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWJveFwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5QaW5jb2RlPC9sYWJlbD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwicGluY29kZVwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucGluY29kZX1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgaW5wdXQtZmllbGQgJHtpbnZhbGlkRmllbGRzLmluY2x1ZGVzKCdwaW5jb2RlJykgPyAnZXJyb3ItZmllbGQnIDogJyd9YH0vPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00XCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWJveFwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5Nb2JpbGU8L2xhYmVsPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCJcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgaW5wdXQtZmllbGQgJHtpbnZhbGlkRmllbGRzLmluY2x1ZGVzKCdtb2JpbGUnKSA/ICdlcnJvci1maWVsZCcgOiAnJ31gfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibW9iaWxlXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5tb2JpbGV9Lz5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNFwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ib3hcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+QWRkaXRpb25hbCBQaG9uZTwvbGFiZWw+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BpbnB1dC1maWVsZCAke2ludmFsaWRGaWVsZHMuaW5jbHVkZXMoJ2FkZGl0aW9uYWxwaG9uZW51bWJlcicpID8gJ2Vycm9yLWZpZWxkJyA6ICcnfWB9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJhZGRpdGlvbmFscGhvbmVudW1iZXJcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmFkZGl0aW9uYWxwaG9uZW51bWJlcn0vPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00XCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWJveFwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5FbWFpbDwvbGFiZWw+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGlucHV0LWZpZWxkICR7aW52YWxpZEZpZWxkcy5pbmNsdWRlcygnZW1haWwnKSA/ICdlcnJvci1maWVsZCcgOiAnJ31gfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmVtYWlsfS8+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbi8vXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBheW1lbnQtd3JhcFwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZ2VuZXJhbC1idG4gZ3JleVwiIG9uQ2xpY2s9eygpPT4gdGhpcy5iYWNrVG9DYXJ0KCl9PkJhY2s8L2J1dHRvbj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImdlbmVyYWwtYnRuXCJcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB0aGlzLnNhdmVCb29raW5nKGUsIGdyYW5kX3RvdGFsLCB0b3RhbF9jb3N0LCAwLjAwLCAnJywgdG90YWxfZ3N0KX0+Q29udGludWVcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVG8gUGF5bWVudFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbi8vXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4vL1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHshdGhpcy5zdGF0ZS5pbml0U2VhcmNoICYmXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb29tLWNvbnRhaW5lclwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aG90ZWxfcm9vbXMubGVuZ3RoID09PSAwICYmXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibm8tcmVzdWx0XCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Sb29tcyB3aWxsIGJlIGFkZGVkIHNvb248L3A+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbi8vXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtob3RlbF9yb29tcy5tYXAocm9vbSA9PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvb21CbG9jayBpdGVtPXtyb29tfSBzaG93RnVsbERldGFpbD17dGhpcy5zaG93RnVsbERldGFpbH0vPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4vL1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbi8vXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHshdGhpcy5zdGF0ZS5pbml0U2VhcmNoICYmXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbi8vXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzcz1cImNvbnRlbnQtYXJlYSB0ZXh0LWNvbnRlbnRcIiBpZD1cImhvdGVsLWZhY2lsaXRpZXNcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24taGVhZGVyXCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+RmFjaWxpdGllcyAmIEF0dHJhY3Rpb25zPC9oNT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmVhdHVyZS13cmFwcGVyIHRocmVlLXBlci1jb2wgaW1hZ2UtdG9wXCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IWhvdGVsZmFjaWxpdGllcyB8fCBob3RlbGZhY2lsaXRpZXMubGVuZ3RoID09PSAwICYmXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+RmFjaWxpdGllcyB3aWxsIGJlIGFkZGVkIHNvb24uPC9oNT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuLy9cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtob3RlbGZhY2lsaXRpZXMgJiYgaG90ZWxmYWNpbGl0aWVzLmxlbmd0aCA+IDAgJiZcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2hvdGVsZmFjaWxpdGllcy5tYXAoKGZhYywgaW5kZXgpID0+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGYWNpbGl0eU5ld0Jsb2NrIGl0ZW09e2ZhY30gaW1nQWxpZ249e2luZGV4ICUgMiA9PT0gMSA/ICdsZWZ0JyA6ICdyaWdodCd9Lz5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicm9vbS1zZWN0aW9uXCIgaWQ9XCJob3RlbC1nYWxsZXJ5XCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLWhlYWRlclwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PkdhbGxlcnk8L2g1PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdhbGxlcnkgZ2FsbGVyeUltYWdlcz17Z2FsbGVyeUltYWdlc30gLz5cclxuLy9cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuLy9cclxuLy9cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgICAgICAgICA8Lz5cclxuLy8gICAgICAgICAgICAgICAgICAgICB9XHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vICAgICAgICAgICAgICAgICAgICAgPEZvb3RlciAvPlxyXG4vL1xyXG4vL1xyXG4vL1xyXG4vLyAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbi8vXHJcbi8vICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5zaG93RXJyb3IgJiZcclxuLy8gICAgICAgICAgICAgICAgIDxBbGVydE1vZGFsXHJcbi8vICAgICAgICAgICAgICAgICAgICAgbW9kYWxIZWFkZXIgPSB7ZmFsc2V9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgbW9kYWxGb290ZXIgPSB7dHJ1ZX1cclxuLy8gICAgICAgICAgICAgICAgICAgICBtb2RhbFRpdGxlID0gXCJXYXJuaW5nXCJcclxuLy8gICAgICAgICAgICAgICAgICAgICBtb2RhbEJvZHkgPSBcIlBsZWFzZSBzZWxlY3QgeW91ciBjaG9pY2VzXCJcclxuLy8gICAgICAgICAgICAgICAgICAgICBtb2RhbFN0YXR1cz17dGhpcy5zdGF0ZS5zaG93RXJyb3J9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgT0tCdXR0b249e3RydWV9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgQ0FOQ0VMQnV0dG9uPXtmYWxzZX1cclxuLy8gICAgICAgICAgICAgICAgICAgICBPS0FjdGlvbj17dGhpcy5oaWRlRXJyb3J9XHJcbi8vICAgICAgICAgICAgICAgICAvPlxyXG4vLyAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuc2hvd1Byb2ZpbGVJbmZvRXJyb3IgJiZcclxuLy8gICAgICAgICAgICAgICAgIDxBbGVydE1vZGFsXHJcbi8vICAgICAgICAgICAgICAgICAgICAgbW9kYWxIZWFkZXIgPSB7ZmFsc2V9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgbW9kYWxGb290ZXIgPSB7dHJ1ZX1cclxuLy8gICAgICAgICAgICAgICAgICAgICBtb2RhbFRpdGxlID0gXCJQcm9maWxlIERldGFpbHNcIlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIG1vZGFsQm9keSA9IFwiUGxlYXNlIGVudGVyIHlvdXIgcGVyc29uYWwgaW5mb3JtYXRpb24gdG8gcHJvY2VlZFwiXHJcbi8vICAgICAgICAgICAgICAgICAgICAgbW9kYWxTdGF0dXM9e3RoaXMuc3RhdGUuc2hvd1Byb2ZpbGVJbmZvRXJyb3J9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgT0tCdXR0b249e3RydWV9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgQ0FOQ0VMQnV0dG9uPXtmYWxzZX1cclxuLy8gICAgICAgICAgICAgICAgICAgICBPS0FjdGlvbj17dGhpcy5oaWRlUHJvZmlsZUluZm9FcnJvcn1cclxuLy8gICAgICAgICAgICAgICAgIC8+XHJcbi8vICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5pdGVtUmVtb3ZhbE1lc3NhZ2UgJiZcclxuLy8gICAgICAgICAgICAgICAgIDxBbGVydE1vZGFsXHJcbi8vICAgICAgICAgICAgICAgICAgICAgbW9kYWxIZWFkZXIgPSB7ZmFsc2V9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgbW9kYWxGb290ZXIgPSB7dHJ1ZX1cclxuLy8gICAgICAgICAgICAgICAgICAgICBtb2RhbFRpdGxlID0gXCJXYXJuaW5nIVwiXHJcbi8vICAgICAgICAgICAgICAgICAgICAgbW9kYWxCb2R5ID0gXCJBcmUgeW91IHN1cmUgdG8gcmVtb3ZlIHRoaXMgcm9vbT8gWW91IHdpbGwgYmUgcmVkaXJlY3RlZCB0byB0aGUgcm9vbXMgbGlzdC5cIlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIG1vZGFsU3RhdHVzPXt0aGlzLnN0YXRlLml0ZW1SZW1vdmFsTWVzc2FnZX1cclxuLy8gICAgICAgICAgICAgICAgICAgICBPS0J1dHRvbj17dHJ1ZX1cclxuLy8gICAgICAgICAgICAgICAgICAgICBDQU5DRUxCdXR0b249e3RydWV9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgT0tBY3Rpb249e3RoaXMuZW1wdHlDYXJ0fVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIENBTkNFTEFjdGlvbj17dGhpcy5oaWRlSXRlbVJlbW92YWxNZXNzYWdlfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIE9LVGV4dCA9IFwiT0tcIlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIENBTkNFTFRleHQgPSBcIkNBTkNFTFwiXHJcbi8vICAgICAgICAgICAgICAgICAvPlxyXG4vLyAgICAgICAgICAgICAgICAgfVxyXG4vL1xyXG4vLyAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuY2Fubm90Q29udGludWUgJiZcclxuLy8gICAgICAgICAgICAgICAgIDxBbGVydE1vZGFsXHJcbi8vICAgICAgICAgICAgICAgICAgICAgbW9kYWxIZWFkZXIgPSB7ZmFsc2V9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgbW9kYWxGb290ZXIgPSB7dHJ1ZX1cclxuLy8gICAgICAgICAgICAgICAgICAgICBtb2RhbFRpdGxlID0gXCJXYXJuaW5nIVwiXHJcbi8vICAgICAgICAgICAgICAgICAgICAgbW9kYWxCb2R5ID0ge3RoaXMuc3RhdGUuY2Fubm90Q29udGludWVNZXNzYWdlfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIG1vZGFsU3RhdHVzPXt0aGlzLnN0YXRlLmNhbm5vdENvbnRpbnVlfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIE9LQnV0dG9uPXt0cnVlfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIENBTkNFTEJ1dHRvbj17ZmFsc2V9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgT0tBY3Rpb249e3RoaXMuaGlkZUNhbm5vdENvbnRpbnVlfVxyXG4vLyAgICAgICAgICAgICAgICAgLz5cclxuLy8gICAgICAgICAgICAgICAgIH1cclxuLy9cclxuLy8gICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnNob3dEZXRhaWxTdGF0dXMgJiZcclxuLy8gICAgICAgICAgICAgICAgIDxGdWxsV2lkdGhNb2RhbFxyXG4vLyAgICAgICAgICAgICAgICAgICAgIG1vZGFsSGVhZGVyID0ge3RydWV9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgbW9kYWxGb290ZXIgPSB7dHJ1ZX1cclxuLy8gICAgICAgICAgICAgICAgICAgICBtb2RhbFRpdGxlID0ge2hvdGVsRGV0YWlsLmhvdGVsX25hbWV9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgbW9kYWxCb2R5ID0gezxSb29tRGV0YWlsIHJvb21EZXRhaWw9e3RoaXMuc3RhdGUucm9vbURldGFpbH0gaGlkZUZ1bGxEZXRhaWw9e3RoaXMuaGlkZUZ1bGxEZXRhaWx9IC8+fVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIG1vZGFsU3RhdHVzPXt0aGlzLnN0YXRlLnNob3dEZXRhaWxTdGF0dXN9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgT0tCdXR0b249e3RydWV9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgQ0FOQ0VMQnV0dG9uPXtmYWxzZX1cclxuLy8gICAgICAgICAgICAgICAgICAgICBPS0FjdGlvbj17dGhpcy5oaWRlRnVsbERldGFpbH1cclxuLy8gICAgICAgICAgICAgICAgICAgICBDQU5DRUxBY3Rpb249e3RoaXMuaGlkZUZ1bGxEZXRhaWx9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgT0tUZXh0ID0gXCJPS1wiXHJcbi8vICAgICAgICAgICAgICAgICAgICAgQ0FOQ0VMVGV4dCA9IFwiQ0FOQ0VMXCJcclxuLy8gICAgICAgICAgICAgICAgIC8+XHJcbi8vICAgICAgICAgICAgICAgICB9XHJcbi8vXHJcbi8vICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5zaG93U3BSZXFTdGF0ICYmXHJcbi8vICAgICAgICAgICAgICAgICA8QWxlcnRNb2RhbFxyXG4vLyAgICAgICAgICAgICAgICAgICAgIG1vZGFsSGVhZGVyID0ge2ZhbHNlfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIG1vZGFsRm9vdGVyID0ge3RydWV9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgbW9kYWxUaXRsZSA9IFwiV2FybmluZyFcIlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIG1vZGFsQm9keSA9IHs8SG90ZWxTcFJlcUxpc3Qgc3BSZXF1ZXN0cz17c3BSZXF1ZXN0c30gc2VsZWN0ZWRTcFJlcUlkcz17dGhpcy5zdGF0ZS5zZWxlY3RlZFNwUmVxSWRzfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRTcFJlcXM9e3RoaXMuc3RhdGUuc2VsZWN0ZWRTcFJlcXN9IGhhbmRsZVNwU2VsZWN0aW9uPXt0aGlzLmhhbmRsZVNwU2VsZWN0aW9ufSAvPn1cclxuLy8gICAgICAgICAgICAgICAgICAgICBtb2RhbFN0YXR1cz17dGhpcy5zdGF0ZS5zaG93U3BSZXFTdGF0fVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIE9LQnV0dG9uPXt0cnVlfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIENBTkNFTEJ1dHRvbj17ZmFsc2V9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgT0tBY3Rpb249e3RoaXMuaGlkZVNwZWNpYWxSZXF1ZXN0c31cclxuLy8gICAgICAgICAgICAgICAgIC8+XHJcbi8vICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5zaG93UGVuZGluZ01lc3NhZ2UgJiZcclxuLy8gICAgICAgICAgICAgICAgIDxBbGVydE1vZGFsXHJcbi8vICAgICAgICAgICAgICAgICAgICAgbW9kYWxIZWFkZXIgPSB7ZmFsc2V9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgbW9kYWxGb290ZXIgPSB7dHJ1ZX1cclxuLy8gICAgICAgICAgICAgICAgICAgICBtb2RhbFRpdGxlID0gXCJXYXJuaW5nIVwiXHJcbi8vICAgICAgICAgICAgICAgICAgICAgbW9kYWxCb2R5ID0ge1wiQm9va2luZyBpcyB0ZW1wZXJvcmlseSB1bmF2YWlsYWJsZSBkdWUgdG8gQ292aWQtMTkuIEl0IHdpbGwgYmUgYXZhaWxhYmxlIG9ubHkgZnJvbSBKdWx5IDIwMjEgb253YXJkcy4gRm9yIGZ1cnRoZXIgaW5mb3JtYXRpb24gcGxlYXNlIHNlbmQgYW4gZW1haWwgdG8gYm9va2luZ0B1dGhob3RlbHMuY29tIG9yIGNhbGwgKzkxIDk3NDY4Mzg4ODMsKzkxIDk1NjczMzg4ODQuXCJ9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgbW9kYWxTdGF0dXM9e3RoaXMuc3RhdGUuc2hvd1BlbmRpbmdNZXNzYWdlfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIE9LQnV0dG9uPXt0cnVlfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIENBTkNFTEJ1dHRvbj17ZmFsc2V9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgT0tBY3Rpb249e3RoaXMuaGlkZVBlbmRpbmdNZXNzYWdlfVxyXG4vLyAgICAgICAgICAgICAgICAgLz5cclxuLy8gICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgPC9kaXY+XHJcbi8vXHJcbi8vICAgICAgICAgKTtcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XHJcbiAgICBob3RlbERhdGE6c3RhdGUuSG90ZWxSZWR1Y2VyLmhvdGVsRGF0YSxcclxuICAgLy8gZmFjaWxpdHlEYXRhOnN0YXRlLkhvdGVsUmVkdWNlci5mYWNpbGl0eURhdGEsXHJcbiAgICBib29raW5nRGF0YSA6IHN0YXRlLkhvdGVsUmVkdWNlci5ib29raW5nRGF0YVxyXG59KTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxyXG4gICAgbWFwU3RhdGVUb1Byb3BzLFxyXG4gICAge1xyXG5cclxuICAgICAgICBzZWFyY2hSb29tcyA6IEhvdGVsQWN0aW9ucy5zZWFyY2hSb29tcyxcclxuICAgICAgICBzYXZlQm9va2luZyA6IEhvdGVsQWN0aW9ucy5zYXZlQm9va2luZyxcclxuICAgICAgICBjb25maXJtQm9va2luZyA6IEhvdGVsQWN0aW9ucy5jb25maXJtQm9va2luZyxcclxuICAgICAgICBnZXRCYW5uZXJJbWFnZXMgOiBIb3RlbEFjdGlvbnMuZ2V0QmFubmVySW1hZ2VzLFxyXG4gICAgICAgIC8vZ2V0SG90ZWxIaWdobGlnaHRzIDogSG90ZWxBY3Rpb25zLmdldEhvdGVsSGlnaGxpZ2h0cyxcclxuICAgICAgICBnZXRIb3RlbFBvbGljaWVzIDogSG90ZWxBY3Rpb25zLmdldEhvdGVsUG9saWNpZXMsXHJcbiAgICAgICAgZ2V0U3BSZXF1ZXN0cyA6IEhvdGVsQWN0aW9ucy5nZXRTcFJlcXVlc3RzXHJcbiAgICB9XHJcbikoSG90ZWxEZXRhaWxTbHVnKTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiU3VzcGVuc2UiLCJsYXp5IiwidXNlUm91dGVyIiwiRm9vdGVyIiwiQ29udGVudFNsaWRlciIsImdldFVybFNlZ21lbnQiLCJjb25uZWN0IiwiSG90ZWxBY3Rpb25zIiwiZW5HQiIsIkRhdGVSYW5nZVBpY2tlciIsIlNUQVJUX0RBVEUiLCJFTkRfREFURSIsIlJvb21CbG9jayIsIlJvb21EZXRhaWwiLCJSb29tU2VhcmNoQmxvY2siLCJGYWNpbGl0eU5ld0Jsb2NrIiwiU3VtbWFyeUl0ZW0iLCJBbGVydE1vZGFsIiwibW9tZW50IiwiRnVsbFdpZHRoTW9kYWwiLCJIb3RlbE5hdmJhciIsIkhvdGVsU3BSZXFMaXN0IiwiR2FsbGVyeSIsIklNQUdFX1BBVEgiLCJBUEkiLCJIb3RlbERldGFpbFNsdWciLCJob3RlbERldGFpbCIsImdhbGxlcnlJbWFnZXMiLCJob3RlbF9yb29tcyIsInJvdXRlciIsImhvdGVsX3VybCIsInF1ZXJ5IiwiY29uc29sZSIsImxvZyIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwiaG90ZWxEYXRhIiwiSG90ZWxSZWR1Y2VyIiwiYm9va2luZ0RhdGEiLCJzZWFyY2hSb29tcyIsInNhdmVCb29raW5nIiwiY29uZmlybUJvb2tpbmciLCJnZXRCYW5uZXJJbWFnZXMiLCJnZXRIb3RlbFBvbGljaWVzIiwiZ2V0U3BSZXF1ZXN0cyJdLCJzb3VyY2VSb290IjoiIn0=