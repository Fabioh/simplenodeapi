// import the usr scheme
const User = require('./user');

const createUser =  (req, res, next) => {
    var user = new User(req.body);

    user.save((err) => {
        if (err) {
            next(err);
        } else {
            res.json(user);
        }
    });
};

const getAllUsers = (req, res, next) => {
    User.find((err, users) => {
        if (err) {
            next(err);
        } else {
            res.json(users);
        }
    });
};

const getByUserId = function (req, res, next) {
    User.findById(req.params.userId, function (err, user) {
        if (err) {
            next(err);
        } else {
            res.json(user);
        }
    });
};

module.exports = { createUser, getAllUsers, getByUserId };