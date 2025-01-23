import React, { useState, useEffect } from 'react';

interface CellProps {
  value: string | null;
  index: number;
  onClick: (index: number) => void;
}

const Cell: React.FC<CellProps> = ({ value, index, onClick }) => {
  debugger
  return (
    value ? (value === 'X' ? (<div
      className="square x"
      onClick={() => onClick(index)}
    />) : (<div
      className="square o"
      onClick={() => onClick(index)}
    />)) : 
    (<div
      className="square"
      onClick={() => onClick(index)}
    />)
    )
}

export default Cell;
