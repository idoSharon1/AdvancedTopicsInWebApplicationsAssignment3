import React, { useState } from "react";
import Cell from "./Cell";
import { calculateWinner } from "../utils/algorithem";
import { gameCubeState } from "../utils/types";

const Board: React.FC = () => {
  const [board, setBoard] = useState<gameCubeState[]>(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState<boolean>(true);
  const [winner, setWinner] = useState<gameCubeState | "draw">(null);
  const [counter, setCounter] = useState<number>(0);

  const handleClick = (index: number): void => {
    if (board[index] || winner) return;

    const newBoard: gameCubeState[] = board.slice();
    newBoard[index] = counter % 2 == 0 ? "x" : "o";
    setCounter(counter + 1);
    setBoard(newBoard);
    setIsXNext(!isXNext);

    const gameWinner = calculateWinner(newBoard);
    if (gameWinner == null && counter == 8) {
      setWinner("draw");
    } else {
      setWinner(calculateWinner(newBoard));
    }
  };

  const renderCell = (index: number) => {
    return (
      <Cell
        key={index}
        value={board[index]}
        index={index}
        onClick={handleClick}
      />
    );
  };

  return (
    <div>
      {winner ? (
        winner == "draw" ? (
          <h2>Draw</h2>
        ) : (
          <h2>Winner: {winner}</h2>
        )
      ) : (
        <h2>Next Player: {isXNext ? "X" : "O"}</h2>
      )}
      <div className="board">{board.map((_, i) => renderCell(i))}</div>
      <button
        onClick={() => {
          setBoard(Array(9).fill(null));
          setWinner(null);
        }}
      >
        Restart
      </button>
    </div>
  );
};

export default Board;
