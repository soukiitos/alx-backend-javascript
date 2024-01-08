export default function getStudentsByLocation(ListStudentLoc, city) {
  return ListStudentLoc.filter((student) => student.location === city);
}
