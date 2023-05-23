import { TicTacToe } from "./index";

describe("Tic Tac Toe game", () => {
  it("should exist", () => {
    const ticTacToe = new TicTacToe();
    expect(ticTacToe).toBeDefined();
  });
});
