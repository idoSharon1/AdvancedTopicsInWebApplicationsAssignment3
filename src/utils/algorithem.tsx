import { gameCubeState } from "./types";

const winningLines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export function calculateWinner(cellArr: gameCubeState[]) {
  for (let i = 0; i < winningLines.length; i++) {
    const [a, b, c] = winningLines[i];
    if (cellArr[a] && cellArr[a] === cellArr[b] && cellArr[a] === cellArr[c]) {
      return cellArr[a]!;
    }
  }
  return null;
}
