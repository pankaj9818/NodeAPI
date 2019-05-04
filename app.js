const express = require('express');
const bodyparser = require('body-parser');
const port = process.env.PORT || 8080;
const mongoose = require('mongoose')
const app = express();
const api = require('./api/api');


app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());



app.get('', function (req, res) {
    return res.status(200).json('app start runnig');
});
app.use('/api', api);

app.listen(port, function () {
    console.log(`app ias running on http://localhost:${port}/`);
})


