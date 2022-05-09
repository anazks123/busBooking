var express = require('express');
var sellerModel = require.main.require('./model/seller-model');
var router = express.Router();
router.get('/', (req, res)=>{
   
    res.render('userhome/index1');
});

module.exports = router;