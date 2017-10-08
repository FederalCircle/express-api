'use strict';

module.exports = function(app) {
    app.use('/users', require('./users/index.js'));
}
