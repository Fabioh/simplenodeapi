const mongoose = require('mongoose');

const User = new mongoose.Schema({
    email: {
        type: String, required: true,
        trim: true, unique: true,
        match: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
    },
    firstName: {type: String, required: true},
    lastName: {type: String, required: false}
});

module.exports = mongoose.model('User', User);
