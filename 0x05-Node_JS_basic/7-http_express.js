const express = require('express');

const countStudents = require('./3-read_file_async');

const args = process.argv.slice(2);
const DATABASE = args[0];

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  const m = 'This is the list of our students\n';
  try {
    const students = await countStudents(DATABASE);
    res.send(`${m}${students.join('\n')}`);
  } catch (error) {
    res.send(`${m}$error.message}`);
  }
});

app.listen(port);

module.exports = app;
