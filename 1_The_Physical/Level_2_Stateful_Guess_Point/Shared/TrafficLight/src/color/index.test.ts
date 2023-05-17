import { Color, ColorOptions } from "./index";

describe("Color", () => {
  it("can return RED color option", () => {
    const redColor = Color.create(ColorOptions.RED);

    expect(redColor.value).toBe(ColorOptions.RED);
  });

  it("can return YELLOW color option", () => {
    const yellowColor = Color.create(ColorOptions.YELLOW);

    expect(yellowColor.value).toBe(ColorOptions.YELLOW);
  });

  it("can return GREEN color option", () => {
    const greenColor = Color.create(ColorOptions.GREEN);

    expect(greenColor.value).toBe(ColorOptions.GREEN);
  });
});
