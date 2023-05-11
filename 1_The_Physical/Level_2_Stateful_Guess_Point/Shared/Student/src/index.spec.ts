import {
  Student,
  errorObj,
  INCOMPLETE_ERROR,
  FIRST_NAME_LENGTH_ERROR,
  LAST_NAME_LENGTH_ERROR,
  UPDATE_FIRST_NAME,
  UPDATE_LAST_NAME,
} from "./index";

describe("Student State Machine", () => {
  describe("creates a Student object that", () => {
    const firstName = "John";
    const lastName = "Doe";
    let studentStateMachine: Student;

    beforeEach(() => {
      studentStateMachine = Student.create(firstName, lastName) as Student;
    });

    test("accepts 'firstName' and 'lastName' as arguments and assigns them as properties", () => {
      expect(studentStateMachine.firstName).toBeDefined();
      expect(studentStateMachine.lastName).toBeDefined();
    });

    test("assigns 'firstName' and 'lastName' arguments as instance properties", () => {
      expect(studentStateMachine.firstName.value).toEqual(firstName);
      expect(studentStateMachine.lastName.value).toEqual(lastName);
    });

    test("creates the 'studentEmail' property from 'firstName' and 'lastName'", () => {
      expect(studentStateMachine.emailAddress.value).toEqual(
        "jodoe@essentialist.dev"
      );
    });

    test("updates the first name via 'updateFirstName' method", () => {
      studentStateMachine.updateFirstName("Michael");

      expect(studentStateMachine.firstName.value).toEqual("Michael");
    });

    test("updates the last name via 'updateLastName' method", () => {
      studentStateMachine.updateLastName("Bash");

      expect(studentStateMachine.lastName.value).toEqual("Bash");
    });

    test("registers updating events in a 'events' property", () => {
      studentStateMachine.updateLastName("Enrgy");
      studentStateMachine.updateFirstName("Henry");

      expect(studentStateMachine.events).toEqual([
        { type: UPDATE_LAST_NAME, payload: "Enrgy" },
        { type: UPDATE_FIRST_NAME, payload: "Henry" },
      ]);
    });
  });

  describe("returns an Error object", () => {
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
