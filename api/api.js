const express = require('express');
const route = express.Router();
const auth = require('./auth/authentication');
const db = require('./Mongo/mongo');
const acc = require('./account/account');


route.use('/auth', auth);
route.use('/account', acc);


route.get('/', function (req, res) {
    return res.status(200).json('api start running');
})
module.exports = route;

