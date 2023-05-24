export class TicTacToe {
  board: string[][];
  status: string;

  private constructor() {
    this.board = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ];
    this.status = "stopped";
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
