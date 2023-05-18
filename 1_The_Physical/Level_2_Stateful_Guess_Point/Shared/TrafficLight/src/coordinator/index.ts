import { Color } from "../color";
import { TrafficLight } from "../traffic_light";

export class Coordinator {
  private _timer: NodeJS.Timeout | undefined;
  private _trafficLight: TrafficLight | undefined;
  private _secondsPassed: number = 0;

  private constructor(trafficLight?: TrafficLight | undefined) {
    this._trafficLight = trafficLight;
  }

  getSecondsPassed(): number | undefined {
    if (this._secondsPassed > 0) {
      return this._secondsPassed;
    }
  }

  static createAndStart(trafficLight: TrafficLight): Coordinator {
    const coordinator = new Coordinator(trafficLight);
    coordinator.start();
    return coordinator;
  }

  private start(): void {
    const color = Color.create("RED");
    this.startTrafficLight(color);
  }

  private startTrafficLight(color: Color): void {
    if (this._trafficLight) {
      this._trafficLight.turnOn(color);
      this.startTimer();
    }
  }

  private startTimer(): void {
    this._timer = setInterval(() => {
      this._secondsPassed++;
    }, 1000);
  }

  static stopTimer(coordinator: Coordinator): void {
    clearInterval(coordinator._timer);
  }
}
