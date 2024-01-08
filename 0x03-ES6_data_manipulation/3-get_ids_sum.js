export default function getStudentIdsSum(ListStudentS) {
  return ListStudentS.reduce((sum, student) => sum + student.id, 0);
}
