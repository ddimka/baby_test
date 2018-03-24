var express = require('express');
var router = express.Router();

/* Create family */
router.post('/', function(req, res, next) {

    var id = req.body.id;

    var image = req.body.image;
    var name = req.body.name;

    var errors = checkMandatoryFields();
    if (errors.length > 0)
        return sendError(res, Error.VALIDATION_ERROR, errors);

    var eventObj = {
        name:name,
        image:image
    };

    if (id){ // update
        DBLogic.updateFamily(id, eventObj, function (err, updatedObject) {
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

        if (!name)
            errorsArray.push("name is required");

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

router.get('/:id/users', function(req, res, next) {

    var familyId = req.params.id;

    DBLogic.getUsersByQuery({families: familyId}, function (err, user) {
        if (err)
            return sendError(res, err, Error.SERVER_ERROR_READING_FROM_DATABASE);

        return sendSuccess(res, user)
    })

});

router.post('/search/by/name', function(req, res, next) {

    var name = req.body.name;

    DBLogic.getFamilyByLikeName(name, function (err, user) {
        if (err)
            return sendError(res, err, Error.SERVER_ERROR_READING_FROM_DATABASE);

        return sendSuccess(res, user)
    })

});

module.exports = router;
