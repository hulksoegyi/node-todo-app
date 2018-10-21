var mongoose = require('mongoose');

var User = mongoose.model('User', {
    Name: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
        maxlength: 40,
    },
    Email: {
        type: String,
        required: true,
        trim: true,
    },
    Password: {
        type: String,
    },
    Location: {
        type: String
    },
    CreatedAt: {
        type: String,
    }
});

module.exports = {
    User,
};