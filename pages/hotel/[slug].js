import React, { Component,Suspense, lazy } from 'react';
import Head from 'next/head'
import { useRouter } from 'next/router'
import Footer from "../../views/Footer";
import ContentSlider from "../../views/common/hotelSlider";
import {getUrlSegment} from "../../utilities/CustomFunctions";
import {connect} from "react-redux";
import * as HotelActions from "../../actions/hotel";
import { enGB } from 'date-fns/locale'
import { DateRangePicker, START_DATE, END_DATE } from 'react-nice-dates'
import 'react-nice-dates/build/style.css'
import RoomBlock from "../../views/RoomBlock";
import RoomDetail from "../../views/RoomDetail";
import RoomSearchBlock from "../../views/RoomSearchBlock";
import FacilityNewBlock from "../../views/FacilityNewBlock";
import SummaryItem from "../../views/SummaryItem";
import AlertModal from "../../views/common/AlertModal";
import moment from 'moment';
import FullWidthModal from "../../views/common/FullWidthModal";
import HotelNavbar from "../../views/HotelNavbar";
import HotelSpReqList from "../../views/HotelSpReqList";
import Gallery from "../../views/common/Gallery";
import {IMAGE_PATH, API_PATH} from "../../constants";
const API = 'https://rzp_test_rnEH5I4NHuaGJx:SPmq6qKQELxxLlYTnP7Y5dyj@api.razorpay.com/v1/payments/';
//This gets called every time the page is called
export async function getServerSideProps(context) {
    const {params} = context;
    const {slug} = params;
    //hotel detail
    const response = await fetch(`${API_PATH}hotel/hoteldetailsv2?url=${slug}`);
    const res = await response.json();
    let hotelDetail = res.results ? res.results.data: [];
    console.log(hotelDetail)

    //Room Types
    const response2 = await fetch(`${API_PATH}hotel/roomtype`);
    const res2 = await response2.json();
    let roomTypes = res2.results ? res2.results.data: [];
    let bannerImages = [];
    let hotel_rooms = [];
    let galleryImages =[];
    let hotel_id = ''
    if(hotelDetail) {
        console.log(hotelDetail)
        hotel_id = hotelDetail.hotel_id;
        console.log(hotel_id)
        const response3 = await fetch(`${API_PATH}hotel/hotelbannerimages?hotel_id=${hotel_id}`);
        const res3 = await response3.json();
        bannerImages = res3.results ? res3.results.data: [];

        hotel_rooms = hotelDetail.hotel_rooms || [];
        hotel_rooms = hotel_rooms.map(item => {
            item.qty = 0
            return item;
        });
        galleryImages = hotelDetail.hotel_images || [];

        return {
            props : {
                hotelDetail : [hotelDetail],
                hotel_rooms : hotel_rooms,
                galleryImages : galleryImages,
                bannerImages : bannerImages
               // MAX_CAPACITY_GENERAL : hotelDetail.max_occupancy,
                //hotelHighlights : hotelDetail.hotelhighlights,
                //hotelPolicies : hotelDetail.hotelpolicies,
                //spRequests : hotelDetail.specialrequest
            }
        }
    }

    //this.props.getBannerImages(params);
    // let hotel_rooms = this.props.hotelDetail.hotel_rooms || [];
    // hotel_rooms = hotel_rooms.map(item => {
    //     item.qty = 0
    //     return item;
    // });
    // let galleryImages = this.props.hotelDetail.hotel_images || [];
    // this.setState({
    //     hotel_id : hotel_id,
    //     hotelDetail : hotelDetail,
    //     hotel_rooms : hotel_rooms,
    //     galleryImages : galleryImages,
    //     MAX_CAPACITY_GENERAL : hotelDetail.max_occupancy,
    //     hotelHighlights : hotelDetail.hotelhighlights,
    //     hotelPolicies : hotelDetail.hotelpolicies,
    //     spRequests : hotelDetail.specialrequest
    // }, function() {
    //
    // })


}



const HotelDetailSlug =({hotelDetail, galleryImages, bannerImages, hotel_rooms }) => {

    const router = useRouter()
    const { slug } = router.query;
    console.log(hotelDetail)
    console.log(galleryImages)
    console.log(hotel_rooms)
    console.log(bannerImages)

    return(
         <HotelDetail hotelDetail={hotelDetail[0]} hotel_url={slug} bannerImages={bannerImages}
                      galleryImages={galleryImages} hotel_rooms={hotel_rooms}/>
    )
}

