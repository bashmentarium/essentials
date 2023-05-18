import { Color, ColorOptions } from "./index";

describe("Color", () => {
  const redColor = Color.create(ColorOptions.RED);
  const yellowColor = Color.create(ColorOptions.YELLOW);
  const greenColor = Color.create(ColorOptions.GREEN);

  it("returns the 'RED' color when created with 'RED' color option", () => {
    expect(redColor.value).toEqual(ColorOptions.RED);

    expect(redColor.value).not.toEqual(ColorOptions.GREEN);
    expect(redColor.value).not.toEqual(ColorOptions.YELLOW);
  });

  it("returns the 'YELLOW' color when created with 'YELLOW' color option", () => {
    expect(yellowColor.value).toEqual(ColorOptions.YELLOW);

    expect(yellowColor.value).not.toEqual(ColorOptions.GREEN);
    expect(yellowColor.value).not.toEqual(ColorOptions.RED);
  });

  it("returns the 'GREEN' color when created with 'GREEN' color option", () => {
    expect(greenColor.value).toEqual(ColorOptions.GREEN);

    expect(greenColor.value).not.toEqual(ColorOptions.YELLOW);
    expect(greenColor.value).not.toEqual(ColorOptions.RED);
  });
});
