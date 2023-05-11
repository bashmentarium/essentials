import { Student, ERROR_MSG } from "./index";

describe("Student State Machine", () => {
  describe("functionality", () => {
    const firstName = "John";
    const lastName = "Doe";
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

    test("creates the 'studentEmail' property", () => {
      expect(studentStateMachine.studentEmail).toBeDefined();
    });
  });

  describe("throws an error", () => {
    const firstName = "John";
    const lastName = "Doe";
    let invalidFirstName = "";
    let invalidLastName = "";

    test("when no 'firstName' or 'lastName' provided", () => {
      expect(() => new Student(invalidFirstName, lastName)).toThrow(ERROR_MSG);
      expect(() => new Student(firstName, invalidLastName)).toThrow(ERROR_MSG);
      expect(() => new Student(invalidFirstName, invalidLastName)).toThrow(
        ERROR_MSG
      );
    });

    test("when 'firstName' is shorter than 2 characters", () => {
      invalidFirstName = "J";
      expect(() => new Student(invalidFirstName, lastName)).toThrow(ERROR_MSG);
    });

    test("when 'firstName' is longer than 10 characters", () => {
      invalidFirstName = "JohnJohnJohn";

      expect(() => new Student(invalidFirstName, lastName)).toThrow(ERROR_MSG);
    });

    test("when 'lastName' is shorter than 2 characters", () => {
      invalidLastName = "A";

      expect(() => new Student(firstName, invalidLastName)).toThrow(ERROR_MSG);
    });

    test("when 'lastName' is longer than 15 characters", () => {
      invalidLastName = "DoeDoeDoeDoeDoeDoe";

      expect(() => new Student(firstName, invalidLastName)).toThrow(ERROR_MSG);
    });
  });
});
