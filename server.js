const PORT = 65000;
const bodyParser = require('body-parser');
const express = require('express');
const myCors = require('./myCors');

const server = express();

// applying the express middleware
// apply body-parser middleware to parser json
// requests 
server.use(bodyParser.json());

// allow cors for all routes
server.use(myCors);

server.listen(PORT, () => {
    console.log(`Server is running in port ${PORT}`);
});

// create the routes to receive the requests
const router = express.Router();

router.get('/api', (req, resp, next) => {
    resp.status(200).json({
        message: 'Hello TED Anapro - from Nodejs'
    });
});

server.use('/', router);