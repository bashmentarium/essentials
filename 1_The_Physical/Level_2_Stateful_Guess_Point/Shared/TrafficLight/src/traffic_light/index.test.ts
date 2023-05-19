import { TrafficLight } from "./index";
import { StatusOptions } from "../status";
import { ColorOptions } from "../color";

describe("Traffic Light", () => {
  let trafficLight: TrafficLight;
  const { ON, OFF } = StatusOptions;

  beforeEach(() => {
    trafficLight = TrafficLight.create();
  });

  it("should have the OFF status when launched", () => {
    expect(trafficLight.status).toEqual(OFF);
    expect(trafficLight.status).not.toEqual(ON);
  });

  it("can be turned ON", () => {
    trafficLight.turnOn();

    expect(trafficLight.status).toEqual(ON);
    expect(trafficLight.colorOnDisplay).toEqual(ColorOptions.GREEN);
  });

  it("can be turned OFF", () => {
    trafficLight.turnOn();
    trafficLight.turnOff();

    expect(trafficLight.status).toEqual(OFF);
    expect(trafficLight.status).not.toEqual(ON);
  });

  it("should have the OFF status when turned OFF", () => {
    trafficLight.turnOn();
    trafficLight.turnOff();

    expect(trafficLight.status).toEqual(OFF);
    expect(trafficLight.status).not.toEqual(ON);
  });

  it("should have the ON status when turned ON", () => {
    trafficLight.turnOn();

    expect(trafficLight.status).toEqual(ON);
    expect(trafficLight.status).not.toEqual(OFF);
  });

  it("should display the color GREEN after it is turned ON", () => {
    trafficLight.turnOn();

    expect(trafficLight.colorOnDisplay).toEqual(ColorOptions.GREEN);
  });
});
