const PORT = 65000;
const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const server = express();


const indexRoute = require('./routes/index-routes');

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
router.get('/api', indexRoute);

router.post('/api/users', userOps.createUser);
router.get('/api/users', userOps.getAllUsers);
router.get('/api/users/:userId', userOps.getByUserId);
router.delete('/api/users/:userId', userOps.deleteUser);

server.use('/', router);