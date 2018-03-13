var express = require('express');
var DBLogic = require("../tools/DBlogic");
var db = require('../config/db');

var User = require("../models/User");

var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
    var first_name = req.body.first_name;
    var last_name = req.body.last_name;

    var birthday = req.body.birthday;
    var image = req.body.image;
    var email = req.body.email;

    var userObj = {
        first_name:first_name,
        last_name:last_name,
        birthday:birthday,
        image:image,
        email:email
    };

    DBLogic.save(new User(userObj), true, function (err, createdObject) {
        if (err)
            return sendError(res, 0, err.message);

        return sendSuccess(res, "Success", createdObject);
    });


    var errors = checkMandatoryFields();
    if (errors.length > 0)
        return sendError(res, 0, errors);

    function checkMandatoryFields() {
        var errorsArray = [];
        return errorsArray;
    }
});

module.exports = router;
