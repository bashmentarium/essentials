import { Move } from "../entities/move";

export interface Board {
  grid: string[][];
  size: number;
  applyMove(move: Move, playerSymbol: string): boolean;
  getBoardState(): string[][];
  reset(): void;
}
