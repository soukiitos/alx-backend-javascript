export default function updateStudentGradeByCity(ListStudent, city, newGrades) {
  return ListStudent
    .filter((student) => student.location === city)
    .map((student) => {
      const FilterdgradeObject = newGrades.find((grade) => grade.studentId === student.id);
      const FilterdGrade = FilterdgradeObject ? FilterdgradeObject.grade : 'N/A';
      return { ...student, grade: FilterdGrade };
    });
}
