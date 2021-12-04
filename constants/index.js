let WEB_ENVIRONMENT = 'LOCAL';
let WEB_HASH_ENABLED = false;
let WEB_API_PATH = "https://uthdevapi.neverbeforeholidays.com/";
let WEB_IMAGE_PATH = "https://uthdev.neverbeforeholidays.com/admin/assets/uploads/";
let WEB_BASE_PATH = "https://uthdev.neverbeforeholidays.com/";
if (typeof window !== "undefined") {

    if (window.location.hostname === 'localhost') {
        WEB_ENVIRONMENT = 'LOCAL';
        WEB_HASH_ENABLED = false
    } else if (window.location.hostname === 'uthdev.neverbeforeholidays.com') {
        WEB_ENVIRONMENT = 'STAGING';
        WEB_HASH_ENABLED = false;
    } else if (window.location.hostname === 'uthhotels.com') {
        WEB_ENVIRONMENT = 'PRODUCTION';
        WEB_HASH_ENABLED = false;
        WEB_API_PATH = 'https://api.uthhotels.com/';
        WEB_IMAGE_PATH = 'https://uthhotels.com/admin/assets/uploads/';
    }
}

WEB_API_PATH = "https://api.uthhotels.com/";
WEB_IMAGE_PATH = "https://uthhotels.com/admin/assets/uploads/";
WEB_BASE_PATH = "https://uthhotels.com/";


export const ENVIRONMENT = WEB_ENVIRONMENT;
export const HASH_ENABLED = WEB_HASH_ENABLED;

export const API_PATH = WEB_API_PATH;
export const IMAGE_PATH = WEB_IMAGE_PATH;
export const BASE_PATH = WEB_BASE_PATH;
