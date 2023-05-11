import { Student, ERROR_MSG } from "./index";

describe("Student State Machine", () => {
  describe("functionality", () => {
    test("accepts 'firstName' and 'lastName' as arguments", () => {
      const firstName = "John";
      const lastName = "Doe";
      const studentStateMachine = new Student(firstName, lastName);

      expect(studentStateMachine.firstName).toBeDefined();
      expect(studentStateMachine.lastName).toBeDefined();
    });

    test("assigns 'firstName' and 'lastName' arguments as instance properties", () => {
      const firstName = "John";
      const lastName = "Doe";
      const studentStateMachine = new Student(firstName, lastName);

      expect(studentStateMachine.firstName).toEqual(firstName);
      expect(studentStateMachine.lastName).toEqual(lastName);
    });
  });

  describe("throws an error", () => {
    test("when no 'firstName' or 'lastName' provided", () => {
      const firstName = "John";
      const lastName = "Doe";
      const invalidFirstName = "";
      const invalidLastName = "";

      expect(() => new Student(invalidFirstName, lastName)).toThrow(ERROR_MSG);
      expect(() => new Student(firstName, invalidLastName)).toThrow(ERROR_MSG);
      expect(() => new Student(invalidFirstName, invalidLastName)).toThrow(
        ERROR_MSG
      );
    });

    test("when 'firstName' is shorter than 2 characters", () => {
      const invalidFirstName = "J";
      const lastName = "Doe";

      expect(() => new Student(invalidFirstName, lastName)).toThrow(ERROR_MSG);
    });

    test("when 'firstName' is longer than 10 characters", () => {
      const invalidFirstName = "JohnJohnJohn";
      const lastName = "Doe";

      expect(() => new Student(invalidFirstName, lastName)).toThrow(ERROR_MSG);
    });

    test("when 'lastName' is shorter than 2 characters", () => {
      const firstName = "John";
      const invalidLastName = "A";

      expect(() => new Student(firstName, invalidLastName)).toThrow(ERROR_MSG);
    });

    test("when 'lastName' is longer than 15 characters", () => {
      const firstName = "John";
      const invalidLastName = "DoeDoeDoeDoeDoeDoe";

      expect(() => new Student(firstName, invalidLastName)).toThrow(ERROR_MSG);
    });
  });
});
