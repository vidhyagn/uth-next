import {combineReducers} from 'redux';
const hotelData = (state = {hotelList: [], category : {}, categoryList :[], search : false, bannerImages : [], highlights : [], policies : [], spRequests : []}, action) => {

    switch (action.type) {

        case "HOTEL_LIST_SUCCESS":
            return {
                ...state,
                hotelList: action.hotelList,
                category: action.category
            };
            break;
        case "HOTEL_CATEGORY_SUCCESS":
            return {
                ...state,
                categoryList: action.categoryList
            };
            break;
       case "SEARCH_HOTEL_LIST_SUCCESS":
            return {
                ...state,
                hotelList: action.hotelList,
                search :action.search,
                category: action.category
            };
            break;
        case "HOTEL_DETAIL_SUCCESS":
            return {
                ...state,
                hotelDetail: action.hotelDetail
            };
            break;
        case "BANNER_SUCCESS":
            return {
                ...state,
                bannerImages: action.bannerImages
            };
            break;
        case "HIGHLIGHT_SUCCESS":
            return {
                ...state,
                highlights: action.highlights
            };
            break;
        case "POLICIES_SUCCESS":
            return {
                ...state,
                policies: action.policies
            };
            break;
        case "SP_REQ_SUCCESS":
            return {
                ...state,
                spRequests: action.spRequests
            };
            break;
        default:
            return state;
    }
};

const facilityData = (state = {facilities: [], roomTypes : []}, action) => {

    switch (action.type) {

        case "FACILITY_LIST_SUCCESS":
            return {
                ...state,
                facilities: action.facilities
            };
            break;
        case "ROOM_TYPE_SUCCESS":
            return {
                ...state,
                roomTypes: action.roomTypes
            };
            break;
        default:
            return state;
    }
};
const saveContactData = (state = {saved: false}, action) => {

    switch (action.type) {

        case "CONTACT_SAVED":
            return {
                ...state,
                saved: action.saved
            };
            break;
        default:
            return state;
    }
};

const bookingData = (state = {bookingId: '', bookingResult : false}, action) => {

    switch (action.type) {

        case "SAVED_BOOKING":
            return {
                ...state,
                bookingId: action.bookingId
            };
            break;
        case "CONFIRMED_BOOKING":
            return {
                ...state,
                bookingResult: action.bookingResult
            };
            break;
        default:
            return state;
    }
};




export const HotelReducer = combineReducers({
    hotelData,
    facilityData,
    saveContactData,
    bookingData
});

export default HotelReducer;


