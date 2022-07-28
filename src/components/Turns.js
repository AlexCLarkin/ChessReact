import React from "react";
import App from "./App";

const Turns = () => {
  var BlackPieces = document.querySelectorAll(
    ".black-pawn, .black-bishop, .black-king, .black-queen, .black-rook, .black-knight"
  );
  var WhitePieces = document.querySelectorAll(
    ".white-pawn, .white-bishop, .white-king, .white-queen, .white-rook, .white-knight"
  );
  if (App.WhitesTurn === true) {
    BlackPieces.forEach((black) => black.classList.add("not-clickable"));
    WhitePieces.forEach((white) => white.classList.remove("not-clickable"));
    document.getElementById("turn-display").innerHTML = "White's turn";
  } else if (App.WhitesTurn === false) {
    BlackPieces.forEach((black) => black.classList.remove("not-clickable"));
    WhitePieces.forEach((white) => white.classList.add("not-clickable"));
    document.getElementById("turn-display").innerHTML = "Black's turn";
  }
};

export default Turns;
