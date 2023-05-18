import { Coordinator } from "./index";
import { TrafficLight } from "../traffic_light";
import { Color, ColorOptions } from "../color";

describe("Coordinator", () => {
  it("should have a 'secondsPassed' property", () => {
    const trafficLight = TrafficLight.create();
    const coordinator = Coordinator.createAndStart(trafficLight);

    const redColor = Color.create(ColorOptions.RED);
    trafficLight.turnOn(redColor);

    expect(coordinator.secondsPassed).toBeDefined();
  });

  it("should pass 'YELLOW' to Traffic Light after 30 seconds", () => {
    const trafficLight = TrafficLight.create();
    const coordinator = Coordinator.createAndStart(trafficLight);

    const redColor = Color.create(ColorOptions.RED);
    const yellowColor = Color.create(ColorOptions.YELLOW);

    trafficLight.turnOn(redColor);

    expect(coordinator.secondsPassed).toEqual(30);
  });
});
