import {API_PATH} from "../constants";
export function getRequests(url, params) {
    let queryStr = '?';
    let i =0;
    if(params && Object.keys(params).length > 0){
        for (var key in params) {
            if (params.hasOwnProperty(key)) {
                if(i>0) {
                    queryStr += '&';
                }
                queryStr +=  key +'='+ params[key] ;
                i++;

            }
        }
        url = url+queryStr
    }
    console.log(url)
    return fetch(API_PATH+url)
        .then(res => res.json())
        .then(
            (result) => {
                //this.setState({facilities : result.results.data})
                console.log(result)
                return result;
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
                console.log(error);
            }
        )



}
export function postRequests(url, params){
    async function postData(url = '', data = {}) {
        // Default options are marked with *
        const response = await fetch(API_PATH+url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        return response.json(); // parses JSON response into native JavaScript objects
    }

    return postData(url, params)
        .then(data => {
            console.log(data); // JSON data parsed by `data.json()` call
            return data;
        });

}