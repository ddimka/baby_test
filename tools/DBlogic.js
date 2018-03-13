var Logger = require('./Logger');
var config = require('../config/config');
var dblogic = {};

dblogic.findById = function (modelStr, id, callback) {

    var Model = require('../models/' + modelStr);
    Model.findById(id, function (err, object) {
        if (object === null) {
            callback("id " + id + " not exists");
        } else if (err) {
            callback(err);
        } else {
            callback(null, object);
        }
    })
};
dblogic.find = function (modelStr, queue, callback) {


    var Model = require('../models/' + modelStr);

    queue.AC = true;

    Model.find(queue, function (err, objects) {
        callback(err, objects);
    });
};
dblogic.findWithPage = function (modelStr, queue, page, callback) {


    var Model = require('../models/' + modelStr);

    queue.AC = true;

    Model.find(queue, function (err, objects) {
        callback(err, objects);
    }).limit(config.CRUD_PAGE_SIZE).skip(page * config.CRUD_PAGE_SIZE);

};
dblogic.findOne = function (modelStr, queue, callback) {

    var Model = require('../models/' + modelStr);

    Model.findOne(queue, function (err, object) {
        callback(err, object);
    })
};
dblogic.findByIdAndUpdate = function (modelStr, id, newObjData, callback) {

    var Model = require('../models/' + modelStr);

    Model.findById(id, function (err, object) {

        if (object === null) {
            callback("id " + id + " not exists", null);
        } else if (err) {
            callback(err);
        } else {

            object.UT = new Date;

            for (var key in newObjData) {
                object[key] = newObjData[key];
            }
            object.save(function (err, row) {
                callback(err, row);
            })
        }
    })
};
dblogic.findOneAndUpdate = function (modelStr, queue, newObjData, callback) {

    var Model = require('../models/' + modelStr);

    newObjData.UT = new Date;
    Model.findOneAndUpdate(queue, newObjData, function (err, object) {

        if (err) {
            callback(err);
        } else {
            callback(null, object);
        }
    });
};
dblogic.findByIdAndRemove = function (modelStr, id, callback) {

    var Model = require('../models/' + modelStr);

    Model.findByIdAndRemove(id, function (err, object) {
        callback(err, object)
    })
};

dblogic.save = function (obj, isNew, callback) {

    obj.UT = new Date();

    if (isNew) {
        obj.AC = true;
        obj.CT = new Date();
    }
    obj.save(function (err, newObj) {
        callback(err, newObj);
    })

};


module.exports = dblogic;