import { TicTacToeBoard } from "./index";
import { GRID } from "../../../utils";
import { Move } from "../move";

describe("Tic Tac Toe Board", () => {
  let board: TicTacToeBoard;

  beforeEach(() => {
    board = TicTacToeBoard.create();
  });

  it("should create a new Board", () => {
    expect(board).toBeDefined();
  });

  it("should return the board state", () => {
    expect(board.getBoardState()).toEqual(GRID);
  });

  it("should have a reset() method in case game is over", () => {
    board.reset();

    expect(board.getBoardState()).toEqual(GRID);
  });

  it("should be able to apply a move", () => {
    const move = new Move(0, 0);

    board.applyMove(move, "X");

    expect(board.getBoardState()).toEqual([
      ["X", "", ""],
      ["", "", ""],
      ["", "", ""],
    ]);
  });
});
