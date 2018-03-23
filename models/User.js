var db = require('../config/db');

var User = db.model('User', {
    first_name:       { type: String/*, required: true */},
    last_name:        { type: String/*, required: true */},
    birthday:         { type: Date/*, required: true */},
    picture:          { type: String/*, required: true */},
    email:            { type: String/*, required: true */},
    families:         { type: [String]/*, required: true */},
    rss_channels:     { type: [String]/*, required: true */},
    is_admin:         { type: Boolean/*, required: true */},

    AC:               { type: Boolean/*, required: true */},
    CT:               { type: Date/*, required: true */},
    UT:               { type: Date/*, required: true */}

}, 'User');

module.exports = User;
