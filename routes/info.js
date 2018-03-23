var express = require('express');
var DBLogic = require("../tools/DBlogic");
var db = require('../config/db');

var User = require("../models/User");

var router = express.Router();

router.get('/birthdays', function(req, res, next) {

    DBLogic.getUsersByQuery({AC:true}, function (err, users) {
        if (err)
            return sendError(res, err, Error.SERVER_ERROR_READING_FROM_DATABASE);

        var result = [];

        for (var i = 0; i < users.length; i++)
            result.push({
                id: users[i]._id.toString(),
                first_name: users[i].first_name,
                last_name: users[i].last_name,
                birthday: users[i].birthday
            });


        return sendSuccess(res, result)
    })

});

module.exports = router;
