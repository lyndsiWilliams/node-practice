// Import server
const server = require("./server.js");

// Assign PORT number
const PORT = process.env.PORT || 5000;

// Start server
server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});