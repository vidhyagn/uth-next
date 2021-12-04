import {ENVIRONMENT, HASH_ENABLED} from "../constants/index"
export function getUrlSegment(segment) {
    let urlpath = HASH_ENABLED ? window.location.hash : window.location.pathname;
    let url = urlpath.split('/');
    console.log(url)
    if(ENVIRONMENT === 'LOCAL') {
        return url[segment]
    }
    else {

        return url[segment];
    }

}

export function getSubdomain(hostname) {
    var regexParse = new RegExp('[a-z\-0-9]{2,63}\.[a-z\.]{2,5}$');
    var urlParts = regexParse.exec(hostname);
    return hostname.replace(urlParts[0], '').slice(0, -1);
}