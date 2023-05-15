import { StudentProfile } from "../index";

interface Error {
  message: string;
  type: string;
}

interface ResultI {
  studentProfile: StudentProfile | null;
  errors: Error[];
}

export class Result {
  studentProfile: StudentProfile | null;
  errors: Error[];

  constructor(props: ResultI) {
    this.studentProfile = props.studentProfile;
    this.errors = props.errors;
  }

  static isValid(studentProfile: StudentProfile): Result {
    return new Result({ studentProfile, errors: [] });
  }

  static isNotValid(error: Error): Result {
    return new Result({ studentProfile: null, errors: [error] });
  }
}
