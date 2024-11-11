// app.js
const express = require('express');
const app = express();

// Define the root route
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Start the server
const PORT = 3005;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
