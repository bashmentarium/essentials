import { GRID as TIC_TAC_TOE_GRID } from "../../utils";

export interface Board {
  grid: string[][];
  size: number;
}

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

  public applyMove(): void {
    // Apply the move to the board
  }

  public getBoardState(): string[][] {
    return this.grid.map((row) => [...row]);
  }

  reset(): void {
    this.grid = TIC_TAC_TOE_GRID;
  }
}
