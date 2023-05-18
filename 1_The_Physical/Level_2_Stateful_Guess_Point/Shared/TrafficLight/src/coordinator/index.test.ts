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

  it("should know that up until the end of the 30th second, the Traffic Light should show 'GREEN'", () => {
    expect(trafficLight.colorOnDisplay).toEqual(greenColor.value);
  });

  it("after the 31st second, the TrafficLight should automatically receive and show 'YELLOW'", () => {
    jest.advanceTimersByTime(2000);
    expect(coordinator.getSecondsPassed()).toEqual(31);

    expect(trafficLight.colorOnDisplay).toEqual(yellowColor.value);

    expect(trafficLight.colorOnDisplay).not.toEqual(greenColor.value);
    expect(trafficLight.colorOnDisplay).not.toEqual(redColor.value);
  });

  it("after the 35th second, the Traffic Light should automatically receive and show 'RED'", () => {
    jest.advanceTimersByTime(5000);
    expect(coordinator.getSecondsPassed()).toEqual(36);

    expect(trafficLight.colorOnDisplay).toEqual(redColor.value);

    expect(trafficLight.colorOnDisplay).not.toEqual(yellowColor.value);
    expect(trafficLight.colorOnDisplay).not.toEqual(greenColor.value);
  });

  it("after another 25 seconds, the Traffic Light should automatically receive and show 'GREEN'", () => {
    jest.advanceTimersByTime(25000);
    expect(coordinator.getSecondsPassed()).toEqual(61);

    expect(trafficLight.colorOnDisplay).toEqual(greenColor.value);

    expect(trafficLight.colorOnDisplay).not.toEqual(yellowColor.value);
    expect(trafficLight.colorOnDisplay).not.toEqual(redColor.value);
  });

  it("after another 125 seconds, the Traffic Light should automatically receive and show 'RED'", () => {
    jest.advanceTimersByTime(65000);
    expect(coordinator.getSecondsPassed()).toEqual(126);

    expect(trafficLight.colorOnDisplay).toEqual(greenColor.value);

    expect(trafficLight.colorOnDisplay).not.toEqual(yellowColor.value);
    expect(trafficLight.colorOnDisplay).not.toEqual(redColor.value);
  });

  afterAll(() => {
    Coordinator.stop(coordinator);
  });
});
