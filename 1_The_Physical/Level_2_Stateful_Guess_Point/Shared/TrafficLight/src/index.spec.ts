import { TrafficLight } from "./index";

describe("Traffic Light", () => {
  let trafficLight: TrafficLight;

  beforeEach(() => {
    trafficLight = new TrafficLight();
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
});
