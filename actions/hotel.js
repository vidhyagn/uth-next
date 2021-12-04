import {hotel} from "../services/hotel.services"
export const getHotelList = (params) => dispatch => {
    dispatch({
        type: 'LOADER_STATUS',
        status:true

    });
    let hotelData = hotel.getHotelList(params);

    hotelData.then(hotelData => {
        console.log(hotelData)
        dispatch({
            type: 'HOTEL_LIST_SUCCESS',
            hotelList: hotelData.results.data,
            category: hotelData.results.category
        });
        dispatch({
            type: 'LOADER_STATUS',
            status:false

        });
    })
        .catch(error => {
            dispatch({
                type: 'HOTEL_LIST_SUCCESS',
                hotelList: [],
                category : {}
            });
            dispatch({
                type: 'LOADER_STATUS',
                status:false

            });
        })
};
export const getHotelCategoryList = () => dispatch => {
    let params = {}
    dispatch({
        type: 'LOADER_STATUS',
        status:true

    });
    let categoryData = hotel.getHotelCategoryList(params);

    categoryData.then(categoryData => {
        console.log(categoryData)
        dispatch({
            type: 'HOTEL_CATEGORY_SUCCESS',
            categoryList: categoryData.results.data
        });
        dispatch({
            type: 'LOADER_STATUS',
            status:false

        });
    })
        .catch(error => {
            dispatch({
                type: 'HOTEL_CATEGORY_SUCCESS',
                categoryList: []
            });
            dispatch({
                type: 'LOADER_STATUS',
                status:false

            });
        })
};

export const getHotelDetail = (params) => dispatch => {
    dispatch({
        type: 'LOADER_STATUS',
        status:true

    });
    let hotelData = hotel.getHotelDetail(params);

    hotelData.then(hotelData => {
        console.log(hotelData)
        dispatch({
            type: 'HOTEL_DETAIL_SUCCESS',
            hotelDetail: hotelData.results.data
        });
        dispatch({
            type: 'LOADER_STATUS',
            status:false

        });
    })
        .catch(error => {
            dispatch({
                type: 'HOTEL_DETAIL_SUCCESS',
                hotelDetail: []
            });
            dispatch({
                type: 'LOADER_STATUS',
                status:false

            });
        })
};
export const getHotelDetailV2 = (params) => dispatch => {
    dispatch({
        type: 'LOADER_STATUS',
        status:true

    });
    let hotelData = hotel.getHotelDetailV2(params);

    hotelData.then(hotelData => {
        console.log(hotelData)
        dispatch({
            type: 'HOTEL_DETAIL_SUCCESS',
            hotelDetail: hotelData.results.data
        });
        dispatch({
            type: 'LOADER_STATUS',
            status:false

        });
    })
        .catch(error => {
            dispatch({
                type: 'HOTEL_DETAIL_SUCCESS',
                hotelDetail: []
            });
            dispatch({
                type: 'LOADER_STATUS',
                status:false

            });
        })
};

export const searchHotels = (params) => dispatch => {
   // let params = {}
    dispatch({
        type: 'LOADER_STATUS',
        status:true

    });
    let hotelData = hotel.getHotelList(params);

    hotelData.then(hotelData => {
        console.log(hotelData)
        dispatch({
            type: 'SEARCH_HOTEL_LIST_SUCCESS',
            hotelList: hotelData.results.data,
            search : true,
            category: hotelData.results.category
        });
        dispatch({
            type: 'LOADER_STATUS',
            status:false

        });
    })
        .catch(error => {
            dispatch({
                type: 'HOTEL_LIST_SUCCESS',
                hotelList: [],
                category : {}
            });
            dispatch({
                type: 'LOADER_STATUS',
                status:false

            });
        })
};

export const getFacilities = () => dispatch => {
    let params = {}
    dispatch({
        type: 'LOADER_STATUS',
        status:true

    });
    let facilityData = hotel.getFacilities(params);

    facilityData.then(facilityData => {
        dispatch({
            type: 'FACILITY_LIST_SUCCESS',
            facilities: facilityData.results.data
        });
        dispatch({
            type: 'LOADER_STATUS',
            status:false

        });
    })
        .catch(error => {
            dispatch({
                type: 'FACILITY_LIST_SUCCESS',
                facilities: []
            });
            dispatch({
                type: 'LOADER_STATUS',
                status:false

            });
        })
};
export const getRoomTypes = () => dispatch => {
    let params = {}
    dispatch({
        type: 'LOADER_STATUS',
        status:true

    });
    let roomTypeData = hotel.getRoomTypes(params);

    roomTypeData.then(roomTypeData => {
        dispatch({
            type: 'ROOM_TYPE_SUCCESS',
            roomTypes: roomTypeData.results.data
        });
        dispatch({
            type: 'LOADER_STATUS',
            status:false

        });
    })
        .catch(error => {
            dispatch({
                type: 'ROOM_TYPE_SUCCESS',
                roomTypes: []
            });
            dispatch({
                type: 'LOADER_STATUS',
                status:false

            });
        })
};

