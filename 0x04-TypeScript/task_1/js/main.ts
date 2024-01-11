interface Person {
    firstName: string,
    lastName: string
}

interface Directors extends Person {
    numberOfReports: number;
}

interface Student extends Person {
    workOnHomework(): string;
    displayName(): string;
}

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

class TeacherClass {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience: number;
    location: string;

    constructor(firstName: string, lastName: string, options: any) {
        this.firstName = firstName,
        this.lastName = lastName,
        this.fullTimeEmployee = options.fullTimeEmployee,
        this.yearsOfExperience = options.yearsOfExperience,
        this.location = options.location
    }

    workOnHomework() {
        console.log("Currently Working");
        return "Currently Working";
    }

    displayName() {
        return this.firstName;
    }
}

class StudentClass implements Student {
        firstName: string;
        lastName: string;

        constructor(firstName: string, lastName: string) {
            this.firstName = firstName;
            this.lastName = lastName;  
        }

        workOnHomework() {
            console.log("Currently Working");
            return "Currently Working";
        }
    
        displayName() {
            return this.firstName;
        }
    }

const student1: Student = new StudentClass("Steve", "Andy")
console.log(student1.displayName());
student1.workOnHomework();

const Director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    numberOfReports: 17
};

console.log(Director1);

const printTeacher: printTeacherFunction = (firstName, lastName) => {
    const firstLetter = firstName.charAt(0).toUpperCase();
    const formattedLN = lastName.charAt(0).toUpperCase() + lastName.slice(1);

    return `${firstLetter}. ${formattedLN}`;
};