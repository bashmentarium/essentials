import { TicTacToeBoard } from "../board";
import { Move } from "../move";
import { Player } from "../player";
import { Board } from "../../interfaces";

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
    const move = new Move(row, column);

    this.board.applyMove(move, this.currentPlayer.symbol);
  }

  getCurrentPlayer(): Player {
    return this.currentPlayer;
  }
}
