import { Status, StatusOptions } from "./index";

describe("Status", () => {
  it("should start with OFF status option", () => {
    const status = new Status(StatusOptions.OFF);

    expect(status.status).toEqual("OFF");
  });
});
