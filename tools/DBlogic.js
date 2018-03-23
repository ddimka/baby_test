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

dblogic.getUserById = function (id, callback) {

    var Model = require('../models/User');
    Model.findById(id, function (err, object) {
        return callback(err, object)
    })
};
dblogic.getUsersByQuery = function (query, callback) {

    var Model = require('../models/User');
    Model.find(query, function (err, object) {
        return callback(err, object)
    })
};
dblogic.updateUser = function (id, newObjData, callback) {

    var Model = require('../models/User');

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

dblogic.getRSSById = function (id, callback) {

    var Model = require('../models/RSS_Site');
    Model.findById(id, function (err, object) {
        return callback(err, object)
    })
};
dblogic.getRSSsByQuery = function (query, callback) {

    var Model = require('../models/RSS_Site');
    Model.find(query, function (err, object) {
        return callback(err, object)
    })
};
dblogic.updateRSS = function (id, newObjData, callback) {

    var Model = require('../models/RSS_Site');

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

dblogic.getEventById = function (id, callback) {

    var Model = require('../models/RSS_Site');
    Model.findById(id, function (err, object) {
        return callback(err, object)
    })
};
dblogic.getEventsByQuery = function (query, callback) {

    var Model = require('../models/RSS_Site');
    Model.find(query, function (err, object) {
        return callback(err, object)
    })
};
dblogic.updateEvent = function (id, newObjData, callback) {

    var Model = require('../models/RSS_Site');

    Model.findById(id, function (err, object) {


        if (err) {
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

dblogic.getFamilyById = function (id, callback) {

    var Model = require('../models/Family');
    Model.findById(id, function (err, object) {
        return callback(err, object)
    })
};
dblogic.updateFamily = function (id, newObjData, callback) {

    var Model = require('../models/Family');

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
dblogic.getFamilyByLikeName = function (name, callback) {

    var regex = new RegExp(name, "i")
        , query   = { name: regex };

    var Model = require('../models/Family');
    Model.find(query, function (err, object) {
        return callback(err, object)
    })
};
module.exports = dblogic;