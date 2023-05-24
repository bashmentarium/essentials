import { TicTacToeBoard, Board } from "../board";
import { Player } from "../player";

export class Game {
  private board: Board;
  private currentPlayer: Player;
  status: string;

  private constructor() {
    this.board = TicTacToeBoard.create();
    this.status = "stopped";
    this.currentPlayer = Player.create("X");
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

  public makeMove(row: number, column: number) {
    const move = new Move(row, column, this.currentPlayer);
    this.board.applyMove(move);
  }
}
