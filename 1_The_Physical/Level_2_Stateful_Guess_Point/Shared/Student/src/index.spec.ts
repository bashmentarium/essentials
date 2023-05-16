import { StudentFirstName } from "./first-name";
import { StudentLastName } from "./last-name";
import {
  Student,
  FIRST_NAME_EMPTY_ERROR,
  FIRST_NAME_TOO_LONG_ERROR,
  FIRST_NAME_TOO_SHORT_ERROR,
  LAST_NAME_EMPTY_ERROR,
  LAST_NAME_TOO_LONG_ERROR,
  LAST_NAME_TOO_SHORT_ERROR,
  UPDATE_FIRST_NAME,
  UPDATE_LAST_NAME,
} from "./index";
import { Result } from "./result";

describe("Student State Machine", () => {
  describe("creates a Student object that", () => {
    const firstName = "John";
    const lastName = "Doe";
    let result: Result<Student | null>;

    beforeEach(() => {
      result = Student.create(firstName, lastName);
    });

    test("accepts and assigns 'firstName' and 'lastName' as properties", () => {
      expect(result).toBeInstanceOf(Result<Student>);
      expect(result.studentProfile?.firstName).toEqual(firstName);
      expect(result.studentProfile?.lastName).toEqual(lastName);
    });

    test("creates the 'studentEmail' property from 'firstName' and 'lastName'", () => {
      expect(result.studentProfile?.studentEmail).toEqual(
        "jodoe@essentialist.dev"
      );
    });

    test("updates the first name via 'updateFirstName' method", () => {
      result.updateFirstName("Michael");

      expect(result.studentProfile?.firstName).toEqual("Michael");
    });

    test("updates the last name via 'updateLastName' method", () => {
      result.updateLastName("Bash");

      expect(result.studentProfile?.lastName).toEqual("Bash");
    });

    test("registers updating events in a 'events' property", () => {
      result.updateLastName("Enrgy");
      result.updateFirstName("Henry");

      expect(result.events).toEqual([
        { type: UPDATE_LAST_NAME, payload: "Enrgy" },
        { type: UPDATE_FIRST_NAME, payload: "Henry" },
      ]);
    });
  });

  describe("returns an Error object", () => {
    const firstName = "John";
    const lastName = "Doe";
    let emptyFirstName = "";
    let emptyLastName = "";
    let invalidFirstName: string, invalidLastName: string;

    const studentWithInvalidFirstName = Student.create(
      emptyFirstName,
      lastName
    );
    const studentWithInvalidLastName = Student.create(firstName, emptyLastName);

    test("when an empty 'firstName' is provided", () => {
      expect(studentWithInvalidFirstName).toBeInstanceOf(Result<null>);
      expect(studentWithInvalidFirstName).toMatchObject({
        studentProfile: null,
        errors: [
          {
            message: FIRST_NAME_EMPTY_ERROR,
          },
        ],
      });
    });

    test("when an empty 'lastName' is provided", () => {
      expect(studentWithInvalidLastName).toBeInstanceOf(Result<null>);
      expect(studentWithInvalidLastName).toMatchObject({
        studentProfile: null,
        errors: [
          {
            message: LAST_NAME_EMPTY_ERROR,
          },
        ],
      });
    });

    test("when 'firstName' is shorter than 2 characters", () => {
      invalidFirstName = "J";

      expect(studentWithInvalidLastName).toBeInstanceOf(Result<null>);
      expect(Student.create(invalidFirstName, lastName)).toMatchObject({
        studentProfile: null,
        errors: [
          {
            message: FIRST_NAME_TOO_SHORT_ERROR,
          },
        ],
      });
    });

    test("when 'firstName' is longer than 10 characters", () => {
      invalidFirstName = "JohnJohnJohn";

      expect(studentWithInvalidLastName).toBeInstanceOf(Result<null>);
      expect(Student.create(invalidFirstName, lastName)).toMatchObject({
        studentProfile: null,
        errors: [
          {
            message: FIRST_NAME_TOO_LONG_ERROR,
          },
        ],
      });
    });

    test("when 'lastName' is shorter than 2 characters", () => {
      invalidLastName = "D";

      expect(studentWithInvalidLastName).toBeInstanceOf(Result<null>);
      expect(Student.create(firstName, invalidLastName)).toMatchObject({
        studentProfile: null,
        errors: [
          {
            message: LAST_NAME_TOO_SHORT_ERROR,
          },
        ],
      });
    });

    test("when 'lastName' is longer than 15 characters", () => {
      invalidLastName = "JohnJohnJohnJohnJohn";

      expect(studentWithInvalidLastName).toBeInstanceOf(Result<null>);
      expect(Student.create(firstName, invalidLastName)).toMatchObject({
        studentProfile: null,
        errors: [
          {
            message: LAST_NAME_TOO_LONG_ERROR,
          },
        ],
      });
    });

    test("when updating 'firstName' with invalid value", () => {
      invalidFirstName = "FirstNameLongerThan10Characters";

      expect(Student.create(invalidFirstName, lastName)).toMatchObject({
        studentProfile: null,
        errors: [
          {
            message: FIRST_NAME_TOO_LONG_ERROR,
          },
        ],
      });
    });

    test("when updating 'lastName' with invalid value", () => {
      invalidLastName = "LastNameLongerThan15Characters";

      expect(Student.create(firstName, invalidLastName)).toMatchObject({
        studentProfile: null,
        errors: [
          {
            message: LAST_NAME_TOO_LONG_ERROR,
          },
        ],
      });
    });
  });
});
