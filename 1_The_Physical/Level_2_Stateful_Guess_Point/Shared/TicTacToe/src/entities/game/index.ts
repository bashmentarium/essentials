import { TicTacToeBoard, Board } from "../board";

export class Game {
  private board: Board;
  status: string;
  playerX: string;
  playerO: string;

  private constructor() {
    this.board = TicTacToeBoard.create();
    this.status = "stopped";
    this.playerO = "O";
    this.playerX = "X";
  }

  public static create() {
    return new Game();
  }

  public start() {
    this.status = "started";
  }

  public getBoard(): Board {
    return this.board;
  }

  public stop() {
    this.status = "stopped";
  }

  public makeMove() {}
}
