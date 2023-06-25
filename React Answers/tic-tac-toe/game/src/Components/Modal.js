import React from "react";
import "./Modal.css";

const Modal = ({ showModal, setShowModal, xScore, oScore, resetAll }) => {
  if (showModal === true) {
    return (
      <div className="modalBackground">
        <div className="modalContainer">
          <span className="close" onClick={() => setShowModal(false)}>
            Close
          </span>
          <div className="modalContent">
            <p>Winner - {xScore > oScore ? "X wins" : "O wins"} </p>
            <button
              onClick={() => {
                resetAll();
                setShowModal(false);
              }}
            >
              Restart
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Modal;
