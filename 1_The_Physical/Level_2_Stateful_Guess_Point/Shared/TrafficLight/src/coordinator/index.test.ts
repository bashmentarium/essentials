import { Coordinator } from "./index";
import { TrafficLight } from "../traffic_light";
import { Color, ColorOptions } from "../color";

describe("Coordinator", () => {
  it("should have a 'secondsPassed' property", () => {
    const redColor = Color.create(ColorOptions.RED);
    const trafficLight = TrafficLight.create();
    const coordinator = Coordinator.create(trafficLight);

    trafficLight.turnOn(redColor);

    expect(coordinator.secondsPassed).toBeDefined();
  });

  it("should start the Traffic Light with the color RED", () => {
    const redColor = Color.create(ColorOptions.RED);
    const trafficLight = TrafficLight.create();
    const coordinator = Coordinator.create(trafficLight);

    trafficLight.turnOn(redColor);

    expect(trafficLight.colorOnDisplay).toEqual(ColorOptions.RED);
  });
});
