import { Color } from "../color";
import { TrafficLight } from "../traffic_light";

export class Coordinator {
  private timer: NodeJS.Timeout | null = null;
  private trafficLight: TrafficLight | undefined;
  private seconds: number = 0;

  private constructor(trafficLight?: TrafficLight | undefined) {
    this.trafficLight = trafficLight;
  }

  get secondsPassed(): number {
    return this.seconds;
  }

  private start(): void {
    const color = Color.create("RED");
    this.startTrafficLight(color);
  }

  static createAndStart(trafficLight: TrafficLight): Coordinator {
    const coordinator = new Coordinator(trafficLight);
    coordinator.start();
    return coordinator;
  }

  private startTrafficLight(color: Color): void {
    if (this.trafficLight) {
      this.trafficLight.turnOn(color);
      this.startTimer();
    }
  }

  private startTimer(): void {
    this.timer = setInterval(() => {
      this.seconds++;
    }, 1000);
  }

  static stopTimer(coordinator: Coordinator): void {
    clearInterval(coordinator.secondsPassed);
  }
}
