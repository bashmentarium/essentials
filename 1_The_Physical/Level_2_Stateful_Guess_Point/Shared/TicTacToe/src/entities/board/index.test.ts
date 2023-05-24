import { TicTacToeBoard } from "./index";

describe("Tic Tac Toe Board", () => {
  it("should create a new 3 x 3 Board", () => {
    const board = TicTacToeBoard.create();

    expect(board).toBeDefined();
  });
});
