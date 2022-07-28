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
    document.getElementById("turn-display").classList.add("black-text");
    document.getElementById("turn-display").classList.remove("white-text");
    document.body.classList.add("whites-turn");
    document.body.classList.remove("blacks-turn");
    document.getElementById("display-taken-pieces").classList.add("black-text");
    document
      .getElementById("display-taken-pieces")
      .classList.remove("white-text");
  } else if (App.WhitesTurn === false) {
    BlackPieces.forEach((black) => black.classList.remove("not-clickable"));
    WhitePieces.forEach((white) => white.classList.add("not-clickable"));
    document.getElementById("turn-display").innerHTML = "Black's turn";
    document.getElementById("turn-display").classList.remove("black-text");
    document.getElementById("turn-display").classList.add("white-text");
    document.body.classList.add("blacks-turn");
    document.body.classList.remove("whites-turn");
    document
      .getElementById("display-taken-pieces")
      .classList.remove("black-text");
    document.getElementById("display-taken-pieces").classList.add("white-text");
  }
};

export default Turns;
