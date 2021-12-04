import * as commonService from "./common.services";

export const hotel = {
    getHotelList,
    getHotelCategoryList,
    getFacilities,
    getHotelDetail,
    getHotelDetailV2,
    getRoomTypes,
    saveContact,
    searchRooms,
    saveBooking,
    confirmBooking,
    getBannerImages,
    getHotelHighlights,
    getHotelPolicies,
    getSpRequests
};

function getHotelList(params) {
    return commonService.getRequests('hotel/hotellist', params);
}
function getHotelCategoryList(params) {
    return commonService.getRequests('hotel/hotelcategorylist', params);
}
function getFacilities(params) {
    return commonService.getRequests('hotel/masterfacilities', params);
}
function getHotelDetail(params) {
    //return commonService.getRequests('hotel/hoteldetails', params);
    return commonService.getRequests('hotel/hoteldetailsv1', params);
}
function getHotelDetailV2(params) {
    //return commonService.getRequests('hotel/hoteldetails', params);
    return commonService.getRequests('hotel/hoteldetailsv2', params);
}
function getRoomTypes(params) {
    return commonService.getRequests('hotel/roomtype', params);
}
function saveContact(params) {
    return commonService.postRequests('login/savecontactus', params);
}
function searchRooms(params) {
    return commonService.getRequests('hotel/searchrooms', params);
}
function saveBooking(params) {
    return commonService.postRequests('hotel/savehotelbooking', params);
}
function confirmBooking(params) {
    return commonService.postRequests('hotel/confirmhotelbooking', params);
}
function getBannerImages(params) {
    return commonService.getRequests('hotel/hotelbannerimages', params);
}
function getHotelHighlights(params) {
    return commonService.getRequests('hotel/hotelhighlights', params);
}
function getHotelPolicies(params) {
    return commonService.getRequests('hotel/hotelpolicies', params);
}
function getSpRequests(params) {
    return commonService.getRequests('hotel/specialrequest', params);
}