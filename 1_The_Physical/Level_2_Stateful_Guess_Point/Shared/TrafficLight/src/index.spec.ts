import { TrafficLight } from "./index";

describe("Traffic Light", () => {
  it("should have the OFF status when launched", () => {
    const trafficLight = new TrafficLight();

    expect(trafficLight.status).toEqual("OFF");
  });

  it("can be turned ON", () => {
    const trafficLight = new TrafficLight();

    trafficLight.turnOn();

    expect(trafficLight.status).toEqual("ON");
  });

  it("can be turned OFF", () => {
    const trafficLight = new TrafficLight();

    trafficLight.turnOn();
    trafficLight.turnOff();

    expect(trafficLight.status).toEqual("OFF");
  });
});