export const saveContact = (params) => dispatch => {
    dispatch({
        type: 'LOADER_STATUS',
        status:true

    });
    let contactSaved = hotel.saveContact(params);

    contactSaved.then(contactSaved => {
        dispatch({
            type: 'CONTACT_SAVED',
            saved: true
        });
        dispatch({
            type: 'LOADER_STATUS',
            status:false

        });
    })
        .catch(error => {
            dispatch({
                type: 'CONTACT_SAVED',
                saved: false
            });
            dispatch({
                type: 'LOADER_STATUS',
                status:false

            });
        })
};

export const searchRooms = () => dispatch => {
    let params = {}
    dispatch({
        type: 'LOADER_STATUS',
        status:true

    });
    let roomData = hotel.searchRooms(params);

    roomData.then(roomData => {
        dispatch({
            type: 'ROOM_TYPE_SUCCESS',
            roomList: roomData.results.data
        });
        dispatch({
            type: 'LOADER_STATUS',
            status:false

        });
    })
        .catch(error => {
            dispatch({
                type: 'ROOM_TYPE_SUCCESS',
                roomList: []
            });
            dispatch({
                type: 'LOADER_STATUS',
                status:false

            });
        })
};
export const saveBooking = (params) => dispatch => {
    dispatch({
        type: 'LOADER_STATUS',
        status:true

    });
    let bookingData = hotel.saveBooking(params);

    bookingData.then(bookingData => {
        dispatch({
            type: 'SAVED_BOOKING',
            bookingId: bookingData.results.data
        });
        dispatch({
            type: 'LOADER_STATUS',
            status:false

        });
    })
        .catch(error => {
            dispatch({
                type: 'SAVED_BOOKING',
                bookingId: ''
            });
            dispatch({
                type: 'LOADER_STATUS',
                status:false

            });
        })
};

export const confirmBooking = (params) => dispatch => {
    dispatch({
        type: 'LOADER_STATUS',
        status:true

    });
    let bookingData = hotel.confirmBooking(params);

    bookingData.then(bookingData => {
        dispatch({
            type: 'CONFIRMED_BOOKING',
            bookingResult: bookingData.results.success
        });
        dispatch({
            type: 'LOADER_STATUS',
            status:false

        });
    })
        .catch(error => {
            dispatch({
                type: 'CONFIRMED_BOOKING',
                bookingResult: {}
            });
            dispatch({
                type: 'LOADER_STATUS',
                status:false

            });
        })
};
export const getBannerImages = (params) => dispatch => {
    dispatch({
        type: 'LOADER_STATUS',
        status:true

    });
    let bannerData = hotel.getBannerImages(params);

    bannerData.then(bannerData => {
        dispatch({
            type: 'BANNER_SUCCESS',
            bannerImages: bannerData.results.data
        });
        dispatch({
            type: 'LOADER_STATUS',
            status:false

        });
    })
        .catch(error => {
            dispatch({
                type: 'BANNER_SUCCESS',
                bannerImages: []
            });
            dispatch({
                type: 'LOADER_STATUS',
                status:false

            });
        })
};

export const getHotelHighlights = (params) => dispatch => {
    dispatch({
        type: 'LOADER_STATUS',
        status:true

    });
    let highlightData = hotel.getHotelHighlights(params);

    highlightData.then(highlightData => {
        dispatch({
            type: 'HIGHLIGHT_SUCCESS',
            hightlights: highlightData.results.data
        });
        dispatch({
            type: 'LOADER_STATUS',
            status:false

        });
    })
        .catch(error => {
            dispatch({
                type: 'HIGHLIGHT_SUCCESS',
                hightlights: []
            });
            dispatch({
                type: 'LOADER_STATUS',
                status:false

            });
        })
};
export const getHotelPolicies = (params) => dispatch => {
    dispatch({
        type: 'LOADER_STATUS',
        status:true

    });
    let policyData = hotel.getHotelPolicies(params);

    policyData.then(policyData => {
        dispatch({
            type: 'POLICIES_SUCCESS',
            policies: policyData.results.data
        });
        dispatch({
            type: 'LOADER_STATUS',
            status:false

        });
    })
        .catch(error => {
            dispatch({
                type: 'POLICIES_SUCCESS',
                policies: []
            });
            dispatch({
                type: 'LOADER_STATUS',
                status:false

            });
        })
};
export const getSpRequests = (params) => dispatch => {
    dispatch({
        type: 'LOADER_STATUS',
        status:true

    });
    let spReqData = hotel.getSpRequests(params);

    spReqData.then(spReqData => {
        dispatch({
            type: 'SP_REQ_SUCCESS',
            spRequests: spReqData.results.data
        });
        dispatch({
            type: 'LOADER_STATUS',
            status:false

        });
    })
        .catch(error => {
            dispatch({
                type: 'SP_REQ_SUCCESS',
                spRequests: []
            });
            dispatch({
                type: 'LOADER_STATUS',
                status:false

            });
        })
};
