import { Color, ColorOptions } from "./index";

describe("Color", () => {
  it("can return RED color option", () => {
    const redColor: Color = Color.create(ColorOptions.RED);

    expect(redColor.value).toBe("RED");
  });

  it("can return YELLOW color option", () => {
    const yellowColor: Color = Color.create(ColorOptions.YELLOW);

    expect(yellowColor.value).toBe("YELLOW");
  });

  it("can return GREEN color option", () => {
    const greenColor: Color = Color.create(ColorOptions.GREEN);

    expect(greenColor.value).toBe("GREEN");
  });
});
