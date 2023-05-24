import { TicTacToeBoard } from "../board";
import { Move } from "../move";
import { Player } from "../player";
import { Board } from "../../interfaces";

export class Game {
  private board: Board;
  private playerX: Player;
  private playerO: Player;
  private currentPlayer: Player;
  status: string;

  private constructor() {
    this.board = TicTacToeBoard.create();
    this.playerX = Player.create("X");
    this.playerO = Player.create("O");
    this.status = "stopped";
    this.currentPlayer = Player.create("X");
  }

  public static create() {
    return new Game();
  }

  public start() {
    this.status = "started";
    this.currentPlayer = this.playerX; // Player X starts the game
  }

  public getBoard(): Board {
    return this.board;
  }

  public stop() {
    this.status = "stopped";
  }

  public makeMove(row: number, column: number) {
    if (this.status !== "started" || this.currentPlayer === null) {
      throw new Error("Game is not in progress.");
    }

    const move = new Move(row, column);

    if (this.board.applyMove(move, this.currentPlayer.symbol)) {
      this.checkForWinner();
      this.switchCurrentPlayer();
    }
  }

  private switchCurrentPlayer() {
    if (this.currentPlayer === this.playerX) {
      this.currentPlayer = this.playerO;
    } else {
      this.currentPlayer = this.playerX;
    }
  }

  private checkForWinner() {
    const boardState = this.board.getBoardState();
  }

  getCurrentPlayer(): Player {
    return this.currentPlayer;
  }
}
