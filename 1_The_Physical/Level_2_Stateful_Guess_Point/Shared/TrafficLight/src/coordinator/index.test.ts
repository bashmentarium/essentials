import { Coordinator } from "./index";
import { TrafficLight } from "../traffic_light";
import { Color, ColorOptions } from "../color";

describe("Coordinator", () => {
  let trafficLight: TrafficLight;
  let coordinator: Coordinator;

  let redColor: Color = Color.create(ColorOptions.RED);
  let yellowColor: Color = Color.create(ColorOptions.YELLOW);
  let greenColor: Color = Color.create(ColorOptions.GREEN);

  jest.useFakeTimers();

  beforeAll(() => {
    trafficLight = TrafficLight.create();
    coordinator = Coordinator.createAndStart(trafficLight);
    trafficLight.turnOn(redColor);
  });

  it("should have a 'secondsPassed' property", () => {
    expect(coordinator.getSecondsPassed).toBeDefined();
  });

  it("should know that 29 seconds have passed", () => {
    jest.advanceTimersByTime(29000);

    expect(coordinator.getSecondsPassed()).toEqual(29);
  });

  it("should know that up until 30 seconds, the Traffic Light should show 'RED'", () => {
    expect(trafficLight.colorOnDisplay).toEqual(redColor.value);
  });

  it("after 30 seconds, the TrafficLight should automatically receive and show 'YELLOW'", () => {
    jest.advanceTimersByTime(1000);

    expect(trafficLight.colorOnDisplay).toEqual(yellowColor.value);
  });

  afterAll(() => {
    Coordinator.stop(coordinator);
  });
});
