'use strict';

function exception(status, message) {
    return {
        status: status,
        message: message
    };
}

module.exports = exception;
