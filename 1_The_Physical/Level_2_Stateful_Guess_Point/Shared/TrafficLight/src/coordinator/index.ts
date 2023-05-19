import { TrafficLight } from "../traffic_light";
import { secondsToColor } from "../utils/seconds-to-color";

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
    coordinator.startTrafficLight();
    return coordinator;
  }

  private startTrafficLight(): void {
    if (this._trafficLight) {
      this._trafficLight.turnOn();
      this.startTimer();
    }
  }

  private startTimer(): void {
    this._timer = setInterval(() => {
      this._secondsPassed++;
      this.changeTrafficLightColor();
    }, 1000);
  }

  static stop(coordinator: Coordinator): void {
    clearInterval(coordinator._timer);
    coordinator._secondsPassed = 0;
  }

  private changeTrafficLightColor(): void {
    const remainingSeconds = this._secondsPassed % 60;

    const colorBasedOnRemainingSeconds = secondsToColor(remainingSeconds);

    this._trafficLight &&
      this._trafficLight["changeColor"](colorBasedOnRemainingSeconds);
  }
}
