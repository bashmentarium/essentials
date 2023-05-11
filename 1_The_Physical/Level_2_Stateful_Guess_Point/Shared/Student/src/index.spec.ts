import {
  Student,
  errorObj,
  INCOMPLETE_ERROR,
  FIRST_NAME_LENGTH_ERROR,
  LAST_NAME_LENGTH_ERROR,
} from "./index";

describe("Student State Machine", () => {
  describe("functionality", () => {
    const firstName = "John";
    const lastName = "Doe";
    let studentStateMachine: Student;

    beforeEach(() => {
      studentStateMachine = Student.create(firstName, lastName) as Student;
    });

    test("accepts 'firstName' and 'lastName' as arguments", () => {
      expect(studentStateMachine.firstName).toBeDefined();
      expect(studentStateMachine.lastName).toBeDefined();
    });

    test("assigns 'firstName' and 'lastName' arguments as instance properties", () => {
      expect(studentStateMachine.firstName).toEqual(firstName);
      expect(studentStateMachine.lastName).toEqual(lastName);
    });

    test("creates the 'studentEmail' property from 'firstName' and 'lastName'", () => {
      expect(studentStateMachine.studentEmail).toEqual(
        "jodoe@essentialist.dev"
      );
    });
  });

  describe("throws an error", () => {
    const firstName = "John";
    const lastName = "Doe";
    let invalidFirstName = "";
    let invalidLastName = "";

    test("when no 'firstName' or 'lastName' provided", () => {
      expect(Student.create(invalidFirstName, lastName)).toEqual(
        errorObj(INCOMPLETE_ERROR)
      );
      expect(Student.create(firstName, invalidLastName)).toEqual(
        errorObj(INCOMPLETE_ERROR)
      );
      expect(Student.create(invalidFirstName, invalidLastName)).toEqual(
        errorObj(INCOMPLETE_ERROR)
      );
    });

    test("when 'firstName' is shorter than 2 characters", () => {
      invalidFirstName = "J";
      expect(Student.create(invalidFirstName, lastName)).toEqual(
        errorObj(FIRST_NAME_LENGTH_ERROR)
      );
    });

    test("when 'firstName' is longer than 10 characters", () => {
      invalidFirstName = "JohnJohnJohn";

      expect(Student.create(invalidFirstName, lastName)).toEqual(
        errorObj(FIRST_NAME_LENGTH_ERROR)
      );
    });

    test("when 'lastName' is shorter than 2 characters", () => {
      invalidLastName = "A";

      expect(Student.create(firstName, invalidLastName)).toEqual(
        errorObj(LAST_NAME_LENGTH_ERROR)
      );
    });

    test("when 'lastName' is longer than 15 characters", () => {
      invalidLastName = "DoeDoeDoeDoeDoeDoe";

      expect(Student.create(firstName, invalidLastName)).toEqual(
        errorObj(LAST_NAME_LENGTH_ERROR)
      );
    });
  });
});
