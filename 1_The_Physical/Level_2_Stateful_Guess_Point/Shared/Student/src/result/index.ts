import { StudentProfile } from "../index";

interface ResultI {
  studentProfile: StudentProfile;
  errors: Error[];
}

export class Result {
  studentProfile: StudentProfile;
  errors: Error[];

  constructor(props: ResultI) {
    this.studentProfile = props.studentProfile;
    this.errors = props.errors;
  }

  static isValid(studentProfile: StudentProfile): Result {
    return new Result({ studentProfile, errors: [] });
  }
}
