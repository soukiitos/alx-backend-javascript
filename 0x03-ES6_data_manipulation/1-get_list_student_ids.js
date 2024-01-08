export default function getListStudentIds(ListStudentIds) {
  if (!Array.isArray(ListStudentIds)) {
    return [];
  }

  return ListStudentIds.map((student) => student.id);
}
