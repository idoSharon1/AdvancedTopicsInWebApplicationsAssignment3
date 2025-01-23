import React, { useState } from 'react';
import Cell from './Cell';

const lines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const Board: React.FC = () => {
  const [board, setBoard] = useState<(string | null)[]>(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState<boolean>(true);
  const [winner, setWinner] = useState<string | null>(null);

  const calculateWinner = (squares: (string | null)[]): string | null => {
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a]!;
      }
    }
    return null;
  };

  const handleClick = (index: number): void => {
    if (board[index] || winner) return;

    const newBoard = board.slice();
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);

    const gameWinner = calculateWinner(newBoard);
    setWinner(gameWinner);
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
      {winner ? <h2>Winner: {winner}</h2> : <h2>Next Player: {isXNext ? 'X' : 'O'}</h2>}
      <div className="board">
        {board.map((_, i) => renderCell(i))}
      </div>
      <button onClick={() => { setBoard(Array(9).fill(null)); setWinner(null); }}>
        Restart
      </button>
    </div>
  );
}

export default Board;
