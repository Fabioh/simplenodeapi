// import the usr scheme
const User = require('./user');

var createUser =  (req, res, next) => {
    var user = new User(req.body);

    user.save((err) => {
        if (err) {
            next(err);
        } else {
            res.json(user);
        }
    });
};

var getAllUsers = (req, res, next) => {
    User.find((err, users) => {
        if (err) {
            next(err);
        } else {
            res.json(users);
        }
    });
};

module.exports = { createUser, getAllUsers};