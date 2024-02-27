// Reading a file synchronously with Node JS
const fs = require('fs');
function countStudents(datapath) {
  let data;
  try{
    data = fs.readFileSync(datapath);
  } catch (err) {
    throw new Error('Cannot load the database');
  }
  data = data.toString().split('\n');
  let students = data.filter((item) => item);
  students = students.map((item) => item.split(','));
  const NUMBER_OF_STUDENTS = students.length ? students.length - 1 : 0;
  console.log(`Number of students: ${NUMBER_OF_STUDENTS}`);
  const fieldL = {};
  for (const i in students) {
    if (i !== 0) {
      if (!fieldL[students[i][3]]) fieldL[students[i][3]] = [];
      fieldL[students[i][3]].push(students[i][0]);
    }
  }
  delete fieldL.field;
  for (const j of Object.keys(fieldL)) {
    console.log(`Number of students in ${j}: ${fieldL[j].length}. List: ${fieldL[j].join(', ')}`,);
  }
}
module.exports = countStudents;
