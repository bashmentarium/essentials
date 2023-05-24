export class TicTacToe {
  board: string[][];
  status: string;

  constructor() {
    this.board = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ];
    this.status = "stopped";
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
