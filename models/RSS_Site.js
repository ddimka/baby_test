var RSS_Site = DBConnector.model('RSS_Site', {
    name:             { type: String/*, required: true */},
    url:              { type: String/*, required: true */},
    image:            { type: String/*, required: true */},
    language:         { type: String/*, required: true */},
    country:          { type: String/*, required: true */},

    AC:               { type: Boolean/*, required: true */},
    CT:               { type: Date/*, required: true */},
    UT:               { type: Date/*, required: true */}

}, 'RSS_Site');

module.exports = RSS_Site;
