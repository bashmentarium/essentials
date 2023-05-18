import "@types/jest";
import { TrafficLight } from "./index";
import { StatusOptions } from "../status";
import { Color, ColorOptions } from "../color";

describe("Traffic Light", () => {
  let trafficLight: TrafficLight;
  const { ON, OFF } = StatusOptions;

  const redColor = Color.create(ColorOptions.RED);
  const yellowColor = Color.create(ColorOptions.YELLOW);
  const greenColor = Color.create(ColorOptions.GREEN);

  beforeEach(() => {
    trafficLight = TrafficLight.create();
  });

  it("should have the OFF status when launched", () => {
    expect(trafficLight.status).toEqual(OFF);
  });

  it("can be turned ON", () => {
    trafficLight.turnOn(redColor);

    expect(trafficLight.status).toEqual(ON);
  });

  it("can be turned OFF", () => {
    trafficLight.turnOn(redColor);
    trafficLight.turnOff();

    expect(trafficLight.status).toEqual(OFF);
  });

  it("should have the OFF status when turned OFF", () => {
    trafficLight.turnOn(redColor);
    trafficLight.turnOff();

    expect(trafficLight.status).toEqual(OFF);
  });

  it("should have the ON status when turned ON", () => {
    trafficLight.turnOn(redColor);

    expect(trafficLight.status).toEqual(ON);
  });

  it("should display the color RED when turned ON", () => {
    trafficLight.turnOn(redColor);

    expect(trafficLight.colorOnDisplay).toEqual(ColorOptions.RED);
  });
});
