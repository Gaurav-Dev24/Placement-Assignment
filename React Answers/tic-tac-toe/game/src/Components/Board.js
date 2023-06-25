import React from "react";
import "./Board.css";
import Box from "./Box";

const Board = ({ board, onClick }) => {
  return (
    <div className="board">
      {board.map((item, idx) => (
        <Box
          key={idx}
          value={item}
          onClick={() => item == null && onClick(idx)}
        />
      ))}
    </div>
  );
};

export default Board;
