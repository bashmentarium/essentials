import { Game } from "./index";

const initialBoard = {
  grid: [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ],
  size: 3,

  applyMove: expect.any(Function),
  getBoardState: expect.any(Function),
  reset: expect.any(Function),
};

describe("Tic Tac Toe Game", () => {
  let game: Game;

  beforeEach(() => {
    game = Game.create();
  });

  it("should be able to start a new game via the start() method", () => {
    game.start();

    expect(game.status).toEqual("started");
  });

  it("should be able to stop the game via the stop() method", () => {
    game.stop();

    expect(game.status).toEqual("stopped");
  });

  it("should have a board ", () => {
    expect(game.getBoard()).toEqual(initialBoard);
  });

  it("should have a currentPlayer property", () => {
    expect(game.getCurrentPlayer()).toEqual({ symbol: "X" });
  });

  it("should be able to let player X make a move after the game starts", () => {
    game.start();

    expect(game.status).toEqual("started");

    game.makeMove(0, 0);

    expect(game.getBoard().grid).toEqual([
      ["X", "", ""],
      ["", "", ""],
      ["", "", ""],
    ]);
  });
});
