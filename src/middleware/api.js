/*
const API_ROOT = '';
const getJsonRes = response => response.json().then(json => ({json, response}));
const checkJson = ({json, response}) => {
    if (!response.ok) {
        return Promise.reject(json)
    } else {
        return {json};
    }
};
const fetchHandle = (url, type, data) => fetch(API_ROOT + url, {
    method: type,
    mode: 'cors',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
})
.then(getJsonRes)
.then(checkJson)
.catch(error => ({
    error: error.message || 'Something bad happened',
}));
*/