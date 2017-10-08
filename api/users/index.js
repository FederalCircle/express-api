'use strict';

const router = require('express').Router();
const usersCtrl = require('./controller.js');

router.get('/', function(req, res, next) {
    var body = {};
    body.users = usersCtrl.getAll();
    res.json(body);
});

router.post('/', function(req, res, next) {
    var status = 0;
    var body = {};
    try {
        var id = usersCtrl.create(req.body);
        body.id = id;
        status = 200;
    } catch(e) {
        body.message = e.message;
        status = e.status;
    } finally {
        res.status(status).json(body);
    }
});

module.exports = router;
