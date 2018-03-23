var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const log4js = require('log4js');
const logger2 = log4js.getLogger();
const Logger = require('./tools/Logger');
const Errors = require('./config/errors');
const Config = require('./config/config');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(log4js.connectLogger(logger2, {
    level: log4js.levels.INFO,
    format: ':remote-addr - :method :url :status - :response-time ms'
}));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

global.sendError = function (res, error, message, stack) {
    var response = {
        success: false,
        err: error
    };
    if (message)
        response.err.message = message;
    Logger.error(JSON.stringify(response, null, 4));
    if (stack)
        Logger.error("Stack: " + stack);
    res.status(400).json(response);
};

global.sendSuccess = function (res, result, code) {
    var response = {
        success: true,
        result: result
    };
    if (code)
        response.code = code;
    res.status(200).json(response);
};

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, x-access-token, muni, admin, admin_name, page, platform');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});


app.use(function (req, res, next) {

    if (req.originalUrl === "/check") {
        return sendSuccess(res, "Success");
    }else{
        if (req.method !== "OPTIONS" && req.method !== 'HEAD') {
            Logger.fatal("----------------------------------------------------");
            Logger.fatal("IP address: " + req.headers['x-forwarded-for']);
            Logger.fatal("URL: " + req.method + " " + req.originalUrl);
            Logger.fatal("Admin: " + req.headers.admin);
            Logger.fatal("Platform: " + req.headers.platform);
            Logger.fatal("Apiary: " + req.headers.apiary);
            Logger.warn("Body: " + JSON.stringify(req.body, null, 4));
            Logger.fatal("----------------------------------------------------");
        }else
            return next();

        if (req.headers.apiary === "3sOydN3sOyd3sOydNR3sOydNR2M4fwc1fRwcPg1RhqhBrGi8jiqclMLMyuLMyui8jiqclMLMyurGi8jiqclMLMyu") {
            return next();
        }

        validateRequest();
    }

    function validateRequest() {
        var isValid = validateLinks();
        if (isValid)
            return next();
        isValid = validateHeaders();
        if (isValid) {
            return next();
        }else {
            Logger.error("Wrong request headers");
            res.status(404).json({success: false, err: Errors.REQUEST_HEADERS_MISSING})
        }

        function validateLinks() {

            const urlsWithoutHeaders = Config.VALID_LINKS;
            var isValid = false;
            for (var i = 0; i < urlsWithoutHeaders.length; i++) {
                if (req.originalUrl === urlsWithoutHeaders[i]) {
                    isValid = true;
                    break;
                }
            }
            return isValid;
        }

        function validateHeaders() {
            var correctHeadersCount = 0;
            const neededHeaders = Config.MANDATORY_HEADERS;
            for (var i = 0; i < neededHeaders.length; i++) {
                if (req.headers[neededHeaders[i]])
                    correctHeadersCount++;
            }
            return correctHeadersCount === neededHeaders.length;
        }
    }

});


app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// catch 404 and forward to error handler
app.use(function (req, res) {
    //let err = new Error('Not Found');
    //err.status = 404;
    //next(err);
    res.status(404).json({success: false, err: 404})
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
    Logger.error("Stack: " + err.stack);
  // render the error page
  //res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
