interface StudentProps {
  firstName: string;
  lastName: string;
}

export const ERROR_MSG = "Student must have a first and last name";

const validateProps = (props: StudentProps) => {
  if (!props.firstName || !props.lastName) {
    throw new Error(ERROR_MSG);
  }

  if (props.firstName.length < 2 || props.firstName.length > 10) {
    throw new Error(ERROR_MSG);
  }

  if (props.lastName.length < 2 || props.lastName.length > 15) {
    throw new Error(ERROR_MSG);
  }
};

export class Student {
  firstName: string;
  lastName: string;
  studentEmail: string;

  constructor(firstName: string, lastName: string) {
    const props: StudentProps = { firstName, lastName };

    validateProps(props);

    const formattedFirstName = firstName.slice(0, 2).toLowerCase();
    const formattedLastName =
      lastName.length >= 5
        ? lastName.slice(0, 5).toLowerCase()
        : lastName.slice(0, lastName.length).toLowerCase();

    this.firstName = firstName;
    this.lastName = lastName;
    this.studentEmail = `${formattedFirstName}${formattedLastName}@essentialist.dev`;
  }
}
