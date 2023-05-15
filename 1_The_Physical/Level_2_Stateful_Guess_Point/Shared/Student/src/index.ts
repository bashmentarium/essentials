import { Result } from "./result";
import { StudentFirstName } from "./first-name";
import { StudentLastName } from "./last-name";

export interface StudentName {
  value: string;
}

export interface StudentEmail {
  value: string;
}

export interface StudentProfile {
  firstName: StudentFirstName;
  lastName: StudentLastName;
  studentEmail: StudentEmail;
}

export interface StudentProps {
  firstName: string;
  lastName: string;
}

export interface StudentEvent {
  type: string;
  payload: string;
}

export const UPDATE_FIRST_NAME = "UPDATE_FIRST_NAME";
export const UPDATE_LAST_NAME = "UPDATE_LAST_NAME";
export const INCOMPLETE_ERROR = "Student must have a first and last name";
export const FIRST_NAME_EMPTY_ERROR = "Students first name cannot be empty";
export const LAST_NAME_EMPTY_ERROR = "Students last name cannot be empty";

export const FIRST_NAME_TOO_SHORT_ERROR =
  "Students first name must be at least 2 characters long";
export const FIRST_NAME_TOO_LONG_ERROR =
  "Students first name must be at most 10 characters long";
export const LAST_NAME_TOO_SHORT_ERROR =
  "Students last name must be at least 2 characters long";
export const LAST_NAME_TOO_LONG_ERROR =
  "Students last name must be at most 15 characters long";

const formatProps = ({ firstName, lastName }: StudentProps) => {
  const formattedFirstName = firstName && firstName.slice(0, 2).toLowerCase();
  const formattedLastName =
    lastName && lastName.length >= 5
      ? lastName.slice(0, 5).toLowerCase()
      : lastName && lastName.slice(0, lastName.length).toLowerCase();

  return {
    formattedFirstName,
    formattedLastName,
  };
};

export class Student {
  firstName: string;
  lastName: string;
  studentEmail: string;

  private constructor(firstName: string, lastName: string) {
    const props: StudentProps = { firstName, lastName };

    const { formattedFirstName, formattedLastName } = formatProps(props);

    const studentEmail = `${formattedFirstName}${formattedLastName}@essentialist.dev`;

    this.firstName = firstName;
    this.lastName = lastName;
    this.studentEmail = studentEmail;
  }

  static create(firstName: string, lastName: string): Result<Student | null> {
    const studentFirstNameResult = StudentFirstName.create(firstName);
    const studentLastNameResult = StudentLastName.create(lastName);

    if (studentFirstNameResult.hasErrors()) {
      return Result.isNotValid(studentFirstNameResult.getFirstError());
    }

    if (studentLastNameResult.hasErrors()) {
      return Result.isNotValid(studentLastNameResult.getFirstError());
    }

    return Result.isValid<Student>(new Student(firstName, lastName));
  }
}
