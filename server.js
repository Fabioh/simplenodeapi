const PORT = 65000;
const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const server = express();

const userOps = require('./userOperations');

// applying the express middleware
// apply body-parser middleware to parser json
// requests 
server.use(bodyParser.urlencoded({extended: true}));
server.use(bodyParser.json());

// allow cors for all routes
server.use(cors());

server.listen(PORT, () => {
    console.log(`Server is running in port ${PORT}`);
});

// create the routes to recieve the request
const router = express.Router();

// define a simple hello world route
router.get('/api', (req, resp, next) => {
    resp.status(200).json({
        message: 'Hello TED Anapro - from Nodejs'
    });
});

router.route('/api/users')
    .post(userOps.createUser)
    .get(userOps.getAllUsers);

server.use('/', router);