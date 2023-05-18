import { Color } from "../color";
import { TrafficLight } from "../traffic_light";

export class Coordinator {
  private timer: NodeJS.Timeout | null = null;
  private trafficLight: TrafficLight;
  private seconds: number = 0;

  private constructor(trafficLight: TrafficLight) {
    this.trafficLight = trafficLight;
  }

  static create(trafficLight: TrafficLight): Coordinator {
    return new Coordinator(trafficLight);
  }

  static stop(coordinator: Coordinator): void {
    clearInterval(coordinator.seconds);
    coordinator.seconds = 0;
  }

  get secondsPassed(): number {
    return this.seconds;
  }

  startTrafficLight(): void {
    const color = Color.create("RED");
    this.trafficLight.turnOn(color);
    this.startTimer();
  }

  private startTimer(): void {
    this.timer = setInterval(() => {
      this.seconds++;
    }, 1000);
  }
}
