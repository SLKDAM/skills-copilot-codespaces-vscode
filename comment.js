//Create web server
const express = require('express');
const app = express();
const port = 3000;

// Get request
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Post request
app.post('/', (req, res) => {
  res.send('Got a POST request');
});

// Put request
app.put('/user', (req, res) => {
  res.send('Got a PUT request at /user');
});

// Delete request
app.delete('/user', (req, res) => {
  res.send('Got a DELETE request at /user');
});

// Listen to port
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});