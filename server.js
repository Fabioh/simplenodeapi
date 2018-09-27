const PORT = 65000;
const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');

const server = express();

// applying the express middleware
// apply body-parser middleware to parser json
// requests 
server.use(bodyParser.json());

// allow cors for all routes
server.use(cors());

server.listen(PORT, () => {
    console.log(`Server is running in port ${PORT}`);
});