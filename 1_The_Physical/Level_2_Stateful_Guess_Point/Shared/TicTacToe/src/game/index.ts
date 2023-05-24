export class TicTacToe {
  board: string[][];
  status: string;
  playerX: string;
  playerO: string;

  private constructor() {
    this.board = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ];
    this.status = "stopped";
    this.playerO = "O";
    this.playerX = "X";
  }

  // make a factory method
  public static create() {
    return new TicTacToe();
  }

  public start() {
    this.board = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ];
    this.status = "started";
  }

  public stop() {
    this.board = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ];
    this.status = "stopped";
  }
}
