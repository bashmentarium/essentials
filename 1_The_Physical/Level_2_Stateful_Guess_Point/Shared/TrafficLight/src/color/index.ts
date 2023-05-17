export type ColorType = "RED" | "YELLOW" | "GREEN";

export class Color {
  value: ColorType;

  private constructor(color: ColorType) {
    this.value = color;
  }

  static create(color: ColorType): Color {
    return new Color(color);
  }
}

export enum ColorOptions {
  RED = "RED",
  YELLOW = "YELLOW",
  GREEN = "GREEN",
}
