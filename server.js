
const express = require('express');

// Constants
const PORT = 8081;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('This is a test server to create new user and deal info');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);