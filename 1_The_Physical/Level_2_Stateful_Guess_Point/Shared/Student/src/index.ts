export const INCOMPLETE_ERROR = "Student must have a first and last name";
export const FIRST_NAME_LENGTH_ERROR =
  "Students first name must be at least 2 characters short and 10 characters long";
export const LAST_NAME_LENGTH_ERROR =
  "Students last name must be at least 2 characters short and 15 characters long";

const validateProps = (props: StudentProps) => {
  if (!props.firstName || !props.lastName) {
    throw new Error(INCOMPLETE_ERROR);
  }

  if (props.firstName.length < 2 || props.firstName.length > 10) {
    throw new Error(FIRST_NAME_LENGTH_ERROR);
  }

  if (props.lastName.length < 2 || props.lastName.length > 15) {
    throw new Error(LAST_NAME_LENGTH_ERROR);
  }
};

export const errorObj = (message: string): StudentError => ({
  error: true,
  message,
});

export type StudentError = { error: true; message: string };

type StudentOrError = Student | StudentError;

interface StudentProps {
  firstName: string;
  lastName: string;
}

export class Student {
  firstName: string;
  lastName: string;
  studentEmail: string;

  private constructor(firstName: string, lastName: string) {
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

  static create(firstName: string, lastName: string): StudentOrError {
    try {
      return new Student(firstName, lastName);
    } catch (e: any) {
      return errorObj(e.message);
    }
  }
}
