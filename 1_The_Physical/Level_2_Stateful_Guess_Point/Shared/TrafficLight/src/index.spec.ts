import { TrafficLight } from "./index";

describe("Traffic Light", () => {
  it("should have the OFF status when launched", () => {
    const trafficLight = new TrafficLight();

    expect(trafficLight.getStatus()).toEqual("OFF");
  });
});
