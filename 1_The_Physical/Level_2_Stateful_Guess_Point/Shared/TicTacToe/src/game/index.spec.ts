import { TicTacToe } from "./index";

describe("Tic Tac Toe Game", () => {
  it("should be able to have a 'start' method", () => {
    const game = new TicTacToe();

    game.start();

    expect(game.status).toEqual("started");
  });

  it("should be able to have a 'stop' method", () => {
    const game = new TicTacToe();

    game.stop();

    expect(game.status).toEqual("stopped");
  });

  it("should have a 3 x 3 board ", () => {
    const game = new TicTacToe();

    expect(game.board).toBeDefined();
    expect(game.board.length).toBe(3);
    expect(game.board[0].length).toBe(3);
    expect(game.board[1].length).toBe(3);
    expect(game.board[2].length).toBe(3);
  });
});
