// import the user scheme
const User = require('../model/user');

const createUser =  (req, res, next) => {
    var user = new User(req.body);
    user.save((err) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send(user);
        }
    });
};

const getAllUsers = async (req, res, next) => {
	try {
		var data = await User.find();
		res.status(200).send(data);
	} catch (e) {
		res.status(500).send(failMessage());
	}
};

const getByUserId = async (req, res, next) => {
	try {
		var user = await User.findById(req.params.userId);
		if (user !== null) {
			res.status(200).send(user);
		} else {
			res.status(404).send();
		}
	} catch(e) {
		res.status(500).send(failMessage());
	}
};

const deleteUser = async (req, res, next) => {
	const id = req.params.userId;
	try {
		await User.findOneAndRemove(id);
		res.status(200).send({
			message: 'Usuário removido com sucesso!'
		});
	} catch (e) {
		console.log(`Exception: ${e}`);
		res.status(500).send(failMessage());
	}
};

const failMessage = () => {
	return {
		message: 'Falha ao processar sua requisição'
	};
};

module.exports = { createUser, getAllUsers, getByUserId, deleteUser };