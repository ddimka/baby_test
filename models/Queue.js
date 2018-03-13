var db = require('../config/db');

var Queue = db.model('Queue', {
    action:                 { type: String/*, required: true */},
    sended_data:            { type: String/*, required: true */},
    api:                    { type: String/*, required: true */},
    active:                 { type: Boolean/*, required: true */},
    start:                  { type: Date/*, required: true */},
    end:                    { type: Date/*, required: true */},
    result:                 { type: Object/*, required: true */},

}, 'Queue');

module.exports = Queue;
