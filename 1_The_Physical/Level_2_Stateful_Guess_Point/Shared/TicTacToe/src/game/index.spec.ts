import { TicTacToe } from "./index";

describe("Tic Tac Toe Game", () => {
  it("should have a 3 x 3 board ", () => {
    const ticTacToe = new TicTacToe();

    expect(ticTacToe.board).toBeDefined();
    expect(ticTacToe.board.length).toBe(3);
    expect(ticTacToe.board[0].length).toBe(3);
    expect(ticTacToe.board[1].length).toBe(3);
    expect(ticTacToe.board[2].length).toBe(3);
  });
});
