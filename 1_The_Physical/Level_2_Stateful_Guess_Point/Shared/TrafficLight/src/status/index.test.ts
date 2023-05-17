import { Status, StatusOptions } from "./index";

describe("Status", () => {
  it("should start with OFF status option", () => {
    const status = Status.create(StatusOptions.OFF);

    expect(status.value).toEqual("OFF");
  });
});
