const express = require('express');

const controller = require('../controllers/user-controller');

const router = express.Router();

router.post('/', controller.createUser);
router.get('/', controller.getAllUsers);
router.get('/:userId', controller.getByUserId);
router.delete('/:userId', controller.deleteUser);

module.exports = router;