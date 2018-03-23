var express = require('express');
var DBLogic = require("../tools/DBlogic");
var db = require('../config/db');

var User = require("../models/User");

var router = express.Router();

/* Create user */
router.post('/', function(req, res, next) {

    var id = req.body.id;

    var first_name = req.body.first_name;
    var last_name = req.body.last_name;

    var birthday = req.body.birthday;
    var picture = req.body.picture;
    var email = req.body.email;
    var isAdmin = req.body.is_admin;

    var interests = req.body.interests;
    var rssChannels = req.body.rss_channels;

    var userObj = {
        first_name:first_name,
        last_name:last_name,
        birthday:birthday,
        picture:picture,
        email:email,
        rss_channels: rssChannels,
        is_admin: isAdmin
    };

    if (id){ // update
        DBLogic.updateUser(id, userObj, function (err, updatedObject) {
            if (err)
                return sendError(res, Error.SERVER_ERROR_SAVING_TO_DATABASE, err.message);

            return sendSuccess(res, "Success", updatedObject);
        })
    }else{ // create
        DBLogic.save(new User(userObj), true, function (err, createdObject) {
            if (err)
                return sendError(res, Error.SERVER_ERROR_SAVING_TO_DATABASE, err.message);

            return sendSuccess(res, "Success", createdObject);
        });
    }



    var errors = checkMandatoryFields();
    if (errors.length > 0)
        return sendError(res, Error.VALIDATION_ERROR, errors);

    function checkMandatoryFields() {
        var errorsArray = [];

        if (!first_name)
            errorsArray.push("first_name is required");
        if (!last_name)
            errorsArray.push("last_name is required");
        if (!email)
            errorsArray.push("email is required");
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
