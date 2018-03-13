var db = require('../config/db');

var User = db.model('User', {
    first_name:       { type: String/*, required: true */},
    last_name:        { type: String/*, required: true */},
    birthday:         { type: Date/*, required: true */},
    image:            { type: String/*, required: true */},
    email:            { type: String/*, required: true */},

    AC:               { type: Boolean/*, required: true */},
    CT:               { type: Date/*, required: true */},
    UT:               { type: Date/*, required: true */}

}, 'User');

module.exports = User;
