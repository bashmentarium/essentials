import { Student, ERROR_MSG } from "./index";

describe("Student State Machine", () => {
  it("accepts 'firstName' and 'lastName' as arguments", () => {
    const firstName = "John";
    const lastName = "Doe";

    const studentStateMachine = new Student(firstName, lastName);

    expect(studentStateMachine.firstName).toBeDefined();
    expect(studentStateMachine.lastName).toBeDefined();
  });

  it("assigns 'firstName' and 'lastName' arguments as instance properties", () => {
    const firstName = "John";
    const lastName = "Doe";

    const studentStateMachine = new Student(firstName, lastName);

    expect(studentStateMachine.firstName).toEqual(firstName);
    expect(studentStateMachine.lastName).toEqual(lastName);
  });

  it("throws error when no 'firstName' or 'lastName' provided", () => {
    const firstName = "John";
    const lastName = "Doe";
    const invalidFirstName = "";
    const invalidLastName = "";

    expect(() => new Student(invalidFirstName, lastName)).toThrow(ERROR_MSG);
    expect(() => new Student(firstName, invalidLastName)).toThrow(ERROR_MSG);
  });
});
