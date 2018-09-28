const express = require('express');

const router = express.Router();

// define a simple hello world route
router.get('/api', (req, resp, next) => {
    resp.status(200).json({
        message: 'Hello TED Anapro - from Nodejs'
    });
});

module.exports = router;