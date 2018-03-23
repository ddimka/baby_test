var express = require('express');
var DBLogic = require("../tools/DBlogic");
var db = require('../config/db');

var User = require("../models/User");

var router = express.Router();

/* Create user */
router.post('/', function(req, res, next) {
    var first_name = req.body.first_name;
    var last_name = req.body.last_name;

    var birthday = req.body.birthday;
    var picture = req.body.picture;
    var email = req.body.email;

    var userObj = {
        first_name:first_name,
        last_name:last_name,
        birthday:birthday,
        image:picture,
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

router.get('/:id', function(req, res, next) {

    var userId = req.params.id;

    DBLogic.getUserById(userId, function (err, user) {
        if (err)
            return sendError(res, err, Error.SERVER_ERROR_READING_FROM_DATABASE);

        return sendSuccess(res, user)
    })

});

module.exports = router;
