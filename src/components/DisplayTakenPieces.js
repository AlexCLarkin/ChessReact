import react from "react";

const DisplayTakenPieces = () => {
  var WhitePieces = "";

  let countWhitePawns = document.querySelectorAll(".white-pawn").length;
  if (countWhitePawns === 7) {
    document.getElementById("white-pawns-display").innerHTML = "♙";
  }
  if (countWhitePawns === 6) {
    document.getElementById("white-pawns-display").innerHTML = "♙♙";
  }
  if (countWhitePawns === 5) {
    document.getElementById("white-pawns-display").innerHTML = "♙♙♙";
  }
  if (countWhitePawns === 4) {
    document.getElementById("white-pawns-display").innerHTML = "♙♙♙♙";
  }
  if (countWhitePawns === 3) {
    document.getElementById("white-pawns-display").innerHTML = "♙♙♙♙♙";
  }
  if (countWhitePawns === 2) {
    document.getElementById("white-pawns-display").innerHTML = "♙♙♙♙♙♙";
  }
  if (countWhitePawns === 1) {
    document.getElementById("white-pawns-display").innerHTML = "♙♙♙♙♙♙♙";
  }
  if (countWhitePawns === 0) {
    document.getElementById("white-pawns-display").innerHTML = "♙♙♙♙♙♙♙♙";
  }

  let countWhiteQueens = document.querySelectorAll(".white-queen").length;
  if (countWhiteQueens === 0) {
    WhitePieces = WhitePieces + "♕";
    document.getElementById("white-pieces-display").innerHTML = WhitePieces;
  }

  let countWhitekings = document.querySelectorAll(".white-king").length;
  if (countWhitekings === 0) {
    WhitePieces = WhitePieces + "♔";
    document.getElementById("white-pieces-display").innerHTML = WhitePieces;
  }

  let countWhiteBishops = document.querySelectorAll(".white-bishop").length;
  if (countWhiteBishops === 1) {
    WhitePieces = WhitePieces + "♗";
    document.getElementById("white-pieces-display").innerHTML = WhitePieces;
  }
  if (countWhiteBishops === 0) {
    WhitePieces = WhitePieces + "♗♗";
    document.getElementById("white-pieces-display").innerHTML = WhitePieces;
  }

  let countWhiteKnights = document.querySelectorAll(".white-knight").length;
  if (countWhiteKnights === 1) {
    WhitePieces = WhitePieces + "♘";
    document.getElementById("white-pieces-display").innerHTML = WhitePieces;
  }
  if (countWhiteKnights === 0) {
    WhitePieces = WhitePieces + "♘♘";
    document.getElementById("white-pieces-display").innerHTML = WhitePieces;
  }

  let countWhiteRooks = document.querySelectorAll(".white-rook").length;
  if (countWhiteRooks === 1) {
    WhitePieces = WhitePieces + "♖";
    document.getElementById("white-pieces-display").innerHTML = WhitePieces;
  }
  if (countWhiteRooks === 0) {
    WhitePieces = WhitePieces + "♖♖";
    document.getElementById("white-pieces-display").innerHTML = WhitePieces;
  }
};

export default DisplayTakenPieces;
