import React from "react";
import "./ScoreBoard.css";

const ScoreBoard = ({ xScore, oScore, xPlaying, tie }) => {
  return (
    <div className="scoreboard">
      <span className={`x-score ${xPlaying === true ? "xScoreboard" : ""}`}>
        X - {xScore}
      </span>
      <span className={`o-score ${xPlaying === false ? "oScoreboard" : ""}`}>
        O - {oScore}
      </span>
      <span className={`o-tie ${tie > 0 ? "oTie" : ""}`}>Tie - {tie}</span>
    </div>
  );
};

export default ScoreBoard;