class HotelDetail extends Component {
    constructor(props) {
        super(props);
        let today = new Date();
        let tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);
        this.state = {
            today : today,
            tomorrow : tomorrow,
            startDate : today,
            endDate : tomorrow,
            checkindate : today,
            checkoutdate : tomorrow,
            rooms : '',
            adults : '',
            children : '',
            roomTypes : [],
            initSearch : false,
            searchStep : 1,
            selectedRooms : [],
            selectedRoomIds : [],
            hotel_rooms : [],
            invalidFields : [],
            showError : false,
            firstname :'',
            lastname :'',
            address1 : '',
            address2 : '',
            city : '',
            state : '',
            pincode : '',
            country : '',
            mobile : '',
            additionalphonenumber : '',
            email : '',
            showProfileInfoError : false,
            bookingId : '',
            totalAmount : 0,
            principleAmount : 0,
            discount : 0,
            program_description : '',
            gst : 0,
            MAX_CAPACITY_MSG : '',
            itemRemovalMessage : false,
            bannerImages : [],
            cannotContinueMessage :false,
            galleryImages : [],
            showDetailStatus : false,
            hotelPolicies : [],
            hotelHighlights : [],
            MAX_CAPACITY_GENERAL : 1,
            showSpecialRequests : false,
            spRequests : [],
            selectedSpReqs :[],
            selectedSpReqIds : [],
            showPendingMessage : false,
            expandContent : false
        }
    }
    componentDidMount() {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.async = true;
        document.body.appendChild(script);
        this.setState({
            hotel_url : this.props.hotel_url
        })
    }

    scrollToSection = (section) => {
        if(section !== '') {
            var element = document.getElementById(section);
            if (element) {
                element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
            }
        }
    }


    componentDidUpdate(prevProps, prevState, snapshot) {

        if(this.props.hotelDetail !== prevProps.hotelDetail) {

            this.setState({
                hotel_id : this.props.hotelDetail.hotel_id,
                hotelDetail : this.props.hotelDetail,
                hotel_rooms : this.props.hotel_rooms,
                galleryImages : this.props.galleryImages,
                MAX_CAPACITY_GENERAL : this.props.hotelDetail.max_occupancy,
                hotelHighlights : this.props.hotelDetail.hotelhighlights,
                hotelPolicies : this.props.hotelDetail.hotelpolicies,
                spRequests : this.props.hotelDetail.specialrequest
            }, function() {

            })
        }

        // if(this.props.facilityData.roomTypes !== prevProps.facilityData.roomTypes) {
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

    setStartDate = (date) => {
        this.setState({
            startDate : date
        })
    }
    setEndDate = (date) => {
        this.setState({
            endDate : date
        })
    }

    handleChange = (e) => {
        console.log(e.target.value)
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    searchRooms = () => {


        let MAX_CAPACITY_GENERAL = this.state.MAX_CAPACITY_GENERAL;
        let startDate = this.state.startDate;
        let endDate = this.state.startDate;
        let rooms = this.state.rooms;
        let adults = this.state.adults;
        let children = this.state.children;
        let invalidFields = [];
        if(startDate === '') {
            invalidFields.push('startDate');
        }
        if(endDate === '') {
            invalidFields.push('endDate');
        }
        if(rooms === '') {
            invalidFields.push('rooms');
        }
        if(adults === '') {
            invalidFields.push('adults');
        }

        let adultCount = parseInt(rooms) * parseInt(MAX_CAPACITY_GENERAL);
        if(parseInt(adults) > adultCount) {
            this.setState({
                MAX_CAPACITY_MSG : "Sorry. We are allowing a maximum of "+MAX_CAPACITY_GENERAL+" members in a room"
            })
        }
        if(invalidFields.length === 0 ) {

            let params = {startDate: this.state.startDate, endDate : this.state.endDate, rooms : this.state.rooms,
                adults : this.state.adults, children : this.state.children};
            this.setState({showError : false, initSearch :  true, searchStep : 1, startDate: this.state.startDate, endDate : this.state.endDate, rooms : this.state.rooms,
                adults : this.state.adults, children : this.state.children, invalidFields : invalidFields})
        }
        else {
            this.setState({ showError : true, startDate: this.state.startDate, endDate : this.state.endDate, rooms : this.state.rooms,
                adults : this.state.adults, children : this.state.children, invalidFields : invalidFields})
        }
    }
    resetSearch = () => {
        this.setState({showError : false, initSearch :  false, searchStep : 0, startDate: this.state.today, endDate : this.state.tomorrow, rooms : '',
            adults : '', children : '', invalidFields : []})
    }
    backToDetail = () => {
        this.setState({initSearch :  false})
    }
    backToCart = () => {
        this.setState({searchStep :  1})
    }

    selectRoom = (room, type,e) => {
        e.preventDefault()
        e.stopPropagation();
        let selectedRooms = this.state.selectedRooms;
        let selectedRoomIds = this.state.selectedRoomIds;

        let hotel_rooms = this.props.hotel_rooms
        if(type === 'add' || type === 'choose') {
            console.log(selectedRoomIds)
            if(!selectedRoomIds.includes(room.roomid)){
                selectedRoomIds.push(room.roomid)
                selectedRooms.push(room);
                console.log(room)
            }
        }

        if(type === 'remove') {
            if(this.state.searchStep === 2 && selectedRooms.length ===1){
                this.setState({
                    itemRemovalMessage : true
                })
            }
            else {
                if(selectedRoomIds.includes(room.roomid)) {
                    let index = selectedRoomIds.indexOf(room.roomid);

                    selectedRoomIds.splice(index, 1)
                    selectedRooms.splice(index, 1);
                    hotel_rooms = hotel_rooms.map(item => {
                        if(item.roomid === room.roomid) {
                            item.qty = 0;
                        }
                        return item;
                    });
                }
            }
        }

        this.setState({
            selectedRoomIds :selectedRoomIds,
            selectedRooms : selectedRooms,
            hotel_rooms : hotel_rooms
        }, function(){
            if(type !== 'remove') {
                (type === 'add' || type === 'choose' ) ? this.addQty(room) : this.subQty(room);
            }


        })

    }


    continueToSummary = () => {
        let adultCount = parseInt(this.state.adults);
        console.log(adultCount);
        let personOccupied = 0;
        let selectedRooms = this.state.selectedRooms;
        let totalRooms = 0;
        if(selectedRooms.length > 0) {
            for(var i=0; i<selectedRooms.length; i++) {
                let qty = selectedRooms[i].qty;
                totalRooms += parseInt(qty);
                let occupancy = parseInt(selectedRooms[i].max_capacity_adult);
                let extra_occupancy = selectedRooms[i].extrabed === 'yes'?  1: 0;
                let total_occupancy = occupancy + extra_occupancy;
                personOccupied += parseInt(qty) *total_occupancy;
            }
        }

        if(selectedRooms.length === 0) {
            this.setState({
                cannotContinue : true,
                cannotContinueMessage : "Please select atleast a room to proceed"
            })
        }
        else if(adultCount > personOccupied) {
            this.setState({
                cannotContinue : true,
                cannotContinueMessage : "Sorry."+ adultCount+" persons cannot be occupied in "+totalRooms+" rooms"
            })
        }
        else {
            if(this.state.selectedRooms.length >0) {
                this.setState({
                    searchStep :2
                })
            }
        }



    }

    addQty = (room) => {
        let selectedRooms = this.state.selectedRooms;
        let selectedRoomIds = this.state.selectedRoomIds;
        let roomId = room.roomid;
        selectedRooms = selectedRooms.map(item => {
            if(item.roomid === roomId) {
                if(item.qty) {
                    if(item.qty < item.roomcount) {
                        item.qty = parseInt(item.qty) +1;
                    }
                }
                else {
                    item.qty = 1;
                }
            }
            return item;
        });
        this.setState({
            selectedRooms : selectedRooms,
            selectedRoomIds : selectedRoomIds
        })
    }
    subQty = (room) => {
        console.log(room)
        let selectedRooms = this.state.selectedRooms;
        let selectedRoomIds = this.state.selectedRoomIds;
        let roomId = room.roomid;

        if(room.qty && room.qty === 1) {
            if(this.state.searchStep === 2 && selectedRooms.length ===1){
                this.setState({
                    itemRemovalMessage : true
                })
            }
            else {
                room.qty = 0;
                let index = selectedRoomIds.indexOf(room.roomid);
                selectedRoomIds.splice(index,1)
                selectedRooms.splice(index,1)
            }

        }
        else {

            selectedRooms = selectedRooms.map(item => {
                if(item.roomid === roomId) {
                    item.qty = (item.qty && item.qty >0) ? parseInt(item.qty) -1 :0;
                }
                return item;
            })
        }

        this.setState({
            selectedRooms : selectedRooms,
            selectedRoomIds : selectedRoomIds
        })
    }

    changeQty = (room,e) => {
        let qty = e.target.value;
        let selectedRooms = this.state.selectedRooms;
        let selectedRoomIds = this.state.selectedRoomIds;
        let roomId = room.roomid;
        selectedRooms = selectedRooms.map(item => {
            if(item.roomid === roomId) {
                item.qty = (item.qty && item.qty >0) ? parseInt(item.qty) -1 : 0;
            }
            return item;
        })
        this.selectRoom(room)
    }

    saveBooking = (e, amount, principleAmount, discount, program_description, gst) => {


        let firstname = this.state.firstname;
        let lastname = this.state.lastname;
        let address1 = this.state.address1;
        let address2 = this.state.address2;
        let city = this.state.city;
        let state = this.state.state;
        let country = this.state.country;
        let pincode = this.state.pincode;
        let mobile = this.state.mobile;
        let additionalphonenumber = this.state.additionalphonenumber;
        let email = this.state.email;
        let invalidFields = [];
        if(firstname === '') {
            invalidFields.push('firstname');
        }
        if(lastname === '') {
            invalidFields.push('lastname');
        }
        if(address1 === '') {
            invalidFields.push('address1');
        }
        if(address2 === '') {
            invalidFields.push('address2');
        }
        if(city === '') {
            invalidFields.push('city');
        }
        if(state === '') {
            invalidFields.push('state');
        }
        if(country === '') {
            invalidFields.push('country');
        }
        if(pincode === '') {
            invalidFields.push('pincode');
        }
        if(mobile === '') {
            invalidFields.push('mobile');
        }
        if(additionalphonenumber === '') {
            invalidFields.push('additionalphonenumber');
        }
        if(email === '') {
            invalidFields.push('email');
        }

        if(invalidFields.length === 0) {
            let selectedRooms = this.state.selectedRooms;
            let checkindate = moment(this.state.startDate).format('yyyy-MM-DD');
            let checkoutdate = moment(this.state.endDate).format('yyyy-MM-DD');
            let adults = this.state.adults || 0;
            let children = this.state.children || 0;



            var start = moment(checkindate, "YYYY-MM-DD");
            var end = moment(checkoutdate, "YYYY-MM-DD");

            let noOfDays = moment.duration(end.diff(start)).asDays();

            let noOfrooms = this.state.rooms;
            let taxamount = gst;

            console.log(selectedRooms)

            let selectedSpReqs = this.state.selectedSpReqs;


            let bookedRooms = [];

            for(let i=0; i<selectedRooms.length; i++) {
                let room = {
                    "roomid" : selectedRooms[i].roomid,
                    "noofadults" :  selectedRooms[i].max_capacity_adult,
                    "noofchilds" :  0,
                    "extrabed" :  selectedRooms[i].extrabedcount,
                    "price" :  selectedRooms[i].room_price,
                    "extrabedprice" :  0,
                    "taxamount":  0,
                    "totalprice" :  parseFloat(selectedRooms[i].room_price) * noOfDays,
                }
                bookedRooms.push(room);
            }

            let params = {
                "hotel_id": this.state.hotel_id,
                "checkindate": checkindate,
                "checkoutdate": checkoutdate,
                "noofadults": adults,
                "noofchilds": children,
                "noofrooms": noOfrooms,
                "price" : principleAmount,
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
                "splrequest" : selectedSpReqs.length >0  ? JSON.stringify(selectedSpReqs) : ""
            }
            console.log(params)
            this.props.saveBooking(params);


            this.setState({
                invalidFields : [],
                totalAmount : amount,
                principleAmount : principleAmount,
                discount : discount,
                program_description : program_description,
                gst : gst,
                checkindate : checkindate,
                checkoutdate : checkoutdate
            })
        }
        else {
            this.setState({
                showProfileInfoError : true,
                invalidFields : invalidFields,
                totalAmount : amount,
                principleAmount : principleAmount,
                discount : discount,
                program_description : program_description,
                gst : gst
            })
        }

    }

    hideProfileInfoError = () => {
        this.setState({
            showProfileInfoError : false
        })
    }

    continueToPayment = () => {
        let that=this;
        let options = {
            // key: 'rzp_live_uNQgz6rOGQ96qE',
            key: 'rzp_test_rnEH5I4NHuaGJx',
            amount: parseFloat(this.state.totalAmount)*100, //  = INR 1
            name: 'UTH Booking',
            description: 'Please pay the booking charges here to confirm',
            image: 'https://uthdev.neverbeforeholidays.com/assets/images/uth-logo-black.png',
            // order_id: this.state.orderId,
            handler: function(response) {
                console.log(response);
                that.setState({PaymentId: response.razorpay_payment_id, totalAmount : that.state.totalAmount, date : moment(new Date()).format('DD MMM YYYY') , email :that.state.email, mobile : that.state.mobile })
                //let PaymentUrl = `http://159.65.153.59/site/#/payment-success/`+this.props.bookingData.bookingId;
                const paymentId = response.razorpay_payment_id;

                let PaymentUrl = `https://uthdev.neverbeforeholidays.com/payment-success?rp_id=`+paymentId+`&ramt=`+that.state.totalAmount+`&mobile=`+that.state.mobile+`&email=`+that.state.email+`&method=Card payment&date=`+moment(that.state.today).format('DD MMM, YYYY');
                let params = {
                    "_id": paymentId,
                    "reference": 'UTH',
                    "discount": that.state.discount,
                    "gst": that.state.gst,
                    "desc": '',
                    "principal": that.state.principleAmount,
                    "paymenturl": PaymentUrl,
                    "prod": false
                }
                //that.props.confirmBooking(params);
                let bookParams = {
                    bookingId: that.props.bookingData.bookingId
                }
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
        };
        //console.log(options);
        var rzp1 = new window.Razorpay(options);
        rzp1.on('payment.failed', function (response){
            // console.log(response.error.description);
        });
        rzp1.open();
    }

    hideError = () => {
        this.setState({
            showError : false
        })
    }

    hideItemRemovalMessage = () => {
        this.setState({
            itemRemovalMessage : false,
        })
    }

    emptyCart = () => {
        let selectedRooms = this.state.selectedRooms;

        selectedRooms = selectedRooms.map(item => {
            item.qty = 0;
            return item;
        })


        this.setState({
            itemRemovalMessage : false,
            selectedRooms : [],
            selectedRoomIds : [],
            searchStep : 1
        })
    }
    hideCannotContinue = () => {
        this.setState({
            cannotContinue : false
        })
    }

    showFullDetail = (id) => {
        let hotel_rooms = this.props.hotel_rooms;
        let roomList =  hotel_rooms.filter(item => item.roomid === id);
        this.setState({
            showDetailStatus : true,
            roomId : id,
            roomDetail : roomList.length > 0 && roomList[0]
        })
    }

    hideFullDetail = () => {
        this.setState({
            showDetailStatus : false
        })
    }

    showSpecialRequests = () => {
        this.setState({
            showSpReqStat : true
        })
    }
    hideSpecialRequests = () => {
        this.setState({
            showSpReqStat : false
        })
    }

    handleSpSelection = (e, sp) => {
        let selectedSpReqIds = [...this.state.selectedSpReqIds];
        let selectedSpReqs = [...this.state.selectedSpReqs];

        if(e.target.checked) {
            selectedSpReqIds.push(sp.sp_id)
            selectedSpReqs.push(sp)
        }
        else {
            let index = selectedSpReqIds.indexOf(sp.sp_id);
            selectedSpReqIds.splice(index, 1);
            selectedSpReqs.splice(index, 1);

        }
        this.setState({
            selectedSpReqs : selectedSpReqs,
            selectedSpReqIds : selectedSpReqIds
        })
    }

    removeSp = (e, sp_id) => {
        let selectedSpReqIds = [...this.state.selectedSpReqIds];
        let selectedSpReqs = [...this.state.selectedSpReqs];
        let index = selectedSpReqIds.indexOf(sp_id);
        selectedSpReqIds.splice(index, 1);
        selectedSpReqs.splice(index, 1);
        this.setState({
            selectedSpReqs : selectedSpReqs,
            selectedSpReqIds : selectedSpReqIds
        })

    }

    hidePendingMessage = () => {
        this.setState({
            showPendingMessage : false
        })
    }

    toggleContent = () => {
        this.setState({
            expandContent : !this.state.expandContent
        })
    }
    render() {
        console.log(this.props.hotelDetail)
        //let hotelDetail = this.props.hotelDetail;
        let hotelDetail = this.props.hotelDetail;
        let bannerImages = this.props.bannerImages || [];


        let galleryImages = this.props.galleryImages || [];
        let startDate = this.state.startDate;
        let endDate = this.state.endDate;

        let hotel_rooms = this.props.hotel_rooms;
        let general_facilities =  hotelDetail ? hotelDetail.hotel_facilities : [];
        let hotelfacilities = hotelDetail ? hotelDetail.hotelfacilities : [];
        let roomTypes = this.state.roomTypes || [];

        let selectedRooms = this.state.selectedRooms || [];
        let spRequests = this.state.spRequests || [];
        let selectedSpReqIds = this.state.selectedSpReqIds || [];
        let selectedSpReqs = this.state.selectedSpReqs || [];

        let total_cost =0;
        let total_gst =0;
        if(selectedRooms.length > 0) {
            for(var i=0; i<selectedRooms.length; i++) {
                total_cost += (parseFloat(selectedRooms[i].room_price) * parseInt(selectedRooms[i].qty))
            }
        }
        if(selectedSpReqs.length > 0) {
            for(var i=0; i<selectedSpReqs.length; i++) {
                if(selectedSpReqs[i].category === 'payable') {
                    total_cost += parseFloat(selectedSpReqs[i].rate)
                }
            }
        }
        total_gst = (total_cost*10)/100;
        let grand_total = total_cost+ total_gst;
        //grand_total = grand_total>0? grand_total.toFixed(2):'';
        let razorGrandTotal = grand_total*100;

        let invalidFields = this.state.invalidFields || [];
        console.log(invalidFields)

        let hotelHighlights = hotelDetail ? hotelDetail.hotelhighlights : [];
        let hotelPolicies = this.state.hotelPolicies || [];


        console.log(selectedSpReqs)

        return (

            <>
                <Head>
                    <meta charSet="UTF-8" />
                    <title>{hotelDetail ? hotelDetail.hotel_name :'UTH'}</title>
                    <meta name="description"
                          content={hotelDetail ? (hotelDetail.address + "  " +hotelDetail.phoneno + " " +hotelDetail.mobileno  + hotelDetail.hotel_desc ) : 'UTH Group of Hotels' } />
                    <meta name="keywords"
                          content={hotelDetail ? (hotelDetail.address , hotelDetail.phoneno , hotelDetail.mobileno , hotelDetail.hotel_desc) : 'best hotels of kochi, best hotels'}/>
                    <meta name="author" content="UTH Group Of Hotels" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content={hotelDetail ? hotelDetail.hotel_name :'UTH'} />
                    <meta property="og:description" content="The tourism is in full swing for the God’s own country and the best hotels in Kochi are also ready to welcome the guests. The Sugar hotel in Kochi is a prestigious one in this list whose location itself is significant.UTH is the leading brand in the hotel business that is running many hotels and resorts all over the country and out of the country too such as Sri Lanka, Dubai and Maldives." />
                    <meta property="og:url" content="%PUBLIC_URL%" />
                    <meta property="og:site_name" content="UTH | Group of Hotels" />
                    <meta property="og:image" content="http://159.65.153.59/site/assets/images/fav/og-image.jpg" />
                    <meta name="twitter:card" content="http://159.65.153.59/site/assets/images/fav/og-image.jpg" />
                    <meta name="twitter:title" content="UTH | Group of Hotels" />
                </Head>

                <main>
                    <div className="wrapper">
                <div className="inner-page">

                    <HotelNavbar  scrollToSection={this.scrollToSection}/>
                    {hotelDetail &&
                    <>
                        <section className="details-bannner">

                            <div className="carousel-container">
                                <div className="container">
                                    <div className="carousel-text">
                                        <h5>{hotelDetail.hotel_name}</h5>
                                        <p className="location">{hotelDetail.address}</p>
                                    </div>
                                </div>
                            </div>

                            <ContentSlider images={bannerImages}/>
                        </section>
                        {this.state.searchStep !== 2 &&
                        <section className="booking-container sticky">
                            <div className="container">
                                <div className="booking-panel">
                                    <div className="booking-panel-left">
                                        <div className="booking-options">
                                            <div className="date-picker-panel">


                                                <DateRangePicker
                                                    startDate={startDate}
                                                    endDate={endDate}
                                                    onStartDateChange={this.setStartDate}
                                                    onEndDateChange={this.setEndDate}
                                                    minimumDate={new Date()}
                                                    minimumLength={1}
                                                    format='dd/MM/yyyy'
                                                    locale={enGB}
                                                >
                                                    {({startDateInputProps, endDateInputProps, focus}) => (
                                                        <div className='date-range'>
                                                            <input
                                                                className={'input' + (focus === START_DATE ? ' -focused' : '')}
                                                                {...startDateInputProps}
                                                                placeholder='Start date'
                                                            />
                                                            <span className='date-range_arrow'/>
                                                            <input
                                                                className={'input' + (focus === END_DATE ? ' -focused' : '')}
                                                                {...endDateInputProps}
                                                                placeholder='End date'
                                                            />
                                                        </div>
                                                    )}
                                                </DateRangePicker>


                                            </div>



                                            <div className="select-panel">
                                                <div className="select-box">
                                                    <select name="rooms" value={this.state.rooms}
                                                            onChange={this.handleChange}
                                                            className={`${invalidFields.includes('rooms') ? 'error-field' : ''}`}>
                                                        <option value="">Rooms</option>
                                                        <option value="1">1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                        <option value="4">4</option>
                                                        <option value="5">5</option>
                                                        <option value="6">6</option>
                                                        <option value="7">7</option>
                                                        <option value="8">8</option>
                                                        <option value="9">9+</option>
                                                    </select>
                                                </div>
                                                <div className="select-box">
                                                    <select name="adults" value={this.state.adults}
                                                            onChange={this.handleChange}
                                                            className={`${invalidFields.includes('adults') ? 'error-field' : ''}`}>
                                                        <option value="">Adults</option>
                                                        <option value="1">1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                        <option value="4">4</option>
                                                        <option value="5">5</option>
                                                        <option value="6">6</option>
                                                        <option value="7">7</option>
                                                        <option value="8">8</option>
                                                        <option value="9">9+</option>
                                                    </select>
                                                </div>
                                                <div className="select-box">
                                                    <select name="children" value={this.state.children}
                                                            onChange={this.handleChange}
                                                            className={`${invalidFields.includes('children') ? 'error-field' : ''}`}>
                                                        <option value="">Children</option>
                                                        <option value="0">0</option>
                                                        <option value="1">1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                        <option value="4">4</option>
                                                        <option value="5">5</option>
                                                        <option value="6">6</option>
                                                        <option value="7">7</option>
                                                        <option value="8">8</option>
                                                        <option value="9">9+</option>
                                                    </select>
                                                </div>
                                            </div>

                                        </div>

                                        {this.state.MAX_CAPACITY_MSG !== '' &&
                                        <div className="error-fld">
                                            {this.state.MAX_CAPACITY_MSG}
                                        </div>
                                        }
                                    </div>
                                    <div className="booking-panel-right">

                                        <div className="booking-button-block">
                                            <button className="general-btn" onClick={() => this.searchRooms()}>Book Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        }

                        {!this.state.initSearch &&
                        <div className="room-section facilities" id="hotel-overview">
                            <div className="container">
                                <div className="section-header">
                                    <h5>Overview</h5>
                                </div>
                                <div className="section-content">
                                    <ul className="general-info">
                                        <li className="address-sm-ico">{hotelDetail.address}</li>
                                        <li className="phone-sm-ico">{hotelDetail.phoneno} , {hotelDetail.mobileno}</li>
                                        <li  className="mail-sm-ico">{hotelDetail.email}</li>
                                    </ul>

                                    <div className={`extra-content ${this.state.expandContent ? ' active' : ''}`}>

                                        <div className="overview-description" dangerouslySetInnerHTML={{__html : hotelDetail.hotel_desc}} />

                                        {hotelHighlights.length > 0 &&
                                        <>
                                            <div className="sub-header">
                                                <h5>Highlights</h5>
                                            </div>
                                            <ul className="highlight-tab">
                                                {hotelHighlights.map(hl =>
                                                    <li>{hl.highlights}</li>
                                                )}
                                            </ul>
                                        </>
                                        }


                                        <div className="policy-box">
                                            <div class="sub-header">
                                                <h5>Hotel Policies</h5>
                                            </div>
                                            <p>Check In Time: <span className="font-bold">{hotelDetail ? hotelDetail.checkin : ''}</span></p>
                                            <p>Check Out Time: <span className="font-bold">{hotelDetail ? hotelDetail.checkout : ''}</span></p>
                                        </div>

                                        {hotelPolicies.map(hp =>
                                            <div className="policy-box indent">
                                                <div className="sub-header">
                                                    <h5>{hp.category}</h5>
                                                </div>
                                                {hp.policy.map(pol =>
                                                    <p>{pol.policy}</p>
                                                )}
                                            </div>
                                        )}

                                    </div>

                                    <nav className="content-hide" onClick={()=> this.toggleContent()}>Show {this.state.expandContent ? 'less' : 'more'}</nav>
                                </div>
                            </div>
                        </div>
                        }

                        <section className="room-section" id="hotel-rooms">
                            <div className="container">

                                <div className="section-header">
                                    <h5>
                                        {this.state.searchStep === 2 ? 'Booking Details' : 'Rooms'}
                                    </h5>

                                    {this.state.initSearch && this.state.searchStep === 1 &&
                                    <button className="text-link back"
                                            onClick={() => this.backToDetail()}>Back</button>
                                    }
                                </div>

                                {this.state.initSearch &&


                                <div className="available-rooms">

                                    {this.state.searchStep === 1 &&
                                    <>
                                        {hotel_rooms.length === 0 &&
                                        <div className="no-result">
                                            <div class="coming-soon-wrapper">
                                                <h1>No Hotels Found</h1>
                                                <p>Search Again for right place.</p>
                                            </div>
                                        </div>
                                        }
                                        {hotel_rooms.map(room =>
                                            <RoomSearchBlock item={room} selectRoom={this.selectRoom}
                                                             selectedRooms={this.state.selectedRooms}
                                                             selectedRoomIds={this.state.selectedRoomIds}
                                                             changeQty={this.changeQty}
                                                             showFullDetail={this.showFullDetail}
                                            />
                                        )}
                                        <div className="room-book-submit">

                                            <button className="general-btn"
                                                    onClick={() => this.continueToSummary()}>Continue
                                            </button>
                                        </div>
                                    </>
                                    }

                                    {this.state.searchStep === 2 &&
                                    <>
                                        <div className="summary-table">
                                            <table className="table">
                                                <thead>
                                                <tr>
                                                    <th>Rooms</th>
                                                    <th>Qty</th>
                                                    <th>Price</th>
                                                    <th>Total Price</th>
                                                    <th></th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                {selectedRooms.map(room =>
                                                    <SummaryItem item={room} selectRoom={this.selectRoom}
                                                                 selectedRooms={this.state.selectedRooms}
                                                                 selectedRoomIds={this.state.selectedRoomIds}
                                                                 changeQty={this.changeQty}
                                                    />
                                                )}

                                                <tr className="special-service">
                                                    <td colspan="5">
                                                        <nav onClick={() => this.showSpecialRequests()} className="font-bold">Add Special Requests +</nav>
                                                    </td>

                                                </tr>
                                                {selectedSpReqs.length >0 &&
                                                selectedSpReqs.filter(sp => sp.category === 'payable').map(sp =>
                                                    <tr className="special-service">
                                                        <td colSpan="3">
                                                            <span>{sp.title}</span>
                                                        </td>
                                                        <td className="font-bold">₹ {sp.rate}</td>
                                                        <td>
                                                            <button className="delete-item" onClick={(e) => this.removeSp(e,sp.sp_id)}></button>
                                                        </td>
                                                    </tr>
                                                )}
                                                {selectedSpReqs.length >0 &&
                                                selectedSpReqs.filter(sp => sp.category === 'non payable').map(sp =>
                                                    <tr className="special-service">
                                                        <td colSpan="3">
                                                            <span>{sp.title}</span>
                                                        </td>
                                                        <td className="font-bold">₹ 0</td>
                                                        <td>
                                                            <button className="delete-item" onClick={(e) => this.removeSp(e,sp.sp_id)}></button>
                                                        </td>
                                                    </tr>
                                                )}

                                                <tr>
                                                    <td>

                                                    </td>
                                                    <td></td>
                                                    <td className="font-bold">TOTAL</td>
                                                    <td className="font-bold">₹ {total_cost.toFixed(2)}</td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <td>

                                                    </td>
                                                    <td></td>
                                                    <td className="font-bold">GST 10.00%</td>
                                                    <td className="font-bold">₹ {total_gst.toFixed(2)}</td>
                                                    <td></td>
                                                </tr>

                                                <tr>
                                                    <td>

                                                    </td>
                                                    <td></td>
                                                    <td className="font-bold">GRAND TOTAL</td>
                                                    <td className="font-bold">₹ {grand_total.toFixed(2)}</td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <td colSpan="5">Check-in & Check-out: <span
                                                        className="font-bold">{moment(this.state.checkindate).format('DD MMM YYYY')} - {moment(this.state.checkoutdate).format('DD MMM YYYY')}</span>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>

                                        <div class="section-header">
                                            <h5>Personal Details</h5>
                                        </div>

                                        <form className="form-container">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="input-box">
                                                        <label>First Name</label>
                                                        <input type="text" name="firstname" onChange={this.handleChange}
                                                               value={this.state.firstname}
                                                               className={`input-field ${invalidFields.includes('firstname') ? 'error-field' : ''}`}/>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="input-box">
                                                        <label>Last Name</label>
                                                        <input type="text" name="lastname" onChange={this.handleChange}
                                                               value={this.state.lastname}
                                                               className={`input-field ${invalidFields.includes('lastname') ? 'error-field' : ''}`}/>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="input-box">
                                                        <label>Address 1</label>
                                                        <input type="text" name="address1" onChange={this.handleChange}
                                                               value={this.state.address1}
                                                               className={`input-field ${invalidFields.includes('address1') ? 'error-field' : ''}`}/>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="input-box">
                                                        <label>Address 2</label>
                                                        <input type="text" name="address2" onChange={this.handleChange}
                                                               value={this.state.address2}
                                                               className={`input-field ${invalidFields.includes('address2') ? 'error-field' : ''}`}/>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="input-box">
                                                        <label>City</label>
                                                        <input type="text" name="city" onChange={this.handleChange}
                                                               value={this.state.city}
                                                               className={`input-field ${invalidFields.includes('city') ? 'error-field' : ''}`}/>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="input-box">
                                                        <label>State</label>
                                                        <input type="text" name="state" onChange={this.handleChange}
                                                               value={this.state.state}
                                                               className={`input-field ${invalidFields.includes('state') ? 'error-field' : ''}`}/>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="input-box">
                                                        <label>Country</label>
                                                        <input type="text" name="country" onChange={this.handleChange}
                                                               value={this.state.country}
                                                               className={`input-field ${invalidFields.includes('country') ? 'error-field' : ''}`}/>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="input-box">
                                                        <label>Pincode</label>
                                                        <input type="text" name="pincode" onChange={this.handleChange}
                                                               value={this.state.pincode}
                                                               className={`input-field ${invalidFields.includes('pincode') ? 'error-field' : ''}`}/>
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="input-box">
                                                        <label>Mobile</label>
                                                        <input type="number"
                                                               className={`input-field ${invalidFields.includes('mobile') ? 'error-field' : ''}`}
                                                               name="mobile" onChange={this.handleChange}
                                                               value={this.state.mobile}/>
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="input-box">
                                                        <label>Additional Phone</label>
                                                        <input type="number"
                                                               className={`input-field ${invalidFields.includes('additionalphonenumber') ? 'error-field' : ''}`}
                                                               name="additionalphonenumber" onChange={this.handleChange}
                                                               value={this.state.additionalphonenumber}/>
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="input-box">
                                                        <label>Email</label>
                                                        <input type="email"
                                                               className={`input-field ${invalidFields.includes('email') ? 'error-field' : ''}`}
                                                               name="email" onChange={this.handleChange}
                                                               value={this.state.email}/>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>

                                        <div className="payment-wrap">
                                            <button className="general-btn grey" onClick={()=> this.backToCart()}>Back</button>
                                            <button className="general-btn"
                                                    onClick={(e) => this.saveBooking(e, grand_total, total_cost, 0.00, '', total_gst)}>Continue
                                                To Payment
                                            </button>
                                        </div>
                                    </>
                                    }

                                </div>
                                }

                                {!this.state.initSearch &&
                                <div className="room-container">
                                    {hotel_rooms.length === 0 &&
                                    <div className="no-result">
                                        <p>Rooms will be added soon</p>
                                    </div>
                                    }

                                    {hotel_rooms.map(room =>
                                        <RoomBlock item={room} showFullDetail={this.showFullDetail}/>
                                    )}

                                </div>
                                }
                            </div>
                        </section>

                        {!this.state.initSearch &&
                        <>

                            <section class="content-area text-content" id="hotel-facilities">
                                <div className="container">
                                    <div className="section-header">
                                        <h5>Facilities & Attractions</h5>
                                    </div>
                                    <div className="feature-wrapper three-per-col image-top">
                                        {!hotelfacilities || hotelfacilities.length === 0 &&
                                        <h5>Facilities will be added soon.</h5>
                                        }

                                        {hotelfacilities && hotelfacilities.length > 0 &&
                                        <>
                                            {hotelfacilities.map((fac, index) =>
                                                <FacilityNewBlock item={fac} imgAlign={index % 2 === 1 ? 'left' : 'right'}/>
                                            )}
                                        </>
                                        }
                                    </div>
                                </div>
                            </section>
                            <section className="room-section" id="hotel-gallery">
                                <div className="container">
                                    <div className="section-header">
                                        <h5>Gallery</h5>
                                    </div>
                                    <Gallery galleryImages={galleryImages} />

                                </div>
                            </section>


                        </>
                        }
                    </>
                    }



                    <Footer />



                </div>

                {this.state.showError &&
                <AlertModal
                    modalHeader = {false}
                    modalFooter = {true}
                    modalTitle = "Warning"
                    modalBody = "Please select your choices"
                    modalStatus={this.state.showError}
                    OKButton={true}
                    CANCELButton={false}
                    OKAction={this.hideError}
                />
                }
                {this.state.showProfileInfoError &&
                <AlertModal
                    modalHeader = {false}
                    modalFooter = {true}
                    modalTitle = "Profile Details"
                    modalBody = "Please enter your personal information to proceed"
                    modalStatus={this.state.showProfileInfoError}
                    OKButton={true}
                    CANCELButton={false}
                    OKAction={this.hideProfileInfoError}
                />
                }
                {this.state.itemRemovalMessage &&
                <AlertModal
                    modalHeader = {false}
                    modalFooter = {true}
                    modalTitle = "Warning!"
                    modalBody = "Are you sure to remove this room? You will be redirected to the rooms list."
                    modalStatus={this.state.itemRemovalMessage}
                    OKButton={true}
                    CANCELButton={true}
                    OKAction={this.emptyCart}
                    CANCELAction={this.hideItemRemovalMessage}
                    OKText = "OK"
                    CANCELText = "CANCEL"
                />
                }

                {this.state.cannotContinue &&
                <AlertModal
                    modalHeader = {false}
                    modalFooter = {true}
                    modalTitle = "Warning!"
                    modalBody = {this.state.cannotContinueMessage}
                    modalStatus={this.state.cannotContinue}
                    OKButton={true}
                    CANCELButton={false}
                    OKAction={this.hideCannotContinue}
                />
                }

                {this.state.showDetailStatus &&
                <FullWidthModal
                    modalHeader = {true}
                    modalFooter = {true}
                    modalTitle = {hotelDetail.hotel_name}
                    modalBody = {<RoomDetail roomDetail={this.state.roomDetail} hideFullDetail={this.hideFullDetail} />}
                    modalStatus={this.state.showDetailStatus}
                    OKButton={true}
                    CANCELButton={false}
                    OKAction={this.hideFullDetail}
                    CANCELAction={this.hideFullDetail}
                    OKText = "OK"
                    CANCELText = "CANCEL"
                />
                }

                {this.state.showSpReqStat &&
                <AlertModal
                    modalHeader = {false}
                    modalFooter = {true}
                    modalTitle = "Warning!"
                    modalBody = {<HotelSpReqList spRequests={spRequests} selectedSpReqIds={this.state.selectedSpReqIds}
                                                 selectedSpReqs={this.state.selectedSpReqs} handleSpSelection={this.handleSpSelection} />}
                    modalStatus={this.state.showSpReqStat}
                    OKButton={true}
                    CANCELButton={false}
                    OKAction={this.hideSpecialRequests}
                />
                }
                {this.state.showPendingMessage &&
                <AlertModal
                    modalHeader = {false}
                    modalFooter = {true}
                    modalTitle = "Warning!"
                    modalBody = {"Booking is temperorily unavailable due to Covid-19. It will be available only from July 2021 onwards. For further information please send an email to booking@uthhotels.com or call +91 9746838883,+91 9567338884."}
                    modalStatus={this.state.showPendingMessage}
                    OKButton={true}
                    CANCELButton={false}
                    OKAction={this.hidePendingMessage}
                />
                }
            </div>
                </main>
            </>

        );
    }
}


const mapStateToProps = state => ({
    hotelData:state.HotelReducer.hotelData,
   // facilityData:state.HotelReducer.facilityData,
    bookingData : state.HotelReducer.bookingData
});


export default connect(
    mapStateToProps,
    {

        searchRooms : HotelActions.searchRooms,
        saveBooking : HotelActions.saveBooking,
        confirmBooking : HotelActions.confirmBooking,
        getBannerImages : HotelActions.getBannerImages,
        //getHotelHighlights : HotelActions.getHotelHighlights,
        getHotelPolicies : HotelActions.getHotelPolicies,
        getSpRequests : HotelActions.getSpRequests
    }
)(HotelDetailSlug);
