var express = require('express');
var DBLogic = require("../tools/DBlogic");
var Constants = require("../config/constants");
var Error = require("../config/errors");
var db = require('../config/db');

var Family = require("../models/Family");

var router = express.Router();

/* Create family */
router.post('/', function(req, res, next) {

    var id = req.body.id;

    var image = req.body.image;
    var title = req.body.title;

    var errors = checkMandatoryFields();
    if (errors.length > 0)
        return sendError(res, Error.VALIDATION_ERROR, errors);

    var eventObj = {
        title:title,
        image:image
    };

    if (id){ // update
        DBLogic.updateEvent(id, eventObj, function (err, updatedObject) {
            if (err)
                return sendError(res, Error.SERVER_ERROR_SAVING_TO_DATABASE, err.message);

            return sendSuccess(res, "Success", updatedObject);
        })
    }else{ // create
        DBLogic.save(new Family(eventObj), true, function (err, createdObject) {
            if (err)
                return sendError(res, Error.SERVER_ERROR_SAVING_TO_DATABASE, err.message);

            return sendSuccess(res, "Success", createdObject);
        });
    }


    function checkMandatoryFields() {
        var errorsArray = [];

        if (!title)
            errorsArray.push("title is required");

        return errorsArray;
    }
});

router.get('/:id', function(req, res, next) {

    var userId = req.params.id;

    DBLogic.getFamilyById(userId, function (err, user) {
        if (err)
            return sendError(res, err, Error.SERVER_ERROR_READING_FROM_DATABASE);

        return sendSuccess(res, user)
    })

});

module.exports = router;
