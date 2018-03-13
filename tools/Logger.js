var log4js = require('log4js');
log4js.configure({
    appenders: {
        out:{ type: 'console' }
    },
    categories: {
        default: { appenders: [ 'out'], level: 'debug' }
    }
});

var logger = log4js.getLogger();
module.exports = logger;