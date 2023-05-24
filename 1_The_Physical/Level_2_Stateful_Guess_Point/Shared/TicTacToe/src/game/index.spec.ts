import { TicTacToe } from "./index";

describe("Tic Tac Toe Game", () => {
  let game: TicTacToe;

  beforeEach(() => {
    game = TicTacToe.create();
  });

  it("should be able to start a new game via the start() method", () => {
    game.start();

    expect(game.status).toEqual("started");
  });

  it("should be able to stop the game via the stop() method", () => {
    game.stop();

    expect(game.status).toEqual("stopped");
  });

  it("should have a 3 x 3 board ", () => {
    expect(game.board).toBeDefined();
    expect(game.board.length).toBe(3);
    expect(game.board[0].length).toBe(3);
    expect(game.board[1].length).toBe(3);
    expect(game.board[2].length).toBe(3);
  });

  it("should have a player X and player O", () => {
    expect(game.playerX).toEqual("X");
    expect(game.playerO).toEqual("O");
  });
});
