import { TicTacToeBoard } from "./index";
import { GRID } from "../../../utils";
import { Move } from "../move";

describe("Tic Tac Toe Board", () => {
  it("should create a new 3 x 3 Board", () => {
    const board = TicTacToeBoard.create();

    expect(board).toBeDefined();
  });

  it("should return the board state", () => {
    const board = TicTacToeBoard.create();

    expect(board.getBoardState()).toEqual(GRID);
  });

  it("should have a reset() method in case game is over", () => {
    const board = TicTacToeBoard.create();

    board.reset();

    expect(board.getBoardState()).toEqual(GRID);
  });

  it("should be able to apply a move", () => {
    const board = TicTacToeBoard.create();
    const move = new Move(0, 0);

    board.applyMove(move, "X");

    expect(board.getBoardState()).toEqual([
      ["X", "", ""],
      ["", "", ""],
      ["", "", ""],
    ]);
  });
});
