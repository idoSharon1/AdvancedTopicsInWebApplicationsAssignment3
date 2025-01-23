type Cell = "x" | "o";

interface ICheckWhoWin {
  cellArr: Cell[3][3];
}

export function checkWhoWin({ cellArr }: ICheckWhoWin) {
  //Checking nain diagonal
  if (cellArr[0][0] == cellArr[1][1] && cellArr[1][1] == cellArr[2][2]) {
    return true;
  }
  //Checking secondary diagonal
  if (cellArr[2][0] == cellArr[1][1] && cellArr[1][1] == cellArr[2][0]) {
    return true;
  }

  //Checking rows and colums
  for (let index = 0; index < 3; index++) {
    //Checking rows
    if (
      cellArr[index][0] == cellArr[index][1] &&
      cellArr[index][1] == cellArr[index][2]
    ) {
      return true;
    }

    //Checking colums
    if (
      cellArr[0][index] == cellArr[1][index] &&
      cellArr[1][index] == cellArr[2][index]
    ) {
      return true;
    }
  }

  //if not found
  return false;
}
