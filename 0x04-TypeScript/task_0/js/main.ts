interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string
}

const Student1: Student = {
  firstName: 'Kenta',
  lastName: 'Suzuki',
  age: 30,
  location: 'Kenitra',
};

const Student2: Student = {
  firstName: 'Violet',
  lastName: 'Garden',
  age: 16,
  location: 'Rabat',
};

const studentList: Student[] = [Student1, Student2];

export const render = (studentList: Student[]): void => {
  const table = document.createElement('TABLE');
  const trow = document.createElement('TR');
  table.insertAdjacentElement('beforeend', trow);

  trow.insertAdjacentHTML('beforeend', '<th>FirstName</th>');
  trow.insertAdjacentHTML('beforeend', '<th>Location</th>');

  for (const StdntList of studentList) {
    const RowStdnt = document.createElement('TR');
    RowStdnt.insertAdjacentHTML('beforeend', '<td>${StdntList.firstName}</td>');
    RowStdnt.insertAdjacentHTML('beforeend', '<td>${StdntList.location}</td>');
    table.insertAdjacentElement('beforeend', RowStdnt);
  }

  document.body.insertAdjacentElement('beforeend', table);
}

render(studentList);
