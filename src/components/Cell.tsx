import React, { useState, useEffect } from "react";
import { gameCubeState } from "../utils/types";

interface CellProps {
  value: gameCubeState;
  index: number;
  onClick: (index: number) => void;
}

const Cell: React.FC<CellProps> = ({ value, index, onClick }) => {
  return value ? (
    value === "x" ? (
      <div className="square x" onClick={() => onClick(index)} />
    ) : (
      <div className="square o" onClick={() => onClick(index)} />
    )
  ) : (
    <div className="square" onClick={() => onClick(index)} />
  );
};

export default Cell;
