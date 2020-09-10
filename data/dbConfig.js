// Import knex
const knex = require("knex");
// Import knexfile
const config = require("../knexfile.js");

// Export configured knexfile
module.exports = knex(config.development);