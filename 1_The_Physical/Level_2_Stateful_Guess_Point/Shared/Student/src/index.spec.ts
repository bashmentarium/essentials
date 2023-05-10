import { Student } from "./index";

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
});
