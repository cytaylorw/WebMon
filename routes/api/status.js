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
        status.status = error.response.status;
        status.statusText = error.response.statusText;
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