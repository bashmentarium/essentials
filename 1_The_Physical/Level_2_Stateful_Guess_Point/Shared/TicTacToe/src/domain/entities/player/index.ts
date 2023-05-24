export class Player {
  symbol: string;

  private constructor(symbol: string) {
    this.symbol = symbol;
  }

  public static create(symbol: string) {
    return new Player(symbol);
  }
}
