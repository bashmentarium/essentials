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
});
