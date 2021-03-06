var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(Config.db_link, function (err) {

    if (err) {
        Logger.error('Unable to connect to the Mongo server. Error:', err);
    } else {
        Logger.info('Connected to Mongo Server successfully!');
    }

});

module.exports = mongoose;