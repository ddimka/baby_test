var mongoose = require('mongoose')
var config = require('./config');
var Logger = require('../tools/Logger');

mongoose.Promise = global.Promise;
mongoose.connect(config.db_link, function (err) {

    if (err) {
        Logger.error('Unable to connect to the Mongo server. Error:', err);
    } else {
        Logger.info('Connected to Mongo Server successfully!');
    }

});

module.exports = mongoose;