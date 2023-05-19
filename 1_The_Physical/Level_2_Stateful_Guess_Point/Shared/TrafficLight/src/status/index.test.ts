import { Status, StatusOptions } from "./index";

describe("Status", () => {
  it("should return an 'OFF' status when created with the 'OFF' status option", () => {
    const status = Status.create(StatusOptions.OFF);

    expect(status.value).toEqual("OFF");
  });
  it("should return an 'ON' status when created with the 'ON' status option", () => {
    const status = Status.create(StatusOptions.ON);

    expect(status.value).toEqual("ON");
  });
  it("should return an 'OFF' by default when no status passed", () => {
    const status = Status.create();

    expect(status.value).toEqual("OFF");
  });
});
