type StudentOrError = Student | StudentError;

interface StudentProps {
  firstName: string;
  lastName: string;
}

export const INCOMPLETE_ERROR = "Student must have a first and last name";
export const FIRST_NAME_LENGTH_ERROR =
  "Students first name must be at least 2 characters short and 10 characters long";
export const LAST_NAME_LENGTH_ERROR =
  "Students last name must be at least 2 characters short and 15 characters long";

const validateFirstName = (firstName: string) => {
  if (firstName.length < 2 || firstName.length > 10) {
    throw new Error(FIRST_NAME_LENGTH_ERROR);
  }
};

const validateLastName = (lastName: string) => {
  if (lastName.length < 2 || lastName.length > 15) {
    throw new Error(LAST_NAME_LENGTH_ERROR);
  }
};

const validateProps = (props: StudentProps) => {
  if (!props.firstName || !props.lastName) {
    throw new Error(INCOMPLETE_ERROR);
  }

  validateFirstName(props.firstName);
  validateLastName(props.lastName);
};

const formatProps = ({ firstName, lastName }: StudentProps) => {
  const formattedFirstName = firstName.slice(0, 2).toLowerCase();
  const formattedLastName =
    lastName.length >= 5
      ? lastName.slice(0, 5).toLowerCase()
      : lastName.slice(0, lastName.length).toLowerCase();

  return {
    formattedFirstName,
    formattedLastName,
  };
};

export const errorObj = (message: string): StudentError => ({
  error: true,
  message,
});

export type StudentError = { error: boolean; message: string };

export class Student {
  private _firstName: string;
  private _lastName: string;
  private _studentEmail: string;

  private constructor(firstName: string, lastName: string) {
    const props: StudentProps = { firstName, lastName };

    validateProps(props);

    const { formattedFirstName, formattedLastName } = formatProps(props);

    this._firstName = firstName;
    this._lastName = lastName;
    this._studentEmail = `${formattedFirstName}${formattedLastName}@essentialist.dev`;
  }

  static create(firstName: string, lastName: string): StudentOrError {
    try {
      return new Student(firstName, lastName);
    } catch (e: any) {
      return errorObj(e.message);
    }
  }

  get firstName(): string {
    return this._firstName;
  }

  get lastName(): string {
    return this._lastName;
  }

  get emailAddress(): string {
    return this._studentEmail;
  }

  updateFirstName(firstName: string): void | StudentError {
    try {
      validateFirstName(firstName);

      this._firstName = firstName;
    } catch (e: any) {
      return errorObj(e.message);
    }
  }

  updateLastName(lastName: string): void | StudentError {
    try {
      validateLastName(lastName);

      this._lastName = lastName;
    } catch (e: any) {
      return errorObj(e.message);
    }
  }
}
