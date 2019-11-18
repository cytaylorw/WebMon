const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/', (req, res) => {
    let status = {};
    axios.get(req.query.url).then(response => {
        status.ok = true;
        status.status = response.status;
        status.statusText = response.statusText;
    }).catch(error => {
        status.ok = false;
        if(error.response){
            status.status = error.response.status;
            status.statusText = error.response.statusText;
        }else{
            status.status = error.code;
            status.statusText = error.message;
        }
    }).then(() => {
        if(status){
            res.json({
                url: req.query.url,
                ...status
            });
        }else{
            res.status(400).json({
                url: req.query.url,
                msg: 'Error'
            });
        }
    });
})

module.exports = router;