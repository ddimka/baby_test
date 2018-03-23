var db = require('../config/db');

var Family = db.model('Family', {
    name:             { type: String/*, required: true */},
    image:            { type: String/*, required: true */},

    AC:               { type: Boolean/*, required: true */},
    CT:               { type: Date/*, required: true */},
    UT:               { type: Date/*, required: true */}

}, 'Family');

module.exports = Family;
