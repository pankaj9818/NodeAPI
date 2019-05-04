const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const User = new Schema({
    UserName: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Mobileno: {
        type: Number,
        required: true

    },
    Password: {
        type: String,
        required: true
    },
    Status: {
        type: Boolean,
        required: true,
        default: true
    }
    // CreatedOn: {
    //     type: Date
    // },
    // CreatedBy: {
    //     type: String
    // },
    // UpdatedOn: {
    //     type: Date.now
    // },
    // UpdatedBy: {
    //     type: String
    // }

});

module.exports = mongoose.model('User', User, 'User');