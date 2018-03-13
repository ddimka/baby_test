var express = require('express');
var router = express.Router();
//var fs = require('fs');
var config = require('../config/config');
var Logger = require('./Logger');
var DBLogic = require('./DBlogic');

var App = require('../models/User');
require('../tools/queue').start();

getAppList();

router.get('/settings', function (req, res, next) {
    Logger.error("Wrong platform");
    return res.status(401).json({success:false, err: "Wrong platform"});
});

module.exports = router;

function getAppList() {

    DBLogic.find('App', {}, function (err, result) {
        if (err){
            Logger.error("Error getting APPS list");
        }else{
            if (result !== null)
            for (var i = 0; i < result.length; i++){
                config.app_list[result[i].name] = result[i];
            }
        }
    });
}
