var Event = DBConnector.model('Event', {
    title:            { type: String/*, required: true */},
    image:            { type: String/*, required: true */},
    date:             { type: Date/*, required: true */},
    type:             { type: String/*, required: true */},
    likes:            { type: Number/*, required: true */},
    family:           { type: String/*, required: true */},

    AC:               { type: Boolean/*, required: true */},
    CT:               { type: Date/*, required: true */},
    UT:               { type: Date/*, required: true */}

}, 'Event');

module.exports = Event;
