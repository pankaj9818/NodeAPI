const express = require('express');
const route = express.Router();


route.get('/', function (req, res) {
    return res.status(200).json('Auth start riunning');
});
module.exports = route;
