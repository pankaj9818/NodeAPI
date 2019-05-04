const express = require('express');
const route = express.Router();
const User = require('../Models/user');


route.get('/', (req, res) => {
    return res.status(200).json('account is working');
});

route.get('/getUsers', function (req, res) {
    User.find().then(data => {
        if (data) {
            return res.json(data);
        } else {
            return res.json('data not found');
        }
    })

});

route.post('/registerUser', function (req, res) {
    const reqBody = req.body;
    console.log(reqBody);

    const U = new User({
        UserName: reqBody.UserName,
        Email: reqBody.Email,
        Mobileno: reqBody.Mobileno,
        Password: reqBody.Password
    });
    U.save().then(() => {
        return res.json('user added');
    });
})

route.get('/getuserinfoByid/:id', function (req, res) {
    const id = req.params.id;
    console.log(id);
    User.find({ _id: id }).then(data => {
        if (data.length > 0) {
            return res.json(data)
        } else {
            return res.json('data not found');
        }
    })

});


module.exports = route;