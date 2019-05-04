const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://Pankaj:Pankaj@cluster0-vlty9.mongodb.net/Demo?retryWrites=true', { useNewUrlParser: true }).then(() => {
    console.log('mongoose connected');
}).catch(err => {
    console.log('error', err);

});

