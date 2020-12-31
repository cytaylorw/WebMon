const express = require('express');
const getApiStatus = require('../../services/status').getApiStatus;
const router = express.Router();

router.get('/', (req, res) => {
    getApiStatus(req.query.url).then((status) => {
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