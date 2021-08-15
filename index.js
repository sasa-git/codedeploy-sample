const express = require('express');
const app = express();
const port = 3000;
const envs = process.env

app.get('/', (req, res) => {
  res.send(envs);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

