import { useState } from "react";
import "./App.css";
import Board from "./Components/Board";
import Modal from "./Components/Modal";
import ScoreBoard from "./Components/ScoreBoard";

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xPlaying, setXPlaying] = useState(true);
  const [xScore, setXScore] = useState(0);
  const [oScore, setOScore] = useState(0);
  const [tie, setTie] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const WIN_CONDITIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const handleBoxClick = (boxId) => {
    const updatedBoard = board.map((value, idx) => {
      if (idx === boxId) {
        return xPlaying === true ? "X" : "O";
      } else {
        return value;
      }
    });

    setBoard(updatedBoard);
    const winner = checkWinner(updatedBoard);
    setXPlaying(!xPlaying);

    if (winner) {
      if (winner === "X") {
        setXScore(xScore + 1);
        setGameOver(true);
      } else {
        setOScore(oScore + 1);
        setGameOver(true);
      }
    }

    let filled = true;
    updatedBoard.map((item) => {
      if (item === null) {
        filled = false;
        return filled;
      }
      return null;
    });

    if (filled && winner !== "X" && winner !== "O") {
      filled = true;
      setTie(tie + 1);
      return filled;
    }
  };

  const checkWinner = (board) => {
    for (let i = 0; i < WIN_CONDITIONS.length; i++) {
      const [x, y, z] = WIN_CONDITIONS[i];

      // Iterate through win conditions and check if either player satisfies them
      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        return board[x];
      }
    }
  };

  const resetGame = () => {
    setGameOver(false);
    setBoard(Array(9).fill(null));
  };

  const resetAll = () => {
    setGameOver(false);
    setXScore(0);
    setOScore(0);
    setTie(0);
    setBoard(Array(9).fill(null));
  };

  return (
    <div className="App">
      <ScoreBoard
        xScore={xScore}
        oScore={oScore}
        xPlaying={xPlaying}
        tie={tie}
      />
      <Board
        board={board}
        onClick={gameOver === true ? resetGame : handleBoxClick}
      />
      <div className="buttonR">
        <button onClick={resetGame}>Play Again</button>
        <button onClick={resetAll}>Reset</button>
      </div>

      <button className="gameOver" onClick={() => setShowModal(!showModal)}>
        Game Over
      </button>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        xScore={xScore}
        oScore={oScore}
        resetAll={resetAll}
      />
    </div>
  );
}

export default App;
