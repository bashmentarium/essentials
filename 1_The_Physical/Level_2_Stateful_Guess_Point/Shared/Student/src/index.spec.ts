import { Student, ERROR_MSG } from "./index";

describe("Student State Machine", () => {
  const firstName = "John";
  const lastName = "Doe";
  const invalidFirstName = "";
  const invalidLastName = "";
  let studentStateMachine: Student;

  beforeEach(() => {
    studentStateMachine = new Student(firstName, lastName);
  });

  test("accepts 'firstName' and 'lastName' as arguments", () => {
    expect(studentStateMachine.firstName).toBeDefined();
    expect(studentStateMachine.lastName).toBeDefined();
  });

  test("assigns 'firstName' and 'lastName' arguments as instance properties", () => {
    expect(studentStateMachine.firstName).toEqual(firstName);
    expect(studentStateMachine.lastName).toEqual(lastName);
  });

  test("throws error when no 'firstName' or 'lastName' provided", () => {
    expect(() => new Student(invalidFirstName, lastName)).toThrow(ERROR_MSG);
    expect(() => new Student(firstName, invalidLastName)).toThrow(ERROR_MSG);
    expect(() => new Student(invalidFirstName, invalidLastName)).toThrow(
      ERROR_MSG
    );
  });

  test("throws error when 'firstName' is longer than 10 characters", () => {
    const invalidFirstName = "JohnJohnJohn";
    expect(() => new Student(invalidFirstName, lastName)).toThrow(ERROR_MSG);
  });
});
