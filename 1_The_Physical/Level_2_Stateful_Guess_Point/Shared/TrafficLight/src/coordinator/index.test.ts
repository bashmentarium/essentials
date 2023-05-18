import { Coordinator } from "./index";
import { TrafficLight } from "../traffic_light";
import { Color, ColorOptions } from "../color";

describe("Coordinator", () => {
  let trafficLight: TrafficLight;
  let coordinator: Coordinator;

  let redColor: Color = Color.create(ColorOptions.RED);
  let yellowColor: Color = Color.create(ColorOptions.YELLOW);
  let greenColor: Color = Color.create(ColorOptions.GREEN);

  beforeAll(() => {
    trafficLight = TrafficLight.create();
    coordinator = Coordinator.createAndStart(trafficLight);
    trafficLight.turnOn(redColor);
  });

  it("should have a 'secondsPassed' property", () => {
    expect(coordinator.getSecondsPassed).toBeDefined();
  });

  afterAll(() => {
    Coordinator.stopTimer(coordinator);
  });
});
