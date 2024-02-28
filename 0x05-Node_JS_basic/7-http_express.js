const express = require('express');

const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.type('text/plain');
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  try {
    const Data = await countStudents('database.csv');
    res.type('text/plain');
    res.send(Data.join('\n'));
  } catch (error) {
    res.type('text/plain');
    res.status(500).send(error.message);
  }
});

app.listen(port);

module.exports = app;
