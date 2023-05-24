type PlayerSymbol = "X" | "O";

export class Player {
  symbol: PlayerSymbol;

  private constructor(symbol: PlayerSymbol) {
    this.symbol = symbol;
  }

  public static create(symbol: PlayerSymbol): Player {
    return new Player(symbol);
  }
}
