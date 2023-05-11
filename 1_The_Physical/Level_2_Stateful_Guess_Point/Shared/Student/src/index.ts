interface StudentProps {
  firstName: string;
  lastName: string;
}

export const ERROR_MSG = "Student must have a first and last name";

export class Student {
  firstName: string;
  lastName: string;
  studentEmail: string;

  constructor(firstName: string, lastName: string) {
    const props: StudentProps = { firstName, lastName };

    if (!props.firstName || !props.lastName) {
      throw new Error(ERROR_MSG);
    }

    if (props.firstName.length < 2 || props.firstName.length > 10) {
      throw new Error(ERROR_MSG);
    }

    if (props.lastName.length < 2 || props.lastName.length > 15) {
      throw new Error(ERROR_MSG);
    }

    this.firstName = firstName;
    this.lastName = lastName;
    this.studentEmail = "";
  }
}
