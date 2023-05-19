import { Color, ColorOptions } from "../color";

export const secondsToColor = (seconds: number): Color => {
  let color: Color = Color.create(ColorOptions.GREEN);

  if (seconds > 35 && seconds < 60) color = Color.create(ColorOptions.RED);
  if (seconds >= 31 && seconds <= 35) color = Color.create(ColorOptions.YELLOW);
  if (seconds >= 0 && seconds <= 30) color = Color.create(ColorOptions.GREEN);

  return color;
};
