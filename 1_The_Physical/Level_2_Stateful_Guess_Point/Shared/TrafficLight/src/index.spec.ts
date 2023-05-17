import { TrafficLight } from "./index";

describe("Traffic Light", () => {
  let trafficLight: TrafficLight;

  beforeEach(() => {
    trafficLight = TrafficLight.create();
  });

  it("should have the OFF status when launched", () => {
    expect(trafficLight.status).toEqual("OFF");
  });

  it("can be turned ON", () => {
    trafficLight.turnOn();

    expect(trafficLight.status).toEqual("ON");
  });

  it("can be turned OFF", () => {
    trafficLight.turnOn();
    trafficLight.turnOff();

    expect(trafficLight.status).toEqual("OFF");
  });

  it("should have the OFF status when turned OFF", () => {
    trafficLight.turnOn();
    trafficLight.turnOff();

    expect(trafficLight.status).toEqual("OFF");
  });

  it("should have the ON status when turned ON", () => {
    trafficLight.turnOn();

    expect(trafficLight.status).toEqual("ON");
  });

  it("should display the color RED when turned ON", () => {
    trafficLight.turnOn();

    expect(trafficLight.color.value).toEqual("RED");
  });
});
