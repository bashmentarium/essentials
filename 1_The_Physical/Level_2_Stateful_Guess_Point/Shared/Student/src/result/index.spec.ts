import { Result } from "./index";
import { StudentProfile, StudentName, StudentEmail } from "../index";

describe("Result", () => {
  it("should return a studentProfile object when creation is valid", () => {
    const studentProfile: StudentProfile = {
      firstName: { value: "John" },
      lastName: { value: "Doe" },
      studentEmail: { value: "jodoe@essentialist.dev" },
    };

    const result = new Result({ studentProfile, errors: [] });
    expect(result.studentProfile).toEqual(studentProfile);
    expect(result.errors).toEqual([]);
  });

  it("should return an error object when creation is not valid", () => {
    const error = { message: "Invalid first name", type: "INVALID_FIRST_NAME" };

    const result = new Result({ studentProfile: null, errors: [error] });
    expect(result.studentProfile).toEqual(null);
    expect(result.errors).toEqual([error]);
  });
});
