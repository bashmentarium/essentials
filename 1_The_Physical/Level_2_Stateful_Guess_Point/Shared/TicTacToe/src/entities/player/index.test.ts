import { Player } from "./index";

describe("Player", () => {
  it("should be defined", () => {
    const player = Player.create("X");

    expect(player).toBeDefined();
  });
});
