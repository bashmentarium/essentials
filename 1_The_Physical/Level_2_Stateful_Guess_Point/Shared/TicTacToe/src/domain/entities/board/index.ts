import { Board } from "../../interfaces/index";
import { Move } from "../move";

import { GRID as TIC_TAC_TOE_GRID } from "../../../utils";

export class TicTacToeBoard implements Board {
  grid: string[][];
  size: number;

  private constructor(size: number) {
    this.size = size;
    this.grid = TIC_TAC_TOE_GRID;
    this.reset();
  }

  public static create() {
    return new TicTacToeBoard(3);
  }

  public applyMove(move: Move, playerSymbol: string): boolean {
    if (!move.isValid(this)) {
      return false;
    }

    const row = move.getRow();
    const column = move.getColumn();

    this.grid[row][column] = playerSymbol;
    return true;
  }

  public getBoardState(): string[][] {
    return this.grid;
  }

  reset(): void {
    this.grid = TIC_TAC_TOE_GRID;
  }
}
