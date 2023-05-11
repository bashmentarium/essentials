import {
  Student,
  errorObj,
  INCOMPLETE_ERROR,
  FIRST_NAME_LENGTH_ERROR,
  LAST_NAME_LENGTH_ERROR,
} from "./index";

describe("Student State Machine", () => {
  describe("returns a Student object that", () => {
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
      expect(studentStateMachine.emailAddress).toEqual(
        "jodoe@essentialist.dev"
      );
    });

    test("updates the first name via 'updateFirstName' method", () => {
      studentStateMachine.updateFirstName("Michael");

      expect(studentStateMachine.firstName).toEqual("Michael");
    });

    test("updates the last name via 'updateLastName' method", () => {
      studentStateMachine.updateLastName("Bash");

      expect(studentStateMachine.lastName).toEqual("Bash");
    });
  });

  describe("returns an error object", () => {
    const firstName = "John";
    const lastName = "Doe";
    let invalidFirstName = "";
    let invalidLastName = "";

    const student = Student.create(firstName, lastName) as Student;

    const studentWithInvalidFirstName = Student.create(
      invalidFirstName,
      lastName
    );
    const studentWithInvalidLastName = Student.create(
      firstName,
      invalidLastName
    );
    const studentWithInvalidFirstAndLastName = Student.create(
      invalidFirstName,
      invalidLastName
    );

    test("when no 'firstName' or 'lastName' provided", () => {
      expect(studentWithInvalidFirstName).toEqual(errorObj(INCOMPLETE_ERROR));
      expect(studentWithInvalidLastName).toEqual(errorObj(INCOMPLETE_ERROR));
      expect(studentWithInvalidFirstAndLastName).toEqual(
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

    test("when updating 'firstName' with invalid value", () => {
      invalidFirstName = "FirstNameLongerThan10Characters";

      expect(student.updateFirstName(invalidFirstName)).toEqual(
        errorObj(FIRST_NAME_LENGTH_ERROR)
      );
    });

    test("when updating 'lastName' with invalid value", () => {
      invalidLastName = "LastNameLongerThan15Characters";

      expect(student.updateLastName(invalidLastName)).toEqual(
        errorObj(LAST_NAME_LENGTH_ERROR)
      );
    });
  });
});
