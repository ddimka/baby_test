var express = require('express');
var router = express.Router();

/* Create rss channel */
router.post('/', function(req, res, next) {

    var id = req.body.id;

    var image = req.body.image;
    var name = req.body.name;
    var url = req.body.url;
    var country = req.body.country.toUpperCase();
    var language = req.body.language.toUpperCase();

    var errors = checkMandatoryFields();
    if (errors.length > 0)
        return sendError(res, Error.VALIDATION_ERROR, errors);

    var rssObj = {
        name:name,
        url:url,
        image:image,
        language: language,
        country: country
    };

    if (id){ // update
        DBLogic.updateRSS(id, rssObj, function (err, updatedObject) {
            if (err)
                return sendError(res, Error.SERVER_ERROR_SAVING_TO_DATABASE, err.message);

            return sendSuccess(res, "Success", updatedObject);
        })
    }else{ // create
        DBLogic.save(new RSS_Site(rssObj), true, function (err, createdObject) {
            if (err)
                return sendError(res, Error.SERVER_ERROR_SAVING_TO_DATABASE, err.message);

            return sendSuccess(res, "Success", createdObject);
        });
    }


    function checkMandatoryFields() {
        var errorsArray = [];

        if (!image)
            errorsArray.push("image is required");
        if (!name)
            errorsArray.push("name is required");
        if (!url)
            errorsArray.push("url is required");
        if (!language)
            errorsArray.push("language is required");
        else{
            var isLangExists = false;
            for (var key in Constants.LANGUAGES){
                if (Constants.LANGUAGES[key] === language.toUpperCase())
                    isLangExists = true
            }
            if (!isLangExists)
                errorsArray.push("Wrong language")
        }
        if (!country)
            errorsArray.push("country is required");
        else{
            var isCountryExists = false;
            for (var key in Constants.COUNTRIES){
                if (Constants.COUNTRIES[key] === country.toUpperCase())
                    isCountryExists = true
            }
            if (!isCountryExists)
                errorsArray.push("Wrong country")
        }
        return errorsArray;
    }
});

router.get('/:id', function(req, res, next) {

    var userId = req.params.id;

    DBLogic.getRSSById(userId, function (err, user) {
        if (err)
            return sendError(res, err, Error.SERVER_ERROR_READING_FROM_DATABASE);

        return sendSuccess(res, user)
    })

});

router.get('/', function(req, res, next) {

    DBLogic.getRSSsByQuery({}, function (err, user) {
        if (err)
            return sendError(res, err, Error.SERVER_ERROR_READING_FROM_DATABASE);

        return sendSuccess(res, user)
    })

});

module.exports = router;
