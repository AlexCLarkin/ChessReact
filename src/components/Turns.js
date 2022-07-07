import React from "react";

const Turns = () => {
  var WhitesTurn = true;
  var BlackPieces = document.querySelectorAll(
    ".black-pawn, .black-bishop, .black-king, .black-queen, .black-rook, .black-knight"
  );
  var WhitePieces = document.querySelectorAll(
    ".white-pawn, .white-bishop, .white-king, .white-queen, .white-rook, .white-knight"
  );
  if (WhitesTurn === true) {
    BlackPieces.forEach((black) => black.classList.add("not-clickable"));
    WhitePieces.forEach((white) => white.classList.remove("not-clickable"));
  } else if (WhitesTurn === false) {
    BlackPieces.forEach((black) => black.classList.remove("not-clickable"));
    WhitePieces.forEach((white) => white.classList.add("not-clickable"));
  }
};

export default Turns;
