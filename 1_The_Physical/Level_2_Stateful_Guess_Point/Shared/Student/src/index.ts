interface StudentName {
  value: string;
}

interface StudentEmail {
  value: string;
}

interface StudentProps {
  firstName: string;
  lastName: string;
}

interface StudentEvent {
  type: string;
  payload: string;
}

type StudentEvents = StudentEvent[];

type StudentOrError = Student | StudentError;

export const UPDATE_FIRST_NAME = "UPDATE_FIRST_NAME";
export const UPDATE_LAST_NAME = "UPDATE_LAST_NAME";
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
  private _firstName: StudentName;
  private _lastName: StudentName;
  private _studentEmail: StudentEmail;
  private _events: StudentEvents = [];

  private constructor(firstName: string, lastName: string) {
    const props: StudentProps = { firstName, lastName };

    validateProps(props);

    const { formattedFirstName, formattedLastName } = formatProps(props);

    const studentEmail = `${formattedFirstName}${formattedLastName}@essentialist.dev`;

    this._firstName = { value: firstName };
    this._lastName = { value: lastName };
    this._studentEmail = { value: studentEmail };
  }

  static create(firstName: string, lastName: string): StudentOrError {
    try {
      return new Student(firstName, lastName);
    } catch (e: any) {
      return errorObj(e.message);
    }
  }

  get firstName(): StudentName {
    return this._firstName;
  }

  get lastName(): StudentName {
    return this._lastName;
  }

  get emailAddress(): StudentEmail {
    return this._studentEmail;
  }

  get events(): StudentEvents {
    return this._events;
  }

  set event(event: StudentEvent) {
    this._events = [...this._events, event];
  }

  updateFirstName(firstName: string): void | StudentError {
    try {
      validateFirstName(firstName);

      this._events = [
        ...this._events,
        { type: UPDATE_FIRST_NAME, payload: firstName },
      ];

      this._firstName = { value: firstName };
    } catch (e: any) {
      return errorObj(e.message);
    }
  }

  updateLastName(lastName: string): void | StudentError {
    try {
      validateLastName(lastName);

      this._events = [
        ...this._events,
        { type: UPDATE_LAST_NAME, payload: lastName },
      ];

      this._lastName = { value: lastName };
    } catch (e: any) {
      return errorObj(e.message);
    }
  }
}
