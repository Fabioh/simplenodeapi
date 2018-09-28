const PORT = 65000;
const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const server = express();

const env = require('./.env');
mongoose.connect(env.connstr);

const indexRoute = require('./routes/index-routes');
const userRoute = require('./routes/user-routes');

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

// define a simple hello world route
server.use('/api', indexRoute);

server.use('/api/users', userRoute);
