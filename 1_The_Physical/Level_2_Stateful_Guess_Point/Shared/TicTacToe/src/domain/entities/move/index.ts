import { TicTacToeBoard } from "../board";

export class Move {
  private row: number;
  private column: number;

  constructor(row: number, column: number) {
    this.row = row;
    this.column = column;
  }

  public isValid(board: TicTacToeBoard): boolean {
    const boardState = board.getBoardState();
    const numRows = boardState.length;
    const numColumns = boardState[0].length;

    // Check if the row and column are within the bounds of the board
    if (this.row < 0 || this.row >= numRows) {
      return false;
    }

    if (this.column < 0 || this.column >= numColumns) {
      return false;
    }

    // Check if the target cell is empty
    return boardState[this.row][this.column] === "";
  }

  public getRow(): number {
    return this.row;
  }

  public getColumn(): number {
    return this.column;
  }
}
