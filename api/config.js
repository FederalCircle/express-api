'use strict';

module.exports = function(app) {
    const bodyParser = require('body-parser');

    var middlewares = [
        bodyParser.json(),
        requestLog
    ];

    app.use(middlewares);
}

function requestLog(req, res, next) {
    console.log(req.method +' - '+ new Date);
    next();
}
