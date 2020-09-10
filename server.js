// Import express
const express = require('express');

// Import project router
const projectRouter = require('./router/projectRouter.js');

// Create server
const server = express();

// Teach server to read json objects
server.use(express.json());
// Tell the server to use the projects router
server.use('/api/projects', projectRouter);

// Export the server
module.exports = server;