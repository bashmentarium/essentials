export class Coordinator {
  private constructor() {}

  static create(): Coordinator {
    return new Coordinator();
  }
}
