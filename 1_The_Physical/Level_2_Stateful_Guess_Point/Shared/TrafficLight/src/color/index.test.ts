import { Color, ColorOptions } from "./index";

describe("Color", () => {
  it("can return RED color option", () => {
    const color = new Color(ColorOptions.RED);

    expect(color.value).toBe(ColorOptions.RED);
  });

  it("can return YELLOW color option", () => {
    const color = new Color(ColorOptions.YELLOW);

    expect(color.value).toBe(ColorOptions.YELLOW);
  });

  it("can return GREEN color option", () => {
    const color = new Color(ColorOptions.GREEN);

    expect(color.value).toBe(ColorOptions.GREEN);
  });
});
