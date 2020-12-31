const axios = require('axios');

const getApiStatus = (url) => {
    let status = {};
    return axios.get(url).then(response => {
        status.ok = status.response = true;
        status.status = response.status;
        status.statusText = response.statusText;
        return status;
    }).catch(error => {
        status.ok = false;
        if(error.response){
            status.response = true;
            status.status = error.response.status;
            status.statusText = error.response.statusText;
        }else{
            status.response = false;
            status.status = error.code;
            status.statusText = error.message;
        }
        return status;
    })
}

module.exports = {
    getApiStatus
};